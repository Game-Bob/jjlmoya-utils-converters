import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAWebpLocaleContent } from '../index';

const slug = 'avif-zu-webp-konvertieren';
const title = 'AVIF in WebP Online Konvertieren';
const description =
  'Konvertieren Sie AVIF-Bilder in WebP mit besserer Kompatibilität. Lokale Verarbeitung ohne Server. Kostenlos, privat und unbegrenzt.';

const ui: ImageConverterUI = {
  dragText: 'AVIF-Dateien hierher ziehen...',
  convertText: 'Um sie sofort in WebP zu konvertieren',
  selectFiles: 'Dateien auswählen',
  processedFiles: 'Verarbeitete Dateien',
  downloadAll: 'Alles herunterladen (.zip)',
  pending: 'Ausstehend',
  bibliographyTitle: 'Literaturhinweise',
  faqTitle: 'Häufig gestelle Fragen',
};

const faq: AvifAWebpLocaleContent['faq'] = [
  {
    question: 'Was ist der eigentliche Unterschied zwischen der Konvertierung in WebP und anderen Formaten?',
    answer:
      'WebP bietet das Beste aus beiden Welten: Kompressionen, die so erstaunlich sind wie die von JPG, aber die Fähigkeit behalten, saubere Transparenzen wie ein PNG zu enthalten. Das Ändern Ihres AVIF in WebP maximiert die Kompatibilität für das Web und bewahrt gleichzeitig alle Vorteile.',
  },
  {
    question: 'Wie schaffen Sie es, dies ohne Server und so schnell zu ändern?',
    answer:
      'Wir nutzen die integrierten Dekodiermodule und das JavaScript HTML5 Image-Objekt, wodurch Ihr AVIF im lokalen Speicher gelesen und eine optimierte WebP-Datei in Rekordzeit extrahiert werden kann.',
  },
  {
    question: 'Ist das WebP-Format heutzutage vollständig kompatibel?',
    answer:
      'Im Gegensatz zum aufstrebenden AVIF genießt das WebP-Format eine sehr breite Unterstützung unter Browsern wie Chrome, Firefox und Safari.',
  },
];

const howTo: AvifAWebpLocaleContent['howTo'] = [
  {
    name: 'Fügen Sie Ihre Fotodateien ein',
    text: 'Verschieben und legen Sie alle AVIF-Formatauswahlen auf unsere Leinwand.',
  },
  {
    name: 'Algorithmen-Byte-Übersetzung',
    text: 'Unsere Engine verarbeitet die Algorithmen, ohne etwas hochzuladen, und erstellt exakte Iterationen basierend auf komprimiertem WebP.',
  },
  {
    name: 'Sammeln Sie Ihre fertigen Downloads',
    text: 'Klicken Sie auf das Panel und erhalten Sie Pakete in ZIP-Boxen oder einzeln, um sie direkt zu veröffentlichen.',
  },
];

