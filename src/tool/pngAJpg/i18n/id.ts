import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAJpgLocaleContent } from '../index';

const slug = 'konverter-png-ke-jpg';
const title = 'Ubah PNG ke JPG Online';
const description =
  'Ubah gambar PNG Anda ke format JPG dengan kompresi cepat secara instan di komputer Anda sendiri. Tanpa mengunggah foto ke internet. Optimalisasi batch.';

const ui: ImageConverterUI = {
  dragText: 'Seret file PNG...',
  convertText: 'Untuk mengubahnya ke JPG secara instan',
  selectFiles: 'Pilih file',
  processedFiles: 'File yang diproses',
  downloadAll: 'Unduh Semua (.zip)',
  pending: 'Tertunda',
  bibliographyTitle: 'Referensi Bibliografi',
  faqTitle: 'Pertanyaan Umum',
};

const faq: PngAJpgLocaleContent['faq'] = [
  {
    question: 'Mengapa memilih konverter lokal PNG ke JPG kami?',
    answer:
      'Berbeda dengan alat konvensional, utilitas kami memproses file sepenuhnya di browser Anda. Gambar Anda tidak pernah menyentuh hard drive orang lain, menjamin kedaulatan total dan privasi data Anda.',
  },
  {
    question: 'JPG atau PNG? Mana yang lebih baik untuk kasus saya?',
    answer:
      'PNG ideal untuk logo dan elemen dengan transparansi. Namun, JPG adalah standar emas untuk fotografi dan banner web, karena mencapai ukuran yang jauh lebih kecil, secara drastis meningkatkan kecepatan pemuatan situs.',
  },
  {
    question: 'Bagaimana cara kerja konversi teknis tanpa mengunggah apa pun?',
    answer:
      'Kami menggunakan kekuatan HTML5 Canvas. Browser membuat ulang gambar pada kanvas virtual yang tidak terlihat, mengisi transparansi dengan warna putih dan menghasilkan aliran byte yang Anda unduh langsung secara instan.',
  },
  {
    question: 'Apakah aman untuk dokumen rahasia?',
    answer:
      'Ya, ini adalah pilihan teraman bagi para profesional di bidang perbankan, kesehatan, atau hukum. Karena ini adalah "kotak hitam" yang hanya menggunakan RAM Anda, apa pun yang terjadi di dalamnya akan hilang saat Anda menutup tab, menghindari kebocoran di cloud pihak ketiga.',
  },
];

const howTo: PngAJpgLocaleContent['howTo'] = [
  {
    name: 'Pemilihan file',
    text: 'Siapkan file PNG Anda dalam satu folder dan seret semuanya sekaligus ke area pemrosesan atau cari menggunakan penjelajah file.',
  },
  {
    name: 'Pemrosesan instan',
    text: 'Verifikasi bahwa status berubah menjadi "Selesai" untuk setiap file sementara browser mengoptimalkan ukuran secara lokal.',
  },
  {
    name: 'Unduhan yang dioptimalkan',
    text: 'Simpan JPG baru Anda satu per satu atau gunakan tombol "Unduh Semua" untuk mendapatkan file ZIP terkompresi dengan semua gambar.',
  },
];

const bibliography: PngAJpgLocaleContent['bibliography'] = [
  {
    name: 'Spesifikasi PNG Consortium',
    url: 'http://www.libpng.org/pub/png/',
  },
  {
    name: 'Komite JPEG',
    url: 'https://jpeg.org/',
  },
];

