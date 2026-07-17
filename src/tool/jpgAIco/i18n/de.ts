import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAIcoLocaleContent } from '../index';

const slug = 'jpg-zu-ico-konverter';
const title = 'JPG zu ICO Konverter';
const description =
  'Konvertieren Sie JPG-Fotos in ICO mit echten Microsoft-Binär-Headern. Automatischer quadratischer Zuschnitt. Keine Dateiuploads. Kostenlos und privat.';

const ui: ImageConverterUI = {
  dragText: 'JPG-Dateien hierher ziehen...',
  convertText: 'Um sie sofort in ICO zu konvertieren',
  selectFiles: 'Dateien auswählen',
  processedFiles: 'Verarbeitete Dateien',
  downloadAll: 'Alles herunterladen (.zip)',
  pending: 'Ausstehend',
  bibliographyTitle: 'Literaturhinweise',
  faqTitle: 'Häufig gestellte Fragen',
};

const faq: JpgAIcoLocaleContent['faq'] = [
  {
    question: 'Ist die resultierende ICO-Datei nativ kompatibel, um Windows Ordner anzupassen?',
    answer:
      'Ja, wir erstellen eine zu 100 % authentische Datei im Microsoft-Icon-Format, indem wir einen standardisierten Binär-Header auf niedriger Ebene in die Bildmatrix einfügen.',
  },
  {
    question: 'Was passiert mit dem Seitenverhältnis, wenn mein Original-JPG ein Panoramafoto ist?',
    answer:
      'Der starre globale ICO-Standard erfordert zwingend ein perfekt quadratisches Bild. Unsere HTML5 JS Engine wird Ihr Foto zentrieren und den Überschuss abschneiden, um ein ausgewogenes Ergebnis zu garantieren.',
  },
  {
    question: 'Ist es gefährlich, Firmenlogos oder persönliche JPGs in den Konverter hochzuladen?',
    answer:
      'Die Canvas-Engine in JavaScript arbeitet in Ihrem eigenen Browser. Das Konvertieren von Hunderten von Fotos in ICO sendet kein einziges Megabyte an eine Cloud in fragwürdigen Ländern.',
  },
];

const howTo: JpgAIcoLocaleContent['howTo'] = [
  {
    name: 'Original-JPG-Fotos sammeln',
    text: 'Suchen und sammeln Sie die herkömmlichen Fotos und legen Sie sie durch Ablegen in unserem quadratischen Bereich ab.',
  },
  {
    name: 'Erleben Sie die hexadezimale Reinigung',
    text: 'Die Neu-Kodierung fügt nativ und schnell Metadaten und Header asynchron ein und generiert ein striktes, reines Icon im Speicher.',
  },
  {
    name: 'Mehrere ZIP-Designs zusammenstellen',
    text: 'Schließen Sie die Arbeit ab, indem Sie alles massenweise in einem kompakten Paket in nur wenigen Sekunden herunterladen.',
  },
];

