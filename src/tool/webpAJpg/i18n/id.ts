import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAJpgLocaleContent } from '../index';

const slug = 'konverter-webp-ke-jpg';
const title = 'Konversi WebP ke JPG Online dan Gratis';
const description =
  'Konversi gambar WebP ke JPG tanpa mengunggah file. Pemrosesan lokal pribadi 100%. Latar belakang transparan secara otomatis diganti dengan warna putih.';

const ui: ImageConverterUI = {
  dragText: 'Tarik file WebP...',
  convertText: 'Untuk mengkonversinya ke JPG secara instan',
  selectFiles: 'Pilih file',
  processedFiles: 'File yang diproses',
  downloadAll: 'Unduh Semua (.zip)',
  pending: 'Menunggu',
  bibliographyTitle: 'Referensi Bibliografi',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
};

const faq: WebpAJpgLocaleContent['faq'] = [
  {
    question: 'Dapatkah saya mengunggah gambar pribadi dengan aman?',
    answer:
      'Ya. Tidak ada server unggahan. Browser Anda memproses WebP di komputer Anda dan menghasilkan JPG untuk Anda unduh. Tidak ada orang lain yang melihatnya.',
  },
  {
    question: 'Apa yang terjadi dengan latar belakang WebP saya jika transparan?',
    answer:
      'Karena JPG tidak mendukung transparansi, konverter akan secara otomatis mengisi area transparan dengan latar belakang putih solid.',
  },
  {
    question: 'Apakah ada batasan pada konversi atau ukuran file?',
    answer:
      'Kami tidak memberlakukan batasan apa pun. Anda dapat mengonversi ratusan gambar selama komputer Anda memiliki daya pemrosesan dan RAM yang cukup.',
  },
];

const howTo: WebpAJpgLocaleContent['howTo'] = [
  {
    name: 'Tarik file Anda',
    text: 'Letakkan file WebP modern Anda ke area unggahan atau pilih menggunakan browser file interaktif.',
  },
  {
    name: 'Konversi Lokal',
    text: 'Lihat bagaimana mesin lokal menerapkan latar belakang dan menafsirkan setiap piksel ke format JPG universal.',
  },
  {
    name: 'Dapatkan hasil Anda',
    text: 'Unduh satu per satu atau gunakan paket ZIP untuk menggabungkan semua foto baru Anda.',
  },
];

const bibliography: WebpAJpgLocaleContent['bibliography'] = [
  {
    name: 'JPEG.org: Standar JPEG',
    url: 'https://jpeg.org/jpeg/',
  },
  {
    name: 'Mozilla Developer Network - image/jpeg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#jpeg',
  },
  {
    name: 'Kompatibilitas WebP ke JPEG',
    url: 'https://developers.google.com/speed/webp/faq',
  },
];

const seo: WebpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverter WebP ke JPG: Kompatibilitas Universal Tanpa Mengorbankan Privasi',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> adalah taruhan Google pada efisiensi: gambar yang lebih ringan dengan kualitas yang sebanding dengan JPG tradisional. Namun, kompatibilitasnya tetap menjadi masalah di dunia nyata. Klien email seperti Outlook, perangkat lunak desain lama, aplikasi pesan, dan alur kerja perusahaan masih bergantung pada <strong>JPG</strong> yang ada di mana-mana. Mengonversi WebP ke JPG adalah jembatan antara web modern dan dunia nyata.',
  },
  {
    type: 'title',
    text: 'WebP vs JPG: Kapan Menggunakan Setiap Format?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP unggul dalam lingkungan terkontrol: situs web modern di Chrome, Edge, atau Firefox di mana kompatibilitas browser dapat dijamin. Kompresinya yang unggul mengurangi berat file sebesar 25–35% dibandingkan dengan JPG yang setara, meningkatkan waktu pemuatan dan metrik Core Web Vitals. Ini adalah format ideal saat Anda mengontrol lingkungan tampilan.',
  },
  {
    type: 'paragraph',
    html: 'JPG, di sisi lain, berfungsi di <em>hampir setiap konteks</em>: lampiran email, presentasi PowerPoint, dokumen Word, printer rumah, aplikasi pengeditan lama, dan platform media sosial tanpa pengecualian. Jika Anda membutuhkan seseorang untuk membuka gambar Anda tanpa hambatan teknis apa pun, JPG adalah jawaban yang tepat.',
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
          'Foto Anda tersebar di internet ke server yang tidak dikenal',
          'Waktu tunggu untuk pengunggahan dan pemrosesan jarak jauh',
          'Batasan harian pada ukuran file dan konversi gratis',
          'Risiko nyata retensi data pada server pihak ketiga',
        ],
      },
      {
        title: 'Arsitektur Lokal Kami',
        description: 'Pemrosesan langsung pada perangkat keras Anda menggunakan teknologi Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Nol byte terkirim: semuanya terjadi di RAM Anda',
          'Kecepatan instan tanpa bergantung pada koneksi Anda',
          'Tidak ada batasan pada ukuran file atau jumlah file',
          'Sangat cocok untuk foto pribadi, medis, atau perusahaan',
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
    html: 'Saat Anda menarik file WebP ke dalam alat, browser mendekodenya secara native menggunakan mesin rendering internalnya. File tersebut kemudian digambar ke elemen <strong>HTML5 Canvas</strong> yang tidak terlihat. Karena JPG tidak mendukung transparansi, algoritme akan mengisi kanvas dengan latar belakang putih solid sebelum menyatukan gambar di atasnya.',
  },
  {
    type: 'paragraph',
    html: 'Langkah terakhir adalah ekspor: metode Canvas <code>toDataURL(\'image/jpeg\')</code> mengonversi piksel kanvas menjadi aliran byte JPG terkompresi berkualitas tinggi. Aliran ini dikirim langsung ke sistem unduhan browser, tanpa komunikasi jaringan sama sekali. Seluruh proses memakan waktu milidetik bahkan untuk gambar multi-megapiksel.',
  },
  {
    type: 'tip',
    title: 'Tip kompatibilitas',
    html: 'Saat berbagi foto dengan pengguna non-teknis atau mengirimnya melalui email, selalu gunakan JPG — nol masalah kompatibilitas di klien email, sistem operasi, atau perangkat apa pun, tanpa pengecualian dan tanpa kejutan yang tidak menyenangkan.',
  },
  {
    type: 'title',
    text: 'Kasus Penggunaan dan Kompatibilitas',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Melampirkan foto di email dari Outlook, Gmail, atau Apple Mail.',
      'Memasukkan gambar dalam dokumen Word, Excel, atau presentasi PowerPoint.',
      'Posting di platform media sosial yang menolak WebP.',
      'Berbagi melalui WhatsApp atau aplikasi pesan dengan dukungan format terbatas.',
      'Mencetak foto di layanan cetak yang hanya menerima JPG atau PNG.',
    ],
  },
  {
    type: 'title',
    text: 'Kesimpulan',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP adalah masa depan gambar web, tetapi JPG tetap menjadi raja kompatibilitas universal. Alat ini memungkinkan Anda menyeberangi jembatan itu dalam hitungan detik, sepenuhnya secara pribadi dan tanpa memasang apa pun. Gambar Anda tidak pernah meninggalkan perangkat Anda.',
  },
];


export const content: WebpAJpgLocaleContent = {
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
