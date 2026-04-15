import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAWebpLocaleContent } from '../index';

const slug = 'konverter-avif-ke-webp';
const title = 'Ubah AVIF ke WebP Online';
const description =
  'Ubah gambar AVIF ke WebP untuk kompatibilitas yang lebih baik. Pemrosesan lokal tanpa server. Gratis, pribadi, dan tidak terbatas.';

const ui: ImageConverterUI = {
  dragText: 'Seret file AVIF...',
  convertText: 'Untuk mengubahnya ke WebP secara instan',
  selectFiles: 'Pilih file',
  processedFiles: 'File yang diproses',
  downloadAll: 'Unduh Semua (.zip)',
  pending: 'Tertunda',
  bibliographyTitle: 'Referensi Bibliografi',
  faqTitle: 'Pertanyaan Umum',
};

const faq: AvifAWebpLocaleContent['faq'] = [
  {
    question: 'Apa perbedaan nyata antara mengubah ke WebP dan format lainnya?',
    answer:
      'WebP menawarkan yang terbaik dari kedua dunia: kompresi yang luar biasa seperti JPG tetapi tetap mempertahankan kemampuan untuk menampung transparansi yang bersih seperti PNG. Mengubah AVIF Anda ke WebP memaksimalkan kompatibilitasnya untuk web sambil mempertahankan semua keunggulannya.',
  },
  {
    question: 'Bagaimana Anda bisa mengubah ini tanpa server dan dengan cepat?',
    answer:
      'Kami memanfaatkan modul dekode bawaan dan objek Image dari JavaScript HTML5, yang memungkinkan pembacaan AVIF Anda di memori lokal dan mengekstrak file WebP yang dioptimalkan dalam waktu singkat.',
  },
  {
    question: 'Apakah format WebP sepenuhnya kompatibel hari ini?',
    answer:
      'Berbeda dengan AVIF yang masih baru, format WebP menikmati dukungan yang sangat luas di antara browser seperti Chrome, Firefox, dan Safari.',
  },
];

const howTo: AvifAWebpLocaleContent['howTo'] = [
  {
    name: 'Masukkan file foto Anda',
    text: 'Pindahkan dan lepaskan semua pilihan format AVIF ke kanvas kami.',
  },
  {
    name: 'Terjemahan Byte Algoritmik',
    text: 'Mesin kami memproses algoritma tanpa mengunggah apa pun dan membuat iterasi yang tepat berdasarkan WebP yang dikompresi.',
  },
  {
    name: 'Kumpulkan Unduhan Anda yang Sudah Siap',
    text: 'Tekan panel dan terima batch dalam kotak ZIP atau satu per satu untuk langsung mempublikasikannya.',
  },
];

