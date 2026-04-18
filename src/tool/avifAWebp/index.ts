import { avifAWebp } from './entry';
export * from './entry';
export const AVIF_A_WEBP_TOOL: ToolDefinition = {
  entry: avifAWebp,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
