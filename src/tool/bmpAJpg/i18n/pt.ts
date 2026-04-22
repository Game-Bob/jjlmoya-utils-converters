import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAJpgLocaleContent } from '../index';

const slug = 'conversor-bmp-para-jpg';
const title = 'Converter BMP para JPG Online';
const description =
  'Converta imagens BMP para JPG no seu navegador. Reduza drasticamente o tamanho. Sem carregar ficheiros para servidores. Grátis e 100% privado.';

const ui: ImageConverterUI = {
  dragText: 'Arraste os ficheiros BMP...',
  convertText: 'Para convertê-los para JPG instantaneamente',
  selectFiles: 'Selecionar ficheiros',
  processedFiles: 'Ficheiros processados',
  downloadAll: 'Descarregar Tudo (.zip)',
  pending: 'Pendente': 'Referências Bibliográficas',
  faqTitle: 'Perguntas Frequentes',
};

const faq: BmpAJpgLocaleContent['faq'] = [
  {
    question: 'Porquê converter BMP para JPG?',
    answer:
      'O formato BMP não comprime os dados, resultando em ficheiros extremamente grandes. O formato JPG comprime a imagem drasticamente mantendo uma qualidade visual excelente para a web e distribuição.',
  },
  {
    question: 'É seguro converter as minhas imagens aqui?',
    answer:
      '100% seguro. A sua privacidade está garantida uma vez que o processamento é realizado integralmente de forma local usando o motor do seu próprio navegador web.',
  },
  {
    question: 'Como funciona a ferramenta?',
    answer:
      'Simplesmente arraste os seus ficheiros BMP, e o nosso script em JavaScript lerá os píxeis para os redesenhar sobre um canvas HTML e exportá-los em codificação JPEG instantaneamente.',
  },
];

const howTo: BmpAJpgLocaleContent['howTo'] = [
  {
    name: 'Carregue os seus ficheiros BMP',
    text: 'Arraste e solte ou selecione as suas imagens em formato BMP na zona designada.',
  },
  {
    name: 'Processamento Automático',
    text: 'A ferramenta rasteriza a imagem e aplica o nível ótimo de compressão em formato JPG em milissegundos.',
  },
  {
    name: 'Descarregamento Individual ou em Lote',
    text: 'Obtenha as suas novas imagens otimizadas para a web, seja uma a uma ou descarregando um ficheiro ZIP.',
  },
];

const seo: BmpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Conversor de BMP para JPG: Reduza um Ficheiro Gigante em Segundos',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'O BMP (Bitmap) é o formato mais ingénuo da informática: armazena cada píxel tal como está, sem qualquer tipo de compressão. Uma captura de ecrã de 1920x1080 em BMP pesa aproximadamente 6 MB. Essa mesma imagem em JPG ocupa entre 200 e 400 KB com uma qualidade visualmente indistinguível. A diferença é abismal, e a nossa ferramenta permite-lhe realizar essa conversão em segundos, diretamente no seu navegador, sem carregar nada para nenhum servidor.',
  },
  {
    type: 'title',
    text: 'BMP vs JPG: dados em bruto contra compressão inteligente',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O formato BMP foi criado pela Microsoft na era do Windows 3.1. A sua filosofia é a mais simples possível: cada píxel ocupa 3 bytes (vermelho, verde, azul), e os píxeis são armazenados em fila sem qualquer processamento adicional. Esta ausência total de compressão faz com que os ficheiros BMP sejam entre 50 e 100 vezes maiores do que o seu equivalente em JPG, para fotografias e capturas de ecrã reais.',
  },
  {
    type: 'paragraph',
    html: 'O JPG, por contraste, utiliza a Transformada Discreta de Cosseno (DCT) para analisar cada bloco de 8x8 píxeis e eliminar a informação de alta frequência que o olho humano mal percebe. O resultado é uma imagem que parece idêntica mas que pesa uma fração do original. Para ficheiros BMP provenientes de capturas de ecrã, scanners ou aplicações legacy do Windows, a conversão para JPG é a ação de otimização mais impactante possível.',
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
        description: 'Serviços que carregam os seus ficheiros BMP para servidores remotos para processá-los.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Carregar um BMP de 10 MB demora tempo em ligações lentas',
          'As suas capturas e imagens confidenciais viajam pela internet',
          'Limites de tamanho frequentes em planos gratuitos',
          'Latência dupla: carregamento e descarregamento do ficheiro convertido',
        ],
      },
      {
        title: 'A Nossa Arquitetura Local',
        description: 'Processamento direto no seu hardware através de tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'O BMP é processado na sua RAM, não viaja para nenhum servidor',
          'Conversão instantânea sem esperas',
          'Sem limites de tamanho por ficheiro',
          'Privacidade total: 0 bytes enviados para o exterior',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Como funciona a conversão técnica de BMP para JPG',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Quando arrasta um ficheiro BMP para a ferramenta, o navegador lê-o com a API <code>FileReader</code> e descodifica-o como um objeto Blob em memória. Esse Blob é renderizado sobre um canvas HTML5 invisível. A seguir, o método <code>toDataURL(\'image/jpeg\')</code> aplica o algoritmo de compressão JPEG sobre os dados do canvas e gera o ficheiro JPG resultante.',
  },
  {
    type: 'paragraph',
    html: 'Dado que o BMP não tem canal alfa (não suporta transparências), a conversão para JPG é direta sem necessidade de composição com fundo branco. O processo completo ocorre na memória RAM do seu computador, sem qualquer transmissão de dados através da rede, em milissegundos inclusive para ficheiros de vários megabytes.',
  },
  {
    type: 'tip',
    title: 'Os BMP do Windows podem ser enormes',
    html: 'Os ficheiros BMP gerados por capturas de ecrã (tecla PrtScn no Windows) ou por aplicações legacy como o Paint podem pesar entre 50 e 100 vezes mais do que um JPG equivalente. Um único BMP de resolução Full HD pode superar os 6 MB. Convertê-los para JPG antes de os enviar por email ou de os carregar para qualquer plataforma é uma prática essencial.',
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
      'Otimização de capturas de ecrã do Windows para enviar por email.',
      'Conversão de imagens exportadas por software legacy (CAD, scanners antigos).',
      'Redução de peso para carregar imagens em plataformas web e redes sociais.',
      'Preparação de ficheiros para inserção em documentos Word, PowerPoint ou PDF.',
      'Compatibilidade universal com todos os visualizadores e navegadores modernos.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusão: 10 MB de BMP, 500 KB de JPG, mesma imagem',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'A conversão de BMP para JPG é um dos exercícios de otimização mais rentáveis no manuseamento de ficheiros de imagem. A nossa ferramenta realiza essa transformação em segundos, sem carregar qualquer ficheiro, sem criar qualquer conta, diretamente no seu navegador. O resultado é um JPG de alta qualidade, universalmente compatível e com um peso até 97% inferior ao BMP original.',
  },
];


export const content: BmpAJpgLocaleContent = {
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
