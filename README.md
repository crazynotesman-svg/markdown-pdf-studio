# MD→PDF Studio

极简的 **Markdown 转 PDF** 在线工具 + 自带 SEO 博客，使用 [Astro](https://astro.build) 构建，可一键部署到 **Cloudflare Pages** 并直接关联 **GitHub**。

> 所有 Markdown 渲染与 PDF 导出都在浏览器本地完成，内容**不上传**到任何服务器。

## 功能

- **双栏工具页**：左侧 Markdown 输入，右侧实时预览 A4 打印样式。
- **两种导出**：
  - 「🖨 打印 / 另存为 PDF」——调用浏览器原生打印，样式 100% 一致（推荐）。
  - 「⬇ 下载 PDF」——`html2pdf.js` 一键生成文件（需联网加载该库）。
- **SEO 基建**：每页 `title` / `description` / `keywords`、Open Graph、Twitter Card、JSON-LD 结构化数据、`sitemap.xml`、`robots.txt`、RSS。
- **博客系统**：文章内容即仓库里的 Markdown 文件，改文件 = 发文章，Push 即上线。

## 本地开发

```bash
npm install
npm run dev      # 本地预览 http://localhost:4321
npm run build    # 产物输出到 dist/
npm run preview  # 预览构建产物
```

要求 Node ≥ 18（已用 22 验证）。

## 目录结构

```
src/
├── site.config.ts        # 🔴 站点配置：url / github / 标题（部署前必改）
├── content/
│   ├── config.ts         # 博客集合字段定义（title/description/keywords…）
│   └── blog/*.md         # 博客文章（Frontmatter 驱动 SEO）
├── components/           # Header / Footer / MarkdownPdfTool
├── layouts/BaseLayout.astro  # SEO 元信息 + JSON-LD 统一出口
├── pages/
│   ├── index.astro       # 工具首页
│   ├── about.astro       # 关于页
│   ├── blog/             # 博客列表 + 文章详情
│   ├── rss.xml.ts        # RSS 订阅
│   └── sitemap.xml.ts    # 站点地图
public/                   # 静态资源：favicon / og 图 / robots.txt
astro.config.mjs          # Astro 配置
```

## 部署到 Cloudflare Pages（关联 GitHub）

### 1. 改配置（🔴 部署前必做）

打开 `src/site.config.ts`，把下面三处改成你自己的：

```ts
export const SITE = {
  url: 'https://你的域名.pages.dev',      // ← 改成你的正式地址
  github: 'https://github.com/你的名/仓库', // ← 改成你的仓库
  ...
};
```

并修改 `public/robots.txt` 里的 Sitemap 地址：

```
Sitemap: https://你的域名.pages.dev/sitemap.xml
```

> `url` 会影响 `canonical`、OG、sitemap 等所有绝对链接，务必改对。

### 2. 推到 GitHub

```bash
git init
git add -A
git commit -m "init: MD→PDF Studio"
git branch -M main
git remote add origin https://github.com/你的名/仓库.git
git push -u origin main
```

### 3. Cloudflare Pages 关联仓库

1. 登录 Cloudflare → **Workers & Pages** → **Create** → **Pages**。
2. 选择 **Connect to Git**，授权并选中你的仓库。
3. 构建设置：
   - **Build command**：`npm run build`
   - **Build output directory**：`dist`
4. 点击 **Save and Deploy**。
5. 之后每次 `git push` 都会自动重新构建并发布。

### 4.（可选）绑定自定义域名

在 Pages 项目的 **Custom domains** 中添加你的域名，按提示把 DNS 的 CNAME 指向 Pages，Cloudflare 会自动签发 SSL 证书。

## 写博客

在 `src/content/blog/` 新建一个 `.md` 文件，Frontmatter 写清楚 SEO 字段即可：

```markdown
---
title: "文章标题"
description: "一句话摘要，会出现在搜索结果里"
pubDate: 2026-07-30
tags: ["Markdown"]
keywords: ["关键词一", "关键词二"]   # 影响 meta keywords 与 JSON-LD
author: "你的名字"
---

正文用 Markdown 写……
```

提交并 push，文章自动上线。

## SEO 检查清单

- [ ] 已修改 `src/site.config.ts` 的 `url` 与 `github`
- [ ] 已修改 `public/robots.txt` 的 Sitemap 地址
- [ ] 每篇文章都填了 `description` 与 `keywords`
- [ ] 部署后在 [Google Search Console](https://search.google.com/search-console) 提交 `sitemap.xml`
- [ ] 配置了自定义域名并开启 HTTPS
