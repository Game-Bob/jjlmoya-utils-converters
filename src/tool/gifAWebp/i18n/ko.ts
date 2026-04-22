import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAWebpLocaleContent } from '../index';

const slug = 'gif-to-webp-converter';
const title = 'GIF를 정적 WebP로 온라인 변환';
const description =
  '애니메이션 GIF를 정적 WebP로 변환하세요. 투명도를 유지합니다. 서버 불필요. 브라우저에서 로컬로 처리됩니다. 무료.';

const ui: ImageConverterUI = {
  dragText: 'GIF 파일을 드래그하세요...',
  convertText: '즉시 WebP로 변환하기',
  selectFiles: '파일 선택',
  processedFiles: '처리된 파일',
  downloadAll: '모두 다운로드 (.zip)',
  pending: '대기 중': '참고 문헌',
  faqTitle: '자주 묻는 질문',
};

const faq: GifAWebpLocaleContent['faq'] = [
  {
    question: '왜 애니메이션 파일을 현대적인 정적 WebP 형식으로 변환해야 하나요?',
    answer:
      'WebP는 구글의 압축 표준입니다. 매우 가벼우며 투명도를 깔끔하게 유지합니다. GIF에서 WebP로 전환하면 무거운 애니메이션이 제거되고 웹 속도가 획기적으로 향상됩니다.',
  },
  {
    question: '원본의 투명도가 그대로 유지되나요?',
    answer:
      '네, JPEG와 달리 WebP 컨테이너는 복잡한 알파 채널을 지원합니다. 모든 실루엣이 원래 그대로 완벽하게 유지됩니다.',
  },
  {
    question: '파일은 어디로 업로드되나요?',
    answer:
      '업로드는 발생하지 않습니다. 모든 처리는 사용자의 PC에서 브라우저의 자바스크립트에 의해 로컬로 수행되며 외부 서버로 전송되지 않습니다.',
  },
];

const howTo: GifAWebpLocaleContent['howTo'] = [
  {
    name: '애니메이션 파일 준비',
    text: '수십 개의 짤방(meme)을 외부 연결 없이 지정된 영역으로 옮기고 놓으세요.',
  },
  {
    name: '보이지 않는 위대한 변화 확인',
    text: '로컬 캔버스 디코더가 결과물을 생성하는 동안 매 밀리초마다 바뀌는 진행 표시기를 확인하세요.',
  },
  {
    name: '깔끔하게 변환된 결과물 저장',
    text: '추출된 파일을 개별적으로 받거나 ZIP 다운로드를 눌러 모든 파일을 한꺼번에 패키징하세요.',
  },
];

