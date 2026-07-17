import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAWebpLocaleContent } from '../index';

const slug = 'bmp-zu-webp-konvertieren';
const title = 'BMP kostenlos in WebP konvertieren';
const description =
  'Konvertieren Sie BMP-Bilder offline in WebP. Reduzieren Sie riesige Dateien auf Kilobytes. Ohne Hochladen von Dateien. Kostenlos, offline und absolut privat.';

const ui: ImageConverterUI = {
  dragText: 'BMP-Dateien hierher ziehen...',
  convertText: 'Um sie sofort in WebP zu konvertieren',
  selectFiles: 'Dateien auswählen',
  processedFiles: 'Verarbeitete Dateien',
  downloadAll: 'Alles herunterladen (.zip)',
  pending: 'Ausstehend',
  bibliographyTitle: 'Literaturhinweise',
  faqTitle: 'Häufig gestellte Fragen',
};

const faq: BmpAWebpLocaleContent['faq'] = [
  {
    question: 'Warum belegen meine BMP-Dateien 10-mal mehr Platz und was gewinne ich mit WebP?',
    answer:
      'BMP speichert unkomprimierte Pixel-Maps. WebP nutzt mathematische Kompression, um riesige BMPs auf weniger als einen Megabyte zu verkleinern, wobei das Bild absolut erkennbar bleibt.',
  },
  {
    question: 'Muss ich ein Konto registrieren?',
    answer:
      'Wir verlangen keine E-Mail und Ihr Material bleibt isoliert, da die Verarbeitung durch das in Ihrem Browser installierte JavaScript auf Ihrem PC erfolgt, ohne Fernübertragung.',
  },
  {
    question: 'Kann ich viele Dateien gleichzeitig ziehen?',
    answer:
      'Ja, Sie können 50 oder 100 Dateien ziehen, wenn Ihre Hardware in der Lage ist, alle ohne Warteschlangen zu verarbeiten.',
  },
];

const howTo: BmpAWebpLocaleContent['howTo'] = [
  {
    name: 'Rohdateien identifizieren',
    text: 'Platzieren Sie Ihre Bitmap-Sammlungen in Fenstern, die für den Transfer bereit sind.',
  },
  {
    name: 'Nativ Batch-Aktivierung',
    text: 'Projizieren oder ziehen Sie alle Dateien auf unseren digitalen Tisch.',
  },
  {
    name: 'WebP-Batch-Evakuierung',
    text: 'Klicken Sie auf die Ergebnisse und Sie erhalten separat die mikroleichten Bilder oder als sofortige ZIP-Pakete.',
  },
];

