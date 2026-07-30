import { LANGS, DEFAULT_LANG, type LangCode } from '../i18n/translations';
import { SITE } from '../site.config';

/** Blog index URL for a given language (default lang = /blog/, others = /<lang>/blog/). */
export function blogIndexUrl(lang: LangCode): string {
  return lang === DEFAULT_LANG ? '/blog/' : `/${lang}/blog/`;
}

/** Blog post URL for a given language + canonical slug. */
export function blogPostUrl(lang: LangCode, canonical: string): string {
  return lang === DEFAULT_LANG ? `/blog/${canonical}/` : `/${lang}/blog/${canonical}/`;
}

/** Per-language absolute alternate URLs for a blog post (used for hreflang). */
export function postAlternates(canonical: string): { lang: string; href: string }[] {
  return LANGS.map((l) => ({
    lang: l.code,
    href: new URL(blogPostUrl(l.code, canonical), SITE.url).href,
  }));
}

/** Per-language absolute alternate URLs for the blog index (used for hreflang). */
export function indexAlternates(): { lang: string; href: string }[] {
  return LANGS.map((l) => ({
    lang: l.code,
    href: new URL(blogIndexUrl(l.code), SITE.url).href,
  }));
}
