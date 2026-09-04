import { useMemo } from 'react';
import { ArrowLink } from '@/shared/ui/ArrowLink';
import { Section } from '@/shared/ui/Section';
import { Media } from '@/shared/ui/Media';
import { Reveal } from '@/shared/ui/Reveal';
import { CheckIcon } from '@/shared/ui/icons';
import { useContent } from '@/i18n/context';

/** Bosh sahifada koʻrsatiladigan uchta asosiy yechim. */
const featuredIds = ['hr', 'crm', 'xavfsizlik'];

export function ResourceCards() {
  const { home, solutions, solutionCategories } = useContent();
  const featured = useMemo(() => solutions.filter((item) => featuredIds.includes(item.id)), [solutions]);

  return (
    <Section eyebrow={home.resources.eyebrow} title={home.resources.title} intro={home.resources.intro}>
      <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((item, index) => (
          <Reveal key={item.id} delay={index * 90} className="h-full">
            <article className="card card-hover zoom-parent flex h-full flex-col">
              <div className="relative h-[180px] overflow-hidden">
                <Media tone={item.tone} seed={index + 1} pattern="dots" fill className="zoom-media" />
                <span className="absolute left-4 top-4 rounded-pill bg-black/45 px-3 py-1 text-fine font-medium text-n-0 backdrop-blur-sm">
                  {solutionCategories[item.category]}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-h4-m md:text-h4 text-balance mb-3">{item.title}</h3>
                <ul className="mb-5 space-y-2 text-bullet">
                  {item.points.slice(0, 3).map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/25 text-accent-deep">
                        <CheckIcon className="h-2.5 w-2.5" />
                      </span>
                      <span className="text-n-900/90">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <ArrowLink to={`/yechimlar#${item.id}`}>{home.resources.cta}</ArrowLink>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