const bibliography: AvifAWebpLocaleContent['bibliography'] = [
  {
    name: 'AV1 Image File Format',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'Google WebP Format Overview',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: AvifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverter AVIF ke WebP: Alternatif Modern dan Aman untuk Web',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF adalah format gambar tercanggih yang tersedia saat ini: lebih kecil dari WebP, lebih kecil dari JPG, dengan kualitas visual yang unggul. Namun, pengadopsiannya tidak merata — Safari tidak mendukungnya hingga tahun 2024, dan banyak perangkat seluler lama tidak mengenalnya. Sebaliknya, WebP telah memantapkan dirinya selama bertahun-tahun sebagai standar web modern dengan lebih dari 95% dukungan global. Mengubah AVIF ke WebP adalah keputusan pragmatis ketika Anda membutuhkan modernitas tanpa mengorbankan kompatibilitas.',
  },
  {
    type: 'title',
    text: 'AVIF vs WebP: Yang Terbaru vs Yang Paling Aman',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF menawarkan kompresi tercanggih yang tersedia — biasanya 20-30% lebih kecil dari WebP pada kualitas yang sama. Teknologinya yang berbasis AV1 adalah yang termodern di sektor ini. Namun, dukungan AVIF masih memiliki titik buta: versi Safari lama, beberapa browser pada Android yang lebih lama, dan pemutar gambar desktop tertentu tidak mengenalinya. Untuk produksi web dengan audiens yang luas dan beragam, ini merupakan risiko.',
  },
  {
    type: 'paragraph',
    html: 'WebP memiliki sejarah dukungan yang jauh lebih solid. Chrome mengadopsinya pada tahun 2010, diikuti oleh Firefox dan Edge, dan Safari menyertakannya pada tahun 2020. Dengan cakupan global browser lebih dari 95%, WebP adalah pilihan aman untuk situs web mana pun yang tidak ingin menyajikan format cadangan. Ini mendukung transparansi, kompresi lossy dan lossless, serta menghasilkan file yang jauh lebih kecil daripada JPG atau PNG.',
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
        description: 'Alat yang mengunggah file AVIF Anda ke server jarak jauh untuk memprosesnya.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Gambar pribadi Anda melintasi server eksternal',
          'Latensi jaringan yang memperlambat alur kerja',
          'Batasan file per konversi gratis',
          'Ketergantungan pada layanan pihak ketiga yang dapat berubah',
        ],
      },
      {
        title: 'Arsitektur Lokal Kami',
        description: 'Pemrosesan langsung di browser Anda menggunakan teknologi Vanilla JS dan Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Privasi total — 0 byte keluar dari perangkat Anda',
          'Kecepatan instan tanpa ketergantungan jaringan',
          'Tanpa batasan ukuran maupun jumlah file',
          'Berfungsi tanpa koneksi internet',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Cara kerja konversi teknis di browser',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Chrome, Firefox, dan Edge menyertakan decoder AVIF asli. Saat memuat file, mesin gambar browser mendekodenya di RAM sambil mempertahankan informasi saluran alfa. Gambar digambar di atas <code>Canvas</code> HTML5 yang tidak terlihat menggunakan konteks 2D, yang mempertahankan transparansi dengan benar.',
  },
  {
    type: 'paragraph',
    html: 'Ekspor dilakukan dengan <code>toBlob(\'image/webp\', quality)</code>. Browser menerapkan algoritma kompresi WebP secara internal, menghasilkan Blob yang menyertakan saluran alfa jika gambar asli memilikinya. Blob ini diubah menjadi tautan unduhan langsung. Seluruh proses terjadi dalam mikrodetik tanpa komunikasi apa pun dengan server eksternal.',
  },
  {
    type: 'tip',
    title: 'WebP: pilihan pragmatis pengembang modern',
    html: 'WebP memiliki lebih dari 95% dukungan di browser — AVIF berkembang tetapi belum mencapai angka tersebut. Untuk situs dalam produksi tanpa deteksi format adaptif, WebP adalah pilihan aman yang menjangkau hampir semua audiens. Ubah AVIF Anda ke WebP dan sajikan gambar modern dengan percaya diri.',
  },
  {
    type: 'title',
    text: 'Kasus penggunaan: kapan memilih WebP daripada AVIF',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Situs web yang membutuhkan dukungan di browser sejak 2020 tanpa polyfill.',
      'CDN dan sistem pengiriman gambar yang menerima WebP tetapi bukan AVIF.',
      'Aplikasi seluler hibrida dengan WebView yang mungkin tidak mendukung AVIF.',
      'Email HTML modern di mana WebP memiliki dukungan lebih besar daripada AVIF.',
      'Platform CMS dan e-commerce dengan dukungan gambar WebP yang sudah mapan.',
    ],
  },
  {
    type: 'title',
    text: 'Kesimpulan: Modernitas dengan kompatibilitas terjamin',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF adalah garda terdepan kompresi gambar, tetapi WebP adalah pilihan yang andal dan universal dari ekosistem web modern. Dengan alat kami, Anda beralih dari yang terbaru ke yang paling banyak didukung dalam sekejap — tanpa mengunggah apa pun ke server mana pun, dengan privasi total dan tanpa batas ukuran.',
  },
];


export const content: AvifAWebpLocaleContent = {
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
