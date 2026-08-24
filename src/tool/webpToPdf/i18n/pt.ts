import { generateSchemas } from '../../../shared/logic/schemas';
import { bibliography } from '../bibliography';
import type { WebpToPdfLocaleContent } from '../entry';
import type { ImageToPdfUI } from '../../../shared/image-to-pdf/ui';

const slug = 'conversor-webp-para-pdf';
const title = "Conversor de WebP para PDF";
const description = "Converta imagens WebP num PDF ordenado no seu navegador. Escolha o tamanho do papel, orientação e margens sem carregar ficheiros.";

const ui: ImageToPdfUI = {
  formatLabel: 'WebP',
  dropTitle: "Crie um PDF a partir das suas imagens WebP",
  dropText: "Arraste ficheiros WebP para aqui. A ordem escolhida será a ordem das páginas.",
  selectFiles: "Selecionar ficheiros WebP",
  privacyNote: "Tudo é processado no navegador. As suas imagens nunca são carregadas.",
  optionsTitle: "Folha de impressão",
  settingsTitle: "Definições de papel",
  pageSizeLabel: "Tamanho do papel",
  a4: 'A4',
  letter: 'Letter',
  orientationLabel: "Orientação",
  portrait: "Retrato",
  landscape: "Paisagem",
  marginLabel: "Margens",
  pagesTitle: "Páginas",
  reorderHint: "Reordene as páginas antes de exportar.",
  page: "Página",
  pageSingular: "página",
  pagePlural: "páginas",
  moveUp: "Mover para cima",
  moveDown: "Mover para baixo",
  remove: "Remover",
  emptyPages: "As imagens selecionadas aparecerão aqui.",
  createPdf: "Criar PDF",
  reset: "Recomeçar",
  ready: "Pronto para as suas imagens",
  processing: "A preparar imagem",
  error: "Não foi possível ler a imagem",
  downloadPdf: "Descarregar PDF",
  building: "A gerar PDF",
  pdfReady: "O seu PDF está pronto",
  invalidFile: "Esta ferramenta aceita apenas ficheiros WebP e JPEG.",
  bibliographyTitle: "Referências",
  faqTitle: "Perguntas frequentes",
};

const faq: WebpToPdfLocaleContent['faq'] = [
  {
    "question": "Posso juntar várias imagens WebP num único PDF?",
    "answer": "Sim. Selecione os ficheiros WebP, ordene as páginas e exporte um único documento PDF."
  },
  {
    "question": "As minhas imagens são carregadas para algum servidor?",
    "answer": "Não. Todo o processo é realizado localmente no seu navegador."
  },
  {
    "question": "Posso escolher o tamanho de papel A4 ou Carta?",
    "answer": "Sim. Pode selecionar A4 ou Letter, a orientação e as margens."
  }
];

const howTo: WebpToPdfLocaleContent['howTo'] = [
  {
    "name": "Selecione as imagens WebP",
    "text": "Arraste os seus ficheiros WebP ou escolha-os no seu dispositivo."
  },
  {
    "name": "Organize as páginas",
    "text": "Ordene as imagens e configure o formato A4/Carta, orientação e margens."
  },
  {
    "name": "Gere e descarregue o PDF",
    "text": "Clique em Criar PDF e descarregue o ficheiro final."
  }
];

const seo: WebpToPdfLocaleContent['seo'] = [
  {
    "type": "title",
    "text": "Crie um documento PDF pronto a imprimir a partir de imagens WebP",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Este conversor de WebP para PDF foi concebido para agrupar fotos ou digitalizações num único ficheiro organizado. Ajuste a ordem e as definições de página facilmente."
  },
  {
    "type": "title",
    "text": "Documentos impecáveis e organizados",
    "level": 3
  },
  {
    "type": "list",
    "icon": "mdi:check-circle",
    "items": [
      "Ordene as imagens para garantir uma sequência lógica.",
      "Escolha a orientação retrato ou paisagem conforme necessário.",
      "Ajuste as margens para uma impressão sem falhas em qualquer impressora."
    ]
  },
  {
    "type": "tip",
    "title": "Segurança e privacidade totais",
    "html": "Como o processo corre no seu navegador, as suas fotos e documentos confidenciais estão sempre salvaguardados."
  }
];

export const content: WebpToPdfLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'pt', faq, howTo }),
};
