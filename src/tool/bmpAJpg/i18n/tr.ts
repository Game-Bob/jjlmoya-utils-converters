import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAJpgLocaleContent } from '../index';

const slug = 'bmp-jpg-donusturucu';
const title = 'Online BMP\'den JPG\'ye Dönüştür';
const description =
  'BMP görüntülerini tarayıcınızda JPG\'ye dönüştürün. Dosya boyutunu büyük ölçüde azaltın. Dosyaları sunuculara yüklemeden. Ücretsiz ve %100 özel.';

const ui: ImageConverterUI = {
  dragText: 'BMP dosyalarını buraya sürükleyin...',
  convertText: 'Anında JPG\'ye dönüştürmek için',
  selectFiles: 'Dosyaları seçin',
  processedFiles: 'İşlenen dosyalar',
  downloadAll: 'Tümünü İndir (.zip)',
  pending: 'Bekliyor',
  bibliographyTitle: 'Bibliyografik Referanslar',
  faqTitle: 'Sıkça Sorulan Sorular',
};

const faq: BmpAJpgLocaleContent['faq'] = [
  {
    question: 'Neden BMP\'den JPG\'ye dönüştürmeli?',
    answer:
      'BMP formatı verileri sıkıştırmaz, bu da aşırı derecede büyük dosyalara yol açar. JPG formatı, web ve dağıtım için mükemmel görsel kaliteyi koruyarak görüntüyü büyük ölçüde sıkıştırır.',
  },
  {
    question: 'Görüntülerimi burada dönüştürmek güvenli mi?',
    answer:
      '%100 güvenli. İşleme tamamen kendi web tarayıcınızın motoru kullanılarak yerel olarak gerçekleştirildiğinden gizliliğiniz garantilidir.',
  },
  {
    question: 'Araç nasıl çalışıyor?',
    answer:
      'BMP dosyalarınızı buraya sürüklemeniz yeterlidir; JavaScript betiğimiz pikselleri okuyarak bunları bir HTML tuvali üzerine yeniden çizer ve anında JPEG kodlamasında dışa aktarır.',
  },
];

const howTo: BmpAJpgLocaleContent['howTo'] = [
  {
    name: 'BMP dosyalarınızı ekleyin',
    text: 'Belirlenen alana BMP formatındaki resimlerinizi sürükleyip bırakın veya seçin.',
  },
  {
    name: 'Otomatik İşleme',
    text: 'Araç görüntüyü rasterleştirir ve milisaniyeler içinde JPG formatında en uygun sıkıştırma seviyesini uygular.',
  },
  {
    name: 'Tekli veya Toplu İndirme',
    text: 'Yeni web optimize edilmiş resimlerinizi tek tek veya bir ZIP dosyası olarak indirin.',
  },
];

