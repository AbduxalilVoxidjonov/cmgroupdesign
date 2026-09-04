import { ArchArt, LatticeArt, OrbitArt, WaveArt } from './abstract';
import { DashCrm, DashDocs, DashErp, DashHr, DashSecurity } from './dashboards';
import { BoxesArt, ChartArt, NetworkArt, RouteArt, ShieldArt, TeamArt } from './editorial';
import type { Tone } from './palette';

export type { Tone } from './palette';

export type ArtworkVariant =
  // abstrakt (800×500)
  | 'arch'
  | 'orbit'
  | 'wave'
  | 'lattice'
  // mahsulot ekranlari (700×300)
  | 'dash-hr'
  | 'dash-crm'
  | 'dash-security'
  | 'dash-erp'
  | 'dash-docs'
  // maqola va bo'lim vizuallari (640×360)
  | 'chart'
  | 'network'
  | 'shield'
  | 'team'
  | 'route'
  | 'boxes';

const registry: Record<ArtworkVariant, (p: { tone: Tone; id: string }) => React.ReactElement> = {
  arch: ArchArt,
  orbit: OrbitArt,
  wave: WaveArt,
  lattice: LatticeArt,
  'dash-hr': DashHr,
  'dash-crm': DashCrm,
  'dash-security': DashSecurity,
  'dash-erp': DashErp,
  'dash-docs': DashDocs,
  chart: ChartArt,
  network: NetworkArt,
  shield: ShieldArt,
  team: TeamArt,
  route: RouteArt,
  boxes: BoxesArt,
};

export function Artwork({
  variant,
  tone = 'deep',
  className = '',
  label,
}: {
  variant: ArtworkVariant;
  tone?: Tone;
  className?: string;
  label?: string;
}) {
  const Draw = registry[variant];
  const id = `art-${variant}-${tone}`;
  return (
    <div
      className={`relative overflow-hidden [&>svg]:absolute [&>svg]:inset-0 [&>svg]:h-full [&>svg]:w-full ${className}`}
      role={label ? 'img' : 'presentation'}
      aria-label={label}
    >
      <Draw tone={tone} id={id} />
    </div>
  );
}
