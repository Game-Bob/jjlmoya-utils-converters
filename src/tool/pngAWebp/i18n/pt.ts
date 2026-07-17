import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAWebpLocaleContent } from '../index';

const slug = 'conversor-de-png-para-webp';
const title = 'Converter PNG para WebP Online e Grátis';
const description =
  'Converta imagens PNG para WebP no seu navegador. Até 40% menos tamanho de arquivo. Preserva a transparência. Sem upload de arquivos. Gratuito e privado.';

const ui: ImageConverterUI = {
  dragText: 'Arraste arquivos PNG...',
  convertText: 'Para convertê-los em WebP instantaneamente',
  selectFiles: 'Selecionar arquivos',
  processedFiles: 'Arquivos processados',
  downloadAll: 'Baixar tudo (.zip)',
  pending: 'Pendente',
  bibliographyTitle: 'Referências Bibliográficas',
  faqTitle: 'Perguntas Frequentes',
};

const faq: PngAWebpLocaleContent['faq'] = [
  {
    question: 'Porquê converter PNG para WebP?',
    answer:
      'O WebP oferece uma compressão até 40% melhor do que o PNG com a mesma qualidade, ao mesmo tempo que suporta a transparência Alpha. É o formato recomendado pelo Google PageSpeed Insights.',
  },
  {
    question: 'A transparência é perdida no processo?',
    answer:
      'Não. A implementação técnica do WebP suporta o canal alfa. As transparências do PNG original serão preservadas no novo arquivo WebP.',
  },
  {
    question: 'As minhas imagens vão para algum servidor?',
    answer:
      'Não. O código corre exclusivamente no seu navegador (Client-Side). Nunca vemos, registamos ou guardamos as imagens que converte.',
  },
];

const howTo: PngAWebpLocaleContent['howTo'] = [
  {
    name: 'Insira os seus PNGs',
    text: 'Largue os seus arquivos PNG grandes na área de upload ou utilize o seletor interativo tradicional.',
  },
  {
    name: 'Deteção de canal',
    text: 'O motor de renderização local detetará e exportará a composição de píxeis para o formato WebP otimizado.',
  },
  {
    name: 'Download Direto',
    text: 'Baixe os seus arquivos WebP altamente comprimidos individualmente ou agrupe-os utilizando o conversor de pacotes ZIP.',
  },
];

const seo: PngAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Conversor de PNG para WebP: Transparência e compressão moderna para a web',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'O <strong>PNG</strong> tem sido o formato de referência para imagens web com transparência durante décadas - logótipos, ícones, elementos de UI, imagens de produtos em fundos recortados. O seu problema é o tamanho do arquivo: a compressão sem perdas que garante a qualidade também gera arquivos visivelmente grandes. O <strong>WebP</strong> da Google resolve esta contradição: suporta o canal alfa (transparência) <em>e</em> comprime muito melhor do que o PNG, tornando a mudança de PNG para WebP no seu website uma otimização perfeita que não sacrifica nada.',
  },
  {
    type: 'title',
    text: 'PNG ou WebP? Quando utilizar cada formato',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O <strong>PNG</strong> continua a ser o formato certo quando a compatibilidade é crítica: ferramentas de design como o Photoshop ou Figma, fluxos de trabalho de impressão, aplicações de desktop antigas ou qualquer contexto onde o suporte WebP não seja garantido. É também o formato ideal para guardar camadas de trabalho em pipelines de edição, uma vez que a sua compressão sem perdas preserva cada píxel. O custo: arquivos que podem pesar 3 a 8 vezes mais do que o seu equivalente WebP.',
  },
  {
    type: 'paragraph',
    html: 'O <strong>WebP</strong> é a substituição natural do PNG para todo o conteúdo web moderno. Chrome, Firefox, Safari e Edge suportam-no nativamente. Uma imagem WebP sem perdas é 26% menor do que o PNG equivalente; em modo lossy pode ser até 40% menor com uma qualidade visual praticamente indistinguível. E crucial para o web design: o <strong>WebP preserva a transparência alfa</strong> exatamente como o PNG, sem qualquer compromisso visual.',
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
          'Latência de rede no upload e download',
          'Os seus logótipos e imagens armazenados em servidores de terceiros',
          'Limites de tamanho de arquivo e quotas de conversão diárias',
          'Anúncios intrusivos e rastreadores de terceiros',
        ],
      },
      {
        title: 'A Nossa Arquitetura Local',
        description: 'Processamento direto no seu hardware utilizando a tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Velocidade instantânea - latência de rede zero',
          'Privacidade total - 0 bytes enviados externamente',
          'Sem limites de MB ou restrições no número de arquivos',
          'Interface limpa, sem anúncios ou rastreamento',
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
    html: 'O PNG é carregado localmente e descodificado num <strong>HTML5 Canvas</strong> em memória. A API Canvas preserva o canal alfa do PNG original - todos os píxeis transparentes e semitransparentes são mantidos intactos no buffer de píxeis RGBA. O canvas é então exportado chamando <code>toDataURL(\'image/webp\')</code>, que aplica o codec WebP do navegador (baseado no libwebp da Google) para gerar um arquivo mais compacto sem alterar os dados de transparência.',
  },
  {
    type: 'paragraph',
    html: 'O WebP utiliza dois modos de compressão: modo sem perdas para imagens onde cada píxel deve ser exatamente fiel ao original, e modo lossy para fotos e elementos onde pequenas diferenças são impercetíveis. O modo sem perdas produz arquivos 26% menores do que o PNG; o modo lossy pode atingir reduções de até 40% em comparação com o PNG, mantendo uma excelente qualidade visual.',
  },
  {
    type: 'tip',
    title: 'Dica: o WebP supera tanto o PNG como o JPG na web',
    html: 'O WebP em modo sem perdas é menor do que o PNG. O WebP em modo lossy é menor do que o JPG. Isto torna o WebP o <strong>único formato que substitui ambos</strong> no contexto web. Converta os seus PNGs transparentes para WebP antes de fazer o upload: o Google PageSpeed Insights deteta isso e pontua positivamente nas auditorias de "Servir imagens em formatos modernos".',
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
      'Logótipos e ícones com fundos transparentes para websites e apps.',
      'Imagens de produtos com fundos recortados em lojas de e-commerce.',
      'CSS sprites e elementos de UI com transparência alfa.',
      'Ilustrações rasterizadas e gráficos vetoriais para landing pages.',
      'Miniaturas de artigos com fundos transparentes em blogs e portais de notícias.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusão',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'A mudança de PNG para WebP é a otimização de imagem web mais completa disponível: obtém arquivos mais leves, preserva a transparência e melhora as métricas de Core Web Vitals sem alterar nada no seu design visual. Esta ferramenta faz isso instantaneamente, gratuitamente e de forma completamente privada - as suas imagens são processadas no seu navegador e nunca viajam para qualquer servidor externo.',
  },
];


export const content: PngAWebpLocaleContent = {
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
