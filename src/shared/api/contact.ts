/**
 * Bogʻlanish shakli uchun client tomondagi fetch qatlami.
 *
 * Worker'dagi `POST /api/contact` bilan ishlaydi. Hech qachon exception
 * tashlamaydi — chaqiruvchi komponent faqat natija obyektini tekshiradi.
 */
import type { ContactErrors, ContactLocale, ContactPayload } from '@/shared/contact/schema';

export type SubmitContactResult =
  | { ok: true; id: string }
  /** Maydon boʻyicha xatolar — shakl ostida koʻrsatiladi. */
  | { ok: false; errors: ContactErrors }
  /** Umumiy xato (tarmoq, 429, 5xx) — bitta xabar sifatida koʻrsatiladi. */
  | { ok: false; message: string };

/** Soʻrov necha millisekundda uzilishi. */
const requestTimeoutMs = 15_000;

/** Client tomonda hosil boʻladigan umumiy xabarlar — server javobiga bogʻliq emas. */
const clientMessages: Record<ContactLocale, {
  generic: string;
  offline: string;
  invalid: string;
  rateLimited: string;
  server: string;
}> = {
  uz: {
    generic: 'Soʻrovni yuborib boʻlmadi. Birozdan soʻng qayta urinib koʻring yoki telefon orqali bogʻlaning.',
    offline: 'Server bilan bogʻlanib boʻlmadi. Internet aloqasini tekshiring va qayta urinib koʻring.',
    invalid: 'Kiritilgan maʼlumotlarda xatolik bor. Maydonlarni tekshiring.',
    rateLimited: 'Soʻrovlar juda tez-tez yuborilmoqda. Bir necha daqiqadan soʻng qayta urinib koʻring.',
    server: 'Serverda vaqtinchalik nosozlik. Birozdan soʻng qayta urinib koʻring.',
  },
  ru: {
    generic: 'Не удалось отправить заявку. Попробуйте позже или свяжитесь по телефону.',
    offline: 'Не удалось связаться с сервером. Проверьте интернет-соединение и попробуйте снова.',
    invalid: 'В заполненных данных есть ошибки. Проверьте поля формы.',
    rateLimited: 'Заявки отправляются слишком часто. Попробуйте через несколько минут.',
    server: 'Временный сбой на сервере. Попробуйте через некоторое время.',
  },
  en: {
    generic: 'The request could not be sent. Try again later or contact us by phone.',
    offline: 'Could not reach the server. Check your internet connection and try again.',
    invalid: 'Some fields contain errors. Please check the form.',
    rateLimited: 'Requests are being sent too often. Try again in a few minutes.',
    server: 'Temporary server issue. Please try again shortly.',
  },
};

/** Javob JSON boʻlmasa ham yiqilmaslik uchun xavfsiz parse. */
async function readJson(response: Response): Promise<unknown> {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

/** Javobdan maydon xatolarini ajratib oladi (faqat satr qiymatlar). */
function pickErrors(body: unknown): ContactErrors | null {
  if (typeof body !== 'object' || body === null) return null;
  const raw = (body as { errors?: unknown }).errors;
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) return null;

  const errors: ContactErrors = {};
  for (const [key, value] of Object.entries(raw as Record<string, unknown>)) {
    if (typeof value === 'string' && value.length > 0) errors[key] = value;
  }
  return Object.keys(errors).length > 0 ? errors : null;
}

/** Soʻrovni serverga yuboradi. Xato matnlari foydalanuvchi tilida qaytadi. */
export async function submitContact(
  payload: ContactPayload,
  locale: ContactLocale = 'en',
): Promise<SubmitContactResult> {
  const text = clientMessages[locale];
  let response: Response;

  try {
    // `?lang=` — body tahlil qilinmagan xatolarda ham server toʻgʻri tilda javob beradi.
    response = await fetch(`/api/contact?lang=${locale}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ ...payload, locale }),
      signal: AbortSignal.timeout(requestTimeoutMs),
    });
  } catch {
    // Tarmoq uzilgan yoki timeout — foydalanuvchiga tushunarli xabar.
    return { ok: false, message: text.offline };
  }

  const body = await readJson(response);

  if (response.ok) {
    const id = typeof body === 'object' && body !== null ? (body as { id?: unknown }).id : undefined;
    return { ok: true, id: typeof id === 'string' ? id : '' };
  }

  if (response.status === 422) {
    const errors = pickErrors(body);
    if (errors) return { ok: false, errors };
    return { ok: false, message: text.invalid };
  }

  if (response.status === 429) {
    return { ok: false, message: text.rateLimited };
  }

  if (response.status >= 500) {
    return { ok: false, message: text.server };
  }

  return { ok: false, message: text.generic };
}
