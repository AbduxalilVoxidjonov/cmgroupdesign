import { ArrowLink } from '@/shared/ui/ArrowLink';
import { Container } from '@/shared/ui/Container';
import { Reveal } from '@/shared/ui/Reveal';
import { useContent } from '@/i18n/context';

export function EditorialPair() {
  const { home } = useContent();

  return (
    <section className="relative bg-n-0 py-section">
      {/* Yuqoridagi toʻq herodan yumshoq oʻtish */}
      <div
        aria-hidden="true"
        className="bg-grid-light mask-fade-b pointer-events-none absolute inset-x-0 top-0 h-40 opacity-70"
      />
      <Container>
        <div className="relative grid gap-8 md:grid-cols-3 md:gap-x-8">
          {home.editorial.map((entry, index) => (
            <Reveal
              as="article"
              key={entry.title}
              delay={index * 90}
              className="group relative border-l border-n-200 pl-5 transition-colors duration-300 hover:border-accent md:pl-8 md:first:border-l-0 md:first:pl-0"
            >
              <span className="mb-3 block text-fine font-semibold uppercase tracking-[1.6px] text-n-400 transition-colors duration-300 group-hover:text-accent-deep">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h2 className="text-h4-m md:text-h4 text-balance mb-2">{entry.title}</h2>
              <p className="mb-4 text-base text-n-900/90">{entry.body}</p>
              <ArrowLink to={entry.link.to}>{entry.link.label}</ArrowLink>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
