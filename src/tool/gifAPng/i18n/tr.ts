import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAPngLocaleContent } from '../index';

const slug = 'gif-png-donusturucu';
const title = 'GIF\'i PNG\'ye Çevrimiçi Dönüştür';
const description =
  'GIF dosyalarınızdan ilk kareyi çıkarın ve şeffaflığı koruyarak bunu PNG\'ye dönüştürün. Sunucu yok. Yerel işleme. Ücretsiz.';

const ui: ImageConverterUI = {
  dragText: 'GIF dosyalarını buraya sürükleyin...',
  convertText: 'Anında PNG\'ye dönüştürmek için',
  selectFiles: 'Dosyaları seçin',
  processedFiles: 'İşlenen dosyalar',
  downloadAll: 'Tümünü İndir (.zip)',
  pending: 'Bekliyor': 'Bibliyografik Referanslar',
  faqTitle: 'Sıkça Sorulan Sorular',
};

const faq: GifAPngLocaleContent['faq'] = [
  {
    question: 'Neden GIF gibi animasyonlu bir formatı PNG gibi statik bir formata dönüştürelim?',
    answer:
      'Pek çok sosyal ağ veya avatar, değişen fotoğrafları kabul etmez. Karmaşık bir GIF\'in ilk karesini yüksek kaliteli bir PNG\'ye çıkarmak engelleri çözer ve işe yaramaz dosya ağırlığını azaltır.',
  },
  {
    question: 'Eski GIF\'teki şeffaflıklar sonuç PNG\'sinde korunur mu?',
    answer:
      'Evet, JPG\'nin aksine PNG formatı alfa kanalını korur. GIF\'in şeffaf bir arka planı varsa, PNG bunu keskin kenarlarla koruyacaktır.',
  },
  {
    question: 'İşlemeden sonra görsellerimi bir süre sunucularda tutuyor musunuz?',
    answer:
      'Hiçbir sunucu GIF\'inizi tutmaz; Web Canvas API sayesinde tüm çıkarma işlemi yereldir. Dosyanızı herhangi bir ağ teması olmadan güvenli bir şekilde çözen PC\'nizin işlemcisidir.',
  },
];

const howTo: GifAPngLocaleContent['howTo'] = [
  {
    name: 'Animasyonu Hazırlayın',
    text: 'Ağır GIF dosyalarını ekleme kutusuna sürükleyin.',
  },
  {
    name: 'Mükemmel Çıkarılmış Fotoğraf',
    text: 'Sistem, hareketin tam kaynağını dondurarak milisaniyeler içinde kusursuz bir kopya çıkaracaktır.',
  },
  {
    name: 'Statik Görüntünüzü Kaydedin',
    text: 'Statik PNG formatına dönüştürülen GIF avatarlarını toplu olarak ZIP olarak kaydedin.',
  },
];

