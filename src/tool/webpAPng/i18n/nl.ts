import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAPngLocaleContent } from '../index';

const slug = 'webp-naar-png-converter';
const title = 'Converteer WebP naar PNG Online en Gratis';
const description =
  'Converteer WebP-afbeeldingen naar PNG in je browser. Behoudt transparantie. Geen bestandsuploads naar servers. Gratis en 100% privé.';

const ui: ImageConverterUI = {
  dragText: 'Sleep WebP-bestanden...',
  convertText: 'Om ze direct naar PNG te converteren',
  selectFiles: 'Bestanden selecteren',
  processedFiles: 'Verwerkte bestanden',
  downloadAll: 'Alles downloaden (.zip)',
  pending: 'In afwachting': 'Bibliografische Referenties',
  faqTitle: 'Veelgestelde Vragen',
};

const faq: WebpAPngLocaleContent['faq'] = [
  {
    question: 'Waarom moet ik mijn WebP-bestanden converteren naar PNG?',
    answer:
      'Ondanks dat ze lichter zijn, kunnen WebP-bestanden compatibiliteitsproblemen veroorzaken in bewerkingsprogramma\'s zoals oudere Photoshop-versies. PNG garandeert 100% universele compatibiliteit.',
  },
  {
    question: 'Gaan transparanties verloren bij het converteren van WebP naar PNG?',
    answer:
      'Helemaal niet. In tegenstelling tot conversie naar JPG, ondersteunt PNG het alfakanaal. Onze tool behoudt elk transparant gebied van het originele bestand.',
  },
  {
    question: 'Kan ik vertrouwelijke bedrijfsbestanden uploaden?',
    answer:
      'Dat kan en dat moet je ook doen. Omdat alles lokaal via JavaScript draait, verlaten je bedrijfsafbeeldingen nooit je computer en worden ze niet op externe servers opgeslagen.',
  },
];

const howTo: WebpAPngLocaleContent['howTo'] = [
  {
    name: 'Sleep je WebP-bestanden',
    text: 'Sleep je WebP-bestanden naar het hoofdpaneel of selecteer de afbeeldingen op de traditionele manier.',
  },
  {
    name: 'High Fidelity Conversie',
    text: 'Je browser tekent de afbeelding pixel voor pixel opnieuw en genereert een exacte kopie in PNG-formaat, waarbij het originele kleurengamma behouden blijft.',
  },
  {
    name: 'Individuele of Bulk Download',
    text: 'Sla elk bestand afzonderlijk op of, als je een batch hebt verwerkt, klik op de ZIP-knop om ze allemaal gebundeld te downloaden.',
  },
];

const seo: WebpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'WebP naar PNG Converter: de professionele keuze voor bewerking en ontwerp',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Wanneer een ontwerper een grafisch asset in <strong>WebP</strong>-formaat downloadt en probeert te openen in Photoshop, Figma of Illustrator, kan het resultaat frustrerend zijn: het bestand kan niet worden geladen of verliest kwaliteit. Het <strong>PNG</strong>-formaat is de onbetwiste standaard voor professionele bewerking: verliesvrije compressie, volledig alfakanaal en gegarandeerde compatibiliteit in de hele creatieve productieketen.',
  },
  {
    type: 'title',
    text: 'WebP voor het web, PNG voor de studio',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP is een formaat voor webproductie: de compressie-algoritmen zijn geoptimaliseerd om het overdrachtsgewicht te verminderen, niet om maximale getrouwheid te behouden tijdens iteratieve bewerkingsworkflows. Elke keer dat je een bewerkt WebP-bestand opslaat, past de codec opnieuw compressie toe. Voor projecten waarbij een bestand vaak wordt gewijzigd, betekent dit een cumulatieve kwaliteitsvermindering.',
  },
  {
    type: 'paragraph',
    html: 'PNG gebruikt <strong>verliesvrije compressie</strong>: de gegevens van elke pixel blijven volledig behouden, ongeacht hoe vaak je het bestand opslaat. Het is het formaat bij uitstek voor UI/UX-ontwerpers, digitale illustratoren en brandingteams die de visuele integriteit over tientallen revisies heen moeten handhaven. Tools zoals Photoshop, Figma, Sketch en Illustrator behandelen PNG als hun primaire exportformaat.',
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
          'Je ontwerpassets worden opgeslagen op servers van derden',
          'Trage externe verwerking voor grote bestanden',
          'Risico op lekken voor vertrouwelijke klantprojecten',
          'Batchconversie beperkt of achter een betaalmuur',
        ],
      },
      {
        title: 'Onze Lokale Architectuur',
        description: 'Directe verwerking op je eigen hardware met Vanilla JS-technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Je ontwerpen verlaten nooit je machine',
          'Converteer tientallen bestanden direct in batch',
          'Volledig behoud van alfakanaal en kleurengamma',
          'Absolute privacy voor klantprojecten',
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
    html: 'Moderne browsers kunnen WebP native decoderen. Onze tool maakt gebruik van deze eigenschap om het bestand in een JavaScript-<strong>Image</strong>-element te laden en tekent het vervolgens op een HTML5-canvas met dezelfde afmetingen als het origineel. In tegenstelling tot conversie naar JPG is hier geen achtergrondvulling nodig: het canvas behoudt het volledige alfakanaal.',
  },
  {
    type: 'paragraph',
    html: 'De uiteindelijke export maakt gebruik van de <code>toDataURL(\'image/png\')</code> methode, die een verliesvrije PNG genereert die trouw is aan het origineel. Het resultaat is een bestand dat direct in elke professionele ontwerpsoftware kan worden geïmporteerd zonder tussenstappen, kleurverlies of verlies van transparantie.',
  },
  {
    type: 'tip',
    title: 'Tip voor bewerkers',
    html: 'Gebruik PNG wanneer je de afbeelding verder moet bewerken. Verliesvrije compressie garandeert dat er geen kwaliteitsverlies optreedt door herhaaldelijk opslaan — cruciaal bij het werken met lagen, maskers of kleuraanpassingen in Photoshop of Figma.',
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
      'WebP-assets importeren in Photoshop, Figma, Sketch of Illustrator.',
      'Transparantie behouden in logo\'s en iconen voor gebruik op meerdere achtergronden.',
      'Masterkopieën van graphics maken voor langlopende projecten.',
      'Assets exporteren voor mobiele apps die PNG met alfakanaal vereisen.',
      'Afbeeldingen gebruiken in ontwerpmock-ups en presentaties met variabele achtergronden.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Als WebP het formaat voor webservers is, dan is PNG het formaat voor de ontwerpstudio. Deze tool converteert je WebP-assets naar productieklare PNG\'s, met behoud van transparantie en maximale kwaliteit — allemaal in je browser en zonder dat je bestanden je machine ooit verlaten.',
  },
];


export const content: WebpAPngLocaleContent = {
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
