import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAJpgLocaleContent } from '../index';

const slug = 'conversor-gif-para-jpg';
const title = 'Converter GIF para JPG Online';
const description =
  'Extraia o primeiro fotograma dos seus GIFs e converta-o para JPG. Sem servidor. Processamento local no seu navegador. Grátis e ilimitado.';

const ui: ImageConverterUI = {
  dragText: 'Arraste os ficheiros GIF...',
  convertText: 'Para convertê-los para JPG instantaneamente',
  selectFiles: 'Selecionar ficheiros',
  processedFiles: 'Ficheiros processados',
  downloadAll: 'Descarregar Tudo (.zip)',
  pending: 'Pendente',
  bibliographyTitle: 'Referências Bibliográficas',
  faqTitle: 'Perguntas Frequentes',
};

const faq: GifAJpgLocaleContent['faq'] = [
  {
    question: 'O que acontece com as animações quando passo para JPG?',
    answer:
      'O formato JPG é estritamente estático e não suporta múltiplos fotogramas. O nosso conversor extrai unicamente a primeira imagem ou fotograma que aparece na sequência do GIF.',
  },
  {
    question: 'Perderei algum efeito especial ou fundo transparente?',
    answer:
      'Sim, é o comportamento natural do padrão JPG. Se carregar um GIF com fundo livre, inserimos automaticamente uma camada sólida branca subjacente para evitar cores corrompidas.',
  },
  {
    question: 'Posso extrair fotos JPG de um GIF sem que o site guarde o meu conteúdo?',
    answer:
      'Absolutamente sim. A ferramenta é uma Web App baseada no Canvas do HTML5. Toda a descodificação é executada pelo processador do seu próprio dispositivo físico.',
  },
];

const howTo: GifAJpgLocaleContent['howTo'] = [
  {
    name: 'Arraste Ficheiros Pesados Móveis',
    text: 'Posicione ou arraste a partir da sua pasta esse GIF até largá-lo na nossa caixa de processamento.',
  },
  {
    name: 'Cálculo Limpo do Primeiro Fotograma',
    text: 'Em frações de tempo extrai-se a animação criando o JPG branco sólido sem contactar servidores.',
  },
  {
    name: 'Capture-os Empacotados em Massa ZIP',
    text: 'Descarregue com os botões ou usando o Zip se processou um grande número de ficheiros.',
  },
];

const seo: GifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Conversor de GIF para JPG: Extraia Fotogramas como Imagens de Alta Qualidade',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Os ficheiros GIF dominam há décadas o mundo das animações curtas na internet. No entanto, a sua natureza animada torna-os completamente inúteis como miniatura, pré-visualização para redes sociais ou imagem para documentos. Quando precisa de extrair um fotograma concreto de um GIF e convertê-lo numa imagem estática de alta qualidade, a conversão para JPG é a solução mais prática e compatível.',
  },
  {
    type: 'title',
    text: 'GIF ou JPG? Formatos com propósitos opostos',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O GIF (Graphics Interchange Format) foi projetado em 1987 com uma limitação severa que persiste hoje: só pode representar 256 cores por fotograma. Esta restrição técnica não importava para animações simples com paletas reduzidas, mas torna-o num formato visualmente pobre para capturas de fotografia real. O JPG, por outro lado, pode renderizar milhões de cores com algoritmos de compressão percetual avançados.',
  },
  {
    type: 'paragraph',
    html: 'Extrair um fotograma de um GIF e guardá-lo como JPG tem múltiplas aplicações: gerar thumbnails para reprodutores de vídeo, criar pré-visualizações para plataformas de gestão de conteúdos, obter imagens estáticas para apresentações ou simplesmente arquivar um momento visual de uma animação complex. O JPG resultante será muito mais leve que o GIF original e universalmente compatível.',
  },
  {
    type: 'title',
    text: 'Comparativa de Arquitetura: Local vs Nuvem',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Conversores Cloud',
        description: 'Ferramentas que carregam os seus ficheiros para um servidor remoto para os processar.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Os seus GIFs viajam pela internet para servidores de terceiros',
          'Latência de rede em subida e descida',
          'Limites de tamanho e de ficheiros por sessão',
          'Risco de retenção de dados em servidores alheios',
        ],
      },
      {
        title: 'Nossa Arquitetura Local',
        description: 'Processamento direto no seu hardware através de tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'O GIF nunca abandona o seu dispositivo',
          'Velocidade instantânea sem espera de rede',
          'Sem limites de tamanho nem de ficheiros',
          'Privacidade total: 0 bytes enviados para o exterior',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Como funciona a extração técnica do fotograma',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'A conversão local apoia-se na potência do Canvas API do HTML5. Quando carrega um GIF, o navegador descodifica-o em memória como um elemento Image nativo. Ao renderizá-lo sobre um canvas invisível, o motor gráfico do navegador captura automaticamente o primeiro fotograma da sequência de animação.',
  },
  {
    type: 'paragraph',
    html: 'Dado que o formato JPG não suporta transparências, o nosso algoritmo aplica um fundo branco sólido antes de exportar. O método <code>toDataURL(\'image/jpeg\')</code> do canvas gera o fluxo de bytes JPG diretamente na RAM do seu computador, sem nenhuma ligação de rede. O ficheiro resultante é descarregado imediatamente para o seu dispositivo.',
  },
  {
    type: 'tip',
    title: 'Paleta de cores limitada do GIF',
    html: 'O GIF só pode conter 256 cores por fotograma. O JPG extraído herdará essa paleta reduzida do original: se o GIF tinha degradados ou fotografias, pode ver-se com certa posterização. Para obter o melhor resultado, use GIFs com cores simples ou ilustrações.',
  },
  {
    type: 'title',
    text: 'Casos de uso e compatibilidade do JPG resultante',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Thumbnails e pré-visualizações para plataformas de vídeo e CMS.',
      'Imagens de capa para publicações em redes sociais.',
      'Inserção em documentos Word, PowerPoint ou PDF.',
      'Ficheiros de apresentação e materiais de marketing.',
      'Compatibilidade universal com visores em Windows, macOS e telemóveis.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusão: o fotograma que vale mais do que a animação',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Um GIF animado de 2 MB pode produzir um JPG do primeiro fotograma de apenas 50-200 KB, dependendo da resolução. A nossa ferramenta realiza esta conversão de forma instantânea, privada e sem limites diretamente no seu navegador. Sem servidores, sem contas, sem esperas.',
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
  schemas: generateSchemas({ title, description, inLanguage: 'pt', faq, howTo }),
};
