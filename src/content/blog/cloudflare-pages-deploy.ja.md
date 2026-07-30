---
title: "Cloudflare Pages で静的サイトを無料デプロイ：手順解説"
description: "GitHub リポジトリを Cloudflare Pages に接続し、プッシュでデプロイ、グローバル CDN 高速化、カスタムドメインを得る実践ガイド。"
pubDate: 2026-07-20
tags: ["デプロイ", "Cloudflare", "DevOps"]
keywords: ["Cloudflare Pages デプロイ", "静的サイトホスティング", "GitHub を Cloudflare に接続", "無料静的ホスティング", "エッジ CDN", "Pages カスタムドメイン"]
author: "MD→PDF Studio"
lang: ja
canonical: cloudflare-pages-deploy
---

# Cloudflare Pages で静的サイトを無料デプロイ

Cloudflare Pages は無料の静的ホスティングとグローバル CDN を提供し、GitHub と深く統合されています：**プッシュでデプロイ**。以下が全体の流れです。

## 前提条件

- GitHub リポジトリ（サイトのソースコード）
- Cloudflare アカウント（無料枠で十分）
- ビルドコマンドと出力ディレクトリ（例：Astro の場合 `npm run build` → `dist`）

## デプロイ手順

### 1. コードを GitHub にプッシュ

```bash
git init
git add -A
git commit -m "init"
git remote add origin https://github.com/crazynotesman-svg/markdown-pdf-studio.git
git push -u origin main
```

### 2. Cloudflare Pages でリポジトリを接続

1. Cloudflare ダッシュボード → **Workers & Pages** → **Create** → **Pages**。
2. **Connect to Git** を選び、認可してリポジトリを選択します。
3. ビルドを設定します：
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. **Save and Deploy** をクリックします。

### 3. 更新するたびに自動デプロイ

これ以降、任意の `git push` で Cloudflare が自動的に取得・ビルド・公開し、各デプロイのプレビューリンクも保持します。

## カスタムドメインの設定（任意）

Pages プロジェクトの **Custom domains** でドメインを追加し、案内に従って DNS の CNAME を Pages に向けます。Cloudflare は自動で SSL 証明書を発行するため、HTTPS は即時利用できます。

## よくある落とし穴

- **絶対リンクの間違い**：設定の `site` に本番ドメインを指定しないと、sitemap/canonical がプレースホルダーのままになります。
- **ビルドタイムアウト**：無料枠で小規模サイトは十分です。依存が多い場合は削りましょう。
- **環境変数**：純粋な静的サイトは通常不要ですが、必要なら Pages の **Settings → Environment variables** で設定します。

## まとめ

GitHub がコンテンツを、Cloudflare Pages が配信を担う——この組み合わせは無料で、グローバルに高速、かつ自動デプロイであり、個人プロジェクトや技術ブログに最適です。

> ここで解説したデプロイこそ、このサイトが公開された方法です。
