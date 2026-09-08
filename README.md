# Accurate Designs Website

Production website for Accurate Designs Inc., built with React and Vite and deployed on Vercel.

## Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run build
npm run lint
```

## Deployment

The `main` branch is connected to the production Vercel project. Feature work should be completed on a branch and validated through a Vercel preview deployment before merging to `main`.

## Primary routes

- `/`
- `/services`
- `/portfolio`
- `/process`
- `/owner-rep`
- `/about`
- `/contact`

SEO metadata is initialized in `src/seo.js`. Legacy URL redirects and SPA rewrites are configured in `vercel.json`.
