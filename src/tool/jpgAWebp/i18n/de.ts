import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAWebpLocaleContent } from '../index';

const slug = 'jpg-zu-webp-konverter';
const title = 'JPG zu WebP Konverter Online und Kostenlos';
const description =
  'Konvertieren Sie JPG-Bilder direkt in Ihrem Browser in WebP. Überlegene Kompression ohne sichtbaren Qualitätsverlust. Keine Dateiuploads. Kostenlos, unbegrenzt und privat.';

const ui: ImageConverterUI = {
  dragText: 'JPG-Dateien hierher ziehen...',
  convertText: 'Um sie sofort in WebP zu konvertieren',
  selectFiles: 'Dateien auswählen',
  processedFiles: 'Verarbeitete Dateien',
  downloadAll: 'Alles herunterladen (.zip)',
  pending: 'Ausstehend',
  bibliographyTitle: 'Literaturhinweise',
  faqTitle: 'Häufig gestellte Fragen',
};

const faq: JpgAWebpLocaleContent['faq'] = [
  {
    question: 'Warum JPG-Fotos in WebP konvertieren?',
    answer:
      'WebP ermöglicht eine deutlich bessere Kompression herkömmlicher JPG-Dateien, ohne dass das menschliche Auge den Unterschied bemerkt. Dies führt zu schnelleren und moderneren Websites.',
  },
  {
    question: 'Muss ich pro Bild bezahlen?',
    answer:
      'Nein, das Tool ist kostenlos und alles wird direkt auf Ihrem Computer verarbeitet. Es ist unbegrenzt sowohl für den privaten als auch für den professionellen Gebrauch.',
  },
  {
    question: 'Ist die Konvertierung sicher?',
    answer:
      'Ja, absolut. Die gesamte Verarbeitung findet im HTML5 Canvas Ihres lokalen Browsers statt, ohne dass Daten an externe Server gesendet werden.',
  },
];

const howTo: JpgAWebpLocaleContent['howTo'] = [
  {
    name: 'JPG-Fotos einfügen',
    text: 'Legen Sie Ihre JPG-Dateien ab oder ziehen Sie sie direkt in den oberen Bereich. Die Erkennung erfolgt praktisch sofort.',
  },
  {
    name: 'Verarbeitung zu WebP',
    text: 'Die lokale Rendering-Engine konvertiert jede Bilddatei in ein ultra-optimiertes WebP, das für das Web bereit ist.',
  },
  {
    name: 'Ergebnisse herunterladen',
    text: 'Speichern Sie jedes WebP einzeln oder laden Sie die ZIP-Datei mit allen konvertierten Dateien herunter.',
  },
];

const bibliography: JpgAWebpLocaleContent['bibliography'] = [
  {
    name: 'Google WebP Kompressionsstudie',
    url: 'https://developers.google.com/speed/webp/docs/webp_study',
  },
  {
    name: 'Web.dev: Bilder in modernen Formaten bereitstellen',
    url: 'https://web.dev/uses-webp-images/',
  },
];

