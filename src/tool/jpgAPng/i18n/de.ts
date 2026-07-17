import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAPngLocaleContent } from '../index';

const slug = 'jpg-zu-png-konvertieren';
const title = 'JPG in PNG Online und Kostenlos Konvertieren';
const description =
  'Konvertieren Sie JPG-Bilder in Ihrem Browser in PNG, ohne Dateien hochzuladen. Verlustfreie Konvertierung, kostenlos und absolut privat.';

const ui: ImageConverterUI = {
  dragText: 'JPG-Dateien hierher ziehen...',
  convertText: 'Um sie sofort in PNG zu konvertieren',
  selectFiles: 'Dateien auswählen',
  processedFiles: 'Verarbeitete Dateien',
  downloadAll: 'Alles herunterladen (.zip)',
  pending: 'Ausstehend',
  bibliographyTitle: 'Literaturhinweise',
  faqTitle: 'Häufig gestellte Fragen',
};

const faq: JpgAPngLocaleContent['faq'] = [
  {
    question: 'Wann sollte ich JPG in PNG konvertieren?',
    answer:
      'Immer dann, wenn Sie Text oder Logos innerhalb eines Fotos bearbeiten möchten. Wenn Sie ein JPG mehrmals speichern, wird es "schmutzig". PNG friert die Kompression ein.',
  },
  {
    question: 'Wird die PNG-Datei sofort einen transparenten Hintergrund haben?',
    answer:
      'Nein. Das ursprüngliche JPG war flach und ohne diese Art von strukturellem Kanal. Die resultierende PNG erstellt diesen Container; anschließend müssen Sie das Element mit Photoshop oder einem anderen Editor freistellen.',
  },
  {
    question: 'Gibt es auf dieser Website Traffic-Limits?',
    answer:
      'Dank Edge-Technologien ohne Cloud-Abhängigkeiten gibt es keine Limits für das Gewicht Ihrer Konvertierung, da sie vollständig Ihr IT-Terminal oder Mobiltelefon nutzt.',
  },
];

const howTo: JpgAPngLocaleContent['howTo'] = [
  {
    name: 'JPG in das Panel ziehen',
    text: 'Laden Sie statische Bilder im JPG-Format über Touch-Maus oder den Computer-Selektor hoch.',
  },
  {
    name: 'Verlustfreie Ausführung',
    text: 'Die Vanilla-Software schiebt die Bits des Bildes in eine verlustfreie Hülle, die nativ für die PNG-Familie ist.',
  },
  {
    name: 'Sitzung beenden',
    text: 'Klicken Sie auf das Panel, und Ihr Browser legt die heruntergeladenen Web-Assets in Ihren Benutzerordnern ab.',
  },
];

