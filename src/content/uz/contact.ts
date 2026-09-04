import type { ContactPage, NotFoundPage } from '../types';

export const contactPage: ContactPage = {
  meta: {
    title: 'Bogʻlanish — loyihani muhokama qilamiz',
    description:
      'Soʻrov qoldiring: ikki ish kuni ichida bogʻlanamiz. Dastlabki baholash va jarayon auditi bepul.',
  },
  hero: {
    eyebrow: 'Bogʻlanish',
    title: 'Loyihani muhokama qilamiz',
    lead: 'Soʻrovni qoldiring — ikki ish kuni ichida bogʻlanamiz. Dastlabki baholash va jarayon auditi bepul.',
  },
  reasons: [
    'Yangi loyiha va byudjet baholash',
    'Mavjud tizimni kengaytirish',
    'Texnik yordam va nosozlik',
    'Hamkorlik taklifi',
  ],
  form: {
    title: 'Soʻrov shakli',
    subtitle: 'Toʻldirish uchun bir daqiqa yetadi.',
    nameLabel: 'Ismingiz *',
    namePlaceholder: 'Familiya Ism',
    companyLabel: 'Kompaniya',
    companyPlaceholder: 'Tashkilot nomi',
    contactLabel: 'Telefon yoki e-pochta *',
    contactPlaceholder: '+998 90 000 00 00',
    reasonLabel: 'Murojaat mavzusi',
    messageLabel: 'Vazifa tavsifi *',
    messagePlaceholder: 'Nechta xodim, qaysi jarayonlar, hozir qanday dasturlardan foydalanasiz',
    submit: 'Soʻrovni yuborish',
    sending: 'Yuborilmoqda…',
    requiredNote:
      '* bilan belgilangan maydonlar majburiy. Maʼlumotlar faqat bogʻlanish va taklif tayyorlash uchun ishlatiladi.',
    honeypotLabel: 'Sayt manzili',
  },
  success: {
    title: 'Soʻrov qabul qilindi',
    body: 'Rahmat, {name}. Soʻrovingiz qayd etildi — ikki ish kuni ichida koʻrsatilgan aloqa vositasi orqali bogʻlanamiz.',
    again: 'Yangi soʻrov yozish',
  },
  aside: {
    title: 'Toʻgʻridan-toʻgʻri aloqa',
    phoneLabel: 'Telefon',
    emailLabel: 'E-pochta',
    addressLabel: 'Manzil',
    hoursLabel: 'Ish vaqti',
    note: 'Shoshilinch nosozlik boʻlsa telefon orqali bogʻlaning — soʻrov navbatidan tashqari koʻriladi.',
  },
  legal: {
    title: 'Maxfiylik va shartlar',
    dataTitle: 'Maʼlumotlarni qayta ishlash',
    dataBody:
      'Soʻrov shakli orqali yuborilgan maʼlumotlar faqat bogʻlanish va taklif tayyorlash uchun ishlatiladi, uchinchi shaxslarga berilmaydi va soʻrov boʻyicha oʻchiriladi.',
    termsTitle: 'Foydalanish shartlari',
    termsBody:
      'Saytdagi muddat, tarkib va narx misollari shartli. Yakuniy shartlar audit natijasi va imzolangan texnik topshiriq asosida belgilanadi.',
  },
};

export const notFoundPage: NotFoundPage = {
  meta: {
    title: 'Sahifa topilmadi',
    description: 'Soʻralgan sahifa mavjud emas yoki manzil oʻzgargan.',
  },
  code: '404',
  title: 'Bunday sahifa topilmadi',
  body: 'Havola eskirgan yoki manzil notoʻgʻri kiritilgan boʻlishi mumkin. Bosh sahifadan yoki quyidagi boʻlimlardan davom eting.',
  cta: 'Bosh sahifaga',
};
