import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAWebpLocaleContent } from '../index';

const slug = 'konverter-bmp-ke-webp';
const title = 'Ubah BMP ke WebP Gratis';
const description =
  'Ubah gambar BMP ke WebP secara offline. Kurangi file besar menjadi kilobyte. Tanpa mengunggah file. Gratis, offline, dan sepenuhnya pribadi.';

const ui: ImageConverterUI = {
  dragText: 'Seret file BMP...',
  convertText: 'Untuk mengubahnya ke WebP secara instan',
  selectFiles: 'Pilih file',
  processedFiles: 'File yang diproses',
  downloadAll: 'Unduh Semua (.zip)',
  pending: 'Tertunda': 'Referensi Bibliografi',
  faqTitle: 'Pertanyaan Umum',
};

const faq: BmpAWebpLocaleContent['faq'] = [
  {
    question: 'Mengapa file BMP saya memakan ruang 10 kali lebih banyak dan apa keuntungan mengubahnya ke WebP?',
    answer:
      'BMP menyimpan peta piksel tanpa kompresi. WebP menggunakan kompresi matematika untuk memperkecil BMP yang besar menjadi kurang dari satu megabyte namun tetap mempertahankan gambar yang sangat jelas.',
  },
  {
    question: 'Apakah saya harus mendaftar akun?',
    answer:
      'Kami tidak meminta email dan materi Anda akan tetap terisolasi, karena pemrosesan dilakukan oleh Javascript browser yang terpasang di PC Anda, tanpa pengiriman jarak jauh.',
  },
  {
    question: 'Bisakah saya menyeret banyak file secara bersamaan?',
    answer:
      'Ya, Anda bisa menyeret 50 atau 100 file jika perangkat keras Anda mampu memproses semuanya tanpa membuat antrean.',
  },
];

const howTo: BmpAWebpLocaleContent['howTo'] = [
  {
    name: 'Identifikasi File Mentah',
    text: 'Letakkan koleksi bitmap Anda di jendela yang siap dipindahkan.',
  },
  {
    name: 'Aktivasi Batch Native',
    text: 'Proyeksikan atau seret semua file ke meja digital kami.',
  },
  {
    name: 'Evakuasi Batch WebP',
    text: 'Klik hasilnya dan Anda akan mendapatkan gambar dengan ukuran mikro secara terpisah atau sebagai paket kompresi instan.',
  },
];

