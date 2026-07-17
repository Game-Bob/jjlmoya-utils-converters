import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAWebpLocaleContent } from '../index';

const slug = 'conversor-de-gif-para-webp';
const title = 'Converter GIF para WebP estático Online';
const description =
  'Converta GIFs animados para WebP estático. Preserva a transparência. Sem servidor. Processado localmente no seu navegador. Gratuito.';

const ui: ImageConverterUI = {
  dragText: 'Arraste os arquivos GIF...',
  convertText: 'Para convertê-los em WebP instantaneamente',
  selectFiles: 'Selecionar arquivos',
  processedFiles: 'Arquivos processados',
  downloadAll: 'Baixar tudo (.zip)',
  pending: 'Pendente',
  bibliographyTitle: 'Referências Bibliográficas',
  faqTitle: 'Perguntas Frequentes',
};

const faq: GifAWebpLocaleContent['faq'] = [
  {
    question: 'Por que congelar um arquivo animado para o formato moderno WebP estático?',
    answer:
      'WebP é o padrão de compressão do Google; é notavelmente leve e mantém a transparência de forma limpa. Mudar de GIF para WebP elimina a animação pesada e proporciona um ganho abismal na velocidade da web.',
  },
  {
    question: 'O avatar original permanecerá transparente?',
    answer:
      'Sim, ao contrário do JPEG, o contentor WebP respeita o complexo canal Alpha. Todas as suas silhuetas permanecerão perfeitas como eram nativamente.',
  },
  {
    question: 'Para onde os arquivos serão enviados?',
    answer:
      'Não há upload. O processamento é realizado inteiramente pelo Javascript do navegador no seu PC, com zero envio remoto.',
  },
];

const howTo: GifAWebpLocaleContent['howTo'] = [
  {
    name: 'Lance uma avalanche animada',
    text: 'Mova e solte dezenas de memes na zona delimitada sem conexão remota.',
  },
  {
    name: 'Testemunhe a grande mudança invisível',
    text: 'Observe um indicador progressivo mudar a cada milissegundo enquanto o decodificador canvas local gera o resultado.',
  },
  {
    name: 'Salve seu arsenal de resultados limpos',
    text: 'Pegue os arquivos extraídos individualmente ou pressione Baixar Zip para empacotar tudo.',
  },
];

const seo: GifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Conversor de GIF para WebP: O substituto moderno para animações pesadas',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'GIFs animados são os dinossauros do conteúdo web moderno: consomem largura de banda desproporcional, degradam o PageSpeed de qualquer página e são responsáveis por uma porcentagem significativa do peso total em milhares de sites. Um GIF animado típico de 5 MB pode tornar-se uma animação WebP com menos de 1 MB com a mesma qualidade visual. WebP é o sucessor moderno que a Google projetou especificamente para substituir o GIF na web.',
  },
  {
    type: 'title',
    text: 'GIF vs WebP: o abismo entre o passado e o presente da web',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O GIF é um formato de 1987 não projetado originalmente para animações - essa funcionalidade surgiu como um "hack" posterior. A sua paleta de 256 cores, a compressão ineficiente e a incapacidade de lidar com áudio tornam-no um formato obsoleto. O WebP, desenvolvido pela Google em 2010, oferece compressão superior, tanto com perdas como sem perdas, suporte nativo para animações e canal alpha completo.',
  },
  {
    type: 'paragraph',
    html: 'Para um desenvolvedor web, substituir GIFs por WebP nas páginas pode significar uma melhoria na pontuação do Google PageSpeed de 10 a 30 pontos. Menos peso de página significa melhores Core Web Vitals, melhor posicionamento SEO e menores custos de largura de banda nos servidores. Não é apenas uma melhoria estética - é uma decisão de arquitetura técnica.',
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
        description: 'Plataformas que processam os seus GIFs em servidores remotos.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'As suas animações viajam pela internet para servidores de terceiros',
          'Tempo de espera devido à latência de rede no upload e download',
          'Limites de tamanho (GIFs grandes são frequentemente rejeitados)',
          'Risco de retenção e análise de arquivos',
        ],
      },
      {
        title: 'Nossa Arquitetura Local',
        description: 'Processamento direto no seu hardware usando tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'O GIF nunca sai do seu dispositivo',
          'Conversão instantânea sem espera de rede',
          'Sem limites de tamanho: processe GIFs de qualquer peso',
          'Privacidade total: 0 bytes enviados externamente',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Como funciona a conversão local de GIF para WebP',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'A conversão local utiliza a API HTML5 Canvas. O GIF é carregado como um elemento Image nativo do navegador. Ao desenhá-lo num canvas, o motor gráfico captura o primeiro quadro da animação com toda a sua informação de transparência. O método <code>toDataURL(\'image/webp\')</code> exporta o quadro como WebP diretamente na RAM.',
  },
  {
    type: 'paragraph',
    html: 'O WebP suporta canal alpha completo, pelo que as transparências do GIF são preservadas no WebP resultante sem necessidade de adicionar um fundo. Os algoritmos de compressão do WebP são significativamente mais eficientes do que os do GIF ou PNG, o que explica a redução drástica do tamanho do arquivo final.',
  },
  {
    type: 'tip',
    title: 'Melhoria garantida no PageSpeed',
    html: 'Um GIF animado de 5 MB pode tornar-se um WebP com menos de 1 MB. Se tiver GIFs nas páginas do seu site, substituí-los por WebP pode melhorar imediatamente o seu Largest Contentful Paint (LCP) e Total Blocking Time (TBT), impactando diretamente o posicionamento SEO.',
  },
  {
    type: 'title',
    text: 'Casos de uso e compatibilidade do WebP resultante',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Substituir GIFs em páginas web para melhorar as pontuações de PageSpeed.',
      'Avatares e stickers otimizados para Discord, Slack e plataformas modernas.',
      'Banners e visuais para campanhas de marketing digital.',
      'Animações em aplicações web progressivas (PWA).',
      'Compatível com Chrome, Edge, Firefox, Safari 14+ e todos os navegadores modernos.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusão: migre os seus GIFs para o século XXI',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Cada GIF no seu site é uma oportunidade de otimização perdida. A nossa ferramenta converte GIFs para WebP instantaneamente, de forma privada e sem limites, diretamente no seu navegador. O resultado: arquivos até 5 vezes menores, transparência perfeita e compatibilidade com todos os navegadores modernos.',
  },
];


export const content: GifAWebpLocaleContent = {
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
