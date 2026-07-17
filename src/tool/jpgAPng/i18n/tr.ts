import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAPngLocaleContent } from '../index';

const slug = 'jpg-png-donusturucu';
const title = 'Online ve Ücretsiz JPG\'den PNG\'ye Dönüştür';
const description =
  'Dosya yüklemeden tarayıcınızda JPG görüntülerini PNG\'ye dönüştürün. Kayıpsız, ücretsiz ve tamamen özel dönüşüm.';

const ui: ImageConverterUI = {
  dragText: 'JPG dosyalarını buraya sürükleyin...',
  convertText: 'Anında PNG\'ye dönüştürmek için',
  selectFiles: 'Dosyaları seçin',
  processedFiles: 'İşlenen dosyalar',
  downloadAll: 'Tümünü İndir (.zip)',
  pending: 'Bekliyor',
  bibliographyTitle: 'Bibliyografik Referanslar',
  faqTitle: 'Sıkça Sorulan Sorular',
};

const faq: JpgAPngLocaleContent['faq'] = [
  {
    question: 'JPG\'den PNG\'ye dönüştürmeyi ne zaman kullanmalıyım?',
    answer:
      'Bir fotoğrafın içindeki metni veya logoları düzenleyeceğiniz zaman. Bir JPG dosyasını birden çok kez kaydederseniz, o dosya bozulur. PNG ise sıkıştırmayı dondurur.',
  },
  {
    question: 'PNG dosyası hemen şeffaf bir arka plana sahip olacak mı?',
    answer:
      'Hayır. Orijinal JPG dosyası düzdü ve bu tür bir yapısal kanala sahip değildi. Elde edilen PNG bu alanı hazırlayacaktır, ardından Photoshop veya başka bir düzenleyici kullanarak parçayı izole etmeniz gerekecektir.',
  },
  {
    question: 'Bu web sitesinin trafik sınırları var mı?',
    answer:
      'Bulut bağımlılığı olmayan Edge teknolojileri sayesinde, dönüşümünüzün boyutu herhangi bir sınır oluşturmaz çünkü tamamen bilgisayarınızı veya mobil terminalinizi kullanır.',
  },
];

const howTo: JpgAPngLocaleContent['howTo'] = [
  {
    name: 'JPG\'yi panele sürükleyin',
    text: 'Fare veya bilgisayar seçici kullanarak JPG formatındaki statik görüntüleri yükleyin.',
  },
  {
    name: 'Kayıpsız Yürütme',
    text: 'Vanilla yazılımı, görüntünün bitlerini PNG ailesine özgü kayıpsız bir kılıfa iter.',
  },
  {
    name: 'Oturanı Bitir',
    text: 'Panele tıkladığınızda tarayıcınız indirilen web varlıklarını Kullanıcı Klasörlerinize bırakacaktır.',
  },
];

