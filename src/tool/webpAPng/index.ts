import { webpAPng } from './entry';
export * from './entry';
export const WEBP_A_PNG_TOOL: ToolDefinition = {
  entry: webpAPng,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
