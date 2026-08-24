import type { Orientation, PageSize } from './logic';

export interface StoredPdfOptions {
  pageSize: PageSize;
  orientation: Orientation;
  marginMm: number;
}

const STORAGE_KEY = 'jjlmoya-image-to-pdf-options';

const fallback: StoredPdfOptions = {
  pageSize: 'a4',
  orientation: 'portrait',
  marginMm: 12,
};

export function loadPdfOptions(): StoredPdfOptions {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return fallback;
    const parsed = JSON.parse(saved) as Partial<StoredPdfOptions>;
    return {
      pageSize: parsed.pageSize === 'letter' ? 'letter' : 'a4',
      orientation: parsed.orientation === 'landscape' ? 'landscape' : 'portrait',
      marginMm: typeof parsed.marginMm === 'number' ? Math.min(32, Math.max(0, parsed.marginMm)) : fallback.marginMm,
    };
  } catch {
    return fallback;
  }
}

export function savePdfOptions(options: StoredPdfOptions): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(options));
  } catch {}
}
