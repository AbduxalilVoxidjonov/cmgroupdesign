/** Saytda mavjud tillar. Birinchisi — asosiy (prefikssiz) til. */
export const locales = ['uz', 'ru', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'uz';

/** Til tanlash tugmalari va `<html lang>` uchun maʼlumot. */
export const localeMeta: Record<Locale, { short: string; full: string; htmlLang: string }> = {
  uz: { short: 'UZ', full: 'Oʻzbekcha', htmlLang: 'uz' },
  ru: { short: 'RU', full: 'Русский', htmlLang: 'ru' },
  en: { short: 'EN', full: 'English', htmlLang: 'en' },
};

/** Berilgan qiymat mavjud tillardan biri ekanini tekshiradi. */
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
