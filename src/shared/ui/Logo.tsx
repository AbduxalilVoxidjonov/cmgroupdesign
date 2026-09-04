export function Logo({ onDark = false, compact = false }: { onDark?: boolean; compact?: boolean }) {
  const color = onDark ? 'text-n-0' : 'text-n-900';
  return (
    <span className={`inline-flex flex-col leading-none ${color}`}>
      <span className="font-serif font-semibold tracking-[-0.02em] text-[21px] leading-[1.05]">
        C<span className="mx-[3px] font-normal opacity-45">|</span>M
        <span className="mx-[3px] font-normal opacity-45">|</span>G
      </span>
      {compact ? null : (
        <span className="mt-[3px] text-[8.5px] font-medium uppercase tracking-[0.18em]">
          Capital Management Group
        </span>
      )}
    </span>
  );
}
