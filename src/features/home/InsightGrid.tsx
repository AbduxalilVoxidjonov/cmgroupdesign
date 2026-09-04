import { useMemo } from 'react';
import { ArrowLink } from '@/shared/ui/ArrowLink';
import { Section } from '@/shared/ui/Section';
import { Media } from '@/shared/ui/Media';
import { Reveal } from '@/shared/ui/Reveal';
import { useContent } from '@/i18n/context';

export function InsightGrid() {
  const { home, articles, articleCategories } = useContent();

  const { lead, rest } = useMemo(() => {
    const featured = articles.find((item) => item.featured) ?? articles[0];
    return { lead: featured, rest: articles.filter((item) => item !== featured).slice(0, 3) };
  }, [articles]);

  if (!lead) return null;

  return (
    <Section tone="tint" eyebrow={home.insights.eyebrow} title={home.insights.title}>
      <Reveal>
        <article className="card card-hover zoom-parent mb-8 grid md:grid-cols-2">
          <div className="relative min-h-[240px] overflow-hidden">
            <Media tone={lead.tone} seed={4} fill className="zoom-media" />
            <span className="absolute left-5 top-5 rounded-pill bg-black/45 px-3 py-1 text-fine font-medium text-n-0 backdrop-blur-sm">
              {articleCategories[lead.category]}
            </span>
          </div>
          <div className="flex flex-col justify-center p-7 lg:p-9">
            <h3 className="text-h4-m md:text-h4 text-balance mb-3">{lead.title}</h3>
            <p className="mb-5 text-base text-n-900/90">{lead.excerpt}</p>
            <ArrowLink to="/tahlillar">{home.insights.leadCta}</ArrowLink>
            <div className="mt-5 border-t border-n-200 pt-4 text-meta text-n-600">
              {lead.date} · {lead.readingTime} · {lead.author}
            </div>
          </div>
        </article>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {rest.map((item, index) => (
          <Reveal key={item.slug} delay={index * 90} className="h-full">
            <article className="card card-hover zoom-parent flex h-full flex-col">
              <div className="relative h-[128px] overflow-hidden">
                <Media tone={item.tone} seed={index + 5} pattern="dots" fill className="zoom-media" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-1.5 text-meta text-n-600">{articleCategories[item.category]}</p>
                <h3 className="mb-2 text-[22px] font-normal leading-[30px] tracking-[-0.01em] text-balance">
                  {item.title}
                </h3>
                <p className="mb-4 text-base text-n-900/90">{item.excerpt}</p>
                <div className="mt-auto flex items-center justify-between gap-4">
                  <ArrowLink to="/tahlillar" size="sm">
                    {home.insights.itemCta}
                  </ArrowLink>
                  <span className="text-fine text-n-600">{item.readingTime}</span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-8">
        <ArrowLink to="/tahlillar">{home.insights.allCta}</ArrowLink>
      </div>
    </Section>
  );
}
