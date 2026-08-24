import type { ImageToPdfUI } from './ui';

export type PageStatus = 'processing' | 'ready' | 'error';

export interface EvaluatedPage {
  status: PageStatus;
  error?: string;
}

export function canCreatePdf(statuses: PageStatus[]): boolean {
  return statuses.length > 0 && statuses.every((status) => status === 'ready');
}

export function statusLabel(status: PageStatus, ui: ImageToPdfUI): string {
  if (status === 'ready') return ui.ready;
  if (status === 'processing') return ui.processing;
  return ui.error;
}
