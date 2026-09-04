import { screen, tonePalette } from './palette';
import type { Tone } from './palette';

type P = { tone: Tone; id: string };

/**
 * Mahsulot ekrani mockuplari — 700×300 (2.33:1), JPM saytidagi
 * card-img-* skrinshotlari egallagan oʻrinni bosadi.
 */
function Frame({ tone, id, children }: P & { children: React.ReactNode }) {
  const c = tonePalette[tone];
  return (
    <svg viewBox="0 0 700 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c.from} />
          <stop offset="60%" stopColor={c.via} />
          <stop offset="100%" stopColor={c.to} />
        </linearGradient>
        <filter id={`${id}-sh`} x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000" floodOpacity="0.32" />
        </filter>
      </defs>
      <rect width="700" height="300" fill={`url(#${id}-bg)`} />
      <g opacity="0.16" stroke="#FFFFFF" strokeWidth="1">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <path key={i} d={`M${i * 116} 0 L${i * 116 - 90} 300`} />
        ))}
      </g>
      <g filter={`url(#${id}-sh)`}>{children}</g>
    </svg>
  );
}

function TitleBar({ x, y, w, label }: { x: number; y: number; w: number; label: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height="26" fill={screen.paperAlt} />
      <line x1={x} y1={y + 26} x2={x + w} y2={y + 26} stroke={screen.rule} strokeWidth="1" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={x + 14 + i * 11} cy={y + 13} r="3.2" fill={screen.rule} />
      ))}
      <rect x={x + 58} y={y + 9} width={label} height="8" rx="4" fill={screen.muted} opacity="0.55" />
    </g>
  );
}

/** HR — xodimlar roʻyxati va davomat diagrammasi. */
export function DashHr({ tone, id }: P) {
  const rows = [0, 1, 2, 3];
  const bars = [30, 46, 38, 54, 42, 58, 34];
  return (
    <Frame tone={tone} id={id}>
      <rect x="52" y="34" width="596" height="232" rx="8" fill={screen.paper} />
      <TitleBar x={52} y={34} w={596} label={96} />
      <rect x="52" y="60" width="112" height="206" fill={screen.paperAlt} />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="68" y={80 + i * 22} width={i === 1 ? 66 : 54} height="7" rx="3.5" fill={i === 1 ? screen.link : screen.muted} opacity={i === 1 ? 1 : 0.45} />
      ))}
      <rect x="184" y="78" width="120" height="9" rx="4.5" fill={screen.ink} opacity="0.85" />
      <rect x="184" y="98" width="300" height="1" fill={screen.rule} />
      {rows.map((i) => (
        <g key={i}>
          <circle cx="196" cy={122 + i * 34} r="10" fill={screen.paperAlt} stroke={screen.rule} />
          <rect x="214" y={116 + i * 34} width={74 - i * 8} height="7" rx="3.5" fill={screen.ink} opacity="0.68" />
          <rect x="214" y={128 + i * 34} width={52} height="6" rx="3" fill={screen.muted} opacity="0.45" />
          <rect x="352" y={116 + i * 34} width="54" height="17" rx="8.5" fill={i === 2 ? '#FDECD2' : '#DFF3E7'} />
          <rect x="362" y={122 + i * 34} width="34" height="5" rx="2.5" fill={i === 2 ? screen.warn : screen.good} />
          <rect x="184" y={142 + i * 34} width="300" height="1" fill={screen.rule} />
        </g>
      ))}
      <rect x="500" y="78" width="132" height="172" rx="6" fill={screen.paperAlt} />
      <rect x="514" y="92" width="60" height="7" rx="3.5" fill={screen.muted} opacity="0.6" />
      {bars.map((h, i) => (
        <rect key={i} x={514 + i * 17} y={232 - h} width="11" height={h} rx="2" fill={i === 5 ? screen.accent : screen.link} opacity={i === 5 ? 1 : 0.34} />
      ))}
      <line x1="510" y1="234" x2="636" y2="234" stroke={screen.rule} strokeWidth="1" />
    </Frame>
  );
}

