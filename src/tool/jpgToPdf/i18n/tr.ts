import { generateSchemas } from '../../../shared/logic/schemas';
import { bibliography } from '../bibliography';
import type { JpgToPdfLocaleContent } from '../entry';
import type { ImageToPdfUI } from '../../../shared/image-to-pdf/ui';

const slug = 'jpg-pdf-donusturucu';
const title = "JPG PDF Dönüştürücü";
const description = "JPG görsellerini tarayıcınızda sıralı bir PDF dosyasına dönüştürün. Dosya yüklemeden kağıt boyutu, yönlendirme ve kenar boşluklarını seçin.";

const ui: ImageToPdfUI = {
  formatLabel: 'JPG',
  dropTitle: "JPG görsellerinizden PDF oluşturun",
  dropText: "JPG dosyalarını buraya sürükleyin. Seçtiğiniz sıra sayfa sırası olacaktır.",
  selectFiles: "JPG dosyalarını seçin",
  privacyNote: "Her şey tarayıcıda işlenir. Görselleriniz asla sunucuya yüklenmez.",
  optionsTitle: "Baskı sayfası",
  settingsTitle: "Kağıt ayarları",
  pageSizeLabel: "Kağıt boyutu",
  a4: 'A4',
  letter: 'Letter',
  orientationLabel: "Yönlendirme",
  portrait: "Dikey",
  landscape: "Yatay",
  marginLabel: "Kenar boşlukları",
  pagesTitle: "Sayfalar",
  reorderHint: "Dışa aktarmadan önce sayfa sırasını düzenleyin.",
  page: "Sayfa",
  pageSingular: "sayfa",
  pagePlural: "sayfa",
  moveUp: "Yukarı taşı",
  moveDown: "Aşağı taşı",
  remove: "Kaldır",
  emptyPages: "Seçtiğiniz görseller burada görünecektir.",
  createPdf: "PDF Oluştur",
  reset: "Sıfırla",
  ready: "Görselleriniz için hazır",
  processing: "Görsel hazırlanıyor",
  error: "Görsel okunamadı",
  downloadPdf: "PDF İndir",
  building: "PDF oluşturuluyor",
  pdfReady: "PDF dosyanız hazır",
  invalidFile: "Bu araç yalnızca JPG ve JPEG dosyalarını kabul eder.",
  bibliographyTitle: "Kaynaklar",
  faqTitle: "Sıkça sorulan sorular",
};

const faq: JpgToPdfLocaleContent['faq'] = [
  {
    "question": "Birden fazla JPG görselini tek bir PDF de birleştirebilir miyim?",
    "answer": "Evet. İstediğiniz kadar JPG dosyası seçin, sayfa sırasını düzenleyin ve tek bir PDF olarak indirin."
  },
  {
    "question": "Görsellerim bir sunucuya yükleniyor mu?",
    "answer": "Hayır. Tüm dönüştürme işlemi yerel olarak tarayıcınızda gerçekleşir."
  },
  {
    "question": "A4 veya Letter kağıt boyutunu seçebilir miyim?",
    "answer": "Evet. A4 veya Letter boyutunu, sayfa yönünü ve kenar boşluklarını belirleyebilirsiniz."
  }
];

const howTo: JpgToPdfLocaleContent['howTo'] = [
  {
    "name": "JPG görsellerini seçin",
    "text": "JPG dosyalarınızı sürükleyin veya cihazınızdan seçin."
  },
  {
    "name": "Sayfaları ve kağıdı düzenleyin",
    "text": "Görselleri sıralayın, A4/Letter boyutunu, yönü ve kenar boşluklarını ayarlayın."
  },
  {
    "name": "PDF oluşturun ve indirin",
    "text": "PDF Oluştur butonuna tıklayın ve belgenizi indirin."
  }
];

const seo: JpgToPdfLocaleContent['seo'] = [
  {
    "type": "title",
    "text": "JPG görsellerinizi baskıya hazır bir PDF dokümanına dönüştürün",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Bu JPG - PDF dönüştürücü, fotoğraflarınızı veya taramalarınızı düzenli tek bir PDF dosyasında toplamanıza olanak tanır. Sayfa sırasını ve kağıt ayarlarını kolayca yapın."
  },
  {
    "type": "title",
    "text": "Düzenli ve kaliteli PDF oluşturma",
    "level": 3
  },
  {
    "type": "list",
    "icon": "mdi:check-circle",
    "items": [
      "Görsellerin sırasını dilediğiniz gibi düzenleyin.",
      "Görsellerinizin yapısına göre dikey veya yatay yönü seçin.",
      "Yazıcıdan sorunsuz çıktı almak için kenar boşluklarını ayarlayın."
    ]
  },
  {
    "type": "tip",
    "title": "%100 Gizlilik garantisi",
    "html": "Tüm işlemler yerel olarak tarayıcınızda yapılır, dosyalarınız internete aktarılmaz."
  }
];

export const content: JpgToPdfLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'tr', faq, howTo }),
};
