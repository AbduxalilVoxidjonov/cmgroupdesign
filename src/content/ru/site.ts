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
          { label: 'HR и кадровый учёт', to: '/yechimlar#hr' },
          { label: 'CRM — продажи и клиенты', to: '/yechimlar#crm' },
          { label: 'ERP — управление ресурсами', to: '/yechimlar#erp' },
          { label: 'Документооборот', to: '/yechimlar#hujjat' },
          { label: 'Все модули', to: '/yechimlar' },
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
    label: 'Услуги',
    to: '/xizmatlar',
    groups: [
      {
        title: 'Внедрение',
        items: [
          { label: 'Аудит процессов', to: '/xizmatlar#audit' },
          { label: 'Техническое задание', to: '/xizmatlar#tt' },
          { label: 'Поэтапное внедрение', to: '/xizmatlar#joriy' },
          { label: 'Перенос данных', to: '/xizmatlar#migratsiya' },
          { label: 'Процесс работы', to: '/jarayon' },
        ],
      },
      {
        title: 'Разработка',
        items: [
          { label: 'Заказная разработка', to: '/xizmatlar#buyurtma' },
          { label: 'Мобильные приложения', to: '/xizmatlar#mobil' },
          { label: 'API и интеграции', to: '/xizmatlar#api' },
          { label: 'Обновление старой системы', to: '/xizmatlar#modernizatsiya' },
        ],
      },
      {
        title: 'Инфраструктура',
        items: [
          { label: 'Проектирование сети', to: '/xizmatlar#tarmoq' },
          { label: 'Серверы и виртуализация', to: '/xizmatlar#server' },
          { label: 'Монтаж видеонаблюдения', to: '/xizmatlar#montaj' },
          { label: 'Монтаж СКУД', to: '/xizmatlar#acs' },
        ],
      },
      {
        title: 'Поддержка',
        items: [
          { label: 'Техподдержка по SLA', to: '/xizmatlar#sla' },
          { label: 'ИТ-аутсорсинг', to: '/xizmatlar#autsorsing' },
          { label: 'Мониторинг 24/7', to: '/xizmatlar#monitoring' },
          { label: 'Обучение сотрудников', to: '/xizmatlar#oqitish' },
        ],
      },
    ],
  },
  {
    label: 'Отрасли',
    to: '/sohalar',
    groups: [
      {
        title: 'Отрасли, с которыми работаем',
        items: [
          { label: 'Учебные центры', to: '/sohalar#talim' },
          { label: 'Торговля и дистрибуция', to: '/sohalar#savdo' },
          { label: 'Производство', to: '/sohalar#ishlab-chiqarish' },
          { label: 'Строительство и недвижимость', to: '/sohalar#qurilish' },
          { label: 'Логистика', to: '/sohalar#logistika' },
          { label: 'Сфера услуг', to: '/sohalar#xizmat' },
        ],
      },
      {
        title: 'Масштаб компании',
        items: [
          { label: 'Малый бизнес', to: '/sohalar#kichik' },
          { label: 'Средний бизнес', to: '/sohalar#orta' },
          { label: 'Крупное предприятие', to: '/sohalar#yirik' },
          { label: 'Сеть филиалов', to: '/sohalar#filial' },
        ],
      },
    ],
  },
  {
    label: 'Инструменты',
    to: '/vositalar',
    groups: [
      {
        title: 'Расчёты',
        items: [
          { label: 'ROI-калькулятор', to: '/vositalar#roi' },
          { label: 'Оценка бюджета', to: '/vositalar#byudjet' },
          { label: 'Расчёт покрытия камер', to: '/vositalar#kamera' },
          { label: 'Калькулятор лицензий', to: '/vositalar#litsenziya' },
        ],
      },
      {
        title: 'Выбор и тест',
        items: [
          { label: 'Тест готовности', to: '/vositalar#test' },
          { label: 'Конфигуратор модулей', to: '/vositalar#konfigurator' },
          { label: 'Таблица сравнения', to: '/vositalar#taqqoslash' },
          { label: 'Запросить демо', to: '/vositalar#demo' },
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
          { label: 'Все статьи', to: '/tahlillar' },
          { label: 'Опыт внедрения', to: '/tahlillar#case' },
          { label: 'Выбор технологий', to: '/tahlillar#technology' },
          { label: 'Управление', to: '/tahlillar#management' },
          { label: 'Безопасность', to: '/tahlillar#security' },
        ],
      },
      {
        title: 'Другие форматы',
        items: [
          { label: 'Вебинары', to: '/resurslar#vebinar' },
          { label: 'Видеоуроки', to: '/resurslar#video' },
          { label: 'Центр загрузок', to: '/resurslar#yuklab-olish' },
        ],
      },
    ],
  },
  {
    label: 'Ресурсы',
    to: '/resurslar',
    groups: [
      {
        title: 'Ресурсы',
        items: [
          { label: 'Руководства', to: '/resurslar#qollanma' },
          { label: 'Видеоуроки', to: '/resurslar#video' },
          { label: 'Вопросы и ответы (FAQ)', to: '/resurslar#faq' },
          { label: 'Новости', to: '/resurslar#yangiliklar' },
          { label: 'Вебинары', to: '/resurslar#vebinar' },
          { label: 'Центр загрузок', to: '/resurslar#yuklab-olish' },
          { label: 'Сертификаты и лицензии', to: '/resurslar#sertifikat' },
          { label: 'Вакансии', to: '/resurslar#vakansiya' },
          { label: 'Партнёрская программа', to: '/resurslar#hamkorlik' },
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
          { label: 'Технологические партнёры', to: '/biz-haqimizda#hamkorlar' },
          { label: 'Сертификаты и лицензии', to: '/resurslar#sertifikat' },
          { label: 'Вакансии', to: '/resurslar#vakansiya' },
        ],
      },
    ],
  },
  { label: 'Контакты', to: '/boglanish' },
];

export const footer: FooterContent = {
  left: [
    { label: 'Решения', to: '/yechimlar' },
    { label: 'Услуги', to: '/xizmatlar' },
    { label: 'Отрасли', to: '/sohalar' },
    { label: 'Инструменты', to: '/vositalar' },
    { label: 'Процесс работы', to: '/jarayon' },
    { label: 'Аналитика и статьи', to: '/tahlillar' },
  ],
  right: [
    { label: 'О нас', to: '/biz-haqimizda' },
    { label: 'Ресурсы', to: '/resurslar' },
    { label: 'Вакансии', to: '/resurslar#vakansiya' },
    { label: 'Контакты', to: '/boglanish' },
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
