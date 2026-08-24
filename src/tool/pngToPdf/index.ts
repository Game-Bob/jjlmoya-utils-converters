import type { ToolDefinition } from '../../types';
import { pngToPdf } from './entry';

export * from './entry';

export const PNG_TO_PDF_TOOL: ToolDefinition = {
  entry: pngToPdf,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
