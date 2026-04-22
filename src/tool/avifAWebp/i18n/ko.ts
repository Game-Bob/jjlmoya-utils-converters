import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAWebpLocaleContent } from '../index';

const slug = 'avif-to-webp-converter';
const title = 'AVIF를 WebP로 온라인 변환';
const description =
  '호환성을 높이기 위해 AVIF 이미지를 WebP로 변환하세요. 서버 없는 로컬 처리 방식입니다. 무료이며 프라이빗하며 무제한으로 사용할 수 있습니다.';

const ui: ImageConverterUI = {
  dragText: 'AVIF 파일을 끌어다 놓으세요...',
  convertText: '즉시 WebP로 변환합니다',
  selectFiles: '파일 선택',
  processedFiles: '처리된 파일',
  downloadAll: '모두 다운로드 (.zip)',
  pending: '대기 중': '참고 문헌',
  faqTitle: '자주 묻는 질문',
};

const faq: AvifAWebpLocaleContent['faq'] = [
  {
    question: 'WebP로 변환하는 것과 다른 형식의 실제 차이점은 무엇인가요?',
    answer:
      'WebP는 두 세계의 장점을 모두 제공합니다. JPG만큼 놀라운 압축률을 보이면서도 PNG처럼 깨끗한 투명도를 유지할 수 있습니다. AVIF를 WebP로 변경하면 모든 장점을 유지하면서 웹 호환성을 극대화할 수 있습니다.',
  },
  {
    question: '서버 없이 어떻게 이렇게 빠르게 변환할 수 있나요?',
    answer:
      '내장된 디코딩 모듈과 JavaScript HTML5 Image 객체를 활용하여 로컬 메모리에서 AVIF를 읽고 최적화된 WebP 파일을 최단 시간에 추출할 수 있습니다.',
  },
  {
    question: '현재 WebP 형식은 완전히 호환되나요?',
    answer:
      '갓 태어난 AVIF와 달리 WebP 형식은 Chrome, Firefox, Safari 등 브라우저 간에 매우 폭넓은 지원을 받고 있습니다.',
  },
];

const howTo: AvifAWebpLocaleContent['howTo'] = [
  {
    name: '사진 파일 삽입',
    text: '모든 AVIF 형식 선택 항목을 캔버스로 드래그 앤 드롭 하세요.',
  },
  {
    name: '알고리즘 바이트 변환',
    text: '우리 엔진은 아무것도 업로드하지 않고 알고리즘을 처리하며 압축된 WebP를 기반으로 정확한 결과물을 생성합니다.',
  },
  {
    name: '완료된 다운로드 수집',
    text: '패널을 누르고 ZIP 압축 파일 또는 개별 파일로 즉시 게시할 수 있게 받으세요.',
  },
];

