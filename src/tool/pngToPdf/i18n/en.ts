import { generateSchemas } from '../../../shared/logic/schemas';
import { bibliography } from '../bibliography';
import type { PngToPdfLocaleContent } from '../entry';
import type { ImageToPdfUI } from '../../../shared/image-to-pdf/ui';

const slug = 'png-to-pdf-converter';
const title = 'PNG to PDF Converter';
const description = 'Turn PNG images into an ordered PDF in your browser. Keep transparent artwork readable on paper without uploading files.';

const ui: ImageToPdfUI = {
  formatLabel: 'PNG', dropTitle: 'Build a PDF from your PNG images', dropText: 'Drop one or more PNG files here. The order you choose becomes the page order.', selectFiles: 'Select PNG files', privacyNote: 'Everything stays in this browser. Your images are never uploaded.', optionsTitle: 'Print sheet', settingsTitle: 'Paper settings', pageSizeLabel: 'Paper size', a4: 'A4', letter: 'Letter', orientationLabel: 'Orientation', portrait: 'Portrait', landscape: 'Landscape', marginLabel: 'Margins', pagesTitle: 'Pages', reorderHint: 'Move pages up or down before exporting.', page: 'Page', pageSingular: 'page', pagePlural: 'pages', moveUp: 'Move up', moveDown: 'Move down', remove: 'Remove', emptyPages: 'Your selected images will appear here.', createPdf: 'Create PDF', reset: 'Start over', ready: 'Ready for your images', processing: 'Preparing image', error: 'Could not read this PNG', downloadPdf: 'Download PDF', building: 'Building PDF', pdfReady: 'Your PDF is ready', invalidFile: 'This tool accepts PNG files only.', bibliographyTitle: 'References', faqTitle: 'Frequently asked questions',
};

const faq: PngToPdfLocaleContent['faq'] = [
  { question: 'Can I combine several PNG files into one PDF?', answer: 'Yes. Select several PNG files, arrange their pages, and export them as one document.' },
  { question: 'Will transparent PNG areas become printable?', answer: 'Yes. Transparent areas are placed over white while the PDF is prepared, giving the printed page a predictable background.' },
  { question: 'Does the PNG to PDF converter send my artwork online?', answer: 'No. The conversion happens locally in your browser and the files remain on your device.' },
];

const howTo: PngToPdfLocaleContent['howTo'] = [
  { name: 'Select PNG artwork', text: 'Drop PNG files into the workspace or use the file picker to choose them locally.' },
  { name: 'Arrange the pages', text: 'Move pages up or down until the document follows the order you want to print or share.' },
  { name: 'Choose paper and export', text: 'Set paper size, orientation and margins, then create and download the PDF.' },
];

const seo: PngToPdfLocaleContent['seo'] = [
  { type: 'title', text: 'Create a printable PDF from PNG artwork', level: 2 },
  { type: 'paragraph', html: 'PNG is a practical source for screenshots, diagrams and transparent illustrations. This converter turns a selected sequence of PNG files into one PDF with paper settings that are ready for printing.' },
  { type: 'title', text: 'Use the page list as a final proof', level: 3 },
  { type: 'list', icon: 'mdi:check-circle', items: ['Put screenshots in the order of the process they explain.', 'Choose landscape for wide diagrams and interface captures.', 'Use a larger margin when your printer cannot print to the edge.', 'Remember that transparent pixels are placed on white for predictable output.'] },
  { type: 'tip', title: 'A private workflow for sensitive screenshots', html: 'The files never leave the browser during conversion, which makes this workflow useful for private documentation and internal diagrams.' },
];

export const content: PngToPdfLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'en', faq, howTo }),
};
