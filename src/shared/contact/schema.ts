/**
 * Bogʻlanish shakli uchun umumiy validatsiya.
 *
 * Bu modul platformadan mustaqil: DOM ham, Workers API ham ishlatilmaydi.
 * Shu sababli uni ham brauzer bundle'i (`src/pages/ContactPage.tsx`), ham
 * Cloudflare Worker (`worker/index.ts`) bir xil holda import qiladi —
 * qoidalar ikki tomonda ajralib qolmaydi.
 */

/** Maydonlarning maksimal uzunligi (belgi). Server tomonda ham majburiy. */
export const contactLimits = {
  name: 120,
  company: 160,
  contact: 160,
  reason: 120,
  message: 4000,
} as const;

/** Minimal uzunliklar — ContactPage'dagi tekshiruv bilan bir xil. */
export const contactMinimums = {
  name: 2,
  contact: 5,
  message: 10,
} as const;

/**
 * Xato matnlari qaysi tilda qaytishini belgilaydi.
 * `src/i18n/config.ts` dagi `Locale` bilan bir xil qiymatlar — bu modul
 * platformadan mustaqil boʻlishi uchun tipni oʻzida saqlaydi.
 */
export type ContactLocale = 'uz' | 'ru' | 'en';

export const defaultContactLocale: ContactLocale = 'uz';

/** Kiruvchi qiymatdan tilni xavfsiz aniqlaydi. */
export function readLocale(value: unknown): ContactLocale {
  return value === 'ru' || value === 'en' ? value : 'uz';
}

/** Shakl orqali yuboriladigan maʼlumot. */
export interface ContactPayload {
  name: string;
  company: string;
  contact: string;
  reason: string;
  message: string;
  /** Honeypot: odam uni koʻrmaydi, faqat bot toʻldiradi. */
  website?: string;
  /** Foydalanuvchi tili — server xatolarni shu tilda qaytaradi. */
  locale?: ContactLocale;
}

/** Maydon nomi → oʻzbekcha xato matni. */
export type ContactErrors = Record<string, string>;

export type ContactValidation =
  | { ok: true; value: ContactPayload }
  | { ok: false; errors: ContactErrors };

/** Ikki tildagi xato matnlari. */
const messages: Record<ContactLocale, {
  malformed: string;
  nameRequired: string;
  nameTooLong: (max: number) => string;
  companyTooLong: (max: number) => string;
  contactRequired: string;
  contactTooLong: (max: number) => string;
  reasonTooLong: (max: number) => string;
  messageRequired: string;
  messageTooLong: (max: number) => string;
}> = {
  uz: {
    malformed: 'Maʼlumot notoʻgʻri formatda yuborildi.',
    nameRequired: `Ismingizni kiriting (kamida ${contactMinimums.name} belgi).`,
    nameTooLong: (max) => `Ism juda uzun (koʻpi bilan ${max} belgi).`,
    companyTooLong: (max) => `Kompaniya nomi juda uzun (koʻpi bilan ${max} belgi).`,
    contactRequired: 'Telefon raqami yoki elektron pochtangizni kiriting.',
    contactTooLong: (max) => `Aloqa maʼlumoti juda uzun (koʻpi bilan ${max} belgi).`,
    reasonTooLong: (max) => `Murojaat mavzusi juda uzun (koʻpi bilan ${max} belgi).`,
    messageRequired: `Vazifani qisqacha tavsiflang (kamida ${contactMinimums.message} belgi).`,
    messageTooLong: (max) => `Tavsif juda uzun (koʻpi bilan ${max} belgi).`,
  },
  ru: {
    malformed: 'Данные отправлены в неверном формате.',
    nameRequired: `Укажите ваше имя (минимум ${contactMinimums.name} символа).`,
    nameTooLong: (max) => `Имя слишком длинное (не более ${max} символов).`,
    companyTooLong: (max) => `Название компании слишком длинное (не более ${max} символов).`,
    contactRequired: 'Укажите номер телефона или e-mail.',
    contactTooLong: (max) => `Контактные данные слишком длинные (не более ${max} символов).`,
    reasonTooLong: (max) => `Тема обращения слишком длинная (не более ${max} символов).`,
    messageRequired: `Кратко опишите задачу (минимум ${contactMinimums.message} символов).`,
    messageTooLong: (max) => `Описание слишком длинное (не более ${max} символов).`,
  },
  en: {
    malformed: 'The data was sent in an invalid format.',
    nameRequired: `Enter your name (at least ${contactMinimums.name} characters).`,
    nameTooLong: (max) => `The name is too long (up to ${max} characters).`,
    companyTooLong: (max) => `The company name is too long (up to ${max} characters).`,
    contactRequired: 'Enter your phone number or email address.',
    contactTooLong: (max) => `The contact details are too long (up to ${max} characters).`,
    reasonTooLong: (max) => `The topic is too long (up to ${max} characters).`,
    messageRequired: `Briefly describe the task (at least ${contactMinimums.message} characters).`,
    messageTooLong: (max) => `The description is too long (up to ${max} characters).`,
  },
};

/** Notoʻgʻri tipdagi qiymatni xavfsiz satrga aylantiradi va boʻshliqlarni kesadi. */
function readField(source: Record<string, unknown>, key: string): string {
  const raw = source[key];
  if (typeof raw === 'string') return raw.trim();
  if (typeof raw === 'number' && Number.isFinite(raw)) return String(raw);
  return '';
}

/**
 * Kiruvchi maʼlumotni tekshiradi va tozalangan (trim qilingan, uzunligi
 * cheklangan) obyekt qaytaradi. Hech qachon exception tashlamaydi.
 */
export function validateContact(input: unknown, locale?: ContactLocale): ContactValidation {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) {
    return {
      ok: false,
      errors: { form: messages[locale ?? defaultContactLocale].malformed },
    };
  }

  const source = input as Record<string, unknown>;
  // Til aniq berilmasa — soʻrov ichidagi qiymatdan olinadi.
  const language = locale ?? readLocale(source['locale']);
  const text = messages[language];
  const name = readField(source, 'name');
  const company = readField(source, 'company');
  const contact = readField(source, 'contact');
  const reason = readField(source, 'reason');
  const message = readField(source, 'message');
  const website = readField(source, 'website');

  const errors: ContactErrors = {};

  if (name.length < contactMinimums.name) {
    errors.name = text.nameRequired;
  } else if (name.length > contactLimits.name) {
    errors.name = text.nameTooLong(contactLimits.name);
  }

  if (company.length > contactLimits.company) {
    errors.company = text.companyTooLong(contactLimits.company);
  }

  if (contact.length < contactMinimums.contact) {
    errors.contact = text.contactRequired;
  } else if (contact.length > contactLimits.contact) {
    errors.contact = text.contactTooLong(contactLimits.contact);
  }

  if (reason.length > contactLimits.reason) {
    errors.reason = text.reasonTooLong(contactLimits.reason);
  }

  if (message.length < contactMinimums.message) {
    errors.message = text.messageRequired;
  } else if (message.length > contactLimits.message) {
    errors.message = text.messageTooLong(contactLimits.message);
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  const value: ContactPayload = { name, company, contact, reason, message, locale: language };
  if (website.length > 0) value.website = website;

  return { ok: true, value };
}

/** Honeypot toʻldirilganmi — ya'ni soʻrov bot tomonidan yuborilganmi. */
export function isHoneypotFilled(payload: ContactPayload): boolean {
  return typeof payload.website === 'string' && payload.website.length > 0;
}
