import { bmpAJpg } from './entry';
export * from './entry';
export const BMP_A_JPG_TOOL: ToolDefinition = {
  entry: bmpAJpg,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
