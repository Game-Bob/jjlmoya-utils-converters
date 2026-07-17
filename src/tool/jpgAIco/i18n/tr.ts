import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAIcoLocaleContent } from '../index';

const slug = 'jpg-den-ico-ya-donusturucu';
const title = 'JPG\'den ICO\'ya Dönüştürücü';
const description =
  'JPG fotoğrafları gerçek Microsoft ikili üstbilgileriyle ICO\'ya dönüştürün. Otomatik kare kırpma. Dosya yüklemesi yok. Ücretsiz ve özel.';

const ui: ImageConverterUI = {
  dragText: 'JPG dosyalarını sürükleyin...',
  convertText: 'Onları anında ICO\'ya dönüştürmek için',
  selectFiles: 'Dosyaları seçin',
  processedFiles: 'İşlenmiş dosyalar',
  downloadAll: 'Tümünü İndir (.zip)',
  pending: 'Bekliyor',
  bibliographyTitle: 'Bibliyografik Referanslar',
  faqTitle: 'Sıkça Sorulan Sorular',
};

const faq: JpgAIcoLocaleContent['faq'] = [
  {
    question: 'Elde edilen ICO dosyası Windows klasörlerini özelleştirmek için yerel olarak uyumlu mu?',
    answer:
      'Evet, görüntü matrisine düşük düzeyde standardize edilmiş bir ikili üstbilgi ekleyerek %100 orijinal bir Microsoft Simge Formatı dosyası oluşturuyoruz.',
  },
  {
    question: 'Orijinal JPG dosyam panoramik yatay bir fotoğrafsa orana ne olur?',
    answer:
      'Katı küresel ICO standardı kesinlikle mükemmel bir kare görüntü gerektirir. HTML5 JS motorumuz fotoğrafınızı merkeze alacak ve fazlalığı kırparak dengeli bir sonuç garanti edecektir.',
  },
  {
    question: 'Kurumsal veya kişisel JPG logolarını dönüştürücüye yüklemek tehlikeli mi?',
    answer:
      'JavaScript\'teki Canvas motoru kendi tarayıcınızda çalışır. Yüzlerce fotoğrafın ICO\'ya dönüştürülmesi, şüpheli ülkelerdeki herhangi bir buluta tek bir megabayt bile göndermez.',
  },
];

const howTo: JpgAIcoLocaleContent['howTo'] = [
  {
    name: 'Orijinal JPG fotoğraflarını toplayın',
    text: 'Geleneksel fotoğrafları bulun ve toplayın ve onları dost canlısı karemize bırakarak yerleştirin.',
  },
  {
    name: 'İkili arındırmaya tanık olun',
    text: 'Yeniden kodlama, meta verileri ve üstbilgileri yerel ve hızlı bir şekilde asenkron olarak ekleyerek bellekte kesinlikle saf bir simge oluşturacaktır.',
  },
  {
    name: 'Birden fazla ZIP tasarımını derleyin',
    text: 'Saniyeler içinde her şeyi toplu olarak kompakt bir pakette indirerek işi bitirin.',
  },
];

