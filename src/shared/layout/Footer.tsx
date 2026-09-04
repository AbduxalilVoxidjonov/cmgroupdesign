import { Link } from '@/i18n/Link';
import { useContent } from '@/i18n/context';
import { telHref } from '@/content/shared';
import { Logo } from '@/shared/ui/Logo';

export function Footer() {
  const { site, footer } = useContent();

  return (
    <footer className="bg-ink text-n-0">
      <div className="page-px">
        <div className="page-mw py-12">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-n-800 pb-8">
            <div>
              <Logo onDark />
              <p className="mt-3 max-w-[42ch] text-meta text-n-400">{site.tagline}</p>
            </div>
            <Link to="/boglanish" className="btn btn-primary">
              {footer.cta}
            </Link>
          </div>

          <div className="mt-8 grid gap-x-12 md:grid-cols-2">
            {[footer.left, footer.right].map((column, index) => (
              <ul key={index}>
                {column.map((entry) => (
                  <li key={entry.label}>
                    <Link
                      to={entry.to}
                      className="group flex items-center gap-3 border-b border-n-800 py-3 text-base leading-7 text-n-0 transition-colors hover:text-accent"
                    >
                      <span
                        aria-hidden="true"
                        className="h-px w-0 bg-accent transition-all duration-300 ease-soft group-hover:w-5"
                      />
                      {entry.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="mt-10 grid gap-6 border-t border-n-800 pt-8 md:grid-cols-3">
            <div>
              <p className="text-meta text-n-400">{footer.addressLabel}</p>
              <p className="text-base">{site.address}</p>
            </div>
            <div>
              <p className="text-meta text-n-400">{footer.contactLabel}</p>
              <p className="text-base">
                <a href={telHref} className="hover:text-accent">
                  {site.phone}
                </a>
              </p>
              <a href={`mailto:${site.email}`} className="text-base text-accent underline-offset-4 hover:underline">
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-meta text-n-400">{footer.hoursLabel}</p>
              <p className="text-base">{site.workHours}</p>
            </div>
          </div>

          <p className="mt-10 max-w-none text-fine leading-5 text-n-400">
            {footer.legal.replace('{legalName}', site.legalName)}
          </p>

          <p className="mt-6 text-fine text-n-400">
            © {new Date().getFullYear()} {site.legalName}
          </p>
        </div>
      </div>
    </footer>
  );
}
