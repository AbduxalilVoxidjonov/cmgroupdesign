import type { ServicesPage } from '../types';

export const servicesPage: ServicesPage = {
  meta: {
    title: 'Xizmatlar — CM Group',
    description:
      'Audit va texnik topshiriqdan tortib montaj, integratsiya va SLA boʻyicha qoʻllab-quvvatlashgacha — toʻliq xizmatlar roʻyxati.',
  },
  hero: {
    eyebrow: 'Xizmatlar',
    title: 'Loyihaning har bir bosqichi bitta jamoada',
    lead: 'Tahlildan montajgacha va undan keyingi qoʻllab-quvvatlashgacha — hech bir bosqich uchun boshqa pudratchi qidirishingiz shart emas.',
  },
  itemCta: 'Soʻrov qoldirish',
  processLinkLabel: 'Toʻliq ishlash jarayoni',
  groups: [
    {
      id: 'joriy-etish',
      title: 'Joriy etish',
      lead: 'Mavjud jarayonni oʻrganib, tizimni bosqichma-bosqich ishga tushiramiz.',
      tone: 'deep',
      items: [
        { id: 'audit', title: 'Jarayon auditi', body: 'Kompaniyaga kelib, kim nima qilishini va maʼlumot qayerda yoʻqolishini joyida oʻrganamiz. Natija — jarayonlar xaritasi va ustuvorliklar roʻyxati.' },
        { id: 'tt', title: 'Texnik topshiriq', body: 'Modul tarkibi, huquqlar matritsasi, integratsiyalar va qabul mezonlari yozma hujjatda qayd etiladi. Byudjet shu hujjatga bogʻlanadi.' },
        { id: 'joriy', title: 'Bosqichli joriy etish', body: 'Har bosqich oxirida ishlaydigan modul topshiriladi. Jamoa oʻrganib ulguradi, toʻlov ham bosqichlarga boʻlinadi.' },
        { id: 'migratsiya', title: 'Maʼlumot koʻchirish', body: 'Excel, 1C yoki eski bazadagi maʼlumotlar tozalanib, tekshirilib koʻchiriladi. Eski tizim parallel ishlashda davom etadi.' },
      ],
    },
    {
      id: 'dasturlash',
      title: 'Dasturlash',
      lead: 'Tayyor modul yetmasa — yetishmagan qismini oʻzimiz yozamiz.',
      tone: 'sky',
      items: [
        { id: 'buyurtma', title: 'Buyurtma dasturlar', body: 'Sohaga xos jarayonlar uchun alohida modul. Kod va baza mijozda qoladi, hech qanday qulflangan yechim yoʻq.' },
        { id: 'mobil', title: 'Mobil ilovalar', body: 'Savdo agenti, usta yoki rahbar uchun iOS va Android ilova. Oflayn rejim va sinxronizatsiya bilan.' },
        { id: 'api', title: 'API va integratsiya', body: 'Buxgalteriya, kassa, bank, marketpleys va davlat xizmatlari bilan almashuv. Hujjatlashtirilgan ochiq API.' },
        { id: 'modernizatsiya', title: 'Eski tizimni yangilash', body: 'Ishlab turgan dasturni almashtirmasdan interfeys, tezlik va hisobotlarini yangilaymiz.' },
      ],
    },
    {
      id: 'infratuzilma',
      title: 'Infratuzilma',
      lead: 'Dastur ishlashi uchun ishonchli poydevor kerak.',
      tone: 'slate',
      items: [
        { id: 'tarmoq', title: 'Tarmoq loyihalash', body: 'Strukturalangan kabel tizimi, kommutatsiya, Wi-Fi qamrovi hisobi. Sxema va hujjat bilan topshiriladi.' },
        { id: 'server', title: 'Server va virtualizatsiya', body: 'Server tanlash, virtualizatsiya, zaxira nusxa siyosati va monitoring. Bulut yoki lokal — vazifaga qarab.' },
        { id: 'montaj', title: 'Videokuzatuv montaji', body: 'Kamera joylashuvi loyihasi, montaj, videoserver sozlash va mobil kirishni ulash.' },
        { id: 'acs', title: 'Kirish nazorati montaji', body: 'Turniket, eshik va shlagbaum oʻrnatish, huquqlar jadvali va HR davomati bilan bogʻlash.' },
      ],
    },
    {
      id: 'qollab-quvvatlash',
      title: 'Qoʻllab-quvvatlash',
      lead: 'Ishga tushirish tugash nuqtasi emas.',
      tone: 'green',
      items: [
        { id: 'sla', title: 'SLA texnik yordam', body: 'Kelishilgan javob muddati bilan yordam. Murojaat tizimda qayd etiladi, bajarilish vaqti oʻlchanadi.' },
        { id: 'autsorsing', title: 'IT autsorsing', body: 'Oʻz IT boʻlimingiz oʻrniga yoki uni kuchaytirish uchun — abonent toʻlovi asosida.' },
        { id: 'monitoring', title: 'Monitoring 24/7', body: 'Server, tarmoq va kameralar holati avtomatik kuzatiladi; nosozlik sizdan oldin bizga xabar beradi.' },
        { id: 'oqitish', title: 'Xodimlarni oʻqitish', body: 'Rol boʻyicha qoʻllanma, video darslik va ichki administrator tayyorlash.' },
      ],
    },
  ],
};
