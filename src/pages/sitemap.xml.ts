import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../site.config';
import { LANGS, DEFAULT_LANG, type LangCode } from '../i18n/translations';

function blogIndexUrl(lang: LangCode): string {
  return lang === DEFAULT_LANG ? '/blog/' : `/${lang}/blog/`;
}
function blogPostUrl(lang: LangCode, canonical: string): string {
  return lang === DEFAULT_LANG ? `/blog/${canonical}/` : `/${lang}/blog/${canonical}/`;
}

interface Entry {
  loc: string;
  alts?: { lang: string; href: string }[];
}

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const canonicals = [...new Set(posts.map((p) => p.data.canonical))];

  const entries: Entry[] = [];
  // 语言无关的静态页（无 hreflang 交替）
  entries.push({ loc: `${SITE.url}/` });
  entries.push({ loc: `${SITE.url}/about/` });

  // 博客首页：每种语言一条，并附全部语言交替
  for (const l of LANGS) {
    entries.push({
      loc: `${SITE.url}${blogIndexUrl(l.code)}`,
      alts: LANGS.map((x) => ({ lang: x.code, href: `${SITE.url}${blogIndexUrl(x.code)}` })),
    });
  }

  // 博客文章：每种语言 × 每篇，并附全部语言交替
  for (const c of canonicals) {
    for (const l of LANGS) {
      entries.push({
        loc: `${SITE.url}${blogPostUrl(l.code, c)}`,
        alts: LANGS.map((x) => ({ lang: x.code, href: `${SITE.url}${blogPostUrl(x.code, c)}` })),
      });
    }
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries
  .map((e) => {
    const altLinks = e.alts
      ? e.alts
          .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${a.href}"/>`)
          .join('\n')
      : '';
    const altBlock = altLinks ? `\n${altLinks}` : '';
    return `  <url><loc>${e.loc}</loc>${altBlock}</url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
