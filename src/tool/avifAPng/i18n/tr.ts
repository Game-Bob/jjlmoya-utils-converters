import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAPngLocaleContent } from '../index';

const slug = 'avif-png-donusturucu';
const title = 'AVIF\'i Online PNG\'ye Dönüştür';
const description =
  'Şeffaflığı koruyarak AVIF görüntülerini PNG\'ye dönüştürün. Dosya yüklemeden. Tarayıcınızda yerel işleme. Ücretsiz ve sınırsız.';

const ui: ImageConverterUI = {
  dragText: 'AVIF dosyalarını buraya sürükleyin...',
  convertText: 'Anında PNG\'ye dönüştürmek için',
  selectFiles: 'Dosyaları seçin',
  processedFiles: 'İşlenen dosyalar',
  downloadAll: 'Tümünü İndir (.zip)',
  pending: 'Bekliyor',
  bibliographyTitle: 'Bibliyografik Referanslar',
  faqTitle: 'Sıkça Sorulan Sorular',
};

const faq: AvifAPngLocaleContent['faq'] = [
  {
    question: 'Neden AVIF\'i PNG\'ye dönüştürmeliyim?',
    answer:
      'AVIF sıkıştırma için harikadır ancak eski tarayıcılarda ve klasik düzenleyicilerde uyumluluğu sınırlıdır. AVIF\'i PNG\'ye dönüştürerek, dosyanızın orijinal şeffaflığını korumasını ve tüm uygulamaların açabilmesini sağlarsınız.',
  },
  {
    question: 'Orijinal AVIF dosyasının şeffaflıkları korunuyor mu?',
    answer:
      'Evet. Şeffaf arka planı kaldıran JPG\'nin aksine, PNG\'ye aktarırken dönüştürücümüz alfa kanalını olduğu gibi korur.',
  },
  {
    question: 'Resimlerimin internete yüklenmediği doğru mu?',
    answer:
      'Kesinlikle doğru. Dönüştürücümüz, dahili JavaScript motorunu kullanarak cihazınızda %100 yerel olarak çalışır.',
  },
];

const howTo: AvifAPngLocaleContent['howTo'] = [
  {
    name: 'AVIF dosyalarınızı ekleyin',
    text: 'Doğrudan belirlenen alana sürükleyebilir veya bilgisayarınızdaki klasörlere göz atmak için düğmeyi kullanabilirsiniz.',
  },
  {
    name: 'Anında işleme',
    text: 'HTML5 işlemcisinin görüntüyü işlemesine izin verin; format mikrosaniyeler içinde otomatik olarak PNG\'ye dönüşecektir.',
  },
  {
    name: 'PNG\'lerinizi alın',
    text: 'Dönüştürülen görüntüleri tek tek indirin veya ZIP düğmesini kullanarak toplu bir blok indirin.',
  },
];

const bibliography: AvifAPngLocaleContent['bibliography'] = [
  {
    name: 'Alliance for Open Media: AVIF Formatı',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'W3C - Portable Network Graphics (PNG) Spesifikasyonu',
    url: 'https://www.w3.org/TR/png/',
  },
];

