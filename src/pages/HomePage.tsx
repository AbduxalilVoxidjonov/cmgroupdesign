import { Hero } from '@/features/home/Hero';
import { EditorialPair } from '@/features/home/EditorialPair';
import { SolutionFinder } from '@/features/home/SolutionFinder';
import { ResourceCards } from '@/features/home/ResourceCards';
import { InsightGrid } from '@/features/home/InsightGrid';
import { Spotlight } from '@/features/home/Spotlight';
import { BrandStory } from '@/features/home/BrandStory';
import { ContactCta } from '@/features/home/ContactCta';
import { useContent } from '@/i18n/context';
import { useDocumentMeta } from '@/i18n/useDocumentMeta';

export default function HomePage() {
  const { home, site } = useContent();
  useDocumentMeta(home.meta, site.name);

  return (
    <>
      <Hero />
      <EditorialPair />
      <SolutionFinder />
      <ResourceCards />
      <InsightGrid />
      <Spotlight />
      <BrandStory />
      <ContactCta />
    </>
  );
}
