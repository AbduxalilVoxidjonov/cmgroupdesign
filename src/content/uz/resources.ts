import type { ResourcesPage } from '../types';

export const resourcesPage: ResourcesPage = {
  meta: {
    title: 'Resurslar — CM Group',
    description: 'Qoʻllanmalar, video darsliklar, savol-javob, yangiliklar, vebinarlar va vakansiyalar.',
  },
  hero: {
    eyebrow: 'Resurslar',
    title: 'Hujjat, oʻquv material va yangiliklar',
    lead: 'Tizim bilan ishlash uchun kerak boʻladigan hamma narsa bir joyda: qoʻllanmalar, darsliklar va rasmiy hujjatlar.',
  },
  intro: 'Materiallar muntazam yangilanadi. Kerakli boʻlim topilmasa — yozing, tayyorlab beramiz.',
  itemCta: 'Ochish',
  faqTitle: 'Koʻp beriladigan savollar',
  items: [
    { id: 'qollanma', kind: 'Hujjat', title: 'Qoʻllanmalar', body: 'Har bir modul va rol uchun bosqichma-bosqich yoʻriqnoma, PDF va onlayn koʻrinishda.' },
    { id: 'video', kind: 'Video', title: 'Video darsliklar', body: 'Qisqa video darslar: birinchi kirish, kundalik amallar, hisobot yigʻish.' },
    { id: 'savol-javob', kind: 'Yordam', title: 'Savol-javob (FAQ)', body: 'Eng koʻp beriladigan savollarga qisqa javoblar — quyida keltirilgan.' },
    { id: 'yangiliklar', kind: 'Yangilik', title: 'Yangiliklar', body: 'Yangi modullar, platforma yangilanishlari va kompaniya xabarlari.' },
    { id: 'vebinar', kind: 'Tadbir', title: 'Vebinarlar', body: 'Har oyda ochiq onlayn uchrashuv: amaliy keyslar va savollarga javob.' },
    { id: 'yuklab-olish', kind: 'Fayl', title: 'Yuklab olish markazi', body: 'Mijoz ilovasi, hujjat shablonlari, texnik topshiriq namunasi va shartnoma ilovalari.' },
    { id: 'sertifikat', kind: 'Hujjat', title: 'Sertifikat va litsenziyalar', body: 'Kompaniya litsenziyalari, vendor sertifikatlari va sifat hujjatlari.' },
    { id: 'vakansiya', kind: 'Karyera', title: 'Vakansiyalar', body: 'Ochiq ish oʻrinlari: dasturchi, biznes-tahlilchi, infratuzilma muhandisi.' },
    { id: 'hamkorlik', kind: 'Hamkorlik', title: 'Hamkorlik dasturi', body: 'Integrator va konsultantlar uchun sheriklik shartlari va komissiya tizimi.' },
  ],
  faq: [
    { question: 'Loyiha qancha vaqt oladi?', answer: 'Bitta modul odatda 1–2 oy, toʻliq kontur 3–6 oy. Aniq muddat audit natijasida belgilanadi va shartnomaga kiritiladi.' },
    { question: 'Maʼlumotlarimiz kimda saqlanadi?', answer: 'Baza va serverga toʻliq kirish huquqi mijozda qoladi. Bulut yoki oʻz serveringizda joylashtirish — tanlov sizniki.' },
    { question: 'Mavjud dasturlarimizni almashtirish shartmi?', answer: 'Yoʻq. Buxgalteriya yoki kassani saqlab qolib, ularni integratsiya orqali umumiy konturga ulash mumkin.' },
    { question: 'Ishga tushirilgandan keyin nima boʻladi?', answer: 'SLA boʻyicha texnik yordam, yangilanishlar, zaxira nusxa va choraklik rivojlanish rejasi davom etadi.' },
    { question: 'Filiallarda ham ishlaydimi?', answer: 'Ha. Tizim koʻp filialli ish uchun moʻljallangan: har bir filial oʻz maʼlumotini koʻradi, markaz esa umumiy hisobotni.' },
  ],
};
