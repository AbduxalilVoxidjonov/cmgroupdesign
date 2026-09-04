import type { HomePage } from '../types';

export const home: HomePage = {
  meta: {
    title: 'CM Group — biznes tizimlarini noldan quramiz',
    description:
      'HR, CRM, ERP, hujjat aylanishi, videokuzatuv va tarmoq — bitta jamoadan, bitta arxitekturada. Loyihalash, joriy etish va texnik qoʻllab-quvvatlash.',
  },
  hero: {
    badge: 'Jarayon auditi — bepul',
    eyebrow: 'HR · CRM · ERP · Xavfsizlik',
    title: 'Bizning tizim — sizning poydevoringiz',
    highlight: 'poydevoringiz',
    body: 'HR, CRM, ERP va xavfsizlik — bitta jamoadan, bitta arxitekturada. Loyihalash, joriy etish va texnik qoʻllab-quvvatlashni toʻliq oʻz zimmamizga olamiz.',
    cta: { label: 'Loyihani muhokama qilish', to: '/boglanish' },
    secondaryCta: { label: 'Yechimlarni koʻrish', to: '/yechimlar' },
    points: [
      'Joyida oʻrganib chiqiladigan bepul audit',
      'Har oyda ishlaydigan bitta modul',
      'Bitta shartnoma — bitta javobgar',
    ],
    statsTitle: 'Raqamlarda',
    statsLink: 'Yechimlarni koʻrib chiqish',
  },
  stats: [
    { value: '60+', label: 'Yakunlangan joriy etish loyihasi' },
    { value: '8 yil', label: 'Bozordagi tajriba' },
    { value: '4 soat', label: 'Oʻrtacha javob muddati' },
    { value: '24/7', label: 'Kritik obyektlar monitoringi' },
  ],
  editorial: [
    {
      title: 'Bepul jarayon auditi',
      body: 'Kompaniyangizga kelib, mavjud jarayonlarni joyida oʻrganamiz va qaysi bosqichda qancha vaqt yoʻqolayotganini raqamlarda koʻrsatamiz.',
      link: { label: 'Auditga yozilish', to: '/boglanish' },
    },
    {
      title: 'Bosqichli joriy etish',
      body: 'Hamma narsani birdan yoqmaymiz. Har oyda ishlaydigan bitta modul topshiriladi — jamoa oʻrganib ulguradi, byudjet nazoratda qoladi.',
      link: { label: 'Jarayonni koʻrish', to: '/jarayon' },
    },
    {
      title: 'Uzoq muddatli qoʻllab-quvvatlash',
      body: 'Ishga tushirishdan keyin kelishilgan javob muddati bilan texnik yordam, yangilanishlar va choraklik rivojlanish rejasi davom etadi.',
      link: { label: 'Shartlar bilan tanishish', to: '/jarayon#qollab-quvvatlash' },
    },
  ],
  finder: {
    eyebrow: 'Yechim tanlash',
    title: 'Qaysi masalani hal qilmoqchisiz?',
    placeholder: 'Yechimni qidirish — HR, CRM, videokuzatuv…',
    searchLabel: 'Yechimni qidirish',
    empty: 'Soʻrov boʻyicha yechim topilmadi. Filtrni «Barchasi» ga qaytaring yoki boshqa soʻz kiriting.',
    note: 'Har bir yechim alohida ham, yagona konturda ham joriy etiladi. Aniq tarkib audit natijasiga qarab belgilanadi.',
  },
  resources: {
    eyebrow: 'Yechimlar',
    title: 'Eng koʻp soʻraladigan yechimlar',
    intro: 'Har bir yechim alohida ishga tushadi, lekin bir xil maʼlumot bazasi va bir xil huquqlar tizimida qoladi.',
    cta: 'Batafsil koʻrish',
  },
  insights: {
    eyebrow: 'Materiallar',
    title: 'Tahlillar',
    leadCta: 'Maqolani oʻqish',
    itemCta: 'Oʻqish',
    allCta: 'Barcha materiallar',
  },
  spotlight: {
    eyebrow: 'Sohalar',
    title: 'Sohangizga moslashtirilgan konfiguratsiya',
    intro: 'Sohaviy shablon — bu oldindan sozlangan hisobot, huquq va jarayon toʻplami. U joriy etish muddatini qisqartiradi.',
    badge: 'Tanlangan',
    cardTitle: 'Tayyor sohaviy shablonlar',
    cardBody: 'Har bir soha uchun oldindan sozlangan hisobot, huquq va jarayon toʻplami — joriy etish muddatini qisqartiradi.',
    cardCta: 'Sohalarni koʻrish',
    tileCta: 'Batafsil',
  },
  brandStory: {
    title: 'Bitta jamoa — butun tizim uchun javobgar',
    paragraphs: [
      'Koʻpincha kompaniya dasturni bir yerdan, kamerani boshqa yerdan, tarmoqni uchinchi yerdan oladi. Nosozlik chiqqanda esa hech kim javobgar boʻlmaydi.',
      'Biz butun konturni — dasturiy taʼminotdan kabelgacha — bitta arxitekturada quramiz va bitta shartnoma boʻyicha javob beramiz.',
    ],
    link: { label: 'Biz haqimizda', to: '/biz-haqimizda' },
    guaranteeLabel: 'Kafolat',
    guaranteeBody:
      'Joriy etilgan har bir modul uchun kelishilgan javob muddati va choraklik rivojlanish rejasi shartnomada qayd etiladi.',
  },
  principles: [
    {
      title: 'Bitta arxitektura',
      body: 'Dasturiy taʼminotdan kabelgacha — butun kontur bitta loyihada bogʻlanadi.',
    },
    {
      title: 'Bitta shartnoma',
      body: 'Nosozlik chiqqanda javobgarni izlash shart emas: kontur bizning zimmamizda.',
    },
    {
      title: 'Bitta jamoa',
      body: 'Tahlil, joriy etish va qoʻllab-quvvatlashni bir xil muhandislar olib boradi.',
    },
  ],
  cta: {
    eyebrow: 'Keyingi qadam',
    title: 'Jarayon auditidan boshlaymiz',
    body: 'Soʻrov qoldiring — ikki ish kuni ichida bogʻlanamiz, uchrashuv belgilaymiz va dastlabki baholashni bepul taqdim etamiz.',
    button: 'Soʻrov qoldirish',
    note: 'Soʻrov yuborish orqali siz bogʻlanish uchun taqdim etgan maʼlumotlaringizni qayta ishlashga rozilik bildirasiz. Maʼlumotlar uchinchi shaxslarga berilmaydi. Toʻgʻridan-toʻgʻri aloqa: {email}',
  },
};
