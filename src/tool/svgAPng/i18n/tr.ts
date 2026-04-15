import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAPngLocaleContent } from '../index';

const slug = 'svg-den-png-ye-donusturucu';
const title = 'SVG\'yi PNG\'ye Çevrimiçi ve Ücretsiz Dönüştürün';
const description =
  'SVG vektör dosyalarını tarayıcınızda PNG\'ye dönüştürün. Çift ölçekli HD çıktı. Şeffaflığı korur. Ücretsiz ve %100 özel.';

const ui: ImageConverterUI = {
  dragText: 'SVG dosyalarını sürükleyin...',
  convertText: 'Onları anında PNG\'ye dönüştürmek için',
  selectFiles: 'Dosyaları seçin',
  processedFiles: 'İşlenmiş dosyalar',
  downloadAll: 'Tümünü İndir (.zip)',
  pending: 'Bekliyor',
  bibliographyTitle: 'Bibliyografik Referanslar',
  faqTitle: 'Sıkça Sorulan Sorular',
};

const faq: SvgAPngLocaleContent['faq'] = [
  {
    question: 'Neden SVG dosyalarını PNG\'ye dönüştürmeliyiz?',
    answer:
      'SVG vektör tabanlıdır ve logolar için idealdir, ancak bazen vektörleri desteklemeyen uygulamalarda kullanmak veya mesajlaşma uygulamaları ya da sosyal medya üzerinden paylaşmak için rasterleştirilmiş PNG formatına ihtiyacınız olur.',
  },
  {
    question: 'Çıktı boyutunu seçebilir miyim?',
    answer:
      'PNG çıktısının keskin ve Retina veya 4K ekranlar için uygun olması için şu anda kaynak SVG\'nin ölçeğini iki katına çıkarıyoruz.',
  },
  {
    question: 'SVG şeffaflıkları korunuyor mu?',
    answer:
      'Evet, sonuçta elde edilen PNG, orijinal SVG\'nin alfa kanalını koruyarak tüm şeffaf arka planları olduğu gibi tutar.',
  },
];

const howTo: SvgAPngLocaleContent['howTo'] = [
  {
    name: 'SVG dosyalarınızı yerleştirin',
    text: 'SVG dosyalarınızı bırakın veya doğrudan üst alana sürükleyin.',
  },
  {
    name: 'HD PNG Üretimi',
    text: 'Milisaniyeler içinde yerel motorumuz her bir vektörü şeffaf PNG formatında bir HD piksel katmanı olarak yeniden oluşturacaktır.',
  },
  {
    name: 'Dosyaları indirin',
    text: 'Oluşturulan PNG\'leri tek tek veya ZIP paketi olarak kaydedin.',
  },
];

const bibliography: SvgAPngLocaleContent['bibliography'] = [
  {
    name: 'W3C SVG Özellikleri',
    url: 'https://www.w3.org/TR/SVG/',
  },
  {
    name: 'Mozilla: SVG Eğitimi',
    url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial',
  },
];

