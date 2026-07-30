---
title: "Eine statische Website kostenlos auf Cloudflare Pages bereitstellen: Schritt für Schritt"
description: "Ein praktischer Leitfaden, um Ihr GitHub-Repository mit Cloudflare Pages zu verbinden und Push-to-Deploy, globales CDN und eine benutzerdefinierte Domain zu erhalten."
pubDate: 2026-07-20
tags: ["Deployment", "Cloudflare", "DevOps"]
keywords: ["Cloudflare Pages Deployment", "Static-Site-Hosting", "GitHub mit Cloudflare verbinden", "kostenloses Static Hosting", "Edge-CDN", "Pages benutzerdefinierte Domain"]
author: "MD→PDF Studio"
lang: de
canonical: cloudflare-pages-deploy
---

# Eine statische Website kostenlos auf Cloudflare Pages bereitstellen

Cloudflare Pages bietet kostenloses Static Hosting plus globales CDN und ist tief in GitHub integriert: **Push zum Deploy**. Hier ist der komplette Prozess.

## Voraussetzungen

- Ein GitHub-Repository (Ihr Site-Quellcode)
- Ein Cloudflare-Konto (der kostenlose Tarif reicht)
- Ein Build-Befehl und ein Ausgabeverzeichnis (z. B. Astro: `npm run build` → `dist`)

## Deployment-Schritte

### 1. Code zu GitHub pushen

```bash
git init
git add -A
git commit -m "init"
git remote add origin https://github.com/crazynotesman-svg/markdown-pdf-studio.git
git push -u origin main
```

### 2. Repository in Cloudflare Pages verbinden

1. Cloudflare-Dashboard → **Workers & Pages** → **Create** → **Pages**.
2. Wählen Sie **Connect to Git**, autorisieren Sie sich und wählen Sie Ihr Repository.
3. Legen Sie den Build fest:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Klicken Sie auf **Save and Deploy**.

### 3. Automatisches Deployment bei jeder Aktualisierung

Danach sorgt jeder `git push` dafür, dass Cloudflare automatisch pullt, baut und veröffentlicht — und behält für jedes Deployment einen Preview-Link.

## Benutzerdefinierte Domain konfigurieren (optional)

Fügen Sie unter **Custom domains** des Pages-Projekts Ihre Domain hinzu und richten Sie den DNS-CNAME wie angezeigt auf Pages. Cloudflare stellt automatisch ein SSL-Zertifikat aus, sodass HTTPS sofort funktioniert.

## Häufige Fallstricke

- **Falsche absolute Links**: Setzen Sie in der Konfiguration `site` auf Ihre echte Domain, sonst verwenden sitemap/canonical Platzhalter-Adressen.
- **Build-Timeout**: Der kostenlose Tarif reicht für kleine Sites; reduzieren Sie Abhängigkeiten, wenn es zu viele sind.
- **Umgebungsvariablen**: Reine Static Sites brauchen sie meist nicht, aber falls doch, setzen Sie sie unter Pages **Settings → Environment variables**.

## Fazit

GitHub verwaltet den Inhalt; Cloudflare Pages verwaltet die Auslieferung — diese Kombination ist kostenlos, global beschleunigt und automatisch deployt, ideal für persönliche Projekte und technische Blogs.

> Das hier beschriebene Deployment ist genau die Art, wie diese Site live ging.
