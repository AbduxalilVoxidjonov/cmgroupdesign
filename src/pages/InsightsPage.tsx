import { useMemo, useState } from 'react';
import { ArrowLink } from '@/shared/ui/ArrowLink';
import { Container } from '@/shared/ui/Container';
import { Media } from '@/shared/ui/Media';
import { PageHero } from '@/shared/ui/PageHero';
import { Reveal } from '@/shared/ui/Reveal';
import { ContactCta } from '@/features/home/ContactCta';
import { useContent, useUi } from '@/i18n/context';
import { useDocumentMeta } from '@/i18n/useDocumentMeta';
import type { ArticleCategory } from '@/content/types';

/** `null` — «Barchasi» filtri. */
type Filter = ArticleCategory | null;

const categoryOrder: ArticleCategory[] = ['case', 'technology', 'management', 'security'];

export default function InsightsPage() {
  const { site, articles, articleCategories, insightsPage } = useContent();
  const ui = useUi();
  useDocumentMeta(insightsPage.meta, site.name);

  const [category, setCategory] = useState<Filter>(null);

  const visible = useMemo(
    () => (category === null ? articles : articles.filter((item) => item.category === category)),
    [category, articles],
  );

  const filters: { key: Filter; label: string }[] = [
    { key: null, label: ui.allFilter },
    ...categoryOrder.map((key) => ({ key, label: articleCategories[key] })),
  ];

  return (
    <>
      <PageHero {...insightsPage.hero} tone="violet" />

      <section className="bg-n-50 py-section">
        <Container>
          <div className="mb-8 flex flex-wrap items-center gap-2.5">
            {filters.map((entry) => (
              <button
                key={entry.label}
                type="button"
                aria-pressed={category === entry.key}
                onClick={() => setCategory(entry.key)}
                className={`rounded-pill border px-4 py-1.5 text-meta font-medium transition-all duration-200 ease-soft ${
                  category === entry.key
                    ? 'border-n-900 bg-n-900 text-n-0'
                    : 'border-n-200 bg-n-0 text-n-600 hover:-translate-y-0.5 hover:border-n-900 hover:text-n-900'
                }`}
              >
                {entry.label}
              </button>
            ))}
            <span className="nums ml-auto text-meta text-n-600">{ui.materialsCount(visible.length)}</span>
          </div>

          {visible.length === 0 ? (
            <p className="rounded-card border border-n-200 bg-n-0 p-8 text-base text-n-600">
              {insightsPage.empty}
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((item, index) => (
                <Reveal key={item.slug} delay={(index % 3) * 80} className="h-full">
                  <article className="card card-hover zoom-parent flex h-full flex-col">
                    <div className="relative h-[130px] overflow-hidden">
                      <Media tone={item.tone} seed={index + 1} fill pattern="dots" className="zoom-media" />
                      <span className="absolute left-4 top-4 rounded-pill bg-black/45 px-3 py-1 text-fine font-medium text-n-0 backdrop-blur-sm">
                        {articleCategories[item.category]}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="mb-2 text-[22px] font-normal leading-[30px] tracking-[-0.01em] text-balance">
                        {item.title}
                      </h2>
                      <p className="mb-4 text-base text-n-900/90">{item.excerpt}</p>
                      <div className="mt-auto border-t border-n-200 pt-4">
                        <p className="mb-2 text-meta text-n-600">
                          {item.date} · {item.readingTime}
                        </p>
                        <ArrowLink to="/tahlillar" size="sm">
                          {insightsPage.itemCta}
                        </ArrowLink>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
