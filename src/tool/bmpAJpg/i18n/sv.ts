import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAJpgLocaleContent } from '../index';

const slug = 'konvertera-bmp-till-jpg';
const title = 'Konvertera BMP till JPG Online';
const description =
  'Konvertera BMP-bilder till JPG i din webbläsare. Minska storleken drastiskt. Utan att ladda upp filer till servrar. Gratis och 100 % privat.';

const ui: ImageConverterUI = {
  dragText: 'Dra BMP-filer hit...',
  convertText: 'För att konvertera dem till JPG direkt',
  selectFiles: 'Välj filer',
  processedFiles: 'Bearbetade filer',
  downloadAll: 'Ladda ner alla (.zip)',
  pending: 'Väntande': 'Bibliografiska Referenser',
  faqTitle: 'Vanliga Frågor',
};

const faq: BmpAJpgLocaleContent['faq'] = [
  {
    question: 'Varför konvertera BMP till JPG?',
    answer:
      'BMP-formatet komprimerar inte data, vilket resulterar i extremt stora filer. JPG-formatet komprimerar bilden drastiskt samtidigt som det bibehåller utmärkt visuell kvalitet för webb och distribution.',
  },
  {
    question: 'Är det säkert att konvertera mina bilder här?',
    answer:
      '100 % säkert. Din integritet garanteras eftersom bearbetningen görs helt lokalt med din egen webbläsares motor.',
  },
  {
    question: 'Hur fungerar verktyget?',
    answer:
      'Dra bara dina BMP-filer hit, så läser vårt JavaScript-skript pixlarna för att rita om dem på en HTML-canvas och exportera dem direkt i JPEG-kodning.',
  },
];

const howTo: BmpAJpgLocaleContent['howTo'] = [
  {
    name: 'Ladda upp dina BMP-filer',
    text: 'Dra och släpp eller välj dina bilder i BMP-format i det angivna området.',
  },
  {
    name: 'Automatisk bearbetning',
    text: 'Verktyget rastrerar bilden och tillämpar den optimala komprimeringsnivån i JPG-format på millisekunder.',
  },
  {
    name: 'Individuell nedladdning eller batch-nedladdning',
    text: 'Hämta dina nya webboptimerade bilder antingen en och en eller genom att ladda ner en ZIP-fil.',
  },
];

const seo: BmpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverterare från BMP till JPG: Minska en gigantisk fil på några sekunder',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMP (Bitmap) är datavetenskapens mest primitiva format: det lagrar varje pixel precis som den är, utan någon form av komprimering. En skärmdump på 1920x1080 i BMP väger ungefär 6 MB. Samma bild i JPG tar upp mellan 200 och 400 KB med en visuellt oskiljbar kvalitet. Skillnaden är enorm, och vårt verktyg låter dig utföra den konverteringen på några sekunder, direkt i din webbläsare, utan att ladda upp något till någon server.',
  },
  {
    type: 'title',
    text: 'BMP vs JPG: rådata mot intelligent komprimering',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMP-formatet skapades av Microsoft under Windows 3.1-eran. Dess filosofi är enklast möjliga: varje pixel tar upp 3 byte (rött, grönt, blått), och pixlarna lagras i rader utan ytterligare bearbetning. Denna totala brist på komprimering gör att BMP-filer är mellan 50 och 100 gånger större än deras motsvarighet i JPG, för faktiska fotografier och skärmdumpar.',
  },
  {
    type: 'paragraph',
    html: 'JPG däremot använder Discrete Cosine Transform (DCT) för att analysera varje block på 8x8 pixlar och eliminera högfrekvent information som det mänskliga ögat knappt uppfattar. Resultatet är en bild som ser identisk ut men väger en bråkdel av originalet. För BMP-filer från skärmdumpar, skannrar eller äldre Windows-applikationer är konvertering till JPG den mest effektiva optimeringsåtgärden som är möjlig.',
  },
  {
    type: 'title',
    text: 'Arkitekturjämförelse: Lokal vs Moln',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Molnkonverterare',
        description: 'Tjänster som laddar upp dina BMP-filer till fjärrservrar för att bearbeta dem.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Att ladda upp en BMP på 10 MB tar tid på långsamma anslutningar',
          'Dina skärmdumpar och konfidentiella bilder skickas över internet',
          'Frekventa storleksbegränsningar i gratisplaner',
          'Dubbel latens: uppladdning och nedladdning af den konverterade filen',
        ],
      },
      {
        title: 'Vår lokala arkitektur',
        description: 'Direkt bearbetning på din hårdvara via Vanilla JS-teknik.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'BMP-filen bearbetas i ditt RAM-minne och skickas inte till en server',
          'Omedelbar konvertering utan väntetid',
          'Inga storleksbegränsningar per fil',
          'Total integritet: 0 byte skickas externt',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Hur den tekniska konverteringen från BMP till JPG fungerar',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'När du drar en BMP-fil till verktyget läser webbläsaren den med <code>FileReader</code>-API:et och avkodar den som ett Blob-objekt i minnet. Denna Blob renderas på en osynlig HTML5-canvas. Därefter tillämpar metoden <code>toDataURL(\'image/jpeg\')</code> JPEG-komprimeringsalgoritmen på canvasdata och genererar den resulterande JPG-filen.',
  },
  {
    type: 'paragraph',
    html: 'Eftersom BMP inte har någon alfakanal (inte stöder transparens), är konverteringen till JPG direkt utan behov av komposition med vit bakgrund. Hela processen sker i din dators RAM-minne, utan någon dataöverföring över nätverket, på millisekunder även för filer på flera megabyte.',
  },
  {
    type: 'tip',
    title: 'Windows BMP filer kan vara enorma',
    html: 'BMP-filer genererade av skärmdumpar (Print Screen-tangenten i Windows) eller av äldre applikationer som Paint kan väga mellan 50 och 100 gånger mer än en motsvarande JPG. En enskild BMP med Full HD-upplösning kan överstiga 6 MB. Att konvertera dem till JPG innan de skickas via e-post eller laddas upp till någon plattform är en oumbärlig praxis.',
  },
  {
    type: 'title',
    text: 'Användningsfall och kompatibilitet för den resulterande JPG-filen',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Optimering av Windows-skärmdumpar för att skickas via e-post.',
      'Konvertering av bilder exporterade av äldre programvara (CAD, gamla skannrar).',
      'Viktminskning för att ladda upp bilder till webbplattformar och sociala nätverk.',
      'Förberedelse av filer för infogning i Word-, PowerPoint- eller PDF-dokument.',
      'Universell kompatibilitet med alla moderna visningsprogram och webbläsare.',
    ],
  },
  {
    type: 'title',
    text: 'Slutsats: 10 MB BMP, 500 KB JPG, samma bild',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Konvertering från BMP till JPG är en av de mest lönsamma optimeringsåtgärderna vid hantering av bildfiler. Vårt verktyg utför den transformationen på några sekunder, utan att ladda upp någon fil, utan att skapa något konto, direkt i din webbläsare. Resultatet är en JPG av hög kvalitet som är universellt kompatibel och har en vikt som är upp till 97 % lägre än den ursprungliga BMP-filen.',
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
  schemas: generateSchemas({ title, description, inLanguage: 'sv', faq, howTo }),
};
