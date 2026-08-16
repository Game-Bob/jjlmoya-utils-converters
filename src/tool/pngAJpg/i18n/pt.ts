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
    question: 'Por que escolher o nosso conversor local de PNG para JPG?',
    answer:
      'Ao contrário dos serviços convencionais, esta ferramenta processa os ficheiros inteiramente no navegador. As imagens nunca chegam a um disco remoto, mantendo o controlo e a privacidade dos seus dados.',
  },
  {
    question: 'JPG ou PNG: qual é o melhor para o meu caso?',
    answer:
      'O PNG é ideal para logótipos e elementos transparentes. O JPG é mais indicado para fotografias e banners, pois cria ficheiros muito mais pequenos e acelera o carregamento das páginas.',
  },
  {
    question: 'Como funciona a conversão sem enviar os ficheiros?',
    answer:
      'Utilizamos o Canvas HTML5. O navegador recria a imagem numa área virtual invisível, preenche a transparência com branco e gera diretamente os bytes JPEG para descarregar.',
  },
  {
    question: 'É seguro para documentos confidenciais?',
    answer:
      'Sim. Para banca, saúde e direito, é mais seguro não enviar imagens para serviços externos: o processamento fica na RAM do dispositivo e termina quando fecha o separador.',
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
    text: 'Conversor de PNG para JPG: guia prática para otimizar imagens',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'No design digital e no desenvolvimento web, a velocidade é importante. O PNG preserva transparência e qualidade sem perdas, mas pode criar ficheiros pesados. Para páginas rápidas e anexos leves, converter para JPG é uma escolha prática.',
  },
  {
    type: 'title',
    text: 'JPG ou PNG: qual escolher?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Não existe um formato melhor em todas as situações. O PNG é adequado para interfaces, logótipos e transparência, mas a compressão sem perdas pode gerar ficheiros muito maiores.',
  },
  {
    type: 'paragraph',
    html: 'O JPG remove detalhes pouco percetíveis e cria imagens leves. É uma boa opção para fotografias, banners e redes sociais, trocando uma pequena perda por carregamentos mais rápidos.',
  },
  {
    type: 'title',
    text: 'Comparação técnica: processamento local e cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Conversores na cloud',
        description: 'Serviços tradicionais que enviam as fotografias para um servidor remoto.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Latência de rede (carregamento/descarregamento)',
          'Risco de fuga de dados privados',
          'Limites de tamanho por ficheiro',
          'Publicidade e rastreadores',
        ],
      },
      {
        title: 'A nossa arquitetura local',
        description: 'Processamento direto no seu dispositivo com JavaScript nativo.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Velocidade imediata sem rede',
          'Privacidade garantida (zero bytes enviados)',
          'Sem limite de MB por ficheiro',
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
    html: 'A conversão sem servidor usa as APIs modernas do navegador. Ao escolher um ficheiro, é criado um Blob temporário na RAM e desenhado num Canvas HTML5 invisível.',
  },
  {
    type: 'paragraph',
    html: 'Como o JPG não suporta transparência, as áreas transparentes são preenchidas a branco antes da composição. O Canvas gera então o fluxo JPEG que o dispositivo guarda diretamente.',
  },
  {
    type: 'tip',
    title: 'Dica de SEO: o tamanho ideal',
    html: 'Uma imagem mais leve pode melhorar o LCP e as métricas do PageSpeed. Reduzir um PNG grande para um JPG menor é útil em cabeçalhos, artigos e páginas com muitas imagens.',
  },
  {
    type: 'title',
    text: 'Segurança para empresas e profissionais',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Para banca, saúde e direito, enviar ficheiros para serviços externos pode criar riscos. Aqui o processamento fica na RAM do navegador e não exige carregamento para a cloud.',
  },
  {
    type: 'title',
    text: 'Compatibilidade do resultado',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Visualizadores do Windows, macOS e dispositivos móveis.',
      'Redes sociais (Instagram, LinkedIn e outras).',
      'Ferramentas de escritório (Word, PowerPoint).',
      'Gestores de conteúdos (WordPress, Shopify).',
    ],
  },
  {
    type: 'title',
    text: 'Conclusão: otimize com critério',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Este conversor combina rapidez e privacidade. Quer seja programador ou utilizador doméstico, pode reduzir o tamanho das imagens sem entregar os ficheiros a um serviço externo.',
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
