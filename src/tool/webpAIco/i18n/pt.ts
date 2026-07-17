import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAIcoLocaleContent } from '../index';

const slug = 'conversor-de-webp-para-ico';
const title = 'Converter WebP para ICO';
const description =
  'Converta imagens WebP para ICO oficial com transparência. Sem upload de arquivos. Cabeçalhos binários reais da Microsoft. Gratuito e privado.';

const ui: ImageConverterUI = {
  dragText: 'Arraste arquivos WebP...',
  convertText: 'Para convertê-los em ICO instantaneamente',
  selectFiles: 'Selecionar arquivos',
  processedFiles: 'Arquivos processados',
  downloadAll: 'Baixar tudo (.zip)',
  pending: 'Pendente',
  bibliographyTitle: 'Referências Bibliográficas',
  faqTitle: 'Perguntas Frecuentes',
};

const faq: WebpAIcoLocaleContent['faq'] = [
  {
    question: 'Posso converter designs de stickers WebP para um Favicon ICO oficial para web?',
    answer:
      'Exatamente. O Favicon ainda exige a clássica extensão Microsoft ICO para uma compatibilidade universal extrema. Esta ferramenta injetará cabeçalhos binários construindo um ícone 100% legítimo.',
  },
  {
    question: 'Tenho de esperar em filas online ao criar o meu enorme lote de ícones corporativos?',
    answer:
      'De modo algum. O nosso conversor carrega o Javascript e corta qualquer rede de upload. O CPU do seu próprio dispositivo processa cem fotos ou mais de forma asíncrona.',
  },
  {
    question: 'O ICO resultante suportará a transparência do meu WebP original?',
    answer:
      'Sim. O nosso motor trabalha internamente com a API HTML5 canvas com suporte total a 32 bits, cada zona transparente será transferida de forma limpa para o arquivo iconográfico.',
  },
];

const howTo: WebpAIcoLocaleContent['howTo'] = [
  {
    name: 'Arraste todos os seus stickers WebP locais',
    text: 'Mova os grandes lotes de fotos sem medo de saturar o limite da web.',
  },
  {
    name: 'Tradução assíncrona lógica e montagem direta',
    text: 'Note rapidamente como a barra e os elementos se autocompletam enquanto a memória processa o bloco byte a byte a partir do frame.',
  },
  {
    name: 'Leve o seu pacote para desenvolvimento de sistemas e web',
    text: 'Clique livremente num botão de download massivo num arquivo conjunto o baixe manualmente se precisar apenas de um.',
  },
];

const seo: WebpAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Conversor de WebP para ICO: Crie Favicons Perfeitos a partir dos seus Assets Modernos',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Os modernos fluxos de trabalho de web design produzem assets em formato <strong>WebP</strong>: logótipos otimizados, ícones de UI e elementos de marca. Mas quando chega a hora de configurar o <strong>favicon</strong> do seu site ou os ícones para uma aplicação desktop Windows, o formato exigido ainda é o <strong>ICO</strong>. Converter WebP para ICO permite reutilizar os seus assets de maior qualidade sem perder a fonte original.',
  },
  {
    type: 'title',
    text: 'WebP vs ICO: Formatos com Propósitos Diferentes',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP é un formato de imagem de propósito geral, excelente para fotografias, ilustrações e ícones de UI web. A sua compressão eficiente torna-o ideal para acelerar o carregamento de páginas. No entanto, carece da estrutura binária específica que os sistemas operativos e navegadores exigem para reconhecer e exibir um ícone de aplicação ou favicon.',
  },
  {
    type: 'paragraph',
    html: 'ICO é un formato de contentor da Microsoft desenhado especificamente para ícones. Pode armazenar múltiplas resoluções num único arquivo e suporta transparência total através de un canal alfa de 32 bits. Os navegadores procuram um arquivo <code>favicon.ico</code> por convenção, e este formato garante que o seu ícone pareça nítido tanto em ecrãs padrão como em displays Retina e 4K.',
  },
  {
    type: 'title',
    text: 'Comparação: Conversão Local vs Cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Conversores Cloud',
        description: 'Herramientas que carregam os seus arquivos para un servidor remoto.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'O logótipo da sua empresa viaja para servidores de terceiros',
          'Ligação à Internet necessária para cada conversão',
          'Qualidade de saída variável dependendo do servidor',
          'Limites no número de conversões diárias',
        ],
      },
      {
        title: 'A Nossa Arquitetura Local',
        description: 'Processamento direto no seu hardware utilizando a tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'O seu logótipo nunca deixa o seu navegador',
          'Cabeçalhos binários ICO gerados segundo o padrão Microsoft',
          'Transparência de 32 bits preservada integralmente',
          'Conversão batch de conjuntos de ícones completos',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Como funciona tecnicamente',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O navegador descodifica o arquivo WebP nativamente e desenha-o num <strong>HTML5 Canvas</strong> com profundidade de cor de 32 bits, preservando o canal alfa original. O nosso motor JavaScript extrai então os dados de píxeis através do método <code>getImageData()</code> e constrói a estrutura binária ICO com os cabeçalhos ICONDIR e ICONDIRENTRY especificados pelo padrão Microsoft.',
  },
  {
    type: 'paragraph',
    html: 'O resultado é un arquivo ICO legítimo, não um simples renomear de arquivo. Os dados de píxeis são empacotados com a estrutura correta que o Windows, macOS e todos os navegadores modernos esperam ao carregar um favicon ou ícone de aplicação.',
  },
  {
    type: 'tip',
    title: 'Dica para favicons nítidos',
    html: 'Gere sempre o seu ICO a partir da fonte com a maior resolução disponível. Um WebP de 512×512 ou superior produzirá um favicon perfeitamente nítido em displays Retina e 4K, onde ícones de baixa resolução parecem desfocados.',
  },
  {
    type: 'title',
    text: 'Casos de uso e compatibilidade',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Criação do arquivo favicon.ico para qualquer website ou aplicação web.',
      'Geração de ícones de aplicação para instaladores de software Windows.',
      'Produção de ícones de desktop para apps Electron ou frameworks semelhantes.',
      'Criação de conjuntos de ícones para extensões de navegadores Chrome e Firefox.',
      'Conversão de logótipos WebP de marca em ícones para aplicações corporativas.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusão',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O seu moderno fluxo de trabalho de design produz WebP; o ecossistema de aplicações ainda exige ICO. Esta ferramenta fecha essa lacuna em segundos, gerando ícones com a estrutura binaria correta e transparência intacta, sem que os seus assets de marca deixem o seu navegador.',
  },
];

export const content: WebpAIcoLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({
    title,
    description,
    inLanguage: 'pt',
    faq,
    howTo,
  }),
};
