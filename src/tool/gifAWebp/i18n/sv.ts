import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAWebpLocaleContent } from '../index';

const slug = 'konvertera-gif-till-webp';
const title = 'Konvertera GIF till statisk WebP Online';
const description =
  'Konvertera animerade GIF-filer till statisk WebP. Bevarar transparens. Ingen server. Bearbetas lokalt i din webbläsare. Gratis.';

const ui: ImageConverterUI = {
  dragText: 'Dra GIF-filer hit...',
  convertText: 'För att konvertera dem till WebP direkt',
  selectFiles: 'Välj filer',
  processedFiles: 'Bearbetade filer',
  downloadAll: 'Ladda ner alla (.zip)',
  pending: 'Väntande',
  bibliographyTitle: 'Bibliografiska Referenser',
  faqTitle: 'Vanliga Frågor',
};

const faq: GifAWebpLocaleContent['faq'] = [
  {
    question: 'Varför frysa en animerad fil till det moderna statiska WebP-formatet?',
    answer:
      'WebP är Googles komprimeringsstandard. Det är extremt lättviktigt och behåller transparens på ett rent sätt. Genom att gå från GIF till WebP elimineras den tunga animationen och man uppnår en enorm vinst i webbhastighet.',
  },
  {
    question: 'Kommer den ursprungliga avataren att förbli transparent?',
    answer:
      'Ja, till skillnad från JPEG respekterar WebP-containern den komplexa alfakanalen. Alla dess silhuetter förblir perfekta precis som de var naturligt.',
  },
  {
    question: 'Vart laddas filerna upp?',
    answer:
      'Ingen uppladdning sker. Bearbetningen utförs helt av webbläsarens JavaScript på din dator, med noll extern sändning.',
  },
];

const howTo: GifAWebpLocaleContent['howTo'] = [
  {
    name: 'Starta en animerad lavin',
    text: 'Flytta och släpp dussintals memes i den avgränsade zonen utan extern anslutning.',
  },
  {
    name: 'Bevittna den stora osynliga förändringen',
    text: 'Se hur en framstegsindikator ändras för varje millisekund medan den lokala canvas-avkodaren genererar resultatet.',
  },
  {
    name: 'Spara din rena arsenal av resultat',
    text: 'Hämta de extraherade filerna individuellt eller tryck på Ladda ner Zip för att paketera allt.',
  },
];

const bibliography: GifAWebpLocaleContent['bibliography'] = [
  {
    name: 'GIF89a Specifikation',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
  {
    name: 'Google WebP Dokumentation',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: GifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'GIF till WebP-konverterare: Den moderna ersättaren för tunga animationer',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Animerade GIF-filer är dinosaurierna i det moderna webbinnehållet: de förbrukar oproportionerligt mycket bandbredd, försämrar PageSpeed för alla sidor och står för en betydande procentandel av den totala vikten på tusentals webbplatser. En typisk animerad GIF på 5 MB kan bli en WebP-animation under 1 MB med samma visuella kvalitet. WebP är den moderna efterföljaren som Google specifikt utformat för att ersätta GIF på webben.',
  },
  {
    type: 'title',
    text: 'GIF vs WebP: klyftan mellan webbens dåtid och nutid',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIF är ett format från 1987 som ursprungligen inte var designat för animationer – den funktionen kom till som ett senare hack. Dess 256-färgers palett, ineffektiva komprimering och oförmåga att hantera ljud gör det till ett föråldrat format. WebP, utvecklat av Google 2010, erbjuder överlägsen komprimering (både förlustfri och med förlust), inbyggt stöd för animationer och full alfakanal.',
  },
  {
    type: 'paragraph',
    html: 'För en webbutvecklare kan byte av GIF-filer mot WebP på sidor innebära en förbättring av Google PageSpeed-poängen med 10 till 30 punkter. Mindre sidvikt innebär bättre Core Web Vitals, bättre SEO-rankning och lägre bandbreddskostnader på servrar. Det är inte bara en estetisk förbättring – det är ett tekniskt arkitekturbeslut.',
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
        description: 'Plattformar som bearbetar dina GIF-filer på fjärrservrar.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Dina animationer reser över internet till tredjepartsservrar',
          'Väntetid på grund av nätverkslatens vid uppladdning och nedladdning',
          'Storleksbegränsningar (stora GIF-filer avvisas ofta)',
          'Risk för filretention och analys',
        ],
      },
      {
        title: 'Vår Lokala Arkitektur',
        description: 'Direkt bearbetning på din hårdvara med Vanilla JS-teknik.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'GIF-filen lämnar aldrig din enhet',
          'Omedelbar konvertering utan nätverksväntan',
          'Inga storleksbegränsningar: bearbeta GIF-filer av vilken vikt som helst',
          'Total integritet: 0 byte skickas externt',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Hur den lokala GIF till WebP-konverteringen fungerar',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Den lokala konverteringen använder HTML5 Canvas-API:et. GIF-filen laddas som ett inbyggt Image-element i webbläsaren. Genom att rita den på en canvas fångar grafikmotorn det första animationsbilden med all dess transparensinformation. Metoden <code>toDataURL(\'image/webp\')</code> exporterar bilden som WebP direkt i RAM-minnet.',
  },
  {
    type: 'paragraph',
    html: 'WebP stöder full alfakanal, så GIF-transparens bevaras i den resulterande WebP-filen utan att man behöver lägga till en bakgrund. WebP-komprimeringsalgoritmer är betydligt effektivare än GIF eller PNG, vilket förklarar den drastiska filstorleksminskningen av slutresultatet.',
  },
  {
    type: 'tip',
    title: 'Garanterad PageSpeed förbättring',
    html: 'En animerad GIF på 5 MB kan bli en WebP under 1 MB. Om du har GIF-filer på dina webbsidor kan byte till WebP omedelbart förbättra Largest Contentful Paint (LCP) och Total Blocking Time (TBT), vilket direkt påverkar SEO-rankningen.',
  },
  {
    type: 'title',
    text: 'Användningsfall och kompatibilitet för resulterande WebP',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Byta ut GIF-filer på webbsidor för att förbättra PageSpeed-poängen.',
      'Optimerade avatarer och stickers för Discord, Slack och moderna plattformar.',
      'Banners och visuellt material för digitala marknadsföringskampanjer.',
      'Animationer i progressiva webbapplikationer (PWA).',
      'Kompatibel med Chrome, Edge, Firefox, Safari 14+ och alla moderna webbläsare.',
    ],
  },
  {
    type: 'title',
    text: 'Slutsats: migrera dina GIF-filer till 2000-talet',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Varje GIF på din webbplats är en missad optimeringsmöjlighet. Vårt verktyg konverterar GIF-filer till WebP omedelbart, privat och utan begränsningar, direkt i din webbläsare. Resultatet: filer upp till 5 gånger mindre, perfekt transparens och kompatibilitet med alla moderna webbläsare.',
  },
];


export const content: GifAWebpLocaleContent = {
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
