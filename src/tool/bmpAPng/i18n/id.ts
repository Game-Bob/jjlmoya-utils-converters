import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAPngLocaleContent } from '../index';

const slug = 'konverter-bmp-ke-png';
const title = 'Konverter BMP ke PNG';
const description =
  'Ubah gambar BMP ke PNG tanpa kehilangan kualitas. Kompresi modern tanpa artefak. Tanpa mengunggah file. Gratis dan 100% pribadi.';

const ui: ImageConverterUI = {
  dragText: 'Seret file BMP...',
  convertText: 'Untuk mengubahnya ke PNG secara instan',
  selectFiles: 'Pilih file',
  processedFiles: 'File yang diproses',
  downloadAll: 'Unduh Semua (.zip)',
  pending: 'Tertunda': 'Referensi Bibliografi',
  faqTitle: 'Pertanyaan Umum',
};

const faq: BmpAPngLocaleContent['faq'] = [
  {
    question: 'Apa perbedaan utama antara BMP dan PNG?',
    answer:
      'Baik BMP maupun PNG adalah format tanpa kehilangan kualitas (lossless). Perbedaannya terletak pada optimalisasi: PNG memahami algoritma kompresi modern untuk menyimpan gambar yang sama dengan memori yang 5 atau 10 kali lebih kecil daripada BMP.',
  },
  {
    question: 'Apakah konversi ini benar-benar pribadi?',
    answer:
      'Ya. Seluruh pemrosesan foto dilakukan oleh komputer Anda. Sama sekali tidak ada yang mengakses file Anda dalam transit lokal.',
  },
  {
    question: 'Mengapa memilih PNG daripada JPEG dalam kasus ini?',
    answer:
      'Jika Anda memiliki file BMP, itu karena gambar tersebut memiliki warna yang presisi. Mengubah BMP ke standar JPG yang merusak akan merusak warna murni Anda. PNG melindungi kesetiaan tersebut.',
  },
];

const howTo: BmpAPngLocaleContent['howTo'] = [
  {
    name: 'Masukkan Foto Anda',
    text: 'Pindahkan file sumber BMP dengan tenang ke area kami untuk melepaskan elemen web.',
  },
  {
    name: 'Konversi Tanpa Transmisi Jaringan',
    text: 'Saksikan hanya dalam satu detik pemrosesan bersih yang dilakukan secara lokal oleh JS HTML5 Anda.',
  },
  {
    name: 'Dapatkan PNG Murni',
    text: 'Unduh replika dalam format PNG satu per satu atau melalui paket terkompresi.',
  },
];

const seo: BmpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverter BMP ke PNG: Pengganti Tanpa Kehilangan untuk Format BMP',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMP adalah format tanpa kompresi yang memakan banyak ruang tanpa manfaat teknis apa pun dibandingkan dengan PNG. Keduanya adalah format tanpa kehilangan: mereka menyimpan setiap piksel dengan ketepatan absolut. Namun PNG menambahkan kompresi lossless melalui algoritma Deflate, yang mengurangi ukuran file antara 3 dan 5 kali lipat tanpa mengorbankan satu bit pun informasi visual. PNG, pada dasarnya, adalah apa yang selalu dicita-citakan oleh BMP.',
  },
  {
    type: 'title',
    text: 'BMP vs PNG: kualitas sama, ukuran sangat berbeda',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Perbedaan mendasar antara BMP dan PNG bukan pada kualitas gambar — keduanya tanpa kehilangan — tetapi pada efisiensi penyimpanan. BMP menyimpan piksel mentah: tanpa kompresi, tanpa optimalisasi, tanpa mempertimbangkan ruang. PNG menganalisis pola piksel yang berulang dan mengodekannya secara ringkas melalui Deflate, algoritma yang sama yang digunakan oleh ZIP.',
  },
  {
    type: 'paragraph',
    html: 'Selain kompresi yang unggul, PNG menambahkan fitur yang tidak pernah dimiliki BMP: saluran alfa lengkap untuk transparansi. Tangkapan layar, grafik antarmuka, logo, diagram teknis: semua jenis gambar ini sangat diuntungkan dari konversi ke PNG, yang mempertahankan setiap nilai warna yang tepat sambil mengurangi bobot file menjadi sebagian kecil saja dari aslinya.',
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
        description: 'Layanan yang memproses file BMP Anda di server pihak ketiga.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Gambar kerja Anda menjelajahi internet',
          'Waktu tunggu proporsional dengan ukuran BMP',
          'Batasan ukuran pada paket gratis',
          'Risiko analisis atau penyimpanan file Anda',
        ],
      },
      {
        title: 'Arsitektur Lokal Kami',
        description: 'Pemrosesan langsung di perangkat keras Anda melalui teknologi Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'BMP diproses secara lokal, tidak pernah meninggalkan perangkat Anda',
          'Konversi instan dalam hitungan milidetik',
          'Tanpa batasan ukuran atau jumlah file',
          'Privasi total: 0 byte dikirim ke luar',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Cara kerja konversi lokal dari BMP ke PNG',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Proses ini menggunakan Canvas API dari HTML5. File BMP dibaca dengan API <code>FileReader</code> browser dan didercode sebagai Blob di memori. Blob tersebut digambar di atas kanvas HTML5 yang tidak terlihat. Selanjutnya, metode <code>toDataURL(\'image/png\')</code> menerapkan algoritma kompresi PNG asli browser dan menghasilkan file yang dihasilkan.',
  },
  {
    type: 'paragraph',
    html: 'Berbeda dengan konversi ke JPG, konversi ke PNG sepenuhnya tanpa kehilangan: setiap nilai warna dari BMP asli dipertahankan secara tepat dalam PNG yang dihasilkan. Tidak ada artefak, tidak ada penghalusan tepi, tidak ada kehilangan informasi. File akhir secara visual identik dengan BMP tetapi memakan ruang disk 3 hingga 5 kali lebih sedikit.',
  },
  {
    type: 'paragraph',
    html: 'Jika Anda bekerja dengan perangkat lunak lama yang mengekspor BMP (mesin industri, sistem kontrol, perangkat lunak diagnostik medis), mengonversi ke PNG adalah keputusan terbaik. PNG kompatibel dengan hampir semua program modern, mempertahankan kesetiaan warna yang sempurna, dan memakan ruang hingga 5 kali lebih sedikit. Ini adalah migrasi yang paling sederhana dan paling aman.',
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
      'Tangkapan layar dan grafik antarmuka dengan warna yang tepat dipertahankan.',
      'Gambar dokumentasi teknis dan diagram perangkat lunak.',
      'Ekspor dari CAD, sistem industri, dan perangkat lunak lama.',
      'Logo dan elemen identitas visual dengan transparansi tambahan.',
      'Kompatibel dengan Adobe Photoshop, GIMP, Figma, dan semua editor modern.',
    ],
  },
  {
    type: 'title',
    text: 'Kesimpulan: PNG adalah wujud ideal yang selalu diinginkan BMP',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Mengonversi BMP ke PNG adalah modernisasi paling alami dari sebuah file gambar: kualitas tanpa kehilangan yang sama, kompatibilitas yang lebih besar, dukungan transparansi, dan bobot 3 hingga 5 kali lebih kecil. Alat kami melakukan konversi ini dalam hitungan milidetik, langsung di browser Anda, tanpa mengunggah file apa pun ke server mana pun.',
  },
];


export const content: BmpAPngLocaleContent = {
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
