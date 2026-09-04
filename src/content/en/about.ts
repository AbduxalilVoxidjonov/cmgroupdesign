import { contacts, partners } from '../shared';
import type { AboutPage } from '../types';

export const aboutPage: AboutPage = {
  meta: {
    title: 'About us — one accountable team for the entire system',
    description: `${contacts.legalName} designs, implements and supports software, networks and security systems within a single architecture.`,
  },
  hero: {
    eyebrow: 'About us',
    title: 'One accountable team for the entire system',
    lead: `${contacts.legalName} designs and implements software, networks and security systems within a single architecture.`,
  },
  approachTitle: 'Our approach',
  principles: [
    {
      title: 'Process first, software second',
      body: 'Automating a disordered process only makes it disordered faster. That is why we always start with an audit and a description.',
    },
    {
      title: 'Client data belongs to the client',
      body: 'Full access to the database and the server stays with the client. We do not deliver “locked” solutions.',
    },
    {
      title: 'One point of accountability',
      body: 'Software, network and hardware — all under one contract and one project manager.',
    },
    {
      title: 'Documented handover',
      body: 'Diagrams, guides and credentials are handed over in writing. The system keeps working even if the team changes.',
    },
  ],
  team: {
    title: 'Team',
    caption: 'Team composition',
    roleColumn: 'Role',
    countColumn: 'Headcount',
    noteColumn: 'Responsibility',
    rows: [
      { role: 'Project manager', count: 4, note: 'Responsible for deadlines, budget and handover' },
      { role: 'Business analyst', count: 3, note: 'Studies processes and writes the technical specification' },
      { role: 'Developer', count: 12, note: 'Backend, frontend and mobile' },
      { role: 'Infrastructure engineer', count: 6, note: 'Network, servers, video surveillance and ACS' },
      { role: 'Technical support', count: 5, note: 'Monitors the systems already in operation' },
    ],
  },
  partners: {
    title: 'Technology partners',
    intro: 'The vendor is chosen according to site conditions and budget — we are not tied to a single brand.',
  },
};

export { partners };
