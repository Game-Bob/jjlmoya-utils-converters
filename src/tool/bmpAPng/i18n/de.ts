import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAPngLocaleContent } from '../index';

const slug = 'bmp-zu-png-konvertieren';
const title = 'BMP zu PNG Konverter';
const description =
  'Konvertieren Sie BMP-Bilder ohne Qualitätsverlust in PNG. Moderne Kompression ohne Artefakte. Ohne Hochladen von Dateien. Kostenlos und 100 % privat.';

const ui: ImageConverterUI = {
  dragText: 'BMP-Dateien hierher ziehen...',
  convertText: 'Um sie sofort in PNG zu konvertieren',
  selectFiles: 'Dateien auswählen',
  processedFiles: 'Verarbeitete Dateien',
  downloadAll: 'Alles herunterladen (.zip)',
  pending: 'Ausstehend': 'Literaturhinweise',
  faqTitle: 'Häufig gestellte Fragen',
};

const faq: BmpAPngLocaleContent['faq'] = [
  {
    question: 'Was ist der Hauptunterschied zwischen BMP und PNG?',
    answer:
      'Sowohl BMP als auch PNG sind verlustfreie Formate. Der Unterschied liegt in der Optimierung: PNG versteht moderne Kompressionsalgorithmen, um dasselbe Bild mit 5- bis 10-mal weniger Speicherplatz als BMP zu speichern.',
  },
  {
    question: 'Ist die Konvertierung wirklich privat?',
    answer:
      'Ja. Die gesamte Bildverarbeitung erfolgt auf Ihrem Computer. Absolut niemand greift auf Ihre Dateien im lokalen Transfer zu.',
  },
  {
    question: 'Warum PNG statt JPEG in diesem Fall?',
    answer:
      'Wenn Sie eine BMP-Datei haben, liegt das daran, dass das Bild präzise Farben hat. Die Umwandlung eines BMP in den verlustbehafteten JPG-Standard würde Ihre reinen Farben verschmutzen. PNG schützt diese Originaltreue.',
  },
];

const howTo: BmpAPngLocaleContent['howTo'] = [
  {
    name: 'Fügen Sie Ihr Foto hinzu',
    text: 'Ziehen Sie die BMP-Quelldateien einfach in unseren Bereich für Web-Elemente.',
  },
  {
    name: 'Übersetzung ohne Netzwerkübertragung',
    text: 'Erleben Sie in nur einer Sekunde die saubere, lokal von Ihrem HTML5-JS durchgeführte Verarbeitung.',
  },
  {
    name: 'Erhalten Sie reine PNGs',
    text: 'Laden Sie die PNG-Kopien einzeln oder als komprimiertes Paket herunter.',
  },
];

