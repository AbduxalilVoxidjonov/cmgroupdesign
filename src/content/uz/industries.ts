import type { IndustriesPage, Industry } from '../types';

export const industries: readonly Industry[] = [
  {
    id: 'talim',
    title: 'Taʼlim markazlari',
    lead: 'Oʻquvchi qabulidan davomat va toʻlovgacha — bitta oqim.',
    outcomes: ['Guruh va dars jadvali', 'Davomat va toʻlov nazorati', 'Ota-onaga avtomatik xabar'],
    tone: 'sky',
  },
  {
    id: 'savdo',
    title: 'Savdo va distribyutsiya',
    lead: 'Ombor qoldigʻi, sotuv va qarzdorlik real vaqtda koʻrinadi.',
    outcomes: ['Koʻp ombor hisobi', 'Savdo agenti mobil ilovasi', 'Debitorlik nazorati'],
    tone: 'amber',
  },
  {
    id: 'ishlab-chiqarish',
    title: 'Ishlab chiqarish',
    lead: 'Xomashyodan tayyor mahsulotgacha tannarx hisobi.',
    outcomes: ['Retsept va normalar', 'Smena va brigada hisobi', 'Tannarx kalkulyatsiyasi'],
    tone: 'slate',
  },
  {
    id: 'qurilish',
    title: 'Qurilish va koʻchmas mulk',
    lead: 'Obyekt, smeta va material sarfi bitta panelda.',
    outcomes: ['Obyekt boʻyicha byudjet', 'Material sarfi nazorati', 'Obyekt videokuzatuvi'],
    tone: 'deep',
  },
  {
    id: 'logistika',
    title: 'Logistika',
    lead: 'Yuk, transport va yoʻnalish — reja va fakt solishtiriladi.',
    outcomes: ['Yoʻnalish rejalashtirish', 'Transport xarajati hisobi', 'Yetkazib berish statusi'],
    tone: 'green',
  },
  {
    id: 'xizmat',
    title: 'Xizmat koʻrsatish',
    lead: 'Murojaatdan yopilgan ishgacha — muddat va sifat oʻlchanadi.',
    outcomes: ['Ariza va navbat tizimi', 'Usta va texnik jadvali', 'Mijoz baholash soʻrovi'],
    tone: 'violet',
  },
];

export const industriesPage: IndustriesPage = {
  meta: {
    title: 'Sohalar — taʼlim, savdo, ishlab chiqarish, logistika',
    description:
      'Taʼlim markazlari, savdo, ishlab chiqarish, qurilish, logistika va xizmat koʻrsatish uchun oldindan sozlangan hisobot, huquq va jarayon shablonlari.',
  },
  hero: {
    eyebrow: 'Sohalar',
    title: 'Har bir soha oʻz hisobotini talab qiladi',
    lead: 'Modullar bir xil, lekin hisobot, huquqlar va jarayon shabloni sohaga qarab oldindan sozlanadi.',
  },
  itemCta: 'Soha boʻyicha soʻrov',
};
