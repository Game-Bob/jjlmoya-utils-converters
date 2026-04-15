import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAWebpLocaleContent } from '../index';

const slug = 'gif-in-webp-konvertieren';
const title = 'GIF in statisches WebP online konvertieren';
const description =
  'Konvertieren Sie animierte GIFs in statisches WebP. Bewahrt Transparenz. Kein Server erforderlich. Lokale Verarbeitung im Browser. Kostenlos.';

const ui: ImageConverterUI = {
  dragText: 'GIF-Dateien hierher ziehen...',
  convertText: 'Um sie sofort in WebP zu konvertieren',
  selectFiles: 'Dateien auswählen',
  processedFiles: 'Verarbeitete Dateien',
  downloadAll: 'Alles herunterladen (.zip)',
  pending: 'Ausstehend',
  bibliographyTitle: 'Literaturhinweise',
  faqTitle: 'Häufig gestellte Fragen',
};

const faq: GifAWebpLocaleContent['faq'] = [
  {
    question: 'Wozu eine animierte Datei in das moderne statische WebP-Format umwandeln?',
    answer:
      'WebP ist der Kompressionsstandard von Google; es ist bemerkenswert leichtgewichtig und erhält Transparenzen sauber. Der Wechsel von GIF zu WebP eliminiert die schwere Animation und führt zu einem enormen Gewinn an Web-Geschwindigkeit.',
  },
  {
    question: 'Bleibt der ursprüngliche Avatar transparent?',
    answer:
      'Ja, im Gegensatz zu JPEG respektiert der WebP-Container den komplexen Alpha-Kanal. Alle Silhouetten bleiben so perfekt, wie sie nativ waren.',
  },
  {
    question: 'Wohin werden die Dateien hochgeladen?',
    answer:
      'Es findet kein Upload statt. Die Verarbeitung erfolgt vollständig durch das JavaScript des Browsers auf Ihrem PC, ohne jegliche Remote-Übertragung.',
  },
];

const howTo: GifAWebpLocaleContent['howTo'] = [
  {
    name: 'Eine animierte Lawine starten',
    text: 'Verschieben und legen Sie Dutzende von Memes in der markierten Zone ab, ganz ohne Remote-Verbindung.',
  },
  {
    name: 'Erleben Sie den unsichtbaren Wandel',
    text: 'Beobachten Sie, wie sich die Fortschrittsanzeige Millisekunde für Millisekunde ändert, während der lokale Canvas-Decoder das Ergebnis generiert.',
  },
  {
    name: 'Ihr sauberes Ergebnis-Arsenal speichern',
    text: 'Nehmen Sie die extrahierten Dateien einzeln entgegen oder drücken Sie auf ZIP-Download, um alles zu paketieren.',
  },
];

