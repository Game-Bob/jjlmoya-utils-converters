import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAJpgLocaleContent } from '../index';

const slug = 'konvertera-svg-till-jpg';
const title = 'Konvertera SVG till JPG Online och Gratis';
const description =
  'Konvertera SVG-vektorfiler till JPG i din webbläsare. 2x högupplöst rendering. Inga filuppladdningar. Gratis och 100 % privat.';

const ui: ImageConverterUI = {
  dragText: 'Dra SVG-filer hit...',
  convertText: 'För att konvertera dem till JPG direkt',
  selectFiles: 'Välj filer',
  processedFiles: 'Bearbetade filer',
  downloadAll: 'Ladda ner alla (.zip)',
  pending: 'Väntande',
  bibliographyTitle: 'Bibliografiska Referenser',
  faqTitle: 'Vanliga Frågor',
};

const faq: SvgAJpgLocaleContent['faq'] = [
  {
    question: 'Varför konvertera SVG till JPG?',
    answer:
      'JPG erbjuder maximal kompatibilitet på alla typer av enheter; att konvertera SVG till JPG är det bästa sättet att säkerställa att alla kan se din design utan renderingsproblem.',
  },
  {
    question: 'Vad händer med SVG-transparensen?',
    answer:
      'Vid konvertering till JPG (som inte stöder transparens) kommer en ogenomskinlig vit bakgrund automatiskt att läggas till i din vektorkomposition.',
  },
  {
    question: 'Vilken upplösning kommer den resulterande JPG-filen att ha?',
    answer:
      'Verktyget renderar SVG:n i dubbel skala (2x) för att garantera en hög upplösning som är lämplig för Retina-skärmar och professionell användning.',
  },
];

const howTo: SvgAJpgLocaleContent['howTo'] = [
  {
    name: 'Lägg till dina vektorfiler',
    text: 'Släpp dina SVG-filer i det övre området för att förbereda exportlistan.',
  },
  {
    name: 'Rastring till JPG',
    text: 'Verktyget kommer att omvandla vektorerna till högupplösta pixlar och generera din JPG-fil direkt.',
  },
  {
    name: 'Ladda ner resultaten',
    text: 'Hämta dina JPG-filer en och en eller som ett ZIP-paket.',
  },
];

const bibliography: SvgAJpgLocaleContent['bibliography'] = [
  {
    name: 'W3C SVG-specifikation',
    url: 'https://www.w3.org/TR/SVG/',
  },
  {
    name: 'Översikt över JPEG-standarden',
    url: 'https://jpeg.org/jpeg/',
  },
];

const seo: SvgAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'SVG till JPG-konverterare: Ta dina vektorer till valfri plattform',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>SVG</strong>-formatet är det moderna webbens modersmål: lättviktigt, skalbart, redigerbart. Men det finns hela plattformar som helt enkelt inte förstår vektorer. Sociala medier, e-postklienter, Word-dokument, utskriftsapplikationer och den stora majoriteten av programvara i den verkliga världen arbetar med rastrerade bilder. <strong>JPG</strong> är den universella gemensamma nämnaren: accepterad överallt, utan undantag, inga insticksprogram och inga ytterligare konverteringar behövs.',
  },
  {
    type: 'title',
    text: 'SVG vs JPG: När vektorn behöver bli ett foto',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG lagrar bilden som matematiska instruktioner. Denna vektornatur gör den perfekt för webben men osynlig för den analoga världen och äldre programvara. En SVG-fil som skickas via e-post kan visas som obegriplig XML-text i mottagarens klient. En SVG som bifogas till ett Word-dokument kanske inte renderas alls i äldre versioner av Office.',
  },
  {
    type: 'paragraph',
    html: 'JPG konverterar varje bild till en pixelmatris med färginformation som komprimerats av JPEG-algoritmen. Eftersom det inte stöder en alfakanal slår konverteraren automatiskt ihop bakgrunden med solid vit färg. I gengäld får du en fil som kan öppnas på <em>vilken enhet som helst på planeten</em>: gamla mobiltelefoner, skrivare, smart-TV-apparater, redigeringsappar från tjugo år sedan. Det är formatet med den minsta gemensamma nämnaren, och i många sammanhang det mest värdefulla.',
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
          'Din SVG-kod (med skyddad designdata) skickas till externa servrar',
          'Inkonsekvent rendering av teckensnitt och övertoningar',
          'Internetanslutning krävs för varje konvertering',
          'JPG-utdatakvalitet är inte alltid konfigurerbar',
        ],
      },
      {
        title: 'Vår Lokala Arkitektur',
        description: 'Direkt bearbetning på din hårdvara med Vanilla JS-teknik.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Noll byte av din SVG lämnar webbläsaren',
          'Trogen rendering med den infödda webbläsarmotorn',
          '2x högupplöst JPG för maximal skärpa',
          'Vit bakgrund tillämpas automatiskt enligt JPG-standard',
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
    html: 'SVG-filen laddas in i ett <strong>Image</strong>-element i webbläsaren, som använder sin egen vektorrenderingsmotor för att tolka XML-filen. Det visuella resultatet ritas på ett <strong>HTML5 Canvas</strong> med en föregående vit bakgrundsfyllning (krävs eftersom JPG inte stöder transparens) i dubbel skala för att maximera utdataupplösningen.',
  },
  {
    type: 'paragraph',
    html: 'Metoden <code>toDataURL(\'image/jpeg\', 0.92)</code> omvandlar canvaspixlarna till en JPG-fil av hög kvalitet. SVG-färger kan uppleva små variationer på grund av färgrymdskonvertering vid JPEG-komprimering. Det är därför lämpligt att förhandsgranska resultatet innan du använder det i professionella utskriftsjobb där kromatisk trohet är avgörande.',
  },
  {
    type: 'tip',
    title: 'Tips för användning i tryck',
    html: 'SVG-bakgrunder och övertoningar kan se något annorlunda ut i JPG på grund av färgprofilskillnader vid JPEG-komprimering. Förhandsgranska alltid resultatet innan du skickar till en skrivare eller använder det i tryckt marknadsföringsmaterial där exakt färgåtergivning för varumärket är viktigt.',
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
      'Dela SVG-logotyper och illustrationer på Facebook, Twitter eller LinkedIn.',
      'Bifoga vektorgrafik i e-postmeddelanden via Outlook eller Gmail.',
      'Infoga SVG-design i Word-dokument, Excel eller presentationer.',
      'Publicera produktbilder i onlinebutiker som inte stöder SVG.',
      'Förbereda filer för print-on-demand-tjänster.',
    ],
  },
  {
    type: 'title',
    text: 'Slutsats',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Den verkliga världen talar fortfarande i pixlar. Detta verktyg översätter dina SVG-vektorer till det universella språket JPG på några sekunder, med högupplöst rendering och utan att din skyddade design någonsin lämnar din webbläsare.',
  },
];


export const content: SvgAJpgLocaleContent = {
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
