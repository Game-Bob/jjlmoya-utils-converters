import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAWebpLocaleContent } from '../index';

const slug = 'konvertera-jpg-till-webp';
const title = 'Konvertera JPG till WebP Online och Gratis';
const description =
  'Konvertera JPG-bilder till WebP i din webbläsare. Överlägsen komprimering utan synlig förlust. Inga filuppladdningar. Gratis, obegränsat och privat.';

const ui: ImageConverterUI = {
  dragText: 'Dra JPG-filer hit...',
  convertText: 'För att konvertera dem till WebP direkt',
  selectFiles: 'Välj filer',
  processedFiles: 'Bearbetade filer',
  downloadAll: 'Ladda ner alla (.zip)',
  pending: 'Väntande',
  bibliographyTitle: 'Bibliografiska Referenser',
  faqTitle: 'Vanliga Frågor',
};

const faq: JpgAWebpLocaleContent['faq'] = [
  {
    question: 'Varför konvertera JPG-foton till WebP?',
    answer:
      'WebP möjliggör betydligt bättre komprimering av traditionella JPG-filer utan att det mänskliga ögat märker skillnaden, vilket resulterar i snabbare och modernare webbplatser.',
  },
  {
    question: 'Måste jag betala per bild?',
    answer:
      'Nej, verktyget är gratis och allt bearbetas direkt på din dator. Det är obegränsat för både hem- och professionellt bruk.',
  },
  {
    question: 'Är konverteringen säker?',
    answer:
      'Ja, absolut. All bearbetning sker i HTML5 Canvas i din lokala webbläsare utan att skicka någon data till externa servrar.',
  },
];

const howTo: JpgAWebpLocaleContent['howTo'] = [
  {
    name: 'Lägg till dina JPG-foton',
    text: 'Släpp dina JPG-filer eller dra dem direkt till det övre området. Detekteringen sker omedelbart.',
  },
  {
    name: 'Bearbetning till WebP',
    text: 'Den lokala renderingsmotorn kommer att konvertera varje bildfil till en ultraoptimerad WebP redo för webben.',
  },
  {
    name: 'Ladda ner resultaten',
    text: 'Spara varje WebP individuellt eller ladda ner ZIP-filen med alla konverterade filer.',
  },
];

const bibliography: JpgAWebpLocaleContent['bibliography'] = [
  {
    name: 'Google WebP komprimeringsstudie',
    url: 'https://developers.google.com/speed/webp/docs/webp_study',
  },
  {
    name: 'Web.dev: Leverera bilder i moderna format',
    url: 'https://web.dev/uses-webp-images/',
  },
];

const seo: JpgAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'JPG till WebP-konverterare: Snabba upp din webbplats med Googles moderna format',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong>-formatet har dominerat digital fotografering i årtionden — universellt kompatibelt och brett stöttat. Men Google utvecklade <strong>WebP</strong> för att slå JPG på dess egen hemmaplan: samma visuella kvalitet vid 25–35 % mindre filstorlek. För utvecklare och marknadsföringsteam som kämpar mot långsamma sidladdningar är konvertering av JPG till WebP den enskilt mest effektiva optimeringen du kan tillämpa utan att röra din design.',
  },
  {
    type: 'title',
    text: 'JPG eller WebP? När du ska använda respektive format',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> förblir det rätta valet när du behöver universell kompatibilitet: e-post till kunder, Word-dokument, äldre sociala medieplattformar eller CMS-system som ännu inte accepterar WebP. Dess trettioåriga ekosystem garanterar att alla skärmar, skrivare eller bildvisare kommer att öppna det utan problem. Den största nackdelen är storleken — en header-JPG på 1,5 MB kan sänka din sidas LCP-poäng och missa tröskelvärdena för Core Web Vitals.',
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> är det smarta valet för allt innehåll som lever på din webbplats. Chrome, Firefox, Safari och Edge har stött det nativt i åratal. Produktbilder i e-handel, bloggbanners, videominiatyrer och alla foton som publiceras online drar direkt nytta: lättare sidor, bättre Google PageSpeed Insights-poäng och en smidigare användarupplevelse — särskilt på långsamma mobilanslutningar.',
  },
  {
    type: 'title',
    text: 'Jämförelse: Lokal vs Molnkonvertering',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Molnkonverterare',
        description: 'Verktyg som laddar upp dina filer till en fjärrserver.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Nätverkslatens vid uppladdning och nedladdning',
          'Dina foton lagras på tredjepartsservrar',
          'Begränsningar i filstorlek och dagliga konverteringstak',
          'Påträngande annonser och spårare från tredje part',
        ],
      },
      {
        title: 'Vår Lokala Arkitektur',
        description: 'Direkt bearbetning på din hårdvara med Vanilla JS-teknik.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Omedelbar hastighet — noll nätverkslatens',
          'Komplett integritet — 0 byte skickas externt',
          'Inga MB-gränser eller begränsningar på antal filer',
          'Rent gränssnitt, inga annonser eller spårning',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Hur det fungerar tekniskt',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'När du drar en JPG till verktyget skapar webbläsaren ett <strong>Blob-objekt</strong> som bara lever i ditt RAM-minne. Denna Blob avkodas och ritas på ett osynligt <strong>HTML5 Canvas</strong>-element. Eftersom JPG saknar en alfakanal är konverteringen till WebP direkt: motorn exporterar canvasen genom att anropa <code>toDataURL(\'image/webp\')</code>, vilket genererar en byteström som ditt operativsystem laddar ner omedelbart — ingen server inblandad.',
  },
  {
    type: 'paragraph',
    html: 'WebP-komprimeringsalgoritmen kombinerar tekniker för blockförutsägelse (liknande de i VP8, Googles videocodec) med färgtransformationer och aritmetisk kodning. Resultatet är en fil som innehåller samma perceptuella information som den ursprungliga JPG-filen men förpackad mycket mer effektivt — vilket innebär färre kilobyte överförda vid varje sidbesök.',
  },
  {
    type: 'tip',
    title: 'Core Web Vitals Tips: LCP och bildvikt',
    html: '<strong>Largest Contentful Paint (LCP)</strong> är det Google-mått som mäter hur lång tid det tar att ladda det största visuella elementet på din sida. En header-JPG på 1,5 MB kan bli en WebP på bara 900 KB — eller till och med 600 KB — utan märkbar visuell skillnad. Denna <strong>besparing på 25–35 %</strong> kan flytta din LCP från "Behöver förbättras" till "Bra" och förbättra din sökrankning.',
  },
  {
    type: 'title',
    text: 'Användningsområden och kompatibilitet',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Produktbilder i WooCommerce- eller Shopify-butiker: mindre vikt, mer konvertering.',
      'Fotografi för bloggar och artiklar: bättre PageSpeed-poäng utan att behöva designa om.',
      'Webbbanners och reklammaterial: lättare filer med samma skärpa.',
      'Portfoliogallerier för arkitektur-, fotografi- eller designstudior.',
      'Videominiatyrer på streamingsajter eller onlinekursplattformar.',
    ],
  },
  {
    type: 'title',
    text: 'Slutsats',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Att konvertera dina JPG-filer till WebP är idag en av de enklaste och mest kostnadseffektiva optimeringarna du kan tillämpa på vilken webbplats som helst. Med detta verktyg gör du det på några sekunder, gratis, och utan att dina bilder någonsin lämnar din enhet. Färre kilobyte, bättre LCP, snabbare sidor — allt med exakt samma visuella utseende som du redan hade.',
  },
];


export const content: JpgAWebpLocaleContent = {
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
