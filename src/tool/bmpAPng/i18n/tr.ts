import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAPngLocaleContent } from '../index';

const slug = 'bmp-png-donusturucu';
const title = 'BMP\'den PNG\'ye Dönüştürücü';
const description =
  'BMP görüntülerini kalite kaybı olmadan PNG\'ye dönüştürün. Kusurları olmayan modern sıkıştırma. Dosya yüklemeden. Ücretsiz ve %100 özel.';

const ui: ImageConverterUI = {
  dragText: 'BMP dosyalarını buraya sürükleyin...',
  convertText: 'Anında PNG\'ye dönüştürmek için',
  selectFiles: 'Dosyaları seçin',
  processedFiles: 'İşlenen dosyalar',
  downloadAll: 'Tümünü İndir (.zip)',
  pending: 'Bekliyor',
  bibliographyTitle: 'Bibliyografik Referanslar',
  faqTitle: 'Sıkça Sorulan Sorular',
};

const faq: BmpAPngLocaleContent['faq'] = [
  {
    question: 'BMP ve PNG arasındaki temel fark nedir?',
    answer:
      'Hem BMP hem de PNG kayıpsız formatlardır. Fark optimizasyondadır: PNG, aynı görüntüyü BMP\'den 5 veya 10 kat daha az bellek kaplayacak şekilde saklamak için modern sıkıştırma algoritmalarını kullanır.',
  },
  {
    question: 'Dönüşüm gerçekten özel mi?',
    answer:
      'Evet. Tüm görüntü işleme süreci bilgisayarınız tarafından yapılır. Yerel aktarım sırasında dosyalarınıza kesinlikle hiç kimse erişemez.',
  },
  {
    question: 'Bu durumda neden JPEG yerine PNG tercih edilmeli?',
    answer:
      'Elinizde bir BMP dosyası varsa, bunun nedeni görüntünün hassas renklere sahip olmasıdır. Bir BMP\'yi yıkıcı JPG standardına dönüştürmek saf renklerinizi bozar. PNG bu aslına uygunluğu korur.',
  },
];

const howTo: BmpAPngLocaleContent['howTo'] = [
  {
    name: 'Fotoğrafınızı Ekleyin',
    text: 'Kaynak BMP dosyalarını web öğeleri bırakma alanımıza rahatça taşıyın.',
  },
  {
    name: 'Ağ İletimi Olmadan Dönüştürün',
    text: 'HTML5 JS\'niz tarafından yerel olarak yapılan temiz işlemeyi sadece bir saniye içinde görün.',
  },
  {
    name: 'Saf PNG\'ler Elde Edin',
    text: 'PNG kopyalarını tek tek veya sıkıştırılmış bir paket aracılığıyla indirin.',
  },
];

const bibliography: BmpAPngLocaleContent['bibliography'] = [
  {
    name: 'BMP File Format',
    url: 'https://en.wikipedia.org/wiki/BMP_file_format',
  },
  {
    name: 'PNG Specification W3C',
    url: 'https://www.w3.org/TR/png/',
  },
];

