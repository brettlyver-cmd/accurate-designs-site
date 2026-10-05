import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export { ROUTES, SITE_URL } from './seo-data.js';
export function render(path) {
  return renderToString(<App initialPath={path} />);
}

export { structuredData } from './structured-data.js';
