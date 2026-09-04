import type { Locale } from '@/i18n/config';
import type { ContentBundle } from './types';
import { uz } from './uz';
import { ru } from './ru';
import { en } from './en';

const bundles: Record<Locale, ContentBundle> = { uz, ru, en };

/** Tanlangan tildagi toʻliq kontent toʻplamini qaytaradi. */
export function getContent(locale: Locale): ContentBundle {
  return bundles[locale];
}

export type { ContentBundle };
