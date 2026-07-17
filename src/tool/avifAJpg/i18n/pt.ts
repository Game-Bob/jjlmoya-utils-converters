import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAJpgLocaleContent } from '../index';

const slug = 'conversor-avif-para-jpg';
const title = 'Converter AVIF para JPG Online';
const description =
  'Converta imagens AVIF para JPG no seu navegador. Sem servidor. Processamento local 100% privado. Grátis e ilimitado.';

const ui: ImageConverterUI = {
  dragText: 'Arraste os ficheiros AVIF...',
  convertText: 'Para convertê-los para JPG instantaneamente',
  selectFiles: 'Selecionar ficheiros',
  processedFiles: 'Ficheiros processados',
  downloadAll: 'Descarregar Tudo (.zip)',
  pending: 'Pendente',
  bibliographyTitle: 'Referências Bibliográficas',
  faqTitle: 'Perguntas Frequentes',
};

const faq: AvifAJpgLocaleContent['faq'] = [
  {
    question: 'Porquê converter AVIF para JPG?',
    answer:
      'O formato AVIF oferece uma compressão superior, mas nem todos os programas ou visualizadores o suportam. Convertê-lo para JPG garante que a imagem poderá ser vista em 100% dos dispositivos do mundo.',
  },
  {
    question: 'Como protegemos as suas imagens AVIF?',
    answer:
      'As suas fotos nunca saem do seu telemóvel ou PC. Todo o processo de desenho e codificação para JPEG é executado no ambiente Javascript do seu navegador.',
  },
  {
    question: 'Perderei qualidade ao passar de AVIF para JPG?',
    answer:
      'A nossa ferramenta processa os píxeis com uma qualidade padrão de Canvas (0.9 a 0.95), fazendo com que as alterações sejam quase impercetíveis.',
  },
];

const howTo: AvifAJpgLocaleContent['howTo'] = [
  {
    name: 'Arraste ficheiros ou clique',
    text: 'Mova todas as fotografias AVIF que deseja converter para a área de processamento delimitada.',
  },
  {
    name: 'Transformação Instantânea',
    text: 'Observe em menos de um segundo como o AVIF é recodificado para JPG, eliminando possíveis canais alfa por um fundo sólido.',
  },
  {
    name: 'Guarde ou Descarregue o ZIP',
    text: 'Descarregue as suas novas imagens JPG individualmente ou pressionando Descarregar Tudo se processou em lote.',
  },
];

const seo: AvifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Conversor AVIF para JPG: Compatibilidade Universal para as Suas Imagens Modernas',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'O AVIF (AV1 Image File Format) é o formato de imagem mais eficiente disponível hoje em dia. Desenvolvido pela Alliance for Open Media e baseado no codec de vídeo AV1, oferece uma compressão 50% superior ao JPG com a mesma qualidade visual. No entanto, esta vantagem técnica tem um custo: o AVIF não é suportado pelo Photoshop, Lightroom, Visualizador de Fotos do Windows, nem pela maioria das ferramentas de edição e visualização tradicionais. Converter para JPG resolve este problema na raiz.',
  },
  {
    type: 'title',
    text: 'AVIF vs JPG: Eficiência face à Compatibilidade Universal',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O AVIF comprime de forma extraordinária: uma foto de alta resolução que em JPG ocupa 4 MB pode pesar apenas 2 MB em AVIF mantendo a mesma qualidade percebida. Isto torna-o perfeito para a entrega web onde o desempenho de carregamento é crítico. No entanto, fora do navegador, o AVIF é praticamente invisível: nem o Windows Explorer o pré-visualiza, nem as câmaras o exportam, nem os designers o recebem com agrado nos seus fluxos de trabalho.',
  },
  {
    type: 'paragraph',
    html: 'O JPG é há mais de 30 anos o padrão universal da fotografia digital. É suportado por 100% dos dispositivos, sistemas operativos, aplicações de escritório, redes sociais, impressoras e qualquer software que alguma vez tenha exibido uma imagem. Quando precisa de partilhar, imprimir, editar ou enviar por email, o JPG é a garantia de que tudo funcionará sem fricção.',
  },
  {
    type: 'title',
    text: 'Comparativo: Conversores Cloud vs A Nossa Arquitetura Local',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Conversores Cloud',
        description: 'Ferramentas que enviam os seus ficheiros AVIF para um servidor remoto para processá-los.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'As suas fotos privadas viajam pela Internet para servidores externos',
          'Tempos de espera por carregamento e descarregamento do ficheiro',
          'Limites de tamanho e número de conversões gratuitas',
          'Risco de retenção de imagens em servidores de terceiros',
        ],
      },
      {
        title: 'A Nossa Arquitetura Local',
        description: 'Processamento direto no seu navegador através de tecnologia Vanilla JS e Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'As suas imagens nunca saem do seu dispositivo',
          'Conversão instantânea sem latência de rede',
          'Sem limites de ficheiros nem de tamanho',
          'Apto para imagens médicas, legais ou confidenciais',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Como funciona a conversão técnica no navegador',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Os navegadores modernos como o Chrome, Firefox e Edge incluem suporte nativo para AVIF graças aos seus descodificadores integrados de AV1. Quando carrega um ficheiro AVIF, o navegador descodifica-o na memória e converte-o para uma representação de mapa de bits na RAM. Esta representação é desenhada sobre um elemento <code>Canvas</code> HTML5 invisível.',
  },
  {
    type: 'paragraph',
    html: 'Em seguida, o Canvas exporta a imagem usando <code>toBlob(\'image/jpeg\', quality)</code>, aplicando a compressão JPG padrão. Dado que o JPG não suporta transparências, qualquer canal alfa presente no AVIF é preenchido com fundo branco antes da exportação. O resultado é um ficheiro JPG de alta qualidade pronto para descarregamento direto, sem que nenhum byte tenha saído do seu navegador.',
  },
  {
    type: 'tip',
    title: 'O equilíbrio perfeito entre compressão e compatibilidade',
    html: 'O AVIF é 50% mais pequeno do que o JPG com qualidade igual - mas o JPG tem compatibilidade de 100% com qualquer software. Se recebe imagens AVIF do servidor e precisa de editá-las, enviá-las por email ou abri-las em ferramentas de ambiente de trabalho, converta-as para JPG primeiro.',
  },
  {
    type: 'title',
    text: 'Casos de uso: quando converter AVIF para JPG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Editar no Photoshop, Lightroom, GIMP ou outro software de ambiente de trabalho.',
      'Partilhar imagens com utilizadores em dispositivos ou sistemas operativos antigos.',
      'Anexar em emails para garantir visualização em qualquer cliente de correio.',
      'Publicar em plataformas que não aceitam AVIF como formato de carregamento.',
      'Imprimir: os serviços de impressão profissional trabalham com JPG de forma nativa.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusão: A compatibilidade universal num só passo',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O AVIF é o futuro da compressão de imagens, mas o presente exige compatibilidade. O nosso conversor permite-lhe obter o melhor de ambos os mundos: receba e armazene imagens em AVIF para máxima eficiência, e converta-as para JPG instantaneamente quando precisar que funcionem em qualquer contexto. Tudo de forma privada, gratuita e sem limites.',
  },
];


export const content: AvifAJpgLocaleContent = {
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
