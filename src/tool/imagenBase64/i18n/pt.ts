import { bibliography } from '../bibliography';
import type { ImageToBase64UI } from '../index';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { ImagenBase64LocaleContent } from '../index';

const slug = 'conversor-de-imagem-para-base64';
const title = 'Conversor de Imagem para Base64 Online';
const description =
  'Converta qualquer imagem para código Base64 e Data URI diretamente no seu navegador. Sem upload de arquivos. Gratuito, privado e instantâneo.';

const ui: ImageToBase64UI = {
  dragTitle: 'Arraste a sua imagem para aqui',
  dragSubtext: 'ou clique para procurar os seus arquivos',
  formatBadge: 'Suporta JPG, PNG, WEBP, SVG, GIF',
  dataUriLabel: 'Data URI (Pronto para CSS / HTML src="")',
  base64Label: 'Apenas Base64 (Texto codificado simples)',
  copyBtn: 'Copiar',
  dataUriPlaceholder: 'Carregue uma imagem para ver o código Data URI...',
  base64Placeholder: 'Carregue uma imagem para ver o código Base64 puro...',
  toastMessage: 'Código copiado para a área de transferência!',
  invalidImageAlert: 'Por favor, carregue um arquivo de imagem válido.',
  bibliographyTitle: 'Referências Bibliográficas',
  faqTitle: 'Perguntas Frequentes',
};

const faq: ImagenBase64LocaleContent['faq'] = [
  {
    question: 'O que é Base64 e para que é utilizado no desenvolvimento web?',
    answer:
      'Base64 é um sistema de codificação que converte dados binários numa string de texto ASCII. No desenvolvimento web, é utilizado para incorporar imagens diretamente dentro de arquivos HTML ou CSS através de Data URIs, reduzindo o número de pedidos HTTP ao servidor.',
  },
  {
    question: 'É seguro converter as minhas imagens para Base64 aqui?',
    answer:
      'Absolutamente seguro e privado. A nossa ferramenta funciona 100% localmente no seu navegador. As suas imagens nunca são carregadas ou processadas em qualquer servidor externo.',
  },
  {
    question: 'Que formatos de imagem o conversor Base64 suporta?',
    answer:
      'A ferramenta é compatível com arquivos JPG, PNG, GIF, WebP e até arquivos vetoriais SVG. Ao carregar a imagem, detetará automaticamente o seu tipo MIME para gerar o código Data URI exato.',
  },
  {
    question: 'Quando é que NÃO devo utilizar imagens Base64?',
    answer:
      'Deve evitar utilizar imagens Base64 para fotografias grandes ou imagens de alta resolução. O código Base64 ocupa aproximadamente 33% mais espaço do que o arquivo binário original, o que pode inflar excessivamente as suas folhas de estilo CSS ou documentos HTML.',
  },
];

const howTo: ImagenBase64LocaleContent['howTo'] = [
  {
    name: 'Arraste ou Selecione a sua Imagem',
    text: 'Mova qualquer imagem (JPG, PNG, WebP, SVG, GIF) para a área de carregamento para iniciar a conversão.',
  },
  {
    name: 'Copie o Código Gerado',
    text: 'Verá duas áreas de texto: o Data URI completo (pronto para usar em src="" ou CSS) e o Base64 puro para outros usos.',
  },
  {
    name: 'Utilize o Código no seu Projeto',
    text: 'Cole o Data URI diretamente no src de uma tag img ou no seu CSS como background-image sem necessidade de arquivos externos.',
  },
];

