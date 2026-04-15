import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAJpgLocaleContent } from '../index';

const slug = 'convertitore-gif-a-jpg';
const title = 'Convertire GIF in JPG Online';
const description =
  'Estrai il primo fotogramma dalle tue GIF e convertilo in JPG. Senza server. Elaborazione locale nel tuo browser. Gratuito e illimitato.';

const ui: ImageConverterUI = {
  dragText: 'Trascina i file GIF...',
  convertText: 'Per convertirli in JPG istantaneamente',
  selectFiles: 'Seleziona i file',
  processedFiles: 'File elaborati',
  downloadAll: 'Scarica tutto (.zip)',
  pending: 'In attesa',
  bibliographyTitle: 'Riferimenti Bibliografici',
  faqTitle: 'Domande Frequenti',
};

const faq: GifAJpgLocaleContent['faq'] = [
  {
    question: 'Cosa succede alle animazioni quando passo a JPG?',
    answer:
      'Il formato JPG è rigorosamente statico e non supporta più fotogrammi. Il nostro convertitore estrae unicamente la prima immagine o fotogramma che appare nella sequenza della GIF.',
  },
  {
    question: 'Perderò qualche effetto speciale o sfondo trasparente?',
    answer:
      'Sì, è il comportamento naturale dello standard JPG. Se carichi una GIF con sfondo trasparente, inseriamo automaticamente uno strato solido bianco sottostante per evitare colori corrotti.',
  },
  {
    question: 'Posso estrarre foto JPG da una GIF senza che il sito salvi il mio contenuto?',
    answer:
      'Assolutamente sì. Lo strumento è una Web App basata sul Canvas dell\'HTML5. Tutta la decodifica viene eseguita dal processore del tuo dispositivo fisico.',
  },
];

const howTo: GifAJpgLocaleContent['howTo'] = [
  {
    name: 'Trascina i file GIF',
    text: 'Posiziona o trascina quella GIF dalla tua cartella fino a rilasciarla nel nostro box di elaborazione.',
  },
  {
    name: 'Calcolo pulito del primo fotogramma',
    text: 'In frazioni di secondo viene estratta l\'animazione creando la JPG a sfondo bianco solido senza contattare i server.',
  },
  {
    name: 'Ottienili pacchettizzati in formato ZIP',
    text: 'Scaricali tramite i pulsanti o usando lo ZIP se hai elaborato un gran numero di file.',
  },
];

const bibliography: GifAJpgLocaleContent['bibliography'] = [
  {
    name: 'Specifica Tecnica Joint Photographic Experts Group',
    url: 'https://en.wikipedia.org/wiki/JPEG',
  },
  {
    name: 'CompuServe GIF Information',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
];

const seo: GifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertitore da GIF a JPG: Estrai fotogrammi come immagini di alta qualità',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'I file GIF dominano da decenni il mondo delle brevi animazioni su internet. Tuttavia, la loro natura animata le rende completamente inutili come miniatura, anteprima per i social network o immagine per documenti. Quando hai bisogno di estrarre un fotogramma specifico da una GIF e convertirlo in un\'immagine statica di alta qualità, la conversione in JPG è la soluzione più pratica e compatibile.',
  },
  {
    type: 'title',
    text: 'GIF o JPG? Formati con scopi opposti',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Il GIF (Graphics Interchange Format) è stato progettato nel 1987 con una severa limitazione che persiste ancora oggi: può rappresentare solo 256 colori per fotogramma. Questa restrizione tecnica non importava per semplici animazioni con tavolozze ridotte, ma lo rende un formato visivamente povero per scatti fotografici reali. Il JPG, invece, può renderizzare milioni di colori con algoritmi di compressione percettiva avanzati.',
  },
  {
    type: 'paragraph',
    html: 'Estrarre un fotogramma da una GIF e salvarlo come JPG ha molteplici applicazioni: generare miniature per lettori video, creare anteprime per piattaforme di gestione dei contenuti, ottenere immagini statiche per presentazioni o semplicemente archiviare un momento visivo di un\'animazione complessa. Il JPG risultante sarà molto più leggero del GIF originale e universalmente compatibile.',
  },
  {
    type: 'title',
    text: 'Confronto tra Architetture: Locale vs Cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Convertitori Cloud',
        description: 'Strumenti che caricano i tuoi file su un server remoto per elaborarli.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Le tue GIF viaggiano su internet verso server di terze parti',
          'Latenza di rete in upload e download',
          'Limiti di dimensione e di file per sessione',
          'Rischio di conservazione dei dati su server altrui',
        ],
      },
      {
        title: 'La Nostra Architettura Locale',
        description: 'Elaborazione diretta sul tuo hardware tramite tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'La GIF non abbandona mai il tuo dispositivo',
          'Velocità istantanea senza attese di rete',
          'Senza limiti di dimensione né di file',
          'Privatatezza totale: 0 byte inviati all\'esterno',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Come funziona l\'estrazione tecnica del fotogramma',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La conversione locale si appoggia sulla potenza del Canvas API di HTML5. Quando carichi una GIF, il browser la decodifica in memoria come un elemento Image nativo. Rendendola su un canvas invisibile, il motore grafico del browser cattura automaticamente il primo fotogramma della sequenza di animazione.',
  },
  {
    type: 'paragraph',
    html: 'Dato che il formato JPG non supporta trasparenze, il nostro algoritmo applica uno sfondo bianco solido prima di esportare. Il metodo <code>toDataURL(\'image/jpeg\')</code> del canvas genera il flusso di byte JPG direttamente nella memoria RAM del tuo computer, senza alcuna connessione di rete. Il file risultante viene scaricato immediatamente sul tuo dispositivo.',
  },
  {
    type: 'tip',
    title: 'Tavolozza di colori limitata della GIF',
    html: 'La GIF può contenere solo 256 colori per fotogramma. La JPG estratta erediterà quella tavolozza ridotta dall\'originale: se la GIF aveva sfumature o fotografie, potrebbe apparire con una certa posterizzazione. Per ottenere il miglior risultato, usa GIF con colori semplici o illustrazioni.',
  },
  {
    type: 'title',
    text: 'Casi d\'uso e compatibilità della JPG risultante',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Miniature e anteprime per piattaforme video e CMS.',
      'Immagini di copertina per post sui social network.',
      'Inserimento in documenti Word, PowerPoint o PDF.',
      'File di presentazione e materiali di marketing.',
      'Compatibilità universale con visualizzatori su Windows, macOS e mobili.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusione: il fotogramma che vale più dell\'animazione',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Una GIF animata da 2 MB può produrre una JPG del primo fotogramma di appena 50-200 KB, a seconda della risoluzione. Il nostro strumento esegue questa conversione in modo istantaneo, privato e senza limiti direttamente nel tuo browser. Senza server, senza account, senza attese.',
  },
];


export const content: GifAJpgLocaleContent = {
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
