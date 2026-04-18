import { gifAPng } from './entry';
export * from './entry';
export const GIF_A_PNG_TOOL: ToolDefinition = {
  entry: gifAPng,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
