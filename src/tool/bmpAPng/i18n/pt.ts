import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAPngLocaleContent } from '../index';

const slug = 'conversor-bmp-para-png';
const title = 'Conversor de BMP para PNG';
const description =
  'Converta imagens BMP para PNG sem perda de qualidade. Compressão moderna sem artefactos. Sem carregar ficheiros. Grátis e 100% privado.';

const ui: ImageConverterUI = {
  dragText: 'Arraste os ficheiros BMP...',
  convertText: 'Para convertê-los para PNG instantaneamente',
  selectFiles: 'Selecionar ficheiros',
  processedFiles: 'Ficheiros processados',
  downloadAll: 'Descarregar Tudo (.zip)',
  pending: 'Pendente',
  bibliographyTitle: 'Referências Bibliográficas',
  faqTitle: 'Perguntas Frequentes',
};

const faq: BmpAPngLocaleContent['faq'] = [
  {
    question: 'Qual é a principal diferença entre BMP e PNG?',
    answer:
      'Tanto o BMP como o PNG são formatos sem perdas. A diferença reside na otimização: o PNG compreende algoritmos de compressão modernos para guardar a mesma imagem ocupando 5 ou 10 vezes menos memória do que o BMP.',
  },
  {
    question: 'A conversão é realmente privada?',
    answer:
      'Sim. Todo o processamento fotográfico é feito pelo seu computador. Absolutamente ninguém acede aos seus ficheiros em trânsito local.',
  },
  {
    question: 'Porquê PNG em vez de JPEG neste caso?',
    answer:
      'Se tem um ficheiro BMP, é porque a imagem tem cores precisas. Passar um BMP para o padrão destrutivo JPG degradaria as suas cores puras. O PNG protege essa fidelidade.',
  },
];

const howTo: BmpAPngLocaleContent['howTo'] = [
  {
    name: 'Coloque a sua Fotografia',
    text: 'Mova tranquilamente os ficheiros de origem BMP para a nossa zona de processamento de elementos web.',
  },
  {
    name: 'Conversão sem Transmissão de Rede',
    text: 'Sinta em apenas um segundo o processamento limpo feito localmente pelo seu JS de HTML5.',
  },
  {
    name: 'Obtenha PNGs Puros',
    text: 'Descarregue as réplicas em PNG individualmente ou através de um pacote comprimido.',
  },
];

const seo: BmpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Conversor de BMP para PNG: A Substituição Sem Perdas do Formato BMP',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'O BMP é um formato sem compressão que ocupa enormes quantidades de espaço sem qualquer benefício técnico em comparação com o PNG. Ambos são formatos sem perdas: guardam cada píxel com exatidão absoluta. Mas o PNG adiciona compressão lossless através do algoritmo Deflate, o que reduz o tamanho do ficheiro entre 3 e 5 vezes sem sacrificar um único bit de informação visual. O PNG é, em essência, o que o BMP sempre quis ser.',
  },
  {
    type: 'title',
    text: 'BMP vs PNG: mesma qualidade, tamanho radicalmente diferente',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'A diferença fundamental entre BMP e PNG não está na qualidade da imagem - ambos são sem perdas - mas na eficiência de armazenamento. O BMP armazena píxeis em bruto: sem compressão, sem otimização, sem consideração pelo espaço. O PNG analisa os padrões de píxeis repetidos e codifica-os de forma compacta através de Deflate, o mesmo algoritmo que o ZIP utiliza.',
  },
  {
    type: 'paragraph',
    html: 'Além da compressão superior, o PNG adiciona uma característica que o BMP nunca teve: canal alfa completo para transparências. Capturas de ecrã, gráficos de interface, logótipos, diagramas técnicos: todos estes tipos de imagens beneficiam enormemente da conversão para PNG, que mantém cada valor de cor exato enquanto reduz o peso do ficheiro a uma fração do original.',
  },
  {
    type: 'title',
    text: 'Comparativo de Arquitetura: Local vs Nuvem',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Conversores Cloud',
        description: 'Serviços que processam os seus ficheiros BMP em servidores de terceiros.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'As suas imagens de trabalho viajam pela internet',
          'Tempo de espera proporcional ao tamanho do BMP',
          'Limites de tamanho em planos gratuitos',
          'Risco de análise ou retenção dos seus ficheiros',
        ],
      },
      {
        title: 'A Nossa Arquitetura Local',
        description: 'Processamento direto no seu hardware através de tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'O BMP é processado localmente, nunca sai do seu dispositivo',
          'Conversão instantânea em milissegundos',
          'Sem limites de tamanho nem de número de ficheiros',
          'Privacidade total: 0 bytes enviados para o exterior',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Como funciona a conversão local de BMP para PNG',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O processo utiliza a API Canvas do HTML5. O ficheiro BMP é lido com a API <code>FileReader</code> do navegador e é descodificado como um Blob em memória. Esse Blob é desenhado sobre um canvas HTML5 invisível. A seguir, o método <code>toDataURL(\'image/png\')</code> aplica o algoritmo de compressão PNG nativo do navegador e gera o ficheiro resultante.',
  },
  {
    type: 'paragraph',
    html: 'Ao contrário da conversão para JPG, a conversão para PNG é completamente lossless: cada valor de cor do BMP original é preservado exatamente no PNG resultante. Não existem artefactos, não existe suavização de bordos, não existe perda de informação. O ficheiro final é visualmente idêntico ao BMP mas ocupa entre 3 e 5 vezes menos espaço em disco.',
  },
  {
    type: 'paragraph',
    html: 'Se trabalha com software antigo que exporta BMP (maquinaria industrial, sistemas de controlo, software de diagnóstico médico), converter para PNG é a melhor decisão. O PNG é compatível com absolutamente todos os programas modernos, mantém a fidelidade de cor perfeita e ocupa até 5 vezes menos espaço. É a migração mais simples e segura possível.',
  },
  {
    type: 'title',
    text: 'Casos de uso e compatibilidade do PNG resultante',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Capturas de ecrã e gráficos de interface com cores exatas preservadas.',
      'Imagens de documentação técnica e diagramas de software.',
      'Exportações de CAD, sistemas industriais e software legacy.',
      'Logótipos e elementos de identidade visual com transparência adicionada.',
      'Compatível com Adobe Photoshop, GIMP, Figma e todos os editores modernos.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusão: o PNG é o que o BMP sempre deveria ter sido',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Converter BMP para PNG é a modernização mais natural de um ficheiro de imagem: mesma qualidade sem perdas, maior compatibilidade, suporte de transparência e entre 3 e 5 vezes menos peso. A nossa ferramenta realiza esta conversão em milissegundos, diretamente no seu navegador, sem carregar qualquer ficheiro para nenhum servidor.',
  },
];


export const content: BmpAPngLocaleContent = {
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
