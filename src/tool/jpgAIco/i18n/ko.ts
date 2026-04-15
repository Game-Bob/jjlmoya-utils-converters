import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAIcoLocaleContent } from '../index';

const slug = 'jpg-to-ico-converter';
const title = 'JPG를 ICO로 변환기';
const description =
  '실제 Microsoft 바이너리 헤더를 사용하여 JPG 사진을 ICO로 변환하세요. 자동 정사각형 자르기. 파일 업로드 없음. 무료 및 개인 정보 보호.';

const ui: ImageConverterUI = {
  dragText: 'JPG 파일을 드래그하세요...',
  convertText: '즉시 ICO로 변환하려면',
  selectFiles: '파일 선택',
  processedFiles: '처리된 파일',
  downloadAll: '모두 다운로드 (.zip)',
  pending: '대기 중',
  bibliographyTitle: '참고 문헌',
  faqTitle: '자주 묻는 질문',
};

const faq: JpgAIcoLocaleContent['faq'] = [
  {
    question: '결과물인 ICO 파일이 Windows 폴더 사용자 정의에 기본적으로 호환되나요?',
    answer:
      '네, 이미지 매트릭스의 낮은 레벨에 표준화된 바이너리 헤더를 삽입하여 100% 실제 Microsoft 아이콘 형식 파일을 생성합니다.',
  },
  {
    question: '원본 JPG가 가로로 긴 파노라마 사진인 경우 비율은 어떻게 되나요?',
    answer:
      '엄격한 글로벌 ICO 표준은 완벽한 정사각형 이미지를 절대적으로 요구합니다. 당사의 HTML5 JS 엔진은 사진을 중앙에 맞추고 나머지 부분을 잘라내어 균형 잡힌 결과를 보장합니다.',
  },
  {
    question: '기업용 로고나 개인적인 JPG 사진을 변환기에 업로드하는 것이 위험한가요?',
    answer:
      'JavaScript의 Canvas 엔진은 사용자의 브라우저 내에서 작동합니다. 수백 장의 사진을 ICO로 변환해도 보안이 의심되는 국가의 클라우드로 단 1MB도 전송되지 않습니다.',
  },
];

const howTo: JpgAIcoLocaleContent['howTo'] = [
  {
    name: '원본 JPG 사진 수집',
    text: '일반 사진을 찾아 모아서 당사의 편리한 사각형 영역에 드래그하여 입력하세요.',
  },
  {
    name: '바이너리 정제 과정 확인',
    text: '비동기식 재인코딩을 통해 메타데이터와 헤더를 네이티브하고 빠르게 삽입하여 메모리상에서 엄격하고 순수한 아이콘을 생성합니다.',
  },
  {
    name: '멀티 ZIP 디자인 컴파일',
    text: '단 몇 초 만에 모든 결과물을 압축 패키지로 대량 다운로드하여 작업을 완료하세요.',
  },
];

const bibliography: JpgAIcoLocaleContent['bibliography'] = [
  {
    name: 'ICO 도상학적 구조 및 시스템 사용법',
    url: 'https://en.wikipedia.org/wiki/ICO_(file_format)',
  },
  {
    name: 'JPEG.org 표준',
    url: 'https://jpeg.org/',
  },
];

