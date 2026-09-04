export type Tone = 'deep' | 'sky' | 'amber' | 'slate' | 'green' | 'violet';

/** Har bir ton uchun: fon gradienti, ikkilamchi chiziq rangi, urgʻu rangi. */
export const tonePalette: Record<Tone, { from: string; via: string; to: string; line: string; glow: string }> = {
  deep: { from: '#08172B', via: '#123E68', to: '#20699A', line: '#7FB6D8', glow: '#52D8E6' },
  sky: { from: '#0C2C40', via: '#1E6685', to: '#63BFD6', line: '#BFE7F2', glow: '#52D8E6' },
  amber: { from: '#4A2409', via: '#A75F1F', to: '#E0A253', line: '#F4D3A6', glow: '#FFD48A' },
  slate: { from: '#12181C', via: '#2C383F', to: '#55666F', line: '#A9B7BE', glow: '#52D8E6' },
  green: { from: '#0B2418', via: '#255739', to: '#5E9A6D', line: '#BCDDC4', glow: '#7FE6A8' },
  violet: { from: '#1A1230', via: '#3E3068', to: '#7A6BB0', line: '#D0C7EC', glow: '#B79CFF' },
};

export const screen = {
  paper: '#FFFFFF',
  paperAlt: '#F1F4F6',
  rule: '#DDE3E6',
  ink: '#1B2429',
  muted: '#8C979D',
  accent: '#52D8E6',
  link: '#096183',
  good: '#3F9E6A',
  warn: '#D9902F',
};
