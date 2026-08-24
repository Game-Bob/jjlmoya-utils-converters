import type { ToolDefinition } from '../../types';
import { webpToPdf } from './entry';

export * from './entry';

export const WEBP_TO_PDF_TOOL: ToolDefinition = {
  entry: webpToPdf,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
