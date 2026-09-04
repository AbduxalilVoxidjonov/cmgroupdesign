import type { IndustriesPage, Industry } from '../types';

export const industries: readonly Industry[] = [
  {
    id: 'talim',
    title: 'Training centers',
    lead: 'From student enrollment to attendance and payment — one flow.',
    outcomes: [
      'Groups and class schedule',
      'Attendance and payment control',
      'Automatic notice to parents',
    ],
    tone: 'sky',
  },
  {
    id: 'savdo',
    title: 'Retail and distribution',
    lead: 'Inventory balances, sales and debt are visible in real time.',
    outcomes: ['Multi-warehouse accounting', 'Mobile app for sales agents', 'Receivables control'],
    tone: 'amber',
  },
  {
    id: 'ishlab-chiqarish',
    title: 'Manufacturing',
    lead: 'Unit cost accounting from raw material to finished product.',
    outcomes: ['Recipes and standards', 'Shift and crew accounting', 'Unit cost calculation'],
    tone: 'slate',
  },
  {
    id: 'qurilish',
    title: 'Construction and real estate',
    lead: 'Sites, estimates and material consumption on a single dashboard.',
    outcomes: ['Budget by site', 'Material consumption control', 'Site video surveillance'],
    tone: 'deep',
  },
  {
    id: 'logistika',
    title: 'Logistics',
    lead: 'Cargo, vehicles and routes — plan and actual are compared.',
    outcomes: ['Route planning', 'Transport cost accounting', 'Delivery status'],
    tone: 'green',
  },
  {
    id: 'xizmat',
    title: 'Services',
    lead: 'From request to closed job — time and quality are measured.',
    outcomes: ['Ticket and queue system', 'Technician schedule', 'Customer satisfaction survey'],
    tone: 'violet',
  },
];

export const industriesPage: IndustriesPage = {
  meta: {
    title: 'Industries — training, retail, manufacturing, logistics',
    description:
      'Preconfigured report, permission and process templates for training centers, retail, manufacturing, construction, logistics and services.',
  },
  hero: {
    eyebrow: 'Industries',
    title: 'Every industry demands its own reporting',
    lead: 'The modules are the same, but reports, permissions and process templates are preconfigured for the industry.',
  },
  itemCta: 'Request for your industry',
  scalesTitle: 'Configuration by company size',
  scalesIntro: 'The modules stay the same — reporting depth, the role matrix and the rollout schedule change with scale.',
  scales: [
    { id: 'kichik', title: 'Small business · 10–50 people', body: 'Start with a single module, usually CRM or HR. Rollout takes 3–6 weeks on ready templates.' },
    { id: 'orta', title: 'Mid-size business · 50–300 people', body: 'Two or three modules work together, with integrations and a role matrix. Typically 2–4 months.' },
    { id: 'yirik', title: 'Large enterprise · 300+ people', body: 'The full contour: ERP, HR, document flow and infrastructure, with a staging environment and phased handover.' },
    { id: 'filial', title: 'Branch network', body: 'Each branch sees its own data while head office gets the consolidated report. Offline mode and sync are supported.' },
  ],
};
