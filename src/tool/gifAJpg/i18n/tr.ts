import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAJpgLocaleContent } from '../index';

const slug = 'gif-jpg-donusturucu';
const title = 'GIF\'i JPG\'ye Çevrimiçi Dönüştür';
const description =
  'GIF dosyalarınızdan ilk kareyi çıkarın ve bunu JPG\'ye dönüştürün. Sunucu yok. Tarayıcınızda yerel işleme. Ücretsiz ve sınırsız.';

const ui: ImageConverterUI = {
  dragText: 'GIF dosyalarını buraya sürükleyin...',
  convertText: 'Anında JPG\'ye dönüştürmek için',
  selectFiles: 'Dosyaları seçin',
  processedFiles: 'İşlenen dosyalar',
  downloadAll: 'Tümünü İndir (.zip)',
  pending: 'Bekliyor': 'Bibliyografik Referanslar',
  faqTitle: 'Sıkça Sorulan Sorular',
};

const faq: GifAJpgLocaleContent['faq'] = [
  {
    question: 'JPG\'ye geçtiğimde animasyonlara ne olur?',
    answer:
      'JPG formatı kesinlikle statiktir ve çoklu kareleri desteklemez. Dönüştürücümüz, GIF dizisinde görünen yalnızca ilk resmi veya kareyi çıkarır.',
  },
  {
    question: 'Özel efektleri veya şeffaf arka planı kaybeder miyim?',
    answer:
      'Evet, bu JPG standardının doğal davranışıdır. Şeffaf arka plana sahip bir GIF yüklerseniz, renk bozulmalarını önlemek için altına otomatik olarak düz beyaz bir katman ekleriz.',
  },
  {
    question: 'Web sitesi içeriğimi kaydetmeden bir GIF\'ten JPG fotoğraflar çıkarabilir miyim?',
    answer:
      'Kesinlikle evet. Araç, HTML5 Canvas tabanlı bir Web Uygulamasıdır. Tüm kod çözme işlemi kendi fiziksel cihazınızın işlemcisi tarafından gerçekleştirilir.',
  },
];

const howTo: GifAJpgLocaleContent['howTo'] = [
  {
    name: 'Hareketli Büyük Dosyaları Sürükleyin',
    text: 'Klasörünüzdeki o GIF\'i işleme kutumuza bırakana kadar konumlandırın veya sürükleyin.',
  },
  {
    name: 'İlk Karenin Temiz Hesaplaması',
    text: 'Saniyeler içinde, sunucularla bağlantı kurmadan düz beyaz JPG oluşturularak animasyon çıkarılır.',
  },
  {
    name: 'ZIP Paketi Olarak Alın',
    text: 'Düğmeleri kullanarak veya çok sayıda dosya işlediyseniz ZIP kullanarak indirin.',
  },
];