const seo: BmpAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'BMP-zu-WebP-Konverter: Die extremste Größenreduzierung, die möglich ist',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Die Konvertierung von BMP in WebP ist zweifellos die spektakulärste Transformation, die Sie mit einem Bild durchführen können. Das BMP-Format (Bitmap) ist eines der ältesten und schwersten Formate im digitalen Ökosystem: Es speichert jedes Pixel ohne jegliche Kompression, was zu Dateien führen kann, die 20, 50 oder sogar 100 Mal schwerer sind als ihr moderner Gegenpart. WebP, entwickelt von Google, wendet Kompressionsalgorithmen der neuesten Generation an, die die Größe auf das absolut mögliche Minimum reduzieren und dabei eine exzellente visuelle Qualität beibehalten.',
  },
  {
    type: 'title',
    text: 'Warum ist BMP so schwer und WebP so effizient?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Das BMP-Format entstand in den 80er Jahren für Windows, als Festplattenplatz riesig war und Kompression keine Priorität hatte. Jedes Pixel wird so gespeichert, wie es ist, ohne Reduktionsalgorithmus: Ein Bild mit 1920x1080 Pixeln belegt in BMP genau 5,93 MB, unabhängig vom Inhalt. Das macht es ideal für interne Screenshots oder verlustfreie Bearbeitung, aber völlig ungeeignet für das Web oder moderne Speicherung.',
  },
  {
    type: 'paragraph',
    html: 'WebP verwendet prädiktive Kompression basierend auf Blöcken und DCT-Transformationen (dieselbe Technologie, die digitalem Video zugrunde liegt) und erreicht, dass dasselbe Bild mit 1920x1080 Pixeln zwischen 80 KB und 300 KB belegt. Das entspricht einer Reduzierung von 95 bis 99 % gegenüber dem ursprünglichen BMP. Zudem unterstützt WebP den Alphakanal für Transparenzen sowie sowohl verlustbehaftete als auch verlustfreie Kompression und bietet volle Vielseitigkeit.',
  },
  {
    type: 'title',
    text: 'Vergleich: Cloud-Konverter vs. Unsere lokale Architektur',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Cloud Konverter',
        description: 'Tools, die Ihre BMP-Dateien auf einen Remote-Server hochladen, um sie zu verarbeiten.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Das Hochladen eines 20 MB BMP dauert bei langsamer Verbindung Minuten',
          'Ihre Bilder bleiben auf fremden Servern gespeichert',
          'Größenlimits, die große BMP-Dateien ausschließen',
          'Invasive Werbung und Daten-Tracker',
        ],
      },
      {
        title: 'Unsere lokale Architektur',
        description: 'Direkte Verarbeitung in Ihrem Browser mittels Vanilla JS-Technologie und Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Sofortige Konvertierung ohne Netzwerktransfer',
          'Absolute Privatsphäre - 0 Bytes verlassen Ihr Gerät',
          'Keine Größenlimits pro Datei',
          'Funktioniert ohne Internetverbindung',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Wie die technische Konvertierung im Browser funktioniert',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Beim Ziehen einer BMP-Datei liest der Browser diese als binären Blob in den RAM-Speicher. Dieser Blob wird in ein <code>Image</code>-Element von JavaScript geladen, das ihn mit der nativen Bild-Engine dekodiert. Anschließend wird das Bild auf ein unsichtbares HTML5 <code>Canvas</code>-Element gezeichnet. Das Canvas fungiert als virtuelle Leinwand, auf der das Bild Pixel für Pixel existiert.',
  },
  {
    type: 'paragraph',
    html: 'Nachdem es auf das Canvas gezeichnet wurde, führen wir die Methode <code>toBlob()</code> mit dem MIME-Typ <code>image/webp</code> und der gewünschten Qualität aus. Der Browser wendet intern den WebP-Kompressionsalgorithmus an und generiert einen neuen Blob mit der Ergebnisdatei. Dieser Blob wird in eine direkte Download-URL umgewandelt, die Ihr Browser auf der Festplatte speichert. Zu keinem Zeitpunkt wird eine Netzwerkverbindung hergestellt.',
  },
  {
    type: 'tip',
    title: 'Der größtmögliche Kompressionssprung',
    html: 'Die Konvertierung von BMP in WebP kann eine Reduzierung der Dateigröße um 99 % erreichen. Ein 20 MB BMP kann in ein WebP von nur etwa 200 KB bei praktisch identischer visueller Qualität umgewandelt werden. Es ist die effizienteste verfügbare Transformation zwischen Standard-Bildformaten.',
  },
  {
    type: 'title',
    text: 'Anwendungsfälle und Kompatibilität von WebP',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Web-Veröffentlichung - Chrome, Firefox, Safari, Edge und alle modernen Browser.',
      'Soziale Netzwerke - Instagram, Twitter, Facebook akzeptieren WebP nativ.',
      'Web-Apps und PWAs - minimale Größen für sofortiges Laden.',
      'Effiziente Archivierung - ersetzt Sammlungen alter BMPs und spart Gigabytes.',
      'E-Mail-Marketing - leichte Bilder, die in jedem modernen E-Mail-Client schnell laden.',
    ],
  },
  {
    type: 'title',
    text: 'Fazit: Die wirkungsvollste Konvertierung mit nur einem Klick',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Wenn Sie alte BMP-Dateien von Windows, unkomprimierte Screenshots oder Bilder von alten Tools haben, ist die Konvertierung in WebP der wirkungsvollste Schritt, den Sie zur Optimierung Ihres Speichers und Ihrer Web-Performance unternehmen können. Mit unserem Tool erfolgt die Konvertierung sofort, privat und ohne Limits - genau so, wie es sein sollte.',
  },
];


export const content: BmpAWebpLocaleContent = {
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
