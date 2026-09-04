import type { Article, ArticleCategory, InsightsPage } from '../types';

export const articleCategories: Record<ArticleCategory, string> = {
  case: 'Implementation experience',
  technology: 'Technology choices',
  management: 'Management',
  security: 'Security',
};

export const articles: readonly Article[] = [
  {
    slug: 'crm-joriy-etish-xatolari',
    category: 'case',
    title: 'The five most common mistakes in CRM implementation',
    excerpt:
      'A system fails not because it is bad, but because the process was never described. Five cases from practice and how each was solved.',
    date: '2 days ago',
    readingTime: '7 min read',
    author: 'Implementation team',
    featured: true,
    tone: 'sky',
  },
  {
    slug: 'erp-yoki-alohida-dasturlar',
    category: 'technology',
    title: 'One ERP or separate applications: which costs less',
    excerpt: 'A simple three-year cost of ownership calculation and which route pays off in which case.',
    date: '1 week ago',
    readingTime: '9 min read',
    author: 'Architecture group',
    tone: 'amber',
  },
  {
    slug: 'videokuzatuv-loyihalash',
    category: 'security',
    title: 'Designing video surveillance: coverage matters, not camera count',
    excerpt: 'Why calculating coverage and lighting gives a cheaper result than “filling” a site with cameras.',
    date: '2 weeks ago',
    readingTime: '6 min read',
    author: 'Infrastructure team',
    tone: 'green',
  },
  {
    slug: 'hisobot-qoldan-tizimga',
    category: 'management',
    title: 'What a manager gains when reporting moves from hand to system',
    excerpt: 'The difference between a monthly report in Excel and a real-time dashboard is the speed of decisions.',
    date: '3 weeks ago',
    readingTime: '5 min read',
    author: 'Management reporting group',
    tone: 'slate',
  },
  {
    slug: 'integratsiya-api',
    category: 'technology',
    title: 'Integrating without replacing the existing software',
    excerpt: 'A practical way to collect data in one center while keeping accounting and the cash desk in place.',
    date: '1 month ago',
    readingTime: '8 min read',
    author: 'Integrations group',
    tone: 'deep',
  },
  {
    slug: 'hr-davomat-avtomatlashtirish',
    category: 'case',
    title: 'Automating attendance: from the turnstile to payroll',
    excerpt: 'Connecting device data to the HR system and giving up the manual monthly timesheet.',
    date: '1 month ago',
    readingTime: '6 min read',
    author: 'Implementation team',
    tone: 'violet',
  },
];

export const insightsPage: InsightsPage = {
  meta: {
    title: 'Insights — conclusions from implementation practice',
    description:
      'Situations that repeat in implementation projects, criteria for technology choices and an analysis of the most common mistakes.',
  },
  hero: {
    eyebrow: 'Insights',
    title: 'Conclusions drawn from practice',
    lead: 'Situations that repeat in our implementation projects, criteria for technology choices and an analysis of mistakes.',
  },
  empty: 'There is no material in this category yet.',
  itemCta: 'Read',
};
