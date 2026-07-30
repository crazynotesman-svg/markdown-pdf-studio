---
title: "Deploy a Static Site on Cloudflare Pages for Free: A Step-by-Step Guide"
description: "A hands-on guide to connecting your GitHub repo to Cloudflare Pages for push-to-deploy, global CDN acceleration, and a custom domain."
pubDate: 2026-07-20
tags: ["Deployment", "Cloudflare", "DevOps"]
keywords: ["Cloudflare Pages deploy", "static site hosting", "connect GitHub to Cloudflare", "free static hosting", "edge CDN", "Pages custom domain"]
author: "MD→PDF Studio"
lang: en
canonical: cloudflare-pages-deploy
---

# Deploy a Static Site on Cloudflare Pages for Free

Cloudflare Pages offers free static hosting plus a global CDN, and integrates deeply with GitHub: **push to deploy**. Here is the full process.

## Prerequisites

- A GitHub repository (your site source)
- A Cloudflare account (free tier is enough)
- A build command and output directory (e.g., Astro: `npm run build` → `dist`)

## Deployment steps

### 1. Push code to GitHub

```bash
git init
git add -A
git commit -m "init"
git remote add origin https://github.com/crazynotesman-svg/markdown-pdf-studio.git
git push -u origin main
```

### 2. Connect the repo in Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages**.
2. Choose **Connect to Git**, authorize, and select your repository.
3. Set the build:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Click **Save and Deploy**.

### 3. Auto-deploy on every update

After this, any `git push` makes Cloudflare automatically pull, build, and publish — and it keeps a preview link for every deployment.

## Configure a custom domain (optional)

In the Pages project's **Custom domains**, add your domain and point its DNS CNAME to Pages as prompted. Cloudflare issues an SSL certificate automatically, so HTTPS works out of the box.

## Common pitfalls

- **Wrong absolute links**: Remember to set `site` in your config to your real domain, or sitemap/canonical will use placeholder addresses.
- **Build timeout**: The free tier is enough for small sites; trim dependencies if you have too many.
- **Environment variables**: Pure static sites usually don't need them, but if you do, set them under Pages **Settings → Environment variables**.

## Wrap-up

GitHub manages content; Cloudflare Pages manages delivery — this combo is zero-cost, globally accelerated, and auto-deploying, making it ideal for personal projects and technical blogs.

> The deployment described here is exactly how this site went live.
