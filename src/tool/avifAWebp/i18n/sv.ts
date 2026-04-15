import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAWebpLocaleContent } from '../index';

const slug = 'avif-till-webp-konverterare';
const title = 'Konvertera AVIF till WebP Online';
const description =
  'Konvertera AVIF-bilder till WebP för bättre kompatibilitet. Lokal bearbetning utan servrar. Gratis, privat och obegränsat.';

const ui: ImageConverterUI = {
  dragText: 'Dra AVIF-filer hit...',
  convertText: 'För att konvertera dem till WebP direkt',
  selectFiles: 'Välj filer',
  processedFiles: 'Bearbetade filer',
  downloadAll: 'Ladda ner alla (.zip)',
  pending: 'Väntande',
  bibliographyTitle: 'Bibliografiska Referenser',
  faqTitle: 'Vanliga Frågor',
};

const faq: AvifAWebpLocaleContent['faq'] = [
  {
    question: 'Vad är den faktiska skillnaden mellan att konvertera till WebP och andra format?',
    answer:
      'WebP erbjuder det bästa av två världar: kompressioner som är lika fantastiska som JPG, men med möjligheten att innehålla rena transparensen som en PNG. Genom att ändra din AVIF till WebP maximerar du dess kompatibilitet för webben och bevarar samtidigt alla dess fördelar.',
  },
  {
    question: 'Hur lyckas ni ändra detta utan server och så snabbt?',
    answer:
      'Vi utnyttjar de inbyggda avkodningsmodulerna och JavaScript HTML5 Image-objektet, vilket gör det möjligt att läsa din AVIF i lokalt minne och extrahera en optimerad WebP-fil på rekordtid.',
  },
  {
    question: 'Är WebP-formatet helt kompatibelt idag?',
    answer:
      'Till skillnad från det begynnande AVIF-formatet har WebP-formatet ett mycket brett stöd bland webbläsare som Chrome, Firefox och Safari.',
  },
];

const howTo: AvifAWebpLocaleContent['howTo'] = [
  {
    name: 'Infoga dina fotofiler',
    text: 'Flytta och släpp alla AVIF-filval till vår arbetsyta.',
  },
  {
    name: 'Algoritmisk byte-översättning',
    text: 'Vår motor bearbetar algoritmerna utan att ladda upp något och skapar exakta iterationer baserade på komprimerad WebP.',
  },
  {
    name: 'Hämta dina färdiga nedladdningar',
    text: 'Klicka på panelen och få dina filer i ZIP-arkiv eller enskilt för att publicera dem direkt.',
  },
];

const bibliography: AvifAWebpLocaleContent['bibliography'] = [
  {
    name: 'AV1 Image File Format',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'Google WebP Format Overview',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: AvifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'AVIF till WebP-konverterare: Det moderna och säkra alternativet för webben',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF är det mest avancerade bildformatet som finns tillgängligt idag: mindre än WebP, mindre än JPG, med överlägsen visuell kvalitet. Adoptionen har dock varit ojämn – Safari stödde det inte förrän 2024, och många äldre mobila enheter känner inte till det. WebP däremot har varit etablerat i åratal som den moderna webbstandarden med över 95 % globalt stöd. Att konvertera AVIF till WebP är det pragmatiska beslutet när du behöver modernitet utan att riskera kompatibiliteten.',
  },
  {
    type: 'title',
    text: 'AVIF vs WebP: Det nyaste vs Det säkraste',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF erbjuder den mest avancerade kompressionen som finns tillgänglig – vanligtvis 20–30 % mindre än WebP vid samma kvalitet. Dess teknologi baserad på AV1 är den modernaste i branschen. AVIF-stödet har dock fortfarande blinda fläckar: äldre Safari-versioner, vissa webbläsare på äldre Android-enheter och vissa bildvisare för skrivbordet känner inte igen det. För webbproduktion med bred och varierad publik innebär detta en risk.',
  },
  {
    type: 'paragraph',
    html: 'WebP har en mycket mer solid supporthistorik. Chrome antog det 2010, Firefox och Edge följde efter, och Safari införlivade det 2020. Med över 95 % global täckning i webbläsare är WebP det säkra valet för alla webbplatser som inte vill leverera fallback-format. Det stöder transparens, förlustbehaftad och förlustfri kompression, och ger mycket mindre filer än JPG eller PNG.',
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
        description: 'Verktyg som laddar upp dina AVIF-filer till en fjärrserver för att bearbeta dem.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Dina privata bilder skickas via externa servrar',
          'Nätverksfördröjning som saktar ner arbetsflödet',
          'Filbegränsningar per gratis konvertering',
          'Beroende av tredjepartstjänster som kan ändras',
        ],
      },
      {
        title: 'Vår lokala arkitektur',
        description: 'Direkt bearbetning i din webbläsare via Vanilla JS-teknik och Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Total integritet – 0 byte lämnar din enhet',
          'Omedelbar hastighet utan nätverksberoende',
          'Inga begränsningar för storlek eller antal filer',
          'Fungerar utan internetanslutning',
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
    html: 'Chrome, Firefox och Edge inkluderar inbyggda AVIF-avkodare. Vid laddning av filen avkodar webbläsarens bildmotor den i RAM och bevarar informationen från alfakanalen. Bilden ritas på ett osynligt HTML5 <code>Canvas</code> med hjälp av 2D-kontexten, vilket bevarar transparens korrekt.',
  },
  {
    type: 'paragraph',
    html: 'Exporten görs med <code>toBlob(\'image/webp\', quality)</code>. Webbläsaren tillämpar WebP-komprimeringsalgoritmen internt och genererar en Blob som inkluderar alfakanalen om originalbilden hade en. Denna Blob omvandlas till en direkt nedladdningslänk. Hela processen sker på mikrosekunder utan någon kommunikation med externa servrar.',
  },
  {
    type: 'tip',
    title: 'WebP: den moderna utvecklarens pragmatiska val',
    html: 'WebP har över 95 % stöd i webbläsare – AVIF växer men når ännu inte den siffran. För produktionssajter utan adaptiv formatdetektering är WebP det säkra valet som täcker nästan alla målgrupper. Konvertera dina AVIF till WebP och leverera moderna bilder med förtroende.',
  },
  {
    type: 'title',
    text: 'Användningsområden: när du ska välja WebP framför AVIF',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Webbplatser som behöver stöd i webbläsare från 2020 utan polyfills.',
      'CDN:er och bildleveranssystem som accepterar WebP men inte AVIF.',
      'Hybrida mobilappar med WebViews som eventuellt inte stöder AVIF.',
      'Moderna HTML-e-postmeddelanden där WebP har större stöd än AVIF.',
      'CMS-plattformar och e-handel med etablerat WebP-bildstöd.',
    ],
  },
  {
    type: 'title',
    text: 'Slutsats: Modernitet med garanterad kompatibilitet',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF är framkanten av bildkompression, men WebP är det pålitliga och universella valet för det moderna webbechosystemet. Med vårt verktyg konverterar du från det senaste till det mest stödda på ett ögonblick – utan att ladda upp något till någon server, med total integritet och utan storleksbegränsningar.',
  },
];


export const content: AvifAWebpLocaleContent = {
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
