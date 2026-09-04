/**
 * Cheksiz aylanuvchi lenta. Ro'yxat ikki marta chiziladi va animatsiya
 * -50% ga siljiydi — shuning uchun ulanish joyi ko'rinmaydi.
 * Hoverda to'xtaydi, ekran o'quvchisi uchun nusxa `aria-hidden`.
 */
export function Marquee({ items, className = '' }: { items: readonly string[]; className?: string }) {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {items.map((item) => (
        <li key={item} className="flex items-center gap-10 whitespace-nowrap text-meta text-n-0/70">
          <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`group mask-fade-x overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
