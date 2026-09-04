import { tonePalette } from './palette';
import type { Tone } from './palette';

type P = { tone: Tone; id: string };

function Defs({ tone, id }: P) {
  const c = tonePalette[tone];
  return (
    <defs>
      <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={c.from} />
        <stop offset="52%" stopColor={c.via} />
        <stop offset="100%" stopColor={c.to} />
      </linearGradient>
      <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.42" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.04" />
      </linearGradient>
      <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={c.glow} stopOpacity="0.55" />
        <stop offset="100%" stopColor={c.glow} stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

/** Binoning pastdan yuqoriga perspektivasi — chiziqli grafika. */
export function ArchArt({ tone, id }: P) {
  const c = tonePalette[tone];
  const rays = [-46, -30, -16, -4, 8, 22, 38, 56];
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <Defs tone={tone} id={id} />
      <rect width="800" height="500" fill={`url(#${id}-bg)`} />
      <circle cx="560" cy="120" r="190" fill={`url(#${id}-glow)`} />
      <g stroke={c.line} strokeOpacity="0.34" strokeWidth="1" fill="none">
        {rays.map((offset, index) => (
          <path key={index} d={`M${400 + offset * 1.1} 128 L${400 + offset * 12} 500`} />
        ))}
        {[170, 232, 300, 376, 460].map((y, index) => (
          <path key={`h${index}`} d={`M${400 - (y - 128) * 0.95} ${y} L${400 + (y - 128) * 0.95} ${y}`} />
        ))}
      </g>
      <g fill={`url(#${id}-glass)`} stroke={c.line} strokeOpacity="0.4" strokeWidth="1">
        <path d="M400 128 L470 128 L560 500 L400 500 Z" fillOpacity="0.5" />
        <path d="M400 128 L330 128 L232 500 L400 500 Z" fillOpacity="0.28" />
      </g>
      <path d="M330 128 L470 128 L400 92 Z" fill="#FFFFFF" fillOpacity="0.5" />
      <rect width="800" height="500" fill="#000" opacity="0.06" />
    </svg>
  );
}

/** Konsentrik halqalar — “orbit” renderi. */
export function OrbitArt({ tone, id }: P) {
  const c = tonePalette[tone];
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <Defs tone={tone} id={id} />
      <rect width="800" height="500" fill={`url(#${id}-bg)`} />
      <circle cx="420" cy="250" r="250" fill={`url(#${id}-glow)`} />
      <g transform="translate(420 250) rotate(-18)">
        {[210, 168, 126, 84].map((r, index) => (
          <ellipse
            key={r}
            rx={r}
            ry={r * 0.62}
            fill="none"
            stroke={index === 1 ? c.glow : c.line}
            strokeOpacity={index === 1 ? 0.92 : 0.34}
            strokeWidth={index === 1 ? 3 : 1.2}
          />
        ))}
        <path d="M-168 0 A168 104 0 0 1 0 -104" fill="none" stroke={c.glow} strokeWidth="7" strokeLinecap="round" />
        <circle r="42" fill="#FFFFFF" fillOpacity="0.14" />
        <circle r="14" fill={c.glow} />
        <circle cx="168" cy="0" r="9" fill="#FFFFFF" fillOpacity="0.85" />
        <circle cx="-84" cy="-52" r="6" fill="#FFFFFF" fillOpacity="0.6" />
      </g>
    </svg>
  );
}

/** Qatlamli shisha toʻlqin. */
export function WaveArt({ tone, id }: P) {
  const c = tonePalette[tone];
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <Defs tone={tone} id={id} />
      <rect width="800" height="500" fill={`url(#${id}-bg)`} />
      <circle cx="300" cy="200" r="240" fill={`url(#${id}-glow)`} />
      {[0, 34, 68, 102].map((offset, index) => (
        <path
          key={offset}
          d={`M-40 ${300 + offset} C 180 ${170 + offset}, 360 ${400 + offset}, 860 ${210 + offset}`}
          fill="none"
          stroke={index === 0 ? c.glow : '#FFFFFF'}
          strokeOpacity={index === 0 ? 0.9 : 0.34 - index * 0.07}
          strokeWidth={index === 0 ? 4 : 26}
          strokeLinecap="round"
        />
      ))}
      <path
        d="M-40 300 C 180 170, 360 400, 860 210 L860 500 L-40 500 Z"
        fill={`url(#${id}-glass)`}
        opacity="0.5"
      />
    </svg>
  );
}

/** Izometrik tarmoq panjarasi. */
export function LatticeArt({ tone, id }: P) {
  const c = tonePalette[tone];
  const cols = 9;
  const rows = 6;
  const nodes: { x: number; y: number; key: string }[] = [];
  for (let r = 0; r < rows; r += 1) {
    for (let q = 0; q < cols; q += 1) {
      nodes.push({ x: 90 + q * 78 + (r % 2) * 39, y: 90 + r * 66, key: `${r}-${q}` });
    }
  }
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <Defs tone={tone} id={id} />
      <rect width="800" height="500" fill={`url(#${id}-bg)`} />
      <circle cx="600" cy="380" r="230" fill={`url(#${id}-glow)`} />
      <g stroke={c.line} strokeOpacity="0.26" strokeWidth="1">
        {nodes.map((n) => (
          <g key={n.key}>
            <path d={`M${n.x} ${n.y} L${n.x + 78} ${n.y}`} />
            <path d={`M${n.x} ${n.y} L${n.x + 39} ${n.y + 66}`} />
          </g>
        ))}
      </g>
      <g fill="#FFFFFF" fillOpacity="0.5">
        {nodes.filter((_, index) => index % 7 === 0).map((n) => (
          <circle key={n.key} cx={n.x} cy={n.y} r="3.5" />
        ))}
      </g>
      <g fill={c.glow}>
        {nodes.filter((_, index) => index % 17 === 5).map((n) => (
          <circle key={n.key} cx={n.x} cy={n.y} r="6.5" />
        ))}
      </g>
      <path
        d="M129 156 L246 156 L285 222 L402 222 L441 288 L558 288"
        fill="none"
        stroke={c.glow}
        strokeOpacity="0.9"
        strokeWidth="2.5"
      />
    </svg>
  );
}
