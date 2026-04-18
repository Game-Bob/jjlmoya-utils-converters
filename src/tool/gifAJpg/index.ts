import { gifAJpg } from './entry';
export * from './entry';
export const GIF_A_JPG_TOOL: ToolDefinition = {
  entry: gifAJpg,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
