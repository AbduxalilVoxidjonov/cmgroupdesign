/**
 * Sayt kontentining yagona tuzilishi.
 *
 * Har bir til (`src/content/uz`, `src/content/ru`) shu tiplarga toʻliq mos
 * boʻlishi shart — maydon tushib qolsa `tsc` xato beradi, yaʼni tarjima
 * toʻliqligini kompilyator nazorat qiladi.
 */

export type Tone = 'deep' | 'sky' | 'amber' | 'slate' | 'green' | 'violet';

/* --- Umumiy kichik bloklar --- */

export interface CtaLink {
  label: string;
  /** Kanonik (oʻzbekcha) yoʻl — til prefiksi `LocaleLink` tomonidan qoʻshiladi. */
  to: string;
}

export interface PageMeta {
  title: string;
  description: string;
}

export interface HeroCopy {
  eyebrow: string;
  title: string;
  lead: string;
}

/* --- Sayt va navigatsiya --- */

export interface SiteInfo {
  name: string;
  legalName: string;
  domain: string;
  email: string;
  /** Texnik yordam uchun alohida manzil — asosiy pochta yonida koʻrsatiladi. */
  supportEmail: string;
  phone: string;
  tagline: string;
  address: string;
  workHours: string;
}

export interface NavChild {
  label: string;
  to: string;
}

export interface NavGroup {
  title: string;
  items: readonly NavChild[];
}

export interface NavItem {
  label: string;
  to: string;
  groups?: readonly NavGroup[];
}

export interface UtilityNavItem {
  label: string;
  href: string;
  external: boolean;
}

export interface FooterContent {
  left: readonly NavChild[];
  right: readonly NavChild[];
  addressLabel: string;
  contactLabel: string;
  hoursLabel: string;
  cta: string;
  legal: string;
}

/* --- Yechimlar --- */

export type SolutionCategory = 'management' | 'infrastructure';

export interface Solution {
  id: string;
  category: SolutionCategory;
  title: string;
  short: string;
  body: string;
  points: readonly string[];
  tone: Tone;
}

export interface SolutionsPage {
  meta: PageMeta;
  hero: HeroCopy;
  navLabel: string;
  groupTitles: Record<SolutionCategory, string>;
  itemCta: string;
}

/* --- Sohalar --- */

export interface Industry {
  id: string;
  title: string;
  lead: string;
  outcomes: readonly string[];
  tone: Tone;
}

export interface IndustriesPage {
  meta: PageMeta;
  hero: HeroCopy;
  itemCta: string;
  scalesTitle: string;
  scalesIntro: string;
  scales: readonly ScaleItem[];
}

/* --- Jarayon --- */

export interface ProcessStep {
  id: string;
  index: string;
  title: string;
  duration: string;
  lead: string;
  deliverables: readonly string[];
}

export interface ProcessPage {
  meta: PageMeta;
  hero: HeroCopy;
  resultLabel: string;
}

/* --- Tahlillar --- */

export type ArticleCategory = 'case' | 'technology' | 'management' | 'security';

export interface Article {
  slug: string;
  category: ArticleCategory;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  author: string;
  featured?: boolean;
  tone: Tone;
}

export interface InsightsPage {
  meta: PageMeta;
  hero: HeroCopy;
  empty: string;
  itemCta: string;
}

/* --- Biz haqimizda --- */

export interface Principle {
  title: string;
  body: string;
}

export interface TeamRow {
  role: string;
  count: number;
  note: string;
}

export interface AboutPage {
  meta: PageMeta;
  hero: HeroCopy;
  approachTitle: string;
  principles: readonly Principle[];
  team: {
    title: string;
    roleColumn: string;
    countColumn: string;
    noteColumn: string;
    caption: string;
    rows: readonly TeamRow[];
  };
  partners: {
    title: string;
    intro: string;
  };
}

/* --- Bosh sahifa --- */

export interface Stat {
  value: string;
  label: string;
}

export interface EditorialEntry {
  title: string;
  body: string;
  link: CtaLink;
}

