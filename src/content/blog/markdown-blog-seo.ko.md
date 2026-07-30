---
title: "Markdown으로 기술 블로그를 쓰고 SEO 최적화하기: 완전한 워크플로"
description: "Markdown 콘텐츠와 정적 사이트 생성기로 SEO 친화적인 기술 블로그를 만드는 실전 절차: 메타데이터, 사이트맵, 구조화된 데이터, 엣지 배포."
pubDate: 2026-07-25
tags: ["블로그", "SEO", "정적 사이트"]
keywords: ["Markdown 블로그", "기술 블로그 SEO", "정적 사이트 생성기", "Astro 블로그", "sitemap xml", "구조화된 데이터 JSON-LD"]
author: "MD→PDF Studio"
lang: ko
canonical: markdown-blog-seo
---

# Markdown으로 기술 블로그를 쓰고 SEO 최적화하기

기술 블로그를 Markdown으로 쓰는 것이 가장 효율적이지만, 검색엔진이 좋아하게 하려면 SEO의 「표준 절차」를 마쳐야 합니다. 바로 적용할 수 있는 워크플로입니다.

## 1. 콘텐츠는 데이터: frontmatter로 끌어내는 SEO

각 글의 제목·설명·키워드·날짜를 YAML frontmatter로 선언합니다:

```yaml
title: "Article title"
description: "A one-sentence summary that appears in search results"
keywords: ["keyword one", "keyword two"]
pubDate: 2026-07-25
```

이 필드들은 `<title>`, `<meta name="description">`, `<meta name="keywords">`에 자동으로 주입되어 HTML을 직접 고칠 필요가 없습니다.

## 2. SEO의 세 가지 기초

| 기초 | 역할 |
| --- | --- |
| `sitemap.xml` | 크롤러에게 어떤 페이지가 있는지 알림 |
| `robots.txt` | 크롤러를 안내하고 사이트맵을 가리킴 |
| `JSON-LD` | 구조화된 데이터로 글 설명(작성자·날짜·키워드) |

## 3. 소셜 공유 카드

Open Graph와 Twitter Card를 설정하면 WeChat, X, Telegram 등에서 글을 공유할 때 예쁜 미리보기 이미지가 표시됩니다.

## 4. 속도가 곧 순위

정적 사이트는 기본적으로 실행 시 JS를 보내지 않고 즉시 로드되므로 SEO의 천혜 이점입니다. 여기에 CDN/엣지 네트워크(Cloudflare Pages 등)로 전 세계 가속을 더하면 Core Web Vitals도 쉽게 충족됩니다.

## 5. 콘텐츠는 Git으로 관리

블로그 글은 저장소 안의 그저 `.md` 파일입니다:

- 내용 수정 = 파일 수정 + PR 열기
- 게시 = 병합하고 자동 배포
- 히스토리 = Git 커밋 로그

이 「콘텐츠를 코드로」 방식 덕분에 기술 블로그는 쓰기도, 유지하기도 쉽습니다.

> 이 블로그 자체가 이 방식으로 만들어졌습니다——소스는 [GitHub](https://github.com/crazynotesman-svg/markdown-pdf-studio)에 있습니다.
