import { bmpAPng } from './entry';
export * from './entry';
export const BMP_A_PNG_TOOL: ToolDefinition = {
  entry: bmpAPng,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
