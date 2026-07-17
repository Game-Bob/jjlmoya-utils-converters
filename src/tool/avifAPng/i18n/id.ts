import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAPngLocaleContent } from '../index';

const slug = 'konverter-avif-ke-png';
const title = 'Ubah AVIF ke PNG Online';
const description =
  'Ubah gambar AVIF ke PNG dengan tetap mempertahankan transparansi. Tanpa mengunggah file. Pemrosesan lokal di browser Anda. Gratis dan tidak terbatas.';

const ui: ImageConverterUI = {
  dragText: 'Seret file AVIF...',
  convertText: 'Untuk mengubahnya ke PNG secara instan',
  selectFiles: 'Pilih file',
  processedFiles: 'File yang diproses',
  downloadAll: 'Unduh Semua (.zip)',
  pending: 'Tertunda',
  bibliographyTitle: 'Referensi Bibliografi',
  faqTitle: 'Pertanyaan Umum',
};

const faq: AvifAPngLocaleContent['faq'] = [
  {
    question: 'Mengapa saya harus mengubah AVIF ke PNG?',
    answer:
      'AVIF sangat bagus untuk kompresi, tetapi kompatibilitasnya terbatas pada browser lama dan editor klasik. Dengan mengubah dari AVIF ke PNG, Anda memastikan bahwa file Anda akan mempertahankan transparansi asli dan semua aplikasi dapat membukanya.',
  },
  {
    question: 'Apakah transparansi file AVIF asli tetap dipertahankan?',
    answer:
      'Ya. Berbeda dengan JPG yang menghapus latar belakang transparan, saat mengekspor ke PNG, konverter kami menjaga saluran alfa tetap utuh.',
  },
  {
    question: 'Apakah benar gambar saya tidak diunggah ke internet?',
    answer:
      'Benar sekali. Konverter kami berjalan 100% secara lokal di perangkat Anda menggunakan mesin JavaScript internal.',
  },
];

const howTo: AvifAPngLocaleContent['howTo'] = [
  {
    name: 'Tambahkan file AVIF Anda',
    text: 'Anda dapat menyeretnya langsung ke area yang ditentukan atau menggunakan tombol untuk menjelajahi folder di komputer Anda.',
  },
  {
    name: 'Pemrosesan segera',
    text: 'Biarkan prosesor HTML5 merender gambar; format akan berubah menjadi PNG secara otomatis dalam hitungan mikrodetik.',
  },
  {
    name: 'Dapatkan file PNG Anda',
    text: 'Unduh gambar yang dikonversi satu per satu atau unduh seluruh blok melalui tombol ZIP.',
  },
];

const seo: AvifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverter AVIF ke PNG: Dari Pengiriman Web ke Pengeditan Profesional',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF adalah format ideal untuk menyajikan gambar di web - kecil, efisien, dan berkualitas tinggi. Namun saat tiba waktunya untuk mengedit, merekayasa ulang, atau mengerjakan gambar tersebut di alat desain, AVIF menjadi penghalang. Figma, Photoshop, Illustrator, Sketch, dan hampir semua alat desain profesional mengharapkan PNG untuk pengerjaan transparansi dan pengeditan tanpa kehilangan. Mengubah AVIF ke PNG adalah jembatan antara dunia pengiriman web dan dunia pengeditan kreatif.',
  },
  {
    type: 'title',
    text: 'AVIF vs PNG: Pengiriman vs Pengeditan',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF menonjol sebagai format pengiriman: file kecil, pemuatan cepat, dukungan saluran alfa, dan kualitas visual yang luar biasa. Namun, ekosistem alatnya terbatas. Sebagian besar perangkat lunak desain tidak dapat mengimpor AVIF secara langsung, yang mengganggu alur kerja kreatif. Mencoba membuka AVIF di Figma atau mengimpornya sebagai lapisan di Photoshop tidak akan berhasil.',
  },
  {
    type: 'paragraph',
    html: 'PNG adalah format asli dari desain digital. Dengan kompresi tanpa kehilangan, dukungan saluran alfa penuh, dan kompatibilitas universal dengan semua alat kreatif, PNG adalah format kerja par excellence. Saat Anda perlu menskalakan, merekayasa ulang, mengekspor ke berbagai format, atau bekerja dalam lapisan, PNG menjamin bahwa Anda tidak akan kehilangan detail atau piksel apa pun dalam prosesnya.',
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
          'Gambar desain Anda dikirim ke server pihak ketiga',
          'Waktu tunggu karena latensi jaringan',
          'Kemungkinan kehilangan atau perubahan saluran alfa',
          'Batasan ukuran yang mempersulit konversi massal',
        ],
      },
      {
        title: 'Arsitektur Lokal Kami',
        description: 'Pemrosesan langsung di browser Anda menggunakan teknologi Vanilla JS dan Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Saluran alfa dipertahankan dengan ketepatan sempurna',
          'Konversi instan tanpa transfer data',
          'Tanpa batasan file, ukuran, maupun batch',
          'Privasi total untuk aset desain milik sendiri',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Cara kerja konversi teknis dengan transparansi',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Browser modern mendekode AVIF secara asli berkat mesin AV1 terintegrasi mereka. Saat memuat file, browser mendekodenya dalam memori dengan tetap mempertahankan semua informasi saluran alfa. Gambar yang didekodekan - termasuk transparansinya - digambar di atas elemen <code>Canvas</code> HTML5 dengan mode komposisi yang tepat untuk mempertahankan saluran alfa.',
  },
  {
    type: 'paragraph',
    html: 'Berbeda dengan ekspor ke JPG (yang merusak transparansi dengan mengisinya dengan warna putih), ekspor ke PNG menggunakan <code>toBlob(\'image/png\')</code> mempertahankan saluran alfa secara utuh. Hasilnya adalah PNG dengan kompresi tanpa kehilangan yang menjaga setiap piksel, setiap semi-transparansi, dan setiap detail dari AVIF asli.',
  },
  {
    type: 'tip',
    title: 'Langkah awal wajib untuk alat desain apa pun',
    html: 'Ubah AVIF Anda ke PNG sebelum mengimpornya ke Figma, Photoshop, Illustrator, atau alat desain apa pun. Aplikasi ini tidak membaca AVIF secara langsung, tetapi PNG berfungsi secara asli di semuanya, mempertahankan transparansi dan kualitas dengan sempurna.',
  },
  {
    type: 'title',
    text: 'Kasus penggunaan: kapan Anda membutuhkan AVIF dikonversi ke PNG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Impor ke Figma, Sketch, Adobe XD, atau alat desain UI lainnya.',
      'Edit sebagai lapisan di Photoshop, Affinity Photo, atau GIMP dengan tetap mempertahankan transparansi.',
      'Gunakan sebagai sumber untuk pembuatan ikon atau sprite.',
      'Kirim ke klien atau kolaborator yang bekerja dengan perangkat lunak desain standar.',
      'Arsipkan gambar dengan transparansi dalam format pengeditan tanpa kehilangan.',
    ],
  },
  {
    type: 'title',
    text: 'Kesimpulan: Jembatan antara web dan desain',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF dan PNG adalah mitra sempurna dalam alur kerja modern: AVIF untuk pengiriman web yang efisien, PNG untuk pengeditan dan kolaborasi dalam alat desain. Dengan konverter kami, peralihan dari satu ke yang lain bersifat instan, pribadi, dan mempertahankan setiap detail - tepat seperti yang Anda butuhkan saat aset visual Anda sangat penting.',
  },
];


export const content: AvifAPngLocaleContent = {
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
