// 多语言翻译字典。默认语言为英语（en）。
// 客户端脚本与 Astro 前端均从此文件读取；本模块不依赖任何浏览器 API（除 t()/getLang() 调用时）。

export type LangCode =
  | 'en'
  | 'es'
  | 'zh-CN'
  | 'zh-TW'
  | 'pt'
  | 'fr'
  | 'de'
  | 'ja'
  | 'ru'
  | 'ko';

export const DEFAULT_LANG: LangCode = 'en';

// 下拉选项用各语言的自称（native name）。
export const LANGS: { code: LangCode; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'zh-CN', label: '简体中文' },
  { code: 'zh-TW', label: '繁體中文' },
  { code: 'pt', label: 'Português' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ja', label: '日本語' },
  { code: 'ru', label: 'Русский' },
  { code: 'ko', label: '한국어' },
];

export type Dict = Record<string, string>;

export const translations: Record<LangCode, Dict> = {
  en: {
    'nav.tool': 'Tool',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.github': 'GitHub',
    'lang.selectLabel': 'Language',

    'footer.copy': '© {year} MD→PDF Studio · Pure-frontend Markdown to PDF tool',
    'footer.blog': 'Blog',
    'footer.rss': 'RSS',
    'footer.github': 'GitHub',
    'footer.contact': 'Contact',

    'home.heroTitle': 'Minimal Markdown to PDF',
    'home.heroDesc':
      'Write Markdown on the left, preview the A4 print layout on the right, and export to PDF in one click. Everything runs in your browser — nothing is uploaded, fully private.',

    'home.keywords': 'Markdown to PDF, Online Markdown editor, PDF export tool, Minimal writing tool, Privacy-first frontend',

    'tool.loadSample': 'Load sample',
    'tool.clear': 'Clear',
    'tool.bold': 'Bold',
    'tool.italic': 'Italic',
    'tool.heading': 'Heading',
    'tool.list': 'List',
    'tool.link': 'Link',
    'tool.code': 'Code',
    'tool.print': 'Print / Save as PDF',
    'tool.download': 'Download PDF',
    'tool.inputLabel': 'Markdown input',
    'tool.previewLabel': 'PDF preview (A4)',
    'tool.inputPlaceholder': 'Write your Markdown here…',
    'tool.generating': 'Generating…',
    'tool.downloadError':
      'PDF generation failed: {msg}. You can use the "Print / Save as PDF" button instead.',
    'tool.sample': `# MD→PDF Studio demo

Welcome to **MD→PDF Studio**. Write Markdown on the left and see the live A4 print preview on the right.

## Quick start

1. Write Markdown on the left
2. It renders live as a paper layout
3. Click "Print / Save as PDF" or "Download PDF"

> Tip: everything runs in your browser; nothing is uploaded.

## Supported syntax

- **bold**, *italic*, \`inline code\`
- [links](https://astro.build)
- quotes, lists, tables

\`\`\`js
function hello(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

| Feature | Note |
| --- | --- |
| Live preview | See as you type |
| Print export | Native, accurate |
| One-click download | via html2pdf.js |

---

When you are done, export to PDF to share or archive.
`,

    'about.title': 'About MD→PDF Studio',
    'about.body1':
      '**MD→PDF Studio** is a minimal online tool: write Markdown on the left, preview the A4 print layout on the right, and export to PDF in one click. Everything runs locally in your browser — **your content is never uploaded to any server**.',
    'about.features': 'Features',
    'about.f1': 'Live preview: see changes as you type.',
    'about.f2':
      'Two export options: native browser print (most accurate styling) and one-click PDF download.',
    'about.f3': 'Privacy first: pure frontend, zero upload.',
    'about.f4':
      'Open source and self-hostable: code on GitHub, deploy to Cloudflare Pages in one click.',
    'about.oss': 'Open source & deployment',
    'about.ossBody':
      'This project is fully open source. Visit GitHub to view the source, open issues, or deploy your own. Blog content is driven by Markdown files in the repository — push to publish.',
    'about.backHome': 'Want to try the tool? Back to home →',
    'about.contact': 'Contact',
    'about.contactBody': 'Questions or feedback? Email us at',

    'blog.title': 'Blog',
    'blog.subtitle': 'Practical notes on Markdown, PDF, static sites, and edge deployment.',
    'blog.published': 'Published',
    'blog.back': '← Back to blog',
    'blog.by': 'by',
  },

  es: {
    'nav.tool': 'Herramienta',
    'nav.blog': 'Blog',
    'nav.about': 'Acerca de',
    'nav.github': 'GitHub',
    'lang.selectLabel': 'Idioma',

    'footer.copy': '© {year} MD→PDF Studio · Herramienta Markdown a PDF sin servidor',
    'footer.blog': 'Blog',
    'footer.rss': 'RSS',
    'footer.github': 'GitHub',
    'footer.contact': 'Contacto',

    'home.heroTitle': 'Markdown a PDF, mínimo',
    'home.heroDesc':
      'Escribe Markdown a la izquierda, previsualiza el diseño de impresión A4 a la derecha y exporta a PDF con un clic. Todo se ejecuta en tu navegador: nada se sube, totalmente privado.',

    'home.keywords': 'Markdown a PDF, Editor Markdown online, Herramienta de exportación PDF, Herramienta de escritura mínima, Frontend sin servidor',

    'tool.loadSample': 'Cargar ejemplo',
    'tool.clear': 'Limpiar',
    'tool.bold': 'Negrita',
    'tool.italic': 'Cursiva',
    'tool.heading': 'Encabezado',
    'tool.list': 'Lista',
    'tool.link': 'Enlace',
    'tool.code': 'Código',
    'tool.print': 'Imprimir / Guardar como PDF',
    'tool.download': 'Descargar PDF',
    'tool.inputLabel': 'Entrada Markdown',
    'tool.previewLabel': 'Vista previa PDF (A4)',
    'tool.inputPlaceholder': 'Escribe tu Markdown aquí…',
    'tool.generating': 'Generando…',
    'tool.downloadError':
      'Error al generar el PDF: {msg}. Puedes usar el botón "Imprimir / Guardar como PDF".',
    'tool.sample': `# Demostración de MD→PDF Studio

Bienvenido a **MD→PDF Studio**. Escribe Markdown a la izquierda y ve la vista previa de impresión A4 en vivo a la derecha.

## Inicio rápido

1. Escribe Markdown a la izquierda
2. Se renderiza en vivo como un documento
3. Haz clic en "Imprimir / Guardar como PDF" o "Descargar PDF"

> Consejo: todo se ejecuta en tu navegador; nada se sube.

## Sintaxis admitida

- **negrita**, *cursiva*, \`código en línea\`
- [enlaces](https://astro.build)
- citas, listas, tablas

\`\`\`js
function hello(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

| Función | Nota |
| --- | --- |
| Vista previa | Ver mientras escribes |
| Exportar | Nativo, preciso |
| Descarga | vía html2pdf.js |

---

Cuando termines, exporta a PDF para compartir o archivar.
`,

    'about.title': 'Acerca de MD→PDF Studio',
    'about.body1':
      '**MD→PDF Studio** es una herramienta en línea mínima: escribe Markdown a la izquierda, previsualiza el diseño de impresión A4 a la derecha y exporta a PDF con un clic. Todo se ejecuta localmente en tu navegador — **tu contenido nunca se sube a ningún servidor**.',
    'about.features': 'Características',
    'about.f1': 'Vista previa en vivo: ve los cambios mientras escribes.',
    'about.f2':
      'Dos opciones de exportación: impresión nativa del navegador (estilo más preciso) y descarga de PDF con un clic.',
    'about.f3': 'Privacidad primero: frontend puro, cero subidas.',
    'about.f4':
      'Código abierto y auto-alojable: código en GitHub, despliega en Cloudflare Pages con un clic.',
    'about.oss': 'Código abierto y despliegue',
    'about.ossBody':
      'Este proyecto es totalmente de código abierto. Visita GitHub para ver el código fuente, abrir incidencias o desplegar el tuyo. El contenido del blog se genera con archivos Markdown del repositorio: push para publicar.',
    'about.backHome': '¿Quieres probar la herramienta? Volver al inicio →',
    'about.contact': 'Contacto',
    'about.contactBody': '¿Preguntas o comentarios? Escríbenos a',

    'blog.title': 'Blog',
    'blog.subtitle': 'Notas prácticas sobre Markdown, PDF, sitios estáticos y despliegue en el edge.',
    'blog.published': 'Publicado',
    'blog.back': '← Volver al blog',
    'blog.by': 'por',
  },

  'zh-CN': {
    'nav.tool': '工具',
    'nav.blog': '博客',
    'nav.about': '关于',
    'nav.github': 'GitHub',
    'lang.selectLabel': '语言',

    'footer.copy': '© {year} MD→PDF Studio · 纯前端 Markdown 转 PDF 工具',
    'footer.blog': '博客',
    'footer.rss': 'RSS',
    'footer.github': 'GitHub',
    'footer.contact': '联系方式',

    'home.heroTitle': '极简 Markdown 转 PDF',
    'home.heroDesc':
      '左侧书写 Markdown，右侧实时预览 A4 打印样式，一键导出 PDF。纯前端运行，内容不上传，安全又隐私。',

    'home.keywords': 'Markdown 转 PDF, 在线 Markdown 编辑器, PDF 导出工具, 极简写作工具, 纯前端隐私保护',

    'tool.loadSample': '载入示例',
    'tool.clear': '清空',
    'tool.bold': '加粗',
    'tool.italic': '斜体',
    'tool.heading': '标题',
    'tool.list': '列表',
    'tool.link': '链接',
    'tool.code': '代码',
    'tool.print': '打印 / 另存为 PDF',
    'tool.download': '下载 PDF',
    'tool.inputLabel': 'Markdown 输入',
    'tool.previewLabel': 'PDF 预览（A4）',
    'tool.inputPlaceholder': '在这里输入 Markdown…',
    'tool.generating': '生成中…',
    'tool.downloadError': 'PDF 生成失败：{msg}。可改用「打印 / 另存为 PDF」按钮导出。',
    'tool.sample': `# MD→PDF Studio 示例

欢迎使用 **MD→PDF Studio**。在左侧输入 Markdown，右侧即可看到 A4 打印样式的实时预览。

## 快速开始

1. 在左侧编写 Markdown
2. 右侧自动渲染为纸张样式
3. 点击「打印 / 另存为 PDF」或「下载 PDF」

> 提示：本工具完全在浏览器本地运行，内容不会上传到任何服务器。

## 支持的语法

- **加粗**、*斜体*、\`行内代码\`
- [超链接](https://astro.build)
- 引用块、列表、表格

\`\`\`js
function hello(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

| 功能 | 说明 |
| --- | --- |
| 实时预览 | 边写边看 |
| 打印导出 | 浏览器原生，样式一致 |
| 一键下载 | html2pdf.js 生成 |

---

写完后，直接导出为 PDF 即可分享或归档。
`,

    'about.title': '关于 MD→PDF Studio',
    'about.body1':
      '**MD→PDF Studio** 是一个极简的在线工具：左侧写 Markdown，右侧实时预览 A4 打印样式，一键导出 PDF。所有处理都在你的浏览器本地完成，**内容不会上传到任何服务器**。',
    'about.features': '特点',
    'about.f1': '实时预览：边写边看，所见即所得。',
    'about.f2': '两种导出：浏览器原生打印（样式最准）+ 一键下载 PDF。',
    'about.f3': '隐私优先：纯前端，零上传。',
    'about.f4': '开源可自部署：源码托管在 GitHub，可一键部署到 Cloudflare Pages。',
    'about.oss': '开源与部署',
    'about.ossBody':
      '本项目完全开源，欢迎在 GitHub 查看源码、提交 Issue 或自行部署。博客系统的内容直接由仓库里的 Markdown 文件驱动，Push 即发布。',
    'about.backHome': '想试试工具？返回首页 →',
    'about.contact': '联系方式',
    'about.contactBody': '有问题或反馈？给我们发邮件：',

    'blog.title': '博客',
    'blog.subtitle': '关于 Markdown、PDF、静态站点与边缘部署的实战笔记。',
    'blog.published': '发布',
    'blog.back': '← 返回博客',
    'blog.by': '作者',
  },

  'zh-TW': {
    'nav.tool': '工具',
    'nav.blog': '部落格',
    'nav.about': '關於',
    'nav.github': 'GitHub',
    'lang.selectLabel': '語言',

    'footer.copy': '© {year} MD→PDF Studio · 純前端 Markdown 轉 PDF 工具',
    'footer.blog': '部落格',
    'footer.rss': 'RSS',
    'footer.github': 'GitHub',
    'footer.contact': '聯絡方式',

    'home.heroTitle': '極簡 Markdown 轉 PDF',
    'home.heroDesc':
      '左側書寫 Markdown，右側即時預覽 A4 列印樣式，一鍵匯出 PDF。純前端運行，內容不上傳，安全又隱私。',

    'home.keywords': 'Markdown 轉 PDF, 線上 Markdown 編輯器, PDF 匯出工具, 極簡寫作工具, 純前端隱私保護',

    'tool.loadSample': '載入範例',
    'tool.clear': '清空',
    'tool.bold': '粗體',
    'tool.italic': '斜體',
    'tool.heading': '標題',
    'tool.list': '清單',
    'tool.link': '連結',
    'tool.code': '程式碼',
    'tool.print': '列印 / 另存為 PDF',
    'tool.download': '下載 PDF',
    'tool.inputLabel': 'Markdown 輸入',
    'tool.previewLabel': 'PDF 預覽（A4）',
    'tool.inputPlaceholder': '在這裡輸入 Markdown…',
    'tool.generating': '生成中…',
    'tool.downloadError': 'PDF 生成失敗：{msg}。可改用「列印 / 另存為 PDF」按鈕匯出。',
    'tool.sample': `# MD→PDF Studio 範例

歡迎使用 **MD→PDF Studio**。在左側輸入 Markdown，右側即可看到 A4 列印樣式的即時預覽。

## 快速開始

1. 在左側撰寫 Markdown
2. 右側自動渲染為紙本樣式
3. 點擊「列印 / 另存為 PDF」或「下載 PDF」

> 提示：本工具完全在瀏覽器本機執行，內容不會上傳到任何伺服器。

## 支援的語法

- **粗體**、*斜體*、\`行內程式碼\`
- [超連結](https://astro.build)
- 引用區塊、清單、表格

\`\`\`js
function hello(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

| 功能 | 說明 |
| --- | --- |
| 即時預覽 | 邊寫邊看 |
| 列印匯出 | 瀏覽器原生，樣式一致 |
| 一鍵下載 | html2pdf.js 生成 |

---

寫完後，直接匯出為 PDF 即可分享或封存。
`,

    'about.title': '關於 MD→PDF Studio',
    'about.body1':
      '**MD→PDF Studio** 是一個極簡的線上工具：左側寫 Markdown，右側即時預覽 A4 列印樣式，一鍵匯出 PDF。所有處理都在你的瀏覽器本機完成，**內容不會上傳到任何伺服器**。',
    'about.features': '特點',
    'about.f1': '即時預覽：邊寫邊看，所見即所得。',
    'about.f2': '兩種匯出：瀏覽器原生列印（樣式最準）+ 一鍵下載 PDF。',
    'about.f3': '隱私優先：純前端，零上傳。',
    'about.f4': '開源可自部署：源碼託管在 GitHub，可一鍵部署到 Cloudflare Pages。',
    'about.oss': '開源與部署',
    'about.ossBody':
      '本專案完全開源，歡迎在 GitHub 查看源碼、提交 Issue 或自行部署。部落格系統的內容直接由倉庫裡的 Markdown 檔案驅動，Push 即發布。',
    'about.backHome': '想試試工具？返回首頁 →',
    'about.contact': '聯絡方式',
    'about.contactBody': '有問題或回饋？給我們發郵件：',

    'blog.title': '部落格',
    'blog.subtitle': '關於 Markdown、PDF、靜態站點與邊緣部署的實戰筆記。',
    'blog.published': '發布',
    'blog.back': '← 返回部落格',
    'blog.by': '作者',
  },

  pt: {
    'nav.tool': 'Ferramenta',
    'nav.blog': 'Blog',
    'nav.about': 'Sobre',
    'nav.github': 'GitHub',
    'lang.selectLabel': 'Idioma',

    'footer.copy': '© {year} MD→PDF Studio · Ferramenta Markdown para PDF no navegador',
    'footer.blog': 'Blog',
    'footer.rss': 'RSS',
    'footer.github': 'GitHub',
    'footer.contact': 'Contato',

    'home.heroTitle': 'Markdown para PDF, simples',
    'home.heroDesc':
      'Escreva Markdown à esquerda, veja a pré-visualização A4 à direita e exporte para PDF com um clique. Tudo no navegador — nada é enviado, totalmente privado.',

    'home.keywords': 'Markdown para PDF, Editor Markdown online, Ferramenta de exportação PDF, Ferramenta de escrita mínima, Frontend privado',

    'tool.loadSample': 'Carregar exemplo',
    'tool.clear': 'Limpar',
    'tool.bold': 'Negrito',
    'tool.italic': 'Itálico',
    'tool.heading': 'Título',
    'tool.list': 'Lista',
    'tool.link': 'Link',
    'tool.code': 'Código',
    'tool.print': 'Imprimir / Salvar como PDF',
    'tool.download': 'Baixar PDF',
    'tool.inputLabel': 'Entrada Markdown',
    'tool.previewLabel': 'Pré-visualização PDF (A4)',
    'tool.inputPlaceholder': 'Escreva seu Markdown aqui…',
    'tool.generating': 'Gerando…',
    'tool.downloadError':
      'Falha ao gerar o PDF: {msg}. Você pode usar o botão "Imprimir / Salvar como PDF".',
    'tool.sample': `# Demonstração do MD→PDF Studio

Bem-vindo ao **MD→PDF Studio**. Escreva Markdown à esquerda e veja a pré-visualização de impressão A4 ao vivo à direita.

## Início rápido

1. Escreva Markdown à esquerda
2. Renderiza ao vivo como um documento
3. Clique em "Imprimir / Salvar como PDF" ou "Baixar PDF"

> Dica: tudo é executado no seu navegador; nada é enviado.

## Sintaxe compatível

- **negrito**, *itálico*, \`código inline\`
- [links](https://astro.build)
- citações, listas, tabelas

\`\`\`js
function hello(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

| Recurso | Nota |
| --- | --- |
| Pré-visualização | Veja enquanto digita |
| Exportar | Nativo, preciso |
| Download | via html2pdf.js |

---

Ao terminar, exporte para PDF para compartilhar ou arquivar.
`,

    'about.title': 'Sobre o MD→PDF Studio',
    'about.body1':
      '**MD→PDF Studio** é uma ferramenta online mínima: escreva Markdown à esquerda, veja a pré-visualização A4 à direita e exporte para PDF com um clique. Tudo é executado localmente no seu navegador — **seu conteúdo nunca é enviado a nenhum servidor**.',
    'about.features': 'Recursos',
    'about.f1': 'Pré-visualização ao vivo: veja as alterações enquanto digita.',
    'about.f2':
      'Duas opções de exportação: impressão nativa do navegador (estilo mais preciso) e download de PDF com um clique.',
    'about.f3': 'Privacidade em primeiro lugar: frontend puro, zero envios.',
    'about.f4':
      'Código aberto e auto-hospedável: código no GitHub, implante no Cloudflare Pages com um clique.',
    'about.oss': 'Código aberto e implantação',
    'about.ossBody':
      'Este projeto é totalmente de código aberto. Visite o GitHub para ver o código-fonte, abrir issues ou implantar o seu. O conteúdo do blog é gerado por arquivos Markdown no repositório — push para publicar.',
    'about.backHome': 'Quer testar a ferramenta? Voltar ao início →',
    'about.contact': 'Contato',
    'about.contactBody': 'Dúvidas ou comentários? Fale conosco em',

    'blog.title': 'Blog',
    'blog.subtitle': 'Anotações práticas sobre Markdown, PDF, sites estáticos e implantação na edge.',
    'blog.published': 'Publicado',
    'blog.back': '← Voltar ao blog',
    'blog.by': 'por',
  },

  fr: {
    'nav.tool': 'Outil',
    'nav.blog': 'Blog',
    'nav.about': 'À propos',
    'nav.github': 'GitHub',
    'lang.selectLabel': 'Langue',

    'footer.copy': '© {year} MD→PDF Studio · Outil Markdown vers PDF côté navigateur',
    'footer.blog': 'Blog',
    'footer.rss': 'RSS',
    'footer.github': 'GitHub',
    'footer.contact': 'Contact',

    'home.heroTitle': 'Markdown vers PDF, minimal',
    'home.heroDesc':
      "Écrivez du Markdown à gauche, visualisez la mise en page A4 à droite et exportez en PDF en un clic. Tout s'exécute dans votre navigateur — rien n'est téléversé, totalement privé.",

    'home.keywords': "Markdown vers PDF, Éditeur Markdown en ligne, Outil d'export PDF, Outil d'écriture minimal, Frontend confidentiel",

    'tool.loadSample': "Charger un exemple",
    'tool.clear': 'Effacer',
    'tool.bold': 'Gras',
    'tool.italic': 'Italique',
    'tool.heading': 'Titre',
    'tool.list': 'Liste',
    'tool.link': 'Lien',
    'tool.code': 'Code',
    'tool.print': 'Imprimer / Enregistrer en PDF',
    'tool.download': 'Télécharger le PDF',
    'tool.inputLabel': 'Saisie Markdown',
    'tool.previewLabel': "Aperçu PDF (A4)",
    'tool.inputPlaceholder': 'Écrivez votre Markdown ici…',
    'tool.generating': 'Génération…',
    'tool.downloadError':
      'Échec de la génération du PDF : {msg}. Vous pouvez utiliser le bouton « Imprimer / Enregistrer en PDF ».',
    'tool.sample': `# Démo de MD→PDF Studio

Bienvenue sur **MD→PDF Studio**. Écrivez du Markdown à gauche et voyez l'aperçu d'impression A4 en direct à droite.

## Démarrage rapide

1. Écrivez du Markdown à gauche
2. Il s'affiche en direct comme un document
3. Cliquez sur « Imprimer / Enregistrer en PDF » ou « Télécharger le PDF »

> Astuce : tout s'exécute dans votre navigateur ; rien n'est téléversé.

## Syntaxe prise en charge

- **gras**, *italique*, \`code en ligne\`
- [liens](https://astro.build)
- citations, listes, tableaux

\`\`\`js
function hello(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

| Fonction | Note |
| --- | --- |
| Aperçu | Voyez en écrivant |
| Export | Natif, fidèle |
| Téléchargement | via html2pdf.js |

---

Une fois terminé, exportez en PDF pour partager ou archiver.
`,

    'about.title': 'À propos de MD→PDF Studio',
    'about.body1':
      "**MD→PDF Studio** est un outil en ligne minimal : écrivez du Markdown à gauche, visualisez la mise en page A4 à droite et exportez en PDF en un clic. Tout s'exécute localement dans votre navigateur — **votre contenu n'est jamais téléversé vers un serveur**.",
    'about.features': 'Fonctionnalités',
    'about.f1': "Aperçu en direct : voyez les changements en écrivant.",
    'about.f2':
      "Deux options d'export : impression native du navigateur (style le plus fidèle) et téléchargement PDF en un clic.",
    'about.f3': "Confidentialité d'abord : frontend pur, zéro téléversement.",
    'about.f4':
      "Open source et auto-hébergeable : code sur GitHub, déployez sur Cloudflare Pages en un clic.",
    'about.oss': 'Open source et déploiement',
    'about.ossBody':
      "Ce projet est entièrement open source. Visitez GitHub pour consulter le code source, ouvrir des issues ou déployer le vôtre. Le contenu du blog est généré par des fichiers Markdown du dépôt — push pour publier.",
    'about.backHome': "Envie de tester l'outil ? Retour à l'accueil →",
    'about.contact': 'Contact',
    'about.contactBody': 'Des questions ou des retours ? Écrivez-nous à',

    'blog.title': 'Blog',
    'blog.subtitle': "Notes pratiques sur Markdown, PDF, sites statiques et déploiement en edge.",
    'blog.published': 'Publié',
    'blog.back': '← Retour au blog',
    'blog.by': 'par',
  },

  de: {
    'nav.tool': 'Werkzeug',
    'nav.blog': 'Blog',
    'nav.about': 'Über',
    'nav.github': 'GitHub',
    'lang.selectLabel': 'Sprache',

    'footer.copy': '© {year} MD→PDF Studio · Markdown-zu-PDF-Tool im Browser',
    'footer.blog': 'Blog',
    'footer.rss': 'RSS',
    'footer.github': 'GitHub',
    'footer.contact': 'Kontakt',

    'home.heroTitle': 'Minimal: Markdown zu PDF',
    'home.heroDesc':
      'Schreiben Sie Markdown links, sehen Sie die A4-Druckvorschau rechts und exportieren Sie mit einem Klick als PDF. Alles läuft im Browser — nichts wird hochgeladen, völlig privat.',

    'home.keywords': 'Markdown zu PDF, Online Markdown Editor, PDF Export Tool, Minimales Schreibtool, Frontend ohne Upload',

    'tool.loadSample': 'Beispiel laden',
    'tool.clear': 'Leeren',
    'tool.bold': 'Fett',
    'tool.italic': 'Kursiv',
    'tool.heading': 'Überschrift',
    'tool.list': 'Liste',
    'tool.link': 'Link',
    'tool.code': 'Code',
    'tool.print': 'Drucken / Als PDF speichern',
    'tool.download': 'PDF herunterladen',
    'tool.inputLabel': 'Markdown-Eingabe',
    'tool.previewLabel': 'PDF-Vorschau (A4)',
    'tool.inputPlaceholder': 'Schreiben Sie hier Ihr Markdown…',
    'tool.generating': 'Wird erstellt…',
    'tool.downloadError':
      'PDF-Erzeugung fehlgeschlagen: {msg}. Sie können stattdessen den Button "Drucken / Als PDF speichern" nutzen.',
    'tool.sample': `# MD→PDF Studio Demo

Willkommen bei **MD→PDF Studio**. Schreiben Sie links Markdown und sehen Sie rechts die live A4-Druckvorschau.

## Schnellstart

1. Schreiben Sie links Markdown
2. Es wird live als Dokument gerendert
3. Klicken Sie auf "Drucken / Als PDF speichern" oder "PDF herunterladen"

> Tipp: alles läuft im Browser; nichts wird hochgeladen.

## Unterstützte Syntax

- **fett**, *kursiv*, \`Inline-Code\`
- [Links](https://astro.build)
- Zitate, Listen, Tabellen

\`\`\`js
function hello(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

| Funktion | Hinweis |
| --- | --- |
| Live-Vorschau | Sehen beim Schreiben |
| Druck-Export | Nativ, exakt |
| Download | via html2pdf.js |

---

Wenn Sie fertig sind, exportieren Sie als PDF zum Teilen oder Archivieren.
`,

    'about.title': 'Über MD→PDF Studio',
    'about.body1':
      '**MD→PDF Studio** ist ein minimales Online-Tool: Schreiben Sie Markdown links, sehen Sie die A4-Druckvorschau rechts und exportieren Sie mit einem Klick als PDF. Alles läuft lokal in Ihrem Browser — **Ihr Inhalt wird niemals auf einen Server hochgeladen**.',
    'about.features': 'Funktionen',
    'about.f1': 'Live-Vorschau: Änderungen beim Tippen sehen.',
    'about.f2':
      'Zwei Exportoptionen: nativer Browserdruck (genaueste Darstellung) und PDF-Download mit einem Klick.',
    'about.f3': 'Datenschutz zuerst: reines Frontend, kein Upload.',
    'about.f4':
      'Open Source und selbst hostbar: Code auf GitHub, mit einem Klick auf Cloudflare Pages bereitstellen.',
    'about.oss': 'Open source & Bereitstellung',
    'about.ossBody':
      'Dieses Projekt ist vollständig Open Source. Besuchen Sie GitHub, um den Quellcode anzusehen, Issues zu öffnen oder Ihre eigene Version bereitzustellen. Blog-Inhalte werden von Markdown-Dateien im Repository gesteuert — push zum Veröffentlichen.',
    'about.backHome': 'Die Tool ausprobieren? Zur Startseite →',
    'about.contact': 'Kontakt',
    'about.contactBody': 'Fragen oder Feedback? Schreiben Sie uns an',

    'blog.title': 'Blog',
    'blog.subtitle': 'Praktische Notizen zu Markdown, PDF, statischen Seiten und Edge-Deployment.',
    'blog.published': 'Veröffentlicht',
    'blog.back': '← Zurück zum Blog',
    'blog.by': 'von',
  },

  ja: {
    'nav.tool': 'ツール',
    'nav.blog': 'ブログ',
    'nav.about': 'について',
    'nav.github': 'GitHub',
    'lang.selectLabel': '言語',

    'footer.copy': '© {year} MD→PDF Studio · ブラウザ完結型 Markdown から PDF へ',
    'footer.blog': 'ブログ',
    'footer.rss': 'RSS',
    'footer.github': 'GitHub',
    'footer.contact': 'お問い合わせ',

    'home.heroTitle': 'シンプルな Markdown から PDF へ',
    'home.heroDesc':
      '左に Markdown を書き、右に A4 印刷レイアウトをプレビューし、ワンクリックで PDF に書き出し。すべてブラウザ内で動作し、アップロードはなく完全にプライベート。',

    'home.keywords': 'Markdown から PDF, オンライン Markdown エディタ, PDF 書き出しツール, ミニマル執筆ツール, プライベート優先',

    'tool.loadSample': 'サンプルを読み込む',
    'tool.clear': 'クリア',
    'tool.bold': '太字',
    'tool.italic': '斜体',
    'tool.heading': '見出し',
    'tool.list': 'リスト',
    'tool.link': 'リンク',
    'tool.code': 'コード',
    'tool.print': '印刷 / PDF として保存',
    'tool.download': 'PDF をダウンロード',
    'tool.inputLabel': 'Markdown 入力',
    'tool.previewLabel': 'PDF プレビュー (A4)',
    'tool.inputPlaceholder': 'ここに Markdown を入力…',
    'tool.generating': '生成中…',
    'tool.downloadError':
      'PDF の生成に失敗しました: {msg}。「印刷 / PDF として保存」ボタンをお使いください。',
    'tool.sample': `# MD→PDF Studio デモ

**MD→PDF Studio** へようこそ。左側に Markdown を入力すると、右側に A4 印刷プレビューがリアルタイムで表示されます。

## クイックスタート

1. 左側に Markdown を書く
2. 右側に用紙レイアウトとしてリアルタイム表示
3. 「印刷 / PDF として保存」または「PDF をダウンロード」をクリック

> ヒント：すべてブラウザ内で実行され、アップロードはされません。

## 対応構文

- **太字**、*斜体*、\`インラインコード\`
- [リンク](https://astro.build)
- 引用、リスト、表

\`\`\`js
function hello(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

| 機能 | 説明 |
| --- | --- |
| リアルタイムプレビュー | 入力しながら確認 |
| 印刷書き出し | ネイティブで正確 |
| ワンクリック保存 | html2pdf.js 利用 |

---

完成したら、PDF に書き出して共有や保存ができます。
`,

    'about.title': 'MD→PDF Studio について',
    'about.body1':
      '**MD→PDF Studio** は最小限のオンラインツールです。左に Markdown を書き、右に A4 印刷レイアウトをプレビューし、ワンクリックで PDF に書き出せます。すべてブラウザ内でローカルに実行され、**コンテンツがサーバーにアップロードされることはありません**。',
    'about.features': '機能',
    'about.f1': 'リアルタイムプレビュー：入力しながら確認。',
    'about.f2':
      '2 つの書き出し方法：ブラウザネイティブ印刷（最も正確なスタイル）とワンクリック PDF ダウンロード。',
    'about.f3': 'プライバシー最優先：純フロントエンド、アップロードなし。',
    'about.f4':
      'オープンソースでセルフホスト可能：コードは GitHub にあり、Cloudflare Pages へワンクリック展開。',
    'about.oss': 'オープンソースと展開',
    'about.ossBody':
      '本プロジェクトは完全にオープンソースです。GitHub でソースを確認したり、Issue を開いたり、自分で展開したりできます。ブログの内容はリポジトリ内の Markdown ファイルで管理され、push で公開されます。',
    'about.backHome': 'ツールを試しますか？ ホームへ →',
    'about.contact': 'お問い合わせ',
    'about.contactBody': 'ご質問やフィードバックはこちらまで',

    'blog.title': 'ブログ',
    'blog.subtitle': 'Markdown、PDF、静的サイト、エッジ展開に関する実践ノート。',
    'blog.published': '公開',
    'blog.back': '← ブログへ戻る',
    'blog.by': '著',
  },

  ru: {
    'nav.tool': 'Инструмент',
    'nav.blog': 'Блог',
    'nav.about': 'О проекте',
    'nav.github': 'GitHub',
    'lang.selectLabel': 'Язык',

    'footer.copy': '© {year} MD→PDF Studio · Инструмент Markdown в PDF в браузере',
    'footer.blog': 'Блог',
    'footer.rss': 'RSS',
    'footer.github': 'GitHub',
    'footer.contact': 'Контакт',

    'home.heroTitle': 'Простой Markdown в PDF',
    'home.heroDesc':
      'Пишите Markdown слева, смотрите A4-превью справа и экспортируйте в PDF в один клик. Всё работает в браузере — ничего не загружается, полная приватность.',

    'home.keywords': 'Markdown в PDF, Онлайн редактор Markdown, Инструмент экспорта PDF, Минимальный инструмент, Приватный фронтенд',

    'tool.loadSample': 'Загрузить пример',
    'tool.clear': 'Очистить',
    'tool.bold': 'Жирный',
    'tool.italic': 'Курсив',
    'tool.heading': 'Заголовок',
    'tool.list': 'Список',
    'tool.link': 'Ссылка',
    'tool.code': 'Код',
    'tool.print': 'Печать / Сохранить как PDF',
    'tool.download': 'Скачать PDF',
    'tool.inputLabel': 'Ввод Markdown',
    'tool.previewLabel': 'Предпросмотр PDF (A4)',
    'tool.inputPlaceholder': 'Введите свой Markdown здесь…',
    'tool.generating': 'Создание…',
    'tool.downloadError':
      'Не удалось создать PDF: {msg}. Воспользуйтесь кнопкой «Печать / Сохранить как PDF».',
    'tool.sample': `# Демонстрация MD→PDF Studio

Добро пожаловать в **MD→PDF Studio**. Пишите Markdown слева и видьте живое A4-превью справа.

## Быстрый старт

1. Пишите Markdown слева
2. Он отображается в виде документа в реальном времени
3. Нажмите «Печать / Сохранить как PDF» или «Скачать PDF»

> Совет: всё работает в вашем браузере; ничего не загружается.

## Поддерживаемый синтаксис

- **жирный**, *курсив*, \`встроенный код\`
- [ссылки](https://astro.build)
- цитаты, списки, таблицы

\`\`\`js
function hello(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

| Возможность | Примечание |
| --- | --- |
| Живое превью | Видно по мере ввода |
| Печать | Нативно, точно |
| Скачивание | через html2pdf.js |

---

Когда закончите, экспортируйте в PDF для обмена или архива.
`,

    'about.title': 'О MD→PDF Studio',
    'about.body1':
      '**MD→PDF Studio** — минимальный онлайн-инструмент: пишите Markdown слева, смотрите A4-превью справа и экспортируйте в PDF в один клик. Всё работает локально в вашем браузере — **ваш контент никогда не загружается на сервер**.',
    'about.features': 'Возможности',
    'about.f1': 'Живое превью: видно по мере ввода.',
    'about.f2':
      'Два варианта экспорта: нативная печать браузером (точнее всего) и загрузка PDF в один клик.',
    'about.f3': 'Приватность прежде всего: чистый фронтенд, без загрузок.',
    'about.f4':
      'Открытый исходный код и возможность самостоятельного размещения: код на GitHub, развёртывание на Cloudflare Pages в один клик.',
    'about.oss': 'Открытый код и развёртывание',
    'about.ossBody':
      'Проект полностью открытый. Заходите на GitHub, чтобы посмотреть исходный код, открыть issues или развернуть свой. Контент блога формируется из Markdown-файлов репозитория — push публикует.',
    'about.backHome': 'Хотите попробовать инструмент? На главную →',
    'about.contact': 'Контакт',
    'about.contactBody': 'Вопросы или отзывы? Напишите нам на',

    'blog.title': 'Блог',
    'blog.subtitle': 'Практические заметки о Markdown, PDF, статических сайтах и edge-деплое.',
    'blog.published': 'Опубликовано',
    'blog.back': '← Назад в блог',
    'blog.by': 'автор',
  },

  ko: {
    'nav.tool': '도구',
    'nav.blog': '블로그',
    'nav.about': '소개',
    'nav.github': 'GitHub',
    'lang.selectLabel': '언어',

    'footer.copy': '© {year} MD→PDF Studio · 브라우저 기반 Markdown → PDF 도구',
    'footer.blog': '블로그',
    'footer.rss': 'RSS',
    'footer.github': 'GitHub',
    'footer.contact': '문의',

    'home.heroTitle': '심플한 Markdown → PDF',
    'home.heroDesc':
      '왼쪽에 Markdown을 작성하고, 오른쪽에서 A4 인쇄 레이아웃을 미리보며, 클릭 한 번으로 PDF를 내보내세요. 모든 것이 브라우저에서 실행되어 업로드 없이 완전히 비공개입니다.',

    'home.keywords': 'Markdown → PDF, 온라인 Markdown 편집기, PDF 내보내기 도구, 미니멀 작성 도구, 개인정보 우선',

    'tool.loadSample': '샘플 불러오기',
    'tool.clear': '지우기',
    'tool.bold': '굵게',
    'tool.italic': '기울임',
    'tool.heading': '제목',
    'tool.list': '목록',
    'tool.link': '링크',
    'tool.code': '코드',
    'tool.print': '인쇄 / PDF로 저장',
    'tool.download': 'PDF 다운로드',
    'tool.inputLabel': 'Markdown 입력',
    'tool.previewLabel': 'PDF 미리보기 (A4)',
    'tool.inputPlaceholder': '여기에 Markdown을 입력하세요…',
    'tool.generating': '생성 중…',
    'tool.downloadError':
      'PDF 생성 실패: {msg}. 대신 "인쇄 / PDF로 저장" 버튼을 사용하세요.',
    'tool.sample': `# MD→PDF Studio 데모

**MD→PDF Studio**에 오신 것을 환영합니다. 왼쪽에 Markdown을 입력하면 오른쪽에 A4 인쇄 미리보기가 실시간으로 표시됩니다.

## 빠른 시작

1. 왼쪽에 Markdown 작성
2. 오른쪽에 문서 레이아웃으로 실시간 렌더링
3. "인쇄 / PDF로 저장" 또는 "PDF 다운로드" 클릭

> 팁: 모든 작업이 브라우저에서 실행되며 업로드되지 않습니다.

## 지원 구문

- **굵게**, *기울임*, \`인라인 코드\`
- [링크](https://astro.build)
- 인용, 목록, 표

\`\`\`js
function hello(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

| 기능 | 설명 |
| --- | --- |
| 실시간 미리보기 | 입력하면서 확인 |
| 인쇄 내보내기 | 네이티브, 정확함 |
| 원클릭 다운로드 | html2pdf.js 사용 |

---

완료되면 PDF로 내보내 공유하거나 보관하세요.
`,

    'about.title': 'MD→PDF Studio 소개',
    'about.body1':
      '**MD→PDF Studio**는 심플한 온라인 도구입니다. 왼쪽에 Markdown을 작성하고, 오른쪽에서 A4 인쇄 레이아웃을 미리보며, 클릭 한 번으로 PDF를 내보낼 수 있습니다. 모든 작업이 브라우저에서 로컬로 실행되며 **내용이 서버에 업로드되지 않습니다**.',
    'about.features': '기능',
    'about.f1': '실시간 미리보기: 입력하면서 확인.',
    'about.f2':
      '두 가지 내보내기: 브라우저 네이티브 인쇄(가장 정확한 스타일)와 원클릭 PDF 다운로드.',
    'about.f3': '개인정보 우선: 순수 프론트엔드, 업로드 없음.',
    'about.f4':
      '오픈 소스 및 셀프 호스팅 가능: 코드는 GitHub에 있으며 Cloudflare Pages에 원클릭 배포.',
    'about.oss': '오픈 소스 및 배포',
    'about.ossBody':
      '이 프로젝트는 완전히 오픈 소스입니다. GitHub에서 소스를 보거나 이슈를 열거나 직접 배포하세요. 블로그 콘텐츠는 저장소의 Markdown 파일로 관리되며 push하면 게시됩니다.',
    'about.backHome': '도구를 사용해 보시겠어요? 홈으로 →',
    'about.contact': '문의',
    'about.contactBody': '질문이나 피드백이 있으신가요? 이메일로 연락하세요:',

    'blog.title': '블로그',
    'blog.subtitle': 'Markdown, PDF, 정적 사이트, 엣지 배포에 관한 실전 노트.',
    'blog.published': '게시',
    'blog.back': '← 블로그로 돌아가기',
    'blog.by': '작성자',
  },
};

export function getLang(): LangCode {
  if (typeof localStorage === 'undefined') return DEFAULT_LANG;
  const saved = localStorage.getItem('mps-lang') as LangCode | null;
  if (saved && translations[saved]) return saved;
  return DEFAULT_LANG;
}

export function t(key: string, lang: LangCode = getLang()): string {
  return translations[lang]?.[key] ?? translations[DEFAULT_LANG]?.[key] ?? key;
}
