import { ButtonLink } from '@/shared/ui/Button';
import { Container } from '@/shared/ui/Container';
import { Reveal } from '@/shared/ui/Reveal';
import { useContent } from '@/i18n/context';
import { telHref } from '@/content/shared';

export function ContactCta() {
  const { home, site } = useContent();
  const cta = home.cta;

  return (
    <section className="bg-n-0 py-section">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-card bg-ink px-7 py-12 text-n-0 md:px-12 md:py-16">
            <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-80" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full blur-3xl"
              style={{ background: 'rgba(82,216,230,0.20)' }}
            />

            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div>
                <p className="text-eyebrow mb-3 uppercase text-accent">{cta.eyebrow}</p>
                <h2 className="text-h2-m md:text-h2 text-balance mb-4 max-w-[20ch]">{cta.title}</h2>
                <p className="max-w-[58ch] text-lead text-n-0/85">{cta.body}</p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <ButtonLink to="/boglanish">{cta.button}</ButtonLink>
                <a href={telHref} className="btn btn-on-dark">
                  {site.phone}
                </a>
              </div>
            </div>

            <p className="relative mt-10 max-w-[68ch] border-t border-white/15 pt-6 text-fine text-n-400">
              {cta.note.replace('{email}', site.email)}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
