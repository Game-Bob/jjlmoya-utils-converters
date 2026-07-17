import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAPngLocaleContent } from '../index';

const slug = 'konvertera-gif-till-png';
const title = 'Konvertera GIF till PNG Online';
const description =
  'Extrahera den första rutan från dina GIF-filer och konvertera den till PNG med bevarad transparens. Utan server. Lokal bearbetning. Gratis.';

const ui: ImageConverterUI = {
  dragText: 'Dra GIF-filer hit...',
  convertText: 'För att konvertera dem till PNG direkt',
  selectFiles: 'Välj filer',
  processedFiles: 'Bearbetade filer',
  downloadAll: 'Ladda ner alla (.zip)',
  pending: 'Väntande',
  bibliographyTitle: 'Bibliografiska Referenser',
  faqTitle: 'Vanliga Frågor',
};

const faq: GifAPngLocaleContent['faq'] = [
  {
    question: 'Varför konvertera ett animerat format som GIF till ett statiskt format som PNG?',
    answer:
      'Många sociala nätverk eller avatarer stöder inte bilder som ändras. Att extrahera den första rutan i en komplex GIF till en högkvalitativ PNG löser detta och minskar onödig filstorlek.',
  },
  {
    question: 'Bevaras transparensen från den gamla GIF-filen i den resulterande PNG-filen?',
    answer:
      'Ja, till skillnad från JPG behåller PNG-formatet alfakanalen. Om GIF-filen hade en transparent bakgrund kommer PNG-filen att behålla den med skarpa kanter.',
  },
  {
    question: 'Sparar ni mina bilder på servrarna ett tag efter bearbetningen?',
    answer:
      'Ingen server sparar din GIF; hela extraktionen sker lokalt tack vare Web Canvas API. Det är din dators processor som säkert avkodar din fil utan någon nätverkskontakt.',
  },
];

const howTo: GifAPngLocaleContent['howTo'] = [
  {
    name: 'Dra in din animation',
    text: 'Dra de tunga GIF-filerna till inmatningsrutan.',
  },
  {
    name: 'Perfekt extraherat foto',
    text: 'Systemet stoppar rörelsen exakt vid ursprunget och skapar en felfri kopia på några millisekunder.',
  },
  {
    name: 'Spara din statiska bild',
    text: 'Spara alla statiska GIF-avatarer som konverterats till PNG i ett samlat ZIP-arkiv.',
  },
];

const seo: GifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'GIF till PNG-konverterare: Övervinn färg- och transparensgränserna för GIF',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'GIF designades vid en tidpunkt då bildskärmar knappt kunde visa 256 färger. Decennier senare är den begränsningen fortfarande dess största svaghet. PNG föddes just för att ersätta GIF i alla användningsfall där kvalitet och transparens spelar roll: logotyper, ikoner, gränssnittsgrafik och alla bilder med transparent bakgrund som måste se perfekta ut på valfri bakgrundsfärg.',
  },
  {
    type: 'title',
    text: 'GIF vs PNG: revolutionen med 16 miljoner färger',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Den mest kritiska skillnaden mellan GIF och PNG är inte bara antalet färger. GIF stöder binär transparens: varje pixel är antingen opak eller helt transparent, utan graderingar. PNG stöder däremot full alfakanal, med 256 nivåer av opacitet per pixel. Detta innebär att kanterna på en logotyp i PNG kan göras helt jämna, medan de i GIF visar en karakteristisk tandad kant på färgade bakgrunder.',
  },
  {
    type: 'paragraph',
    html: 'Förutom överlägsen transparens tar PNG bort gränsen på 256 färger för GIF. Skärmdumpar, illustrationer med toningar, logotyper med skuggor - alla ser betydligt bättre ut i PNG. Och eftersom det är en förlustfri komprimering behåller varje pixel exakt sitt ursprungliga värde, utan de artefakter som en konvertering till JPG skulle introducera.',
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
        description: 'Verktyg som bearbetar dina bilder på fjärrservrar.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Dina logotyper och ikoner skickas över internet',
          'Väntetid på grund av nätverksfördröjning',
          'Storleksbegränsningar och begränsningar för antal filer',
          'Dina bilder kan finnas kvar i tredjeparts cachen',
        ],
      },
      {
        title: 'Vår lokala arkitektur',
        description: 'Direkt bearbetning på din hårdvara via Vanilla JS-teknik.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'GIF-filen lämnar aldrig din enhet',
          'Omedelbar konvertering utan nätverk',
          'Inga fil- eller storleksbegränsningar',
          'Total integritet: 0 byte skickas',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Hur den lokala GIF till PNG-konverteringen fungerar',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Konverteringen använder webbläsarens Canvas API. GIF-filen avkodas i minnet som ett inbyggt Image-element. Vid rendering på en HTML5-canvas fångar webbläsarens grafikmotor den första rutan med all dess ursprungliga transparensinformation intakt.',
  },
  {
    type: 'paragraph',
    html: 'Till skillnad från konvertering till JPG krävs ingen vit bakgrund med PNG. Alfakanalen från den ursprungliga GIF-filen bevaras direkt i den exporterade PNG-filen. Canvas-metoden <code>toDataURL(\'image/png\')</code> genererar PNG-byteströmmen i din dators RAM-minne utan någon nätverksöverföring, och filen laddas ner direkt.',
  },
  {
    type: 'tip',
    title: 'Binär transparens för GIF vs alfakanal för PNG',
    html: 'GIF stöder endast binär transparens (opak eller transparent). Vid konvertering till PNG bibehålls de halvtransparenta pixlarna i GIF-filen så som webbläsaren tolkar dem. Om din GIF har tandade kanter kommer PNG-filen att behålla dem - men du kan redigera dem med kantutjämning i valfri redigerare, något som är omöjligt med den ursprungliga GIF-filen.',
  },
  {
    type: 'title',
    text: 'Användningsfall och kompatibilitet för resulterande PNG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Logotyper och ikoner för användning på valfri bakgrundsfärg.',
      'Avatarer för Discord, Telegram, Slack och spelplattformar.',
      'Gränssnittsgrafik för webb- och mobilappar.',
      'Personliga klistermärken och emojis med transparent bakgrund.',
      'Skärmdumpar och UI-element för teknisk dokumentation.',
    ],
  },
  {
    type: 'title',
    text: 'Slutsats: PNG är vad GIF alltid ville vara',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Att konvertera från GIF till PNG är inte bara att byta format: det är att uppgradera en bild till den moderna standard som GIF aldrig kunde nå. Fler färger, bättre transparens, mindre vikt. Vårt verktyg utför denna konvertering på några millisekunder direkt i din webbläsare utan att skicka några data utåt.',
  },
];


export const content: GifAPngLocaleContent = {
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
