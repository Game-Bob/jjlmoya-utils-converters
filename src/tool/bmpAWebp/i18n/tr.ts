import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAWebpLocaleContent } from '../index';

const slug = 'bmp-webp-donusturucu';
const title = 'Ücretsiz BMP\'den WebP\'ye Dönüştür';
const description =
  'BMP görüntülerini çevrimdışı olarak WebP\'ye dönüştürün. Devasa dosyaları kilobaytlara düşürün. Dosya yüklemeden. Ücretsiz, çevrimdışı ve tamamen özel.';

const ui: ImageConverterUI = {
  dragText: 'BMP dosyalarını buraya sürükleyin...',
  convertText: 'Anında WebP\'ye dönüştürmek için',
  selectFiles: 'Dosyaları seçin',
  processedFiles: 'İşlenen dosyalar',
  downloadAll: 'Tümünü İndir (.zip)',
  pending: 'Bekliyor',
  bibliographyTitle: 'Bibliyografik Referanslar',
  faqTitle: 'Sıkça Sorulan Sorular',
};

const faq: BmpAWebpLocaleContent['faq'] = [
  {
    question: 'BMP dosyalarım neden 10 kat daha fazla yer kaplıyor ve WebP\'ye sahip olmanın bana avantajı ne?',
    answer:
      'BMP, sıkıştırılmamış piksel haritalarını saklar. WebP ise devasa BMP\'leri bir megabayttan daha az bir boyuta düşürmek için matematiksel sıkıştırma kullanırken görüntünün son derece tanınabilir kalmasını sağlar.',
  },
  {
    question: 'Hesap açmam gerekiyor mu?',
    answer:
      'E-posta talep etmiyoruz ve materyaliniz izole kalacaktır, çünkü işleme PC\'nize yüklü olan tarayıcının Javascript\'i tarafından uzaktan gönderim olmadan gerçekleştirilir.',
  },
  {
    question: 'Aynı anda çok sayıda dosya sürükleyebilir miyim?',
    answer:
      'Evet, donanımınız kuyruk oluşturmadan hepsini işlemeyi kaldırabiliyorsa 50 veya 100 dosyayı sürükleyebilirsiniz.',
  },
];

const howTo: BmpAWebpLocaleContent['howTo'] = [
  {
    name: 'Ham Dosyaları Tanımlayın',
    text: 'Bit haritası koleksiyonlarınızı aktarıma hazır pencerelere yerleştirin.',
  },
  {
    name: 'Yerel Toplu Etkinleştirme',
    text: 'Tüm dosyaları dijital masamıza yansıtın veya sürükleyin.',
  },
  {
    name: 'WebP Toplu Boşaltma',
    text: 'Sonuçlara tıkladığınızda mikro boyutlu görüntüleri ayrı ayrı veya anlık sıkıştırılmış paketler olarak alacaksınız.',
  },
];

