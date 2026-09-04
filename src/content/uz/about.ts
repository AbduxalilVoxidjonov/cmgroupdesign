import { contacts, partners } from '../shared';
import type { AboutPage } from '../types';

export const aboutPage: AboutPage = {
  meta: {
    title: 'Biz haqimizda — butun kontur uchun bitta javobgar jamoa',
    description: `${contacts.legalName} dasturiy taʼminot, tarmoq va xavfsizlik tizimlarini bitta arxitekturada loyihalaydi, joriy etadi va qoʻllab-quvvatlaydi.`,
  },
  hero: {
    eyebrow: 'Biz haqimizda',
    title: 'Butun kontur uchun bitta javobgar jamoa',
    lead: `${contacts.legalName} dasturiy taʼminot, tarmoq va xavfsizlik tizimlarini bitta arxitekturada loyihalaydi va joriy etadi.`,
  },
  approachTitle: 'Bizning yondashuv',
  principles: [
    {
      title: 'Avval jarayon, keyin dastur',
      body: 'Tartibsiz jarayonni avtomatlashtirish uni tezroq tartibsiz qiladi. Shuning uchun har doim audit va tavsifdan boshlaymiz.',
    },
    {
      title: 'Mijoz maʼlumoti — mijozniki',
      body: 'Baza va serverga toʻliq kirish huquqi mijozda qoladi. Hech qanday “qulflangan” yechim bermaymiz.',
    },
    {
      title: 'Bitta javobgar nuqta',
      body: 'Dastur, tarmoq va qurilma — hammasi bitta shartnoma va bitta loyiha rahbari zimmasida.',
    },
    {
      title: 'Hujjatlashtirilgan topshirish',
      body: 'Sxema, qoʻllanma va kirish maʼlumotlari yozma topshiriladi. Jamoa almashsa ham tizim ishlashda davom etadi.',
    },
  ],
  team: {
    title: 'Jamoa',
    caption: 'Jamoa tarkibi',
    roleColumn: 'Yoʻnalish',
    countColumn: 'Soni',
    noteColumn: 'Javobgarlik',
    rows: [
      { role: 'Loyiha rahbari', count: 4, note: 'Muddat, byudjet va topshirish uchun javobgar' },
      { role: 'Biznes-tahlilchi', count: 3, note: 'Jarayonlarni oʻrganadi va texnik topshiriq yozadi' },
      { role: 'Dasturchi', count: 12, note: 'Backend, frontend va mobil yoʻnalishlar' },
      { role: 'Infratuzilma muhandisi', count: 6, note: 'Tarmoq, server, videokuzatuv va ACS' },
      { role: 'Texnik yordam', count: 5, note: 'Ishga tushirilgan tizimlarni kuzatadi' },
    ],
  },
  partners: {
    title: 'Texnologik hamkorlar',
    intro: 'Vendor tanlash obyekt sharoiti va byudjetga qarab hal qilinadi — bitta brendga bogʻlanib qolmaymiz.',
  },
};

export { partners };
