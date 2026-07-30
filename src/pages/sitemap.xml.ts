import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../site.config';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const paths = ['', '/blog/', '/about/', ...posts.map((p) => `/blog/${p.slug}/`)];

  const urls = paths.map((p) => `${SITE.url}${p}`);

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
