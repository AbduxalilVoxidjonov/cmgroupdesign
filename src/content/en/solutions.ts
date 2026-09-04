import type { Solution, SolutionCategory, SolutionsPage } from '../types';

export const solutionCategories: Record<SolutionCategory, string> = {
  management: 'Management',
  infrastructure: 'Infrastructure',
};

export const solutions: readonly Solution[] = [
  {
    id: 'hr',
    category: 'management',
    title: 'HR and personnel records',
    short: 'The entire employee lifecycle — from hiring to reporting in one system.',
    body: 'Staffing table, attendance sheet, leave and availability, payroll preparation, employee profiles and a document archive. Attendance data arrives automatically from turnstiles or face recognition devices.',
    points: [
      'Staffing table and position hierarchy',
      'Automatic integration with attendance devices',
      'Calendar of leave, business trips and availability',
      'Ready export for payroll calculation',
    ],
    tone: 'deep',
  },
  {
    id: 'crm',
    category: 'management',
    title: 'CRM — sales and customers',
    short: 'You see where every request came from and where it stalled.',
    body: 'Leads, the sales funnel, tasks and reminders, connection to telephony and messengers. Each manager’s result is measured day by day.',
    points: [
      'Multi-stage sales funnel',
      'Integration with Telegram, telephony and web forms',
      'Task and reminder system',
      'Conversion report by manager',
    ],
    tone: 'sky',
  },
  {
    id: 'erp',
    category: 'management',
    title: 'ERP — resource management',
    short: 'Inventory, procurement, finance and manufacturing in a single database.',
    body: 'Goods movement, inventory balances, settlements with suppliers, cost centers and budget control. Every report is assembled from one source.',
    points: [
      'Inventory balances and goods movement',
      'Procurement and settlements with suppliers',
      'Cost centers and budget control',
      'Management reporting dashboard',
    ],
    tone: 'amber',
  },
  {
    id: 'hujjat',
    category: 'management',
    title: 'Document workflow',
    short: 'The approval chain moves from paper into the system, and its time is measured.',
    body: 'Internal and external documents, approval routes, digital signature, version history and search. You see in real time who is holding each document.',
    points: [
      'Approval routes and role-based rights',
      'Version history and full-text search',
      'Deadline control and automatic reminders',
      'Archive and export',
    ],
    tone: 'slate',
  },
  {
    id: 'xavfsizlik',
    category: 'infrastructure',
    title: 'Video surveillance and security',
    short: 'Camera network design, installation and centralized monitoring.',
    body: 'A camera layout design for the site, cable network, video server and archive, access from a mobile phone. Analytics: motion, face and license plate recognition.',
    points: [
      'Site design and camera coverage calculation',
      'Video server, archive depth and redundancy',
      'Mobile and web monitoring',
      'Face, plate and motion analytics',
    ],
    tone: 'green',
  },
  {
    id: 'acs',
    category: 'infrastructure',
    title: 'Access control (ACS)',
    short: 'Turnstiles, doors and barriers — managed from a single table of rights.',
    body: 'Entry by card, QR code or face, guest mode, permissions by zone. All passages are linked to attendance in the HR system.',
    points: [
      'Entry by card, QR code and face recognition',
      'Permissions by zone and time interval',
      'Guest and contractor mode',
      'Link to HR attendance',
    ],
    tone: 'violet',
  },
  {
    id: 'tarmoq',
    category: 'infrastructure',
    title: 'Network and servers',
    short: 'From the cabling system to the server room — a reliable foundation.',
    body: 'Structured cabling, switching, Wi-Fi coverage, servers and data backup. Everything is documented and handed over with diagrams.',
    points: [
      'Structured cabling and diagram',
      'Wi-Fi coverage calculation',
      'Servers, virtualization and backup',
      'Monitoring and alerts',
    ],
    tone: 'slate',
  },
  {
    id: 'integratsiya',
    category: 'infrastructure',
    title: 'Integrations and API',
    short: 'We do not replace your current programs — we connect them to each other.',
    body: 'Data exchange with accounting, point-of-sale systems, banks, marketplaces and government services. Data is entered in one place and spreads everywhere on its own.',
    points: [
      'Exchange with accounting and point-of-sale systems',
      'Banks and payment systems',
      'Marketplaces and delivery services',
      'Documented open API',
    ],
    tone: 'deep',
  },
];

export const solutionsPage: SolutionsPage = {
  meta: {
    title: 'Solutions — HR, CRM, ERP, video surveillance and network',
    description:
      'CM Group solutions: HR, CRM, ERP, document workflow, video surveillance, ACS, network and integrations. Each module is implemented on its own or as part of a single system.',
  },
  hero: {
    eyebrow: 'Solutions',
    title: 'Eight modules, one architecture',
    lead: 'Each module works on its own and connects to the others. One is enough to start — the system expands from there.',
  },
  navLabel: 'List of modules',
  groupTitles: {
    management: 'Management systems',
    infrastructure: 'Infrastructure and security',
  },
  itemCta: 'Request this module',
};