const seo: ImagenBase64LocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Conversor de Imagem para Base64: Incorpore Imagens Sem Pedidos HTTP',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Base64 é uma técnica de codificação que transforma dados binários - como uma imagem - numa string de texto ASCII pura. O resultado é um Data URI: um URL autónomo que começa com <code>data:image/png;base64,...</code> e contém toda a imagem codificada. Ao incorporar este código diretamente no seu HTML, CSS ou JSON, a imagem é carregada sem qualquer pedido HTTP adicional ao servidor - latência de rede zero, carregamento instantâneo.',
  },
  {
    type: 'title',
    text: 'Quando utilizar imagens Base64',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O principal argumento a favor do Base64 é a eliminação de pedidos de rede. Cada imagem numa página web significa um pedido HTTP com o seu overhead de ligação, DNS, handshake TLS e latência. Para imagens críticas muito pequenas - o logótipo principal da aplicação, favicon, um ícone de UI - incorporá-las em Base64 no CSS ou no HTML elimina esse custo e garante que sejam exibidas instantaneamente, mesmo antes de o navegador ter colocado algo em cache.',
  },
  {
    type: 'paragraph',
    html: 'Esta técnica é particularmente poderosa em apps SPA (Single Page Application) onde o bundle JavaScript e CSS é gerado no momento da build: incorporar pequenas imagens no bundle garante que sejam carregadas juntamente com o código sem pedidos adicionais. Também é indispensável para e-mails HTML, onde os clientes de correio bloqueiam imagens externas mas exibem quase sempre Data URIs incorporados.',
  },
  {
    type: 'title',
    text: 'Casos de uso para imagens Base64',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'HTML inline: <code>&lt;img src="data:image/png;base64,..."&gt;</code> para ícones críticos.',
      'CSS background: <code>background-image: url("data:image/svg+xml;base64,...")</code> para SVGs de UI.',
      'APIs JSON e REST: envie imagens como dados de texto em payloads JSON.',
      'E-mails HTML: imagens incorporadas que são exibidas mesmo quando o cliente bloqueia URLs externos.',
      'Incorporação em SVG: incorpore imagens raster dentro de arquivos SVG como dados inline.',
    ],
  },
  {
    type: 'title',
    text: 'Como funciona a conversão no navegador',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Quando seleciona ou arrasta uma imagem, a API <code>FileReader</code> do navegador lê-a diretamente do disco como dados binários na RAM. O método <code>readAsDataURL()</code> converte esses bytes binários na sua representação Base64 utilizando o algoritmo RFC 4648 - a cada 3 bytes de dados originais são representados como 4 caracteres ASCII do alfabeto Base64. O resultado inclui o tipo MIME correto detetado automaticamente.',
  },
  {
    type: 'tip',
    title: 'Utilize apenas para imagens pequenas (abaixo de 10 KB)',
    html: 'O Base64 aumenta o tamanho do arquivo em aproximadamente 33%: uma imagem de 10 KB torna-se ~13,3 KB de texto. Para ícones e logótipos pequenos, este custo é mínimo e a eliminação do pedido HTTP compensa-o. Para fotografias ou imagens grandes, o excesso de tamanho é significativo - utilize sempre um CDN para imagens grandes.',
  },
  {
    type: 'title',
    text: 'Quando NÃO utilizar Base64',
    level: 3,
  },
  {
    type: 'tip',
    title: 'Evite Base64 para imagens grandes: utilize um CDN',
    html: 'Se tiver imagens maiores que 10-20 KB, o Base64 prejudica o desempenho: infla o tamanho do HTML/CSS, impede que o navegador coloque a imagem em cache de forma independente e bloqueia a renderização enquanto o parser processa a string gigante. Para imagens grandes, sirva sempre a partir de un CDN com cabeçalhos de cache apropriados.',
  },
  {
    type: 'title',
    text: 'Compatibilidade e privacidade',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Os Data URIs são compatíveis com 100% dos navegadores modernos e a maioria dos clientes de e-mail. A nossa ferramenta processa tudo localmente através da API FileReader - as suas imagens nunca saem do seu dispositivo. Isto torna-a adequada para imagens corporativas, capturas de ecrã privadas ou qualquer conteúdo visual confidencial que precise de converter para Base64.',
  },
  {
    type: 'title',
    text: 'Conclusão: A ferramenta de incorporação mais rápida e privada',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Converter imagens para Base64 é uma técnica específica mas muito poderosa quando aplicada corretamente. Utilize-a para imagens pequenas e críticas onde a ausência de pedidos HTTP faz a diferença, e evite-a para imagens grandes onde um CDN ganha sempre. Com a nossa ferramenta, obtém o Data URI num instante, sem carregar nada para qualquer servidor.',
  },
];

export const content: ImagenBase64LocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({
    title,
    description,
    inLanguage: 'pt',
    faq,
    howTo,
  }),
};
