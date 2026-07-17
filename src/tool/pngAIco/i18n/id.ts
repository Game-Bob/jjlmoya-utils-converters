import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAIcoLocaleContent } from '../index';

const slug = 'konverter-png-ke-ico';
const title = 'Konversi PNG ke ICO Online';
const description =
  'Konversi PNG ke ICO dengan header biner asli. Transparansi dipertahankan. Tanpa pengunggahan file. Gratis dan 100% pribadi.';

const ui: ImageConverterUI = {
  dragText: 'Tarik file PNG...',
  convertText: 'Untuk mengkonversinya ke ICO secara instan',
  selectFiles: 'Pilih file',
  processedFiles: 'File yang diproses',
  downloadAll: 'Unduh Semua (.zip)',
  pending: 'Menunggu',
  bibliographyTitle: 'Referensi Bibliografi',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
};

const faq: PngAIcoLocaleContent['faq'] = [
  {
    question: 'Apakah konverter Anda pembuat file PNG sederhana yang menyamar atau ICO asli?',
    answer:
      'Kami membuat ICO asli. Kami mengekstrak data dari PNG Anda, membuat header heksadesimal Microsoft yang terstandarisasi (Header + Direktori 22 byte), mengubah ukuran ke format persegi yang ideal secara lokal dan menyusun file akhir yang divalidasi sebagai native.',
  },
  {
    question: 'Apakah transparansi dipertahankan saat logo saya dimasukkan ke dalam ikon?',
    answer:
      'Tentu saja ya. Mesin kami membaca PNG Anda pada 32 bit, menambatkannya sambil mempertahankan dengan tepat setiap lubang tembus transparan sehingga menonjol di bilah alamat web universal (Favicon).',
  },
  {
    question: 'Apakah logo perusahaan saya disimpan di server Anda?',
    answer:
      'Layanan ini menjamin nol kontak jaringan eksternal. Konverter bekerja tertambat di HTML5 Canvas internal Anda; pembuatan ikon Anda terjadi seratus persen di dalam mesin Anda di memori lokal yang murni rahasia.',
  },
];

const howTo: PngAIcoLocaleContent['howTo'] = [
  {
    name: 'Tarik file untuk mentransfer',
    text: 'Letakkan matriks foto Anda (PNG persegi 512x512 sangat ideal) pada bingkai lokal interaktif.',
  },
  {
    name: 'Kompilasi bytecode otomatis',
    text: 'Anda akan melihat bilah berjalan secara internal memuat dan memproduksi matriks lokal dari header heksadesimal ICO yang dimurnikan.',
  },
  {
    name: 'Akumulasi atau keluar dengan ZIP Anda',
    text: 'Unduh dengan mengeklik kompilasi mega untuk situs web Anda (tombol ZIP global) atau unduh thumbnail untuk executable Windows.',
  },
];

