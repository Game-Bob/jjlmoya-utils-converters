import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAPngLocaleContent } from '../index';

const slug = 'convertitore-gif-a-png';
const title = 'Convertire GIF in PNG Online';
const description =
  'Estrai il primo fotogramma dalle tue GIF e convertilo in PNG preservando le trasparenze. Senza server. Elaborazione locale. Gratuito.';

const ui: ImageConverterUI = {
  dragText: 'Trascina i file GIF...',
  convertText: 'Per convertirli in PNG istantaneamente',
  selectFiles: 'Seleziona i file',
  processedFiles: 'File elaborati',
  downloadAll: 'Scarica tutto (.zip)',
  pending: 'In attesa',
  bibliographyTitle: 'Riferimenti Bibliografici',
  faqTitle: 'Domande Frequenti',
};

const faq: GifAPngLocaleContent['faq'] = [
  {
    question: 'Perché convertire un formato animato come il GIF in un formato statico come il PNG?',
    answer:
      'Molti social network o avatar non supportano fotografie che cambiano. Estrarre il primo fotogramma di una GIF complessa verso un PNG di alta qualità risolve le barriere e riduce pesi inutili.',
  },
  {
    question: 'Le trasparenze della vecchia GIF si conservano nel PNG risultante?',
    answer:
      'Sì, a differenza del JPG, il formato PNG mantiene il canale alfa. Se la GIF aveva uno sfondo trasparente, il PNG lo conserverà con bordi nitidi.',
  },
  {
    question: 'Mantenete le mie immagini sui server per un po\' dopo l\'elaborazione?',
    answer:
      'Nessun server trattiene la tua GIF; tutta l\'estrazione è locale grazie alla Web Canvas API. È il processore del tuo PC che decodifica in modo sicuro il tuo file senza alcun contatto con la rete.',
  },
];

const howTo: GifAPngLocaleContent['howTo'] = [
  {
    name: 'Avvicinaci l\'Animazione',
    text: 'Trascina i pesanti file GIF nel riquadro di inserimento.',
  },
  {
    name: 'Foto Estratta Perfetta',
    text: 'Il sistema bloccherà l\'origine esatta del movimento, ottenendo una copia impeccabile in millisecondi.',
  },
  {
    name: 'Salva il tuo Statico',
    text: 'Salva massivamente in ZIP tutto il volume di avatar GIF statici convertiti in PNG.',
  },
];

const bibliography: GifAPngLocaleContent['bibliography'] = [
  {
    name: 'World Wide Web Consortium: PNG format',
    url: 'https://www.w3.org/TR/png/',
  },
  {
    name: 'CompuServe GIF Information',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
];

const seo: GifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertitore da GIF a PNG: Supera i limiti di colore e trasparenza del GIF',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Il GIF è stato progettato in un\'epoca in cui i monitor potevano mostrare a malapena 256 colori. Decenni dopo, questa limitazione rimane la sua più grande debolezza. Il PNG è nato proprio per sostituire il GIF in tutti i casi d\'uso in cui la qualità e la trasparenza sono importanti: loghi, icone, grafiche di interfaccia e qualsiasi immagine con sfondo trasparente che debba apparire perfetta su qualsiasi colore di sfondo.',
  },
  {
    type: 'title',
    text: 'GIF vs PNG: la rivoluzione dei 16 milioni di colori',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La differenza più critica tra GIF e PNG non è solo il numero di colori. Il GIF supporta la trasparenza binaria: ogni pixel è opaco o completamente trasparente, senza sfumature. Il PNG, invece, supporta il canale alfa completo, con 256 livelli di opacità per pixel. Questo significa che i bordi di un logo in PNG possono essere perfettamente ammorbiditi, mentre quelli del GIF mostrano una tipica seghettatura su sfondi colorati.',
  },
  {
    type: 'paragraph',
    html: 'Oltre alla trasparenza superiore, il PNG elimina il limite dei 256 colori del GIF. Screenshot, illustrazioni con sfumature, loghi con ombre: tutti appaiono significativamente meglio in PNG. Essendo una compressione senza perdita, ogni pixel conserva esattamente il valore originale, senza gli artefakti che introdurrebbe una conversione in JPG.',
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
        description: 'Strumenti che elaborano le tue immagini su server remoti.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'I tuoi loghi e icone viaggiano su internet',
          'Tempo di attesa per latenza di rete',
          'Limiti di dimensione e numero di file',
          'Le tue immagini possono rimanere nelle cache di terze parti',
        ],
      },
      {
        title: 'La Nostra Architettura Locale',
        description: 'Elaborazione diretta sul tuo hardware tramite tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'La GIF non abbandona mai il tuo dispositivo',
          'Conversione istantanea senza rete',
          'Senza limiti di file né di dimensione',
          'Privatatezza assoluta: 0 byte inviati',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Come funziona la conversione locale GIF a PNG',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La conversione utilizza la Canvas API del browser. La GIF viene decodificata in memoria come un elemento Image nativo. Rendendola su un canvas HTML5, il motore grafico del browser cattura il primo fotogramma con tutte le sue informazioni originali di trasparenza intatte.',
  },
  {
    type: 'paragraph',
    html: 'A differenza della conversione in JPG, con il PNG non è necessario aggiungere uno sfondo bianco. Il canale alfa della GIF originale viene preservato direttamente nel PNG esportato. Il metodo <code>toDataURL(\'image/png\')</code> genera il flusso di byte PNG nella RAM del tuo computer, senza alcuna trasmissione di rete, e il file viene scaricato direttamente.',
  },
  {
    type: 'tip',
    title: 'Trasparenza binaria della GIF vs canale alfa del PNG',
    html: 'Il GIF supporta solo la trasparenza binaria (opaco o trasparente). Convertendo in PNG, i pixel semitrasparenti della GIF si mantengono così come interpretati dal browser. Se la tua GIF ha bordi seghettati, il PNG li conserverà — ma potrai editarli con ammorbidimento dei bordi in qualsiasi editor, cosa impossibile con la GIF originale.',
  },
  {
    type: 'title',
    text: 'Casi d\'uso e compatibilità del PNG risultante',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Loghi e icone per l\'uso su qualsiasi colore di sfondo.',
      'Avatar per Discord, Telegram, Slack e piattaforme di gaming.',
      'Grafiche di interfaccia per applicazioni web e mobili.',
      'Sticker ed emoji personalizzati con sfondo trasparente.',
      'Screenshot ed elementi UI per documentazione tecnica.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusione: il PNG è ciò che la GIF ha sempre voluto essere',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Convertire da GIF a PNG non è solo cambiare formato: è aggiornare un\'immagine allo standard moderno che la GIF non ha mai potuto raggiungere. Più colori, migliore trasparenza, meno peso. Il nostro strumento esegue questa conversione in millisecondi, direttamente nel tuo browser, senza inviare alcun dato all\'esterno.',
  },
];


export const content: GifAPngLocaleContent = {
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
