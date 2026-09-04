import { media } from '@/content/media';
import type { ArticleCategory } from '@/content/types';
import type { ArtworkVariant } from './artwork';

/** Yechim moduli uchun mahsulot ekrani mockupi va foto sloti. */
export function solutionVisual(id: string): { variant: ArtworkVariant; src?: string } {
  switch (id) {
    case 'hr':
      return { variant: 'dash-hr', src: media.cardHr };
    case 'crm':
      return { variant: 'dash-crm', src: media.cardCrm };
    case 'erp':
      return { variant: 'dash-erp', src: media.cardErp };
    case 'hujjat':
      return { variant: 'dash-docs', src: media.cardDocs };
    case 'xavfsizlik':
      return { variant: 'dash-security', src: media.cardSecurity };
    case 'acs':
      return { variant: 'shield', src: media.cardAcs };
    case 'tarmoq':
      return { variant: 'lattice', src: media.cardNetwork };
    default:
      return { variant: 'network', src: media.cardIntegration };
  }
}

/** Maqola turkumiga mos vizual. */
export function articleVariant(category: ArticleCategory): ArtworkVariant {
  switch (category) {
    case 'case':
      return 'route';
    case 'technology':
      return 'network';
    case 'security':
      return 'shield';
    default:
      return 'chart';
  }
}

/** Soha uchun vizual. */
export function industryVariant(id: string): ArtworkVariant {
  switch (id) {
    case 'talim':
      return 'team';
    case 'savdo':
      return 'boxes';
    case 'ishlab-chiqarish':
      return 'lattice';
    case 'qurilish':
      return 'arch';
    case 'logistika':
      return 'route';
    default:
      return 'chart';
  }
}

/** Xizmat guruhi uchun vizual. */
export function serviceVariant(id: string): ArtworkVariant {
  switch (id) {
    case 'joriy-etish':
      return 'route';
    case 'dasturlash':
      return 'network';
    case 'infratuzilma':
      return 'lattice';
    default:
      return 'shield';
  }
}
