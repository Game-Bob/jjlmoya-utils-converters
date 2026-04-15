import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAPngLocaleContent } from '../index';

const slug = 'gif-zu-png-konvertieren';
const title = 'GIF in PNG online konvertieren';
const description =
  'Extrahieren Sie das erste Bild aus Ihren GIFs und konvertieren Sie es in PNG unter Beibehaltung der Transparenz. Ohne Server. Lokale Verarbeitung. Kostenlos.';

const ui: ImageConverterUI = {
  dragText: 'GIF-Dateien hierhere ziehen...',
  convertText: 'Um sie sofort in PNG zu konvertieren',
  selectFiles: 'Dateien auswählen',
  processedFiles: 'Verarbeitete Dateien',
  downloadAll: 'Alles herunterladen (.zip)',
  pending: 'Ausstehend',
  bibliographyTitle: 'Literaturhinweise',
  faqTitle: 'Häufig gestellte Fragen',
};

const faq: GifAPngLocaleContent['faq'] = [
  {
    question: 'Warum sollte man ein animiertes Format wie GIF in ein statisches Format wie PNG konvertieren?',
    answer:
      'Viele soziale Netzwerke oder Avatare unterstützen keine Bilder, die sich ändern. Das Extrahieren des ersten Rahmens eines komplexen GIFs in ein hochwertiges PNG löst Barrieren und reduziert unnötiges Dateigewicht.',
  },
  {
    question: 'Bleiben die Transparenzen des alten GIFs im resultierenden PNG erhalten?',
    answer:
      'Ja, im Gegensatz zu JPG behält das PNG-Format den Alphakanal bei. Wenn das GIF einen transparenten Hintergrund hatte, behält das PNG diesen mit scharfen Kanten bei.',
  },
  {
    question: 'Speichern Sie meine Bilder nach der Verarbeitung eine Zeit lang auf den Servern?',
    answer:
      'Kein Server behält Ihr GIF; die gesamte Extraktion erfolgt lokal dank der Web-Canvas-API. Der Prozessor Ihres PCs dekodiert Ihre Datei sicher, ohne Kontakt zum Netzwerk.',
  },
];

const howTo: GifAPngLocaleContent['howTo'] = [
  {
    name: 'Animation bereitstellen',
    text: 'Ziehen Sie die schweren GIF-Dateien in das Einfügefeld.',
  },
  {
    name: 'Perfektes extrahiertes Foto',
    text: 'Das System stoppt den Ursprung der Bewegung exakt und erstellt in Millisekunden eine makellose Kopie.',
  },
  {
    name: 'Statische Bilder speichern',
    text: 'Speichern Sie das gesamte Volumen an statischen GIF-Avataren, die in PNG konvertiert wurden, massenhaft als ZIP.',
  },
];

