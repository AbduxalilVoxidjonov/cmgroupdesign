import { useEffect, useMemo } from 'react';
import type { ReactNode } from 'react';
import { getContent } from '@/content';
import { localeMeta, type Locale } from './config';
import { LocaleContext, type LocaleValue } from './context';
import { getUi } from './ui';
import { useAlternateLinks } from './useAlternateLinks';

/**
 * Joriy tilni va shu tildagi kontentni butun daraxtga tarqatadi.
 * Til manzildan aniqlanadi (`/` — oʻzbekcha, `/ru` — ruscha), shuning uchun
 * har bir sahifani havola sifatida ulashish mumkin.
 */
export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const value = useMemo<LocaleValue>(
    () => ({ locale, content: getContent(locale), ui: getUi(locale) }),
    [locale],
  );

  useEffect(() => {
    document.documentElement.lang = localeMeta[locale].htmlLang;
  }, [locale]);

  useAlternateLinks(locale);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
