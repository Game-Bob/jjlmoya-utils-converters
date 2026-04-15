import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAWebpLocaleContent } from '../index';

const slug = 'convert-bmp-to-webp';
const title = 'BMP WebP 무료 변환기';
const description =
  'BMP 이미지를 오프라인에서 WebP로 변환하세요. 방대한 파일을 킬로바이트 단위로 대폭 압축합니다. 파일 업로드 없음. 무료, 오프라인, 100% 안전한 로컬 처리.';

const ui: ImageConverterUI = {
  dragText: 'BMP 파일을 여기로 드래그하세요...',
  convertText: '즉시 WebP로 변환하기',
  selectFiles: '파일 선택',
  processedFiles: '처리된 파일',
  downloadAll: '모두 다운로드 (.zip)',
  pending: '대기 중',
  bibliographyTitle: '참고 문헌',
  faqTitle: '자주 묻는 질문',
};

const faq: BmpAWebpLocaleContent['faq'] = [
  {
    question: '왜 BMP 파일은 10배 이상 용량이 크며, WebP로 변환하면 어떤 이점이 있나요?',
    answer:
      'BMP는 압축되지 않은 픽셀 맵을 저장하여 용량이 큽니다. WebP는 고도의 수학적 압축 알고리즘을 사용하여 이미지 품질을 시각적으로 유지하면서도 용량을 메가바이트 단위에서 킬로바이트 단위로 획기적으로 줄여줍니다.',
  },
  {
    question: '계정을 등록해야 하나요?',
    answer:
      '이메일이나 계정 등록이 필요 없습니다. 모든 작업은 사용자의 브라우저 내 JavaScript에 의해 로컬에서 처리되므로 외부 서버로 파일이 전송되지 않아 보안이 완벽합니다.',
  },
  {
    question: '여러 파일을 동시에 드래그하여 변환할 수 있나요?',
    answer:
      '네, 사용자의 기기 성능이 허용하는 한 50개 또는 100개의 파일을 한꺼번에 처리할 수 있습니다.',
  },
];

const howTo: BmpAWebpLocaleContent['howTo'] = [
  {
    name: '파일 준비',
    text: '변환하려는 BMP 비트맵 파일들을 한곳에 모아두세요.',
  },
  {
    name: '즉각적인 일괄 처리',
    text: '준비된 모든 파일을 당사 웹 페이지의 작업 영역으로 드래그 앤 드롭하세요.',
  },
  {
    name: '최적화된 WebP 결과물 확인',
    text: '변환된 결과물을 개별적으로 다운로드하거나 즉시 생성된 ZIP 패키지로 한번에 받으세요.',
  },
];

