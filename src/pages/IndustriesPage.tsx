import { ArrowLink } from '@/shared/ui/ArrowLink';
import { Container } from '@/shared/ui/Container';
import { Section } from '@/shared/ui/Section';
import { Picture } from '@/shared/ui/Picture';
import { industryVariant } from '@/shared/ui/artworkMap';
import { PageHero } from '@/shared/ui/PageHero';
import { Reveal } from '@/shared/ui/Reveal';
import { ContactCta } from '@/features/home/ContactCta';
import { media } from '@/content/media';
import { useContent } from '@/i18n/context';
import { useDocumentMeta } from '@/i18n/useDocumentMeta';

export default function IndustriesPage() {
  const { site, industries, industriesPage } = useContent();
  useDocumentMeta(industriesPage.meta, site.name);

  return (
    <>
      <PageHero {...industriesPage.hero} tone="amber" image={media.heroIndustries} />

      <section className="bg-n-0 py-section">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((item, index) => (
              <Reveal key={item.id} delay={(index % 3) * 90} className="h-full">
                <article id={item.id} className="card card-hover zoom-parent flex h-full scroll-mt-28 flex-col">
                  <div className="relative h-[140px] overflow-hidden">
                    <Picture
                      src={media.industry(item.id)}
                      variant={industryVariant(item.id)}
                      tone={item.tone}
                      alt=""
                      fill
                      className="zoom-media"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="mb-2 text-[22px] font-normal leading-[30px] tracking-[-0.01em] text-balance">
                      {item.title}
                    </h2>
                    <p className="mb-4 text-base text-n-900/90">{item.lead}</p>
                    <ul className="mb-5 space-y-1.5 text-meta text-n-600">
                      {item.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-2">
                          <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <ArrowLink to="/boglanish" size="sm">
                        {industriesPage.itemCta}
                      </ArrowLink>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Section
        id="miqyos"
        tone="tint"
        title={industriesPage.scalesTitle}
        intro={industriesPage.scalesIntro}
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industriesPage.scales.map((scale, index) => (
            <Reveal key={scale.id} delay={(index % 4) * 70} className="h-full">
              <article
                id={scale.id}
                className="card flex h-full scroll-mt-28 flex-col border-t-2 border-t-accent p-6"
              >
                <h3 className="mb-2 text-[19px] font-normal leading-[27px] tracking-[-0.01em] text-balance">
                  {scale.title}
                </h3>
                <p className="text-base text-n-900/85">{scale.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
