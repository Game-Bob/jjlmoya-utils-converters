import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAIcoLocaleContent } from '../index';

const slug = 'png-zu-ico-konverter';
const title = 'PNG zu ICO Konverter Online';
const description =
  'Konvertieren Sie PNG in ICO mit echten Binär-Headern. Transparenzen bleiben erhalten. Keine Dateiuploads. Kostenlos und zu 100 % privat.';

const ui: ImageConverterUI = {
  dragText: 'PNG-Dateien hierher ziehen...',
  convertText: 'Um sie sofort in ICO zu konvertieren',
  selectFiles: 'Dateien auswählen',
  processedFiles: 'Verarbeitete Dateien',
  downloadAll: 'Alles herunterladen (.zip)',
  pending: 'Ausstehend',
  bibliographyTitle: 'Literaturhinweise',
  faqTitle: 'Häufig gestellte Fragen',
};

const faq: PngAIcoLocaleContent['faq'] = [
  {
    question: 'Ist Ihr Konverter ein Ersteller von getarnten PNGs oder echtem ICO?',
    answer:
      'Wir erstellen ein echtes ICO. Wir extrahieren die Daten aus Ihrer PNG, erstellen den standardisierten Microsoft-Hexadezimal-Header (Header + Verzeichnis von 22 Byte), skalieren lokal auf das ideale quadratische Format und stellen eine finale Datei zusammen, die als nativ validiert ist.',
  },
  {
    question: 'Bleiben Transparenzen erhalten, wenn mein Logo im Icon platziert wird?',
    answer:
      'Absolut ja. Unsere Engine liest Ihre PNG mit 32 Bit und verankert sie, wobei alle transparenten Bereiche präzise erhalten bleiben, damit sie in der universellen Adressleiste des Browsers (Favicon) perfekt zur Geltung kommen.',
  },
  {
    question: 'Wird mein Firmenlogo auf Ihren Servern gespeichert?',
    answer:
      'Dieser Dienst garantiert null Kontakt zu externen Netzwerken. Der Konverter arbeitet verankert in Ihrem internen HTML5 Canvas; die Erstellung Ihres Icons findet zu einhundert Prozent auf Ihrem Rechner im rein lokalen Speicher statt.',
  },
];

const howTo: PngAIcoLocaleContent['howTo'] = [
  {
    name: 'Dateien zum Übertragen ziehen',
    text: 'Platzieren Sie Ihre Bildmatrizen (quadratische 512x512 PNGs sind ideal) im interaktiven lokalen Rahmen.',
  },
  {
    name: 'Automatische Bytecode-Kompilierung',
    text: 'Sie werden sehen, wie der Balken intern läuft, während die lokale Matrix der gereinigten ICO-Hexadezimal-Header geladen und erstellt wird.',
  },
  {
    name: 'ZIP sammeln oder mitnehmen',
    text: 'Laden Sie sie herunter, indem Sie auf eine Sammel-Zusammenstellung für Ihre Websites klicken (globale ZIP-Buttons) oder laden Sie das Vorschaubild für die ausführbare Datei in Windows herunter.',
  },
];

