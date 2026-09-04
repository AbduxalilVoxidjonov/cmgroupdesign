import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';

type Tag = 'div' | 'section' | 'article' | 'li' | 'span' | 'p';

/**
 * Element ekranga kirganda uni yumshoq ko'tarib chiqaradi.
 * Bir marta ishlaydi — ko'rinishdan chiqqanda qayta yashirilmaydi.
 *
 * `delay` — ketma-ket bloklarni zinapoyasimon chiqarish uchun (ms).
 * `prefers-reduced-motion` yoqilgan bo'lsa animatsiya CSS darajasida o'chadi.
 */
export function Reveal({
  children,
  delay = 0,
  as = 'div',
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  as?: Tag;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    // IntersectionObserver bo'lmagan muhitda kontent darhol ko'rinadi
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Barcha ruxsat etilgan teglar bir xil DOM interfeysiga ega —
  // JSX uchun bitta tipga keltiramiz.
  const Element = as as 'div';
  const style = delay ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined;

  return (
    <Element ref={ref} style={style} className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}>
      {children}
    </Element>
  );
}
