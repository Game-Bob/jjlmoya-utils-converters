import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAIcoLocaleContent } from '../index';

const slug = 'png-naar-ico-converter';
const title = 'Converteer PNG naar ICO Online';
const description =
  'Converteer PNG naar ICO met echte binaire headers. Transparantie behouden. Geen bestandsuploads. Gratis en 100% privé.';

const ui: ImageConverterUI = {
  dragText: 'Sleep PNG-bestanden...',
  convertText: 'Om ze direct naar ICO te converteren',
  selectFiles: 'Bestanden selecteren',
  processedFiles: 'Verwerkte bestanden',
  downloadAll: 'Alles downloaden (.zip)',
  pending: 'In afwachting': 'Bibliografische Referenties',
  faqTitle: 'Veelgestelde Vragen',
};

const faq: PngAIcoLocaleContent['faq'] = [
  {
    question: 'Is jullie converter een maker van simpele vermomde PNG-bestanden of een echte ICO?',
    answer:
      'Wij maken een echte ICO. We extraheren gegevens uit je PNG, maken de gestandaardiseerde Microsoft hexadecimale header (Header + Directory van 22 bytes), schalen lokaal naar het ideale vierkante formaat en stellen een definitief bestand samen dat als native is gevalideerd.',
  },
  {
    question: 'Blijft transparantie behouden wanneer mijn logo in het pictogram wordt geplaatst?',
    answer:
      'Absoluut ja. Onze engine leest je PNG in 32-bits, verankert deze en behoudt nauwkeurig alle transparante gebieden, zodat ze opvallen in de universele adresbalk van de browser (Favicon).',
  },
  {
    question: 'Wordt mijn bedrijfslogo op jullie servers opgeslagen?',
    answer:
      'Deze service garandeert nul contact met externe netwerken. De converter werkt verankerd in je interne HTML5 Canvas; de vervaardiging van je pictogram vindt honderd procent plaats op je eigen machine in puur geheim lokaal geheugen.',
  },
];

const howTo: PngAIcoLocaleContent['howTo'] = [
  {
    name: 'Sleep bestanden om over te zetten',
    text: 'Plaats je fotomatrices (vierkante 512x512 PNG is ideaal) op het interactieve lokale frame.',
  },
  {
    name: 'Automatische bytecode-compilatie',
    text: 'Je ziet de balk intern lopen terwijl de lokale matrix van gezuiverde ICO hexadecimale headers wordt geladen en gefabriceerd.',
  },
  {
    name: 'Verzamel of ontsnap met je ZIP',
    text: 'Download them door te klikken op een mega-compilatie voor je websites (globale ZIP-knoppen) of download de miniatuur voor het uitvoerbare Windows-bestand.',
  },
];

const seo: PngAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG naar ICO Converter: De beste bron voor Favicons met perfecte transparantie',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG met transparantie</strong> is het ideale basismateriaal voor het maken van professionele ICO-pictogrammen. In tegenstelling tot JPG (dat geen alfakanaal heeft) of formaten met verlies, PNG geeft je precies wat het ICO-formaat nodig heeft: scherpe pixels, strakke randen en een 32-bits alfakanaal waardoor het pictogram perfect integreert op elke achtergrond — of het nu de witte favorietenbalk van Safari is, de donkere balk van Firefox of het bureaublad van Windows 11.',
  },
  {
    type: 'title',
    text: 'PNG of ICO? Wanneer je elk formaat moet gebruiken',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> is het werkformaat: het is de plek waar je je logo ontwerpt, exporteert vanuit Figma of Illustrator en je bewerkbare versies opslaat. De transparantie, pixelprecisie en verliesvrije compressie maken het onverslaanbaar voor het ontwerpproces. Maar browsers, besturingssystemen und Windows-applicaties die op zoek zijn naar een favicon of app-pictogram accepteren PNG niet rechtstreeks — ze hebben ICO nodig.',
  },
  {
    type: 'paragraph',
    html: '<strong>ICO</strong> is het distributieformaat voor pictogrammen in Microsoft-omgevingen und op het web. Het bevat een specifieke binaire structuur die het mogelijk maakt om meerdere resoluties in één bestand te verpakken: de browser leest de interne directory van de ICO und selecteert automatisch <strong>16×16</strong> voor het browsertabblad, <strong>32×32</strong> voor snelkoppelingen, <strong>48×48</strong> voor de Verkenner und <strong>256×256</strong> voor Retina- und 4K-schermen. Vertrekken vanuit een transparante PNG garandeert dat al die resoluties perfecte randen hebben zonder witte franjes.',
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
          'Netwerklatentie bij uploaden und downloaden',
          'Je bedrijfslogo opgeslagen op servers van derden',
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
    html: 'De PNG wordt gedecodeerd in een in-memory <strong>HTML5 Canvas</strong> met volledige 32-bits alfakanaalondersteuning. De engine bouwt de standaard Microsoft ICO-header met het juiste magische getal (<code>00 00 01 00</code>), de directory met afmetingen und gegevens-offset, und de pixelgegevens terwijl de transparantie-informatie behouden blijft. Het resultaat is een authentiek binair .ico-bestand dat Windows, macOS und alle browsers standaard herkennen.',
  },
  {
    type: 'paragraph',
    html: 'De transparantie van de PNG wordt volledig behouden in de resulterende ICO — transparante pixels blijven transparant, semi-transparante pixels behouden hun exacte alfawaarde und ondoorzichtige pixels behouden hun oorspronkelijke kleur. Dit is cruciaal voor logo\'s op variabele achtergronden: je favicon ziet er correct uit in de lichte modus, donkere modus und elke combinatie van interfacekleuren van de browser.',
  },
  {
    type: 'tip',
    title: 'Tip: gebruik een 512×512 PNG als bron',
    html: 'Gebruik voor het best mogelijke resultaat een <strong>vierkante PNG van 512×512</strong> als bronafbeelding. Deze resolutie geeft de converter genoeg informatie om alle standaard ICO-formaten scherp te genereren — van de 16×16 favicon tot de 256×256 voor schermen met hoge densiteit — zonder pixelvorming of verlies van detail in de randen. Hoe groter de bron-PNG, hoe beter de kleine pictogramformaten eruit zullen zien.',
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
      'Transparante favicon voor websites: werkt in Chrome, Firefox, Safari, Edge en Internet Explorer.',
      'Pictogram voor PWA-applicatie: manifest.json verwijst naar de ICO voor desktopinstallatie.',
      'Aanpassing van Windows 10/11-mappen met een bedrijfslogo zonder witte achtergrond.',
      'Snelkoppelingspictogram voor desktopapplicaties, installatieprogramma\'s und uitvoerbare bestanden.',
      'Pictogram voor browserextensies voor Chrome- und Firefox-extensies.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'PNG met transparantie is ongetwijfeld het beste startpunt voor het maken van ICO-pictogrammen van professionele kwaliteit. Met deze tool is de conversie onmiddellijk, worden alfakanalen volledig behouden und is het resulterende bestand een echte ICO met de juiste binaire structuur. Je uploadt je logo naar geen enkele server, geen watermerken, geen limieten — und perfecte transparantie in alle formaten.',
  },
];

export const content: PngAIcoLocaleContent = {
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