const seo: SvgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'SVG\'den PNG\'ye Dönüştürücü: Sonsuz Vektörden Evrensel Rastere',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>SVG</strong> (Ölçeklenebilir Vektör Grafikleri) web tasarımı için mükemmel bir seçimdir: sonsuz ölçeklenebilir, hafiftir ve herhangi bir kod düzenleyiciyle düzenlenebilir. Ancak bu logoyu veya simgeyi bir mobil uygulamada kullanmak, sosyal medyada paylaşmak veya bir PowerPoint sunumuna yerleştirmek istediğinizde bir engelle karşılaşırsınız: Bu platformların çoğu SVG\'yi desteklemez. <strong>PNG</strong> formatı evrensel çözümdür: rasterleştirilmiştir, bir alfa kanalına sahiptir ve kesinlikle her bağlamda uyumludur.',
  },
  {
    type: 'title',
    text: 'SVG mi PNG mi? Web için Vektörler, Dünya için Raster',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG, görüntüyü matematiksel talimatlar olarak saklar: bir Bézier eğrisi, bir gradyan, bir çokgen. Bu, aynı dosyanın 16 pikselde veya 16.000 pikselde mükemmel görünmesi anlamına gelir. Web kodunuz, CSS animasyonlarınız ve herhangi bir kalite kaybı olmadan farklı ekran çözünürlüklerine uyum sağlaması gereken her öğe için ideal formattır.',
  },
  {
    type: 'paragraph',
    html: 'PNG, görüntüyü her piksel için renk ve şeffaflık bilgilerini içeren bir piksel ızgarası olarak saklar. <strong>Kayıpsız</strong> (lossless) bir formattır, yani kalite tamamen korunur. Bir SVG, PNG\'ye rasterleştirildikten sonra çözünürlük sabittir. Bu nedenle doğru dışa aktarma boyutunu seçmek kritiktir: Aracımız, Retina ve 4K ekranlarda keskinliği sağlamak için çift ölçekte (2 kat) işleme yapar.',
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
          'SVG kodunuz harici sunuculara gider',
          'Tutarsız kalitede uzaktan işleme',
          'Yükleme ve işleme için bekleme süresi',
          'SVG dosya boyutu sınırlamaları',
        ],
      },
      {
        title: 'Yerel Mimarimiz',
        description: 'Vanilla JS teknolojisini kullanarak doğrudan donanımınızda işleme.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'SVG\'niz tarayıcınızdan asla ayrılmaz',
          'Maksimum doğruluk için yerel tarayıcı motoru işlemesi',
          'Yüksek yoğunluklu ekranlar için 2 kat çözünürlüklü PNG',
          'Tam alfa kanalıyla korunan şeffaflık',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Teknik Olarak Nasıl Çalışır',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Süreç, SVG dosyasının bir JavaScript <strong>Image</strong> öğesine yüklenmesiyle başlar. Tarayıcı motoru vektör XML\'ini ayrıştırıp işledikten sonra, sonuç görüntüsü boyutları orijinal SVG boyutunun iki katı (2 kat ölçek) olan bir <strong>HTML5 Canvas</strong> üzerine çizilir. Bu, yüksek çözünürlüklü ekranlar için ideal olan, her boyutta iki kat piksele sahip bir PNG üretir.',
  },
  {
    type: 'paragraph',
    html: 'JPG\'ye dönüştürmenin aksine, PNG\'ye dışa aktarırken tuval tam alfa kanalını korur: Orijinal SVG\'deki şeffaf alanlar, sonuçta elde edilen PNG\'de tamamen şeffaf pikseller haline gelir — beyaz arka plan dolgusu olmaz. Dışa aktarma işlemi, kayıpsız sıkıştırma ile <code>toDataURL(\'image/png\')</code> yöntemini kullanır.',
  },
  {
    type: 'tip',
    title: 'Rasterleştirmeden önce ipucu',
    html: 'PNG dışa aktarma boyutunuzu dikkatli seçin — bir SVG\'yi rasterleştirmek tek yönlü bir işlemdir: vektörleri sonuçta elde edilen PNG\'den geri kazanamazsınız. Her zaman orijinal SVG\'yi ana kaynak olarak tutun ve ihtiyaç duyabileceğiniz en yüksek çözünürlükte PNG\'ler oluşturun.',
  },
  {
    type: 'title',
    text: 'Kullanım Durumları ve Uyumluluk',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'PowerPoint veya Google Slides sunumları için vektör logolarını dışa aktarma.',
      'iOS, Android veya Progresif Web Uygulamaları için PNG simgeleri oluşturma.',
      'SVG tasarımlarını Instagram, LinkedIn veya diğer sosyal medyalarda paylaşma.',
      'Vektör illüstrasyonlarını Word belgelerine veya PDF\'lere yerleştirme.',
      'CMS önizlemesi için SVG grafiklerinin PNG küçük resimlerini oluşturma.',
    ],
  },
  {
    type: 'title',
    text: 'Sonuç',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG vektörlerin dilidir; PNG ise dijital dünyanın geri kalanına açılan pasaporttur. Bu araç, tasarımlarınızın tek bir baytı bile harici bir sunucuya gitmeden, doğrudan tarayıcınızda, SVGs\'lerinizi şeffaflığı bozulmadan 2 kat çözünürlükte rasterleştirir.',
  },
];


export const content: SvgAPngLocaleContent = {
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
