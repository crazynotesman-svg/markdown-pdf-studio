---
title: "Implantar um site estático no Cloudflare Pages de graça: guia passo a passo"
description: "Um guia prático para conectar seu repositório do GitHub ao Cloudflare Pages e obter implantação ao push, CDN global e domínio personalizado."
pubDate: 2026-07-20
tags: ["Implantação", "Cloudflare", "DevOps"]
keywords: ["implantação Cloudflare Pages", "hospedagem de sites estáticos", "conectar GitHub ao Cloudflare", "hospedagem estática grátis", "CDN edge", "domínio personalizado Pages"]
author: "MD→PDF Studio"
lang: pt
canonical: cloudflare-pages-deploy
---

# Implantar um site estático no Cloudflare Pages de graça

O Cloudflare Pages oferece hospedagem estática grátis mais uma CDN global, e se integra profundamente com o GitHub: **push para implantar**. Veja o processo completo.

## Pré-requisitos

- Um repositório do GitHub (o código-fonte do site)
- Uma conta Cloudflare (o plano gratuito é suficiente)
- Um comando de build e um diretório de saída (ex.: Astro: `npm run build` → `dist`)

## Passos de implantação

### 1. Envie o código para o GitHub

```bash
git init
git add -A
git commit -m "init"
git remote add origin https://github.com/crazynotesman-svg/markdown-pdf-studio.git
git push -u origin main
```

### 2. Conecte o repositório no Cloudflare Pages

1. Painel da Cloudflare → **Workers & Pages** → **Create** → **Pages**.
2. Escolha **Connect to Git**, autorize e selecione seu repositório.
3. Defina o build:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Clique em **Save and Deploy**.

### 3. Implantação automática a cada atualização

Depois disso, qualquer `git push` faz o Cloudflare puxar, compilar e publicar automaticamente, e mantém um link de pré-visualização para cada implantação.

## Configurar um domínio personalizado (opcional)

Em **Custom domains** do projeto Pages, adicione seu domínio e aponte seu CNAME de DNS para o Pages conforme indicado. A Cloudflare emite um certificado SSL automaticamente, então o HTTPS funciona imediatamente.

## Armadilhas comuns

- **Links absolutos errados**: lembre-se de definir `site` na configuração para seu domínio real, ou o sitemap/canonical usará endereços de espaço reservado.
- **Timeout de build**: o plano gratuito é suficiente para sites pequenos; reduza dependências se houver muitas.
- **Variáveis de ambiente**: sites puramente estáticos geralmente não precisam, mas se precisar, defina-as em **Settings → Environment variables** do Pages.

## Resumo

O GitHub gerencia o conteúdo; o Cloudflare Pages gerencia a entrega — essa combinação é de custo zero, acelerada globalmente e de implantação automática, ideal para projetos pessoais e blogs técnicos.

> A implantação descrita aqui é exatamente como este site foi publicado.