const seo: JpgAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'JPG zu ICO Konverter: Erstellen Sie Favicons und Windows Icons aus Ihren Fotos',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Das <strong>ICO</strong>-Format ist der Microsoft-Standard für Symbole in Windows-Anwendungen und Favicons von Websites. Im Gegensatz zum einfachen Umbenennen eines JPG in .ico erfordert eine echte ICO-Datei eine spezifische binäre Struktur mit 22-Byte-Headern und einem eingebetteten Bildverzeichnis. <strong>JPG</strong> ist der am häufigsten gewählte Ausgangspunkt für die Erstellung dieser Icons - ein Firmenlogo, ein Profilfoto oder jedes Bild, das Sie zum visuellen Erkennungsmerkmal Ihrer Anwendung oder Website machen möchten.',
  },
  {
    type: 'title',
    text: 'JPG oder ICO? Wann welches Format zu verwenden ist',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> ist ein Quellformat, kein Zielformat für Symbole. Es eignet sich hervorragend für Fotografien und Banner, ist jedoch inkompatibel mit Systemen, die Icons erfordern: Windows Explorer, die Lesezeichenleiste des Browsers, Desktop-Verknüpfungen oder PWA-Anwendungsmanifeste. Ein Betriebssystem oder Browser, der nach einem Icon sucht, erwartet das ICO-Format - und wenn es dieses nicht findet, wird ein generisches Symbol oder ein fehlerhaftes Quadrat angezeigt.',
  },
  {
    type: 'paragraph',
    html: 'Das <strong>ICO</strong>-Format wurde entwickelt, um mehrere Auflösungen in einer einzigen Datei zu speichern: <strong>16×16</strong> für die Lesezeichenleiste, <strong>32×32</strong> für Verknüpfungen, <strong>48×48</strong> für den Datei-Explorer und <strong>256×256</strong> für hochauflösende Displays. Browser und Betriebssysteme wählen automatisch die passende Auflösung basierend auf dem Anzeigekontext aus - der Benutzer muss nichts weiter tun.',
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
          'Ihre Firmenlogos werden auf Servern von Drittanbietern gespeichert',
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
    html: 'Das JPG wird dekodiert und auf ein im Speicher befindliches <strong>HTML5 Canvas</strong> gezeichnet. Da das ICO-Format ein quadratisches Bild erfordert, erkennt die Engine automatisch, ob das JPG rechteckig ist, und schneidet es zu, indem sie den relevantesten Teil zentriert. Anschließend wird der Standard-Microsoft-ICO-Header mit der korrekten Magic Number (<code>00 00 01 00</code>), dem Bildverzeichnis und den kodierten Pixeldaten erstellt. Das Ergebnis ist eine echte binäre .ico-Datei - kein umbenanntes PNG.',
  },
  {
    type: 'paragraph',
    html: 'Da JPG kein Alpha-Kanal besitzt, wird das resultierende ICO ebenfalls keine Transparenz aufweisen - es wird einen soliden Hintergrund haben, der vom Originalfoto übernommen wurde. Wenn Sie ein Favicon mit transparentem Hintergrund benötigen (zum Beispiel zur Anpassung an dunkle oder helle Lesezeichenleisten), ist der empfohlene Arbeitsablauf: Hintergrund in einem Editor entfernen, als PNG speichern und den PNG zu ICO Konverter verwenden.',
  },
  {
    type: 'tip',
    title: 'Tipp: Mehrere Auflösungen in einer einzigen ICO Datei',
    html: 'ICO-Dateien können <strong>mehrere Auflösungen</strong> in einer einzigen Datei packen - der Browser oder das Betriebssystem wählt automatisch die passendste für den jeweiligen Kontext aus. Für das bestmögliche Ergebnis verwenden Sie ein quadratisches JPG mit mindestens <strong>256×256 Pixeln</strong> als Quelle: Dies gibt dem Konverter genügend Informationen, um scharfe 16×16, 32×32 und 48×48 Größen ohne Verpixelung zu generieren.',
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
      'Website-Favicon: Kompatibel mit allen Browsern, einschließlich Internet Explorer.',
      'Anpassung von Ordnern und Desktop-Icons in Windows 10/11.',
      'Verknüpfungssymbol für Desktop-Anwendungen oder Installer.',
      'Anwendungssymbol für Electron-Projekte oder PWA-Anwendungen.',
      'Icons für Dateiverwaltungssysteme und Firmen-Explorer.',
    ],
  },
  {
    type: 'title',
    text: 'Fazit',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Die Konvertierung von JPG in ICO ist ein technisch wesentlicher Schritt für jedes Web- oder Desktop-Projekt, das eine erkennbare visuelle Identität benötigt. Dieses Tool generiert authentische ICOs mit der korrekten binären Struktur in Sekunden, ohne Ihr Logo auf einen externen Server hochzuladen. Das Ergebnis funktioniert in allen Browsern, im Windows Explorer und in jedem System, das den Microsoft ICO-Standard nutzt.',
  },
];

export const content: JpgAIcoLocaleContent = {
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
