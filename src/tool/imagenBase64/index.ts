import type { ToolDefinition } from '../../types';
import { imagenBase64 } from './entry';
export * from './entry';
export const IMAGEN_BASE64_TOOL: ToolDefinition = {
  entry: imagenBase64,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
