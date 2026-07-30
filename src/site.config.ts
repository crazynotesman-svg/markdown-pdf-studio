// 站点全局配置：部署前请修改 url 与 github 为你自己的地址。
export const SITE = {
  url: 'https://markdown-pdf-studio.pages.dev', // 🔴 改成你的域名
  title: 'MD→PDF Studio',
  description:
    '极简的 Markdown 转 PDF 在线工具：左侧写 Markdown，右侧实时预览 A4 打印样式，一键导出 PDF。纯前端、零上传、保护隐私。',
  author: 'MD→PDF Studio',
  github: 'https://github.com/your-name/markdown-pdf-studio', // 🔴 改成你的仓库
  locale: 'zh-CN',
};

export type SiteConfig = typeof SITE;
