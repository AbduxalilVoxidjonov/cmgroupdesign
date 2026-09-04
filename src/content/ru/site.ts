import { contacts } from '../shared';
import type { FooterContent, NavItem, SiteInfo, UtilityNavItem } from '../types';

export const site: SiteInfo = {
  ...contacts,
  tagline: 'Строим бизнес-системы с нуля',
  address: 'г. Ташкент, Мирзо-Улугбекский район',
  workHours: 'Понедельник – суббота, 09:00 – 18:00',
};

export const utilityNav: readonly UtilityNavItem[] = [
  { label: 'Клиентский портал', href: `https://${contacts.domain}`, external: true },
  { label: 'Техническая поддержка', href: `mailto:${contacts.supportEmail}`, external: false },
];

export const mainNav: readonly NavItem[] = [
  {
    label: 'Решения',
    to: '/yechimlar',
    groups: [
      {
        title: 'Системы управления',
        items: [
          { label: 'HR и кадровый учет', to: '/yechimlar#hr' },
          { label: 'CRM — продажи и клиенты', to: '/yechimlar#crm' },
          { label: 'ERP — управление ресурсами', to: '/yechimlar#erp' },
          { label: 'Документооборот', to: '/yechimlar#hujjat' },
        ],
      },
      {
        title: 'Инфраструктура',
        items: [
          { label: 'Видеонаблюдение и безопасность', to: '/yechimlar#xavfsizlik' },
          { label: 'Контроль доступа (СКУД)', to: '/yechimlar#acs' },
          { label: 'Сеть и серверы', to: '/yechimlar#tarmoq' },
          { label: 'Интеграции и API', to: '/yechimlar#integratsiya' },
        ],
      },
    ],
  },
  {
    label: 'Отрасли',
    to: '/sohalar',
    groups: [
      {
        title: 'Отрасли, в которых мы работаем',
        items: [
          { label: 'Учебные центры', to: '/sohalar#talim' },
          { label: 'Торговля и дистрибуция', to: '/sohalar#savdo' },
          { label: 'Производство', to: '/sohalar#ishlab-chiqarish' },
          { label: 'Строительство и недвижимость', to: '/sohalar#qurilish' },
          { label: 'Логистика', to: '/sohalar#logistika' },
          { label: 'Сфера услуг', to: '/sohalar#xizmat' },
        ],
      },
    ],
  },
  {
    label: 'Процесс',
    to: '/jarayon',
    groups: [
      {
        title: 'Как мы работаем',
        items: [
          { label: 'Анализ и аудит', to: '/jarayon#tahlil' },
          { label: 'Архитектура', to: '/jarayon#arxitektura' },
          { label: 'Внедрение', to: '/jarayon#joriy-etish' },
          { label: 'Обучение', to: '/jarayon#oqitish' },
          { label: 'Поддержка', to: '/jarayon#qollab-quvvatlash' },
        ],
      },
    ],
  },
  {
    label: 'Аналитика',
    to: '/tahlillar',
    groups: [
      {
        title: 'Материалы',
        items: [
          { label: 'Все материалы', to: '/tahlillar' },
          { label: 'Опыт внедрения', to: '/tahlillar#case' },
          { label: 'Выбор технологий', to: '/tahlillar#texnologiya' },
        ],
      },
    ],
  },
  {
    label: 'О нас',
    to: '/biz-haqimizda',
    groups: [
      {
        title: 'Компания',
        items: [
          { label: 'Наш подход', to: '/biz-haqimizda#yondashuv' },
          { label: 'Команда', to: '/biz-haqimizda#jamoa' },
          { label: 'Партнеры', to: '/biz-haqimizda#hamkorlar' },
        ],
      },
    ],
  },
  { label: 'Контакты', to: '/boglanish' },
];

export const footer: FooterContent = {
  left: [
    { label: 'Решения', to: '/yechimlar' },
    { label: 'Отрасли', to: '/sohalar' },
    { label: 'Как мы работаем', to: '/jarayon' },
    { label: 'Аналитика и материалы', to: '/tahlillar' },
    { label: 'Контакты', to: '/boglanish' },
  ],
  right: [
    { label: 'О нас', to: '/biz-haqimizda' },
    { label: 'Команда', to: '/biz-haqimizda#jamoa' },
    { label: 'Партнеры', to: '/biz-haqimizda#hamkorlar' },
    { label: 'Политика конфиденциальности', to: '/boglanish#maxfiylik' },
    { label: 'Условия использования', to: '/boglanish#shartlar' },
  ],
  addressLabel: 'Адрес',
  contactLabel: 'Контакты',
  hoursLabel: 'Время работы',
  cta: 'Обсудить проект',
  legal:
    'Этот сайт носит общий информационный характер. Указанные на страницах сроки, цены и примеры конфигураций являются ориентировочными; точные условия определяются по итогам аудита проекта и технического задания. {legalName} обеспечивает конфиденциальность переданных сведений в рамках договора.',
};
