import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAPngLocaleContent } from '../index';

const slug = 'konverter-jpg-ke-png';
const title = 'Ubah JPG ke PNG Online dan Gratis';
const description =
  'Ubah gambar JPG ke PNG di browser Anda tanpa mengunggah file. Konversi lossless, gratis, dan sepenuhnya pribadi.';

const ui: ImageConverterUI = {
  dragText: 'Seret file JPG...',
  convertText: 'Untuk mengubahnya ke PNG secara instan',
  selectFiles: 'Pilih file',
  processedFiles: 'File yang diproses',
  downloadAll: 'Unduh Semua (.zip)',
  pending: 'Tertunda',
  bibliographyTitle: 'Referensi Bibliografi',
  faqTitle: 'Pertanyaan Umum',
};

const faq: JpgAPngLocaleContent['faq'] = [
  {
    question: 'Kapan saya harus menggunakan JPG ke PNG?',
    answer:
      'Setiap kali Anda akan mengedit teks atau logo di dalam foto. Jika Anda menyimpan JPG beberapa kali, kualitasnya akan menurun. PNG membekukan kompresi.',
  },
  {
    question: 'Apakah file PNG akan langsung memiliki latar belakang transparan?',
    answer:
      'Tidak. JPG asli bersifat datar dan tidak memiliki jenis saluran struktural tersebut. PNG yang dihasilkan akan menyiapkan kontainer tersebut, lalu Anda harus mengisolasi bagian tersebut menggunakan Photoshop atau editor lainnya.',
  },
  {
    question: 'Apakah situs web ini memiliki batasan trafik?',
    answer:
      'Berkat teknologi Edge tanpa dependensi cloud, ukuran konversi Anda tidak memiliki batasan karena sepenuhnya menggunakan komputer atau ponsel Anda.',
  },
];

const howTo: JpgAPngLocaleContent['howTo'] = [
  {
    name: 'Seret JPG ke panel',
    text: 'Unggah gambar statis dalam format JPG menggunakan mouse atau pemilih file komputer.',
  },
  {
    name: 'Eksekusi Lossless',
    text: 'Perangkat lunak Vanilla mendorong bit bingkai ke dalam wadah tanpa kehilangan kualitas asli dari keluarga PNG.',
  },
  {
    name: 'Selesaikan Sesi',
    text: 'Klik panel dan browser Anda akan menyimpan aset web yang diunduh ke Folder Pengguna Anda.',
  },
];

const bibliography: JpgAPngLocaleContent['bibliography'] = [
  {
    name: 'The W3C PNG Graphics',
    url: 'https://www.w3.org/Graphics/PNG/',
  },
  {
    name: 'Understanding Digital Image Compression',
    url: 'https://en.wikipedia.org/wiki/Image_compression',
  },
];

