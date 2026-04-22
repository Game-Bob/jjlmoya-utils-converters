import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAWebpLocaleContent } from '../index';

const slug = 'jpg-den-webp-ye-donusturucu';
const title = 'JPG\'yi WebP\'ye Çevrimiçi ve Ücretsiz Dönüştürün';
const description =
  'JPG görüntülerini tarayıcınızda WebP\'ye dönüştürün. Görünür kayıp olmadan üstün sıkıştırma. Dosya yüklemesi yok. Ücretsiz, sınırsız ve özel.';

const ui: ImageConverterUI = {
  dragText: 'JPG dosyalarını sürükleyin...',
  convertText: 'Onları anında WebP\'ye dönüştürmek için',
  selectFiles: 'Dosyaları seçin',
  processedFiles: 'İşlenmiş dosyalar',
  downloadAll: 'Tümünü İndir (.zip)',
  pending: 'Bekliyor': 'Bibliyografik Referanslar',
  faqTitle: 'Sıkça Sorulan Sorular',
};

const faq: JpgAWebpLocaleContent['faq'] = [
  {
    question: 'JPG fotoğraflarını neden WebP\'ye dönüştürmeliyiz?',
    answer:
      'WebP, geleneksel JPG dosyalarının insan gözü farkı fark etmeden önemli ölçüde daha iyi sıkıştırılmasını sağlar, bu da daha hızlı ve daha modern web siteleriyle sonuçlanır.',
  },
  {
    question: 'Görüntü başına ödeme yapmam gerekiyor mu?',
    answer:
      'Hayır, araç ücretsizdir ve her şey doğrudan bilgisayarınızda işlenir. Ev veya profesyonel kullanım için sınırsızdır.',
  },
  {
    question: 'Dönüştürme güvenli mi?',
    answer:
      'Evet, tamamen. Tüm işlemler, harici sunuculara herhangi bir veri gönderilmeden yerel tarayıcınızın HTML5 Canvas\'ında gerçekleşir.',
  },
];

const howTo: JpgAWebpLocaleContent['howTo'] = [
  {
    name: 'JPG fotoğraflarınızı ekleyin',
    text: 'JPG dosyalarınızı bırakın veya doğrudan üst alana sürükleyin. Algılama anlıktır.',
  },
  {
    name: 'WebP\'ye İşleme',
    text: 'Yerel oluşturma motoru, her görüntü dosyasını web için hazır, ultra optimize edilmiş bir WebP\'ye dönüştürecektir.',
  },
  {
    name: 'Sonuçları indirin',
    text: 'Her WebP\'yi ayrı ayrı kaydedin veya tüm dönüştürülmüş dosyaları içeren ZIP dosyasını indirin.',
  },
];

