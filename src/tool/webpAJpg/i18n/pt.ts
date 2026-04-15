import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAJpgLocaleContent } from '../index';

const slug = 'conversor-de-webp-para-jpg';
const title = 'Converter WebP para JPG Online e Grátis';
const description =
  'Converta imagens WebP para JPG sem carregar arquivos. Processamento local 100% privado. Fundos transparentes são automaticamente substituídos por branco.';

const ui: ImageConverterUI = {
  dragText: 'Arraste arquivos WebP...',
  convertText: 'Para convertê-los em JPG instantaneamente',
  selectFiles: 'Selecionar arquivos',
  processedFiles: 'Arquivos processados',
  downloadAll: 'Baixar tudo (.zip)',
  pending: 'Pendente',
  bibliographyTitle: 'Referências Bibliográficas',
  faqTitle: 'Perguntas Frequentes',
};

const faq: WebpAJpgLocaleContent['faq'] = [
  {
    question: 'Posso carregar imagens privadas com segurança?',
    answer:
      'Sim. Não existe servidor de upload. O seu navegador processa o WebP no seu computador e gera o JPG para você baixar. Mais ninguém o vê.',
  },
  {
    question: 'O que acontece ao meu fundo WebP se ele for transparente?',
    answer:
      'Como o JPG não suporta transparência, o conversor preencherá automaticamente as áreas transparentes com um fundo branco sólido.',
  },
  {
    question: 'Existe um limite de conversões ou tamanho de arquivo?',
    answer:
      'Não impomos restrições. Pode converter centenas de imagens desde que o seu computador tenha poder de processamento e RAM suficientes.',
  },
];

const howTo: WebpAJpgLocaleContent['howTo'] = [
  {
    name: 'Arraste os seus arquivos',
    text: 'Largue os seus arquivos WebP modernos na área de upload ou selecione-os usando o explorador de arquivos interativo.',
  },
  {
    name: 'Conversão Local',
    text: 'Veja como o motor local aplica um fundo e interpreta cada píxel para o formato JPG universal.',
  },
  {
    name: 'Obtenha os seus resultados',
    text: 'Baixe individualmente ou use o pacote ZIP para consolidar todas as suas novas fotografias.',
  },
];

const bibliography: WebpAJpgLocaleContent['bibliography'] = [
  {
    name: 'JPEG.org: Os padrões JPEG',
    url: 'https://jpeg.org/jpeg/',
  },
  {
    name: 'Mozilla Developer Network - image/jpeg',
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/Media/Formats/Image_types#jpeg',
  },
  {
    name: 'Compatibilidade de WebP para JPEG',
    url: 'https://developers.google.com/speed/webp/faq',
  },
];

const seo: WebpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Conversor de WebP para JPG: Compatibilidade Universal sem Comprometer a Privacidade',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'O <strong>WebP</strong> é a aposta da Google na eficiência: imagens mais leves com qualidade comparável ao JPG tradicional. No entanto, a sua compatibilidade continua a ser um problema no mundo real. Clientes de e-mail como o Outlook, software de design legado, apps de mensagens e fluxos de trabalho corporativos ainda dependem do onipresente <strong>JPG</strong>. Converter WebP para JPG é a ponte entre a web moderna e o mundo real.',
  },
  {
    type: 'title',
    text: 'WebP vs JPG: Quando usar cada formato?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O WebP brilha em ambientes controlados: sites modernos no Chrome, Edge ou Firefox, onde a compatibilidade do navegador pode ser garantida. A sua compressão superior reduz o peso do arquivo em 25–35% em comparação com um JPG equivalente, melhorando os tempos de carregamento e as métricas de Core Web Vitals. É o formato ideal quando você controla o ambiente de visualização.',
  },
  {
    type: 'paragraph',
    html: 'O JPG, por outro lado, funciona em <em>absolutamente todos os contextos</em>: anexos de e-mail, apresentações PowerPoint, documentos Word, impressoras domésticas, aplicações de edição legadas e plataformas de redes sociais, sem exceção. Se você precisa que alguém abra a sua imagem sem qualquer fricção técnica, o JPG é a resposta certa.',
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
        description: 'Ferramentas que carregam os seus arquivos para um servidor remoto.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'As suas fotos viajam pela internet para servidores desconhecidos',
          'Tempo de espera para upload e processamento remoto',
          'Limites diários no tamanho do arquivo e conversões gratuitas',
          'Risco real de retenção de dados em servidores de terceiros',
        ],
      },
      {
        title: 'A Nossa Arquitetura Local',
        description: 'Processamento direto no seu hardware utilizando a tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Zero bytes enviados: tudo acontece na sua RAM',
          'Velocidade instantânea sem depender da sua ligação',
          'Sem limites no tamanho ou número de arquivos',
          'Perfeito para fotos pessoais, médicas ou corporativas',
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
    html: 'Quando você arrasta um arquivo WebP para a ferramenta, o navegador descodifica-o nativamente usando o seu motor de renderização interno. O arquivo é então desenhado num elemento <strong>HTML5 Canvas</strong> invisível. Como o JPG não suporta transparência, o algoritmo pré-preenche o canvas com um fundo branco sólido antes de compor a imagem por cima.',
  },
  {
    type: 'paragraph',
    html: 'O passo final é a exportação: o método de Canvas <code>toDataURL(\'image/jpeg\')</code> converte os píxeis do canvas num fluxo de bytes JPG comprimido de alta qualidade. Este fluxo é entregue diretamente ao sistema de download do navegador, sem qualquer comunicação de rede. Todo o processo demora milissegundos, mesmo para imagens de muitos megapíxeis.',
  },
  {
    type: 'tip',
    title: 'Dica de compatibilidade',
    html: 'Ao compartilhar fotos com utilizadores não técnicos ou enviá-las por e-mail, use sempre JPG — zero problemas de compatibilidade em qualquer cliente de e-mail, sistema operativo ou dispositivo, sem exceções e sem surpresas desagradáveis.',
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
      'Anexar fotos em e-mails do Outlook, Gmail ou Apple Mail.',
      'Inserir imagens em documentos Word, Excel ou apresentações PowerPoint.',
      'Publicar em redes sociais que rejeitam WebP.',
      'Compartilhar via WhatsApp ou apps de mensagens com suporte limitado a formatos.',
      'Imprimir fotografias em serviços de impressão que apenas aceitam JPG ou PNG.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusão',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O WebP é o futuro das imagens web, mas o JPG continua a ser o rei da compatibilidade universal. Esta ferramenta permite atravessar essa ponte em segundos, de forma totalmente privada e sem instalar nada. A sua imagem nunca deixa o seu dispositivo.',
  },
];


export const content: WebpAJpgLocaleContent = {
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
