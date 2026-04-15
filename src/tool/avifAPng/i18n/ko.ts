import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAPngLocaleContent } from '../index';

const slug = 'convert-avif-to-png';
const title = 'AVIF를 PNG로 온라인 변환';
const description =
  '투명도를 유지하면서 AVIF 이미지를 PNG로 변환하세요. 파일을 업로드할 필요가 없습니다. 브라우저에서의 로컬 처리 방식으로 무료이며 무제한으로 사용할 수 있습니다.';

const ui: ImageConverterUI = {
  dragText: 'AVIF 파일을 끌어다 놓으세요...',
  convertText: '즉시 PNG로 변환합니다',
  selectFiles: '파일 선택',
  processedFiles: '처리된 파일',
  downloadAll: '모두 다운로드 (.zip)',
  pending: '대기 중',
  bibliographyTitle: '참고 문헌',
  faqTitle: '자주 묻는 질문',
};

const faq: AvifAPngLocaleContent['faq'] = [
  {
    question: '왜 AVIF를 PNG로 변환해야 하나요?',
    answer:
      'AVIF는 압축률이 높지만, 오래된 브라우저와 기존 편집기에서의 호환성이 제한적입니다. AVIF에서 PNG로 변환하면 파일의 원본 투명도를 유지하면서 모든 애플리케이션에서 열 수 있습니다.',
  },
  {
    question: '원본 AVIF 파일의 투명도가 유지되나요?',
    answer:
      '네. 투명 배경을 삭제하는 JPG와 달리, PNG로 내보낼 때 우리의 변환기는 알파 채널을 그대로 유지합니다.',
  },
  {
    question: '이미지가 인터넷에 업로드되지 않는다는 것이 사실인가요?',
    answer:
      '사실입니다. 우리의 변환기는 장치의 내부 JavaScript 엔진을 사용하여 100% 로컬에서 실행됩니다.',
  },
];

const howTo: AvifAPngLocaleContent['howTo'] = [
  {
    name: 'AVIF 파일 추가',
    text: '지정된 영역으로 직접 드래그하거나 버튼을 사용하여 장치 내의 폴더를 탐색할 수 있습니다.',
  },
  {
    name: '즉시 처리',
    text: 'HTML5 프로세서가 이미지를 렌더링하도록 하세요. 형식은 수 마이크로초 내에 자동으로 PNG로 전환됩니다.',
  },
  {
    name: 'PNG 파일 가져오기',
    text: '변환된 이미지를 하나씩 다운로드하거나 ZIP 버튼을 사용하여 전체 패키지를 저장하세요.',
  },
];

const bibliography: AvifAPngLocaleContent['bibliography'] = [
  {
    name: 'Alliance for Open Media: AVIF 형식',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'W3C - Portable Network Graphics (PNG) 사양',
    url: 'https://www.w3.org/TR/png/',
  },
];

