import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'goruntu-donusturuculer',
  title: 'Çevrimiçi Görüntü Dönüştürücüler',
  description: 'PNG, JPG, WebP, SVG, AVIF, GIF, BMP ve ICO formatları arasında görüntüleri dönüştürmek için ücretsiz araçlar. Her şey internete yüklenmeden tarayıcınızda yerel olarak işlenir.',
  seo: [
    {
      type: 'summary',
      title: 'Neden bizim dönüştürücülerimizi kullanmalısınız?',
      items: [
        '%100 yerel dönüştürme: görüntüleriniz asla cihazınızdan çıkmaz.',
        '21 format kombinasyonu desteği: PNG, JPG, WebP, SVG, AVIF, GIF, BMP ve ICO.',
        'ZIP indirme ile toplu işleme.',
        'Kayıt yok, sınır yok, rahatsız edici reklamlar yok.',
      ],
    },
    {
      type: 'title',
      text: 'Görüntü Dönüştürme: Eksiksiz Format Kılavuzu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Doğru görüntü formatını seçmek web performansı, cihaz uyumluluğu ve algılanan görsel kalite üzerinde doğrudan etkiye sahiptir. <strong>Çevrimiçi görüntü dönüştürücülerimiz</strong>, tasarımcılar, web geliştiricileri ve fotoğrafçılar tarafından en çok talep edilen dönüştürme yollarını kapsar ve bunların hiçbiri dosyalarınızın gizliliğini tehlikeye atabilecek harici sunuculara dayanmaz.',
    },
    {
      type: 'title',
      text: 'PNG, JPG ve WebP: Modern Web Tasarımının Üç Temel Taşı',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>PNG formatı</strong>, kayıpsız sıkıştırma ve şeffaflık desteği (alfa kanalı) ile öne çıkar; logolar, simgeler ve keskin kenarlı grafikler için standarttır. <strong>JPG formatı</strong>, fotoğraflar için maksimum evrensel uyumluluk ve küçültülmüş boyutlar sunar, ancak her kayıtta kaliteden ödün verir. Google tarafından geliştirilen <strong>WebP formatı</strong>, her ikisinin de en iyisini birleştirir: şeffaflık ve animasyon desteğiyle PNG/JPG\'den %30-40 daha iyi sıkıştırma sağlar; şu anda LCP\'yi iyileştirmek için Core Web Vitals tarafından önerilen formattır.',
    },
    {
      type: 'table',
      headers: ['Format', 'Şeffaflık', 'Sıkıştırma', 'En iyi kullanım'],
      rows: [
        ['PNG', 'Evet', 'Kayıpsız', 'Logolar, grafikler, ekran görüntüleri'],
        ['JPG', 'Hayır', 'Kayıplı', 'Fotoğraflar, büyük görüntüler'],
        ['WebP', 'Evet', 'Kayıpsız/Kayıplı', 'Modern web, performans'],
        ['SVG', 'Evet', 'Vektör', 'Ölçeklenebilir simgeler, animasyonlar'],
        ['AVIF', 'Evet', 'Üstün', 'Yeni nesil web'],
        ['ICO', 'Evet', 'Bitmap', 'Faviconlar, Windows simgeleri'],
      ],
    },
    {
      type: 'title',
      text: 'Yeni Nesil Formatlar: AVIF ve WebP',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>AVIF formatı</strong> (AV1 Image File Format), WebP\'nin teknolojik halefidir ve eşit sübjektif kalitede JPG\'den %50\'ye kadar daha küçük dosya boyutu sunar. Benimsenmesi hızla artsa da, eski sistemlerdeki sınırlı uyumluluk, AVIF\'in JPG, PNG veya WebP gibi daha yerleşik formatlara dönüştürülmesini üretim iş akışlarında sık görülen bir ihtiyaç haline getirir.',
    },
    {
      type: 'tip',
      title: 'Web performansı ipucu',
      html: 'Sayfa yükleme hızını en üst düzeye çıkarmak için, web sitenizde birincil format olarak WebP kullanın ve eski tarayıcılar için JPG/PNG yedekleri (fallbacks) ekleyin. Birden fazla <code>source</code> etiketine sahip HTML <code>picture</code> öğesi, ziyaret eden tarayıcının desteğine göre en uygun formatı sunmanıza olanak tanır.',
    },
    {
      type: 'title',
      text: 'SVG, BMP ve ICO: Özel Kullanım Durumları',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>SVG dosyaları</strong>, herhangi bir çözünürlüğe kayıpsız bir şekilde ölçeklenen matematiksel vektörlerdir; logolar ve grafik tasarım için mükemmeldir. Ancak birçok platform ve düzenleme uygulaması bunları doğrudan desteklemez, bu da dağıtım için PNG veya JPG\'ye rasterleştirilmesini gerekli kılar. <strong>BMP dosyaları</strong>, web kullanımı için modası geçmiş olsa da, Windows ortamlarında ve eski düzenleme yazılımlarında yaygınlığını korumaktadır. Son olarak, <strong>ICO formatı</strong>, dönüştürücümüzün yerel olarak oluşturduğu özel bir ikili başlık yapısı gerektiren web faviconları ve Windows simge özelleştirmesi için standarttır.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { label: 'Kombinasyonlar', value: '21', icon: 'mdi:image-sync' },
        { label: 'Gizlilik', value: '%100 yerel', icon: 'mdi:shield-lock' },
        { label: 'Formatlar', value: '8 tip', icon: 'mdi:file-image' },
      ],
    },
    {
      type: 'title',
      text: 'Tam Gizlilik: Sunucusuz Dönüştürme',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Görüntülerinizi uzak sunuculara yükleyen diğer çevrimiçi araçların aksine (bunun getirdiği gizlilik ve güvenlik riskleriyle birlikte), dönüştürücülerimiz yalnızca yerel tarayıcı API\'lerini kullanır: rasterleştirme için <strong>Canvas 2D API</strong>, dosyaları yerel olarak okumak için <strong>FileReader API</strong> ve indirmeler için <strong>Blob/URL.createObjectURL</strong>. Bu, gizli görüntüleri, kurumsal logoları veya özel belgeleri tam güvenlikle dönüştürebileceğiniz anlamına gelir.',
    },
  ],
};
