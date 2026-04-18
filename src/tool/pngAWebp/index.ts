export * from './entry';
export const PNG_A_WEBP_TOOL: ToolDefinition = {
  entry: pngAWebp,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
