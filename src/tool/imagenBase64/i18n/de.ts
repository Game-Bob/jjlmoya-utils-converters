import { bibliography } from '../bibliography';
import type { ImagenBase64LocaleContent } from '../index';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { ImageToBase64UI } from '../index';

const slug = 'bild-zu-base64-konverter';
const title = 'Bild zu Base64 Konverter Online';
const description =
  'Konvertieren Sie jedes Bild direkt in Ihrem Browser in Base64-Code und Data URI. Keine Dateiuploads. Kostenlos, privat und sofort.';

const ui: ImageToBase64UI = {
  dragTitle: 'Ziehen Sie Ihr Bild hierher',
  dragSubtext: 'oder klicken Sie, um Ihre Dateien zu durchsuchen',
  formatBadge: 'Unterstützt JPG, PNG, WEBP, SVG, GIF',
  dataUriLabel: 'Data URI (Bereit für CSS / HTML src="")',
  base64Label: 'Nur Base64 (Reiner kodierter Text)',
  copyBtn: 'Kopieren',
  dataUriPlaceholder: 'Laden Sie ein Bild hoch, um den Data-URI-Code zu sehen...',
  base64Placeholder: 'Laden Sie ein Bild hoch, um den reinen Base64-Code zu sehen...',
  toastMessage: 'Code in die Zwischenablage kopiert!',
  invalidImageAlert: 'Bitte laden Sie eine gültige Bilddatei hoch.',
  bibliographyTitle: 'Literaturhinweise',
  faqTitle: 'Häufig gestellte Fragen',
};

const faq: ImagenBase64LocaleContent['faq'] = [
  {
    question: 'Was ist Base64 und wofür wird es in der Webentwicklung verwendet?',
    answer:
      'Base64 ist ein Kodierungssystem, das Binärdaten in eine ASCII-Textzeichenfolge umwandelt. In der Webentwicklung wird es verwendet, um Bilder über Data URIs direkt in HTML- oder CSS-Dateien einzubetten, wodurch die Anzahl der HTTP-Anfragen an den Server reduziert wird.',
  },
  {
    question: 'Ist es sicher, meine Bilder hier in Base64 zu konvertieren?',
    answer:
      'Absolut sicher und privat. Unser Tool arbeitet zu 100 % lokal in Ihrem Browser. Ihre Bilder werden niemals auf einen externen Server hochgeladen oder dort verarbeitet.',
  },
  {
    question: 'Welche Bildformate unterstützt der Base64-Konverter?',
    answer:
      'Das Tool ist kompatibel mit JPG, PNG, GIF, WebP und sogar SVG-Vektordateien. Beim Laden des Bildes wird automatisch der MIME-Typ erkannt, um den exakten Data-URI-Code zu generieren.',
  },
  {
    question: 'Wann sollte ich Base64-Bilder NICHT verwenden?',
    answer:
      'Sie sollten Base64-Bilder nicht für große Fotos oder hochauflösende Bilder verwenden. Base64-Code beansprucht etwa 33 % mehr Speicherplatz als die ursprüngliche Binärdatei, was Ihre CSS-Stylesheets oder HTML-Dokumente übermäßig aufblähen kann.',
  },
];

const howTo: ImagenBase64LocaleContent['howTo'] = [
  {
    name: 'Bild ziehen oder auswählen',
    text: 'Verschieben Sie ein beliebiges Bild (JPG, PNG, WebP, SVG, GIF) in den Upload-Bereich, um die Konvertierung zu starten.',
  },
  {
    name: 'Generierten Code kopieren',
    text: 'Sie sehen zwei Textfelder: die vollständige Data URI (bereit zur Verwendung in src="" oder CSS) und das reine Base64 für andere Zwecke.',
  },
  {
    name: 'Code in Ihrem Projekt verwenden',
    text: 'Fügen Sie die Data URI direkt in den src-Attribut eines img-Tags oder in Ihr CSS als background-image ein, ohne externe Dateien zu benötigen.',
  },
];

