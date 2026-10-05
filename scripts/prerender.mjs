import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { render, ROUTES, SITE_URL, structuredData } from '../dist-ssr/prerender.js';

const template = await readFile('dist/index.html', 'utf8');
if (!template.includes('<div id="root"></div>')) throw new Error('Run a fresh Vite build before prerendering.');
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const plainText = (html) => html.replace(/<[^>]*>/g, '').replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16))).replace(/&#([0-9]+);/g, (_, code) => String.fromCodePoint(Number(code))).replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&nbsp;', ' ').replace(/\s+/g, ' ').trim();
for (const [path, seo] of Object.entries(ROUTES)) {
  const canonical = `${SITE_URL}${path}`;
  let html = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(seo.title)}</title>`);
  const tags = {
    'name="description"': seo.description,
    'property="og:title"': seo.title,
    'property="og:description"': seo.description,
    'property="og:url"': canonical,
    'name="twitter:title"': seo.title,
    'name="twitter:description"': seo.description,
  };
  for (const [attribute, content] of Object.entries(tags)) {
    const pattern = new RegExp(`<meta\\s+${attribute}\\s+content="[^"]*"\\s*\\/?>`);
    if (!pattern.test(html)) throw new Error(`Missing metadata: ${attribute}`);
    html = html.replace(pattern, `<meta ${attribute} content="${escape(content)}" />`);
  }
  html = html.replace('</head>', `<link rel="canonical" href="${canonical}" /><meta name="robots" content="index,follow" /><noscript><style>#root [style*="opacity:0;"]{opacity:1!important;transform:none!important}</style></noscript></head>`);
  const body = render(path);
  const faqs = [...body.matchAll(/<details\b[^>]*>\s*<summary\b[^>]*>([\s\S]*?)<\/summary>\s*<p\b[^>]*>([\s\S]*?)<\/p>\s*<\/details>/g)].map((match) => [plainText(match[1]), plainText(match[2])]);
  const schema = JSON.stringify(structuredData(path, { faqs })).replaceAll('<', '\\u003c');
  html = html.replace('</head>', () => `<script id="accurate-structured-data" data-path="${path}" type="application/ld+json">${schema}</script></head>`);
  html = html.replace('<div id="root"></div>', () => `<div id="root">${body}</div>`);
  const output = path === '/' ? 'dist/index.html' : `dist${path}.html`;
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html);
  console.log(`Prerendered ${path}`);
}
