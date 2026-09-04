import type { ContentBundle } from '../types';
import { footer, mainNav, site, utilityNav } from './site';
import { home } from './home';
import { solutionCategories, solutions, solutionsPage } from './solutions';
import { industries, industriesPage } from './industries';
import { processPage, processSteps } from './process';
import { articleCategories, articles, insightsPage } from './insights';
import { aboutPage, partners } from './about';
import { contactPage, notFoundPage } from './contact';

export const en: ContentBundle = {
  site,
  utilityNav,
  mainNav,
  footer,
  solutionCategories,
  articleCategories,
  solutions,
  industries,
  processSteps,
  articles,
  partners,
  home,
  solutionsPage,
  industriesPage,
  processPage,
  insightsPage,
  aboutPage,
  contactPage,
  notFoundPage,
};
