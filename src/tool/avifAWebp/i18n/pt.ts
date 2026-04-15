import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAWebpLocaleContent } from '../index';

const slug = 'conversor-avif-para-webp';
const title = 'Converter AVIF para WebP Online';
const description =
  'Converta imagens AVIF para WebP com melhor compatibilidade. Processamento local sem servidores. Grátis, privado e ilimitado.';

const ui: ImageConverterUI = {
  dragText: 'Arraste os ficheiros AVIF...',
  convertText: 'Para convertê-los para WebP instantaneamente',
  selectFiles: 'Selecionar ficheiros',
  processedFiles: 'Ficheiros processados',
  downloadAll: 'Descarregar Tudo (.zip)',
  pending: 'Pendente',
  bibliographyTitle: 'Referências Bibliográficas',
  faqTitle: 'Perguntas Frequentes',
};

const faq: AvifAWebpLocaleContent['faq'] = [
  {
    question: 'Qual é a diferença real entre converter para WebP e para outros formatos?',
    answer:
      'O WebP oferece o melhor de dois mundos: compressões tão espantosas como o JPG, mas conservando a capacidade de albergar transparências limpas como um PNG. Mudar o seu AVIF para WebP maximiza a sua compatibilidade para a web, preservando todas as suas vantagens.',
  },
  {
    question: 'Como conseguem mudar isto sem servidor e de forma rápida?',
    answer:
      'Aproveitamos os módulos de descodificação incorporados e o objeto Image de JavaScript HTML5, o que permite ler o seu AVIF em memória local e extrair um ficheiro WebP otimizado em tempo recorde.',
  },
  {
    question: 'O formato WebP é completamente compatível hoje em dia?',
    answer:
      'Ao contrário do nascente AVIF, o formato WebP desfruta de um amplíssimo suporte entre navegadores como Chrome, Firefox e Safari.',
  },
];

const howTo: AvifAWebpLocaleContent['howTo'] = [
  {
    name: 'Insira os seus ficheiros fotográficos',
    text: 'Mova e solte todas as seleções de formato AVIF para a nossa área de trabalho.',
  },
  {
    name: 'Tradução de Bytes Algorítmicos',
    text: 'O nosso motor processa os algoritmos sem carregar nada e cria iterações exatas baseadas em WebP comprimido.',
  },
  {
    name: 'Acumule as suas Descarregamentos Prontos',
    text: 'Pressione o painel e receba lotes em pastas ZIP ou soltos para publicá-los diretamente.',
  },
];

const bibliography: AvifAWebpLocaleContent['bibliography'] = [
  {
    name: 'AV1 Image File Format',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'Google WebP Format Overview',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: AvifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Conversor AVIF para WebP: A Alternativa Moderna e Segura para a Web',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'O AVIF é o formato de imagem mais avançado disponível hoje: mais pequeno que o WebP, mais pequeno que o JPG, com uma qualidade visual superior. No entanto, a sua adoção tem sido irregular — o Safari não o suportou até 2024, e muitos dispositivos móveis mais antigos não o reconhecem. O WebP, por outro lado, está consolidado há anos como o padrão moderno da web com mais de 95% de suporte global. Converter AVIF para WebP é a decisão pragmática quando precisa de modernidade sem arriscar a compatibilidade.',
  },
  {
    type: 'title',
    text: 'AVIF vs WebP: O Mais Novo vs O Mais Seguro',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O AVIF oferece a compressão mais avançada disponível — tipicamente 20-30% mais pequeno que o WebP com a mesma qualidade. A sua tecnologia baseada em AV1 é a mais moderna do setor. No entanto, o suporte de AVIF ainda tem pontos cegos: versões antigas do Safari, alguns navegadores em Android mais antigo e certos visualizadores de imagem de ambiente de trabalho não o reconhecem. Para produção web com audiências amplas e diversas, isto representa um risco.',
  },
  {
    type: 'paragraph',
    html: 'O WebP tem uma história de suporte muito mais sólida. O Chrome adotou-o em 2010, o Firefox e o Edge seguiram-no, e o Safari incorporou-o em 2020. Com mais de 95% de cobertura global em navegadores, o WebP é a escolha segura para qualquer sítio web que não queira servir formatos de reserva. Suporta transparências, compressão com e sem perda, e consegue ficheiros muito mais pequenos do que o JPG ou o PNG.',
  },
  {
    type: 'title',
    text: 'Comparativo: Conversores Cloud vs A Nossa Arquitetura Local',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Conversores Cloud',
        description: 'Ferramentas que carregam os seus ficheiros AVIF para um servidor remoto para processá-los.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'As suas imagens privadas transitam por servidores externos',
          'Latência de rede que abranda o fluxo de trabalho',
          'Limites de ficheiros por conversão gratuita',
          'Dependência de serviços de terceiros que podem mudar',
        ],
      },
      {
        title: 'A Nossa Arquitetura Local',
        description: 'Processamento direto no seu navegador através de tecnologia Vanilla JS e Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Privacidade total — 0 bytes saem do seu dispositivo',
          'Velocidade instantânea sem dependência de rede',
          'Sem limites de tamanho nem de número de ficheiros',
          'Funciona sem ligação à Internet',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Como funciona a conversão técnica no navegador',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O Chrome, o Firefox e o Edge incluem descodificadores AVIF nativos. Ao carregar o ficheiro, o motor de imagens do navegador descodifica-o em RAM, mantendo a informação de canal alfa. A imagem é desenhada sobre um <code>Canvas</code> HTML5 invisível usando o contexto 2D, que preserva as transparências corretamente.',
  },
  {
    type: 'paragraph',
    html: 'A exportação é feita com <code>toBlob(\'image/webp\', quality)</code>. O navegador aplica o algoritmo de compressão WebP internamente, gerando um Blob que inclui o canal alfa se a imagem original o tivesse. Este Blob é convertido num link de descarregamento direto. O processo completo ocorre em microssegundos sem qualquer comunicação com servidores externos.',
  },
  {
    type: 'tip',
    title: 'WebP: a escolha pragmática do programador moderno',
    html: 'O WebP tem mais de 95% de suporte em navegadores — o AVIF está a crescer mas ainda não chega a esse número. Para sítios em produção sem deteção de formato adaptativa, o WebP é a escolha segura que cobre quase qualquer audiência. Converta os seus AVIF para WebP e sirva imagens modernas com confiança.',
  },
  {
    type: 'title',
    text: 'Casos de uso: quando escolher WebP sobre AVIF',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Sítios web que precisam de suporte em navegadores desde 2020 sem polyfills.',
      'CDNs e sistemas de entrega de imagens que aceitam WebP mas não AVIF.',
      'Aplicações móveis híbridas com WebViews que podem não suportar AVIF.',
      'Emails HTML modernos onde o WebP tem maior suporte do que o AVIF.',
      'Plataformas CMS e ecommerce com suporte de imagem WebP estabelecido.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusão: Modernidade com compatibilidade garantida',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O AVIF é a vanguarda da compressão de imagens, mas o WebP é a escolha fiável e universal do ecossistema web moderno. Com a nossa ferramenta, converte do mais novo para o mais suportado num instante — sem carregar nada para nenhum servidor, com privacidade total e sem limites de tamanho.',
  },
];


export const content: AvifAWebpLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'pt', faq, howTo }),
};
