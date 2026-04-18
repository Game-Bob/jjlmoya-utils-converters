export * from './entry';
export const PNG_A_ICO_TOOL: ToolDefinition = {
  entry: pngAIco,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
