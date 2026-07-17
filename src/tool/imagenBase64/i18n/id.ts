import { bibliography } from '../bibliography';
import type { ImagenBase64LocaleContent } from '../index';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { ImageToBase64UI } from '../index';

const slug = 'konverter-gambar-ke-base64';
const title = 'Konverter Gambar ke Base64 Online';
const description =
  'Konversi gambar apa pun ke kode Base64 dan Data URI langsung di browser Anda. Tanpa pengunggahan file. Gratis, privat, dan instan.';

const ui: ImageToBase64UI = {
  dragTitle: 'Tarik gambar Anda ke sini',
  dragSubtext: 'atau klik untuk menelusuri file Anda',
  formatBadge: 'Mendukung JPG, PNG, WEBP, SVG, GIF',
  dataUriLabel: 'Data URI (Siap untuk CSS / HTML src="")',
  base64Label: 'Hanya Base64 (Teks terenkripsi biasa)',
  copyBtn: 'Salin',
  dataUriPlaceholder: 'Unggah gambar untuk melihat kode Data URI...',
  base64Placeholder: 'Unggah gambar untuk melihat kode Base64 murni...',
  toastMessage: 'Kode disalin ke papan klip!',
  invalidImageAlert: 'Silakan unggah file gambar yang valid.',
  bibliographyTitle: 'Referensi Bibliografi',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
};

const faq: ImagenBase64LocaleContent['faq'] = [
  {
    question: 'Apa itu Base64 dan apa kegunaannya dalam pengembangan web?',
    answer:
      'Base64 adalah sistem pengkodean yang mengubah data biner menjadi string teks ASCII. Dalam pengembangan web, ini digunakan untuk menyematkan gambar langsung di dalam file HTML atau CSS melalui Data URI, sehingga mengurangi jumlah permintaan HTTP ke server.',
  },
  {
    question: 'Apakah aman mengonversi gambar saya ke Base64 di sini?',
    answer:
      'Sangat aman dan privat. Alat kami bekerja 100% secara lokal di browser Anda. Gambar Anda tidak pernah diunggah atau diproses di server eksternal mana pun.',
  },
  {
    question: 'Format gambar apa saja yang didukung oleh konverter Base64?',
    answer:
      'Alat ini kompatibel dengan file JPG, PNG, GIF, WebP, dan bahkan file vektor SVG. Saat memuat gambar, alat ini akan secara otomatis mendeteksi tipe MIME-nya untuk menghasilkan kode Data URI yang tepat.',
  },
  {
    question: 'Kapan saya sebaiknya TIDAK menggunakan gambar Base64?',
    answer:
      'Anda harus menghindari penggunaan gambar Base64 untuk foto besar atau gambar beresolusi tinggi. Kode Base64 memakan ruang sekitar 33% lebih banyak daripada file biner aslinya, yang dapat membuat stylesheet CSS atau dokumen HTML Anda membengkak secara berlebihan.',
  },
];

const howTo: ImagenBase64LocaleContent['howTo'] = [
  {
    name: 'Tarik atau Pilih Gambar Anda',
    text: 'Pindahkan gambar apa pun (JPG, PNG, WebP, SVG, GIF) ke area unggah untuk memulai konversi.',
  },
  {
    name: 'Salin Kode yang Dihasilkan',
    text: 'Anda akan melihat dua area teks: Data URI lengkap (siap digunakan di src="" atau CSS) dan Base64 murni untuk kegunaan lain.',
  },
  {
    name: 'Gunakan Kode dalam Proyek Anda',
    text: 'Tempelkan Data URI secara langsung ke src dari tag img atau di CSS Anda sebagai background-image tanpa memerlukan file eksternal.',
  },
];

