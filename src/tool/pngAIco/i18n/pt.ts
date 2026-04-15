import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAIcoLocaleContent } from '../index';

const slug = 'conversor-de-png-para-ico';
const title = 'Converter PNG para ICO Online';
const description =
  'Converta PNG para ICO com cabeçalhos binários reais. Transparências preservadas. Sem upload de arquivos. Grátis e 100% privado.';

const ui: ImageConverterUI = {
  dragText: 'Arraste arquivos PNG...',
  convertText: 'Para convertê-los em ICO instantaneamente',
  selectFiles: 'Selecionar arquivos',
  processedFiles: 'Arquivos processados',
  downloadAll: 'Baixar tudo (.zip)',
  pending: 'Pendente',
  bibliographyTitle: 'Referências Bibliográfica',
  faqTitle: 'Perguntas Frequentes',
};

const faq: PngAIcoLocaleContent['faq'] = [
  {
    question: 'O seu conversor cria simples arquivos PNG disfarçados ou um ICO genuíno?',
    answer:
      'Criamos um ICO real. Extraímos dados do seu PNG, criamos o cabeçalho hexadecimal padronizado da Microsoft (Cabeçalho + Diretório de 22 bytes), redimensionamos localmente para o formato quadrado ideal e montamos um arquivo final validado como nativo.',
  },
  {
    question: 'As transparências são preservadas quando o meu logótipo é colocado no ícone?',
    answer:
      'Absolutamente sim. O nosso motor lê o seu PNG a 32 bits, ancorando-o e preservando com precisão quaisquer áreas transparentes para que se destaquem na barra de endereços web universal (Favicon).',
  },
  {
    question: 'O logótipo da minha empresa é armazenado nos seus servidores?',
    answer:
      'Este serviço garante zero contacto com redes externas. O conversor trabalha ancorado no seu HTML5 Canvas interno; o fabrico do seu ícone ocorre cem por cento dentro da sua máquina em memória local puramente secreta.',
  },
];

const howTo: PngAIcoLocaleContent['howTo'] = [
  {
    name: 'Arraste arquivos para transferir',
    text: 'Coloque as suas matrizes fotográficas (un PNG quadrado 512x512 é o ideal) na moldura local interativa.',
  },
  {
    name: 'Compilação automática de bytecode',
    text: 'Verá a barra correr internamente enquanto carrega e fabrica a matriz local de cabeçalhos hexadecimais ICO purificados.',
  },
  {
    name: 'Acumule ou saia com o seu ZIP',
    text: 'Baixe-os clicando numa mega compilação para os seus sites (botões ZIP globais) ou baixe a miniatura para o executável Windows.',
  },
];

const bibliography: PngAIcoLocaleContent['bibliography'] = [
  {
    name: 'Estrutura Técnica do Formato ICO Microsoft',
    url: 'https://en.wikipedia.org/wiki/ICO_(file_format)',
  },
  {
    name: 'Favicon Standard - W3C',
    url: 'https://www.w3.org/2005/10/howto-favicon',
  },
];

const seo: PngAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Conversor de PNG para ICO: A Melhor Fonte para Favicons con Transparência Perfeita',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'O <strong>PNG com transparência</strong> é o material de partida ideal para a criação de ícones ICO profissionais. Ao contrário do JPG (que não possui canal alfa) ou formatos com perdas, o PNG oferece exatamente o que o formato ICO necessita: píxeis nítidos, bordas limpas e um canal alfa de 32 bits que permite ao ícone integrar-se perfeitamente em qualquer fundo — seja na barra de favoritos branca do Safari, na barra escura do Firefox ou no ambiente de trabalho do Windows 11.',
  },
  {
    type: 'title',
    text: 'PNG ou ICO? Quando utilizar cada formato',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O <strong>PNG</strong> é o formato de trabalho: é onde desenha o seu logótipo, exporta do Figma ou Illustrator e guarda as suas versões editáveis. A sua transparência, precisão de píxeis e compressão sem perdas tornam-no imbatível para o processo de design. Mas os navegadores, sistemas operativos e aplicações Windows que procuram um favicon ou um ícone de aplicação não aceitam PNG diretamente — precisam de ICO.',
  },
  {
    type: 'paragraph',
    html: 'O <strong>ICO</strong> é o formato de distribuição para ícones em ambientes Microsoft und na web. Contém uma estrutura binaria específica que permite agrupar múltiplas resoluções num único arquivo: o navegador lê o diretório interno do ICO und seleciona automaticamente <strong>16×16</strong> para o separador do navegador, <strong>32×32</strong> para atalhos, <strong>48×48</strong> para o explorador de arquivos und <strong>256×256</strong> para ecrãs Retina und 4K. Partir de um PNG transparente garante que todas essas resoluções terão bordas perfeitas sem qualquer auréola branca.',
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
          'Latência de rede no upload und download',
          'O seu logótipo corporativo armazenado em servidores de terceiros',
          'Limites de tamanho de arquivo und quotas de conversão diárias',
          'Anúncios intrusivos und rastreadores de terceiros',
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
    html: 'O PNG é descodificado num <strong>HTML5 Canvas</strong> em memória com total suporte ao canal alfa de 32 bits. O motor constrói o cabeçalho ICO padrão da Microsoft com o número mágico correto (<code>00 00 01 00</code>), o diretório de imagens com dimensões und offset de dados, und os dados de píxeis mantendo a informação de transparência. O resultado é um arquivo binário .ico genuíno que o Windows, macOS und todos os navegadores reconhecem nativamente.',
  },
  {
    type: 'paragraph',
    html: 'A transparência do PNG é totalmente preservada no ICO resultante — píxeis transparentes continuam transparentes, píxeis semitransparentes mantêm o seu valor alfa exato und píxeis opacos conservam a sua cor original. Isto é crítico para logótipos em fundos variáveis: o seu favicon terá o aspeto correto em modo claro, modo escuro und qualquer combinação de cores de interface do navegador.',
  },
  {
    type: 'tip',
    title: 'Dica: use un PNG 512×512 como fonte',
    html: 'Para o melhor resultado possível, use um <strong>PNG quadrado de 512×512</strong> como imagem de origem. Esta resolução oferece ao conversor informação suficiente para gerar todos os tamanhos ICO padrão com nitidez — desde o favicon 16×16 até ao ícone 256×256 para ecrãs de alta densidade — sem pixelização ou perda de detalhe nas bordas. Quanto maior for o PNG de origem, melhor será o aspeto dos ícones de tamanhos pequenos.',
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
      'Favicon transparente para websites: funciona no Chrome, Firefox, Safari, Edge e Internet Explorer.',
      'Ícone de aplicação PWA: el manifest.json referencia o ICO para instalação no desktop.',
      'Personalização de pastas Windows 10/11 com logótipo corporativo e sem fundo branco.',
      'Ícone de atalho para aplicações desktop, instaladores und executáveis.',
      'Ícone de extensão de navegador para extensões do Chrome und Firefox.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusão',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O PNG com transparência é sem dúvida o melhor ponto de partida para a criação de ícones ICO de qualidade profissional. Com esta ferramenta, a conversão é instantânea, os canais alfa são totalmente preservados und o arquivo resultante é um ICO genuíno com a estrutura binária correta. Sem carregar o seu logótipo para qualquer servidor, sem marcas de agua, sem limites — und transparência perfeita em todos os tamanhos.',
  },
];

export const content: PngAIcoLocaleContent = {
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
