/**
 * CM Group saytining Cloudflare Worker'i.
 *
 * Ikki vazifasi bor:
 *  1. `/api/*` yoʻllari — sodda JSON API (health-check va bogʻlanish shakli).
 *  2. Qolgan barcha soʻrovlar — `ASSETS` bindingi orqali `dist/` dagi statik
 *     fayllar (SPA fallback wrangler.jsonc da sozlangan).
 */
import {
  validateContact,
  isHoneypotFilled,
  readLocale,
  type ContactLocale,
  type ContactPayload,
} from '../src/shared/contact/schema';

/**
 * Worker javoblaridagi umumiy xatolar ikki tilda.
 * Til `?lang=` parametridan olinadi — body tahlil qilinmagan holatlarda ham
 * foydalanuvchi oʻz tilida xabar koʻradi.
 */
interface WorkerMessages {
  method: string;
  contentType: string;
  tooLarge: string;
  badJson: string;
  rateLimited: string;
  notFound: string;
  server: string;
}

const workerMessages: Record<ContactLocale, WorkerMessages> = {
  uz: {
    method: 'Bu yoʻl uchun soʻrov metodi notoʻgʻri.',
    contentType: 'Soʻrov `application/json` boʻlishi kerak.',
    tooLarge: 'Soʻrov hajmi juda katta.',
    badJson: 'JSON tahlil qilinmadi.',
    rateLimited: 'Soʻrovlar juda tez-tez yuborilmoqda. Birozdan soʻng urinib koʻring.',
    notFound: 'Bunday API yoʻli topilmadi.',
    server: 'Kutilmagan server xatosi.',
  },
  ru: {
    method: 'Неверный метод запроса для этого адреса.',
    contentType: 'Запрос должен быть в формате `application/json`.',
    tooLarge: 'Слишком большой размер запроса.',
    badJson: 'Не удалось разобрать JSON.',
    rateLimited: 'Запросы отправляются слишком часто. Попробуйте через несколько минут.',
    notFound: 'Такой API-адрес не найден.',
    server: 'Непредвиденная ошибка сервера.',
  },
};

/** Soʻrov manzilidagi `?lang=` qiymati boʻyicha xabarlar toʻplami. */
function messagesFor(request: Request): WorkerMessages {
  const lang = new URL(request.url).searchParams.get('lang');
  return workerMessages[readLocale(lang)];
}

/** Worker'ga ulanadigan resurslar. KV va webhook ixtiyoriy — lokal dev'da boʻlmasligi mumkin. */
export interface Env {
  /** `dist/` dagi statik fayllar (wrangler.jsonc → assets.binding). */
  ASSETS: Fetcher;
  /** Soʻrovlarni saqlash va rate limit uchun KV. Yaratilmagan boʻlsa — oʻtkazib yuboriladi. */
  CONTACT_KV?: KVNamespace;
  /** Slack/Telegram/n8n webhook manzili (`wrangler secret put CONTACT_WEBHOOK_URL`). */
  CONTACT_WEBHOOK_URL?: string;
}

/** Body hajmi chegarasi — 16 KB. Undan kattasi rad etiladi. */
const maxBodyBytes = 16 * 1024;

/** Rate limit: bitta IP uchun 10 daqiqada koʻpi bilan 5 ta soʻrov. */
const rateLimitWindowSeconds = 10 * 60;
const rateLimitMaxRequests = 5;

/** Saqlangan soʻrov KV'da 90 kun turadi. */
const leadTtlSeconds = 90 * 24 * 60 * 60;

/** Har bir javob bir xil sarlavhalar bilan qaytadi: JSON + keshsiz. */
function json(body: unknown, status = 200, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      ...headers,
    },
  });
}

/** Metod mos kelmaganda — 405 va ruxsat etilgan metodlar roʻyxati. */
function methodNotAllowed(allow: string, message: string): Response {
  return json({ ok: false, error: message }, 405, { allow });
}

/** KV'da hisoblanadigan rate limit yozuvi. */
interface RateLimitRecord {
  count: number;
  /** Oyna tugash vaqti (unix, sekund). */
  reset: number;
}

/**
 * IP boʻyicha limitni tekshiradi. KV ulanmagan boʻlsa hech narsa qilmaydi —
 * lokal dev'da shakl baribir ishlashi kerak.
 */
async function checkRateLimit(
  env: Env,
  ip: string,
): Promise<{ allowed: true } | { allowed: false; retryAfter: number }> {
  const kv = env.CONTACT_KV;
  if (!kv) return { allowed: true };

  const key = `rate:contact:${ip}`;
  const now = Math.floor(Date.now() / 1000);

  let record: RateLimitRecord | null = null;
  try {
    record = await kv.get<RateLimitRecord>(key, 'json');
  } catch (error) {
    // KV oʻqishdagi nosozlik foydalanuvchini bloklamasligi kerak.
    console.error('rate-limit-read-failed', error);
    return { allowed: true };
  }

  if (!record || record.reset <= now) {
    record = { count: 0, reset: now + rateLimitWindowSeconds };
  }

  if (record.count >= rateLimitMaxRequests) {
    return { allowed: false, retryAfter: Math.max(1, record.reset - now) };
  }

  record.count += 1;

  try {
    await kv.put(key, JSON.stringify(record), {
      expirationTtl: Math.max(60, record.reset - now),
    });
  } catch (error) {
    console.error('rate-limit-write-failed', error);
  }

  return { allowed: true };
}

