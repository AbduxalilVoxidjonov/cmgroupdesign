import type { Solution, SolutionCategory, SolutionsPage } from '../types';

export const solutionCategories: Record<SolutionCategory, string> = {
  management: 'Boshqaruv',
  infrastructure: 'Infratuzilma',
};

export const solutions: readonly Solution[] = [
  {
    id: 'hr',
    category: 'management',
    title: 'HR va kadrlar hisobi',
    short: 'Xodim hayotining butun sikli — ishga qabuldan hisobotgacha bitta tizimda.',
    body: 'Shtat jadvali, tabel, taʼtil va bandlik, ish haqi hisob-kitobiga tayyorgarlik, xodim profillari va hujjatlar arxivi. Davomat turniket yoki yuz tanish qurilmalaridan avtomatik tushadi.',
    points: [
      'Shtat jadvali va lavozimlar iyerarxiyasi',
      'Davomat qurilmalari bilan avtomatik integratsiya',
      'Taʼtil, safar va bandlik kalendari',
      'Ish haqi hisob-kitobi uchun tayyor eksport',
    ],
    tone: 'deep',
  },
  {
    id: 'crm',
    category: 'management',
    title: 'CRM — sotuv va mijozlar',
    short: 'Har bir murojaat qayerdan kelgani va qayerda toʻxtab qolgani koʻrinadi.',
    body: 'Lidlar, sotuv voronkasi, vazifalar va eslatmalar, telefoniya va messenjerlar bilan bogʻlanish. Menejer natijasi kunlik kesimda oʻlchanadi.',
    points: [
      'Koʻp bosqichli sotuv voronkasi',
      'Telegram, telefoniya va veb-forma integratsiyasi',
      'Vazifa va eslatmalar tizimi',
      'Menejerlar boʻyicha konversiya hisoboti',
    ],
    tone: 'sky',
  },
  {
    id: 'erp',
    category: 'management',
    title: 'ERP — resurslarni boshqarish',
    short: 'Ombor, xarid, moliya va ishlab chiqarish bitta maʼlumot bazasida.',
    body: 'Tovar harakati, qoldiqlar, taʼminotchilar bilan hisob-kitob, xarajat markazlari va byudjet nazorati. Har bir hisobot bitta manbadan yigʻiladi.',
    points: [
      'Ombor qoldiqlari va tovar harakati',
      'Xarid va taʼminotchilar bilan hisob-kitob',
      'Xarajat markazlari va byudjet nazorati',
      'Boshqaruv hisobotlari paneli',
    ],
    tone: 'amber',
  },
  {
    id: 'hujjat',
    category: 'management',
    title: 'Hujjat aylanishi',
    short: 'Kelishuv zanjiri qogʻozdan tizimga koʻchadi va vaqti oʻlchanadi.',
    body: 'Ichki va tashqi hujjatlar, kelishuv marshrutlari, elektron imzo, versiyalar tarixi va qidiruv. Har bir hujjat kimda turgani real vaqtda koʻrinadi.',
    points: [
      'Kelishuv marshrutlari va roli boʻyicha huquqlar',
      'Versiyalar tarixi va toʻliq matnli qidiruv',
      'Muddat nazorati va avtomatik eslatma',
      'Arxiv va eksport',
    ],
    tone: 'slate',
  },
  {
    id: 'xavfsizlik',
    category: 'infrastructure',
    title: 'Videokuzatuv va xavfsizlik',
    short: 'Kamera tarmogʻi loyihalash, montaj va markazlashgan monitoring.',
    body: 'Obyekt boʻyicha kamera joylashuvi loyihasi, kabel tarmogʻi, videoserver va arxiv, mobil telefondan kirish. Analitika: harakat, yuz va raqam tanish.',
    points: [
      'Obyekt loyihasi va kamera qamrovi hisobi',
      'Videoserver, arxiv chuqurligi va zaxira',
      'Mobil va veb-monitoring',
      'Yuz, raqam va harakat analitikasi',
    ],
    tone: 'green',
  },
  {
    id: 'acs',
    category: 'infrastructure',
    title: 'Kirishni boshqarish (ACS)',
    short: 'Turniket, eshik va shlagbaum — bitta huquqlar jadvalidan boshqariladi.',
    body: 'Karta, QR yoki yuz orqali kirish, mehmonlar rejimi, hududlar boʻyicha ruxsat. Barcha oʻtishlar HR tizimidagi davomat bilan bogʻlanadi.',
    points: [
      'Karta, QR va yuz tanish orqali kirish',
      'Hududlar va vaqt oraligʻi boʻyicha ruxsat',
      'Mehmon va pudratchilar rejimi',
      'HR davomati bilan bogʻlanish',
    ],
    tone: 'violet',
  },
  {
    id: 'tarmoq',
    category: 'infrastructure',
    title: 'Tarmoq va server',
    short: 'Kabel tizimidan serverxonagacha — ishonchli poydevor.',
    body: 'Strukturalangan kabel tizimi, kommutatsiya, Wi-Fi qamrovi, server va maʼlumotlar zaxirasi. Barchasi hujjatlashtiriladi va sxema bilan topshiriladi.',
    points: [
      'Strukturalangan kabel tizimi va sxema',
      'Wi-Fi qamrovi hisobi',
      'Server, virtualizatsiya va zaxira nusxa',
      'Monitoring va ogohlantirish',
    ],
    tone: 'slate',
  },
  {
    id: 'integratsiya',
    category: 'infrastructure',
    title: 'Integratsiya va API',
    short: 'Mavjud dasturlaringizni almashtirmaymiz — bir-biriga ulaymiz.',
    body: 'Buxgalteriya, kassa, bank, marketpleys va davlat xizmatlari bilan almashuv. Maʼlumot bir joyda kiritiladi va hamma joyga oʻzi tarqaladi.',
    points: [
      'Buxgalteriya va kassa tizimlari bilan almashuv',
      'Bank va toʻlov tizimlari',
      'Marketpleys va yetkazib berish xizmatlari',
      'Hujjatlashtirilgan ochiq API',
    ],
    tone: 'deep',
  },
];

export const solutionsPage: SolutionsPage = {
  meta: {
    title: 'Yechimlar — HR, CRM, ERP, videokuzatuv va tarmoq',
    description:
      'CM Group yechimlari: HR, CRM, ERP, hujjat aylanishi, videokuzatuv, ACS, tarmoq va integratsiya. Har bir modul alohida ham, yagona konturda ham joriy etiladi.',
  },
  hero: {
    eyebrow: 'Yechimlar',
    title: 'Sakkizta modul, bitta arxitektura',
    lead: 'Har bir modul alohida ishlaydi va bir-biri bilan bogʻlanadi. Boshlash uchun bittasi ham yetarli — keyin kengaytiriladi.',
  },
  navLabel: 'Modullar roʻyxati',
  groupTitles: {
    management: 'Boshqaruv tizimlari',
    infrastructure: 'Infratuzilma va xavfsizlik',
  },
  itemCta: 'Shu modul boʻyicha soʻrov',
};
