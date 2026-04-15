import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAIcoLocaleContent } from '../index';

const slug = 'convertitore-webp-in-ico';
const title = 'Converti WebP in ICO';
const description =
  'Converti immagini WebP in file ICO ufficiali con trasparenza. Nessun caricamento di file. Intestazioni binarie Microsoft reali. Gratuito e privato.';

const ui: ImageConverterUI = {
  dragText: 'Trascina i file WebP...',
  convertText: 'Per convertirli in ICO istantaneamente',
  selectFiles: 'Seleziona file',
  processedFiles: 'File elaborati',
  downloadAll: 'Scarica tutto (.zip)',
  pending: 'In attesa',
  bibliographyTitle: 'Riferimenti Bibliografici',
  faqTitle: 'Domande Frequenti',
};

const faq: WebpAIcoLocaleContent['faq'] = [
  {
    question: 'Posso convertire i design degli sticker WebP in una Favicon ICO ufficiale per il web?',
    answer:
      'Esattamente. La Favicon richiede ancora la classica estensione Microsoft ICO per un\'estrema compatibilità universale. Questo strumento inietterà intestazioni binarie costruendo un\'icona legittima al 100%.',
  },
  {
    question: 'Devo aspettare in code online quando creo il mio grande lotto di icone aziendali?',
    answer:
      'Niente affatto. Il nostro convertitore carica il Javascript e taglia qualsiasi rete di caricamento. La CPU del tuo dispositivo elabora cento foto o più in modo asincrono.',
  },
  {
    question: 'L\'ICO risultante supporterà la trasparenza del mio WebP originale?',
    answer:
      'Sì. Il nostro motore lavora internamente con l\'API HTML5 canvas con pieno supporto a 32 bit, ogni foro trasparente verrà trasferito in modo pulito nel file iconografico.',
  },
];

const howTo: WebpAIcoLocaleContent['howTo'] = [
  {
    name: 'Trascina tutti i tuoi sticker WebP locali',
    text: 'Sposta i grandi lotti di foto senza timore di saturare il limite del web.',
  },
  {
    name: 'Traduzione asincrona logica e assemblaggio diretto',
    text: 'Nota rapidamente come la barra e gli elementi si autocompletano mentre la memoria elabora il blocco byte per byte dal frame.',
  },
  {
    name: 'Prendi il tuo pacchetto per lo sviluppo di sistemi e web',
    text: 'Fai clic liberamente su un enorme pulsante scaricabile in un file congiunto o scarica manualmente se ne serve solo uno.',
  },
];

const bibliography: WebpAIcoLocaleContent['bibliography'] = [
  {
    name: 'Documentazione Generale dell\'Intestazione Web ICO',
    url: 'https://en.wikipedia.org/wiki/ICO_(file_format)',
  },
  {
    name: 'Documentazione Google WebP',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: WebpAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertitore da WebP a ICO: Crea Favicon Perfette dai tuoi Asset Moderni',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'I moderni flussi di lavoro del web design producono asset in formato <strong>WebP</strong>: loghi ottimizzati, icone UI ed elementi di brand. Ma quando è il momento di configurare la <strong>favicon</strong> del tuo sito o le icone per un\'applicazione desktop Windows, il formato richiesto è ancora l\'<strong>ICO</strong>. Convertire WebP in ICO ti consente di riutilizzare i tuoi asset di altissima qualità senza perdere la sorgente originale.',
  },
  {
    type: 'title',
    text: 'WebP vs ICO: Formati con Scopi Diversi',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP è un formato immagine per scopi generali, eccellente per fotografie, illustrazioni e icone UI del web. La sua compressione efficiente lo rende ideale per velocizzare il caricamento delle pagine. Tuttavia, manca della specifica struttura binaria che i sistemi operativi e i browser richiedono per riconoscere e visualizzare un\'icona di applicazione o una favicon.',
  },
  {
    type: 'paragraph',
    html: 'ICO è un formato contenitore Microsoft progettato specificamente per le icone. Può memorizzare più risoluzioni in un singolo file e supporta la piena trasparenza tramite un canale alfa a 32 bit. I browser cercano un file <code>favicon.ico</code> per convenzione, e questo formato assicura che la tua icona appaia nitida sia sugli schermi standard che sui display Retina e 4K.',
  },
  {
    type: 'title',
    text: 'Confronto: Conversione Locale vs Cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Convertitori Cloud',
        description: 'Strumenti che caricano i tuoi file su un server remoto.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Il logo della tua azienda viaggia verso server di terze parti',
          'Connessione Internet richiesta per ogni conversione',
          'Qualità dell\'output variabile a seconda del server',
          'Limiti sul numero di conversioni giornaliere',
        ],
      },
      {
        title: 'La Nostra Architettura Locale',
        description: 'Elaborazione diretta sul tuo hardware utilizzando la tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Il tuo logo non lascia mai il tuo browser',
          'Intestazioni binarie ICO generate secondo lo standard Microsoft',
          'Trasparenza a 32 bit preservata integralmente',
          'Conversione batch di set di icone completi',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Come funziona tecnicamente',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Il browser decodifica il file WebP in modo nativo e lo disegna su un <strong>HTML5 Canvas</strong> con profondità di colore a 32 bit, preservando il canale alfa originale. Il nostro motore JavaScript estrae quindi i dati dei pixel tramite il metodo <code>getImageData()</code> e costruisce la struttura binaria ICO con le intestazioni ICONDIR e ICONDIRENTRY specificate dallo standard Microsoft.',
  },
  {
    type: 'paragraph',
    html: 'Il risultato è un file ICO legittimo, non un semplice cambio di nome del file. I dati dei pixel sono impacchettati con la struttura corretta che Windows, macOS e tutti i browser moderni si aspettano quando caricano una favicon o un\'icona di applicazione.',
  },
  {
    type: 'tip',
    title: 'Suggerimento per favicon nitide',
    html: 'Genera sempre il tuo ICO dalla sorgente a risoluzione più alta disponibile. Un WebP da 512×512 o superiore produrrà una favicon perfettamente nitida sui display Retina e 4K, dove le icone a bassa risoluzione appaiono sfocate.',
  },
  {
    type: 'title',
    text: 'Casi d\'uso e compatibilità',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Creazione del file favicon.ico per qualsiasi sito web o applicazione web.',
      'Generazione di icone di applicazione per programmi di installazione software Windows.',
      'Produzione di icone desktop per app Electron o framework simili.',
      'Creazione di set di icone per estensioni browser Chrome e Firefox.',
      'Conversione di loghi WebP di brand in icone per applicazioni aziendali.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusione',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Il tuo moderno flusso di lavoro di progettazione produce WebP; l\'ecosistema delle applicazioni richiede ancora l\'ICO. Questo strumento colma questo divario in pochi secondi, generando icone con la corretta struttura binaria e trasparenza intatta, senza che gli asset del tuo brand lascino mai il tuo browser.',
  },
];

export const content: WebpAIcoLocaleContent = {
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
    inLanguage: 'it',
    faq,
    howTo,
  }),
};
