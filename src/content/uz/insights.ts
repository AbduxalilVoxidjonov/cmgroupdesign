import type { Article, ArticleCategory, InsightsPage } from '../types';

export const articleCategories: Record<ArticleCategory, string> = {
  case: 'Joriy etish tajribasi',
  technology: 'Texnologiya tanlash',
  management: 'Boshqaruv',
  security: 'Xavfsizlik',
};

export const articles: readonly Article[] = [
  {
    slug: 'crm-joriy-etish-xatolari',
    category: 'case',
    title: 'CRM joriy etishda eng koʻp uchraydigan besh xato',
    excerpt:
      'Tizim yomon boʻlgani uchun emas, jarayon tavsiflanmagani uchun ishlamaydi. Amaliyotdan olingan besh holat va ularning yechimi.',
    date: '2 kun oldin',
    readingTime: '7 daqiqa',
    author: 'Joriy etish boʻlimi',
    featured: true,
    tone: 'sky',
  },
  {
    slug: 'erp-yoki-alohida-dasturlar',
    category: 'technology',
    title: 'Yagona ERP yoki alohida dasturlar: qaysi biri arzonroq tushadi',
    excerpt: 'Uch yillik egalik qiymati boʻyicha oddiy hisob-kitob va qaysi holatda qaysi yoʻl foydali ekani.',
    date: '1 hafta oldin',
    readingTime: '9 daqiqa',
    author: 'Arxitektura guruhi',
    tone: 'amber',
  },
  {
    slug: 'videokuzatuv-loyihalash',
    category: 'security',
    title: 'Videokuzatuvni loyihalash: kamera soni emas, qamrov muhim',
    excerpt: 'Obyektni kamera bilan “toʻldirish” oʻrniga qamrov va yorugʻlikni hisoblash nega arzonroq natija beradi.',
    date: '2 hafta oldin',
    readingTime: '6 daqiqa',
    author: 'Infratuzilma boʻlimi',
    tone: 'green',
  },
  {
    slug: 'hisobot-qoldan-tizimga',
    category: 'management',
    title: 'Hisobot qoʻldan tizimga oʻtganda rahbar nimani yutadi',
    excerpt: 'Excel’dagi oylik hisobot bilan real vaqtdagi panel oʻrtasidagi farq — qaror qabul qilish tezligida.',
    date: '3 hafta oldin',
    readingTime: '5 daqiqa',
    author: 'Boshqaruv hisoboti guruhi',
    tone: 'slate',
  },
  {
    slug: 'integratsiya-api',
    category: 'technology',
    title: 'Mavjud dasturni almashtirmasdan integratsiya qilish',
    excerpt: 'Buxgalteriya va kassani saqlab qolgan holda maʼlumotni bitta markazga yigʻishning amaliy yoʻli.',
    date: '1 oy oldin',
    readingTime: '8 daqiqa',
    author: 'Integratsiya guruhi',
    tone: 'deep',
  },
  {
    slug: 'hr-davomat-avtomatlashtirish',
    category: 'case',
    title: 'Davomatni avtomatlashtirish: turniketdan ish haqigacha',
    excerpt: 'Qurilma maʼlumotini HR tizimiga ulash va oylik tabelni qoʻlda toʻldirishdan voz kechish.',
    date: '1 oy oldin',
    readingTime: '6 daqiqa',
    author: 'Joriy etish boʻlimi',
    tone: 'violet',
  },
];

export const insightsPage: InsightsPage = {
  meta: {
    title: 'Tahlillar — joriy etish amaliyotidan xulosalar',
    description:
      'Joriy etish loyihalarida takrorlanadigan holatlar, texnologiya tanlash mezonlari va eng koʻp uchraydigan xatolar tahlili.',
  },
  hero: {
    eyebrow: 'Tahlillar',
    title: 'Amaliyotdan olingan xulosalar',
    lead: 'Joriy etish loyihalarimizda takrorlanadigan holatlar, texnologiya tanlash mezonlari va xatolar tahlili.',
  },
  empty: 'Bu turkumda hozircha material yoʻq.',
  itemCta: 'Oʻqish',
};
