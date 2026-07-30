import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../site.config';

export async function GET(context: { site: URL }) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/blog/${post.slug}/`,
        categories: post.data.keywords,
      })),
  });
}
