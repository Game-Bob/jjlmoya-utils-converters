import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAPngLocaleContent } from '../index';

const slug = 'avif-zu-png-konvertieren';
const title = 'AVIF in PNG Online Konvertieren';
const description =
  'Konvertieren Sie AVIF-Bilder in PNG und behalten Sie dabei die Transparenz bei. Ohne Dateien hochzuladen. Lokale Verarbeitung in Ihrem Browser. Kostenlos und unbegrenzt.';

const ui: ImageConverterUI = {
  dragText: 'AVIF-Dateien hierher ziehen...',
  convertText: 'Um sie sofort in PNG zu konvertieren',
  selectFiles: 'Dateien auswählen',
  processedFiles: 'Verarbeitete Dateien',
  downloadAll: 'Alles herunterladen (.zip)',
  pending: 'Ausstehend': 'Literaturhinweise',
  faqTitle: 'Häufig gestellte Fragen',
};

const faq: AvifAPngLocaleContent['faq'] = [
  {
    question: 'Warum sollte ich AVIF in PNG konvertieren?',
    answer:
      'AVIF ist großartig für die Kompression, aber die Kompatibilität in alten Browsern und klassischen Editoren ist eingeschränkt. Durch die Konvertierung von AVIF in PNG stellen Sie sicher, dass Ihre Datei die ursprüngliche Transparenz behält und von allen Anwendungen geöffnet werden kann.',
  },
  {
    question: 'Bleiben die Transparenzen der ursprünglichen AVIF-Datei erhalten?',
    answer:
      'Ja. Im Gegensatz zu JPG, das den transparenten Hintergrund entfernt, behält unser Konverter beim Export in PNG den Alphakanal intakt.',
  },
  {
    question: 'Werden meine Bilder wirklich nicht ins Internet hochgeladen?',
    answer:
      'Absolut richtig. Unser Konverter wird zu 100 % lokal auf Ihrem Gerät mit der internen JavaScript-Engine ausgeführt.',
  },
];

const howTo: AvifAPngLocaleContent['howTo'] = [
  {
    name: 'Fügen Sie Ihre AVIF-Dateien hinzu',
    text: 'Sie können sie direkt in den markierten Bereich ziehen oder die Schaltfläche verwenden, um die Ordner auf Ihrem Gerät zu durchsuchen.',
  },
  {
    name: 'Sofortige Verarbeitung',
    text: 'Lassen Sie den HTML5-Prozessor das Bild rendern; das Format wird in Mikrosekunden automatisch in PNG geändert.',
  },
  {
    name: 'Holen Sie sich Ihre PNGs',
    text: 'Laden Sie die konvertierten Bilder einzeln herunter oder laden Sie einen kompletten Block über die ZIP-Schaltfläche herunter.',
  },
];