const seo: JpgAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'JPG\'den ICO\'ya Dönüştürücü: Fotoğraflarınızdan Faviconlar ve Windows Simgeleri Oluşturun',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>ICO</strong> formatı, Microsoft\'un Windows uygulama simgeleri ve web sitesi faviconları için standarttır. Bir JPG\'yi sadece .ico olarak yeniden adlandırmanın aksine, gerçek bir ICO dosyası 22 baytlık üstbilgiler ve gömülü bir görüntü dizini ile belirli bir ikili yapı gerektirir. <strong>JPG</strong>, bu simgeleri oluşturmak için en yaygın başlangıç noktasıdır; bir şirket logosu, bir profil fotoğrafı veya uygulamanızın veya web sitenizin görsel simgesine dönüştürmek istediğiniz herhangi bir görüntü.',
  },
  {
    type: 'title',
    text: 'JPG mi ICO mu? Her format ne zaman kullanılır',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> bir kaynak formattır, simgeler için bir hedef değildir. Fotoğraflar ve afişler için mükemmeldir, ancak simge gerektiren sistemlerle uyumsuzdur: Windows Dosya Gezgini, tarayıcının yer imi çubuğu, masaüstü kısayolları veya PWA uygulama manifestleri. Bir simge arayan işletim sistemi veya tarayıcı ICO formatını bekler ve eğer bulamazsa genel bir simge veya bozuk bir kare görüntüler.',
  },
  {
    type: 'paragraph',
    html: '<strong>ICO</strong> formatı, tek bir dosyada birden fazla çözünürlük içerecek şekilde tasarlanmıştır: Yer imi çubuğu için <strong>16×16</strong>, kısayollar için <strong>32×32</strong>, dosya gezgini için <strong>48×48</strong> ve yüksek yoğunluklu ekranlar için <strong>256×256</strong>. Tarayıcılar ve işletim sistemleri, görüntüleme bağlamına göre uygun çözünürlüğü otomatik olarak seçer; kullanıcının herhangi bir şeyi yönetmesi gerekmez.',
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
          'Yükleme ve indirmede ağ gecikmesi',
          'Kurumsal logolarınız üçüncü taraf sunucularda saklanır',
          'Dosya boyutu sınırları ve günlük dönüştürme kotaları',
          'Rahatsız edici reklamlar ve üçüncü taraf izleyiciler',
        ],
      },
      {
        title: 'Yerel Mimarimiz',
        description: 'Vanilla JS teknolojisini kullanarak doğrudan donanımınızda işleme.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Anında hız - sıfır ağ gecikmesi',
          'Tam gizlilik - harici olarak gönderilen 0 bayt',
          'MB sınırı veya dosya sayısı kısıtlaması yok',
          'Temiz arayüz, reklam veya izleme yok',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Teknik olarak nasıl çalışır',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'JPG kodu çözülür ve bellekteki bir <strong>HTML5 Canvas</strong> üzerine çizilir. ICO formatı kare bir görüntü gerektirdiğinden, motor JPG\'nin dikdörtgen olup olmadığını otomatik olarak algılar ve en ilgili kısmı merkeze alarak kırpar. Daha sonra doğru sihirli sayı (<code>00 00 01 00</code>), görüntü dizini und kodlanmış piksel verileriyle standart Microsoft ICO üstbilgisini oluşturur. Sonuç, yeniden adlandırılmış bir PNG değil, orijinal bir ikili .ico dosyasıdır.',
  },
  {
    type: 'paragraph',
    html: 'JPG\'de alfa kanalı bulunmadığından, elde edilen ICO\'da da şeffaflık olmayacaktır; orijinal fotoğraftan miras alınan düz bir arka plana sahip olacaktır. Şeffaf arka plana sahip bir favicon\'a ihtiyacınız varsa (örneğin, koyu veya açık yer imi çubuklarına uyum sağlamak için), önerilen iş akışı şudur: Arka planı bir düzenleyicide kaldırın, PNG olarak kaydedin und PNG\'den ICO\'ya dönüştürücüyü kullanın.',
  },
  {
    type: 'tip',
    title: 'İpucu: Tek bir ICO\'da birden fazla çözünürlük',
    html: 'ICO dosyaları, tek bir dosyada <strong>birden fazla çözünürlüğü</strong> paketleyebilir; tarayıcı veya işletim sistemi her bağlam için en uygun olanı otomatik olarak seçer. Mümkün olan en iyi sonuç için, kaynak olarak en az <strong>256×256 piksel</strong> boyutunda kare bir JPG kullanın: Bu, dönüştürücüye pikselleşme olmadan keskin 16×16, 32×32 und 48×48 boyutları üretmek için yeterli bilgi sağlar.',
  },
  {
    type: 'title',
    text: 'Kullanım durumları und uyumluluk',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Web sitesi favicon\'u: Internet Explorer dahil tüm tarayıcılarla uyumludur.',
      'Windows 10/11\'de klasör und masaüstü simgesi özelleştirme.',
      'Masaüstü uygulamaları veya yükleyiciler için kısayol simgesi.',
      'Electron projeleri veya PWA uygulamaları için uygulama simgesi.',
      'Dosya yönetim sistemleri und kurumsal dosya gezginleri için simgeler.',
    ],
  },
  {
    type: 'title',
    text: 'Sonuç',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Bir JPG\'yi ICO\'ya dönüştürmek, tanınabilir bir görsel kimliğe ihtiyaç duyan her web veya masaüstü projesi için teknik olarak temel bir adımdır. Bu araç, logonuzu herhangi bir harici sunucuya yüklemeden saniyeler içinde doğru ikili yapıya sahip orijinal ICO\'lar oluşturur. Sonuç tüm tarayıcılarda, Windows Dosya Gezgini\'nde und Microsoft\'un ICO standardını tüketen her sistemde çalışır.',
  },
];

export const content: JpgAIcoLocaleContent = {
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
