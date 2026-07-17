import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAJpgLocaleContent } from '../index';

const slug = 'conversor-de-svg-para-jpg';
const title = 'Converter SVG para JPG Online e Grátis';
const description =
  'Converta arquivos vetoriais SVG para JPG no seu navegador. Renderização de alta resolução 2x. Sem upload de arquivos. Gratuito e 100% privado.';

const ui: ImageConverterUI = {
  dragText: 'Arraste arquivos SVG...',
  convertText: 'Para convertê-los em JPG instantaneamente',
  selectFiles: 'Selecionar arquivos',
  processedFiles: 'Arquivos processados',
  downloadAll: 'Baixar tudo (.zip)',
  pending: 'Pendente',
  bibliographyTitle: 'Referências Bibliográficas',
  faqTitle: 'Perguntas Frequentes',
};

const faq: SvgAJpgLocaleContent['faq'] = [
  {
    question: 'Porquê converter SVG para JPG?',
    answer:
      'O JPG oferece a máxima compatibilidade em todos os tipos de dispositivos; converter SVG para JPG é a melhor forma de garantir que todos possam visualizar o seu design sem problemas de renderização.',
  },
  {
    question: 'O que acontece à transparência do SVG?',
    answer:
      'Ao converter para JPG (que não suporta transparência), será automaticamente adicionado um fundo branco opaco à sua composição vetorial.',
  },
  {
    question: 'Qual a resolução que o JPG resultante terá?',
    answer:
      'A ferramenta renderiza o SVG em escala dupla (2x) para garantir uma alta resolução adequada para ecrãs Retina e uso profissional.',
  },
];

const howTo: SvgAJpgLocaleContent['howTo'] = [
  {
    name: 'Insira os seus arquivos vetoriais',
    text: 'Largue os seus arquivos SVG na área superior para preparar a lista de exportação.',
  },
  {
    name: 'Rasterização para JPG',
    text: 'A ferramenta converterá os vetores em píxeis de alta resolução e gerará o seu JPG instantaneamente.',
  },
  {
    name: 'Baixe os resultados',
    text: 'Obtenha os seus arquivos JPG um a um ou como um pacote ZIP.',
  },
];

const seo: SvgAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Conversor de SVG para JPG: Leve os seus vetores para qualquer plataforma',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'O formato <strong>SVG</strong> é a linguagem nativa da web moderna: leve, escalável, editável. Mas existem plataformas inteiras que simplesmente não compreendem vetores. Redes sociais, clientes de e-mail, documentos Word, aplicações de impressão e a grande maioria do software do mundo real trabalham com imagens rasterizadas. O <strong>JPG</strong> é o denominador comum universal: aceite em todo o lado, sem exceções, sem plugins e sem necessidade de conversões adicionais.',
  },
  {
    type: 'title',
    text: 'SVG vs JPG: Quando o vetor precisa de se tornar uma foto',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O SVG armazena a imagem como instruções matemáticas. Esta natureza vetorial torna-o perfeito para a web, mas invisível para o mundo analógico e software antigo. Um arquivo SVG enviado por e-mail pode aparecer como texto XML incompreensível no cliente do destinatário. Um SVG anexado a um documento Word pode nem sequer ser renderizado em versões mais antigas do Office.',
  },
  {
    type: 'paragraph',
    html: 'O JPG converte cada imagem numa matriz de píxeis com informação de cor comprimida pelo algoritmo JPEG. Uma vez que não suporta um canal alfa, o conversor funde automaticamente o fundo com branco sólido. Em troca, obtém um arquivo que abre em <em>qualquer dispositivo no planeta</em>: telemóveis antigos, impressoras, smart TVs, apps de edição de há vinte anos. É o formato do mínimo denominador comum e, em muitos contextos, o mais valioso.',
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
          'O seu código SVG (com dados de design proprietários) viaja para servidores externos',
          'Renderização inconsistente de tipos de letra e gradientes',
          'Ligação à Internet necessária para cada conversão',
          'Qualidade de saída JPG nem sempre configurável',
        ],
      },
      {
        title: 'A Nossa Arquitetura Local',
        description: 'Processamento direto no seu hardware utilizando a tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Zero bytes do seu SVG deixam o navegador',
          'Renderização fiel utilizando o motor nativo do navegador',
          'JPG de resolução 2x para máxima nitidez',
          'Fundo branco aplicado automaticamente conforme o padrão JPG',
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
    html: 'O arquivo SVG é carregado num elemento <strong>Image</strong> do navegador, que utiliza o seu próprio motor de renderização vetorial para interpretar o XML. O resultado visual é desenhado num <strong>HTML5 Canvas</strong> com um preenchimento prévio de fundo branco (necessário porque o JPG não suporta transparência) em escala dupla para maximizar a resolução de saída.',
  },
  {
    type: 'paragraph',
    html: 'O método <code>toDataURL(\'image/jpeg\', 0.92)</code> converte os píxeis do canvas num arquivo JPG de alta qualidade. As cores do SVG podem sofrer ligeiras variações devido à conversão do espaço de cor na compressão JPEG. É por isso aconselhável pré-visualizar o resultado antes de o utilizar em trabalhos de impressão profissionais onde a fidelidade cromática é crítica.',
  },
  {
    type: 'tip',
    title: 'Dica para uso em impressão',
    html: 'Fundos e gradientes SVG podem parecer ligeiramente diferentes em JPG devido a diferenças de perfil de cor na compressão JPEG. Pré-visualize sempre o resultado antes de enviar para uma impressora ou utilizá-lo em materiais de marketing impressos onde a precisão exata da cor da marca é importante.',
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
      'Partilhar logótipos e ilustrações SVG no Facebook, Twitter ou LinkedIn.',
      'Anexar gráficos vetoriais em e-mails via Outlook ou Gmail.',
      'Inserir designs SVG em documentos Word, Excel ou apresentações.',
      'Publicar imagens de produtos em lojas online que não suportam SVG.',
      'Preparar arquivos para serviços de impressão sob demanda.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusão',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O mundo real ainda fala em píxeis. Esta ferramenta traduz os seus vetores SVG para a linguagem universal do JPG em segundos, com renderização de alta resolução e sem que os seus designs proprietários alguma vez deixem o seu navegador.',
  },
];


export const content: SvgAJpgLocaleContent = {
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
