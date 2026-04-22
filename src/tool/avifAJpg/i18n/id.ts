import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAJpgLocaleContent } from '../index';

const slug = 'konverter-avif-ke-jpg';
const title = 'Ubah AVIF ke JPG Online';
const description =
  'Ubah gambar AVIF ke JPG di browser Anda. Tanpa server. Pemrosesan lokal 100% pribadi. Gratis dan tidak terbatas.';

const ui: ImageConverterUI = {
  dragText: 'Seret file AVIF...',
  convertText: 'Untuk mengubahnya ke JPG secara instan',
  selectFiles: 'Pilih file',
  processedFiles: 'File yang diproses',
  downloadAll: 'Unduh Semua (.zip)',
  pending: 'Tertunda': 'Referensi Bibliografi',
  faqTitle: 'Pertanyaan Umum',
};

const faq: AvifAJpgLocaleContent['faq'] = [
  {
    question: 'Mengapa mengubah AVIF ke JPG?',
    answer:
      'Format AVIF menawarkan kompresi yang unggul, tetapi tidak semua program atau penampil mendukungnya. Mengubahnya ke JPG memastikan bahwa gambar tersebut dapat dilihat di 100% perangkat di seluruh dunia.',
  },
  {
    question: 'Bagaimana kami melindungi gambar AVIF Anda?',
    answer:
      'Foto-foto Anda tidak pernah keluar dari ponsel atau PC Anda. Seluruh proses penggambaran dan pengkodean ke JPEG dijalankan di lingkungan Javascript browser Anda.',
  },
  {
    question: 'Apakah saya akan kehilangan kualitas saat beralih dari AVIF ke JPG?',
    answer:
      'Alat kami memproses piksel dengan kualitas standar Canvas (0,9 hingga 0,95), membuat perubahan hampir tidak terlihat.',
  },
];

const howTo: AvifAJpgLocaleContent['howTo'] = [
  {
    name: 'Seret file atau klik',
    text: 'Pindahkan semua foto AVIF yang ingin Anda ubah ke area pemrosesan yang ditentukan.',
  },
  {
    name: 'Transformasi Instan',
    text: 'Lihat dalam waktu kurang dari satu detik bagaimana AVIF dikodekan ulang ke JPG, mengganti saluran alfa yang mungkin ada dengan latar belakang solid.',
  },
  {
    name: 'Simpan atau Unduh ZIP',
    text: 'Unduh gambar JPG baru Anda secara individual atau dengan menekan Unduh Semua jika Anda memproses secara massal.',
  },
];

const seo: AvifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverter AVIF ke JPG: Kompatibilitas Universal untuk Gambar Modern Anda',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF (AV1 Image File Format) adalah format gambar paling efisien yang tersedia saat ini. Dikembangkan oleh Alliance for Open Media dan didasarkan pada codec video AV1, format ini menawarkan kompresi 50% lebih baik daripada JPG pada kualitas visual yang sama. Namun, keunggulan teknis ini ada harganya: AVIF tidak didukung oleh Photoshop, Lightroom, Penampil Foto Windows, atau sebagian besar alat pengeditan dan tampilan tradisional. Mengubahnya ke JPG menyelesaikan masalah ini secara tuntas.',
  },
  {
    type: 'title',
    text: 'AVIF vs JPG: Efisiensi vs Kompatibilitas Universal',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF mengompresi secara luar biasa: foto beresolusi tinggi yang di JPG berukuran 4 MB bisa berukuran hanya 2 MB di AVIF dengan tetap menjaga kualitas yang sama. Ini menjadikannya sempurna untuk pengiriman web di mana kinerja pemuatan sangat kritis. Namun, di luar browser, AVIF praktis tidak terlihat: Windows Explorer tidak menampilkan pratinjaunya, kamera tidak mengekspornya, dan desainer tidak menerimanya dengan senang hati dalam alur kerja mereka.',
  },
  {
    type: 'paragraph',
    html: 'JPG telah menjadi standar universal fotografi digital selama lebih dari 30 tahun. Format ini didukung oleh 100% perangkat, sistem operasi, aplikasi kantor, jejaring sosial, printer, dan perangkat lunak apa pun yang pernah menampilkan gambar. Saat Anda perlu membagikan, mencetak, mengedit, atau mengirim melalui email, JPG adalah jaminan bahwa semuanya akan berjalan lancar.',
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
          'Foto pribadi Anda dikirim melalui internet ke server eksternal',
          'Waktu tunggu untuk mengunggah dan mengunduh file',
          'Batasan ukuran dan jumlah konversi gratis',
          'Risiko penyimpanan gambar di server pihak ketiga',
        ],
      },
      {
        title: 'Arsitektur Lokal Kami',
        description: 'Pemrosesan langsung di browser Anda menggunakan teknologi Vanilla JS dan Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Gambar Anda tidak pernah keluar dari perangkat Anda',
          'Konversi instan tanpa latensi jaringan',
          'Tanpa batasan jumlah file maupun ukuran',
          'Cocok untuk gambar medis, hukum, atau rahasia',
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
    html: 'Browser modern seperti Chrome, Firefox, dan Edge menyertakan dukungan asli untuk AVIF berkat decoder AV1 terintegrasi mereka. Saat Anda memuat file AVIF, browser mendekodenya dalam memori dan mengubahnya menjadi representasi bitmap di RAM. Representasi ini digambar di atas elemen <code>Canvas</code> HTML5 yang tidak terlihat.',
  },
  {
    type: 'paragraph',
    html: 'Selanjutnya, Canvas mengekspor gambar menggunakan <code>toBlob(\'image/jpeg\', quality)</code>, menerapkan kompresi JPG standar. Karena JPG tidak mendukung transparansi, semua saluran alfa yang ada di AVIF akan diisi dengan latar belakang putih sebelum diekspor. Hasilnya adalah file JPG berkualitas tinggi yang siap untuk diunduh langsung, tanpa ada byte yang keluar dari browser Anda.',
  },
  {
    type: 'tip',
    title: 'Keseimbangan sempurna antara kompresi dan kompatibilitas',
    html: 'AVIF 50% lebih kecil dari JPG untuk kualitas yang sama — tetapi JPG memiliki kompatibilitas 100% dengan perangkat lunak apa pun. Jika Anda menerima gambar AVIF dari server dan perlu mengeditnya, mengirimnya melalui email, atau membukanya di alat desktop, ubah ke JPG terlebih dahulu.',
  },
  {
    type: 'title',
    text: 'Kasus penggunaan: kapan mengubah AVIF ke JPG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Edit di Photoshop, Lightroom, GIMP, atau perangkat lunak desktop lainnya.',
      'Bagikan gambar dengan pengguna di perangkat atau sistem operasi lama.',
      'Lampirkan dalam email untuk menjamin tampilan di klien email mana pun.',
      'Publikasikan di platform yang tidak menerima AVIF sebagai format unggahan.',
      'Cetak: layanan pencetakan profesional bekerja secara asli dengan JPG.',
    ],
  },
  {
    type: 'title',
    text: 'Kesimpulan: Kompatibilitas universal dalam satu langkah',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF adalah masa depan kompresi gambar, tetapi saat ini menuntut kompatibilitas. Konverter kami memungkinkan Anda mendapatkan yang terbaik dari kedua dunia: terima dan simpan gambar dalam AVIF untuk efisiensi maksimum, dan ubah ke JPG secara instan saat Anda membutuhkannya untuk berfungsi dalam konteks apa pun. Semuanya secara pribadi, gratis, dan tanpa batas.',
  },
];


export const content: AvifAJpgLocaleContent = {
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