/** Soʻrovni KV'ga yozadi. KV yoʻq boʻlsa — jimgina oʻtkazib yuboradi. */
async function storeLead(env: Env, id: string, payload: ContactPayload, meta: Record<string, string>) {
  const kv = env.CONTACT_KV;
  if (!kv) return;

  const createdAt = new Date().toISOString();
  const key = `lead:${createdAt}:${id}`;

  try {
    await kv.put(key, JSON.stringify({ id, createdAt, ...payload, ...meta }), {
      expirationTtl: leadTtlSeconds,
    });
  } catch (error) {
    console.error('lead-store-failed', error);
  }
}

/** Webhook'ga xabar yuboradi. Xatolik foydalanuvchiga koʻrsatilmaydi. */
async function notifyWebhook(env: Env, id: string, payload: ContactPayload) {
  const url = env.CONTACT_WEBHOOK_URL;
  if (!url) return;

  const text = [
    'CM Group — yangi soʻrov',
    `Ism: ${payload.name}`,
    `Kompaniya: ${payload.company || '—'}`,
    `Aloqa: ${payload.contact}`,
    `Mavzu: ${payload.reason || '—'}`,
    '',
    payload.message,
  ].join('\n');

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      // `text` — Slack/Telegram/n8n uchun umumiy maydon; qolgani strukturali nusxa.
      body: JSON.stringify({ text, id, lead: payload }),
    });
    if (!response.ok) {
      console.error('webhook-bad-status', response.status);
    }
  } catch (error) {
    console.error('webhook-failed', error);
  }
}

/** `POST /api/contact` ishlovchisi. */
async function handleContact(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  const text = messagesFor(request);
  const locale = readLocale(new URL(request.url).searchParams.get('lang'));

  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.toLowerCase().includes('application/json')) {
    return json({ ok: false, error: text.contentType }, 415);
  }

  const declaredLength = Number(request.headers.get('content-length') ?? '0');
  if (Number.isFinite(declaredLength) && declaredLength > maxBodyBytes) {
    return json({ ok: false, error: text.tooLarge }, 413);
  }

  const rawBody = await request.text();
  if (new TextEncoder().encode(rawBody).byteLength > maxBodyBytes) {
    return json({ ok: false, error: text.tooLarge }, 413);
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(rawBody);
  } catch {
    return json({ ok: false, error: text.badJson }, 400);
  }

  // Clientga ishonmaymiz — validatsiya server tomonda qaytadan bajariladi.
  const result = validateContact(parsed, locale);
  if (!result.ok) {
    return json({ ok: false, errors: result.errors }, 422);
  }

  const payload = result.value;

  // Honeypot toʻldirilgan: bot. Jimgina muvaffaqiyat qaytaramiz, hech narsa saqlamaymiz.
  if (isHoneypotFilled(payload)) {
    return json({ ok: true, id: crypto.randomUUID() });
  }

  const ip = request.headers.get('cf-connecting-ip') ?? 'unknown';
  const limit = await checkRateLimit(env, ip);
  if (!limit.allowed) {
    return json(
      { ok: false, error: text.rateLimited },
      429,
      { 'retry-after': String(limit.retryAfter) },
    );
  }

  const id = crypto.randomUUID();
  const meta = {
    ip,
    userAgent: request.headers.get('user-agent') ?? '',
    country: request.headers.get('cf-ipcountry') ?? '',
  };

  await storeLead(env, id, payload, meta);
  // Yetkazish javobni kutib turmaydi — foydalanuvchi darhol tasdiq oladi.
  ctx.waitUntil(notifyWebhook(env, id, payload));

  return json({ ok: true, id });
}

/** `/api/*` yoʻllarining routeri. */
async function handleApi(
  request: Request,
  env: Env,
  ctx: ExecutionContext,
  pathname: string,
): Promise<Response> {
  if (pathname === '/api/health') {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return methodNotAllowed('GET, HEAD', messagesFor(request).method);
    }
    return json({ ok: true, ts: new Date().toISOString() });
  }

  if (pathname === '/api/contact') {
    if (request.method !== 'POST') return methodNotAllowed('POST', messagesFor(request).method);
    return handleContact(request, env, ctx);
  }

  return json({ ok: false, error: messagesFor(request).notFound }, 404);
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api' || url.pathname.startsWith('/api/')) {
      try {
        return await handleApi(request, env, ctx, url.pathname);
      } catch (error) {
        console.error('api-unhandled-error', error);
        return json({ ok: false, error: messagesFor(request).server }, 500);
      }
    }

    // API boʻlmagan soʻrov — statik fayllar (SPA fallback bilan).
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
