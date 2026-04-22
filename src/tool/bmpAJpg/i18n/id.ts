import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAJpgLocaleContent } from '../index';

const slug = 'konverter-bmp-ke-jpg';
const title = 'Ubah BMP ke JPG Online';
const description =
  'Ubah gambar BMP ke JPG di browser Anda. Kurangi ukuran secara drastis. Tanpa mengunggah file ke server. Gratis dan 100% pribadi.';

const ui: ImageConverterUI = {
  dragText: 'Seret file BMP...',
  convertText: 'Untuk mengubahnya ke JPG secara instan',
  selectFiles: 'Pilih file',
  processedFiles: 'File yang diproses',
  downloadAll: 'Unduh Semua (.zip)',
  pending: 'Tertunda': 'Referensi Bibliografi',
  faqTitle: 'Pertanyaan Umum',
};

const faq: BmpAJpgLocaleContent['faq'] = [
  {
    question: 'Mengapa mengubah BMP ke JPG?',
    answer:
      'Format BMP tidak mengompresi data, menghasilkan file yang sangat besar. Format JPG mengompresi gambar secara drastis sambil mempertahankan kualitas visual yang sangat baik untuk web dan distribusi.',
  },
  {
    question: 'Apakah aman untuk mengubah gambar saya di sini?',
    answer:
      '100% aman. Privasi Anda terjamin karena pemrosesan dilakukan sepenuhnya secara lokal menggunakan mesin browser web Anda sendiri.',
  },
  {
    question: 'Bagaimana alat ini bekerja?',
    answer:
      'Cukup seret file BMP Anda, dan skrip JavaScript kami akan membaca piksel untuk menggambar ulang di kanvas HTML dan mengekspornya dalam pengkodean JPEG secara instan.',
  },
];

const howTo: BmpAJpgLocaleContent['howTo'] = [
  {
    name: 'Unggah file BMP Anda',
    text: 'Seret dan lepas atau pilih gambar Anda dalam format BMP di area yang ditentukan.',
  },
  {
    name: 'Pemrosesan Otomatis',
    text: 'Alat ini melakukan rasterisasi gambar dan menerapkan tingkat kompresi optimal dalam format JPG dalam hitungan milidetik.',
  },
  {
    name: 'Unduh Tunggal atau Massal',
    text: 'Dapatkan gambar baru Anda yang dioptimalkan untuk web baik satu per satu atau dengan mengunduh file ZIP.',
  },
];

const seo: BmpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverter BMP ke JPG: Perkecil File Raksasa dalam Hitungan Detik',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMP (Bitmap) adalah format paling sederhana di dunia komputer: ia menyimpan setiap piksel apa adanya tanpa kompresi apa pun. Tangkapan layar 1920x1080 dalam BMP berukuran sekitar 6 MB. Gambar yang sama dalam JPG hanya berukuran antara 200 hingga 400 KB dengan kualitas visual yang tidak dapat dibedakan. Perbedaannya sangat besar, dan alat kami memungkinkan Anda melakukan konversi itu dalam hitungan detik, langsung di browser Anda tanpa mengunggah apa pun ke server mana pun.',
  },
  {
    type: 'title',
    text: 'BMP vs JPG: data mentah melawan kompresi cerdas',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Format BMP dibuat oleh Microsoft di era Windows 3.1. Filosofinya sangat sederhana: setiap piksel memakan 3 byte (merah, hijau, biru), dan piksel disimpan secara berurutan tanpa pemrosesan tambahan. Ketiadaan total kompresi ini membuat file BMP 50 hingga 100 kali lebih besar daripada padanannya dalam JPG untuk foto asli dan tangkapan layar.',
  },
  {
    type: 'paragraph',
    html: 'Sebaliknya, JPG menggunakan Discrete Cosine Transform (DCT) untuk menganalisis setiap blok 8x8 piksel dan menghilangkan informasi frekuensi tinggi yang hampir tidak dirasakan oleh mata manusia. Hasilnya adalah gambar yang terlihat identik namun berukuran jauh lebih kecil. Untuk file BMP yang berasal dari tangkapan layar, pemindai, atau aplikasi Windows lama, konversi ke JPG adalah tindakan pengoptimalan yang paling berdampak.',
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
        description: 'Layanan yang mengunggah file BMP Anda ke server jarak jauh untuk diproses.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Mengunggah BMP 10 MB membutuhkan waktu lama pada koneksi lambat',
          'Tangkapan layar dan gambar rahasia Anda menjelajahi internet',
          'Sering ada batasan ukuran pada paket gratis',
          'Latensi ganda: unggah dan unduh file yang dikonversi',
        ],
      },
      {
        title: 'Arsitektur Lokal Kami',
        description: 'Pemrosesan langsung di perangkat keras Anda melalui teknologi Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'BMP diproses di RAM Anda dan tidak dikirim ke server',
          'Konversi instan tanpa menunggu',
          'Tanpa batasan ukuran per file',
          'Privasi total: 0 byte dikirim ke luar',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Cara kerja konversi teknis dari BMP ke JPG',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Saat Anda menyeret file BMP ke alat ini, browser membacanya dengan API <code>FileReader</code> dan mendeskodekannya sebagai objek Blob di memori. Blob tersebut dirender di atas kanvas HTML5 yang tidak terlihat. Selanjutnya, metode <code>toDataURL(\'image/jpeg\')</code> menerapkan algoritma kompresi JPEG pada data kanvas dan menghasilkan file JPG.',
  },
  {
    type: 'paragraph',
    html: 'Karena BMP tidak memiliki saluran alfa (tidak mendukung transparansi), konversi ke JPG dilakukan secara langsung tanpa perlu penggabungan dengan latar belakang putih. Seluruh proses terjadi di memori RAM komputer Anda, tanpa transmisi data apa pun melalui jaringan, dalam hitungan milidetik bahkan untuk file berukuran beberapa megabyte.',
  },
  {
    type: 'tip',
    title: 'BMP dari Windows bisa sangat besar',
    html: 'File BMP yang dihasilkan oleh tangkapan layar (tombol Print Screen di Windows) atau oleh aplikasi lama seperti Paint dapat berukuran 50 hingga 100 kali lebih berat daripada JPG yang setara. Satu BMP dengan resolusi Full HD dapat melebihi 6 MB. Mengonversinya ke JPG sebelum mengirim melalui email atau mengunggah ke platform apa pun adalah praktik yang sangat penting.',
  },
  {
    type: 'title',
    text: 'Kasus penggunaan dan kompatibilitas JPG yang dihasilkan',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Pengoptimalan tangkapan layar Windows untuk dikirim melalui email.',
      'Konversi gambar yang diekspor oleh perangkat lunak lama (CAD, pemindai lama).',
      'Pengurangan ukuran untuk mengunggah gambar ke platform web dan media sosial.',
      'Persiapan file untuk dimasukkan ke dokumen Word, PowerPoint, atau PDF.',
      'Kompatibilitas universal dengan semua penampil dan browser modern.',
    ],
  },
  {
    type: 'title',
    text: 'Kesimpulan: 10 MB BMP, 500 KB JPG, gambar yang sama',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Konversi dari BMP ke JPG adalah salah satu latihan pengoptimalan yang paling bermanfaat dalam pengelolaan file gambar. Alat kami melakukan transformasi itu dalam hitungan detik, tanpa mengunggah file apa pun, tanpa membuat akun apa pun, langsung di browser Anda. Hasilnya adalah JPG berkualitas tinggi, kompatibel secara universal, dan dengan ukuran hingga 97% lebih rendah dari BMP asli.',
  },
];


export const content: BmpAJpgLocaleContent = {
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
