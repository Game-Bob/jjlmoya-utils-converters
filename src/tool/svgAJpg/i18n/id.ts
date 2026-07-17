import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAJpgLocaleContent } from '../index';

const slug = 'konverter-svg-ke-jpg';
const title = 'Konversi SVG ke JPG Online dan Gratis';
const description =
  'Konversi file vektor SVG ke JPG di browser Anda. Render resolusi tinggi 2x. Tanpa pengunggahan file. Gratis dan 100% pribadi.';

const ui: ImageConverterUI = {
  dragText: 'Tarik file SVG...',
  convertText: 'Untuk mengkonversinya ke JPG secara instan',
  selectFiles: 'Pilih file',
  processedFiles: 'File yang diproses',
  downloadAll: 'Unduh Semua (.zip)',
  pending: 'Menunggu',
  bibliographyTitle: 'Referensi Bibliografi',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
};

const faq: SvgAJpgLocaleContent['faq'] = [
  {
    question: 'Mengapa mengonversi SVG ke JPG?',
    answer:
      'JPG menawarkan kompatibilitas maksimum di semua jenis perangkat; mengonversi SVG ke JPG adalah cara terbaik untuk memastikan semua orang dapat melihat desain Anda tanpa masalah rendering.',
  },
  {
    question: 'Apa yang terjadi dengan transparansi SVG?',
    answer:
      'Saat mengonversi ke JPG (yang tidak mendukung transparansi), latar belakang putih buram akan secara otomatis ditambahkan ke komposisi vektor Anda.',
  },
  {
    question: 'Berapa resolusi JPG yang dihasilkan?',
    answer:
      'Alat ini merender SVG pada skala ganda (2x) untuk menjamin resolusi tinggi yang sesuai untuk layar Retina dan penggunaan profesional.',
  },
];

const howTo: SvgAJpgLocaleContent['howTo'] = [
  {
    name: 'Masukkan file vektor Anda',
    text: 'Letakkan file SVG Anda di area atas untuk menyiapkan daftar ekspor.',
  },
  {
    name: 'Rasterisasi ke JPG',
    text: 'Alat ini akan mengonversi vektor menjadi piksel beresolusi tinggi dan menghasilkan JPG Anda secara instan.',
  },
  {
    name: 'Unduh hasilnya',
    text: 'Dapatkan file JPG Anda satu per satu atau sebagai paket ZIP.',
  },
];

const seo: SvgAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverter SVG ke JPG: Bawa Vektor Anda ke Platform Apa Pun',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Format <strong>SVG</strong> adalah bahasa asli web modern: ringan, terukur, dapat diedit. Namun ada seluruh platform yang tidak memahami vektor. Media sosial, klien email, dokumen Word, aplikasi cetak, dan sebagian besar perangkat lunak dunia nyata bekerja dengan gambar raster. <strong>JPG</strong> adalah penyebut umum universal: diterima di mana-mana, tanpa pengecualian, tanpa plugin, dan tanpa perlu konversi tambahan.',
  },
  {
    type: 'title',
    text: 'SVG vs JPG: Saat Vektor Harus Menjadi Foto',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG menyimpan gambar sebagai instruksi matematis. Sifat vektor ini membuatnya sempurna untuk web tetapi tidak terlihat oleh dunia analog dan perangkat lunak lama. File SVG yang dikirim melalui email dapat muncul sebagai teks XML yang tidak dapat dipahami di klien penerima. SVG yang dilampirkan ke dokumen Word mungkin tidak merender sama sekali di versi Office yang lebih lama.',
  },
  {
    type: 'paragraph',
    html: 'JPG mengonversi setiap gambar menjadi matriks piksel dengan informasi warna yang dikompresi oleh algoritma JPEG. Karena tidak mendukung saluran alfa, konverter secara otomatis menggabungkan latar belakang dengan warna putih solid. Sebagai imbalannya, Anda mendapatkan file yang terbuka di <em>perangkat apa pun di planet ini</em>: ponsel lama, printer, smart TV, aplikasi pengeditan dari dua puluh tahun yang lalu. Ini adalah format penyebut umum terendah, dan dalam banyak konteks, yang paling berharga.',
  },
  {
    type: 'title',
    text: 'Perbandingan: Konversi Lokal vs Cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Konverter Cloud',
        description: 'Alat yang mengunggah file Anda ke server jarak jauh.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Kode SVG Anda (dengan data desain kepemilikan) dikirim ke server eksternal',
          'Rendering font dan gradien yang tidak konsisten',
          'Koneksi internet diperlukan untuk setiap konversi',
          'Kualitas output JPG tidak selalu dapat dikonfigurasi',
        ],
      },
      {
        title: 'Arsitektur Lokal Kami',
        description: 'Pemrosesan langsung pada perangkat keras Anda menggunakan teknologi Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Nol byte SVG Anda keluar dari browser',
          'Rendering yang setia menggunakan mesin browser native',
          'JPG resolusi 2x untuk ketajaman maksimum',
          'Latar belakang putih diterapkan secara otomatis sesuai standar JPG',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Cara Kerjanya Secara Teknis',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'File SVG dimuat ke dalam elemen <strong>Image</strong> browser, yang menggunakan mesin rendering vektornya sendiri untuk menafsirkan XML. Hasil visual digambar ke atas <strong>HTML5 Canvas</strong> dengan pengisian latar belakang putih sebelumnya (diperlukan karena JPG tidak mendukung transparansi) pada skala ganda untuk memaksimalkan resolusi output.',
  },
  {
    type: 'paragraph',
    html: 'Metode <code>toDataURL(\'image/jpeg\', 0.92)</code> mengonversi piksel kanvas menjadi file JPG berkualitas tinggi. Warna SVG mungkin mengalami sedikit variasi karena konversi ruang warna dalam kompresi JPEG. Oleh karena itu, disarankan untuk melihat pratinjau hasil sebelum menggunakannya dalam pekerjaan cetak profesional di mana kesetiaan kromatik sangat penting.',
  },
  {
    type: 'tip',
    title: 'Tip untuk penggunaan cetak',
    html: 'Latar belakang dan gradien SVG dapat terlihat sedikit berbeda di JPG karena perbedaan profil warna dalam kompresi JPEG. Selalu lihat pratinjau hasil sebelum mengirim ke printer atau menggunakannya dalam materi pemasaran cetak di mana akurasi warna merek yang tepat sangat penting.',
  },
  {
    type: 'title',
    text: 'Kasus Penggunaan dan Kompatibilitas',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Berbagi logo dan ilustrasi SVG di Facebook, Twitter, atau LinkedIn.',
      'Melampirkan grafik vektor di email melalui Outlook atau Gmail.',
      'Memasukkan desain SVG ke dalam dokumen Word, Excel, atau presentasi.',
      'Menerbitkan gambar produk di toko online yang tidak mendukung SVG.',
      'Menyiapkan file untuk layanan cetak sesuai permintaan.',
    ],
  },
  {
    type: 'title',
    text: 'Kesimpulan',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Dunia nyata masih berbicara dalam piksel. Alat ini menerjemahkan vektor SVG Anda ke dalam bahasa universal JPG dalam hitungan detik, dengan render resolusi tinggi dan tanpa desain kepemilikan Anda meninggalkan browser Anda.',
  },
];


export const content: SvgAJpgLocaleContent = {
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
