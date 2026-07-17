import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAWebpLocaleContent } from '../index';

const slug = 'bmp-naar-webp-converter';
const title = 'Gratis BMP naar WebP Converteren';
const description =
  'Converteer BMP-afbeeldingen naar WebP zonder verbinding. Reduceer enorme bestanden naar kilobytes. Zonder bestanden te uploaden. Gratis, offline en volledig privé.';

const ui: ImageConverterUI = {
  dragText: 'Sleep BMP-bestanden hierheen...',
  convertText: 'Om ze direct naar WebP te converteren',
  selectFiles: 'Bestanden selecteren',
  processedFiles: 'Verwerkte bestanden',
  downloadAll: 'Alles downloaden (.zip)',
  pending: 'In afwachting',
  bibliographyTitle: 'Bibliografische Referenties',
  faqTitle: 'Veelgestelde Vragen',
};

const faq: BmpAWebpLocaleContent['faq'] = [
  {
    question: 'Waarom nemen mijn BMP-bestanden 10 keer meer ruimte in en wat win ik met WebP?',
    answer:
      'BMP slaat ongecomprimeerde pixelkaarten op. WebP gebruikt wiskundige compressie om enorme BMP\'s te verkleinen tot minder dan een megabyte, terwijl de afbeelding zeer herkenbaar blijft.',
  },
  {
    question: 'Moet ik een account registreren?',
    answer:
      'We vragen niet om een e-mailadres en je materiaal blijft geïsoleerd, aangezien de verwerking wordt uitgevoerd door de JavaScript van de browser op je eigen pc, zonder verzending op afstand.',
  },
  {
    question: 'Kan ik veel bestanden tegelijkertijd slepen?',
    answer:
      'Ja, je kunt 50 of 100 bestanden slepen als je hardware de verwerking van alles aankan zonder wachtrijen te creëren.',
  },
];

const howTo: BmpAWebpLocaleContent['howTo'] = [
  {
    name: 'Ruwe Bestanden Identificeren',
    text: 'Plaats je bitmap-collecties in vensters die klaar zijn voor de overdracht.',
  },
  {
    name: 'Natieve Batch-activering',
    text: 'Projecteer of sleep alle bestanden naar onze digitale tafel.',
  },
  {
    name: 'WebP Batch-evacuatie',
    text: 'Klik op de resultaten en je krijgt afzonderlijk de afbeeldingen met micro-gewichten of als directe gecomprimeerde pakketten.',
  },
];

