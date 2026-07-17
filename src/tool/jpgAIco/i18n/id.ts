import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAIcoLocaleContent } from '../index';

const slug = 'konverter-jpg-ke-ico';
const title = 'Konverter JPG ke ICO';
const description =
  'Konversi foto JPG ke ICO dengan header biner Microsoft asli. Pemangkasan persegi otomatis. Tanpa pengunggahan file. Gratis dan privat.';

const ui: ImageConverterUI = {
  dragText: 'Tarik file JPG...',
  convertText: 'Untuk mengonversinya ke ICO secara instan',
  selectFiles: 'Pilih file',
  processedFiles: 'File yang diproses',
  downloadAll: 'Unduh Semua (.zip)',
  pending: 'Menunggu',
  bibliographyTitle: 'Referensi Bibliografi',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
};

const faq: JpgAIcoLocaleContent['faq'] = [
  {
    question: 'Apakah file ICO yang dihasilkan kompatibel secara native untuk menyesuaikan folder Windows?',
    answer:
      'Ya, kami membuat file Microsoft Icon Format yang 100% otentik dengan memasukkan header biner standar pada tingkat rendah ke dalam matriks gambar.',
  },
  {
    question: 'Apa yang terjadi dengan proporsi jika JPG asli saya adalah foto horizontal panorama?',
    answer:
      'Standar ICO global yang ketat mutlak memerlukan gambar persegi yang sempurna. Mesin HTML5 JS kami akan memusatkan foto Anda und memotong kelebihannya, menjamin hasil yang seimbang.',
  },
  {
    question: 'Apakah berbahaya mengunggah logo JPG perusahaan atau pribadi ke konverter ini?',
    answer:
      'Mesin Canvas di JavaScript berada di browser fisik Anda sendiri. Mengonversi ratusan foto ke ICO tidak mengirim satu megabita pun ke cloud mana pun di negara-negara yang meragukan.',
  },
];

const howTo: JpgAIcoLocaleContent['howTo'] = [
  {
    name: 'Kumpulkan foto JPG asli',
    text: 'Temukan und kumpulkan foto konvensional und simpan dengan menjatuhkannya ke dalam kotak ramah kami.',
  },
  {
    name: 'Saksikan pemurnian heksadesimal buta',
    text: 'Pengkodean ulang akan secara native und cepat memasukkan metadata und header secara asinkron yang menghasilkan ikon murni yang ketat di memori.',
  },
  {
    name: 'Kompilasi beberapa desain ZIP',
    text: 'Selesaikan pekerjaan dengan mengunduh semuanya secara massal dalam paket kompak hanya dalam hitungan detik.',
  },
];

const seo: JpgAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverter JPG ke ICO: Buat Favicon und Ikon Windows dari Foto Anda',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Format <strong>ICO</strong> adalah standar Microsoft untuk ikon aplikasi Windows und favicon situs web. Berbeda dengan sekadar mengganti nama JPG menjadi .ico, file ICO asli memerlukan struktur biner khusus dengan header 22-byte und direktori gambar yang disematkan. <strong>JPG</strong> adalah titik awal yang paling umum untuk membuat ikon-ikon ini - logo perusahaan, foto profil, atau gambar apa pun yang ingin Anda ubah menjadi ikon visual aplikasi atau situs web Anda.',
  },
  {
    type: 'title',
    text: 'JPG atau ICO? Kapan menggunakan masing-masing format',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> adalah format sumber, bukan tujuan untuk ikon. Sempurna untuk foto und banner, tetapi tidak kompatibel dengan sistem yang memerlukan ikon: Windows Explorer, bilah bookmark browser, pintasan desktop, atau manifes aplikasi PWA. Sistem operasi atau browser yang mencari ikon mengharapkan format ICO - und jika tidak menemukannya, ia akan menampilkan ikon generik atau kotak rusak.',
  },
  {
    type: 'paragraph',
    html: 'Format <strong>ICO</strong> dirancang untuk menampung beberapa resolusi dalam satu file: <strong>16×16</strong> untuk bilah bookmark, <strong>32×32</strong> untuk pintasan, <strong>48×48</strong> untuk file explorer, und <strong>256×256</strong> untuk layar dengan kepadatan tinggi. Browser und sistem operasi secara otomatis memilih resolusi yang sesuai berdasarkan konteks tampilan - pengguna tidak perlu mengelola apa pun.',
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
    html: 'JPG didekodekan und digambar ke dalam <strong>HTML5 Canvas</strong> di memori. Karena format ICO memerlukan gambar persegi, mesin secara otomatis mendeteksi jika JPG berbentuk persegi panjang und memotongnya dengan memusatkan bagian yang paling relevan. Kemudian ia membangun header Microsoft ICO standar dengan magic number yang benar (<code>00 00 01 00</code>), direktori gambar, und data piksel yang dikodekan. Hasilnya adalah file biner .ico asli - bukan PNG yang diganti namanya.',
  },
  {
    type: 'paragraph',
    html: 'Karena JPG tidak memiliki saluran alfa, ICO yang dihasilkan juga tidak akan memiliki transparansi - ia akan memiliki latar belakang padat yang diwarisi dari foto asli. Jika Anda memerlukan favicon dengan latar belakang transparan (misalnya, untuk beradaptasi dengan bilah bookmark gelap atau terang), alur kerja yang disarankan adalah: hapus latar belakang di editor, simpan sebagai PNG, und gunakan konverter PNG ke ICO.',
  },
  {
    type: 'tip',
    title: 'Tip: beberapa resolusi dalam satu ICO',
    html: 'File ICO dapat mengemas <strong>beberapa resolusi</strong> ke dalam satu file - browser atau OS secara otomatis memilih yang paling sesuai untuk setiap konteks. Untuk hasil terbaik, gunakan JPG persegi minimal <strong>256×256 piksel</strong> sebagai sumber Anda: ini memberi konverter informasi yang cukup untuk menghasilkan ukuran 16×16, 32×32, und 48×48 yang tajam tanpa pikselasi.',
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
      'Favicon situs web: kompatibel dengan semua browser termasuk Internet Explorer.',
      'Kustomisasi ikon folder und desktop di Windows 10/11.',
      'Ikon pintasan untuk aplikasi desktop atau penginstal.',
      'Ikon aplikasi untuk proyek Electron atau aplikasi PWA.',
      'Ikon untuk sistem manajemen file und file explorer perusahaan.',
    ],
  },
  {
    type: 'title',
    text: 'Kesimpulan',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Mengonversi JPG ke ICO adalah langkah teknis yang penting untuk proyek web atau desktop mana pun yang membutuhkan identitas visual yang mudah dikenali. Alat ini menghasilkan ICO otentik dengan struktur biner yang benar, dalam hitungan detik, tanpa mengunggah logo Anda ke server eksternal mana pun. Hasilnya berfungsi di semua browser, di Windows Explorer, und di sistem mana pun yang menggunakan standar ICO Microsoft.',
  },
];

export const content: JpgAIcoLocaleContent = {
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
