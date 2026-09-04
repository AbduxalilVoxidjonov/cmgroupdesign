import type { ToolsPage } from '../types';

export const toolsPage: ToolsPage = {
  meta: {
    title: 'Tools — CM Group',
    description: 'Calculators and questionnaires for a first estimate of budget, ROI and coverage.',
  },
  hero: {
    eyebrow: 'Tools',
    title: 'Run the numbers before you decide',
    lead: 'Tools that estimate the likely budget, payback period and hardware count before we even meet.',
  },
  intro: 'These tools give a first estimate. Final figures come out of the audit and the technical specification.',
  itemCta: 'Open',
  note: 'Any result can be saved as a PDF or sent straight to a specialist.',
  tools: [
    { id: 'roi', title: 'ROI calculator', body: 'Enter the hours spent on manual work and see how long the system takes to pay for itself.', note: '3 minutes · 6 questions', tone: 'deep' },
    { id: 'byudjet', title: 'Budget estimate', body: 'An indicative budget range based on headcount, modules and number of branches.', note: '2 minutes · 5 questions', tone: 'sky' },
    { id: 'kamera', title: 'Camera coverage calculator', body: 'Works out how many cameras and which type, from floor area and ceiling height.', note: 'Floor plan upload supported', tone: 'green' },
    { id: 'litsenziya', title: 'Licence calculator', body: 'Annual licence cost by number of users and roles.', note: 'Annual vs monthly comparison', tone: 'amber' },
    { id: 'test', title: 'Automation readiness assessment', body: 'Shows which stage your company is at and where it makes sense to start.', note: '12 questions · instant result', tone: 'violet' },
    { id: 'konfigurator', title: 'Module configurator', body: 'Tick the modules you need and the tool draws the resulting system and its connections.', note: 'Diagram is downloadable', tone: 'slate' },
    { id: 'taqqoslash', title: 'Comparison table', body: 'Off-the-shelf, custom build and upgrading what you have — by three-year cost of ownership.', note: 'Export the table', tone: 'deep' },
    { id: 'demo', title: 'Request a demo', body: 'We walk through the modules live, using a sample of your own data.', note: '40 minutes · online', tone: 'sky' },
  ],
};
