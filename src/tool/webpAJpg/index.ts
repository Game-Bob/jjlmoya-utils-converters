export * from './entry';
export const WEBP_A_JPG_TOOL: ToolDefinition = {
  entry: webpAJpg,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
