import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAJpgLocaleContent } from '../index';

const slug = 'webp-zu-jpg-konvertieren';
const title = 'WebP zu JPG Konverter Online und Kostenlos';
const description =
  'Konvertieren Sie WebP-Bilder in JPG, ohne Dateien hochzuladen. 100 % private lokale Verarbeitung. Transparente Hintergründe werden automatisch durch Weiß ersetzt.';

const ui: ImageConverterUI = {
  dragText: 'WebP-Dateien hierher ziehen...',
  convertText: 'Um sie sofort in JPG zu konvertieren',
  selectFiles: 'Dateien auswählen',
  processedFiles: 'Verarbeitete Dateien',
  downloadAll: 'Alles herunterladen (.zip)',
  pending: 'Ausstehend': 'Literaturhinweise',
  faqTitle: 'Häufig gestellte Fragen',
};

const faq: WebpAJpgLocaleContent['faq'] = [
  {
    question: 'Kann ich private Bilder sicher hochladen?',
    answer:
      'Ja. Es gibt keinen Upload-Server. Ihr Browser verarbeitet das WebP auf Ihrem Computer und generiert das JPG zum Herunterladen. Niemand sonst sieht es.',
  },
  {
    question: 'Was passiert mit meinem WebP-Hintergrund, wenn er transparent ist?',
    answer:
      'Da JPG keine Transparenz unterstützt, füllt der Konverter transparente Bereiche automatisch mit einem soliden weißen Hintergrund auf.',
  },
  {
    question: 'Gibt es eine Beschränkung für Konvertierungen oder Dateigrößen?',
    answer:
      'Wir erlegen keine Einschränkungen auf. Sie können Hunderte von Bildern konvertieren, solange Ihr Computer über ausreichend Rechenleistung und Arbeitsspeicher verfügt.',
  },
];

const howTo: WebpAJpgLocaleContent['howTo'] = [
  {
    name: 'Dateien ziehen',
    text: 'Ziehen Sie Ihre modernen WebP-Dateien in den Upload-Bereich oder wählen Sie sie mit dem Explorer aus.',
  },
  {
    name: 'Lokale Konvertierung',
    text: 'Beobachten Sie, wie die lokale Engine einen Hintergrund anwendet und jedes Pixel in das universelle JPG-Format interpretiert.',
  },
  {
    name: 'Ergebnisse erhalten',
    text: 'Laden Sie sie einzeln herunter oder verwenden Sie das ZIP-Paket, um alle Ihre neuen Fotos zu bündeln.',
  },
];

const seo: WebpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'WebP zu JPG Konverter: Universelle Kompatibilität ohne Kompromisse beim Datenschutz',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> ist Googles Wette auf Effizienz: leichtere Bilder mit einer Qualität, die mit herkömmlichem JPG vergleichbar ist. Die Kompatibilität bleibt jedoch ein Problem in der realen Welt. E-Mail-Clients wie Outlook, alte Design-Software, Messaging-Apps und Unternehmensabläufe hängen immer noch vom allgegenwärtigen <strong>JPG</strong> ab. Die Konvertierung von WebP in JPG ist die Brücke zwischen dem modernen Web und der realen Welt.',
  },
  {
    type: 'title',
    text: 'WebP vs. JPG: Wann sollte man welches Format verwenden?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP glänzt in kontrollierten Umgebungen: moderne Websites in Chrome, Edge oder Firefox, in denen die Browserkompatibilität garantiert werden kann. Die überlegene Kompression reduziert das Dateigewicht um 25–35 % gegenüber einem vergleichbaren JPG, was die Ladezeiten und Core Web Vitals verbessert. Es ist das ideale Format, wenn Sie die Anzeigeumgebung kontrollieren.',
  },
  {
    type: 'paragraph',
    html: 'JPG hingegen funktioniert in <em>absolut jedem Kontext</em>: E-Mail-Anhänge, PowerPoint-Präsentationen, Word-Dokumente, Heimdrucker, alte Bearbeitungsanwendungen und soziale Plattformen ohne Ausnahme. Wenn Sie sicherstellen müssen, dass jemand Ihr Bild ohne technische Reibung öffnen kann, ist JPG die richtige Antwort.',
  },
  {
    type: 'title',
    text: 'Vergleich: Lokale vs. Cloud-Konvertierung',
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
          'Ihre Fotos reisen über das Internet zu unbekannten Servern',
          'Wartezeit für Upload und Remote-Verarbeitung',
          'Tägliche Limits für Dateigröße und kostenlose Konvertierungen',
          'Reales Risiko der Datenspeicherung auf Drittanbieter-Servern',
        ],
      },
      {
        title: 'Unsere lokale Architektur',
        description: 'Direkte Verarbeitung auf Ihrer Hardware mittels Vanilla-JS-Technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Null gesendete Bytes: Alles passiert in Ihrem RAM',
          'Sofortige Geschwindigkeit, ohne von Ihrer Verbindung abhängig zu sein',
          'Keine Limits bei Dateigröße oder Anzahl der Dateien',
          'Ideal für persönliche, medizinische oder Firmenfotos',
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
    html: 'Wenn Sie eine WebP-Datei in das Tool ziehen, dekodiert der Browser sie nativ mit seiner internen Rendering-Engine. Die Datei wird dann auf ein unsichtbares <strong>HTML5 Canvas</strong>-Element gezeichnet. Da JPG keine Transparenz unterstützt, füllt der Algorithmus die Leinwand vor dem Zusammensetzen des Bildes mit einem soliden weißen Hintergrund auf.',
  },
  {
    type: 'paragraph',
    html: 'Der letzte Schritt ist der Export: Die Canvas-Methode <code>toDataURL(\'image/jpeg\')</code> konvertiert die Canvas-Pixel in einen hochwertigen komprimierten JPG-Byte-Stream. Dieser Stream wird direkt an das Download-System des Browsers geliefert, ohne jegliche Netzwerkkommunikation. Der gesamte Prozess dauert Millisekunden, selbst bei Bildern mit mehreren Megapixeln.',
  },
  {
    type: 'tip',
    title: 'Kompatibilitätstipp',
    html: 'Wenn Sie Fotos mit technisch weniger versierten Benutzern teilen oder per E-Mail versenden, verwenden Sie immer JPG – keine Kompatibilitätsprobleme über alle E-Mail-Clients, Betriebssysteme oder Geräte hinweg, keine Ausnahmen und keine unangenehmen Überraschungen.',
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
      'Anhängen von Fotos in E-Mails von Outlook, Gmail oder Apple Mail.',
      'Einfügen von Bildern in Word-Dokumente, Excel oder PowerPoint-Präsentationen.',
      'Posten auf sozialen Plattformen, die WebP ablehnen.',
      'Teilen über WhatsApp oder Messaging-Apps mit eingeschränkter Formatunterstützung.',
      'Drucken von Fotos bei Fotodiensten, die nur JPG oder PNG akzeptieren.',
    ],
  },
  {
    type: 'title',
    text: 'Fazit',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP ist die Zukunft der Web-Bilder, aber JPG bleibt der König der universellen Kompatibilität. Mit diesem Tool können Sie diese Brücke in Sekunden überqueren, völlig privat und ohne etwas zu installieren. Ihr Bild verlässt niemals Ihr Gerät.',
  },
];

export const content: WebpAJpgLocaleContent = {
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
