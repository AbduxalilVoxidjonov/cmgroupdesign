import { defaultLocale, isLocale, type Locale } from './config';

/**
 * Kanonik yoʻlga til prefiksini qoʻshadi.
 * Asosiy til (inglizcha) prefikssiz qoladi: `/yechimlar`, oʻzbekchasi esa `/uz/yechimlar`.
 */
export function withLocale(to: string, locale: Locale): string {
  if (locale === defaultLocale) return to;
  if (!to.startsWith('/')) return to;
  if (to === '/') return `/${locale}`;
  return `/${locale}${to}`;
}

/** Manzildan tilni ajratib oladi va kanonik (prefikssiz) yoʻlni qaytaradi. */
export function stripLocale(pathname: string): { locale: Locale; path: string } {
  const [, first = '', ...rest] = pathname.split('/');
  if (!isLocale(first)) return { locale: defaultLocale, path: pathname };
  const path = rest.length > 0 ? `/${rest.join('/')}` : '/';
  return { locale: first, path };
}