const seo: GifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'GIF-PNG Dönüştürücü: GIF\'in Renk ve Şeffaflık Sınırlarını Aşın',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'GIF, monitörlerin ancak 256 rengi gösterebildiği bir çağda tasarlandı. Onlarca yıl sonra, bu kısıtlama hala en büyük zayıflığı olmaya devam ediyor. PNG, kalitenin ve şeffaflığın önemli olduğu tüm kullanım durumlarında GIF\'in yerini almak üzere tam olarak bu yüzden doğdu: logolar, simgeler, arayüz grafikleri ve herhangi bir arka plan renginde mükemmel görünmesi gereken şeffaf arka planlı her türlü görüntü.',
  },
  {
    type: 'title',
    text: 'GIF vs PNG: 16 milyon renk devrimi',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIF ve PNG arasındaki en kritik fark sadece renk sayısı değildir. GIF ikili şeffaflığı destekler: her piksel ya opak ya da tamamen şeffaftır, geçişler yoktur. PNG ise piksel başına 256 opaklık seviyesi ile tam alfa kanalını destekler. Bu, PNG\'deki bir logonun kenarlarının mükemmel şekilde pürüzsüzleştirilebileceği anlamına gelirken, GIF\'tekiler renkli arka planlar üzerinde karakteristik bir tırtıklı yapı gösterir.',
  },
  {
    type: 'paragraph',
    html: 'Üstün şeffaflığa ek olarak PNG, GIF\'in 256 renk sınırını ortadan kaldırır. Ekran görüntüleri, gradyanlı illüstrasyonlar, gölgeli logolar: bunların hepsi PNG\'de önemli ölçüde daha iyi görünür. Ve kayıpsız sıkıştırma olduğundan, her piksel, bir JPG dönüşümünün getireceği yapay dokular olmadan tam olarak orijinal değerini korur.',
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
        description: 'Görüntülerinizi uzak sunucularda işleyen araçlar.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Logolarınız ve simgeleriniz internet üzerinden iletilir',
          'Ağ gecikmesi nedeniyle bekleme süresi',
          'Boyut ve dosya sayısı sınırları',
          'Görselleriniz üçüncü taraf önbelleklerinde kalabilir',
        ],
      },
      {
        title: 'Yerel Mimarimiz',
        description: 'Vanilla JS teknolojisi ile doğrudan donanımınızda işleme.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'GIF cihazınızı asla terk etmez',
          'Ağ olmadan anında dönüşüm',
          'Dosya veya boyut sınırı yok',
          'Mutlak gizlilik: 0 bayt gönderilir',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Yerel GIF-PNG dönüşümü nasıl çalışır?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Dönüşüm, tarayıcının Canvas API\'sini kullanır. GIF, bellekte yerel bir Image öğesi olarak çözülür. HTML5 tuvali üzerinde işlenirken tarayıcının grafik motoru, orijinal şeffaflık bilgisi bozulmadan ilk kareyi yakalar.',
  },
  {
    type: 'paragraph',
    html: 'JPG dönüşümünün aksine, PNG ile beyaz bir arka plan eklemek gerekmez. Orijinal GIF\'in alfa kanalı doğrudan dışa aktarılan PNG\'de korunur. <code>toDataURL(\'image/png\')</code> yöntemi, herhangi bir ağ iletimi olmadan bilgisayarınızın RAM\'inde PNG bayt akışını oluşturur ve dosya doğrudan indirilir.',
  },
  {
    type: 'tip',
    title: 'GIF ikili şeffaflığı vs PNG alfa kanalı',
    html: 'GIF yalnızca ikili şeffaflığı (opak veya şeffaf) destekler. PNG\'ye dönüştürüldüğünde, GIF\'in yarı şeffaf pikselleri tarayıcının yorumladığı şekilde kalır. GIF\'inizin tırtıklı kenarları varsa, PNG bunları koruyacaktır; ancak bunları herhangi bir editörde kenar yumuşatma ile düzenleyebilirsiniz, bu orijinal GIF ile imkansızdır.',
  },
  {
    type: 'title',
    text: 'Elde edilen PNG\'nin kullanım durumları ve uyumluluğu',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Herhangi bir arka plan renginde kullanım için logolar ve simgeler.',
      'Discord, Telegram, Slack ve oyun platformları için avatarlar.',
      'Web ve mobil uygulamalar için arayüz grafikleri.',
      'Şeffaf arka planlı kişiselleştirilmiş çıkartmalar ve emojiler.',
      'Teknik dokümantasyon için ekran görüntüleri ve kullanıcı arayüzü öğeleri.',
    ],
  },
  {
    type: 'title',
    text: 'Sonuç: PNG, GIF\'in her zaman olmak istediği şeydir',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIF\'ten PNG\'ye dönüştürmek sadece format değiştirmek değildir: bir görüntüyü GIF\'in asla ulaşamadığı modern standarta güncellemektir. Daha fazla renk, daha iyi şeffaflık, daha az boyut. Aracımız bu dönüşümü, herhangi bir veriyi dışarı göndermeden milisaniyeler içinde doğrudan tarayıcınızda gerçekleştirir.',
  },
];


export const content: GifAPngLocaleContent = {
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
