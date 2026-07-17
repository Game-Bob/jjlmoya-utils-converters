import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAJpgLocaleContent } from '../index';

const slug = 'svg-den-jpg-ye-donusturucu';
const title = 'SVG\'yi JPG\'ye Çevrimiçi ve Ücretsiz Dönüştürün';
const description =
  'SVG vektör dosyalarını tarayıcınızda JPG\'ye dönüştürün. 2 kat yüksek çözünürlüklü işleme. Dosya yüklemesi yok. Ücretsiz ve %100 özel.';

const ui: ImageConverterUI = {
  dragText: 'SVG dosyalarını sürükleyin...',
  convertText: 'Onları anında JPG\'ye dönüştürmek için',
  selectFiles: 'Dosyaları seçin',
  processedFiles: 'İşlenmiş dosyalar',
  downloadAll: 'Tümünü İndir (.zip)',
  pending: 'Bekliyor',
  bibliographyTitle: 'Bibliyografik Referanslar',
  faqTitle: 'Sıkça Sorulan Sorular',
};

const faq: SvgAJpgLocaleContent['faq'] = [
  {
    question: 'Neden SVG\'yi JPG\'ye dönüştürmeliyiz?',
    answer:
      'JPG, her tür cihazda maksimum uyumluluk sunar; SVG\'yi JPG\'ye dönüştürmek, herkesin tasarımınızı işleme sorunu yaşamadan görüntüleyebilmesini sağlamanın en iyi yoludur.',
  },
  {
    question: 'SVG şeffaflığına ne olur?',
    answer:
      'JPG\'ye (şeffaflığı desteklemez) dönüştürürken, vektör kompozisyonunuza otomatik olarak opak beyaz bir arka plan eklenecektir.',
  },
  {
    question: 'Sonuçta elde edilen JPG hangi çözünürlüğe sahip olacak?',
    answer:
      'Araç, Retina ekranlar ve profesyonel kullanım için uygun yüksek çözünürlüğü garanti etmek amacıyla SVG\'yi çift ölçekte (2 kat) işler.',
  },
];

const howTo: SvgAJpgLocaleContent['howTo'] = [
  {
    name: 'Vektör dosyalarınızı yerleştirin',
    text: 'Dışa aktarma listesini hazırlamak için SVG dosyalarınızı üst alana bırakın.',
  },
  {
    name: 'JPG\'ye Rasterleştirme',
    text: 'Araç, vektörleri yüksek çözünürlüklü piksellere dönüştürecek ve JPG\'nizi anında oluşturacaktır.',
  },
  {
    name: 'Sonuçları indirin',
    text: 'JPG dosyalarınızı tek tek veya ZIP paketi olarak alın.',
  },
];