const seo: BmpAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'BMP naar WebP Converter: De Meest Extreme Formaatverkleining Mogelijk',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMP naar WebP converteren is ongetwijfeld de meest spectaculaire transformatie die je met een afbeelding kunt doen. Het BMP-formaat (Bitmap) is een van de oudste en zwaarste formaten in het digitale ecosysteem: het slaat elke pixel op zonder enige vorm van compressie, wat resulteert in bestanden die 20, 50 of zelfs 100 keer zwaarder kunnen zijn dan hun moderne equivalent. WebP, ontwikkeld door Google, past geavanceerde compressie-algoritmen toe die de grootte tot het kleinst mogelijke minimum beperken met behoud van een uitstekende visuele kwaliteit.',
  },
  {
    type: 'title',
    text: 'Waarom is BMP zo zwaar en WebP zo efficiënt?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Het BMP-formaat werd in de jaren 80 geboren voor Windows, toen schijfruimte groot was en compressie geen prioriteit had. Elke pixel wordt opgeslagen zoals hij is, zonder enig reductie-algoritme: een afbeelding van 1920x1080 pixels in BMP neemt precies 5,93 MB in beslag, ongeacht de inhoud. Dit maakt het ideaal voor interne screenshots of bewerking zonder verlies, maar totaal ongeschikt voor het web of moderne opslag.',
  },
  {
    type: 'paragraph',
    html: 'WebP gebruikt voorspellende compressie gebaseerd op blokken en DCT-getransformeerden (dezelfde technologie die ten grondslag ligt aan digitale video), waardoor dezelfde afbeelding van 1920x1080 tussen de 80 KB eb 300 KB in beslag neemt. Dat betekent een vermindering van 95 tot 99% ten opzichte van de originele BMP. Bovendien ondersteunt WebP het alfakanaal voor transparantie en zowel verlieslatende als verliesvrije compressie, wat totale veelzijdigheid biedt.',
  },
  {
    type: 'title',
    text: 'Vergelijking: Cloud Converters vs Onze Lokale Architectuur',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Cloud Converters',
        description: 'Tools die je BMP-bestanden naar een externe server uploaden om ze te verwerken.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Het uploaden van een BMP van 20 MB duurt minuten bij een trage verbinding',
          'Je afbeeldingen blijven op externe servers staan',
          'Groottebeperkingen die grote BMP-bestanden uitsluiten',
          'Invasieve advertenties en datatrackers',
        ],
      },
      {
        title: 'Onze Lokale Architectuur',
        description: 'Directe verwerking in je browser via Vanilla JS-technologie und Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Directe conversie zonder netwerkoverdracht',
          'Absolute privacy - 0 bytes verlaten je apparaat',
          'Zonder groottebeperkingen per bestand',
          'Werkt zonder internetverbinding',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Hoe de technische conversie in de browser werkt',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Bij het slepen van een BMP-bestand leest de browser dit als een binair Blob in het RAM-geheugen. Dit Blob wordt geladen in een <code>Image</code> element van JavaScript, dat het decodeert met de eigen afbeeldingsengine. Vervolgens wordt de afbeelding op een onzichtbaar HTML5 <code>Canvas</code> element getekend. Het Canvas fungeert als een virtueel doek waarop de afbeelding pixel voor pixel bestaat.',
  },
  {
    type: 'paragraph',
    html: 'Eenmaal op het Canvas getekend, voeren we de methode <code>toBlob()</code> uit met het MIME-type <code>image/webp</code> en het gewenste kwaliteitsniveau. De browser past intern het WebP-compressiealgoritme toe en genereert een nieuw Blob met het resulterende bestand. Dit Blob wordt omgezet naar een directe download-URL die je browser op de schijf opslaat. Er wordt op geen enkel moment een netwerkverbinding tot stand gebracht.',
  },
  {
    type: 'tip',
    title: 'De grootste compressiesprong mogelijk',
    html: 'De conversie van BMP naar WebP kan een vermindering van 99% in bestandsgrootte bereiken. Een BMP van 20 MB kan worden omgezet in een WebP van slechts ongeveer 200 KB met een vrijwel identieke visuele kwaliteit. Het is de meest efficiënte transformatie die beschikbaar is tussen standaard afbeeldingsformaten.',
  },
  {
    type: 'title',
    text: 'Gebruiksscenario\'s en compatibiliteit van WebP',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Webpublicatie - Chrome, Firefox, Safari, Edge en alle moderne browsers.',
      'Sociale netwerken - Instagram, Twitter, Facebook accepteren WebP op eigen wijze.',
      'Web-apps en PWA - minimale groottes voor direct laden.',
      'Efficiënte archivering - vervangt collecties van oude BMP\'s en bespaart gigabytes.',
      'E-mailmarketing - lichte afbeeldingen die snel laden in elke moderne e-mailclient.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusie: De meest impactvolle conversie met één klik',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Als je oude BMP-bestanden van Windows, ongecomprimeerde screenshots of afbeeldingen van oude tools hebt, is het converteren naar WebP de meest impactvolle actie die je kunt ondernemen om je opslag en webprestaties te optimaliseren. Met onze tool is de conversie direct, privé en zonder beperkingen - precies zoals het zou moeten zijn.',
  },
];


export const content: BmpAWebpLocaleContent = {
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
