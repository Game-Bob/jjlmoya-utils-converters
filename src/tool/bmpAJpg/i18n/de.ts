import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAJpgLocaleContent } from '../index';

const slug = 'bmp-zu-jpg-konvertieren';
const title = 'BMP in JPG Online Konvertieren';
const description =
  'Konvertieren Sie BMP-Bilder in Ihrem Browser in JPG. Reduzieren Sie die Größe drastisch. Ohne Dateien auf Server hochzuladen. Kostenlos und 100 % privat.';

const ui: ImageConverterUI = {
  dragText: 'BMP-Dateien hierher ziehen...',
  convertText: 'Um sie sofort in JPG zu konvertieren',
  selectFiles: 'Dateien auswählen',
  processedFiles: 'Verarbeitete Dateien',
  downloadAll: 'Alles herunterladen (.zip)',
  pending: 'Ausstehend',
  bibliographyTitle: 'Literaturhinweise',
  faqTitle: 'Häufig gestellte Fragen',
};

const faq: BmpAJpgLocaleContent['faq'] = [
  {
    question: 'Warum BMP in JPG konvertieren?',
    answer:
      'Das BMP-Format komprimiert Daten nicht, was zu extrem großen Dateien führt. Das JPG-Format komprimiert das Bild drastisch und behält gleichzeitig eine hervorragende visuelle Qualität für das Web und die Verteilung bei.',
  },
  {
    question: 'Ist es sicher, meine Bilder hier zu konvertieren?',
    answer:
      '100 % sicher. Ihre Privatsphäre ist garantiert, da die Verarbeitung vollständig lokal mit der Engine Ihres eigenen Webbrowsers erfolgt.',
  },
  {
    question: 'Wie funktioniert das Tool?',
    answer:
      'Ziehen Sie einfach Ihre BMP-Dateien hierher, und unser JavaScript-Skript liest die Pixel, um sie auf einem HTML-Canvas neu zu zeichnen und sofort in die JPEG-Kodierung zu exportieren.',
  },
];

const howTo: BmpAJpgLocaleContent['howTo'] = [
  {
    name: 'Laden Sie Ihre BMP-Dateien hoch',
    text: 'Ziehen Sie Ihre Bilder im BMP-Format per Drag & Drop in den markierten Bereich oder wählen Sie sie aus.',
  },
  {
    name: 'Automatische Verarbeitung',
    text: 'Das Tool rastert das Bild und wendet in Millisekunden die optimale Kompressionsstufe im JPG-Format an.',
  },
  {
    name: 'Einzel- oder Batch-Download',
    text: 'Holen Sie sich Ihre neuen, für das Web optimierten Bilder entweder einzeln oder durch Herunterladen einer ZIP-Datei.',
  },
];

