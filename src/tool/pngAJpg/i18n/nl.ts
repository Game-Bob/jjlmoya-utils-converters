import { bibliography } from '../bibliography';
import { buildPngJpgSeo } from '../seo';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAJpgLocaleContent } from '../index';

const slug = 'convert-png-naar-jpg';
const title = 'PNG naar JPG Online Converteren';
const description =
  'Converteer je PNG-afbeeldingen direct op je eigen computer naar het snel comprimerende JPG-formaat. Zonder foto\'s naar het internet te uploaden. Batch-optimalisatie.';

const ui: ImageConverterUI = {
  dragText: 'Sleep PNG-bestanden hierheen...',
  convertText: 'Om ze direct naar JPG te converteren',
  selectFiles: 'Bestanden selecteren',
  processedFiles: 'Verwerkte bestanden',
  downloadAll: 'Alles downloaden (.zip)',
  pending: 'In afwachting',
  bibliographyTitle: 'Bibliografische Referenties',
  faqTitle: 'Veelgestelde Vragen',
};

const faq: PngAJpgLocaleContent['faq'] = [
  {
    question: 'Waarom onze lokale PNG-naar-JPG-converter kiezen?',
    answer:
      'In tegenstelling tot gewone tools verwerkt deze toepassing bestanden volledig in je browser. Je afbeeldingen verlaten je apparaat niet en blijven onder jouw controle.',
  },
  {
    question: 'JPG of PNG: welk formaat is beter?',
    answer:
      "PNG is geschikt voor logo's en transparantie. JPG is meestal beter voor foto's en webbanners, omdat het bestand veel kleiner wordt en websites sneller laden.",
  },
  {
    question: 'Hoe werkt de conversie zonder upload?',
    answer:
      'De toepassing gebruikt HTML5 Canvas. De browser tekent de afbeelding in een onzichtbaar werkvlak, vervangt transparantie door wit en maakt het JPG-bestand direct op je apparaat.',
  },
  {
    question: 'Is deze converter veilig voor vertrouwelijke documenten?',
    answer:
      'Ja. De verwerking vindt uitsluitend in het geheugen van je apparaat plaats. Wanneer je het tabblad sluit, blijven er geen bestanden op een externe server achter.',
  },
];

const howTo: PngAJpgLocaleContent['howTo'] = [
  {
    name: 'Bestandselectie',
    text: 'Bereid je PNG-bestanden voor in een map en sleep ze allemaal tegelijk naar het verwerkingsgebied of zoek ze op met de verkenner.',
  },
  {
    name: 'Directe verwerking',
    text: 'Controleer of de status voor elk bestand verandert in "Gereed" terwijl de browser de grootte lokaal optimaliseert.',
  },
  {
    name: 'Geoptimaliseerde download',
    text: 'Sla je nieuwe JPG\'s een voor een op of gebruik de knop "Alles downloaden" om een gecomprimeerd ZIP-bestand met alle afbeeldingen te krijgen.',
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
  schemas: generateSchemas({ title, description, inLanguage: 'nl', faq, howTo }),
};