const seo: JpgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverter JPG ke PNG: Pengeditan Tanpa Hilang dan Transparansi',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> tidak tertandingi untuk foto kamera, tetapi memiliki kelemahan: setiap kali Anda menyimpan file, kompresi dengan hilangnya kualitas (lossy) diterapkan kembali, yang secara bertahap merusak tepi dan gradien. <strong>PNG</strong> menggunakan kompresi tanpa kehilangan (lossless) — sekali disimpan, piksel tidak berubah. Mengubah JPG ke PNG adalah operasi kunci saat Anda perlu menyiapkan gambar untuk pengeditan intensif, menambahkan latar belakang transparan, atau mengintegrasikannya ke dalam alur desain yang memerlukan penyimpanan berulang kali.',
  },
  {
    type: 'title',
    text: 'JPG atau PNG? Kapan menggunakan masing-masing format',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> adalah raja fotografi: ukuran kecil, kompatibel dengan segalanya. Namun artefak kompresinya menumpuk di setiap pengeditan dan penyimpanan ulang. Jika Anda perlu memotong, memoles, atau menambahkan teks ke gambar berulang kali, memulai dari JPG berarti memperkenalkan degradasi di setiap siklus. Selain itu, JPG tidak memiliki saluran alfa: tidak dapat memiliki latar belakang transparan, yang membuatnya tidak cocok untuk logo, ikon, dan elemen UI.',
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> adalah pilihan yang tepat untuk logo perusahaan, tangkapan layar dengan teks tajam, elemen antarmuka, gambar produk dengan latar belakang putih yang nantinya perlu Anda potong, atau aset grafis apa pun yang akan diedit lebih dari sekali. Kompresi tanpa kehilangan menjamin bahwa tepi teks tetap terdefinisi dengan sempurna dan warna solid tetap murni, tanpa noise JPEG.',
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
          'Latensi jaringan saat unggah dan unduh',
          'Gambar Anda tetap berada di server pihak lain',
          'Batasan ukuran dan konversi harian',
          'Iklan yang mengganggu dan pelacak pihak ketiga',
        ],
      },
      {
        title: 'Arsitektur Lokal Kami',
        description: 'Pemrosesan langsung di perangkat keras Anda melalui teknologi Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Kecepatan instan — nol latensi jaringan',
          'Privasi total — 0 byte dikirim ke luar',
          'Tanpa batasan MB atau jumlah file',
          'Antarmuka bersih, tanpa iklan atau pelacakan',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Cara kerja teknisnya',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Prosesnya murni lokal: browser membuat <strong>Blob</strong> dengan JPG yang dipilih dan menggambarnya di atas <strong>Canvas HTML5</strong> di memori. Setelah dirender, <code>toDataURL(\'image/png\')</code> dipanggil — codec PNG yang terintegrasi dalam browser mengode ulang setiap piksel tanpa menerapkan kompresi baru yang merusak kualitas. Hasilnya adalah PNG yang secara setia menjaga kondisi JPG saat ini: tidak lebih baik atau lebih buruk, hanya dibekukan.',
  },
  {
    type: 'paragraph',
    html: 'PNG yang dihasilkan akan menggunakan kompresi DEFLATE tanpa kehilangan, sama seperti yang digunakan oleh alat profesional seperti Photoshop atau GIMP. Ukurannya akan lebih besar dari JPG asli — biasanya antara 2 hingga 5 kali — karena menyimpan semua piksel tanpa membuang informasi. Ini adalah harga yang harus dibayar untuk kesetiaan dan kemampuan pengeditan yang tak terbatas.',
  },
  {
    type: 'tip',
    title: 'Penting: PNG tidak memulihkan kualitas JPEG',
    html: 'Mengubah JPG ke PNG <strong>tidak memulihkan kualitas yang hilang</strong> selama kompresi JPEG asli. Jika JPG Anda sudah memiliki artefak blok atau noise warna, PNG akan menyimpannya secara utuh — ia hanya mencegah penambahan artefak lainnya. Anggaplah konversi sebagai cara untuk "membekukan" kondisi gambar saat ini agar pengeditan di masa mendatang tidak semakin merusak kualitasnya.',
  },
  {
    type: 'title',
    text: 'Kasus penggunaan dan kompatibilitas',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Logo dan elemen merek yang membutuhkan latar belakang transparan setelah dipotong.',
      'Tangkapan layar dengan teks yang akan diedit dan disimpan ulang beberapa kali.',
      'Gambar produk untuk e-commerce yang memerlukan latar belakang putih bersih dan dapat dipotong.',
      'Aset grafis untuk presentasi PowerPoint atau Google Slides.',
      'Aset UI untuk aplikasi web dan seluler di mana ketajaman tepi sangat penting.',
    ],
  },
  {
    type: 'title',
    text: 'Kesimpulan',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Konversi JPG ke PNG adalah langkah pertama dalam alur kerja desain serius apa pun. Ini tidak mengubah kualitas asli, tetapi melindungi setiap piksel dari pengeditan di masa mendatang. Dengan alat ini, proses terjadi secara instan dan sepenuhnya pribadi, tanpa gambar perusahaan atau pribadi Anda pernah meninggalkan perangkat Anda.',
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
  schemas: generateSchemas({ title, description, inLanguage: 'id', faq, howTo }),
};
