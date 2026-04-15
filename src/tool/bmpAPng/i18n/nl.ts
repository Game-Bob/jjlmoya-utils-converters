import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAPngLocaleContent } from '../index';

const slug = 'bmp-naar-png-converter';
const title = 'BMP naar PNG Converter';
const description =
  'Converteer BMP-afbeeldingen naar PNG zonder kwaliteitsverlies. Moderne compressie zonder artefacten. Zonder bestanden te uploaden. Gratis en 100% privé.';

const ui: ImageConverterUI = {
  dragText: 'Sleep BMP-bestanden hierheen...',
  convertText: 'Om ze direct naar PNG te converteren',
  selectFiles: 'Bestanden selecteren',
  processedFiles: 'Verwerkte bestanden',
  downloadAll: 'Alles downloaden (.zip)',
  pending: 'In afwachting',
  bibliographyTitle: 'Bibliografische Referenties',
  faqTitle: 'Veelgestelde Vragen',
};

const faq: BmpAPngLocaleContent['faq'] = [
  {
    question: 'Wat is het belangrijkste verschil tussen BMP und PNG?',
    answer:
      'Zowel BMP als PNG zijn lossless formaten. Het verschil zit in de optimalisatie: PNG begrijpt moderne compressie-algoritmen om dezelfde afbeelding op te slaan met 5 of 10 keer minder geheugen dan BMP.',
  },
  {
    question: 'Is de conversie echt privé?',
    answer:
      'Ja. De volledige fotoverwerking wordt door je eigen computer gedaan. Absoluut niemand heeft toegang tot je bestanden tijdens de lokale overdracht.',
  },
  {
    question: 'Waarom kiezen voor PNG boven JPEG in dit geval?',
    answer:
      'Als je een BMP-bestand hebt, is dat omdat de afbeelding nauwkeurige kleuren heeft. Een BMP omzetten naar de destructieve JPG-standaard zou je pure kleuren vervuilen. PNG beschermt die getrouwheid.',
  },
];

const howTo: BmpAPngLocaleContent['howTo'] = [
  {
    name: 'Plaats je Foto',
    text: 'Sleep de BMP-bronbestanden gerust naar onze zone voor het loslaten van web-elementen.',
  },
  {
    name: 'Conversie zonder Netwerkoverdracht',
    text: 'Ervaar in slechts één seconde de schone verwerking die lokaal door je HTML5 JS wordt uitgevoerd.',
  },
  {
    name: 'Ontvang Zuivere PNG\'s',
    text: 'Download de PNG-replica\'s individueel of via een gecomprimeerd pakket.',
  },
];

const bibliography: BmpAPngLocaleContent['bibliography'] = [
  {
    name: 'BMP File Format',
    url: 'https://en.wikipedia.org/wiki/BMP_file_format',
  },
  {
    name: 'PNG Specification W3C',
    url: 'https://www.w3.org/TR/png/',
  },
];

