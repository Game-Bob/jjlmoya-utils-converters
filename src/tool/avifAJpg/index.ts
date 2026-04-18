export * from './entry';
export const AVIF_A_JPG_TOOL: ToolDefinition = {
  entry: avifAJpg,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
