import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAJpgLocaleContent } from '../index';

const slug = 'avif-zu-jpg-konvertieren';
const title = 'AVIF in JPG Online Konvertieren';
const description =
  'Konvertieren Sie AVIF-Bilder in Ihrem Browser in JPG. Ohne Server. 100 % private lokale Verarbeitung. Kostenlos und unbegrenzt.';

const ui: ImageConverterUI = {
  dragText: 'AVIF-Dateien hierher ziehen...',
  convertText: 'Um sie sofort in JPG zu konvertieren',
  selectFiles: 'Dateien auswählen',
  processedFiles: 'Verarbeitete Dateien',
  downloadAll: 'Alles herunterladen (.zip)',
  pending: 'Ausstehend': 'Literaturhinweise',
  faqTitle: 'Häufig gestellte Fragen',
};

const faq: AvifAJpgLocaleContent['faq'] = [
  {
    question: 'Warum AVIF in JPG konvertieren?',
    answer:
      'Das AVIF-Format bietet eine überlegene Kompression, aber nicht alle Programme oder Viewer unterstützen es. Die Konvertierung in JPG stellt sicher, dass das Bild auf 100 % der Geräte weltweit angezeigt werden kann.',
  },
  {
    question: 'Wie schützen wir Ihre AVIF-Bilder?',
    answer:
      'Ihre Fotos verlassen niemals Ihr Handy oder Ihren PC. Der gesamte Prozess des Zeichnens und Kodierens in JPEG wird in der JavaScript-Umgebung Ihres Browsers ausgeführt.',
  },
  {
    question: 'Verliere ich bei der Umwandlung von AVIF zu JPG an Qualität?',
    answer:
      'Unser Tool verarbeitet die Pixel mit einer Standard-Canvas-Qualität (0,9 bis 0,95), sodass die Änderungen kaum wahrnehmbar sind.',
  },
];

const howTo: AvifAJpgLocaleContent['howTo'] = [
  {
    name: 'Dateien ziehen oder klicken',
    text: 'Verschieben Sie alle AVIF-Fotos, die Sie konvertieren möchten, in den markierten Verarbeitungsbereich.',
  },
  {
    name: 'Sofortige Transformation',
    text: 'Beobachten Sie in weniger als einer Sekunde, wie das AVIF in JPG neu kodiert wird, wobei mögliche Alphakanäle durch einen soliden Hintergrund ersetzt werden.',
  },
  {
    name: 'Speichern oder ZIP herunterladen',
    text: 'Laden Sie Ihre neuen JPG-Bilder einzeln herunter oder drücken Sie auf "Alles herunterladen", wenn Sie in Stapeln verarbeitet haben.',
  },
];

