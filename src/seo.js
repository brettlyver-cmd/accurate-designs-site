import { SITE_URL, ROUTES } from "./seo-data.js";
import { structuredData } from "./structured-data.js";
export { SITE_URL, ROUTES } from "./seo-data.js";

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
}

function upsertCanonical(href) {
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", href);
}

function applySeo({ track = false } = {}) {
  const path = normalizePath(window.location.pathname);
  const route = ROUTES[path];
  const knownRoute = Boolean(route);
  const seo = route || ROUTES["/"];
  const canonicalPath = knownRoute ? path : "/";
  const canonicalUrl = `${SITE_URL}${canonicalPath === "/" ? "/" : canonicalPath}`;

  let schema = document.head.querySelector('#accurate-structured-data');
  if (!schema || schema.dataset.path !== path) {
    if (!schema) {
      schema = document.createElement('script');
      schema.id = 'accurate-structured-data';
      schema.type = 'application/ld+json';
      document.head.appendChild(schema);
    }
    const data = structuredData(path);
    schema.textContent = data ? JSON.stringify(data) : '';
    schema.dataset.path = path;
  }

  document.title = seo.title;
  upsertMeta('meta[name="description"]', { name: "description", content: seo.description });
  upsertMeta('meta[property="og:title"]', { property: "og:title", content: seo.title });
  upsertMeta('meta[property="og:description"]', { property: "og:description", content: seo.description });
  upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
  upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: seo.title });
  upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: seo.description });
  upsertMeta('meta[name="robots"]', {
    name: "robots",
    content: knownRoute ? "index,follow" : "noindex,follow",
  });
  upsertCanonical(canonicalUrl);

  if (track && window.gtag) {
    window.gtag("event", "page_view", {
      page_title: seo.title,
      page_location: window.location.href,
      page_path: path,
    });
  }
}

export function initSeo() {
  applySeo();

  const originalPushState = window.history.pushState.bind(window.history);
  const originalReplaceState = window.history.replaceState.bind(window.history);

  window.history.pushState = (...args) => {
    originalPushState(...args);
    applySeo({ track: true });
  };

  window.history.replaceState = (...args) => {
    originalReplaceState(...args);
    applySeo();
  };

  window.addEventListener("popstate", () => applySeo({ track: true }));
}
