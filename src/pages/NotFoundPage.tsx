import { ButtonLink } from '@/shared/ui/Button';
import { Container } from '@/shared/ui/Container';
import { ArrowLink } from '@/shared/ui/ArrowLink';
import { useContent } from '@/i18n/context';
import { useDocumentMeta } from '@/i18n/useDocumentMeta';

export default function NotFoundPage() {
  const { site, mainNav, notFoundPage } = useContent();
  useDocumentMeta(notFoundPage.meta, site.name);

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-n-0 md:py-32">
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: 'rgba(82,216,230,0.16)' }}
      />

      <Container>
        <div className="relative max-w-[62ch]">
          <p className="nums mb-4 text-[88px] font-light leading-none tracking-[-0.03em] text-accent/80">
            {notFoundPage.code}
          </p>
          <h1 className="text-h2-m md:text-h2 text-balance mb-4 max-w-[18ch]">{notFoundPage.title}</h1>
          <p className="mb-8 text-lead text-n-0/85">{notFoundPage.body}</p>
          <ButtonLink to="/">{notFoundPage.cta}</ButtonLink>

          <ul className="mt-10 grid gap-x-10 gap-y-3 border-t border-white/15 pt-8 sm:grid-cols-2">
            {mainNav.map((item) => (
              <li key={item.label}>
                <ArrowLink to={item.to} onDark size="sm">
                  {item.label}
                </ArrowLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
