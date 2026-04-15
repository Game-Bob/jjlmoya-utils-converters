import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAPngLocaleContent } from '../index';

const slug = 'conversor-gif-para-png';
const title = 'Converter GIF para PNG Online';
const description =
  'Extraia o primeiro fotograma dos seus GIFs e converta-o para PNG preservando as transparências. Sem servidor. Processamento local. Grátis.';

const ui: ImageConverterUI = {
  dragText: 'Arraste os ficheiros GIF...',
  convertText: 'Para convertê-los para PNG instantaneamente',
  selectFiles: 'Selecionar ficheiros',
  processedFiles: 'Ficheiros processados',
  downloadAll: 'Descarregar Tudo (.zip)',
  pending: 'Pendente',
  bibliographyTitle: 'Referências Bibliográficas',
  faqTitle: 'Perguntas Frequentes',
};

const faq: GifAPngLocaleContent['faq'] = [
  {
    question: 'Porquê converter um formato animado como o GIF para um formato estático como o PNG?',
    answer:
      'Muitas redes sociais ou avatares não admitem fotografias que mudam. Extrair o primeiro fotograma de um GIF complexo para um PNG de alta qualidade soluciona as barreiras e reduz pesos inúteis.',
  },
  {
    question: 'Conservam-se as transparências do velho GIF no PNG resultante?',
    answer:
      'Sim, ao contrário do JPG, o formato PNG mantém o canal alfa. Se o GIF tinha um fundo transparente, o PNG conservá-lo-á com bordas nítidas.',
  },
  {
    question: 'Mantêm as minhas imagens nos servidores algum tempo após o processamento?',
    answer:
      'Nenhum servidor retém o seu GIF; toda a extração é local devido ao Canvas Web API. É o processador do seu PC quem descodifica de forma segura o seu ficheiro sem contacto com rede alguma.',
  },
];

const howTo: GifAPngLocaleContent['howTo'] = [
  {
    name: 'Aproxime-nos a Animação',
    text: 'Passe os pesados ficheiros GIF para o quadro de inserção.',
  },
  {
    name: 'Foto Extraída Perfeita',
    text: 'O sistema paralisará na origem exata do movimento, retirando a cópia impecável em milissegundos.',
  },
  {
    name: 'Guarde o seu Estático',
    text: 'Armazene massivamente em ZIP todo aquele volume de avatares GIFs estáticos convertidos para PNG.',
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
    text: 'Conversor de GIF para PNG: Supere os Limites de Cor e Transparência do GIF',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'O GIF foi projetado numa época em que os monitores apenas podiam mostrar 256 cores. Décadas depois, essa limitação continua a ser a sua maior fraqueza. O PNG nasceu precisamente para substituir o GIF em todos os casos de uso onde a qualidade e a transparência importam: logotipos, ícones, gráficos de interface e qualquer imagem com fundo transparente que deva parecer perfeita sobre qualquer cor de fundo.',
  },
  {
    type: 'title',
    text: 'GIF vs PNG: a revolução das 16 milhões de cores',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'A diferença mais crítica entre GIF e PNG não é apenas o número de cores. O GIF suporta transparência binária: cada píxel é opaco ou completamente transparente, sem gradações. O PNG, em contrapartida, suporta canal alfa completo, com 256 níveis de opacidade por píxel. Isto significa que as bordas de um logótipo em PNG podem ser perfeitamente suavizadas, enquanto as do GIF mostram um serrilhado característico sobre fundos coloridos.',
  },
  {
    type: 'paragraph',
    html: 'Para além da transparência superior, o PNG elimina o limite de 256 cores do GIF. Capturas de ecrã, ilustrações com degradados, logotipos com sombras: todos se veem significativamente melhor em PNG. E ao tratar-se de compressão sem perda, cada píxel conserva exatamente o valor original, sem os artefactos que introduziria uma conversão para JPG.',
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
        description: 'Ferramentas que processam as suas imagens em servidores remotos.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Os seus logotipos e ícones viajam pela internet',
          'Tempo de espera devido à latência de rede',
          'Limites de tamanho e número de ficheiros',
          'As suas imagens podem ficar em caches de terceiros',
        ],
      },
      {
        title: 'Nossa Arquitetura Local',
        description: 'Processamento direto no seu hardware através de tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'O GIF nunca abandona o seu dispositivo',
          'Conversão instantânea sem rede',
          'Sem limites de ficheiros nem de tamanho',
          'Privacidade absoluta: 0 bytes enviados',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Como funciona a conversão local GIF para PNG',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'A conversão utiliza o Canvas API do navegador. O GIF descodifica-se em memória como um elemento Image nativo. Ao renderizá-lo sobre um canvas HTML5, o motor gráfico do navegador captura o primeiro fotograma com toda a sua informação de transparência original intacta.',
  },
  {
    type: 'paragraph',
    html: 'Ao contrário da conversão para JPG, com PNG não é necessário adicionar um fundo branco. O canal alfa do GIF original é preservado diretamente no PNG exportado. O método <code>toDataURL(\'image/png\')</code> gera o fluxo de bytes PNG na RAM do seu computador, sem nenhuma transmissão de rede, e o ficheiro é descarregado diretamente.',
  },
  {
    type: 'tip',
    title: 'Transparência binária do GIF vs canal alfa do PNG',
    html: 'O GIF apenas suporta transparência binária (opaco ou transparente). Ao converter para PNG, os píxeis semitransparentes do GIF mantêm-se como o navegador os interpreta. Se o seu GIF tem bordas serrilhadas, o PNG conservá-las-á — mas poderá editá-las com suavização de bordas em qualquer editor, algo impossível com o GIF original.',
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
      'Logotipos e ícones para uso sobre qualquer cor de fundo.',
      'Avatares para Discord, Telegram, Slack e plataformas de gaming.',
      'Gráficos de interface para aplicações web e móveis.',
      'Stickers e emojis personalizados com fundo transparente.',
      'Capturas de ecrã e elementos UI para documentação técnica.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusão: PNG é o que o GIF sempre quis ser',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Converter de GIF para PNG não é apenas mudar de formato: é atualizar uma imagem para o padrão moderno que o GIF nunca pôde alcançar. Mais cores, melhor transparência, menos peso. A nossa ferramenta realiza esta conversão em milissegundos, diretamente no seu navegador, sem enviar nenhum dado para o exterior.',
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
  schemas: generateSchemas({ title, description, inLanguage: 'pt', faq, howTo }),
};
