import type { ResourcesPage } from '../types';

export const resourcesPage: ResourcesPage = {
  meta: {
    title: 'Resources — CM Group',
    description: 'Guides, video tutorials, FAQ, news, webinars and open roles.',
  },
  hero: {
    eyebrow: 'Resources',
    title: 'Documents, training and news',
    lead: 'Everything you need to work with the system in one place: guides, lessons and official documents.',
  },
  intro: 'Materials are updated regularly. If a section you need is missing, tell us and we will prepare it.',
  itemCta: 'Open',
  faqTitle: 'Frequently asked questions',
  items: [
    { id: 'qollanma', kind: 'Document', title: 'Guides', body: 'Step-by-step instructions for every module and role, in PDF and online.' },
    { id: 'video', kind: 'Video', title: 'Video tutorials', body: 'Short lessons: first sign-in, everyday tasks, building a report.' },
    { id: 'savol-javob', kind: 'Help', title: 'FAQ', body: 'Short answers to the questions we hear most — listed below.' },
    { id: 'yangiliklar', kind: 'News', title: 'News', body: 'New modules, platform updates and company announcements.' },
    { id: 'vebinar', kind: 'Event', title: 'Webinars', body: 'A monthly open online session: real cases and answers to your questions.' },
    { id: 'yuklab-olish', kind: 'File', title: 'Download centre', body: 'Client app, document templates, a sample specification and contract annexes.' },
    { id: 'sertifikat', kind: 'Document', title: 'Certificates and licences', body: 'Company licences, vendor certifications and quality documents.' },
    { id: 'vakansiya', kind: 'Careers', title: 'Open roles', body: 'Current vacancies: developer, business analyst, infrastructure engineer.' },
    { id: 'hamkorlik', kind: 'Partnership', title: 'Partner programme', body: 'Partnership terms and commission structure for integrators and consultants.' },
  ],
  faq: [
    { question: 'How long does a project take?', answer: 'A single module usually takes 1–2 months, a full contour 3–6. The exact schedule comes out of the audit and goes into the contract.' },
    { question: 'Where is our data stored?', answer: 'Full access to the database and server stays with the client. Cloud or your own server — the choice is yours.' },
    { question: 'Do we have to replace our current software?', answer: 'No. Accounting or POS can stay in place and be connected to the wider system through integration.' },
    { question: 'What happens after go-live?', answer: 'SLA support, updates, backups and a quarterly development plan continue.' },
    { question: 'Does it work across branches?', answer: 'Yes. The system is built for branch networks: each branch sees its own data, head office sees the consolidated report.' },
  ],
};