export interface HomePage {
  meta: PageMeta;
  hero: {
    title: string;
    /** Sarlavhaning gradient bilan ajratiladigan qismi — `title` ichida boʻlishi shart. */
    highlight: string;
    body: string;
    cta: CtaLink;
    secondaryCta: CtaLink;
    points: readonly string[];
    statsTitle: string;
    statsLink: string;
  };
  stats: readonly Stat[];
  editorial: readonly EditorialEntry[];
  finder: {
    eyebrow: string;
    title: string;
    placeholder: string;
    searchLabel: string;
    empty: string;
    note: string;
  };
  resources: {
    eyebrow: string;
    title: string;
    intro: string;
    cta: string;
  };
  insights: {
    eyebrow: string;
    title: string;
    leadCta: string;
    itemCta: string;
    allCta: string;
  };
  spotlight: {
    eyebrow: string;
    title: string;
    intro: string;
    badge: string;
    cardTitle: string;
    cardBody: string;
    cardCta: string;
    tileCta: string;
  };
  brandStory: {
    title: string;
    paragraphs: readonly string[];
    link: CtaLink;
    guaranteeLabel: string;
    guaranteeBody: string;
  };
  principles: readonly Principle[];
  cta: {
    eyebrow: string;
    title: string;
    body: string;
    button: string;
    note: string;
  };
}

/* --- Bogʻlanish --- */

export interface ContactPage {
  meta: PageMeta;
  hero: HeroCopy;
  reasons: readonly string[];
  form: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    reasonLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    requiredNote: string;
    honeypotLabel: string;
  };
  success: {
    title: string;
    /** `{name}` oʻrniga foydalanuvchi ismi qoʻyiladi. */
    body: string;
    again: string;
  };
  aside: {
    title: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    hoursLabel: string;
    note: string;
  };
  legal: {
    title: string;
    dataTitle: string;
    dataBody: string;
    termsTitle: string;
    termsBody: string;
  };
}

export interface NotFoundPage {
  meta: PageMeta;
  code: string;
  title: string;
  body: string;
  cta: string;
}


/* --- Xizmatlar --- */

export interface ServiceItem {
  id: string;
  title: string;
  body: string;
}

export interface ServiceGroup {
  id: string;
  title: string;
  lead: string;
  tone: Tone;
  items: readonly ServiceItem[];
}

export interface ServicesPage {
  meta: PageMeta;
  hero: HeroCopy;
  groups: readonly ServiceGroup[];
  itemCta: string;
  processLinkLabel: string;
}

/* --- Vositalar --- */

export interface ToolItem {
  id: string;
  title: string;
  body: string;
  note: string;
  tone: Tone;
}

export interface ToolsPage {
  meta: PageMeta;
  hero: HeroCopy;
  intro: string;
  tools: readonly ToolItem[];
  itemCta: string;
  note: string;
}

/* --- Resurslar --- */

export interface ResourceItem {
  id: string;
  kind: string;
  title: string;
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ResourcesPage {
  meta: PageMeta;
  hero: HeroCopy;
  intro: string;
  items: readonly ResourceItem[];
  itemCta: string;
  faqTitle: string;
  faq: readonly FaqItem[];
}

/* --- Kompaniya miqyosi (Sohalar sahifasida) --- */

export interface ScaleItem {
  id: string;
  title: string;
  body: string;
}

/* --- Toʻliq toʻplam --- */

export interface ContentBundle {
  site: SiteInfo;
  utilityNav: readonly UtilityNavItem[];
  mainNav: readonly NavItem[];
  footer: FooterContent;
  solutionCategories: Record<SolutionCategory, string>;
  articleCategories: Record<ArticleCategory, string>;
  solutions: readonly Solution[];
  industries: readonly Industry[];
  processSteps: readonly ProcessStep[];
  articles: readonly Article[];
  partners: readonly string[];
  home: HomePage;
  solutionsPage: SolutionsPage;
  industriesPage: IndustriesPage;
  processPage: ProcessPage;
  insightsPage: InsightsPage;
  aboutPage: AboutPage;
  servicesPage: ServicesPage;
  toolsPage: ToolsPage;
  resourcesPage: ResourcesPage;
  contactPage: ContactPage;
  notFoundPage: NotFoundPage;
}
