# Rasm slotlari

Bu papkaga toʻgʻri nom bilan fayl tashlansa, sayt avtomatik ravishda SVG
artwork oʻrniga fotoni koʻrsatadi. Fayl boʻlmasa artwork qoladi — sayt hech
qachon "buzilgan rasm" koʻrsatmaydi. Kodni oʻzgartirish kerak emas.

## Holat

**18 ta slotning hammasi toʻldirilgan** (Pixabay, tijorat uchun bepul —
`SOURCES.md` ga qarang). Quyidagi jadval faqat almashtirmoqchi boʻlsangiz
kerak boʻladi.

## Almashtirish

1. Rasmlarni yuklab oling (havolalar quyida) — `~/Downloads` ga.
2. Menga ayting: **"Downloads'dagi rasmlarni joylashtir"**. Men har birini
   koʻrib chiqib, mos slotga kesib, siqib qoʻyaman.

Yoki oʻzingiz:

```bash
npm run images -- ~/Downloads/photo-abc.jpg hero-home
npm run images -- --scan ~/Downloads     # papkadagi rasmlar roʻyxati
npm run images -- --list                 # barcha slotlar
```

Skript avtomatik: kerakli nisbatda kesadi (muhim qismini saqlab), oʻlchamini
kichraytiradi, JPEG sifat 80 bilan siqadi.

## Kerakli rasmlar

Foto qidirishda: **gorizontal (landscape)**, tabiiy yorugʻlik, odam yuzi
yaqindan koʻrinmasin (model relizi masalasi), matn/logotip boʻlmasin.

| Slot | Nisbat | Qidiruv soʻzi | Nima izlash kerak |
|---|---|---|---|
| `hero-home` | 16:6 | `modern office building` | Zamonaviy bino, pastdan yuqoriga rakurs, oyna fasad |
| `hero-solutions` | 16:6 | `server room` | Server rack'lari, sovuq ko'k yorugʻlik |
| `hero-services` | 16:6 | `network cabling` | Kabel tarmogʻi, kommutator, texnik ish |
| `hero-industries` | 16:6 | `warehouse logistics` | Ombor, stellaj, yuk |
| `hero-process` | 16:6 | `team planning whiteboard` | Doskada rejalashtirish, stikerlar |
| `hero-tools` | 16:6 | `data dashboard screen` | Monitorda grafik, analitika |
| `hero-insights` | 16:6 | `desk documents laptop` | Ish stoli, hujjat, noutbuk |
| `hero-resources` | 16:6 | `library shelves` yoki `training session` | Kutubxona yoki oʻquv jarayoni |
| `hero-about` | 16:6 | `modern office interior` | Ofis interyeri, jamoa maydoni |
| `hero-contact` | 16:6 | `office reception meeting room` | Qabulxona yoki uchrashuv xonasi |
| `spotlight` | 16:7 | `security camera installation` | Obyektda montaj, kamera oʻrnatish |
| `story-team` | 4:3 | `business team working` | Jamoa ish jarayonida (vertikalroq kadr) |
| `article-1` | 16:9 | `sales meeting crm` | CRM/sotuv mavzusi |
| `article-2` | 16:9 | `financial charts` | ERP/xarajat mavzusi |
| `article-3` | 16:9 | `cctv camera building` | Videokuzatuv mavzusi |
| `article-4` | 16:9 | `business report analysis` | Hisobot mavzusi |
| `article-5` | 16:9 | `api integration code` | Integratsiya mavzusi |
| `article-6` | 16:9 | `time attendance office` | HR/davomat mavzusi |

### Bepul manbalar (tijorat uchun ham bepul, atribusiya shart emas)

- Unsplash — `https://unsplash.com/s/photos/<qidiruv-soʻzi>`
- Pexels — `https://www.pexels.com/search/<qidiruv-soʻzi>/`
- Openverse — `https://openverse.org/search?q=<qidiruv-soʻzi>`

Unsplash'da yuklashda **"Medium" yoki "Large"** yetarli — skript baribir
kichraytiradi.

## Mahsulot ekranlari (`card-*`)

`card-hr`, `card-crm`, `card-security`, `card-erp`, `card-docs` — bular
mahsulot interfeysi skrinshotlari. Stok foto bu yerga **mos kelmaydi**:
hozir ularning oʻrnida maxsus chizilgan SVG mockuplar turibdi
(HR jadvali, CRM voronkasi, videokuzatuv monitoringi va h.k.).

Ularni faqat **oʻz tizimingizning haqiqiy skrinshoti** bilan almashtiring:

```bash
npm run images -- ~/Downloads/hr-panel.png card-hr
```

## Litsenziya

Faqat tijorat foydalanishga ruxsat etilgan rasmlarni qoʻying. Boshqa
saytlardan olingan rasmlar — jumladan raqobatchilar yoki yirik brendlar
saytidan — mualliflik huquqi bilan himoyalangan va ishlatilmaydi.
