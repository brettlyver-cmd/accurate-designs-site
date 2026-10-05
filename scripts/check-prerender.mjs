import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { ROUTES, SITE_URL } from '../dist-ssr/prerender.js';

const sitemap = await readFile('public/sitemap.xml', 'utf8');
assert.deepEqual([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname).sort(), Object.keys(ROUTES).sort());
const headings = new Set();
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
for (const path of Object.keys(ROUTES)) {
  const html = await readFile(path === '/' ? 'dist/index.html' : `dist${path}.html`, 'utf8');
  assert(!html.includes('<div id="root"></div>'), `${path}: empty root`);
  const heading = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1];
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path}: exactly one main heading`);
  assert(html.includes('<main>'), `${path}: main landmark`);
  assert(heading, `${path}: missing page heading`);
  headings.add(heading);
  assert(html.includes(`href="${SITE_URL}${path}"`), `${path}: canonical`);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
  assert(html.includes('name="robots" content="index,follow"'));
  assert(html.includes(`<title>${escape(ROUTES[path].title)}</title>`), `${path}: route title`);
  assert(html.includes(`name="description" content="${escape(ROUTES[path].description)}"`), `${path}: route description`);
  const blocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  assert.equal(blocks.length, 1, `${path}: one linked schema graph`);
  const graph = JSON.parse(blocks[0][1])['@graph'];
  const ids = new Set(graph.map((node) => node['@id']));
  assert.equal(ids.size, graph.length, `${path}: unique entity IDs`);
  function checkReferences(value) {
    if (!value || typeof value !== 'object') return;
    if (Object.keys(value).length === 1 && value['@id']) assert(ids.has(value['@id']), `${path}: unresolved entity ${value['@id']}`);
    Object.values(value).forEach(checkReferences);
  }
  graph.forEach(checkReferences);
  const business = graph.find((node) => node['@type'] === 'HomeAndConstructionBusiness');
  assert.equal(business.legalName, 'Accurate Designs Inc.');
  assert.equal(business.foundingDate, '2000');
  assert.equal(graph.filter((node) => node['@type'] === 'Service').length, 6);
  assert(graph.some((node) => node['@type'] === 'Person' && node.name === 'Brett Lyver'));
  assert(!html.includes('ProfessionalService'));
  if (path.startsWith('/case-studies/')) {
    assert(graph.some((node) => node['@type'] === 'Article'));
    assert(html.includes('The Challenge') && html.includes('The Result'));
  }
  const detailsCount = (html.match(/<details\b/g) || []).length;
  if (detailsCount) assert.equal(graph.find((node) => node['@type'] === 'FAQPage')?.mainEntity.length, detailsCount, `${path}: FAQ text coverage`);
  for (const match of html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g)) {
    await readFile(`dist${decodeURIComponent(match[1])}`);
  }
}
assert(headings.size >= 12, 'Routes must render their own content');
const contact = await readFile('dist/contact.html', 'utf8');
assert(contact.includes('field-email') && contact.includes('field-how-did-you-first-hear-about-us-'), 'Contact fields must survive prerendering');
const config = JSON.parse(await readFile('vercel.json', 'utf8'));
assert.equal(config.cleanUrls, true);
assert(!config.rewrites, 'Catch-all rewrite must not shadow generated pages');
const llms = await readFile('dist/llms.txt', 'utf8');
for (const path of Object.keys(ROUTES)) assert(llms.includes(`${SITE_URL}${path}`), `${path}: llms reference`);
await readFile('dist/Logo.png');
await readFile('dist/og-image.webp');
console.log(`Verified all ${Object.keys(ROUTES).length} routes: content, metadata, schema, sitemap and routing.`);
