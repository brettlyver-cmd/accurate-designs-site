import { readFile, writeFile } from 'node:fs/promises';
import { render, ROUTES, SITE_URL } from '../dist-ssr/prerender.js';

const template = await readFile('dist/index.html', 'utf8');
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
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
  html = html.replace('<div id="root"></div>', () => `<div id="root">${render(path)}</div>`);
  await writeFile(path === '/' ? 'dist/index.html' : `dist${path}.html`, html);
  console.log(`Prerendered ${path}`);
}
