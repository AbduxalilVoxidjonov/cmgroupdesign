import { ArrowLink } from '@/shared/ui/ArrowLink';
import { Container } from '@/shared/ui/Container';
import { Media } from '@/shared/ui/Media';
import { PageHero } from '@/shared/ui/PageHero';
import { Reveal } from '@/shared/ui/Reveal';
import { CheckIcon } from '@/shared/ui/icons';
import { ContactCta } from '@/features/home/ContactCta';
import { useContent } from '@/i18n/context';
import { useDocumentMeta } from '@/i18n/useDocumentMeta';
import type { SolutionCategory } from '@/content/types';

const categories: SolutionCategory[] = ['management', 'infrastructure'];

export default function SolutionsPage() {
  const { site, solutions, solutionCategories, solutionsPage } = useContent();
  useDocumentMeta(solutionsPage.meta, site.name);

  return (
    <>
      <PageHero {...solutionsPage.hero} tone="deep" />

      {/* Tez oʻtish chiplari — uzun sahifada moʻljal beradi */}
      <nav aria-label={solutionsPage.navLabel} className="border-b border-n-200 bg-n-0">
        <Container>
          <ul className="flex flex-wrap gap-2 py-4">
            {solutions.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="inline-flex rounded-pill border border-n-200 px-3.5 py-1.5 text-meta text-n-600 transition-all duration-200 ease-soft hover:-translate-y-0.5 hover:border-n-900 hover:text-n-900"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {categories.map((category, categoryIndex) => (
        <section key={category} className={`py-section ${categoryIndex % 2 === 0 ? 'bg-n-0' : 'bg-n-50'}`}>
          <Container>
            <Reveal className="mb-10">
              <p className="text-eyebrow mb-3 uppercase text-accent-deep">{solutionCategories[category]}</p>
              <h2 className="text-h2-m md:text-h2 text-balance">{solutionsPage.groupTitles[category]}</h2>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-2">
              {solutions
                .filter((item) => item.category === category)
                .map((item, index) => (
                  <Reveal key={item.id} delay={(index % 2) * 90} className="h-full">
                    <article id={item.id} className="card card-hover zoom-parent flex h-full scroll-mt-28 flex-col">
                      <div className="relative h-[180px] overflow-hidden">
                        <Media tone={item.tone} seed={index + 1} fill pattern="dots" className="zoom-media" />
                      </div>
                      <div className="flex flex-1 flex-col p-7">
                        <h3 className="text-h4-m md:text-h4 text-balance mb-2">{item.title}</h3>
                        <p className="mb-3 text-base font-medium text-n-900">{item.short}</p>
                        <p className="mb-5 text-base text-n-900/85">{item.body}</p>
                        <ul className="mb-6 space-y-2 text-bullet">
                          {item.points.map((point) => (
                            <li key={point} className="flex gap-2.5">
                              <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/25 text-accent-deep">
                                <CheckIcon className="h-2.5 w-2.5" />
                              </span>
                              <span className="text-n-900/90">{point}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-auto">
                          <ArrowLink to="/boglanish">{solutionsPage.itemCta}</ArrowLink>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
            </div>
          </Container>
        </section>
      ))}

      <ContactCta />
    </>
  );
}
