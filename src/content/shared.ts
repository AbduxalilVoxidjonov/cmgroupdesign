/**
 * Tildan qatʼi nazar bir xil qoladigan maʼlumotlar.
 *
 * Telefon, e-pochta va domen faqat shu yerda saqlanadi — tarjima fayllarida
 * takrorlanmaydi, shuning uchun raqam oʻzgarsa bitta joy tahrirlanadi.
 */
export const contacts = {
  name: 'CM Group',
  legalName: 'Capital Management Group',
  domain: 'cmgroup.uz',
  email: 'ceo@cmgroup.uz',
  supportEmail: 'support@cmgroup.uz',
  phone: '+998 88 977 77 55',
} as const;

/** `tel:` havolasi uchun faqat raqam va `+` qoldiriladi. */
export const telHref = `tel:${contacts.phone.replace(/[^\d+]/g, '')}`;

/** Texnologik hamkorlar — brend nomlari tarjima qilinmaydi. */
export const partners = [
  'Hikvision',
  'Dahua',
  'Ubiquiti',
  'Mikrotik',
  'PostgreSQL',
  'Microsoft',
  'Zabbix',
  '1C',
] as const;
