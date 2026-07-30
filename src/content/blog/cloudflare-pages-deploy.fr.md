---
title: "Déployer un site statique sur Cloudflare Pages gratuitement : guide étape par étape"
description: "Un guide pratique pour connecter votre dépôt GitHub à Cloudflare Pages et obtenir un déploiement au push, un CDN global et un domaine personnalisé."
pubDate: 2026-07-20
tags: ["Déploiement", "Cloudflare", "DevOps"]
keywords: ["déploiement Cloudflare Pages", "hébergement de sites statiques", "connecter GitHub à Cloudflare", "hébergement statique gratuit", "CDN edge", "domaine personnalisé Pages"]
author: "MD→PDF Studio"
lang: fr
canonical: cloudflare-pages-deploy
---

# Déployer un site statique sur Cloudflare Pages gratuitement

Cloudflare Pages propose un hébergement statique gratuit ainsi qu'un CDN global, et s'intègre profondément à GitHub : **push pour déployer**. Voici le processus complet.

## Prérequis

- Un dépôt GitHub (le code source de votre site)
- Un compte Cloudflare (le niveau gratuit suffit)
- Une commande de build et un répertoire de sortie (ex. Astro : `npm run build` → `dist`)

## Étapes de déploiement

### 1. Poussez le code vers GitHub

```bash
git init
git add -A
git commit -m "init"
git remote add origin https://github.com/crazynotesman-svg/markdown-pdf-studio.git
git push -u origin main
```

### 2. Connectez le dépôt dans Cloudflare Pages

1. Tableau de bord Cloudflare → **Workers & Pages** → **Create** → **Pages**.
2. Choisissez **Connect to Git**, autorisez et sélectionnez votre dépôt.
3. Définissez le build :
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
4. Cliquez sur **Save and Deploy**.

### 3. Déploiement automatique à chaque mise à jour

Ensuite, tout `git push` fait en sorte que Cloudflare récupère, compile et publie automatiquement, et conserve un lien d'aperçu pour chaque déploiement.

## Configurer un domaine personnalisé (facultatif)

Dans **Custom domains** du projet Pages, ajoutez votre domaine et pointez son CNAME DNS vers Pages comme indiqué. Cloudflare délivre un certificat SSL automatiquement, donc le HTTPS fonctionne d'emblée.

## Pièges courants

- **Liens absolus incorrects** : n'oubliez pas de régler `site` dans votre configuration sur votre domaine réel, sinon le sitemap/canonical utilisera des adresses fictives.
- **Expiration du build** : le niveau gratuit suffit pour les petits sites ; allégez les dépendances si vous en avez trop.
- **Variables d'environnement** : les sites purement statiques n'en ont généralement pas besoin, mais si besoin, configurez-les dans **Settings → Environment variables** de Pages.

## En résumé

GitHub gère le contenu ; Cloudflare Pages gère la livraison — cette combinaison est à coût zéro, accélérée globalement et à déploiement automatique, idéale pour les projets personnels et les blogs techniques.

> Le déploiement décrit ici est exactement la façon dont ce site est passé en production.
