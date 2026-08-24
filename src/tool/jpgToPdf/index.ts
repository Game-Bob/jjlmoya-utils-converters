import type { ToolDefinition } from '../../types';
import { jpgToPdf } from './entry';

export * from './entry';

export const JPG_TO_PDF_TOOL: ToolDefinition = {
  entry: jpgToPdf,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
