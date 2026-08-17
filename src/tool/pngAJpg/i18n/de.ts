import { bibliography } from '../bibliography';
import { buildPngJpgSeo } from '../seo';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAJpgLocaleContent } from '../index';

const slug = 'png-zu-jpg-konvertieren';
const title = 'PNG in JPG Online Konvertieren';
const description =
  'Konvertieren Sie Ihre PNG-Bilder sofort auf Ihrem eigenen Computer in das schnell komprimierte JPG-Format. Ohne Fotos ins Internet hochzuladen. Batch-Optimierung.';

const ui: ImageConverterUI = {
  dragText: 'PNG-Dateien hierher ziehen...',
  convertText: 'Um sie sofort in JPG zu konvertieren',
  selectFiles: 'Dateien auswählen',
  processedFiles: 'Verarbeitete Dateien',
  downloadAll: 'Alles herunterladen (.zip)',
  pending: 'Ausstehend',
  bibliographyTitle: 'Literaturhinweise',
  faqTitle: 'Häufig gestellte Fragen',
};

const faq: PngAJpgLocaleContent['faq'] = [
  {
    question: 'Warum unseren lokalen PNG-zu-JPG-Konverter wählen?',
    answer:
      'Im Gegensatz zu herkömmlichen Tools verarbeitet diese Anwendung Dateien vollständig in Ihrem Browser. Ihre Bilder verlassen Ihr Gerät nie und bleiben unter Ihrer Kontrolle.',
  },
  {
    question: 'JPG oder PNG: Welches Format ist besser?',
    answer:
      'PNG eignet sich für Logos und Transparenz. JPG ist dagegen ideal für Fotos und Webbanner, weil die Dateien deutlich kleiner werden und Webseiten schneller laden.',
  },
  {
    question: 'Wie funktioniert die Konvertierung ohne Upload?',
    answer:
      'Die Anwendung nutzt HTML5 Canvas. Der Browser zeichnet das Bild in einem unsichtbaren Arbeitsbereich, ersetzt Transparenz durch Weiß und erzeugt die JPG-Datei direkt auf Ihrem Gerät.',
  },
  {
    question: 'Ist der Konverter für vertrauliche Dokumente sicher?',
    answer:
      'Ja. Die Verarbeitung findet ausschließlich im Arbeitsspeicher Ihres Geräts statt. Beim Schließen des Tabs bleiben keine Dateien auf einem fremden Server zurück.',
  },
];

const howTo: PngAJpgLocaleContent['howTo'] = [
  {
    name: 'Dateiauswahl',
    text: 'Bereiten Sie Ihre PNG-Dateien in einem Ordner vor und ziehen Sie sie alle zusammen in den Verarbeitungsbereich oder suchen Sie sie mit dem Explorer.',
  },
  {
    name: 'Sofortige Verarbeitung',
    text: 'Überprüfen Sie, ob sich der Status für jede Datei auf "Fertig" ändert, während der Browser die Dateigröße lokal optimiert.',
  },
  {
    name: 'Optimierter Download',
    text: 'Speichern Sie Ihre neuen JPG-Dateien einzeln oder verwenden Sie die Schaltfläche "Alles herunterladen", um eine komprimierte ZIP-Datei mit allen Bildern zu erhalten.',
  },
];

const seo = buildPngJpgSeo({ title, description, faq, howTo });

export const content: PngAJpgLocaleContent = {
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
