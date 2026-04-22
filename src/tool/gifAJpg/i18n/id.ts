import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAJpgLocaleContent } from '../index';

const slug = 'konverter-gif-ke-jpg';
const title = 'Ubah GIF ke JPG Online';
const description =
  'Ekstrak bingkai pertama dari GIF Anda dan ubah ke JPG. Tanpa server. Pemrosesan lokal di browser Anda. Gratis dan tidak terbatas.';

const ui: ImageConverterUI = {
  dragText: 'Seret file GIF...',
  convertText: 'Untuk mengubahnya ke JPG secara instan',
  selectFiles: 'Pilih file',
  processedFiles: 'File yang diproses',
  downloadAll: 'Unduh Semua (.zip)',
  pending: 'Tertunda': 'Referensi Bibliografi',
  faqTitle: 'Pertanyaan Umum',
};

const faq: GifAJpgLocaleContent['faq'] = [
  {
    question: 'Apa yang terjadi pada animasi saat saya mengubahnya ke JPG?',
    answer:
      'Format JPG bersifat statis dan tidak mendukung banyak bingkai (frame). Konverter kami hanya mengekstrak gambar pertama atau bingkai pertama yang muncul dalam urutan GIF.',
  },
  {
    question: 'Apakah saya akan kehilangan efek khusus atau latar belakang transparan?',
    answer:
      'Ya, itu adalah perilaku alami dari standar JPG. Jika Anda mengunggah GIF dengan latar belakang transparan, kami secara otomatis menyisipkan lapisan putih pekat di bawahnya untuk menghindari warna yang rusak.',
  },
  {
    question: 'Bisakah saya mengekstrak foto JPG dari GIF tanpa situs web menyimpan konten saya?',
    answer:
      'Tentu saja ya. Alat ini adalah Web App yang berbasis pada Canvas HTML5. Seluruh dekode dilakukan oleh prosesor perangkat fisik Anda sendiri.',
  },
];

const howTo: GifAJpgLocaleContent['howTo'] = [
  {
    name: 'Seret File Berat yang Bisa Bergerak',
    text: 'Letakkan atau seret GIF tersebut dari folder Anda sampai Anda menjatuhkannya ke kotak pemrosesan kami.',
  },
  {
    name: 'Perhitungan Bersih Bingkai Pertama',
    text: 'Dalam hitungan detik, animasi akan diekstrak dan JPG latar belakang putih pekat dibuat tanpa menghubungi server.',
  },
  {
    name: 'Dapatkan dalam Bentuk Paket ZIP',
    text: 'Unduh melalui tombol atau menggunakan ZIP jika Anda memproses banyak file.',
  },
];

const seo: GifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverter GIF ke JPG: Ekstrak Bingkai sebagai Gambar Berkualitas Tinggi',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'File GIF telah mendominasi dunia animasi pendek di internet selama beberapa dekade. Namun, sifat animasinya membuatnya sangat tidak berguna sebagai thumbnail, pratinjau untuk jejaring sosial, atau gambar untuk dokumen. Saat Anda perlu mengekstrak bingkai tertentu dari GIF dan mengubahnya menjadi gambar statis berkualitas tinggi, konversi ke JPG adalah solusi yang paling praktis dan kompatibel.',
  },
  {
    type: 'title',
    text: 'GIF atau JPG? Format dengan tujuan yang berlawanan',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIF (Graphics Interchange Format) dirancang pada tahun 1987 dengan batasan ketat yang masih berlaku hingga sekarang: GIF hanya dapat mewakili 256 warna per bingkai. Batasan teknis ini tidak menjadi masalah untuk animasi sederhana dengan palet warna yang sedikit, namun hal ini menjadikannya format yang secara visual buruk untuk pengambilan foto asli. Sebaliknya, JPG dapat merender jutaan warna dengan algoritma kompresi perseptual tingkat lanjut.',
  },
  {
    type: 'paragraph',
    html: 'Mengekstrak bingkai dari GIF dan menyimpannya sebagai JPG memiliki banyak kegunaan: membuat thumbnail untuk pemutar video, membuat pratinjau untuk platform manajemen konten, mendapatkan gambar statis untuk presentasi, atau sekadar mengarsipkan momen visual dari animasi yang kompleks. File JPG yang dihasilkan akan jauh lebih ringan daripada GIF asli dan kompatibel secara universal.',
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
        description: 'Alat yang mengunggah file Anda ke server jarak jauh untuk diproses.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'GIF Anda dikirim melalui internet ke server pihak ketiga',
          'Latensi jaringan saat mengunggah dan mengunduh',
          'Batasan ukuran dan file per sesi',
          'Risiko penyimpanan data di server orang lain',
        ],
      },
      {
        title: 'Arsitektur Lokal Kami',
        description: 'Pemrosesan langsung di perangkat keras Anda melalui teknologi Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'GIF tidak pernah meninggalkan perangkat Anda',
          'Kecepatan instan tanpa waktu tunggu jaringan',
          'Tanpa batasan ukuran atau jumlah file',
          'Privasi total: 0 byte dikirim ke luar',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Bagaimana cara kerja ekstraksi teknis bingkai tersebut',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Konversi lokal didasarkan pada kekuatan Canvas API HTML5. Saat Anda memuat GIF, browser akan mendeskripsinya di memori sebagai elemen Image asli. Saat merendernya pada kanvas yang tidak terlihat, mesin grafis browser secara otomatis menangkap bingkai pertama dari urutan animasi.',
  },
  {
    type: 'paragraph',
    html: 'Karena format JPG tidak mendukung transparansi, algoritma kami menerapkan latar belakang putih pekat sebelum mengekspor. Metode <code>toDataURL(\'image/jpeg\')</code> pada kanvas menghasilkan byte stream JPG langsung di memori RAM komputer Anda, tanpa koneksi jaringan apa pun. File yang dihasilkan akan segera diunduh ke perangkat Anda.',
  },
  {
    type: 'tip',
    title: 'Palet warna GIF yang terbatas',
    html: 'GIF hanya dapat mengandung 256 warna per bingkai. JPG yang diekstraksi akan mewarisi palet yang dikurangi itu dari aslinya: jika GIF tersebut memiliki gradasi atau foto, JPG tersebut mungkin terlihat mengalami posterisasi. Untuk hasil terbaik, gunakan GIF dengan warna sederhana atau ilustrasi.',
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
      'Thumbnail dan pratinjau untuk platform video dan CMS.',
      'Gambar sampul untuk postingan di jejaring sosial.',
      'Penyisipan ke dalam dokumen Word, PowerPoint, atau PDF.',
      'File presentasi dan materi pemasaran.',
      'Kompatibilitas universal dengan penampil di Windows, macOS, dan seluler.',
    ],
  },
  {
    type: 'title',
    text: 'Kesimpulan: Bingkai yang jauh lebih berharga daripada animasinya',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Sebuah GIF animasi berukuran 2 MB dapat menghasilkan JPG bingkai pertama yang berukuran hanya sekitar 50-200 KB, tergantung pada resolusinya. Alat kami melakukan konversi ini secara instan, pribadi, dan tanpa batas langsung di dalam browser Anda. Tanpa server, tanpa akun, tanpa waktu tunggu.',
  },
];


export const content: GifAJpgLocaleContent = {
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
