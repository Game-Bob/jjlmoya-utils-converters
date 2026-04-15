import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAWebpLocaleContent } from '../index';

const slug = 'jpg-naar-webp-converter';
const title = 'Converteer JPG naar WebP Online en Gratis';
const description =
  'Converteer JPG-afbeeldingen naar WebP in je browser. Superieure compressie zonder zichtbaar verlies. Geen bestandsuploads. Gratis, onbeperkt en privé.';

const ui: ImageConverterUI = {
  dragText: 'Sleep JPG-bestanden...',
  convertText: 'Om ze direct naar WebP te converteren',
  selectFiles: 'Bestanden selecteren',
  processedFiles: 'Verwerkte bestanden',
  downloadAll: 'Alles downloaden (.zip)',
  pending: 'In afwachting',
  bibliographyTitle: 'Bibliografische Referenties',
  faqTitle: 'Veelgestelde Vragen',
};

const faq: JpgAWebpLocaleContent['faq'] = [
  {
    question: 'Waarom JPG-foto\'s converteren naar WebP?',
    answer:
      'WebP zorgt voor een aanzienlijk betere compressie van traditionele JPG-bestanden zonder dat het menselijk oog het verschil opmerkt, wat resulteert in snellere en modernere websites.',
  },
  {
    question: 'Moet ik per afbeelding betalen?',
    answer:
      'Nee, de tool is gratis en alles wordt direct op je eigen computer verwerkt. Het gebruik is onbeperkt voor zowel thuisgebruik als professioneel gebruik.',
  },
  {
    question: 'Is de conversie veilig?',
    answer:
      'Ja, volledig. Alle verwerking vindt plaats in het HTML5 Canvas van je lokale browser zonder dat er gegevens naar externe servers worden verzonden.',
  },
];

const howTo: JpgAWebpLocaleContent['howTo'] = [
  {
    name: 'Voeg je JPG-foto\'s toe',
    text: 'Zet je JPG-bestanden neer of sleep ze direct naar het bovenste gedeelte. De detectie is onmiddellijk.',
  },
  {
    name: 'Verwerking naar WebP',
    text: 'De lokale rendering-engine converteert elk afbeeldingsbestand naar een voor het web geoptimaliseerde WebP.',
  },
  {
    name: 'Download de resultaten',
    text: 'Sla elk WebP-bestand afzonderlijk op of download het ZIP-bestand met alle geconverteerde bestanden.',
  },
];

const bibliography: JpgAWebpLocaleContent['bibliography'] = [
  {
    name: 'Google WebP Compressiestudie',
    url: 'https://developers.google.com/speed/webp/docs/webp_study',
  },
  {
    name: 'Web.dev: Serveer afbeeldingen in moderne formaten',
    url: 'https://web.dev/uses-webp-images/',
  },
];

