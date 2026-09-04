import { ArrowLink } from '@/shared/ui/ArrowLink';
import { Container } from '@/shared/ui/Container';
import { PageHero } from '@/shared/ui/PageHero';
import { Reveal } from '@/shared/ui/Reveal';
import { Section } from '@/shared/ui/Section';
import { ContactCta } from '@/features/home/ContactCta';
import { media } from '@/content/media';
import { useContent } from '@/i18n/context';
import { useDocumentMeta } from '@/i18n/useDocumentMeta';

export default function ResourcesPage() {
  const { site, resourcesPage } = useContent();
  useDocumentMeta(resourcesPage.meta, site.name);

  return (
    <>
      <PageHero {...resourcesPage.hero} tone="green" image={media.heroResources} />

      <section className="bg-n-0 py-section">
        <Container>
          <Reveal className="mb-8">
            <p className="text-lead max-w-[62ch] text-n-900/85">{resourcesPage.intro}</p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resourcesPage.items.map((item, index) => (
              <Reveal key={item.id} delay={(index % 3) * 70} className="h-full">
                <article id={item.id} className="card card-hover flex h-full scroll-mt-28 flex-col p-6">
                  <span className="mb-3 inline-flex w-fit rounded-pill border border-n-200 px-3 py-1 text-fine font-medium text-n-600">
                    {item.kind}
                  </span>
                  <h2 className="mb-2 text-[20px] font-normal leading-[28px] tracking-[-0.01em] text-balance">
                    {item.title}
                  </h2>
                  <p className="mb-5 text-base text-n-900/85">{item.body}</p>
                  <div className="mt-auto">
                    <ArrowLink to="/boglanish" size="sm">
                      {resourcesPage.itemCta}
                    </ArrowLink>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Section id="faq" tone="tint" title={resourcesPage.faqTitle} className="scroll-mt-24">
        <div className="max-w-[76ch] divide-y divide-n-200 border-y border-n-200">
          {resourcesPage.faq.map((entry) => (
            <details key={entry.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[18px] font-medium leading-[26px] text-n-900 marker:hidden">
                {entry.question}
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-n-600 transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-[62ch] text-base text-n-900/85">{entry.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
