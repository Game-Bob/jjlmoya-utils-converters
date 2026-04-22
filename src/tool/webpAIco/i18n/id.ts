import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAIcoLocaleContent } from '../index';

const slug = 'konverter-webp-ke-ico';
const title = 'Konversi WebP ke ICO';
const description =
  'Konversi gambar WebP ke ICO resmi dengan transparansi. Tanpa unggah file. Header biner Microsoft asli. Gratis dan pribadi.';

const ui: ImageConverterUI = {
  dragText: 'Tarik file WebP...',
  convertText: 'Untuk mengkonversinya ke ICO secara instan',
  selectFiles: 'Pilih file',
  processedFiles: 'File yang diproses',
  downloadAll: 'Unduh Semua (.zip)',
  pending: 'Menunggu': 'Referensi Bibliografi',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
};

const faq: WebpAIcoLocaleContent['faq'] = [
  {
    question: 'Dapatkah saya mengonversi desain stiker WebP ke Favicon ICO web resmi?',
    answer:
      'Tepat sekali. Favicon masih memerlukan ekstensi Microsoft ICO klasik untuk kompatibilitas universal yang ekstrem. Alat ini akan menyuntikkan header biner untuk membangun ikon yang 100% sah.',
  },
  {
    question: 'Apakah saya harus menunggu dalam antrean online saat membuat tumpukan ikon perusahaan dalam jumlah besar?',
    answer:
      'Sama sekali tidak. Konverter kami memuat Javascript dan memutus jaringan unggahan apa pun. CPU perangkat Anda sendiri memproses seratus foto atau lebih secara asinkron.',
  },
  {
    question: 'Apakah ICO yang dihasilkan akan mendukung transparansi dari WebP asli saya?',
    answer:
      'Ya. Mesin kami bekerja secara internal dengan API HTML5 canvas dengan dukungan penuh 32-bit, setiap area transparan akan ditransfer dengan bersih ke dalam file ikonografi.',
  },
];

const howTo: WebpAIcoLocaleContent['howTo'] = [
  {
    name: 'Tarik semua stiker WebP lokal Anda',
    text: 'Pindahkan kumpulan foto dalam jumlah besar tanpa takut melampaui batas unggahan web.',
  },
  {
    name: 'Terjemahan asinkron logis dan perakitan langsung',
    text: 'Perhatikan bagaimana bilah progres dan elemen-elemen terisi secara otomatis saat memori memproses blok byte demi byte dari frame.',
  },
  {
    name: 'Ambil paket Anda untuk pengembangan sistem dan web',
    text: 'Klik tombol unduh berukuran besar dalam file gabungan atau unduh secara manual jika Anda hanya membutuhkan satu ikon.',
  },
];

const seo: WebpAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverter WebP ke ICO: Buat Favicon Sempurna dari Aset Modern Anda',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Alur kerja desain web modern menghasilkan aset dalam format <strong>WebP</strong>: logo yang dioptimalkan, ikon UI, dan elemen merek. Namun, saat tiba waktunya untuk mengonfigurasi <strong>favicon</strong> situs Anda atau ikon untuk aplikasi desktop Windows, format yang diperlukan masih <strong>ICO</strong>. Mengonversi WebP ke ICO memungkinkan Anda menggunakan kembali aset berkualitas tinggi tanpa kehilangan sumber asli.',
  },
  {
    type: 'title',
    text: 'WebP vs ICO: Format dengan Tujuan Berbeda',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP adalah format gambar untuk tujuan umum, sangat baik untuk foto, ilustrasi, dan ikon UI web. Kompresinya yang efisien menjadikannya ideal untuk mempercepat pemuatan halaman. Namun, format ini tidak memiliki struktur biner spesifik yang diperlukan oleh sistem operasi dan browser untuk mengenali dan menampilkan ikon aplikasi atau favicon.',
  },
  {
    type: 'paragraph',
    html: 'ICO adalah format kontainer Microsoft yang dirancang khusus untuk ikon. Format ini dapat menyimpan beberapa resolusi dalam satu file dan mendukung transparansi penuh melalui saluran alfa 32-bit. Browser mencari file <code>favicon.ico</code> secara konvensional, dan format ini memastikan ikon Anda terlihat tajam baik di layar standar maupun layar Retina dan 4K.',
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
          'Logo perusahaan Anda dikirim ke server pihak ketiga',
          'Koneksi internet diperlukan untuk setiap konversi',
          'Kualitas output yang bervariasi tergantung pada server',
          'Batasan jumlah konversi harian',
        ],
      },
      {
        title: 'Arsitektur Lokal Kami',
        description: 'Pemrosesan langsung pada perangkat keras Anda menggunakan teknologi Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Logo Anda tidak pernah meninggalkan browser',
          'Header biner ICO dihasilkan sesuai standar Microsoft',
          'Transparansi 32-bit dipertahankan sepenuhnya',
          'Konversi batch untuk set ikon lengkap',
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
    html: 'Browser mendekode file WebP secara native dan menggambarnya ke <strong>HTML5 Canvas</strong> dengan kedalaman warna 32-bit, dengan tetap mempertahankan saluran alfa asli. Mesin JavaScript kami kemudian mengekstrak data piksel melalui metode <code>getImageData()</code> dan membangun struktur biner ICO dengan header ICONDIR dan ICONDIRENTRY yang ditentukan oleh standar Microsoft.',
  },
  {
    type: 'paragraph',
    html: 'Hasilnya adalah file ICO yang sah, bukan sekadar mengganti nama file. Data piksel dikemas dengan struktur yang benar yang diharapkan oleh Windows, macOS, dan semua browser modern saat memuat favicon atau ikon aplikasi.',
  },
  {
    type: 'tip',
    title: 'Tip untuk favicon yang tajam',
    html: 'Selalu hasilkan ICO Anda dari sumber dengan resolusi tertinggi yang tersedia. WebP berukuran 512×512 atau lebih besar akan menghasilkan favicon yang sangat tajam pada layar Retina und 4K, di mana ikon beresolusi rendah akan terlihat kabur.',
  },
  {
    type: 'title',
    text: 'Kasus Penggunaan und Kompatibilitas',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Membuat file favicon.ico untuk situs web atau aplikasi web apa pun.',
      'Menghasilkan ikon aplikasi untuk installer perangkat lunak Windows.',
      'Memproduksi ikon desktop untuk aplikasi Electron atau framework serupa.',
      'Membuat set ikon untuk ekstensi browser Chrome dan Firefox.',
      'Mengonversi logo merek WebP menjadi ikon untuk aplikasi perusahaan.',
    ],
  },
  {
    type: 'title',
    text: 'Kesimpulan',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Alur kerja desain modern Anda menghasilkan WebP; ekosistem aplikasi masih menuntut ICO. Alat ini menjembatani kesenjangan tersebut dalam hitungan detik, menghasilkan ikon dengan struktur biner yang benar und transparansi yang utuh, tanpa membiarkan aset merek Anda meninggalkan browser.',
  },
];

export const content: WebpAIcoLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({
    title,
    description,
    inLanguage: 'id',
    faq,
    howTo,
  }),
};
