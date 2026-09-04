import type { ReactNode } from 'react';
import { Link } from '@/i18n/Link';

type ArrowLinkProps = {
  to: string;
  children: ReactNode;
  external?: boolean;
  size?: 'base' | 'sm';
  onDark?: boolean;
};

export function ArrowLink({ to, children, external = false, size = 'base', onDark = false }: ArrowLinkProps) {
  const cls = [
    'group inline-flex items-center gap-2 py-1 font-medium underline-offset-4 hover:underline',
    size === 'sm' ? 'text-meta' : 'text-base',
    onDark ? 'text-accent' : 'text-link',
  ].join(' ');

  const glyph = (
    <span
      aria-hidden="true"
      className="inline-block transition-transform duration-200 ease-soft group-hover:translate-x-1"
    >
      {external ? '↗' : '→'}
    </span>
  );

  if (external) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className={cls}>
        {children}
        {glyph}
      </a>
    );
  }

  return (
    <Link to={to} className={cls}>
      {children}
      {glyph}
    </Link>
  );
}
