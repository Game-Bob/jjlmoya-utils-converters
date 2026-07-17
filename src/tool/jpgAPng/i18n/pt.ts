import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAPngLocaleContent } from '../index';

const slug = 'conversor-jpg-para-png';
const title = 'Converter JPG para PNG Online e Grátis';
const description =
  'Converta imagens JPG para PNG no seu navegador sem carregar ficheiros. Conversão lossless, gratuita e totalmente privada.';

const ui: ImageConverterUI = {
  dragText: 'Arraste os ficheiros JPG...',
  convertText: 'Para convertê-los para PNG instantaneamente',
  selectFiles: 'Selecionar ficheiros',
  processedFiles: 'Ficheiros processados',
  downloadAll: 'Descarregar Tudo (.zip)',
  pending: 'Pendente',
  bibliographyTitle: 'Referências Bibliográficas',
  faqTitle: 'Perguntas Frequentes',
};

const faq: JpgAPngLocaleContent['faq'] = [
  {
    question: 'Quando devo usar JPG para PNG?',
    answer:
      'Sempre que for editar texto ou logótipos dentro de uma fotografia. Se guardar um JPG várias vezes, este degrada-se. O PNG congela a compressão.',
  },
  {
    question: 'O ficheiro PNG terá o fundo transparente imediatamente?',
    answer:
      'Não. O JPG original vinha plano e sem esse tipo de canal estrutural. O PNG resultante preparará esse contentor, depois deverá isolar a peça usando o Photoshop ou outro editor.',
  },
  {
    question: 'Este site tem limites de tráfego?',
    answer:
      'Graças a tecnologias Edge sem dependências cloud, o peso da sua conversão não supõe limites porque usa integralmente o seu terminal informático ou móvel.',
  },
];

const howTo: JpgAPngLocaleContent['howTo'] = [
  {
    name: 'Arraste JPG para o painel',
    text: 'Carregue imagens estáticas em formato JPG usando o rato táctil ou o seletor do computador.',
  },
  {
    name: 'Execução Lossless',
    text: 'O software Vanilla empurra os bits do quadro para um invólucro sem perdas nativo da família PNG.',
  },
  {
    name: 'Terminar Sessão',
    text: 'Pressione o painel e o seu navegador depositará os ativos web descarregados nas suas Pastas de Utilizador.',
  },
];

const seo: JpgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Conversor de JPG para PNG: Edição sem Perdas e Transparência',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'O <strong>JPG</strong> é insuperável para fotografias de câmara, mas tem um calcanhar de Aquiles: cada vez que guarda o ficheiro, aplica de novo a sua compressão com perda, degradando progressivamente os bordos e os gradientes. O <strong>PNG</strong> usa compressão sem perda - uma vez guardado, os píxeis são imutáveis. Converter um JPG para PNG é a operação chave quando precisa de preparar uma imagem para edição intensiva, adicionar um fundo transparente ou integrá-la num fluxo de design que requer vários salvamentos.',
  },
  {
    type: 'title',
    text: 'JPG ou PNG? Quando usar cada formato',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'O <strong>JPG</strong> é o rei da fotografia: pesos reduzidos, compatível com tudo. Mas os seus artefactos de compressão acumulam-se com cada edição e novo salvamento. Se precisa de recortar, retocar ou adicionar texto a uma imagem repetidamente, começar de JPG significa introduzir degradação em cada ciclo. Além disso, o JPG carece de canal alfa: não pode ter fundos transparentes, o que o desqualifica para logótipos, ícones e elementos de UI.',
  },
  {
    type: 'paragraph',
    html: 'O <strong>PNG</strong> é a escolha correta para logótipos corporativos, capturas de ecrã com texto nítido, elementos de interface, imagens de produto com fundo branco que depois precisará de recortar, ou qualquer recurso gráfico que vá ser editado mais do que uma vez. A compressão sem perda garante que os bordos do texto se mantêm perfeitamente definidos e que as cores planas permanecem puras, sem ruído JPEG.',
  },
  {
    type: 'title',
    text: 'Comparativo: Conversão Local vs Nuvem',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Conversores Cloud',
        description: 'Ferramentas que carregam os seus ficheiros para um servidor remoto.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Latência de rede no upload e download',
          'As suas imagens ficam em servidores alheios',
          'Limites de tamanho e conversões diárias',
          'Publicidade intrusiva e rastreadores de terceiros',
        ],
      },
      {
        title: 'A Nossa Arquitetura Local',
        description: 'Processamento direto no seu hardware através de tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Velocidade instantânea - zero latência de rede',
          'Privacidade total - 0 bytes enviados para o exterior',
          'Sem limites de MB nem de número de ficheiros',
          'Interface limpa, sem anúncios nem rastreios',
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
    html: 'O processo é puramente local: o navegador cria um <strong>Blob</strong> com o JPG selecionado e desenha-o sobre um <strong>Canvas HTML5</strong> em memória. Uma vez renderizado, é chamado <code>toDataURL(\'image/png\')</code> - o codec PNG integrado no navegador recodifica cada píxel sem aplicar nenhuma nova compressão com perda. O resultado é um PNG que preserva fielmente o estado atual do JPG: nem melhor nem pior, simplesmente congelado.',
  },
  {
    type: 'paragraph',
    html: 'O PNG resultante utilizará compressão DEFLATE sem perda, a mesma que empregam ferramentas profissionais como o Photoshop ou o GIMP. O seu tamanho será maior do que o JPG original - normalmente entre 2 e 5 vezes - porque armazena todos os píxeis sem descartar informação. É o preço que se paga pela fidelidade e pela editabilidade infinita.',
  },
  {
    type: 'tip',
    title: 'Importante: o PNG não recupera a qualidade JPEG',
    html: 'Converter um JPG para PNG <strong>não recupera a qualidade perdida</strong> durante a compressão JPEG original. Se o seu JPG já tinha artefactos de bloco ou ruído de cor, o PNG conservá-los-á intactos - simplesmente evita que se adicionem mais. Pense na conversão como "congelar" o estado atual da imagem para que edições futuras não a degradem mais.',
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
      'Logótipos e elementos de marca que precisam de fundo transparente após o recorte.',
      'Capturas de ecrã com texto que serão editadas e novamente guardadas várias vezes.',
      'Imagens de produto para e-commerce que requerem fundo branco limpo e recortável.',
      'Recursos gráficos para apresentações de PowerPoint ou Google Slides.',
      'Ativos de UI para aplicações web e móveis onde a nitidez de bordos é crítica.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusão',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'A conversão de JPG para PNG é o primeiro passo em qualquer fluxo de trabalho de design sério. Não transforma a qualidade original, mas protege cada píxel de edições futuras. Com esta ferramenta, o processo ocorre instantaneamente e de forma completamente privada, sem que as suas imagens corporativas ou pessoais saiam em nenhum momento do seu dispositivo.',
  },
];


export const content: JpgAPngLocaleContent = {
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
