import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAPngLocaleContent } from '../index';

const slug = 'webp-zu-png-konverter';
const title = 'WebP zu PNG Konverter Online und Kostenlos';
const description =
  'Konvertieren Sie WebP-Bilder in Ihrem Browser in PNG. Erhält die Transparenz. Kein Hochladen von Dateien auf Server. Kostenlos und 100 % privat.';

const ui: ImageConverterUI = {
  dragText: 'WebP-Dateien hierher ziehen...',
  convertText: 'Um sie sofort in PNG zu konvertieren',
  selectFiles: 'Dateien auswählen',
  processedFiles: 'Verarbeitete Dateien',
  downloadAll: 'Alles herunterladen (.zip)',
  pending: 'Ausstehend',
  bibliographyTitle: 'Literaturhinweise',
  faqTitle: 'Häufig gestellte Fragen',
};

const faq: WebpAPngLocaleContent['faq'] = [
  {
    question: 'Warum muss ich meine WebP-Dateien in PNG konvertieren?',
    answer:
      'Obwohl WebP-Dateien leichter sind, können sie in Bearbeitungsprogrammen wie älteren Photoshop-Versionen Inkompatibilitäten verursachen. PNG gewährleistet eine 100 % universelle Kompatibilität.',
  },
  {
    question: 'Gehen Transparenzen bei der Konvertierung von WebP zu PNG verloren?',
    answer:
      'Keineswegs. Im Gegensatz zur Konvertierung in JPG unterstützt PNG den Alpha-Kanal. Unser Tool bewahrt alle transparenten Bereiche der Originaldatei.',
  },
  {
    question: 'Kann ich vertrauliche Unternehmensdateien hochladen?',
    answer:
      'Das können und sollten Sie. Da alles lokal über JavaScript läuft, verlassen Ihre Unternehmensbilder niemals Ihren Computer und werden nicht auf externen Servern gespeichert.',
  },
];

const howTo: WebpAPngLocaleContent['howTo'] = [
  {
    name: 'WebP-Dateien ziehen',
    text: 'Ziehen Sie Ihre WebP-Dateien in das Hauptfenster oder wählen Sie die Bilder auf herkömmliche Weise aus.',
  },
  {
    name: 'High Fidelity Konvertierung',
    text: 'Ihr Browser zeichnet das Bild Pixel für Pixel neu und generiert eine exakte Kopie im PNG-Format, wobei der ursprüngliche Farbraum erhalten bleibt.',
  },
  {
    name: 'Einzel- oder Batch-Download',
    text: 'Speichern Sie jede Datei einzeln oder, wenn Sie einen Stapel verarbeitet haben, klicken Sie auf die ZIP-Schaltfläche, um alle zusammen herunterzuladen.',
  },
];

