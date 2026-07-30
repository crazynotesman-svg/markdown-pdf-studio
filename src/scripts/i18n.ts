import { translations, type LangCode } from '../i18n/translations';

const STORAGE_KEY = 'mps-lang';

function currentYear(): string {
  return String(new Date().getFullYear());
}

// 博客首页/文章在当前语言下的 URL（默认语言 en 用 /blog，其余用 /<lang>/blog）
function blogIndexHref(lang: LangCode): string {
  return lang === 'en' ? '/blog' : `/${lang}/blog`;
}
function blogPostHref(lang: LangCode, canonical: string): string {
  return lang === 'en' ? `/blog/${canonical}/` : `/${lang}/blog/${canonical}/`;
}

export function applyLang(lang: LangCode): void {
  document.documentElement.lang = lang;
  const dict = translations[lang] ?? translations.en;

  // 文本节点：支持 {year} 占位符替换
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    const val = dict[key];
    if (val != null) el.textContent = val.replace('{year}', currentYear());
  });

  // 属性：data-i18n-attr="aria-label:key;placeholder:key2"
  document.querySelectorAll<HTMLElement>('[data-i18n-attr]').forEach((el) => {
    const spec = el.getAttribute('data-i18n-attr') || '';
    spec.split(';').forEach((pair) => {
      const idx = pair.indexOf(':');
      if (idx === -1) return;
      const attr = pair.slice(0, idx).trim();
      const key = pair.slice(idx + 1).trim();
      const val = dict[key];
      if (attr && val != null) el.setAttribute(attr, val.replace('{year}', currentYear()));
    });
  });

  // 同步下拉框选中值
  const sel = document.getElementById('lang-select') as HTMLSelectElement | null;
  if (sel) sel.value = lang;

  // 博客导航链接随当前语言切换目标 URL
  const blogNav = document.querySelector<HTMLAnchorElement>('a[data-nav-blog]');
  if (blogNav) blogNav.setAttribute('href', blogIndexHref(lang));

  // 通知其他脚本（例如工具示例文案）
  document.dispatchEvent(new CustomEvent<{ lang: LangCode }>('langchange', { detail: { lang } }));
}

function init(): void {
  const saved = (localStorage.getItem(STORAGE_KEY) as LangCode | null) || 'en';
  const lang: LangCode = translations[saved] ? saved : 'en';
  applyLang(lang);

  const sel = document.getElementById('lang-select') as HTMLSelectElement | null;
  if (sel) {
    sel.addEventListener('change', () => {
      const v = sel.value as LangCode;
      localStorage.setItem(STORAGE_KEY, v);

      // 博客文章页：直接跳转到该语言的对应文章（内容按 URL 服务端渲染）
      const art = document.querySelector<HTMLElement>('[data-blog-canonical]');
      if (art) {
        const c = art.getAttribute('data-blog-canonical');
        if (c) {
          window.location.href = blogPostHref(v, c);
          return;
        }
      }
      // 博客列表页：跳转到该语言的博客首页
      if (document.querySelector('[data-blog-index]')) {
        window.location.href = blogIndexHref(v);
        return;
      }

      applyLang(v);
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
