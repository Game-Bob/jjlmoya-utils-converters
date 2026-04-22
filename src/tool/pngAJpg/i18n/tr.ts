import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAJpgLocaleContent } from '../index';

const slug = 'png-jpg-donusturucu';
const title = 'PNG\'yi Online JPG\'ye Dönüştür';
const description =
  'PNG görüntülerinizi anında kendi bilgisayarınızda hızlı sıkıştırmalı JPG formatına dönüştürün. Fotoğrafları internete yüklemeden. Toplu optimizasyon.';

const ui: ImageConverterUI = {
  dragText: 'PNG dosyalarını buraya sürükleyin...',
  convertText: 'Anında JPG\'ye dönüştürmek için',
  selectFiles: 'Dosyaları seçin',
  processedFiles: 'İşlenen dosyalar',
  downloadAll: 'Tümünü İndir (.zip)',
  pending: 'Bekliyor': 'Bibliyografik Referanslar',
  faqTitle: 'Sıkça Sorulan Sorular',
};

const faq: PngAJpgLocaleContent['faq'] = [
  {
    question: 'Neden yerel PNG - JPG dönüştürücümüzü seçmelisiniz?',
    answer:
      'Geleneksel araçların aksine, yardımcı programımız dosyaları tamamen tarayıcınızda işler. Görüntüleriniz asla başkasının sabit diskine değmez, bu da verilerinizin tam egemenliğini ve gizliliğini garanti eder.',
  },
  {
    question: 'JPG mi yoksa PNG mi? Benim durumum için hangisi daha iyi?',
    answer:
      'PNG, logolar ve şeffaflık içeren öğeler için idealdir. Ancak JPG, web sitelerinin yükleme hızını önemli ölçüde artıran çok daha düşük ağırlıklara ulaştığı için fotoğraflar ve web banner\'ları için altın standarttır.',
  },
  {
    question: 'Hiçbir şey yüklemeden teknik dönüşüm nasıl çalışıyor?',
    answer:
      'HTML5 Canvas\'ın gücünü kullanıyoruz. Tarayıcı, görüntüyü görünmez bir sanal tuval üzerinde yeniden oluşturur, şeffaflıkları beyaza boyar ve anında doğrudan indirdiğiniz bir bayt akışı oluşturur.',
  },
  {
    question: 'Gizli belgeler için güvenli mi?',
    answer:
      'Evet, bankacılık, sağlık veya hukuk sektörlerindeki profesyoneller için en güvenli seçenektir. Sadece RAM\'inizi kullanan bir "kara kutu" olduğu için, içinde olup bitenler sekmeyi kapattığınızda ölür ve üçüncü taraf bulutlarda sızıntıları önler.',
  },
];

const howTo: PngAJpgLocaleContent['howTo'] = [
  {
    name: 'Dosya seçimi',
    text: 'PNG dosyalarınızı bir klasörde hazırlayın ve hepsini birlikte işlem alanına sürükleyin veya keşfediciyi kullanarak arayın.',
  },
  {
    name: 'Anında işleme',
    text: 'Tarayıcı ağırlığı yerel olarak optimize ederken her dosya için durumun "Hazır" olarak değiştiğini doğrulayın.',
  },
  {
    name: 'Optimize edilmiş indirme',
    text: 'Yeni JPG\'lerinizi tek tek kaydedin veya tüm görüntüleri içeren sıkıştırılmış bir ZIP dosyası almak için "Tümünü İndir" düğmesini kullanın.',
  },
];

