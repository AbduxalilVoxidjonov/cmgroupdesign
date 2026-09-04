import type { Locale } from './config';

/**
 * Kontentga emas, interfeysga tegishli qisqa matnlar.
 * Sahifa matnlari `src/content/<til>` da — bu yerda faqat tugma, aria-label
 * va sanoq kabi umumiy elementlar.
 */
export interface UiStrings {
  skipToContent: string;
  mainNavLabel: string;
  mobileNavLabel: string;
  menu: string;
  search: string;
  sectionPage: string;
  /** `{name}` oʻrniga sayt nomi qoʻyiladi. */
  homeAria: string;
  corporateClients: string;
  requestQuote: string;
  language: string;
  allFilter: string;
  /** Ruscha uchun son shakllari toʻgʻri tanlanadi. */
  solutionsCount: (count: number) => string;
  materialsCount: (count: number) => string;
}

/** Rus tilidagi son shakllari: 1 → biri, 2–4 → ikkinchisi, qolgani → uchinchisi. */
function ruPlural(count: number, forms: [string, string, string]): string {
  const mod100 = count % 100;
  const mod10 = count % 10;
  if (mod100 >= 11 && mod100 <= 14) return forms[2];
  if (mod10 === 1) return forms[0];
  if (mod10 >= 2 && mod10 <= 4) return forms[1];
  return forms[2];
}

const uz: UiStrings = {
  skipToContent: 'Asosiy mazmunga oʻtish',
  mainNavLabel: 'Asosiy',
  mobileNavLabel: 'Mobil menyu',
  menu: 'Menyu',
  search: 'Qidiruv',
  sectionPage: 'Boʻlim sahifasi',
  homeAria: '{name} — bosh sahifa',
  corporateClients: 'Korporativ mijozlar',
  requestQuote: 'Soʻrov qoldirish',
  language: 'Til',
  allFilter: 'Barchasi',
  solutionsCount: (count) => `${count} ta yechim`,
  materialsCount: (count) => `${count} ta material`,
};

const ru: UiStrings = {
  skipToContent: 'Перейти к основному содержанию',
  mainNavLabel: 'Основное меню',
  mobileNavLabel: 'Мобильное меню',
  menu: 'Меню',
  search: 'Поиск',
  sectionPage: 'Страница раздела',
  homeAria: '{name} — главная страница',
  corporateClients: 'Корпоративным клиентам',
  requestQuote: 'Оставить заявку',
  language: 'Язык',
  allFilter: 'Все',
  solutionsCount: (count) => `${count} ${ruPlural(count, ['решение', 'решения', 'решений'])}`,
  materialsCount: (count) => `${count} ${ruPlural(count, ['материал', 'материала', 'материалов'])}`,
};

const en: UiStrings = {
  skipToContent: 'Skip to main content',
  mainNavLabel: 'Main',
  mobileNavLabel: 'Mobile menu',
  menu: 'Menu',
  search: 'Search',
  sectionPage: 'Section page',
  homeAria: '{name} — home page',
  corporateClients: 'For corporate clients',
  requestQuote: 'Submit a request',
  language: 'Language',
  allFilter: 'All',
  solutionsCount: (count) => `${count} ${count === 1 ? 'solution' : 'solutions'}`,
  materialsCount: (count) => `${count} ${count === 1 ? 'article' : 'articles'}`,
};

const dictionaries: Record<Locale, UiStrings> = { uz, ru, en };

export function getUi(locale: Locale): UiStrings {
  return dictionaries[locale];
}
