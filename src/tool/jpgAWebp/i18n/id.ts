import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAWebpLocaleContent } from '../index';

const slug = 'konverter-jpg-ke-webp';
const title = 'Konversi JPG ke WebP Online dan Gratis';
const description =
  'Konversi gambar JPG ke WebP di browser Anda. Kompresi unggul tanpa kehilangan kualitas visual. Tanpa pengunggahan file. Gratis, tidak terbatas, dan privat.';

const ui: ImageConverterUI = {
  dragText: 'Tarik file JPG...',
  convertText: 'Untuk mengonversinya ke WebP secara instan',
  selectFiles: 'Pilih file',
  processedFiles: 'File yang diproses',
  downloadAll: 'Unduh Semua (.zip)',
  pending: 'Menunggu',
  bibliographyTitle: 'Referensi Bibliografi',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
};

const faq: JpgAWebpLocaleContent['faq'] = [
  {
    question: 'Mengapa mengonversi foto JPG ke WebP?',
    answer:
      'WebP memungkinkan kompresi yang jauh lebih baik daripada file JPG tradisional tanpa mata manusia menyadari perbedaannya, menghasilkan situs web yang lebih cepat dan modern.',
  },
  {
    question: 'Apakah saya harus membayar per gambar?',
    answer:
      'Tidak, alat ini gratis dan semuanya diproses langsung di komputer Anda. Tidak terbatas untuk penggunaan rumah tangga atau profesional.',
  },
  {
    question: 'Apakah konversinya aman?',
    answer:
      'Ya, sepenuhnya. Semua pemrosesan terjadi di HTML5 Canvas browser lokal Anda tanpa mengirimkan data apa pun ke server eksternal.',
  },
];

const howTo: JpgAWebpLocaleContent['howTo'] = [
  {
    name: 'Masukkan foto JPG Anda',
    text: 'Letakkan file JPG Anda atau tarik langsung ke area atas. Deteksi dilakukan secara instan.',
  },
  {
    name: 'Pemrosesan ke WebP',
    text: 'Mesin rendering lokal akan mengonversi setiap file gambar menjadi WebP yang sangat optimal dan siap untuk web.',
  },
  {
    name: 'Unduh hasilnya',
    text: 'Simpan setiap WebP satu per satu atau unduh ZIP dengan semua file yang telah dikonversi.',
  },
];

const seo: JpgAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverter JPG ke WebP: Percepat Situs Anda dengan Format Modern Google',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Format <strong>JPG</strong> telah mendominasi fotografi digital selama beberapa dekade - kompatibel secara universal dan didukung secara luas. Namun Google merancang <strong>WebP</strong> untuk mengalahkan JPG di areanya sendiri: kualitas visual yang sama dengan ukuran file 25-35% lebih kecil. Bagi pengembang dan tim pemasaran yang berjuang melawan pemuatan halaman yang lambat, mengonversi JPG ke WebP adalah satu-satunya optimasi dengan hasil tertinggi yang dapat Anda terapkan tanpa menyentuh desain Anda.',
  },
  {
    type: 'title',
    text: 'JPG atau WebP? Kapan menggunakan masing-masing format',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> tetap menjadi pilihan yang tepat ketika Anda membutuhkan kompatibilitas universal: email klien, dokumen Word, platform media sosial lama, atau sistem CMS yang belum menerima WebP. Ekosistem tiga puluh tahunnya menjamin bahwa layar, printer, atau viewer mana pun akan membukanya tanpa masalah. Kelemahan utamanya adalah ukuran - JPG header 1,5 MB dapat menurunkan skor LCP halaman Anda dan gagal dalam ambang batas Core Web Vitals.',
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> adalah pilihan cerdas untuk semua konten yang ada di situs web Anda. Chrome, Firefox, Safari, dan Edge telah mendukungnya secara native selama bertahun-tahun. Gambar produk di e-commerce, banner blog, thumbnail video, dan foto apa pun yang dipublikasikan secara online semuanya mendapat manfaat langsung: halaman yang lebih ringan, skor Google PageSpeed Insights yang lebih baik, dan pengalaman pengguna yang lebih lancar - terutama pada koneksi seluler yang lambat.',
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
          'Latensi jaringan saat mengunggah dan mengunduh',
          'Foto Anda disimpan di server pihak ketiga',
          'Batas ukuran file dan batasan konversi harian',
          'Iklan yang mengganggu dan pelacak pihak ketiga',
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
    html: 'Saat Anda menarik JPG ke dalam alat ini, browser membuat <strong>objek Blob</strong> yang hanya ada di RAM Anda. Blob tersebut didekodekan dan digambar ke elemen <strong>HTML5 Canvas</strong> yang tidak terlihat. Karena JPG tidak memiliki saluran alfa, konversi ke WebP dilakukan secara langsung: mesin mengekspor kanvas dengan memanggil <code>toDataURL(\'image/webp\')</code>, menghasilkan aliran byte yang diunduh secara instan oleh OS Anda - tanpa melibatkan server.',
  },
  {
    type: 'paragraph',
    html: 'Algoritma kompresi WebP menggabungkan teknik prediksi blok (mirip dengan teknik pada VP8, codec video Google) dengan transformasi warna dan pengkodean aritmatika. Hasilnya adalah file yang berisi informasi persepsi yang sama dengan JPG asli tetapi dikemas jauh lebih efisien - yang berarti lebih sedikit kilobita yang ditransfer setiap kali halaman dikunjungi.',
  },
  {
    type: 'tip',
    title: 'Tip Core Web Vitals: LCP dan berat gambar',
    html: '<strong>Largest Contentful Paint (LCP)</strong> adalah metrik Google yang mengukur berapa lama waktu yang dibutuhkan untuk memuat elemen visual terbesar di halaman Anda. JPG header 1,5 MB dapat menjadi WebP hanya 900 KB - atau bahkan 600 KB - tanpa perbedaan visual yang nyata. Penghematan <strong>25-35%</strong> tersebut dapat memindahkan LCP Anda dari "Perlu Perbaikan" ke "Baik" dan mendorong Anda naik di peringkat pencarian.',
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
      'Gambar produk di toko WooCommerce atau Shopify: lebih ringan, lebih banyak konversi.',
      'Fotografi blog dan artikel: skor PageSpeed yang lebih baik tanpa mendesain ulang apa pun.',
      'Banner web dan materi iklan display: file yang lebih ringan dengan ketajaman yang sama.',
      'Galeri portofolio untuk arsitektur, fotografi, atau studio desain.',
      'Thumbnail video di situs streaming atau platform kursus online.',
    ],
  },
  {
    type: 'title',
    text: 'Kesimpulan',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Mengonversi gambar JPG Anda ke WebP adalah salah satu optimasi paling sederhana dan hemat biaya yang dapat Anda terapkan pada situs web apa pun saat ini. Dengan alat ini Anda melakukannya dalam hitungan detik, gratis, dan tanpa gambar Anda meninggalkan perangkat Anda. Lebih sedikit kilobita, LCP lebih baik, halaman lebih cepat - semuanya dengan tampilan visual yang sama persis seperti sebelumnya.',
  },
];


export const content: JpgAWebpLocaleContent = {
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
