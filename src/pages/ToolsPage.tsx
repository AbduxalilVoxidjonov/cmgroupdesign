import { ArrowLink } from '@/shared/ui/ArrowLink';
import { Container } from '@/shared/ui/Container';
import { PageHero } from '@/shared/ui/PageHero';
import { Reveal } from '@/shared/ui/Reveal';
import { Picture } from '@/shared/ui/Picture';
import { ContactCta } from '@/features/home/ContactCta';
import { media } from '@/content/media';
import { useContent } from '@/i18n/context';
import { useDocumentMeta } from '@/i18n/useDocumentMeta';

export default function ToolsPage() {
  const { site, toolsPage } = useContent();
  useDocumentMeta(toolsPage.meta, site.name);

  return (
    <>
      <PageHero {...toolsPage.hero} tone="violet" image={media.heroTools} />

      <section className="bg-n-0 py-section">
        <Container>
          <Reveal className="mb-8">
            <p className="text-lead max-w-[62ch] text-n-900/85">{toolsPage.intro}</p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {toolsPage.tools.map((tool, index) => (
              <Reveal key={tool.id} delay={(index % 3) * 80} className="h-full">
                <article
                  id={tool.id}
                  className="card card-hover zoom-parent flex h-full scroll-mt-28 flex-col"
                >
                  <div className="relative h-[120px] overflow-hidden">
                    <Picture
                      src={media.tool(tool.id)}
                      variant={index % 2 === 0 ? 'chart' : 'network'}
                      tone={tool.tone}
                      alt=""
                      fill
                      className="zoom-media"
                    />
                    <span className="absolute left-4 top-4 rounded-pill bg-black/45 px-3 py-1 text-fine font-medium text-n-0 backdrop-blur-sm">
                      {tool.note}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="mb-2 text-[20px] font-normal leading-[28px] tracking-[-0.01em] text-balance">
                      {tool.title}
                    </h2>
                    <p className="mb-5 text-base text-n-900/85">{tool.body}</p>
                    <div className="mt-auto">
                      <ArrowLink to="/boglanish" size="sm">
                        {toolsPage.itemCta}
                      </ArrowLink>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 max-w-[68ch] text-fine text-n-600">{toolsPage.note}</p>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