const seo: AvifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'AVIF - PNG Dönüştürücü: Web Teslimatından Profesyonel Düzenlemeye',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF, web üzerinde resim sunmak için ideal formattır: küçük, verimli ve yüksek kaliteli. Ancak bu görüntüleri tasarım araçlarında düzenleme, rötuş yapma veya bu görüntülerle çalışma zamanı geldiğinde AVIF bir engel haline gelir. Figma, Photoshop, Illustrator, Sketch ve hemen hemen her profesyonel tasarım aracı, şeffaflık ve kayıpsız düzenleme ile çalışmak için PNG almayı bekler. AVIF\'i PNG\'ye dönüştürmek, web teslimatı dünyası ile yaratıcı düzenleme dünyası arasındaki köprüdür.',
  },
  {
    type: 'title',
    text: 'AVIF vs PNG: Teslimat vs Düzenleme',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF bir teslimat formatı olarak öne çıkar: küçük dosyalar, hızlı yükleme, alfa kanalı desteği ve olağanüstü görsel kalite. Ancak araç ekosistemi sınırlıdır. Çoğu tasarım yazılımı AVIF\'i doğrudan içe aktaramaz ve bu da yaratıcı iş akışlarını kesintiye uğratır. Figma\'da bir AVIF açmaya çalışmak veya Photoshop\'ta katman olarak içe aktarmak basitçe çalışmaz.',
  },
  {
    type: 'paragraph',
    html: 'PNG, dijital tasarımın yerel formatıdır. Kayıpsız sıkıştırma, tam alfa kanalı desteği ve tüm yaratıcı araçlarla evrensel uyumluluğu ile PNG, mükemmel bir çalışma formatıdır. Ölçeklendirmeniz, rötuş yapmanız, birden fazla formata aktarmanız veya katmanlar halinde çalışmanız gerektiğinde PNG, bu süreçte hiçbir ayrıntıyı veya pikseli kaybetmeyeceğinizi garanti eder.',
  },
  {
    type: 'title',
    text: 'Karşılaştırma: Bulut Dönüştürücüler ve Yerel Mimarimiz',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Bulut Dönüştürücüler',
        description: 'AVIF dosyalarınızı işlemek için uzak bir sunucuya yükleyen araçlar.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Tasarım resimleriniz üçüncü taraf sunuculara gider',
          'Ağ gecikmesi nedeniyle bekleme süresi',
          'Alfa kanalının olası kaybı veya bozulması',
          'Toplu dönüştürmeyi zorlaştıran boyut sınırları',
        ],
      },
      {
        title: 'Yerel Mimarimiz',
        description: 'Vanilla JS teknolojisi ve Canvas API aracılığıyla doğrudan tarayıcınızda işleme.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Alfa kanalı mükemmel sadakatle korunur',
          'Veri aktarımı olmadan anında dönüştürme',
          'Dosya, boyut veya toplu iş sınırı yok',
          'Telifli tasarım varlıkları için tam gizlilik',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Şeffaflıklarla teknik dönüşüm nasıl çalışır?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Modern tarayıcılar, entegre AV1 motorları sayesinde AVIF\'i yerel olarak çözer. Dosya yüklendiğinde, tarayıcı tüm alfa kanalı bilgilerini koruyarak bellekte çözer. Şeffaflıkları da dahil olmak üzere kodu çözülmüş görüntü, alfa kanalını korumak için doğru kompozisyon moduyla bir HTML5 <code>Canvas</code> öğesi üzerine çizilir.',
  },
  {
    type: 'paragraph',
    html: 'Beyazla doldurarak şeffaflıkları yok eden JPG\'ye aktarmanın aksine, <code>toBlob(\'image/png\')</code> aracılığıyla PNG\'ye aktarma, alfa kanalını tamamen korur. Sonuç, orijinal AVIF\'in her pikselini, her yarı şeffaflığını ve her ayrıntısını koruyan kayıpsız sıkıştırmaya sahip bir PNG\'dir.',
  },
  {
    type: 'tip',
    title: 'Herhangi bir tasarım aracı için zorunlu ön adım',
    html: 'AVIF\'lerinizi Figma, Photoshop, Illustrator veya herhangi bir tasarım aracına aktarmadan önce PNG\'ye dönüştürün. Bu uygulamalar AVIF\'i doğrudan okumaz, ancak PNG hepsinde yerel olarak çalışır, şeffaflıkları ve kaliteyi mükemmel şekilde korur.',
  },
  {
    type: 'title',
    text: 'Kullanım durumları: AVIF\'in PNG\'ye dönüştürülmesine ne zaman ihtiyacınız olur?',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Figma, Sketch, Adobe XD veya diğer UI tasarım araçlarına aktarma.',
      'Şeffaflığı koruyarak Photoshop, Affinity Photo veya GIMP\'te katman olarak düzenleme.',
      'Simge veya sprite oluşturma için kaynak olarak kullanma.',
      'Standart tasarım yazılımıyla çalışan müşterilere veya iş arkadaşlarına gönderme.',
      'Şeffaflıklı görüntülerin kayıpsız düzenleme formatında arşivlenmesi.',
    ],
  },
  {
    type: 'title',
    text: 'Sonuç: Web ve tasarım arasındaki köprü',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF ve PNG modern bir iş akışında mükemmel ortaklardır: Web\'e verimli teslimat için AVIF, tasarım araçlarında düzenleme ve iş birliği için PNG. Dönüştürücümüzle, birinden diğerine geçiş anındadır, özeldir ve her ayrıntıyı korur; görsel varlıklarınız önemli olduğunda tam da ihtiyacınız olan şey budur.',
  },
];


export const content: AvifAPngLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'tr', faq, howTo }),
};
