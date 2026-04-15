import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAWebpLocaleContent } from '../index';

const slug = 'conversor-bmp-para-webp';
const title = 'Converter BMP para WebP Grátis';
const description =
  'Converta imagens BMP para WebP sem ligação. Reduza ficheiros enormes para kilobytes. Sem carregar ficheiros. Grátis, offline e completamente privado.';

const ui: ImageConverterUI = {
  dragText: 'Arraste os ficheiros BMP...',
  convertText: 'Para convertê-los para WebP instantaneamente',
  selectFiles: 'Selecionar ficheiros',
  processedFiles: 'Ficheiros processados',
  downloadAll: 'Descarregar Tudo (.zip)',
  pending: 'Pendente',
  bibliographyTitle: 'Referências Bibliográficas',
  faqTitle: 'Perguntas Frequentes',
};

const faq: BmpAWebpLocaleContent['faq'] = [
  {
    question: 'Porque é que os meus ficheiros BMP ocupam 10 vezes mais e o que ganho em tê-los em WebP?',
    answer:
      'O BMP guarda mapas de píxeis sem comprimir. O WebP usa compressão matemática para baixar enormes BMPs para menos de um megabyte mantendo a imagem sumamente reconhecível.',
  },
  {
    question: 'Tenho de registar uma conta?',
    answer:
      'Não exigimos email e o seu material permanecerá isolado, uma vez que o processamento é realizado pelo Javascript do navegador instalado no seu PC, sem envio remoto.',
  },
  {
    question: 'Posso arrastar muitos ficheiros simultaneamente?',
    answer:
      'Sim, pode arrastar 50 ou 100 ficheiros se o seu hardware aguentar processar todos sem fazer filas.',
  },
];

const howTo: BmpAWebpLocaleContent['howTo'] = [
  {
    name: 'Identificar Ficheiros Brutos',
    text: 'Coloque as suas coleções de mapa de bits em janelas prontas para a transferência.',
  },
  {
    name: 'Ativação Nativa do Lote',
    text: 'Projete ou arraste todos os ficheiros para a nossa mesa digital.',
  },
  {
    name: 'Evacuação do Lote WebP',
    text: 'Pressione os resultados e obterá separadamente a imagem em disco de micro-pesos ou como comprimidos imediatos.',
  },
];

const bibliography: BmpAWebpLocaleContent['bibliography'] = [
  {
    name: 'BMP File Format',
    url: 'https://en.wikipedia.org/wiki/BMP_file_format',
  },
  {
    name: 'Google WebP Documentation',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: BmpAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Conversor BMP para WebP: A Redução de Tamanho Mais Extrema Possível',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Converter BMP para WebP é, sem dúvida, a transformação mais espetacular que pode fazer com uma imagem. O formato BMP (Bitmap) é o formato mais antigo e pesado do ecossistema digital: armazena cada píxel sem qualquer tipo de compressão, resultando em ficheiros que podem pesar 20, 50 ou até 100 vezes mais do que o seu equivalente moderno. WebP, desenvolvido pela Google, aplica algoritmos de compressão de última geração que reduzem o tamanho ao mínimo possível mantendo uma qualidade visual excelente.',
  },
  {
    type: 'title',
    text: 'Porque é que o BMP é tão pesado e o WebP tão eficiente?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O formato BMP nasceu nos anos 80 para Windows, quando o espaço em disco era enorme e a compressão não era uma prioridade. Cada píxel é guardado tal como é, sem nenhum algoritmo de redução: uma imagem de 1920x1080 píxeis em BMP ocupa exatamente 5,93 MB, independentemente do seu conteúdo. Isto torna-o ideal para capturas de ecrã internas ou edição sem perdas, mas completamente inapropriado para a web ou o armazenamento moderno.',
  },
  {
    type: 'paragraph',
    html: 'WebP utiliza compressão preditiva baseada em blocos e transformadas DCT (a mesma tecnologia que está na base do vídeo digital), conseguindo que a mesma imagem de 1920x1080 ocupe entre 80 KB e 300 KB. Isso supõe uma redução de 95 a 99% em relação ao BMP original. Além disso, WebP suporta canal alfa para transparências e compressão tanto com perda como sem perda, oferecendo versatilidade total.',
  },
  {
    type: 'title',
    text: 'Comparativa: Conversores Cloud vs Nossa Arquitetura Local',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Conversores Cloud',
        description: 'Ferramentas que carregam os seus ficheiros BMP para um servidor remoto para os processar.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Subir um BMP de 20 MB demora minutos com ligação lenta',
          'As suas imagens ficam armazenadas em servidores alheios',
          'Limites de tamanho que excluem ficheiros BMP grandes',
          'Publicidade invasiva e rastreadores de dados',
        ],
      },
      {
        title: 'Nossa Arquitetura Local',
        description: 'Processamento direto no seu navegador através de tecnologia Vanilla JS e Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Conversão instantânea sem transferência de rede',
          'Privacidade absoluta — 0 bytes saem do seu dispositivo',
          'Sem limites de tamanho por ficheiro',
          'Funciona sem ligação à internet',
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
    html: 'Ao arrastar um ficheiro BMP, o navegador lê-o como um Blob binário em memória RAM. Este Blob é carregado num elemento <code>Image</code> de JavaScript, que o descodifica usando o motor de imagens nativo. A seguir, a imagem é pintada sobre um elemento <code>Canvas</code> HTML5 invisível. O Canvas atua como tela virtual onde a imagem existe na sua forma píxel a píxel.',
  },
  {
    type: 'paragraph',
    html: 'Uma vez pintada no Canvas, executamos o método <code>toBlob()</code> com o tipo MIME <code>image/webp</code> e o nível de qualidade desejado. O navegador aplica internamente o algoritmo de compressão WebP e gera um novo Blob com o ficheiro resultante. Este Blob converte-se num URL de descarregamento direto que o seu navegador guarda no disco. Em nenhum momento é estabelecida nenhuma ligação de rede.',
  },
  {
    type: 'tip',
    title: 'O maior salto de compressão possível',
    html: 'A conversão de BMP para WebP pode conseguir uma redução de 99% no tamanho do ficheiro. Um BMP de 20 MB pode converter-se num WebP de apenas 200 KB com qualidade visual praticamente idêntica. É a transformação mais eficiente disponível entre formatos de imagem padrão.',
  },
  {
    type: 'title',
    text: 'Casos de uso e compatibilidade de WebP',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Publicação web — Chrome, Firefox, Safari, Edge e todos os navegadores modernos.',
      'Redes sociais — Instagram, Twitter, Facebook aceitam WebP de forma nativa.',
      'Aplicações web e PWA — tamanhos mínimos para carga instantânea.',
      'Arquivamento eficiente — substitui coleções de BMPs herdados poupando gigabytes.',
      'Email marketing — imagens leves que carregam rápido em qualquer cliente de correio moderno.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusão: A conversão mais impactante num único clique',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Se tem ficheiros BMP herdados do Windows, capturas de ecrã sem comprimir ou imagens de ferramentas antigas, convertê-los para WebP é a ação mais impactante que pode tomar para otimizar o seu armazenamento e desempenho web. Com a nossa ferramenta, a conversão é instantânea, privada e sem limites — exatamente como deveria ser.',
  },
];


export const content: BmpAWebpLocaleContent = {
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
