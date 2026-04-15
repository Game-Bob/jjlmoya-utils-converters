import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAWebpLocaleContent } from '../index';

const slug = 'png-den-webp-ye-donusturucu';
const title = 'PNG\'yi WebP\'ye Çevrimiçi ve Ücretsiz Dönüştürün';
const description =
  'PNG görüntülerini tarayıcınızda WebP\'ye dönüştürün. %40\'a varan daha küçük dosya boyutu. Şeffaflığı korur. Dosya yüklemesi yok. Ücretsiz ve özel.';

const ui: ImageConverterUI = {
  dragText: 'PNG dosyalarını sürükleyin...',
  convertText: 'Onları anında WebP\'ye dönüştürmek için',
  selectFiles: 'Dosyaları seçin',
  processedFiles: 'İşlenmiş dosyalar',
  downloadAll: 'Tümünü İndir (.zip)',
  pending: 'Bekliyor',
  bibliographyTitle: 'Bibliyografik Referanslar',
  faqTitle: 'Sıkça Sorulan Sorular',
};

const faq: PngAWebpLocaleContent['faq'] = [
  {
    question: 'Neden PNG\'yi WebP\'ye dönüştürmeliyiz?',
    answer:
      'WebP, aynı kalitede PNG\'den %40\'a kadar daha iyi sıkıştırma sağlarken Alfa şeffaflığını da destekler. Google PageSpeed Insights tarafından önerilen formattır.',
  },
  {
    question: 'İşlem sırasında şeffaflık kaybolur mu?',
    answer:
      'Hayır. WebP\'nin teknik uygulaması alfa kanalını destekler. Orijinal PNG\'nin şeffaflıkları yeni WebP dosyasında korunacaktır.',
  },
  {
    question: 'Görüntülerim herhangi bir sunucuya gidiyor mu?',
    answer:
      'Hayır. Kod yalnızca tarayıcınızda (İstemci Tarafı) çalışır. Dönüştürdüğünüz görüntüleri asla görmeyiz, kaydetmeyiz veya saklamayız.',
  },
];

const howTo: PngAWebpLocaleContent['howTo'] = [
  {
    name: 'PNG\'lerinizi yerleştirin',
    text: 'Büyük PNG dosyalarınızı yükleme alanına bırakın veya geleneksel etkileşimli seçiciyi kullanın.',
  },
  {
    name: 'Kanal algılama',
    text: 'Yerel oluşturma motoru, piksel kompozisyonunu algılayacak ve optimize edilmiş WebP formatına aktaracaktır.',
  },
  {
    name: 'Doğrudan İndirme',
    text: 'Yüksek kaliteli sıkıştırılmış WebP dosyalarınızı tek tek indirin veya ZIP paketi dönüştürücüsünü kullanarak bir araya getirin.',
  },
];

const bibliography: PngAWebpLocaleContent['bibliography'] = [
  {
    name: 'Google: WebP Uygulama Detayları',
    url: 'https://developers.google.com/speed/webp/',
  },
  {
    name: 'W3C: Core Web Vitals Rehberi',
    url: 'https://web.dev/vitals/',
  },
  {
    name: 'Mozilla Docs: Görüntü Formatları',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types',
  },
];

