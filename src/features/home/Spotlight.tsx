import { ArrowLink } from '@/shared/ui/ArrowLink';
import { Section } from '@/shared/ui/Section';
import { Media } from '@/shared/ui/Media';
import { Reveal } from '@/shared/ui/Reveal';
import { useContent } from '@/i18n/context';

export function Spotlight() {
  const { home, industries } = useContent();
  const tiles = industries.slice(0, 3);
  const spotlight = home.spotlight;

  return (
    <Section eyebrow={spotlight.eyebrow} title={spotlight.title} intro={spotlight.intro}>
      <Reveal>
        <div className="relative min-h-[280px] overflow-hidden rounded-card md:min-h-[330px]">
          <Media tone="amber" seed={3} fill animated pattern="mesh" />
          <div className="relative flex min-h-[280px] items-center justify-end p-6 md:min-h-[330px] md:p-10">
            <div className="max-w-[380px] rounded-card border border-n-200 bg-n-0/95 p-7 shadow-panel backdrop-blur-sm">
              <span className="mb-3 inline-block rounded bg-n-900 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[1.4px] text-n-0">
                {spotlight.badge}
              </span>
              <h3 className="mb-2 text-[22px] font-normal leading-[30px] tracking-[-0.01em] text-balance">
                {spotlight.cardTitle}
              </h3>
              <p className="mb-4 text-meta leading-[21px] text-n-900/90">{spotlight.cardBody}</p>
              <ArrowLink to="/sohalar" size="sm">
                {spotlight.cardCta}
              </ArrowLink>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {tiles.map((item, index) => (
          <Reveal key={item.id} delay={index * 90} className="h-full">
            <article className="card card-hover flex h-full flex-col p-6">
              <h3 className="mb-2 text-[20px] font-normal leading-[28px] tracking-[-0.01em] text-balance">
                {item.title}
              </h3>
              <p className="mb-4 text-base text-n-900/90">{item.lead}</p>
              <ul className="mb-5 space-y-1.5 text-meta text-n-600">
                {item.outcomes.slice(0, 3).map((outcome) => (
                  <li key={outcome} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {outcome}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <ArrowLink to={`/sohalar#${item.id}`} size="sm">
                  {spotlight.tileCta}
                </ArrowLink>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
