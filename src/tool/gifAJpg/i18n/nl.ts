import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAJpgLocaleContent } from '../index';

const slug = 'gif-naar-jpg-converter';
const title = 'GIF naar JPG Online Converteren';
const description =
  'Extraheer het eerste frame uit je GIF\'s en converteer het naar JPG. Zonder server. Lokale verwerking in je browser. Gratis en onbeperkt.';

const ui: ImageConverterUI = {
  dragText: 'Sleep GIF-bestanden hierheen...',
  convertText: 'Om ze direct naar JPG te converteren',
  selectFiles: 'Bestanden selecteren',
  processedFiles: 'Verwerkte bestanden',
  downloadAll: 'Alles downloaden (.zip)',
  pending: 'In afwachting',
  bibliographyTitle: 'Bibliografische Referenties',
  faqTitle: 'Veelgestelde Vragen',
};

const faq: GifAJpgLocaleContent['faq'] = [
  {
    question: 'Wat gebeurt er met de animaties als ik naar JPG ga?',
    answer:
      'Het JPG-formaat is strikt statisch en ondersteunt geen meerdere frames. Onze converter extraheert alleen het eerste beeld of frame dat in de GIF-sequentie verschijnt.',
  },
  {
    question: 'Verlies ik speciale effecten of een transparante achtergrond?',
    answer:
      'Ja, dat is het natuurlijke gedrag van de JPG-standaard. Als je een GIF met een transparante achtergrond uploadt, voegen we automatisch een solide witte achtergrondlaag toe om kleurcorruptie te voorkomen.',
  },
  {
    question: 'Kan ik JPG-foto\'s uit een GIF extraheren zonder dat de site mijn inhoud opslaat?',
    answer:
      'Absoluut ja. De tool is een Web App gebaseerd op het Canvas van HTML5. De gehele decodering wordt uitgevoerd door de processor van je eigen fysieke apparaat.',
  },
];

const howTo: GifAJpgLocaleContent['howTo'] = [
  {
    name: 'Sleep Beweegbare Zware Bestanden',
    text: 'Plaats of sleep die GIF uit je map naar onze verwerkingsbox.',
  },
  {
    name: 'Schone Berekening van het Eerste Frame',
    text: 'In fracties van tijd wordt de animatie geëxtraheerd en de solide witte JPG gemaakt zonder servers te contacteren.',
  },
  {
    name: 'Download ze Verpakt in een ZIP-bestand',
    text: 'Download ze via de knoppen of gebruik de ZIP als je een groot aantal bestanden hebt verwerkt.',
  },
];

const bibliography: GifAJpgLocaleContent['bibliography'] = [
  {
    name: 'Technische Specificatie Joint Photographic Experts Group',
    url: 'https://en.wikipedia.org/wiki/JPEG',
  },
  {
    name: 'CompuServe GIF Information',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
];

const seo: GifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'GIF naar JPG Converter: Extraheer Frames als Hoogwaardige Afbeeldingen',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'GIF-bestanden domineren al decennia de wereld van korte animaties op internet. Hun geanimeerde aard maakt ze echter volledig nutteloos als thumbnail, preview voor sociale netwerken of afbeelding voor documenten. Wanneer je een specifiek frame uit een GIF moet extraheren en converteren naar een statisch beeld van hoge kwaliteit, is de conversie naar JPG de meest praktische en compatibele oplossing.',
  },
  {
    type: 'title',
    text: 'GIF of JPG? Formaten met tegengestelde doelen',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'De GIF (Graphics Interchange Format) werd in 1987 ontworpen met een strikte beperking die vandaag de dag nog steeds bestaat: het kan slechts 256 kleuren per frame weergeven. Deze technische beperking was niet erg voor eenvoudige animaties met beperkte paletten, maar maakt het een visueel arm formaat voor echte foto-opnamen. De JPG daarentegen kan miljoenen kleuren renderen met geavanceerde perceptuele compressie-algoritmen.',
  },
  {
    type: 'paragraph',
    html: 'Het extraheren van een frame uit een GIF en het opslaan als JPG heeft meerdere toepassingen: het genereren van thumbnails voor videospelers, het maken van previews voor contentbeheerplatformen, het verkrijgen van statische beelden voor presentaties of simpelweg het archiveren van een visueel moment uit een complexe animatie. De resulterende JPG zal veel lichter zijn dan de originele GIF en universeel compatibel.',
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
        description: 'Tools die je bestanden naar een externe server uploaden om ze te verwerken.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Je GIF\'s reizen via internet naar servers van derden',
          'Netwerklatentie bij uploaden en downloaden',
          'Limieten op grootte en aantal bestanden per sessie',
          'Risico op gegevensretentie op externe servers',
        ],
      },
      {
        title: 'Onze Lokale Architectuur',
        description: 'Directe verwerking op je hardware via Vanilla JS-technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'De GIF verlaat nooit je apparaat',
          'Onmiddellijke snelheid zonder wachttijd op het netwerk',
          'Zonder limieten op grootte of aantal bestanden',
          'Volledige privacy: 0 bytes naar buiten verzonden',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Hoe de technische frame-extractie werkt',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'De lokale conversie steunt op de kracht van de Canvas API van HTML5. Wanneer je een GIF laadt, decodeert de browser deze in het geheugen als een eigen Image-element. Door het op een onzichtbaar canvas te renderen, legt de grafische engine van de browser automatisch het eerste frame van de animatiesequentie vast.',
  },
  {
    type: 'paragraph',
    html: 'Aangezien het JPG-formaat geen transparantie ondersteunt, past ons algoritme een solide witte achtergrond toe voordat het exporteert. De <code>toDataURL(\'image/jpeg\')</code> methode van het canvas genereert de JPG-bytestroom direct in het RAM-geheugen van je computer, zonder enige netwerkverbinding. Het resulterende bestand wordt onmiddellijk naar je apparaat gedownload.',
  },
  {
    type: 'tip',
    title: 'Beperkt kleurenpalet van de GIF',
    html: 'De GIF kan slechts 256 kleuren per frame bevatten. De geëxtraheerde JPG erft dat beperkte palet van het origineel over: als de GIF overgangen of foto\'s had, kan deze er wat geposteriseerd uitzien. Gebruik voor het beste resultaat GIF\'s met eenvoudige kleuren of illustraties.',
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
      'Thumbnails en previews voor videoplatforms en CMS.',
      'Omslagafbeeldingen voor posts op sociale netwerken.',
      'Invoegen in Word-, PowerPoint- of PDF-documenten.',
      'Presentatiebestanden en marketingmateriaal.',
      'Universele compatibiliteit met viewers op Windows, macOS en mobiel.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusie: het frame dat meer waard is dan de animatie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Een geanimeerde GIF van 2 MB kan een JPG van het eerste frame produceren van slechts ongeveer 50-200 KB, afhankelijk van de resolutie. Onze tool voert deze conversie onmiddellijk, privé en onbeperkt uit, rechtstreeks in je browser. Geen servers, geen accounts, geen wachttijden.',
  },
];


export const content: GifAJpgLocaleContent = {
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
