import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAPngLocaleContent } from '../index';

const slug = 'convertitore-bmp-a-png';
const title = 'Convertitore da BMP a PNG';
const description =
  'Converti le immagini BMP in PNG senza perdita di qualità. Compressione moderna senza artefatti. Senza caricare file su server. Gratuito e privato al 100%.';

const ui: ImageConverterUI = {
  dragText: 'Trascina i file BMP...',
  convertText: 'Per convertirli in PNG istantaneamente',
  selectFiles: 'Seleziona i file',
  processedFiles: 'File elaborati',
  downloadAll: 'Scarica tutto (.zip)',
  pending: 'In attesa': 'Riferimenti Bibliografici',
  faqTitle: 'Domande Frequenti',
};

const faq: BmpAPngLocaleContent['faq'] = [
  {
    question: 'Qual è la principale differenza tra BMP e PNG?',
    answer:
      'Sia BMP che PNG sono formati senza perdita di dati. La differenza risiede nell\'ottimizzazione: il PNG supporta moderni algoritmi di compressione per salvare la stessa immagine occupando 5 o 10 volte meno memoria rispetto al BMP.',
  },
  {
    question: 'La conversione è davvero privata?',
    answer:
      'Sì. Tutta l\'elaborazione fotografica viene eseguita dal tuo computer. Assolutamente nessuno accede ai tuoi file durante il trasferimento locale.',
  },
  {
    question: 'Perché scegliere il PNG rispetto al JPEG in questo caso?',
    answer:
      'Se possiedi un file BMP, è perché l\'immagine ha colori precisi. Passare un BMP allo standard distruttivo JPG degraderebbe i tuoi colori netti. Il PNG preserva tale fedeltà.',
  },
];

const howTo: BmpAPngLocaleContent['howTo'] = [
  {
    name: 'Inserisci la tua Fotografia',
    text: 'Trascina tranquillamente i file BMP di origine nella nostra area dedicata al rilascio di elementi web.',
  },
  {
    name: 'Conversione senza Trasmissione di Rete',
    text: 'Visualizza in appena un secondo l\'elaborazione pulita eseguita localmente tramite JS HTML5.',
  },
  {
    name: 'Ottieni PNG Puri',
    text: 'Scarica le repliche in PNG singolarmente o tramite un pacchetto compresso.',
  },
];

const seo: BmpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertitore da BMP a PNG: La Sostituzione Senza Perdita del Formato BMP',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Il BMP è un formato senza compressione che occupa enormi quantità di spazio senza alcun vantaggio tecnico rispetto al PNG. Entrambi sono formati lossless: salvano ogni pixel con assoluta esattezza. Tuttavia, il PNG aggiunge la compressione senza perdita tramite l\'algoritmo Deflate, riducendo le dimensioni del file da 3 a 5 volte senza sacrificare un singolo bit di informazioni visive. Il PNG è, in sostanza, ciò che il BMP ha sempre desiderato essere.',
  },
  {
    type: 'title',
    text: 'BMP vs PNG: stessa qualità, dimensioni radicalmente diverse',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La differenza fondamentale tra BMP e PNG non risiede nella qualità dell\'immagine — entrambi sono senza perdita — ma nell\'efficienza di archiviazione. Il BMP memorizza i pixel grezzi: senza compressione, senza ottimizzazione, senza considerare lo spazio. Il PNG analizza i pattern di pixel ripetuti e li codifica in modo compatto tramite Deflate, lo stesso algoritmo utilizzato dallo ZIP.',
  },
  {
    type: 'paragraph',
    html: 'Oltre alla compressione superiore, il PNG aggiunge una caratteristica che il BMP non ha mai avuto: il canale alfa completo per le trasparenze. Screenshot, grafica d\'interfaccia, loghi, diagrammi tecnici: tutti questi tipi di immagini traggono enorme vantaggio dalla conversione in PNG, che mantiene ogni valore di colore esatto riducendo al contempo il peso del file a una frazione dell\'originale.',
  },
  {
    type: 'title',
    text: 'Confronto di Architettura: Locale vs Cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Convertitori Cloud',
        description: 'Servizi che elaborano i tuoi file BMP su server di terze parti.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Le tue immagini di lavoro viaggiano su Internet',
          'Tempo di attesa proporzionale alle dimensioni del BMP',
          'Limiti di dimensione nei piani gratuiti',
          'Rischio di analisi o conservazione dei tuoi file',
        ],
      },
      {
        title: 'La Nostra Architettura Locale',
        description: 'Elaborazione diretta sul tuo hardware tramite tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Il BMP viene elaborato localmente, non lascia mai il tuo dispositivo',
          'Conversione istantanea in millisecondi',
          'Senza limiti di dimensioni o numero di file',
          'Privacy totale: 0 byte inviati all\'esterno',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Come funziona la conversione locale da BMP a PNG',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Il processo utilizza l\'API Canvas di HTML5. Il file BMP viene letto tramite l\'API <code>FileReader</code> del browser e decodificato come Blob in memoria. Tale Blob viene disegnato su un canvas HTML5 invisibile. Successivamente, il metodo <code>toDataURL(\'image/png\')</code> applica l\'algoritmo di compressione PNG nativo del browser e genera il file risultante.',
  },
  {
    type: 'paragraph',
    html: 'A differenza della conversione in JPG, la conversione in PNG è completamente lossless: ogni valore di colore del BMP originale viene preservato esattamente nel PNG risultante. Non ci sono artefatti, non c\'è ammorbidimento dei bordi, nessuna perdita di informazioni. Il file finale è visivamente identico al BMP ma occupa da 3 a 5 volte meno spazio su disco.',
  },
  {
    type: 'paragraph',
    html: 'Se lavori con software datati che esportano in BMP (macchinari industriali, sistemi di controllo, software di diagnostica medica), convertire in PNG è la scelta migliore. Il PNG è compatibile con assolutamente tutti i programmi moderni, mantiene la perfetta fedeltà cromatica e occupa fino a 5 volte meno spazio. È la migrazione più semplice e sicura possibile.',
  },
  {
    type: 'title',
    text: 'Casi d\'uso e compatibilità del PNG risultante',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Screenshot e grafica d\'interfaccia con colori esatti preservati.',
      'Immagini di documentazione tecnica e diagrammi software.',
      'Esportazioni da CAD, sistemi industriali e software legacy.',
      'Loghi ed elementi di identità visiva con trasparenza aggiunta.',
      'Compatibile con Adobe Photoshop, GIMP, Figma e tutti i moderni editor.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusione: il PNG è ciò che il BMP avrebbe sempre dovuto essere',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Convertire BMP in PNG è la modernizzazione più naturale di un file immagine: stessa qualità lossless, maggiore compatibilità, supporto della trasparenza e peso da 3 a 5 volte inferiore. Il nostro strumento esegue questa conversione in millisecondi, direttamente nel tuo browser, senza caricare alcun file su alcun server.',
  },
];


export const content: BmpAPngLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'it', faq, howTo }),
};
