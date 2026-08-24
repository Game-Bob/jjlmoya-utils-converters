import { generateSchemas } from '../../../shared/logic/schemas';
import { bibliography } from '../bibliography';
import type { PngToPdfLocaleContent } from '../entry';
import type { ImageToPdfUI } from '../../../shared/image-to-pdf/ui';

const slug = 'convertidor-png-a-pdf';
const title = "Convertidor de PNG a PDF";
const description = "Convierte imágenes PNG en un PDF ordenado desde tu navegador. Elige tamaño de papel, orientación y márgenes sin subir archivos.";

const ui: ImageToPdfUI = {
  formatLabel: 'PNG',
  dropTitle: "Crea un PDF a partir de tus imágenes PNG",
  dropText: "Arrastra archivos PNG aquí. El orden que elijas será el orden de las páginas.",
  selectFiles: "Seleccionar archivos PNG",
  privacyNote: "Todo se procesa en tu navegador. Tus imágenes nunca se suben.",
  optionsTitle: "Hoja de impresión",
  settingsTitle: "Ajustes de papel",
  pageSizeLabel: "Tamaño de papel",
  a4: 'A4',
  letter: 'Letter',
  orientationLabel: "Orientación",
  portrait: "Vertical",
  landscape: "Horizontal",
  marginLabel: "Márgenes",
  pagesTitle: "Páginas",
  reorderHint: "Mueve las páginas arriba o abajo antes de exportar.",
  page: "Página",
  pageSingular: "página",
  pagePlural: "páginas",
  moveUp: "Subir",
  moveDown: "Bajar",
  remove: "Eliminar",
  emptyPages: "Tus imágenes seleccionadas aparecerán aquí.",
  createPdf: "Crear PDF",
  reset: "Empezar de nuevo",
  ready: "Listo para tus imágenes",
  processing: "Preparando imagen",
  error: "No se pudo leer la imagen",
  downloadPdf: "Descargar PDF",
  building: "Generando PDF",
  pdfReady: "Tu PDF está listo",
  invalidFile: "Esta herramienta solo acepta archivos PNG y JPEG.",
  bibliographyTitle: "Referencias",
  faqTitle: "Preguntas frecuentes",
};

const faq: PngToPdfLocaleContent['faq'] = [
  {
    "question": "¿Puedo juntar varias imágenes PNG en un solo PDF?",
    "answer": "Sí. Selecciona los archivos PNG que necesites, ordena las páginas y exporta un único PDF."
  },
  {
    "question": "¿Se suben mis imágenes a algún servidor?",
    "answer": "No. Todo el proceso se realiza localmente en tu navegador."
  },
  {
    "question": "¿Puedo elegir el tamaño de papel A4 o Carta?",
    "answer": "Sí. Puedes seleccionar A4 o Letter, así como la orientación y los márgenes."
  }
];

const howTo: PngToPdfLocaleContent['howTo'] = [
  {
    "name": "Selecciona las imágenes PNG",
    "text": "Arrastra tus archivos PNG o elígelos desde tu dispositivo."
  },
  {
    "name": "Organiza las páginas y el papel",
    "text": "Ordena las imágenes y configura el formato A4/Letter, orientación y márgenes."
  },
  {
    "name": "Genera y descarga el PDF",
    "text": "Haz clic en Crear PDF y descarga el archivo resultante."
  }
];

const seo: PngToPdfLocaleContent['seo'] = [
  {
    "type": "title",
    "text": "Crea un documento PDF listo para imprimir desde tus imágenes PNG",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Este convertidor de PNG a PDF está pensado para unificar listas de fotos, escaneos o documentos en un solo archivo organizado. Reordena las páginas y ajusta el tipo de papel antes de exportar."
  },
  {
    "type": "title",
    "text": "Prepara documentos digitales impecables",
    "level": 3
  },
  {
    "type": "list",
    "icon": "mdi:check-circle",
    "items": [
      "Organiza las páginas para colocar portadas o fotos principales al inicio.",
      "Elige formato vertical u horizontal según la composición de tus imágenes.",
      "Ajusta los márgenes para asegurar una impresión limpia en cualquier impresora."
    ]
  },
  {
    "type": "tip",
    "title": "Tus fotos privadas siempre seguras",
    "html": "Al ejecutarse completamente en tu navegador, tus recibos, documentos o fotos personales no se envían a servidores externos."
  }
];

export const content: PngToPdfLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'es', faq, howTo }),
};
