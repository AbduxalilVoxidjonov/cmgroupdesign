import { ArrowLink } from '@/shared/ui/ArrowLink';
import { Container } from '@/shared/ui/Container';
import { PageHero } from '@/shared/ui/PageHero';
import { Reveal } from '@/shared/ui/Reveal';
import { Picture } from '@/shared/ui/Picture';
import { serviceVariant } from '@/shared/ui/artworkMap';
import { ContactCta } from '@/features/home/ContactCta';
import { media } from '@/content/media';
import { useContent } from '@/i18n/context';
import { useDocumentMeta } from '@/i18n/useDocumentMeta';

export default function ServicesPage() {
  const { site, servicesPage } = useContent();
  useDocumentMeta(servicesPage.meta, site.name);

  return (
    <>
      <PageHero {...servicesPage.hero} tone="sky" image={media.heroServices} />

      <nav aria-label={servicesPage.hero.eyebrow} className="border-b border-n-200 bg-n-0">
        <Container>
          <ul className="flex flex-wrap gap-2 py-4">
            {servicesPage.groups.map((group) => (
              <li key={group.id}>
                <a
                  href={`#${group.id}`}
                  className="inline-flex rounded-pill border border-n-200 px-3.5 py-1.5 text-meta text-n-600 transition-all duration-200 ease-soft hover:-translate-y-0.5 hover:border-n-900 hover:text-n-900"
                >
                  {group.title}
                </a>
              </li>
            ))}
            <li>
              <ArrowLink to="/jarayon" size="sm">
                {servicesPage.processLinkLabel}
              </ArrowLink>
            </li>
          </ul>
        </Container>
      </nav>

      {servicesPage.groups.map((group, groupIndex) => (
        <section
          key={group.id}
          id={group.id}
          className={`scroll-mt-24 py-section ${groupIndex % 2 === 0 ? 'bg-n-0' : 'bg-n-50'}`}
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-14">
              <Reveal>
                <p className="text-eyebrow mb-3 uppercase text-accent-deep">{group.title}</p>
                <h2 className="text-h2-m md:text-h2 text-balance mb-4">{group.lead}</h2>
                <Picture
                  src={media.service(group.id)}
                  variant={serviceVariant(group.id)}
                  tone={group.tone}
                  alt=""
                  className="mt-6 hidden h-[220px] w-full overflow-hidden rounded-card lg:block"
                />
              </Reveal>

              <div className="grid gap-6 sm:grid-cols-2">
                {group.items.map((item, index) => (
                  <Reveal key={item.id} delay={(index % 2) * 80} className="h-full">
                    <article
                      id={item.id}
                      className="card flex h-full scroll-mt-28 flex-col border-l-2 border-l-accent p-6"
                    >
                      <h3 className="mb-2 text-[20px] font-normal leading-[28px] tracking-[-0.01em] text-balance">
                        {item.title}
                      </h3>
                      <p className="mb-5 text-base text-n-900/85">{item.body}</p>
                      <div className="mt-auto">
                        <ArrowLink to="/boglanish" size="sm">
                          {servicesPage.itemCta}
                        </ArrowLink>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ))}

      <ContactCta />
    </>
  );
}
