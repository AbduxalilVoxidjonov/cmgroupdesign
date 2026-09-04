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
          { label: 'HR and personnel records', to: '/yechimlar#hr' },
          { label: 'CRM — sales and customers', to: '/yechimlar#crm' },
          { label: 'ERP — resource management', to: '/yechimlar#erp' },
          { label: 'Document workflow', to: '/yechimlar#hujjat' },
        ],
      },
      {
        title: 'Infrastructure',
        items: [
          { label: 'Video surveillance and security', to: '/yechimlar#xavfsizlik' },
          { label: 'Access control (ACS)', to: '/yechimlar#acs' },
          { label: 'Network and servers', to: '/yechimlar#tarmoq' },
          { label: 'Integrations and API', to: '/yechimlar#integratsiya' },
        ],
      },
    ],
  },
  {
    label: 'Industries',
    to: '/sohalar',
    groups: [
      {
        title: 'Industries we work with',
        items: [
          { label: 'Training centers', to: '/sohalar#talim' },
          { label: 'Retail and distribution', to: '/sohalar#savdo' },
          { label: 'Manufacturing', to: '/sohalar#ishlab-chiqarish' },
          { label: 'Construction and real estate', to: '/sohalar#qurilish' },
          { label: 'Logistics', to: '/sohalar#logistika' },
          { label: 'Services', to: '/sohalar#xizmat' },
        ],
      },
    ],
  },
  {
    label: 'Process',
    to: '/jarayon',
    groups: [
      {
        title: 'How we work',
        items: [
          { label: 'Analysis and audit', to: '/jarayon#tahlil' },
          { label: 'Architecture', to: '/jarayon#arxitektura' },
          { label: 'Implementation', to: '/jarayon#joriy-etish' },
          { label: 'Training', to: '/jarayon#oqitish' },
          { label: 'Support', to: '/jarayon#qollab-quvvatlash' },
        ],
      },
    ],
  },
  {
    label: 'Insights',
    to: '/tahlillar',
    groups: [
      {
        title: 'Articles',
        items: [
          { label: 'All articles', to: '/tahlillar' },
          { label: 'Implementation experience', to: '/tahlillar#case' },
          { label: 'Technology choices', to: '/tahlillar#texnologiya' },
        ],
      },
    ],
  },
  {
    label: 'About',
    to: '/biz-haqimizda',
    groups: [
      {
        title: 'Company',
        items: [
          { label: 'Our approach', to: '/biz-haqimizda#yondashuv' },
          { label: 'Team', to: '/biz-haqimizda#jamoa' },
          { label: 'Partners', to: '/biz-haqimizda#hamkorlar' },
        ],
      },
    ],
  },
  { label: 'Contact', to: '/boglanish' },
];

export const footer: FooterContent = {
  left: [
    { label: 'Solutions', to: '/yechimlar' },
    { label: 'Industries', to: '/sohalar' },
    { label: 'How we work', to: '/jarayon' },
    { label: 'Insights and articles', to: '/tahlillar' },
    { label: 'Contact', to: '/boglanish' },
  ],
  right: [
    { label: 'About', to: '/biz-haqimizda' },
    { label: 'Team', to: '/biz-haqimizda#jamoa' },
    { label: 'Partners', to: '/biz-haqimizda#hamkorlar' },
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
