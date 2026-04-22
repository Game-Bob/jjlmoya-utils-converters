import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAWebpLocaleContent } from '../index';

const slug = 'gif-den-webp-ye-donusturucu';
const title = 'GIF\'i Statik WebP\'ye Online Dönüştür';
const description =
  'Hareketli GIF\'leri statik WebP\'ye dönüştürün. Şeffaflığı korur. Sunucu yok. Tarayıcınızda yerel olarak işlenir. Ücretsiz.';

const ui: ImageConverterUI = {
  dragText: 'GIF dosyalarını sürükleyin...',
  convertText: 'Anında WebP\'ye dönüştürmek için',
  selectFiles: 'Dosyaları seçin',
  processedFiles: 'İşlenen dosyalar',
  downloadAll: 'Tümünü indir (.zip)',
  pending: 'Bekliyor': 'Bibliyografik Referanslar',
  faqTitle: 'Sıkça Sorulan Sorular',
};

const faq: GifAWebpLocaleContent['faq'] = [
  {
    question: 'Neden hareketli bir dosyayı modern statik WebP formatına dondurmalıyım?',
    answer:
      'WebP, Google\'ın sıkıştırma standardıdır; oldukça hafiftir ve şeffaflığı temiz bir şekilde korur. GIF\'ten WebP\'ye geçmek, ağır animasyonu ortadan kaldırır ve web hızında muazzam bir kazanç sağlar.',
  },
  {
    question: 'Orijinal avatar şeffaf kalacak mı?',
    answer:
      'Evet, JPEG\'in aksine WebP kapsayıcısı karmaşık Alpha kanalına saygı duyar. Tüm silüetleri orijinalindeki gibi mükemmel kalacaktır.',
  },
  {
    question: 'Dosyalar nereye yüklenecek?',
    answer:
      'Yükleme yok. İşleme, bilgisayarınızdaki tarayıcının Javascript\'i tarafından tamamen yerel olarak gerçekleştirilir, uzaktan gönderim sıfırdır.',
  },
];

const howTo: GifAWebpLocaleContent['howTo'] = [
  {
    name: 'Hareketli bir çığ başlatın',
    text: 'Düzinelerce memeyi uzaktan bağlantı olmadan sınırlı bölgeye taşıyın ve bırakın.',
  },
  {
    name: 'Büyük görünmez değişime tanık olun',
    text: 'Yerel canvas kod çözücü çıktıyı oluştururken milisaniye başına değişen ilerleme göstergesini izleyin.',
  },
  {
    name: 'Temiz sonuç arsenalini kaydedin',
    text: 'Çıkarılan dosyaları tek tek alın veya her şeyi paketlemek için Zip İndir düğmesine basın.',
  },
];

