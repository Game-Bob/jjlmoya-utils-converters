import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAPngLocaleContent } from '../index';

const slug = 'conversor-avif-para-png';
const title = 'Converter AVIF para PNG Online';
const description =
  'Converta imagens AVIF para PNG preservando transparências. Sem carregar ficheiros. Processamento local no seu navegador. Grátis e ilimitado.';

const ui: ImageConverterUI = {
  dragText: 'Arraste os ficheiros AVIF...',
  convertText: 'Para convertê-los para PNG instantaneamente',
  selectFiles: 'Selecionar ficheiros',
  processedFiles: 'Ficheiros processados',
  downloadAll: 'Descarregar Tudo (.zip)',
  pending: 'Pendente',
  bibliographyTitle: 'Referências Bibliográficas',
  faqTitle: 'Perguntas Frequentes',
};

const faq: AvifAPngLocaleContent['faq'] = [
  {
    question: 'Por que deveria converter AVIF para PNG?',
    answer:
      'O AVIF é excelente para compressão, mas a sua compatibilidade é limitada em navegadores antigos e editores clássicos. Ao converter de AVIF para PNG, garante que o seu ficheiro manterá a transparência original e todas as aplicações poderão abri-lo.',
  },
  {
    question: 'As transparências do ficheiro AVIF original são mantidas?',
    answer:
      'Sim. Ao contrário do JPG, que elimina o fundo transparente, ao exportar para PNG o nosso conversor mantém intacto o canal alfa.',
  },
  {
    question: 'É verdade que não carregam as minhas imagens para a Internet?',
    answer:
      'Absolutamente verdade. O nosso conversor é executado de forma 100% local no seu dispositivo, utilizando o motor JavaScript interno.',
  },
];

const howTo: AvifAPngLocaleContent['howTo'] = [
  {
    name: 'Adicione os seus ficheiros AVIF',
    text: 'Pode arrastá-los diretamente para a área delimitada ou usar o botão para explorar as pastas do seu equipamento.',
  },
  {
    name: 'Processamento imediato',
    text: 'Deixe o processador HTML5 renderizar a imagem; o formato mudará automaticamente para PNG em microssegundos.',
  },
  {
    name: 'Obtenha os seus PNGs',
    text: 'Descarregue as imagens convertidas uma a uma ou descarregue um bloco completo através do botão ZIP.',
  },
];

const bibliography: AvifAPngLocaleContent['bibliography'] = [
  {
    name: 'Alliance for Open Media: Formato AVIF',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'W3C - Especificação Portable Network Graphics (PNG)',
    url: 'https://www.w3.org/TR/png/',
  },
];

const seo: AvifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Conversor AVIF para PNG: Da Entrega Web à Edição Profissional',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'O AVIF é o formato ideal para servir imagens na web — pequeno, eficiente e de alta qualidade. Mas quando chega o momento de editar, retocar ou trabalhar com essas imagens em ferramentas de design, o AVIF torna-se um obstáculo. Figma, Photoshop, Illustrator, Sketch e praticamente qualquer ferramenta de design profissional esperam receber PNG para o trabalho com transparências e edição sem perda. Converter AVIF para PNG é a ponte entre o mundo da entrega web e o da edição criativa.',
  },
  {
    type: 'title',
    text: 'AVIF vs PNG: Entrega vs Edição',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O AVIF destaca-se como formato de entrega: ficheiros pequenos, carregamento rápido, suporte de canal alfa e qualidade visual excecional. No entanto, o seu ecossistema de ferramentas é limitado. A maioria dos softwares de design não consegue importar AVIF diretamente, o que interrompe os fluxos de trabalho criativos. Tentar abrir um AVIF no Figma ou importá-lo como camada no Photoshop simplesmente não funciona.',
  },
  {
    type: 'paragraph',
    html: 'O PNG é o formato nativo do design digital. Com compressão sem perda, suporte completo de canal alfa e compatibilidade universal com todas as ferramentas criativas, o PNG é o formato de trabalho por excelência. Quando precisa de escalar, retocar, exportar para múltiplos formatos ou trabalhar em camadas, o PNG garante que não perderá nenhum detalhe nem pixel no processo.',
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
          'As suas imagens de design viajam para servidores de terceiros',
          'Tempo de espera por latência de rede',
          'Possível perda ou alteração do canal alfa',
          'Limites de tamanho que complicam a conversão por lotes',
        ],
      },
      {
        title: 'A Nossa Arquitetura Local',
        description: 'Processamento direto no seu navegador através de tecnologia Vanilla JS e Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Canal alfa preservado com fidelidade perfeita',
          'Conversão instantânea sem transferência de dados',
          'Sem limites de ficheiros, tamanho nem lotes',
          'Privacidade total para ativos de design proprietários',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Como funciona a conversão técnica com transparências',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Os navegadores modernos descodificam AVIF de forma nativa graças aos seus motores AV1 integrados. Ao carregar o ficheiro, o navegador descodifica-o na memória, preservando toda a informação do canal alfa. A imagem descodificada — incluindo as suas transparências — é desenhada sobre um elemento <code>Canvas</code> HTML5 com o modo de composição correto para preservar o canal alfa.',
  },
  {
    type: 'paragraph',
    html: 'Diferente da exportação para JPG (que destrói as transparências preenchendo com branco), a exportação para PNG através de <code>toBlob(\'image/png\')</code> preserva integralmente o canal alfa. O resultado é um PNG com compressão sem perda que mantém cada pixel, cada semitransparência e cada detalhe do AVIF original.',
  },
  {
    type: 'tip',
    title: 'O passo prévio obrigatório para qualquer ferramenta de design',
    html: 'Converta os seus AVIF para PNG antes de os importar para o Figma, Photoshop, Illustrator ou qualquer ferramenta de design. Estas aplicações não leem AVIF diretamente, mas o PNG funciona de forma nativa em todas elas, preservando transparências e qualidade perfeitamente.',
  },
  {
    type: 'title',
    text: 'Casos de uso: quando precisa de AVIF convertido para PNG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Importar no Figma, Sketch, Adobe XD ou outras ferramentas de design UI.',
      'Editar como camada no Photoshop, Affinity Photo ou GIMP preservando transparências.',
      'Usar como fonte para a geração de ícones ou sprites.',
      'Enviar a clientes ou colaboradores que trabalham com software de design padrão.',
      'Arquivar imagens com transparências em formato de edição sem perda.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusão: A ponte entre a web e o design',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF e PNG são parceiros perfeitos num fluxo de trabalho moderno: AVIF para a entrega eficiente na web, PNG para a edição e colaboração em ferramentas de design. Com o nosso conversor, a passagem de um para o outro é instantânea, privada e preserva cada detalhe — exatamente o que precisa quando os seus ativos visuais são importantes.',
  },
];


export const content: AvifAPngLocaleContent = {
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
