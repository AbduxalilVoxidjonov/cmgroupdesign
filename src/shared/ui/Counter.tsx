import { useEffect, useRef, useState } from 'react';

/** "60+" → { number: 60, prefix: '', suffix: '+' } ko'rinishida ajratadi. */
function split(value: string) {
  const match = /^(\D*)(\d+(?:[.,]\d+)?)(.*)$/s.exec(value);
  if (!match) return null;
  const [, prefix = '', digits = '', suffix = ''] = match;
  const target = Number(digits.replace(',', '.'));
  if (!Number.isFinite(target)) return null;
  const decimals = digits.includes(',') || digits.includes('.') ? 1 : 0;
  return { prefix, target, suffix, decimals };
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Raqamli ko'rsatkichni ekranga kirganda 0 dan haqiqiy qiymatga sanaydi.
 * Matnli qism ("+", " yil", "/7") o'zgarishsiz qoladi, shuning uchun
 * kontentni alohida tuzatish shart emas — `stats` massivi o'zgarmaydi.
 */
export function Counter({ value, className = '' }: { value: string; className?: string }) {
  const parts = split(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(() => (parts ? 0 : null));

  useEffect(() => {
    const node = ref.current;
    if (!node || !parts) return;

    const reduced =
      typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') {
      setShown(parts.target);
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();

        const duration = 1100;
        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          setShown(parts.target * easeOut(progress));
          if (progress < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // `value` o'zgarmaydigan kontentdan keladi — bir marta sozlash yetarli
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (!parts || shown === null) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={`nums ${className}`}>
      {parts.prefix}
      {shown.toFixed(parts.decimals)}
      {parts.suffix}
    </span>
  );
}
