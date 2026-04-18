import { svgAJpg } from './entry';
export * from './entry';
export const SVG_A_JPG_TOOL: ToolDefinition = {
  entry: svgAJpg,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