const seo: BmpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'BMP\'den PNG\'ye Dönüştürücü: BMP Formatının Kayıpsız Değişimi',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMP, PNG\'ye göre hiçbir teknik avantaj sağlamadan muazzam miktarda yer kaplayan sıkıştırılmamış bir formattır. Her ikisi de kayıpsız formatlardır: her pikseli mutlak doğrulukla saklarlar. Ancak PNG, Deflate algoritması aracılığıyla kayıpsız sıkıştırma ekler, bu da tek bir görsel bilgi bitinden bile ödün vermeden dosya boyutunu 3 ila 5 kat azaltır. PNG, özünde BMP\'nin her zaman olmak istediği şeydir.',
  },
  {
    type: 'title',
    text: 'BMP vs PNG: aynı kalite, radikal olarak farklı boyut',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMP ve PNG arasındaki temel fark görüntü kalitesinde değil (her ikisi de kayıpsızdır), depolama verimliliğindedir. BMP pikselleri ham olarak saklar: sıkıştırma yok, optimizasyon yok, alan kaygısı yok. PNG ise tekrarlanan piksel modellerini analiz eder ve ZIP\'in kullandığı aynı algoritma olan Deflate aracılığıyla bunları kompakt bir şekilde kodlar.',
  },
  {
    type: 'paragraph',
    html: 'Üstün sıkıştırmaya ek olarak PNG, BMP\'nin hiçbir zaman sahip olmadığı bir özelliği ekler: şeffaflıklar için tam alfa kanalı. Ekran görüntüleri, arayüz grafikleri, logolar, teknik diyagramlar: tüm bu görüntü türleri, her bir renk değerini tam olarak korurken dosya ağırlığını orijinalin küçük bir kısmına düşüren PNG dönüşümünden büyük ölçüde yararlanır.',
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
        description: 'BMP dosyalarınızı üçüncü taraf sunucularda işleyen hizmetler.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'İş görüntüleriniz internette dolaşır',
          'Bekleme süresi BMP\'nin boyutuyla doğru orantılıdır',
          'Ücretsiz planlarda boyut sınırları',
          'Dosyalarınızın analiz edilmesi veya saklanması riski',
        ],
      },
      {
        title: 'Yerel Mimarimiz',
        description: 'Vanilla JS teknolojisi ile doğrudan donanımınızda işleme.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'BMP yerel olarak işlenir, cihazınızdan asla çıkmaz',
          'Milisaniyeler içinde anında dönüşüm',
          'Boyut veya dosya sayısı sınırı yok',
          'Tam gizlilik: dışarıya 0 bayt gönderilir',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'BMP\'den PNG\'ye Yerel Dönüşüm Nasıl Çalışır?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Süreç, HTML5\'in Canvas API\'sini kullanır. BMP dosyası tarayıcının <code>FileReader</code> API\'si ile okunur ve bellekte bir Blob olarak kodu çözülür. Bu Blob, görünmez bir HTML5 tuvali üzerine çizilir. Ardından, <code>toDataURL(\'image/png\')</code> yöntemi tarayıcının yerel PNG sıkıştırma algoritmasını uygular ve sonuç dosyasını oluşturur.',
  },
  {
    type: 'paragraph',
    html: 'JPG\'ye dönüşümün aksine, PNG\'ye dönüşüm tamamen kayıpsızdır: orijinal BMP\'nin her renk değeri ortaya çıkan PNG\'de tam olarak korunur. Kusurlar yok, kenar yumuşatma yok, bilgi kaybı yok. Ortaya çıkan dosya görsel olarak BMP ile aynıdır ancak diskte 3 ila 5 kat daha az yer kaplar.',
  },
  {
    type: 'paragraph',
    html: 'BMP dışa aktaran eski yazılımlarla (endüstriyel makineler, kontrol sistemleri, tıbbi tanı yazılımları) çalışıyorsanız, PNG\'ye dönüştürmek en iyi karardır. PNG, kesinlikle tüm modern programlarla uyumludur, mükemmel renk aslına uygunluğunu korur ve 5 kata kadar daha az yer kaplar. Mümkün olan en basit ve en güvenli geçiştir.',
  },
  {
    type: 'title',
    text: 'Elde Edilen PNG\'nin Kullanım Durumları ve Uyumluluğu',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Tam renkleri korunmuş ekran görüntüleri ve arayüz grafikleri.',
      'Teknik dokümantasyon görüntüleri ve yazılım diyagramları.',
      'CAD, endüstriyel sistemler ve eski yazılımlardan dışa aktarılanlar.',
      'Şeffaflık eklenmiş logolar ve görsel kimlik öğeleri.',
      'Adobe Photoshop, GIMP, Figma ve tüm modern düzenleyicilerle uyumludur.',
    ],
  },
  {
    type: 'title',
    text: 'Sonuç: PNG, BMP\'nin Her Zaman Olması Gereken Şeydir',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMP\'yi PNG\'ye dönüştürmek bir görüntü dosyasının en doğal modernizasyonudur: aynı kayıpsız kalite, daha fazla uyumluluk, şeffaflık desteği ve 3 ila 5 kat daha az ağırlık. Aracımız bu dönüşümü, herhangi bir dosya yüklemeden doğrudan tarayıcınızda milisaniyeler içinde gerçekleştirir.',
  },
];


export const content: BmpAPngLocaleContent = {
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