const seo: PngAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG zu ICO Konverter: Die beste Quelle für Favicons mit perfekter Transparenz',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG mit Transparenz</strong> ist das ideale Ausgangsmaterial für die Erstellung professioneller ICO-Icons. Im Gegensatz zu JPG (das keinen Alpha-Kanal besitzt) oder verlustbehafteten Formaten bietet PNG genau das, was das ICO-Format benötigt: gestochen scharfe Pixel, saubere Kanten und einen 32-Bit-Alpha-Kanal, mit dem sich das Icon perfekt in jeden Hintergrund integrieren lässt - egal ob in die weiße Lesezeichenleiste von Safari, die dunkle Leiste von Firefox oder den Desktop von Windows 11.',
  },
  {
    type: 'title',
    text: 'PNG oder ICO? Wann welches Format zu verwenden ist',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> ist das Arbeitsformat: Hier entwerfen Sie Ihr Logo, exportieren aus Figma oder Illustrator und speichern Ihre bearbeitbaren Versionen. Seine Transparenz, Pixelpräzision und verlustfreie Kompression machen es unschlagbar für den Designprozess. Aber Browser, Betriebssysteme und Windows-Anwendungen, die nach einem Favicon oder App-Icon suchen, akzeptieren PNG nicht direkt - sie benötigen das ICO-Format.',
  },
  {
    type: 'paragraph',
    html: '<strong>ICO</strong> ist das Verteilungsformat für Symbole in Microsoft-Umgebungen und im Web. Es enthält eine spezifische binäre Struktur, die es ermöglicht, mehrere Auflösungen in einer einzigen Datei zu bündeln: Der Browser liest das interne Verzeichnis der ICO-Datei und wählt automatisch <strong>16×16</strong> für den Browser-Tab, <strong>32×32</strong> für Verknüpfungen, <strong>48×48</strong> für den Datei-Explorer und <strong>256×256</strong> für Retina- und 4K-Bildschirme aus. Der Ausgangspunkt einer transparenten PNG garantiert, dass all diese Auflösungen perfekte Kanten ohne weißen Rand haben.',
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
          'Ihr Firmenlogo wird auf Servern von Drittanbietern gespeichert',
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
          'Sofortige Geschwindigkeit - keine Netzwerklatenz',
          'Vollständige Privatsphäre - 0 Byte werden extern gesendet',
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
    html: 'Die PNG wird in einem im Speicher befindlichen <strong>HTML5 Canvas</strong> mit voller 32-Bit-Alpha-Kanal-Unterstützung dekodiert. Die Engine erstellt den Standard-Microsoft-ICO-Header mit der korrekten Magic Number (<code>00 00 01 00</code>), das Bildverzeichnis mit Abmessungen und Daten-Offset sowie die Pixeldaten unter Beibehaltung der Transparenzinformationen. Das Ergebnis ist eine echte binäre .ico-Datei, die von Windows, macOS und allen Browsern nativ erkannt wird.',
  },
  {
    type: 'paragraph',
    html: 'Die Transparenz der PNG bleibt in der resultierenden ICO-Datei vollständig erhalten - transparente Pixel bleiben transparent, halbtransparente Pixel behalten ihren exakten Alpha-Wert und opake Pixel behalten ihre ursprüngliche Farbe. Dies ist entscheidend für Logos auf variablen Hintergründen: Ihr Favicon wird im Light Mode, im Dark Mode und bei jeder Kombination von Browser-Farben korrekt aussehen.',
  },
  {
    type: 'tip',
    title: 'Tipp: Verwenden Sie eine 512×512 PNG als Quelle',
    html: 'Für das bestmögliche Ergebnis verwenden Sie ein <strong>quadratisches 512×512 PNG-Bild</strong> als Quelle. Diese Auflösung gibt dem Konverter genügend Informationen, um alle Standard-ICO-Größen scharf zu generieren - vom 16×16 Favicon bis zum 256×256 Icon für hochauflösende Bildschirme - ohne Pixelbildung oder Verlust von Kantendetails. Je größer die Quell-PNG, desto besser wirken die kleinen Icon-Größen.',
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
      'Transparentes Favicon für Websites: Funktioniert in Chrome, Firefox, Safari, Edge und Internet Explorer.',
      'Icon für PWA-Anwendungen: manifest.json verweist auf die ICO für die Desktop-Installation.',
      'Anpassung von Windows 10/11-Ordnern mit Firmenlogo ohne weißen Hintergrund.',
      'Verknüpfungssymbol für Desktop-Anwendungen, Installer und ausführbare Dateien.',
      'Symbol für Browser-Erweiterungen für Chrome und Firefox.',
    ],
  },
  {
    type: 'title',
    text: 'Fazit',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'PNG mit Transparenz ist zweifellos der beste Ausgangspunkt für die Erstellung von ICO-Icons in Profiqualität. Mit diesem Tool erfolgt die Konvertierung sofort, Alpha-Kanäle bleiben vollständig erhalten und das Ergebnis ist eine echte ICO-Datei mit der korrekten binären Struktur. Kein Hochladen Ihres Logos auf einen Server, keine Wasserzeichen, keine Limits - und perfekte Transparenz in allen Größen.',
  },
];

export const content: PngAIcoLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({
    title,
    description,
    inLanguage: 'de',
    faq,
    howTo,
  }),
};
