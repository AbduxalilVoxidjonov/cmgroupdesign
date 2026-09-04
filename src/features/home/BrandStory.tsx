import { ArrowLink } from '@/shared/ui/ArrowLink';
import { Container } from '@/shared/ui/Container';
import { Media } from '@/shared/ui/Media';
import { Reveal } from '@/shared/ui/Reveal';
import { useContent } from '@/i18n/context';

export function BrandStory() {
  const { home } = useContent();
  const story = home.brandStory;

  return (
    <section className="bg-n-50 py-section">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="accent-bar" aria-hidden="true" />
            <h2 className="text-h2-m md:text-h2 text-balance mb-5">{story.title}</h2>
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mb-4 max-w-[56ch] text-base text-n-900/90">
                {paragraph}
              </p>
            ))}
            <ArrowLink to={story.link.to}>{story.link.label}</ArrowLink>
          </Reveal>

          {/* Vizual + ustiga chiqib turuvchi urgʻu kartasi */}
          <Reveal delay={120} className="relative">
            <div className="zoom-parent overflow-hidden rounded-card">
              <Media tone="sky" seed={6} pattern="mesh" animated className="zoom-media min-h-[320px] w-full" />
            </div>
            <div className="mx-4 -mt-12 rounded-card border border-n-200 bg-n-0 p-6 shadow-panel sm:mx-8">
              <p className="text-eyebrow mb-2 uppercase text-n-600">{story.guaranteeLabel}</p>
              <p className="text-base text-n-900/90">{story.guaranteeBody}</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 border-t border-n-200 pt-10 md:grid-cols-3">
          {home.principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <h3 className="mb-2 text-[20px] font-normal leading-[28px] tracking-[-0.01em]">{item.title}</h3>
              <p className="text-base text-n-900/85">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
