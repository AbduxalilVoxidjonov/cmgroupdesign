# Rasmlar manbasi

Barcha fotolar **Pixabay** (https://pixabay.com) dan olingan.

Pixabay Content License: tijorat maqsadida bepul foydalanish mumkin,
atribusiya (havola/muallif koʻrsatish) **talab qilinmaydi**.
Toʻliq shartlar: https://pixabay.com/service/license-summary/

Fayllar WebP formatida, slot oʻlchamiga qirqilgan va siqilgan
(heroes 1280×480, spotlight 1280×560, story-team 1000×750,
maqolalar 1100×619). Jami ~850 KB.

Almashtirish uchun: faylni shu papkaga bir xil nom bilan qoʻying yoki
`npm run images -- <fayl> <slot>` ni ishlating.

## Yechim kartalari (card-*)

Sakkizta modul uchun ham haqiqiy foto qoʻyildi (avval SVG mockup edi):

| Slot | Rasm |
|---|---|
| `card-hr` | Ochiq ofis, ish oʻrinlari |
| `card-crm` | Ish stolida ikki hamkasb |
| `card-erp` | Ombor stellajlari |
| `card-docs` | Qogʻoz hujjatlar toʻplami |
| `card-security` | Videokuzatuv monitoring xonasi |
| `card-acs` | Biometrik skaner |
| `card-network` | Patch-panel va tarmoq kabellari |
| `card-integration` | Elektron plata (integratsiya) |

Barchasi 1200×515, WebP. Oʻz tizimingiz skrinshoti bilan almashtirish uchun:
`npm run images -- ~/Downloads/hr-panel.png card-hr`

## Qolgan boʻlimlar (2-bosqich)

SVG generatsiyalar toʻliq olib tashlandi — quyidagi joylarga ham foto qoʻyildi:

| Guruh | Slotlar |
|---|---|
| Sohalar (6) | `industry-talim`, `industry-savdo`, `industry-ishlab-chiqarish`, `industry-qurilish`, `industry-logistika`, `industry-xizmat` |
| Vositalar (8) | `tool-roi`, `tool-byudjet`, `tool-kamera`, `tool-litsenziya`, `tool-test`, `tool-konfigurator`, `tool-taqqoslash`, `tool-demo` |
| Xizmat guruhlari (4) | `service-joriy-etish`, `service-dasturlash`, `service-infratuzilma`, `service-qollab-quvvatlash` |
| Biz haqimizda (1) | `about-approach` |

Jami saytda **45 ta rasm**, ~2.6 MB (WebP).

SVG artwork kutubxonasi (`src/shared/ui/artwork/`) oʻchirilmadi — u endi
faqat zaxira sifatida ishlaydi: agar biror foto fayli oʻchirib yuborilsa,
oʻsha joyda buzilgan rasm emas, chizilgan grafika koʻrinadi.
