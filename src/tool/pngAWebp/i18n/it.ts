import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAWebpLocaleContent } from '../index';

const slug = 'convertitore-png-in-webp';
const title = 'Converti PNG in WebP Online e Gratis';
const description =
  'Converti immagini PNG in WebP nel tuo browser. Fino al 40% di dimensioni del file in meno. Preserva la trasparenza. Nessun caricamento di file. Gratuito e privato.';

const ui: ImageConverterUI = {
  dragText: 'Trascina i file PNG...',
  convertText: 'Per convertirli in WebP istantaneamente',
  selectFiles: 'Seleziona file',
  processedFiles: 'File elaborati',
  downloadAll: 'Scarica tutto (.zip)',
  pending: 'In attesa',
  bibliographyTitle: 'Riferimenti Bibliografici',
  faqTitle: 'Domande Frequenti',
};

const faq: PngAWebpLocaleContent['faq'] = [
  {
    question: 'Perché convertire PNG in WebP?',
    answer:
      'WebP offre una compressione migliore fino al 40% rispetto al PNG a parità di qualità, supportando al contempo la trasparenza Alpha. È il formato consigliato da Google PageSpeed Insights.',
  },
  {
    question: 'La trasparenza va persa nel processo?',
    answer:
      'No. L\'implementazione tecnica di WebP supporta il canale alfa. Le trasparenze del PNG originale saranno preservate nel nuovo file WebP.',
  },
  {
    question: 'Le mie immagini finiscono su qualche server?',
    answer:
      'No. Il codice viene eseguito esclusivamente nel tuo browser (lato client). Non vediamo, registriamo o salviamo mai le immagini che converti.',
  },
];

const howTo: PngAWebpLocaleContent['howTo'] = [
  {
    name: 'Inserisci i tuoi PNG',
    text: 'Trascina i tuoi file PNG nell\'area di caricamento o usa il classico selettore interattivo.',
  },
  {
    name: 'Rilevamento del canale',
    text: 'Il motore di rendering locale rileverà ed esporterà la composizione dei pixel nel formato WebP ottimizzato.',
  },
  {
    name: 'Download diretto',
    text: 'Scarica i tuoi file WebP altamente compressi individualmente o raggruppali insieme usando il convertitore ZIP.',
  },
];

const seo: PngAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertitore da PNG a WebP: Trasparenza e compressione moderna per il web',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Il <strong>PNG</strong> è stato per decenni il formato di riferimento per le immagini web con trasparenza: loghi, icone, elementi UI, immagini di prodotti su sfondi scontornati. Il suo problema sono le dimensioni del file: la compressione senza perdita che garantisce la qualità genera anche file notevolmente pesanti. Il <strong>WebP</strong> di Google risolve questa contraddizione: supporta il canale alfa (trasparenza) <em>e</em> comprime molto meglio del PNG, rendendo il passaggio da PNG a WebP sul tuo sito un\'ottimizzazione perfetta che non sacrifica nulla.',
  },
  {
    type: 'title',
    text: 'PNG o WebP? Quando utilizzare ciascun formato',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Il <strong>PNG</strong> rimane il formato giusto quando la compatibilità è fondamentale: strumenti di progettazione come Photoshop o Figma, flussi di lavoro di stampa, applicazioni desktop legacy o qualsiasi contesto in cui il supporto WebP non è garantito. È anche il formato ideale per salvare i livelli di lavoro nelle pipeline di editing, poiché la sua compressione senza perdita preserva ogni pixel. Il costo: file che possono pesare 3-8 volte più dei loro equivalenti WebP.',
  },
  {
    type: 'paragraph',
    html: 'Il <strong>WebP</strong> è il sostituto naturale del PNG per tutti i moderni contenuti web. Chrome, Firefox, Safari ed Edge lo supportano tutti nativamente. Un\'immagine WebP senza perdita è più piccola del 26% rispetto al PNG equivalente; in modalità lossy può essere fino al 40% più piccola con una qualità visiva praticamente indistinguibile. E fondamentale per il web design: <strong>WebP preserva la trasparenza alfa</strong> esattamente come il PNG, senza compromessi visivi.',
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
          'Latenza di rete durante il caricamento e il download',
          'I tuoi loghi e immagini memorizzati su server di terze parti',
          'Limiti di dimensione dei file e tetti di conversione giornalieri',
          'Annunci intrusivi e tracker di terze parti',
        ],
      },
      {
        title: 'La Nostra Architettura Locale',
        description: 'Elaborazione diretta sul tuo hardware utilizzando la tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Velocità istantanea - latenza di rete zero',
          'Privacy completa - 0 byte inviati esternamente',
          'Nessun limite di MB o restrizioni sul numero di file',
          'Interfaccia pulita, senza pubblicità o tracciamento',
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
    html: 'Il PNG viene caricato localmente e decodificato in un <strong>HTML5 Canvas</strong> in memoria. L\'API Canvas preserva il canale alfa del PNG originale: tutti i pixel trasparenti e semitrasparenti vengono mantenuti intatti nel buffer di pixel RGBA. Il canvas viene quindi esportato chiamando <code>toDataURL(\'image/webp\')</code>, che applica il codec WebP del browser (basato sulla libreria libwebp di Google) per generare un file più compatto senza alterare i dati di trasparenza.',
  },
  {
    type: 'paragraph',
    html: 'WebP utilizza due modalità di compressione: modalità senza perdita per immagini in cui ogni pixel deve essere esattamente fedele all\'originale, e modalità con perdita per foto ed elementi in cui piccole differenze sono impercettibili. La modalità senza perdita produce file più piccoli del 26% rispetto al PNG; la modalità con perdita può ottenere riduzioni fino al 40% rispetto al PNG mantenendo un\'eccellente qualità visiva.',
  },
  {
    type: 'tip',
    title: 'Suggerimento: WebP batte sia PNG che JPG sul web',
    html: 'Il WebP in modalità senza perdita è più piccolo del PNG. Il WebP in modalità con perdita è più piccolo del JPG. Questo rende il WebP l\'<strong>unico formato che sostituisce entrambi</strong> nel contesto web. Converti i tuoi PNG trasparenti in WebP prima di caricarli: Google PageSpeed Insights lo rileva e lo valuta positivamente negli audit "Distribuisci immagini in formati moderni".',
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
      'Loghi e icone con sfondi trasparenti per siti web e app.',
      'Immagini prodotto con sfondi scontornati nei negozi e-commerce.',
      'Sprite CSS ed elementi UI con trasparenza alfa.',
      'Illustrazioni rasterizzate e grafica vettoriale per landing page.',
      'Miniature di articoli con sfondi trasparenti in blog e portali di notizie.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusione',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Il passaggio da PNG a WebP è l\'ottimizzazione delle immagini web più completa disponibile: ottieni file più leggeri, preservi la trasparenza e migliori le metriche dei Core Web Vitals senza cambiare nulla del tuo design visivo. Questo strumento lo fa istantaneamente, gratuitamente e in modo completamente privato: le tue immagini vengono elaborate nel tuo browser e non viaggiano mai verso alcun server esterno.',
  },
];


export const content: PngAWebpLocaleContent = {
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
