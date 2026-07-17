import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAJpgLocaleContent } from '../index';

const slug = 'avif-till-jpg-konverterare';
const title = 'Konvertera AVIF till JPG Online';
const description =
  'Konvertera AVIF-bilder till JPG i din webbläsare. Utan server. 100 % privat lokal bearbetning. Gratis och obegränsat.';

const ui: ImageConverterUI = {
  dragText: 'Dra AVIF-filer hit...',
  convertText: 'För att konvertera dem till JPG direkt',
  selectFiles: 'Välj filer',
  processedFiles: 'Bearbetade filer',
  downloadAll: 'Ladda ner alla (.zip)',
  pending: 'Väntande',
  bibliographyTitle: 'Bibliografiska Referenser',
  faqTitle: 'Vanliga Frågor',
};

const faq: AvifAJpgLocaleContent['faq'] = [
  {
    question: 'Varför konvertera AVIF till JPG?',
    answer:
      'AVIF-formatet erbjuder överlägsen kompression, men inte alla program eller bildvisare stöder det. Att konvertera till JPG säkerställer att bilden kan ses på 100 % av världens enheter.',
  },
  {
    question: 'Hur skyddar vi dina AVIF-bilder?',
    answer:
      'Dina bilder lämnar aldrig din mobil eller dator. Hela processen med att rita och koda till JPEG körs i din webbläsares Javascript-miljö.',
  },
  {
    question: 'Kommer jag att förlora kvalitet när jag byter från AVIF till JPG?',
    answer:
      'Vårt verktyg bearbetar pixlarna med en standardkvalitet för Canvas (0,9 till 0,95), vilket gör att förändringarna knappt är märkbara.',
  },
];

const howTo: AvifAJpgLocaleContent['howTo'] = [
  {
    name: 'Dra filer eller klicka',
    text: 'Flytta alla AVIF-bilder du vill konvertera till det markerade bearbetningsområdet.',
  },
  {
    name: 'Omedelbar Transformation',
    text: 'Se hur AVIF-bilden kodas om till JPG på mindre än en sekund, och ersätter eventuella alfakanaler med en solid bakgrund.',
  },
  {
    name: 'Spara eller ladda ner ZIP',
    text: 'Ladda ner dina nya JPG-bilder en och en eller tryck på Ladda ner alla om du bearbetade flera filer samtidigt.',
  },
];

const seo: AvifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'AVIF till JPG-konverterare: Universell kompatibilitet för dina moderna bilder',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF (AV1 Image File Format) är det mest effektiva bildformatet som finns tillgängligt idag. Det är utvecklat av Alliance for Open Media och baserat på videokodeken AV1, och erbjuder en kompression som är 50 % bättre än JPG med samma visuella kvalitet. Denna tekniska fördel har dock ett pris: AVIF stöds inte av Photoshop, Lightroom, Windows bildvisare eller de flesta traditionella redigerings- och visningsverktyg. Att konvertera till JPG löser detta problem i grunden.',
  },
  {
    type: 'title',
    text: 'AVIF vs JPG: Effektivitet mot universell kompatibilitet',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF komprimerar på ett enastående sätt: en högupplöst bild som i JPG tar upp 4 MB kan väga knappt 2 MB i AVIF med samma upplevda kvalitet. Detta gör det perfekt för webben där laddningsprestanda är avgörande. Utanför webbläsaren är AVIF dock praktiskt taget osynligt: varken Windows Explorer förhandsgranskar det, kameror exporterar det inte, och designers tar inte gärna emot det i sina arbetsflöden.',
  },
  {
    type: 'paragraph',
    html: 'JPG har varit den universella standarden för digital fotografering i över 30 år. Det stöds av 100 % av enheterna, operativsystemen, kontorsprogrammen, sociala medier, skrivare och all programvara som någonsin har visat en bild. När du behöver dela, skriva ut, redigera eller e-posta är JPG garantin för att allt fungerar utan problem.',
  },
  {
    type: 'title',
    text: 'Jämförelse: Molnkonverterare vs Vår lokala arkitektur',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Molnkonverterare',
        description: 'Verktyg som laddar upp dina AVIF-filer till en fjärrserver för bearbetning.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Dina privata bilder skickas via internet till externa servrar',
          'Väntetider för uppladdning och nedladdning av filen',
          'Begränsningar i storlek och antal gratis konverteringar',
          'Risk för att bilderna sparas på tredjepartsservrar',
        ],
      },
      {
        title: 'Vår lokala arkitektur',
        description: 'Direkt bearbetning i din webbläsare via Vanilla JS-teknik och Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Dina bilder lämnar aldrig din enhet',
          'Omedelbar konvertering utan nätverksfördröjning',
          'Inga begränsningar för filer eller storlek',
          'Lämplig för medicinska, juridiska eller konfidentiella bilder',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Hur den tekniska konverteringen i webbläsaren fungerar',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Moderna webbläsare som Chrome, Firefox och Edge inkluderar inbyggt stöd för AVIF tack vare sina integrerade AV1-avkodare. När du laddar en AVIF-fil avkodar webbläsaren den i minnet och konverterar den till en bitmappsrepresentation i RAM-minnet. Denna representation ritas på ett osynligt HTML5 <code>Canvas</code>-element.',
  },
  {
    type: 'paragraph',
    html: 'Därefter exporterar Canvas-elementet bilden med <code>toBlob(\'image/jpeg\', quality)</code> och tillämpar standard JPG-kompression. Eftersom JPG inte stöder transparens fylls alla alfakanaler som finns i AVIF-filen med en vit bakgrund före exporten. Resultatet är en JPG-fil av hög kvalitet som är redo för direkt nedladdning, utan att en enda byte har lämnat din webbläsare.',
  },
  {
    type: 'tip',
    title: 'Den perfekta balansen mellan kompression och kompatibilitet',
    html: 'AVIF är 50 % mindre än JPG med samma kvalitet - men JPG har 100 % kompatibilitet med all programvara. Om du får AVIF-bilder från en server och behöver redigera dem, e-posta dem eller öppna dem i skrivbordsverktyg, konvertera dem till JPG först.',
  },
  {
    type: 'title',
    text: 'Användningsområden: när man ska konvertera AVIF till JPG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Redigera i Photoshop, Lightroom, GIMP eller annan skrivbordsprogramvara.',
      'Dela bilder med användare på gamla enheter eller operativsystem.',
      'Bifoga i e-postmeddelanden för att garantera visning i alla e-postklienter.',
      'Publicera på plattformar som inte accepterar AVIF som uppladdningsformat.',
      'Skriva ut: Professionella utskriftstjänster arbetar med JPG nativt.',
    ],
  },
  {
    type: 'title',
    text: 'Slutsats: Universell kompatibilitet i ett steg',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF är framtiden för bildkompression, men nuet kräver kompatibilitet. Vår konverterare låter dig få det bästa av två världar: ta emot och lagra bilder i AVIF för maximal effektivitet, och konvertera dem till JPG direkt när du behöver att de fungerar i alla sammanhang. Allt privat, gratis och utan begränsningar.',
  },
];


export const content: AvifAJpgLocaleContent = {
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