const seo: JpgAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'JPG\'den WebP\'ye Dönüştürücü: Google\'ın Modern Formatıyla Sitenizi Hızlandırın',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> formatı onlarca yıldır dijital fotoğrafçılığa hakim oldu; evrensel olarak uyumlu ve yaygın olarak destekleniyor. Ancak Google, <strong>WebP</strong>\'yi JPG\'yi kendi oyununda yenmek için tasarladı: %25–35 daha az dosya boyutunda aynı görsel kalite. Yavaş sayfa yüklemeleriyle mücadele eden geliştiriciler ve pazarlama ekipleri için JPG\'yi WebP\'ye dönüştürmek, tasarımınıza dokunmadan uygulayabileceğiniz en yüksek getirili optimizasyondur.',
  },
  {
    type: 'title',
    text: 'JPG mi WebP mi? Her format ne zaman kullanılır',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong>, evrensel uyumluluğa ihtiyacınız olduğunda doğru seçim olmaya devam eder: müşteri e-postaları, Word belgeleri, eski sosyal medya platformları veya henüz WebP\'yi kabul etmeyen CMS sistemleri. Otuz yıllık ekosistemi, herhangi bir ekranın, yazıcının veya görüntüleyicinin onu sorunsuz bir şekilde açacağını garanti eder. Ana dezavantajı boyuttur; 1,5 MB\'lık bir başlık JPG\'si sayfanızın LCP puanını düşürebilir ve Core Web Vitals eşiklerini geçemeyebilir.',
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong>, web sitenizde yaşayan tüm içerikler için akıllıca bir seçimdir. Chrome, Firefox, Safari ve Edge yıllardır bunu yerel olarak desteklemektedir. E-ticaretteki ürün görselleri, blog banner\'ları, video küçük resimleri ve çevrimiçi yayınlanan her fotoğraf doğrudan fayda sağlar: daha hafif sayfalar, daha iyi Google PageSpeed Insights puanları ve özellikle yavaş mobil bağlantılarda daha akıcı bir kullanıcı deneyimi.',
  },
  {
    type: 'title',
    text: 'Karşılaştırma: Yerel ve Bulut Dönüştürme',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Bulut Dönüştürücüler',
        description: 'Dosyalarınızı uzak bir sunucuya yükleyen araçlar.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Yükleme ve indirmede ağ gecikmesi',
          'Fotoğraflarınız üçüncü taraf sunucularda saklanır',
          'Dosya boyutu sınırları ve günlük dönüştürme kotaları',
          'Rahatsız edici reklamlar ve üçüncü taraf izleyiciler',
        ],
      },
      {
        title: 'Yerel Mimarimiz',
        description: 'Vanilla JS teknolojisini kullanarak doğrudan donanımınızda işleme.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Anında hız — sıfır ağ gecikmesi',
          'Tam gizlilik — harici olarak gönderilen 0 bayt',
          'MB sınırı veya dosya sayısı kısıtlaması yok',
          'Temiz arayüz, reklam veya izleme yok',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Teknik olarak nasıl çalışır',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Bir JPG\'yi araca sürüklediğinizde, tarayıcı yalnızca RAM\'inizde yaşayan bir <strong>Blob nesnesi</strong> oluşturur. Bu Blob kodu çözülür ve görünmez bir <strong>HTML5 Canvas</strong> öğesine çizilir. JPG\'de alfa kanalı bulunmadığından, WebP\'ye dönüştürme doğrudan gerçekleşir: motor, <code>toDataURL(\'image/webp\')</code> çağrısı yaparak tuvali dışa aktarır ve işletim sisteminizin anında indirdiği bir bayt akışı oluşturur; sunucu dahil olmaz.',
  },
  {
    type: 'paragraph',
    html: 'WebP sıkıştırma algoritması, blok tahmin tekniklerini (Google\'ın video kodeği olan VP8\'dekine benzer), renk dönüşümleri ve aritmetik kodlama ile birleştirir. Sonuç, orijinal JPG ile aynı algısal bilgiyi içeren ancak çok daha verimli paketlenmiş bir dosyadır; bu da her sayfa ziyaretinde daha az kilobayt aktarılması anlamına gelir.',
  },
  {
    type: 'tip',
    title: 'Core Web Vitals İpucu: LCP ve görüntü ağırlığı',
    html: '<strong>Largest Contentful Paint (LCP)</strong>, sayfanızdaki en büyük görsel öğenin yüklenmesinin ne kadar sürdüğünü ölçen Google metriğidir. 1,5 MB\'lık bir başlık JPG\'si, gözle görülür bir görsel fark olmadan sadece 900 KB — hatta 600 KB — bir WebP haline gelebilir. Bu <strong>%25–35 tasarruf</strong>, LCP\'nizi "İyileştirme Gerekiyor" durumundan "İyi" durumuna taşıyabilir ve sizi arama sıralamalarında yukarı taşıyabilir.',
  },
  {
    type: 'title',
    text: 'Kullanım durumları ve uyumluluk',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'WooCommerce veya Shopify mağazalarındaki ürün görselleri: daha az ağırlık, daha fazla dönüşüm.',
      'Blog ve makale fotoğrafçılığı: yeniden tasarlamaya gerek kalmadan daha iyi PageSpeed puanı.',
      'Web banner\'ları ve görüntülü reklam kreatifleri: aynı keskinlikte daha hafif dosyalar.',
      'Mimarlık, fotoğrafçılık veya tasarım stüdyoları için portföy galerileri.',
      'Streaming sitelerinde veya çevrimiçi kurs platformlarında video küçük resimleri.',
    ],
  },
  {
    type: 'title',
    text: 'Sonuç',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'JPG\'lerinizi WebP\'ye dönüştürmek, bugün herhangi bir web sitesine uygulayabileceğiniz en basit ve en uygun maliyetli optimizasyonlardan biridir. Bu araçla bunu saniyeler içinde, ücretsiz olarak ve görüntüleriniz cihazınızdan hiç ayrılmadan yaparsınız. Daha az kilobayt, daha iyi LCP, daha hızlı sayfalar; hepsi zaten sahip olduğunuz görsel görünümün aynısıyla.',
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
  schemas: generateSchemas({ title, description, inLanguage: 'tr', faq, howTo }),
};