/** CRM — sotuv voronkasi va kanban ustunlari. */
export function DashCrm({ tone, id }: P) {
  const stages = [
    { w: 300, label: 'Lid' },
    { w: 248, label: 'Aloqa' },
    { w: 190, label: 'Taklif' },
    { w: 132, label: 'Shartnoma' },
  ];
  return (
    <Frame tone={tone} id={id}>
      <rect x="52" y="34" width="596" height="232" rx="8" fill={screen.paper} />
      <TitleBar x={52} y={34} w={596} label={78} />
      <rect x="72" y="78" width="104" height="9" rx="4.5" fill={screen.ink} opacity="0.85" />
      {stages.map((s, i) => (
        <g key={s.label}>
          <rect x={72 + i * 12} y={100 + i * 32} width={s.w} height="24" rx="4" fill={i === 3 ? screen.accent : screen.link} opacity={i === 3 ? 1 : 0.22 + i * 0.16} />
          <rect x={84 + i * 12} y={108 + i * 32} width={46 + i * 6} height="8" rx="4" fill={i === 3 ? screen.ink : '#FFFFFF'} opacity={i === 3 ? 0.7 : 0.85} />
        </g>
      ))}
      <line x1="404" y1="78" x2="404" y2="250" stroke={screen.rule} strokeWidth="1" />
      {[0, 1].map((col) => (
        <g key={col}>
          <rect x={428 + col * 106} y="78" width="60" height="7" rx="3.5" fill={screen.muted} opacity="0.6" />
          {[0, 1, 2].map((row) => (
            <g key={row}>
              <rect
                x={428 + col * 106}
                y={98 + row * 50}
                width="92"
                height="40"
                rx="5"
                fill={screen.paper}
                stroke={col === 0 && row === 0 ? screen.accent : screen.rule}
                strokeWidth={col === 0 && row === 0 ? 1.8 : 1}
              />
              <rect x={440 + col * 106} y={108 + row * 50} width={60 - row * 8} height="6" rx="3" fill={screen.ink} opacity="0.6" />
              <rect x={440 + col * 106} y={120 + row * 50} width="40" height="5" rx="2.5" fill={screen.muted} opacity="0.45" />
            </g>
          ))}
        </g>
      ))}
    </Frame>
  );
}

/** Xavfsizlik — videokuzatuv monitoringi. */
export function DashSecurity({ tone, id }: P) {
  const tiles = [0, 1, 2, 3, 4, 5];
  return (
    <Frame tone={tone} id={id}>
      <rect x="52" y="34" width="596" height="232" rx="8" fill="#141C21" />
      <TitleBar x={52} y={34} w={596} label={86} />
      <rect x="52" y="34" width="596" height="26" fill="#1E282E" />
      {tiles.map((i) => {
        const x = 70 + (i % 3) * 192;
        const y = 74 + Math.floor(i / 3) * 96;
        return (
          <g key={i}>
            <rect x={x} y={y} width="176" height="84" rx="3" fill="#22303A" />
            <path d={`M${x} ${y + 60} L${x + 44} ${y + 34} L${x + 88} ${y + 56} L${x + 132} ${y + 26} L${x + 176} ${y + 46} L${x + 176} ${y + 84} L${x} ${y + 84} Z`} fill="#2E4150" />
            <circle cx={x + 60} cy={y + 62} r="7" fill="#3E5768" />
            <rect x={x + 54} y={y + 68} width="13" height="16" rx="3" fill="#3E5768" />
            <g stroke={i === 1 ? screen.accent : '#5A727F'} strokeWidth="1.6" fill="none">
              <path d={`M${x + 8} ${y + 8} h12 M${x + 8} ${y + 8} v10`} />
              <path d={`M${x + 168} ${y + 8} h-12 M${x + 168} ${y + 8} v10`} />
              <path d={`M${x + 8} ${y + 76} h12 M${x + 8} ${y + 76} v-10`} />
              <path d={`M${x + 168} ${y + 76} h-12 M${x + 168} ${y + 76} v-10`} />
            </g>
            <circle cx={x + 160} cy={y + 74} r="3.5" fill="#E2574C" />
          </g>
        );
      })}
      <rect x="70" y="248" width="560" height="6" rx="3" fill="#2E3B44" />
      <rect x="70" y="248" width="392" height="6" rx="3" fill={screen.accent} />
      <circle cx="462" cy="251" r="6" fill="#FFFFFF" />
    </Frame>
  );
}

