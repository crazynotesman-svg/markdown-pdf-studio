---
title: "Desplegar un sitio estático en Cloudflare Pages gratis: guía paso a paso"
description: "Guía práctica para conectar tu repositorio de GitHub a Cloudflare Pages y lograr despliegue al hacer push, CDN global y dominio personalizado."
pubDate: 2026-07-20
tags: ["Despliegue", "Cloudflare", "DevOps"]
keywords: ["despliegue Cloudflare Pages", "alojamiento de sitios estáticos", "conectar GitHub con Cloudflare", "alojamiento estático gratis", "CDN edge", "dominio personalizado Pages"]
author: "MD→PDF Studio"
lang: es
canonical: cloudflare-pages-deploy
---

# Desplegar un sitio estático en Cloudflare Pages gratis

Cloudflare Pages ofrece alojamiento estático gratuito más una CDN global, e integra profundamente con GitHub: **push para desplegar**. Aquí está el proceso completo.

## Requisitos previos

- Un repositorio de GitHub (el código fuente de tu sitio)
- Una cuenta de Cloudflare (el plan gratuito basta)
- Un comando de compilación y un directorio de salida (p. ej., Astro: `npm run build` → `dist`)

## Pasos de despliegue

### 1. Sube el código a GitHub

```bash
git init
git add -A
git commit -m "init"
git remote add origin https://github.com/crazynotesman-svg/markdown-pdf-studio.git
git push -u origin main
```

### 2. Conecta el repositorio en Cloudflare Pages

1. Panel de Cloudflare → **Workers & Pages** → **Create** → **Pages**.
2. Elige **Connect to Git**, autoriza y selecciona tu repositorio.
3. Define la compilación:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Haz clic en **Save and Deploy**.

### 3. Despliegue automático en cada actualización

Después de esto, cualquier `git push` hace que Cloudflare extraiga, compile y publique automáticamente, y guarda un enlace de previsualización para cada despliegue.

## Configurar un dominio personalizado (opcional)

En **Custom domains** del proyecto Pages, añade tu dominio y apunta su CNAME de DNS a Pages según se indique. Cloudflare emite un certificado SSL automáticamente, así que HTTPS funciona desde el primer momento.

## Errores comunes

- **Enlaces absolutos incorrectos**: recuerda fijar `site` en tu configuración a tu dominio real, o el sitemap/canonical usarán direcciones de marcador de posición.
- **Tiempo de compilación agotado**: el plan gratuito basta para sitios pequeños; reduce dependencias si tienes demasiadas.
- **Variables de entorno**: los sitios puramente estáticos normalmente no las necesitan, pero si las usas, configúralas en **Settings → Environment variables** de Pages.

## Resumen

GitHub gestiona el contenido; Cloudflare Pages gestiona la entrega: esta combinación es de costo cero, acelerada globalmente y de despliegue automático, ideal para proyectos personales y blogs técnicos.

> El despliegue que se describe aquí es exactamente cómo se publicó este sitio.
