import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAJpgLocaleContent } from '../index';

const slug = 'webp-to-jpg-converter';
const title = 'WebP를 JPG로 온라인에서 무료로 변환하세요';
const description =
  '파일을 업로드하지 않고 WebP 이미지를 JPG로 변환하세요. 100% 개인 정보 보호 로컬 처리. 투명한 배경은 자동으로 흰색으로 교체됩니다.';

const ui: ImageConverterUI = {
  dragText: 'WebP 파일을 드래그하세요...',
  convertText: '즉시 JPG로 변환하려면',
  selectFiles: '파일 선택',
  processedFiles: '처리된 파일',
  downloadAll: '모두 다운로드 (.zip)',
  pending: '대기 중': '참고 문헌',
  faqTitle: '자주 묻는 질문',
};

const faq: WebpAJpgLocaleContent['faq'] = [
  {
    question: '개인 이미지를 안전하게 업로드할 수 있나요?',
    answer:
      '네. 업로드 서버가 없습니다. 브라우저가 컴퓨터에서 WebP를 처리하고 다운로드할 수 있는 JPG를 생성합니다. 다른 누구도 볼 수 없습니다.',
  },
  {
    question: 'WebP 배경이 투명하면 어떻게 되나요?',
    answer:
      'JPG는 투명도를 지원하지 않으므로 변환기가 투명한 영역을 고정된 흰색 배경으로 자동으로 채웁니다.',
  },
  {
    question: '변환 횟수나 파일 크기에 제한이 있나요?',
    answer:
      '제한을 두지 않습니다. 컴퓨터에 충분한 처리 능력과 RAM이 있는 한 수백 개의 이미지를 변환할 수 있습니다.',
  },
];

const howTo: WebpAJpgLocaleContent['howTo'] = [
  {
    name: '파일 드래그',
    text: '현대적인 WebP 파일을 업로드 영역으로 드롭하거나 대화형 파일 브라우저를 사용하여 선택하세요.',
  },
  {
    name: '로컬 변환',
    text: '로컬 엔진이 배경을 적용하고 각 픽셀을 보편적인 JPG 형식으로 해석하는 것을 지켜보세요.',
  },
  {
    name: '결과 확인',
    text: '개별적으로 다운로드하거나 ZIP 패키지를 사용하여 모든 새 사진을 하나로 묶으세요.',
  },
];

const seo: WebpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'WebP to JPG 변환기: 개인 정보 보호를 타협하지 않는 보편적 호환성',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong>는 그래픽 품질을 유지하면서 전통적인 JPG와 비교할 수 있는 가벼운 이미지를 제공하려는 Google의 시도입니다. 그러나 호환성은 여전히 실제 환경에서 문제로 남아 있습니다. Outlook과 같은 이메일 클라이언트, 레거시 디자인 소프트웨어, 메시징 앱 및 기업 워크플로우는 여전히 어디에나 있는 <strong>JPG</strong>에 의존합니다. WebP를 JPG로 변환하는 것은 현대적인 웹과 현실 세계 사이의 가교입니다.',
  },
  {
    type: 'title',
    text: 'WebP vs JPG: 각 형식을 언제 사용해야 하나요?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP는 브라우저 호환성이 보장되는 Chrome, Edge 또는 Firefox의 현대적인 웹사이트와 같이 제어된 환경에서 뛰어납니다. 우수한 압축률은 동일한 품질의 JPG에 비해 파일 무게를 25-35% 줄여 로딩 시간과 Core Web Vitals 지표를 개선합니다. 보기 환경을 제어할 수 있는 경우 이상적인 형식입니다.',
  },
  {
    type: 'paragraph',
    html: '반면 JPG는 이메일 첨부 파일, PowerPoint 프레젠테이션, Word 문서, 가정용 프린터, 레거시 편집 애플리케이션 및 소셜 미디어 플랫폼 등 <em>예외 없이 모든 상황</em>에서 작동합니다. 기술적 마찰 없이 누군가 이미지를 열 수 있어야 한다면 JPG가 정답입니다.',
  },
  {
    type: 'title',
    text: '비교: 로컬 변환 vs 클라우드 변환',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: '클라우드 변환기',
        description: '원격 서버로 파일을 업로드하는 도구입니다.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '사용자의 사진이 인터넷을 통해 알 수 없는 서버로 이동함',
          '업로드 및 원격 처리를 위한 대기 시간 발생',
          '파일 크기 및 무료 변환 횟수에 대한 일일 제한 존재',
          '제3자 서버의 데이터 보관에 대한 실질적인 위험',
        ],
      },
      {
        title: '당사의 로컬 아키텍처',
        description: 'Vanilla JS 기술을 사용하여 하드웨어에서 직접 처리합니다.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '전송된 바이트 0: 모든 것이 RAM에서 발생함',
          '인터넷 연결에 의존하지 않는 즉각적인 속도',
          '파일 크기나 파일 수에 제한 없음',
          '개인용, 의료용 또는 기업용 사진에 완벽함',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '기술적 작동 원리',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP 파일을 도구로 드래그하면 브라우저가 내부 렌더링 엔진을 사용하여 기본적으로 디코딩합니다. 그런 다음 파일은 보이지 않는 <strong>HTML5 Canvas</strong> 요소에 그려집니다. JPG는 투명도를 지원하지 않으므로 알고리즘은 이미지를 위에 합성하기 전에 캔버스를 고정된 흰색 배경으로 미리 채웁니다.',
  },
  {
    type: 'paragraph',
    html: '마지막 단계는 내보내기입니다. Canvas 메서드 <code>toDataURL(\'image/jpeg\')</code>는 캔버스 픽셀을 고품질 압축 JPG 바이트 스트림으로 변환합니다. 이 스트림은 네트워크 통신 없이 브라우저의 다운로드 시스템으로 직접 전달됩니다. 전 과정은 멀티 메가픽셀 이미지의 경우에도 수 밀리초밖에 걸리지 않습니다.',
  },
  {
    type: 'tip',
    title: '호환성 팁',
    html: '기술에 익숙하지 않은 사용자와 사진을 공유하거나 이메일로 보낼 때는 항상 JPG를 사용하세요. 모든 이메일 클라이언트, 운영 체제 또는 장치에서 호환성 문제가 전혀 없으며 예외나 불쾌한 놀라움도 없습니다.',
  },
  {
    type: 'title',
    text: '활용 사례 및 호환성',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Outlook, Gmail 또는 Apple Mail의 이메일에 사진 첨부.',
      'Word 문서, Excel 또는 PowerPoint 프레젠테이션에 이미지 삽입.',
      'WebP를 거부하는 소셜 미디어 플랫폼에 게시.',
      '형식 지원이 제한된 WhatsApp 또는 메시징 앱을 통해 공유.',
      'JPG 또는 PNG만 허용하는 인쇄 서비스에서 사진 인쇄.',
    ],
  },
  {
    type: 'title',
    text: '결론',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP는 웹 이미지의 미래이지만 JPG는 보편적인 호환성의 왕으로 남아 있습니다. 이 도구를 사용하면 아무것도 설치하지 않고도 완전히 개인적으로 단 몇 초 만에 그 가교를 건널 수 있습니다. 사용자의 이미지는 기기를 절대 떠나지 않습니다.',
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
  schemas: generateSchemas({ title, description, inLanguage: 'ko', faq, howTo }),
};