const seo: BmpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'BMP-zu-JPG-Konverter: Reduzieren Sie eine gigantische Datei in Sekundenschnelle',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMP (Bitmap) ist das naivste Format in der Informatik: Es speichert jedes Pixel so, wie es ist, ohne jegliche Kompression. Ein Screenshot von 1920x1080 in BMP wiegt etwa 6 MB. Dasselbe Bild in JPG belegt zwischen 200 und 400 KB bei einer visuell ununterscheidbaren Qualität. Der Unterschied ist gewaltig, und unser Tool ermöglicht es Ihnen, diese Konvertierung in Sekundenschnelle direkt in Ihrem Browser durchzuführen, ohne etwas auf einen Server hochzuladen.',
  },
  {
    type: 'title',
    text: 'BMP vs. JPG: Rohdaten gegen intelligente Kompression',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Das BMP-Format wurde von Microsoft in der Ära von Windows 3.1 entwickelt. Seine Philosophie ist so einfach wie möglich: Jedes Pixel belegt 3 Bytes (Rot, Grün, Blau), und die Pixel werden ohne weitere Verarbeitung in Reihen gespeichert. Dieses völlige Fehlen von Kompression führt dazu, dass BMP-Dateien bei echten Fotos und Screenshots zwischen 50 und 100 Mal größer sind als ihr Gegenstück in JPG.',
  },
  {
    type: 'paragraph',
    html: 'JPG hingegen verwendet die diskrete Kosinustransformation (DCT), um jeden Block von 8x8 Pixeln zu analysieren und hochfrequente Informationen zu eliminieren, die das menschliche Auge kaum wahrnimmt. Das Ergebnis ist ein Bild, das identisch aussieht, aber nur einen Bruchteil des Originals wiegt. Für BMP-Dateien aus Screenshots, Scannern oder Legacy-Windows-Anwendungen ist die Konvertierung in JPG die wirkungsvollste Optimierungsmaßnahme überhaupt.',
  },
  {
    type: 'title',
    text: 'Architekturvergleich: Lokal vs. Cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Cloud Konverter',
        description: 'Dienste, die Ihre BMP-Dateien zur Verarbeitung auf Remote-Server hochladen.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Das Hochladen einer 10-MB-BMP-Datei dauert bei langsamen Verbindungen lange',
          'Ihre vertraulichen Screenshots und Bilder wandern über das Internet',
          'Häufige Größenbeschränkungen in kostenlosen Tarifen',
          'Zweifache Latenz: Hoch- und Herunterladen der konvertierten Datei',
        ],
      },
      {
        title: 'Unsere lokale Architektur',
        description: 'Direkte Verarbeitung auf Ihrer Hardware mittels Vanilla JS-Technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Das BMP wird in Ihrem RAM verarbeitet und wandert nicht zu einem Server',
          'Sofortige Konvertierung ohne Wartezeit',
          'Keine Größenbeschränkungen pro Datei',
          'Vollständige Privatsphäre: 0 Bytes nach außen gesendet',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Wie die technische Konvertierung von BMP in JPG funktioniert',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Wenn Sie eine BMP-Datei in das Tool ziehen, liest der Browser sie mit der <code>FileReader</code>-API und dekodiert sie als Blob-Objekt im Speicher. Dieser Blob wird auf einem unsichtbaren HTML5-Canvas gerendert. Anschließend wendet die Methode <code>toDataURL(\'image/jpeg\')</code> den JPEG-Kompressionsalgorithmus auf die Canvas-Daten an und generiert die resultierende JPG-Datei.',
  },
  {
    type: 'paragraph',
    html: 'Da BMP keinen Alphakanal hat (keine Transparenz unterstützt), ist die Konvertierung in JPG direkt, ohne dass eine Komposition mit weißem Hintergrund erforderlich ist. Der gesamte Vorgang findet im RAM Ihres Computers statt, ohne jegliche Datenübertragung über das Netzwerk, innerhalb von Millisekunden, selbst bei Dateien von mehreren Megabyte.',
  },
  {
    type: 'tip',
    title: 'Windows BMPs können riesig sein',
    html: 'BMP-Dateien, die durch Screenshots (Druck-Taste in Windows) oder durch Legacy-Anwendungen wie Paint erzeugt werden, können zwischen 50 und 100 Mal schwerer sein als ein entsprechendes JPG. Ein einzelnes BMP mit Full-HD-Auflösung kann 6 MB überschreiten. Die Konvertierung in JPG vor dem Versenden per E-Mail oder dem Hochladen auf eine Plattform ist eine wesentliche Praxis.',
  },
  {
    type: 'title',
    text: 'Anwendungsfälle und Kompatibilität des resultierenden JPG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Optimierung von Windows-Screenshots für den Versand per E-Mail.',
      'Konvertierung von Bildern, die von Legacy-Software exportiert wurden (CAD, alte Scanner).',
      'Gewichtsreduzierung zum Hochladen von Bildern auf Webplattformen und soziale Netzwerke.',
      'Vorbereitung von Dateien zum Einfügen in Word-, PowerPoint- oder PDF-Dokumente.',
      'Universelle Kompatibilität mit allen modernen Viewern und Browsern.',
    ],
  },
  {
    type: 'title',
    text: 'Fazit: 10 MB BMP, 500 KB JPG, gleiches Bild',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Die Konvertierung von BMP in JPG ist eine der rentabelsten Optimierungsübungen beim Umgang mit Bilddateien. Unser Tool führt diese Transformation in Sekundenschnelle durch, ohne Dateien hochzuladen, ohne Kontoerstellung, direkt in Ihrem Browser. Das Ergebnis ist ein qualitativ hochwertiges JPG, das universell kompatibel ist und ein um bis zu 97 % geringeres Gewicht als das ursprüngliche BMP aufweist.',
  },
];


export const content: BmpAJpgLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'de', faq, howTo }),
};