const seo: BmpAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'BMP\'den WebP\'ye Dönüştürücü: Mümkün Olan En Uç Boyut Azaltma',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMP\'yi WebP\'ye dönüştürmek, şüphesiz bir görüntüyle yapabileceğiniz en görkemli dönüştürmedir. BMP (Bitmap) formatı, dijital ekosistemin en eski ve en ağır formatıdır: her pikseli herhangi bir sıkıştırma olmadan saklar, bu da modern eşdeğerinden 20, 50 hatta 100 kat daha ağır olabilen dosyalarla sonuçlanır. Google tarafından geliştirilen WebP, mükemmel görsel kaliteyi korurken boyutu mümkün olan en düşük seviyeye indiren son nesil sıkıştırma algoritmalarını uygular.',
  },
  {
    type: 'title',
    text: 'BMP neden bu kadar ağır ve WebP neden bu kadar verimli?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMP formatı, disk alanının devasa olduğu ve sıkıştırmanın öncelik olmadığı 80\'li yılların Windows\'u için doğdu. Her piksel olduğu gibi saklanır, herhangi bir azaltma algoritması yoktur: BMP\'deki 1920x1080 piksellik bir görüntü içeriğinden bağımsız olarak tam olarak 5,93 MB yer kaplar. Bu, onu dahili ekran görüntüleri veya kayıpsız düzenleme için ideal hale getirir ancak web veya modern depolama için tamamen uygunsuz kılar.',
  },
  {
    type: 'paragraph',
    html: 'WebP, bloklar ve DCT dönüşümleri tabanlı tahmini sıkıştırma kullanarak (dijital videonun temelindeki aynı teknoloji) aynı 1920x1080 görüntünün 80 KB ile 300 KB arasında yer kaplamasını sağlar. Bu, orijinal BMP\'ye kıyasla %95 ile %99 arasında bir azalma anlamına gelir. Ayrıca WebP, şeffaflıklar için alfa kanalını ve hem kayıplı hem de kayıpsız sıkıştırmayı destekleyerek tam bir çok yönlülük sunar.',
  },
  {
    type: 'title',
    text: 'Karşılaştırma: Bulut Dönüştürücüler vs Yerel Mimarimiz',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Bulut Dönüştürücüler',
        description: 'Dosyalarınızı işlemek için uzak bir sunucuya yükleyen araçlar.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '20 MB\'lık bir BMP\'yi yüklemek yavaş bağlantıda dakikalar sürer',
          'Görüntüleriniz başkalarının sunucularında saklanır',
          'Büyük BMP dosyalarını dışlayan boyut sınırları',
          'Müdahaleci reklamlar ve veri izleyicileri',
        ],
      },
      {
        title: 'Yerel Mimarimiz',
        description: 'Vanilla JS teknolojisi ve Canvas API aracılığıyla doğrudan tarayıcınızda işleme.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Ağ aktarımı olmadan anında dönüşüm',
          'Mutlak gizlilik - cihazınızdan 0 bayt çıkar',
          'Dosya başına boyut sınırı yok',
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
    html: 'Bir BMP dosyasını sürüklediğinizde, tarayıcı onu RAM belleğindeki ikili bir Blob olarak okur. Bu Blob, JavaScript\'in yerel görüntü motorunu kullanarak kodunu çözen bir <code>Image</code> öğesine yüklenir. Ardından, görüntü görünmez bir <code>Canvas</code> HTML5 öğesi üzerine çizilir. Tuval, görüntünün piksel piksel formunda bulunduğu sanal bir tuval görevi görür.',
  },
  {
    type: 'paragraph',
    html: 'Tuval üzerine çizildikten sonra, <code>image/webp</code> MIME türü ve istenen kalite seviyesi ile <code>toBlob()</code> yöntemini çalıştırıyoruz. Tarayıcı dahili olarak WebP sıkıştırma algoritmasını uygular ve sonuç dosyasıyla yeni bir Blob oluşturur. Bu Blob, tarayıcınızın diske kaydettiği doğrudan bir indirme URL\'sine dönüştürülür. Hiçbir zaman ağ bağlantısı kurulmaz.',
  },
  {
    type: 'tip',
    title: 'Mümkün olan en büyük sıkıştırma sıçraması',
    html: 'BMP\'den WebP\'ye dönüşüm, dosya boyutunda %99\'luk bir azalma sağlayabilir. 20 MB\'lık bir BMP, görsel olarak neredeyse özdeş kalitede yaklaşık 200 KB\'lık bir WebP\'ye dönüşebilir. Standart görüntü formatları arasında mevcut olan en verimli dönüştürmedir.',
  },
  {
    type: 'title',
    text: 'WebP\'nin kullanım durumları ve uyumluluğu',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Web yayını - Chrome, Firefox, Safari, Edge ve tüm modern tarayıcılar.',
      'Sosyal ağlar - Instagram, Twitter, Facebook WebP\'yi yerel olarak kabul eder.',
      'Web uygulamaları ve PWA - anında yükleme için minimum boyutlar.',
      'Verimli arşivleme - eski BMP koleksiyonlarını değiştirerek gigabaytlarca tasarruf sağlar.',
      'E-posta pazarlaması - herhangi bir modern e-posta istemcisinde hızlı yüklenen hafif görüntüler.',
    ],
  },
  {
    type: 'title',
    text: 'Sonuç: Tek tıklamayla en etkili dönüştürme',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Eğer elinizde Windows\'tan kalma eski BMP dosyaları, sıkıştırılmamış ekran görüntüleri veya eski araçlardan görüntüler varsa, bunları WebP\'ye dönüştürmek, depolama alanınızı ve web performansınızı optimize etmek için atabileceğiniz en etkili adımdır. Aracımızla dönüşüm anında, özel ve sınırsızdır - tam olması gerektiği gibi.',
  },
];


export const content: BmpAWebpLocaleContent = {
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
