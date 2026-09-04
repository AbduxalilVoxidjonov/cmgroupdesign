import type { ReactNode } from 'react';

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`text-eyebrow uppercase ${className}`}>{children}</p>;
}
