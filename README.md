# CM Group — korporativ sayt

Capital Management Group uchun ko'p sahifali marketing sayti.
Struktura, tipografika, rang va komponent mantig'i J.P. Morgan Asset Management
saytining dizayn tizimi tahlili asosida qurilgan; barcha matn, brend va vizual
elementlar CM Group'niki.

## Ishga tushirish

```bash
npm install
npm run dev        # http://localhost:5173
```

## Buyruqlar

| Buyruq | Vazifasi |
|---|---|
| `npm run dev` | Dev-server (HMR bilan) |
| `npm run build` | `tsc -b` + production build → `dist/` |
| `npm run preview` | Build + lokal Cloudflare Workers runtime (`wrangler dev`) |
| `npm run preview:vite` | Build natijasini oddiy statik serverda ochish |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc -b --force` (src + worker) |
| `npm run deploy` | Build + `wrangler deploy` |

## Stack

- **React 19** + **TypeScript 5.8** (`strict`, `noUncheckedIndexedAccess`)
- **Vite 7** — build va dev-server
- **Tailwind CSS 3.4** — design tokenlar `tailwind.config.ts` da
- **React Router 7** — `createBrowserRouter`, ikki tilli marshrutlar
- **UZ / RU / EN** — til manzilda: `/` oʻzbekcha, `/ru` ruscha, `/en` inglizcha
- **Cloudflare Workers** — hosting va `/api/*` qatlami (`worker/index.ts`,
  `wrangler.jsonc`); bog'lanish shakli validatsiyasi `src/shared/contact/`
  da client va Worker uchun umumiy.
- Sahifa kontenti `src/content/uz`, `src/content/ru` va `src/content/en` da —
  uchalasi ham `src/content/types.ts` dagi bitta `ContentBundle` tipiga
  bo'ysunadi. Katta ma'lumot
  qatlami qo'shilganda TanStack Query shu joyga o'rnatiladi.

## Struktura

```
src/
├─ app/            router va ildiz komponenti
├─ i18n/           til konfiguratsiyasi, kontekst, prefiksli havolalar
├─ content/
│  ├─ types.ts     ikkala til uchun umumiy tuzilish
│  ├─ shared.ts    tildan qat'i nazar bir xil (telefon, e-pochta, hamkorlar)
│  ├─ uz/          o'zbekcha matnlar
│  ├─ ru/          ruscha matnlar
│  └─ en/          inglizcha matnlar
├─ features/home/  bosh sahifa bloklari
├─ pages/          sahifa konteynerlari
├─ shared/
│  ├─ api/         server bilan aloqa (submitContact)
│  ├─ contact/     client va Worker uchun umumiy validatsiya
│  ├─ layout/      Header, Footer, RootLayout
│  └─ ui/          Section, Container, Button, ArrowLink, Media, Logo, PageHero,
│                  Reveal, Counter, Marquee, icons
└─ styles/         tokenlar va Tailwind qatlamlari

worker/            Cloudflare Worker: /api/health, /api/contact, ASSETS fallback
public/_headers    xavfsizlik sarlavhalari va kesh qoidalari
wrangler.jsonc     Workers konfiguratsiyasi
```

## Design tokenlar

Layout o'lchamlari CSS o'zgaruvchilarida (`src/styles/index.css`), qolgani
Tailwind konfigida:

| Token | Qiymat |
|---|---|
| Konteyner | `max-width: 1600px` |
| Sahifa padding | `48px` → `32px` (<1024) → `16px` (<768) |
| Section padding | `48px` → `40px` (<768) |
| Breakpointlar | `480 · 768 · 1024 · 1500` |
| Urg'u (CTA) | `#52D8E6` |
| Havola | `#096183` |
| To'q fon | `#21292E` |
| Muqobil fon | `#F5F7F8` |
| Chegara | `#E2E4E5` |
| Karta radiusi | `16px`, tugma `30px` (pill) |
| Karta soyasi | `0 4px 4px rgb(0 0 0 / .05)` |

Tipografika shkalasi `tailwind.config.ts` dagi `fontSize` da: `h1 44/56 w300`,
`h2 40/48 w300`, `h4 26/34 w400`, `base 16/24`, `meta 14/22`, `fine 12/20`.
Mobil variantlar `-m` qo'shimchasi bilan (`text-h1-m` va h.k.).

## Uch til (UZ / RU / EN)

Til **manzilda** saqlanadi, shuning uchun har bir sahifani havola sifatida
ulashish va indeksatsiya qilish mumkin:

| Manzil | Til |
|---|---|
| `/`, `/yechimlar`, `/boglanish` | o'zbekcha (asosiy, prefikssiz) |
| `/ru`, `/ru/yechimlar`, `/ru/boglanish` | ruscha |
| `/en`, `/en/yechimlar`, `/en/boglanish` | inglizcha |

Yo'l nomlari (`/yechimlar`, `/boglanish`) ikkala tilda ham bir xil — faqat
prefiks qo'shiladi. Kodda havolalar har doim kanonik ko'rinishda yoziladi
(`<Link to="/yechimlar">`), prefiksni `src/i18n/Link.tsx` avtomatik qo'yadi.

Qanday ishlaydi:

| Fayl | Vazifasi |
|---|---|
| `src/i18n/config.ts` | tillar ro'yxati, asosiy til, `<html lang>` qiymatlari |
| `src/i18n/paths.ts` | manzilga prefiks qo'shish / ajratish |
| `src/i18n/LocaleProvider.tsx` | tanlangan tildagi kontentni daraxtga tarqatadi |
| `src/i18n/context.ts` | `useLocale`, `useContent`, `useUi` hooklari |
| `src/i18n/ui.ts` | interfeys matnlari (tugma, aria-label, rus tilidagi son shakllari) |
| `src/i18n/useDocumentMeta.ts` | `<title>` va meta-tavsifni tilga qarab yangilaydi |
| `src/i18n/useAlternateLinks.ts` | `canonical` va `hreflang` teglari (qidiruv tizimlari uchun) |
| `src/shared/layout/LocaleSwitcher.tsx` | sarlavhadagi UZ/RU almashtirgichi |

Sarlavhadagi almashtirgich — globus belgili ixcham menyu (til soni ortsa ham
joy egallamaydi); mobil menyuda uchala til yonma-yon turadi.

**Yangi til qo'shish** (masalan, qozoqcha) — to'rt qadam:

1. `src/i18n/config.ts` → `locales` ga kod va `localeMeta` ga nom qo'shiladi.
2. `src/content/<kod>/` papkasi yaratiladi (uz papkasidan nusxa olib tarjima
   qilinadi) — biror maydon tushib qolsa `npm run typecheck` xato beradi.
3. `src/i18n/ui.ts` ga interfeys lug'ati qo'shiladi.
4. Xohishga ko'ra `src/shared/contact/schema.ts`, `src/shared/api/contact.ts`
   va `worker/index.ts` dagi xato matnlariga shu til qo'shiladi.

Marshrutlar (`/<kod>/...`) va `hreflang` teglari `src/app/routes.tsx` hamda
`useAlternateLinks` orqali avtomatik hosil bo'ladi.

Server tomonda ham til hisobga olinadi: `POST /api/contact?lang=ru`
(yoki `?lang=en`) xato matnlarini shu tilda qaytaradi
(`src/shared/contact/schema.ts`).

## Harakat va interaktivlik

Animatsiyalar dekorativ emas — diqqatni bosqichma-bosqich yo'naltirish uchun.
Barchasi `prefers-reduced-motion` da avtomatik o'chadi (`src/styles/index.css`).

| Element | Vazifasi |
|---|---|
| `<Reveal>` | IntersectionObserver orqali blokni skrollda yumshoq chiqaradi; `delay` bilan zinapoyasimon tartib |
| `<Counter>` | Ko'rsatkichni 0 dan haqiqiy qiymatgacha sanaydi (`60+`, `24/7` kabi matnli qismni saqlaydi) |
| `<Marquee>` | Yechimlar lentasi; hoverda to'xtaydi |
| `.card-hover` | Kartani ko'taradi, chegarani quyuqlashtiradi va ustidan urg'u chizig'ini chizadi |
| `.zoom-parent` / `.zoom-media` | Hoverda karta vizualini sekin kattalashtiradi |
| Sarlavha | Yopishqoq (`sticky`), skrollda utility-bar yig'iladi, pastida o'qish progressi |
| `<Media animated>` | Gradient ustidagi yorug'lik dog'larining sekin siljishi |

## Vizual materiallar

Rasm fayllari o'rniga `<Media>` komponenti ishlatiladi — gradient va SVG naqsh.
Tashqi fayl talab qilmaydi. Haqiqiy fotosuratlarga o'tishda shu komponentni
`<picture>` ga almashtirish yetarli; qolgan layout o'zgarmaydi.

## Deploy

Sayt **Cloudflare Workers** ga chiqariladi: bitta Worker ham statik fayllarni,
ham `/api/*` yo'llarini boshqaradi.

### Qanday ishlaydi

| Element | Vazifasi |
|---|---|
| `wrangler.jsonc` | Worker konfiguratsiyasi: nom, `main`, assets, KV, observability |
| `assets.directory: ./dist` | Vite build natijasi Cloudflare edge'idan beriladi |
| `not_found_handling: single-page-application` | Topilmagan yo'llar `index.html` ga tushadi — `/yechimlar` 404 bermaydi |
| `run_worker_first: ["/api/*"]` | `/api/*` avval Worker'ga boradi (aks holda SPA fallback JSON o'rniga HTML qaytaradi) |
| `worker/index.ts` | `GET /api/health`, `POST /api/contact`; qolgani `env.ASSETS.fetch()` |
| `public/_headers` | Xavfsizlik sarlavhalari (CSP va h.k.) va `/assets/*` uchun uzoq kesh |

### 1. Lokal tekshiruv (Workers runtime)

```bash
npm run preview        # build + wrangler dev → http://localhost:8787
```

`vite preview` ham saqlangan, lekin unda `/api/*` ishlamaydi:

```bash
npm run preview:vite
```

### 2. Cloudflare'ga kirish

```bash
npx wrangler login
```

### 3. Deploy

```bash
npm run deploy         # build + wrangler deploy
```

Natija: `https://cmgroup-design.<account>.workers.dev`.

### 4. Custom domen

Cloudflare dashboard → **Workers & Pages → cmgroup-design → Settings → Domains
& Routes → Add → Custom domain** → `cmgroup.uz`. Domen Cloudflare DNS'da
bo'lishi kerak; sertifikat avtomatik beriladi. Muqobil variant — `wrangler.jsonc`
ga `"routes"` qo'shish.

### 5. KV (so'rovlarni saqlash + rate limit)

KV bo'lmasa ham shakl ishlaydi — faqat saqlash va rate limit o'chiq bo'ladi.
Yoqish uchun:

```bash
npx wrangler kv namespace create CONTACT_KV
```

Chiqqan `id` ni `wrangler.jsonc` dagi izohdagi `kv_namespaces` blokiga qo'ying
va izohni oching. Yozilgan kalitlar: `lead:<iso-timestamp>:<uuid>` (90 kun TTL)
va `rate:contact:<ip>` (10 daqiqada 5 ta so'rov).

So'rovlarni ko'rish:

```bash
npx wrangler kv key list --binding CONTACT_KV
```

### 6. Webhook (Slack / Telegram / n8n)

```bash
npx wrangler secret put CONTACT_WEBHOOK_URL
```

Lokal dev uchun `.dev.vars.example` dan nusxa oling:

```bash
cp .dev.vars.example .dev.vars
```

### 7. Loglar

```bash
npm run tail           # wrangler tail — jonli loglar
```

### 8. CI

`.github/workflows/deploy.yml` — `main` ga push bo'lganda `npm ci` →
`typecheck` → `lint` → `build` → deploy. GitHub repo'da ikkita secret kerak:
`CLOUDFLARE_API_TOKEN` (Edit Workers huquqi bilan) va `CLOUDFLARE_ACCOUNT_ID`.

## Bajarilmagan / keyingi qadamlar

- Bog'lanish shakli Worker'ga (`POST /api/contact`) ulangan: server tomonda
  validatsiya, honeypot, rate limit va KV'ga yozish ishlaydi. CRM integratsiyasi
  esa hali yo'q — hozircha `CONTACT_WEBHOOK_URL` orqali tashqi tizimga uzatiladi.
- Maqolalar uchun alohida detal sahifasi yo'q (ro'yxat darajasida).
- Avtomatik testlar yozilmagan.
