import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAJpgLocaleContent } from '../index';

const slug = 'png-zu-jpg-konvertieren';
const title = 'PNG in JPG Online Konvertieren';
const description =
  'Konvertieren Sie Ihre PNG-Bilder sofort auf Ihrem eigenen Computer in das schnell komprimierte JPG-Format. Ohne Fotos ins Internet hochzuladen. Batch-Optimierung.';

const ui: ImageConverterUI = {
  dragText: 'PNG-Dateien hierher ziehen...',
  convertText: 'Um sie sofort in JPG zu konvertieren',
  selectFiles: 'Dateien auswählen',
  processedFiles: 'Verarbeitete Dateien',
  downloadAll: 'Alles herunterladen (.zip)',
  pending: 'Ausstehend': 'Literaturhinweise',
  faqTitle: 'Häufig gestellte Fragen',
};

const faq: PngAJpgLocaleContent['faq'] = [
  {
    question: 'Warum sollten Sie unseren lokalen PNG-zu-JPG-Konverter wählen?',
    answer:
      'Im Gegensatz zu herkömmlichen Tools verarbeitet unser Tool die Dateien vollständig in Ihrem Browser. Ihre Bilder berühren nie eine fremde Festplatte, was die totale Souveränität und Privatsphäre Ihrer Daten garantiert.',
  },
  {
    question: 'JPG oder PNG? Was ist besser für meinen Fall?',
    answer:
      'PNG ist ideal für Logos und Elemente mit Transparenz. JPG hingegen ist der Goldstandard für Fotos und Web-Banner, da es viel geringere Dateigrößen erreicht und so die Ladegeschwindigkeit einer Website drastisch verbessert.',
  },
  {
    question: 'Wie funktioniert die technische Konvertierung ohne Upload?',
    answer:
      'Wir nutzen die Leistung des HTML5-Canvas. Der Browser stellt das Bild auf einer unsichtbaren virtuellen Leinwand dar, füllt Transparenzen mit Weiß und erzeugt einen Byte-Stream, den Sie sofort direkt herunterladen.',
  },
  {
    question: 'Ist es sicher für vertrauliche Dokumente?',
    answer:
      'Ja, es ist die sicherste Option für Fachleute aus den Bereichen Banken, Gesundheit oder Recht. Da es sich um eine "Black Box" handelt, die nur Ihren RAM nutzt, werden alle Daten beim Schließen des Tabs gelöscht, wodurch Lecks in Drittanbieter-Clouds vermieden werden.',
  },
];

const howTo: PngAJpgLocaleContent['howTo'] = [
  {
    name: 'Dateiauswahl',
    text: 'Bereiten Sie Ihre PNG-Dateien in einem Ordner vor und ziehen Sie sie alle zusammen in den Verarbeitungsbereich oder suchen Sie sie mit dem Explorer.',
  },
  {
    name: 'Sofortige Verarbeitung',
    text: 'Überprüfen Sie, ob sich der Status für jede Datei auf "Fertig" ändert, während der Browser die Dateigröße lokal optimiert.',
  },
  {
    name: 'Optimierter Download',
    text: 'Speichern Sie Ihre neuen JPG-Dateien einzeln oder verwenden Sie die Schaltfläche "Alles herunterladen", um eine komprimierte ZIP-Datei mit allen Bildern zu erhalten.',
  },
];

