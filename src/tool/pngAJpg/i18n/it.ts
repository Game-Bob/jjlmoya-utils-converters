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
  pending: 'In attesa',
  bibliographyTitle: 'Riferimenti Bibliografici',
  faqTitle: 'Domande Frequenti',
};

const faq: PngAJpgLocaleContent['faq'] = [
  {
    question: 'Perché scegliere il nostro convertitore locale da PNG a JPG?',
    answer:
      'A differenza dei servizi tradizionali, questo strumento elabora i file interamente nel browser. Le immagini non raggiungono mai un disco remoto, quindi mantieni il pieno controllo e la privacy dei dati.',
  },
  {
    question: 'JPG o PNG: quale formato è più adatto?',
    answer:
      'PNG è ideale per loghi ed elementi trasparenti. JPG è invece preferibile per fotografie e banner web, perché produce file molto più leggeri e accelera il caricamento delle pagine.',
  },
  {
    question: 'Come avviene la conversione senza caricare i file?',
    answer:
      "Usiamo il Canvas HTML5. Il browser ricrea l'immagine in un'area virtuale invisibile, riempie la trasparenza con il bianco e genera direttamente i byte JPEG da scaricare.",
  },
  {
    question: 'È sicuro per documenti riservati?',
    answer:
      "Sì. Per banca, sanità e studi legali è più sicuro non inviare immagini a servizi esterni: l'elaborazione resta nella RAM del dispositivo e termina quando chiudi la scheda.",
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
    text: 'Convertitore PNG in JPG: guida pratica per ottimizzare le immagini',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Nel design digitale e nello sviluppo web, la velocità conta. PNG conserva trasparenza e qualità senza perdita, ma spesso genera file pesanti. Per pagine rapide e allegati leggeri, convertire una foto in JPG è una scelta efficace.',
  },
  {
    type: 'title',
    text: 'JPG o PNG: quale scegliere?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Non esiste un formato migliore in assoluto. PNG è adatto a interfacce, loghi e sfondi trasparenti; la compressione senza perdita però può produrre file molto più grandi.',
  },
  {
    type: 'paragraph',
    html: 'JPG riduce i dettagli difficili da percepire e produce immagini leggere. È indicato per fotografie, banner e social: il compromesso tra minima perdita e maggiore velocità di rete è spesso vantaggioso.',
  },
  {
    type: 'title',
    text: 'Confronto tecnico: elaborazione locale e cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Convertitori cloud',
        description: 'Servizi tradizionali che caricano le foto su un server remoto.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Latenza di rete (upload/download)',
          'Rischio di fuga dei dati privati',
          'Limiti di dimensione per file',
          'Pubblicità e tracciamento',
        ],
      },
      {
        title: 'La nostra architettura locale',
        description: 'Elaborazione diretta sul dispositivo con tecnologia JavaScript nativa.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Velocità immediata senza rete',
          'Privacy garantita (zero byte inviati)',
          'Nessun limite di MB per file',
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
    html: 'La conversione senza server usa le API del browser. Quando scegli un file, il browser crea un Blob temporaneo nella RAM e lo disegna su un Canvas HTML5 invisibile.',
  },
  {
    type: 'paragraph',
    html: 'JPG non supporta il canale alfa: le aree trasparenti vengono quindi riempite di bianco prima del rendering. Il Canvas genera poi il flusso JPEG che il dispositivo salva direttamente.',
  },
  {
    type: 'tip',
    title: 'Consiglio SEO: il peso ideale',
    html: "Un'immagine più leggera può migliorare LCP e PageSpeed. Ridurre un PNG grande a un JPG più piccolo è utile per intestazioni, articoli e pagine con molte immagini.",
  },
  {
    type: 'title',
    text: 'Sicurezza per aziende e professionisti',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "Per banca, sanità e studi legali, inviare file a servizi esterni può creare rischi. Qui l'elaborazione resta nella RAM del browser e non richiede un caricamento su cloud.",
  },
  {
    type: 'title',
    text: 'Compatibilità del risultato',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Visualizzatori su Windows, macOS e dispositivi mobili.',
      'Social network (Instagram, LinkedIn e altri).',
      "Programmi d'ufficio (Word, PowerPoint).",
      'Sistemi di gestione dei contenuti (WordPress, Shopify).',
    ],
  },
  {
    type: 'title',
    text: 'Conclusione: ottimizza con criterio',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Questo convertitore unisce rapidità e privacy. Che tu sia uno sviluppatore o un utente domestico, puoi ridurre il peso delle immagini senza consegnare i file a un servizio di terze parti.',
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
