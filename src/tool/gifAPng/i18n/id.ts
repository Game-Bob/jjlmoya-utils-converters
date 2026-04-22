import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAPngLocaleContent } from '../index';

const slug = 'konverter-gif-ke-png';
const title = 'Ubah GIF ke PNG Online';
const description =
  'Ekstrak bingkai pertama dari GIF Anda dan ubah ke PNG dengan tetap mempertahankan transparansi. Tanpa server. Pemrosesan lokal. Gratis.';

const ui: ImageConverterUI = {
  dragText: 'Seret file GIF...',
  convertText: 'Untuk mengubahnya ke PNG secara instan',
  selectFiles: 'Pilih file',
  processedFiles: 'File yang diproses',
  downloadAll: 'Unduh Semua (.zip)',
  pending: 'Tertunda': 'Referensi Bibliografi',
  faqTitle: 'Pertanyaan Umum',
};

const faq: GifAPngLocaleContent['faq'] = [
  {
    question: 'Mengapa mengubah format animasi seperti GIF ke format statis seperti PNG?',
    answer:
      'Banyak jejaring sosial atau avatar tidak mendukung foto yang bergerak. Mengekstrak bingkai pertama dari GIF yang kompleks menjadi PNG berkualitas tinggi mengatasi hambatan tersebut dan mengurangi ukuran file yang tidak perlu.',
  },
  {
    question: 'Apakah transparansi dari GIF lama tetap terjaga pada PNG yang dihasilkan?',
    answer:
      'Ya, berbeda dengan JPG, format PNG tetap mempertahankan saluran alfa. Jika GIF memiliki latar belakang transparan, PNG akan tetap menjaganya dengan tepi yang tajam.',
  },
  {
    question: 'Apakah Anda menyimpan gambar saya di server untuk beberapa waktu setelah pemrosesan?',
    answer:
      'Tidak ada server yang menyimpan GIF Anda; seluruh ekstraksi dilakukan secara lokal berkat Web Canvas API. Prosesor PC Anda yang akan mendeskripsinya secara aman tanpa koneksi jaringan apa pun.',
  },
];

const howTo: GifAPngLocaleContent['howTo'] = [
  {
    name: 'Berikan Animasi',
    text: 'Seret file GIF yang berat ke dalam kotak input.',
  },
  {
    name: 'Foto Ekstraksi Sempurna',
    text: 'Sistem akan menghentikan asal gerakan secara tepat, menghasilkan salinan yang tanpa cacat dalam hitungan milidetik.',
  },
  {
    name: 'Simpan Gambar Statis Anda',
    text: 'Simpan semua avatar GIF statis yang telah diubah ke format PNG secara massal dalam bentuk ZIP.',
  },
];

const seo: GifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverter GIF ke PNG: Lampaui Batas Warna dan Transparansi GIF',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'GIF dirancang pada masa ketika monitor hampir tidak bisa menampilkan 256 warna. Puluhan tahun kemudian, batasan tersebut tetap menjadi kelemahan terbesarnya. PNG lahir tepat untuk menggantikan GIF dalam semua kasus penggunaan di mana kualitas dan transparansi sangat penting: logo, ikon, grafik antarmuka, dan gambar apa pun dengan latar belakang transparan yang harus terlihat sempurna di atas warna latar belakang apa pun.',
  },
  {
    type: 'title',
    text: 'GIF vs PNG: Revolusi 16 juta warna',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Perbedaan paling kritis antara GIF dan PNG bukan hanya jumlah warnanya. GIF mendukung transparansi biner: setiap piksel bersifat buram atau transparan sepenuhnya, tanpa gradasi. Sebaliknya, PNG mendukung saluran alfa penuh, dengan 256 tingkat opasitas per piksel. Ini berarti tepi logo dalam format PNG bisa dihaluskan dengan sempurna, sementara tepi pada GIF menunjukkan bentuk bergerigi yang khas di atas latar belakang berwarna.',
  },
  {
    type: 'paragraph',
    html: 'Selain transparansi yang lebih unggul, PNG menghilangkan batas 256 warna pada GIF. Tangkapan layar, ilustrasi dengan gradasi, logo dengan bayangan: semuanya terlihat jauh lebih baik dalam format PNG. Dan karena merupakan kompresi tanpa kehilangan data, setiap piksel tetap mempertahankan nilai aslinya secara tepat, tanpa adanya artefak yang muncul jika dikonversi ke JPG.',
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
        description: 'Alat yang memproses gambar Anda di server jarak jauh.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Logo dan ikon Anda dikirim melalui internet',
          'Waktu tunggu karena latensi jaringan',
          'Batasan ukuran dan jumlah file',
          'Gambar Anda mungkin tetap ada di cache pihak ketiga',
        ],
      },
      {
        title: 'Arsitektur Lokal Kami',
        description: 'Pemrosesan langsung di perangkat keras Anda melalui teknologi Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'GIF tidak pernah meninggalkan perangkat Anda',
          'Konversi instan tanpa jaringan',
          'Tanpa batasan jumlah file atau ukuran',
          'Privasi absolut: 0 byte dikirim ke luar',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Bagaimana cara kerja konversi lokal GIF ke PNG',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Konversi ini menggunakan Canvas API browser. GIF dideskripsikan di memori sebagai elemen Image asli. Saat me-rendernya pada kanvas HTML5, mesin grafis browser menangkap bingkai pertama dengan seluruh informasi transparansi aslinya tetap utuh.',
  },
  {
    type: 'paragraph',
    html: 'Berbeda dengan konversi ke JPG, dengan PNG tidak perlu menambahkan latar belakang putih. Saluran alfa dari GIF asli dipertahankan secara langsung dalam PNG yang diekspor. Metode <code>toDataURL(\'image/png\')</code> menghasilkan byte stream PNG di RAM komputer Anda tanpa transmisi jaringan apa pun, dan file akan segera diunduh.',
  },
  {
    type: 'tip',
    title: 'Transparansi biner GIF vs saluran alfa PNG',
    html: 'GIF hanya mendukung transparansi biner (buram atau transparan). Saat dikonversi ke PNG, piksel semi-transparan dari GIF tetap dipertahankan seperti yang diinterpretasikan oleh browser. Jika GIF Anda memiliki tepi yang bergerigi, PNG akan tetap menjaganya — tetapi Anda dapat mengeditnya dengan penghalusan tepi di editor mana pun, sesuatu yang tidak mungkin dilakukan dengan GIF asli.',
  },
  {
    type: 'title',
    text: 'Kasus penggunaan dan kompatibilitas PNG yang dihasilkan',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Logo dan ikon untuk digunakan di atas latar belakang warna apa pun.',
      'Avatar untuk Discord, Telegram, Slack, dan platform gaming.',
      'Grafik antarmuka untuk aplikasi web dan seluler.',
      'Stiker dan emoji khusus dengan latar belakang transparan.',
      'Tangkapan layar dan elemen UI untuk dokumentasi teknis.',
    ],
  },
  {
    type: 'title',
    text: 'Kesimpulan: PNG adalah bentuk yang selalu diinginkan oleh GIF',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Mengonversi dari GIF ke PNG bukan sekadar mengubah format: ini adalah memperbarui gambar ke standar modern yang tidak pernah bisa dicapai oleh GIF. Lebih banyak warna, transparansi yang lebih baik, ukuran yang lebih ringan. Alat kami melakukan konversi ini dalam hitungan milidetik, langsung di browser Anda, tanpa mengirim data apa pun ke luar.',
  },
];


export const content: GifAPngLocaleContent = {
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
