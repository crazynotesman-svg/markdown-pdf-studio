// @ts-check
import { defineConfig } from 'astro/config';
import { SITE } from './src/site.config';

export default defineConfig({
  site: SITE.url,
  output: 'static',
  trailingSlash: 'ignore',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
