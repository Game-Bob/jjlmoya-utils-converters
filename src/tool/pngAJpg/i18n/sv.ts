import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAJpgLocaleContent } from '../index';

const slug = 'konvertera-png-till-jpg';
const title = 'Konvertera PNG till JPG Online';
const description =
  'Konvertera dina PNG-bilder till snabbkomprimerande JPG-format direkt på din egen dator. Utan att ladda upp foton till internet. Batchoptimering.';

const ui: ImageConverterUI = {
  dragText: 'Dra PNG-filer hit...',
  convertText: 'För att konvertera dem till JPG direkt',
  selectFiles: 'Välj filer',
  processedFiles: 'Bearbetade filer',
  downloadAll: 'Ladda ner alla (.zip)',
  pending: 'Väntande',
  bibliographyTitle: 'Bibliografiska Referenser',
  faqTitle: 'Vanliga Frågor',
};

const faq: PngAJpgLocaleContent['faq'] = [
  {
    question: 'Varför välja vår lokala PNG till JPG-konverterare?',
    answer:
      'Till skillnad från konventionella verktyg bearbetar vårt verktyg filerna helt i din webbläsare. Dina bilder rör aldrig någon annans hårddisk, vilket garanterar total suveränitet och integritet för dina data.',
  },
  {
    question: 'JPG eller PNG? Vad är bäst för mitt fall?',
    answer:
      'PNG är idealiskt för logotyper och element med transparens. JPG är dock guldstandarden för fotografier och webbbanners, eftersom det uppnår mycket lägre filstorlekar, vilket drastiskt förbättrar en webbplats laddningshastighet.',
  },
  {
    question: 'Hur fungerar den tekniska konverteringen utan att ladda upp något?',
    answer:
      'Vi använder kraften i HTML5 Canvas. Webbläsaren återskapar bilden på en osynlig virtuell duk, fyller transparensen med vitt och genererar en byteström som du laddar ner direkt i realtid.',
  },
  {
    question: 'Är det säkert för konfidentiella dokument?',
    answer:
      'Ja, det är det säkraste alternativet för yrkesverksamma inom bank, hälsa eller juridik. Eftersom det är en "svart låda" som bara använder ditt RAM-minne, tas allt som sker inuti bort när du stänger fliken, vilket undviker läckor i molntjänster från tredje part.',
  },
];

const howTo: PngAJpgLocaleContent['howTo'] = [
  {
    name: 'Filval',
    text: 'Förbered dina PNG-filer i en mapp och dra dem alla tillsammans till bearbetningsområdet eller leta reda på dem med utforskaren.',
  },
  {
    name: 'Omedelbar bearbetning',
    text: 'Kontrollera att statusen ändras till "Klar" för varje fil medan webbläsaren optimerar storleken lokalt.',
  },
  {
    name: 'Optimerad nedladdning',
    text: 'Spara dina nya JPG-bilder en och en eller använd knappen "Ladda ner alla" för att få en komprimerad ZIP-fil med alla bilder.',
  },
];

const bibliography: PngAJpgLocaleContent['bibliography'] = [
  {
    name: 'PNG Consortium Specifikationer',
    url: 'http://www.libpng.org/pub/png/',
  },
  {
    name: 'JPEG-kommittén',
    url: 'https://jpeg.org/',
  },
];

const seo: PngAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG till JPG-konverterare: Den Definitiva Guiden till Bildoptimering',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'I den digitala designens och webbutvecklingens värld är effektivitet allt. PNG-formatet (Portable Network Graphics) älskas för sin förmåga att bibehålla transparens och sin förlustfria kompression, men det har en stor fiende: filvikten. När du behöver att din webbplats flyger eller att dina e-postmeddelanden laddas direkt är övergången från PNG till JPG det smartaste tekniska beslutet.',
  },
  {
    type: 'title',
    text: 'JPG eller PNG?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Det finns inget format som är bättre än det andra, utan snarare ett verktyg för varje behov. PNG är ett förlustfritt format, idealiskt för gränssnittsskisser, logotyper med liten text och visuella element som kräver en transparent bakgrund. Men denna trohet har ett pris: filer som kan vara 5 eller 10 gånger tyngre än motsvarande komprimerade version.',
  },
  {
    type: 'paragraph',
    html: 'Å andra sidan använder JPG (Joint Photographic Experts Group) diskretiseringsalgoritmer för att ta bort information som det mänskliga ögat knappt märker, vilket ger extremt lätta filer. Det är guldstandarden för fotografier, reklambanners och sociala medier. Genom att konvertera dina PNG till JPG byter du geometrisk trohet mot nätverkshastighet.',
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
        description: 'Traditionella verktyg som laddar upp dina foton till en fjärrserver.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Nätverkslatens (Uppladdning/Nedladdning)',
          'Risk för läckage av privata data',
          'Begränsningar för filstorlek per fil',
          'Reklam och spårare',
        ],
      },
      {
        title: 'Vår Lokala Arkitektur',
        description: 'Direkt bearbetning på din hårdvara via Vanilla JS-teknologi.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Omedelbar hastighet utan nätverk',
          'Garanterad integritet (0 skickade bytes)',
          'Inga MB-gränser per fil',
          'Professionellt och rent gränssnitt',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Hur den tekniska konverteringen fungerar',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Du undrar förmodligen hur det är möjligt att konvertera en bild utan att skicka den till en server. Magin ligger i kraften hos moderna webbläsare. När du väljer en fil genererar vi en Blob som bara finns i ditt RAM-minne. Den Blobben ritas på ett osynligt HTML5 Canvas-element.',
  },
  {
    type: 'paragraph',
    html: 'Eftersom JPG inte stöder transparens fyller vår algoritm bakgrunden med en solid vit färg innan PNG-bilden "målas" ovanpå. När bilden väl är sammansatt kör vi den inbyggda exportmetoden, vilket skapar en byteström som din dator laddar ner direkt.',
  },
  {
    type: 'tip',
    title: 'SEO tips: Den Idealiska Vikten',
    html: 'Google straffar aktivt långsamma webbplatser. Om din Largest Contentful Paint (LCP) är hög på grund av en huvud-PNG på 2MB, kan konvertering till en JPG på 200KB förbättra dina PageSpeed-mätvärden direkt utan visuella skillnader.',
  },
  {
    type: 'title',
    text: 'Säkerhet för företag och yrkesverksamma',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Om du arbetar i känsliga sektorer som bank, hälsa eller juridik är det ett säkerhetsbrott att ladda upp filer till onlinekonverterare. Vårt verktyg fungerar som en "svart låda": det som händer inuti stannar i ditt RAM-minne. Det är det enda säkra sättet att arbeta med konfidentiella dokument.',
  },
  {
    type: 'title',
    text: 'Resultatets Kompatibilitet',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Bildvisare för Windows, macOS och mobila enheter.',
      'Sociala medier (Instagram, LinkedIn etc.).',
      'Kontorsverktyg (Word, PowerPoint).',
      'Innehållshanteringssystem (WordPress, Shopify).',
    ],
  },
  {
    type: 'title',
    text: 'Slutsats: Optimera som ett Proffs',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Denna konverterare är inte bara ytterligare en sida; det är ett stycke ingenjörskonst utformad för att göra ditt liv enklare. Oavsett om du är en utvecklare eller en hemanvändare har du här den slutgiltiga lösningen för att spara megabyte och hålla dina data säkra.',
  },
];


export const content: PngAJpgLocaleContent = {
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
