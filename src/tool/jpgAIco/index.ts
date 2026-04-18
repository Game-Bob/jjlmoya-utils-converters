export * from './entry';
export const JPG_A_ICO_TOOL: ToolDefinition = {
  entry: jpgAIco,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
