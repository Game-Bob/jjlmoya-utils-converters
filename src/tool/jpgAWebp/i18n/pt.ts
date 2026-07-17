import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAWebpLocaleContent } from '../index';

const slug = 'conversor-de-jpg-para-webp';
const title = 'Converter JPG para WebP Online e Grátis';
const description =
  'Converta imagens JPG para WebP no seu navegador. Compressão superior sem perda visível. Sem upload de arquivos. Gratuito, ilimitado e privado.';

const ui: ImageConverterUI = {
  dragText: 'Arraste arquivos JPG...',
  convertText: 'Para convertê-los em WebP instantaneamente',
  selectFiles: 'Selecionar arquivos',
  processedFiles: 'Arquivos processados',
  downloadAll: 'Baixar tudo (.zip)',
  pending: 'Pendente',
  bibliographyTitle: 'Referências Bibliográficas',
  faqTitle: 'Perguntas Frequentes',
};

const faq: JpgAWebpLocaleContent['faq'] = [
  {
    question: 'Porquê converter fotos JPG para WebP?',
    answer:
      'O WebP permite uma compressão significativamente melhor dos arquivos JPG tradicionais sem que o olho humano note a diferença, resultando em sites mais rápidos e modernos.',
  },
  {
    question: 'Tenho de pagar por imagem?',
    answer:
      'Não, a ferramenta é gratuita e tudo é processado diretamente no seu computador. É ilimitado para uso doméstico ou profissional.',
  },
  {
    question: 'A conversão é segura?',
    answer:
      'Sim, totalmente. Todo o processamento ocorre no HTML5 Canvas do seu navegador local, sem enviar quaisquer dados para servidores externos.',
  },
];

const howTo: JpgAWebpLocaleContent['howTo'] = [
  {
    name: 'Insira as suas fotos JPG',
    text: 'Solte os seus arquivos JPG ou arraste-os diretamente para a área superior. A deteção é instantânea.',
  },
  {
    name: 'Processamento para WebP',
    text: 'O motor de renderização local converterá cada arquivo de imagem num WebP ultra-otimizado pronto para a web.',
  },
  {
    name: 'Baixe os resultados',
    text: 'Guarde cada WebP individualmente ou baixe o ZIP com todos os arquivos convertidos.',
  },
];

const seo: JpgAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Conversor de JPG para WebP: Acelere o seu site com o formato moderno do Google',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'O formato <strong>JPG</strong> dominou a fotografia digital durante décadas - universalmente compatível e amplamente suportado. Mas a Google desenvolveu o <strong>WebP</strong> para bater o JPG no seu próprio terreno: a mesma qualidade visual com menos 25-35% de tamanho de arquivo. Para programadores e equipas de marketing que lutam contra carregamentos lentos de páginas, converter JPG para WebP é a otimização com maior retorno que pode aplicar sem tocar no design.',
  },
  {
    type: 'title',
    text: 'JPG ou WebP? Quando utilizar cada formato',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O <strong>JPG</strong> continua a ser a escolha certa quando precisa de compatibilidade universal: e-mails a clientes, documentos Word, plataformas de redes sociais antigas ou sistemas CMS que ainda não aceitam WebP. O seu ecossistema de trinta anos garante que qualquer ecrã, impressora ou visualizador o abrirá sem problemas. A principal desvantagem é o tamanho - um JPG de cabeçalho de 1,5 MB pode penalizar a pontuação LCP da sua página e falhar os limiares dos Core Web Vitals.',
  },
  {
    type: 'paragraph',
    html: 'O <strong>WebP</strong> é a escolha inteligente para todo o conteúdo que vive no seu website. Chrome, Firefox, Safari e Edge suportam-no nativamente há anos. Imagens de produtos em e-commerce, banners de blogs, miniaturas de vídeo e qualquer foto publicada online beneficiam diretamente: páginas mais leves, melhores pontuações no Google PageSpeed Insights e uma experiência de utilizador mais fluida - especialmente em ligações móveis lentas.',
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
          'As suas fotos são armazenadas em servidores de terceiros',
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
    html: 'Quando arrasta um JPG para a ferramenta, o navegador cria um <strong>objeto Blob</strong> que reside apenas na sua RAM. Esse Blob é descodificado e desenhado num elemento <strong>HTML5 Canvas</strong> invisível. Como o JPG não tem canal alfa, a conversão para WebP é direta: o motor exporta o canvas chamando <code>toDataURL(\'image/webp\')</code>, gerando um fluxo de bytes que o seu sistema operativo baixa instantaneamente - sem envolvimento de servidor.',
  },
  {
    type: 'paragraph',
    html: 'O algoritmo de compressão WebP combina técnicas de previsão de blocos (semelhantes às do VP8, o codec de vídeo da Google) com transformações de cor e codificação aritmética. O resultado é um arquivo que contém a mesma informação percetual que o JPG original, mas empacotado de forma muito mais eficiente - o que significa menos kilobytes transferidos a cada visita de página.',
  },
  {
    type: 'tip',
    title: 'Dica Core Web Vitals: LCP e peso da imagem',
    html: 'O <strong>Largest Contentful Paint (LCP)</strong> é a métrica da Google que mede quanto tempo demora a carregar o maior elemento visual da sua página. Um JPG de cabeçalho de 1,5 MB pode tornar-se num WebP de apenas 900 KB - ou mesmo 600 KB - sem diferença visual percetível. Essa <strong>poupança de 25-35%</strong> pode mover o seu LCP de "Precisa de melhorias" para "Bom" e subir o seu posicionamento nos resultados de pesquisa.',
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
      'Imagens de produtos em lojas WooCommerce ou Shopify: menos peso, mais conversões.',
      'Fotografia para blogs e artigos: melhor pontuação no PageSpeed sem redesenhar nada.',
      'Banners web e criativos de publicidade display: arquivos mais leves com a mesma nitidez.',
      'Galerias de portfólio para estúdios de arquitetura, fotografia ou design.',
      'Miniaturas de vídeo em sites de streaming ou plataformas de cursos online.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusão',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Converter os seus JPGs para WebP é hoje uma das otimizações mais simples e económicas que pode aplicar a qualquer website. Com esta ferramenta faz isso em segundos, gratuitamente e sem que as suas imagens saiam do seu dispositivo. Menos kilobytes, melhor LCP, páginas mais rápidas - tudo com a exata aparência visual que já tinha.',
  },
];


export const content: JpgAWebpLocaleContent = {
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
