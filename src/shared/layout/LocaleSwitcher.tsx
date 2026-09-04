import { Link as RouterLink, useLocation } from 'react-router-dom';
import { localeMeta, locales } from '@/i18n/config';
import { useLocale, useUi } from '@/i18n/context';
import { stripLocale, withLocale } from '@/i18n/paths';

/**
 * Til almashtirgich. Joriy sahifada qolgan holda tilni almashtiradi:
 * manzildan til prefiksi ajratiladi va boshqa til bilan qayta yigʻiladi,
 * `?search` va `#hash` saqlanadi. Havola sifatida chiziladi — shuning uchun
 * yangi oynada ochish va indekslash ishlaydi.
 */
export function LocaleSwitcher({ onNavigate, block = false }: { onNavigate?: () => void; block?: boolean }) {
  const active = useLocale();
  const ui = useUi();
  const location = useLocation();
  const { path } = stripLocale(location.pathname);

  return (
    <div
      className={`inline-flex items-center rounded-pill border border-n-200 p-0.5 ${block ? 'w-full' : ''}`}
      role="group"
      aria-label={ui.language}
    >
      {locales.map((locale) => {
        const isActive = locale === active;
        return (
          <RouterLink
            key={locale}
            to={`${withLocale(path, locale)}${location.search}${location.hash}`}
            onClick={onNavigate}
            hrefLang={localeMeta[locale].htmlLang}
            aria-current={isActive ? 'true' : undefined}
            className={`rounded-pill px-3 py-1 text-fine font-semibold uppercase tracking-[0.08em] transition-colors duration-200 ${
              block ? 'flex-1 text-center' : ''
            } ${isActive ? 'bg-n-900 text-n-0' : 'text-n-600 hover:text-n-900'}`}
          >
            <span className="sr-only">{localeMeta[locale].full}</span>
            <span aria-hidden="true">{localeMeta[locale].short}</span>
          </RouterLink>
        );
      })}
    </div>
  );
}
