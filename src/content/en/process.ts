import type { ProcessPage, ProcessStep } from '../types';

export const processSteps: readonly ProcessStep[] = [
  {
    id: 'tahlil',
    index: '01',
    title: 'Analysis and audit',
    duration: '1–2 weeks',
    lead: 'We study the existing processes on site: who does what, where data is lost, which report is compiled by hand.',
    deliverables: ['Process map', 'List of problems and their priority', 'Preliminary budget range'],
  },
  {
    id: 'arxitektura',
    index: '02',
    title: 'Architecture',
    duration: '1–3 weeks',
    lead: 'We settle the shape of the system on paper — modules, permissions, integrations and stages.',
    deliverables: ['Technical specification', 'Module and integration diagram', 'Phased implementation plan'],
  },
  {
    id: 'joriy-etish',
    index: '03',
    title: 'Implementation',
    duration: '1–4 months',
    lead: 'We go live step by step. Each stage ends with a working module handed over, not everything at once.',
    deliverables: ['Working modules', 'Data migration', 'Test environment and acceptance tests'],
  },
  {
    id: 'oqitish',
    index: '04',
    title: 'Training',
    duration: '1–2 weeks',
    lead: 'We train staff at their own workplace and leave a short guide for every role.',
    deliverables: ['Guide for each role', 'Video lessons', 'In-house administrator training'],
  },
  {
    id: 'qollab-quvvatlash',
    index: '05',
    title: 'Support',
    duration: 'Ongoing',
    lead: 'Go-live is not the end point. Technical support and further development continue with an agreed response time.',
    deliverables: ['Support under SLA', 'Updates and backups', 'Quarterly roadmap'],
  },
];

export const processPage: ProcessPage = {
  meta: {
    title: 'Process — five stages from audit to support',
    description:
      'How CM Group runs its projects: analysis and audit, architecture, phased implementation, training and support under SLA.',
  },
  hero: {
    eyebrow: 'Process',
    title: 'Five stages from audit to support',
    lead: 'Every stage ends with a written result. We move to the next stage only after the previous one is accepted.',
  },
  resultLabel: 'Stage deliverables',
};
