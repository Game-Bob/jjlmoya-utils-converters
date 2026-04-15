import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAPngLocaleContent } from '../index';

const slug = 'webp-till-png-konverterare';
const title = 'Konvertera WebP till PNG Online och Gratis';
const description =
  'Konvertera WebP-bilder till PNG i din webbläsare. Bevarar transparens. Inga filuppladdningar till servrar. Gratis och 100 % privat.';

const ui: ImageConverterUI = {
  dragText: 'Dra WebP-files hit...',
  convertText: 'För att konvertera dem till PNG direkt',
  selectFiles: 'Välj filer',
  processedFiles: 'Bearbetade filer',
  downloadAll: 'Ladda ner alla (.zip)',
  pending: 'Väntande',
  bibliographyTitle: 'Bibliografiska Referenser',
  faqTitle: 'Vanliga Frågor',
};

const faq: WebpAPngLocaleContent['faq'] = [
  {
    question: 'Varför behöver jag konvertera mina WebP-filer till PNG?',
    answer:
      'Trots att de är lättare kan WebP-filer orsaka inkompatibilitet i redigeringsprogram som äldre Photoshop. PNG säkerställer 100 % universell kompatibilitet.',
  },
  {
    question: 'Går transparensen förlorad vid konvertering från WebP till PNG?',
    answer:
      'Inte alls. Till skillnad från konvertering till JPG så stöder PNG alfakanalen. Vårt verktyg kommer att bevara alla transparenta områden från originalfilen.',
  },
  {
    question: 'Kan jag ladda upp konfidentiella företagsfiler?',
    answer:
      'Du kan och bör göra det. Eftersom allt körs lokalt via JavaScript kommer dina företagsbilder aldrig att lämna din dator eller lagras på externa servrar.',
  },
];

const howTo: WebpAPngLocaleContent['howTo'] = [
  {
    name: 'Dra dina WebP-filer',
    text: 'Flytta och släpp dina WebP-filer på huvudpanelen eller välj bilderna på traditionellt sätt.',
  },
  {
    name: 'High Fidelity Konvertering',
    text: 'Din webbläsare kommer att rita om bilden pixel för pixel och generera en exakt kopia i PNG-format, vilket bibehåller det ursprungliga färgomfånget.',
  },
  {
    name: 'Individuell nedladdning eller Batch-nedladdning',
    text: 'Spara varje fil individuellt eller, om du har bearbetat ett parti, klicka på ZIP-knappen för att ladda ner dem alla paketerade tillsammans.',
  },
];

const bibliography: WebpAPngLocaleContent['bibliography'] = [
  {
    name: 'WebP API och Biblioteksdokumentation',
    url: 'https://developers.google.com/speed/webp/docs/api',
  },
  {
    name: 'HTML Canvas 2D Context-specifikation',
    url: 'https://html.spec.whatwg.org/multipage/canvas.html',
  },
  {
    name: 'Can I use: WebP-bildformat',
    url: 'https://caniuse.com/webp',
  },
];

const seo: WebpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'WebP till PNG-konverterare: Det professionella valet för redigering och design',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'När en designer laddar ner en grafisk resurs i <strong>WebP</strong>-format och försöker öppna den i Photoshop, Figma eller Illustrator kan resultatet bli frustrerande: filen går inte att ladda eller förlorar i kvalitet. <strong>PNG</strong>-formatet är den obestridda standarden för professionell redigering: förlustfri komprimering, full alfakanal och garanterad kompatibilitet genom hela den kreativa produktionskedjan.',
  },
  {
    type: 'title',
    text: 'WebP för webben, PNG för studion',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP är ett format för webbproduktion: dess komprimeringsalgoritmer är optimerade för att minska överföringsvikten, inte för att bevara maximal trohet genom iterativa redigeringsarbetsflöden. Varje gång du sparar en redigerad WebP tillämpar codec-enheten komprimering igen. För projekt där en fil kommer att ändras många gånger innebär detta en kumulativ kvalitetsförsämring.',
  },
  {
    type: 'paragraph',
    html: 'PNG använder <strong>förlustfri komprimering</strong>: alla pixeldata bevaras helt oavsett hur många gånger du sparar filen. Det är det format som valts av UI/UX-designers, digitala illustratörer och varumärkesteam som behöver bibehålla visuell integritet genom dussintals revisioner. Verktyg som Photoshop, Figma, Sketch och Illustrator behandlar PNG som sitt primära exportformat.',
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
          'Dina designresurser lagras på servrar från tredje part',
          'Långsam fjärrbearbetning för stora filer',
          'Risk för läckor i konfidentiella kundprojekt',
          'Batch-konvertering begränsad eller betalväggstörd',
        ],
      },
      {
        title: 'Vår Lokala Arkitektur',
        description: 'Direkt bearbetning på din hårdvara med Vanilla JS-teknik.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Dina designer lämnar aldrig din maskin',
          'Batch-konvertera dussintals filer omedelbart',
          'Full alfakanal och bevarande av färgomfång',
          'Absolut integritet för kundprojekt',
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
    html: 'Moderna webbläsare kan avkoda WebP nativt. Vårt verktyg utnyttjar denna förmåga för att ladda filen till ett JavaScript-<strong>Image</strong>-element och ritar sedan den på en HTML5 canvas med samma dimensioner som originalet. Till skillnad från konvertering till JPG behövs ingen bakgrundsfyllning här: canvasen behåller den fulla alfakanalen.',
  },
  {
    type: 'paragraph',
    html: 'Den slutliga exporten använder metoden <code>toDataURL(\'image/png\')</code>, vilket genererar en förlustfri PNG trogen originalet. Resultatet är en fil redo att importeras direkt till vilket professionellt designprogram som helst utan mellanliggande steg, färgförsämring eller transparensförlust.',
  },
  {
    type: 'tip',
    title: 'Tips för redaktörer',
    html: 'Använd PNG när du behöver fortsätta redigera bilden. Förlustfri komprimering garanterar ingen kvalitetsförsämring vid upprepade sparanden — avgörande vid arbete med lager, masker eller färgjusteringar i Photoshop eller Figma.',
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
      'Importera WebP-resurser till Photoshop, Figma, Sketch eller Illustrator.',
      'Bevara transparens i logotyper och ikoner för användning på flera bakgrunder.',
      'Skapa masterkopior av grafik för långvariga projekt.',
      'Exportera resurser för mobilappar som kräver PNG med alfakanal.',
      'Använda bilder i design-mockups och presentationer med variabla bakgrunder.',
    ],
  },
  {
    type: 'title',
    text: 'Slutsats',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Om WebP är formatet för webbservern är PNG formatet för designstudion. Detta verktyg konverterar dina WebP-resurser till produktionsklara PNG:er, med intakt transparens och maximal kvalitet — allt i din webbläsare och utan att dina filer någonsin lämnar din maskin.',
  },
];


export const content: WebpAPngLocaleContent = {
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
