import { LocaleProvider } from '@/i18n/LocaleProvider';
import type { Locale } from '@/i18n/config';
import { RootLayout } from '@/shared/layout/RootLayout';

/** Bitta til uchun ildiz: kontekst + umumiy layout. */
export function LocaleRoot({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <RootLayout />
    </LocaleProvider>
  );
}
