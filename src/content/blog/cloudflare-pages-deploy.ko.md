---
title: "Cloudflare Pages로 정적 사이트를 무료로 배포하기: 단계별 가이드"
description: "GitHub 저장소를 Cloudflare Pages에 연결해 푸시만으로 배포, 전 세계 CDN 가속, 커스텀 도메인을 얻는 실전 가이드."
pubDate: 2026-07-20
tags: ["배포", "Cloudflare", "DevOps"]
keywords: ["Cloudflare Pages 배포", "정적 사이트 호스팅", "GitHub를 Cloudflare에 연결", "무료 정적 호스팅", "엣지 CDN", "Pages 커스텀 도메인"]
author: "MD→PDF Studio"
lang: ko
canonical: cloudflare-pages-deploy
---

# Cloudflare Pages로 정적 사이트를 무료로 배포하기

Cloudflare Pages는 무료 정적 호스팅과 전 세계 CDN을 제공하며 GitHub와 깊이 통합되어 있습니다: **푸시하면 배포**. 전체 과정은 다음과 같습니다.

## 사전 요구 사항

- GitHub 저장소 (사이트 소스 코드)
- Cloudflare 계정 (무료 등급이면 충분)
- 빌드 명령과 출력 디렉터리 (예: Astro의 경우 `npm run build` → `dist`)

## 배포 단계

### 1. 코드를 GitHub에 푸시

```bash
git init
git add -A
git commit -m "init"
git remote add origin https://github.com/crazynotesman-svg/markdown-pdf-studio.git
git push -u origin main
```

### 2. Cloudflare Pages에서 저장소 연결

1. Cloudflare 대시보드 → **Workers & Pages** → **Create** → **Pages**.
2. **Connect to Git**을 선택하고 권한을 부여한 뒤 저장소를 고릅니다.
3. 빌드를 설정합니다:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. **Save and Deploy**를 클릭합니다.

### 3. 업데이트할 때마다 자동 배포

이후 어떤 `git push`든 Cloudflare가 자동으로 가져와 빌드하고 게시하며, 각 배포의 미리보기 링크도 유지합니다.

## 커스텀 도메인 설정 (선택)

Pages 프로젝트의 **Custom domains**에서 도메인을 추가하고 안내에 따라 DNS CNAME을 Pages로 향하게 합니다. Cloudflare가 SSL 인증서를 자동 발급하므로 HTTPS는 즉시 사용 가능합니다.

## 흔한 함정

- **절대 링크 오류**: 설정에서 `site`를 실제 도메인으로 지정하지 않으면 sitemap/canonical이 플레이스홀더 주소가 됩니다.
- **빌드 타임아웃**: 무료 등급은 작은 사이트에 충분합니다. 의존성이 너무 많으면 줄이세요.
- **환경 변수**: 순수 정적 사이트는 보통 필요 없지만, 필요하다면 Pages의 **Settings → Environment variables**에서 설정합니다.

## 요약

GitHub가 콘텐츠를, Cloudflare Pages가 배포를 맡습니다——이 조합은 무료이고, 전 세계 가속되며, 자동 배포되어 개인 프로젝트와 기술 블로그에 이상적입니다.

> 여기서 설명한 배포 방식이 바로 이 사이트가 공개된 방식입니다.
