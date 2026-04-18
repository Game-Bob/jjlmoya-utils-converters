import { jpgAWebp } from './entry';
export * from './entry';
export const JPG_A_WEBP_TOOL: ToolDefinition = {
  entry: jpgAWebp,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
