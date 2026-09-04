import { Container } from '@/shared/ui/Container';
import { Counter } from '@/shared/ui/Counter';
import { Media } from '@/shared/ui/Media';
import { PageHero } from '@/shared/ui/PageHero';
import { Reveal } from '@/shared/ui/Reveal';
import { Section } from '@/shared/ui/Section';
import { ContactCta } from '@/features/home/ContactCta';
import { useContent } from '@/i18n/context';
import { useDocumentMeta } from '@/i18n/useDocumentMeta';

export default function AboutPage() {
  const { site, home, partners, aboutPage } = useContent();
  useDocumentMeta(aboutPage.meta, site.name);

  return (
    <>
      <PageHero {...aboutPage.hero} tone="green" />

      <section id="yondashuv" className="scroll-mt-28 bg-n-0 py-section">
        <Container>
          <div className="grid items-start gap-10 md:grid-cols-2">
            <Reveal>
              <h2 className="text-h2-m md:text-h2 text-balance mb-6">{aboutPage.approachTitle}</h2>
              <div className="grid gap-6">
                {aboutPage.principles.map((item) => (
                  <div
                    key={item.title}
                    className="border-l-2 border-accent pl-5 transition-all duration-300 ease-soft hover:border-accent-deep hover:pl-6"
                  >
                    <h3 className="mb-1 text-[20px] font-normal leading-[28px] tracking-[-0.01em]">{item.title}</h3>
                    <p className="max-w-[52ch] text-base text-n-900/90">{item.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120} className="zoom-parent overflow-hidden rounded-card">
              <Media tone="deep" seed={5} animated pattern="mesh" className="zoom-media min-h-[340px] w-full" />
            </Reveal>
          </div>

          <dl className="mt-12 grid gap-6 border-t border-n-200 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {home.stats.map((item) => (
              <div key={item.label}>
                <dt className="sr-only">{item.label}</dt>
                <dd>
                  <Counter
                    value={item.value}
                    className="block text-[36px] font-light leading-[42px] tracking-[-0.02em] text-accent-deep"
                  />
                  <span className="mt-1 block text-meta text-n-600">{item.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <Section id="jamoa" tone="tint" title={aboutPage.team.title} className="scroll-mt-28">
        <div className="overflow-x-auto rounded-card border border-n-200 bg-n-0">
          <table className="w-full text-left text-base">
            <caption className="sr-only">{aboutPage.team.caption}</caption>
            <thead>
              <tr className="border-b border-n-200 text-meta uppercase tracking-wide text-n-600">
                <th scope="col" className="px-5 py-3 font-medium">
                  {aboutPage.team.roleColumn}
                </th>
                <th scope="col" className="nums px-5 py-3 font-medium">
                  {aboutPage.team.countColumn}
                </th>
                <th scope="col" className="px-5 py-3 font-medium">
                  {aboutPage.team.noteColumn}
                </th>
              </tr>
            </thead>
            <tbody>
              {aboutPage.team.rows.map((row) => (
                <tr key={row.role} className="border-b border-n-200 last:border-b-0">
                  <th scope="row" className="px-5 py-3.5 font-medium">
                    {row.role}
                  </th>
                  <td className="nums px-5 py-3.5">{row.count}</td>
                  <td className="px-5 py-3.5 text-n-900/85">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        id="hamkorlar"
        title={aboutPage.partners.title}
        intro={aboutPage.partners.intro}
        className="scroll-mt-28"
      >
        <ul className="flex flex-wrap gap-3">
          {partners.map((partner) => (
            <li
              key={partner}
              className="rounded-pill border border-n-200 px-4 py-2 text-meta font-medium text-n-600 transition-all duration-200 ease-soft hover:-translate-y-0.5 hover:border-n-900 hover:text-n-900 hover:shadow-card"
            >
              {partner}
            </li>
          ))}
        </ul>
      </Section>

      <ContactCta />
    </>
  );
}
