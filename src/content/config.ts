import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // SEO 关键词：会出现在 <meta keywords>、JSON-LD、文章页标签中
    keywords: z.array(z.string()).default([]),
    author: z.string().default('MD→PDF Studio'),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
