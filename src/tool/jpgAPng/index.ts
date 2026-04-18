export * from './entry';
export const JPG_A_PNG_TOOL: ToolDefinition = {
  entry: jpgAPng,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