const seo: WebpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'WebP zu PNG Konverter: Die professionelle Wahl für Bearbeitung und Design',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Wenn ein Designer eine Grafik im <strong>WebP</strong>-Format herunterlädt und versucht, sie in Photoshop, Figma oder Illustrator zu öffnen, kann das Ergebnis frustrierend sein: Die Datei lässt sich nicht laden oder verliert an Qualität. Das <strong>PNG</strong>-Format ist der unangefochtene Standard der professionellen Bearbeitung: verlustfreie Kompression, vollständiger Alpha-Kanal und garantierte Kompatibilität über die gesamte kreative Produktionskette hinweg.',
  },
  {
    type: 'title',
    text: 'WebP für das Web, PNG für das Studio',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP ist ein Web-Produktionsformat: Seine Kompressionsalgorithmen sind darauf optimiert, das Übertragungsgewicht zu reduzieren, nicht darauf, maximale Originaltreue über iterative Bearbeitungs-Workflows hinweg zu bewahren. Jedes Mal, wenn Sie eine bearbeitete WebP-Datei speichern, wendet der Codec die Kompression erneut an. Bei Projekten, bei denen eine Datei oft geändert wird, bedeutet dies eine kumulative Qualitätsverschlechterung.',
  },
  {
    type: 'paragraph',
    html: 'PNG verwendet eine <strong>verlustfreie Kompression</strong>: Alle Pixeldaten bleiben vollständig erhalten, egal wie oft Sie die Datei speichern. Es ist das Format der Wahl für UI/UX Designer, digitale Illustratoren und Branding-Teams, die die visuelle Integrität über Dutzende von Revisionen hinweg wahren müssen. Tools wie Photoshop, Figma, Sketch und Illustrator behandeln PNG als ihr primäres Exportformat.',
  },
  {
    type: 'title',
    text: 'Vergleich: Lokale vs Cloud Konvertierung',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Cloud Konverter',
        description: 'Tools, die Ihre Dateien auf einen Remote-Server hochladen.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Ihre Design-Assets werden auf Servern Dritter gespeichert',
          'Langsame Remote-Verarbeitung bei großen Dateien',
          'Risiko von Datenlecks bei vertraulichen Kundenprojekten',
          'Batch Konvertierung oft eingeschränkt oder kostenpflichtig',
        ],
      },
      {
        title: 'Unsere lokale Architektur',
        description: 'Direkte Verarbeitung auf Ihrer Hardware mittels Vanilla JS-Technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Ihre Designs verlassen niemals Ihren Rechner',
          'Dutzende Dateien sofort per Batch konvertieren',
          'Vollständiger Erhalt des Alpha-Kanals und Farbraums',
          'Absolute Privatsphäre für Kundenprojekte',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Wie es technisch funktioniert',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Moderne Browser können WebP nativ dekodieren. Unser Tool nutzt diese Fähigkeit, um die Datei in ein JavaScript-<strong>Image</strong>-Element zu laden und sie dann auf ein HTML5-Canvas mit denselben Abmessungen wie das Original zu zeichnen. Im Gegensatz zur Konvertierung in JPG ist hier keine Hintergrundfüllung erforderlich: Das Canvas behält den vollständigen Alpha-Kanal bei.',
  },
  {
    type: 'paragraph',
    html: 'Der finale Export erfolgt über die Methode <code>toDataURL(\'image/png\')</code>, die ein verlustfreies, originalgetreues PNG generiert. Das Ergebnis ist eine Datei, die ohne Zwischenschritte, Farbverlust oder Transparenzverlust direkt in jede professionelle Design-Software importiert werden kann.',
  },
  {
    type: 'tip',
    title: 'Tipp für Editoren',
    html: 'Verwenden Sie PNG, wenn Sie das Bild weiter bearbeiten müssen. Die verlustfreie Kompression garantiert, dass durch wiederholtes Speichern keine Qualitätsverluste entstehen - entscheidend bei der Arbeit mit Ebenen, Masken oder Farbanpassungen in Photoshop oder Figma.',
  },
  {
    type: 'title',
    text: 'Anwendungsfälle und Kompatibilität',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Importieren von WebP-Assets in Photoshop, Figma, Sketch oder Illustrator.',
      'Erhalt der Transparenz bei Logos und Icons für die Verwendung auf verschiedenen Hintergründen.',
      'Erstellen von Master-Kopien von Grafiken für langfristige Projekte.',
      'Exportieren von Assets für mobile Apps, die PNG mit Alpha-Kanal erfordern.',
      'Verwendung von Bildern in Design-Mockups und Präsentationen mit variablen Hintergründen.',
    ],
  },
  {
    type: 'title',
    text: 'Fazit',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Wenn WebP das Format für Webserver ist, dann ist PNG das Format für das Designstudio. Dieses Tool konvertiert Ihre WebP-Assets in produktionsbereite PNGs mit intakter Transparenz und maximaler Qualität - alles in Ihrem Browser und ohne dass Ihre Dateien jemals Ihren Rechner verlassen.',
  },
];


export const content: WebpAPngLocaleContent = {
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
