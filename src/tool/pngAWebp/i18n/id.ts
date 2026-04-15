import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAWebpLocaleContent } from '../index';

const slug = 'konverter-png-ke-webp';
const title = 'Konversi PNG ke WebP Online dan Gratis';
const description =
  'Konversi gambar PNG ke WebP di browser Anda. Ukuran file hingga 40% lebih kecil. Mempertahankan transparansi. Tanpa pengunggahan file. Gratis dan privat.';

const ui: ImageConverterUI = {
  dragText: 'Tarik file PNG...',
  convertText: 'Untuk mengkonversinya ke WebP secara instan',
  selectFiles: 'Pilih file',
  processedFiles: 'File yang diproses',
  downloadAll: 'Unduh Semua (.zip)',
  pending: 'Menunggu',
  bibliographyTitle: 'Referensi Bibliografi',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
};

const faq: PngAWebpLocaleContent['faq'] = [
  {
    question: 'Mengapa mengonversi PNG ke WebP?',
    answer:
      'WebP menawarkan kompresi hingga 40% lebih baik daripada PNG pada kualitas yang sama, sementara juga mendukung transparansi Alpha. Ini adalah format yang direkomendasikan oleh Google PageSpeed Insights.',
  },
  {
    question: 'Apakah transparansi hilang dalam prosesnya?',
    answer:
      'Tidak. Implementasi teknis WebP mendukung saluran alfa. Transparansi dari PNG asli akan dipertahankan dalam file WebP yang baru.',
  },
  {
    question: 'Apakah gambar saya dikirim ke server?',
    answer:
      'Tidak. Kode berjalan secara eksklusif di browser Anda (Client-Side). Kami tidak pernah melihat, merekam, atau menyimpan gambar yang Anda konversi.',
  },
];

const howTo: PngAWebpLocaleContent['howTo'] = [
  {
    name: 'Masukkan PNG Anda',
    text: 'Letakkan file PNG besar Anda ke area unggah atau gunakan pemilih interaktif tradisional.',
  },
  {
    name: 'Deteksi saluran',
    text: 'Mesin rendering lokal akan mendeteksi dan mengekspor komposisi piksel ke format WebP yang dioptimalkan.',
  },
  {
    name: 'Unduh Langsung',
    text: 'Unduh file WebP Anda yang sangat terkompresi satu per satu atau gabungkan bersama-sama menggunakan konverter paket ZIP.',
  },
];

const bibliography: PngAWebpLocaleContent['bibliography'] = [
  {
    name: 'Google: Detail Implementasi WebP',
    url: 'https://developers.google.com/speed/webp/',
  },
  {
    name: 'W3C: Panduan Core Web Vitals',
    url: 'https://web.dev/vitals/',
  },
  {
    name: 'Mozilla Docs: Format Gambar',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types',
  },
];

const seo: PngAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverter PNG ke WebP: Transparansi dan Kompresi Modern untuk Web',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> telah menjadi format referensi untuk gambar web dengan transparansi selama beberapa dekade — logo, ikon, elemen UI, gambar produk dengan latar belakang transparan. Masalahnya adalah ukuran file: kompresi lossless yang menjamin kualitas juga menghasilkan file yang sangat besar. <strong>WebP</strong> Google memecahkan kontradiksi ini: ia mendukung saluran alfa (transparansi) <em>dan</em> mengompresi jauh lebih baik daripada PNG, menjadikan peralihan dari PNG ke WebP di situs web Anda sebagai optimasi sempurna yang tidak mengorbankan apa pun.',
  },
  {
    type: 'title',
    text: 'PNG atau WebP? Kapan menggunakan masing-masing format',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> tetap merupakan format yang tepat ketika kompatibilitas sangat penting: alat desain seperti Photoshop atau Figma, alur kerja cetak, aplikasi desktop lama, atau konteks apa pun di mana dukungan WebP tidak dijamin. Ini juga merupakan format ideal untuk menyimpan lapisan kerja dalam alur pengeditan, karena kompresi lossless-nya mempertahankan setiap piksel. Biayanya: file yang bisa berbobot 3–8 kali lebih berat daripada ekuivalen WebP-nya.',
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> adalah pengganti alami untuk PNG untuk semua konten web modern. Chrome, Firefox, Safari, dan Edge semuanya mendukungnya secara native. Gambar WebP lossless 26% lebih kecil daripada PNG yang setara; dalam mode lossy, ukurannya bisa hingga 40% lebih kecil dengan kualitas visual yang hampir tidak dapat dibedakan. Dan yang krusial untuk desain web: <strong>WebP mempertahankan transparansi alfa</strong> persis seperti PNG, tanpa kompromi visual.',
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
          'Logo dan gambar Anda disimpan di server pihak ketiga',
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
          'Kecepatan instan — nol latensi jaringan',
          'Privasi lengkap — 0 byte dikirim secara eksternal',
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
    html: 'PNG dimuat secara lokal dan didekodekan ke dalam <strong>HTML5 Canvas</strong> dalam memori. API Canvas mempertahankan saluran alfa dari PNG asli — semua piksel transparan dan semi-transparan dipertahankan secara utuh dalam buffer piksel RGBA. Kanvas kemudian diekspor dengan memanggil <code>toDataURL(\'image/webp\')</code>, yang menerapkan codec WebP browser (berdasarkan libwebp Google) untuk menghasilkan file yang lebih ringkas tanpa mengubah data transparansi.',
  },
  {
    type: 'paragraph',
    html: 'WebP menggunakan dua mode kompresi: mode lossless untuk gambar di mana setiap piksel harus benar-benar setia pada aslinya, dan mode lossy untuk foto dan elemen di mana perbedaan kecil tidak terlihat. Mode lossless menghasilkan file 26% lebih kecil dari PNG; mode lossy dapat mencapai pengurangan hingga 40% dibandingkan dengan PNG sambil mempertahankan kualitas visual yang sangat baik.',
  },
  {
    type: 'tip',
    title: 'Tip: WebP mengalahkan PNG dan JPG di web',
    html: 'WebP dalam mode lossless lebih kecil dari PNG. WebP dalam mode lossy lebih kecil dari JPG. Ini menjadikan WebP sebagai <strong>satu-satunya format yang menggantikan keduanya</strong> dalam konteks web. Konversikan PNG transparan Anda ke WebP sebelum mengunggah: Google PageSpeed Insights mendeteksinya dan memberikan skor positif dalam audit "Sajikan gambar dalam format modern".',
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
      'Logo dan ikon dengan latar belakang transparan untuk situs web dan aplikasi.',
      'Gambar produk dengan latar belakang transparan di toko e-commerce.',
      'Sprite CSS dan elemen UI dengan transparansi alfa.',
      'Ilustrasi raster dan grafik vektor untuk landing page.',
      'Thumbnail artikel dengan latar belakang transparan di blog dan portal berita.',
    ],
  },
  {
    type: 'title',
    text: 'Kesimpulan',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Peralihan dari PNG ke WebP adalah optimasi gambar web terlengkap yang tersedia: Anda mendapatkan file yang lebih ringan, mempertahankan transparansi, dan meningkatkan metrik Core Web Vitals tanpa mengubah apa pun pada desain visual Anda. Alat ini melakukannya secara instan, gratis, dan sepenuhnya privat — gambar Anda diproses di browser Anda dan tidak pernah dikirim ke server eksternal mana pun.',
  },
];


export const content: PngAWebpLocaleContent = {
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
