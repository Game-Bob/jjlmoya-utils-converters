import { bibliography } from '../bibliography';
import type { ImagenBase64LocaleContent } from '../index';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { ImageToBase64UI } from '../index';

const slug = 'goruntuden-base64-e-donusturucu';
const title = 'Görüntüden Base64\'e Online Dönüştürücü';
const description =
  'Herhangi bir görüntüyü doğrudan tarayıcınızda Base64 koduna ve Data URI\'ye dönüştürün. Dosya yüklemesi yok. Ücretsiz, özel ve anında.';

const ui: ImageToBase64UI = {
  dragTitle: 'Görüntünüzü buraya sürükleyin',
  dragSubtext: 'veya dosyalarınıza göz atmak için tıklayın',
  formatBadge: 'JPG, PNG, WEBP, SVG, GIF destekler',
  dataUriLabel: 'Data URI (CSS / HTML src="" için hazır)',
  base64Label: 'Yalnızca Base64 (Düz kodlanmış metin)',
  copyBtn: 'Kopyala',
  dataUriPlaceholder: 'Data URI kodunu görmek için bir görüntü yükleyin...',
  base64Placeholder: 'Saf Base64 kodunu görmek için bir görüntü yükleyin...',
  toastMessage: 'Kod panoya kopyalandı!',
  invalidImageAlert: 'Lütfen geçerli bir görüntü dosyası yükleyin.': 'Bibliyografik Referanslar',
  faqTitle: 'Sıkça Sorulan Sorular',
};

const faq: ImagenBase64LocaleContent['faq'] = [
  {
    question: 'Base64 nedir ve web geliştirmede ne için kullanılır?',
    answer:
      'Base64, ikili verileri bir ASCII metin dizisine dönüştüren bir kodlama sistemidir. Web geliştirmede, görüntüleri Data URI\'ler aracılığıyla doğrudan HTML veya CSS dosyalarına gömerek sunucuya yapılan HTTP isteklerinin sayısını azaltmak için kullanılır.',
  },
  {
    question: 'Görüntülerimi burada Base64\'e dönüştürmek güvenli mi?',
    answer:
      'Kesinlikle güvenli ve özel. Aracımız tarayıcınızda %100 yerel olarak çalışır. Görüntüleriniz asla harici bir sunucuya yüklenmez veya işlenmez.',
  },
  {
    question: 'Base64 dönüştürücü hangi görüntü formatlarını destekler?',
    answer:
      'Araç JPG, PNG, GIF, WebP ve hatta SVG vektör dosyalarıyla uyumludur. Görüntü yüklendiğinde, tam Data URI kodunu oluşturmak için MIME türünü otomatik olarak algılar.',
  },
  {
    question: 'Base64 görüntüleri ne zaman kullanmamalıyım?',
    answer:
      'Büyük fotoğraflar veya yüksek çözünürlüklü görüntüler için Base64 görüntüleri kullanmaktan kaçınmalısınız. Base64 kodu, orijinal ikili dosyadan yaklaşık %33 daha fazla yer kaplar ve bu da CSS stil sayfalarınızı veya HTML belgelerinizi aşırı derecede şişirebilir.',
  },
];

const howTo: ImagenBase64LocaleContent['howTo'] = [
  {
    name: 'Görüntünüzü Sürükleyin veya Seçin',
    text: 'Dönüştürmeyi başlatmak için herhangi bir görüntüyü (JPG, PNG, WebP, SVG, GIF) yükleme alanına taşıyın.',
  },
  {
    name: 'Oluşturulan Kodu Kopyalayın',
    text: 'İki metin alanı göreceksiniz: tam Data URI (src="" veya CSS\'de kullanıma hazır) ve diğer kullanımlar için saf Base64.',
  },
  {
    name: 'Kodu Projenizde Kullanın',
    text: 'Data URI\'yi, harici dosyalara ihtiyaç duymadan bir img etiketinin src\'sine veya CSS\'nize background-image olarak doğrudan yapıştırın.',
  },
];