const seo: ImagenBase64LocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverter Gambar ke Base64: Sematkan Gambar Tanpa Permintaan HTTP',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Base64 adalah teknik pengkodean yang mengubah data biner - seperti gambar - menjadi string teks ASCII murni. Hasilnya adalah Data URI: URL mandiri yang dimulai dengan <code>data:image/png;base64,...</code> dan berisi seluruh gambar yang dikodekan. Dengan menyematkan kode ini langsung di HTML, CSS, atau JSON Anda, gambar akan dimuat tanpa permintaan HTTP tambahan ke server - nol latensi jaringan, pemuatan instan.',
  },
  {
    type: 'title',
    text: 'Kapan menggunakan gambar Base64',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Argumen utama untuk Base64 adalah penghapusan permintaan jaringan. Setiap gambar pada halaman web berarti permintaan HTTP dengan overhead koneksi, DNS, jabat tangan TLS, dan latensi. Untuk gambar kritis yang sangat kecil - logo aplikasi utama, favicon, ikon UI - menyematkannya dalam Base64 di CSS atau HTML akan menghapus biaya tersebut dan menjamin gambar ditampilkan secara instan bahkan sebelum browser menyimpan apa pun di cache.',
  },
  {
    type: 'paragraph',
    html: 'Teknik ini sangat ampuh dalam aplikasi SPA (Single Page Application) di mana bundle JavaScript dan CSS dibuat pada saat build: menyematkan gambar kecil dalam bundle menjamin gambar dimuat bersama dengan kode tanpa permintaan tambahan. Ini juga sangat penting untuk email HTML, di mana klien email memblokir gambar eksternal tetapi hampir selalu menampilkan Data URI yang disematkan.',
  },
  {
    type: 'title',
    text: 'Kasus penggunaan untuk gambar Base64',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'HTML inline: <code>&lt;img src="data:image/png;base64,..."&gt;</code> untuk ikon kritis.',
      'CSS background: <code>background-image: url("data:image/svg+xml;base64,...")</code> untuk SVG UI.',
      'JSON dan API REST: kirim gambar sebagai data teks dalam payload JSON.',
      'Email HTML: gambar yang disematkan yang ditampilkan bahkan ketika klien memblokir URL eksternal.',
      'Penyematan SVG: sematkan gambar raster di dalam file SVG sebagai data inline.',
    ],
  },
  {
    type: 'title',
    text: 'Cara kerja konversi di browser',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Saat Anda memilih atau menarik gambar, API <code>FileReader</code> browser membacanya langsung dari disk sebagai data biner di RAM. Metode <code>readAsDataURL()</code> mengubah byte biner tersebut menjadi representasi Base64 menggunakan algoritme RFC 4648 - setiap 3 byte data asli direpresentasikan sebagai 4 karakter ASCII dari alfabet Base64. Hasilnya mencakup tipe MIME yang benar yang dideteksi secara otomatis.',
  },
  {
    type: 'tip',
    title: 'Gunakan hanya untuk gambar kecil (di bawah 10 KB)',
    html: 'Base64 meningkatkan ukuran file sekitar 33%: gambar 10 KB menjadi teks ~13,3 KB. Untuk ikon dan logo kecil, biaya ini minimal dan penghapusan permintaan HTTP mengimbanginya. Untuk foto atau gambar besar, overhead ukurannya signifikan - selalu gunakan CDN untuk gambar besar.',
  },
  {
    type: 'title',
    text: 'Kapan TIDAK menggunakan Base64',
    level: 3,
  },
  {
    type: 'tip',
    title: 'Hindari Base64 untuk gambar besar: gunakan CDN sebagai gantinya',
    html: 'Jika Anda memiliki gambar yang lebih besar dari 10-20 KB, Base64 merusak kinerja: ia membengkakkan ukuran HTML/CSS, mencegah browser menyimpan gambar secara independen di cache, dan memblokir rendering saat parser memproses string raksasa tersebut. Untuk gambar besar, selalu sajikan dari CDN dengan header cache yang sesuai.',
  },
  {
    type: 'title',
    text: 'Kompatibilitas dan privasi',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Data URI kompatibel dengan 100% browser modern dan sebagian besar klien email. Alat kami memproses semuanya secara lokal melalui API FileReader - gambar Anda tidak pernah meninggalkan perangkat Anda. Hal ini membuatnya cocok untuk gambar perusahaan, tangkapan layar pribadi, atau konten visual rahasia apa pun yang perlu Anda konversi ke Base64.',
  },
  {
    type: 'title',
    text: 'Kesimpulan: Alat penyematan tercepat dan paling privat',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Mengonversi gambar ke Base64 adalah teknik yang ditargetkan namun sangat ampuh jika diterapkan dengan benar. Gunakan untuk gambar kecil dan kritis di mana nol permintaan HTTP membuat perbedaan, dan hindari untuk gambar besar di mana CDN selalu menang. Dengan alat kami, Anda mendapatkan Data URI dalam sekejap, tanpa mengunggah apa pun ke server mana pun.',
  },
];


export const content: ImagenBase64LocaleContent = {
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