const seo: ImagenBase64LocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Bild-zu-Base64-Konverter: Bilder ohne HTTP-Anfragen einbetten',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Base64 ist eine Kodierungstechnik, die Binärdaten - wie ein Bild - in eine reine ASCII-Textzeichenfolge transformiert. Das Ergebnis ist eine Data URI: eine in sich geschlossene URL, die mit <code>data:image/png;base64,...</code> beginnt und das gesamte kodierte Bild enthält. Durch das direkte Einbetten dieses Codes in Ihr HTML, CSS oder JSON wird das Bild ohne zusätzliche HTTP-Anfrage an den Server geladen - null Netzwerklatenz, sofortiges Laden.',
  },
  {
    type: 'title',
    text: 'Wann man Base64-Bilder verwendet',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Das Hauptargument für Base64 ist die Eliminierung von Netzwerkanfragen. Jedes Bild auf einer Webseite bedeutet eine HTTP-Anfrage mit dem entsprechenden Overhead für Verbindung, DNS, TLS-Handshake und Latenz. Bei sehr kleinen, kritischen Bildern - dem Hauptlogo der Anwendung, dem Favicon oder einem UI-Icon - eliminiert das Einbetten in Base64 in CSS oder HTML diese Kosten und garantiert eine sofortige Anzeige, noch bevor der Browser etwas zwischengespeichert hat.',
  },
  {
    type: 'paragraph',
    html: 'Diese Technik ist besonders leistungsfähig in SPA-Anwendungen (Single Page Application), bei denen das JavaScript- und CSS-Bundle zur Build-Zeit generiert wird: Das Einbetten kleiner Bilder im Bundle garantiert, dass sie zusammen mit dem Code ohne zusätzliche Anfragen geladen werden. Es ist auch unverzichtbar für HTML-E-Mails, bei denen E-Mail-Clients externe Bilder blockieren, aber eingebettete Data URIs fast immer anzeigen.',
  },
  {
    type: 'title',
    text: 'Anwendungsfälle für Base64-Bilder',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'HTML-Inline: <code>&lt;img src="data:image/png;base64,..."&gt;</code> für kritische Icons.',
      'CSS-Hintergrund: <code>background-image: url("data:image/svg+xml;base64,...")</code> für UI-SVGs.',
      'JSON und REST-APIs: Senden von Bildern als Textdaten in JSON-Payloads.',
      'HTML-E-Mails: Eingebettete Bilder, die auch dann angezeigt werden, wenn der Client externe URLs blockiert.',
      'SVG-Einbettung: Einbetten von Rasterbildern in SVG-Dateien als Inline-Daten.',
    ],
  },
  {
    type: 'title',
    text: 'Wie die Konvertierung im Browser funktioniert',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Wenn Sie ein Bild auswählen oder ziehen, liest die <code>FileReader</code>-API des Browsers es direkt von der Festplatte als Binärdaten in den RAM. Die Methode <code>readAsDataURL()</code> konvertiert diese Binärbytes mithilfe des RFC 4648-Algorithmus in ihre Base64-Darstellung - alle 3 Bytes der Originaldaten werden als 4 ASCII-Zeichen aus dem Base64-Alphabet dargestellt. Das Ergebnis enthält den automatisch erkannten korrekten MIME-Typ.',
  },
  {
    type: 'tip',
    title: 'Nur für kleine Bilder verwenden (unter 10 KB)',
    html: 'Base64 erhöht die Dateigröße um etwa 33 %: Ein 10 KB großes Bild wird zu ca. 13,3 KB Text. Bei kleinen Icons und Logos ist dieser Aufwand minimal, und die Eliminierung der HTTP-Anfrage gleicht dies aus. Bei Fotos oder großen Bildern ist der Größen-Overhead signifikant - verwenden Sie für große Bilder immer ein CDN.',
  },
  {
    type: 'title',
    text: 'Wann Base64 NICHT verwendet werden sollte',
    level: 3,
  },
  {
    type: 'tip',
    title: 'Vermeiden Sie Base64 für große Bilder: nutzen Sie ein CDN',
    html: 'Wenn Sie Bilder haben, die größer als 10-20 KB sind, schadet Base64 der Performance: Es bläht die HTML/CSS-Größe auf, verhindert, dass der Browser das Bild unabhängig zwischenspeichert, und blockiert das Rendering, während der Parser den riesigen String verarbeitet. Für große Bilder sollten Sie immer ein CDN mit entsprechenden Cache-Headern verwenden.',
  },
  {
    type: 'title',
    text: 'Kompatibilität und Datenschutz',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Data URIs sind mit 100 % der modernen Browser und den meisten E-Mail-Clients kompatibel. Unser Tool verarbeitet alles lokal über die FileReader-API - Ihre Bilder verlassen niemals Ihr Gerät. Damit eignet es sich für Unternehmensbilder, private Screenshots oder alle vertraulichen visuellen Inhalte, die Sie in Base64 konvertieren müssen.',
  },
  {
    type: 'title',
    text: 'Fazit: Das schnellste und privateste Einbettungs-Tool',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Das Konvertieren von Bildern in Base64 ist eine gezielte, aber sehr leistungsfähige Technik, wenn sie richtig angewendet wird. Verwenden Sie sie für kleine, kritische Bilder, bei denen null HTTP-Anfragen einen Unterschied machen, und vermeiden Sie sie für große Bilder, bei denen ein CDN immer gewinnt. Mit unserem Tool erhalten Sie die Data URI im Handumdrehen, ohne etwas auf einen Server hochzuladen.',
  },
];


export const content: ImagenBase64LocaleContent = {
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
