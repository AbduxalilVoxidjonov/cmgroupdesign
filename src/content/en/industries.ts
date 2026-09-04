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
};
