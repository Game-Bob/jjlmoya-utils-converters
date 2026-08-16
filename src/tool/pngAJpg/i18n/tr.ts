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
  pending: 'Bekliyor',
  bibliographyTitle: 'Bibliyografik Referanslar',
  faqTitle: 'Sıkça Sorulan Sorular',
};

const faq: PngAJpgLocaleContent['faq'] = [
  {
    question: "Yerel PNG'den JPG'ye dönüştürücümüzü neden seçmelisiniz?",
    answer:
      'Geleneksel hizmetlerin aksine bu araç dosyaları tamamen tarayıcıda işler. Görselleriniz uzak bir diske gönderilmez; verileriniz üzerindeki kontrol ve gizlilik korunur.',
  },
  {
    question: 'JPG mi PNG mi: hangisi ne zaman kullanılmalı?',
    answer:
      'PNG logolar ve saydam öğeler için uygundur. JPG ise fotoğraflarda ve web bannerlarında daha küçük dosyalar oluşturarak sayfa yükleme hızını artırır.',
  },
  {
    question: 'Dosya yüklemeden teknik dönüşüm nasıl çalışır?',
    answer:
      'HTML5 Canvas kullanılır. Tarayıcı görüntüyü görünmez bir sanal alanda yeniden oluşturur, saydam bölgeleri beyazla doldurur ve indirilecek JPEG verisini doğrudan üretir.',
  },
  {
    question: 'Gizli belgeler için güvenli mi?',
    answer:
      "Evet. Bankacılık, sağlık ve hukuk dosyalarını üçüncü taraflara göndermemek daha güvenlidir; işlem cihazın RAM'inde kalır ve sekme kapatılınca sona erer.",
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
    text: "PNG'den JPG'ye Dönüştürme: Görsel Optimizasyonu Rehberi",
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Dijital tasarım ve web geliştirmede hız önemlidir. PNG saydamlığı ve kayıpsız kaliteyi korur, ancak dosyalar ağır olabilir. Hızlı sayfalar ve küçük ekler için JPG pratik bir seçenektir.',
  },
  {
    type: 'title',
    text: 'JPG mi PNG mi: hangisi seçilmeli?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Her durumda üstün tek bir format yoktur. PNG arayüzler, logolar ve saydam arka planlar için uygundur; kayıpsız sıkıştırma ise daha büyük dosyalar oluşturabilir.',
  },
  {
    type: 'paragraph',
    html: 'JPG gözün zor fark ettiği ayrıntıları azaltarak hafif görseller üretir. Fotoğraf, banner ve sosyal medya için küçük bir kalite ödününü daha hızlı yükleme karşılığında sunar.',
  },
  {
    type: 'title',
    text: 'Teknik karşılaştırma: yerel işlem ve bulut',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Bulut dönüştürücüler',
        description: 'Fotoğrafları uzak bir sunucuya yükleyen geleneksel hizmetler.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Ağ gecikmesi (yükleme/indirme)',
          'Özel verilerin sızma riski',
          'Dosya boyutu sınırları',
          'Reklamlar ve izleyiciler',
        ],
      },
      {
        title: 'Yerel mimarimiz',
        description: 'Vanilla JS ile cihazınızda doğrudan işleme.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Ağ olmadan anında hız',
          'Gizlilik garantisi (sıfır bayt gönderilir)',
          'Dosya başına MB sınırı yok',
          'Temiz ve profesyonel arayüz',
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
    html: "Sunucu olmadan dönüşüm, modern tarayıcı API'leriyle yapılır. Dosya seçildiğinde RAM içinde geçici bir Blob oluşturulur ve görünmez bir HTML5 Canvas üzerine çizilir.",
  },
  {
    type: 'paragraph',
    html: 'JPG saydamlığı desteklemediği için saydam alanlar oluşturma öncesinde beyazla doldurulur. Canvas daha sonra cihazın doğrudan kaydedebileceği JPEG verisini üretir.',
  },
  {
    type: 'tip',
    title: 'SEO ipucu: ideal dosya boyutu',
    html: "Daha küçük bir görsel LCP ve PageSpeed ölçümlerini iyileştirebilir. Büyük PNG dosyalarını JPG'ye çevirmek özellikle başlık görsellerinde ve yoğun sayfalarda faydalıdır.",
  },
  {
    type: 'title',
    text: 'Şirketler ve profesyoneller için güvenlik',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "Bankacılık, sağlık ve hukukta dosyaları dış hizmetlere göndermek risk yaratabilir. Buradaki işlem tarayıcının RAM'inde kalır ve buluta yükleme gerektirmez.",
  },
  {
    type: 'title',
    text: 'Sonuç uyumluluğu',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Windows, macOS ve mobil cihaz görüntüleyicileri.',
      'Sosyal ağlar (Instagram, LinkedIn ve diğerleri).',
      'Ofis araçları (Word, PowerPoint).',
      'İçerik yönetim sistemleri (WordPress, Shopify).',
    ],
  },
  {
    type: 'title',
    text: 'Sonuç: bilinçli biçimde optimize edin',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Bu dönüştürücü hız ve gizliliği birleştirir. Geliştirici veya ev kullanıcısı olun, dosyalarınızı üçüncü taraflara vermeden görselleri küçültebilirsiniz.',
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