const seo: PngAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG-zu-JPG-Konverter: Der ultimative Leitfaden zur Bildoptimierung',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'In der Welt des digitalen Designs und der Webentwicklung ist Effizienz alles. Das PNG-Format (Portable Network Graphics) wird für seine Fähigkeit geliebt, Transparenzen beizubehalten und eine verlustfreie Kompression zu bieten, hat aber einen großen Feind: das Dateigewicht. Wenn Sie möchten, dass Ihre Website fliegt oder Ihre E-Mails sofort geladen werden, ist der Wechsel von PNG zu JPG die intelligenteste technische Entscheidung.',
  },
  {
    type: 'title',
    text: 'JPG oder PNG?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Es gibt kein Format, das besser als das andere ist, sondern ein Werkzeug für jeden Bedarf. PNG ist ein verlustfreies Format, ideal für Interface-Mockups, Logos mit kleinem Text und visuelle Elemente, die einen transparenten Hintergrund erfordern. Diese Treue hat jedoch ihren Preis: Dateien, die 5- oder 10-mal schwerer sein können als ihr komprimiertes Äquivalent.',
  },
  {
    type: 'paragraph',
    html: 'JPG (Joint Photographic Experts Group) hingegen verwendet Diskretisierungsalgorithmen, um Informationen zu entfernen, die das menschliche Auge kaum wahrnimmt, und erreicht so Federgewicht. Es ist der Goldstandard für Fotos, Werbebanner und soziale Netzwerke. Indem Sie Ihre PNGs in JPGs konvertieren, tauschen Sie geometrische Treue gegen Netzwerkgeschwindigkeit ein.',
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
        description: 'Herkömmliche Tools, die Ihre Fotos auf einen Remote-Server hochladen.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Netzwerklatenz (Upload/Download)',
          'Risiko von Datenlecks privater Daten',
          'Dateigrößenbeschränkungen pro Datei',
          'Werbung und Tracker',
        ],
      },
      {
        title: 'Unsere lokale Architektur',
        description: 'Direkte Verarbeitung auf Ihrer Hardware mittels Vanilla JS-Technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Sofortige Geschwindigkeit ohne Netzwerk',
          'Garantierte Privatsphäre (0 Bytes gesendet)',
          'Keine MB-Limits pro Datei',
          'Professionelle und saubere Schnittstelle',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Wie die technische Konvertierung funktioniert',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Sie fragen sich wahrscheinlich, wie es möglich ist, ein Bild zu konvertieren, ohne es an einen Server zu senden. Die Magie liegt in der Leistung moderner Browser. Wenn Sie eine Datei auswählen, erzeugen wir einen Blob, der nur in Ihrem RAM existiert. Dieser Blob wird auf ein unsichtbares HTML5-Canvas-Element gezeichnet.',
  },
  {
    type: 'paragraph',
    html: 'Da JPG keine Transparenzen unterstützt, füllt unser Algorithmus den Hintergrund mit einer soliden weißen Farbe, bevor das PNG darauf "gemalt" wird. Sobald das Bild komponiert ist, führen wir die native Exportmethode aus und erzeugen einen Byte-Stream, den Ihr Computer direkt herunterlädt.',
  },
  {
    type: 'tip',
    title: 'SEO Tipp: Das ideale Gewicht',
    html: 'Google bestraft aktiv langsame Websites. Wenn Ihr Largest Contentful Paint (LCP) aufgrund eines 2MB großen Header-PNGs hoch ist, kann die Konvertierung in ein 200KB großes JPG Ihre PageSpeed-Metriken sofort verbessern, ohne visuelle Unterschiede.',
  },
  {
    type: 'title',
    text: 'Sicherheit für Unternehmen und Fachleute',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Wenn Sie in sensiblen Bereichen wie Banken, Gesundheit oder Recht arbeiten, ist das Hochladen von Dateien zu Online-Konvertern eine Sicherheitsverletzung. Unser Tool funktioniert wie eine "Black Box": Was drinnen passiert, bleibt in Ihrem RAM. Es ist der einzige sichere Weg, mit vertraulichen Dokumenten zu arbeiten.',
  },
  {
    type: 'title',
    text: 'Kompatibilität des Ergebnisses',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Anzeige auf Windows, macOS und mobilen Geräten.',
      'Soziale Netzwerke (Instagram, LinkedIn usw.).',
      'Office-Tools (Word, PowerPoint).',
      'Content-Management-Systeme (WordPress, Shopify).',
    ],
  },
  {
    type: 'title',
    text: 'Fazit: Optimieren wie ein Profi',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Dieser Konverter ist nicht nur eine weitere Seite; er ist ein Stück Ingenieurskunst, das Ihnen das Leben erleichtern soll. Egal, ob Sie Entwickler oder Privatanwender sind, hier ist die ultimative Lösung, um Megabytes zu sparen und Ihre Daten sicher aufzubewahren.',
  },
];


export const content: PngAJpgLocaleContent = {
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
