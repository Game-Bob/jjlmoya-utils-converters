import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAPngLocaleContent } from '../index';

const slug = 'convertitore-avif-a-png';
const title = 'Convertire AVIF in PNG Online';
const description =
  'Converti le tue immagini AVIF in PNG preservando le trasparenze. Senza caricare file. Elaborazione locale nel tuo browser. Gratuito e illimitato.';

const ui: ImageConverterUI = {
  dragText: 'Trascina i file AVIF...',
  convertText: 'Per convertirli in PNG istantaneamente',
  selectFiles: 'Seleziona i file',
  processedFiles: 'File elaborati',
  downloadAll: 'Scarica tutto (.zip)',
  pending: 'In attesa': 'Riferimenti Bibliografici',
  faqTitle: 'Domande Frequenti',
};

const faq: AvifAPngLocaleContent['faq'] = [
  {
    question: 'Perché dovrei convertire AVIF in PNG?',
    answer:
      'L\'AVIF è ottimo per la compressione, ma la sua compatibilità è limitata nei browser meno recenti e negli editor classici. Convertendo l\'AVIF in PNG, ti assicuri che il tuo file manterrà la trasparenza originale e tutte le applicazioni potranno aprirlo.',
  },
  {
    question: 'Le trasparenze del file AVIF originale vengono mantenute?',
    answer:
      'Sì. A differenza del JPG che elimina lo sfondo trasparente, esportando in PNG il nostro convertitore mantiene intatto il canale alfa.',
  },
  {
    question: 'È vero che le mie immagini non vengono caricate su Internet?',
    answer:
      'Assolutamente vero. Il nostro convertitore viene eseguito al 100% localmente sul tuo dispositivo utilizzando il motore JavaScript interno.',
  },
];

const howTo: AvifAPngLocaleContent['howTo'] = [
  {
    name: 'Aggiungi i tuoi file AVIF',
    text: 'Puoi trascinarli direttamente nell\'area delimitata o utilizzare il pulsante per esplorare le cartelle del tuo computer.',
  },
  {
    name: 'Elaborazione immediata',
    text: 'Lascia che il processore HTML5 esegua il rendering dell\'immagine; il formato cambierà automaticamente in PNG in pochi microsecondi.',
  },
  {
    name: 'Ottieni i tuoi PNG',
    text: 'Scarica le immagini convertite una ad una o scarica un blocco completo tramite il pulsante ZIP.',
  },
];

const seo: AvifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertitore AVIF a PNG: Dal Web Editing alla Progettazione Professionale',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'L\'AVIF è il formato ideale per servire immagini sul web: piccolo, efficiente e di alta qualità. Ma quando arriva il momento di modificare, ritoccare o lavorare con quelle immagini in strumenti di progettazione, l\'AVIF diventa un ostacolo. Figma, Photoshop, Illustrator, Sketch e praticamente qualsiasi strumento di progettazione professionale si aspettano di ricevere PNG per il lavoro con trasparenze e l\'editing senza perdita. Convertire l\'AVIF in PNG è il ponte tra il mondo della distribuzione web e quello dell\'editing creativo.',
  },
  {
    type: 'title',
    text: 'AVIF vs PNG: Distribuzione vs Editing',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'L\'AVIF eccelle come formato di distribuzione: file piccoli, caricamento rapido, supporto del canale alfa e qualità visiva eccezionale. Tuttavia, il suo ecosistema di strumenti è limitato. La maggior parte dei software di progettazione non può importare l\'AVIF direttamente, interrompendo i flussi di lavoro creativi. Provare ad aprire un AVIF in Figma o importarlo come livello in Photoshop semplicemente non funziona.',
  },
  {
    type: 'paragraph',
    html: 'Il PNG è il formato nativo della progettazione digitale. Con compressione senza perdita, supporto completo del canale alfa e compatibilità universale con tutti gli strumenti creativi, il PNG è il formato di lavoro per eccellenza. Quando hai bisogno di scalare, ritoccare, esportare in più formati o lavorare a livelli, il PNG garantisce che non perderai alcun dettaglio o pixel nel processo.',
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
          'Le tue immagini di progettazione viaggiano verso server di terze parti',
          'Tempi di attesa dovuti alla latenza di rete',
          'Possibile perdita o alterazione del canale alfa',
          'Limiti di dimensione che complicano la conversione in batch',
        ],
      },
      {
        title: 'La Nostra Architettura Locale',
        description: 'Elaborazione diretta nel tuo browser tramite tecnologia Vanilla JS e Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Canale alfa preservato con fedeltà perfetta',
          'Conversione istantanea senza trasferimento di dati',
          'Senza limiti di file, dimensioni o batch',
          'Privacy totale per asset di progettazione proprietari',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Come funziona la conversione tecnica con le trasparenze',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'I browser moderni decodificano l\'AVIF in modo nativo grazie ai loro motori AV1 integrati. Caricando il file, il browser lo decodifica in memoria preservando tutte le informazioni del canale alfa. L\'immagine decodificata, incluse le sue trasparenze, viene disegnata su un elemento <code>Canvas</code> HTML5 con la modalità di composizione corretta per preservare il canale alfa.',
  },
  {
    type: 'paragraph',
    html: 'A differenza dell\'esportazione in JPG (che distrugge le trasparenze riempiendo con il bianco), l\'esportazione in PNG tramite <code>toBlob(\'image/png\')</code> preserva integralmente il canale alfa. Il risultato è un PNG con compressione senza perdita che mantiene ogni pixel, ogni semitrasparenza e ogni dettaglio dell\'AVIF originale.',
  },
  {
    type: 'tip',
    title: 'Il passaggio obbligatorio per qualsiasi strumento di progettazione',
    html: 'Converti i tuoi AVIF in PNG prima di importarli in Figma, Photoshop, Illustrator o qualsiasi strumento di progettazione. Queste applicazioni non leggono l\'AVIF direttamente, ma il PNG funziona in modo nativo in tutte, preservando perfettamente trasparenze e qualità.',
  },
  {
    type: 'title',
    text: 'Casi d\'uso: quando hai bisogno dell\'AVIF convertito in PNG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Importazione in Figma, Sketch, Adobe XD o altri strumenti di progettazione UI.',
      'Editing come livello in Photoshop, Affinity Photo o GIMP preservando le trasparenze.',
      'Utilizzo come sorgente per la generazione di icone o sprite.',
      'Invio a clienti o collaboratori che lavorano con software di progettazione standard.',
      'Archiviazione di immagini con trasparenze in formato di editing senza perdita.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusione: Il ponte tra il web e la progettazione',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF e PNG sono compagni perfetti in un flusso di lavoro moderno: AVIF per la distribuzione efficiente sul web, PNG per l\'editing e la collaborazione negli strumenti di progettazione. Con il nostro convertitore, il passaggio dall\'uno all\'altro è istantaneo, privato e preserva ogni dettaglio: esattamente ciò di cui hai bisogno quando i tuoi asset visivi sono importanti.',
  },
];


export const content: AvifAPngLocaleContent = {
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
