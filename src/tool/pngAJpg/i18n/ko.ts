import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAJpgLocaleContent } from '../index';

const slug = 'png-to-jpg-converter';
const title = 'PNG를 JPG로 온라인 변환';
const description =
  'PNG 이미지를 즉시 사용자 컴퓨터에서 빠른 압축 JPG 형식으로 변환하세요. 인터넷에 사진을 업로드할 필요가 없습니다. 일괄 최적화가 가능합니다.';

const ui: ImageConverterUI = {
  dragText: 'PNG 파일을 끌어다 놓으세요...',
  convertText: '즉시 JPG로 변환합니다',
  selectFiles: '파일 선택',
  processedFiles: '처리된 파일',
  downloadAll: '모두 다운로드 (.zip)',
  pending: '대기 중',
  bibliographyTitle: '참고 문헌',
  faqTitle: '자주 묻는 질문',
};

const faq: PngAJpgLocaleContent['faq'] = [
  {
    "question": "왜 로컬 PNG-JPG 변환기를 선택해야 하나요?",
    "answer": "일반적인 온라인 변환기와 달리 모든 이미지를 브라우저 내부에서 처리합니다. 외부 서버로 파일이 전송되지 않아 데이터 보안이 완벽하게 유지됩니다."
  },
  {
    "question": "JPG와 PNG 중 어떤 포맷이 적합한가요?",
    "answer": "PNG는 투명 배경과 로고에 최적화되어 있습니다. JPG는 압축률이 높아 파일 용량이 훨씬 작으므로 웹사이트 사진이나 배너에 적합합니다."
  },
  {
    "question": "서버 업로드 없는 기술적 변환 원리는 무엇인가요?",
    "answer": "HTML5 Canvas 기술을 이용합니다. 브라우저가 투명 캔버스에 이미지를 그리고 투명 영역을 흰색으로 채운 후 JPG 바이트 스트림을 생성합니다."
  },
  {
    "question": "기밀 문서 및 기업 데이터에 안전한가요?",
    "answer": "네, 매우 안전합니다. 모든 데이터는 브라우저 메모리에만 존재하며 탭을 닫으면 즉시 완전히 삭제됩니다."
  }
];

const howTo: PngAJpgLocaleContent['howTo'] = [
  {
    name: '파일 선택',
    text: '폴더에 PNG 파일을 준비하고 처리 영역으로 모두 함께 끌어다 놓거나 파일 탐색기를 사용하여 찾으세요.',
  },
  {
    name: '즉시 처리',
    text: '브라우저가 로컬에서 파일 크기를 최적화하는 동안 각 파일의 상태가 "완료"로 바뀌는지 확인하세요.',
  },
  {
    name: '최적화된 다운로드',
    text: '새 JPG를 하나씩 저장하거나 "모두 다운로드" 버튼을 사용하여 모든 이미지가 포함된 압축 ZIP 파일을 받으세요.',
  },
];

const seo: PngAJpgLocaleContent['seo'] = [
  {
    "type": "title",
    "text": "PNG에서 JPG로 변환기: 이미지 최적화 가이드",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "웹사이트 속도를 높이고 파일 용량을 줄이기 위한 PNG 대 JPG 변환 가이드입니다."
  },
  {
    "type": "title",
    "text": "JPG 대 PNG 선택",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "PNG는 투명 배경과 로고에 적합하며, JPG는 사진과 웹 배너에 최적화된 고압축 용량을 제공합니다."
  },
  {
    "type": "paragraph",
    "html": "웹사이트 로딩 속도를 향상시키려면 이미지 용량을 경량화하는 것이 필수적입니다."
  },
  {
    "type": "title",
    "text": "로컬 방식 대 클라우드 방식 비교",
    "level": 3
  },
  {
    "type": "comparative",
    "items": [
      {
        "title": "클라우드 변환기",
        "description": "서버에 파일을 업로드하여 처리하는 방식.",
        "icon": "mdi:cloud-upload",
        "pointIcon": "mdi:close-circle-outline",
        "points": [
          "네트워크 지연 발생",
          "개인정보 유출 위험",
          "용량 제한",
          "광고"
        ]
      },
      {
        "title": "자사 로컬 변환기",
        "description": "웹 브라우저 내부에서 직접 변환하는 방식.",
        "icon": "mdi:laptop-mac",
        "highlight": true,
        "points": [
          "즉각적인 변환 속도",
          "완벽한 보안 (서버 전송 없음)",
          "용량 제한 없음",
          "깔끔한 환경"
        ]
      }
    ]
  },
  {
    "type": "title",
    "text": "기술적 변환 원리",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "HTML5 Canvas 기술을 활용하여 브라우저 메모리상에서 이미지를 렌더링하고 바로 저장합니다."
  },
  {
    "type": "paragraph",
    "html": "투명 영역은 자동으로 흰색 배경으로 채워져 깨끗한 JPG 파일로 완성됩니다."
  },
  {
    "type": "tip",
    "title": "SEO 팁",
    "html": "웹용 이미지를 압축하여 PageSpeed 점수를 높이세요."
  },
  {
    "type": "title",
    "text": "기업용 보안",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "민감한 문서도 안심하고 처리할 수 있는 격리된 로컬 환경을 제공합니다."
  },
  {
    "type": "title",
    "text": "호환성",
    "level": 3
  },
  {
    "type": "list",
    "icon": "mdi:check-circle",
    "items": [
      "모든 OS 뷰어",
      "SNS 플랫폼",
      "오피스 프로그램",
      "CMS 시스템"
    ]
  },
  {
    "type": "title",
    "text": "결론",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "안전하고 빠른 최상의 이미지 변환 솔루션입니다."
  }
];


export const content: PngAJpgLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'ko', faq, howTo }),
};