const bibliography: GifAWebpLocaleContent['bibliography'] = [
  {
    name: 'GIF89a Spezifikation',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
  {
    name: 'Google WebP Dokumentation',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: GifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'GIF-zu-WebP-Konverter: Der moderne Ersatz für schwere Animationen',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Animierte GIFs sind die Dinosaurier des modernen Web-Contents: Sie verbrauchen unverhältnismäßig viel Bandbreite, verschlechtern den PageSpeed jeder Seite und sind für einen erheblichen Prozentsatz des Gesamtgewichts von Tausenden von Websites verantwortlich. Ein typisches 5 MB großes animiertes GIF kann zu einer WebP-Animation unter 1 MB werden, bei gleicher visueller Qualität. WebP ist der moderne Nachfolger, den Google speziell entwickelt hat, um GIF im Web abzulösen.',
  },
  {
    type: 'title',
    text: 'GIF vs WebP: Die Kluft zwischen Vergangenheit und Gegenwart des Webs',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIF ist ein Format von 1987, das ursprünglich nicht für Animationen konzipiert wurde – diese Funktion kam erst als späterer Hack hinzu. Seine 256-Farben-Palette, die ineffiziente Kompression und die Unfähigkeit, Audio zu verarbeiten, machen es zu einem veralteten Format. WebP, 2010 von Google entwickelt, bietet überlegene verlustbehaftete und verlustfreie Kompression, native Animationsunterstützung und vollen Alpha-Kanal.',
  },
  {
    type: 'paragraph',
    html: 'Für einen Webentwickler kann der Ersatz von GIFs durch WebP auf Seiten eine Verbesserung des Google PageSpeed Scores um 10 bis 30 Punkte bedeuten. Weniger Seitengewicht bedeutet bessere Core Web Vitals, bessere SEO-Rankings und niedrigere Bandbreitenkosten auf den Servern. Es ist nicht nur eine ästhetische Verbesserung – es ist eine Entscheidung für die technische Architektur.',
  },
  {
    type: 'title',
    text: 'Architekturvergleich: Lokal vs Cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Cloud Konverter',
        description: 'Plattformen, die Ihre GIFs auf Remote-Servern verarbeiten.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Ihre Animationen reisen über das Internet zu Servern von Drittanbietern',
          'Wartezeit aufgrund von Netzwerklatenz beim Upload und Download',
          'Größenbeschränkungen (große GIFs werden oft abgelehnt)',
          'Risiko der Speicherung und Analyse der Dateien',
        ],
      },
      {
        title: 'Unsere lokale Architektur',
        description: 'Direkte Verarbeitung auf Ihrer Hardware mittels Vanilla JS-Technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Das GIF verlässt nie Ihr Gerät',
          'Sofortige Konvertierung ohne Netzwerkwartezeit',
          'Keine Größenlimits: Verarbeitung von GIFs jedes Gewichts',
          'Voller Datenschutz: 0 Bytes werden nach außen gesendet',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Wie die lokale GIF-zu-WebP-Konvertierung funktioniert',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Die lokale Konvertierung nutzt die HTML5 Canvas API. Das GIF wird als natives Image-Element des Browsers geladen. Durch das Zeichnen auf eine Leinwand erfasst die Grafik-Engine das erste Animationsbild mit all seinen Transparenzinformationen. Die Methode <code>toDataURL(\'image/webp\')</code> exportiert den Frame direkt im RAM als WebP.',
  },
  {
    type: 'paragraph',
    html: 'WebP unterstützt einen vollen Alpha-Kanal, sodass GIF-Transparenzen im resultierenden WebP erhalten bleiben, ohne dass ein Hintergrund hinzugefügt werden muss. WebP-Kompressionsalgorithmen sind wesentlich effizienter als GIF oder PNG, was die drastische Reduzierung der Dateigröße des Endergebnisses erklärt.',
  },
  {
    type: 'tip',
    title: 'Garantierte PageSpeed Verbesserung',
    html: 'Ein 5 MB großes animiertes GIF kann zu einem WebP unter 1 MB werden. Wenn Sie GIFs auf Ihren Webseiten haben, kann deren Ersatz durch WebP sofort Ihren Largest Contentful Paint (LCP) und die Total Blocking Time (TBT) verbessern, was sich direkt auf Ihre SEO-Rankings auswirkt.',
  },
  {
    type: 'title',
    text: 'Anwendungsfälle und Kompatibilität des resultierenden WebP',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Ersetzen von GIFs auf Webseiten zur Verbesserung der PageSpeed-Werte.',
      'Optimierte Avatare und Sticker für Discord, Slack und moderne Plattformen.',
      'Banner und Visuals für digitale Marketingkampagnen.',
      'Animationen in Progressive Web Applications (PWA).',
      'Kompatibel mit Chrome, Edge, Firefox, Safari 14+ und allen modernen Browsern.',
    ],
  },
  {
    type: 'title',
    text: 'Fazit: Migrieren Sie Ihre GIFs ins 21. Jahrhundert',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Jedes GIF auf Ihrer Website ist eine verpasste Optimierungschance. Unser Tool konvertiert GIFs sofort, privat und ohne Limits direkt in Ihrem Browser in WebP. Das Ergebnis: bis zu 5-mal kleinere Dateien, perfekte Transparenz und Kompatibilität mit allen modernen Browsern.',
  },
];


export const content: GifAWebpLocaleContent = {
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
