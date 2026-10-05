# Search and AI retrieval implementation

`npm run build` builds the Vite client, renders the existing React pages at build time, generates route-specific metadata and JSON-LD, and validates the resulting HTML. No server runtime or framework migration is needed.

## Sources of truth

- `src/seo-data.js`: canonical routes, titles and descriptions.
- `src/projects.js`: existing published project descriptions and photographs, shared by portfolio and case-study pages.
- `src/structured-data.js`: business, founder, website, services, breadcrumbs, case-study articles and portfolio list. Business name, address, telephone and founding year reflect the published website. The project count remains 500+.
- FAQ schema is extracted from the rendered, visible questions and answers; client navigation synchronizes it after the new page renders.
- `public/sitemap.xml` and `public/llms.txt`: canonical page references. The build checks both against the route list.

Vercel `cleanUrls` serves generated `.html` files at extensionless URLs. Nested case studies are written beneath `dist/case-studies/`. Existing redirects, security headers, robots policy and asset caching are retained. Unknown URLs receive the host's 404 instead of a homepage soft 404.

The existing client rendering lifecycle is retained. React mounts the interactive application after loading; this deliberately avoids introducing hydration alongside the existing DOM-mutating Kingsway video script. JavaScript-free readers get the full static page; a scoped noscript rule reveals the existing fade-in wrappers. Interactive features, contact submission and analytics consent still require JavaScript.

## Validation

The build verifies all 17 routes, their headings and main landmarks, metadata, canonical tags, linked JSON-LD references, FAQ coverage, case-study article data, image asset paths, contact fields, sitemap and llms references. A successful build establishes technical HTML coverage, not search-engine indexing or rankings.

No review ratings, professional credentials, project dates, social profile URLs or opening hours have been inferred. Add those only when verified. Do not change the public project count to 800+ without confirmation.

## Account-dependent follow-up

Submit or confirm `https://www.accuratedesigns.ca/sitemap.xml` in Google Search Console and inspect/request indexing for the key service and case-study URLs. Google controls crawl timing and indexing decisions. Align directory profiles with the business's confirmed name, contact details and residential design/build positioning. Directory changes require the relevant account access.
