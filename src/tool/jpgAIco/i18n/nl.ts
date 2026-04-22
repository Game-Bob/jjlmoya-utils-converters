import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAIcoLocaleContent } from '../index';

const slug = 'jpg-naar-ico-converter';
const title = 'JPG naar ICO Converter';
const description =
  'Converteer JPG-foto\'s naar ICO met echte Microsoft binaire headers. Automatische vierkante uitsnede. Geen bestandsuploads. Gratis en privé.';

const ui: ImageConverterUI = {
  dragText: 'Sleep JPG-bestanden...',
  convertText: 'Om ze direct naar ICO te converteren',
  selectFiles: 'Bestanden selecteren',
  processedFiles: 'Verwerkte bestanden',
  downloadAll: 'Alles downloaden (.zip)',
  pending: 'In afwachting': 'Bibliografische Referenties',
  faqTitle: 'Veelgestelde Vragen',
};

const faq: JpgAIcoLocaleContent['faq'] = [
  {
    question: 'Is het resulterende ICO-bestand standaard compatibel om Windows-mappen aan te passen?',
    answer:
      'Ja, we maken een 100% authentiek Microsoft Icon Format-bestand door op een laag niveau een gestandaardiseerde binaire header in de beeldmatrix in te voegen.',
  },
  {
    question: 'Wat gebeurt er met de verhouding als mijn originele JPG een panoramische horizontale foto is?',
    answer:
      'De strikte wereldwijde ICO-standaard vereist absoluut een perfect vierkante afbeelding. Onze HTML5 JS-engine zal je foto centreren en het overtollige wegsnijden, waardoor een gebalanceerd resultaat wordt gegarandeerd.',
  },
  {
    question: 'Is het gevaarlijk om zakelijke of persoonlijke JPG-logo\'s naar de converter te uploaden?',
    answer:
      'De Canvas-engine in JavaScript draait in je eigen browser. Het converteren van honderden foto\'s naar ICO stuurt geen enkele megabyte naar een cloud in twijfelachtige landen.',
  },
];

const howTo: JpgAIcoLocaleContent['howTo'] = [
  {
    name: 'Verzamel de originele JPG-foto\'s',
    text: 'Zoek en verzamel de conventionele foto\'s en plaats ze door ze in ons vriendelijke vierkant te laten vallen.',
  },
  {
    name: 'Ervaar de binaire transformatie',
    text: 'De hercodering zal op een natuurlijke en snelle manier asynchroon metadata en headers invoegen, waardoor in het geheugen een strikt zuiver pictogram wordt gegenereerd.',
  },
  {
    name: 'Stel meerdere ZIP-ontwerpen samen',
    text: 'Rond de klus af door in slechts enkele seconden alles massaal in een compact pakket te downloaden.',
  },
];

const seo: JpgAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'JPG naar ICO Converter: Maak Favicons en Windows Pictogrammen van je Foto\'s',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Het <strong>ICO</strong>-formaat is de standaard van Microsoft voor pictogrammen van Windows-applicaties en favicons van websites. In tegenstelling tot het simpelweg hernoemen van een JPG naar .ico, vereist een echt ICO-bestand een specifieke binaire structuur met 22-byte headers en een ingesloten afbeeldingsoverzicht. <strong>JPG</strong> is het meest voorkomende startpunt voor het maken van deze pictogrammen — een bedrijfslogo, een profielfoto of een afbeelding die je wilt veranderen in het visuele icoon van je applicatie of website.',
  },
  {
    type: 'title',
    text: 'JPG of ICO? Wanneer elk formaat te gebruiken',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> is een bronformaat, geen doel voor pictogrammen. Perfect voor foto\'s en banners, maar incompatibel met systemen die pictogrammen vereisen: Windows Verkenner, de favorietenbalk van de browser, snelkoppelingen op het bureaublad of PWA-applicatiedocumenten. Een besturingssysteem of browser die op zoek is naar een pictogram verwacht het ICO-formaat — und als het dat niet vindt, wordt een generiek pictogram of een gebroken vierkant weergegeven.',
  },
  {
    type: 'paragraph',
    html: 'Het <strong>ICO</strong>-formaat is ontworpen om meerdere resoluties in één bestand te bevatten: <strong>16×16</strong> voor de favorietenbalk, <strong>32×32</strong> voor snelkoppelingen, <strong>48×48</strong> voor de Verkenner und <strong>256×256</strong> voor displays met hoge densiteit. Browsers und besturingssystemen selecteren automatisch de juiste resolutie op basis van de weergavecontext — de gebruiker hoeft niets te beheren.',
  },
  {
    type: 'title',
    text: 'Vergelijking: Lokale vs Cloud Conversie',
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
          'Netwerklatentie bij uploaden und downloaden',
          'Je bedrijfslogo\'s opgeslagen op servers van derden',
          'Limieten voor bestandsgrootte und dagelijkse conversiequota',
          'Opdringerige advertenties und trackers van derden',
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
    html: 'De JPG wordt gedecodeerd und getekend op een in-memory <strong>HTML5 Canvas</strong>. Omdat het ICO-formaat een vierkante afbeelding vereist, detecteert de engine automatisch of de JPG rechthoekig is und snijdt deze bij door het meest relevante deel te centreren. Vervolgens bouwt het de standaard Microsoft ICO-header met het juiste magische getal (<code>00 00 01 00</code>), het afbeeldingsoverzicht und de gecodeerde pixelgegevens. Het resultaat is een authentiek binair .ico-bestand — geen hernoemd PNG.',
  },
  {
    type: 'paragraph',
    html: 'Omdat JPG geen alfakanaal heeft, zal het resulterende ICO-bestand ook geen transparantie hebben — het zal een effen achtergrond hebben die is overgenomen van de originele foto. Als je een favicon met een transparante achtergrond nodig hebt (bijvoorbeeld om je aan te passen aan donkere of lichte favorietenbalken), is de aanbevolen werkwijze: de achtergrond verwijderen in een editor, opslaan als PNG und de PNG naar ICO converter gebruiken.',
  },
  {
    type: 'tip',
    title: 'Tip: meerdere resoluties in een enkele ICO',
    html: 'ICO-bestanden kunnen <strong>meerdere resoluties</strong> in één bestand bevatten — de browser of het OS kiest automatisch de meest geschikte voor elke context. Gebruik voor het best mogelijke resultaat een vierkante JPG van minimaal <strong>256×256 pixels</strong> als bron: dit geeft de converter genoeg informatie om scherpe 16×16, 32×32 und 48×48 formaten te genereren zonder pixelvorming.',
  },
  {
    type: 'title',
    text: 'Toepassingen und compatibiliteit',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Website favicon: compatibel met alle browsers, inclusief Internet Explorer.',
      'Aanpassing van map- und bureaubladpictogrammen in Windows 10/11.',
      'Snelkoppelingspictogram voor desktopapplicaties of installatieprogramma\'s.',
      'Applicatiepictogram voor Electron-projecten of PWA-applicaties.',
      'Pictogrammen voor bestandsbeheersystemen und zakelijke verkenners.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Het converteren van een JPG naar ICO is een technisch essentiële stap voor elk web- of desktopproject dat een herkenbare visuele identiteit nodig heeft. Deze tool genereert authentieke ICO\'s met de juiste binaire structuur, in seconden, zonder je logo naar een externe server te uploaden. Het resultaat werkt in alle browsers, in de Windows Verkenner und in elk systeem dat de ICO-standaard van Microsoft gebruikt.',
  },
];

export const content: JpgAIcoLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({
    title,
    description,
    inLanguage: 'nl',
    faq,
    howTo,
  }),
};
