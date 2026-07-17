import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAPngLocaleContent } from '../index';

const slug = 'webp-den-png-ye-donusturucu';
const title = 'WebP\'yi PNG\'ye Çevrimiçi ve Ücretsiz Dönüştürün';
const description =
  'Tarayıcınızda WebP görüntülerini PNG\'ye dönüştürün. Şeffaflığı korur. Sunuculara dosya yüklemesi yok. Ücretsiz ve %100 özel.';

const ui: ImageConverterUI = {
  dragText: 'WebP dosyalarını sürükleyin...',
  convertText: 'Onları anında PNG\'ye dönüştürmek için',
  selectFiles: 'Dosyaları seçin',
  processedFiles: 'İşlenmiş dosyalar',
  pending: 'Bekliyor',
  bibliographyTitle: 'Bibliyografik Referanslar',
  faqTitle: 'Sıkça Sorulan Sorular',
};

const faq: WebpAPngLocaleContent['faq'] = [
  {
    question: 'WebP dosyalarımı neden PNG\'ye dönüştürmem gerekiyor?',
    answer:
      'WebP dosyaları daha hafif olmalarına rağmen, eski Photoshop gibi düzenleme programlarında uyumsuzluklara neden olabilir. PNG, %100 evrensel uyumluluk sağlar.',
  },
  {
    question: 'WebP\'den PNG\'ye dönüştürürken şeffaflıklar kaybolur mu?',
    answer:
      'Kesinlikle hayır. JPG\'ye dönüştürmenin aksine PNG, alfa kanalını destekler. Aracımız, orijinal dosyadaki her türlü şeffaf alanı koruyacaktır.',
  },
  {
    question: 'Gizli şirket dosyalarını yükleyebilir miyim?',
    answer:
      'Yapabilirsiniz ve yapmalısınız. Her şey JavaScript aracılığıyla yerel olarak çalıştığı için şirket görselleriniz asla bilgisayarınızdan ayrılmaz veya harici sunucularda saklanmaz.',
  },
];

const howTo: WebpAPngLocaleContent['howTo'] = [
  {
    name: 'WebP dosyalarınızı sürükleyin',
    text: 'WebP dosyalarınızı ana panele taşıyın ve bırakın veya görselleri geleneksel şekilde seçin.',
  },
  {
    name: 'Yüksek Kaliteli Dönüştürme',
    text: 'Tarayıcınız görüntüyü piksel piksel yeniden çizecek ve orijinal renk gamını koruyarak PNG formatında birebir kopyasını oluşturacaktır.',
  },
  {
    name: 'Tekli veya Toplu İndirme',
    text: 'Her dosyayı ayrı ayrı kaydedin veya bir grup dosyayı işlediyseniz, hepsini paketlenmiş olarak indirmek için ZIP düğmesine tıklayın.',
  },
];

const seo: WebpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'WebP\'den PNG\'ye Dönüştürücü: Düzenleme ve Tasarım İçin Profesyonel Seçim',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Bir tasarımcı <strong>WebP</strong> formatında bir grafik varlık indirip bunu Photoshop, Figma veya Illustrator\'da açmaya çalıştığında sonuç hüsran olabilir: dosya yüklenemez veya kalitesi düşer. <strong>PNG</strong> formatı, profesyonel düzenlemenin tartışmasız standardıdır: kayıpsız sıkıştırma, tam alfa kanalı ve tüm yaratıcı üretim zinciri boyunca garantili uyumluluk.',
  },
  {
    type: 'title',
    text: 'Web İçin WebP, Stüdyo İçin PNG',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP bir web üretim formatıdır: sıkıştırma algoritmaları, tekrarlayan düzenleme iş akışlarında maksimum doğruluğu korumak için değil, aktarım ağırlığını azaltmak için optimize edilmiştir. Düzenlenmiş bir WebP\'yi her kaydettiğinizde, kodek sıkıştırmayı yeniden uygular. Bir dosyanın birçok kez değiştirileceği projeler için bu, kümülatif kalite kaybı anlamına gelir.',
  },
  {
    type: 'paragraph',
    html: 'PNG <strong>kayıpsız sıkıştırma</strong> kullanır: dosyayı kaç kez kaydederseniz kaydedin her pikselin verisi tamamen korunur. Onlarca revizyon boyunca görsel bütünlüğü koruması gereken UI/UX tasarımcıları, dijital illüstratörler ve markalama ekipleri tarafından tercih edilen formattır. Photoshop, Figma, Sketch ve Illustrator gibi araçlar PNG\'yi birincil dışa aktarma formatı olarak kabul eder.',
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
          'Tasarım varlıklarınız üçüncü taraf sunucularda saklanır',
          'Büyük dosyalar için yavaş uzaktan işleme',
          'Gizli müşteri projeleri için sızıntı riski',
          'Toplu dönüştürme sınırlıdır veya ücretlidir',
        ],
      },
      {
        title: 'Yerel Mimarimiz',
        description: 'Vanilla JS teknolojisini kullanarak doğrudan donanımınızda işleme.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Tasarımlarınız asla makinenizden ayrılmaz',
          'Onlarca dosyayı anında toplu olarak dönüştürün',
          'Tam alfa kanalı ve renk gamı koruması',
          'Müşteri projeleri için mutlak gizlilik',
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
    html: 'Modern tarayıcılar WebP\'yi yerel olarak çözebilir. Aracımız, dosyayı bir JavaScript <strong>Image</strong> öğesine yüklemek için bu yetenekten yararlanır ve ardından onu orijinalleriyle aynı boyutlara sahip bir HTML5 kanvasına çizer. JPG\'ye dönüştürmenin aksine burada arka plan dolgusuna gerek yoktur: kanvas tam alfa kanalını korur.',
  },
  {
    type: 'paragraph',
    html: 'Son dışa aktarma, orijinale sadık kayıpsız bir PNG oluşturan <code>toDataURL(\'image/png\')</code> yöntemini kullanır. Sonuç, herhangi bir ara adım, renk bozulması veya şeffaflık kaybı olmaksızın doğrudan herhangi bir profesyonel tasarım yazılımına aktarılmaya hazır bir dosyadır.',
  },
  {
    type: 'tip',
    title: 'Düzenleyiciler için ipucu',
    html: 'Görüntüyü düzenlemeye devam etmeniz gerektiğinde PNG kullanın. Kayıpsız sıkıştırma, tekrarlanan kaydetmelerden dolayı kalite kaybı olmayacağını garanti eder - bu, Photoshop veya Figma\'da katmanlar, maskeler veya renk ayarlamalarıyla çalışırken kritiktir.',
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
      'WebP varlıklarını Photoshop, Figma, Sketch veya Illustrator\'a aktarma.',
      'Birden fazla arka planda kullanım için logolarda ve simgelerde şeffaflığı koruma.',
      'Uzun süreli projeler için grafiklerin ana kopyalarını oluşturma.',
      'Alfa kanallı PNG gerektiren mobil uygulamalar için varlıkları dışa aktarma.',
      'Değişken arka planlara sahip tasarım mockuplarında ve sunumlarında görselleri kullanma.',
    ],
  },
  {
    type: 'title',
    text: 'Sonuç',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP web sunucusu formatıysa, PNG tasarım stüdyosu formatıdır. Bu araç, WebP varlıklarınızı şeffaflığı bozulmadan ve maksimum kalitede üretime hazır PNG\'lere dönüştürür; üstelik hepsi tarayıcınızda ve dosyalarınız asla makinenizden ayrılmadan.',
  },
];


export const content: WebpAPngLocaleContent = {
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
