import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAJpgLocaleContent } from '../index';

const slug = 'convertitore-da-png-a-jpg';
const title = 'Convertire PNG in JPG Online';
const description =
  'Converti le tue immagini PNG nel formato JPG a compressione rapida istantaneamente sul tuo computer. Senza caricare foto su Internet. Ottimizzazione in batch.';

const ui: ImageConverterUI = {
  dragText: 'Trascina i file PNG...',
  convertText: 'Per convertirli in JPG istantaneamente',
  selectFiles: 'Seleziona i file',
  processedFiles: 'File elaborati',
  downloadAll: 'Scarica tutto (.zip)',
  pending: 'In attesa': 'Riferimenti Bibliografici',
  faqTitle: 'Domande Frequenti',
};

const faq: PngAJpgLocaleContent['faq'] = [
  {
    question: 'Perché scegliere il nostro convertitore locale da PNG a JPG?',
    answer:
      'A differenza degli strumenti convenzionali, la nostra utility elabora i file interamente nel tuo browser. Le tue immagini non toccano mai un disco rigido altrui, garantendo la totale sovranità e privacy dei tuoi dati.',
  },
  {
    question: 'JPG o PNG? Qual è il migliore per il mio caso?',
    answer:
      'Il PNG è ideale per loghi ed elementi con trasparenza. Tuttavia, il JPG è lo standard di riferimento per fotografie e banner web, poiché raggiunge pesi molto più ridotti, migliorando drasticamente la velocità di caricamento di un sito.',
  },
  {
    question: 'Come funziona la conversione tecnica senza caricare nulla?',
    answer:
      'Utilizziamo la potenza dell\'HTML5 Canvas. Il browser ricrea l\'immagine su una tela virtuale invisibile, riempie le trasparenze con il bianco e genera un flusso di byte che scarichi direttamente all\'istante.',
  },
  {
    question: 'È sicuro per documenti riservati?',
    answer:
      'Sì, è l\'opzione più sicura per professionisti del settore bancario, sanitario o legale. Essendo una "scatola nera" che utilizza solo la tua RAM, ciò che accade all\'interno muore al momento della chiusura della scheda, evitando fughe di dati su cloud di terze parti.',
  },
];

const howTo: PngAJpgLocaleContent['howTo'] = [
  {
    name: 'Selezione dei file',
    text: 'Prepara i tuoi file PNG in una cartella e trascinali tutti insieme nell\'area di elaborazione o cercali con l\'esplora file.',
  },
  {
    name: 'Elaborazione istantanea',
    text: 'Verifica che lo stato cambi in "Pronto" per ogni file mentre il browser ottimizza il peso localmente.',
  },
  {
    name: 'Download ottimizzato',
    text: 'Salva i tuoi nuovi JPG uno ad uno o usa il pulsante "Scarica tutto" per ottenere un file ZIP compresso con tutte le immagini.',
  },
];

const seo: PngAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertitore da PNG a JPG: La Guida Definitiva per l\'Ottimizzazione delle Immagini',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Nel mondo del design digitale e dello sviluppo web, l\'efficienza è tutto. Il formato PNG (Portable Network Graphics) è amato per la sua capacità di mantenere le trasparenze e la sua compressione senza perdita, ma ha un grande nemico: il peso del file. Quando hai bisogno che il tuo sito web voli o che le tue email si carichino istantaneamente, il passaggio da PNG a JPG è la decisione tecnica più intelligente.',
  },
  {
    type: 'title',
    text: 'JPG o PNG?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Non esiste un formato migliore di un altro, ma uno strumento per ogni esigenza. Il PNG è un formato senza perdita, ideale per mockup di interfacce, loghi con testo piccolo ed elementi visivi che richiedono uno sfondo trasparente. Tuttavia, questa fedeltà ha un costo: file che possono essere 5 o 10 volte più pesanti del loro equivalente compresso.',
  },
  {
    type: 'paragraph',
    html: 'Il JPG (Joint Photographic Experts Group), d\'altra parte, utilizza algoritmi di discretizzazione per rimuovere informazioni che l\'occhio umano percepisce a malapena, raggiungendo pesi piuma. È lo standard di riferimento per fotografie, banner pubblicitari e social network. Convertendo i tuoi PNG in JPG, stai scambiando la fedeltà geometrica con la velocità di rete.',
  },
  {
    type: 'title',
    text: 'Confronto Architetturale: Locale vs Cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Convertitori Cloud',
        description: 'Strumenti tradizionali che caricano le tue foto su un server remoto.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Latenza di rete (Upload/Download)',
          'Rischio di fuga di dati privati',
          'Limiti di dimensione per file',
          'Pubblicità e tracciatori',
        ],
      },
      {
        title: 'La Nostra Architettura Locale',
        description: 'Elaborazione diretta sul tuo hardware tramite tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Velocità istantanea senza rete',
          'Privacy garantita (0 byte inviati)',
          'Senza limiti di MB per file',
          'Interfaccia professionale e pulita',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Come funziona la conversione tecnica',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Probabilmente ti starai chiedendo come sia possibile convertire un\'immagine senza inviarla a un server. La magia risiede nella potenza dei browser moderni. Quando selezioni un file, generiamo un Blob che esiste solo nella tua RAM. Quel Blob viene disegnato su un elemento HTML5 Canvas invisibile.',
  },
  {
    type: 'paragraph',
    html: 'Dato che il JPG non supporta le trasparenze, il nostro algoritmo riempie lo sfondo con un colore bianco solido prima di "dipingere" il PNG sopra. Una volta composta l\'immagine, eseguiamo il metodo di esportazione nativo, generando un flusso di byte che il tuo computer scarica direttamente.',
  },
  {
    type: 'tip',
    title: 'Consiglio SEO: Il Peso Ideale',
    html: 'Google penalizza attivamente i siti web lenti. Se il tuo Largest Contentful Paint (LCP) è alto a causa di un PNG di intestazione da 2MB, convertirlo in un JPG da 200KB può migliorare istantaneamente le tue metriche PageSpeed senza differenze visive.',
  },
  {
    type: 'title',
    text: 'Sicurezza per Aziende e Professionisti',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Se lavori in settori sensibili come il bancario, il sanitario o il legale, caricare file su convertitori online è una violazione della sicurezza. Il nostro strumento funziona come una "scatola nera": ciò che accade all\'interno rimane nella tua RAM. È l\'unico modo sicuro per lavorare con documenti riservati.',
  },
  {
    type: 'title',
    text: 'Compatibilità del Risultato',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Visualizzatori di Windows, macOS e dispositivi mobili.',
      'Social network (Instagram, LinkedIn, ecc.).',
      'Strumenti da ufficio (Word, PowerPoint).',
      'Gestori di contenuti (WordPress, Shopify).',
    ],
  },
  {
    type: 'title',
    text: 'Conclusione: Ottimizza come un professionista',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Questo convertitore non è solo l\'ennesima pagina; è un pezzo di ingegneria progettato per semplificarti la vita. Che tu sia uno sviluppatore o un utente domestico, ecco la soluzione definitiva per risparmiare megabyte e tenere i tuoi dati al sicuro.',
  },
];


export const content: PngAJpgLocaleContent = {
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
