import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAPngLocaleContent } from '../index';

const slug = 'konverter-webp-ke-png';
const title = 'Konversi WebP ke PNG Online dan Gratis';
const description =
  'Konversi gambar WebP ke PNG di browser Anda. Menjaga transparansi. Tanpa unggah file ke server. Gratis dan 100% pribadi.';

const ui: ImageConverterUI = {
  dragText: 'Tarik file WebP...',
  convertText: 'Untuk mengkonversinya ke PNG secara instan',
  selectFiles: 'Pilih file',
  processedFiles: 'File yang diproses',
  downloadAll: 'Unduh Semua (.zip)',
  pending: 'Menunggu',
  bibliographyTitle: 'Referensi Bibliografi',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
};

const faq: WebpAPngLocaleContent['faq'] = [
  {
    question: 'Mengapa saya perlu mengonversi file WebP saya ke PNG?',
    answer:
      'Meskipun lebih ringan, file WebP dapat menyebabkan ketidakcocokan dalam program pengeditan seperti Photoshop versi lama. PNG memastikan kompatibilitas universal 100%.',
  },
  {
    question: 'Apakah transparansi hilang saat mengonversi dari WebP ke PNG?',
    answer:
      'Sama sekali tidak. Berbeda dengan konversi ke JPG, PNG mendukung saluran alfa. Alat kami akan menjaga area transparan apa pun dari file asli.',
  },
  {
    question: 'Dapatkah saya mengunggah file perusahaan yang bersifat rahasia?',
    answer:
      'Anda bisa dan harus melakukannya. Karena semuanya berjalan secara lokal melalui JavaScript, gambar perusahaan Anda tidak akan pernah meninggalkan komputer Anda atau disimpan di server eksternal.',
  },
];

const howTo: WebpAPngLocaleContent['howTo'] = [
  {
    name: 'Tarik file WebP Anda',
    text: 'Pindahkan dan letakkan file WebP Anda ke panel utama atau pilih gambar secara tradisional.',
  },
  {
    name: 'Konversi Fidelity Tinggi',
    text: 'Browser Anda akan menggambar ulang gambar piksel demi piksel dan menghasilkan salinan persis dalam format PNG, dengan mempertahankan gamut warna asli.',
  },
  {
    name: 'Unduhan Individu atau Massal',
    text: 'Simpan setiap file secara terpisah atau, jika Anda memproses dalam jumlah banyak, klik tombol ZIP untuk mengunduh semuanya secara bersamaan.',
  },
];

const seo: WebpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverter WebP ke PNG: Pilihan Profesional untuk Pengeditan dan Desain',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Ketika seorang desainer mengunduh aset grafis dalam format <strong>WebP</strong> dan mencoba membukanya di Photoshop, Figma, atau Illustrator, hasilnya bisa membuat frustrasi: file gagal dimuat atau kualitasnya menurun. Format <strong>PNG</strong> adalah standar tak terbantahkan dalam pengeditan profesional: kompresi lossless, saluran alfa penuh, dan jaminan kompatibilitas di seluruh rantai produksi kreatif.',
  },
  {
    type: 'title',
    text: 'WebP untuk Web, PNG untuk Studio',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP adalah format produksi web: algoritme kompresinya dioptimalkan untuk mengurangi berat transfer, bukan untuk menjaga kesetiaan maksimum melalui alur kerja pengeditan iteratif. Setiap kali Anda menyimpan WebP yang telah diedit, codec akan menerapkan kompresi lagi. Untuk proyek di mana sebuah file akan dimodifikasi berkali-kali, ini berarti penurunan kualitas secara kumulatif.',
  },
  {
    type: 'paragraph',
    html: 'PNG menggunakan <strong>kompresi lossless</strong>: data setiap piksel dipertahankan sepenuhnya tidak peduli berapa kali Anda menyimpan file tersebut. Ini adalah format yang dipilih oleh desainer UI/UX, ilustrator digital, dan tim branding yang perlu menjaga integritas visual melalui puluhan revisi. Alat seperti Photoshop, Figma, Sketch, dan Illustrator memperlakukan PNG sebagai format ekspor utama mereka.',
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
          'Aset desain Anda disimpan di server pihak ketiga',
          'Pemrosesan jarak jauh yang lambat untuk file besar',
          'Risiko kebocoran untuk proyek klien yang bersifat rahasia',
          'Konversi batch terbatas atau berbayar',
        ],
      },
      {
        title: 'Arsitektur Lokal Kami',
        description: 'Pemrosesan langsung pada perangkat keras Anda menggunakan teknologi Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Desain Anda tidak pernah meninggalkan mesin Anda',
          'Konversi batch puluhan file secara instan',
          'Pelestarian penuh saluran alfa dan gamut warna',
          'Privasi absolut untuk proyek klien',
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
    html: 'Browser modern dapat mendekode WebP secara native. Alat kami memanfaatkan kemampuan ini untuk memuat file ke dalam elemen JavaScript <strong>Image</strong>, lalu menggambarnya ke kanvas HTML5 dengan dimensi yang sama dengan aslinya. Berbeda dengan konversi ke JPG, tidak diperlukan pengisian latar belakang di sini: kanvas mempertahankan saluran alfa penuh.',
  },
  {
    type: 'paragraph',
    html: 'Ekspor akhir menggunakan metode <code>toDataURL(\'image/png\')</code>, yang menghasilkan PNG lossless yang sesuai dengan aslinya. Hasilnya adalah file yang siap diimpor langsung ke perangkat lunak desain profesional apa pun tanpa langkah perantara, degradasi warna, atau hilangnya transparansi.',
  },
  {
    type: 'tip',
    title: 'Tip untuk editor',
    html: 'Gunakan PNG saat Anda perlu terus mengedit gambar. Kompresi lossless menjamin tidak ada penurunan kualitas akibat penyimpanan berulang kali - sangat penting saat bekerja dengan lapisan, masker, atau penyesuaian warna di Photoshop atau Figma.',
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
      'Mengimpor aset WebP ke Photoshop, Figma, Sketch, atau Illustrator.',
      'Menjaga transparansi pada logo dan ikon untuk digunakan pada berbagai latar belakang.',
      'Membuat salinan master grafik untuk proyek jangka panjang.',
      'Mengekspor aset untuk aplikasi seluler yang memerlukan PNG dengan saluran alfa.',
      'Menggunakan gambar dalam desain mockup dan presentasi dengan latar belakang variabel.',
    ],
  },
  {
    type: 'title',
    text: 'Kesimpulan',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Jika WebP adalah format server web, maka PNG adalah format studio desain. Alat ini mengonversi aset WebP Anda menjadi PNG siap produksi, dengan transparansi yang utuh dan kualitas maksimal - semuanya di browser Anda dan tanpa file Anda pernah meninggalkan mesin Anda.',
  },
];


export const content: WebpAPngLocaleContent = {
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
