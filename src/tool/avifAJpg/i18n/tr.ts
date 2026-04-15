import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAJpgLocaleContent } from '../index';

const slug = 'avif-jpg-donusturucu';
const title = 'AVIF\'i Online JPG\'ye Dönüştür';
const description =
  'AVIF görüntülerini tarayıcınızda JPG\'ye dönüştürün. Sunucu yok. %100 özel yerel işleme. Ücretsiz ve sınırsız.';

const ui: ImageConverterUI = {
  dragText: 'AVIF dosyalarını buraya sürükleyin...',
  convertText: 'Anında JPG\'ye dönüştürmek için',
  selectFiles: 'Dosyaları seçin',
  processedFiles: 'İşlenen dosyalar',
  downloadAll: 'Tümünü İndir (.zip)',
  pending: 'Bekliyor',
  bibliographyTitle: 'Bibliyografik Referanslar',
  faqTitle: 'Sıkça Sorulan Sorular',
};

const faq: AvifAJpgLocaleContent['faq'] = [
  {
    question: 'Neden AVIF\'i JPG\'ye dönüştürmeliyim?',
    answer:
      'AVIF formatı üstün sıkıştırma sunar, ancak tüm programlar veya görüntüleyiciler bunu desteklemez. JPG\'ye dönüştürmek, görüntünün dünyadaki cihazların %100\'ünde görüntülenebilmesini sağlar.',
  },
  {
    question: 'AVIF görüntülerinizi nasıl koruyoruz?',
    answer:
      'Fotoğraflarınız asla cep telefonunuzdan veya bilgisayarınızdan çıkmaz. Tüm çizim ve JPEG kodlama işlemi tarayıcınızın Javascript ortamında yürütülür.',
  },
  {
    question: 'AVIF\'ten JPG\'ye geçerken kalite kaybı yaşar mıyım?',
    answer:
      'Aracımız pikselleri standart Canvas kalitesiyle (0.9 ila 0.95) işleyerek değişikliklerin neredeyse fark edilmemesini sağlar.',
  },
];

const howTo: AvifAJpgLocaleContent['howTo'] = [
  {
    name: 'Dosyaları sürükleyin veya tıklayın',
    text: 'Dönüştürmek istediğiniz tüm AVIF fotoğraflarını belirlenen işlem alanına taşıyın.',
  },
  {
    name: 'Anında Dönüşüm',
    text: 'AVIF\'in bir saniyeden kısa bir sürede JPG olarak nasıl yeniden kodlandığını, olası alfa kanallarını düz bir arka planla değiştirdiğini görün.',
  },
  {
    name: 'ZIP\'i Kaydet veya İndir',
    text: 'Yeni JPG resimlerinizi tek tek indirin veya toplu işlem yaptıysanız Tümünü İndir\'e basın.',
  },
];

const bibliography: AvifAJpgLocaleContent['bibliography'] = [
  {
    name: 'AV1 Image File Format (AVIF)',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'JPG Hakkında Genel Bilgiler',
    url: 'https://en.wikipedia.org/wiki/JPEG',
  },
];

