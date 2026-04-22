import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAIcoLocaleContent } from '../index';

const slug = 'webp-den-ico-ya-donusturucu';
const title = 'WebP\'yi ICO\'ya Dönüştürün';
const description =
  'WebP görüntülerini şeffaflıkla beraber resmi ICO formatına dönüştürün. Dosya yüklemesi yok. Gerçek Microsoft ikili (binary) üstbilgileri. Ücretsiz ve özel.';

const ui: ImageConverterUI = {
  dragText: 'WebP dosyalarını sürükleyin...',
  convertText: 'Onları anında ICO\'ya dönüştürmek için',
  selectFiles: 'Dosyaları seçin',
  processedFiles: 'İşlenmiş dosyalar',
  downloadAll: 'Tümünü İndir (.zip)',
  pending: 'Bekliyor': 'Bibliyografik Referanslar',
  faqTitle: 'Sıkça Sorulan Sorular',
};

const faq: WebpAIcoLocaleContent['faq'] = [
  {
    question: 'WebP çıkartma tasarımlarımı resmi bir web Favicon ICO\'suna dönüştürebilir miyim?',
    answer:
      'Kesinlikle. Favicon, aşırı evrensel uyumluluk için hala klasik Microsoft ICO uzantısını gerektirir. Bu araç, %100 meşru bir simge oluşturarak ikili (binary) üstbilgiler ekleyecektir.',
  },
  {
    question: 'Büyük kurumsal simge grubumu oluştururken çevrimiçi kuyruklarda beklemek zorunda mıyım?',
    answer:
      'Hiç de değil. Dönüştürücümüz Javascript\'i yükler ve her türlü yükleme ağını devre dışı bırakır. Kendi cihazınızın işlemcisi, yüz veya daha fazla fotoğrafı asenkron olarak işler.',
  },
  {
    question: 'Elde edilen ICO, orijinal WebP\'min şeffaflığını destekleyecek mi?',
    answer:
      'Evet. Motorumuz dahili olarak tam 32 bit destekli HTML5 canvas API ile çalışır, her şeffaf delik temiz bir şekilde ikonografik dosyaya aktarılır.',
  },
];

const howTo: WebpAIcoLocaleContent['howTo'] = [
  {
    name: 'Tüm yerel WebP çıkartmalarınızı sürükleyin',
    text: 'Web sınırı doygunluğu korkusu olmadan büyük fotoğraf gruplarını taşıyın.',
  },
  {
    name: 'Mantıksal asenkron çeviri ve doğrudan montaj',
    text: 'Bellek bloğu kareden bayt bayt işlerken çubuğun ve öğelerin nasıl otomatik tamamlandığını hızla fark edin.',
  },
  {
    name: 'Sistem ve web geliştirme için paketinizi alın',
    text: 'Ortak bir dosyada devasa bir indirilebilir düğmeye serbestçe tıklayın veya yalnızca birine ihtiyacınız varsa manuel olarak indirin.',
  },
];

