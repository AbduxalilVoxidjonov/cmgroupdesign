import { contacts } from '../shared';
import type { FooterContent, NavItem, SiteInfo, UtilityNavItem } from '../types';

export const site: SiteInfo = {
  ...contacts,
  tagline: 'Biznes tizimlarini noldan quramiz',
  address: 'Toshkent shahri, Mirzo Ulugʻbek tumani',
  workHours: 'Dushanba – Shanba, 09:00 – 18:00',
};

export const utilityNav: readonly UtilityNavItem[] = [
  { label: 'Mijozlar portali', href: `https://${contacts.domain}`, external: true },
  { label: 'Texnik yordam', href: `mailto:${contacts.supportEmail}`, external: false },
];

export const mainNav: readonly NavItem[] = [
  {
    label: 'Yechimlar',
    to: '/yechimlar',
    groups: [
      {
        title: 'Boshqaruv tizimlari',
        items: [
          { label: 'HR va kadrlar hisobi', to: '/yechimlar#hr' },
          { label: 'CRM — sotuv va mijozlar', to: '/yechimlar#crm' },
          { label: 'ERP — resurslarni boshqarish', to: '/yechimlar#erp' },
          { label: 'Hujjat aylanishi', to: '/yechimlar#hujjat' },
          { label: 'Barcha modullar', to: '/yechimlar' },
        ],
      },
      {
        title: 'Infratuzilma',
        items: [
          { label: 'Videokuzatuv va xavfsizlik', to: '/yechimlar#xavfsizlik' },
          { label: 'Kirishni boshqarish (ACS)', to: '/yechimlar#acs' },
          { label: 'Tarmoq va server', to: '/yechimlar#tarmoq' },
          { label: 'Integratsiya va API', to: '/yechimlar#integratsiya' },
        ],
      },
    ],
  },
  {
    label: 'Xizmatlar',
    to: '/xizmatlar',
    groups: [
      {
        title: 'Joriy etish',
        items: [
          { label: 'Jarayon auditi', to: '/xizmatlar#audit' },
          { label: 'Texnik topshiriq', to: '/xizmatlar#tt' },
          { label: 'Bosqichli joriy etish', to: '/xizmatlar#joriy' },
          { label: 'Maʼlumot koʻchirish', to: '/xizmatlar#migratsiya' },
          { label: 'Ishlash jarayoni', to: '/jarayon' },
        ],
      },
      {
        title: 'Dasturlash',
        items: [
          { label: 'Buyurtma dasturlar', to: '/xizmatlar#buyurtma' },
          { label: 'Mobil ilovalar', to: '/xizmatlar#mobil' },
          { label: 'API va integratsiya', to: '/xizmatlar#api' },
          { label: 'Eski tizimni yangilash', to: '/xizmatlar#modernizatsiya' },
        ],
      },
      {
        title: 'Infratuzilma',
        items: [
          { label: 'Tarmoq loyihalash', to: '/xizmatlar#tarmoq' },
          { label: 'Server va virtualizatsiya', to: '/xizmatlar#server' },
          { label: 'Videokuzatuv montaji', to: '/xizmatlar#montaj' },
          { label: 'Kirish nazorati montaji', to: '/xizmatlar#acs' },
        ],
      },
      {
        title: 'Qoʻllab-quvvatlash',
        items: [
          { label: 'SLA texnik yordam', to: '/xizmatlar#sla' },
          { label: 'IT autsorsing', to: '/xizmatlar#autsorsing' },
          { label: 'Monitoring 24/7', to: '/xizmatlar#monitoring' },
          { label: 'Xodimlarni oʻqitish', to: '/xizmatlar#oqitish' },
        ],
      },
    ],
  },
  {
    label: 'Sohalar',
    to: '/sohalar',
    groups: [
      {
        title: 'Biz ishlaydigan sohalar',
        items: [
          { label: 'Taʼlim markazlari', to: '/sohalar#talim' },
          { label: 'Savdo va distribyutsiya', to: '/sohalar#savdo' },
          { label: 'Ishlab chiqarish', to: '/sohalar#ishlab-chiqarish' },
          { label: 'Qurilish va koʻchmas mulk', to: '/sohalar#qurilish' },
          { label: 'Logistika', to: '/sohalar#logistika' },
          { label: 'Xizmat koʻrsatish', to: '/sohalar#xizmat' },
        ],
      },
      {
        title: 'Kompaniya miqyosi',
        items: [
          { label: 'Kichik biznes', to: '/sohalar#kichik' },
          { label: 'Oʻrta biznes', to: '/sohalar#orta' },
          { label: 'Yirik korxona', to: '/sohalar#yirik' },
          { label: 'Filiallar tarmogʻi', to: '/sohalar#filial' },
        ],
      },
    ],
  },
  {
    label: 'Vositalar',
    to: '/vositalar',
    groups: [
      {
        title: 'Hisob-kitob',
        items: [
          { label: 'ROI kalkulyatori', to: '/vositalar#roi' },
          { label: 'Byudjetni baholash', to: '/vositalar#byudjet' },
          { label: 'Kamera qamrovi hisoblagichi', to: '/vositalar#kamera' },
          { label: 'Litsenziya kalkulyatori', to: '/vositalar#litsenziya' },
        ],
      },
      {
        title: 'Tanlov va sinov',
        items: [
          { label: 'Tayyorlik testi', to: '/vositalar#test' },
          { label: 'Modul konfiguratori', to: '/vositalar#konfigurator' },
          { label: 'Taqqoslash jadvali', to: '/vositalar#taqqoslash' },
          { label: 'Demo soʻrash', to: '/vositalar#demo' },
        ],
      },
    ],
  },
  {
    label: 'Tahlillar',
    to: '/tahlillar',
    groups: [
      {
        title: 'Materiallar',
        items: [
          { label: 'Barcha maqolalar', to: '/tahlillar' },
          { label: 'Joriy etish tajribasi', to: '/tahlillar#case' },
          { label: 'Texnologiya tanlash', to: '/tahlillar#technology' },
          { label: 'Boshqaruv', to: '/tahlillar#management' },
          { label: 'Xavfsizlik', to: '/tahlillar#security' },
        ],
      },
      {
        title: 'Boshqa formatlar',
        items: [
          { label: 'Vebinarlar', to: '/resurslar#vebinar' },
          { label: 'Video darsliklar', to: '/resurslar#video' },
          { label: 'Yuklab olish markazi', to: '/resurslar#yuklab-olish' },
        ],
      },
    ],
  },
  {
    label: 'Resurslar',
    to: '/resurslar',
    groups: [
      {
        title: 'Resurslar',
        items: [
          { label: 'Qoʻllanmalar', to: '/resurslar#qollanma' },
          { label: 'Video darsliklar', to: '/resurslar#video' },
          { label: 'Savol-javob (FAQ)', to: '/resurslar#faq' },
          { label: 'Yangiliklar', to: '/resurslar#yangiliklar' },
          { label: 'Vebinarlar', to: '/resurslar#vebinar' },
          { label: 'Yuklab olish markazi', to: '/resurslar#yuklab-olish' },
          { label: 'Sertifikat va litsenziyalar', to: '/resurslar#sertifikat' },
          { label: 'Vakansiyalar', to: '/resurslar#vakansiya' },
          { label: 'Hamkorlik dasturi', to: '/resurslar#hamkorlik' },
        ],
      },
    ],
  },
  {
    label: 'Biz haqimizda',
    to: '/biz-haqimizda',
    groups: [
      {
        title: 'Kompaniya',
        items: [
          { label: 'Bizning yondashuv', to: '/biz-haqimizda#yondashuv' },
          { label: 'Jamoa', to: '/biz-haqimizda#jamoa' },
          { label: 'Texnologik hamkorlar', to: '/biz-haqimizda#hamkorlar' },
          { label: 'Sertifikat va litsenziyalar', to: '/resurslar#sertifikat' },
          { label: 'Vakansiyalar', to: '/resurslar#vakansiya' },
        ],
      },
    ],
  },
  { label: 'Bogʻlanish', to: '/boglanish' },
];

