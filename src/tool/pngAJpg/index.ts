export * from './entry';
export const PNG_A_JPG_TOOL: ToolDefinition = {
  entry: pngAJpg,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
