import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAJpgLocaleContent } from '../index';

const slug = 'convertitore-avif-a-jpg';
const title = 'Convertire AVIF in JPG Online';
const description =
  'Converti le tue immagini AVIF in JPG nel tuo browser. Senza server. Elaborazione locale al 100% privata. Gratuito e illimitato.';

const ui: ImageConverterUI = {
  dragText: 'Trascina i file AVIF...',
  convertText: 'Per convertirli in JPG istantaneamente',
  selectFiles: 'Seleziona i file',
  processedFiles: 'File elaborati',
  downloadAll: 'Scarica tutto (.zip)',
  pending: 'In attesa': 'Riferimenti Bibliografici',
  faqTitle: 'Domande Frequenti',
};

const faq: AvifAJpgLocaleContent['faq'] = [
  {
    question: 'Perché convertire AVIF in JPG?',
    answer:
      'Il formato AVIF offre una compressione superiore, ma non tutti i programmi o visualizzatori lo supportano. Convertirlo in JPG assicura che l\'immagine possa essere vista sul 100% dei dispositivi nel mondo.',
  },
  {
    question: 'Come proteggiamo le tue immagini AVIF?',
    answer:
      'Le tue foto non lasciano mai il tuo cellulare o PC. Tutto il processo di disegno e codifica in JPEG viene eseguito nell\'ambiente Javascript del tuo browser.',
  },
  {
    question: 'Perderò qualità passando da AVIF a JPG?',
    answer:
      'Il nostro strumento elabora i pixel con una qualità standard di Canvas (da 0,9 a 0,95), facendo sì che i cambiamenti siano appena percettibili.',
  },
];

const howTo: AvifAJpgLocaleContent['howTo'] = [
  {
    name: 'Trascina i file o clicca',
    text: 'Sposta tutte le fotografie AVIF che desideri convertire nell\'area di elaborazione delimitata.',
  },
  {
    name: 'Trasformazione Istantanea',
    text: 'Osserva in meno di un secondo come l\'AVIF viene ricodificato in JPG eliminando eventuali canali alfa con uno sfondo solido.',
  },
  {
    name: 'Salva o Scarica lo ZIP',
    text: 'Scarica le tue nuove immagini JPG individualmente o premendo "Scarica tutto" se hai elaborato in batch.',
  },
];

const seo: AvifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertitore AVIF a JPG: Compatibilità Universale per le Tue Immagini Moderne',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'L\'AVIF (AV1 Image File Format) è il formato immagine più efficiente disponibile oggi. Sviluppato da Alliance for Open Media e basato sul codec video AV1, offre una compressione superiore del 50% rispetto al JPG a parità di qualità visiva. Tuttavia, questo vantaggio tecnico ha un prezzo: l\'AVIF non è supportato da Photoshop, Lightroom, Visualizzatore foto di Windows, né dalla maggior parte degli strumenti di editing e visualizzazione tradizionali. Convertire in JPG risolve questo problema alla radice.',
  },
  {
    type: 'title',
    text: 'AVIF vs JPG: Efficienza contro Compatibilità Universale',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'L\'AVIF comprime in modo straordinario: una foto ad alta risoluzione che in JPG occupa 4 MB può pesare appena 2 MB in AVIF mantenendo la stessa qualità percepita. Questo lo rende perfetto per la distribuzione web dove le prestazioni di caricamento sono critiche. Tuttavia, al di fuori del browser, l\'AVIF è praticamente invisibile: né Esplora file di Windows lo visualizza in anteprima, né le fotocamere lo esportano, né i designer lo ricevono con favore nei loro flussi di lavoro.',
  },
  {
    type: 'paragraph',
    html: 'Il JPG è da oltre 30 anni lo standard universale della fotografia digitale. È supportato dal 100% dei dispositivi, sistemi operativi, applicazioni per ufficio, social network, stampanti e qualsiasi software che abbia mai visualizzato un\'immagine. Quando hai bisogno di condividere, stampare, modificare o inviare via email, il JPG è la garanzia che tutto funzionerà senza problemi.',
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
          'Le tue foto private viaggiano su Internet verso server esterni',
          'Tempi di attesa per il caricamento e lo scaricamento del file',
          'Limiti di dimensione e numero di conversioni gratuite',
          'Rischio di conservazione delle immagini su server di terze parti',
        ],
      },
      {
        title: 'La Nostra Architettura Locale',
        description: 'Elaborazione diretta nel tuo browser tramite tecnologia Vanilla JS e Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Le tue immagini non lasciano mai il tuo dispositivo',
          'Conversione istantanea senza latenza di rete',
          'Senza limiti di file né di dimensioni',
          'Adatto per immagini mediche, legali o riservate',
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
    html: 'I browser moderni come Chrome, Firefox ed Edge includono il supporto nativo per l\'AVIF grazie ai loro decodificatori AV1 integrati. Quando carichi un file AVIF, il browser lo decodifica in memoria e lo converte in una rappresentazione bitmap nella RAM. Questa rappresentazione viene disegnata su un elemento <code>Canvas</code> HTML5 invisibile.',
  },
  {
    type: 'paragraph',
    html: 'Successivamente, il Canvas esporta l\'immagine usando <code>toBlob(\'image/jpeg\', quality)</code>, applicando la compressione JPG standard. Dato che il JPG non supporta le trasparenze, qualsiasi canale alfa presente nell\'AVIF viene riempito con uno sfondo bianco prima dell\'esportazione. Il risultato è un file JPG di alta qualità pronto per il download diretto, senza che alcun byte abbia lasciato il tuo browser.',
  },
  {
    type: 'tip',
    title: 'L\'equilibrio perfetto tra compressione e compatibilità',
    html: 'L\'AVIF è più piccolo del 50% rispetto al JPG a parità di qualità — ma il JPG ha una compatibilità del 100% con qualsiasi software. Se ricevi immagini AVIF dal server e hai bisogno di modificarle, inviarle via email o aprirle in strumenti desktop, convertile prima in JPG.',
  },
  {
    type: 'title',
    text: 'Casi d\'uso: quando convertire AVIF a JPG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Modificare in Photoshop, Lightroom, GIMP o altro software desktop.',
      'Condividere immagini con utenti su dispositivi o sistemi operativi vecchi.',
      'Allegare nelle email per garantire la visualizzazione in qualsiasi client di posta.',
      'Pubblicare su piattaforme che non accettano l\'AVIF come formato di caricamento.',
      'Stampare: i servizi di stampa professionale lavorano con il JPG in modo nativo.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusione: La compatibilità universale in un solo passaggio',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'L\'AVIF è il futuro della compressione delle immagini, ma il presente esige compatibilità. Il nostro convertitore ti permette di ottenere il meglio da entrambi i mondi: ricevi e memorizza immagini in AVIF per la massima efficienza, e convertile in JPG istantaneamente quando hai bisogno che funzionino in qualsiasi contesto. Tutto in modo privato, gratuito e senza limiti.',
  },
];


export const content: AvifAJpgLocaleContent = {
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
