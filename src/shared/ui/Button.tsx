import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Link } from '@/i18n/Link';

type Variant = 'primary' | 'secondary' | 'ghost' | 'onDark';

const variantClass: Record<Variant, string> = {
  primary: 'btn btn-primary',
  secondary: 'btn btn-secondary',
  ghost: 'btn btn-ghost',
  onDark: 'btn btn-on-dark',
};

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  block = false,
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  block?: boolean;
}) {
  return (
    <Link to={to} className={`${variantClass[variant]} ${block ? 'w-full' : ''}`}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = 'primary',
  type = 'button',
  block = false,
  ...rest
}: ComponentPropsWithoutRef<'button'> & { variant?: Variant; block?: boolean }) {
  return (
    <button type={type} className={`${variantClass[variant]} ${block ? 'w-full' : ''}`} {...rest}>
      {children}
    </button>
  );
}
