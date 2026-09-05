import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { defaultLocale, locales } from '@/i18n/config';
import { LocaleRoot } from './LocaleRoot';
import HomePage from '@/pages/HomePage';
import SolutionsPage from '@/pages/SolutionsPage';
import IndustriesPage from '@/pages/IndustriesPage';
import ProcessPage from '@/pages/ProcessPage';
import InsightsPage from '@/pages/InsightsPage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import ToolsPage from '@/pages/ToolsPage';
import ResourcesPage from '@/pages/ResourcesPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';

/**
 * Sahifalar daraxti har bir til uchun bir xil — yoʻllar oʻzbekcha
 * (kanonik) qoladi. Asosiy til inglizcha va prefikssiz (`/`), qolganlari
 * `/uz` va `/ru` prefikslari ostida joylashadi.
 */
function pageRoutes(): RouteObject[] {
  return [
    { index: true, element: <HomePage /> },
    { path: 'yechimlar', element: <SolutionsPage /> },
    { path: 'xizmatlar', element: <ServicesPage /> },
    { path: 'sohalar', element: <IndustriesPage /> },
    { path: 'vositalar', element: <ToolsPage /> },
    { path: 'resurslar', element: <ResourcesPage /> },
    { path: 'jarayon', element: <ProcessPage /> },
    { path: 'tahlillar', element: <InsightsPage /> },
    { path: 'biz-haqimizda', element: <AboutPage /> },
    { path: 'boglanish', element: <ContactPage /> },
    { path: '*', element: <NotFoundPage /> },
  ];
}

export const router = createBrowserRouter(
  locales.map((locale) => ({
    path: locale === defaultLocale ? '/' : `/${locale}`,
    element: <LocaleRoot locale={locale} />,
    children: pageRoutes(),
  })),
);
