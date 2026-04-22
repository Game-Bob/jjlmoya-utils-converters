import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAPngLocaleContent } from '../index';

const slug = 'svg-zu-png-konverter';
const title = 'SVG zu PNG Konverter Online und Kostenlos';
const description =
  'Konvertieren Sie SVG-Vektordateien in Ihrem Browser in PNG. HD-Ausgabe mit doppelter Skalierung. Transparenz bleibt erhalten. Kostenlos und 100 % privat.';

const ui: ImageConverterUI = {
  dragText: 'SVG-Dateien hierher ziehen...',
  convertText: 'Um sie sofort in PNG zu konvertieren',
  selectFiles: 'Dateien auswählen',
  processedFiles: 'Verarbeitete Dateien',
  downloadAll: 'Alles herunterladen (.zip)',
  pending: 'Ausstehend': 'Literaturhinweise',
  faqTitle: 'Häufig gestellte Fragen',
};

const faq: SvgAPngLocaleContent['faq'] = [
  {
    question: 'Warum SVG-Dateien in PNG konvertieren?',
    answer:
      'SVG basiert auf Vektoren und ist ideal für Logos, aber manchmal benötigen Sie das gerasterte PNG-Format für die Verwendung in Anwendungen, die keine Vektoren unterstützen, oder zum Teilen über Messaging-Apps oder soziale Medien.',
  },
  {
    question: 'Kann ich die Ausgabegröße wählen?',
    answer:
      'Wir verdoppeln derzeit den Maßstab der Quell-SVG, damit die PNG-Ausgabe scharf ist und sich für Retina- oder 4K-Bildschirme eignet.',
  },
  {
    question: 'Bleibt die SVG-Transparenz erhalten?',
    answer:
      'Ja, die resultierende PNG bewahrt den Alpha-Kanal der ursprünglichen SVG, sodass alle transparenten Hintergründe intakt bleiben.',
  },
];

const howTo: SvgAPngLocaleContent['howTo'] = [
  {
    name: 'SVG-Dateien einfügen',
    text: 'Ziehen Sie Ihre SVG-Dateien direkt in den oberen Bereich.',
  },
  {
    name: 'PNG-Erzeugung in HD',
    text: 'In Millisekunden wandelt unsere lokale Engine jeden Vektor in eine HD-Pixelebene im transparenten PNG-Format um.',
  },
  {
    name: 'Dateien herunterladen',
    text: 'Speichern Sie die generierten PNGs einzeln oder als ZIP-Paket.',
  },
];

const seo: SvgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'SVG zu PNG Konverter: Vom unendlichen Vektor zum universellen Raster',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>SVG</strong> (Scalable Vector Graphics) ist die perfekte Wahl für Webdesign: unendlich skalierbar, leichtgewichtig und mit jedem Code-Editor editierbar. Doch wenn Sie dieses Logo oder Icon in einer mobilen App verwenden, es in sozialen Medien teilen oder in eine PowerPoint Präsentation einfügen möchten, stoßen Sie auf eine Hürde: Die meisten dieser Plattformen unterstützen kein SVG. Das <strong>PNG</strong>-Format ist die universelle Lösung: gerastert, mit einem Alpha-Kanal und in absolut jedem Kontext kompatibel.',
  },
  {
    type: 'title',
    text: 'SVG vs PNG: Vektoren für das Web, Raster für die Welt',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG speichert das Bild als mathematische Anweisungen: eine Bézier Kurve, ein Gradient, ein Polygon. Das bedeutet, dass dieselbe Datei bei 16 oder 16.000 Pixeln perfekt aussieht. Es ist das ideale Format für Ihren Webcode, CSS-Animationen und jedes Element, das sich ohne Qualitätsverlust an verschiedene Bildschirmauflösungen anpassen muss.',
  },
  {
    type: 'paragraph',
    html: 'PNG speichert das Bild als Pixelgitter mit Farb- und Transparenzinformationen für jeden Pixel. Es ist ein <strong>verlustfreies</strong> Format, was bedeutet, dass die Qualität vollständig erhalten bleibt. Sobald eine SVG zu PNG gerastert wurde, ist die Auflösung fest vorgegeben. Deshalb ist die Wahl der richtigen Exportgröße entscheidend: Unser Tool rendert doppelt skaliert (2x), um Schärfe auf Retina und 4K Bildschirmen zu gewährleisten.',
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
          'Ihr SVG-Code gelangt auf externe Server',
          'Remote-Rendering mit inkonsistenter Qualität',
          'Wartezeit für Upload und Verarbeitung',
          'Einschränkungen bei der SVG-Dateigröße',
        ],
      },
      {
        title: 'Unsere lokale Architektur',
        description: 'Direkte Verarbeitung auf Ihrer Hardware mittels Vanilla JS-Technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Ihre SVG verlässt niemals Ihren Browser',
          'Rendering durch die native Browser-Engine für maximale Treue',
          'PNG in 2x Auflösung für hochdichte Bildschirme',
          'Transparenz bleibt dank vollem Alpha-Kanal erhalten',
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
    html: 'Der Prozess beginnt mit dem Laden der SVG-Datei in ein JavaScript <strong>Image</strong>-Element. Sobald die Browser-Engine den Vektor-XML analysiert und gerendert hat, wird das resultierende Bild auf ein <strong>HTML5 Canvas</strong> gezeichnet, dessen Dimensionen doppelt so groß wie die ursprüngliche SVG-Größe sind (2x Skalierung). Dies erzeugt eine PNG mit der doppelten Anzahl an Pixeln pro Dimension, ideal für hochauflösende Bildschirme.',
  },
  {
    type: 'paragraph',
    html: 'Im Gegensatz zur Konvertierung in JPG behält das Canvas beim Export in PNG den vollen Alpha-Kanal bei: Transparente Bereiche in der ursprünglichen SVG werden zu vollständig transparenten Pixeln in der resultierenden PNG – ohne weiße Hintergrundfüllung. Der Export nutzt die Methode <code>toDataURL(\'image/png\')</code> mit verlustfreier Kompression.',
  },
  {
    type: 'tip',
    title: 'Tipp vor dem Rastern',
    html: 'Wählen Sie Ihre PNG-Exportgröße sorgfältig – das Rastern einer SVG ist ein Einwegprozess: Sie können die Vektoren nicht aus der resultierenden PNG wiederherstellen. Behalten Sie immer die Original-SVG als Masterquelle und generieren Sie PNGs in der höchsten Auflösung, die Sie jemals benötigen könnten.',
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
      'Exportieren von Vektor-Logos für PowerPoint oder Google Slides Präsentationen.',
      'Erstellen von PNG-Icons für iOS, Android oder Progressive Web Apps.',
      'Teilen von SVG-Designs auf Instagram, LinkedIn oder anderen sozialen Medien.',
      'Einfügen von Vektor-Illustrationen in Word-Dokumente oder PDFs.',
      'Generieren von PNG-Thumbnails von SVG-Grafiken für die CMS-Vorschau.',
    ],
  },
  {
    type: 'title',
    text: 'Fazit',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG ist die Sprache der Vektoren; PNG ist der Reisepass für den Rest der digitalen Welt. Dieses Tool rastert Ihre SVGs in 2x Auflösung mit erhaltener Transparenz direkt in Ihrem Browser, ohne dass ein einziges Byte Ihres Designs an einen externen Server gesendet wird.',
  },
];


export const content: SvgAPngLocaleContent = {
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
