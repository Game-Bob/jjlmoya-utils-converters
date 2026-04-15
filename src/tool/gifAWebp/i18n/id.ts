import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAWebpLocaleContent } from '../index';

const slug = 'konverter-gif-ke-webp';
const title = 'Konversi GIF ke WebP statis Online';
const description =
  'Konversi GIF animasi ke WebP statis. Mempertahankan transparansi. Tanpa server. Diproses secara lokal di browser Anda. Gratis.';

const ui: ImageConverterUI = {
  dragText: 'Tarik file GIF...',
  convertText: 'Untuk mengonversinya ke WebP secara instan',
  selectFiles: 'Pilih file',
  processedFiles: 'File yang diproses',
  downloadAll: 'Unduh Semua (.zip)',
  pending: 'Tertunda',
  bibliographyTitle: 'Referensi Bibliografi',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
};

const faq: GifAWebpLocaleContent['faq'] = [
  {
    question: 'Mengapa membekukan file animasi ke format WebP statis modern?',
    answer:
      'WebP adalah standar kompresi Google; ini sangat ringan dan mempertahankan transparansi dengan bersih. Beralih dari GIF ke WebP menghilangkan animasi yang berat dan menghasilkan peningkatan kecepatan web yang luar biasa.',
  },
  {
    question: 'Apakah avatar asli akan tetap transparan?',
    answer:
      'Ya, tidak seperti JPEG, kontainer WebP menghormati saluran Alpha yang kompleks. Semua siluetnya akan tetap sempurna seperti aslinya.',
  },
  {
    question: 'Ke mana file akan diunggah?',
    answer:
      'Tidak ada pengunggahan. Pemrosesan dilakukan sepenuhnya oleh Javascript browser di PC Anda, dengan nol pengiriman jarak jauh.',
  },
];

const howTo: GifAWebpLocaleContent['howTo'] = [
  {
    name: 'Luncurkan longsoran animasi',
    text: 'Pindahkan dan letakkan puluhan meme ke zona yang ditentukan tanpa koneksi jarak jauh.',
  },
  {
    name: 'Saksikan perubahan besar yang tak terlihat',
    text: 'Lihat indikator progresif berubah setiap milidetik saat dekoder canvas lokal menghasilkan output.',
  },
  {
    name: 'Simpan gudang hasil bersih Anda',
    text: 'Ambil file yang diekstrak satu per satu atau tekan Unduh Zip untuk mengemas semuanya.',
  },
];

const bibliography: GifAWebpLocaleContent['bibliography'] = [
  {
    name: 'Spesifikasi GIF89a',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
  {
    name: 'Dokumentasi Google WebP',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: GifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverter GIF ke WebP: Pengganti Modern untuk Animasi Berat',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'GIF animasi adalah dinosaurus konten web modern: mereka mengonsumsi bandwidth yang tidak proporsional, memperburuk PageSpeed halaman mana pun, dan bertanggung jawab atas persentase berat total yang signifikan di ribuan situs web. GIF animasi 5 MB yang khas dapat menjadi animasi WebP di bawah 1 MB dengan kualitas visual yang sama. WebP adalah penerus modern yang dirancang khusus oleh Google untuk menggantikan GIF di web.',
  },
  {
    type: 'title',
    text: 'GIF vs WebP: kesenjangan antara masa lalu dan masa kini web',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIF adalah format dari tahun 1987 yang awalnya tidak dirancang untuk animasi — fitur tersebut datang sebagai "hack" kemudian. Palet 256 warnanya, kompresi yang tidak efisien, dan ketidakmampuan untuk menangani audio menjadikannya format yang usang. WebP, yang dikembangkan oleh Google pada tahun 2010, menawarkan kompresi superior baik lossy maupun lossless, dukungan animasi asli, dan saluran alpha penuh.',
  },
  {
    type: 'paragraph',
    html: 'Bagi pengembang web, mengganti GIF dengan WebP pada halaman dapat berarti peningkatan skor Google PageSpeed sebesar 10 hingga 30 poin. Berat halaman yang lebih sedikit berarti Core Web Vitals yang lebih baik, peringkat SEO yang lebih baik, dan biaya bandwidth yang lebih rendah di server. Ini bukan sekadar peningkatan estetika — ini adalah keputusan arsitektur teknis.',
  },
  {
    type: 'title',
    text: 'Perbandingan Arsitektur: Lokal vs Cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Konverter Cloud',
        description: 'Platform yang memproses GIF Anda di server jarak jauh.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Animasi Anda dikirim melalui internet ke server pihak ketiga',
          'Waktu tunggu karena latensi jaringan saat pengunggahan dan pengunduhan',
          'Batasan ukuran (GIF besar sering ditolak)',
          'Risiko retensi dan analisis file',
        ],
      },
      {
        title: 'Arsitektur Lokal Kami',
        description: 'Pemrosesan langsung pada perangkat keras Anda menggunakan teknologi Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'GIF tidak pernah meninggalkan perangkat Anda',
          'Konversi instan tanpa menunggu jaringan',
          'Tidak ada batasan ukuran: proses GIF dengan berat apa pun',
          'Privasi total: 0 byte dikirim secara eksternal',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Bagaimana cara kerja konversi GIF ke WebP lokal',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Konversi lokal menggunakan HTML5 Canvas API. GIF dimuat sebagai elemen Gambar browser asli. Dengan menggambarnya ke kanvas, mesin grafis menangkap bingkai animasi pertama dengan semua informasi transparansinya. Metode <code>toDataURL(\'image/webp\')</code> mengekspor bingkai sebagai WebP langsung di RAM.',
  },
  {
    type: 'paragraph',
    html: 'WebP mendukung saluran alpha penuh, sehingga transparansi GIF dipertahankan dalam WebP yang dihasilkan tanpa perlu menambahkan latar belakang. Algoritme kompresi WebP jauh lebih efisien daripada GIF atau PNG, yang menjelaskan pengurangan ukuran file yang drastis dari output akhir.',
  },
  {
    type: 'tip',
    title: 'Peningkatan PageSpeed yang dijamin',
    html: 'GIF animasi 5 MB bisa menjadi WebP di bawah 1 MB. Jika Anda memiliki GIF di halaman situs web Anda, menggantinya dengan WebP dapat segera meningkatkan Largest Contentful Paint (LCP) dan Total Blocking Time (TBT) Anda, yang berdampak langsung pada peringkat SEO.',
  },
  {
    type: 'title',
    text: 'Kasus penggunaan dan kompatibilitas WebP yang dihasilkan',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Mengganti GIF di halaman web untuk meningkatkan skor PageSpeed.',
      'Avatar dan stiker yang dioptimalkan untuk Discord, Slack, dan platform modern.',
      'Banner dan visual untuk kampanye pemasaran digital.',
      'Animasi dalam aplikasi web progresif (PWA).',
      'Kompatibel dengan Chrome, Edge, Firefox, Safari 14+ dan semua browser modern.',
    ],
  },
  {
    type: 'title',
    text: 'Kesimpulan: migrasikan GIF Anda ke abad ke-21',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Setiap GIF di situs web Anda adalah peluang optimasi yang terlewatkan. Alat kami mengonversi GIF ke WebP secara instan, privat, dan tanpa batasan, langsung di browser Anda. Hasilnya: file hingga 5 kali lebih kecil, transparansi sempurna, dan kompatibilitas dengan semua browser modern.',
  },
];


export const content: GifAWebpLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'id', faq, howTo }),
};