const seo: AvifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'AVIF to PNG 변환기: 웹 전송에서 전문 편집까지',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF는 웹 이미지를 제공하는 데 이상적인 형식입니다. 작고 효율적이며 품질이 높습니다. 하지만 디자인 도구에서 이러한 이미지를 편집하거나 처리해야 할 때 AVIF는 장애물이 됩니다. Figma, Photoshop, Illustrator, Sketch 및 거의 모든 전문 디자인 도구는 투명도와 무손실 편집을 위해 PNG 형식을 요구합니다. AVIF를 PNG로 변환하는 것은 웹 제공과 창의적인 편집 사이를 연결하는 가교 역할을 합니다.',
  },
  {
    type: 'title',
    text: 'AVIF vs PNG: 제공 vs 편집',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF는 전송 형식으로서 뛰어납니다. 파일이 작고 로딩이 빠르며 알파 채널을 지원하고 뛰어난 시각적 품질을 갖추고 있습니다. 하지만 도구 생태계가 제한적입니다. 대부분의 디자인 소프트웨어는 AVIF를 직접 가져올 수 없어 창의적인 워크플로우를 중단시킵니다. Figma에서 AVIF를 열려 하거나 Photoshop에 레이어로 가져오려는 시도는 작동하지 않습니다.',
  },
  {
    type: 'paragraph',
    html: 'PNG는 디지털 디자인의 기본 형식입니다. 무손실 압축, 완전한 알파 채널 지원 및 모든 창의적인 도구와의 범용 호환성을 갖춘 PNG는 최고의 작업 형식입니다. 크기를 조절하거나 리터칭하거나 다른 형식으로 내보내거나 레이어 작업을 해야 할 때 PNG는 그 과정에서 어떠한 디테일이나 픽셀도 손실되지 않음을 보장합니다.',
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
        description: '처리하기 위해 AVIF 파일을 원격 서버로 업로드하는 도구입니다.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '디자인 이미지가 외부 서버로 전송됨',
          '네트워크 지연으로 인한 대기 시간 발생',
          '알파 채널의 손실 또는 변경 가능성',
          '일괄 변환을 어렵게 만드는 크기 제한',
        ],
      },
      {
        title: '우리의 로컬 아키텍처',
        description: 'Vanilla JS 기술과 Canvas API를 사용하여 브라우저에서 직접 처리합니다.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '알파 채널이 완벽한 정밀도로 보존됨',
          '데이터 전송 없는 즉각적인 변환',
          '파일, 크기 또는 일괄 처리의 제한 없음',
          '고유 사유 디자인 자산에 대한 완전한 프라이버시 보호',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '투명도와 기술적 변환의 원리',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '최신 브라우저는 통합된 AV1 엔진 덕분에 AVIF를 기본으로 디코드합니다. 파일을 불러오면 브라우저가 모든 알파 채널 정보를 유지하면서 메모리에서 이를 디코드합니다. 투명도를 포함한 디코드된 이미지는 알파 채널을 유지하기 위한 올바른 합성 모드로 HTML5 <code>Canvas</code> 요소 위에 그려집니다.',
  },
  {
    type: 'paragraph',
    html: '흰색으로 채워 투명도를 파괴하는 JPG로 내보내는 것과 달리, <code>toBlob(\'image/png\')</code>를 통한 PNG로 내보내는 것은 알파 채널을 온전히 유지합니다. 그 결과 원본 AVIF의 모든 픽셀, 모든 반투명 영역 및 모든 디테일을 보존하는 무손실 압축 PNG가 생성됩니다.',
  },
  {
    type: 'tip',
    title: '모든 디자인 도구를 위한 필수 사전 단계',
    html: 'Figma, Photoshop, Illustrator 또는 어떤 디자인 도구에 가져오기 전에 AVIF를 PNG로 변환하세요. 이러한 애플리케이션은 AVIF를 직접 읽지 않지만, PNG는 모든 도구에서 기본으로 작동하며 투명도와 품질을 완벽하게 유지합니다.',
  },
  {
    type: 'title',
    text: '사용 사례: AVIF를 PNG로 변환해야 하는 상황',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Figma, Sketch, Adobe XD 또는 기타 UI 디자인 도구로 가져오기.',
      '투명도를 유지하며 Photoshop, Affinity Photo 또는 GIMP에서 레이어로 편집하기.',
      '아이콘이나 스프라이트 생성을 위한 소스로 사용하기.',
      '표준 디자인 소프트웨어를 사용하는 클라이언트나 협업자에게 보내기.',
      '무손실 편집 형식으로 투명 이미지를 보관하기.',
    ],
  },
  {
    type: 'title',
    text: '결론: 웹과 디자인의 연결 고리',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF와 PNG는 현대적인 워크플로우에서 완벽한 파트너입니다. 웹 제공의 효율성에는 AVIF를, 디자인 도구에서의 편집과 협업에는 PNG를 사용합니다. 우리의 변환기를 이용하면 한 형식에서 다른 형식으로의 전환은 즉각적이고 프라이빗하며 모든 세부 사항을 보존합니다. 비주얼 자산이 중요할 때 바로 귀하가 필요로 하는 것입니다.',
  },
];


export const content: AvifAPngLocaleContent = {
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
