import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { ROUTES, SITE_URL } from '../dist-ssr/prerender.js';

const sitemap = await readFile('public/sitemap.xml', 'utf8');
assert.deepEqual([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname).sort(), Object.keys(ROUTES).sort());
const headings = new Set();
for (const path of Object.keys(ROUTES)) {
  const html = await readFile(path === '/' ? 'dist/index.html' : `dist${path}.html`, 'utf8');
  assert(!html.includes('<div id="root"></div>'), `${path}: empty root`);
  const heading = html.match(/<h[12]\b[^>]*>([\s\S]*?)<\/h[12]>/)?.[1];
  assert(heading, `${path}: missing page heading`);
  headings.add(heading);
  assert(html.includes(`href="${SITE_URL}${path}"`), `${path}: canonical`);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
  assert(html.includes('name="robots" content="index,follow"'));
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
}
assert(headings.size >= 12, 'Routes must render their own content');
const contact = await readFile('dist/contact.html', 'utf8');
assert(contact.includes('field-email') && contact.includes('field-how-did-you-first-hear-about-us-'), 'Contact fields must survive prerendering');
const config = JSON.parse(await readFile('vercel.json', 'utf8'));
assert.equal(config.cleanUrls, true);
assert(!config.rewrites, 'Catch-all rewrite must not shadow generated pages');
console.log(`Verified all ${Object.keys(ROUTES).length} routes: content, metadata, schema, sitemap and routing.`);