const seo: JpgAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'JPG zu WebP Konverter: Beschleunigen Sie Ihre Seite mit Googles modernem Format',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Das <strong>JPG</strong>-Format dominiert seit Jahrzehnten die digitale Fotografie – universell kompatibel und weit verbreitet. Doch Google hat <strong>WebP</strong> entwickelt, um JPG in seinem eigenen Bereich zu schlagen: dieselbe visuelle Qualität bei 25–35 % geringerer Dateigröße. Für Entwickler und Marketingteams, die gegen langsame Ladezeiten kämpfen, ist die Konvertierung von JPG in WebP die wertvollste Optimierung, die ohne Änderungen am Design vorgenommen werden kann.',
  },
  {
    type: 'title',
    text: 'JPG oder WebP? Wann welches Format zu verwenden ist',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> bleibt die richtige Wahl, wenn Sie universelle Kompatibilität benötigen: E-Mails an Kunden, Word-Dokumente, ältere Social-Media-Plattformen oder CMS-Systeme, die WebP noch nicht akzeptieren. Sein dreißigjähriges Ökosystem garantiert, dass jeder Bildschirm, Drucker oder Betrachter es problemlos öffnen kann. Der Hauptnachteil ist die Größe – ein 1,5 MB großes JPG im Header kann den LCP-Score Ihrer Seite verschlechtern und die Schwellenwerte für Google Core Web Vitals verfehlen.',
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> ist die intelligente Wahl für alle Inhalte auf Ihrer Website. Chrome, Firefox, Safari und Edge unterstützen es seit Jahren nativ. Produktbilder im E-Commerce, Blog-Banner, Video-Thumbnails und alle online veröffentlichten Fotos profitieren direkt: leichtere Seiten, bessere Google PageSpeed Insights Scores und eine flüssigere Benutzererfahrung – besonders bei langsamen mobilen Verbindungen.',
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
          'Netzwerklatenz beim Hoch- und Herunterladen',
          'Ihre Fotos werden auf Servern von Drittanbietern gespeichert',
          'Dateigrößenlimits und tägliche Konvertierungsbeschränkungen',
          'Aufdringliche Werbung und Drittanbieter-Tracker',
        ],
      },
      {
        title: 'Unsere lokale Architektur',
        description: 'Direkte Verarbeitung auf Ihrer Hardware mittels Vanilla JS-Technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Sofortige Geschwindigkeit – keine Netzwerklatenz',
          'Vollständige Privatsphäre – 0 Byte werden extern gesendet',
          'Keine Megabyte-Limits oder Dateianzahlbeschränkungen',
          'Saubere Benutzeroberfläche, keine Werbung oder Tracking',
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
    html: 'Wenn Sie ein JPG in das Tool ziehen, erstellt der Browser ein <strong>Blob-Objekt</strong>, das nur in Ihrem RAM existiert. Dieser Blob wird dekodiert und auf ein unsichtbares <strong>HTML5 Canvas</strong>-Element gezeichnet. Da JPG kein Alpha-Kanal besitzt, erfolgt die Konvertierung in WebP direkt: Die Engine exportiert das Canvas durch Aufruf von <code>toDataURL(\'image/webp\')</code> und erzeugt einen Byte-Stream, den Ihr Betriebssystem sofort herunterlädt – ganz ohne Server.',
  },
  {
    type: 'paragraph',
    html: 'Der WebP-Kompressionsalgorithmus kombiniert Techniken zur Blockvorhersage (ähnlich denen in VP8, Googles Video-Codec) mit Farbumwandlungen und arithmetischer Kodierung. Das Ergebnis ist eine Datei, die dieselben Wahrnehmungsinformationen wie das ursprüngliche JPG enthält, aber weitaus effizienter verpackt ist – was bedeutet, dass bei jedem Seitenaufruf weniger Kilobyte übertragen werden.',
  },
  {
    type: 'tip',
    title: 'Core Web Vitals Tipp: LCP und Bildgewicht',
    html: 'Der <strong>Largest Contentful Paint (LCP)</strong> ist die Google-Metrik, die misst, wie lange es dauert, bis das größte visuelle Element auf Ihrer Seite geladen ist. Ein 1,5 MB großes Header-JPG kann zu einem WebP von nur 900 KB – oder sogar 600 KB – werden, ohne dass ein sichtbarer Unterschied besteht. Diese <strong>Ersparnis von 25–35 %</strong> kann Ihren LCP von "Verbesserungswürdig" auf "Gut" heben und Sie in den Suchergebnissen weiter nach oben bringen.',
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
      'Produktbilder in WooCommerce- oder Shopify-Shops: weniger Gewicht, mehr Conversions.',
      'Fotografie für Blogs und Artikel: bessere PageSpeed-Werte ohne Redesign.',
      'Web-Banner und Werbemittel: leichtere Dateien bei gleicher Schärfe.',
      'Portfolio-Galerien für Architektur-, Fotografie- oder Designstudios.',
      'Video-Thumbnails auf Streaming-Seiten oder Online-Kursplattformen.',
    ],
  },
  {
    type: 'title',
    text: 'Fazit',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Die Konvertierung Ihrer JPGs in WebP ist heute eine der einfachsten und kosteneffizientesten Optimierungen, die Sie für jede Website vornehmen können. Mit diesem Tool erledigen Sie das in Sekunden, kostenlos und ohne dass Ihre Bilder jemals Ihr Gerät verlassen. Weniger Kilobyte, besserer LCP, schnellere Seiten – alles bei exakt demselben Erscheinungsbild wie zuvor.',
  },
];


export const content: JpgAWebpLocaleContent = {
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