const seo: BmpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'BMP naar PNG Converter: De Verliesvrije Vervanging van het BMP-formaat',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMP is een ongecomprimeerd formaat dat enorme hoeveelheden ruimte in beslag neemt zonder enig technisch voordeel ten opzichte van PNG. Beide zijn lossless formaten: ze slaan elke pixel met absolute nauwkeurigheid op. Maar PNG voegt verliesvrije compressie toe via het Deflate-algoritme, waardoor de bestandsgrootte met 3 tot 5 keer wordt verminderd zonder dat er ook maar één bit aan visuele informatie wordt opgeofferd. PNG is in wezen wat BMP altijd al had willen zijn.',
  },
  {
    type: 'title',
    text: 'BMP vs PNG: dezelfde kwaliteit, radicaal verschillende grootte',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Het fundamentele verschil tussen BMP en PNG zit niet in de beeldkwaliteit — beide zijn lossless — maar in de opslagefficiëntie. BMP slaat pixels ruw op: zonder compressie, zonder optimalisatie, zonder rekening te houden met de ruimte. PNG analyseert herhalende pixelpatronen en codeert ze compact via Deflate, hetzelfde algoritme dat ZIP gebruikt.',
  },
  {
    type: 'paragraph',
    html: 'Naast de superieure compressie voegt PNG een kenmerk toe dat BMP nooit heeft gehad: een volledig alfaknaal voor transparantie. Screenshots, interface-graphics, logo\'s, technische diagrammen: al dit soort afbeeldingen profiteren enorm van de conversie naar PNG, die elke exacte kleurwaarde behoudt terwijl het bestandsgewicht tot een fractie van het origineel wordt gereduceerd.',
  },
  {
    type: 'title',
    text: 'Vergelijking van Architectuur: Lokaal vs Cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Cloud Converters',
        description: 'Diensten die je BMP-bestanden verwerken op servers van derden.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Je werkafbeeldingen reizen over het internet',
          'Wachttijd proportioneel aan de grootte van de BMP',
          'Limieten voor bestandsgrootte in gratis abonnementen',
          'Risico op analyse of bewaring van je bestanden',
        ],
      },
      {
        title: 'Onze Lokale Architectuur',
        description: 'Directe verwerking op je eigen hardware via Vanilla JS-technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'De BMP wordt lokaal verwerkt en verlaat nooit je apparaat',
          'Directe conversie in milliseconden',
          'Zonder limieten voor bestandsgrootte of aantal bestanden',
          'Volledige privacy: 0 bytes naar buiten verzonden',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Hoe de lokale conversie van BMP naar PNG werkt',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Het proces maakt gebruik van de Canvas API van HTML5. Het BMP-bestand wordt gelezen met de <code>FileReader</code> API van de browser en gedecodeerd als een Blob in het geheugen. Die Blob wordt getekend op een onzichtbaar HTML5 canvas. Vervolgens past de methode <code>toDataURL(\'image/png\')</code> het eigen PNG-compressiealgoritme van de browser toe en genereert het resulterende bestand.',
  },
  {
    type: 'paragraph',
    html: 'In tegenstelling tot de conversie naar JPG is de conversie naar PNG volledig lossless: elke kleurwaarde van de originele BMP blijft exact behouden in de resulterende PNG. Er zijn geen artefacten, geen randvervaging, geen informatieverlies. Het uiteindelijke bestand is visueel identiek aan de BMP, maar neemt 3 tot 5 keer minder schijfruimte in beslag.',
  },
  {
    type: 'paragraph',
    html: 'Als je werkt met oude software die BMP exporteert (industriële machines, controlesystemen, medische diagnosesoftware), is converteren naar PNG de beste beslissing. PNG is compatibel met nagenoeg alle moderne programma\'s, behoudt de perfecte kleurgetrouwheid en neemt tot 5 keer minder ruimte in beslag. Het is de eenvoudigst mogelijke en veiligste migratie.',
  },
  {
    type: 'title',
    text: 'Gebruiksscenario\'s en compatibiliteit van de resulterende PNG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Screenshots en interface-graphics met behoud van exacte kleuren.',
      'Afbeeldingen voor technische documentatie en software-diagrammen.',
      'Exports uit CAD, industriële systemen en legacy-software.',
      'Logo\'s en visuele identiteitselementen met toegevoegde transparantie.',
      'Compatibel met Adobe Photoshop, GIMP, Figma en alle moderne editors.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusie: PNG is wat BMP altijd had moeten zijn',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMP naar PNG converteren is de meest natuurlijke modernisering van een afbeeldingsbestand: dezelfde lossless kwaliteit, grotere compatibiliteit, ondersteuning voor transparantie en een 3 tot 5 keer lager gewicht. Onze tool voert deze conversie in milliseconden uit, direct in je browser, zonder bestanden naar een server te uploaden.',
  },
];


export const content: BmpAPngLocaleContent = {
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
