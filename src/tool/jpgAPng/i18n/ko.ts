import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAPngLocaleContent } from '../index';

const slug = 'jpg-to-png-converter';
const title = 'JPG를 PNG로 온라인 무료 변환';
const description =
  '파일 업로드 없이 브라우저에서 JPG 이미지를 PNG로 변환하세요. 로컬에서 처리되는 무손실 변환으로 무료이며 100% 안전합니다.';

const ui: ImageConverterUI = {
  dragText: 'JPG 파일을 끌어다 놓으세요...',
  convertText: '즉시 PNG로 변환합니다',
  selectFiles: '파일 선택',
  processedFiles: '처리된 파일',
  downloadAll: '모두 다운로드 (.zip)',
  pending: '대기 중',
  bibliographyTitle: '참고 문헌',
  faqTitle: '자주 묻는 질문',
};

const faq: JpgAPngLocaleContent['faq'] = [
  {
    question: '언제 JPG에서 PNG로 변환해야 하나요?',
    answer:
      '사진 내의 텍스트나 로고를 편집하려는 경우 필수입니다. JPG를 여러 번 저장하면 노이즈가 발생하지만, PNG는 압축을 고정하여 화질 저하를 방지합니다.',
  },
  {
    question: 'PNG 파일로 변환하면 즉시 배경이 투명해지나요?',
    answer:
      '아니요. 원본 JPG는 평면 구조이며 투명 채널이 없습니다. 변환된 PNG는 투명 채널을 지원하는 컨테이너 역할을 하며, 이후 포토샵 등을 통해 배경을 제거해야 합니다.',
  },
  {
    question: '이 웹사이트에 트래픽 제한이 있나요?',
    answer:
      '클라우드 의존성이 없는 Edge 기술을 사용하므로 변환 용량에 제한이 없습니다. 모든 작업은 사용자의 컴퓨터나 모바일 기기 내에서만 이루어집니다.',
  },
];

const howTo: JpgAPngLocaleContent['howTo'] = [
  {
    name: 'JPG를 패널로 드래그',
    text: '마우스나 파일 선택기를 사용하여 JPG 형식의 정지 이미지를 업로드하세요.',
  },
  {
    name: '무손실 처리',
    text: '당사 소프트웨어는 이미지 비트를 PNG 패밀리 고유의 무손실 래퍼로 안전하게 보냅니다.',
  },
  {
    name: '세션 종료',
    text: '패널을 클릭하면 브라우저가 다운로드된 웹 에셋을 사용자의 다운로드 폴더에 저장합니다.',
  },
];

const bibliography: JpgAPngLocaleContent['bibliography'] = [
  {
    name: 'The W3C PNG Graphics',
    url: 'https://www.w3.org/Graphics/PNG/',
  },
  {
    name: 'Understanding Digital Image Compression',
    url: 'https://en.wikipedia.org/wiki/Image_compression',
  },
];

