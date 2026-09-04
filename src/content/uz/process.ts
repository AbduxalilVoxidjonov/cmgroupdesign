import type { ProcessPage, ProcessStep } from '../types';

export const processSteps: readonly ProcessStep[] = [
  {
    id: 'tahlil',
    index: '01',
    title: 'Tahlil va audit',
    duration: '1–2 hafta',
    lead: 'Mavjud jarayonlarni joyida oʻrganamiz: kim nima qiladi, maʼlumot qayerda yoʻqoladi, qaysi hisobot qoʻlda yigʻiladi.',
    deliverables: ['Jarayonlar xaritasi', 'Muammolar roʻyxati va ustuvorlik', 'Dastlabki byudjet oraligʻi'],
  },
  {
    id: 'arxitektura',
    index: '02',
    title: 'Arxitektura',
    duration: '1–3 hafta',
    lead: 'Tizim qanday boʻlishini qogʻozda hal qilamiz — moduli, huquqlar, integratsiyalar va bosqichlar.',
    deliverables: ['Texnik topshiriq', 'Modul va integratsiya sxemasi', 'Bosqichli joriy etish rejasi'],
  },
  {
    id: 'joriy-etish',
    index: '03',
    title: 'Joriy etish',
    duration: '1–4 oy',
    lead: 'Bosqichma-bosqich ishga tushiramiz. Har bosqich oxirida ishlaydigan modul topshiriladi, hammasi birdan emas.',
    deliverables: ['Ishlaydigan modullar', 'Maʼlumot koʻchirish', 'Sinov muhiti va qabul testlari'],
  },
  {
    id: 'oqitish',
    index: '04',
    title: 'Oʻqitish',
    duration: '1–2 hafta',
    lead: 'Xodimlarni oʻz ish oʻrnida oʻqitamiz va har bir rol uchun qisqa qoʻllanma qoldiramiz.',
    deliverables: ['Rol boʻyicha qoʻllanma', 'Video darsliklar', 'Ichki administrator tayyorlash'],
  },
  {
    id: 'qollab-quvvatlash',
    index: '05',
    title: 'Qoʻllab-quvvatlash',
    duration: 'Doimiy',
    lead: 'Ishga tushirish tugash nuqtasi emas. Kelishilgan javob muddati bilan texnik yordam va rivojlantirish davom etadi.',
    deliverables: ['SLA boʻyicha texnik yordam', 'Yangilanish va zaxira nusxa', 'Choraklik rivojlanish rejasi'],
  },
];

export const processPage: ProcessPage = {
  meta: {
    title: 'Jarayon — auditdan qoʻllab-quvvatlashgacha besh bosqich',
    description:
      'CM Group loyihalari qanday olib boriladi: tahlil va audit, arxitektura, bosqichli joriy etish, oʻqitish va SLA boʻyicha qoʻllab-quvvatlash.',
  },
  hero: {
    eyebrow: 'Jarayon',
    title: 'Auditdan qoʻllab-quvvatlashgacha besh bosqich',
    lead: 'Har bosqich yozma natija bilan yakunlanadi. Keyingi bosqichga faqat oldingisi qabul qilingandan soʻng oʻtamiz.',
  },
  resultLabel: 'Bosqich natijasi',
};