const seo: PngAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverter PNG ke ICO: Sumber Terbaik untuk Favicon dengan Transparansi Sempurna',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG dengan transparansi</strong> adalah bahan awal yang ideal untuk membuat ikon ICO profesional. Tidak seperti JPG (yang tidak memiliki saluran alfa) atau format lossy, PNG memberikan apa yang dibutuhkan format ICO: piksel yang tajam, tepi yang bersih, und saluran alfa 32-bit yang memungkinkan ikon berintegrasi sempurna di latar belakang apa pun - baik bilah bookmark putih Safari, bilah gelap Firefox, atau desktop Windows 11.',
  },
  {
    type: 'title',
    text: 'PNG atau ICO? Kapan menggunakan masing-masing format',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> adalah format kerja: di sinilah Anda mendesain logo, mengekspor dari Figma atau Illustrator, und menyimpan versi yang dapat diedit. Transparansi, presisi piksel, und kompresi lossless menjadikannya tak terkalahkan untuk proses desain. Namun browser, sistem operasi, und aplikasi Windows yang mencari favicon atau ikon aplikasi tidak menerima PNG secara langsung - mereka membutuhkan ICO.',
  },
  {
    type: 'paragraph',
    html: '<strong>ICO</strong> adalah format distribusi untuk ikon di lingkungan Microsoft und web. Ini berisi struktur biner khusus yang memungkinkan beberapa resolusi dikemas ke dalam satu file: browser membaca direktori internal ICO und secara otomatis memilih <strong>16×16</strong> untuk tab browser, <strong>32×32</strong> untuk pintasan, <strong>48×48</strong> untuk file explorer, und <strong>256×256</strong> untuk layar Retina und 4K. Memulai dari PNG transparan menjamin bahwa semua resolusi tersebut akan memiliki tepi yang sempurna tanpa pinggiran putih.',
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
          'Latensi jaringan saat mengunggah und mengunduh',
          'Logo perusahaan Anda disimpan di server pihak ketiga',
          'Batas ukuran file und batasan konversi harian',
          'Iklan yang mengganggu und pelacak pihak ketiga',
        ],
      },
      {
        title: 'Arsitektur Lokal Kami',
        description: 'Pemrosesan langsung pada perangkat keras Anda menggunakan teknologi Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Kecepatan instan - nol latensi jaringan',
          'Privasi lengkap - 0 byte dikirim secara eksternal',
          'Tanpa batas MB atau batasan jumlah file',
          'Antarmuka bersih, tanpa iklan atau pelacakan',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Cara kerjanya secara teknis',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'PNG didekodekan ke dalam <strong>HTML5 Canvas</strong> dalam memori dengan dukungan saluran alfa 32-bit penuh. Mesin membangun header Microsoft ICO standar dengan magic number yang benar (<code>00 00 01 00</code>), direktori gambar dengan dimensi und offset data, und data piksel sambil mempertahankan informasi transparansi. Hasilnya adalah file biner .ico asli yang dikenali secara native oleh Windows, macOS, und semua browser.',
  },
  {
    type: 'paragraph',
    html: 'Transparansi PNG dipertahankan sepenuhnya dalam ICO yang dihasilkan - piksel transparan tetap transparan, piksel semi-transparan mempertahankan nilai alfa yang tepat, und piksel opak mempertahankan warna aslinya. Ini sangat penting untuk logo pada latar belakang variabel: favicon Anda akan terlihat benar dalam mode terang, mode gelap, und kombinasi warna antarmuka browser apa pun.',
  },
  {
    type: 'tip',
    title: 'Tip: gunakan PNG 512×512 sebagai sumber Anda',
    html: 'Untuk hasil terbaik, gunakan <strong>PNG persegi 512×512</strong> sebagai gambar sumber Anda. Resolusi ini memberikan informasi yang cukup kepada konverter untuk menghasilkan semua ukuran ICO standar dengan tajam - dari favicon 16×16 hingga 256×256 untuk layar dengan kepadatan tinggi - tanpa pikselasi atau kehilangan detail tepi. Semakin besar sumber PNG, semakin baik tampilan ukuran ikon kecil.',
  },
  {
    type: 'title',
    text: 'Kasus penggunaan und kompatibilitas',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Favicon transparan untuk situs web: berfungsi di Chrome, Firefox, Safari, Edge, e Internet Explorer.',
      'Ikon aplikasi PWA: manifest.json mereferensikan ICO untuk instalasi desktop.',
      'Kustomisasi folder Windows 10/11 dengan logo perusahaan und tanpa latar belakang putih.',
      'Ikon pintasan untuk aplikasi desktop, penginstal, und executable.',
      'Ikon ekstensi browser untuk ekstensi Chrome und Firefox.',
    ],
  },
  {
    type: 'title',
    text: 'Kesimpulan',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'PNG dengan transparansi tidak diragukan lagi merupakan titik awal terbaik untuk membuat ikon ICO berkualitas profesional. Dengan alat ini, konversi dilakukan secara instan, saluran alfa dipertahankan sepenuhnya, und file yang dihasilkan adalah ICO asli dengan struktur biner yang benar. Tidak perlu mengunggah logo ke server mana pun, tanpa watermark, tanpa batas - und transparansi sempurna di semua ukuran.',
  },
];

export const content: PngAIcoLocaleContent = {
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
