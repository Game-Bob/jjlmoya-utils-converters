import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAJpgLocaleContent } from '../index';

const slug = 'gif-zu-jpg-konvertieren';
const title = 'GIF in JPG online konvertieren';
const description =
  'Extrahieren Sie das erste Bild aus Ihren GIFs und konvertieren Sie es in JPG. Ohne Server. Lokale Verarbeitung im Browser. Kostenlos und unbegrenzt.';

const ui: ImageConverterUI = {
  dragText: 'GIF-Dateien hierhere ziehen...',
  convertText: 'Um sie sofort in JPG zu konvertieren',
  selectFiles: 'Dateien auswählen',
  processedFiles: 'Verarbeitete Dateien',
  downloadAll: 'Alles herunterladen (.zip)',
  pending: 'Ausstehend': 'Literaturhinweise',
  faqTitle: 'Häufig gestellte Fragen',
};

const faq: GifAJpgLocaleContent['faq'] = [
  {
    question: 'Was passiert mit den Animationen, wenn ich zu JPG wechsle?',
    answer:
      'Das JPG-Format ist streng statisch und unterstützt keine mehreren Einzelbilder. Unser Konverter extrahiert nur das erste Bild oder den ersten Frame aus der GIF-Sequenz.',
  },
  {
    question: 'Verliere ich Spezialeffekte oder einen transparenten Hintergrund?',
    answer:
      'Ja, das ist das natürliche Verhalten des JPG-Standards. Wenn Sie ein GIF mit transparentem Hintergrund hochladen, fügen wir automatisch eine solide weiße Hintergrundschicht ein, um Farbfehler zu vermeiden.',
  },
  {
    question: 'Kann ich JPG-Fotos aus einem GIF extrahieren, ohne dass die Website meine Inhalte speichert?',
    answer:
      'Absolut ja. Das Tool ist eine Web-App, die auf dem HTML5-Canvas basiert. Die gesamte Dekodierung wird vom Prozessor Ihres eigenen physischen Geräts ausgeführt.',
  },
];

const howTo: GifAJpgLocaleContent['howTo'] = [
  {
    name: 'Bewegliche schwere Dateien ziehen',
    text: 'Platzieren oder ziehen Sie dieses GIF aus Ihrem Ordner in unsere Verarbeitungsbox.',
  },
  {
    name: 'Saubere Berechnung des ersten Frames',
    text: 'In Bruchteilen von Sekunden wird die Animation extrahiert und das solide weiße JPG erstellt, ohne Server zu kontaktieren.',
  },
  {
    name: 'Erhalten Sie sie als ZIP-Paket',
    text: 'Laden Sie sie über die Buttons oder als ZIP-Datei herunter, wenn Sie eine große Anzahl von Dateien verarbeitet haben.',
  },
];

const seo: BigIntajpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'GIF-zu-JPG-Konverter: Extrahieren Sie Frames als hochwertige Bilder',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'GIF-Dateien dominieren seit Jahrzehnten die Welt der kurzen Animationen im Internet. Ihre animierte Natur macht sie jedoch völlig nutzlos als Thumbnail, Vorschau für soziale Netzwerke oder Bild für Dokumente. Wenn Sie einen bestimmten Frame aus einem GIF extrahieren und in ein hochwertiges statisches Bild konvertieren müssen, ist die Konvertierung in JPG die praktischste und kompatibelste Lösung.',
  },
  {
    type: 'title',
    text: 'GIF oder JPG? Formate mit gegensätzlichen Zwecken',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Das GIF (Graphics Interchange Format) wurde 1987 mit einer strengen Einschränkung entwickelt, die bis heute besteht: Es kann nur 256 Farben pro Frame darstellen. Diese technische Einschränkung war für einfache Animationen mit reduzierten Paletten egal, macht es aber zu einem visuell armen Format für reale Fotoaufnahmen. Das JPG hingegen kann Millionen von Farben mit fortschrittlichen perzeptuellen Kompressionsalgorithmen rendern.',
  },
  {
    type: 'paragraph',
    html: 'Das Extrahieren eines Frames aus einem GIF und das Speichern als JPG hat vielfältige Anwendungen: Erstellen von Thumbnails für Videoplayer, Erstellen von Vorschauen für Content-Management-Plattformen, Erhalten statischer Bilder für Präsentationen oder einfach das Archivieren eines visuellen Moments einer komplexen Animation. Das resultierende JPG wird viel leichter sein als das ursprüngliche GIF und universell kompatibel.',
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
        description: 'Tools, die Ihre Dateien auf einen Remote-Server hochladen, um sie zu verarbeiten.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Ihre GIFs reisen über das Internet zu Servern von Drittanbietern',
          'Netzwerklatenz beim Hoch- und Herunterladen',
          'Größen- und Dateilimits pro Sitzung',
          'Risiko der Datenaufbewahrung auf fremden Servern',
        ],
      },
      {
        title: 'Unsere lokale Architektur',
        description: 'Direkte Verarbeitung auf Ihrer Hardware mittels Vanilla JS-Technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Das GIF verlässt nie Ihr Gerät',
          'Sofortige Geschwindigkeit ohne Netzwerkwartezeit',
          'Keine Größen- oder Dateilimits',
          'Absoluter Datenschutz: 0 Bytes werden nach außen gesendet',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Wie die technische Frame-Extraktion funktioniert',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Die lokale Konvertierung stützt sich auf die Leistung des HTML5-Canvas-API. Wenn Sie ein GIF laden, dekodiert der Browser es im Speicher als natives Image-Element. Beim Rendern auf einem unsichtbaren Canvas erfasst die Grafik-Engine des Browsers automatisch den ersten Frame der Animationssequenz.',
  },
  {
    type: 'paragraph',
    html: 'Da das JPG-Format keine Transparenzen unterstützt, wendet unser Algorithmus vor dem Export einen soliden weißen Hintergrund an. Die <code>toDataURL(\'image/jpeg\')</code> Methode des Canvas generiert den JPG-Bytestrom direkt im RAM Ihres Computers, ohne jegliche Netzwerkverbindung. Die resultierende Datei wird sofort auf Ihr Gerät heruntergeladen.',
  },
  {
    type: 'tip',
    title: 'Eingeschränkte Farbpalette des GIFs',
    html: 'Das GIF kann nur 256 Farben pro Frame enthalten. Das extrahierte JPG erbt diese reduzierte Palette vom Original: Wenn das GIF Verläufe oder Fotos hatte, kann es zu einer gewissen Posterisierung kommen. Verwenden Sie für das beste Ergebnis GIFs mit einfachen Farben oder Illustrationen.',
  },
  {
    type: 'title',
    text: 'Anwendungsfälle und Kompatibilität des resultierenden JPGs',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Thumbnails und Vorschauen für Videoplattformen und CMS.',
      'Titelbilder für Social-Media-Beiträge.',
      'Einfügen in Word-, PowerPoint- oder PDF-Dokumente.',
      'Präsentationsdateien und Marketingmaterialien.',
      'Universelle Kompatibilität mit Viewern unter Windows, macOS und Mobilgeräten.',
    ],
  },
  {
    type: 'title',
    text: 'Fazit: Der Frame, der mehr wert ist als die Animation',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Ein animiertes GIF von 2 MB kann ein JPG des ersten Frames von nur etwa 50-200 KB erzeugen, abhängig von der Auflösung. Unser Tool führt diese Konvertierung sofort, privat und ohne Limits direkt in Ihrem Browser durch. Ohne Server, ohne Konten, ohne Wartezeiten.',
  },
];


export const content: GifAJpgLocaleContent = {
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
