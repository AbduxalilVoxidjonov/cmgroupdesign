import { createContext, useContext } from 'react';
import type { ContentBundle } from '@/content/types';
import type { Locale } from './config';
import type { UiStrings } from './ui';

export type LocaleValue = {
  locale: Locale;
  content: ContentBundle;
  ui: UiStrings;
};

/** Provayder qiymati. `LocaleProvider` ichida toʻldiriladi. */
export const LocaleContext = createContext<LocaleValue | null>(null);

function useLocaleContext(): LocaleValue {
  const value = useContext(LocaleContext);
  if (!value) throw new Error('LocaleProvider ichida chaqirilishi kerak');
  return value;
}

/** Joriy til kodi. */
export function useLocale(): Locale {
  return useLocaleContext().locale;
}

/** Joriy tildagi sahifa matnlari. */
export function useContent(): ContentBundle {
  return useLocaleContext().content;
}

/** Joriy tildagi interfeys matnlari. */
export function useUi(): UiStrings {
  return useLocaleContext().ui;
}
