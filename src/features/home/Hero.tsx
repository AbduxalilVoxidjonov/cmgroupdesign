import { useMemo } from 'react';
import { Container } from '@/shared/ui/Container';
import { ButtonLink } from '@/shared/ui/Button';
import { Counter } from '@/shared/ui/Counter';
import { Marquee } from '@/shared/ui/Marquee';
import { Media } from '@/shared/ui/Media';
import { Reveal } from '@/shared/ui/Reveal';
import { ArrowDown, CheckIcon } from '@/shared/ui/icons';
import { useContent } from '@/i18n/context';

/** Sarlavhani urgʻu qismiga qarab uch boʻlakka ajratadi. */
function splitTitle(title: string, highlight: string) {
  const at = title.indexOf(highlight);
  if (at < 0) return { before: title, mark: '', after: '' };
  return {
    before: title.slice(0, at),
    mark: highlight,
    after: title.slice(at + highlight.length),
  };
}

export function Hero() {
  const { home, solutions } = useContent();
  const hero = home.hero;
  const { before, mark, after } = useMemo(
    () => splitTitle(hero.title, hero.highlight),
    [hero.title, hero.highlight],
  );
  const ticker = useMemo(() => solutions.map((item) => item.title), [solutions]);

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-ink text-n-0">
      <Media tone="deep" seed={2} fill animated pattern="mesh" />

      {/* Chapdan oʻngga soʻnuvchi qoraytirish — matn kontrasti uchun */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(100deg, rgba(10,18,24,0.90) 0%, rgba(10,18,24,0.72) 45%, rgba(10,18,24,0.34) 100%)',
        }}
      />
      <div aria-hidden="true" className="bg-grid mask-fade-b absolute inset-0 opacity-80" />

      <Container>
        <div className="relative grid gap-12 py-14 md:py-20 lg:min-h-[604px] lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.72fr)] lg:items-center lg:gap-16 lg:py-24">
          <div>
            <Reveal>
              <span className="mb-6 inline-flex items-center gap-2.5 rounded-pill border border-white/20 bg-white/5 px-4 py-1.5 text-meta font-medium backdrop-blur-sm">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                {hero.badge}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <p className="text-eyebrow mb-4 uppercase text-accent">{hero.eyebrow}</p>
            </Reveal>

            <Reveal delay={140}>
              <h1
                id="hero-title"
                className="text-h1-m md:text-h1 text-balance mb-5 max-w-[18ch] lg:text-[56px] lg:leading-[64px]"
              >
                {before}
                {mark ? <span className="text-gradient">{mark}</span> : null}
                {after}
              </h1>
            </Reveal>

            <Reveal delay={210}>
              <p className="text-lead mb-8 max-w-[52ch] text-n-0/85">{hero.body}</p>
            </Reveal>

            <Reveal delay={280}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink to={hero.cta.to}>{hero.cta.label}</ButtonLink>
                <ButtonLink to={hero.secondaryCta.to} variant="onDark">
                  {hero.secondaryCta.label}
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={350}>
              <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
                {hero.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-meta text-n-0/80">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <CheckIcon />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Koʻrsatkichlar paneli */}
          <Reveal delay={420} className="lg:justify-self-end">
            <div className="rounded-card border border-white/15 bg-white/[0.07] p-7 shadow-panel backdrop-blur-md lg:w-[380px]">
              <p className="text-eyebrow mb-6 uppercase text-n-0/70">{hero.statsTitle}</p>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-7">
                {home.stats.map((item) => (
                  <div key={item.label}>
                    <dt className="sr-only">{item.label}</dt>
                    <dd>
                      <Counter
                        value={item.value}
                        className="block text-[34px] font-light leading-[40px] tracking-[-0.02em] text-accent"
                      />
                      <span className="mt-1.5 block text-fine leading-[17px] text-n-0/70">{item.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-7 border-t border-white/15 pt-5">
                <a
                  href="#yechimlar"
                  className="group inline-flex items-center gap-2 text-meta font-medium text-n-0 underline-offset-4 hover:underline"
                >
                  {hero.statsLink}
                  <ArrowDown className="transition-transform duration-200 ease-soft group-hover:translate-y-0.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Yechimlar lentasi — sayt qamrovini bir qarashda koʻrsatadi */}
      <div className="relative border-t border-white/10 bg-black/25 py-3.5">
        <Container>
          <Marquee items={ticker} />
        </Container>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[86px] left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <ArrowDown className="animate-nudge text-n-0/70" />
      </div>
    </section>
  );
}
