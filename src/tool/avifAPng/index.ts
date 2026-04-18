export * from './entry';
export const AVIF_A_PNG_TOOL: ToolDefinition = {
  entry: avifAPng,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
