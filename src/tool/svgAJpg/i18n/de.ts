import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAJpgLocaleContent } from '../index';

const slug = 'svg-zu-jpg-konverter';
const title = 'SVG zu JPG Konverter Online und Kostenlos';
const description =
  'Konvertieren Sie SVG-Vektordateien in Ihrem Browser in JPG. 2x hochauflösendes Rendering. Keine Dateiuploads. Kostenlos und 100 % privat.';

const ui: ImageConverterUI = {
  dragText: 'SVG-Dateien hierher ziehen...',
  convertText: 'Um sie sofort in JPG zu konvertieren',
  selectFiles: 'Dateien auswählen',
  processedFiles: 'Verarbeitete Dateien',
  downloadAll: 'Alles herunterladen (.zip)',
  pending: 'Ausstehend': 'Literaturhinweise',
  faqTitle: 'Häufig gestellte Fragen',
};

const faq: SvgAJpgLocaleContent['faq'] = [
  {
    question: 'Warum SVG in JPG konvertieren?',
    answer:
      'JPG bietet maximale Kompatibilität auf allen Artern von Geräten. Die Konvertierung von SVG in JPG ist der beste Weg, um sicherzustellen, dass jeder Ihr Design ohne Darstellungsprobleme betrachten kann.',
  },
  {
    question: 'Was passiert mit der SVG-Transparenz?',
    answer:
      'Da JPG keine Transparenz unterstützt, wird Ihrer Vektorkomposition bei der Konvertierung automatisch ein opaker weißer Hintergrund hinzugefügt.',
  },
  {
    question: 'Welche Auflösung hat das resultierende JPG?',
    answer:
      'Das Tool rendert die SVG im doppelten Maßstab (2x), um eine hohe Auflösung zu garantieren, die für Retina-Bildschirme und den professionellen Einsatz geeignet ist.',
  },
];

const howTo: SvgAJpgLocaleContent['howTo'] = [
  {
    name: 'Vektordateien einfügen',
    text: 'Ziehen Sie Ihre SVG-Dateien in den oberen Bereich, um die Exportliste vorzubereiten.',
  },
  {
    name: 'Rasterung in JPG',
    text: 'Das Tool wandelt die Vektoren in hochauflösende Pixel um und generiert sofort Ihr JPG.',
  },
  {
    name: 'Ergebnisse herunterladen',
    text: 'Laden Sie Ihre JPG-Dateien einzeln oder als ZIP-Paket herunter.',
  },
];

const seo: SvgAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'SVG zu JPG Konverter: Bringen Sie Ihre Vektoren auf jede Plattform',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Das <strong>SVG</strong>-Format ist die Muttersprache des modernen Webs: leichtgewichtig, skalierbar, editierbar. Doch es gibt ganze Plattformen, die Vektoren einfach nicht verstehen. Soziale Medien, E-Mail-Clients, Word-Dokumente, Druckanwendungen und die überwiegende Mehrheit der Software in der realen Welt arbeiten mit gerasterten Bildern. <strong>JPG</strong> ist der universelle gemeinsame Nenner: überall akzeptiert, ohne Ausnahmen, ohne Plugins und ohne dass zusätzliche Konvertierungen erforderlich sind.',
  },
  {
    type: 'title',
    text: 'SVG vs JPG: Wenn der Vektor zum Foto werden muss',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG speichert das Bild als mathematische Anweisungen. Diese Vektornatur macht es perfekt für das Web, aber unsichtbar für die analoge Welt und ältere Software. Eine per E-Mail gesendete SVG-Datei kann im Client des Empfängers als unverständlicher XML-Text erscheinen. Eine an ein Word-Dokument angehängte SVG wird in älteren Office-Versionen möglicherweise gar nicht gerendert.',
  },
  {
    type: 'paragraph',
    html: 'JPG wandelt jedes Bild in eine Pixelmatrix um, deren Farbinformationen algorithmisch komprimiert werden. Da JPG keinen Alpha-Kanal unterstützt, verschmilzt der Konverter den Hintergrund automatisch mit solidem Weiß. Im Gegenzug erhalten Sie eine Datei, die auf <em>jedem Gerät auf dem Planeten</em> geöffnet werden kann: alte Mobiltelefone, Drucker, Smart-TVs, Bearbeitungs-Apps von vor zwanzig Jahren. Es ist das Format des kleinsten gemeinsamen Nenners und in vielen Kontexten das wertvollste.',
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
          'Ihr SVG-Code (mit proprietären Designdaten) gelangt auf externe Server',
          'Inkonsistentes Rendering von Schriften und Gradienten',
          'Internetverbindung für jede Konvertierung erforderlich',
          'JPG-Ausgabequalität nicht immer konfigurierbar',
        ],
      },
      {
        title: 'Unsere lokale Architektur',
        description: 'Direkte Verarbeitung auf Ihrer Hardware mittels Vanilla JS-Technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Kein einziges Byte Ihrer SVG verlässt den Browser',
          'Originalgetreues Rendering durch die native Browser-Engine',
          '2x hochauflösende JPG für maximale Schärfe',
          'Weißer Hintergrund wird gemäß JPG-Standard automatisch angewendet',
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
    html: 'Die SVG-Datei wird in ein Browser <strong>Image</strong>-Element geladen, das seine eigene Vektor-Rendering-Engine zur Interpretation des XML nutzt. Das visuelle Ergebnis wird auf ein <strong>HTML5 Canvas</strong> gezeichnet, das zuvor mit Weiß gefüllt wurde (erforderlich, da JPG keine Transparenz unterstützt), und zwar im doppelten Maßstab, um die Ausgabeauflösung zu maximieren.',
  },
  {
    type: 'paragraph',
    html: 'Die Methode <code>toDataURL(\'image/jpeg\', 0.92)</code> wandelt die Canvas-Pixel in eine hochwertige JPG-Datei um. SVG-Farben können aufgrund der Farbraumkonvertierung bei der JPEG-Komprimierung leichte Abweichungen erfahren. Es ist daher ratsam, das Ergebnis vor der Verwendung in professionellen Druckaufträgen, bei denen chromatische Treue entscheidend ist, zu prüfen.',
  },
  {
    type: 'tip',
    title: 'Tipp für den Druckeinsatz',
    html: 'SVG-Hintergründe und Gradienten können in JPG aufgrund von Farbprofil-Unterschieden bei der JPEG-Komprimierung leicht anders aussehen. Prüfen Sie das Ergebnis immer, bevor Sie es an einen Drucker senden oder in gedruckten Marketingmaterialien verwenden, bei denen es auf exakte Markenfarbtreue ankommt.',
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
      'Teilen von SVG-Logos und Illustrationen auf Facebook, Twitter oder LinkedIn.',
      'Anhängen von Vektorgrafiken in E-Mails über Outlook oder Gmail.',
      'Einfügen von SVG-Designs in Word-Dokumente, Excel oder Präsentationen.',
      'Veröffentlichen von Produktbildern in Online-Shops, die kein SVG unterstützen.',
      'Vorbereiten von Dateien für Print-on-Demand-Dienste.',
    ],
  },
  {
    type: 'title',
    text: 'Fazit',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Die reale Welt spricht immer noch in Pixeln. Dieses Tool übersetzt Ihre SVG-Vektoren in Sekundenschnelle in die universelle Sprache von JPG – mit hochauflösendem Rendering und ohne dass Ihre proprietären Designs jemals Ihren Browser verlassen.',
  },
];


export const content: SvgAJpgLocaleContent = {
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
