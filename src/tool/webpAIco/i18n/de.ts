import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAIcoLocaleContent } from '../index';

const slug = 'webp-zu-ico-konverter';
const title = 'WebP zu ICO konvertieren';
const description =
  'Konvertieren Sie WebP-Bilder in offizielles ICO mit Transparenz. Ohne Hochladen von Dateien. Echte binäre Microsoft-Header. Kostenlos und privat.';

const ui: ImageConverterUI = {
  dragText: 'WebP-Dateien hierher ziehen...',
  convertText: 'Um sie sofort in ICO zu konvertieren',
  selectFiles: 'Dateien auswählen',
  processedFiles: 'Verarbeitete Dateien',
  downloadAll: 'Alles herunterladen (.zip)',
  pending: 'Ausstehend',
  bibliographyTitle: 'Literaturhinweise',
  faqTitle: 'Häufig gestellte Fragen',
};

const faq: WebpAIcoLocaleContent['faq'] = [
  {
    question: 'Kann ich WebP-Sticker-Designs in ein offizielles Web-Favicon ICO umwandeln?',
    answer:
      'Genau. Das Favicon verlangt für extreme universelle Kompatibilität immer noch nach der klassischen Microsoft ICO-Erweiterung. Dieses Tool injiziert binäre Header und baut ein 100 % rechtmäßiges Icon.',
  },
  {
    question: 'Muss ich in Warteschlangen warten, wenn ich einen riesigen Satz an Unternehmens-Icons erstelle?',
    answer:
      'Keineswegs. Unser Konverter lädt das JavaScript lokal und benötigt keine Netzwerkverbindung zum Hochladen. Ihre eigene Smartphone-CPU verarbeitet hundert Fotos oder mehr asynchron.',
  },
  {
    question: 'Unterstützt das resultierende ICO die Transparenzen meines ursprünglichen WebP?',
    answer:
      'Ja. Unsere Engine arbeitet intern mit der HTML5-Canvas-API mit vollem 32-Bit-Support. Jede transparente Stelle wird sauber in die ikonografische Datei übernommen.',
  },
];

const howTo: WebpAIcoLocaleContent['howTo'] = [
  {
    name: 'Ziehen Sie alle Ihre lokalen WebP-Sticker',
    text: 'Verschieben Sie große Fotomengen ohne Angst dörre Sättigung des Web-Limits.',
  },
  {
    name: 'Logische asynchrone Übersetzung und direkte Montage',
    text: 'Beobachten Sie, wie sich der Balken und die Elemente automatisch vervollständigen, während der Speicher den Block Byte für Byte verarbeitet.',
  },
  {
    name: 'Nehmen Sie Ihr Paket für Systeme und Webentwicklung mit',
    text: 'Klicken Sie auf eine Schaltfläche zum Herunterladen einer Sammeldatei oder laden Sie manuell herunter, wenn Sie nur eines benötigen.',
  },
];

