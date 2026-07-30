import { translations, type LangCode } from '../i18n/translations';

const STORAGE_KEY = 'mps-lang';

function currentYear(): string {
  return String(new Date().getFullYear());
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
      applyLang(v);
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
