import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAPngLocaleContent } from '../index';

const slug = 'conversor-de-svg-para-png';
const title = 'Converter SVG para PNG Online e Grátis';
const description =
  'Converta arquivos vetoriais SVG para PNG no seu navegador. Saída HD em escala dupla. Preserva transparência. Gratuito e 100% privado.';

const ui: ImageConverterUI = {
  dragText: 'Arraste arquivos SVG...',
  convertText: 'Para convertê-los em PNG instantaneamente',
  selectFiles: 'Selecionar arquivos',
  processedFiles: 'Arquivos processados',
  downloadAll: 'Baixar tudo (.zip)',
  pending: 'Pendente': 'Referências Bibliográficas',
  faqTitle: 'Perguntas Frequentes',
};

const faq: SvgAPngLocaleContent['faq'] = [
  {
    question: 'Porquê converter arquivos SVG para PNG?',
    answer:
      'O SVG é baseado em vetores e ideal para logótipos, mas às vezes você precisa do formato PNG rasterizado para uso em aplicações que não suportam vetores, ou para compartilhar via apps de mensagens ou redes sociais.',
  },
  {
    question: 'Posso escolher o tamanho da saída?',
    answer:
      'Atualmente duplicamos a escala do SVG de origem para que a saída PNG seja nítida e adequada para ecrãs Retina ou 4K.',
  },
  {
    question: 'As transparências do SVG são mantidas?',
    answer:
      'Sim, o PNG resultante preserva o canal alfa do SVG original, mantendo todos os fundos transparentes intactos.',
  },
];

const howTo: SvgAPngLocaleContent['howTo'] = [
  {
    name: 'Insira os seus arquivos SVG',
    text: 'Largue os seus arquivos SVG ou arraste-os diretamente para a área superior.',
  },
  {
    name: 'Geração de PNG HD',
    text: 'Em milissegundos, o nosso motor local recriará cada vetor como uma camada de píxeis HD em formato PNG transparente.',
  },
  {
    name: 'Baixe os arquivos',
    text: 'Salve os PNGs gerados individualmente ou como um pacote ZIP.',
  },
];

const seo: SvgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Conversor de SVG para PNG: Do vetor infinito ao raster universal',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'O <strong>SVG</strong> (Scalable Vector Graphics) é a escolha perfeita para web design: infinitamente escalável, leve e editável com qualquer editor de código. Mas quando você precisa de usar esse logótipo ou ícone numa app móvel, compartilhá-lo nas redes sociais ou inseri-lo numa apresentação PowerPoint, você encontra um obstáculo: a maioria destas plataformas não suporta SVG. O formato <strong>PNG</strong> é a solução universal: rasterizado, com um canal alfa e compatível em absolutamente todos os contextos.',
  },
  {
    type: 'title',
    text: 'SVG vs PNG: Vetores para a Web, Raster para o Mundo',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O SVG armazena a imagem como instruções matemáticas: uma curva de Bézier, um gradiente, um polígono. Isto significa que o mesmo arquivo parece perfeito a 16px ou 16.000px. É o formato ideal para o seu código web, animações CSS e qualquer elemento que precise de se adaptar a diferentes resoluções de ecrã sem qualquer perda de qualidade.',
  },
  {
    type: 'paragraph',
    html: 'O PNG armazena a imagem como uma grelha de píxeis com informação de cor e transparência para cada píxel. É um formato <strong>lossless</strong> (sem perdas), o que significa que a qualidade é preservada inteiramente. Uma vez que um SVG é rasterizado para PNG, a resolução é fixa. É por isso que escolher o tamanho de exportação correto é crítico: a nossa ferramenta renderiza em escala dupla (2x) para garantir nitidez em ecrãs Retina e 4K.',
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
          'O seu código SVG viaja para servidores externos',
          'Renderização remota com qualidade inconsistente',
          'Tempo de espera para upload e processamento',
          'Limitações no tamanho do arquivo SVG',
        ],
      },
      {
        title: 'A Nossa Arquitetura Local',
        description: 'Processamento direto no seu hardware utilizando a tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'O seu SVG nunca deixa o seu navegador',
          'Renderização do motor nativo do navegador para máxima fidelidade',
          'PNG em resolução 2x para ecrãs de alta densidade',
          'Transparência preservada com canal alfa completo',
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
    html: 'O processo começa carregando o arquivo SVG num elemento JavaScript <strong>Image</strong>. Assim que o motor do navegador analisa e renderiza o XML vetorial, a imagem resultante é desenhada num <strong>HTML5 Canvas</strong> cujas dimensões são o dobro do tamanho SVG original (escala 2x). Isto produz um PNG com o dobro dos píxeis por dimensão, ideal para ecrãs de alta resolução.',
  },
  {
    type: 'paragraph',
    html: 'Ao contrário da conversão para JPG, ao exportar para PNG o canvas retém o canal alfa completo: as áreas transparentes no SVG original tornam-se píxeis totalmente transparentes no PNG resultante — sem preenchimento de fundo branco. A exportação utiliza o método <code>toDataURL(\'image/png\')</code> com compressão lossless.',
  },
  {
    type: 'tip',
    title: 'Dica antes de rasterizar',
    html: 'Escolha o seu tamanho de exportação PNG com cuidado — rasterizar um SVG é um processo de sentido único: você não pode recuperar os vetores a partir do PNG resultante. Mantenha sempre o SVG original como fonte mestre e gere PNGs na resolução mais alta que você possa vir a precisar.',
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
      'Exportar logótipos vetoriais para apresentações PowerPoint ou Google Slides.',
      'Criar ícones PNG para iOS, Android ou Progressive Web Apps.',
      'Compartilhar designs SVG no Instagram, LinkedIn ou outras redes sociais.',
      'Inserir ilustrações vetoriais em documentos Word ou PDFs.',
      'Gerar miniaturas PNG de gráficos SVG para pré-visualização no CMS.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusão',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG é a linguagem dos vetores; PNG é o passaporte para o resto do mundo digital. Esta ferramenta rasteriza os seus SVGs em resolução 2x com a transparência intacta, diretamente no seu navegador, sem que um único byte do seu design viaje para qualquer servidor externo.',
  },
];


export const content: SvgAPngLocaleContent = {
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
