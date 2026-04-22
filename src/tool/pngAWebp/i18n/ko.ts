import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAWebpLocaleContent } from '../index';

const slug = 'png-to-webp-converter';
const title = 'PNG를 WebP로 온라인에서 무료로 변환하세요';
const description =
  '브라우저에서 PNG 이미지를 WebP로 변환하세요. 파일 크기 최대 40% 감소. 투명도 유지. 파일 업로드 없음. 무료 및 개인 정보 보호.';

const ui: ImageConverterUI = {
  dragText: 'PNG 파일을 드래그하세요...',
  convertText: '즉시 WebP로 변환하려면',
  selectFiles: '파일 선택',
  processedFiles: '처리된 파일',
  downloadAll: '모두 다운로드 (.zip)',
  pending: '대기 중': '참고 문헌',
  faqTitle: '자주 묻는 질문',
};

const faq: PngAWebpLocaleContent['faq'] = [
  {
    question: '왜 PNG를 WebP로 변환해야 하나요?',
    answer:
      'WebP는 동일한 품질에서 PNG보다 최대 40% 더 나은 압축률을 제공하는 동시에 알파 투명도를 지원합니다. Google PageSpeed Insights에서 권장하는 형식입니다.',
  },
  {
    question: '변환 과정에서 투명도가 손실되나요?',
    answer:
      '아니요. WebP의 기술적 구현은 알파 채널을 지원합니다. 원본 PNG의 투명도는 새 WebP 파일에서도 그대로 유지됩니다.',
  },
  {
    question: '내 이미지가 서버로 전송되나요?',
    answer:
      '아니요. 코드는 사용자의 브라우저(클라이언트 측)에서만 실행됩니다. 당사는 사용자가 변환하는 이미지를 보거나 기록하거나 저장하지 않습니다.',
  },
];

const howTo: PngAWebpLocaleContent['howTo'] = [
  {
    name: 'PNG 파일 넣기',
    text: '용량이 큰 PNG 파일을 업로드 영역에 드래그하여 떨어뜨리거나 기존의 인터랙티브 선택기를 사용하세요.',
  },
  {
    name: '채널 감지',
    text: '로컬 렌더링 엔진이 픽셀 구성을 감지하여 최적화된 WebP 형식으로 내보냅니다.',
  },
  {
    name: '직접 다운로드',
    text: '고도로 압축된 WebP 파일을 개별적으로 다운로드하거나 ZIP 패키지 변환기를 사용하여 한 번에 묶어서 다운로드하세요.',
  },
];