const seo: AvifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'AVIF-zu-PNG-Konverter: Von der Web-Bereitstellung zur professionellen Bearbeitung',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF ist das ideale Format für die Bereitstellung von Bildern im Web – klein, effizient und von hoher Qualität. Aber wenn es an der Zeit ist, diese Bilder in Design-Tools zu bearbeiten oder zu retuschieren, wird AVIF zu einem Hindernis. Figma, Photoshop, Illustrator, Sketch und praktisch jedes professionelle Design-Tool erwarten PNG für die Arbeit mit Transparenzen und verlustfreier Bearbeitung. Das Konvertieren von AVIF in PNG ist die Brücke zwischen der Welt der Web-Bereitstellung und der kreativen Bearbeitung.',
  },
  {
    type: 'title',
    text: 'AVIF vs. PNG: Bereitstellung vs. Bearbeitung',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF glänzt als Bereitstellungsformat: kleine Dateien, schnelles Laden, Unterstützung von Alphakanälen und außergewöhnliche visuelle Qualität. Sein Ökosystem an Tools ist jedoch begrenzt. Die meiste Design-Software kann AVIF nicht direkt importieren, was kreative Arbeitsabläufe unterbricht. Der Versuch, ein AVIF in Figma zu öffnen oder es als Ebene in Photoshop zu importieren, funktioniert einfach nicht.',
  },
  {
    type: 'paragraph',
    html: 'PNG ist das native Format des digitalen Designs. Mit verlustfreier Kompression, vollständiger Unterstützung von Alphakanälen und universeller Kompatibilität mit allen kreativen Tools ist PNG das Arbeitsformat schlechthin. Wenn Sie Bilder skalieren, retuschieren, in mehrere Formate exportieren oder in Ebenen arbeiten müssen, garantiert PNG, dass Sie dabei keine Details oder Pixel verlieren.',
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
          'Ihre Design-Bilder wandern zu Servern von Drittanbietern',
          'Wartezeit durch Netzwerklatenz',
          'Möglicher Verlust oder Änderung des Alphakanals',
          'Größenbeschränkungen, die die Stapelkonvertierung erschweren',
        ],
      },
      {
        title: 'Unsere lokale Architektur',
        description: 'Direkte Verarbeitung in Ihrem Browser mittels Vanilla JS-Technologie und Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Alphakanal mit perfekter Treue erhalten',
          'Sofortige Konvertierung ohne Datentransfer',
          'Keine Beschränkungen für Dateien, Größe oder Stapel',
          'Vollständige Privatsphäre für proprietäre Design-Assets',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Wie die technische Konvertierung mit Transparenzen funktioniert',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Moderne Browser dekodieren AVIF dank ihrer integrierten AV1-Engines nativ. Beim Laden der Datei dekodiert der Browser sie im Speicher und behält dabei alle Informationen des Alphakanals bei. Das dekodierte Bild – einschließlich seiner Transparenzen – wird auf ein HTML5-<code>Canvas</code>-Element mit dem richtigen Kompositionsmodus gezeichnet, um den Alphakanal zu erhalten.',
  },
  {
    type: 'paragraph',
    html: 'Im Gegensatz zum Export in JPG (der Transparenzen durch Ausfüllen mit Weiß zerstört), bleibt beim Export in PNG mittels <code>toBlob(\'image/png\')</code> der Alphakanal vollständig erhalten. Das Ergebnis ist ein PNG mit verlustfreier Kompression, das jeden Pixel, jede Semitransparenz und jedes Detail des ursprünglichen AVIF beibehält.',
  },
  {
    type: 'tip',
    title: 'Der obligatorische Vorab Schritt für jedes Design Tool',
    html: 'Konvertieren Sie Ihre AVIFs in PNG, bevor Sie sie in Figma, Photoshop, Illustrator oder ein anderes Design-Tool importieren. Diese Anwendungen lesen AVIF nicht direkt, aber PNG funktioniert in allen nativ und behält Transparenzen und Qualität perfekt bei.',
  },
  {
    type: 'title',
    text: 'Anwendungsfälle: Wann Sie AVIF in PNG konvertieren müssen',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Importieren in Figma, Sketch, Adobe XD oder andere UI-Design-Tools.',
      'Bearbeiten als Ebene in Photoshop, Affinity Photo oder GIMP unter Beibehaltung der Transparenz.',
      'Verwendung als Quelle für die Erstellung von Icons oder Sprites.',
      'Senden an Kunden oder Mitarbeiter, die mit Standard-Design-Software arbeiten.',
      'Archivieren von Bildern mit Transparenzen im verlustfreien Bearbeitungsformat.',
    ],
  },
  {
    type: 'title',
    text: 'Fazit: Die Brücke zwischen Web und Design',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF und PNG sind perfekte Begleiter in einem modernen Arbeitsablauf: AVIF für die effiziente Bereitstellung im Web, PNG für die Bearbeitung und Zusammenarbeit in Design-Tools. Mit unserem Konverter ist der Übergang von einem zum anderen sofortig, privat und bewahrt jedes Detail – genau das, was Sie brauchen, wenn es auf Ihre visuellen Assets ankommt.',
  },
];


export const content: AvifAPngLocaleContent = {
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
