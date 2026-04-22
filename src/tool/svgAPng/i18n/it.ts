import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAPngLocaleContent } from '../index';

const slug = 'convertitore-svg-in-png';
const title = 'Converti SVG in PNG Online e Gratis';
const description =
  'Converti file vettoriali SVG in PNG nel tuo browser. Output HD in scala doppia. Mantiene la trasparenza. Gratuito e privato al 100%.';

const ui: ImageConverterUI = {
  dragText: 'Trascina i file SVG...',
  convertText: 'Per convertirli in PNG istantaneamente',
  selectFiles: 'Seleziona file',
  processedFiles: 'File elaborati',
  downloadAll: 'Scarica tutto (.zip)',
  pending: 'In attesa': 'Riferimenti Bibliografici',
  faqTitle: 'Domande Frequenti',
};

const faq: SvgAPngLocaleContent['faq'] = [
  {
    question: 'Perché convertire i file SVG in PNG?',
    answer:
      'Il formato SVG è basato su vettori e ideale per i loghi, ma a volte è necessario il formato PNG rasterizzato per l\'uso in applicazioni che non supportano i vettori, o per condividerli tramite app di messaggistica o social media.',
  },
  {
    question: 'Posso scegliere la dimensione dell\'output?',
    answer:
      'Attualmente raddoppiamo la scala dell\'SVG sorgente in modo che l\'output PNG sia nitido e adatto agli schermi Retina o 4K.',
  },
  {
    question: 'Le trasparenze dell\'SVG vengono mantenute?',
    answer:
      'Sì, il PNG risultante preserva il canale alfa dell\'SVG originale, mantenendo intatti tutti gli sfondi trasparenti.',
  },
];

const howTo: SvgAPngLocaleContent['howTo'] = [
  {
    name: 'Inserisci i tuoi file SVG',
    text: 'Rilascia i tuoi file SVG o trascinali direttamente nell\'area superiore.',
  },
  {
    name: 'Generazione PNG HD',
    text: 'In pochi millisecondi il nostro motore locale ricreerà ogni vettore come un livello di pixel HD in formato PNG trasparente.',
  },
  {
    name: 'Scarica i file',
    text: 'Salva i PNG generati singolarmente o come pacchetto ZIP.',
  },
];

const seo: SvgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertitore da SVG a PNG: Dal vettore infinito al raster universale',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>SVG</strong> (Scalable Vector Graphics) è la scelta perfetta per il web design: infinitamente scalabile, leggero e modificabile con qualsiasi editor di codice. Ma quando devi usare quel logo o quell\'icona in un\'app mobile, condividerla sui social media o inserirla in una presentazione PowerPoint, ti scontri con un muro: la maggior parte di queste piattaforme non supporta l\'SVG. Il formato <strong>PNG</strong> è la soluzione universale: rasterizzato, con un canale alfa e compatibile in assolutamente ogni contesto.',
  },
  {
    type: 'title',
    text: 'SVG vs PNG: Vettori per il Web, Raster per il Mondo',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'L\'SVG memorizza l\'immagine come istruzioni matematiche: una curva di Bézier, una sfumatura, un poligono. Ciò significa che lo stesso file appare perfetto a 16px o 16.000px. È il formato ideale per il tuo codice web, le animazioni CSS e qualsiasi elemento che debba adattarsi a diverse risoluzioni dello schermo senza alcuna perdita di qualità.',
  },
  {
    type: 'paragraph',
    html: 'Il PNG memorizza l\'immagine come una griglia di pixel con informazioni sul colore e sulla trasparenza per ogni pixel. È un formato <strong>lossless</strong> (senza perdita), il che significa che la qualità viene preservata interamente. Una volta che un SVG è rasterizzato in PNG, la risoluzione è fissa. Ecco perché scegliere la giusta dimensione di esportazione è fondamentale: il nostro strumento esegue il rendering in scala doppia (2x) per garantire la nitidezza sugli schermi Retina e 4K.',
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
          'Il tuo codice SVG viaggia verso server esterni',
          'Rendering remoto con qualità inconsistente',
          'Tempo di attesa per il caricamento e l\'elaborazione',
          'Limitazioni sulla dimensione del file SVG',
        ],
      },
      {
        title: 'La Nostra Architettura Locale',
        description: 'Elaborazione diretta sul tuo hardware utilizzando la tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Il tuo SVG non lascia mai il tuo browser',
          'Rendering del motore nativo del browser per la massima fedeltà',
          'PNG a risoluzione 2x per schermi ad alta densità',
          'Trasparenza preservata con canale alfa completo',
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
    html: 'Il processo inizia caricando il file SVG in un elemento JavaScript <strong>Image</strong>. Una volta che il motore del browser ha analizzato e renderizzato l\'XML vettoriale, l\'immagine risultante viene disegnata su un <strong>HTML5 Canvas</strong> le cui dimensioni sono doppie rispetto alla dimensione SVG originale (scala 2x). Questo produce un PNG con il doppio dei pixel per dimensione, ideale per gli schermi ad alta risoluzione.',
  },
  {
    type: 'paragraph',
    html: 'A differenza della conversione in JPG, quando si esporta in PNG il canvas mantiene il canale alfa completo: le aree trasparenti nell\'SVG originale diventano pixel completamente trasparenti nel PNG risultante — nessuna colorazione di sfondo bianca. L\'esportazione utilizza il metodo <code>toDataURL(\'image/png\')</code> con compressione senza perdita.',
  },
  {
    type: 'tip',
    title: 'Suggerimento prima della rasterizzazione',
    html: 'Scegli attentamente la dimensione di esportazione del PNG — rasterizzare un SVG è un processo a senso unico: non puoi recuperare i vettori dal PNG risultante. Mantieni sempre l\'SVG originale come sorgente master e genera i PNG alla massima risoluzione di cui potresti aver bisogno.',
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
      'Esportazione di loghi vettoriali per presentazioni PowerPoint o Google Slides.',
      'Creazione di icone PNG per iOS, Android o Progressive Web Apps.',
      'Condivisione di design SVG su Instagram, LinkedIn o altri social media.',
      'Inserimento di illustrazioni vettoriali in documenti Word o PDF.',
      'Generazione di miniature PNG di grafiche SVG per l\'anteprima nel CMS.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusione',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'L\'SVG è il linguaggio dei vettori; il PNG è il passaporto per il resto del mondo digitale. Questo strumento rasterizza i tuoi SVG a una risoluzione 2x con la trasparenza intatta, direttamente nel tuo browser, senza che un singolo byte del tuo design viaggi verso server esterni.',
  },
];


export const content: SvgAPngLocaleContent = {
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
