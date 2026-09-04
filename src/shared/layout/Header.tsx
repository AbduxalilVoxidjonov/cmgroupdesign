import { useEffect, useId, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, NavLink } from '@/i18n/Link';
import { useContent, useUi } from '@/i18n/context';
import { telHref } from '@/content/shared';
import type { NavItem } from '@/content/types';
import { Logo } from '@/shared/ui/Logo';
import { LocaleSwitcher } from './LocaleSwitcher';
import { ChevronDown, MenuIcon, SearchIcon } from '@/shared/ui/icons';

function MegaPanel({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const ui = useUi();
  if (!item.groups) return null;
  return (
    <div className="absolute left-0 right-0 top-full z-40 border-b border-n-200 bg-n-0 shadow-panel">
      <div className="page-px">
        <div className="page-mw grid gap-10 py-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-eyebrow uppercase text-n-600">{item.label}</p>
            <Link
              to={item.to}
              onClick={onNavigate}
              className="mt-2 inline-block text-h4-m font-normal text-n-900 underline-offset-4 hover:underline"
            >
              {ui.sectionPage}
            </Link>
            <span className="accent-bar mt-4" aria-hidden="true" />
          </div>
          {item.groups.map((group) => (
            <div key={group.title}>
              <p className="mb-3 text-meta font-medium text-n-600">{group.title}</p>
              <ul className="space-y-1">
                {group.items.map((child) => (
                  <li key={child.label}>
                    <Link
                      to={child.to}
                      onClick={onNavigate}
                      className="group flex items-center gap-2 py-1 text-base text-n-900 underline-offset-4 hover:text-link"
                    >
                      <span
                        aria-hidden="true"
                        className="h-px w-0 bg-accent transition-all duration-300 ease-soft group-hover:w-4"
                      />
                      <span className="group-hover:underline">{child.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const { site, mainNav, utilityNav } = useContent();
  const ui = useUi();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  const mobileId = useId();
  const activeItem = openIndex === null ? undefined : mainNav[openIndex];

  useEffect(() => {
    setOpenIndex(null);
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenIndex(null);
        setMobileOpen(false);
      }
    }
    function onPointerDown(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpenIndex(null);
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, []);

  // Skroll holati: sarlavha yopishqoq qoladi, o'qish progressi ko'rsatiladi
  useEffect(() => {
    let frame = 0;
    function read() {
      frame = 0;
      const top = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(top > 8);
      setProgress(scrollable > 0 ? Math.min(1, top / scrollable) : 0);
    }
    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(read);
    }
    read();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const navLinkClass = (isActive: boolean) =>
    `relative py-2 text-base font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:origin-left after:bg-accent after:transition-transform after:duration-300 after:ease-soft ${
      isActive ? 'text-n-900 after:scale-x-100' : 'text-n-600 hover:text-n-900 after:scale-x-0 hover:after:scale-x-100'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-n-0/95 backdrop-blur-md transition-shadow duration-300 ease-soft ${
        scrolled ? 'border-n-200 shadow-card' : 'border-n-200'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-n-900 focus:px-3 focus:py-2 focus:text-n-0"
      >
        {ui.skipToContent}
      </a>

      {/* Utility bar — skrollda yig'iladi va joy bo'shatadi */}
      <div
        className={`hidden overflow-hidden border-b border-n-200 transition-all duration-300 ease-soft md:block ${
          scrolled ? 'max-h-0 border-b-0 opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="page-px">
          <div className="page-mw flex items-center gap-7 py-2 text-meta font-medium">
            <span className="text-n-900">{ui.corporateClients}</span>
            <a href={telHref} className="text-n-600 hover:text-n-900">
              {site.phone}
            </a>
            <div className="ml-auto flex items-center gap-7">
              {utilityNav.map((entry) => (
                <a
                  key={entry.label}
                  href={entry.href}
                  {...(entry.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="text-n-900 underline-offset-4 hover:underline"
                >
                  {entry.label}
                  {entry.external ? <span aria-hidden="true"> ↗</span> : null}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div ref={navRef}>
        <div className="page-px">
          <div
            className={`page-mw flex items-center gap-8 transition-all duration-300 ease-soft ${
              scrolled ? 'py-2.5' : 'py-3.5'
            }`}
          >
            <Link to="/" className="shrink-0" aria-label={ui.homeAria.replace('{name}', site.name)}>
              <Logo compact={scrolled} />
            </Link>

            <nav aria-label={ui.mainNavLabel} className="ml-auto hidden lg:block">
              <ul className="flex items-center gap-7">
                {mainNav.map((item, index) => (
                  <li key={item.label} className="relative">
                    {item.groups ? (
                      <button
                        type="button"
                        aria-expanded={openIndex === index}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className={`flex items-center gap-1.5 ${navLinkClass(openIndex === index)}`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                        />
                      </button>
                    ) : (
                      <NavLink to={item.to} className={({ isActive }) => navLinkClass(isActive)}>
                        {item.label}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden shrink-0 lg:block">
              <LocaleSwitcher />
            </div>

            <button
              type="button"
              aria-label={ui.search}
              className="hidden shrink-0 rounded p-2 text-n-900 transition-colors hover:bg-n-50 lg:block"
            >
              <SearchIcon />
            </button>

            <Link
              to="/boglanish"
              className="hidden shrink-0 rounded-pill border border-n-900 bg-n-900 px-5 py-2.5 text-meta font-medium text-n-0 transition-all duration-200 ease-soft hover:-translate-y-0.5 hover:bg-black hover:shadow-lift lg:inline-flex"
            >
              {ui.requestQuote}
            </Link>

            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls={mobileId}
              onClick={() => setMobileOpen((value) => !value)}
              className="ml-auto rounded p-2 text-n-900 hover:bg-n-50 lg:hidden"
            >
              <span className="sr-only">{ui.menu}</span>
              <MenuIcon open={mobileOpen} />
            </button>
          </div>
        </div>

        {activeItem ? <MegaPanel item={activeItem} onNavigate={() => setOpenIndex(null)} /> : null}
      </div>

      {/* Mobil menyu */}
      {mobileOpen ? (
        <div id={mobileId} className="max-h-[70vh] overflow-y-auto border-t border-n-200 bg-n-0 lg:hidden">
          <div className="page-px">
            <nav aria-label={ui.mobileNavLabel} className="page-mw py-2">
              <ul>
                {mainNav.map((item) => (
                  <li key={item.label} className="border-b border-n-200 last:border-b-0">
                    <Link to={item.to} className="block py-3.5 text-base font-medium text-n-900">
                      {item.label}
                    </Link>
                    {item.groups ? (
                      <ul className="pb-3">
                        {item.groups.flatMap((group) => group.items).map((child) => (
                          <li key={child.label}>
                            <Link to={child.to} className="block py-1.5 text-meta text-n-600">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <LocaleSwitcher block onNavigate={() => setMobileOpen(false)} />
              </div>
              <Link to="/boglanish" className="btn btn-primary my-4 w-full">
                {ui.requestQuote}
              </Link>
              <p className="pb-4 text-meta text-n-600">{site.phone} · {site.email}</p>
            </nav>
          </div>
        </div>
      ) : null}

      {/* O'qish progressi */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[2px] bg-transparent">
        <div
          className="h-full origin-left bg-accent transition-transform duration-150 ease-linear"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </header>
  );
}