const seo: ImagenBase64LocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Görüntüden Base64\'e Dönüştürücü: HTTP İstekleri Olmadan Görüntüleri Gömün',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Base64, bir görüntü gibi ikili verileri saf bir ASCII metin dizisine dönüştüren bir kodlama tekniğidir. Sonuç bir Data URI\'dir: <code>data:image/png;base64,...</code> ile başlayan ve kodlanmış görüntünün tamamını içeren bağımsız bir URL. Bu kodu doğrudan HTML, CSS veya JSON\'unuza gömerek, görüntü sunucuya ek bir HTTP isteği olmadan yüklenir; sıfır ağ gecikmesi, anında yükleme.',
  },
  {
    type: 'title',
    text: 'Base64 görüntüleri ne zaman kullanılır',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Base64 lehine en büyük argüman, ağ isteklerinin ortadan kaldırılmasıdır. Bir web sayfasındaki her görüntü, bağlantı, DNS, TLS anlaşması ve gecikme yüküyle birlikte bir HTTP isteği anlamına gelir. Çok küçük kritik görüntüler (ana uygulama logosu, favicon, bir kullanıcı arayüzü simgesi) için bunları CSS veya HTML\'de Base64 olarak gömmek bu maliyeti ortadan kaldırır ve tarayıcı henüz hiçbir şeyi önbelleğe almadan önce anında görüntülenmelerini garanti eder.',
  },
  {
    type: 'paragraph',
    html: 'Bu teknik, JavaScript ve CSS paketinin derleme zamanında oluşturulduğu SPA (Tek Sayfalı Uygulama) uygulamalarında özellikle güçlüdür: küçük görüntüleri pakete gömmek, ek istekler olmadan kodla birlikte yüklenmelerini garanti eder. Ayrıca, posta istemcilerinin harici görüntüleri engellediği ancak gömülü Data URI\'leri neredeyse her zaman görüntülediği HTML e-postaları için de vazgeçilmezdir.',
  },
  {
    type: 'title',
    text: 'Base64 görüntüleri için kullanım durumları',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'HTML satır içi: Kritik simgeler için <code>&lt;img src="data:image/png;base64,..."&gt;</code>.',
      'CSS arka planı: Kullanıcı arayüzü SVG\'leri için <code>background-image: url("data:image/svg+xml;base64,...")</code>.',
      'JSON ve REST API\'ler: Görüntüleri JSON yüklerinde metin verisi olarak gönderin.',
      'HTML e-postaları: İstemci harici URL\'leri engellediğinde bile görüntülenen gömülü görüntüler.',
      'SVG gömme: Raster görüntüleri satır içi veri olarak SVG dosyalarının içine gömün.',
    ],
  },
  {
    type: 'title',
    text: 'Dönüşüm tarayıcıda nasıl çalışır',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Bir görüntü seçtiğinizde veya sürüklediğinizde, tarayıcının <code>FileReader</code> API\'si görüntüyü doğrudan diskten RAM\'deki ikili veriler olarak okur. <code>readAsDataURL()</code> yöntemi, bu ikili baytları RFC 4648 algoritmasını kullanarak Base64 gösterimlerine dönüştürür; orijinal verilerin her 3 baytı Base64 alfabesinden 4 ASCII karakteri olarak temsil edilir. Sonuç, otomatik olarak algılanan doğru MIME türünü içerir.',
  },
  {
    type: 'tip',
    title: 'Yalnızca küçük görüntüler için kullanın (10 KB\'ın altında)',
    html: 'Base64 dosya boyutunu yaklaşık %33 artırır: 10 KB\'lık bir görüntü ~13,3 KB mtn haline gelir. Küçük simgeler ve logolar için bu maliyet minimumdur ve HTTP isteğinin ortadan kaldırılması bunu telafi eder. Fotoğraflar veya büyük görüntüler için boyut yükü önemlidir; büyük görüntüler için her zaman bir CDN kullanın.',
  },
  {
    type: 'title',
    text: 'Base64 ne zaman KULLANILMAZ',
    level: 3,
  },
  {
    type: 'tip',
    title: 'Büyük görüntüler için Base64\'ten kaçının — bunun yerine bir CDN kullanın',
    html: '10-20 KB\'tan daha büyük görüntüleriniz varsa, Base64 performansa zarar verir: HTML/CSS boyutunu şişirir, tarayıcının görüntüyü bağımsız olarak önbelleğe almasını engeller ve ayrıştırıcı devasa dizeyi işlerken oluşturmayı engeller. Büyük görüntüler için her zaman uygun önbellek başlıklarına sahip bir CDN\'den sunun.',
  },
  {
    type: 'title',
    text: 'Uyumluluk ve gizlilik',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Data URI\'ler, modern tarayıcıların %100\'ü ve çoğu e-posta istemcisiyle uyumludur. Aracımız her şeyi FileReader API aracılığıyla yerel olarak işler; görüntüleriniz asla cihazınızdan ayrılmaz. Bu, kurumsal görüntüler, özel ekran görüntüleri veya Base64\'e dönüştürmeniz gereken herhangi bir gizli görsel içerik için uygun hale getirir.',
  },
  {
    type: 'title',
    text: 'Sonuç: En hızlı ve en özel gömme aracı',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Görüntüleri Base64\'e dönüştürmek, doğru uygulandığında hedeflenen ancak çok güçlü bir tekniktir. Sıfır HTTP isteğinin fark yarattığı küçük, kritik görüntüler için kullanın ve bir CDN\'nin her zaman kazandığı büyük görüntüler için bundan kaçının. Aracımızla, herhangi bir sunucuya hiçbir şey yüklemeden anında Data URI alırsınız.',
  },
];


export const content: ImagenBase64LocaleContent = {
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
