import { useMemo, useState } from 'react';
import { Link } from '@/i18n/Link';
import { useContent, useUi } from '@/i18n/context';
import { Container } from '@/shared/ui/Container';
import { Reveal } from '@/shared/ui/Reveal';
import { ChevronRight, SearchIcon } from '@/shared/ui/icons';
import type { SolutionCategory } from '@/content/types';

/** `null` — «Barchasi» filtri. */
type Filter = SolutionCategory | null;

export function SolutionFinder() {
  const { home, solutions, solutionCategories } = useContent();
  const ui = useUi();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>(null);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return solutions.filter((item) => {
      const matchesFilter = filter === null || item.category === filter;
      const matchesQuery =
        needle.length === 0 ||
        item.title.toLowerCase().includes(needle) ||
        item.short.toLowerCase().includes(needle);
      return matchesFilter && matchesQuery;
    });
  }, [query, filter, solutions]);

  const filters: { key: Filter; label: string }[] = [
    { key: null, label: ui.allFilter },
    { key: 'management', label: solutionCategories.management },
    { key: 'infrastructure', label: solutionCategories.infrastructure },
  ];

  return (
    <section id="yechimlar" className="relative overflow-hidden bg-ink py-section text-n-0">
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: 'rgba(82,216,230,0.16)' }}
      />

      <Container>
        <div className="relative">
          <Reveal>
            <p className="text-eyebrow mb-3 uppercase text-accent">{home.finder.eyebrow}</p>
            <h2 className="text-h2-m md:text-h2 text-balance mb-8 max-w-[22ch]">{home.finder.title}</h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="group flex items-center gap-4 rounded-card border border-n-700 bg-white/[0.04] px-5 py-4 transition-colors duration-300 focus-within:border-accent hover:border-n-400">
              <SearchIcon className="shrink-0 opacity-70 transition-opacity group-focus-within:opacity-100" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={home.finder.placeholder}
                aria-label={home.finder.searchLabel}
                className="w-full bg-transparent text-[20px] text-n-0 placeholder:text-n-400 focus:outline-none"
              />
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              {filters.map((entry) => (
                <button
                  key={entry.label}
                  type="button"
                  aria-pressed={filter === entry.key}
                  onClick={() => setFilter(entry.key)}
                  className={`rounded-pill border px-4 py-1.5 text-meta font-medium transition-all duration-200 ease-soft ${
                    filter === entry.key
                      ? 'border-accent bg-accent text-n-900'
                      : 'border-n-700 text-n-0/75 hover:border-n-400 hover:text-n-0'
                  }`}
                >
                  {entry.label}
                </button>
              ))}
              <span className="nums ml-auto text-meta text-n-400">{ui.solutionsCount(results.length)}</span>
            </div>
          </Reveal>

          <div className="mt-9">
            {results.length === 0 ? (
              <p className="rounded-card border border-dashed border-n-700 px-6 py-10 text-center text-base text-n-400">
                {home.finder.empty}
              </p>
            ) : (
              <ul className="grid gap-x-12 md:grid-cols-2">
                {results.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={`/yechimlar#${item.id}`}
                      className="group flex items-start justify-between gap-6 border-t border-n-700 py-5 transition-colors duration-200 hover:border-accent"
                    >
                      <span className="min-w-0">
                        <span className="block text-base font-medium text-n-0 transition-colors group-hover:text-accent">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-meta text-n-400">{item.short}</span>
                      </span>
                      <ChevronRight className="mt-1.5 shrink-0 text-n-400 transition-transform duration-200 ease-soft group-hover:translate-x-1 group-hover:text-accent" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <p className="mt-8 text-fine text-n-400">{home.finder.note}</p>
        </div>
      </Container>
    </section>
  );
}
