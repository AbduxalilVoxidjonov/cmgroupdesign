import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { defaultLocale, localeMeta, locales, type Locale } from './config';
import { stripLocale, withLocale } from './paths';

/**
 * `<link rel="canonical">` va har bir til uchun `<link rel="alternate" hreflang>`
 * teglarini joriy sahifaga moslab yangilaydi.
 *
 * Til almashtirgich ochiluvchi menyuda boʻlgani uchun tillar oʻrtasidagi
 * bogʻlanish sahifa kodida koʻrinmaydi — bu teglar qidiruv tizimlariga
 * qaysi sahifa qaysi tilning muqobili ekanini aytadi.
 */
export function useAlternateLinks(locale: Locale) {
  const location = useLocation();

  useEffect(() => {
    const { path } = stripLocale(location.pathname);
    const { origin } = window.location;
    const head = document.head;

    // Oldingi teglar olib tashlanadi — sahifa almashganda eskisi qolmasin
    for (const node of head.querySelectorAll('link[data-i18n]')) node.remove();

    const add = (rel: string, href: string, hreflang?: string) => {
      const link = document.createElement('link');
      link.rel = rel;
      link.href = href;
      if (hreflang) link.hreflang = hreflang;
      link.dataset.i18n = 'alt';
      head.appendChild(link);
    };

    add('canonical', origin + withLocale(path, locale));
    for (const entry of locales) {
      add('alternate', origin + withLocale(path, entry), localeMeta[entry].htmlLang);
    }
    // Til aniqlanmagan foydalanuvchi asosiy tilga yoʻnaltiriladi
    add('alternate', origin + withLocale(path, defaultLocale), 'x-default');
  }, [locale, location.pathname]);
}
