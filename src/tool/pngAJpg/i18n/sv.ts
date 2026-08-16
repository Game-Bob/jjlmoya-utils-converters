import { bibliography } from '../bibliography';
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
      'Till skillnad från vanliga tjänster behandlar verktyget filerna helt i webbläsaren. Bilderna skickas aldrig till en fjärrdisk, så du behåller kontrollen och dataskyddet.',
  },
  {
    question: 'JPG eller PNG: vilket format passar bäst?',
    answer:
      'PNG passar för logotyper och genomskinliga element. JPG är bättre för foton och webbbanners eftersom filerna blir mycket mindre och sidorna laddas snabbare.',
  },
  {
    question: 'Hur fungerar konverteringen utan uppladdning?',
    answer:
      'Vi använder HTML5 Canvas. Webbläsaren återskapar bilden på en osynlig virtuell yta, fyller genomskinliga områden med vitt och skapar JPEG-data direkt för nedladdning.',
  },
  {
    question: 'Är verktyget säkert för konfidentiella dokument?',
    answer:
      'Ja. För bank-, vård- och juridiska dokument är lokal behandling säkrare: filerna stannar i enhetens RAM och försvinner när fliken stängs.',
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

const seo: PngAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konvertera PNG till JPG: praktisk guide för bildoptimering',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Inom digital design och webbutveckling är snabbhet viktig. PNG bevarar transparens och förlustfri kvalitet, men filerna kan bli stora. JPG passar när webbsidor och bilagor behöver laddas snabbt.',
  },
  {
    type: 'title',
    text: 'JPG eller PNG: vad ska du välja?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Det finns inget format som är bäst i alla situationer. PNG passar gränssnitt, logotyper och transparens, men förlustfri komprimering kan ge betydligt större filer.',
  },
  {
    type: 'paragraph',
    html: 'JPG tar bort detaljer som ögat knappt märker och ger lätta bilder. Det passar foton, banners och sociala medier när snabb överföring är viktigare än perfekt pixeldata.',
  },
  {
    type: 'title',
    text: 'Teknisk jämförelse: lokalt eller i molnet',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Molnbaserade konverterare',
        description: 'Traditionella tjänster som laddar upp dina bilder till en fjärrserver.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Nätverksfördröjning (uppladdning/nedladdning)',
          'Risk för läckta privata data',
          'Storleksgränser per fil',
          'Reklam och spårare',
        ],
      },
      {
        title: 'Vår lokala arkitektur',
        description: 'Direkt behandling på din enhet med vanlig JavaScript.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Omedelbar hastighet utan nätverk',
          'Garanterad integritet (noll byte skickas)',
          'Ingen MB-gräns per fil',
          'Rent och professionellt gränssnitt',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Så fungerar den tekniska konverteringen',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Konverteringen utan server använder moderna webbläsar-API:er. När du väljer en fil skapas en tillfällig Blob i RAM-minnet och ritas på en osynlig HTML5 Canvas.',
  },
  {
    type: 'paragraph',
    html: 'JPG stöder inte transparens, så genomskinliga områden fylls med vitt före rendering. Canvas skapar sedan JPEG-data som sparas direkt på enheten.',
  },
  {
    type: 'tip',
    title: 'SEO tips för rätt filstorlek',
    html: 'En lättare bild kan förbättra LCP och PageSpeed. Att göra en stor PNG till en mindre JPG är särskilt användbart i sidhuvuden och bildrika sidor.',
  },
  {
    type: 'title',
    text: 'Säkerhet för företag och yrkesverksamma',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'För bank, vård och juridik kan uppladdning till externa tjänster innebära risker. Här sker behandlingen i webbläsarens RAM utan att filerna skickas till molnet.',
  },
  {
    type: 'title',
    text: 'Resultatets kompatibilitet',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Bildvisare i Windows, macOS och mobila enheter.',
      'Sociala nätverk (Instagram, LinkedIn med flera).',
      'Kontorsverktyg (Word, PowerPoint).',
      'Innehållshanterare (WordPress, Shopify).',
    ],
  },
  {
    type: 'title',
    text: 'Slutsats: optimera med kontroll',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Konverteraren kombinerar snabbhet och integritet. Oavsett om du utvecklar webben eller använder verktyget hemma kan du minska bilder utan att lämna över filerna till en tredje part.',
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