const seo: PngAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverter PNG ke JPG: Panduan Definitif untuk Optimalisasi Gambar',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Dalam dunia desain digital dan pengembangan web, efisiensi adalah segalanya. Format PNG (Portable Network Graphics) dicintai karena kemampuannya mempertahankan transparansi dan kompresi tanpa kehilangan, tetapi memiliki satu musuh besar: ukuran file. Ketika Anda ingin situs web Anda terbang atau email Anda dimuat secara instan, peralihan dari PNG ke JPG adalah keputusan teknis yang paling cerdas.',
  },
  {
    type: 'title',
    text: 'JPG atau PNG?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Tidak ada format yang lebih baik dari yang lain, melainkan alat untuk setiap kebutuhan. PNG adalah format tanpa kehilangan, ideal untuk maket antarmuka, logo dengan teks kecil, dan elemen visual yang membutuhkan latar belakang transparan. Namun, kesetiaan ini ada harganya: file yang bisa 5 atau 10 kali lebih berat daripada padanannya yang dikompresi.',
  },
  {
    type: 'paragraph',
    html: 'JPG (Joint Photographic Experts Group), di sisi lain, menggunakan algoritma diskritisasi untuk menghapus informasi yang hampir tidak dirasakan oleh mata manusia, mencapai ukuran yang sangat ringan. Ini adalah standar emas untuk fotografi, banner iklan, dan media sosial. Dengan mengubah PNG Anda ke JPG, Anda menukar kesetiaan geometris dengan kecepatan jaringan.',
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
        description: 'Alat tradisional yang mengunggah foto Anda ke server jarak jauh.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Latensi jaringan (Unggah/Unduh)',
          'Risiko kebocoran data pribadi',
          'Batasan ukuran per file',
          'Iklan dan pelacak',
        ],
      },
      {
        title: 'Arsitektur Lokal Kami',
        description: 'Pemrosesan langsung pada perangkat keras Anda melalui teknologi Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Kecepatan instan tanpa jaringan',
          'Privasi terjamin (0 byte dikirim)',
          'Tanpa batasan MB per file',
          'Antarmuka profesional dan bersih',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Cara kerja konversi teknis',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Anda mungkin bertanya-tanya bagaimana mungkin mengubah gambar tanpa mengirimkannya ke server. Keajaibannya ada pada kekuatan browser modern. Saat Anda memilih file, kami menghasilkan Blob yang hanya ada di RAM Anda. Blob itu digambar pada elemen HTML5 Canvas yang tidak terlihat.',
  },
  {
    type: 'paragraph',
    html: 'Karena JPG tidak mendukung transparansi, algoritma kami mengisi latar belakang dengan warna putih solid sebelum "melukis" PNG di atasnya. Setelah gambar disusun, kami menjalankan metode ekspor asli, menghasilkan aliran byte yang diunduh komputer Anda secara langsung.',
  },
  {
    type: 'tip',
    title: 'Tips SEO: Ukuran Ideal',
    html: 'Google secara aktif menghukum situs web yang lambat. Jika Largest Contentful Paint (LCP) Anda tinggi karena header PNG sebesar 2MB, mengubahnya menjadi JPG sebesar 200KB dapat segera meningkatkan metrik PageSpeed Anda tanpa perbedaan visual.',
  },
  {
    type: 'title',
    text: 'Keamanan untuk Perusahaan dan Profesional',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Jika Anda bekerja di sektor sensitif seperti perbankan, kesehatan, atau hukum, mengunggah file ke konverter online adalah pelanggaran keamanan. Alat kami bekerja seperti "kotak hitam": apa yang terjadi di dalamnya tetap ada di RAM Anda. Ini satu-satunya cara aman untuk bekerja dengan dokumen rahasia.',
  },
  {
    type: 'title',
    text: 'Kompatibilitas Hasil',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Penampil gambar Windows, macOS, dan perangkat seluler.',
      'Jejaring sosial (Instagram, LinkedIn, dll).',
      'Alat kantor (Word, PowerPoint).',
      'Manajer konten (WordPress, Shopify).',
    ],
  },
  {
    type: 'title',
    text: 'Kesimpulan: Optimalkan seperti Profesional',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Konverter ini bukan sekadar halaman biasa; ini adalah bagian dari teknik yang dirancang untuk memudahkan hidup Anda. Baik Anda seorang pengembang atau pengguna rumahan, di sini Anda memiliki solusi definitif untuk menghemat megabyte dan menjaga keamanan data Anda.',
  },
];


export const content: PngAJpgLocaleContent = {
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