const seo: GifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'GIF to WebP 변환기: 무거운 애니메이션을 위한 최신 대안',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '애니메이션 GIF는 현대 웹 콘텐츠의 공룡과 같습니다. 불균형하게 많은 대역폭을 소비하고 모든 페이지의 PageSpeed를 저하시키며, 수천 개의 웹사이트에서 전체 용량의 상당 부분을 차지합니다. 일반적인 5MB 애니메이션 GIF는 동일한 시각적 품질을 유지하면서 1MB 미만의 WebP 애니메이션으로 변환될 수 있습니다. WebP는 구글이 웹에서 GIF를 대체하기 위해 특별히 설계한 현대적인 후계자입니다.',
  },
  {
    type: 'title',
    text: 'GIF vs WebP: 웹의 과거와 현재 사이의 간극',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIF는 원래 애니메이션용으로 설계되지 않은 1987년 형식입니다. 애니메이션 기능은 나중에 추가된 임시방편이었습니다. 256색 팔레트, 비효율적인 압축, 오디오 처리 불가 등은 이제 구식 형식이 되었음을 의미합니다. 2010년 구글이 개발한 WebP는 손실 및 무손실 압축 모두에서 우수한 성능을 제공하며, 네이티브 애니메이션 지원과 완전한 알파 채널을 갖추고 있습니다.',
  },
  {
    type: 'paragraph',
    html: '웹 개발자에게 페이지의 GIF를 WebP로 교체하는 것은 구글 PageSpeed 점수를 10~30점 향상시키는 것을 의미할 수 있습니다. 페이지 용량이 줄어들면 Core Web Vitals가 개선되고 SEO 순위가 높아지며 서버 대역폭 비용이 절감됩니다. 이는 단순히 미적인 개선이 아니라 기술적인 아키텍처 결정입니다.',
  },
  {
    type: 'title',
    text: '인프라 비교: 로컬 vs 클라우드',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: '클라우드 변환기',
        description: '원격 서버에서 GIF를 처리하는 플랫폼입니다.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '사용자의 애니메이션이 인터넷을 통해 타사 서버로 전송됨',
          '업로드 및 다운로드 시 네트워크 지연으로 인한 대기 시간 발생',
          '용량 제한(무거운 GIF는 거부되는 경우가 많음)',
          '파일 보관 및 분석에 대한 보안 리스크',
        ],
      },
      {
        title: '당사의 로컬 아키텍처',
        description: 'Vanilla JS 기술을 사용하여 사용자의 하드웨어에서 직접 처리합니다.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'GIF가 사용자의 기기를 절대 떠나지 않음',
          '네트워크 대기 없는 즉각적인 변환',
          '용량 제한 없음: 어떤 크기의 GIF도 처리 가능',
          '철저한 개인정보 보호: 외부로 0바이트 전송',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '로컬 GIF to WebP 변환 작동 원리',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '로컬 변환은 HTML5 Canvas API를 사용합니다. GIF는 브라우저의 네이티브 Image 요소로 로드됩니다. 이를 캔버스에 그림으로써 그래픽 엔진은 모든 투명도 정보와 함께 첫 번째 애니메이션 프레임을 캡처합니다. <code>toDataURL(\'image/webp\')</code> 메서드는 프레임을 RAM에서 직접 WebP로 내보냅니다.',
  },
  {
    type: 'paragraph',
    html: 'WebP는 완전한 알파 채널을 지원하므로 배경을 추가할 필요 없이 결과물인 WebP에서도 GIF의 투명도가 유지됩니다. WebP 압축 알고리즘은 GIF나 PNG보다 훨씬 효율적이어서 최종 출력물의 파일 크기가 획기적으로 줄어듭니다.',
  },
  {
    type: 'tip',
    title: '확실한 PageSpeed 개선',
    html: '5MB 애니메이션 GIF는 1MB 미만의 WebP가 될 수 있습니다. 웹사이트 페이지에 GIF가 있다면 이를 WebP로 교체하여 Largest Contentful Paint (LCP) 및 Total Blocking Time (TBT)을 즉시 개선하고 SEO 순위에 직접적인 영향을 줄 수 있습니다.',
  },
  {
    type: 'title',
    text: '변환된 WebP의 활용 사례 및 호환성',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'PageSpeed 점수 개선을 위해 웹 페이지의 GIF 교체.',
      '디스코드, 슬랙 및 현대적 플랫폼용으로 최적화된 아바타 및 스티커.',
      '디지털 마케팅 캠페인용 배너 및 비주얼.',
      '프로그레시브 웹 앱(PWA)의 애니메이션.',
      '크롬, 엣지, 파이어폭스, 사파리 14 이상 및 모든 최신 브라우저와 호환.',
    ],
  },
  {
    type: 'title',
    text: '결론: GIF를 21세기에 걸맞게 현대화하세요',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '웹사이트의 모든 GIF는 최적화 기회를 놓치고 있는 것입니다. 당사의 도구는 브라우저에서 직접 GIF를 즉시, 안전하게, 제한 없이 WebP로 변환합니다. 결과적으로 파일 크기는 최대 5배 줄어들며, 완벽한 투명도 유지와 모든 최신 브라우저와의 호환성을 보장합니다.',
  },
];


export const content: GifAWebpLocaleContent = {
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
