import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'pengonversi-gambar',
  title: 'Pengonversi Gambar Online',
  description: 'Alat gratis untuk mengonversi gambar antara format PNG, JPG, WebP, SVG, AVIF, GIF, BMP, dan ICO. Semuanya diproses secara lokal di browser Anda tanpa mengunggah apa pun ke internet.',
  seo: [
    {
      type: 'summary',
      title: 'Mengapa menggunakan pengonversi kami',
      items: [
        'Konversi 100% lokal: gambar Anda tidak pernah meninggalkan perangkat Anda.',
        'Dukungan untuk 21 kombinasi format: PNG, JPG, WebP, SVG, AVIF, GIF, BMP, dan ICO.',
        'Pemrosesan batch dengan unduhan ZIP.',
        'Tanpa registrasi, tanpa batasan, tanpa iklan yang mengganggu.',
      ],
    },
    {
      type: 'title',
      text: 'Konversi Gambar: Panduan Format Lengkap',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Memilih format gambar yang tepat berdampak langsung pada performa web, kompatibilitas perangkat, und kualitas visual yang dirasakan. <strong>Pengonversi gambar online</strong> kami mencakup rute konversi yang paling banyak diminta oleh desainer, pengembang web, dan fotografer, semuanya tanpa mengandalkan server eksternal yang dapat membahayakan privasi file Anda.',
    },
    {
      type: 'title',
      text: 'PNG, JPG, dan WebP: Tiga Pilar Desain Web Modern',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Format PNG</strong> menonjol karena kompresi lossless dan dukungan transparansi (saluran alfa), menjadi standar untuk logo, ikon, dan grafik dengan tepi tajam. <strong>Format JPG</strong> menawarkan kompatibilitas universal maksimum dan ukuran yang dikurangi untuk foto, tetapi mengorbankan kualitas setiap kali disimpan. <strong>Format WebP</strong>, yang dikembangkan oleh Google, menggabungkan yang terbaik dari keduanya: kompresi 30-40% lebih baik daripada PNG/JPG dengan dukungan transparansi dan animasi, kini menjadi format yang direkomendasikan oleh Core Web Vitals untuk meningkatkan LCP.',
    },
    {
      type: 'table',
      headers: ['Format', 'Transparansi', 'Kompresi', 'Terbaik untuk'],
      rows: [
        ['PNG', 'Ya', 'Lossless', 'Logo, grafik, tangkapan layar'],
        ['JPG', 'Tidak', 'Lossy', 'Foto, gambar besar'],
        ['WebP', 'Ya', 'Lossless/Lossy', 'Web modern, performa'],
        ['SVG', 'Ya', 'Vektor', 'Ikon skalabel, animasi'],
        ['AVIF', 'Ya', 'Superior', 'Web generasi berikutnya'],
        ['ICO', 'Ya', 'Bitmap', 'Favicon, ikon Windows'],
      ],
    },
    {
      type: 'title',
      text: 'Format Generasi Berikutnya: AVIF dan WebP',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Format AVIF</strong> (AV1 Image File Format) adalah penerus teknologi WebP, menawarkan ukuran file hingga 50% lebih kecil daripada JPG pada kualitas subjektif yang sama. Meskipun adopsinya tumbuh cepat, kompatibilitas terbatas pada sistem lama membuat konversi AVIF ke format yang lebih mapan seperti JPG, PNG, atau WebP menjadi kebutuhan yang sering dalam alur kerja produksi.',
    },
    {
      type: 'tip',
      title: 'Tip performa web',
      html: 'Untuk memaksimalkan kecepatan pemuatan halaman, gunakan WebP sebagai format utama di situs web Anda dengan fallback JPG/PNG untuk browser lama. Elemen HTML <code>picture</code> dengan beberapa tag <code>source</code> memungkinkan Anda menyajikan format optimal berdasarkan dukungan browser yang berkunjung.',
    },
    {
      type: 'title',
      text: 'SVG, BMP, dan ICO: Kasus Penggunaan Khusus',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Berkas SVG</strong> adalah vektor matematika yang diskalakan tanpa kehilangan kualitas ke resolusi apa pun, cocok untuk logo dan desain grafis. Namun, banyak platform dan aplikasi pengeditan tidak mendukungnya secara langsung, sehingga perlu merasterisasinya ke PNG atau JPG untuk distribusi. <strong>Berkas BMP</strong>, meskipun usang untuk penggunaan web, tetap umum di lingkungan Windows dan perangkat lunak pengeditan lama. Terakhir, <strong>format ICO</strong> adalah standar untuk favicon web dan kustomisasi ikon Windows, memerlukan struktur header biner khusus yang dihasilkan oleh pengonversi kami secara asli.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { label: 'Kombinasi', value: '21', icon: 'mdi:image-sync' },
        { label: 'Privasi', value: '100% lokal', icon: 'mdi:shield-lock' },
        { label: 'Format', value: '8 tipe', icon: 'mdi:file-image' },
      ],
    },
    {
      type: 'title',
      text: 'Privasi Total: Konversi tanpa Server',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tidak seperti alat online lainnya yang mengunggah gambar Anda ke server jarak jauh (dengan risiko privasi dan keamanan yang ditimbulkannya), pengonversi kami hanya menggunakan API browser asli: <strong>Canvas 2D API</strong> untuk rasterisasi, <strong>FileReader API</strong> untuk membaca file secara lokal, dan <strong>Blob/URL.createObjectURL</strong> untuk unduhan. Ini berarti Anda dapat mengonversi gambar rahasia, logo perusahaan, atau dokumen pribadi dengan keamanan penuh.',
    },
  ],
};
