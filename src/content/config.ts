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
    // 多语言博客：lang 为该篇语言，canonical 为跨语言共享的规范 slug
    lang: z.enum(['en', 'es', 'zh-CN', 'zh-TW', 'pt', 'fr', 'de', 'ja', 'ru', 'ko']),
    canonical: z.string(),
  }),
});

export const collections = { blog };
