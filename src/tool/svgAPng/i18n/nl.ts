import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAPngLocaleContent } from '../index';

const slug = 'svg-naar-png-converter';
const title = 'Converteer SVG naar PNG Online en Gratis';
const description =
  'Converteer SVG-vectorbestanden naar PNG in je browser. Dubbel geschaalde HD-output. Behoudt transparantie. Gratis en 100% privé.';

const ui: ImageConverterUI = {
  dragText: 'Sleep SVG-bestanden...',
  convertText: 'Om ze direct naar PNG te converteren',
  selectFiles: 'Bestanden selecteren',
  processedFiles: 'Verwerkte bestanden',
  downloadAll: 'Alles downloaden (.zip)',
  pending: 'In afwachting': 'Bibliografische Referenties',
  faqTitle: 'Veelgestelde Vragen',
};

const faq: SvgAPngLocaleContent['faq'] = [
  {
    question: 'Waarom SVG-bestanden naar PNG converteren?',
    answer:
      'SVG is op vectoren gebaseerd en ideaal voor logo\'s, maar soms heb je het gerasterde PNG-formaat nodig voor gebruik in applicaties die geen vectoren ondersteunen, of om te delen via messaging-apps of sociale media.',
  },
  {
    question: 'Kan ik de uitvoergrootte kiezen?',
    answer:
      'We verdubbelen momenteel de schaal van de bron-SVG, zodat de PNG-uitvoer scherp is en geschikt voor Retina- of 4K-schermen.',
  },
  {
    question: 'Blijven SVG-transparanties behouden?',
    answer:
      'Ja, de resulterende PNG behoudt het alfakanaal van de originele SVG, waardoor alle transparante achtergronden intact blijven.',
  },
];

const howTo: SvgAPngLocaleContent['howTo'] = [
  {
    name: 'Voeg je SVG-bestanden toe',
    text: 'Sleep je SVG-bestanden rechtstreeks naar het bovenste gedeelte.',
  },
  {
    name: 'HD PNG Generatie',
    text: 'Binnen milliseconden zal onze lokale engine elke vector herscheppen als een HD-pixellaag in transparant PNG-formaat.',
  },
  {
    name: 'Download de bestanden',
    text: 'Sla de gegenereerde PNG\'s afzonderlijk op of als een ZIP-pakket.',
  },
];

const seo: SvgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'SVG naar PNG Converter: Van oneindige vector naar universeel raster',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>SVG</strong> (Scalable Vector Graphics) is de perfecte keuze voor webdesign: oneindig schaalbaar, lichtgewicht en bewerkbaar met elke code-editor. Maar wanneer je dat logo of pictogram wilt gebruiken in een mobiele app, het wilt delen op sociale media of wilt invoegen in een PowerPoint presentatie, loop je tegen een muur aan: de meeste van deze platforms ondersteunen geen SVG. Het <strong>PNG</strong>-formaat is de universele oplossing: gerasterd, met een alfakanaal en compatibel in absoluut elke context.',
  },
  {
    type: 'title',
    text: 'SVG vs PNG: Vectoren voor het web, raster voor de wereld',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG slaat de afbeelding op als wiskundige instructies: een Bézier curve, een verloop, een polygoon. Dit betekent dat hetzelfde bestand er perfect uitziet op 16px of 16.000px. Het is het ideale formaat voor je webcode, CSS-animaties en elk element dat zich moet aanpassen aan verschillende schermresoluties zonder kwaliteitsverlies.',
  },
  {
    type: 'paragraph',
    html: 'PNG slaat de afbeelding op als een pixelraster met kleur- en transparantie-informatie voor elke pixel. Het is een <strong>lossless</strong> formaat, wat betekent dat de kwaliteit volledig behouden blijft. Zodra een SVG is gerasterd naar PNG, ligt de resolutie vast. Daarom is het kiezen van de juiste exportgrootte cruciaal: onze tool rendert op dubbele schaal (2x) om scherpte op Retina- en 4K-schermen te garanderen.',
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
          'Je SVG-code reist naar externe servers',
          'Remote rendering met inconsistente kwaliteit',
          'Wachttijd voor uploaden en verwerken',
          'Beperkingen op de grootte van het SVG-bestand',
        ],
      },
      {
        title: 'Onze Lokale Architectuur',
        description: 'Directe verwerking op je eigen hardware met Vanilla JS-technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Je SVG verlaat nooit je browser',
          'Gebruik van de eigen browser-engine voor maximale getrouwheid',
          '2x resolutie PNG voor schermen met hoge dichtheid',
          'Transparantie behouden met volledig alfakanaal',
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
    html: 'Het proces begint met het laden van het SVG-bestand in een JavaScript <strong>Image</strong>-element. Zodra de browser-engine de vector-XML heeft geanalyseerd en gerenderd, wordt de resulterende afbeelding getekend op een <strong>HTML5 Canvas</strong> waarvan de afmetingen dubbel zo groot zijn als de originele SVG-grootte (2x schaal). Dit produceert een PNG met twee keer zoveel pixels per dimensie, ideaal voor schermen met een hoge resolutie.',
  },
  {
    type: 'paragraph',
    html: 'In tegenstelling tot conversie naar JPG, behoudt het canvas bij het exporteren naar PNG het volledige alfakanaal: transparante gebieden in de originele SVG worden volledig transparante pixels in de resulterende PNG — geen witte achtergrondvulling. De export maakt gebruik van de methote <code>toDataURL(\'image/png\')</code> met lossless compressie.',
  },
  {
    type: 'tip',
    title: 'Tip voor het rasteren',
    html: 'Kies je PNG-exportgrootte zorgvuldig — het rasteren van een SVG is een eenrichtingsproces: je kunt de vectoren niet herstellen uit de resulterende PNG. Bewaar altijd de originele SVG als bronbestand en genereer PNG\'s met de hoogste resolutie die je ooit nodig zou kunnen hebben.',
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
      'Vektorlogo\'s exporteren voor PowerPoint of Google Slides presentaties.',
      'PNG-pictogrammen maken voor iOS, Android of Progressive Web Apps.',
      'SVG-ontwerpen delen op Instagram, LinkedIn of andere sociale media.',
      'Vektorillustraties invoegen in Word-documenten of PDF\'s.',
      'PNG-miniaturen van SVG-afbeeldingen genereren voor CMS-voorbeeld.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG is de taal van vectoren; PNG is het paspoort naar de rest van de digitale wereld. Deze tool rastert je SVG\'s op 2x resolutie met behoud van transparantie rechtstreeks in je browser, zonder dat er een enkele byte van je ontwerp naar een externe server reist.',
  },
];


export const content: SvgAPngLocaleContent = {
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
