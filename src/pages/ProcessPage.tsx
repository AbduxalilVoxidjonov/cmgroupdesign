import { Container } from '@/shared/ui/Container';
import { PageHero } from '@/shared/ui/PageHero';
import { Reveal } from '@/shared/ui/Reveal';
import { CheckIcon } from '@/shared/ui/icons';
import { ContactCta } from '@/features/home/ContactCta';
import { useContent } from '@/i18n/context';
import { useDocumentMeta } from '@/i18n/useDocumentMeta';

export default function ProcessPage() {
  const { site, processSteps, processPage } = useContent();
  useDocumentMeta(processPage.meta, site.name);

  return (
    <>
      <PageHero {...processPage.hero} tone="slate" />

      <section className="bg-n-0 py-section">
        <Container>
          {/* Vertikal vaqt chizigʻi: raqamli nuqtalar chapda, kontent oʻngda */}
          <ol className="relative max-w-[80ch] border-l border-n-200 pl-8 md:pl-12">
            {processSteps.map((step, index) => (
              <Reveal as="li" key={step.id} delay={index * 70} className="relative pb-12 last:pb-0">
                <div id={step.id} className="scroll-mt-28">
                  <span
                    aria-hidden="true"
                    className="nums absolute -left-[calc(2rem+1px)] top-1 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-n-200 bg-n-0 text-meta font-medium text-n-900 shadow-card md:-left-[calc(3rem+1px)]"
                  >
                    {step.index}
                  </span>

                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h2 className="text-h4-m md:text-h4 text-balance">{step.title}</h2>
                    <span className="rounded-pill bg-n-50 px-3 py-0.5 text-meta text-n-600">{step.duration}</span>
                  </div>

                  <p className="mb-5 mt-3 max-w-[60ch] text-base text-n-900/90">{step.lead}</p>

                  <div className="rounded-card border border-n-200 bg-n-50 p-5">
                    <p className="mb-3 text-meta font-medium text-n-600">{processPage.resultLabel}</p>
                    <ul className="space-y-2 text-bullet">
                      {step.deliverables.map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/25 text-accent-deep">
                            <CheckIcon className="h-2.5 w-2.5" />
                          </span>
                          <span className="text-n-900/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
