import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAPngLocaleContent } from '../index';

const slug = 'conversor-de-webp-para-png';
const title = 'Converter WebP para PNG Online e Grátis';
const description =
  'Converta imagens WebP para PNG no seu navegador. Preserva a transparência. Sem carregamento de arquivos para servidores. Gratuito e 100% privado.';

const ui: ImageConverterUI = {
  dragText: 'Arraste arquivos WebP...',
  convertText: 'Para convertê-los em PNG instantaneamente',
  selectFiles: 'Selecionar arquivos',
  processedFiles: 'Arquivos processados',
  downloadAll: 'Baixar tudo (.zip)',
  pending: 'Pendente',
  bibliographyTitle: 'Referências Bibliográficas',
  faqTitle: 'Perguntas Frequentes',
};

const faq: WebpAPngLocaleContent['faq'] = [
  {
    question: 'Por que preciso converter meus arquivos WebP para PNG?',
    answer:
      'Apesar de serem mais leves, os arquivos WebP podem causar incompatibilidades em programas de edição como o Photoshop antigo. O PNG garante 100% de compatibilidade universal.',
  },
  {
    question: 'As transparências são perdidas ao converter de WebP para PNG?',
    answer:
      'De modo algum. Ao contrário da conversão para JPG, o PNG suporta o canal alfa. Nossa utilidade preservará qualquer área transparente do arquivo original.',
  },
  {
    question: 'Posso carregar arquivos confidenciais da empresa?',
    answer:
      'Pode e deve. Como tudo roda localmente via JavaScript, as imagens da sua empresa nunca sairão do seu computador nem serão armazenadas em servidores externos.',
  },
];

const howTo: WebpAPngLocaleContent['howTo'] = [
  {
    name: 'Arraste seus arquivos WebP',
    text: 'Mova e solte seus arquivos WebP no painel principal ou selecione as imagens tradicionalmente.',
  },
  {
    name: 'Conversão de Alta Fidelidade',
    text: 'Seu navegador redesenhará a imagem píxel por píxel e gerará uma cópia exata em formato PNG, mantendo a gama de cores original.',
  },
  {
    name: 'Download Individual ou em Lote',
    text: 'Salve cada arquivo individualmente ou, se processou um lote, clique no botão ZIP para baixá-los todos juntos compactados.',
  },
];

const seo: WebpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Conversor de WebP para PNG: A Escolha Profissional para Edição e Design',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Quando um designer baixa um asset gráfico em formato <strong>WebP</strong> e tenta abri-lo no Photoshop, Figma ou Illustrator, o resultado pode ser frustrante: o arquivo falha ao carregar ou perde qualidade. O formato <strong>PNG</strong> é o padrão indiscutível da edição profissional: compressão sem perdas (lossless), canal alfa completo e compatibilidade garantida em toda a cadeia de produção criativa.',
  },
  {
    type: 'title',
    text: 'WebP para a Web, PNG para o Estúdio',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O WebP é um formato de produção web: seus algoritmos de compressão são otimizados para reduzir o peso da transferência, não para preservar a fidelidade máxima através de fluxos de trabalho de edição iterativos. Cada vez que você salva um WebP editado, o codec aplica a compressão novamente. Para projetos onde um arquivo será modificado muitas vezes, isso significa uma degradação de qualidade cumulativa.',
  },
  {
    type: 'paragraph',
    html: 'O PNG usa <strong>compressão lossless</strong>: os dados de cada píxel são preservados inteiramente, não importa quantas vezes você salve o arquivo. É o formato escolhido por designers de UI/UX, ilustradores digitais e equipas de branding que precisam de manter a integridade visual através de dezenas de revisões. Ferramentas como Photoshop, Figma, Sketch e Illustrator tratam o PNG como o seu formato de exportação principal.',
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
          'Seus assets de design são armazenados em servidores de terceiros',
          'Processamento remoto lento para arquivos grandes',
          'Risco de fugas para projetos confidenciais de clientes',
          'Conversão em lote limitada ou paga',
        ],
      },
      {
        title: 'A Nossa Arquitetura Local',
        description: 'Processamento direto no seu hardware utilizando a tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Seus designs nunca deixam a sua máquina',
          'Converta instantaneamente dezenas de arquivos em lote',
          'Preservação total do canal alfa e gama de cores',
          'Privacidade absoluta para projetos de clientes',
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
    html: 'Os navegadores modernos podem descodificar WebP nativamente. Nossa ferramenta aproveita essa capacidade para carregar o arquivo num elemento <strong>Image</strong> de JavaScript, e depois desenha-o num canvas HTML5 com as mesmas dimensões do original. Ao contrário da conversão para JPG, aqui não é necessário nenhum preenchimento de fundo: o canvas mantém o canal alfa completo.',
  },
  {
    type: 'paragraph',
    html: 'A exportação final usa o método <code>toDataURL(\'image/png\')</code>, que gera um PNG lossless fiel ao original. O resultado é um arquivo pronto para importar diretamente em qualquer software de design profissional sem passos intermédios, degradação de cor ou perda de transparência.',
  },
  {
    type: 'tip',
    title: 'Dica para editores',
    html: 'Use PNG quando precisar de continuar a editar a imagem. A compressão lossless garante que não haja degradação da qualidade devido a salvamentos repetidos - crítico ao trabalhar com camadas, máscaras ou ajustes de cor no Photoshop ou Figma.',
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
      'Importar assets WebP para Photoshop, Figma, Sketch ou Illustrator.',
      'Preservar a transparência em logótipos e ícones para uso em múltiplos fundos.',
      'Criar cópias mestras de gráficos para projetos de longo prazo.',
      'Exportar assets para apps móveis que requerem PNG com canal alfa.',
      'Usar imagens em mockups de design e apresentações com fundos variáveis.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusão',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Se o WebP é o formato do servidor web, o PNG é o formato do estúdio de design. Esta ferramenta converte os seus assets WebP em PNGs prontos para produção, com transparência intacta e qualidade máxima - tudo no seu navegador e sem que os seus arquivos saiam da sua máquina.',
  },
];


export const content: WebpAPngLocaleContent = {
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