const seo: BmpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'BMP\'den JPG\'ye Dönüştürücü: Dev Dosyaları Saniyeler İçinde Küçültün',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMP (Bitmap), bilgisayar dünyasındaki en basit formattır: her pikseli hiçbir sıkıştırma olmadan olduğu gibi saklar. 1920x1080 çözünürlüğünde bir BMP ekran görüntüsü yaklaşık 6 MB boyutundadır. Aynı görüntü, görsel olarak ayırt edilemez bir kalitede JPG formatında 200 ile 400 KB arasında yer kaplar. Aradaki fark muazzamdır ve aracımız bu dönüşümü hiçbir sunucuya bir şey yüklemeden doğrudan tarayıcınızda saniyeler içinde gerçekleştirmenize olanak tanır.',
  },
  {
    type: 'title',
    text: 'BMP vs JPG: ham veriler ve akıllı sıkıştırma',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMP formatı, Microsoft tarafından Windows 3.1 döneminde oluşturuldu. Felsefesi olabildiğince basittir: her piksel 3 bayt (kırmızı, yeşil, mavi) kaplar ve pikseller herhangi bir ek işlem yapılmadan sırayla saklanır. Hiçbir sıkıştırmanın olmaması, gerçek fotoğraflar ve ekran görüntüleri için BMP dosyalarının JPG karşılıklarından 50 ila 100 kat daha büyük olmasına neden olur.',
  },
  {
    type: 'paragraph',
    html: 'JPG ise tam tersine, her 8x8 piksellik bloğu analiz etmek ve insan gözünün zar zor algıladığı yüksek frekanslı bilgileri ortadan kaldırmak için Ayrık Kosinüs Dönüşümü\'nü (DCT) kullanır. Sonuç, orijinalinin sadece küçük bir kısmı ağırlığında olan, ancak özdeş görünen bir görüntüdür. Ekran görüntülerinden, tarayıcılardan veya eski Windows uygulamalarından gelen BMP dosyaları için JPG\'ye dönüşüm, yapılabilecek en etkili optimizasyon işlemidir.',
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
        description: 'BMP dosyalarınızı işlemek için uzak sunuculara yükleyen hizmetler.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Yavaş bağlantılarda 10 MB\'lık bir BMP\'yi yüklemek zaman alır',
          'Ekran görüntüleriniz ve gizli resimleriniz internette dolaşır',
          'Ücretsiz planlarda sıkça görülen boyut sınırları',
          'Çift gecikme: dönüştürülen dosyanın yüklenmesi ve indirilmesi',
        ],
      },
      {
        title: 'Yerel Mimarimiz',
        description: 'Vanilla JS teknolojisi sayesinde doğrudan donanımınızda işleme.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'BMP, RAM\'inizde işlenir ve bir sunucuya gitmez',
          'Bekleme olmadan anında dönüşüm',
          'Dosya başına boyut sınırı yok',
          'Tam gizlilik: dışarıya 0 bayt gönderilir',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Teknik Olarak BMP\'den JPG\'ye Dönüşüm Nasıl Çalışır?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Dönüştürmek istediğiniz BMP dosyasını araca sürüklediğinizde tarayıcı bunu <code>FileReader</code> API\'si ile okur ve bellekte bir Blob nesnesi olarak kodu çözer. Bu Blob, görünmez bir HTML5 tuvali üzerine çizilir. Ardından, <code>toDataURL(\'image/jpeg\')</code> yöntemi tuval verileri üzerinde JPEG sıkıştırma algoritmasını uygular ve sonuç JPG dosyasını oluşturur.',
  },
  {
    type: 'paragraph',
    html: 'BMP\'nin alfa kanalı olmadığından (şeffaflıkları desteklemez), JPG\'ye dönüşüm beyaz bir arka planla birleştirilmeye gerek kalmadan doğrudan gerçekleşir. Tüm süreç, ağ üzerinden herhangi bir veri iletimi olmadan, birkaç megabaytlık dosyalar için bile milisaniyeler içinde bilgisayarınızın RAM belleğinde gerçekleşir.',
  },
  {
    type: 'tip',
    title: 'Windows BMP dosyaları devasa boyutlarda olabilir',
    html: 'Ekran görüntülerinden (Windows\'taki Print Screen tuşu) veya Paint gibi eski uygulamalardan oluşturulan BMP dosyaları, eşdeğer bir JPG\'den 50 ila 100 kat daha ağır olabilir. Tek bir Full HD çözünürlüklü BMP 6 MB\'ı aşabilir. Bunları e-postayla göndermeden veya herhangi bir platforma yüklemeden önce JPG\'ye dönüştürmek temel bir uygulamadır.',
  },
  {
    type: 'title',
    text: 'Kullanım Durumları ve Ortaya Çıkan JPG\'nin Uyumluluğu',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'E-postayla göndermek için Windows ekran görüntülerinin optimizasyonu.',
      'Eski yazılımlar (CAD, eski tarayıcılar) tarafından dışa aktarılan görüntülerin dönüşümü.',
      'Web platformlarına ve sosyal ağlara resim yüklemek için dosya boyutunun küçültülmesi.',
      'Dosyaların Word, PowerPoint veya PDF belgelerine yerleştirilmek üzere hazırlanması.',
      'Tüm modern görüntüleyiciler ve tarayıcılarla evrensel uyumluluk.',
    ],
  },
  {
    type: 'title',
    text: 'Sonuç: 10 MB BMP, 500 KB JPG, aynı resim',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMP\'den JPG\'ye dönüşüm, görüntü dosyası yönetimindeki en karlı optimizasyon işlemlerinden biridir. Aracımız bu dönüşümü hiçbir dosya yüklemeden, hesap oluşturmadan doğrudan tarayıcınızda saniyeler içinde gerçekleştirir. Sonuç, evrensel olarak uyumlu, yüksek kaliteli ve orijinal BMP\'den %97\'ye kadar daha hafif bir JPG dosyasıdır.',
  },
];


export const content: BmpAJpgLocaleContent = {
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