const seo: JpgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'JPG-zu-PNG-Konverter: Verlustfreie Bearbeitung und Transparenz',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> ist für Kamerafotos unschlagbar, hat aber eine Schwachstelle: Bei jedem Speichern der Datei wird die verlustbehaftete Kompression erneut angewendet, wodurch Kanten und Verläufe schrittweise verschlechtert werden. <strong>PNG</strong> verwendet verlustfreie Kompression - einmal gespeichert, sind die Pixel unveränderlich. Die Konvertierung von JPG in PNG ist der entscheidende Vorgang, wenn Sie ein Bild für eine intensive Bearbeitung vorbereiten, einen transparenten Hintergrund hinzufügen oder es in einen Designfluss integrieren müssen, der mehrfaches Speichern erfordert.',
  },
  {
    type: 'title',
    text: 'JPG oder PNG? Wann man welches Format verwendet',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> ist der König der Fotografie: geringes Gewicht, mit allem kompatibel. Aber seine Kompressionsartefakte summieren sich bei jeder Bearbeitung und jedem erneuten Speichern. Wenn Sie ein Bild wiederholt zuschneiden, retuschieren oder Text hinzufügen müssen, bedeutet der Start mit JPG, dass in jedem Zyklus eine Verschlechterung eingeführt wird. Außerdem fehlt dem JPG der Alphakanal: Es kann keine transparenten Hintergründe haben, was es für Logos, Icons und UI-Elemente disqualifiziert.',
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> ist die richtige Wahl für Firmenlogos, Screenshots mit scharfem Text, Interface-Elemente, Produktbilder mit weißem Hintergrund, die Sie später ausschneiden müssen, oder jede grafische Ressource, die mehr als einmal bearbeitet wird. Die verlustfreie Kompression garantiert, dass die Textkanten perfekt definiert bleiben und dass Volltonfarben rein bleiben, ohne JPEG-Rauschen.',
  },
  {
    type: 'title',
    text: 'Vergleich: Lokale Konvertierung vs. Cloud',
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
          'Netzwerklatenz beim Upload und Download',
          'Ihre Bilder bleiben auf fremden Servern',
          'Limits für Größe und tägliche Konvertierungen',
          'Aufdringliche Werbung und Drittanbieter-Tracker',
        ],
      },
      {
        title: 'Unsere lokale Architektur',
        description: 'Direkte Verarbeitung auf Ihrer Hardware mittels Vanilla JS-Technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Sofortige Geschwindigkeit - null Netzwerklatenz',
          'Vollständige Privatsphäre - 0 Bytes nach außen gesendet',
          'Keine MB-Limits oder Beschränkungen der Dateianzahl',
          'Saubere Schnittstelle, ohne Anzeigen oder Tracking',
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
    html: 'Der Prozess ist rein lokal: Der Browser erstellt einen <strong>Blob</strong> mit dem ausgewählten JPG und zeichnet ihn auf einen <strong>HTML5 Canvas</strong> im Speicher. Sobald er gerendert ist, wird <code>toDataURL(\'image/png\')</code> aufgerufen - der im Browser integrierte PNG-Codec rekodiert jedes Pixel, ohne eine neue verlustbehaftete Kompression anzuwenden. Das Ergebnis ist ein PNG, das den aktuellen Zustand des JPG originalgetreu bewahrt: nicht besser und nicht schlechter, einfach eingefroren.',
  },
  {
    type: 'paragraph',
    html: 'Das resultierende PNG verwendet verlustfreie DEFLATE-Kompression, dieselbe, die von professionellen Tools wie Photoshop oder GIMP verwendet wird. Seine Größe wird größer sein als die des ursprünglichen JPG - normalerweise zwischen dem 2- und 5-fachen -, da es alle Pixel speichert, ohne Informationen zu verwerfen. Das ist der Preis für Treue und unendliche Editierbarkeit.',
  },
  {
    type: 'tip',
    title: 'Wichtig: Das PNG stellt keine JPEG Qualität wieder her',
    html: 'Das Konvertieren eines JPG in PNG <strong>stellt die verlorene Qualität nicht wieder her</strong>, die während der ursprünglichen JPEG-Kompression verloren gegangen ist. Wenn Ihr JPG bereits Blockartefakte oder Farbrauschen hatte, wird das PNG diese intakt bewahren - es verhindert lediglich, dass weitere hinzugefügt werden. Betrachten Sie die Konvertierung als ein "Einfrieren" des aktuellen Zustands des Bildes, damit zukünftige Bearbeitungen es nicht weiter verschlechtern.',
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
      'Logos und Branding-Elemente, die nach dem Zuschneiden einen transparenten Hintergrund benötigen.',
      'Screenshots mit Text, die mehrmals bearbeitet und neu gespeichert werden.',
      'Produktbilder für E-Commerce, die einen sauberen, zuschneidbaren weißen Hintergrund erfordern.',
      'Grafische Ressourcen für PowerPoint- oder Google Slides-Präsentationen.',
      'UI-Assets für Web- und Mobilanwendungen, bei denen die Kantenschärfe kritisch ist.',
    ],
  },
  {
    type: 'title',
    text: 'Fazit',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Die Konvertierung von JPG in PNG ist der erste Schritt in jedem ernsthaften Design-Workflow. Sie transformiert nicht die ursprüngliche Qualität, aber sie schützt jedes Pixel vor zukünftigen Bearbeitungen. Mit diesem Tool erfolgt der Prozess sofort und vollständig privat, ohne dass Ihre Firmen- oder persönlichen Bilder jemals Ihr Gerät verlassen.',
  },
];


export const content: JpgAPngLocaleContent = {
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
