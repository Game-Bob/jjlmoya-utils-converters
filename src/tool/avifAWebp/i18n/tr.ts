import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAWebpLocaleContent } from '../index';

const slug = 'avif-webp-donusturucu';
const title = 'AVIF\'i Online WebP\'ye Dönüştür';
const description =
  'Daha iyi uyumluluk için AVIF görüntülerini WebP\'ye dönüştürün. Sunucu olmadan yerel işleme. Ücretsiz, özel ve sınırsız.';

const ui: ImageConverterUI = {
  dragText: 'AVIF dosyalarını buraya sürükleyin...',
  convertText: 'Anında WebP\'ye dönüştürmek için',
  selectFiles: 'Dosyaları seçin',
  processedFiles: 'İşlenen dosyalar',
  downloadAll: 'Tümünü İndir (.zip)',
  pending: 'Bekliyor',
  bibliographyTitle: 'Bibliyografik Referanslar',
  faqTitle: 'Sıkça Sorulan Sorular',
};

const faq: AvifAWebpLocaleContent['faq'] = [
  {
    question: 'WebP\'ye dönüştürmek ile diğer formatlar arasındaki gerçek fark nedir?',
    answer:
      'WebP her iki dünyanın da en iyisini sunar: JPG kadar şaşırtıcı sıkıştırmalar yaparken PNG gibi temiz şeffaflıkları barındırma yeteneğini korur. AVIF\'inizi WebP\'ye dönüştürmek, tüm avantajlarını korurken web için uyumluluğunu maksimize eder.',
  },
  {
    question: 'Bunu sunucu olmadan ve bu kadar hızlı değiştirmeyi nasıl başarıyorsunuz?',
    answer:
      'AVIF\'inizi yerel bellekte okumaya ve rekor sürede optimize edilmiş bir WebP dosyası çıkarmaya olanak tanıyan yerleşik kod çözme modüllerinden ve JavaScript HTML5 Image nesnesinden yararlanıyoruz.',
  },
  {
    question: 'WebP formatı günümüzde tamamen uyumlu mu?',
    answer:
      'Yeni doğan AVIF\'in aksine, WebP formatı Chrome, Firefox ve Safari gibi tarayıcılar arasında çok geniş bir desteğe sahiptir.',
  },
];

const howTo: AvifAWebpLocaleContent['howTo'] = [
  {
    name: 'Fotoğraf dosyalarınızı ekleyin',
    text: 'Tüm AVIF formatı seçimlerini sürükleyip tuvalimize bırakın.',
  },
  {
    name: 'Algoritmik Bayt Dönüşümü',
    text: 'Motorumuz, hiçbir şey yüklemeden algoritmaları işler ve sıkıştırılmış WebP tabanlı tam iterasyonlar oluşturur.',
  },
  {
    name: 'Hazır İndirmelerinizi Biriktirin',
    text: 'Panele basın ve toplu dosyaları ZIP kutularında veya tek tek alarak doğrudan yayınlayın.',
  },
];

