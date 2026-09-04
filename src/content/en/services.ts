import type { ServicesPage } from '../types';

export const servicesPage: ServicesPage = {
  meta: {
    title: 'Services — CM Group',
    description:
      'From audit and specification through installation, integration and SLA-backed support — the full service list.',
  },
  hero: {
    eyebrow: 'Services',
    title: 'Every stage of the project, one team',
    lead: 'From analysis to installation and the support that follows — you never have to find a separate contractor for the next stage.',
  },
  itemCta: 'Request a quote',
  processLinkLabel: 'See the full process',
  groups: [
    {
      id: 'joriy-etish',
      title: 'Implementation',
      lead: 'We study how you work today and bring the system up stage by stage.',
      tone: 'deep',
      items: [
        { id: 'audit', title: 'Process audit', body: 'We come on site and map who does what and where information gets lost. You get a process map and a prioritised list of problems.' },
        { id: 'tt', title: 'Technical specification', body: 'Module scope, the role matrix, integrations and acceptance criteria are written down. The budget is tied to that document.' },
        { id: 'joriy', title: 'Phased rollout', body: 'Each stage ends with a working module handed over. Your team keeps up, and payment follows the same stages.' },
        { id: 'migratsiya', title: 'Data migration', body: 'Data from Excel, 1C or a legacy database is cleaned, reconciled and moved. The old system keeps running in parallel.' },
      ],
    },
    {
      id: 'dasturlash',
      title: 'Development',
      lead: 'When an off-the-shelf module falls short, we write the missing part.',
      tone: 'sky',
      items: [
        { id: 'buyurtma', title: 'Custom software', body: 'A dedicated module for industry-specific processes. Code and database stay with the client — nothing is locked in.' },
        { id: 'mobil', title: 'Mobile apps', body: 'iOS and Android apps for field sales, technicians or managers, with offline mode and sync.' },
        { id: 'api', title: 'API and integration', body: 'Exchange with accounting, POS, banks, marketplaces and government services. A documented, open API.' },
        { id: 'modernizatsiya', title: 'Legacy system upgrade', body: 'We refresh the interface, speed and reporting of software you already run, without replacing it.' },
      ],
    },
    {
      id: 'infratuzilma',
      title: 'Infrastructure',
      lead: 'Software needs a foundation it can rely on.',
      tone: 'slate',
      items: [
        { id: 'tarmoq', title: 'Network design', body: 'Structured cabling, switching and Wi-Fi coverage calculations, handed over with diagrams and documentation.' },
        { id: 'server', title: 'Servers and virtualisation', body: 'Server selection, virtualisation, backup policy and monitoring — cloud or on-premise, whichever the task calls for.' },
        { id: 'montaj', title: 'CCTV installation', body: 'Camera layout design, installation, video server configuration and mobile access.' },
        { id: 'acs', title: 'Access control installation', body: 'Turnstiles, doors and barriers installed, with a permissions matrix linked to HR attendance.' },
      ],
    },
    {
      id: 'qollab-quvvatlash',
      title: 'Support',
      lead: 'Go-live is not the finish line.',
      tone: 'green',
      items: [
        { id: 'sla', title: 'SLA support', body: 'Help with an agreed response time. Every request is logged and its resolution time is measured.' },
        { id: 'autsorsing', title: 'IT outsourcing', body: 'Instead of an in-house IT department, or alongside one — on a monthly retainer.' },
        { id: 'monitoring', title: '24/7 monitoring', body: 'Servers, network and cameras are watched automatically, so we hear about a fault before you do.' },
        { id: 'oqitish', title: 'Staff training', body: 'Role-based guides, video lessons and training for your internal administrator.' },
      ],
    },
  ],
};
