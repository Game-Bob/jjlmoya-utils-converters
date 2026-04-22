import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAWebpLocaleContent } from '../index';

const slug = 'convertitore-gif-in-webp';
const title = 'Converti GIF in WebP statico Online';
const description =
  'Converti GIF animate in WebP statico. Preserva la trasparenza. Nessun server necessario. Elaborazione locale nel tuo browser. Gratuito.';

const ui: ImageConverterUI = {
  dragText: 'Trascina i file GIF...',
  convertText: 'Per convertirli istantaneamente in WebP',
  selectFiles: 'Seleziona file',
  processedFiles: 'File elaborati',
  downloadAll: 'Scarica tutto (.zip)',
  pending: 'In attesa': 'Riferimenti Bibliografici',
  faqTitle: 'Domande Frequenti',
};

const faq: GifAWebpLocaleContent['faq'] = [
  {
    question: 'Perché congelare un file animato nel moderno formato statico WebP?',
    answer:
      'WebP è lo standard di compressione di Google; è incredibilmente leggero e mantiene la trasparenza in modo pulito. Passare da GIF a WebP elimina l\'animazione pesante e ottiene un guadagno abissale nella velocità del web.',
  },
  {
    question: 'L\'avatar originale rimarrà trasparente?',
    answer:
      'Sì, a differenza del JPEG, il contenitore WebP rispetta il complesso canale Alpha. Tutte le sue sagome rimarranno perfette come erano nativamente.',
  },
  {
    question: 'Dove verranno caricati i file?',
    answer:
      'Non c\'è alcun caricamento. L\'elaborazione è eseguita interamente dal Javascript del browser sul tuo PC, con zero invio remoto.',
  },
];

const howTo: GifAWebpLocaleContent['howTo'] = [
  {
    name: 'Lancia una valanga animata',
    text: 'Sposta e rilascia decine di meme nella zona delimitata senza connessione remota.',
  },
  {
    name: 'Assisti al grande cambiamento invisibile',
    text: 'Guarda un indicatore progressivo cambiare ogni millisecondo mentre il decoder canvas locale genera l\'output.',
  },
  {
    name: 'Salva il tuo arsenale di risultati puliti',
    text: 'Prendi i file estratti singolarmente o premi Scarica Zip per pacchettizzare tutto.',
  },
];

const seo: GifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertitore da GIF a WebP: Il sostituto moderno per animazioni pesanti',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Le GIF animate sono i dinosauri dei moderni contenuti web: consumano una larghezza di banda sproporzionata, peggiorano il PageSpeed di qualsiasi pagina e sono responsabili di una percentuale significativa del peso totale su migliaia di siti web. Una tipica GIF animata da 5 MB può diventare un\'animazione WebP sotto 1 MB con la stessa qualità visiva. WebP è il successore moderno che Google ha progettato specificamente per sostituire le GIF sul web.',
  },
  {
    type: 'title',
    text: 'GIF vs WebP: il divario tra il passato e il presente del web',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La GIF è un formato del 1987 non originariamente progettato per le animazioni: tale caratteristica è arrivata come un successivo "hack". La sua tavolozza di 256 colori, la compressione inefficiente e l\'incapacità di gestire l\'audio lo rendono un formato obsoleto. WebP, sviluppato da Google nel 2010, offre una compressione superiore sia lossy che lossless, supporto nativo per le animazioni e canale alpha completo.',
  },
  {
    type: 'paragraph',
    html: 'Per uno sviluppatore web, sostituire le GIF con WebP sulle pagine può significare un miglioramento del punteggio Google PageSpeed da 10 a 30 punti. Meno peso della pagina significa migliori Core Web Vitals, migliori posizionamenti SEO e minori costi di larghezza di banda sui server. Non è solo un miglioramento estetico: è una decisione di architettura tecnica.',
  },
  {
    type: 'title',
    text: 'Confronto Architettura: Locale vs Cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Convertitori Cloud',
        description: 'Piattaforme che elaborano le tue GIF su server remoti.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Le tue animazioni viaggiano su Internet verso server di terze parti',
          'Tempo di attesa dovuto alla latenza di rete durante il caricamento e lo scaricamento',
          'Limiti di dimensione (le GIF di grandi dimensioni vengono spesso rifiutate)',
          'Rischio di conservazione e analisi dei file',
        ],
      },
      {
        title: 'La nostra Architettura Locale',
        description: 'Elaborazione diretta sul tuo hardware utilizzando la tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'La GIF non lascia mai il tuo dispositivo',
          'Conversione istantanea senza attese di rete',
          'Nessun limite di dimensione: elabora GIF di qualsiasi peso',
          'Privacy totale: 0 byte inviati esternamente',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Come funziona la conversione locale da GIF a WebP',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La conversione locale utilizza l\'API HTML5 Canvas. La GIF viene caricata come un elemento Image nativo del browser. Disegnandola su un canvas, il motore grafico cattura il primo fotogramma dell\'animazione con tutte le sue informazioni sulla trasparenza. Il metodo <code>toDataURL(\'image/webp\')</code> esporta il fotogramma come WebP direttamente nella RAM.',
  },
  {
    type: 'paragraph',
    html: 'WebP supporta il canale alpha completo, quindi le trasparenze GIF vengono preservate nel WebP risultante senza necessità di aggiungere uno sfondo. Gli algoritmi di compressione WebP sono significativamente più efficienti di quelli GIF o PNG, il che spiega la drastica riduzione della dimensione del file finale.',
  },
  {
    type: 'tip',
    title: 'Miglioramento PageSpeed garantito',
    html: 'Una GIF animata da 5 MB può diventare un WebP sotto 1 MB. Se hai delle GIF sulle pagine del tuo sito web, sostituirle con WebP può migliorare immediatamente il tuo Largest Contentful Paint (LCP) e il Total Blocking Time (TBT), influenzando direttamente i posizionamenti SEO.',
  },
  {
    type: 'title',
    text: 'Casi d\'uso e compatibilità del WebP risultante',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Sostituzione delle GIF sulle pagine web per migliorare i punteggi PageSpeed.',
      'Avatar e sticker ottimizzati per Discord, Slack e piattaforme moderne.',
      'Banner e visual per campagne di digital marketing.',
      'Animazioni in applicazioni web progressive (PWA).',
      'Compatibile con Chrome, Edge, Firefox, Safari 14+ e tutti i browser moderni.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusione: migra le tue GIF nel 21° secolo',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Ogni GIF sul tuo sito web è un\'opportunità di ottimizzazione persa. Il nostro strumento converte le GIF in WebP all\'istante, in modo privato e senza limiti, direttamente nel tuo browser. Il risultato: file fino a 5 volte più piccoli, trasparenza perfetta e compatibilità con tutti i browser moderni.',
  },
];


export const content: GifAWebpLocaleContent = {
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