const seo: SvgAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'SVG\'den JPG\'ye Dönüştürücü: Vektörlerinizi Her Platforma Taşıyın',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>SVG</strong> formatı modern web\'in ana dilidir: hafif, ölçeklenebilir, düzenlenebilir. Ancak vektörleri anlayamayan koca platformlar var. Sosyal medya, e-posta istemcileri, Word belgeleri, baskı uygulamaları ve gerçek dünyadaki yazılımların büyük çoğunluğu rasterleştirilmiş görüntülerle çalışır. <strong>JPG</strong> evrensel ortak paydadır: istisnasız her yerde kabul edilir, eklenti gerektirmez ve ek dönüştürmeye ihtiyaç duymaz.',
  },
  {
    type: 'title',
    text: 'SVG mi JPG mi? Vektörün Fotoğrafa Dönüşmesi Gerektiğinde',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG, görüntüyü matematiksel talimatlar olarak saklar. Bu vektör yapısı onu web için mükemmel kılar ancak analog dünya ve eski yazılımlar için görünmez yapar. E-posta ile gönderilen bir SVG dosyası, alıcının istemcisinde anlaşılmaz XML metni olarak görünebilir. Bir Word belgesine eklenen SVG, Office\'in eski sürümlerinde hiç işlenmeyebilir.',
  },
  {
    type: 'paragraph',
    html: 'JPG, her görüntüyü JPEG algoritmasıyla sıkıştırılmış renk bilgisine sahip bir piksel matrisine dönüştürür. Alfa kanalını desteklemediği için dönüştürücü, arka planı otomatik olarak düz beyazla birleştirir. Buna karşılık, <em>gezegendeki her cihazda</em> açılabilen bir dosya elde edersiniz: eski cep telefonları, yazıcılar, akıllı TV\'ler, yirmi yıl öncesinin düzenleme uygulamaları. Bu, en küçük ortak payda formatıdır ve birçok bağlamda en değerlisidir.',
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
          'SVG kodunuz (tescilli tasarım verileriyle birlikte) harici sunuculara gider',
          'Yazı tiplerinin ve degradelerin tutarsız işlenmesi',
          'Her dönüştürme için internet bağlantısı gerekir',
          'JPG çıktı kalitesi her zaman yapılandırılamaz',
        ],
      },
      {
        title: 'Yerel Mimarimiz',
        description: 'Vanilla JS teknolojisini kullanarak doğrudan donanımınızda işleme.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'SVG\'nizin sıfır baytı tarayıcıdan ayrılır',
          'Yerel tarayıcı motorunu kullanarak aslına sadık işleme',
          'Maksimum netlik için 2 kat çözünürlüklü JPG',
          'JPG standardına göre beyaz arka plan otomatik olarak uygulanır',
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
    html: 'SVG dosyası tarayıcının <strong>Image</strong> öğesine yüklenir ve bu öğe XML\'i yorumlamak için kendi vektör işleme motorunu kullanır. Görsel sonuç, çıktı çözünürlüğünü maksimize etmek için çift ölçekte, önceden beyaz arka plan dolgusuyla (JPG şeffaflığı desteklemediği için gereklidir) bir <strong>HTML5 Canvas</strong> üzerine çizilir.',
  },
  {
    type: 'paragraph',
    html: '<code>toDataURL(\'image/jpeg\', 0.92)</code> yöntemi, tuval piksellerini yüksek kaliteli bir JPG dosyasına dönüştürür. SVG renkleri, JPEG sıkıştırmasındaki renk alanı dönüşümü nedeniyle hafif farklılıklar gösterebilir. Bu nedenle, renk doğruluğunun kritik olduğu profesyonel baskı işlerinde kullanmadan önce sonucu önizlemek tavsiye edilir.',
  },
  {
    type: 'tip',
    title: 'Baskı kullanımı için ipucu',
    html: 'SVG arka planları ve degradeleri, JPEG sıkıştırmasındaki renk profili farkları nedeniyle JPG\'de biraz farklı görünebilir. Bir yazıcıya göndermeden veya tam marka renk doğruluğunun önemli olduğu basılı pazarlama materyallerinde kullanmadan önce sonucu her zaman önizleyin.',
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
      'SVG logolarını ve illüstrasyonlarını Facebook, Twitter veya LinkedIn\'de paylaşma.',
      'Outlook veya Gmail aracılığıyla e-postalara vektör grafikleri ekleme.',
      'SVG tasarımlarını Word belgelerine, Excel\'e veya sunumlara yerleştirme.',
      'SVG desteği olmayan çevrimiçi mağazalarda ürün görselleri yayınlama.',
      'İsteğe bağlı baskı hizmetleri için dosyalar hazırlama.',
    ],
  },
  {
    type: 'title',
    text: 'Sonuç',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Gerçek dünya hala piksellerle konuşuyor. Bu araç, SVG vektörlerinizi saniyeler içinde yüksek çözünürlüklü işlemeyle ve tescilli tasarımlarınız tarayıcınızdan hiç ayrılmadan evrensel JPG diline çevirir.',
  },
];


export const content: SvgAJpgLocaleContent = {
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