const seo: WebpAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'WebP zu ICO Konverter: Erstellen Sie perfekte Favicons aus Ihren modernen Assets',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Moderne Webdesign-Workflows erzeugen Ressourcen im <strong>WebP</strong>-Format: optimierte Logos, UI-Icons und Markenelemente. Aber wenn es an der Zeit ist, das <strong>Favicon</strong> Ihrer Website oder die Icons einer Windows-Desktop-Anwendung zu konfigurieren, ist das erforderliche Format immer noch <strong>ICO</strong>. Die Konvertierung von WebP in ICO ermöglicht es Ihnen, Ihre Assets in höchster Qualität wiederzuverwenden, ohne die ursprüngliche Quelle zu verlieren.',
  },
  {
    type: 'title',
    text: 'WebP vs. ICO: Formate mit unterschiedlichen Zwecken',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP ist ein Allzweck-Bildformat, das sich hervorragend für Fotografien, Illustrationen und Web-Icons eignet. Seine effiziente Kompression macht es ideal, um die Ladezeiten von Seiten zu beschleunigen. Es verfügt jedoch nicht über die spezifische binäre Struktur, die Betriebssysteme und Browser benötigen, um ein Anwendungs-Icon oder Favicon zu erkennen und anzuzeigen.',
  },
  {
    type: 'paragraph',
    html: 'ICO ist ein Microsoft-Containerformat, das speziell für Icons entwickelt wurde. Es kann mehrere Auflösungen in einer einzigen Datei speichern und unterstützt volle Transparenz über einen 32-Bit-Alphakanal. Browser suchen konventionell nach einer <code>favicon.ico</code>-Datei, und dieses Format garantiert, dass Ihr Icon sowohl auf Standardbildschirmen als auch auf Retina- und 4K-Displays scharf angezeigt wird.',
  },
  {
    type: 'title',
    text: 'Vergleich: Lokale vs. Cloud-Konvertierung',
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
          'Ihr Firmenlogo reist zu Servern von Drittanbietern',
          'Internetverbindung für jede Konvertierung erforderlich',
          'Variable Ausgabequalität je nach Server',
          'Einschränkungen bei der Anzahl der täglichen Konvertierungen',
        ],
      },
      {
        title: 'Unsere lokale Architektur',
        description: 'Direkte Verarbeitung auf Ihrer Hardware mittels Vanilla-JS-Technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Ihr Logo verlässt niemals Ihren Browser',
          'ICO-Binär-Header nach Microsoft-Standard generiert',
          '32-Bit-Transparenz bleibt vollständig erhalten',
          'Stapelweise Konvertierung kompletter Icon-Sets',
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
    html: 'Der Browser dekodiert die WebP-Datei nativ und zeichnet sie auf ein <strong>HTML5-Canvas</strong> mit 32-Bit-Farbtiefe, wobei der ursprüngliche Alphakanal erhalten bleibt. Unsere JavaScript-Engine extrahiert anschließend die Pixeldaten über die Methode <code>getImageData()</code> und baut die binäre ICO-Struktur mit den von Microsoft spezifizierten ICONDIR- und ICONDIRENTRY-Headern auf.',
  },
  {
    type: 'paragraph',
    html: 'Das Ergebnis ist eine legitime ICO-Datei, kein bloßes Umbenennen der Datei. Die Pixeldaten sind mit der korrekten Struktur verpackt, die Windows, macOS und alle modernen Browser beim Laden eines Favicons oder Anwendungs-Icons erwarten.',
  },
  {
    type: 'tip',
    title: 'Tipp für scharfe Favicons',
    html: 'Generieren Sie Ihr ICO immer aus der Quelle mit der höchsten verfügbaren Auflösung. Ein WebP mit 512×512 oder mehr erzeugt ein perfekt scharfes Favicon auf Retina- und 4K-Displays, wo Icons mit niedriger Auflösung unscharf wirken.',
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
      'Erstellen der Datei favicon.ico für jede Website oder Web-App.',
      'Generieren von Anwendungs-Icons für Windows-Software-Installer.',
      'Erstellen von Desktop-Icons für Electron-Apps oder ähnliche Frameworks.',
      'Erstellen von Icon-Sets für Chrome- und Firefox-Browser-Erweiterungen.',
      'Konvertieren von Markenfotos in WebP-Icons für Unternehmensanwendungen.',
    ],
  },
  {
    type: 'title',
    text: 'Fazit',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Ihr moderner Design-Workflow erzeugt WebP; das Anwendungs-Ökosystem verlangt immer noch nach ICO. Dieses Tool schließt diese Lücke in Sekunden und generiert Icons mit der korrekten binären Struktur und intakter Transparenz, ohne dass Ihre Marken-Assets jemals Ihren Browser verlassen.',
  },
];

export const content: WebpAIcoLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({
    title,
    description,
    inLanguage: 'de',
    faq,
    howTo,
  }),
};
