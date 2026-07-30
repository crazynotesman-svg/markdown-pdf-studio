---
title: "用 Cloudflare Pages 零成本部署静态网站的实战步骤"
description: "手把手教你把 GitHub 仓库里的静态站点连接到 Cloudflare Pages，实现推送即部署、全球 CDN 加速，并配置自定义域名。"
pubDate: 2026-07-20
tags: ["部署", "Cloudflare", "DevOps"]
keywords: ["Cloudflare Pages 部署", "静态网站托管", "GitHub 关联 Cloudflare", "免费静态托管", "边缘网络 CDN", "Pages 自定义域名"]
author: "MD→PDF Studio"
lang: zh-CN
canonical: cloudflare-pages-deploy
---

# 用 Cloudflare Pages 零成本部署静态网站

Cloudflare Pages 提供免费的静态托管 + 全球 CDN，且与 GitHub 深度集成：**Push 即部署**。下面是完整流程。

## 前置条件

- 一个 GitHub 仓库（站点源码）
- 一个 Cloudflare 账号（免费版足够）
- 构建命令与产物目录（如 Astro：`npm run build` → `dist`）

## 部署步骤

### 1. 推送代码到 GitHub

```bash
git init
git add -A
git commit -m "init"
git remote add origin https://github.com/crazynotesman-svg/markdown-pdf-studio.git
git push -u origin main
```

### 2. 在 Cloudflare Pages 关联仓库

1. 登录 Cloudflare 控制台 → **Workers & Pages** → **Create** → **Pages**。
2. 选择 **Connect to Git**，授权并选中你的仓库。
3. 设置构建：
   - **Build command**：`npm run build`
   - **Build output directory**：`dist`
4. 点击 **Save and Deploy**。

### 3. 每次更新自动上线

此后只要 `git push`，Cloudflare 会自动拉取、构建并发布，还会保留每次部署的预览链接。

## 配置自定义域名（可选）

在 Pages 项目的 **Custom domains** 中添加你的域名，按提示把 DNS 的 CNAME 指向 Pages。Cloudflare 会自动签发 SSL 证书，HTTPS 开箱即用。

## 常见坑

- **站点绝对链接错误**：记得在配置文件里把 `site` 设成你的正式域名，否则 sitemap/canonical 会是占位地址。
- **构建超时**：免费额度足够小站点；依赖过多时精简依赖。
- **环境变量**：纯静态站点通常不需要，但如需可在 Pages 的 **Settings → Environment variables** 配置。

## 小结

GitHub 管内容，Cloudflare Pages 管交付——这套组合零成本、全球加速、自动部署，是个人项目与技术博客的理想选择。

> 本文所讲的部署方式，正是本站点上线的方式。
