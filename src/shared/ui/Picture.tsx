import { useState } from 'react';
import type { ReactNode } from 'react';
import { Artwork } from './artwork';
import type { ArtworkVariant, Tone } from './artwork';

/**
 * Rasm sloti.
 *
 * `src` berilgan va fayl mavjud boʻlsa — haqiqiy foto koʻrsatiladi.
 * Fayl yoʻq yoki yuklanmasa — oʻrniga original SVG artwork chiziladi.
 * Shu sababli sayt fotosiz ham toʻliq koʻrinadi; `public/images/` ga
 * fayl tashlangan zahoti avtomatik almashadi (roʻyxat: public/images/README.md).
 */
export function Picture({
  src,
  alt = '',
  variant,
  tone = 'deep',
  className = '',
  fill = false,
  position = 'center',
  priority = false,
  fallback,
}: {
  src?: string;
  alt?: string;
  variant: ArtworkVariant;
  tone?: Tone;
  className?: string;
  fill?: boolean;
  position?: 'center' | 'top' | 'bottom';
  /** Ekranning yuqorisidagi rasm: keyinga qoldirilmaydi va navbatga birinchi qoʻyiladi. */
  priority?: boolean;
  /** Foto boʻlmaganda koʻrsatiladigan muqobil (berilmasa — SVG artwork). */
  fallback?: ReactNode;
}) {
  const [failed, setFailed] = useState(false);
  const box = fill ? `absolute inset-0 h-full w-full ${className}` : `relative ${className}`;
  const objectPosition =
    position === 'top' ? 'object-top' : position === 'bottom' ? 'object-bottom' : 'object-center';

  if (!src || failed) {
    if (fallback) return <>{fallback}</>;
    return <Artwork variant={variant} tone={tone} className={box} label={alt || undefined} />;
  }

  return (
    <div className={`${box} overflow-hidden`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${objectPosition}`}
      />
    </div>
  );
}