const seo: WebpAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'WebP\'den ICO\'ya Dönüştürücü: Modern Varlıklarınızdan Kusursuz Faviconlar Oluşturun',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Modern web tasarım iş akışları <strong>WebP</strong> formatında varlıklar üretir: optimize edilmiş logolar, kullanıcı arayüzü simgeleri ve marka öğeleri. Ancak sitenizin <strong>favicon</strong>\'unu veya bir Windows masaüstü uygulaması için simgeleri yapılandırma zamanı geldiğinde, gerekli format hala <strong>ICO</strong>\'dur. WebP\'yi ICO\'ya dönüştürmek, orijinal kaynağı kaybetmeden yüksek kaliteli varlıklarınızı yeniden kullanmanıza olanak tanır.',
  },
  {
    type: 'title',
    text: 'WebP mi ICO mu? Farklı Amaçlara Sahip Formatlar',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP, fotoğraflar, illüstrasyonlar ve web kullanıcı arayüzü simgeleri için mükemmel olan genel amaçlı bir görüntü formatıdır. Verimli sıkıştırması, sayfa yüklemelerini hızlandırmak için idealdir. Ancak, işletim sistemlerinin ve tarayıcıların bir uygulama simgesini veya favicon\'u tanıması ve görüntülemesi için gereken spesifik ikili (binary) yapıdan yoksundur.',
  },
  {
    type: 'paragraph',
    html: 'ICO, ikonlar için özel olarak tasarlanmış bir Microsoft konteyner formatıdır. Tek bir dosyada birden fazla çözünürlüğü saklayabilir ve 32 bitlik bir alfa kanalı aracılığıyla tam şeffaflığı destekler. Tarayıcılar geleneksel olarak bir <code>favicon.ico</code> dosyası ararlar ve bu format, simgenizin hem standart ekranlarda hem de Retina ve 4K ekranlarda keskin görünmesini sağlar.',
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
          'Şirket logonuz üçüncü taraf sunuculara gider',
          'Her dönüştürme için internet bağlantısı gerekir',
          'Sunucuya bağlı olarak değişen çıktı kalitesi',
          'Günlük dönüştürme sayısında sınırlar',
        ],
      },
      {
        title: 'Yerel Mimarimiz',
        description: 'Vanilla JS teknolojisini kullanarak doğrudan donanımınızda işleme.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Logonuz hiçbir zaman tarayıcınızdan ayrılmaz',
          'Microsoft standardına göre oluşturulan ICO ikili üstbilgileri',
          '32 bit şeffaflık tamamen korunur',
          'Komple simge setlerinin toplu dönüştürülmesi',
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
    html: 'Tarayıcı WebP dosyasını yerel olarak çözer ve orijinal alfa kanalını koruyarak 32 bit renk derinliğine sahip bir <strong>HTML5 Canvas</strong> üzerine çizer. JavaScript motorumuz daha sonra <code>getImageData()</code> yöntemiyle piksel verilerini çıkarır ve Microsoft standardı tarafından belirtilen ICONDIR ve ICONDIRENTRY üstbilgileriyle ICO ikili yapısını oluşturur.',
  },
  {
    type: 'paragraph',
    html: 'Sonuç, basit bir dosya yeniden adlandırma değil, meşru bir ICO dosyasıdır. Piksel verileri, Windows, macOS ve tüm modern tarayıcıların bir favicon veya uygulama simgesi yüklerken beklediği doğru yapıyla paketlenir.',
  },
  {
    type: 'tip',
    title: 'Keskin faviconlar için ipucu',
    html: 'ICO\'nuzu her zaman mevcut olan en yüksek çözünürlüklü kaynaktan oluşturun. 512×512 veya daha büyük bir WebP, düşük çözünürlüklü simgelerin bulanık göründüğü Retina ve 4K ekranlarda mükemmel keskinlikte bir favicon üretecektir.',
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
      'Herhangi bir web sitesi veya web uygulaması için favicon.ico dosyası oluşturma.',
      'Windows yazılım yükleyicileri için uygulama simgeleri oluşturma.',
      'Electron uygulamaları veya benzeri çerçeveler için masaüstü simgeleri üretme.',
      'Chrome ve Firefox tarayıcı uzantıları için simge setleri oluşturma.',
      'Marka WebP logolarını kurumsal uygulamalar için simgelere dönüştürme.',
    ],
  },
  {
    type: 'title',
    text: 'Sonuç',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Modern tasarım iş akışınız WebP üretir; uygulama ekosistemi hala ICO talep eder. Bu araç, saniyeler içinde bu boşluğu doldurur, marka varlıklarınız tarayıcınızdan hiç ayrılmadan doğru ikili yapıda ve şeffaflığı korunmuş simgeler oluşturur.',
  },
];

export const content: WebpAIcoLocaleContent = {
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
