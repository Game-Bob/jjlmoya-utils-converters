import { webpAIco } from './entry';
export * from './entry';
export const WEBP_A_ICO_TOOL: ToolDefinition = {
  entry: webpAIco,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
