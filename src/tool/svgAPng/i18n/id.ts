import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAPngLocaleContent } from '../index';

const slug = 'konverter-svg-ke-png';
const title = 'Konversi SVG ke PNG Online dan Gratis';
const description =
  'Konversi file vektor SVG ke PNG di browser Anda. Output HD skala ganda. Mempertahankan transparansi. Gratis dan 100% pribadi.';

const ui: ImageConverterUI = {
  dragText: 'Tarik file SVG...',
  convertText: 'Untuk mengkonversinya ke PNG secara instan',
  selectFiles: 'Pilih file',
  processedFiles: 'File yang diproses',
  downloadAll: 'Unduh Semua (.zip)',
  pending: 'Menunggu': 'Referensi Bibliografi',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
};

const faq: SvgAPngLocaleContent['faq'] = [
  {
    question: 'Mengapa mengonversi file SVG ke PNG?',
    answer:
      'SVG berbasis vektor dan ideal untuk logo, tetapi terkadang Anda memerlukan format PNG raster untuk digunakan dalam aplikasi yang tidak mendukung vektor, atau untuk dibagikan melalui aplikasi pesan atau media sosial.',
  },
  {
    question: 'Dapatkah saya memilih ukuran output?',
    answer:
      'Kami saat ini menduplikasi skala SVG sumber sehingga output PNG tajam dan cocok untuk layar Retina atau 4K.',
  },
  {
    question: 'Apakah transparansi SVG dipertahankan?',
    answer:
      'Ya, PNG yang dihasilkan mempertahankan saluran alfa dari SVG asli, menjaga semua latar belakang transparan tetap utuh.',
  },
];

const howTo: SvgAPngLocaleContent['howTo'] = [
  {
    name: 'Masukkan file SVG Anda',
    text: 'Letakkan file SVG Anda atau tarik langsung ke area atas.',
  },
  {
    name: 'Generasi PNG HD',
    text: 'Dalam hitungan milidetik, mesin lokal kami akan membuat ulang setiap vektor sebagai lapisan piksel HD dalam format PNG transparan.',
  },
  {
    name: 'Unduh file',
    text: 'Simpan PNG yang dihasilkan satu per satu atau sebagai paket ZIP.',
  },
];

const seo: SvgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverter SVG ke PNG: Dari Vektor Tak Terbatas ke Raster Universal',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>SVG</strong> (Scalable Vector Graphics) adalah pilihan sempurna untuk desain web: dapat diskalakan secara tak terbatas, ringan, dan dapat diedit dengan editor kode apa pun. Tetapi ketika Anda perlu menggunakan logo atau ikon itu di aplikasi seluler, membagikannya di media sosial, atau memasukkannya ke dalam presentasi PowerPoint, Anda menemui kendala: sebagian besar platform ini tidak mendukung SVG. Format <strong>PNG</strong> adalah solusi universal: raster, dengan saluran alfa, dan kompatibel dalam setiap konteks.',
  },
  {
    type: 'title',
    text: 'SVG vs PNG: Vektor untuk Web, Raster untuk Dunia',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG menyimpan gambar sebagai instruksi matematis: kurva Bézier, gradien, poligon. Ini berarti file yang sama terlihat sempurna pada 16px atau 16.000px. Ini adalah format ideal untuk kode web Anda, animasi CSS, dan elemen apa pun yang perlu beradaptasi dengan resolusi layar yang berbeda tanpa kehilangan kualitas.',
  },
  {
    type: 'paragraph',
    html: 'PNG menyimpan gambar sebagai kisi piksel dengan informasi warna dan transparansi untuk setiap piksel. Ini adalah format <strong>lossless</strong>, yang berarti kualitas dipertahankan sepenuhnya. Setelah SVG diraster ke PNG, resolusinya menjadi tetap. Itulah mengapa memilih ukuran ekspor yang tepat sangat penting: alat kami merender pada skala ganda (2x) untuk memastikan ketajaman pada layar Retina dan 4K.',
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
          'Kode SVG Anda dikirim ke server eksternal',
          'Rendering jarak jauh dengan kualitas yang tidak konsisten',
          'Waktu tunggu untuk pengunggahan dan pemrosesan',
          'Batasan pada ukuran file SVG',
        ],
      },
      {
        title: 'Arsitektur Lokal Kami',
        description: 'Pemrosesan langsung pada perangkat keras Anda menggunakan teknologi Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'SVG Anda tidak pernah meninggalkan browser',
          'Rendering mesin browser native untuk kesetiaan maksimum',
          'PNG resolusi 2x untuk layar dengan kepadatan tinggi',
          'Transparansi dipertahankan dengan saluran alfa penuh',
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
    html: 'Proses dimulai dengan memuat file SVG ke dalam elemen JavaScript <strong>Image</strong>. Setelah mesin browser mengurai dan merender XML vektor, gambar yang dihasilkan digambar ke <strong>HTML5 Canvas</strong> yang dimensinya dua kali lipat ukuran SVG asli (skala 2x). Ini menghasilkan PNG dengan piksel dua kali lebih banyak per dimensi, ideal untuk layar beresolusi tinggi.',
  },
  {
    type: 'paragraph',
    html: 'Berbeda dengan konversi ke JPG, saat mengekspor ke PNG, kanvas mempertahankan saluran alfa penuh: area transparan dalam SVG asli menjadi piksel transparan sepenuhnya dalam PNG yang dihasilkan — tanpa pengisian latar belakang putih. Ekspor menggunakan metode <code>toDataURL(\'image/png\')</code> dengan kompresi lossless.',
  },
  {
    type: 'tip',
    title: 'Tip sebelum merasterisasi',
    html: 'Pilih ukuran ekspor PNG Anda dengan hati-hati — merasterisasi SVG adalah proses satu arah: Anda tidak dapat memulihkan vektor dari PNG yang dihasilkan. Selalu simpan SVG asli sebagai sumber master, dan hasilkan PNG pada resolusi tertinggi yang mungkin Anda butuhkan.',
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
      'Mengekspor logo vektor untuk presentasi PowerPoint atau Google Slides.',
      'Membuat ikon PNG untuk iOS, Android, atau Progressive Web Apps.',
      'Berbagi desain SVG di Instagram, LinkedIn, atau media sosial lainnya.',
      'Memasukkan ilustrasi vektor ke dalam dokumen Word atau PDF.',
      'Menghasilkan thumbnail PNG dari grafik SVG untuk pratinjau CMS.',
    ],
  },
  {
    type: 'title',
    text: 'Kesimpulan',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG adalah bahasa vektor; PNG adalah paspor ke seluruh dunia digital. Alat ini merasterisasi SVG Anda pada resolusi 2x dengan transparansi utuh, langsung di browser Anda, tanpa satu byte pun dari desain Anda dikirim ke server eksternal mana pun.',
  },
];


export const content: SvgAPngLocaleContent = {
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