const seo: GifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'GIF\'ten JPG\'ye Dönüştürücü: Kareleri Yüksek Kaliteli Görüntüler Olarak Çıkarın',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'GIF dosyaları onlarca yıldır internetteki kısa animasyonlar dünyasına hükmediyor. Ancak animasyonlu yapıları, onları küçük resim, sosyal ağlar için önizleme veya belgeler için görüntü olarak tamamen kullanışlı olmaktan çıkarıyor. Bir GIF\'ten belirli bir kareyi çıkarmanız ve bunu yüksek kaliteli statik bir görüntüye dönüştürmeniz gerektiğinde, JPG dönüşümü en pratik ve uyumlu çözümdür.',
  },
  {
    type: 'title',
    text: 'GIF mi yoksa JPG mi? Zıt amaçlara sahip formatlar',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIF (Graphics Interchange Format), 1987 yılında bugün de devam eden ciddi bir kısıtlamayla tasarlandı: kare başına yalnızca 256 renk temsil edebilir. Bu teknik kısıtlama, azaltılmış paletli basit animasyonlar için önemli değildi, ancak onu gerçek fotoğraf çekimleri için görsel olarak zayıf bir format haline getiriyor. Öte yandan JPG, gelişmiş algısal sıkıştırma algoritmalarıyla milyonlarca rengi işleyebilir.',
  },
  {
    type: 'paragraph',
    html: 'Bir GIF\'ten bir kare çıkarmanın ve bunu JPG olarak kaydetmenin çok sayıda uygulaması vardır: video oynatıcılar için küçük resimler oluşturmak, içerik yönetim platformları için önizlemeler oluşturmak, sunumlar için statik görüntüler elde etmek veya karmaşık bir animasyonun görsel bir anını arşivlemek. Sonuçta ortaya çıkan JPG, orijinal GIF\'ten çok daha hafif olacak ve evrensel olarak uyumlu olacaktır.',
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
        description: 'Dosyalarınızı işlemek için uzak bir sunucuya yükleyen araçlar.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'GIF\'leriniz internet üzerinden üçüncü taraf sunuculara gider',
          'Yükleme ve indirmede ağ gecikmesi',
          'Oturum başına boyut ve dosya sınırları',
          'Verilerin başkalarının sunucularında tutulma riski',
        ],
      },
      {
        title: 'Yerel Mimarimiz',
        description: 'Vanilla JS teknolojisi ile doğrudan donanımınızda işleme.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'GIF cihazınızı asla terk etmez',
          'Ağ bekleyişi olmadan anında hız',
          'Boyut veya dosya sınırı yok',
          'Tam gizlilik: dışarıya 0 bayt gönderilir',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Karenin teknik olarak çıkarılması nasıl çalışır?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Yerel dönüşüm, HTML5\'in Canvas API\'sinin gücüne dayanır. Bir GIF yüklediğinizde, tarayıcı onu yerel bir Image öğesi olarak bellekte çözer. Görünmez bir tuval üzerinde işlerken, tarayıcının grafik motoru animasyon dizisinin ilk karesini otomatik olarak yakalar.',
  },
  {
    type: 'paragraph',
    html: 'JPG formatı şeffaflığı desteklemediğinden, algoritmamız dışa aktarmadan önce düz beyaz bir arka plan uygular. Tuvalin <code>toDataURL(\'image/jpeg\')</code> yöntemi, herhangi bir ağ bağlantısı olmadan doğrudan bilgisayarınızın RAM\'inde JPG bayt akışını oluşturur. Sonuç dosyası anında cihazınıza indirilir.',
  },
  {
    type: 'tip',
    title: 'GIF\'in sınırlı renk paleti',
    html: 'GIF, her karede yalnızca 256 renk içerebilir. Çıkarılan JPG, bu azaltılmış paleti orijinalinden devralacaktır: GIF\'te gradyanlar veya fotoğraflar varsa, bir miktar posterizasyon görülebilir. En iyi sonucu elde etmek için basit renkli veya illüstrasyonlu GIF\'ler kullanın.',
  },
  {
    type: 'title',
    text: 'Elde edilen JPG\'nin kullanım durumları ve uyumluluğu',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Video platformları ve CMS\'ler için küçük resimler ve önizlemeler.',
      'Sosyal ağlardaki paylaşımlar için kapak resimleri.',
      'Word, PowerPoint veya PDF belgelerine yerleştirme.',
      'Sunum dosyaları ve pazarlama materyalleri.',
      'Windows, macOS ve mobil cihazlardaki görüntüleyicilerle evrensel uyumluluk.',
    ],
  },
  {
    type: 'title',
    text: 'Sonuç: animasyondan daha değerli olan kare',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '2 MB\'lık animasyonlu bir GIF, çözünürlüğe bağlı olarak yalnızca 50-200 KB boyutunda bir ilk kare JPG\'si üretebilir. Aracımız bu dönüşümü anında, özel ve sınırsız bir şekilde doğrudan tarayıcınızda gerçekleştirir. Sunucu yok, hesap yok, beklemek yok.',
  },
];


export const content: GifAJpgLocaleContent = {
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