const seo: PngAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG to WebP 변환기: 웹을 위한 투명도 및 현대적인 압축 기술',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong>는 로고, 아이콘, UI 요소, 누끼 컷 제품 이미지 등 투명도가 필요한 웹 이미지의 표준 형식이었습니다. 문제는 파일 크기입니다. 품질을 보장하는 무손실 압축은 파일 용량을 상당히 크게 만듭니다. Google의 <strong>WebP</strong>는 이 모순을 해결합니다. 알파 채널(투명도)을 지원하면서도 PNG보다 훨씬 더 효과적으로 압축하므로, 웹사이트에서 PNG를 WebP로 전환하는 것은 시각적 품질을 희생하지 않으면서도 완벽한 최적화를 이루는 방법입니다.',
  },
  {
    type: 'title',
    text: 'PNG와 WebP 중 무엇을 선택해야 할까요?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Photoshop이나 Figma와 같은 디자인 도구, 인쇄 작업 흐름, 레거시 데스크톱 애플리케이션 또는 WebP 지원을 보장할 수 없는 환경과 같이 호환성이 중요한 경우에는 여전히 <strong>PNG</strong>가 적합한 형식입니다. 또한 무손실 압축이 모든 픽셀을 보존하므로 편집 파이프라인에서 작업 레이어를 저장하는 데 이상적인 형식입니다. 하지만 파일 용량이 WebP보다 3~8배 더 무거울 수 있다는 단점이 있습니다.',
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong>는 모든 현대적인 웹 콘텐츠에서 PNG를 대체할 수 있는 자연스러운 선택입니다. Chrome, Firefox, Safari 및 Edge는 모두 이를 기본적으로 지원합니다. 무손실 WebP 이미지는 동일한 PNG보다 26% 더 작으며, 손실 모드에서는 시각적으로 거의 차이가 없으면서도 최대 40%까지 더 작아질 수 있습니다. 그리고 웹 디자인에서 중요한 점은 <strong>WebP가 PNG와 똑같이 알파 투명도를 보존</strong>하여 시각적 타협이 없다는 것입니다.',
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
          '업로드 및 다운로드 시 네트워크 지연 발생',
          '로고와 이미지가 타사 서버에 저장됨',
          '파일 크기 제한 및 일일 변환 횟수 제한',
          '강제적인 광고 및 타사 추적 프로그램 포함',
        ],
      },
      {
        title: '사용자 환경 로컬 아키텍처',
        description: 'Vanilla JS 기술을 사용하여 하드웨어에서 직접 처리합니다.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '네트워크 지연 없는 즉각적인 속도',
          '완벽한 개인 정보 보호 — 외부 전송 데이터 0바이트',
          '용량 제한이나 파일 개수 제한 없음',
          '광고나 추적이 없는 깨끗한 인터페이스',
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
    html: 'PNG 파일이 로컬에서 로드되어 메모리상 <strong>HTML5 Canvas</strong>에 디코딩됩니다. Canvas API는 원본 PNG의 알파 채널을 보존하여 모든 투명 및 반투명 픽셀이 RGBA 픽셀 버퍼 내에 온전히 유지됩니다. 그런 다음 <code>toDataURL(\'image/webp\')</code>을 호출하여 캔버스를 내보내는데, 이때 브라우저의 WebP 코덱(Google의 libwebp 기반)이 적용되어 투명도 데이터를 변경하지 않고도 더 압축된 파일을 생성합니다.',
  },
  {
    type: 'paragraph',
    html: 'WebP는 두 가지 압축 모드를 사용합니다. 모든 픽셀이 원본과 정확히 일치해야 하는 이미지를 위한 무손실 모드와 작은 차이가 눈에 띄지 않는 사진 및 요소를 위한 손실 모드입니다. 무손실 모드는 PNG보다 26% 더 작은 파일을 생성하며, 손실 모드는 우수한 시각적 품질을 유지하면서 PNG 대비 최대 40%의 용량 감소를 달성할 수 있습니다.',
  },
  {
    type: 'tip',
    title: '팁: 웹에서는 WebP가 PNG와 JPG를 모두 능가합니다',
    html: '무손실 모드의 WebP는 PNG보다 작습니다. 손실 모드의 WebP는 JPG보다 작습니다. 이로 인해 WebP는 웹 환경에서 <strong>두 형식을 모두 대체하는 유일한 형식</strong>이 되었습니다. 업로드하기 전에 투명 PNG를 WebP로 변환하세요. Google PageSpeed Insights는 이를 감지하여 "현대적인 형식으로 이미지 제공하기" 감사에서 긍정적인 점수를 부여합니다.',
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
      '웹사이트 및 앱용 투명 배경 로고 및 아이콘.',
      '전자상거래 상점의 누끼 컷 배경 제품 이미지.',
      '알파 투명도가 있는 CSS 스프라이트 및 UI 요소.',
      '랜딩 페이지용 래스터화된 일러스트레이션 및 벡터 그래픽.',
      '블로그 및 뉴스 포털의 투명 배경 기사 썸네일.',
    ],
  },
  {
    type: 'title',
    text: '결론',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'PNG에서 WebP로의 전환은 가장 완벽한 웹 이미지 최적화 방법입니다. 시각적 디자인을 변경하지 않고도 파일 용량을 줄이고 투명도를 유지하며 Core Web Vitals 지표를 개선할 수 있습니다. 이 도구는 브라우저에서 이미지를 처리하며 외부 서버로 전송하지 않으므로 즉각적이고 무료이며 완벽하게 개인 정보가 보호됩니다.',
  },
];


export const content: PngAWebpLocaleContent = {
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
