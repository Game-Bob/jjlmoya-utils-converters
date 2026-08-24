import { generateSchemas } from '../../../shared/logic/schemas';
import { bibliography } from '../bibliography';
import type { JpgToPdfLocaleContent } from '../entry';
import type { ImageToPdfUI } from '../../../shared/image-to-pdf/ui';

const slug = 'konverter-jpg-ke-pdf';
const title = "Konverter JPG ke PDF";
const description = "Ubah gambar JPG menjadi dokumen PDF rapi di peramban. Pilih ukuran kertas, orientasi, dan margin tanpa mengunggah berkas.";

const ui: ImageToPdfUI = {
  formatLabel: 'JPG',
  dropTitle: "Buat PDF dari gambar JPG Anda",
  dropText: "Tarik berkas JPG ke sini. Urutan yang Anda pilih menjadi urutan halaman.",
  selectFiles: "Pilih berkas JPG",
  privacyNote: "Semua diproses di peramban. Gambar Anda tidak pernah diunggah.",
  optionsTitle: "Lembar cetak",
  settingsTitle: "Pengaturan kertas",
  pageSizeLabel: "Ukuran kertas",
  a4: 'A4',
  letter: 'Letter',
  orientationLabel: "Orientasi",
  portrait: "Potret",
  landscape: "Lansekap",
  marginLabel: "Margin",
  pagesTitle: "Halaman",
  reorderHint: "Ubah urutan halaman sebelum mengekspor.",
  page: "Halaman",
  pageSingular: "halaman",
  pagePlural: "halaman",
  moveUp: "Naik",
  moveDown: "Turun",
  remove: "Hapus",
  emptyPages: "Gambar terpilih akan muncul di sini.",
  createPdf: "Buat PDF",
  reset: "Mulai ulang",
  ready: "Siap untuk gambar Anda",
  processing: "Menyiapkan gambar",
  error: "Gagal membaca gambar",
  downloadPdf: "Unduh PDF",
  building: "Membuat PDF",
  pdfReady: "PDF Anda siap",
  invalidFile: "Alat ini hanya menerima berkas JPG dan JPEG.",
  bibliographyTitle: "Referensi",
  faqTitle: "Pertanyaan umum",
};

const faq: JpgToPdfLocaleContent['faq'] = [
  {
    "question": "Bisakah saya menggabungkan beberapa gambar JPG ke satu PDF?",
    "answer": "Bisa. Pilih berkas JPG yang diinginkan, atur urutan halaman, dan ekspor menjadi satu dokumen PDF."
  },
  {
    "question": "Apakah gambar saya diunggah ke internet?",
    "answer": "Tidak. Semua proses konversi berjalan lokal di peramban Anda."
  },
  {
    "question": "Bisakah saya memilih ukuran kertas A4 atau Letter?",
    "answer": "Bisa. Anda dapat memilih A4 atau Letter serta mengatur orientasi dan margin."
  }
];

const howTo: JpgToPdfLocaleContent['howTo'] = [
  {
    "name": "Pilih gambar JPG",
    "text": "Tarik berkas JPG atau pilih dari perangkat Anda."
  },
  {
    "name": "Atur halaman dan kertas",
    "text": "Urutkan gambar lalu tentukan ukuran kertas A4/Letter, orientasi, dan margin."
  },
  {
    "name": "Buat dan unduh PDF",
    "text": "Klik Buat PDF lalu unduh dokumen yang telah selesai."
  }
];

const seo: JpgToPdfLocaleContent['seo'] = [
  {
    "type": "title",
    "text": "Ubah kumpulan gambar JPG menjadi dokumen PDF siap cetak",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Konverter JPG ke PDF ini dirancang untuk menyatukan foto atau dokumen hasil pemindaian menjadi satu berkas PDF yang rapi. Atur urutan halaman dan sesuaikan pengaturan kertas sebelum mengunduh."
  },
  {
    "type": "title",
    "text": "Dokumen rapi tanpa rumit",
    "level": 3
  },
  {
    "type": "list",
    "icon": "mdi:check-circle",
    "items": [
      "Urutkan foto agar halaman sampul atau gambar utama berada di depan.",
      "Pilih orientasi potret atau lansekap sesuai jenis gambar Anda.",
      "Sesuaikan margin agar hasil cetak di printer fisik terlihat sempurna."
    ]
  },
  {
    "type": "tip",
    "title": "Keamanan data terjamin",
    "html": "Proses konversi berlangsung sepenuhnya di peramban Anda tanpa melalui server luar."
  }
];

export const content: JpgToPdfLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'id', faq, howTo }),
};
