type IconProps = { className?: string };

export function ChevronDown({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 12 12" width="11" height="11" aria-hidden="true" className={className} fill="none">
      <path d="M2 4.5 L6 8.5 L10 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SearchIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" className={className} fill="none">
      <circle cx="8.75" cy="8.75" r="5.75" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 13 L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronRight({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true" className={className} fill="none">
      <path d="M4.5 2 L8.5 6 L4.5 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ open = false, className = '' }: IconProps & { open?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" className={className} fill="none">
      {open ? (
        <>
          <path d="M4 4 L16 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M16 4 L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M3 6 H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M3 10 H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M3 14 H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export function CheckIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" className={className} fill="none">
      <path d="M3 8.5 L6.5 12 L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowDown({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" className={className} fill="none">
      <path d="M8 2 V13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M3.5 8.5 L8 13 L12.5 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GlobeIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" className={className} fill="none">
      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.3" />
      <path d="M1.75 8 H14.25" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M8 1.75 C10 4 10 12 8 14.25 C6 12 6 4 8 1.75 Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
