import type { ToolsPage } from '../types';

export const toolsPage: ToolsPage = {
  meta: {
    title: 'Vositalar — CM Group',
    description: 'Byudjet, ROI va qamrovni oldindan baholash uchun kalkulyator va soʻrovnomalar.',
  },
  hero: {
    eyebrow: 'Vositalar',
    title: 'Qaror qabul qilishdan oldin hisoblab koʻring',
    lead: 'Taxminiy byudjet, qoplanish muddati va kerakli qurilmalar sonini uchrashuvdan oldin baholaydigan vositalar.',
  },
  intro:
    'Vositalar dastlabki baholash uchun. Yakuniy raqamlar audit va texnik topshiriq asosida aniqlanadi.',
  itemCta: 'Ochish',
  note: 'Har bir hisob-kitob natijasini PDF sifatida saqlash yoki bevosita mutaxassisga yuborish mumkin.',
  tools: [
    { id: 'roi', title: 'ROI kalkulyatori', body: 'Qoʻlda bajarilayotgan ishga ketayotgan soatlarni kiriting — tizim qancha vaqtda oʻzini qoplashini koʻrsatadi.', note: '3 daqiqa · 6 savol', tone: 'deep' },
    { id: 'byudjet', title: 'Byudjetni baholash', body: 'Xodimlar soni, modullar va filiallar boʻyicha taxminiy loyiha byudjeti oraligʻi.', note: '2 daqiqa · 5 savol', tone: 'sky' },
    { id: 'kamera', title: 'Kamera qamrovi hisoblagichi', body: 'Obyekt maydoni va shift balandligiga qarab kerakli kamera soni va turini hisoblaydi.', note: 'Chizma yuklash mumkin', tone: 'green' },
    { id: 'litsenziya', title: 'Litsenziya kalkulyatori', body: 'Foydalanuvchilar soni va rollarga qarab yillik litsenziya xarajati.', note: 'Yillik/oylik solishtirish', tone: 'amber' },
    { id: 'test', title: 'Avtomatlashtirishga tayyorlik testi', body: 'Kompaniyangiz qaysi bosqichda ekanini va nimadan boshlash kerakligini aniqlaydi.', note: '12 savol · natija darhol', tone: 'violet' },
    { id: 'konfigurator', title: 'Modul konfiguratori', body: 'Kerakli modullarni belgilang — tizim tarkibi va bogʻlanishlar sxemasini chizib beradi.', note: 'Sxemani yuklab olish', tone: 'slate' },
    { id: 'taqqoslash', title: 'Taqqoslash jadvali', body: 'Tayyor tizim, buyurtma dastur va mavjudini yangilash — uch yillik egalik qiymati boʻyicha.', note: 'Jadvalni eksport qilish', tone: 'deep' },
    { id: 'demo', title: 'Demo soʻrash', body: 'Modullarni sizning maʼlumotlaringiz namunasida jonli koʻrsatamiz.', note: '40 daqiqa · onlayn', tone: 'sky' },
  ],
};
