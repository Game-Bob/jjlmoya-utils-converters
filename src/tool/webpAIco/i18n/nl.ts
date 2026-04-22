import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAIcoLocaleContent } from '../index';

const slug = 'webp-naar-ico-converter';
const title = 'Converteer WebP naar ICO';
const description =
  'Converteer WebP-afbeeldingen naar officiële ICO met transparantie. Geen bestandsuploads. Echte Microsoft binaire headers. Gratis en privé.';

const ui: ImageConverterUI = {
  dragText: 'Sleep WebP-bestanden...',
  convertText: 'Om ze direct naar ICO te converteren',
  selectFiles: 'Bestanden selecteren',
  processedFiles: 'Verwerkte bestanden',
  downloadAll: 'Alles downloaden (.zip)',
  pending: 'In afwachting': 'Bibliografische Referenties',
  faqTitle: 'Veelgestelde Vragen',
};

const faq: WebpAIcoLocaleContent['faq'] = [
  {
    question: 'Kan ik WebP-stickerontwerpen converteren naar een officieel web Favicon ICO?',
    answer:
      'Absoluut. De Favicon vereist nog steeds de klassieke Microsoft ICO-extensie voor extreme universele compatibiliteit. Deze tool injecteert binaire headers om een 100% legitiem icoon te bouwen.',
  },
  {
    question: 'Moet ik wachten in online wachtrijen bij het maken van mijn enorme batch bedrijfsiconen?',
    answer:
      'Helemaal niet. Onze converter laadt het Javascript en verbreekt elke uploadverbinding. Je eigen telefoon-CPU verwerkt honderd foto\'s of meer asynchroon.',
  },
  {
    question: 'Zal de resulterende ICO de transparantie van mijn originele WebP ondersteunen?',
    answer:
      'Ja. Onze engine werkt intern met de HTML5 canvas API met volledige 32-bit ondersteuning, elk transparant gat wordt netjes overgezet naar het iconografische bestand.',
  },
];

const howTo: WebpAIcoLocaleContent['howTo'] = [
  {
    name: 'Sleep al je lokale WebP-stickers',
    text: 'Verplaats de zware fotobatches zonder angst voor verzadiging van de weblimiet.',
  },
  {
    name: 'Logische asynchrone vertaling en directe montage',
    text: 'Merk snel op hoe de balk en elementen automatisch worden aangevuld terwijl het geheugen het blok byte voor byte verwerkt.',
  },
  {
    name: 'Neem je pakket mee voor systeem- en webontwikkeling',
    text: 'Klik vrijuit op een enorme downloadknop voor een gezamenlijk bestand of download handmatig als je er maar één nodig hebt.',
  },
];

const seo: WebpAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'WebP naar ICO Converter: Maak Perfecte Favicons van je Moderne Assets',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Moderne webdesign-workflows produceren assets in <strong>WebP</strong>-formaat: geoptimaliseerde logo\'s, UI-iconen en merkelementen. Maar wanneer het tijd is om de <strong>favicon</strong> van je site of de pictogrammen voor een Windows-desktopapplicatie te configureren, is het vereiste formaat nog steeds <strong>ICO</strong>. Door WebP naar ICO te converteren, kun je je assets van de hoogste kwaliteit hergebruiken zonder de originele bron te verliezen.',
  },
  {
    type: 'title',
    text: 'WebP vs ICO: Formaten met Verschillende Doeleinden',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP is een afbeeldingsformaat voor algemene doeleinden, uitstekend geschikt voor foto\'s, illustraties en web UI-iconen. De efficiënte compressie maakt het ideaal voor het versnellen van het laden van pagina\'s. Het mist echter de specifieke binaire structuur die besturingssystemen und browsers nodig hebben om een applicatie-icoon of favicon te herkennen en weer te geven.',
  },
  {
    type: 'paragraph',
    html: 'ICO is een Microsoft-containerformaat dat speciaal is ontworpen voor pictogrammen. Het kan meerdere resoluties in één bestand opslaan en ondersteunt volledige transparantie via een 32-bit alfakanaal. Browsers zoeken uit gewoonte naar een <code>favicon.ico</code>-bestand, en dit formaat zorgt ervoor dat je pictogram er scherp uitziet op zowel standaardschermen als Retina- en 4K-displays.',
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
          'Je bedrijfslogo reist naar servers van derden',
          'Internetverbinding vereist voor elke conversie',
          'Variabele uitvoerkwaliteit afhankelijk van de server',
          'Limieten op het aantal dagelijkse conversies',
        ],
      },
      {
        title: 'Onze Lokale Architectuur',
        description: 'Directe verwerking op je eigen hardware met Vanilla JS technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Je logo verlaat nooit je browser',
          'ICO binaire headers gegenereerd volgens de Microsoft-standaard',
          '32-bit transparantie volledig behouden',
          'Batchconversie van complete iconensets',
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
    html: 'De browser decodeert het WebP-bestand native en tekent het op een <strong>HTML5 Canvas</strong> met een kleurdiepte van 32 bit, waarbij het originele alfakanaal behouden blijft. Onze JavaScript-engine extraheert vervolgens de pixeldata via de <code>getImageData()</code>-methode en bouwt de binaire ICO-structuur op met de ICONDIR- en ICONDIRENTRY-headers gespecificeerd door de Microsoft-standaard.',
  },
  {
    type: 'paragraph',
    html: 'Het resultaat is een legitiem ICO-bestand, geen eenvoudige hernoeming van een bestand. De pixeldata is verpakt met de juiste structuur die Windows, macOS en alle moderne browsers verwachten bij het laden van een favicon of applicatie-pictogram.',
  },
  {
    type: 'tip',
    title: 'Tip voor scherpe favicons',
    html: 'Genereer je ICO altijd uit de bron met de hoogst beschikbare resolutie. Een WebP van 512×512 of groter produceert een perfect scherp favicon op Retina- en 4K-displays, waarop iconen met een lage resolutie er wazig uitzien.',
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
      'Het maken van het favicon.ico-bestand voor elke website of webapplicatie.',
      'Het genereren van applicatie-iconen voor Windows-software-installatieprogramma\'s.',
      'Het produceren van bureaubladpictogrammen voor Electron-apps of soortgelijke frameworks.',
      'Het maken van iconensets voor Chrome- en Firefox-browserextensies.',
      'Het converteren van WebP-merklogo\'s naar pictogrammen voor bedrijfsapplicaties.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Je moderne ontwerpworkflow produceert WebP; het ecosysteem van applicaties vereist nog steeds ICO. Deze tool overbrugt die kloof in enkele seconden en genereert pictogrammen met de juiste binaire structuur en intacte transparantie, zonder dat je merkassets ooit je browser verlaten.',
  },
];

export const content: WebpAIcoLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({
    title,
    description,
    inLanguage: 'nl',
    faq,
    howTo,
  }),
};