export const footer: FooterContent = {
  left: [
    { label: 'Yechimlar', to: '/yechimlar' },
    { label: 'Xizmatlar', to: '/xizmatlar' },
    { label: 'Sohalar', to: '/sohalar' },
    { label: 'Vositalar', to: '/vositalar' },
    { label: 'Ishlash jarayoni', to: '/jarayon' },
    { label: 'Tahlillar va maqolalar', to: '/tahlillar' },
  ],
  right: [
    { label: 'Biz haqimizda', to: '/biz-haqimizda' },
    { label: 'Resurslar', to: '/resurslar' },
    { label: 'Vakansiyalar', to: '/resurslar#vakansiya' },
    { label: 'Bogʻlanish', to: '/boglanish' },
    { label: 'Maxfiylik siyosati', to: '/boglanish#maxfiylik' },
    { label: 'Foydalanish shartlari', to: '/boglanish#shartlar' },
  ],
  addressLabel: 'Manzil',
  contactLabel: 'Aloqa',
  hoursLabel: 'Ish vaqti',
  cta: 'Loyihani muhokama qilish',
  legal:
    'Ushbu sayt umumiy axborot xarakteriga ega. Sahifadagi muddat, narx va konfiguratsiya misollari shartli boʻlib, aniq shartlar loyiha auditi va texnik topshiriq asosida belgilanadi. {legalName} taqdim etilgan maʼlumotlarning maxfiyligini shartnoma doirasida taʼminlaydi.',
};
