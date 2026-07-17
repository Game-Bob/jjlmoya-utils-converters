import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAJpgLocaleContent } from '../index';

const slug = 'webp-den-jpg-ye-donusturucu';
const title = 'WebP\'yi JPG\'ye Çevrimiçi ve Ücretsiz Dönüştürün';
const description =
  'Dosyaları yüklemeden WebP görüntülerini JPG\'ye dönüştürün. %100 özel yerel işleme. Şeffaf arka planlar otomatik olarak beyazla değiştirilir.';

const ui: ImageConverterUI = {
  dragText: 'WebP dosyalarını sürükleyin...',
  convertText: 'Onları anında JPG\'ye dönüştürmek için',
  selectFiles: 'Dosyaları seçin',
  processedFiles: 'İşlenmiş dosyalar',
  downloadAll: 'Tümünü İndir (.zip)',
  pending: 'Bekliyor',
  bibliographyTitle: 'Bibliyografik Referanslar',
  faqTitle: 'Sıkça Sorulan Sorular',
};

const faq: WebpAJpgLocaleContent['faq'] = [
  {
    question: 'Özel resimleri güvenli bir şekilde yükleyebilir miyim?',
    answer:
      'Evet. Herhangi bir yükleme sunucusu yok. Tarayıcınız WebP\'yi bilgisayarınızda işler ve indirmeniz için JPG\'yi oluşturur. Başka kimse görmez.',
  },
  {
    question: 'WebP arka planım şeffafsa ne olur?',
    answer:
      'JPG şeffaflığı desteklemediğinden, dönüştürücü şeffaf alanları otomatik olarak düz beyaz bir arka planla dolduracaktır.',
  },
  {
    question: 'Dönüştürmelerde veya dosya boyutunda bir sınır var mı?',
    answer:
      'Herhangi bir kısıtlama getirmiyoruz. Bilgisayarınız yeterli işlem gücüne ve RAM\'e sahip olduğu sürece yüzlerce görüntüyü dönüştürebilirsiniz.',
  },
];

const howTo: WebpAJpgLocaleContent['howTo'] = [
  {
    name: 'Dosyalarınızı sürükleyin',
    text: 'Modern WebP dosyalarınızı yükleme alanına bırakın veya etkileşimli dosya tarayıcısını kullanarak seçin.',
  },
  {
    name: 'Yerel Dönüştürme',
    text: 'Yerel motorun bir arka plan uygulamasını ve her pikseli evrensel JPG formatına yorumlamasını izleyin.',
  },
  {
    name: 'Sonuçlarınızı alın',
    text: 'Tek tek indirin veya tüm yeni fotoğraflarınızı birleştirmek için ZIP paketini kullanın.',
  },
];

const seo: WebpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'WebP\'den JPG\'ye Dönüştürücü: Gizlilikten Ödün Vermeden Evrensel Uyumluluk',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong>, Google\'ın verimlilik konusundaki bahsidir: geleneksel JPG ile karşılaştırılabilir kalitede daha hafif görüntüler. Ancak uyumluluğu gerçek dünyada bir sorun olmaya devam ediyor. Outlook gibi e-posta istemcileri, eski tasarım yazılımları, mesajlaşma uygulamaları ve kurumsal iş akışları hala her yerde bulunan <strong>JPG</strong>\'ye bağlıdır. WebP\'yi JPG\'ye dönüştürmek, modern web ile gerçek dünya arasındaki köprüdür.',
  },
  {
    type: 'title',
    text: 'WebP mi JPG mi? Her Format Ne Zaman Kullanılmalı?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP, kontrollü ortamlarda mükemmeldir: tarayıcı uyumluluğunun garanti edilebildiği Chrome, Edge veya Firefox üzerindeki modern web siteleri. Üstün sıkıştırması, dosya ağırlığını eşdeğer JPG\'ye kıyasla %25-35 oranında azaltarak yükleme sürelerini ve Core Web Vitals metriklerini iyileştirir. Görüntüleme ortamını kontrol ettiğinizde ideal formattır.',
  },
  {
    type: 'paragraph',
    html: 'JPG ise <em>kesinlikle her bağlamda</em> çalışır: e-posta ekleri, PowerPoint sunumları, Word belgeleri, ev yazıcıları, eski düzenleme uygulamaları ve istisnasız sosyal medya platformları. Birinin resminizi herhangi bir teknik sürtünme olmadan açmasına ihtiyacınız varsa, JPG doğru cevaptır.',
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
          'Fotoğraflarınız internet üzerinden bilinmeyen sunuculara gider',
          'Yükleme ve uzaktan işleme için bekleme süresi',
          'Dosya boyutu ve ücretsiz dönüştürme sayısında günlük sınırlar',
          'Üçüncü taraf sunucularda veri tutma konusunda gerçek risk',
        ],
      },
      {
        title: 'Yerel Mimarimiz',
        description: 'Vanilla JS teknolojisini kullanarak doğrudan donanımınızda işleme.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Sıfır bayt gönderilir: Her şey RAM\'inizde gerçekleşir',
          'Bağlantınıza bağlı kalmadan anlık hız',
          'Dosya boyutu veya dosya sayısında sınır yok',
          'Kişisel, tıbbi veya kurumsal fotoğraflar için mükemmel',
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
    html: 'Bir WebP dosyasını araca sürüklediğinizde, tarayıcı dahili işleme motorunu kullanarak onu yerel olarak çözer. Dosya daha sonra görünmez bir <strong>HTML5 Canvas</strong> öğesine çizilir. JPG şeffaflığı desteklemediğinden, algoritma görüntüyü üzerine yerleştirmeden önce kanvası düz beyaz bir arka planla önceden doldurur.',
  },
  {
    type: 'paragraph',
    html: 'Son adım dışa aktarmadır: Kanvas yöntemi <code>toDataURL(\'image/jpeg\')</code> kanvas piksellerini yüksek kaliteli sıkıştırılmış bir JPG bayt akışına dönüştürür. Bu akış, herhangi bir ağ iletişimi olmaksızın doğrudan tarayıcının indirme sistemine iletilir. Tüm süreç, çok megapikselli görüntüler için bile milisaniyeler sürer.',
  },
  {
    type: 'tip',
    title: 'Uyumluluk ipucu',
    html: 'Fotoğrafları teknik olmayan kullanıcılarla paylaşırken veya e-posta yoluyla gönderirken daima JPG kullanın - herhangi bir e-posta istemcisi, işletim sistemi veya cihazda sıfır uyumluluk sorunu, istisna yok ve hoş olmayan sürprizler yok.',
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
      'Outlook, Gmail veya Apple Mail\'den gelen e-postalara fotoğraf ekleme.',
      'Word belgelerine, Excel\'e veya PowerPoint sunumlarına resim ekleme.',
      'WebP\'yi reddeden sosyal medya platformlarında paylaşım yapma.',
      'Sınırlı format desteğine sahip WhatsApp veya mesajlaşma uygulamaları aracılığıyla paylaşma.',
      'Yalnızca JPG veya PNG kabul eden baskı hizmetlerinde fotoğraf yazdırma.',
    ],
  },
  {
    type: 'title',
    text: 'Sonuç',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP web görüntülerinin geleceğidir, ancak JPG evrensel uyumluluğun kralı olmaya devam ediyor. Bu araç, bu köprüyü saniyeler içinde, tamamen özel olarak ve herhangi bir şey yüklemeden geçmenizi sağlar. Resminiz cihazınızdan asla ayrılmaz.',
  },
];


export const content: WebpAJpgLocaleContent = {
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
