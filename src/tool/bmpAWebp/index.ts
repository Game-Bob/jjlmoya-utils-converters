import { bmpAWebp } from './entry';
export * from './entry';
export const BMP_A_WEBP_TOOL: ToolDefinition = {
  entry: bmpAWebp,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
