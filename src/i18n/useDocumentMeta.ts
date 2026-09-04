import { useEffect } from 'react';
import type { PageMeta } from '@/content/types';

/** `<title>` va meta-tavsifni sahifa hamda tilga qarab yangilaydi. */
export function useDocumentMeta(meta: PageMeta, siteName: string) {
  useEffect(() => {
    const full = meta.title.includes(siteName) ? meta.title : `${meta.title} — ${siteName}`;
    document.title = full;

    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.name = 'description';
      document.head.appendChild(tag);
    }
    tag.content = meta.description;
  }, [meta.title, meta.description, siteName]);
}
