export * from './entry';
export const SVG_A_PNG_TOOL: ToolDefinition = {
  entry: svgAPng,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
