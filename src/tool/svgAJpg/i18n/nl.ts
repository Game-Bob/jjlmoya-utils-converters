import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAJpgLocaleContent } from '../index';

const slug = 'svg-naar-jpg-converter';
const title = 'Converteer SVG naar JPG Online en Gratis';
const description =
  'Converteer SVG-vectorbestanden naar JPG in je browser. 2x hoge resolutie rendering. Geen bestandsuploads. Gratis en 100% privé.';

const ui: ImageConverterUI = {
  dragText: 'Sleep SVG-bestanden...',
  convertText: 'Om ze direct naar JPG te converteren',
  selectFiles: 'Bestanden selecteren',
  processedFiles: 'Verwerkte bestanden',
  downloadAll: 'Alles downloaden (.zip)',
  pending: 'In afwachting',
  bibliographyTitle: 'Bibliografische Referenties',
  faqTitle: 'Veelgestelde Vragen',
};

const faq: SvgAJpgLocaleContent['faq'] = [
  {
    question: 'Waarom SVG naar JPG converteren?',
    answer:
      'JPG biedt maximale compatibiliteit op alle soorten apparaten; het converteren van SVG naar JPG is de beste manier om ervoor te zorgen dat iedereen je ontwerp kan bekijken zonder renderingproblemen.',
  },
  {
    question: 'Wat gebeurt er met de SVG-transparantie?',
    answer:
      'Bij het converteren naar JPG (dat geen transparantie ondersteunt), wordt automatisch een ondoorzichtige witte achtergrond aan je vectorcompositie toegevoegd.',
  },
  {
    question: 'Welke resolutie heeft de resulterende JPG?',
    answer:
      'De tool rendert de SVG op dubbele schaal (2x) om een hoge resolutie te garanderen die geschikt is voor Retina-schermen en professioneel gebruik.',
  },
];

const howTo: SvgAJpgLocaleContent['howTo'] = [
  {
    name: 'Voeg je vectorbestanden toe',
    text: 'Sleep je SVG-bestanden naar het bovenste gedeelte om de exportlijst voor te bereiden.',
  },
  {
    name: 'Rasterisatie naar JPG',
    text: 'De tool zet de vectoren om naar pixels met een hoge resolutie en genereert direct je JPG.',
  },
  {
    name: 'Download de resultaten',
    text: 'Download je JPG-bestanden één voor één of als een ZIP-pakket.',
  },
];

const seo: SvgAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'SVG naar JPG Converter: Breng je vectoren naar elk platform',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Het <strong>SVG</strong>-formaat is de moedertaal van het moderne web: lichtgewicht, schaalbaar, bewerkbaar. Maar er zijn hele platforms die vectoren simpelweg niet begrijpen. Sociale media, e-mailclients, Word-documenten, printtoepassingen en de overgrote meerderheid van software in de echte wereld werken met gerasterde afbeeldingen. <strong>JPG</strong> is de universele gemene deler: overal geaccepteerd, zonder uitzonderingen, zonder plug-ins en zonder dat er extra conversies nodig zijn.',
  },
  {
    type: 'title',
    text: 'SVG vs JPG: Wanneer de vector een foto moet worden',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG slaat de afbeelding op als wiskundige instructies. Dit vectorkarakter maakt het perfect voor het web, maar onzichtbaar voor de analoge wereld en verouderde software. Een SVG-bestand dat per e-mail wordt verzonden, kan als onbegrijpelijke XML-tekst verschijnen in de client van de ontvanger. Een SVG die is bijgevoegd bij een Word-document wordt in oudere versies van Office mogelijk helemaal niet gerenderd.',
  },
  {
    type: 'paragraph',
    html: 'JPG zet elke afbeelding om in een pixelmatrix met kleurinformatie die gecomprimeerd is door het JPEG-algoritme. Omdat het geen alfakanaal ondersteunt, voegt de converter de achtergrond automatisch samen met effen wit. In ruil daarvoor krijg je een bestand dat op <em>elk apparaat op de planeet</em> kan worden geopend: oude mobiele telefoons, printers, smart-tv\'s, bewerkings-apps van twintig jaar geleden. Het is het formaat van de kleinste gemene deler, en in veel contexten het meest waardevolle.',
  },
  {
    type: 'title',
    text: 'Vergelijking: Lokale vs Cloud-conversie',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Cloud Converters',
        description: 'Tools die je bestanden uploaden naar een externe server.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Je SVG-code (met bedrijfseigen ontwerpgegevens) reist naar externe servers',
          'Inconsistente rendering van lettertypen en verlopen',
          'Internetverbinding nodig voor elke conversie',
          'JPG-uitvoerkwaliteit niet altijd configureerbaar',
        ],
      },
      {
        title: 'Onze Lokale Architectuur',
        description: 'Directe verwerking op je eigen hardware met Vanilla JS-technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Geen enkele byte van je SVG verlaat de browser',
          'Getrouwe rendering met de eigen browser-engine',
          '2x hoge resolutie JPG voor maximale scherpte',
          'Witte achtergrond automatisch toegepast volgens JPG-standaard',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Hoe het technisch werkt',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Het SVG-bestand wordt geladen in een browser <strong>Image</strong>-element, dat zijn eigen vector-rendering-engine gebruikt om de XML te interpreteren. Het visuele resultaat wordt getekend op een <strong>HTML5 Canvas</strong> met een voorafgaande witte achtergrondvulling (vereist omdat JPG geen transparantie ondersteunt) op dubbele schaal om de uitvoerresolutie te maximaliseren.',
  },
  {
    type: 'paragraph',
    html: 'De methode <code>toDataURL(\'image/jpeg\', 0.92)</code> zet de canvaspixels om naar een JPG-bestand van hoge kwaliteit. SVG-kleuren kunnen lichte variaties vertonen als gevolg van kleurruimteconversie in JPEG-compressie. Het is daarom raadzaam om het resultaat te bekijken voordat je het gebruikt in professionele printopdrachten waarbij chromatische getrouwheid cruciaal is.',
  },
  {
    type: 'tip',
    title: 'Tip voor printgebruik',
    html: 'SVG-achtergronden en verlopen kunnen er in JPG iets anders uitzien door kleurprofielverschillen in JPEG-compressie. Bekijk altijd het resultaat voordat je het naar een printer stuurt of gebruikt in gedrukt marketingmateriaal waarbij een exacte nauwkeurigheid van de merkkleuren belangrijk is.',
  },
  {
    type: 'title',
    text: 'Toepassingen en compatibiliteit',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'SVG-logo\'s en illustraties delen op Facebook, Twitter of LinkedIn.',
      'Vektorgrafieken bijvoegen in e-mails via Outlook of Gmail.',
      'SVG-ontwerpen invoegen in Word-documenten, Excel of presentaties.',
      'Productafbeeldingen publiceren op webshops die geen SVG ondersteunen.',
      'Bestanden voorbereiden voor print-on-demand diensten.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'De echte wereld spreekt nog steeds in pixels. Deze tool vertaalt je SVG-vectoren in enkele seconden naar de universele taal van JPG, met rendering in hoge resolutie en zonder dat je ontwerpen ooit je browser verlaten.',
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
  schemas: generateSchemas({ title, description, inLanguage: 'nl', faq, howTo }),
};
