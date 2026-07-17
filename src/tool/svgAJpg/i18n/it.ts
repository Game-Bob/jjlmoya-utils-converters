import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAJpgLocaleContent } from '../index';

const slug = 'convertitore-svg-in-jpg';
const title = 'Converti SVG in JPG Online e Gratis';
const description =
  'Converti file vettoriali SVG in JPG nel tuo browser. Rendering ad alta risoluzione 2x. Nessun caricamento di file. Gratuito e privato al 100%.';

const ui: ImageConverterUI = {
  dragText: 'Trascina i file SVG...',
  convertText: 'Per convertirli in JPG istantaneamente',
  selectFiles: 'Seleziona file',
  processedFiles: 'File elaborati',
  downloadAll: 'Scarica tutto (.zip)',
  pending: 'In attesa',
  bibliographyTitle: 'Riferimenti Bibliografici',
  faqTitle: 'Domande Frequenti',
};

const faq: SvgAJpgLocaleContent['faq'] = [
  {
    question: 'Perché convertire SVG in JPG?',
    answer:
      'Il formato JPG offre la massima compatibilità su tutti i tipi di dispositivi; convertire SVG in JPG è il modo migliore per assicurarsi che chiunque possa visualizzare il tuo design senza problemi di rendering.',
  },
  {
    question: 'Cosa succede alla trasparenza dell\'SVG?',
    answer:
      'Durante la conversione in JPG (che non supporta la trasparenza), uno sfondo bianco opaco verrà aggiunto automaticamente alla tua composizione vettoriale.',
  },
  {
    question: 'Quale risoluzione avrà il JPG risultante?',
    answer:
      'Lo strumento esegue il rendering dell\'SVG in scala doppia (2x) per garantire un\'alta risoluzione adatta agli schermi Retina e all\'uso professionale.',
  },
];

const howTo: SvgAJpgLocaleContent['howTo'] = [
  {
    name: 'Inserisci i tuoi file vettoriali',
    text: 'Trascina i tuoi file SVG nell\'area superiore per preparare l\'elenco di esportazione.',
  },
  {
    name: 'Rasterizzazione in JPG',
    text: 'Lo strumento convertirà i vettori in pixel ad alta risoluzione e genererà il tuo JPG istantaneamente.',
  },
  {
    name: 'Scarica i risultati',
    text: 'Ottieni i tuoi file JPG singolarmente o come pacchetto ZIP.',
  },
];

const seoArray: SvgAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertitore da SVG a JPG: Porta i tuoi vettori su qualsiasi piattaforma',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Il formato <strong>SVG</strong> è il linguaggio nativo del web moderno: leggero, scalabile, modificabile. Ma ci sono intere piattaforme che semplicemente non comprendono i vettori. Social media, client di posta elettronica, documenti Word, applicazioni di stampa e la stragrande maggioranza del software del mondo reale lavorano con immagini rasterizzate. Il <strong>JPG</strong> è il minimo comune denominatore universale: accettato ovunque, senza eccezioni, senza plugin e senza necessità di ulteriori conversioni.',
  },
  {
    type: 'title',
    text: 'SVG vs JPG: Quando il vettore deve diventare una foto',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'L\'SVG memorizza l\'immagine come istruzioni matematiche. Questa natura vettoriale lo rende perfetto per il web ma invisibile al mondo analogico e ai software legacy. Un file SVG inviato via e-mail può apparire come un testo XML incomprensibile nel client del destinatario. Un SVG allegato a un documento Word potrebbe non essere renderizzato affatto nelle versioni più vecchie di Office.',
  },
  {
    type: 'paragraph',
    html: 'Il JPG converte ogni immagine in una matrice di pixel con informazioni sul colore compresse dall\'algoritmo JPEG. Poiché non supporta un canale alfa, il convertitore unisce automaticamente lo sfondo con un bianco solido. In cambio, ottieni un file che si apre su <em>qualsiasi dispositivo del pianeta</em>: vecchi telefoni cellulari, stampanti, smart TV, app di editing di vent\'anni fa. È il formato del minimo comune denominatore e, in molti contesti, il più prezioso.',
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
          'Il tuo codice SVG (con dati di design proprietari) viaggia verso server esterni',
          'Rendering incoerente di font e sfumature',
          'Connessione Internet necessaria per ogni conversione',
          'Qualità dell\'output JPG non sempre configurabile',
        ],
      },
      {
        title: 'La Nostra Architettura Locale',
        description: 'Elaborazione diretta sul tuo hardware utilizzando la tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Zero byte del tuo SVG lasciano il browser',
          'Rendering fedele utilizzando il motore nativo del browser',
          'JPG a risoluzione 2x per la massima nitidezza',
          'Sfondo bianco applicato automaticamente come da standard JPG',
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
    html: 'Il file SVG viene caricato in un elemento <strong>Image</strong> del browser, che utilizza il proprio motore di rendering vettoriale per interpretare l\'XML. Il risultato visivo viene disegnato su un <strong>HTML5 Canvas</strong> con un preventivo riempimento di sfondo bianco (richiesto perché il formato JPG non supporta la trasparenza) in scala doppia per massimizzare la risoluzione dell\'output.',
  },
  {
    type: 'paragraph',
    html: 'Il metodo <code>toDataURL(\'image/jpeg\', 0.92)</code> converte i pixel del canvas in un file JPG di alta qualità. I colori dell\'SVG possono subire leggere variazioni a causa della conversione dello spazio colore nella compressione JPEG. È quindi consigliabile visualizzare in anteprima il risultato prima di utilizzarlo in lavori di stampa professionali dove la fedeltà cromatica è fondamentale.',
  },
  {
    type: 'tip',
    title: 'Suggerimento per l\'uso in stampa',
    html: 'Gli sfondi e le sfumature SVG possono apparire leggermente diversi in JPG a causa delle differenze dei profili colore nella compressione JPEG. Visualizza sempre l\'anteprima del risultato prima di inviarlo a una stampante o utilizzarlo in materiali di marketing stampati dove la precisione del colore del marchio è importante.',
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
      'Condividere loghi e illustrazioni SVG su Facebook, Twitter o LinkedIn.',
      'Allegare grafiche vettoriali nelle e-mail tramite Outlook o Gmail.',
      'Inserire design SVG in documenti Word, Excel o presentazioni.',
      'Pubblicare immagini prodotto su negozi online che non supportano SVG.',
      'Preparare file per servizi di stampa su richiesta.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusione',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Il mondo reale parla ancora in pixel. Questo strumento traduce i tuoi vettori SVG nel linguaggio universale del JPG in pochi secondi, con un rendering ad alta risoluzione e senza che i tuoi design proprietari lascino mai il tuo browser.',
  },
];


export const content: SvgAJpgLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo: seoArray,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'it', faq, howTo }),
};
