---
title: "用 Cloudflare Pages 零成本部署靜態網站的實戰步驟"
description: "手把手教你把 GitHub 倉庫裡的靜態網站連接到 Cloudflare Pages，實現推送即部署、全球 CDN 加速，並配置自訂網域。"
pubDate: 2026-07-20
tags: ["部署", "Cloudflare", "DevOps"]
keywords: ["Cloudflare Pages 部署", "靜態網站託管", "GitHub 關聯 Cloudflare", "免費靜態託管", "邊緣網路 CDN", "Pages 自訂網域"]
author: "MD→PDF Studio"
lang: zh-TW
canonical: cloudflare-pages-deploy
---

# 用 Cloudflare Pages 零成本部署靜態網站

Cloudflare Pages 提供免費的靜態託管 + 全球 CDN，且與 GitHub 深度整合：**Push 即部署**。下面是完整流程。

## 前置條件

- 一個 GitHub 倉庫（站點原始碼）
- 一個 Cloudflare 帳號（免費版就夠）
- 建構指令與產物目錄（如 Astro：`npm run build` → `dist`）

## 部署步驟

### 1. 推送程式碼到 GitHub

```bash
git init
git add -A
git commit -m "init"
git remote add origin https://github.com/crazynotesman-svg/markdown-pdf-studio.git
git push -u origin main
```

### 2. 在 Cloudflare Pages 關聯倉庫

1. 登入 Cloudflare 控制台 → **Workers & Pages** → **Create** → **Pages**。
2. 選擇 **Connect to Git**，授權並選中你的倉庫。
3. 設定建構：
   - **Build command**：`npm run build`
   - **Build output directory**：`dist`
4. 點擊 **Save and Deploy**。

### 3. 每次更新自動上線

此後只要 `git push`，Cloudflare 會自動拉取、建構並發布，還會保留每次部署的預覽連結。

## 配置自訂網域（可選）

在 Pages 專案的 **Custom domains** 中加入你的網域，依提示把 DNS 的 CNAME 指向 Pages。Cloudflare 會自動簽發 SSL 憑證，HTTPS 開箱即用。

## 常見坑

- **站點絕對連結錯誤**：記得在設定檔裡把 `site` 設成你的正式網域，否則 sitemap/canonical 會是佔位位址。
- **建構逾時**：免費額度足夠小站點；依賴過多時精簡依賴。
- **環境變數**：純靜態站點通常不需要，但如需可在 Pages 的 **Settings → Environment variables** 配置。

## 小結

GitHub 管內容，Cloudflare Pages 管交付——這套組合零成本、全球加速、自動部署，是個人專案與技術部落格的理想選擇。

> 本文所講的部署方式，正是本站點上線的方式。