const bibliography: GifAPngLocaleContent['bibliography'] = [
  {
    name: 'World Wide Web Consortium: PNG format',
    url: 'https://www.w3.org/TR/png/',
  },
  {
    name: 'CompuServe GIF Information',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
];

const seo: GifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'GIF-zu-PNG-Konverter: Überwinden Sie die Farb- und Transparenzgrenzen von GIF',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'GIF wurde zu einer Zeit entwickelt, als Monitore kaum 256 Farben anzeigen konnten. Jahrzehnte später ist diese Einschränkung immer noch seine größte Schwäche. PNG wurde genau deshalb geboren, um GIF in allen Anwendungsfällen zu ersetzen, in denen Qualität und Transparenz wichtig sind: Logos, Icons, Interface-Grafiken und jedes Bild mit transparentem Hintergrund, das auf jedem Hintergrund perfekt aussehen soll.',
  },
  {
    type: 'title',
    text: 'GIF vs. PNG: Die Revolution der 16 Millionen Farben',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Der kritischste Unterschied zwischen GIF und PNG ist nicht nur die Anzahl der Farben. GIF unterstützt binäre Transparenz: Jedes Pixel ist entweder opak oder vollständig transparent, ohne Abstufungen. PNG hingegen unterstützt den vollen Alphakanal mit 256 Stufen der Opazität pro Pixel. Dies bedeutet, dass die Kanten eines Logos in PNG perfekt geglättet werden können, während die von GIF eine charakteristische Zackenbildung auf farbigen Hintergründen zeigen.',
  },
  {
    type: 'paragraph',
    html: 'Zusätzlich zur überlegenen Transparenz hebt PNG die 256-Farben-Grenze von GIF auf. Screenshots, Illustrationen mit Verläufen, Logos mit Schatten: Alle sehen in PNG deutlich besser aus. Und da es sich um eine verlustfreie Kompression handelt, behält jedes Pixel exakt den Originalwert bei, ohne die Artefakte, die eine Konvertierung in JPG einführen würde.',
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
        description: 'Tools, die Ihre Bilder auf einem Remote-Server verarbeiten.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Ihre Logos und Icons reisen über das Internet',
          'Wartezeit durch Netzwerklatenz',
          'Dateigrößen- und Anzahl-Limits',
          'Ihre Bilder können in Caches von Drittanbietern verbleiben',
        ],
      },
      {
        title: 'Unsere lokale Architektur',
        description: 'Direkte Verarbeitung auf Ihrer Hardware mittels Vanilla JS-Technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Das GIF verlässt nie Ihr Gerät',
          'Sofortige Konvertierung ohne Netzwerk',
          'Keine Datei- oder Dateigrößenlimits',
          'Absolute Privatsphäre: 0 gesendete Bytes',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Wie die lokale GIF-zu-PNG-Konvertierung funktioniert',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Die Konvertierung nutzt das Canvas-API des Browsers. Das GIF wird im Speicher als natives Image-Element dekodiert. Beim Rendern auf einem HTML5-Canvas erfasst die Grafik-Engine des Browsers den ersten Rahmen mit all seinen ursprünglichen Transparenzinformationen intakt.',
  },
  {
    type: 'paragraph',
    html: 'Im Gegensatz zur Konvertierung in JPG ist bei PNG kein weißer Hintergrund erforderlich. Der Alphakanal des ursprünglichen GIFs wird direkt in das exportierte PNG übernommen. Die <code>toDataURL(\'image/png\')</code> Methode generiert den PNG-Bytestrom im RAM Ihres Computers ohne jegliche Netzwerkübertragung, und die Datei wird direkt heruntergeladen.',
  },
  {
    type: 'tip',
    title: 'Binäre Transparenz von GIF vs. Alphakanal von PNG',
    html: 'GIF unterstützt nur binäre Transparenz (opak oder transparent). Bei der Konvertierung in PNG bleiben die halbtransparenten Pixel des GIFs so erhalten, wie der Browser sie interpretiert. Wenn Ihr GIF gezackte Kanten hat, behält das PNG diese bei — aber Sie können sie mit Kantenglättung in jedem Editor bearbeiten, was mit dem ursprünglichen GIF unmöglich ist.',
  },
  {
    type: 'title',
    text: 'Anwendungsfälle und Kompatibilität des resultierenden PNGs',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Logos und Icons für die Verwendung auf beliebigem Hintergrund.',
      'Avatare für Discord, Telegram, Slack und Gaming-Plattformen.',
      'Interface-Grafiken für Web- und Mobil-Apps.',
      'Personalisierte Sticker und Emojis mit transparentem Hintergrund.',
      'Screenshots und UI-Elemente für technische Dokumentation.',
    ],
  },
  {
    type: 'title',
    text: 'Fazit: PNG ist das, was GIF immer sein wollte',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Die Konvertierung von GIF in PNG ist nicht nur ein Formatwechsel: Es ist die Aktualisierung eines Bildes auf den modernen Standard, den GIF nie erreichen konnte. Mehr Farben, bessere Transparenz, weniger Gewicht. Unser Tool führt diese Konvertierung in Millisekunden direkt im Browser durch, ohne Daten nach außen zu senden.',
  },
];


export const content: GifAPngLocaleContent = {
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
