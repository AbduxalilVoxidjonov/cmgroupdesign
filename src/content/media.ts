/**
 * Rasm slotlari — bitta joyda. Fayl `public/images/` da boʻlmasa,
 * <Picture> avtomatik ravishda SVG artwork chizadi.
 */
const base = '/images';

export const media = {
  heroHome: `${base}/hero-home.webp`,
  heroSolutions: `${base}/hero-solutions.webp`,
  heroIndustries: `${base}/hero-industries.webp`,
  heroProcess: `${base}/hero-process.webp`,
  heroInsights: `${base}/hero-insights.webp`,
  heroAbout: `${base}/hero-about.webp`,
  heroContact: `${base}/hero-contact.webp`,
  heroServices: `${base}/hero-services.webp`,
  heroTools: `${base}/hero-tools.webp`,
  heroResources: `${base}/hero-resources.webp`,
  cardHr: `${base}/card-hr.webp`,
  cardCrm: `${base}/card-crm.webp`,
  cardSecurity: `${base}/card-security.webp`,
  cardErp: `${base}/card-erp.webp`,
  cardDocs: `${base}/card-docs.webp`,
  cardAcs: `${base}/card-acs.webp`,
  cardNetwork: `${base}/card-network.webp`,
  cardIntegration: `${base}/card-integration.webp`,
  storyTeam: `${base}/story-team.webp`,
  spotlight: `${base}/spotlight.webp`,
  // Sohalar
  industry: (id: string) => `${base}/industry-${id}.webp`,
  // Vositalar
  tool: (id: string) => `${base}/tool-${id}.webp`,
  // Xizmat guruhlari
  service: (id: string) => `${base}/service-${id}.webp`,
  // Biz haqimizda
  aboutApproach: `${base}/about-approach.webp`,
  article: (n: number) => `${base}/article-${n}.webp`,
} as const;
