import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAPngLocaleContent } from '../index';

const slug = 'konvertera-avif-till-png';
const title = 'Konvertera AVIF till PNG Online';
const description =
  'Konvertera AVIF-bilder till PNG och bevara transparens. Utan att ladda upp filer. Lokal bearbetning i din webbläsare. Gratis och obegränsat.';

const ui: ImageConverterUI = {
  dragText: 'Dra AVIF-filer hit...',
  convertText: 'För att konvertera dem till PNG direkt',
  selectFiles: 'Välj filer',
  processedFiles: 'Bearbetade filer',
  downloadAll: 'Ladda ner alla (.zip)',
  pending: 'Väntande',
  bibliographyTitle: 'Bibliografiska Referenser',
  faqTitle: 'Vanliga Frågor',
};

const faq: AvifAPngLocaleContent['faq'] = [
  {
    question: 'Varför ska jag konvertera AVIF till PNG?',
    answer:
      'AVIF är utmärkt för kompression, men dess kompatibilitet är begränsad i äldre webbläsare och klassiska redigeringsprogram. Genom att konvertera från AVIF till PNG säkerställer du att din fil behåller den ursprungliga transparensen och att alla program kan öppna den.',
  },
  {
    question: 'Behålls transparensen från den ursprungliga AVIF-filen?',
    answer:
      'Ja. Till skillnad från JPG som tar bort den transparenta bakgrunden, behåller vår konverterare alfakanalen intakt vid export till PNG.',
  },
  {
    question: 'Är det sant att mina bilder inte laddas upp till internet?',
    answer:
      'Helt sant. Vår konverterare körs till 100 % lokalt på din enhet med hjälp av den interna JavaScript-motorn.',
  },
];

const howTo: AvifAPngLocaleContent['howTo'] = [
  {
    name: 'Lägg till dina AVIF-filer',
    text: 'Du kan dra dem direkt till det markerade området eller använda knappen för att bläddra i mapparna på din enhet.',
  },
  {
    name: 'Omedelbar bearbetning',
    text: 'Låt HTML5-processorn rendera bilden; formatet ändras automatiskt till PNG på mikrosekunder.',
  },
  {
    name: 'Hämta dina PNG-filer',
    text: 'Ladda ner de konverterade bilderna en och en eller ladda ner ett komplett block via ZIP-knappen.',
  },
];

const seo: AvifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'AVIF till PNG-konverterare: Från webben till professionell redigering',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF är det idealiska formatet för att leverera bilder på webben - litet, effektivt och av hög kvalitet. Men när det är dags att redigera, retuschera eller arbeta med dessa bilder i designverktyg, blir AVIF ett hinder. Figma, Photoshop, Illustrator, Sketch och praktiskt taget alla professionella designverktyg förväntar sig att få PNG för arbete med transparens och förlustfri redigering. Att konvertera AVIF till PNG är bron mellan webben och den kreativa redigeringens värld.',
  },
  {
    type: 'title',
    text: 'AVIF vs PNG: Leverans vs Redigering',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF utmärker sig som ett leveransformat: små filer, snabb laddning, stöd för alfakanal och exceptionell visuell kvalitet. Dess ekosystem av verktyg är dock begränsat. Den mesta designprogramvaran kan inte importera AVIF direkt, vilket avbryter kreativa arbetsflöden. Att försöka öppna en AVIF i Figma eller importera den som ett lager i Photoshop fungerar helt enkelt inte.',
  },
  {
    type: 'paragraph',
    html: 'PNG är det inhemska formatet för digital design. Med förlustfri kompression, fullt stöd för alfakanal och universell kompatibilitet med alla kreativa verktyg, är PNG det ultimata arbetsformatet. När du behöver skala, retuschera, exportera till flera format eller arbeta i lager, garanterar PNG att du inte förlorar några detaljer eller pixlar i processen.',
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
          'Dina designbilder skickas till tredjepartsservrar',
          'Väntetid på grund av nätverksfördröjning',
          'Möjlig förlust eller ändring av alfakanalen',
          'Begränsningar i storlek som försvårar batchkonvertering',
        ],
      },
      {
        title: 'Vår lokala arkitektur',
        description: 'Direkt bearbetning i din webbläsare via Vanilla JS-teknik och Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Alfakanalen bevaras med perfekt trohet',
          'Omedelbar konvertering utan dataöverföring',
          'Inga begränsningar för filer, storlek eller batchar',
          'Total integritet för egenutvecklade designtillgångar',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Hur den tekniska konverteringen med transparens fungerar',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Moderna webbläsare avkodar AVIF nativt tack vare sina integrerade AV1-motorer. Vid laddning av filen avkodar webbläsaren den i minnet och bevarar all information från alfakanalen. Den avkodade bilden - inklusive dess transparens - ritas på ett HTML5 <code>Canvas</code>-element med rätt kompositionsläge för att bevara alfakanalen.',
  },
  {
    type: 'paragraph',
    html: 'Till skillnad från export till JPG (som förstör transparens genom att fylla med vitt), bevarar export till PNG via <code>toBlob(\'image/png\')</code> alfakanalen helt och hållet. Resultatet är en PNG med förlustfri kompression som behåller varje pixel, varje semitransparens och varje detalj från den ursprungliga AVIF-bilden.',
  },
  {
    type: 'tip',
    title: 'Det obligatoriska försteget för alla designverktyg',
    html: 'Konvertera dina AVIF till PNG innan du importerar dem till Figma, Photoshop, Illustrator eller något designverktyg. Dessa program läser inte AVIF direkt, men PNG fungerar nativt i alla, och bevarar transparens och kvalitet perfekt.',
  },
  {
    type: 'title',
    text: 'Användningsområden: när du behöver AVIF konverterat till PNG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Importera i Figma, Sketch, Adobe XD eller andra verktyg för UI-design.',
      'Redigera som lager i Photoshop, Affinity Photo eller GIMP och bevara transparens.',
      'Använda som källa för att skapa ikoner eller sprites.',
      'Skicka till kunder eller medarbetare som arbetar med standarddesignprogram.',
      'Arkivera bilder med transparens i ett förlustfritt redigeringsformat.',
    ],
  },
  {
    type: 'title',
    text: 'Slutsats: Bron mellan webb och design',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF och PNG är perfekta partners i ett modernt arbetsflöde: AVIF för effektiv leverans på webben, PNG för redigering och samarbete i designverktyg. Med vår konverterare är övergången från den ena till den andra omedelbar, privat och bevarar varje detalj - exakt vad du behöver när dina visuella tillgångar spelar roll.',
  },
];


export const content: AvifAPngLocaleContent = {
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