const seo: BmpAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverter BMP ke WebP: Pengurangan Ukuran Paling Ekstrim yang Mungkin Terjadi',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Mengonversi BMP ke WebP tidak diragukan lagi merupakan transformasi paling spektakuler yang bisa Anda lakukan pada sebuah gambar. Format BMP (Bitmap) adalah format tertua dan terberat dalam ekosistem digital: format ini menyimpan setiap piksel tanpa kompresi apa pun, sehingga menghasilkan file yang beratnya bisa 20, 50, atau bahkan 100 kali lebih berat daripada ekuivalen modernnya. WebP, yang dikembangkan oleh Google, menerapkan algoritma kompresi mutakhir yang mengurangi ukuran hingga batas minimum yang paling mungkin terjadi sambil tetap mempertahankan kualitas visual yang luar biasa.',
  },
  {
    type: 'title',
    text: 'Mengapa BMP sangat berat dan WebP sangat efisien?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Format BMP lahir pada tahun 80-an untuk Windows, ketika ruang disk sangat besar dan kompresi bukan merupakan prioritas. Setiap piksel disimpan apa adanya, tanpa algoritma pengurangan apa pun: gambar berukuran 1920x1080 piksel dalam BMP memakan tepat 5,93 MB, terlepas dari isinya. Hal ini membuatnya ideal untuk tangkapan layar internal atau pengeditan tanpa hilangnya kualitas (lossless), namun sama sekali tidak sesuai untuk web atau penyimpanan modern.',
  },
  {
    type: 'paragraph',
    html: 'WebP menggunakan kompresi prediktif berbasis blok dan transformasi DCT (teknologi yang sama dengan video digital), sehingga gambar berukuran 1920x1080 yang sama hanya memakan antara 80 KB dan 300 KB. Itu berarti pengurangan sebesar 95 hingga 99% dibandingkan BMP aslinya. Selain itu, WebP mendukung saluran alfa untuk transparansi dan kompresi lossy maupun lossless, menawarkan fleksibilitas total.',
  },
  {
    type: 'title',
    text: 'Perbandingan: Konverter Cloud vs Arsitektur Lokal Kami',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Konverter Cloud',
        description: 'Alat yang mengunggah file BMP Anda ke server jarak jauh untuk memprosesnya.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Mengunggah BMP 20 MB butuh waktu bermenit-menit dengan koneksi lambat',
          'Gambar Anda tetap tersimpan di server pihak lain',
          'Batasan ukuran yang mengecualikan file BMP besar',
          'Iklan invasif dan pelacak data',
        ],
      },
      {
        title: 'Arsitektur Lokal Kami',
        description: 'Pemrosesan langsung di browser Anda melalui teknologi Vanilla JS dan Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Konversi instan tanpa transfer jaringan',
          'Privasi absolut — 0 byte yang keluar dari perangkat Anda',
          'Tanpa batasan ukuran per file',
          'Berfungsi tanpa koneksi internet',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Bagaimana cara kerja konversi teknis di browser',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Saat menyeret file BMP, browser membacanya sebagai binari Blob di memori RAM. Blob ini dimuat ke dalam elemen <code>Image</code> JavaScript, yang mendeskripsinya menggunakan mesin gambar native. Selanjutnya, gambar dilukis ke atas elemen <code>Canvas</code> HTML5 yang tidak terlihat. Canvas bertindak sebagai kanvas virtual di mana gambar ada dalam bentuk piksel-demi-piksel.',
  },
  {
    type: 'paragraph',
    html: 'Setelah dilukis di Canvas, kami menjalankan metode <code>toBlob()</code> dengan tipe MIME <code>image/webp</code> dan tingkat kualitas yang diinginkan. Browser secara internal menerapkan algoritma kompresi WebP dan menghasilkan Blob baru dengan file hasil konversi. Blob ini diubah menjadi URL unduhan langsung yang disimpan browser ke disk. Tidak ada koneksi jaringan yang dibuat setiap saat.',
  },
  {
    type: 'tip',
    title: 'Loncatan kompresi terbesar yang mungkin terjadi',
    html: 'Konversi dari BMP ke WebP dapat mencapai pengurangan ukuran file sebesar 99%. BMP 20 MB dapat berubah menjadi WebP yang hanya sekitar 200 KB dengan kualitas visual yang hampir identik. Ini adalah transformasi paling efisien yang tersedia di antara format gambar standar.',
  },
  {
    type: 'title',
    text: 'Kasus penggunaan dan kompatibilitas WebP',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Publikasi web — Chrome, Firefox, Safari, Edge, dan semua browser modern.',
      'Jejaring sosial — Instagram, Twitter, Facebook menerima WebP secara native.',
      'Aplikasi web dan PWA — ukuran minimum untuk pemuatan instan.',
      'Pengarsipan efisien — menggantikan koleksi BMP warisan dengan penghematan gigabyte.',
      'Pemasaran email — gambar ringan yang memuat cepat di klien email modern mana pun.',
    ],
  },
  {
    type: 'title',
    text: 'Kesimpulan: Konversi paling berdampak dalam satu klik',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Jika Anda memiliki file BMP warisan dari Windows, tangkapan layar tanpa kompresi, atau gambar dari alat lama, mengubahnya ke WebP adalah tindakan paling berdampak yang dapat Anda lakukan untuk mengoptimalkan penyimpanan dan kinerja web Anda. Dengan alat kami, konversi instan, pribadi, dan tanpa batas — persis seperti yang seharusnya.',
  },
];


export const content: BmpAWebpLocaleContent = {
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
