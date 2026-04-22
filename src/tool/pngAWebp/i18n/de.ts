import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAWebpLocaleContent } from '../index';

const slug = 'png-zu-webp-konverter';
const title = 'PNG zu WebP Konverter Online und Kostenlos';
const description =
  'Konvertieren Sie PNG-Bilder in Ihrem Browser in WebP. Bis zu 40 % geringere Dateigröße. Transparenz bleibt erhalten. Keine Dateiuploads. Kostenlos und privat.';

const ui: ImageConverterUI = {
  dragText: 'PNG-Dateien hierher ziehen...',
  convertText: 'Um sie sofort in WebP zu konvertieren',
  selectFiles: 'Dateien auswählen',
  processedFiles: 'Verarbeitete Dateien',
  downloadAll: 'Alles herunterladen (.zip)',
  pending: 'Ausstehend': 'Literaturhinweise',
  faqTitle: 'Häufig gestellte Fragen',
};

const faq: PngAWebpLocaleContent['faq'] = [
  {
    question: 'Warum PNG in WebP konvertieren?',
    answer:
      'WebP bietet bei gleicher Qualität eine bis zu 40 % bessere Komprimierung als PNG und unterstützt gleichzeitig die Alpha-Transparenz. Es ist das von Google PageSpeed Insights empfohlene Format.',
  },
  {
    question: 'Geht bei dem Prozess die Transparenz verloren?',
    answer:
      'Nein. Die technische Implementierung von WebP unterstützt den Alpha-Kanal. Die Transparenzen der ursprünglichen PNG bleiben in der neuen WebP-Datei erhalten.',
  },
  {
    question: 'Gelangen meine Bilder auf einen Server?',
    answer:
      'Nein. Der Code wird ausschließlich in Ihrem Browser ausgeführt (Client-Side). Wir sehen, protokollieren oder speichern die von Ihnen konvertierten Bilder niemals.',
  },
];

const howTo: PngAWebpLocaleContent['howTo'] = [
  {
    name: 'PNGs einfügen',
    text: 'Ziehen Sie Ihre großen PNG-Dateien in den Upload-Bereich oder nutzen Sie den klassischen interaktiven Auswahldialog.',
  },
  {
    name: 'Kanal-Erkennung',
    text: 'Die lokale Rendering-Engine erkennt die Pixelzusammensetzung und exportiert sie in das optimierte WebP-Format.',
  },
  {
    name: 'Direkter Download',
    text: 'Laden Sie Ihre stark komprimierten WebP-Dateien einzeln herunter oder fassen Sie sie mit dem ZIP-Paket-Konverter zusammen.',
  },
];

const seo: PngAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG zu WebP Konverter: Transparenz und moderne Kompression für das Web',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> war jahrzehntelang das Referenzformat für Webbilder mit Transparenz – Logos, Icons, UI-Elemente, Produktbilder auf freigestelltem Hintergrund. Das Problem ist die Dateigröße: Die verlustfreie Kompression, die Qualität garantiert, erzeugt auch spürbar große Dateien. Googles <strong>WebP</strong> löst diesen Widerspruch: Es unterstützt den Alpha-Kanal (Transparenz) <em>und</em> komprimiert weitaus besser als PNG, was den Wechsel von PNG zu WebP auf Ihrer Website zu einer perfekten Optimierung macht, bei der Sie auf nichts verzichten müssen.',
  },
  {
    type: 'title',
    text: 'PNG oder WebP? Wann welches Format zu verwenden ist',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> bleibt das richtige Format, wenn Kompatibilität entscheidend ist: Design-Tools wie Photoshop oder Figma, Druck-Workflows, ältere Desktop-Anwendungen oder jeder Kontext, in dem WebP-Unterstützung nicht garantiert ist. Es ist auch das ideale Format für das Speichern von Arbeitsebenen in Bearbeitungspipelines, da seine verlustfreie Kompression jeden Pixel bewahrt. Der Preis: Dateien, die 3–8 Mal mehr wiegen können als ihr WebP-Äquivalent.',
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> ist der natürliche Ersatz für PNG für alle modernen Web-Inhalte. Chrome, Firefox, Safari und Edge unterstützen es nativ. Ein verlustfreies WebP-Bild ist 26 % kleiner als die entsprechende PNG-Datei; im verlustbehafteten Modus kann es bis zu 40 % kleiner sein, bei praktisch nicht unterscheidbarer visueller Qualität. Und entscheidend für das Webdesign: <strong>WebP bewahrt die Alpha-Transparenz</strong> genau wie PNG, ohne visuelle Kompromisse.',
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
          'Ihre Logos und Bilder werden auf Servern von Drittanbietern gespeichert',
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
    html: 'Die PNG wird lokal geladen und in einem im Speicher befindlichen <strong>HTML5 Canvas</strong> dekodiert. Die Canvas-API bewahrt den Alpha-Kanal der ursprünglichen PNG – alle transparenten und halbtransparenten Pixel bleiben im RGBA-Pixelbuffer intakt. Das Canvas wird dann durch Aufruf von <code>toDataURL(\'image/webp\')</code> exportiert, wodurch der WebP-Codec des Browsers (basierend auf Googles libwebp) angewendet wird, um eine kompaktere Datei zu erzeugen, ohne die Transparenzdaten zu verändern.',
  },
  {
    type: 'paragraph',
    html: 'WebP verwendet zwei Kompressionsmodi: den verlustfreien Modus für Bilder, bei denen jeder Pixel exakt dem Original entsprechen muss, und den verlustbehafteten Modus für Fotos und Elemente, bei denen kleine Unterschiede unmerklich sind. Der verlustfreie Modus erzeugt Dateien, die 26 % kleiner als PNG sind; der verlustbehaftete Modus kann Reduktionen von bis zu 40 % im Vergleich zu PNG erreichen, während eine exzellente visuelle Qualität beibehalten wird.',
  },
  {
    type: 'tip',
    title: 'Tipp: WebP schlägt sowohl PNG als auch JPG im Web',
    html: 'WebP im verlustfreien Modus ist kleiner als PNG. WebP im verlustbehafteten Modus ist kleiner als JPG. Damit ist WebP das <strong>einzige Format, das beide im Web-Kontext ersetzt</strong>. Konvertieren Sie Ihre transparenten PNGs vor dem Hochladen in WebP: Google PageSpeed Insights erkennt dies und bewertet es in Audits für "Bilder in modernen Formaten bereitstellen" positiv.',
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
      'Logos und Icons mit transparentem Hintergrund für Websites und Apps.',
      'Produktbilder mit freigestelltem Hintergrund in E-Commerce-Shops.',
      'CSS-Sprites und UI-Elemente mit Alpha-Transparenz.',
      'Rasterisierte Illustrationen und Vektorgrafiken für Landing Pages.',
      'Artikel-Thumbnails mit transparentem Hintergrund in Blogs und Nachrichtenportalen.',
    ],
  },
  {
    type: 'title',
    text: 'Fazit',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Der Wechsel von PNG zu WebP ist die umfassendste Webbild-Optimierung, die verfügbar ist: Sie erhalten leichtere Dateien, bewahren die Transparenz und verbessern die Core Web Vitals-Metriken, ohne etwas an Ihrem visuellen Design zu ändern. Dieses Tool erledigt das sofort, kostenlos und völlig privat – Ihre Bilder werden in Ihrem Browser verarbeitet und verlassen niemals Ihr Gerät.',
  },
];


export const content: PngAWebpLocaleContent = {
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
