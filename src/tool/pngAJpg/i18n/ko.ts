import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAJpgLocaleContent } from '../index';

const slug = 'convert-png-to-jpg';
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
    question: '왜 우리의 로컬 PNG to JPG 변환기를 선택해야 하나요?',
    answer:
      '기존 도구와 달리, 우리의 유틸리티는 브라우저 내에서 파일을 완전히 처리합니다. 사용자의 이미지는 타인의 하드 드라이브에 절대 닿지 않으므로, 데이터의 완전한 주권과 개인정보 보호를 보장합니다.',
  },
  {
    question: 'JPG 또는 PNG? 제 경우에 무엇이 더 나을까요?',
    answer:
      'PNG는 로고나 투명도가 필요한 요소에 이상적입니다. 하지만 JPG는 사진 및 웹 배너의 골드 표준이며, 훨씬 작은 파일 크기를 달성하여 사이트 로딩 속도를 획기적으로 향상시킵니다.',
  },
  {
    question: '업로드 없이 기술적인 변환이 어떻게 이루어지나요?',
    answer:
      '우리는 HTML5 Canvas의 힘을 사용합니다. 브라우저는 투명한 가상 캔버스에 이미지를 재현하고, 투명한 부분을 흰색으로 채운 뒤, 즉시 다운로드 가능한 바이트 스트림을 생성합니다.',
  },
  {
    question: '기밀 문서에 사용해도 안전한가요?',
    answer:
      '네, 은행, 의료 또는 법률 분야의 전문가들에게 가장 안전한 옵션입니다. 사용자의 RAM만 사용하는 "블랙박스" 역할을 하므로, 탭을 닫는 즉시 내부에서 일어나는 모든 데이터는 소멸되어 제3자 클라우드로의 유출을 방지합니다.',
  },
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

const bibliography: PngAJpgLocaleContent['bibliography'] = [
  {
    name: 'PNG 컨소시엄 사양',
    url: 'http://www.libpng.org/pub/png/',
  },
  {
    name: 'JPEG 위원회',
    url: 'https://jpeg.org/',
  },
];

const seo: PngAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG to JPG 변환기: 이미지 최적화를 위한 최종 가이드',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '디지털 디자인과 웹 개발의 세계에서 효율성은 곧 모든 것입니다. PNG(Portable Network Graphics) 형식은 투명도를 유지하고 무손실 압축을 제공하여 사랑받지만, 큰 적이 하나 있습니다. 바로 파일 무게입니다. 웹사이트를 빠르게 운영하거나 이메일을 즉시 로드하고 싶다면, PNG에서 JPG로의 전환은 가장 현명한 기술적 결정입니다.',
  },
  {
    type: 'title',
    text: 'JPG 또는 PNG?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '어느 한 형식이 다른 형식보다 우월한 것이 아니라, 필요에 따른 도구의 선택이 중요합니다. PNG는 무손실 형식으로, 인터페이스 목업, 작은 텍스트가 포함된 로고, 투명한 배경이 필요한 시각적 요소에 이상적입니다. 하지만 이러한 충실도에는 대가가 따릅니다. 압축된 JPG보다 파일 크기가 5배에서 10배 더 무거울 수 있습니다.',
  },
  {
    type: 'paragraph',
    html: '반면 JPG(Joint Photographic Experts Group)는 인간의 눈이 거의 인지하지 못하는 정보를 제거하는 이산화 알고리즘을 사용하여 매우 가벼운 파일 크기를 달성합니다. 사진, 광고 배너 및 소셜 미디어를 위한 골드 표준입니다. PNG를 JPG로 변환함으로써, 기하학적 충실도를 네트워크 속도와 교환하게 됩니다.',
  },
  {
    type: 'title',
    text: '아키텍처 비교: 로컬 대 클라우드',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: '클라우드 변환기',
        description: '사진을 원격 서버로 업로드하는 기존 도구입니다.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '네트워크 지연 (업로드/다운로드)',
          '개인 데이터 유출 위험',
          '파일당 크기 제한',
          '광고 및 추적기',
        ],
      },
      {
        title: '우리의 로컬 아키텍처',
        description: 'Vanilla JS 기술을 통해 사용자 하드웨어에서 직접 처리합니다.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '네트워크가 필요 없는 즉각적인 속도',
          '개인정보 보호 보장 (0바이트 전송)',
          '파일당 MB 제한 없음',
          '프로페셔널하고 깔끔한 인터페이스',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '기술적 변환의 원리',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '서버로 전송하지 않고 이미지를 변환하는 것이 어떻게 가능한지 궁금하실 것입니다. 그 마법은 현대 브라우저의 힘에 있습니다. 파일을 선택하면 사용자의 RAM에만 존재하는 Blob을 생성합니다. 그 Blob은 보이지 않는 HTML5 Canvas 요소 위에 그려집니다.',
  },
  {
    type: 'paragraph',
    html: 'JPG는 투명도를 지원하지 않기 때문에, 우리의 알고리즘은 PNG를 "그리기" 전에 배경을 흰색으로 채웁니다. 이미지가 구성되면 네이티브 내보내기 메서드를 실행하여 사용자의 컴퓨터가 직접 다운로드하는 바이트 스트림을 생성합니다.',
  },
  {
    type: 'tip',
    title: 'SEO 팁: 이상적인 파일 크기',
    html: 'Google은 느린 웹사이트에 대해 불이익을 줍니다. 2MB 크기의 헤더 PNG 때문에 Largest Contentful Paint(LCP)가 높다면, 이를 200KB 크기의 JPG로 변환하여 시각적 차이 없이 즉시 PageSpeed 지표를 개선할 수 있습니다.',
  },
  {
    type: 'title',
    text: '기업 및 전문가를 위한 보안',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '금융, 의료 또는 법률과 같은 민감한 분야에서 일하는 경우, 온라인 변환기에 파일을 업로드하는 것은 보안 위반입니다. 우리의 도구는 "블랙박스"처럼 작동합니다. 내부에서 일어나는 모든 일은 사용자의 RAM에 머뭅니다. 기밀 문서를 다루는 유일하고 안전한 방법입니다.',
  },
  {
    type: 'title',
    text: '결과물의 호환성',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Windows, macOS 및 모바일 장치 뷰어.',
      '소셜 네트워크 (Instagram, LinkedIn 등).',
      '오피스 도구 (Word, PowerPoint).',
      '콘텐츠 관리 시스템 (WordPress, Shopify).',
    ],
  },
  {
    type: 'title',
    text: '결론: 프로처럼 최적화하세요',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '이 변환기는 단순한 페이지가 아니라 사용자의 삶을 편리하게 만들기 위해 설계된 공학의 정수입니다. 개발자이든 일반 사용자이든, 여기에서 메가바이트를 절약하고 데이터를 안전하게 지키기 위한 최상의 해결책을 찾으실 수 있습니다.',
  },
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