const seo: GifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'GIF to WebP Dönüştürücü: Ağır Animasyonlar İçin Modern Alternatif',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Hareketli GIF\'ler modern web içeriğinin dinozorlarıdır: Orantısız bant genişliği tüketirler, her sayfanın PageSpeed değerini düşürürler ve binlerce web sitesindeki toplam ağırlığın önemli bir yüzdesinden sorumludurlar. Tipik bir 5 MB hareketli GIF, aynı görsel kalite ile 1 MB\'ın altında bir WebP animasyonuna dönüşebilir. WebP, Google tarafından web\'de GIF\'in yerini alması için özel olarak tasarlanmış modern bir pillettir.',
  },
  {
    type: 'title',
    text: 'GIF vs WebP: Web\'in geçmişi ve bugünü arasındaki uçurum',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIF, aslen animasyonlar için tasarlanmamış 1987 yapımı bir formattır; bu özellik daha sonra bir "hack" olarak eklenmiştir. 256 renk paleti, verimsiz sıkıştırması ve sesi işleyememesi onu eski bir format haline getirir. Google tarafından 2010 yılında geliştirilen WebP, hem kayıplı hem de kayıpsız üstün sıkıştırma, yerel animasyon desteği ve tam alfa kanalı sunar.',
  },
  {
    type: 'paragraph',
    html: 'Bir web geliştiricisi için, sayfalardaki GIF\'leri WebP ile değiştirmek, Google PageSpeed puanında 10 ila 30 puanlık bir iyileşme anlamına gelebilir. Daha az sayfa ağırlığı, daha iyi Core Web Vitals, daha iyi SEO sıralamaları ve sunucularda daha düşük bant genişliği maliyetleri demektir. Bu sadece estetik bir iyileştirme değil, teknik bir mimari karardır.',
  },
  {
    type: 'title',
    text: 'Mimari Karşılaştırması: Yerel vs Bulut',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Bulut Dönüştürücüler',
        description: 'GIF\'lerinizi uzak sunucularda işleyen platformlar.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Animasyonlarınız internet üzerinden üçüncü taraf sunuculara seyahat eder',
          'Yükleme ve indirme sırasında ağ gecikmesi nedeniyle bekleme süresi',
          'Boyut sınırları (büyük GIF\'ler genellikle reddedilir)',
          'Dosya saklama ve analiz riski',
        ],
      },
      {
        title: 'Bizim Yerel Mimarimiz',
        description: 'Vanilla JS teknolojisini kullanarak doğrudan donanımınızda işleme.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'GIF asla cihazınızdan ayrılmaz',
          'Ağ bekleyişi olmadan anında dönüşüm',
          'Boyut sınırı yok: Her ağırlıktaki GIF\'leri işleyin',
          'Tam gizlilik: Harici olarak 0 bayt gönderilir',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Yerel GIF to WebP dönüşümü nasıl çalışır?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Yerel dönüşüm HTML5 Canvas API\'sini kullanır. GIF, yerel bir tarayıcı Image öğesi olarak yüklenir. Bir tuvale çizilerek, grafik motoru tüm şeffaflık bilgileriyle birlikte ilk animasyon karesini yakalar. <code>toDataURL(\'image/webp\')</code> yöntemi, kareyi doğrudan RAM\'de WebP olarak dışa aktarır.',
  },
  {
    type: 'paragraph',
    html: 'WebP tam alfa kanalını destekler, bu nedenle GIF şeffaflıkları, bir arka plan eklemeye gerek kalmadan sonuçtaki WebP\'de korunur. WebP sıkıştırma algoritmaları GIF veya PNG\'den önemli ölçüde daha verimlidir, bu da nihai çıktının dosya boyutundaki radikal azalmayı açıklar.',
  },
  {
    type: 'tip',
    title: 'Garantili PageSpeed iyileştirmesi',
    html: '5 MB\'lık hareketli bir GIF, 1 MB\'ın altında bir WebP olabilir. Web sitenizin sayfalarında GIF\'ler varsa, bunları WebP ile değiştirmek Largest Contentful Paint (LCP) ve Total Blocking Time (TBT) değerlerinizi anında iyileştirerek SEO sıralamalarını doğrudan etkileyebilir.',
  },
  {
    type: 'title',
    text: 'Sonuç WebP\'nin kullanım durumları ve uyumluluğu',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'PageSpeed puanlarını artırmak için web sayfalarındaki GIF\'lerin değiştirilmesi.',
      'Discord, Slack ve modern platformlar için optimize edilmiş avatarlar ve çıkartmalar.',
      'Dijital pazarlama kampanyaları için bannerlar ve görseller.',
      'Progresif web uygulamalarındaki (PWA) animasyonlar.',
      'Chrome, Edge, Firefox, Safari 14+ ve tüm modern tarayıcılarla uyumludur.',
    ],
  },
  {
    type: 'title',
    text: 'Sonuç: GIF\'lerinizi 21. yüzyıla taşıyın',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Web sitenizdeki her GIF, kaçırılmış bir optimizasyon fırsatıdır. Aracımız GIF\'leri anında, özel olarak ve sınırsız bir şekilde doğrudan tarayıcınızda WebP\'ye dönüştürür. Sonuç: 5 kata kadar daha küçük dosyalar, mükemmel şeffaflık ve tüm modern tarayıcılarla uyumluluk.',
  },
];


export const content: GifAWebpLocaleContent = {
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