const seo: BmpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'BMP zu PNG Konverter: Der verlustfreie Ersatz für das BMP-Format',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMP ist ein unkomprimiertes Format, das riesige Mengen an Platz einnimmt, ohne einen technischen Vorteil gegenüber PNG zu bieten. Beide sind verlustfreie Formate: Sie speichern jedes Pixel mit absoluter Genauigkeit. Aber PNG fügt eine verlustfreie Kompression mittels Deflate-Algorithmus hinzu, was die Dateigröße um das 3- bis 5-Fache reduziert, ohne ein einziges Bit an visueller Information zu opfern. PNG ist im Wesentlichen das, was BMP immer sein wollte.',
  },
  {
    type: 'title',
    text: 'BMP vs. PNG: gleiche Qualität, radikal unterschiedliche Größe',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Der fundamentale Unterschied zwischen BMP und PNG liegt nicht in der Bildqualität — beide sind verlustfrei —, sondern in der Speichereffizienz. BMP speichert Pixel im Rohzustand: ohne Kompression, ohne Optimierung, ohne Berücksichtigung des Platzbedarfs. PNG analysiert wiederkehrende Pixelmuster und kodiert sie kompakt mittels Deflate, demselben Algorithmus, den auch ZIP verwendet.',
  },
  {
    type: 'paragraph',
    html: 'Zusätzlich zur überlegenen Kompression fügt PNG eine Eigenschaft hinzu, die BMP nie hatte: einen vollständigen Alphakanal für Transparenzen. Screenshots, Interface-Grafiken, Logos, technische Diagramme: All diese Bildtypen profitieren enorm von der Konvertierung in PNG, die jeden exakten Farbwert beibehält, während sie das Dateigewicht auf einen Bruchteil des Originals reduziert.',
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
        description: 'Dienste, die Ihre BMP-Dateien auf Servern von Drittanbietern verarbeiten.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Ihre Arbeitsbilder wandern über das Internet',
          'Wartezeit proportional zur Größe des BMP',
          'Größenbeschränkungen in kostenlosen Tarifen',
          'Risiko der Analyse oder Speicherung Ihrer Dateien',
        ],
      },
      {
        title: 'Unsere lokale Architektur',
        description: 'Direkte Verarbeitung auf Ihrer Hardware mittels Vanilla JS-Technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Das BMP wird lokal verarbeitet und verlässt niemals Ihr Gerät',
          'Sofortige Konvertierung in Millisekunden',
          'Keine Größenbeschränkungen oder Begrenzung der Dateianzahl',
          'Vollständige Privatsphäre: 0 Bytes nach außen gesendet',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Wie die lokale Konvertierung von BMP in PNG funktioniert',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Der Prozess nutzt die Canvas API von HTML5. Die BMP-Datei wird mit der <code>FileReader</code>-API des Browsers gelesen und als Blob im Speicher dekodiert. Dieser Blob wird auf einem unsichtbaren HTML5-Canvas gezeichnet. Anschließend wendet die Methode <code>toDataURL(\'image/png\')</code> den nativen PNG-Kompressionsalgorithmus des Browsers an und generiert die Ergebnisdatei.',
  },
  {
    type: 'paragraph',
    html: 'Im Gegensatz zur Konvertierung in JPG ist die Konvertierung in PNG vollständig verlustfrei: Jeder Farbwert des ursprünglichen BMP bleibt im resultierenden PNG exakt erhalten. Es gibt keine Artefakte, keine Kantenglättung, keinen Informationsverlust. Die endgültige Datei ist visuell identisch mit dem BMP, belegt aber 3- bis 5-mal weniger Platz auf der Festplatte.',
  },
  {
    type: 'paragraph',
    html: 'Wenn Sie mit alter Software arbeiten, die BMP exportiert (Industrieanlagen, Steuerungssysteme, medizinische Diagnosesoftware), ist die Konvertierung in PNG die beste Entscheidung. PNG ist mit absolut allen modernen Programmen kompatibel, behält die perfekte Farbtreue bei und nimmt bis zu 5-mal weniger Platz ein. Es ist die einfachste und sicherste Migration, die möglich ist.',
  },
  {
    type: 'title',
    text: 'Anwendungsfälle und Kompatibilität des resultierenden PNG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Screenshots und Interface-Grafiken mit exakt erhaltenen Farben.',
      'Bilder technischer Dokumentationen und Software-Diagramme.',
      'Exporte aus CAD, Industriesystemen und Legacy-Software.',
      'Logos und Elemente der visuellen Identität mit hinzugefügter Transparenz.',
      'Kompatibel mit Adobe Photoshop, GIMP, Figma und allen modernen Editoren.',
    ],
  },
  {
    type: 'title',
    text: 'Fazit: PNG ist das, was BMP immer hätte sein sollen',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Die Konvertierung von BMP in PNG ist die natürlichste Modernisierung einer Bilddatei: gleiche verlustfreie Qualität, höhere Kompatibilität, Unterstützung von Transparenz und 3- bis 5-mal weniger Gewicht. Unser Tool führt diese Konvertierung in Millisekunden direkt in Ihrem Browser durch, ohne eine Datei auf einen Server hochzuladen.',
  },
];


export const content: BmpAPngLocaleContent = {
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
