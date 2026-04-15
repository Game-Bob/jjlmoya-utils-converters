import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAPngLocaleContent } from '../index';

const slug = 'konvertera-svg-till-png';
const title = 'Konvertera SVG till PNG Online och Gratis';
const description =
  'Konvertera SVG-vektorfiler till PNG i din webbläsare. HD-utmatning i dubbel skala. Bevarar transparens. Gratis och 100 % privat.';

const ui: ImageConverterUI = {
  dragText: 'Dra SVG-filer hit...',
  convertText: 'För att konvertera dem till PNG direkt',
  selectFiles: 'Välj filer',
  processedFiles: 'Bearbetade filer',
  downloadAll: 'Ladda ner alla (.zip)',
  pending: 'Väntande',
  bibliographyTitle: 'Bibliografiska Referenser',
  faqTitle: 'Vanliga Frågor',
};

const faq: SvgAPngLocaleContent['faq'] = [
  {
    question: 'Varför konvertera SVG-filer till PNG?',
    answer:
      'SVG är vektorbaserat och idealiskt för logotyper, men ibland behöver du det rastrerade PNG-formatet för användning i applikationer som inte stöder vektorer, eller för att dela via meddelandeappar eller sociala medier.',
  },
  {
    question: 'Kan jag välja storlek på utmatningen?',
    answer:
      'Vi fördubblar för närvarande skalan på käll-SVG:n så att PNG-utmatningen är skarp och lämplig för Retina- eller 4K-skärmar.',
  },
  {
    question: 'Behålls SVG-transparens?',
    answer:
      'Ja, den resulterande PNG-filen bevarar alfakanalen från den ursprungliga SVG-filen, vilket håller alla transparenta bakgrunder intakta.',
  },
];

const howTo: SvgAPngLocaleContent['howTo'] = [
  {
    name: 'Lägg till dina SVG-filer',
    text: 'Släpp dina SVG-filer eller dra dem direkt till det övre området.',
  },
  {
    name: 'HD PNG-generering',
    text: 'På några millisekunder kommer vår lokala motor att återskapa varje vektor som ett HD-pixellager i transparent PNG-format.',
  },
  {
    name: 'Ladda ner filerna',
    text: 'Spara de genererade PNG-filerna individuellt eller som ett ZIP-paket.',
  },
];

const bibliography: SvgAPngLocaleContent['bibliography'] = [
  {
    name: 'W3C SVG-specifikation',
    url: 'https://www.w3.org/TR/SVG/',
  },
  {
    name: 'Mozilla: SVG-handledning',
    url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial',
  },
];

const seo: SvgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'SVG till PNG-konverterare: Från oändlig vektor till universellt raster',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>SVG</strong> (Scalable Vector Graphics) är det perfekta valet för webbdesign: oändligt skalbart, lättviktigt och redigerbart med vilken kodredigerare som helst. Men när du vill använda den logotypen eller ikonen i en mobilapp, dela den på sociala medier eller infoga den i en PowerPoint presentation, stöter du på patrull: de flesta av dessa plattformar stöder inte SVG. <strong>PNG</strong>-formatet är den universella lösningen: rastrerat, med en alfakanal och kompatibelt i absolut alla sammanhang.',
  },
  {
    type: 'title',
    text: 'SVG vs PNG: Vektorer för webben, raster för världen',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG lagrar bilden som matematiska instruktioner: en Bézier kurva, en toning, en polygon. Det betyder att samma fil ser perfekt ut i 16 px eller 16 000 px. Det är det ideala formatet för din webbkod, CSS-animationer och alla element som behöver anpassas till olika skärmupplösningar utan kvalitetsförlust.',
  },
  {
    type: 'paragraph',
    html: 'PNG lagrar bilden som ett pixelrutnät med färg- och transparensinformation för varje pixel. Det är ett <strong>förlustfritt</strong> format, vilket innebär att kvaliteten bevaras helt. När en SVG väl har rastrerats till PNG är upplösningen fast. Därför är valet av rätt exportstorlek avgörande: vårt verktyg renderar i dubbel skala (2x) för att säkerställa skärpa på Retina och 4K skärmar.',
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
          'Din SVG-kod skickas till externa servrar',
          'Fjärr-rendering med inkonsekvent kvalitet',
          'Väntetid för uppladdning och bearbetning',
          'Begränsningar i storlek på SVG-filen',
        ],
      },
      {
        title: 'Vår Lokala Arkitektur',
        description: 'Direkt bearbetning på din hårdvara med Vanilla JS-teknik.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Din SVG lämnar aldrig din webbläsare',
          'Rendering med den infödda webbläsarmotorn för maximal trohet',
          'PNG i 2x upplösning för skärmar med hög densitet',
          'Transparens bevaras med full alfakanal',
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
    html: 'Processen börjar med att SVG-filen laddas in i ett JavaScript <strong>Image</strong>-element. När webbläsarmotorn har analyserat och renderat vektorns XML ritas den resulterande bilden på ett <strong>HTML5 Canvas</strong> vars dimensioner är dubbelt så stora som den ursprungliga SVG-storleken (2x skala). Detta ger en PNG med dubbelt så många pixlar per dimension, idealiskt för högupplösta skärmar.',
  },
  {
    type: 'paragraph',
    html: 'Till skillnad från konvertering till JPG behåller canvasen den fullständiga alfakanalen vid export till PNG: transparenta områden i den ursprungliga SVG-filen blir helt transparenta pixlar i den resulterande PNG-filen – ingen vit bakgrundsfyllning. Exporten använder metoden <code>toDataURL(\'image/png\')</code> med förlustfri komprimering.',
  },
  {
    type: 'tip',
    title: 'Tips före rastrering',
    html: 'Välj din PNG-exportstorlek noggrant – att rastrera en SVG är en enkelriktad process: du kan inte återfå vektorerna från den resulterande PNG-filen. Behåll alltid den ursprungliga SVG-filen som masterkälla och generera PNG-filer i den högsta upplösning du någonsin kan tänkas behöva.',
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
      'Exportera vektorlogotyper för PowerPoint eller Google Slides presentationer.',
      'Skapa PNG-ikoner för iOS, Android eller Progressive Web Apps.',
      'Dela SVG-design på Instagram, LinkedIn eller andra sociala medier.',
      'Infoga vektorillustrationer i Word-dokument eller PDF-filer.',
      'Generera PNG-miniatyrer av SVG-grafik för CMS-förhandsgranskning.',
    ],
  },
  {
    type: 'title',
    text: 'Slutsats',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG är vektorernas språk; PNG är passet till resten av den digitala världen. Detta verktyg rastrerar dina SVG-filer i 2x upplösning med bibehållen transparens, direkt i din webbläsare, utan att en enda byte av din design skickas till någon extern server.',
  },
];


export const content: SvgAPngLocaleContent = {
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