const seo: AvifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'AVIF-zu-JPG-Konverter: Universelle Kompatibilität für Ihre modernen Bilder',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF (AV1 Image File Format) ist das effizienteste Bildformat, das heute verfügbar ist. Es wurde von der Alliance for Open Media entwickelt und basiert auf dem AV1-Videocodec. Es bietet eine um 50 % höhere Kompression als JPG bei gleicher visueller Qualität. Dieser technische Vorteil hat jedoch seinen Preis: AVIF wird von Photoshop, Lightroom, dem Windows Photo Viewer und den meisten herkömmlichen Bearbeitungs- und Anzeigetools nicht unterstützt. Das Konvertieren in JPG löst dieses Problem an der Wurzel.',
  },
  {
    type: 'title',
    text: 'AVIF vs. JPG: Effizienz gegenüber universeller Kompatibilität',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF komprimiert außergewöhnlich gut: Ein hochauflösendes Foto, das in JPG 4 MB einnimmt, kann in AVIF bei gleicher wahrgenommener Qualität nur 2 MB wiegen. Dies macht es perfekt für die Web-Bereitstellung, bei der die Ladeleistung kritisch ist. Außerhalb des Browsers ist AVIF jedoch praktisch unsichtbar: Weder der Windows Explorer zeigt eine Vorschau an, noch exportieren Kameras es, noch nehmen Designer es gerne in ihre Arbeitsabläufe auf.',
  },
  {
    type: 'paragraph',
    html: 'JPG ist seit über 30 Jahren der universelle Standard der digitalen Fotografie. Es wird von 100 % der Geräte, Betriebssysteme, Büroanwendungen, sozialen Netzwerke, Drucker und jeder Software unterstützt, die jemals ein Bild gesehen hat. Wenn Sie Bilder teilen, drucken, bearbeiten oder per E-Mail versenden müssen, ist JPG die Garantie dafür, dass alles reibungslos funktioniert.',
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
          'Ihre privaten Fotos reisen über das Internet zu externen Servern',
          'Wartezeiten durch Hoch- und Herunterladen der Datei',
          'Größenbeschränkungen und Anzahl der kostenlosen Konvertierungen',
          'Risiko der Aufbewahrung von Bildern auf Servern von Drittanbietern',
        ],
      },
      {
        title: 'Unsere lokale Architektur',
        description: 'Direkte Verarbeitung in Ihrem Browser mittels Vanilla JS-Technologie und Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Ihre Bilder verlassen niemals Ihr Gerät',
          'Sofortige Konvertierung ohne Netzwerklatenz',
          'Keine Beschränkungen für Dateien oder Größe',
          'Geeignet für medizinische, rechtliche oder vertrauliche Bilder',
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
    html: 'Moderne Browser wie Chrome, Firefox und Edge bieten dank ihrer integrierten AV1-Decoder native Unterstützung für AVIF. Wenn Sie eine AVIF-Datei laden, dekodiert der Browser sie im Speicher und wandelt sie in eine Bitmap-Darstellung im RAM um. Diese Darstellung wird auf ein unsichtbares HTML5-<code>Canvas</code>-Element gezeichnet.',
  },
  {
    type: 'paragraph',
    html: 'Anschließend exportiert das Canvas das Bild mit <code>toBlob(\'image/jpeg\', quality)</code> unter Anwendung der Standard-JPG-Kompression. Da JPG keine Transparenzen unterstützt, wird jeder im AVIF vorhandene Alphakanal vor dem Export mit einem weißen Hintergrund gefüllt. Das Ergebnis ist eine qualitativ hochwertige JPG-Datei, die zum direkten Download bereitsteht, ohne dass ein Byte Ihren Browser verlassen hat.',
  },
  {
    type: 'tip',
    title: 'Das perfekte Gleichgewicht zwischen Kompression und Kompatibilität',
    html: 'AVIF ist bei gleicher Qualität um 50 % kleiner als JPG – aber JPG bietet 100 % Kompatibilität mit jeder Software. Wenn Sie AVIF-Bilder vom Server erhalten und diese bearbeiten, per E-Mail versenden oder in Desktop-Tools öffnen müssen, konvertieren Sie sie zuerst in JPG.',
  },
  {
    type: 'title',
    text: 'Anwendungsfälle: Wann man AVIF in JPG konvertieren sollte',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Bearbeiten in Photoshop, Lightroom, GIMP oder anderer Desktop-Software.',
      'Teilen von Bildern mit Benutzern auf alten Geräten oder Betriebssystemen.',
      'Anhängen an E-Mails, um die Anzeige in jedem E-Mail-Client zu garantieren.',
      'Veröffentlichen auf Plattformen, die AVIF nicht als Upload-Format akzeptieren.',
      'Drucken: Professionelle Druckdienste arbeiten nativ mit JPG.',
    ],
  },
  {
    type: 'title',
    text: 'Fazit: Universelle Kompatibilität in einem Schritt',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF ist die Zukunft der Bildkompression, aber die Gegenwart verlangt Kompatibilität. Unser Konverter ermöglicht es Ihnen, das Beste aus beiden Welten zu erhalten: Empfangen und speichern Sie Bilder in AVIF für maximale Effizienz, und konvertieren Sie sie sofort in JPG, wenn sie in einem beliebigen Kontext funktionieren müssen. Alles privat, kostenlos und unbegrenzt.',
  },
];


export const content: AvifAJpgLocaleContent = {
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