const seo: PngAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG - JPG Dönüştürücü: Görüntü Optimizasyonu İçin Kesin Kılavuz',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Dijital tasarım ve web geliştirme dünyasında verimlilik her şeydir. PNG (Portable Network Graphics) formatı, şeffaflıkları koruma yeteneği ve kayıpsız sıkıştırması nedeniyle sevilir, ancak büyük bir düşmanı vardır: dosya ağırlığı. Web sitenizin uçmasını veya e-postalarınızın anında yüklenmesini istediğinizde, PNG\'den JPG\'ye geçiş en akıllıca teknik karardır.',
  },
  {
    type: 'title',
    text: 'JPG mi yoksa PNG mi?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Bir format diğerinden daha iyi değildir, her ihtiyaca uygun bir araç vardır. PNG kayıpsız bir formattır; arayüz maketleri, küçük metinli logolar ve şeffaf arka plan gerektiren görsel öğeler için idealdir. Ancak bu sadakatin bir bedeli vardır: dosyalar sıkıştırılmış eşdeğerinden 5 veya 10 kat daha ağır olabilir.',
  },
  {
    type: 'paragraph',
    html: 'Öte yandan JPG (Joint Photographic Experts Group), insan gözünün neredeyse hiç fark etmediği bilgileri kaldırmak için ayrıklaştırma algoritmaları kullanarak tüy siklet ağırlıklara ulaşır. Fotoğraflar, reklam banner\'ları ve sosyal medya için altın standarttır. PNG\'lerinizi JPG\'ye dönüştürerek geometrik sadakati ağ hızıyla değiştiriyorsunuz.',
  },
  {
    type: 'title',
    text: 'Mimari Karşılaştırması: Yerel ve Bulut',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Bulut Dönüştürücüler',
        description: 'Fotoğraflarınızı uzak bir sunucuya yükleyen geleneksel araçlar.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Ağ gecikmesi (Yükleme/İndirme)',
          'Özel verilerin sızma riski',
          'Dosya başına boyut sınırları',
          'Reklamlar ve izleyiciler',
        ],
      },
      {
        title: 'Yerel Mimarimiz',
        description: 'Vanilla JS teknolojisi aracılığıyla donanımınızda doğrudan işleme.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Ağsız anında hız',
          'Garantili gizlilik (0 bayt gönderildi)',
          'Dosya başına MB sınırı yok',
          'Profesyonel ve temiz arayüz',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Teknik dönüşüm nasıl çalışır?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Bir görüntüyü sunucuya göndermeden nasıl dönüştürmenin mümkün olduğunu merak ediyor olmalısınız. Sihir, modern tarayıcıların gücünde yatıyor. Bir dosya seçtiğinizde, yalnızca RAM\'inizde bulunan bir Blob oluşturuyoruz. Bu Blob, görünmez bir HTML5 Canvas öğesi üzerinde çizilir.',
  },
  {
    type: 'paragraph',
    html: 'JPG şeffaflığı desteklemediği için algoritmamız, PNG\'yi üzerine "boyamadan" önce arka planı düz beyaz bir renkle doldurur. Görüntü oluşturulduktan sonra yerel dışa aktarma yöntemini çalıştırarak bilgisayarınızın doğrudan indirdiği bir bayt akışı oluşturuyoruz.',
  },
  {
    type: 'tip',
    title: 'SEO İpucu: İdeal Ağırlık',
    html: 'Google, yavaş web sitelerini aktif olarak cezalandırır. Largest Contentful Paint (LCP) değeriniz 2MB\'lık bir başlık PNG\'si nedeniyle yüksekse, bunu 200KB\'lık bir JPG\'ye dönüştürmek, görsel fark olmadan PageSpeed metriklerinizi anında iyileştirebilir.',
  },
  {
    type: 'title',
    text: 'Şirketler ve Profesyoneller İçin Güvenlik',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Bankacılık, sağlık veya hukuk gibi hassas sektörlerde çalışıyorsanız, dosyaları çevrimiçi dönüştürücülere yüklemek bir güvenlik ihlalidir. Aracımız bir "kara kutu" gibi çalışır: içinde ne oluyorsa RAM\'inizde kalır. Gizli belgelerle çalışmanın tek güvenli yolu budur.',
  },
  {
    type: 'title',
    text: 'Sonucun Uyumluluğu',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Windows, macOS ve mobil cihaz görüntüleyicileri.',
      'Sosyal ağlar (Instagram, LinkedIn vb.).',
      'Ofis araçları (Word, PowerPoint).',
      'İçerik yöneticileri (WordPress, Shopify).',
    ],
  },
  {
    type: 'title',
    text: 'Sonuç: Bir Profesyonel Gibi Optimize Edin',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Bu dönüştürücü sadece başka bir sayfa değil; hayatınızı kolaylaştırmak için tasarlanmış bir mühendislik harikasıdır. İster bir geliştirici ister bir ev kullanıcısı olun, megabaytlardan tasarruf etmek ve verilerinizi güvende tutmak için nihai çözüm burada.',
  },
];


export const content: PngAJpgLocaleContent = {
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
