import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAJpgLocaleContent } from '../index';

const slug = 'conversor-png-para-jpg';
const title = 'Converter PNG para JPG Online';
const description =
  'Converta instantaneamente as suas imagens PNG para o formato JPG com compressão rápida no seu próprio computador. Sem enviar fotos para a Internet. Optimização em lote.';

const ui: ImageConverterUI = {
  dragText: 'Arraste os ficheiros PNG...',
  convertText: 'Para convertê-los para JPG instantaneamente',
  selectFiles: 'Selecionar ficheiros',
  processedFiles: 'Ficheiros processados',
  downloadAll: 'Descarregar Tudo (.zip)',
  pending: 'Pendente',
  bibliographyTitle: 'Referências Bibliográficas',
  faqTitle: 'Perguntas Frequentes',
};

const faq: PngAJpgLocaleContent['faq'] = [
  {
    question: 'Porquê escolher o nosso conversor local de PNG para JPG?',
    answer:
      'Ao contrário das ferramentas convencionais, o nosso utilitário processa os ficheiros inteiramente no seu navegador. As suas imagens nunca tocam num disco rígido de terceiros, garantindo a total soberania e privacidade dos seus dados.',
  },
  {
    question: 'JPG ou PNG? Qual é o melhor para o meu caso?',
    answer:
      'O PNG é ideal para logótipos e elementos com transparência. No entanto, o JPG é o padrão de excelência para fotografias e banners web, uma vez que atinge pesos muito mais reduzidos, melhorando drasticamente a velocidade de carregamento de um sítio.',
  },
  {
    question: 'Como funciona a conversão técnica sem enviar nada?',
    answer:
      'Utilizamos o poder do Canvas do HTML5. O navegador recria a imagem numa tela virtual invisível, preenche as transparências com branco e gera um fluxo de bytes que o utilizador descarrega diretamente no instante.',
  },
  {
    question: 'É seguro para documentos confidenciais?',
    answer:
      'Sim, é a opção mais segura para profissionais da banca, saúde ou direito. Sendo uma "caixa negra" que utiliza apenas a sua memória RAM, o que acontece lá dentro morre ao fechar o separador, evitando fugas em nuvens de terceiros.',
  },
];

const howTo: PngAJpgLocaleContent['howTo'] = [
  {
    name: 'Seleção de ficheiros',
    text: 'Prepare os seus ficheiros PNG numa pasta e arraste-os todos juntos para a área de processamento ou procure-os com o explorador.',
  },
  {
    name: 'Processamento instantâneo',
    text: 'Verifique se o estado muda para "Pronto" para cada ficheiro enquanto o navegador otimiza o peso localmente.',
  },
  {
    name: 'Descarregamento otimizado',
    text: 'Guarde os seus novos JPG um a um ou utilize o botão "Descarregar Tudo" para obter um ficheiro ZIP comprimido com todas as imagens.',
  },
];

const seo: PngAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Conversor de PNG para JPG: O Guia Definitivo para a Optimização de Imagens',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'No mundo do design digital e do desenvolvimento web, a eficiência é tudo. O formato PNG (Portable Network Graphics) é amado pela sua capacidade de manter transparências e pela sua compressão sem perda, mas tem um grande inimigo: o peso do ficheiro. Quando precisa que o seu sítio web voe ou que os seus emails carreguem instantaneamente, a mudança de PNG para JPG é a decisão técnica mais inteligente.',
  },
  {
    type: 'title',
    text: 'JPG ou PNG?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Não existe um formato melhor do que o outro, mas sim uma ferramenta para cada necessidade. O PNG é um formato sem perda, ideal para maquetes de interfaces, logótipos com texto pequeno e elementos visuais que requerem um fundo transparente. No entanto, esta fidelidade tem um custo: ficheiros que podem ser 5 ou 10 vezes mais pesados do que o seu equivalente comprimido.',
  },
  {
    type: 'paragraph',
    html: 'O JPG (Joint Photographic Experts Group), por outro lado, utiliza algoritmos de discretização para remover informação que o olho humano mal percebe, conseguindo pesos pluma. É o padrão de excelência para fotografias, banners publicitários e redes sociais. Ao converter os seus PNG para JPG, está a trocar fidelidade geométrica por velocidade de rede.',
  },
  {
    type: 'title',
    text: 'Comparação de Arquitetura: Local vs Nuvem',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Conversores Cloud',
        description: 'Ferramentas tradicionais que enviam as suas fotos para um servidor remoto.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Latência de rede (Upload/Download)',
          'Risco de fuga de dados privados',
          'Limites de tamanho por ficheiro',
          'Publicidade e rastreadores',
        ],
      },
      {
        title: 'A Nossa Arquitetura Local',
        description: 'Processamento direto no seu hardware através de tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Velocidade instantânea sem rede',
          'Privacidade garantida (0 bytes enviados)',
          'Sem limites de MB por ficheiro',
          'Interface profissional e limpa',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Como funciona a conversão técnica',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Provavelmente pergunta-se como é possível converter uma imagem sem a enviar para um servidor. A magia reside no poder dos navegadores modernos. Quando seleciona um ficheiro, geramos um Blob que apenas existe na sua memória RAM. Esse Blob é desenhado num elemento HTML5 Canvas invisível.',
  },
  {
    type: 'paragraph',
    html: 'Dado que o JPG não suporta transparências, o nosso algoritmo preenche o fundo com uma cor branca sólida antes de "pintar" o PNG por cima. Uma vez composta a imagem, executamos o método de exportação nativo, gerando um fluxo de bytes que o seu computador descarrega diretamente.',
  },
  {
    type: 'tip',
    title: 'Conselho SEO: O Peso Ideal',
    html: 'A Google penaliza ativamente os sítios web lentos. Se o seu Largest Contentful Paint (LCP) é elevado por culpa de um PNG de cabeçalho de 2MB, convertê-lo para um JPG de 200KB pode melhorar as suas métricas de PageSpeed instantaneamente, sem diferenças visuais.',
  },
  {
    type: 'title',
    text: 'Segurança para Empresas e Profissionais',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Se trabalha em setores sensíveis como a banca, a saúde ou o direito, enviar ficheiros para conversores online é uma violação de segurança. A nossa ferramenta funciona como uma "caixa negra": o que acontece lá dentro fica na sua RAM. É a única forma segura de trabalhar com documentos confidenciais.',
  },
  {
    type: 'title',
    text: 'Compatibilidade do Resultado',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Visualizadores do Windows, macOS e dispositivos móveis.',
      'Redes sociais (Instagram, LinkedIn, etc).',
      'Ferramentas de escritório (Word, PowerPoint).',
      'Gestores de conteúdo (WordPress, Shopify).',
    ],
  },
  {
    type: 'title',
    text: 'Conclusão: Otimize como um Profissional',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Este conversor não é apenas mais uma página; é uma peça de engenharia desenhada para lhe facilitar a vida. Quer seja um programador ou um utilizador doméstico, aqui tem a solução definitiva para poupar megabytes e manter os seus dados a salvo.',
  },
];


export const content: PngAJpgLocaleContent = {
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
