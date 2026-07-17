import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAWebpLocaleContent } from '../index';

const slug = 'convertitore-avif-a-webp';
const title = 'Convertire AVIF in WebP Online';
const description =
  'Converti le tue immagini AVIF in WebP con una migliore compatibilità. Elaborazione locale senza server. Gratuito, privato e illimitato.';

const ui: ImageConverterUI = {
  dragText: 'Trascina i file AVIF...',
  convertText: 'Per convertirli in WebP istantaneamente',
  selectFiles: 'Seleziona i file',
  processedFiles: 'File elaborati',
  downloadAll: 'Scarica tutto (.zip)',
  pending: 'In attesa',
  bibliographyTitle: 'Riferimenti Bibliografici',
  faqTitle: 'Domande Frequenti',
};

const faq: AvifAWebpLocaleContent['faq'] = [
  {
    question: 'Qual è la differenza reale tra la conversione in WebP e altri formati?',
    answer:
      'Il WebP offre il meglio di entrambi i mondi: compressioni sorprendenti come il JPG, ma conservando la capacità di ospitare trasparenze pulite come un PNG. Passare l\'AVIF a WebP massimizza la sua compatibilità per il web preservando tutti i suoi vantaggi.',
  },
  {
    question: 'Come riuscite a cambiare questo senza un server e in modo rapido?',
    answer:
      'Sfruttiamo i moduli di decodifica integrati e l\'oggetto Image di JavaScript HTML5, che consente di leggere l\'AVIF nella memoria locale ed estrarre un file WebP ottimizzato a tempo di record.',
  },
  {
    question: 'Il formato WebP è completamente compatibile oggi?',
    answer:
      'A differenza del nascente AVIF, il formato WebP gode di un supporto amplissimo tra i browser come Chrome, Firefox e Safari.',
  },
];

const howTo: AvifAWebpLocaleContent['howTo'] = [
  {
    name: 'Inserisci i tuoi file fotografici',
    text: 'Sposta e rilascia tutte le selezioni in formato AVIF sulla nostra area di lavoro.',
  },
  {
    name: 'Algoritmi di Conversione dei Byte',
    text: 'Il nostro motore elabora gli algoritmi senza caricare nulla e crea iterazioni esatte basate sul WebP compresso.',
  },
  {
    name: 'Accumula i tuoi Download Pronti',
    text: 'Fai clic sul pannello e ricevi i lotti in archivi ZIP o singoli per pubblicarli direttamente.',
  },
];

const seo: AvifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertitore AVIF a WebP: L\'Alternativa Moderna e Sicura per il Web',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'L\'AVIF è il formato di immagine più avanzato disponibile oggi: più piccolo del WebP, più piccolo del JPG, con una qualità visiva superiore. Tuttavia, la sua adozione è stata irregolare: Safari non lo ha supportato fino al 2024 e molti dispositivi mobili più vecchi non lo riconoscono. Il WebP, invece, è consolidato da anni come lo standard moderno del web con oltre il 95% di supporto globale. Convertire l\'AVIF in WebP è la decisione pragmatica quando hai bisogno di innovazione senza rischiare la compatibilità.',
  },
  {
    type: 'title',
    text: 'AVIF vs WebP: Il più nuovo vs Il più sicuro',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'L\'AVIF offre la compressione più avanzata disponibile, tipicamente il 20-30% più piccolo del WebP a parità di qualità. La sua tecnologia basata su AV1 è la più moderna del settore. Tuttavia, il supporto dell\'AVIF ha ancora dei punti ciechi: versioni precedenti di Safari, alcuni browser su versioni precedenti di Android e certi visualizzatori di immagini desktop non lo riconoscono. Per la produzione web con un pubblico ampio e diversificato, questo rappresenta un rischio.',
  },
  {
    type: 'paragraph',
    html: 'Il WebP ha una storia di supporto molto più solida. Chrome lo ha adottato nel 2010, seguiti da Firefox ed Edge, e Safari lo ha incorporato nel 2020. Con oltre il 95% di copertura globale nei browser, il WebP è la scelta sicura per qualsiasi sito web che non desideri offrire formati di riserva. Supporta trasparenze, compressione con e senza perdita di dati e ottiene file molto più piccoli del JPG o del PNG.',
  },
  {
    type: 'title',
    text: 'Confronto: Convertitori Cloud vs La Nostra Architettura Locale',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Convertitori Cloud',
        description: 'Strumenti che caricano i tuoi file AVIF su un server remoto per elaborarli.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Le tue immagini private viaggiano attraverso server esterni',
          'Latenza di rete che rallenta il flusso di lavoro',
          'Limiti di file per ogni conversione gratuita',
          'Dipendenza da servizi di terze parti che potrebbero cambiare',
        ],
      },
      {
        title: 'La Nostra Architettura Locale',
        description: 'Elaborazione diretta nel tuo browser tramite tecnologia Vanilla JS e Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Privacy totale: zero byte lasciano il tuo dispositivo',
          'Velocità istantanea senza dipendenza dalla rete',
          'Nessun limite di dimensioni né di numero di file',
          'Funziona senza connessione a Internet',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Come funziona la conversione tecnica nel browser',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Chrome, Firefox ed Edge includono decodificatori AVIF nativi. Caricando il file, il motore di immagini del browser lo decodifica in RAM mantenendo le informazioni del canale alfa. L\'immagine viene disegnata su un <code>Canvas</code> HTML5 invisibile utilizzando il contesto 2D, che conserva correttamente le trasparenze.',
  },
  {
    type: 'paragraph',
    html: 'L\'esportazione viene eseguita con <code>toBlob(\'image/webp\', quality)</code>. Il browser applica internamente l\'algoritmo di compressione WebP, generando un Blob che include il canale alfa se l\'immagine originale ne possedeva uno. Questo Blob viene trasformato in un link di download diretto. L\'intero processo avviene in pochi microsecondi senza alcuna comunicazione con server esterni.',
  },
  {
    type: 'tip',
    title: 'WebP: la scelta pragmatica dello sviluppatore moderno',
    html: 'Il WebP ha oltre il 95% di supporto nei browser: l\'AVIF sta crescendo ma non ha ancora raggiunto quella cifra. Per i siti in produzione senza rilevamento adattivo del formato, il WebP è la scelta sicura che copre quasi ogni tipo di pubblico. Converti i tuoi AVIF in WebP e offri immagini moderne con fiducia.',
  },
  {
    type: 'title',
    text: 'Casi d\'uso: quando scegliere il WebP rispetto all\'AVIF',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Siti web che necessitano di supporto nei browser dal 2020 senza polyfill.',
      'CDN e sistemi di distribuzione delle immagini che accettano WebP ma non AVIF.',
      'Applicazioni mobili ibride con WebViews che potrebbero non supportare l\'AVIF.',
      'Email HTML moderne dove il WebP ha un supporto maggiore dell\'AVIF.',
      'Piattaforme CMS ed e-commerce con supporto per immagini WebP consolidato.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusione: Modernità con compatibilità garantita',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'L\'AVIF è l\'avanguardia della compressione delle immagini, ma il WebP è la scelta affidabile e universale del moderno ecosistema web. Con il nostro strumento, passi dal formato più recente a quello più supportato in un istante, senza caricare nulla su alcun server, con privacy totale e senza limiti di dimensione.',
  },
];


export const content: AvifAWebpLocaleContent = {
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
