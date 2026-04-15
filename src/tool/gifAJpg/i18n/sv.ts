import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAJpgLocaleContent } from '../index';

const slug = 'konvertera-gif-till-jpg';
const title = 'Konvertera GIF till JPG Online';
const description =
  'Extrahera den första rutan från dina GIF-filer och konvertera den till JPG. Utan server. Lokal bearbetning i din webbläsare. Gratis och obegränsat.';

const ui: ImageConverterUI = {
  dragText: 'Dra GIF-filer hit...',
  convertText: 'För att konvertera dem till JPG direkt',
  selectFiles: 'Välj filer',
  processedFiles: 'Bearbetade filer',
  downloadAll: 'Ladda ner alla (.zip)',
  pending: 'Väntande',
  bibliographyTitle: 'Bibliografiska Referenser',
  faqTitle: 'Vanliga Frågor',
};

const faq: GifAJpgLocaleContent['faq'] = [
  {
    question: 'Vad händer med animationerna när jag går över till JPG?',
    answer:
      'JPG-formatet är strikt statiskt och stöder inte flera rutor. Vår konverterare extraherar endast den första bilden eller rutan som visas i GIF-sekvensen.',
  },
  {
    question: 'Kommer jag att förlora några specialeffekter eller transparent bakgrund?',
    answer:
      'Ja, det är det naturliga beteendet för JPG-standarden. Om du laddar upp en GIF med transparent bakgrund lägger vi automatiskt till ett solitt vitt bakgrundslager för att undvika korrupta färger.',
  },
  {
    question: 'Kan jag extrahera JPG-foton från en GIF utan att webbplatsen sparar mitt innehåll?',
    answer:
      'Absolut ja. Verktyget är en webbapp baserad på HTML5 Canvas. All avkodning utförs av processorn i din egen fysiska enhet.',
  },
];

const howTo: GifAJpgLocaleContent['howTo'] = [
  {
    name: 'Dra rörliga tunga filer',
    text: 'Placera eller dra den där GIF-filen från din mapp och släpp den i vår bearbetningsruta.',
  },
  {
    name: 'Ren beräkning av den första rutan',
    text: 'På bråkdelen av en sekund extraheras animationen och en solid vit JPG skapas utan att kontakta servrar.',
  },
  {
    name: 'Få dem paketerade i ett ZIP-arkiv',
    text: 'Ladda ner via knapparna eller använd ZIP om du bearbetade ett stort antal filer.',
  },
];

const bibliography: GifAJpgLocaleContent['bibliography'] = [
  {
    name: 'Joint Photographic Experts Group teknisk specifikation',
    url: 'https://en.wikipedia.org/wiki/JPEG',
  },
  {
    name: 'CompuServe GIF Information',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
];

const seo: GifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'GIF till JPG-konverterare: Extrahera rutor som högkvalitativa bilder',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'GIF-filer har i årtionden dominerat världen av korta animationer på internet. Men deras animerade natur gör dem helt oanvändbara som miniatyrbilder, förhandsvisningar för sociala nätverk eller bilder i dokument. När du behöver extrahera en specifik ruta från en GIF och konvertera den till en statisk bild av hög kvalitet, är konvertering till JPG den mest praktiska och kompatibla lösningen.',
  },
  {
    type: 'title',
    text: 'GIF eller JPG? Format med motsatta syften',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIF (Graphics Interchange Format) designades 1987 med en sträng begränsning som kvarstår idag: det kan bara representera 256 färger per ruta. Denna tekniska restriktion spelade ingen roll för enkla animationer med reducerade paletter, men det gör det till ett visuellt fattigt format för riktig fotografering. JPG däremot kan rendera miljontals färger med avancerade perceptuella komprimeringsalgoritmer.',
  },
  {
    type: 'paragraph',
    html: 'Att extrahera en ruta från en GIF och spara den som JPG har flera tillämpningar: generera miniatyrbilder för videospelare, skapa förhandsvisningar för innehållshanteringsplattformar, få statiska bilder för presentationer eller helt enkelt arkivera ett visuellt ögonblick från en komplex animation. Den resulterande JPG-filen blir mycket lättare än den ursprungliga GIF-filen och universellt kompatibel.',
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
        description: 'Verktyg som laddar upp dina filer till en fjärrserver för bearbetning.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Dina GIF-filer skickas över internet till tredjepartsservrar',
          'Nätverksfördröjning vid upp- och nedladdning',
          'Storleksbegränsningar och filgränser per session',
          'Risk för datalagring på andras servrar',
        ],
      },
      {
        title: 'Vår lokala arkitektur',
        description: 'Direkt bearbetning på din hårdvara via Vanilla JS-teknik.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'GIF-filen lämnar aldrig din enhet',
          'Omedelbar hastighet utan nätverksväntan',
          'Inga storleksbegränsningar eller filgränser',
          'Total integritet: 0 byte skickas externt',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Hur den tekniska extraktionen av rutan fungerar',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Den lokala konverteringen stöder sig på kraften i HTML5 Canvas API. När du laddar en GIF avkodar webbläsaren den i minnet som ett inbyggt Image-element. Genom att rendera den på en osynlig canvas fångar webbläsarens grafikmotor automatiskt den första rutan i animationssekvensen.',
  },
  {
    type: 'paragraph',
    html: 'Eftersom JPG-formatet inte stöder transparens använder vår algoritm en solid vit bakgrund före export. Canvas-metoden <code>toDataURL(\'image/jpeg\')</code> genererar JPG-byteströmmen direkt i din dators RAM-minne, utan någon nätverksanslutning. Den resulterande filen laddas omedelbart ner till din enhet.',
  },
  {
    type: 'tip',
    title: 'GIF filens begränsade färgpalett',
    html: 'GIF kan bara innehålla 256 färger per ruta. Den extraherade JPG-filen ärver den reducerade paletten från originalet: om GIF-filen hade toningar eller foton kan den se något postertiserad ut. För bästa resultat, använd GIF-filer med enkla färger eller illustrationer.',
  },
  {
    type: 'title',
    text: 'Användningsfall och kompatibilitet för den resulterande JPG-filen',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Miniatyrbilder och förhandsvisningar för videoplattformar och CMS.',
      'Omslagsbilder för inlägg på sociala nätverk.',
      'Infogning i Word-, PowerPoint- eller PDF-dokument.',
      'Presentationsfiler och marknadsföringsmaterial.',
      'Universell kompatibilitet med bildvisare i Windows, macOS och mobiler.',
    ],
  },
  {
    type: 'title',
    text: 'Slutsats: den där rutan är värd mer än animationen',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'En animerad GIF på 2 MB kan producera en JPG av den första rutan på endast cirka 50-200 KB, beroende på upplösning. Vårt verktyg utför denna konvertering omedelbart, privat och utan begränsningar, direkt i din webbläsare. Inga servrar, inga konton, ingen väntan.',
  },
];


export const content: GifAJpgLocaleContent = {
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
