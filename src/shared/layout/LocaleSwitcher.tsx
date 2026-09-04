import { useEffect, useRef, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { localeMeta, locales } from '@/i18n/config';
import { useLocale, useUi } from '@/i18n/context';
import { stripLocale, withLocale } from '@/i18n/paths';
import { CheckIcon, ChevronDown, GlobeIcon } from '@/shared/ui/icons';

/**
 * Til almashtirgich.
 *
 * Joriy sahifada qolgan holda tilni almashtiradi: manzildan til prefiksi
 * ajratiladi va boshqa til bilan qayta yigʻiladi, `?search` va `#hash`
 * saqlanadi. Variantlar har doim havola sifatida chiziladi — yangi oynada
 * ochish va indekslash ishlaydi.
 *
 * `variant`:
 *  - `menu` (asosiy) — ixcham tugma + ochiluvchi roʻyxat. Til soni ortsa ham
 *    sarlavhadagi joyni egallamaydi.
 *  - `inline` — barcha tillar yonma-yon (mobil menyuda, joy yetarli boʻlganda).
 */
export function LocaleSwitcher({
  variant = 'menu',
  onNavigate,
}: {
  variant?: 'menu' | 'inline';
  onNavigate?: () => void;
}) {
  const active = useLocale();
  const ui = useUi();
  const location = useLocation();
  const { path } = stripLocale(location.pathname);
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  // Manzil oʻzgarganda roʻyxat yopiladi
  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    function onPointerDown(event: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, [open]);

  /** Shu tilga oʻtish uchun toʻliq manzil. */
  const hrefFor = (locale: (typeof locales)[number]) =>
    `${withLocale(path, locale)}${location.search}${location.hash}`;

  if (variant === 'inline') {
    return (
      <div
        className="inline-flex w-full items-center rounded-pill border border-n-200 p-0.5"
        role="group"
        aria-label={ui.language}
      >
        {locales.map((locale) => {
          const isActive = locale === active;
          return (
            <RouterLink
              key={locale}
              to={hrefFor(locale)}
              onClick={onNavigate}
              hrefLang={localeMeta[locale].htmlLang}
              aria-current={isActive ? 'true' : undefined}
              className={`flex-1 rounded-pill px-3 py-1.5 text-center text-fine font-semibold uppercase tracking-[0.08em] transition-colors duration-200 ${
                isActive ? 'bg-n-900 text-n-0' : 'text-n-600 hover:text-n-900'
              }`}
            >
              <span className="sr-only">{localeMeta[locale].full}</span>
              <span aria-hidden="true">{localeMeta[locale].short}</span>
            </RouterLink>
          );
        })}
      </div>
    );
  }

  return (
    <div ref={boxRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={ui.language}
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-1.5 rounded-pill border border-n-200 px-3 py-1.5 text-fine font-semibold uppercase tracking-[0.08em] text-n-900 transition-colors duration-200 hover:border-n-900"
      >
        <GlobeIcon className="opacity-70" />
        {localeMeta[active].short}
        <ChevronDown className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open ? (
        <ul className="absolute right-0 top-full z-50 mt-2 min-w-[168px] overflow-hidden rounded-card border border-n-200 bg-n-0 py-1 shadow-panel">
          {locales.map((locale) => {
            const isActive = locale === active;
            return (
              <li key={locale}>
                <RouterLink
                  to={hrefFor(locale)}
                  onClick={() => {
                    setOpen(false);
                    onNavigate?.();
                  }}
                  hrefLang={localeMeta[locale].htmlLang}
                  aria-current={isActive ? 'true' : undefined}
                  className={`flex items-center justify-between gap-3 px-4 py-2.5 text-base transition-colors duration-200 hover:bg-n-50 ${
                    isActive ? 'font-medium text-n-900' : 'text-n-600'
                  }`}
                >
                  {localeMeta[locale].full}
                  {isActive ? <CheckIcon className="text-accent-deep" /> : null}
                </RouterLink>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
