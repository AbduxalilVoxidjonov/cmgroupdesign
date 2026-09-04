import { useId, useState } from 'react';
import type { FormEvent } from 'react';
import { Button } from '@/shared/ui/Button';
import { Container } from '@/shared/ui/Container';
import { PageHero } from '@/shared/ui/PageHero';
import { Reveal } from '@/shared/ui/Reveal';
import { Section } from '@/shared/ui/Section';
import { CheckIcon } from '@/shared/ui/icons';
import { submitContact } from '@/shared/api/contact';
import { contactLimits, validateContact } from '@/shared/contact/schema';
import type { ContactErrors, ContactPayload } from '@/shared/contact/schema';
import { telHref } from '@/content/shared';
import { useContent, useLocale } from '@/i18n/context';
import { useDocumentMeta } from '@/i18n/useDocumentMeta';

type Status = 'idle' | 'sending' | 'sent';

export default function ContactPage() {
  const { site, contactPage } = useContent();
  const locale = useLocale();
  useDocumentMeta(contactPage.meta, site.name);

  const form = contactPage.form;
  const emptyForm: ContactPayload = {
    name: '',
    company: '',
    contact: '',
    reason: contactPage.reasons[0] ?? '',
    message: '',
    website: '',
  };

  const [values, setValues] = useState<ContactPayload>(emptyForm);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [formError, setFormError] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [sentName, setSentName] = useState('');
  const formId = useId();

  function update<K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) {
    setValues((previous) => ({ ...previous, [key]: value }));
    // Foydalanuvchi tuzata boshlaganda oʻsha maydon xatosi darhol ketadi
    setErrors((previous) => {
      if (!previous[key]) return previous;
      const next = { ...previous };
      delete next[key];
      return next;
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;

    setFormError('');
    // Client va server bir xil qoidadan foydalanadi (`src/shared/contact/schema.ts`)
    const checked = validateContact(values, locale);
    if (!checked.ok) {
      setErrors(checked.errors);
      return;
    }

    setErrors({});
    setStatus('sending');
    const result = await submitContact({ ...checked.value, website: values.website }, locale);

    if (result.ok) {
      setSentName(checked.value.name);
      setStatus('sent');
      return;
    }

    setStatus('idle');
    if ('errors' in result) setErrors(result.errors);
    else setFormError(result.message);
  }

  const fieldClass = (invalid: boolean) =>
    `w-full rounded-[10px] border bg-n-0 px-4 py-3 text-base text-n-900 placeholder:text-n-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-link/30 ${
      invalid ? 'border-red-600' : 'border-n-200 hover:border-n-400 focus:border-link'
    }`;

  return (
    <>
      <PageHero {...contactPage.hero} tone="sky" />

      <section className="bg-n-0 py-section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px]">
            <Reveal>
              {status === 'sent' ? (
                <div role="status" className="card max-w-[52ch] p-8">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent/25 text-accent-deep">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                  <h2 className="text-h4-m md:text-h4 mb-3">{contactPage.success.title}</h2>
                  <p className="mb-6 text-base text-n-900/90">
                    {contactPage.success.body.replace('{name}', sentName)}
                  </p>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setValues(emptyForm);
                      setStatus('idle');
                    }}
                  >
                    {contactPage.success.again}
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="max-w-[52ch]">
                  <h2 className="text-h4-m md:text-h4 mb-1">{form.title}</h2>
                  <p className="mb-6 text-meta text-n-600">{form.subtitle}</p>

                  {formError ? (
                    <p
                      role="alert"
                      className="mb-6 rounded-[10px] border border-red-300 bg-red-50 px-4 py-3 text-meta text-red-800"
                    >
                      {formError}
                    </p>
                  ) : null}

                  <div className="mb-5">
                    <label htmlFor={`${formId}-name`} className="mb-1.5 block text-meta font-medium">
                      {form.nameLabel}
                    </label>
                    <input
                      id={`${formId}-name`}
                      value={values.name}
                      maxLength={contactLimits.name}
                      onChange={(event) => update('name', event.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? `${formId}-name-error` : undefined}
                      className={fieldClass(Boolean(errors.name))}
                      placeholder={form.namePlaceholder}
                    />
                    {errors.name ? (
                      <p id={`${formId}-name-error`} role="alert" className="mt-1.5 text-meta text-red-700">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div className="mb-5">
                    <label htmlFor={`${formId}-company`} className="mb-1.5 block text-meta font-medium">
                      {form.companyLabel}
                    </label>
                    <input
                      id={`${formId}-company`}
                      value={values.company}
                      maxLength={contactLimits.company}
                      onChange={(event) => update('company', event.target.value)}
                      className={fieldClass(false)}
                      placeholder={form.companyPlaceholder}
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor={`${formId}-contact`} className="mb-1.5 block text-meta font-medium">
                      {form.contactLabel}
                    </label>
                    <input
                      id={`${formId}-contact`}
                      value={values.contact}
                      maxLength={contactLimits.contact}
                      onChange={(event) => update('contact', event.target.value)}
                      aria-invalid={Boolean(errors.contact)}
                      aria-describedby={errors.contact ? `${formId}-contact-error` : undefined}
                      className={fieldClass(Boolean(errors.contact))}
                      placeholder={form.contactPlaceholder}
                    />
                    {errors.contact ? (
                      <p id={`${formId}-contact-error`} role="alert" className="mt-1.5 text-meta text-red-700">
                        {errors.contact}
                      </p>
                    ) : null}
                  </div>

                  <div className="mb-5">
                    <label htmlFor={`${formId}-reason`} className="mb-1.5 block text-meta font-medium">
                      {form.reasonLabel}
                    </label>
                    <select
                      id={`${formId}-reason`}
                      value={values.reason}
                      onChange={(event) => update('reason', event.target.value)}
                      className={fieldClass(false)}
                    >
                      {contactPage.reasons.map((reason) => (
                        <option key={reason} value={reason}>
                          {reason}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor={`${formId}-message`} className="mb-1.5 block text-meta font-medium">
                      {form.messageLabel}
                    </label>
                    <textarea
                      id={`${formId}-message`}
                      rows={5}
                      value={values.message}
                      maxLength={contactLimits.message}
                      onChange={(event) => update('message', event.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? `${formId}-message-error` : undefined}
                      className={fieldClass(Boolean(errors.message))}
                      placeholder={form.messagePlaceholder}
                    />
                    <div className="mt-1.5 flex items-start justify-between gap-4">
                      {errors.message ? (
                        <p id={`${formId}-message-error`} role="alert" className="text-meta text-red-700">
                          {errors.message}
                        </p>
                      ) : (
                        <span />
                      )}
                      <span className="nums shrink-0 text-fine text-n-400">
                        {values.message.length}/{contactLimits.message}
                      </span>
                    </div>
                  </div>

                  {/* Honeypot: odam koʻrmaydi, faqat bot toʻldiradi */}
                  <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                    <label htmlFor={`${formId}-website`}>{form.honeypotLabel}</label>
                    <input
                      id={`${formId}-website`}
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={values.website ?? ''}
                      onChange={(event) => update('website', event.target.value)}
                    />
                  </div>

                  <Button type="submit" variant="secondary" disabled={status === 'sending'}>
                    {status === 'sending' ? (
                      <>
                        <span
                          aria-hidden="true"
                          className="h-4 w-4 animate-spin rounded-full border-2 border-n-0/40 border-t-n-0"
                        />
                        {form.sending}
                      </>
                    ) : (
                      form.submit
                    )}
                  </Button>

                  <p className="mt-4 text-fine text-n-600">{form.requiredNote}</p>
                </form>
              )}
            </Reveal>

            <Reveal delay={120}>
              <aside className="rounded-card border border-n-200 bg-n-50 p-7 lg:sticky lg:top-28">
                <h2 className="mb-1 text-[20px] font-normal leading-[28px]">{contactPage.aside.title}</h2>
                <span className="accent-bar mt-3" aria-hidden="true" />
                <dl className="grid gap-4 text-base">
                  <div>
                    <dt className="text-meta text-n-600">{contactPage.aside.phoneLabel}</dt>
                    <dd>
                      <a href={telHref} className="text-link underline-offset-4 hover:underline">
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-meta text-n-600">{contactPage.aside.emailLabel}</dt>
                    <dd>
                      <a href={`mailto:${site.email}`} className="text-link underline-offset-4 hover:underline">
                        {site.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-meta text-n-600">{contactPage.aside.addressLabel}</dt>
                    <dd>{site.address}</dd>
                  </div>
                  <div>
                    <dt className="text-meta text-n-600">{contactPage.aside.hoursLabel}</dt>
                    <dd>{site.workHours}</dd>
                  </div>
                </dl>

                <p className="mt-6 border-t border-n-200 pt-5 text-meta text-n-600">{contactPage.aside.note}</p>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      <Section id="maxfiylik" tone="tint" title={contactPage.legal.title} className="scroll-mt-28">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-[20px] font-normal leading-[28px]">{contactPage.legal.dataTitle}</h3>
            <p className="max-w-[52ch] text-base text-n-900/90">{contactPage.legal.dataBody}</p>
          </div>
          <div id="shartlar" className="scroll-mt-28">
            <h3 className="mb-2 text-[20px] font-normal leading-[28px]">{contactPage.legal.termsTitle}</h3>
            <p className="max-w-[52ch] text-base text-n-900/90">{contactPage.legal.termsBody}</p>
          </div>
        </div>
      </Section>
    </>
  );
}
