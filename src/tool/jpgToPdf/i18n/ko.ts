import { generateSchemas } from '../../../shared/logic/schemas';
import { bibliography } from '../bibliography';
import type { JpgToPdfLocaleContent } from '../entry';
import type { ImageToPdfUI } from '../../../shared/image-to-pdf/ui';

const slug = 'jpg-to-pdf-converter';
const title = "JPG를 PDF로 변환하는 툴";
const description = "브라우저에서 JPG 이미지를 정렬된 PDF 문서로 변환하세요. 파일 업로드 없이 용지 크기, 방향, 여백을 자유롭게 설정할 수 있습니다.";

const ui: ImageToPdfUI = {
  formatLabel: 'JPG',
  dropTitle: "JPG 이미지로 PDF 만들기",
  dropText: "여기에 JPG 파일을 끌어다 놓으세요. 선택한 순서가 페이지 순서가 됩니다.",
  selectFiles: "JPG 파일 선택",
  privacyNote: "모든 작업은 브라우저 내에서 수행됩니다. 이미지가 서버로 업로드되지 않습니다.",
  optionsTitle: "인쇄 시트",
  settingsTitle: "용지 설정",
  pageSizeLabel: "용지 크기",
  a4: 'A4',
  letter: 'Letter',
  orientationLabel: "방향",
  portrait: "세로",
  landscape: "가로",
  marginLabel: "여백",
  pagesTitle: "페이지 목록",
  reorderHint: "내보내기 전에 순서를 변경하세요.",
  page: "페이지",
  pageSingular: "페이지",
  pagePlural: "페이지",
  moveUp: "위로",
  moveDown: "아래로",
  remove: "삭제",
  emptyPages: "선택한 이미지가 여기에 표시됩니다.",
  createPdf: "PDF 생성",
  reset: "초기화",
  ready: "이미지 준비 완료",
  processing: "이미지 처리 중",
  error: "이미지를 읽을 수 없습니다",
  downloadPdf: "PDF 다운로드",
  building: "PDF 만드는 중",
  pdfReady: "PDF가 준비되었습니다",
  invalidFile: "이 툴은 JPG 및 JPEG 파일만 지원합니다.",
  bibliographyTitle: "참고자료",
  faqTitle: "자주 묻는 질문",
};

const faq: JpgToPdfLocaleContent['faq'] = [
  {
    "question": "여러 개의 JPG 이미지를 하나의 PDF로 합칠 수 있나요?",
    "answer": "네. 원하는 수만큼 JPG 파일을 선택하고 순서를 정한 뒤 하나의 PDF로 내보낼 수 있습니다."
  },
  {
    "question": "이미지가 외부 서버로 전송되나요?",
    "answer": "아니요. 모든 변환 작업은 사용자의 브라우저 내에서 안전하게 처리됩니다."
  },
  {
    "question": "A4나 Letter 용지 크기를 선택할 수 있나요?",
    "answer": "네. A4, Letter 용지 규격과 방향, 여백을 직접 설정할 수 있습니다."
  }
];

const howTo: JpgToPdfLocaleContent['howTo'] = [
  {
    "name": "JPG 이미지 선택",
    "text": "JPG 파일을 끌어다 놓거나 기기에서 선택합니다."
  },
  {
    "name": "페이지 및 용지 설정",
    "text": "이미지 순서를 정렬하고 A4/Letter 규격, 방향, 여백을 설정합니다."
  },
  {
    "name": "PDF 생성 및 다운로드",
    "text": "PDF 생성 버튼을 누르고 완성된 문서를 다운로드합니다."
  }
];

const seo: JpgToPdfLocaleContent['seo'] = [
  {
    "type": "title",
    "text": "JPG 이미지를 인쇄용 PDF 문서로 완벽하게 변환",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "여러 장의 JPG 사진이나 스캔 문서를 하나의 정돈된 PDF 파일로 합쳐주는 도구입니다. 용지 사양과 방향, 여백을 자유롭게 조절하세요."
  },
  {
    "type": "title",
    "text": "깔끔한 문서 구성을 위한 팁",
    "level": 3
  },
  {
    "type": "list",
    "icon": "mdi:check-circle",
    "items": [
      "원하는 페이지 순서대로 자유롭게 위치 변경.",
      "이미지 형태에 맞춰 세로 또는 가로 방향 선택.",
      "인쇄 시 여백이 잘리지 않도록 여백 설정 조절."
    ]
  },
  {
    "type": "tip",
    "title": "안전한 프라이버시 보장",
    "html": "모든 작업이 내 기기의 브라우저에서 실행되므로 중요한 파일도 안심하고 변환할 수 있습니다."
  }
];

export const content: JpgToPdfLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'ko', faq, howTo }),
};
