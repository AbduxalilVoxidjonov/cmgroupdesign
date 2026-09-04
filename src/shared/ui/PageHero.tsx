import { Container } from './Container';
import { Media } from './Media';
import { Reveal } from './Reveal';
import type { Tone } from './Media';

export function PageHero({
  eyebrow,
  title,
  lead,
  tone = 'slate',
}: {
  eyebrow: string;
  title: string;
  lead: string;
  tone?: Tone;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-n-0">
      <Media tone={tone} seed={7} fill animated pattern="mesh" />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(100deg, rgba(10,18,24,0.88) 0%, rgba(10,18,24,0.66) 50%, rgba(10,18,24,0.34) 100%)',
        }}
      />
      <div aria-hidden="true" className="bg-grid mask-fade-b absolute inset-0 opacity-70" />

      <div className="relative py-16 md:py-24">
        <Container>
          <Reveal>
            <p className="text-eyebrow mb-3 uppercase text-accent">{eyebrow}</p>
            <h1 className="text-h1-m md:text-h1 text-balance mb-4 max-w-[20ch]">{title}</h1>
            <span className="accent-bar" aria-hidden="true" />
            <p className="max-w-[60ch] text-lead text-n-0/85">{lead}</p>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
