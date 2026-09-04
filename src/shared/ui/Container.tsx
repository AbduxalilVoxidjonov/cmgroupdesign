import type { ReactNode } from 'react';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className="page-px">
      <div className={`page-mw ${className}`}>{children}</div>
    </div>
  );
}
