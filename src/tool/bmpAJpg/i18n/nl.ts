import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAJpgLocaleContent } from '../index';

const slug = 'bmp-naar-jpg-converter';
const title = 'BMP naar JPG Online Converteren';
const description =
  'Converteer BMP-afbeeldingen naar JPG in je browser. Beperk de bestandsgrootte drastisch. Zonder bestanden naar servers te uploaden. Gratis en 100% privé.';

const ui: ImageConverterUI = {
  dragText: 'Sleep BMP-bestanden hierheen...',
  convertText: 'Om ze direct naar JPG te converteren',
  selectFiles: 'Bestanden selecteren',
  processedFiles: 'Verwerkte bestanden',
  downloadAll: 'Alles downloaden (.zip)',
  pending: 'In afwachting': 'Bibliografische Referenties',
  faqTitle: 'Veelgestelde Vragen',
};

const faq: BmpAJpgLocaleContent['faq'] = [
  {
    question: 'Waarom BMP naar JPG converteren?',
    answer:
      'Het BMP-formaat comprimeert geen gegevens, wat resulteert in extreem grote bestanden. Het JPG-formaat comprimeert de afbeelding drastisch met behoud van een uitstekende visuele kwaliteit voor web en distributie.',
  },
  {
    question: 'Is het veilig om mijn afbeeldingen hier te converteren?',
    answer:
      '100% veilig. Je privacy is gegarandeerd omdat de verwerking volledig lokaal gebeurt met behulp van de engine van je eigen webbrowser.',
  },
  {
    question: 'Hoe werkt de tool?',
    answer:
      'Sleep gewoon je BMP-bestanden naar de tool en ons JavaScript-script leest de pixels om ze opnieuw op een HTML-canvas te tekenen en ze direct in JPEG-codering te exporteren.',
  },
];

const howTo: BmpAJpgLocaleContent['howTo'] = [
  {
    name: 'Upload je BMP-bestanden',
    text: 'Sleep je afbeeldingen in BMP-formaat naar de aangewezen zone of selecteer ze handmatig.',
  },
  {
    name: 'Automatische Verwerking',
    text: 'De tool rastert de afbeelding en past in milliseconden het optimale compressieniveau in JPG-formaat toe.',
  },
  {
    name: 'Individuele of Batch-download',
    text: 'Haal je nieuwe voor web geoptimaliseerde afbeeldingen één voor één op of download ze als een ZIP-bestand.',
  },
];

const seo: BmpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'BMP naar JPG Converter: Verklein een gigantisch bestand in seconden',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMP (Bitmap) is het meest eenvoudige formaat in de informatica: het slaat elke pixel op zoals die is, zonder enige vorm van compressie. Een screenshot van 1920x1080 in BMP weegt ongeveer 6 MB. Diezelfde afbeelding in JPG neemt tussen de 200 en 400 KB in beslag met een visueel ononderscheidbare kwaliteit. Het verschil is enorm en onze tool stelt je in staat om die conversie in seconden uit te voeren, direct in je browser, zonder iets naar een server te uploaden.',
  },
  {
    type: 'title',
    text: 'BMP vs JPG: ruwe data tegen slimme compressie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Het BMP-formaat is door Microsoft gecreëerd in het tijdperk van Windows 3.1. De filosofie is zo eenvoudig mogelijk: elke pixel neemt 3 bytes in beslag (rood, groen, blauw) en de pixels worden achter elkaar opgeslagen zonder verdere verwerking. Door deze totale afwezigheid van compressie zijn BMP-bestanden tussen de 50 en 100 keer groter dan hun equivalent in JPG voor foto\'s en echte screenshots.',
  },
  {
    type: 'paragraph',
    html: 'JPG daarentegen gebruikt de Discrete Cosinus Transformatie (DCT) om elk blok van 8x8 pixels te analyseren en de hoogfrequente informatie die het menselijk oog nauwelijks waarneemt te elimineren. Het resultaat is een afbeelding die er identiek uitziet, maar slechts een fractie weegt van het origineel. Voor BMP-bestanden afkomstig van screenshots, scanners of legacy Windows-applicaties is de conversie naar JPG de meest impactvolle optimalisatie-actie die mogelijk is.',
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
        description: 'Diensten die je BMP-bestanden naar externe servers uploaden om ze te verwerken.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Het uploaden van een BMP van 10 MB duurt lang bij trage verbindingen',
          'Je screenshots en vertrouwelijke afbeeldingen reizen over het internet',
          'Frequente limieten voor bestandsgrootte in gratis abonnementen',
          'Dubbele latentie: uploaden en downloaden van het geconverteerde bestand',
        ],
      },
      {
        title: 'Onze Lokale Architectuur',
        description: 'Directe verwerking op je eigen hardware via Vanilla JS-technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'De BMP wordt verwerkt in je RAM en reist niet naar een server',
          'Directe conversie zonder wachten',
          'Zonder limieten voor de bestandsgrootte',
          'Volledige privacy: 0 bytes naar buiten verzonden',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Hoe de technische conversie van BMP naar JPG werkt',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Wanneer je een BMP-bestand naar de tool sleept, leest de browser dit met de <code>FileReader</code> API en decodeert het als een Blob-object in het geheugen. Die Blob wordt gerenderd op een onzichtbaar HTML5 canvas. Vervolgens past de methode <code>toDataURL(\'image/jpeg\')</code> het JPEG-compressiealgoritme toe op de canvasgegevens en genereert het resulterende JPG-bestand.',
  },
  {
    type: 'paragraph',
    html: 'Aangezien BMP geen alfakanaal heeft (het ondersteunt geen transparantie), is de conversie naar JPG direct, zonder de noodzaak voor compositie met een witte achtergrond. Het volledige proces vindt plaats in het RAM-geheugen van je computer, zonder enige gegevensoverdracht via het netwerk, in milliseconden, zelfs voor bestanden van meerdere megabytes.',
  },
  {
    type: 'tip',
    title: 'Windows BMP\'s kunnen gigantisch zijn',
    html: 'BMP-bestanden die zijn gegenereerd door screenshots (Print Screen-toets in Windows) of door legacy-applicaties zoals Paint kunnen tussen de 50 en 100 keer meer wegen dan een gelijkwaardige JPG. Een enkel BMP-bestand in Full HD-resolutie kan meer dan 6 MB overschrijden. Ze converteren naar JPG voordat je ze per e-mail verstuurt of uploadt naar een platform is essentieel.',
  },
  {
    type: 'title',
    text: 'Gebruiksscenario\'s en compatibiliteit van de resulterende JPG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Optimalisatie van Windows-screenshots om per e-mail te verzenden.',
      'Conversie van afbeeldingen die zijn geëxporteerd door legacy software (CAD, oude scanners).',
      'Groottebeperking voor het uploaden van afbeeldingen naar webplatforms en sociale netwerken.',
      'Voorbereiding van bestanden voor invoeging in Word-, PowerPoint- of PDF-documenten.',
      'Universele compatibiliteit met alle moderne viewers en browsers.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusie: 10 MB BMP, 500 KB JPG, dezelfde afbeelding',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'De conversie van BMP naar JPG is een van de meest rendabele optimalisatie-oefeningen bij het beheer van afbeeldingsbestanden. Onze tool voert die transformatie in seconden uit, zonder bestanden te uploaden, zonder een account aan te maken, direct in je browser. Het resultaat is een hoogwaardige JPG, universeel compatibel en met een gewicht dat tot 97% lager is dan het originele BMP.',
  },
];


export const content: BmpAJpgLocaleContent = {
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
