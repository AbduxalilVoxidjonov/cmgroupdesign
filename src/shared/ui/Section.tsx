import type { ReactNode } from 'react';
import { Container } from './Container';
import { Reveal } from './Reveal';

export type SectionTone = 'light' | 'tint' | 'dark';

const toneClass: Record<SectionTone, string> = {
  light: 'bg-n-0 text-n-900',
  tint: 'bg-n-50 text-n-900',
  dark: 'bg-ink text-n-0',
};

type SectionProps = {
  id?: string;
  tone?: SectionTone;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
};

export function Section({
  id,
  tone = 'light',
  eyebrow,
  title,
  intro,
  children,
  className = '',
  titleClassName = '',
}: SectionProps) {
  const hasHeading = Boolean(eyebrow || title || intro);

  return (
    <section id={id} className={`py-section ${toneClass[tone]} ${className}`}>
      <Container>
        {hasHeading ? (
          <Reveal className="mb-8">
            {eyebrow ? (
              <p className={`text-eyebrow mb-3 uppercase ${tone === 'dark' ? 'text-accent' : 'text-accent-deep'}`}>
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className={`text-h2-m md:text-h2 text-balance max-w-[24ch] ${titleClassName}`}>{title}</h2>
            ) : null}
            {intro ? <p className="text-lead mt-4 max-w-[62ch] opacity-90">{intro}</p> : null}
          </Reveal>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
