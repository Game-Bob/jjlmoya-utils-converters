import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAIcoLocaleContent } from '../index';

const slug = 'webp-to-ico-converter';
const title = 'WebP를 ICO로 변환';
const description =
  'WebP 이미지를 투명도가 유지되는 공식 ICO 파일로 변환하세요. 파일 업로드 없음. 실제 Microsoft 바이너리 헤더 생성. 무료 및 개인 정보 보호.';

const ui: ImageConverterUI = {
  dragText: 'WebP 파일을 드래그하세요...',
  convertText: '즉시 ICO로 변환하려면',
  selectFiles: '파일 선택',
  processedFiles: '처리된 파일',
  downloadAll: '모두 다운로드 (.zip)',
  pending: '대기 중': '참고 문헌',
  faqTitle: '자주 묻는 질문',
};

const faq: WebpAIcoLocaleContent['faq'] = [
  {
    question: 'WebP 스티커 디자인을 공식 웹 파비콘(Favicon) ICO로 변환할 수 있나요?',
    answer:
      '네, 정확합니다. 파비콘은 극도의 보편적 호환성을 위해 여전히 클래식한 Microsoft ICO 확장자를 요구합니다. 이 도구는 바이너리 헤더를 주입하여 100% 합법적인 아이콘을 구축합니다.',
  },
  {
    question: '대량의 기업용 아이콘을 만들 때 온라인 대기 시간을 견뎌야 하나요?',
    answer:
      '전혀 그렇지 않습니다. 당사의 변환기는 자바스크립트를 로드하고 모든 업로드 네트워크를 차단합니다. 기기 자체의 CPU가 수백 장 이상의 사진을 비동기적으로 처리합니다.',
  },
  {
    question: '결과물인 ICO가 원본 WebP의 투명도를 지원하나요?',
    answer:
      '네. 당사의 엔진은 32비트 전체 지원이 가능한 HTML5 캔버스 API로 내부에서 작동하며, 모든 투명한 영역이 아이콘 파일로 깨끗하게 전송됩니다.',
  },
];

const howTo: WebpAIcoLocaleContent['howTo'] = [
  {
    name: '로컬의 모든 WebP 스티커를 드래그하세요',
    text: '웹 용량 제한 초과에 대한 걱정 없이 대량의 사진을 한꺼번에 이동하세요.',
  },
  {
    name: '논리적 비동기 번역 및 직접 조립',
    text: '메모리가 프레임에서 바이트 단위로 블록을 처리하는 동안 진행 표시줄과 요소들이 자동으로 채워지는 것을 확인하세요.',
  },
  {
    name: '시스템 및 웹 개발용 패키지를 챙기세요',
    text: '통합 파일의 대형 다운로드 버튼을 클릭하거나 하나만 필요한 경우 개별적으로 다운로드하세요.',
  },
];

const seo: WebpAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'WebP to ICO 변환기: 현대적인 자산으로 완벽한 파비콘 만들기',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '현대적인 웹 디자인 워크플로우는 최적화된 로고, UI 아이콘 및 브랜드 요소와 같은 자산을 <strong>WebP</strong> 형식으로 생성합니다. 하지만 사이트의 <strong>파비콘</strong>이나 Windows 데스크톱 애플리케이션용 아이콘을 설정해야 할 때 필요한 형식은 여전히 <strong>ICO</strong>입니다. WebP를 ICO로 변환하면 원본 소스를 잃지 않고 최고 품질의 자산을 재사용할 수 있습니다.',
  },
  {
    type: 'title',
    text: 'WebP vs ICO: 목적이 다른 형식',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP는 사진, 일러스트레이션 및 웹 UI 아이콘에 뛰어난 범용 이미지 형식입니다. 효율적인 압축으로 페이지 로딩 속도를 높이는 데 이상적입니다. 그러나 운영 체제와 브라우저가 애플리케이션 아이콘이나 파비콘을 인식하고 표시하는 데 필요한 특정 바이너리 구조가 부족합니다.',
  },
  {
    type: 'paragraph',
    html: 'ICO는 아이콘을 위해 특별히 설계된 Microsoft 컨테이너 형식입니다. 단일 파일에 여러 해상도를 저장할 수 있으며 32비트 알파 채널을 통해 전체 투명도를 지원합니다. 브라우저는 관례적으로 <code>favicon.ico</code> 파일을 찾으며, 이 형식은 표준 화면과 Retina 및 4K 디스플레이 모두에서 아이콘이 선명하게 보이도록 보장합니다.',
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
          '귀사의 로고 데이터가 제3자 서버로 전송됨',
          '모든 변환마다 인터넷 연결이 필수적임',
          '서버 사양에 따라 달라지는 출력 품질',
          '일일 변환 횟수에 제한이 있음',
        ],
      },
      {
        title: '당사의 로컬 아키텍처',
        description: 'Vanilla JS 기술을 사용하여 하드웨어에서 직접 처리합니다.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '로고 데이터가 브라우저를 절대 벗어나지 않음',
          'Microsoft 표준에 따른 ICO 바이너리 헤더 생성',
          '32비트 투명도가 완벽하게 보존됨',
          '전체 아이콘 세트의 일괄 변환 지원',
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
    html: '브라우저는 WebP 파일을 네이티브 방식으로 디코딩하고 원본 알파 채널을 유지하면서 32비트 색상 깊이의 <strong>HTML5 Canvas</strong>에 그립니다. 그런 다음 자바스크립트 엔진이 <code>getImageData()</code> 메서드를 통해 픽셀 데이터를 추출하고 Microsoft 표준에 명시된 ICONDIR 및 ICONDIRENTRY 헤더를 사용하여 ICO 바이너리 구조를 구축합니다.',
  },
  {
    type: 'paragraph',
    html: '그 결과는 단순한 파일 이름 변경이 아닌 적법한 ICO 파일입니다. 픽셀 데이터는 Windows, macOS 및 모든 현대적인 브라우저가 파비콘이나 애플리케이션 아이콘을 로드할 때 기대하는 올바른 구조로 패킹됩니다.',
  },
  {
    type: 'tip',
    title: '선명한 파비콘을 위한 팁',
    html: '항상 사용 가능한 최고 해상도의 원본에서 ICO를 생성하세요. 512×512 이상의 WebP는 저해상도 아이콘이 흐릿하게 보이는 Retina 및 4K 디스플레이에서도 완벽하게 선명한 파비콘을 만들어냅니다.',
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
      '모든 웹사이트 또는 웹 애플리케이션용 favicon.ico 파일 생성.',
      'Windows 소프트웨어 설치 프로그램용 애플리케이션 아이콘 생성.',
      'Electron 앱 또는 유사한 프레임워크용 데스크톱 아이콘 제작.',
      'Chrome 및 Firefox 브라우저 확장 프로그램용 아이콘 세트 제작.',
      '브랜드 WebP 로고를 기업용 애플리케이션 아이콘으로 변환.',
    ],
  },
  {
    type: 'title',
    text: '결론',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '현대적인 디자인 워크플로우는 WebP를 생산하지만, 애플리케이션 생태계는 여전히 ICO를 요구합니다. 이 도구는 브랜드 자산이 브라우저를 벗어나지 않고도 올바른 바이너리 구조와 손상되지 않은 투명도를 가진 아이콘을 생성하여 단 몇 초 만에 그 간극을 메워줍니다.',
  },
];

export const content: WebpAIcoLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({
    title,
    description,
    inLanguage: 'ko',
    faq,
    howTo,
  }),
};