const seo: JpgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'JPG to PNG 변환기: 무손실 편집과 투명도 지원',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong>는 카메라 사진에는 최적이지만 약점이 있습니다. 파일을 저장할 때마다 손실 압축이 다시 적용되어 가장자리와 그라데이션이 점진적으로 저하됩니다. <strong>PNG</strong>는 무손실 압축을 사용하여 저장 후에도 픽셀이 변하지 않습니다. JPG를 PNG로 변환하는 것은 집중적인 편집을 준비하거나, 투명 배경을 추가하거나, 여러 번 저장이 필요한 디자인 워크플로우를 위해 필수적인 과정입니다.',
  },
  {
    type: 'title',
    text: 'JPG vs PNG: 출력 형식 선택 가이드',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong>는 사진의 왕입니다. 용량이 작고 모든 기기와 호환됩니다. 하지만 편집과 재저장을 반복할 때마다 압축 노이즈가 축적됩니다. 이미지를 반복적으로 자르거나, 보정하거나, 텍스트를 추가해야 한다면 JPG에서 시작할 경우 주기마다 화질 저하가 발생합니다. 또한 JPG는 알파 채널이 없어 투명 배경이 불가능하므로 로고나 UI 요소에는 부적합합니다.',
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong>는 기업 로고, 선명한 텍스트가 포함된 스크린샷, 제품 이미지 등 여러 번 편집될 그래픽 리소스에 적합합니다. 무손실 압축은 텍스트 가장자리를 완벽하게 정의하고, JPEG 노이즈 없이 원색을 순수하게 유지해 줍니다.',
  },
  {
    type: 'title',
    text: '비교: 로컬 변환 vs 클라우드 서비스',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: '클라우드 변환기',
        description: '파일을 원격 서버로 업로드하여 처리하는 도구입니다.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '업로드 및 다운로드 시 발생하는 네트워크 지연',
          '사용자의 이미지가 외부 서버에 남을 수 있음',
          '용량 및 일일 변환 횟수 제한',
          '불필요한 광고 및 타사 추적기 포함',
        ],
      },
      {
        title: '당사의 로컬 아키텍처',
        description: 'Vanilla JS 기술을 통해 사용자의 하드웨어에서 직접 처리합니다.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '실시간 속도 — 네트워크 지연 제로',
          '철저한 프라이버시 — 외부로 0바이트 전송',
          '용량 및 파일 개수 제한 없음',
          '광고나 추적이 없는 깨끗한 인터페이스',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '기술적인 작동 방식',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '처리는 순수하게 로컬에서 이루어집니다. 브라우저는 선택한 JPG로 <strong>Blob</strong>을 생성하고 메모리 내 <strong>HTML5 Canvas</strong>에 그립니다. 렌더링이 완료되면 <code>toDataURL(\'image/png\')</code>이 호출되며, 브라우저에 내장된 PNG 코덱이 새로운 손실 압축 없이 각 픽셀을 다시 인코딩합니다. 결과물은 JPG의 현재 상태를 충실히 보존하며, 더 이상의 화질 저하를 방지합니다.',
  },
  {
    type: 'paragraph',
    html: '생성된 PNG는 전문 도구에서 사용하는 무손실 DEFLATE 압축을 사용합니다. 정보를 버리지 않고 모든 픽셀을 저장하기 때문에 용량은 원래 JPG보다 커집니다(보통 2~5배). 이는 무한한 화질 보존과 편집 가능성에 대한 대가입니다.',
  },
  {
    type: 'tip',
    title: '중요: PNG는 손실된 화질을 복구하지 않습니다',
    html: 'JPG를 PNG로 변환한다고 해서 원본 JPEG 압축 중에 <strong>손실된 화질이 복구되는 것은 아닙니다</strong>. JPG에 이미 노이즈가 있었다면 PNG는 이를 그대로 유지하며, 단지 더 이상의 노이즈가 추가되지 않도록 할 뿐입니다. 변환은 향후 편집 과정에서 더 이상 화질이 나빠지지 않도록 현재 상태를 "고정"하는 것으로 이해하세요.',
  },
  {
    type: 'title',
    text: '사용 사례 및 호환성',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      '배경 제거 후 투명 배경이 필요한 로고 및 브랜드 에셋.',
      '텍스트가 포함되어 반복적인 편집과 재저장이 필요한 스크린샷.',
      '깔끔한 배경이 필요한 이커머스용 제품 이미지.',
      '파워포인트 또는 구글 슬라이드 발표용 그래픽 리소스.',
      '가장자리의 선명도가 중요한 웹 및 모바일 앱용 UI 에셋.',
    ],
  },
  {
    type: 'title',
    text: '결론',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'JPG에서 PNG로의 변환은 전문적인 디자인 작업의 첫 번째 단계입니다. 원본 화질을 높여주지는 않지만, 향후 편집으로부터 모든 픽셀을 보호합니다. 이 도구를 사용하면 이미지가 외부로 유출되지 않고 즉각적이고 안전하게 작업을 완료할 수 있습니다.',
  },
];


export const content: JpgAPngLocaleContent = {
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
