import { ROUTES, SITE_URL } from './seo-data.js';
import { PROJECTS } from './projects.js';

const businessId = `${SITE_URL}/#business`;
const founderId = `${SITE_URL}/#brett-lyver`;
const websiteId = `${SITE_URL}/#website`;
const areaServed = ['Mississauga', 'Oakville', 'Burlington', 'Milton', 'Toronto', 'Greater Toronto Area'];
export const SERVICES = {
  '/custom-home-design-build': 'Custom Home Design + Build',
  '/major-additions-renovations': 'Major Additions + Renovations',
  '/pre-design-feasibility': 'Pre-Design Feasibility',
  '/second-storey-addition': 'Second-Storey Addition Planning',
  '/committee-of-adjustment': 'Committee of Adjustment + Minor Variance Planning',
  '/owner-rep': 'Owner Representation',
};

export function structuredData(path, { faqs = [] } = {}) {
  const seo = ROUTES[path];
  if (!seo) return null;
  const url = `${SITE_URL}${path}`;
  const serviceEntries = Object.entries(SERVICES).map(([route, name]) => ({
    '@type': 'Service', '@id': `${SITE_URL}${route}#service`,
    name, serviceType: name, description: ROUTES[route].description,
    url: `${SITE_URL}${route}`, provider: { '@id': businessId }, areaServed,
  }));
  const project = PROJECTS.find((p) => path === `/case-studies/${p.id}`);
  const pageType = path === '/about' ? 'AboutPage' : path === '/contact' ? 'ContactPage' : path === '/portfolio' ? 'CollectionPage' : 'WebPage';
  const page = {
    '@type': pageType, '@id': `${url}#webpage`, url,
    name: seo.title, description: seo.description, inLanguage: 'en-CA',
    isPartOf: { '@id': websiteId }, about: { '@id': businessId },
    ...(SERVICES[path] ? { mainEntity: { '@id': `${url}#service` } } : {}),
    ...(project ? { mainEntity: { '@id': `${url}#case-study` } } : {}),
    ...(path !== '/' ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
  };
  const graph = [
    {
      '@type': 'HomeAndConstructionBusiness', '@id': businessId,
      name: 'Accurate Designs', legalName: 'Accurate Designs Inc.',
      url: `${SITE_URL}/`, logo: `${SITE_URL}/Logo.png`, image: `${SITE_URL}/og-image.webp`,
      description: 'Construction-aware residential design, design-build and owner representation across the Greater Toronto Area. Founded in 2000, with more than 800 residential projects completed or designed.',
      foundingDate: '2000', founder: { '@id': founderId },
      telephone: '+1-416-768-1290', email: 'blyver@accuratedesigns.ca',
      address: { '@type': 'PostalAddress', streetAddress: '1215 Queensway E, Unit 56', addressLocality: 'Mississauga', addressRegion: 'ON', postalCode: 'L4Y 0G4', addressCountry: 'CA' },
      areaServed: areaServed.map((name) => ({ '@type': name === 'Greater Toronto Area' ? 'AdministrativeArea' : 'City', name })),
      knowsAbout: ['Custom home design', 'Design-build', 'Residential additions and renovations', 'Second-storey additions', 'Committee of Adjustment and minor variance applications', 'Pre-design feasibility and zoning review', 'Owner representation', 'Building permit documentation'],
      contactPoint: { '@type': 'ContactPoint', telephone: '+1-416-768-1290', email: 'blyver@accuratedesigns.ca', contactType: 'Project inquiries', url: `${SITE_URL}/contact` },
      hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Residential Design and Build Services', itemListElement: serviceEntries.map((service) => ({ '@type': 'Offer', itemOffered: { '@id': service['@id'] } })) },
    },
    { '@type': 'Person', '@id': founderId, name: 'Brett Lyver', jobTitle: 'Founder + Principal', url: `${SITE_URL}/about`, worksFor: { '@id': businessId } },
    { '@type': 'WebSite', '@id': websiteId, url: `${SITE_URL}/`, name: 'Accurate Designs', publisher: { '@id': businessId }, inLanguage: 'en-CA' },
    page,
    ...serviceEntries,
  ];
  if (path !== '/') {
    const items = [{ name: 'Home', item: `${SITE_URL}/` }];
    if (project) items.push({ name: 'Portfolio', item: `${SITE_URL}/portfolio` });
    items.push({ name: project?.name || SERVICES[path] || seo.title.split(' | ')[0], item: url });
    graph.push({ '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, ...item })) });
  }
  if (project) {
    graph.push({
      '@type': 'Article', '@id': `${url}#case-study`, headline: project.name,
      description: seo.description, url, inLanguage: 'en-CA',
      mainEntityOfPage: { '@id': `${url}#webpage` }, publisher: { '@id': businessId },
      author: { '@id': businessId },
      image: project.images.map((image) => new URL(image, SITE_URL).href),
      articleSection: project.type,
      articleBody: `${project.challenge}\n\n${project.solution}\n\n${project.result}`,
      contentLocation: { '@type': 'Place', name: `${project.location}, Ontario, Canada` },
      about: { '@type': 'Thing', name: project.lens },
    });
  }
  if (path === '/portfolio') {
    graph.push({ '@type': 'ItemList', '@id': `${url}#projects`, name: 'Residential Project Case Studies', itemListElement: PROJECTS.map((p, index) => ({ '@type': 'ListItem', position: index + 1, name: p.name, url: `${SITE_URL}/case-studies/${p.id}` })) });
    page.mainEntity = { '@id': `${url}#projects` };
  }
  if (faqs.length) {
    graph.push({ '@type': 'FAQPage', '@id': `${url}#faq`, isPartOf: { '@id': `${url}#webpage` }, mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

export function syncPageStructuredData(path) {
  const faqs = Array.from(document.querySelectorAll('main details')).map((details) => [
    details.querySelector('summary')?.textContent.trim(),
    details.querySelector('p')?.textContent.trim(),
  ]).filter(([question, answer]) => question && answer);
  let script = document.getElementById('accurate-structured-data');
  if (!script) {
    script = document.createElement('script');
    script.id = 'accurate-structured-data';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  const data = structuredData(path, { faqs });
  script.textContent = data ? JSON.stringify(data) : '';
  script.dataset.path = path;
}