/** ERP — ombor koʻrsatkichlari va oʻsish grafigi. */
export function DashErp({ tone, id }: P) {
  const line = 'M186 214 L228 196 L270 202 L312 168 L354 176 L396 138 L438 150 L480 112 L522 120';
  return (
    <Frame tone={tone} id={id}>
      <rect x="52" y="34" width="596" height="232" rx="8" fill={screen.paper} />
      <TitleBar x={52} y={34} w={596} label={104} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={72 + i * 128} y="76" width="112" height="52" rx="5" fill={screen.paperAlt} />
          <rect x={84 + i * 128} y="88" width="52" height="6" rx="3" fill={screen.muted} opacity="0.55" />
          <rect x={84 + i * 128} y="102" width={i === 0 ? 62 : 46} height="12" rx="3" fill={i === 0 ? screen.link : screen.ink} opacity={i === 0 ? 1 : 0.72} />
        </g>
      ))}
      <rect x="72" y="146" width="96" height="104" rx="5" fill={screen.paperAlt} />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="84" y={162 + i * 18} width={72 - i * 9} height="7" rx="3.5" fill={screen.muted} opacity={0.65 - i * 0.08} />
      ))}
      <path d={`${line} L522 250 L186 250 Z`} fill={screen.link} opacity="0.1" />
      <path d={line} fill="none" stroke={screen.link} strokeWidth="2.4" strokeLinejoin="round" />
      <circle cx="480" cy="112" r="6" fill={screen.accent} stroke={screen.paper} strokeWidth="2.5" />
      <line x1="186" y1="250" x2="628" y2="250" stroke={screen.rule} strokeWidth="1" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={i} x={190 + i * 42} y="256" width="22" height="5" rx="2.5" fill={screen.muted} opacity="0.35" />
      ))}
    </Frame>
  );
}

/** Hujjat aylanishi — kelishuv marshruti. */
export function DashDocs({ tone, id }: P) {
  const nodes = [
    { x: 130, done: true },
    { x: 262, done: true },
    { x: 394, done: true },
    { x: 526, done: false },
  ];
  return (
    <Frame tone={tone} id={id}>
      <rect x="52" y="34" width="596" height="232" rx="8" fill={screen.paper} />
      <TitleBar x={52} y={34} w={596} label={90} />
      <rect x="72" y="76" width="150" height="9" rx="4.5" fill={screen.ink} opacity="0.85" />
      <line x1="130" y1="150" x2="526" y2="150" stroke={screen.rule} strokeWidth="2" />
      <line x1="130" y1="150" x2="394" y2="150" stroke={screen.good} strokeWidth="2.6" />
      {nodes.map((n, i) => (
        <g key={n.x}>
          <circle cx={n.x} cy="150" r="17" fill={n.done ? screen.good : screen.paper} stroke={n.done ? screen.good : screen.accent} strokeWidth="2.4" />
          {n.done ? (
            <path d={`M${n.x - 6} 150 l4.5 5 l8-9`} fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <circle cx={n.x} cy="150" r="5" fill={screen.accent} />
          )}
          <rect x={n.x - 34} y="182" width="68" height="7" rx="3.5" fill={screen.ink} opacity={n.done ? 0.6 : 0.85} />
          <rect x={n.x - 24} y="196" width="48" height="6" rx="3" fill={screen.muted} opacity="0.42" />
          {i < 3 ? null : null}
        </g>
      ))}
      <rect x="72" y="222" width="556" height="1" fill={screen.rule} />
      <rect x="72" y="236" width="188" height="7" rx="3.5" fill={screen.muted} opacity="0.4" />
      <rect x="72" y="252" width="132" height="7" rx="3.5" fill={screen.muted} opacity="0.28" />
      <rect x="524" y="232" width="104" height="26" rx="13" fill={screen.accent} />
      <rect x="548" y="242" width="56" height="7" rx="3.5" fill={screen.ink} opacity="0.65" />
    </Frame>
  );
}