const seo: JpgAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'JPG naar WebP Converter: Versnel je sité met het moderne formaat van Google',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Het <strong>JPG</strong>-formaat heeft decennialang de digitale fotografie gedomineerd — universeel compatibel en breed ondersteund. Maar Google heeft <strong>WebP</strong> ontwikkeld om JPG op eigen terrein te verslaan: dezelfde visuele kwaliteit bij een 25–35% kleinere bestandsgrootte. Voor ontwikkelaars en marketingteams die vechten tegen trage laadtijden, is het converteren van JPG naar WebP de optimalisatie met het hoogste rendement die je kunt toepassen zonder aan je ontwerp te komen.',
  },
  {
    type: 'title',
    text: 'JPG of WebP? Wanneer je elk formaat moet gebruiken',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> blijft de juiste keuze wanneer je universele compatibiliteit nodig hebt: e-mails aan klanten, Word-documenten, verouderde social mediaplatforms of CMS-systemen die WebP nog niet accepteren. Het dertigjarige ecosysteem garandeert dat elk scherm, elke printer of elke viewer het zonder problemen zal openen. Het belangrijkste nadeel is de grootte — een header-JPG van 1,5 MB kan de LCP-score van je pagina verslechteren en de drempelwaarden van Core Web Vitals overschrijden.',
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> is de slimme keuze voor alle inhoud op je website. Chrome, Firefox, Safari en Edge ondersteunen het al jaren systeemeigen. Productafbeeldingen in e-commerce, blogbanners, videominiaturen en elke online gepubliceerde foto profiteren direct: lichtere pagina\'s, betere Google PageSpeed Insights-scores en een soepelere gebruikerservaring — vooral op trage mobiele verbindingen.',
  },
  {
    type: 'title',
    text: 'Vergelijking: Lokale vs Cloud-conversie',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Cloud Converters',
        description: 'Tools die je bestanden uploaden naar een externe server.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Netwerklatentie bij uploaden en downloaden',
          'Je foto\'s worden opgeslagen op servers van derden',
          'Limieten voor bestandsgrootte en dagelijkse conversiequota',
          'Opdringerige advertenties en trackers van derden',
        ],
      },
      {
        title: 'Onze Lokale Architectuur',
        description: 'Directe verwerking op je eigen hardware met Vanilla JS-technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Onmiddellijke snelheid — geen netwerklatentie',
          'Volledige privacy — 0 bytes extern verzonden',
          'Geen MB-limieten of beperkingen op aantal bestanden',
          'Schone interface, geen advertenties of tracking',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Hoe het technisch werkt',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Wanneer je een JPG in de tool sleept, maakt de browser een <strong>Blob-object</strong> aan dat alleen in je RAM leeft. Die Blob wordt gedecodeerd en getekend op een onzichtbaar <strong>HTML5 Canvas</strong>-element. Omdat JPG geen alfakanaal heeft, is de conversie naar WebP direct: de engine exporteert het canvas door <code>toDataURL(\'image/webp\')</code> aan te roepen, wat een byte-stream genereert die je besturingssysteem onmiddellijk downloadt — zonder tussenkomst van een server.',
  },
  {
    type: 'paragraph',
    html: 'Het WebP-compressiealgoritme combineert blokvoorspellingstechnieken (vergelijkbaar met die in VP8, de videocodec van Google) met kleurtransformaties en rekenkundig coderen. Het resultaat is een bestand dat dezelfde perceptuele informatie bevat als de originele JPG, maar veel efficiënter is verpakt — wat betekent dat er bij elk paginabezoek minder kilobytes worden overgedragen.',
  },
  {
    type: 'tip',
    title: 'Core Web Vitals Tip: LCP en beeldgewicht',
    html: 'De <strong>Largest Contentful Paint (LCP)</strong> is de Google-metriek die meet hoe lang het duurt om het grootste visuele element op je pagina te laden. Een header-JPG van 1,5 MB kan een WebP worden van slechts 900 KB — of zelfs 600 KB — zonder merkbaar visueel verschil. Die <strong>besparing van 25–35%</strong> kan je LCP verschuiven van "Verbetering nodig" naar "Goed" en je positie in de zoekresultaten verbeteren.',
  },
  {
    type: 'title',
    text: 'Toepassingen en compatibiliteit',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Productafbeeldingen op WooCommerce- of Shopify-winkels: minder gewicht, meer conversies.',
      'Fotografie voor blogs en artikelen: betere PageSpeed-score zonder herontwerp.',
      'Webbanners en advertentiemateriaal: lichtere bestanden met dezelfde scherpte.',
      'Portfoliogalerieën voor architectuur-, fotografie- of ontwerpstudio\'s.',
      'Videominiaturen op streamingsites of online cursusplatforms.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Het converteren van je JPG\'s naar WebP is tegenwoordig een van de eenvoudigste en meest kosteneffectieve optimalisaties die je op elke website kunt toepassen. Met deze tool doe je het in seconden, gratis en zonder dat je afbeeldingen je apparaat ooit verlaten. Minder kilobytes, betere LCP, snellere pagina\'s — allemaal met exact hetzelfde visuele uiterlijk dat je al had.',
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
  schemas: generateSchemas({ title, description, inLanguage: 'nl', faq, howTo }),
};
