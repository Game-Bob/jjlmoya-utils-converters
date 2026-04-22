import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAPngLocaleContent } from '../index';

const slug = 'bmp-to-png-converter';
const title = 'BMP PNG 변환기';
const description =
  '품질 저하 없이 BMP 이미지를 PNG로 변환하세요. 노이즈 없는 현대적인 압축 기술. 파일 업로드 없음. 무료이며 100% 안전한 로컬 변환.';

const ui: ImageConverterUI = {
  dragText: 'BMP 파일을 여기로 드래그하세요...',
  convertText: '즉시 PNG로 변환하기',
  selectFiles: '파일 선택',
  processedFiles: '처리된 파일',
  downloadAll: '모두 다운로드 (.zip)',
  pending: '대기 중': '참고 문헌',
  faqTitle: '자주 묻는 질문',
};

const faq: BmpAPngLocaleContent['faq'] = [
  {
    question: 'BMP와 PNG의 가장 큰 차이점은 무엇인가요?',
    answer:
      'BMP와 PNG 모두 무손실 형식입니다. 차이점은 최적화에 있습니다. PNG는 현대적인 압축 알고리즘을 지원하여 BMP보다 5~10배 적은 메모리를 사용하면서도 동일한 이미지를 저장할 수 있습니다.',
  },
  {
    question: '변환 과정이 정말 안전한가요?',
    answer:
      '네. 모든 이미지 처리는 사용자의 기기 내에서 로컬로 수행됩니다. 외부 서버로 파일이 전송되지 않으므로 프라이버시가 완벽하게 보호됩니다.',
  },
  {
    question: '이 경우 JPEG 대신 PNG를 선택해야 하는 이유는 무엇인가요?',
    answer:
      'BMP 파일을 사용한다는 것은 이미지의 색상이 정밀하다는 것을 의미합니다. BMP를 손실 압축 방식인 JPEG로 변환하면 화질이 저하될 수 있지만, PNG는 원본의 충실도를 완벽하게 보존합니다.',
  },
];

const howTo: BmpAPngLocaleContent['howTo'] = [
  {
    name: '이미지 불러오기',
    text: 'BMP 원본 파일을 웹 페이지의 드롭 영역으로 안전하게 끌어다 놓으세요.',
  },
  {
    name: '네트워크 전송 없는 무손실 변환',
    text: 'HTML5 JS 기술을 통해 사용자의 브라우저에서 직접 수행되는 즉각적인 로컬 처리를 경험해 보세요.',
  },
  {
    name: '순수 PNG 파일 생성',
    text: '변환된 PNG 결과물을 개별적으로 또는 압축 파일 형태로 다운로드하세요.',
  },
];

