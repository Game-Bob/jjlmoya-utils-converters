import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAIcoLocaleContent } from '../index';

const slug = 'png-den-ico-ya-donusturucu';
const title = 'PNG\'den ICO\'ya Çevrimiçi Dönüştürün';
const description =
  'Gerçek ikili üstbilgilerle PNG\'yi ICO\'ya dönüştürün. Şeffaflıklar korunur. Dosya yüklemesi yok. Ücretsiz ve %100 özel.';

const ui: ImageConverterUI = {
  dragText: 'PNG dosyalarını sürükleyin...',
  convertText: 'Onları anında ICO\'ya dönüştürmek için',
  selectFiles: 'Dosyaları seçin',
  processedFiles: 'İşlenmiş dosyalar',
  downloadAll: 'Tümünü İndir (.zip)',
  pending: 'Bekliyor',
  bibliographyTitle: 'Bibliyografik Referanslar',
  faqTitle: 'Sıkça Sorulan Sorular',
};

const faq: PngAIcoLocaleContent['faq'] = [
  {
    question: 'Dönüştürücünüz basit gizlenmiş PNG dosyaları mı yoksa orijinal bir ICO mu oluşturuyor?',
    answer:
      'Gerçek bir ICO yapıyoruz. PNG\'nizden verileri çıkarıyoruz, standartlaştırılmış Microsoft onaltılık üstbilgisini (22 baytlık Üstbilgi + Dizin) oluşturuyoruz, yerel olarak ideal kare formatına boyutlandırıyoruz ve yerel olarak doğrulanmış nihai bir dosya birleştiriyoruz.',
  },
  {
    question: 'Logom simgeye yerleştirildiğinde şeffaflıklar korunuyor mu?',
    answer:
      'Kesinlikle evet. Motorumuz PNG\'nizi 32 bit olarak okur, onu sabitlerken any şeffaf geçiş deliğini hassas bir şekilde korur, böylece evrensel web adresi çubuğunda (Favicon) öne çıkarlar.',
  },
  {
    question: 'Şirket logom sunucularınızda saklanıyor mu?',
    answer:
      'Bu hizmet sıfır harici ağ teması garanti eder. Dönüştürücü, dahili HTML5 Canvas\'ınıza sabitlenmiş olarak çalışır; simgenizin üretimi tamamen kendi makinenizin içinde, gizli yerel bellekte gerçekleşir.',
  },
];

const howTo: PngAIcoLocaleContent['howTo'] = [
  {
    name: 'Dosyaları aktarmak için sürükleyin',
    text: 'Fotoğraf matrislerinizi (kare 512x512 PNG idealdir) etkileşimli yerel çerçeveye yerleştirin.',
  },
  {
    name: 'Otomatik bayt kodu derlemesi',
    text: 'Arındırılmış ICO onaltılık üstbilgilerinin yerel matrisini yüklerken ve üretirken çubuğun dahili olarak çalıştığını göreceksiniz.',
  },
  {
    name: 'ZIP dosyanızla biriktirin veya kaçın',
    text: 'Web siteleriniz için dev bir derlemeye (küresel ZIP düğmeleri) tıklayarak indirin veya Windows yürütülebilir dosyası için küçük resmi indirin.',
  },
];

