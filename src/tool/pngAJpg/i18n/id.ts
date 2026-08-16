import { bibliography } from '../bibliography';
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
    question: 'Mengapa memilih konverter PNG ke JPG lokal kami?',
    answer:
      'Berbeda dari layanan biasa, alat ini memproses file sepenuhnya di browser. Gambar Anda tidak dikirim ke disk jarak jauh, sehingga kendali dan privasi data tetap terjaga.',
  },
  {
    question: 'JPG atau PNG: mana yang cocok untuk saya?',
    answer:
      'PNG cocok untuk logo dan elemen transparan. JPG lebih sesuai untuk foto dan banner web karena ukurannya jauh lebih kecil sehingga halaman dimuat lebih cepat.',
  },
  {
    question: 'Bagaimana konversi bekerja tanpa mengunggah file?',
    answer:
      'Kami menggunakan Canvas HTML5. Browser membuat ulang gambar pada kanvas virtual yang tidak terlihat, mengisi area transparan dengan putih, lalu menghasilkan data JPEG untuk diunduh.',
  },
  {
    question: 'Apakah aman untuk dokumen rahasia?',
    answer:
      'Ya. Untuk dokumen perbankan, kesehatan, atau hukum, pemrosesan lokal lebih aman: data hanya berada di RAM perangkat dan berhenti saat tab ditutup.',
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

const seo: PngAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverter PNG ke JPG: panduan praktis mengoptimalkan gambar',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Dalam desain digital dan pengembangan web, kecepatan sangat penting. PNG mempertahankan transparansi dan kualitas tanpa kehilangan, tetapi ukurannya bisa besar. Untuk halaman cepat dan lampiran ringan, JPG sering menjadi pilihan praktis.',
  },
  {
    type: 'title',
    text: 'JPG atau PNG: mana yang sebaiknya dipilih?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Tidak ada format terbaik untuk semua kebutuhan. PNG cocok untuk antarmuka, logo, dan latar transparan, tetapi kompresi tanpa kehilangan dapat menghasilkan file yang jauh lebih besar.',
  },
  {
    type: 'paragraph',
    html: 'JPG mengurangi detail yang sulit dilihat mata sehingga ukuran gambar lebih ringan. Format ini cocok untuk foto, banner, dan media sosial ketika kecepatan unduh lebih penting.',
  },
  {
    type: 'title',
    text: 'Perbandingan teknis: proses lokal dan cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Konverter berbasis cloud',
        description: 'Layanan tradisional yang mengunggah foto ke server jarak jauh.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Latensi jaringan (unggah/unduh)',
          'Risiko kebocoran data pribadi',
          'Batas ukuran file',
          'Iklan dan pelacak',
        ],
      },
      {
        title: 'Arsitektur lokal kami',
        description: 'Pemrosesan langsung pada perangkat dengan JavaScript asli.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Kecepatan langsung tanpa jaringan',
          'Privasi terjamin (nol byte dikirim)',
          'Tanpa batas MB per file',
          'Antarmuka bersih dan profesional',
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
    html: 'Konversi tanpa server memanfaatkan API browser modern. Saat file dipilih, browser membuat Blob sementara di RAM lalu menggambarnya pada Canvas HTML5 yang tidak terlihat.',
  },
  {
    type: 'paragraph',
    html: 'JPG tidak mendukung transparansi, sehingga area transparan diisi putih sebelum gambar dirender. Canvas kemudian menghasilkan data JPEG yang langsung disimpan di perangkat.',
  },
  {
    type: 'tip',
    title: 'Tips SEO: ukuran yang ideal',
    html: 'Gambar yang lebih ringan dapat memperbaiki LCP dan metrik PageSpeed. Mengubah PNG besar menjadi JPG yang lebih kecil berguna untuk header dan halaman dengan banyak gambar.',
  },
  {
    type: 'title',
    text: 'Keamanan untuk perusahaan dan profesional',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Untuk perbankan, kesehatan, dan hukum, mengirim file ke layanan eksternal dapat berisiko. Di sini pemrosesan berlangsung di RAM browser tanpa mengunggah data ke cloud.',
  },
  {
    type: 'title',
    text: 'Kompatibilitas hasil',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Penampil Windows, macOS, dan perangkat seluler.',
      'Media sosial (Instagram, LinkedIn, dan lainnya).',
      'Perangkat lunak kantor (Word, PowerPoint).',
      'Pengelola konten (WordPress, Shopify).',
    ],
  },
  {
    type: 'title',
    text: 'Kesimpulan: optimalkan dengan tepat',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Konverter ini menggabungkan kecepatan dan privasi. Baik Anda pengembang maupun pengguna rumahan, Anda dapat mengecilkan gambar tanpa menyerahkan file ke layanan pihak ketiga.',
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