const seo: AvifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'AVIF to WebP 변환기: 웹을 위한 현대적이고 안전한 대안',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF는 현재 사용 가능한 가장 진보된 이미지 형식입니다. WebP보다 작고 JPG보다 작으며 시각적 품질도 뛰어납니다. 하지만 채택 속도는 일정하지 않았습니다. Safari는 2024년까지 이를 지원하지 않았으며 많은 구형 모바일 장치는 이를 인식하지 못합니다. 반면 WebP는 95% 이상의 글로벌 지원을 받으며 수년 동안 현대적 웹 표준으로 자리 잡았습니다. 호환성을 위협하지 않으면서 최신 기술이 필요할 때 AVIF를 WebP로 변환하는 것은 실용적인 결정입니다.',
  },
  {
    type: 'title',
    text: 'AVIF vs WebP: 최신 기술 vs 가장 안전한 선택',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF는 현재 사용 가능한 가장 진보된 압축 기술을 제공합니다. 일반적으로 동일한 품질에서 WebP보다 20-30% 더 작습니다. AV1 기반 기술은 업계에서 가장 현대적입니다. 그러나 AVIF 지원에는 여전히 사각지대가 있습니다. 이전 Safari 버전, 일부 구형 Android 브라우저 및 특정 데스크톱 이미지 플레이어는 이를 인식하지 못합니다. 넓고 다양한 청중을 보유한 웹 서비스에 이는 위험 요소가 될 수 있습니다.',
  },
  {
    type: 'paragraph',
    html: 'WebP는 훨씬 더 견고한 지원 이력을 가지고 있습니다. Chrome은 2010년에 채택했고 Firefox와 Edge가 그 뒤를 이었으며 Safari는 2020년에 이를 포함했습니다. 브라우저에서 95% 이상의 글로벌 점유율을 기록하는 WebP는 별도의 대체 형식을 제공하고 싶지 않은 모든 웹사이트에 안전한 선택입니다. 투명도, 손실 및 무손실 압축을 지원하며 JPG나 PNG보다 훨씬 작은 파일을 생성합니다.',
  },
  {
    type: 'title',
    text: '비교: 클라우드 변환기 vs 우리의 로컬 아키텍처',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: '클라우드 변환기',
        description: '처리를 위해 AVIF 파일을 원격 서버로 업로드하는 도구입니다.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '사용자의 개인 이미지가 외부 서버로 전송됨',
          '워크플로우를 늦추는 네트워크 지연 발생',
          '무료 변환 시 파일 개수 및 크기 제한',
          '변경될 수 있는 제3자 서비스에 의존',
        ],
      },
      {
        title: '우리의 로컬 아키텍처',
        description: 'Vanilla JS 기술과 Canvas API를 사용하여 브라우저에서 직접 처리합니다.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '완벽한 프라이버시 — 0바이트가 장치 외부로 나감',
          '네트워크 의존성 없는 즉각적인 속도',
          '크기나 파일 개수 제한 없음',
          '인터넷 연결 없이도 작동',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '브라우저에서의 기술적인 변환 원리',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Chrome, Firefox, Edge는 네이티브 AVIF 디코더를 포함하고 있습니다. 파일을 불러오면 브라우저의 이미지 엔진이 알파 채널 정보를 유지하면서 RAM에서 이를 디코드합니다. 이미지는 투명도를 올바르게 보존하는 2D 컨텍스트를 사용하여 보이지 않는 HTML5 <code>Canvas</code> 위에 그려집니다.',
  },
  {
    type: 'paragraph',
    html: '내보내기는 <code>toBlob(\'image/webp\', quality)</code>를 통해 수행됩니다. 브라우저는 내부적으로 WebP 압축 알고리즘을 적용하여 원본 이미지에 알파 채널이 있는 경우 이를 포함하는 Blob을 생성합니다. 이 Blob은 즉시 다운로드 링크로 변환됩니다. 전체 프로세스는 외부 서버와의 통신 없이 수 마이크로초 내에 발생합니다.',
  },
  {
    type: 'tip',
    title: 'WebP: 현대 개발자의 실용적인 선택',
    html: 'WebP는 브라우저에서 95% 이상의 지원을 받습니다. AVIF가 성장하고 있지만 아직 그 수치에는 도달하지 못했습니다. 적응형 형식 탐지 기능이 없는 운영 중인 사이트의 경우 WebP는 거의 모든 청중을 포괄하는 안전한 선택입니다. AVIF를 WebP로 변환하여 자신 있게 최신 이미지를 제공하세요.',
  },
  {
    type: 'title',
    text: '사용 사례: AVIF보다 WebP를 선택해야 할 때',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      '폴리필 없이 2020년 이후 브라우저에서 지원이 필요한 웹사이트.',
      'WebP는 수용하지만 AVIF는 지원하지 않는 CDN 및 이미지 제공 시스템.',
      'AVIF를 지원하지 않을 수 있는 WebView를 사용하는 하이브리드 모바일 앱.',
      'WebP가 AVIF보다 지원 범위가 넓은 현대적 HTML 이메일.',
      '확립된 WebP 이미지 지원 기능을 갖춘 CMS 플랫폼 및 이커머스.',
    ],
  },
  {
    type: 'title',
    text: '결론: 호환성이 보장된 최신 기술',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF는 이미지 압축의 최전선에 있지만 WebP는 현대적 웹 생태계의 신뢰할 수 있고 보편적인 선택입니다. 우리의 도구를 사용하면 서버에 아무것도 업로드하지 않고도 최신 형식에서 가장 널리 지원되는 형식으로 즉시 전환할 수 있습니다. 완벽한 프라이버시가 보장되며 크기 제한도 없습니다.',
  },
];


export const content: AvifAWebpLocaleContent = {
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