const seo: BmpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'BMP to PNG 변환기: BMP 형식을 대체하는 완벽한 무손실 솔루션',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMP는 압축되지 않은 형식으로, PNG와 비교했을 때 기술적인 이점 없이 방대한 저장 공간을 차지합니다. 두 형식 모두 픽셀 정보를 정확하게 저장하는 무손실 방식이지만, PNG는 Deflate 알고리즘을 통한 무손실 압축을 추가하여 시각적 정보의 손실 없이 파일 크기를 3~5배 줄여줍니다. PNG는 본질적으로 BMP가 지향해야 할 현대적인 대체제입니다.',
  },
  {
    type: 'title',
    text: 'BMP vs PNG: 동일한 화질, 혁신적인 용량 차이',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMP와 PNG의 근본적인 차이는 화질이 아니라 저장 효율성에 있습니다. BMP는 픽셀 데이터를 압축이나 최적화 없이 그대로 저장하여 공간을 낭비합니다. 반면 PNG는 반복되는 픽셀 패턴을 분석하고 ZIP 파일과 동일한 원리인 Deflate 방식의 압축을 통해 컴팩트하게 인코딩합니다.',
  },
  {
    type: 'paragraph',
    html: '또한 PNG는 투명도를 지원하는 알파 채널 기능을 갖추고 있어 로고, 아이콘, 인터페이스 디자인 등에 매우 유리합니다. BMP를 PNG로 변환하면 원본 색상 값을 정확하게 유지하면서도 파일 용량을 획기적으로 줄일 수 있습니다.',
  },
  {
    type: 'title',
    text: '인프라 비교: 로컬 처리 vs 클라우드 저장',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: '클라우드 변환기',
        description: '타사 서버로 BMP 파일을 전송하여 처리하는 서비스입니다.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '사용자의 이미지가 인터넷망을 통해 외부로 전송됨',
          'BMP 파일 크기에 비례하여 업로드 성능이 저하됨',
          '무료 서비스의 경우 용량 및 횟수 제한이 존재함',
          '파일의 분석 또는 서버 저장에 따른 보안 리스크 발생 가능함',
        ],
      },
      {
        title: '당사의 로컬 아키텍처',
        description: 'Vanilla JS 기술을 통해 사용자의 하드웨어에서 직접 안전하게 처리합니다.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'BMP 처리가 로컬에서 수행되며 기기를 절대 벗어나지 않음',
          '즉각적인 밀리초 단위의 변환 속도',
          '파일 크기나 개수에 대한 인위적인 제한 없음',
          '완벽한 프라이버시 보호: 외부로 0바이트 전송됨',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'BMP to PNG 로컬 변환 기술의 원리',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '이 프로세스는 HTML5 Canvas API를 활용합니다. BMP 파일은 브라우저의 <code>FileReader</code> API를 통해 메모리에 Blob 데이터로 읽혀지며, 보이지 않는 캔버스 위에 그려집니다. 그 후 브라우저 고유의 PNG 압축 알고리즘이 적용되어 원본과 시각적으로 동일하지만 용량은 훨씬 최적화된 결과물이 생성됩니다.',
  },
  {
    type: 'paragraph',
    html: 'JPEG 변환과 달리 PNG 변환은 완전한 무손실 과정입니다. 원본 BMP의 모든 색상 값이 결과물에 정확하게 보존되며, 가장자리 뭉개짐이나 정보 손실이 전혀 없습니다. 최종 파일은 육안으로 구분이 불가능할 정도로 동일하면서 디스크 공간은 3~5배 더 절약해 줍니다.',
  },
  {
    type: 'paragraph',
    html: '산업용 장비, 제어 시스템 또는 의료 진단 소프트웨어와 같이 BMP 형식을 주로 사용하는 환경에서 PNG로 변환하는 것은 매우 현명한 선택입니다. 현대의 모든 프로그램과 호환되며 용량 부담을 줄여줍니다. 이는 가장 효율적이고 안전한 시스템 현대화 방안 중 하나입니다.',
  },
  {
    type: 'title',
    text: '변환된 PNG의 활용 사례 및 호환성',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      '원본 색상이 완벽하게 보존된 스크린샷 및 UI 그래픽 자료.',
      '기술 문서용 정밀 이미지 및 소프트웨어 다이어그램.',
      'CAD 데이터, 산업용 시스템 및 레거시 소프트웨어 파일 현대화.',
      '투명 배경 테마가 적용된 로고 및 시각적 아이덴티티 요소.',
      '포토샵, 피그마, GIMP 등 모든 최신 그래픽 편집 툴 지원.',
    ],
  },
  {
    type: 'title',
    text: '결론: PNG는 BMP의 완벽한 미래형 대체제입니다',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMP를 PNG로 변환하는 것은 이미지 파일의 가장 자연스러운 현대화 방법입니다. 동일한 화질을 유지하면서도 더 넓은 호환성, 투명도 지원, 그리고 대폭 줄어든 용량을 제공합니다. 당사의 도구는 서버 업로드 없이 브라우저에서 즉시 이 작업을 완료해 드립니다.',
  },
];


export const content: BmpAPngLocaleContent = {
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