const bibliography: AvifAWebpLocaleContent['bibliography'] = [
  {
    name: 'AV1 Image File Format',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'Google WebP Format Overview',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: AvifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'AVIF-zu-WebP-Konverter: Die moderne und sichere Alternative für das Web',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF ist das fortschrittlichste Bildformat, das heute verfügbar ist: kleiner als WebP, kleiner als JPG, mit überlegener visueller Qualität. Die Akzeptanz war jedoch ungleichmäßig – Safari unterstützte es erst 2024, und viele ältere Mobilgeräte kennen es nicht. WebP hingegen ist seit Jahren als der moderne Webstandard mit über 95 % globaler Unterstützung etabliert. Die Konvertierung von AVIF in WebP ist die pragmatische Entscheidung, wenn Sie Modernität benötigen, ohne die Kompatibilität zu riskieren.',
  },
  {
    type: 'title',
    text: 'AVIF vs. WebP: Das Neueste vs. Das Sicherste',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF bietet die fortschrittlichste verfügbare Kompression – typischerweise 20-30 % kleiner als WebP bei gleicher Qualität. Die auf AV1 basierende Technologie ist die modernste der Branche. Die AVIF-Unterstützung hat jedoch noch blinde Flecken: ältere Safari-Versionen, einige Browser auf älterem Android und bestimmte Desktop-Bildbetrachter erkennen es nicht. Für die Webproduktion mit großem und vielfältigem Publikum stellt dies ein Risiko dar.',
  },
  {
    type: 'paragraph',
    html: 'WebP hat eine viel solidere Support-Historie. Chrome hat es 2010 übernommen, Firefox und Edge folgten, und Safari hat es 2020 integriert. Mit über 95 % globaler Browser-Abdeckung ist WebP die sichere Wahl für jede Website, die keine Fallback-Formate bereitstellen möchte. Es unterstützt Transparenzen, verlustbehaftete und verlustfreie Kompression und erzielt viel kleinere Dateien als JPG oder PNG.',
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
        description: 'Tools, die Ihre AVIF-Dateien zur Verarbeitung auf einen Remote-Server hochladen.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Ihre privaten Bilder werden über externe Server übertragen',
          'Netzwerklatenz, die den Arbeitsfluss verlangsamt',
          'Dateibeschränkungen pro kostenloser Konvertierung',
          'Abhängigkeit von Diensten von Drittanbietern, die sich ändern können',
        ],
      },
      {
        title: 'Unsere lokale Architektur',
        description: 'Direkte Verarbeitung in Ihrem Browser mittels Vanilla JS-Technologie und Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Vollständige Privatsphäre – 0 Bytes verlassen Ihr Gerät',
          'Sofortige Geschwindigkeit ohne Netzwerkabhängigkeit',
          'Keine Beschränkungen der Dateigröße oder Dateianzahl',
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
    html: 'Chrome, Firefox und Edge enthalten native AVIF-Dekodierer. Beim Laden der Datei dekodiert die Bild-Engine des Browsers sie im RAM und behält die Informationen des Alphakanals bei. Das Bild wird auf ein unsichtbares HTML5-<code>Canvas</code> mit dem 2D-Kontext gezeichnet, der Transparenzen korrekt beibehält.',
  },
  {
    type: 'paragraph',
    html: 'Der Export erfolgt mit <code>toBlob(\'image/webp\', quality)</code>. Der Browser wendet den WebP-Kompressionsalgorithmus intern an und generiert einen Blob, der den Alphakanal enthält, wenn das Originalbild einen hatte. Dieser Blob wird in einen direkten Download-Link umgewandelt. Der gesamte Prozess findet in Mikrosekunden ohne jegliche Kommunikation mit externen Servern statt.',
  },
  {
    type: 'tip',
    title: 'WebP: Die pragmatische Wahl des modernen Entwicklers',
    html: 'WebP hat über 95 % Browser-Unterstützung – AVIF wächst, erreicht diese Zahl aber noch nicht. Für Websites in Produktion ohne adaptive Formaterkennung ist WebP die sichere Wahl, die fast jedes Publikum abdeckt. Konvertieren Sie Ihre AVIFs in WebP und stellen Sie moderne Bilder mit Vertrauen bereit.',
  },
  {
    type: 'title',
    text: 'Anwendungsfälle: Wann Sie WebP gegenüber AVIF wählen sollten',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Websites, die Unterstützung in Browsern ab 2020 ohne Polyfills benötigen.',
      'CDNs und Bildbereitstellungssysteme, die WebP, aber nicht AVIF akzeptieren.',
      'Hybride mobile Apps mit WebViews, die AVIF eventuell nicht unterstützen.',
      'Moderne HTML-E-Mails, bei denen WebP eine höhere Unterstützung hat als AVIF.',
      'CMS-Plattformen und E-Commerce mit etablierter WebP-Bildunterstützung.',
    ],
  },
  {
    type: 'title',
    text: 'Fazit: Modernität mit garantierter Kompatibilität',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF ist die Spitze der Bildkompression, aber WebP ist die zuverlässige und universelle Wahl des modernen Web-Ökosystems. Mit unserem Tool konvertieren Sie im Handumdrehen vom Neuesten zum am besten Unterstützten – ohne etwas auf einen Server hochzuladen, mit vollständiger Privatsphäre und ohne Größenbeschränkungen.',
  },
];


export const content: AvifAWebpLocaleContent = {
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