const seo: AvifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'AVIF - JPG Dönüştürücü: Modern Görüntüleriniz İçin Evrensel Uyumluluk',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF (AV1 Image File Format), bugün mevcut olan en verimli görüntü formatıdır. Alliance for Open Media tarafından geliştirilen ve AV1 video kodekine dayanan bu format, aynı görsel kalitede JPG\'den %50 daha fazla sıkıştırma sunar. Ancak bu teknik avantajın bir bedeli vardır: AVIF; Photoshop, Lightroom, Windows Fotoğraf Görüntüleyicisi veya çoğu geleneksel düzenleme ve görüntüleme aracı tarafından desteklenmez. JPG\'ye dönüştürmek bu sorunu kökten çözer.',
  },
  {
    type: 'title',
    text: 'AVIF vs JPG: Verimlilik ve Evrensel Uyumluluk',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF olağanüstü bir şekilde sıkıştırır: JPG\'de 4 MB yer kaplayan yüksek çözünürlüklü bir fotoğraf, aynı algılanan kaliteyi koruyarak AVIF\'te sadece 2 MB olabilir. Bu, yükleme performansının kritik olduğu web sunumu için mükemmel hale getirir. Ancak tarayıcı dışında AVIF pratik olarak görünmezdir: ne Windows Explorer önizleme yapar, ne kameralar dışa aktarır, ne de tasarımcılar iş akışlarında buna sıcak bakar.',
  },
  {
    type: 'paragraph',
    html: 'JPG, 30 yılı aşkın bir süredir dijital fotoğrafçılığın evrensel standardı olmuştur. Cihazların, işletim sistemlerinin, ofis uygulamalarının, sosyal ağların, yazıcıların ve şimdiye kadar bir görüntü görmüş olan her türlü yazılımın %100\'ü tarafından desteklenmektedir. Paylaşmanız, yazdırmanız, düzenlemeniz veya e-posta ile göndermeniz gerektiğinde JPG, her şeyin sorunsuz çalışacağının garantisidir.',
  },
  {
    type: 'title',
    text: 'Karşılaştırma: Bulut Dönüştürücüler ve Yerel Mimarimiz',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Bulut Dönüştürücüler',
        description: 'AVIF dosyalarınızı işlemek için uzak bir sunucuya yükleyen araçlar.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Özel fotoğraflarınız internet üzerinden harici sunuculara gider',
          'Dosyanın yüklenmesi ve indirilmesi için bekleme süreleri',
          'Boyut sınırlamaları ve ücretsiz dönüşüm sayısı',
          'Görüntülerin üçüncü taraf sunucularda tutulma riski',
        ],
      },
      {
        title: 'Yerel Mimarimiz',
        description: 'Vanilla JS teknolojisi ve Canvas API aracılığıyla doğrudan tarayıcınızda işleme.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Görüntüleriniz asla cihazınızdan çıkmaz',
          'Ağ gecikmesi olmadan anında dönüşüm',
          'Dosya veya boyut sınırı yok',
          'Tıbbi, yasal veya gizli görüntüler için uygun',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Tarayıcıda teknik dönüşüm nasıl çalışır?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Chrome, Firefox ve Edge gibi modern tarayıcılar, entegre AV1 kod çözücüleri sayesinde AVIF için yerel destek içerir. Bir AVIF dosyası yüklediğinizde, tarayıcı dosyayı bellekte çözer ve RAM\'de bir bit eşlem gösterimine dönüştürür. Bu gösterim, görünmez bir HTML5 <code>Canvas</code> öğesi üzerine çizilir.',
  },
  {
    type: 'paragraph',
    html: 'Ardından Canvas, standart JPG sıkıştırmasını uygulayarak <code>toBlob(\'image/jpeg\', quality)</code> kullanarak görüntüyü dışa aktarır. JPG şeffaflığı desteklemediği için AVIF\'te bulunan her türlü alfa kanalı dışa aktarmadan önce beyaz arka planla doldurulur. Sonuç, tek bir bayt bile tarayıcınızdan çıkmadan doğrudan indirmeye hazır yüksek kaliteli bir JPG dosyasıdır.',
  },
  {
    type: 'tip',
    title: 'Sıkıştırma ve uyumluluk arasındaki mükemmel denge',
    html: 'AVIF, eşit kalitede JPG\'den %50 daha küçüktür - ancak JPG her türlü yazılımla %100 uyumluluğa sahiptir. Sunucudan AVIF görüntüleri alırsanız ve bunları düzenlemeniz, e-posta ile göndermeniz veya masaüstü araçlarında açmanız gerekiyorsa, önce bunları JPG\'ye dönüştürün.',
  },
  {
    type: 'title',
    text: 'Kullanım durumları: AVIF\'i JPG\'ye ne zaman dönüştürmeli?',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Photoshop, Lightroom, GIMP veya diğer masaüstü yazılımlarında düzenleme.',
      'Görüntüleri eski cihazlardaki veya işletim sistemlerindeki kullanıcılarla paylaşma.',
      'Herhangi bir e-posta istemcisinde görüntülemeyi garanti etmek için e-postalara ekleme.',
      'Yükleme formatı olarak AVIF kabul etmeyen platformlarda yayınlama.',
      'Yazdırma: Profesyonel yazdırma hizmetleri yerel olarak JPG ile çalışır.',
    ],
  },
  {
    type: 'title',
    text: 'Sonuç: Tek adımda evrensel uyumluluk',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF, görüntü sıkıştırmanın geleceğidir ancak bugün uyumluluk gerektirir. Dönüştürücümüz, her iki dünyanın da en iyisini elde etmenizi sağlar: maksimum verimlilik için görüntüleri AVIF\'te alın ve saklayın ve herhangi bir bağlamda çalışması gerektiğinde bunları anında JPG\'ye dönüştürün. Her şey özel, ücretsiz ve sınırsız.',
  },
];


export const content: AvifAJpgLocaleContent = {
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
