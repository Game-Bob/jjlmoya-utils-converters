export * from './entry';
export const GIF_A_WEBP_TOOL: ToolDefinition = {
  entry: gifAWebp,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
