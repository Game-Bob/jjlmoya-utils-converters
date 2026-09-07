import { generateSchemas } from '../../../shared/logic/schemas';
import { bibliography } from '../bibliography';
import type { WebpToPdfLocaleContent } from '../entry';
import type { ImageToPdfUI } from '../../../shared/image-to-pdf/ui';

const slug = 'webp-in-pdf-umwandeln';
const title = "WebP in PDF Umwandler";
const description = "Wandeln Sie WebP-Bilder direkt im Browser in ein geordnetes PDF um. Wählen Sie Papierformat, Ausrichtung und Ränder ohne Upload.";

const ui: ImageToPdfUI = {
  formatLabel: 'WebP',
  dropTitle: "PDF aus WebP-Bildern erstellen",
  dropText: "Ziehen Sie WebP-Dateien hierher. Die Reihenfolge bestimmt die Seitennummerierung.",
  selectFiles: "WebP-Dateien auswählen",
  privacyNote: "Alles bleibt im Browser. Ihre Bilder werden nicht hochgeladen.",
  optionsTitle: "Druckblatt",
  settingsTitle: "Papiereinstellungen",
  pageSizeLabel: "Papierformat",
  a4: 'A4',
  letter: 'Letter',
  orientationLabel: "Ausrichtung",
  portrait: "Hochformat",
  landscape: "Querformat",
  marginLabel: "Ränder",
  pagesTitle: "Seiten",
  reorderHint: "Seiten vor dem Export nach oben oder unten verschieben.",
  page: "Seite",
  pageSingular: "Seite",
  pagePlural: "Seiten",
  moveUp: "Nach oben",
  moveDown: "Nach unten",
  remove: "Entfernen",
  emptyPages: "Ihre ausgewählten Bilder erscheinen hier.",
  createPdf: "PDF erstellen",
  reset: "Neu starten",
  ready: "Bereit für Ihre Bilder",
  processing: "Bild wird vorbereitet",
  error: "Bild konnte nicht gelesen werden",
  downloadPdf: "PDF herunterladen",
  building: "PDF wird erstellt",
  pdfReady: "Ihr PDF ist bereit",
  invalidFile: "Dieses Tool akzeptiert nur WebP- und JPEG-Dateien.",
  bibliographyTitle: "Referenzen",
  faqTitle: "Häufig gestellte Fragen",
};

const faq: WebpToPdfLocaleContent['faq'] = [
  {
    "question": "Kann ich mehrere WebP-Bilder in ein PDF zusammenfügen?",
    "answer": "Ja. Wählen Sie beliebig viele WebP-Dateien aus, ordnen Sie die Seiten an und exportieren Sie ein einzelnes PDF."
  },
  {
    "question": "Werden meine Bilder auf einen Server hochgeladen?",
    "answer": "Nein. Alle Bilder werden lokal im Browser verarbeitet und verlassen Ihr Gerät nicht."
  },
  {
    "question": "Kann ich das Papierformat wählen?",
    "answer": "Ja. Sie können A4 oder Letter sowie Hoch- oder Querformat und Ränder festlegen."
  }
];

const howTo: WebpToPdfLocaleContent['howTo'] = [
  {
    "name": "WebP-Bilder auswählen",
    "text": "Ziehen Sie Ihre WebP-Dateien in den Arbeitsbereich oder wählen Sie diese über den Dateidialog aus."
  },
  {
    "name": "Seiten anordnen",
    "text": "Verschieben Sie die Seiten in die gewünschte Reihenfolge und legen Sie Papierformat und Ränder fest."
  },
  {
    "name": "PDF erstellen",
    "text": "Klicken Sie auf PDF erstellen und laden Sie das Dokument herunter."
  }
];

const seo: WebpToPdfLocaleContent['seo'] = [
  {
    "type": "title",
    "text": "WebP-Bilder in ein druckfähiges PDF verwandeln",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Dieser WebP-in-PDF-Umwandler ermöglicht es Ihnen, mehrere Fotos oder Scans in ein einziges, übersichtliches PDF-Dokument zusammenzufügen. Passen Sie die Reihenfolge und die Papiereinstellungen individuell an."
  },
  {
    "type": "title",
    "text": "Saubere Dokumente ohne Qualitätsverlust",
    "level": 3
  },
  {
    "type": "list",
    "icon": "mdi:check-circle",
    "items": [
      "Sortieren Sie Ihre Bilder für eine perfekte Seitenabfolge.",
      "Wählen Sie das Hochformat für Standarddokumente oder Querformat für Breitmotive.",
      "Erhöhen Sie die Ränder für einen optimalen Ausdruck auf Heimdruckern."
    ]
  },
  {
    "type": "tip",
    "title": "Maximale Privatsphäre garantiert",
    "html": "Da die Konvertierung komplett im Browser stattfindet, bleiben vertrauliche Dokumente und persönliche Fotos geschützt."
  }
];

export const content: WebpToPdfLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'de', faq, howTo }),
};
