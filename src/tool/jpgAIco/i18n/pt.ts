import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAIcoLocaleContent } from '../index';

const slug = 'conversor-de-jpg-para-ico';
const title = 'Conversor de JPG para ICO';
const description =
  'Converta fotos JPG para ICO com cabeçalhos binários reais da Microsoft. Recorte quadrado automático. Sem upload de arquivos. Gratuito e privado.';

const ui: ImageConverterUI = {
  dragText: 'Arraste arquivos JPG...',
  convertText: 'Para convertê-los em ICO instantaneamente',
  selectFiles: 'Selecionar arquivos',
  processedFiles: 'Arquivos processados',
  downloadAll: 'Baixar tudo (.zip)',
  pending: 'Pendente',
  bibliographyTitle: 'Referências Bibliográficas',
  faqTitle: 'Perguntas Frequentes',
};

const faq: JpgAIcoLocaleContent['faq'] = [
  {
    question: 'O arquivo ICO resultante é nativamente compatível para personalizar pastas do Windows?',
    answer:
      'Sim, criamos um arquivo Microsoft Icon Format 100% autêntico ao inserir um cabeçalho binário padronizado em baixo nível na matriz da imagem.',
  },
  {
    question: 'O que acontece com a proporção se o meu JPG original for uma foto panorâmica horizontal?',
    answer:
      'O rígido padrão global ICO exige absolutamente uma imagem perfeitamente quadrada. O nosso motor HTML5 JS irá centrar a sua foto e recortar o excesso, garantindo um resultado equilibrado.',
  },
  {
    question: 'É perigoso carregar logotipos JPG corporativos ou pessoais no conversor?',
    answer:
      'O motor Canvas em JavaScript reside no seu próprio navegador físico. Converter centenas de fotos para ICO não envia um único megabyte para qualquer nuvem em países questionáveis.',
  },
];

const howTo: JpgAIcoLocaleContent['howTo'] = [
  {
    name: 'Reúna as fotos JPG originais',
    text: 'Encontre e recolha as fotos convencionais e deposite-as arrastando-as para o nosso amigável quadrado.',
  },
  {
    name: 'Assista à purificação hexadecimal',
    text: 'A recodificação irá inserir nativa e rapidamente metadados e cabeçalhos de forma assíncrona, gerando um ícone estritamente puro em memória.',
  },
  {
    name: 'Compile múltiplos designs em ZIP',
    text: 'Termine o trabalho baixando tudo massivamente num pacote compacto em apenas alguns segundos.',
  },
];

const bibliography: JpgAIcoLocaleContent['bibliography'] = [
  {
    name: 'Estrutura Iconográfica ICO e Uso do Sistema',
    url: 'https://en.wikipedia.org/wiki/ICO_(file_format)',
  },
  {
    name: 'Padrões JPEG.org',
    url: 'https://jpeg.org/',
  },
];

const seo: JpgAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Conversor de JPG para ICO: Crie Favicons e Ícones do Windows a partir das Suas Fotos',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'O formato <strong>ICO</strong> é o padrão da Microsoft para ícones de aplicações Windows e favicons de websites. Ao contrário de simplesmente renomear um JPG como .ico, un arquivo ICO genuíno requer uma estrutura binária específica com cabeçalhos de 22 bytes e um diretório de imagens incorporado. O <strong>JPG</strong> é o ponto de partida mais comum para a criação destes ícones — um logótipo de empresa, uma foto de perfil ou qualquer imagem que queira transformar no ícone visual da sua aplicação ou website.',
  },
  {
    type: 'title',
    text: 'JPG ou ICO? Quando utilizar cada formato',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O <strong>JPG</strong> é um formato de origem, não um destino para ícones. Perfeito para fotografias e banners, mas incompatível com sistemas que requerem ícones: Explorador de Arquivos do Windows, a barra de favoritos do navegador, atalhos do ambiente de trabalho ou manifestos de aplicações PWA. Um sistema operativo ou navegador que procura um ícone espera o formato ICO — e se não o encontrar, exibirá um ícone genérico ou um quadrado quebrado.',
  },
  {
    type: 'paragraph',
    html: 'O formato <strong>ICO</strong> foi concebido para conter múltiplas resoluções num único arquivo: <strong>16×16</strong> para a barra de favoritos, <strong>32×32</strong> para atalhos, <strong>48×48</strong> para o explorador de arquivos e <strong>256×256</strong> para ecrãs de alta densidade. Os navegadores e sistemas operativos selecionam automaticamente a resolução apropriada com base no contexto de exibição — o utilizador não tem de gerir nada.',
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
          'Os seus logótipos corporativos armazenados em servidores de terceiros',
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
          'Velocidade instantânea — latência de rede zero',
          'Privacidade total — 0 bytes enviados externamente',
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
    html: 'O JPG é descodificado e desenhado num <strong>HTML5 Canvas</strong> em memória. Como o formato ICO requer uma imagem quadrada, o motor deteta automaticamente se o JPG é retangular e recorta-o centrando a parte mais relevante. Em seguida, constrói o cabeçalho padrão da Microsoft ICO com o número mágico correto (<code>00 00 01 00</code>), o diretório de imagens und os dados de píxeis codificados. O resultado é um arquivo binário .ico genuíno — não um PNG renomeado.',
  },
  {
    type: 'paragraph',
    html: 'Como o JPG não tem canal alfa, o ICO resultante também não terá transparência — terá um fundo sólido herdado da fotografia original. Se precisar de um favicon com fundo transparente (por exemplo, para se adaptar a barras de favoritos escuras ou claras), o fluxo recomendado é: remover o fundo num editor, guardar como PNG und utilizar o convertidor de PNG para ICO.',
  },
  {
    type: 'tip',
    title: 'Dica: múltiplas resoluções num único ICO',
    html: 'Os arquivos ICO podem agrupar <strong>múltiplas resoluções</strong> num único arquivo — o navegador ou SO seleciona automaticamente a mais apropriada para cada contexto. Para obter o melhor resultado possível, utilize um JPG quadrado com pelo menos <strong>256×256 píxeis</strong> como fonte: isto dá ao convertidor informações suficientes para gerar tamanhos nítidos de 16×16, 32×32 und 48×48 sem pixelização.',
  },
  {
    type: 'title',
    text: 'Casos de uso und compatibilidade',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Favicon de website: compatível com todos os navegadores, incluindo Internet Explorer.',
      'Personalização de ícones de pastas und do ambiente de trabalho no Windows 10/11.',
      'Ícone de atalho para aplicações desktop ou instaladores.',
      'Ícone de aplicação para projetos Electron ou aplicações PWA.',
      'Ícones para sistemas de gestão de arquivos und exploradores corporativos.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusão',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Converter um JPG para ICO é um passo tecnicamente essencial para qualquer projeto web ou desktop que precise de uma identidade visual reconhecível. Esta ferramenta gera ICOs autênticos com a estrutura binária correta, em segundos, sem carregar o seu logótipo para qualquer servidor externo. O resultado funciona em todos os navegadores, no Explorador de Arquivos do Windows und em qualquer sistema que utilize o padrão ICO da Microsoft.',
  },
];

export const content: JpgAIcoLocaleContent = {
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
