export interface ImageToPdfUI {
  [key: string]: string;
  formatLabel: string;
  dropTitle: string;
  dropText: string;
  selectFiles: string;
  privacyNote: string;
  optionsTitle: string;
  settingsTitle: string;
  pageSizeLabel: string;
  a4: string;
  letter: string;
  orientationLabel: string;
  portrait: string;
  landscape: string;
  marginLabel: string;
  pagesTitle: string;
  reorderHint: string;
  page: string;
  pageSingular: string;
  pagePlural: string;
  moveUp: string;
  moveDown: string;
  remove: string;
  emptyPages: string;
  createPdf: string;
  reset: string;
  ready: string;
  processing: string;
  error: string;
  downloadPdf: string;
  building: string;
  pdfReady: string;
  invalidFile: string;
  bibliographyTitle: string;
  faqTitle: string;
}

export type SourceImageFormat = 'jpg' | 'png' | 'webp';
