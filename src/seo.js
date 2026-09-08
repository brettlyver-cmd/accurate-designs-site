const SITE_URL = "https://www.accuratedesigns.ca";

const ROUTES = {
  "/": {
    title: "Accurate Designs | Custom Homes, Additions & Major Renovations",
    description:
      "Accurate Designs provides construction-aware residential design, design-build and owner representation for custom homes, additions and major renovations across the GTA.",
  },
  "/services": {
    title: "Custom Home Design & Build Services | Accurate Designs",
    description:
      "Custom home design-build, major additions and renovations, permit-ready documentation and pre-design feasibility services across the Greater Toronto Area.",
  },
  "/custom-home-design-build": {
    title: "Custom Home Design + Build GTA | Accurate Designs",
    description:
      "Construction-aware custom home design and design-build services across the GTA, with feasibility, coordinated design, permits and build readiness aligned early.",
  },
  "/major-additions-renovations": {
    title: "Major Home Additions & Renovations GTA | Accurate Designs",
    description:
      "Design and planning for major home additions, second-storey additions and structural renovations across the GTA, coordinated for permits and construction.",
  },
  "/pre-design-feasibility": {
    title: "Lot & Pre-Design Feasibility GTA | Accurate Designs",
    description:
      "Pre-design feasibility and lot review for GTA custom homes and major renovations, including zoning, site constraints, approvals and early project alignment.",
  },
  "/second-storey-addition": {
    title: "Second-Storey Addition Design GTA | Accurate Designs",
    description:
      "Planning a second-storey addition in Toronto or the GTA? Accurate Designs coordinates zoning, existing structure, systems and permit requirements before construction.",
  },
  "/committee-of-adjustment": {
    title: "Committee of Adjustment & Minor Variance GTA | Accurate Designs",
    description:
      "Residential design and planning for GTA projects that may require Committee of Adjustment or minor variance approval, with zoning and design issues resolved early.",
  },
  "/portfolio": {
    title: "Custom Home Portfolio | Accurate Designs",
    description:
      "Explore custom homes, additions and major renovations designed with structure, cost, code and construction coordinated from the beginning.",
  },
  "/process": {
    title: "Residential Design-Build Process | Accurate Designs",
    description:
      "See how Accurate Designs resolves feasibility, design, permits and build readiness early to create clearer residential projects with fewer surprises on site.",
  },
  "/owner-rep": {
    title: "Owner Representation for Custom Homes | Accurate Designs",
    description:
      "Independent, technically informed owner representation for custom homes and major residential projects across the GTA, from pre-construction through the build.",
  },
  "/about": {
    title: "About Accurate Designs | Residential Design-Build GTA",
    description:
      "Accurate Designs has provided construction-aware residential design across the GTA since 2000, with more than 500 residential projects completed or designed.",
  },
  "/contact": {
    title: "Book a Project Consultation | Accurate Designs",
    description:
      "Discuss your custom home, addition, major renovation, feasibility review or owner representation needs with Accurate Designs in the Greater Toronto Area.",
  },
};

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