const seo: PngAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG\'den WebP\'ye Dönüştürücü: Web İçin Şeffaflık ve Modern Sıkıştırma',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong>, onlarca yıldır şeffaflığa sahip web görüntüleri için referans format olmuştur — logolar, simgeler, kullanıcı arayüzü öğeleri, dekupe edilmiş arka planlara sahip ürün görüntüleri. Sorunu dosya boyutudur: kaliteyi garanti eden kayıpsız sıkıştırma aynı zamanda belirgin şekilde büyük dosyalar oluşturur. Google\'ın <strong>WebP</strong>\'si bu çelişkiyi çözer: alfa kanalını (şeffaflığı) destekler <em>ve</em> PNG\'den çok daha iyi sıkıştırır; bu da web sitenizde PNG\'den WebP\'ye geçişi hiçbir şeyden ödün vermeyen mükemmel bir optimizasyon haline getirir.',
  },
  {
    type: 'title',
    text: 'PNG mi WebP mi? Her format ne zaman kullanılır',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Uyumluluk kritik olduğunda <strong>PNG</strong> doğru format olmaya devam eder: Photoshop veya Figma gibi tasarım araçları, baskı iş akışları, eski masaüstü uygulamaları veya WebP desteğinin garanti edilmediği herhangi bir bağlam. Ayrıca, kayıpsız sıkıştırması her pikseli koruduğu için düzenleme süreçlerinde çalışma katmanlarını kaydetmek için ideal formattır. Maliyeti: WebP eşdeğerinden 3-8 kat daha fazla ağırlığa sahip olabilen dosyalar.',
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong>, tüm modern web içerikleri için PNG\'nin doğal halefidir. Chrome, Firefox, Safari ve Edge web tarayıcılarının tamamı bunu yerel olarak destekler. Kayıpsız bir WebP görüntüsü, eşdeğer PNG\'den %26 daha küçüktür; kayıplı modda neredeyse ayırt edilemez görsel kalitede %40\'a kadar daha küçük olabilir. Ve web tasarımı için kritik olan: <strong>WebP, alfa şeffaflığını</strong> görsel bir taviz vermeden tıpkı PNG gibi korur.',
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
          'Logolarınız ve görüntüleriniz üçüncü taraf sunucularda saklanır',
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
    html: 'PNG yerel olarak yüklenir ve bellekteki bir <strong>HTML5 Canvas</strong>\'a çözülür. Canvas API\'si orijinal PNG\'deki alfa kanalını korur — tüm şeffaf ve yarı şeffaf pikseller RGBA piksel arabelleğinde sağlam tutulur. Ardından tuval, şeffaflık verilerini değiştirmeden daha kompakt bir dosya oluşturmak için tarayıcının (Google\'ın libwebp tabanlı) WebP codec bileşenini uygulayan <code>toDataURL(\'image/webp\')</code> çağrısı yapılarak dışa aktarılır.',
  },
  {
    type: 'paragraph',
    html: 'WebP iki sıkıştırma modu kullanır: her pikselin orijinaline tam olarak sadık kalması gereken görüntüler için kayıpsız mod ve küçük farklılıkların algılanamaz olduğu fotoğraflar ve öğeler için kayıplı mod. Kayıpsız mod, PNG\'den %26 daha küçük dosyalar üretir; kayıplı mod, mükemmel görsel kaliteyi korurken PNG\'ye kıyasla %40\'a varan azalmalar elde edebilir.',
  },
  {
    type: 'tip',
    title: 'İpucu: WebP web üzerinde hem PNG\'yi hem de JPG\'yi yener',
    html: 'Kayıpsız moddaki WebP, PNG\'den daha küçüktür. Kayıplı moddaki WebP, JPG\'den daha küçüktür. Bu, WebP\'yi web bağlamında <strong>her ikisinin de yerini alan tek format</strong> yapar. Şeffaf PNG\'lerinizi yüklemeden önce WebP\'ye dönüştürün: Google PageSpeed Insights bunu algılar ve "Modern formatlardaki görseller sunun" denetimlerinde olumlu puan verir.',
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
      'Web siteleri ve uygulamalar için şeffaf arka plana sahip logolar ve simgeler.',
      'E-ticaret mağazalarında dekupe arka planlı ürün görselleri.',
      'Alfa şeffaflığına sahip CSS sprite\'ları ve kullanıcı arayüzü öğeleri.',
      'Açılış sayfaları için rasterleştirilmiş çizimler ve vektör grafikleri.',
      'Bloglarda ve haber portallarında şeffaf arka plana sahip makale küçük resimleri.',
    ],
  },
  {
    type: 'title',
    text: 'Sonuç',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'PNG\'den WebP\'ye geçiş, mevcut en eksiksiz web görüntüsü optimizasyonudur: görsel tasarımınız hakkında hiçbir şeyi değiştirmeden daha hafif dosyalar elde eder, şeffaflığı korur ve Core Web Vitals metriklerini iyileştirir. Bu araç bunu anında, ücretsiz ve tamamen gizli bir şekilde yapar — görüntüleriniz tarayıcınızda işlenir ve asla harici bir sunucuya gitmez.',
  },
];


export const content: PngAWebpLocaleContent = {
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
