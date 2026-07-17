import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAWebpLocaleContent } from '../index';

const slug = 'jpg-to-webp-converter';
const title = 'JPG를 WebP로 온라인에서 무료로 변환하세요';
const description =
  '브라우저에서 JPG 이미지를 WebP로 변환하세요. 가시적인 손실 없는 뛰어난 압축률. 파일 업로드 없음. 무료, 무제한 및 개인 정보 보호.';

const ui: ImageConverterUI = {
  dragText: 'JPG 파일을 드래그하세요...',
  convertText: '즉시 WebP로 변환하려면',
  selectFiles: '파일 선택',
  processedFiles: '처리된 파일',
  downloadAll: '모두 다운로드 (.zip)',
  pending: '대기 중',
  bibliographyTitle: '참고 문헌',
  faqTitle: '자주 묻는 질문',
};

const faq: JpgAWebpLocaleContent['faq'] = [
  {
    question: '왜 JPG 사진을 WebP로 변환해야 하나요?',
    answer:
      'WebP는 사람의 눈이 차이를 느끼지 못하면서도 기존 JPG 파일보다 훨씬 더 나은 압축을 가능하게 하여 더 빠르고 현대적인 웹사이트를 만듭니다.',
  },
  {
    question: '이미지당 비용을 지불해야 하나요?',
    answer:
      '아니요, 이 도구는 무료이며 모든 작업은 컴퓨터에서 직접 처리됩니다. 가정용 또는 전문가용으로 무제한으로 사용할 수 있습니다.',
  },
  {
    question: '변환이 안전한가요?',
    answer:
      '네, 전적으로 안전합니다. 모든 처리는 로컬 브라우저의 HTML5 Canvas에서 발생하며 외부 서버로 데이터를 보내지 않습니다.',
  },
];

const howTo: JpgAWebpLocaleContent['howTo'] = [
  {
    name: 'JPG 사진 넣기',
    text: 'JPG 파일을 상단 영역으로 직접 드래그하여 떨어뜨리세요. 즉시 감지됩니다.',
  },
  {
    name: 'WebP 변환 처리',
    text: '로컬 렌더링 엔진이 각 이미지 파일을 웹에 최적화된 WebP로 변환합니다.',
  },
  {
    name: '결과 다운로드',
    text: '각 WebP를 개별적으로 저장하거나 변환된 모든 파일이 포함된 ZIP 파일을 다운로드하세요.',
  },
];

const seo: JpgAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'JPG to WebP 변환기: Google의 최신 형식으로 사이트 속도 높이기',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> 형식은 수십 년 동안 디지털 사진 분야를 지배해 왔으며 보편적인 호환성과 폭넓은 지원을 자랑합니다. 하지만 Google은 동일한 시각적 품질을 유지하면서 파일 크기를 25-35% 줄여 JPG를 능가하는 <strong>WebP</strong>를 설계했습니다. 느린 페이지 로딩과 씨름하는 개발자와 마케팅 팀에게 JPG를 WebP로 변환하는 것은 디자인을 수정하지 않고도 적용할 수 있는 가장 수익성 높은 최적화입니다.',
  },
  {
    type: 'title',
    text: 'JPG와 WebP 중 무엇을 선택해야 할까요?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '고객 이메일, Word 문서, 레거시 소셜 미디어 플랫폼 또는 아직 WebP를 지원하지 않는 CMS 시스템과 같이 보편적인 호환성이 필요한 경우에는 여전히 <strong>JPG</strong>가 올바른 선택입니다. 30년 동안 구축된 생태계 덕분에 어떤 화면, 프린터 또는 뷰어에서도 문제 없이 열 수 있습니다. 주요 단점은 크기입니다. 1.5MB 용량의 헤더 JPG는 페이지의 LCP 점수를 낮추고 Core Web Vitals 임계값을 통과하지 못하게 만들 수 있습니다.',
  },
  {
    type: 'paragraph',
    html: '웹사이트에 게시되는 모든 콘텐츠에는 <strong>WebP</strong>가 스마트한 선택입니다. Chrome, Firefox, Safari 및 Edge는 이미 수년 전부터 이를 기본적으로 지원하고 있습니다. 전자상거래의 제품 이미지, 블로그 배너, 비디오 썸네일 및 온라인에 게시된 모든 사진은 페이지 무게 감소, Google PageSpeed Insights 점수 개선, 느린 모바일 환경에서의 부드러운 사용자 경험 제공 등 직접적인 혜택을 누릴 수 있습니다.',
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
          '사진이 타사 서버에 저장됨',
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
          '완벽한 개인 정보 보호 - 외부 전송 데이터 0바이트',
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
    html: 'JPG 파일을 도구로 드래그하면 브라우저는 RAM에만 상주하는 <strong>Blob 객체</strong>를 생성합니다. 해당 Blob은 디코딩되어 보이지 않는 <strong>HTML5 Canvas</strong> 요소에 그려집니다. JPG에는 알파 채널이 없으므로 WebP로의 변환이 직접적으로 이루어집니다. 엔진은 <code>toDataURL(\'image/webp\')</code>을 호출하여 캔버스를 내보내고, 서버를 통하지 않고 운영 체제가 즉시 다운로드하는 바이트 스트림을 생성합니다.',
  },
  {
    type: 'paragraph',
    html: 'WebP 압축 알고리즘은 블록 예측 기술(Google의 비디오 코덱인 VP8과 유사)을 색상 변환 및 산술 코딩과 결합합니다. 그 결과 원본 JPG와 동일한 지각 정보를 포함하면서도 훨씬 더 효율적으로 패키징된 파일이 생성됩니다. 이는 페이지 방문 시마다 전송되는 킬로바이트 수가 줄어든다는 것을 의미합니다.',
  },
  {
    type: 'tip',
    title: 'Core Web Vitals 팁: LCP와 이미지 무게',
    html: '<strong>Largest Contentful Paint (LCP)</strong>는 페이지에서 가장 큰 시각적 요소를 로드하는 데 걸리는 시간을 측정하는 Google의 지표입니다. 1.5MB 헤더 JPG를 시각적 차이 없이 단 900KB 또는 600KB의 WebP로 만들 수 있습니다. 이러한 <strong>25~35%의 절감</strong>은 LCP를 "개선 필요"에서 "좋음"으로 이동시키고 검색 순위를 높일 수 있습니다.',
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
      'WooCommerce 또는 Shopify 매장의 제품 이미지: 가벼운 무게로 전환율 증대.',
      '블로그 및 뉴스 사진: 디자인 변경 없이 PageSpeed 점수 향상.',
      '웹 배너 및 디스플레이 광고: 동일한 선명도를 유지하면서 파일 용량 감소.',
      '건축, 사진 또는 디자인 스튜디오의 포트폴리오 갤러리.',
      '스트리밍 사이트나 온라인 교육 플랫폼의 비디오 썸네일.',
    ],
  },
  {
    type: 'title',
    text: '결론',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'JPG를 WebP로 변환하는 것은 현재 웹사이트에 적용할 수 있는 가장 간단하고 비용 효율적인 최적화 중 하나입니다. 이 도구를 사용하면 이미지가 기기를 떠나지 않고도 몇 초 만에 무료로 변환할 수 있습니다. 더 적은 킬로바이트, 더 나은 LCP, 더 빠른 페이지 로딩 - 이 모든 것을 기존과 동일한 시각적 품질로 누리세요.',
  },
];


export const content: JpgAWebpLocaleContent = {
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
