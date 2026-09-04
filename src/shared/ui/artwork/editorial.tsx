import { screen, tonePalette } from './palette';
import type { Tone } from './palette';

type P = { tone: Tone; id: string };

function Bg({ tone, id }: P) {
  const c = tonePalette[tone];
  return (
    <>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c.from} />
          <stop offset="58%" stopColor={c.via} />
          <stop offset="100%" stopColor={c.to} />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={c.glow} stopOpacity="0.5" />
          <stop offset="100%" stopColor={c.glow} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="640" height="360" fill={`url(#${id}-bg)`} />
      <circle cx="480" cy="90" r="180" fill={`url(#${id}-glow)`} />
    </>
  );
}

/** Grafik va koʻrsatkichlar — tahliliy maqolalar uchun. */
export function ChartArt({ tone, id }: P) {
  const bars = [58, 92, 74, 128, 106, 158, 136, 190];
  return (
    <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <Bg tone={tone} id={id} />
      <g>
        {bars.map((h, i) => (
          <rect key={i} x={72 + i * 62} y={300 - h} width="34" height={h} rx="3" fill="#FFFFFF" opacity={0.18 + i * 0.045} />
        ))}
      </g>
      <path
        d="M89 258 L151 226 L213 244 L275 198 L337 216 L399 158 L461 178 L523 122"
        fill="none"
        stroke={screen.accent}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[89, 275, 523].map((x, i) => (
        <circle key={x} cx={x} cy={[258, 198, 122][i]} r="7" fill={screen.accent} stroke="#0B1A24" strokeWidth="2.5" />
      ))}
      <line x1="60" y1="302" x2="580" y2="302" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1.5" />
    </svg>
  );
}

/** Tarmoq tugunlari — integratsiya va texnologiya mavzulari. */
export function NetworkArt({ tone, id }: P) {
  const nodes = [
    { x: 320, y: 180, r: 26 },
    { x: 150, y: 96, r: 14 },
    { x: 132, y: 258, r: 17 },
    { x: 480, y: 106, r: 16 },
    { x: 508, y: 264, r: 13 },
    { x: 322, y: 62, r: 11 },
    { x: 316, y: 302, r: 12 },
  ];
  return (
    <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <Bg tone={tone} id={id} />
      <g stroke="#FFFFFF" strokeOpacity="0.45" strokeWidth="1.6">
        {nodes.slice(1).map((n) => (
          <line key={`${n.x}-${n.y}`} x1="320" y1="180" x2={n.x} y2={n.y} />
        ))}
        <line x1="150" y1="96" x2="322" y2="62" strokeOpacity="0.22" />
        <line x1="480" y1="106" x2="508" y2="264" strokeOpacity="0.22" />
      </g>
      <g fill="#FFFFFF" fillOpacity="0.86">
        {nodes.slice(1).map((n) => (
          <circle key={`n-${n.x}-${n.y}`} cx={n.x} cy={n.y} r={n.r} />
        ))}
      </g>
      <circle cx="320" cy="180" r="40" fill={screen.accent} fillOpacity="0.22" />
      <circle cx="320" cy="180" r="26" fill={screen.accent} />
    </svg>
  );
}

/** Qalqon va qulf — xavfsizlik mavzusi. */
export function ShieldArt({ tone, id }: P) {
  return (
    <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <Bg tone={tone} id={id} />
      <g transform="translate(320 180)">
        <path d="M0 -118 L96 -78 L96 12 C96 78 48 114 0 130 C-48 114 -96 78 -96 12 L-96 -78 Z" fill="#FFFFFF" fillOpacity="0.14" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="2" />
        <path d="M0 -86 L64 -60 L64 8 C64 56 32 84 0 96 C-32 84 -64 56 -64 8 L-64 -60 Z" fill={screen.accent} fillOpacity="0.18" stroke={screen.accent} strokeWidth="2.4" />
        <rect x="-24" y="-8" width="48" height="40" rx="6" fill={screen.accent} />
        <path d="M-13 -8 v-13 a13 13 0 0 1 26 0 v13" fill="none" stroke={screen.accent} strokeWidth="5" />
        <circle cy="10" r="5" fill="#0B1A24" />
      </g>
      <g stroke="#FFFFFF" strokeOpacity="0.24" strokeWidth="1.4">
        <path d="M40 60 h120 M40 300 h150 M470 60 h130 M450 300 h150" />
      </g>
    </svg>
  );
}

/** Jamoa — inson figuralarining abstrakt kompozitsiyasi. */
export function TeamArt({ tone, id }: P) {
  const people = [
    { x: 190, s: 1, o: 0.6 },
    { x: 320, s: 1.24, o: 0.92 },
    { x: 450, s: 1, o: 0.6 },
  ];
  return (
    <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <Bg tone={tone} id={id} />
      {people.map((p) => (
        <g key={p.x} transform={`translate(${p.x} 224) scale(${p.s})`} fill="#FFFFFF" fillOpacity={p.o}>
          <circle cy="-72" r="30" />
          <path d="M-52 60 C-52 -6 -28 -32 0 -32 C28 -32 52 -6 52 60 Z" />
        </g>
      ))}
      <circle cx="320" cy="152" r="38" fill={screen.accent} fillOpacity="0.28" />
      <g stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1.4" fill="none">
        <path d="M0 300 h640" />
      </g>
      <rect x="0" y="300" width="640" height="60" fill="#000" opacity="0.14" />
    </svg>
  );
}

/** Yoʻnalish va bosqichlar — jarayon mavzusi. */
export function RouteArt({ tone, id }: P) {
  const stops = [110, 250, 390, 530];
  return (
    <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <Bg tone={tone} id={id} />
      <path d="M110 260 C 200 260, 190 120, 280 120 S 400 260, 470 200 S 540 120, 560 120" fill="none" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="16" strokeLinecap="round" />
      <path d="M110 260 C 200 260, 190 120, 280 120 S 400 260, 470 200" fill="none" stroke={screen.accent} strokeWidth="5" strokeLinecap="round" />
      {stops.map((x, i) => {
        const y = [260, 120, 232, 132][i] ?? 200;
        return (
          <g key={x}>
            <circle cx={x} cy={y} r="16" fill="#FFFFFF" />
            <circle cx={x} cy={y} r="7" fill={i < 3 ? screen.accent : '#B9C4C9'} />
          </g>
        );
      })}
    </svg>
  );
}

/** Ombor va logistika qutilari. */
export function BoxesArt({ tone, id }: P) {
  const boxes = [
    { x: 140, y: 210, w: 90, h: 78 },
    { x: 240, y: 168, w: 90, h: 120 },
    { x: 340, y: 196, w: 90, h: 92 },
    { x: 440, y: 142, w: 90, h: 146 },
  ];
  return (
    <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <Bg tone={tone} id={id} />
      {boxes.map((b, i) => (
        <g key={b.x}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} fill="#FFFFFF" fillOpacity={0.2 + i * 0.12} />
          <path d={`M${b.x} ${b.y} l24 -26 h90 l-24 26 Z`} fill="#FFFFFF" fillOpacity={0.34 + i * 0.1} />
          <path d={`M${b.x + b.w} ${b.y} l24 -26 v${b.h} l-24 26 Z`} fill="#000000" fillOpacity="0.14" />
          <rect x={b.x + 30} y={b.y + 16} width="30" height="7" rx="3.5" fill={i === 3 ? screen.accent : '#0B1A24'} opacity="0.5" />
        </g>
      ))}
      <line x1="90" y1="288" x2="580" y2="288" stroke="#FFFFFF" strokeOpacity="0.45" strokeWidth="2" />
    </svg>
  );
}
