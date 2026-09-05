/** Saytda mavjud tillar. Birinchisi — asosiy (prefikssiz) til. */
export const locales = ['en', 'uz', 'ru'] as const;

export type Locale = (typeof locales)[number];

/** Saytga birinchi kirganda koʻrinadigan til — ingliz tili (`/` prefikssiz). */
export const defaultLocale: Locale = 'en';

/** Til tanlash tugmalari va `<html lang>` uchun maʼlumot. */
export const localeMeta: Record<Locale, { short: string; full: string; htmlLang: string }> = {
  en: { short: 'EN', full: 'English', htmlLang: 'en' },
  uz: { short: 'UZ', full: 'Oʻzbekcha', htmlLang: 'uz' },
  ru: { short: 'RU', full: 'Русский', htmlLang: 'ru' },
};

/** Berilgan qiymat mavjud tillardan biri ekanini tekshiradi. */
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
