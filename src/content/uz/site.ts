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
    ],
  },
  {
    label: 'Jarayon',
    to: '/jarayon',
    groups: [
      {
        title: 'Qanday ishlaymiz',
        items: [
          { label: 'Tahlil va audit', to: '/jarayon#tahlil' },
          { label: 'Arxitektura', to: '/jarayon#arxitektura' },
          { label: 'Joriy etish', to: '/jarayon#joriy-etish' },
          { label: 'Oʻqitish', to: '/jarayon#oqitish' },
          { label: 'Qoʻllab-quvvatlash', to: '/jarayon#qollab-quvvatlash' },
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
          { label: 'Texnologiya tanlash', to: '/tahlillar#texnologiya' },
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
          { label: 'Hamkorlar', to: '/biz-haqimizda#hamkorlar' },
        ],
      },
    ],
  },
  { label: 'Bogʻlanish', to: '/boglanish' },
];

export const footer: FooterContent = {
  left: [
    { label: 'Yechimlar', to: '/yechimlar' },
    { label: 'Sohalar', to: '/sohalar' },
    { label: 'Ishlash jarayoni', to: '/jarayon' },
    { label: 'Tahlillar va maqolalar', to: '/tahlillar' },
    { label: 'Bogʻlanish', to: '/boglanish' },
  ],
  right: [
    { label: 'Biz haqimizda', to: '/biz-haqimizda' },
    { label: 'Jamoa', to: '/biz-haqimizda#jamoa' },
    { label: 'Hamkorlar', to: '/biz-haqimizda#hamkorlar' },
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