const bibliography: BmpAWebpLocaleContent['bibliography'] = [
  {
    name: 'BMP File Format',
    url: 'https://en.wikipedia.org/wiki/BMP_file_format',
  },
  {
    name: 'Google WebP Documentation',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: BmpAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'BMP to WebP 변환기: 혁신적인 저장 공간 확보 솔루션',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMP를 WebP로 변환하는 것은 이미지 관리 측면에서 가장 효과적인 혁신 중 하나입니다. BMP(비트맵) 형식은 디지털 환경에서 가장 오래되고 용량이 큰 형식 중 하나로, 압축 없이 모든 픽셀을 그대로 저장합니다. 반면 구글에서 개발한 WebP는 원본과 구분하기 어려운 시각적 품질을 유지하면서도 최신 압축 알고리즘을 통해 용량을 원본 대비 최대 1/100까지 줄일 수 있습니다.',
  },
  {
    type: 'title',
    text: 'BMP와 WebP의 효율성 차이는 어디서 발생하나요?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMP 형식은 1980년대 윈도우 환경을 위해 설계되었으며, 당시에는 저장 공간보다는 처리 속도를 위해 비압축 방식을 선택했습니다. 따라서 1920x1080 이미지라면 내용에 관계없이 약 6MB의 고정 용량을 가집니다. 이는 전문 편집에는 유리할 수 있지만 웹 환경이나 대용량 저장에는 매우 비효율적입니다.',
  },
  {
    type: 'paragraph',
    html: 'WebP는 디지털 비디오 기술에 기초한 블록 기반 예측 압축 및 DCT 변환 기술을 사용하여 원본의 화질 저하를 최소화하면서 80KB~300KB 수준으로 용량을 최적화합니다. 또한 투명도를 지원하는 알파 채널 기능까지 갖추고 있어 다용도로 활용하기에 최적의 형식입니다.',
  },
  {
    type: 'title',
    text: '인프라 비교: 클라우드 방식 vs 당사의 로컬 아키텍처',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: '클라우드 변환기',
        description: '원본 BMP 파일을 외부 서버로 업로드하여 처리하는 방식입니다.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '네트워크 속도에 따라 대용량 BMP 업로드 시 지연 시간 발생',
          '사용자의 이미지가 외부 서버에 남을 수 있는 보안 리스크',
          '무료 서비스의 경우 파일 크기 및 개수 제한 존재',
          '불필요한 광고와 데이터 추적기 포함 가능성',
        ],
      },
      {
        title: '당사의 로컬 아키텍처',
        description: '사용자의 브라우저 내에서 직접 구동되어 기기를 벗어나지 않는 안전한 처리 방식입니다.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '네트워크 전송 없이 실시간 즉시 변환 수행',
          '철저한 개인정보 보호 — 외부로 0바이트 전송',
          '파일당 용량이나 개수에 대한 인위적인 제한 없음',
          '인터넷 연결 없이도 오프라인에서도 작동',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '브라우저 기반 로컬 변환 기술의 작동 원리',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '변환 과정은 순수하게 사용자의 기기에서만 이루어집니다. 드래그한 BMP 파일은 브라우저의 <code>FileReader</code> API를 통해 메모리에 Blob 데이터로 읽혀지며, 보이지 않는 캔버스 위에 그려집니다. 그 후 브라우저 고유의 WebP 압축 알고리즘이 적용되어 원본과 시각적으로 동일하지만 용량은 훨씬 최적화된 결과물이 생성됩니다.',
  },
  {
    type: 'paragraph',
    html: '결과물은 즉시 다운로드 가능한 URL로 생성되어 사용자의 디스크에 저장되며, 전 과정에서 네트워크 연결은 전혀 발생하지 않습니다. 따라서 매우 빠르고 안전합니다.',
  },
  {
    type: 'tip',
    title: '압도적인 효율성: 99% 용량 절감',
    html: 'BMP에서 WebP로의 변환은 파일 크기를 최대 99%까지 줄일 수 있습니다. 원본 20MB 파일이 시각적으로 거의 동일한 품질의 200KB 파일로 변환됩니다. 이는 표준 이미지 형식 간에 가능한 가장 효율적인 용량 혁신입니다.',
  },
  {
    type: 'title',
    text: 'WebP의 활용성과 호환성',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      '웹 기반 서비스 — 크롬, 사파리, 엣지 등 모든 현대적 브라우저 지원.',
      '소셜 네트워크 — 인스타그램, X(트위터), 페이스북 등에서의 네이티브 지원.',
      '앱 개발 및 PWA — 빠른 로딩을 위한 최소 용량 이미지 구축.',
      '효율적인 아카이브 — 대용량 BMP 컬렉션을 기가바이트 단위로 절약하며 보관.',
      '이메일 마케팅 — 모든 메일 클라이언트에서 빠르게 로딩되는 고화질 이미지.',
    ],
  },
  {
    type: 'title',
    text: '결론: 클릭 한 번으로 경험하는 압도적인 저장 효율',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '오래된 소프트웨어의 결과물이나 비압축 스크린샷과 같이 용량만 차지하는 BMP 파일들을 관리하고 있다면 WebP로의 변환은 최고의 선택입니다. 당사의 도구는 별도의 제한 없이 즉각적이고 안전하게 사용자의 이미지를 현대화해 드립니다.',
  },
];


export const content: BmpAWebpLocaleContent = {
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