const seo: JpgAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'JPG to ICO 변환기: 사진으로 파비콘 및 Windows 아이콘 만들기',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>ICO</strong> 형식은 Windows 애플리케이션 아이콘 및 웹사이트 파비콘을 위한 Microsoft의 표준입니다. JPG 파일의 확장자만 .ico로 바꾸는 것과 달리, 실제 ICO 파일은 22바이트 헤더와 임베디드 이미지 디렉토리가 포함된 특정 바이너리 구조를 필요로 합니다. <strong>JPG</strong>는 이러한 아이콘(회사 로고, 프로필 사진 또는 애플리케이션이나 웹사이트의 시각적 상징으로 만들고 싶은 이미지)을 만드는 데 가장 일반적으로 사용되는 시작점입니다.',
  },
  {
    type: 'title',
    text: 'JPG 또는 ICO? 각 형식을 사용해야 하는 경우',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong>는 소스 형식이지 아이콘용 최종 형식이 아닙니다. 사진이나 배너에는 완벽하지만, Windows 탐색기, 브라우저의 즐겨찾기 바, 데스크톱 바로가기 또는 PWA 애플리케이션 매니페스트와 같이 아이콘을 요구하는 시스템과는 호환되지 않습니다. 아이콘을 찾는 운영 체제나 브라우저는 ICO 형식을 기대하며, 이를 찾지 못하면 일반적인 아이콘이나 깨진 사각형을 표시합니다.',
  },
  {
    type: 'paragraph',
    html: '<strong>ICO</strong> 형식은 단일 파일에 여러 해상도를 포함하도록 설계되었습니다. 즐겨찾기 바용 <strong>16×16</strong>, 바로가기용 <strong>32×32</strong>, 파일 탐색기용 <strong>48×48</strong>, 고밀도 디스플레이용 <strong>256×256</strong> 등이 있습니다. 브라우저와 운영 체제는 표시되는 맥락에 따라 적절한 해상도를 자동으로 선택하므로 사용자가 별도로 관리할 필요가 없습니다.',
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
          '기업 로고가 타사 서버에 저장됨',
          '파일 크기 제한 및 일일 변환 횟수 제한',
          '강제적인 광고 및 타사 추적기 포함',
        ],
      },
      {
        title: '로컬 아키텍처',
        description: 'Vanilla JS 기술을 사용하여 사용자의 하드웨어에서 직접 처리합니다.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '네트워크 지연 없는 즉각적인 속도',
          '완벽한 개인 정보 보호 — 외부로 전송되는 데이터 0바이트',
          '용량 제한이나 파일 개수 제한 없음',
          '광고나 추적 없는 깨끗한 인터페이스',
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
    html: 'JPG 파일이 디코딩되어 메모리상의 <strong>HTML5 Canvas</strong>에 그려집니다. ICO 형식은 정사각형 이미지를 필요로 하므로, 엔진이 자동으로 JPG가 직사각형인지 감지하여 가장 중요한 부분을 중심으로 잘라냅니다. 그런 다음 올바른 매직 넘버(<code>00 00 01 00</code>), 이미지 디렉토리 및 인코딩된 픽셀 데이터와 함께 표준 Microsoft ICO 헤더를 생성합니다. 결과물은 확장자만 바꾼 PNG가 아닌 실제 바이너리 .ico 파일입니다.',
  },
  {
    type: 'paragraph',
    html: 'JPG에는 알파 채널이 없으므로 생성된 ICO에도 투명도가 없습니다. 원본 사진에서 상속된 단색 배경을 갖게 됩니다. 투명 배경의 파비콘(예: 다크 모드 또는 라이트 모드 즐겨찾기 바에 맞추기 위해)이 필요한 경우, 권장되는 작업 순서는 에디터에서 배경을 제거하고 PNG로 저장한 다음 PNG to ICO 변환기를 사용하는 것입니다.',
  },
  {
    type: 'tip',
    title: '팁: 하나의 ICO 파일에 여러 해상도 포함',
    html: 'ICO 파일은 <strong>여러 해상도</strong>를 하나의 파일에 담을 수 있으며, 브라우저나 OS가 문맥에 가장 적합한 것을 자동으로 선택합니다. 최상의 결과를 얻으려면 원본으로 최소 <strong>256×256 픽셀</strong> 이상의 정사각형 JPG를 사용하세요. 그래야 변환기가 픽셀 깨짐 없이 선명한 16×16, 32×32, 48×48 사이즈를 생성할 수 있는 충분한 정보를 얻을 수 있습니다.',
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
      '웹사이트 파비콘: Internet Explorer를 포함한 모든 브라우저와 호환됩니다.',
      'Windows 10/11의 폴더 및 데스크톱 아이콘 사용자 정의.',
      '데스크톱 애플리케이션 또는 설치 프로그램을 위한 바로가기 아이콘.',
      'Electron 프로젝트 또는 PWA 애플리케이션용 앱 아이콘.',
      '파일 관리 시스템 및 기업용 탐색기용 아이콘.',
    ],
  },
  {
    type: 'title',
    text: '결론',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'JPG를 ICO로 변환하는 것은 시각적 정체성이 필요한 모든 웹 또는 데스크톱 프로젝트에서 기술적으로 필수적인 단계입니다. 본 도구는 로고를 외부 서버에 업로드하지 않고도 몇 초 만에 올바른 바이너리 구조를 갖춘 실제 ICO를 생성합니다. 결과물은 모든 브라우저, Windows 탐색기 및 Microsoft의 ICO 표준을 사용하는 모든 시스템에서 작동합니다.',
  },
];

export const content: JpgAIcoLocaleContent = {
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