const seo: JpgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'JPG\'den PNG\'ye Dönüştürücü: Kayıpsız Düzenleme ve Şeffaflık',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> fotoğraf makinesi fotoğrafları için rakipsizdir, ancak bir zayıf noktası vardır: dosyayı her kaydettiğinizde kayıplı sıkıştırmasını yeniden uygular, kenarları ve geçişleri kademeli olarak bozar. <strong>PNG</strong> kayıpsız sıkıştırma kullanır; bir kez kaydedildiğinde pikseller değişmez. Bir JPG görüntüsünü PNG\'ye dönüştürmek, bir görüntüyü yoğun düzenleme için hazırlamanız, şeffaf bir arka plan eklemeniz veya birden fazla kaydetme gerektiren bir tasarım akışına entegre etmeniz gerektiğinde kilit işlemdir.',
  },
  {
    type: 'title',
    text: 'JPG mi PNG mi? Her formatı ne zaman kullanmalı?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> fotoğrafçılığın kralıdır: düşük boyut, her şeyle uyumlu. Ancak sıkıştırma kusurları her düzenleme ve yeniden kaydetme ile birikir. Bir görüntüyü tekrar tekrar kırpmanız, rötuşlamanız veya metin eklemeniz gerekiyorsa, JPG\'den başlamak her döngüde bozulma eklemek anlamına gelir. Ayrıca, JPG dosyasında alfa kanalı yoktur: şeffaf arka planlara sahip olamaz, bu da onu logolar, simgeler ve kullanıcı arayüzü (UI) öğeleri için diskalifiye eder.',
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> kurumsal logolar, net metin içeren ekran görüntüleri, arayüz öğeleri, daha sonra kırpmanız gerekecek beyaz arka planlı ürün görselleri veya birden fazla kez düzenlenecek herhangi bir grafik kaynağı için doğru seçimdir. Kayıpsız sıkıştırma, metin kenarlarının mükemmel bir şekilde tanımlanmış kalmasını ve düz renklerin JPEG paraziti olmadan saf kalmasını garanti eder.',
  },
  {
    type: 'title',
    text: 'Karşılaştırma: Yerel Dönüşüm vs Bulut',
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
          'Görüntüleriniz başkalarının sunucularında kalır',
          'Boyut ve günlük dönüşüm sınırları',
          'Müdahaleci reklamlar ve üçüncü taraf izleyiciler',
        ],
      },
      {
        title: 'Yerel Mimarimiz',
        description: 'Vanilla JS teknolojisi ile doğrudan donanımınızda işleme.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Anında hız - sıfır ağ gecikmesi',
          'Tam gizlilik - dışarıya 0 bayt gönderilir',
          'MB veya dosya sayısı sınırı yok',
          'Reklam veya izleme içermeyen temiz arayüz',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Teknik Olarak Nasıl Çalışır?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Süreç tamamen yereldir: tarayıcı seçilen JPG ile bir <strong>Blob</strong> oluşturur ve bunu bellekteki bir <strong>Canvas HTML5</strong> üzerine çizer. Oluşturulduktan sonra <code>toDataURL(\'image/png\')</code> çağrılır - tarayıcıya entegre PNG kodeği, herhangi bir yeni kayıplı sıkıştırma uygulamadan her pikseli yeniden kodlar. Sonuç, JPG\'nin mevcut durumunu sadık bir şekilde koruyan bir PNG\'dir: ne daha iyi ne daha kötü, sadece dondurulmuş halidir.',
  },
  {
    type: 'paragraph',
    html: 'Elde edilen PNG, Photoshop veya GIMP gibi profesyonel araçlarda kullanılan kayıpsız DEFLATE sıkıştırmasını kullanacaktır. Boyutu, tüm pikselleri bilgi atmadan sakladığı için orijinal JPG\'den - genellikle 2 ila 5 kat - daha büyük olacaktır. Bu, aslına uygunluk ve sonsuz düzenlenebilirlik için ödenen bedeldir.',
  },
  {
    type: 'tip',
    title: 'Önemli: PNG, JPEG kalitesini geri getirmez',
    html: 'Bir JPG görüntüsünü PNG\'ye dönüştürmek, orijinal JPEG sıkıştırması sırasında <strong>kaybedilen kaliteyi geri getirmez</strong>. JPG dosyanızda blok kusurları veya renk paraziti varsa, PNG bunları bozulmadan koruyacaktır - sadece daha fazlasının eklenmesini engeller. Dönüşümü, görüntünün mevcut durumunu "dondurmak" olarak düşünün, böylece gelecekteki düzenlemeler görüntüyü daha fazla bozmaz.',
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
      'Kırpma işleminden sonra şeffaf arka plana ihtiyaç duyan logolar ve marka öğeleri.',
      'Metin içeren ve birden çok kez düzenlenip yeniden kaydedilecek ekran görüntüleri.',
      'E-ticaret için temiz ve kırpılabilir beyaz arka plan gerektiren ürün görselleri.',
      'PowerPoint veya Google Slaytlar sunumları için grafik kaynakları.',
      'Kenar netliğinin kritik olduğu web ve mobil uygulamalar için kullanıcı arayüzü (UI) varlıkları.',
    ],
  },
  {
    type: 'title',
    text: 'Sonuç',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'JPG\'den PNG\'ye dönüştürme, her ciddi tasarım iş akışındaki ilk adımdır. Orijinal kaliteyi değiştirmez, ancak her pikseli gelecekteki düzenlemelerden korur. Bu araçla süreç anında ve tamamen özel olarak gerçekleşir, kurumsal veya kişisel görüntüleriniz cihazınızdan hiçbir zaman çıkmaz.',
  },
];


export const content: JpgAPngLocaleContent = {
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
