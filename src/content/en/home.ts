import type { HomePage } from '../types';

export const home: HomePage = {
  meta: {
    title: 'CM Group — we build business systems from the ground up',
    description:
      'HR, CRM, ERP, document workflow, video surveillance and networks — from one team, in one architecture. Design, implementation and technical support.',
  },
  hero: {
    title: 'Our system — your foundation',
    highlight: 'foundation',
    body: 'HR, CRM, ERP and security — from one team, in one architecture. We take on design, implementation and technical support in full.',
    cta: { label: 'Discuss your project', to: '/boglanish' },
    secondaryCta: { label: 'View solutions', to: '/yechimlar' },
    points: [
      'A free audit carried out on your site',
      'One working module every month',
      'One contract — one party accountable',
    ],
    statsTitle: 'By the numbers',
    statsLink: 'Review the solutions',
  },
  stats: [
    { value: '60+', label: 'Completed implementation projects' },
    { value: '8 years', label: 'On the market' },
    { value: '4 hours', label: 'Average response time' },
    { value: '24/7', label: 'Monitoring of critical sites' },
  ],
  editorial: [
    {
      title: 'Free process audit',
      body: 'We come to your company, study the current processes on site and show in numbers where and how much time is lost at each stage.',
      link: { label: 'Book an audit', to: '/boglanish' },
    },
    {
      title: 'Phased implementation',
      body: 'We do not switch everything on at once. Every month we hand over one working module — your team keeps up, and the budget stays under control.',
      link: { label: 'See the process', to: '/jarayon' },
    },
    {
      title: 'Long-term support',
      body: 'After launch you keep technical support with an agreed response time, updates and a quarterly development plan.',
      link: { label: 'Review the terms', to: '/jarayon#qollab-quvvatlash' },
    },
  ],
  finder: {
    eyebrow: 'Find a solution',
    title: 'Which problem do you want to solve?',
    placeholder: 'Search for a solution — HR, CRM, video surveillance…',
    searchLabel: 'Search for a solution',
    empty: 'No solution matches your query. Reset the filter to “All” or try another word.',
    note: 'Each solution runs on its own or as part of a single system. The exact scope is set by the audit.',
  },
  resources: {
    eyebrow: 'Solutions',
    title: 'Most requested solutions',
    intro: 'Each solution goes live on its own, yet stays on the same database and the same permission model.',
    cta: 'View details',
  },
  insights: {
    eyebrow: 'Articles',
    title: 'Insights',
    leadCta: 'Read the article',
    itemCta: 'Read',
    allCta: 'All insights',
  },
  spotlight: {
    eyebrow: 'Industries',
    title: 'A configuration fitted to your industry',
    intro: 'An industry template is a preconfigured set of reports, permissions and workflows. It shortens the implementation timeline.',
    badge: 'Featured',
    cardTitle: 'Ready industry templates',
    cardBody: 'For each industry, a preconfigured set of reports, permissions and workflows — it shortens the implementation timeline.',
    cardCta: 'View industries',
    tileCta: 'Details',
  },
  brandStory: {
    title: 'One team accountable for the whole system',
    paragraphs: [
      'Companies often buy the software from one vendor, the cameras from another and the network from a third. When something breaks, nobody is accountable.',
      'We build the whole system — from software to cabling — in one architecture, and we answer for it under one contract.',
    ],
    link: { label: 'About', to: '/biz-haqimizda' },
    guaranteeLabel: 'Guarantee',
    guaranteeBody:
      'For every module we implement, the agreed response time and the quarterly development plan are written into the contract.',
  },
  principles: [
    {
      title: 'One architecture',
      body: 'From software to cabling — the whole system is tied together in a single project.',
    },
    {
      title: 'One contract',
      body: 'When something breaks, you do not have to look for who is responsible: the system is ours.',
    },
    {
      title: 'One team',
      body: 'The same engineers run the analysis, the implementation and the support.',
    },
  ],
  cta: {
    eyebrow: 'Next step',
    title: 'We start with a process audit',
    body: 'Submit a request — we get back to you within two business days, arrange a meeting and provide the initial assessment free of charge.',
    button: 'Submit a request',
    note: 'By sending a request you consent to the processing of the contact details you provide. Your data is not shared with third parties. Direct contact: {email}',
  },
};
