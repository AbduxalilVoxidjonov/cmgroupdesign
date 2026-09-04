import { forwardRef } from 'react';
import {
  Link as RouterLink,
  NavLink as RouterNavLink,
  type LinkProps,
  type NavLinkProps,
} from 'react-router-dom';
import { useLocale } from './context';
import { withLocale } from './paths';

/**
 * Til prefiksini avtomatik qoʻshadigan havolalar.
 *
 * Komponentlarda yoʻllar har doim kanonik koʻrinishda yoziladi
 * (`/yechimlar`), prefiks (`/ru/yechimlar`) shu yerda qoʻshiladi — shuning
 * uchun yangi til qoʻshilganda sahifalarni tahrirlash kerak boʻlmaydi.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link({ to, ...rest }, ref) {
  const locale = useLocale();
  return <RouterLink ref={ref} to={typeof to === 'string' ? withLocale(to, locale) : to} {...rest} />;
});

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(function NavLink(
  { to, ...rest },
  ref,
) {
  const locale = useLocale();
  return <RouterNavLink ref={ref} to={typeof to === 'string' ? withLocale(to, locale) : to} {...rest} />;
});