const seo: AvifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'AVIF\'ten WebP\'ye Dönüştürücü: Web İçin Modern ve Güvenli Alternatif',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF, günümüzde mevcut olan en gelişmiş görüntü formatıdır: WebP\'den daha küçük, JPG\'den daha küçük, üstün görsel kaliteye sahip. Ancak benimsenmesi düzensiz oldu - Safari bunu 2024\'e kadar desteklemedi ve birçok eski mobil cihaz bunu tanımıyor. WebP ise %95\'ten fazla küresel desteğiyle yıllardır modern web standardı olarak yerleşmiş durumda. AVIF\'i WebP\'ye dönüştürmek, uyumluluğu riske atmadan modernliğe ihtiyaç duyduğunuzda pragmatik bir karardır.',
  },
  {
    type: 'title',
    text: 'AVIF vs WebP: En Yeni vs En Güvenli',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF, mevcut en gelişmiş sıkıştırmayı sunar - tipik olarak aynı kalitede WebP\'den %20-30 daha küçüktür. AV1 tabanlı teknolojisi sektördeki en modern olanıdır. Ancak AVIF desteği hala kör noktalara sahiptir: Safari\'nin eski sürümleri, eski Android\'deki bazı tarayıcılar ve bazı masaüstü resim oynatıcıları bunu tanımaz. Geniş ve çeşitli kitlelere sahip web üretimi için bu bir risk oluşturur.',
  },
  {
    type: 'paragraph',
    html: 'WebP çok daha sağlam bir destek geçmişine sahiptir. Chrome bunu 2010\'da benimsedi, Firefox ve Edge takip etti ve Safari 2020\'de bünyesine kattı. Tarayıcılarda %95\'ten fazla küresel kapsamla WebP, yedek formatlar sunmak istemeyen herhangi bir web sitesi için güvenli seçimdir. Şeffaflıkları, kayıplı ve kayıpsız sıkıştırmayı destekler ve JPG veya PNG\'den çok daha küçük dosyalar elde eder.',
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
          'Özel resimleriniz harici sunuculardan geçer',
          'İş akışını yavaşlatan ağ gecikmesi',
          'Ücretsiz dönüşüm başına dosya sınırları',
          'Değişebilecek üçüncü taraf hizmetlerine bağımlılık',
        ],
      },
      {
        title: 'Yerel Mimarimiz',
        description: 'Vanilla JS teknolojisi ve Canvas API aracılığıyla doğrudan tarayıcınızda işleme.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Tam gizlilik - 0 bayt cihazınızdan çıkar',
          'Ağ bağımlılığı olmadan anında hız',
          'Boyut veya dosya sayısı sınırı yok',
          'İnternet bağlantısı olmadan çalışır',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Tarayıcıda teknik dönüşüm nasıl çalışır?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Chrome, Firefox ve Edge yerel AVIF kod çözücüleri içerir. Dosya yüklendiğinde, tarayıcının görüntü motoru bunu RAM\'de kodunu çözerken alfa kanalı bilgisini korur. Görüntü, şeffaflıkları doğru bir şekilde koruyan 2D bağlamı kullanılarak görünmez bir HTML5 <code>Canvas</code> üzerine çizilir.',
  },
  {
    type: 'paragraph',
    html: 'Dışa aktarma <code>toBlob(\'image/webp\', quality)</code> ile gerçekleştirilir. Tarayıcı, WebP sıkıştırma algoritmasını dahili olarak uygular ve orijinal görüntüde varsa alfa kanalını içeren bir Blob oluşturur. Bu Blob doğrudan indirme bağlantısına dönüştürülür. Tüm süreç, harici sunucularla herhangi bir iletişim olmadan mikrosaniyeler içinde gerçekleşir.',
  },
  {
    type: 'tip',
    title: 'WebP: modern geliştiricinin pragmatik seçimi',
    html: 'WebP tarayıcılarda %95\'ten fazla desteğe sahiptir - AVIF büyüyor ancak henüz bu rakama ulaşmış değil. Uyarlanabilir format algılaması olmayan yayınlanan siteler için WebP, neredeyse her kitleyi kapsayan güvenli seçimdir. AVIF\'lerinizi WebP\'ye dönüştürün ve modern resimleri güvenle sunun.',
  },
  {
    type: 'title',
    text: 'Kullanım durumları: WebP\'yi AVIF\'e ne zaman tercih etmeli?',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      '2020\'den beri polyfill olmadan tarayıcı desteğine ihtiyaç duyan web siteleri.',
      'WebP\'yi kabul eden ancak AVIF\'i etmeyen CDN\'ler ve görüntü teslim sistemleri.',
      'AVIF\'i destekleyemeyebilecek WebView\'lara sahip hibrit mobil uygulamalar.',
      'WebP\'nin AVIF\'ten daha yüksek desteğe sahip olduğu modern HTML e-postaları.',
      'Yerleşik WebP görüntü desteğine sahip CMS platformları ve e-ticaret siteleri.',
    ],
  },
  {
    type: 'title',
    text: 'Sonuç: Garantili uyumlulukla modernlik',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF görüntü sıkıştırmanın ön saflarıdır, ancak WebP modern web ekosisteminin güvenilir ve evrensel seçimidir. Aracımızla, en yeniden en çok desteklenene anında geçiş yaparsınız - hiçbir şeyi sunucuya yüklemeden, tam gizlilikle ve boyut sınırı olmadan.',
  },
];


export const content: AvifAWebpLocaleContent = {
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