const seo: PngAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG\'den ICO\'ya Dönüştürücü: Mükemmel Şeffaflığa Sahip Faviconlar İçin En İyi Kaynak',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>Şeffaf PNG</strong>, profesyonel ICO simgeleri oluşturmak için ideal başlangıç malzemesidir. JPG (alfa kanalı olmayan) veya kayıplı formatların aksine, PNG size tam olarak ICO formatının ihtiyaç duyduğu şeyi sunar: keskin pikseller, temiz kenarlar ve simgenin her türlü arka plan üzerinde mükemmel bir şekilde bütünleşmesini sağlayan 32 bitlik bir alfa kanalı - ister Safari\'nin beyaz yer imi çubuğu, ister Firefox\'un koyu çubuğu veya Windows 11 masaüstü olsun.',
  },
  {
    type: 'title',
    text: 'PNG mi ICO mu? Her format ne zaman kullanılır',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> çalışma formatıdır: logonuzu tasarladığınız, Figma veya Illustrator\'dan dışa aktardığınız ve düzenlenebilir sürümlerinizi kaydettiğiniz yerdir. Şeffaflığı, piksel hassasiyeti ve kayıpsız sıkıştırması onu tasarım süreci için rakipsiz kılar. Ancak favicon veya uygulama simgesi arayan tarayıcılar, işletim sistemleri ve Windows uygulamaları PNG\'yi doğrudan kabul etmez - ICO\'ya ihtiyaç duyarlar.',
  },
  {
    type: 'paragraph',
    html: '<strong>ICO</strong>, Microsoft ortamlarında und web\'de simgeler için dağıtım formatıdır. Tek bir dosyada birden fazla çözünürlüğün paketlenmesine izin veren belirli bir ikili yapı içerir: tarayıcı ICO\'nun dahili dizinini okur und tarayıcı sekmesi için <strong>16×16</strong>, kısayollar için <strong>32×32</strong>, dosya gezgini için <strong>48×48</strong> und Retina ile 4K ekranlar için <strong>256×256</strong>\'yı otomatik olarak seçer. Şeffaf bir PNG\'den başlamak, tüm bu çözünürlüklerin any beyaz saçak olmadan mükemmel kenarlara sahip olacağını garanti eder.',
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
          'Yükleme und indirmede ağ gecikmesi',
          'Kurumsal logonuz üçüncü taraf sunucularda saklanır',
          'Dosya boyutu sınırları und günlük dönüştürme kotaları',
          'Rahatsız edici reklamlar und üçüncü taraf izleyiciler',
        ],
      },
      {
        title: 'Yerel Mimarimiz',
        description: 'Vanilla JS teknolojisini kullanarak doğrudan donanımınızda işleme.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Anında hız - sıfır ağ gecikmesi',
          'Tam gizlilik - harici olarak gönderilen 0 bayt',
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
    html: 'PNG, tam 32 bit alfa kanalı desteğiyle bellekteki bir <strong>HTML5 Canvas</strong>\'a çözülür. Motor; doğru sihirli sayı (<code>00 00 01 00</code>) ile standart Microsoft ICO üstbilgisini, boyutlar und veri ofseti ile görüntü dizinini und şeffaflık bilgilerini korurken piksel verilerini oluşturur. Sonuç; Windows, macOS und tüm tarayıcıların yerel olarak tanıdığı orijinal bir ikili .ico dosyasıdır.',
  },
  {
    type: 'paragraph',
    html: 'PNG\'nin şeffaflığı ortaya çıkan ICO\'da tamamen korunur - şeffaf pikseller şeffaf kalır, yarı şeffaf pikseller tam alfa değerlerini korur und opak pikseller orijinal renklerini korur. Bu, değişken arka planlardaki logolar için kritik öneme sahiptir: favicon\'unuz açık modda, koyu modda und tarayıcı arayüz renklerinin any kombinasyonunda doğru görünecektir.',
  },
  {
    type: 'tip',
    title: 'İpucu: kaynak olarak 512×512 PNG kullanın',
    html: 'Mümkün olan en iyi sonuç için, kaynak görüntü olarak <strong>512×512 kare PNG</strong> kullanın. Bu çözünürlük; dönüştürücüye 16×16 favicon\'dan yüksek yoğunluklu ekranlar için 256×256\'ya kadar tüm standart ICO boyutlarını pikselleşme veya kenar detayı kaybı olmadan keskin bir şekilde oluşturmak için yeterli bilgi sağlar. Kaynak PNG ne kadar büyük olursa, küçük simge boyutları o kadar iyi görünecektir.',
  },
  {
    type: 'title',
    text: 'Kullanım durumları und uyumluluk',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Web siteleri için şeffaf favicon: Chrome, Firefox, Safari, Edge e Internet Explorer.',
      'PWA uygulama simgesi: manifest.json masaüstü kurulumu için ICO\'ya atıfta bulunur.',
      'Beyaz arka planı olmayan kurumsal logolu Windows 10/11 klasör özelleştirmesi.',
      'Masaüstü uygulamaları, yükleyiciler und yürütülebilir dosyalar için kısayol simgesi.',
      'Chrome und Firefox uzantıları için tarayıcı uzantısı simgesi.',
    ],
  },
  {
    type: 'title',
    text: 'Sonuç',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Şeffaf PNG, hiç şüphesiz profesyonel kalitede ICO simgeleri oluşturmak için en iyi başlangıç noktasıdır. Bu araçla dönüştürme anlıktır, alfa kanalları tamamen korunur und elde edilen dosya doğru ikili yapıya sahip orijinal bir ICO\'dur. Logonuzun any sunucuya yüklenmesi yok, filigran yok, sınır yok - und her boyutta mükemmel şeffaflık.',
  },
];

export const content: PngAIcoLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({
    title,
    description,
    inLanguage: 'tr',
    faq,
    howTo,
  }),
};
