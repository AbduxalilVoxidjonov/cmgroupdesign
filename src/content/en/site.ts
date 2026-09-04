import { contacts } from '../shared';
import type { FooterContent, NavItem, SiteInfo, UtilityNavItem } from '../types';

export const site: SiteInfo = {
  ...contacts,
  tagline: 'We build business systems from the ground up',
  address: 'Tashkent, Mirzo Ulugbek district',
  workHours: 'Monday – Saturday, 09:00 – 18:00',
};

export const utilityNav: readonly UtilityNavItem[] = [
  { label: 'Client portal', href: `https://${contacts.domain}`, external: true },
  { label: 'Technical support', href: `mailto:${contacts.supportEmail}`, external: false },
];

export const mainNav: readonly NavItem[] = [
  {
    label: 'Solutions',
    to: '/yechimlar',
    groups: [
      {
        title: 'Management systems',
        items: [
          { label: 'HR and workforce records', to: '/yechimlar#hr' },
          { label: 'CRM — sales and customers', to: '/yechimlar#crm' },
          { label: 'ERP — resource management', to: '/yechimlar#erp' },
          { label: 'Document workflow', to: '/yechimlar#hujjat' },
          { label: 'All modules', to: '/yechimlar' },
        ],
      },
      {
        title: 'Infrastructure',
        items: [
          { label: 'Video surveillance and security', to: '/yechimlar#xavfsizlik' },
          { label: 'Access control (ACS)', to: '/yechimlar#acs' },
          { label: 'Network and servers', to: '/yechimlar#tarmoq' },
          { label: 'Integration and API', to: '/yechimlar#integratsiya' },
        ],
      },
    ],
  },
  {
    label: 'Services',
    to: '/xizmatlar',
    groups: [
      {
        title: 'Implementation',
        items: [
          { label: 'Process audit', to: '/xizmatlar#audit' },
          { label: 'Technical specification', to: '/xizmatlar#tt' },
          { label: 'Phased rollout', to: '/xizmatlar#joriy' },
          { label: 'Data migration', to: '/xizmatlar#migratsiya' },
          { label: 'How we work', to: '/jarayon' },
        ],
      },
      {
        title: 'Development',
        items: [
          { label: 'Custom software', to: '/xizmatlar#buyurtma' },
          { label: 'Mobile apps', to: '/xizmatlar#mobil' },
          { label: 'API and integration', to: '/xizmatlar#api' },
          { label: 'Legacy system upgrade', to: '/xizmatlar#modernizatsiya' },
        ],
      },
      {
        title: 'Infrastructure',
        items: [
          { label: 'Network design', to: '/xizmatlar#tarmoq' },
          { label: 'Servers and virtualisation', to: '/xizmatlar#server' },
          { label: 'CCTV installation', to: '/xizmatlar#montaj' },
          { label: 'Access control installation', to: '/xizmatlar#acs' },
        ],
      },
      {
        title: 'Support',
        items: [
          { label: 'SLA support', to: '/xizmatlar#sla' },
          { label: 'IT outsourcing', to: '/xizmatlar#autsorsing' },
          { label: '24/7 monitoring', to: '/xizmatlar#monitoring' },
          { label: 'Staff training', to: '/xizmatlar#oqitish' },
        ],
      },
    ],
  },
  {
    label: 'Industries',
    to: '/sohalar',
    groups: [
      {
        title: 'Industries we serve',
        items: [
          { label: 'Education centres', to: '/sohalar#talim' },
          { label: 'Retail and distribution', to: '/sohalar#savdo' },
          { label: 'Manufacturing', to: '/sohalar#ishlab-chiqarish' },
          { label: 'Construction and real estate', to: '/sohalar#qurilish' },
          { label: 'Logistics', to: '/sohalar#logistika' },
          { label: 'Services sector', to: '/sohalar#xizmat' },
        ],
      },
      {
        title: 'Company size',
        items: [
          { label: 'Small business', to: '/sohalar#kichik' },
          { label: 'Mid-size business', to: '/sohalar#orta' },
          { label: 'Large enterprise', to: '/sohalar#yirik' },
          { label: 'Branch network', to: '/sohalar#filial' },
        ],
      },
    ],
  },
  {
    label: 'Tools',
    to: '/vositalar',
    groups: [
      {
        title: 'Calculators',
        items: [
          { label: 'ROI calculator', to: '/vositalar#roi' },
          { label: 'Budget estimate', to: '/vositalar#byudjet' },
          { label: 'Camera coverage calculator', to: '/vositalar#kamera' },
          { label: 'Licence calculator', to: '/vositalar#litsenziya' },
        ],
      },
      {
        title: 'Choose and try',
        items: [
          { label: 'Readiness assessment', to: '/vositalar#test' },
          { label: 'Module configurator', to: '/vositalar#konfigurator' },
          { label: 'Comparison table', to: '/vositalar#taqqoslash' },
          { label: 'Request a demo', to: '/vositalar#demo' },
        ],
      },
    ],
  },
  {
    label: 'Insights',
    to: '/tahlillar',
    groups: [
      {
        title: 'Materials',
        items: [
          { label: 'All articles', to: '/tahlillar' },
          { label: 'Implementation stories', to: '/tahlillar#case' },
          { label: 'Choosing technology', to: '/tahlillar#technology' },
          { label: 'Management', to: '/tahlillar#management' },
          { label: 'Security', to: '/tahlillar#security' },
        ],
      },
      {
        title: 'Other formats',
        items: [
          { label: 'Webinars', to: '/resurslar#vebinar' },
          { label: 'Video tutorials', to: '/resurslar#video' },
          { label: 'Download centre', to: '/resurslar#yuklab-olish' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    to: '/resurslar',
    groups: [
      {
        title: 'Resources',
        items: [
          { label: 'Guides', to: '/resurslar#qollanma' },
          { label: 'Video tutorials', to: '/resurslar#video' },
          { label: 'FAQ', to: '/resurslar#faq' },
          { label: 'News', to: '/resurslar#yangiliklar' },
          { label: 'Webinars', to: '/resurslar#vebinar' },
          { label: 'Download centre', to: '/resurslar#yuklab-olish' },
          { label: 'Certificates and licences', to: '/resurslar#sertifikat' },
          { label: 'Careers', to: '/resurslar#vakansiya' },
          { label: 'Partner programme', to: '/resurslar#hamkorlik' },
        ],
      },
    ],
  },
  {
    label: 'About us',
    to: '/biz-haqimizda',
    groups: [
      {
        title: 'Company',
        items: [
          { label: 'Our approach', to: '/biz-haqimizda#yondashuv' },
          { label: 'Team', to: '/biz-haqimizda#jamoa' },
          { label: 'Technology partners', to: '/biz-haqimizda#hamkorlar' },
          { label: 'Certificates and licences', to: '/resurslar#sertifikat' },
          { label: 'Careers', to: '/resurslar#vakansiya' },
        ],
      },
    ],
  },
  { label: 'Contact', to: '/boglanish' },
];

export const footer: FooterContent = {
  left: [
    { label: 'Solutions', to: '/yechimlar' },
    { label: 'Services', to: '/xizmatlar' },
    { label: 'Industries', to: '/sohalar' },
    { label: 'Tools', to: '/vositalar' },
    { label: 'How we work', to: '/jarayon' },
    { label: 'Insights and articles', to: '/tahlillar' },
  ],
  right: [
    { label: 'About us', to: '/biz-haqimizda' },
    { label: 'Resources', to: '/resurslar' },
    { label: 'Careers', to: '/resurslar#vakansiya' },
    { label: 'Contact', to: '/boglanish' },
    { label: 'Privacy policy', to: '/boglanish#maxfiylik' },
    { label: 'Terms of use', to: '/boglanish#shartlar' },
  ],
  addressLabel: 'Address',
  contactLabel: 'Contact',
  hoursLabel: 'Working hours',
  cta: 'Discuss your project',
  legal:
    'This site is for general information only. The timelines, prices and configuration examples shown here are indicative; final terms are set after a project audit and a signed statement of work. {legalName} keeps the information you provide confidential within the scope of the contract.',
};
