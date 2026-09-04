export type Tone = 'deep' | 'sky' | 'amber' | 'slate' | 'green' | 'violet';
export type MediaPattern = 'lines' | 'dots' | 'mesh';

const gradients: Record<Tone, string> = {
  deep: 'linear-gradient(128deg,#0E2340 0%,#164B7A 46%,#2E7FA8 100%)',
  sky: 'linear-gradient(128deg,#123C55 0%,#2E7E9B 40%,#7FD3E2 100%)',
  amber: 'linear-gradient(128deg,#6B3410 0%,#C0762B 45%,#E6AE5C 100%)',
  slate: 'linear-gradient(128deg,#1A2126 0%,#38474F 50%,#63757E 100%)',
  green: 'linear-gradient(128deg,#123526 0%,#2F6B48 48%,#6FA97C 100%)',
  violet: 'linear-gradient(128deg,#241A3D 0%,#4B3A7A 48%,#8A7BC0 100%)',
};

/** Har bir tonning yorug'lik dog'i uchun urg'u rangi. */
const glows: Record<Tone, string> = {
  deep: 'rgba(82,216,230,0.42)',
  sky: 'rgba(154,240,250,0.40)',
  amber: 'rgba(255,214,150,0.38)',
  slate: 'rgba(150,190,205,0.32)',
  green: 'rgba(150,235,190,0.34)',
  violet: 'rgba(190,170,255,0.36)',
};

/**
 * Brendlangan oʻrin egallovchi vizual: gradient + yorug'lik dogʻlari + naqsh.
 * Tashqi rasm fayli talab qilmaydi va offline ochiladi.
 *
 * `fill` — blokni ota-elementga toʻliq yoyadi (fon sifatida ishlatish uchun).
 * Pozitsiya klassi faqat shu yerda beriladi: `className` ichiga `absolute`
 * yozilsa Tailwind tartibida `relative` bilan toʻqnashadi.
 *
 * `pattern` — naqsh turi, `animated` — dogʻlarning sekin harakati
 * (`prefers-reduced-motion` da avtomatik toʻxtaydi).
 */
export function Media({
  tone = 'deep',
  className = '',
  seed = 1,
  label,
  fill = false,
  pattern = 'lines',
  animated = false,
}: {
  tone?: Tone;
  className?: string;
  seed?: number;
  label?: string;
  fill?: boolean;
  pattern?: MediaPattern;
  animated?: boolean;
}) {
  const id = `media-${tone}-${seed}`;
  const position = fill ? 'absolute inset-0 h-full w-full' : 'relative';
  const glow = glows[tone];

  return (
    <div
      className={`${position} overflow-hidden ${className}`}
      style={{ background: gradients[tone] }}
      role={label ? 'img' : 'presentation'}
      aria-label={label}
    >
      {/* Yorug'lik dogʻlari — chuqurlik hissi beradi */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -left-[12%] -top-[28%] h-[70%] w-[55%] rounded-full blur-3xl ${
          animated ? 'animate-aurora motion-reduce:animate-none' : ''
        }`}
        style={{ background: glow }}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-[32%] right-[-10%] h-[65%] w-[50%] rounded-full blur-3xl ${
          animated ? 'animate-aurora-slow motion-reduce:animate-none' : ''
        }`}
        style={{ background: 'rgba(9,97,131,0.42)' }}
      />

      <svg className="absolute inset-0 h-full w-full" aria-hidden="true" focusable="false">
        <defs>
          {pattern === 'dots' ? (
            <pattern id={id} width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,0.22)" />
            </pattern>
          ) : pattern === 'mesh' ? (
            <pattern
              id={id}
              width="34"
              height="34"
              patternUnits="userSpaceOnUse"
              patternTransform={`rotate(${45 + seed * 3})`}
            >
              <path d="M0 0 H34" stroke="rgba(255,255,255,0.10)" strokeWidth="1" fill="none" />
              <path d="M0 0 V34" stroke="rgba(255,255,255,0.10)" strokeWidth="1" fill="none" />
            </pattern>
          ) : (
            <pattern
              id={id}
              width="46"
              height="46"
              patternUnits="userSpaceOnUse"
              patternTransform={`rotate(${18 + seed * 7})`}
            >
              <path d="M0 0 H46" stroke="rgba(255,255,255,0.16)" strokeWidth="1" fill="none" />
              <path d="M0 0 V46" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
            </pattern>
          )}
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
        <circle cx={`${28 + seed * 9}%`} cy="34%" r="86" fill="rgba(255,255,255,0.10)" />
        <circle cx={`${64 + seed * 4}%`} cy="76%" r="52" fill="rgba(0,0,0,0.16)" />
      </svg>

      {/* Pastdan yuqoriga qorayish — ustidagi matn har doim o'qiladi */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.28) 100%)' }}
      />
    </div>
  );
}
