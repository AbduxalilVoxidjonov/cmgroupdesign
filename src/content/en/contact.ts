import type { ContactPage, NotFoundPage } from '../types';

export const contactPage: ContactPage = {
  meta: {
    title: 'Contact — let us discuss your project',
    description:
      'Submit a request: we get back to you within two business days. The initial assessment and the process audit are free.',
  },
  hero: {
    eyebrow: 'Contact',
    title: 'Let us discuss your project',
    lead: 'Submit a request — we get back to you within two business days. The initial assessment and the process audit are free.',
  },
  reasons: [
    'New project and budget estimate',
    'Extending an existing system',
    'Technical support and incidents',
    'Partnership proposal',
  ],
  form: {
    title: 'Request form',
    subtitle: 'It takes a minute to fill in.',
    nameLabel: 'Your name *',
    namePlaceholder: 'First and last name',
    companyLabel: 'Company',
    companyPlaceholder: 'Organization name',
    contactLabel: 'Phone or email *',
    contactPlaceholder: '+998 90 000 00 00',
    reasonLabel: 'Topic',
    messageLabel: 'Describe the task *',
    messagePlaceholder: 'How many employees, which processes, what software you use today',
    submit: 'Send request',
    sending: 'Sending…',
    requiredNote:
      'Fields marked with * are required. Your details are used only to contact you and prepare a proposal.',
    honeypotLabel: 'Website address',
  },
  success: {
    title: 'Request received',
    body: 'Thank you, {name}. Your request has been logged — we will contact you within two business days using the details you provided.',
    again: 'Send another request',
  },
  aside: {
    title: 'Direct contact',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    addressLabel: 'Address',
    hoursLabel: 'Working hours',
    note: 'For urgent incidents, call us — such requests are handled out of turn.',
  },
  legal: {
    title: 'Privacy and terms',
    dataTitle: 'Data processing',
    dataBody:
      'The details sent through the request form are used only to contact you and prepare a proposal. They are not shared with third parties and are deleted on request.',
    termsTitle: 'Terms of use',
    termsBody:
      'The timelines, scope and price examples on this site are indicative. Final terms are set by the audit results and a signed statement of work.',
  },
};

export const notFoundPage: NotFoundPage = {
  meta: {
    title: 'Page not found',
    description: 'The requested page does not exist or its address has changed.',
  },
  code: '404',
  title: 'This page was not found',
  body: 'The link may be out of date or the address may have been typed incorrectly. Continue from the home page or from the sections below.',
  cta: 'Back to home',
};
