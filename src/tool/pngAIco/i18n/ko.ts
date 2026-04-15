import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAIcoLocaleContent } from '../index';

const slug = 'png-to-ico-converter';
const title = 'PNG를 ICO로 온라인에서 변환하세요';
const description =
  '실제 바이너리 헤더를 사용하여 PNG를 ICO로 변환하세요. 투명도가 유지됩니다. 파일 업로드 없음. 무료이며 100% 개인 정보가 보호됩니다.';

const ui: ImageConverterUI = {
  dragText: 'PNG 파일을 드래그하세요...',
  convertText: '즉시 ICO로 변환하려면',
  selectFiles: '파일 선택',
  processedFiles: '처리된 파일',
  downloadAll: '모두 다운로드 (.zip)',
  pending: '대기 중',
  bibliographyTitle: '참고 문헌',
  faqTitle: '자주 묻는 질문',
};

const faq: PngAIcoLocaleContent['faq'] = [
  {
    question: '이 변환기는 단순히 PNG 파일의 확장자만 바꾼 것인가요, 아니면 진짜 ICO를 생성하나요?',
    answer:
      '진짜 ICO를 만듭니다. 사용자의 PNG에서 데이터를 추출하고, 표준화된 Microsoft 16진수 헤더(22바이트의 헤더 + 디렉토리)를 생성하며, 로컬에서 이상적인 정사각형 형식으로 크기를 조정하고 네이티브 파일로 검증된 최종 파일을 조립합니다.',
  },
  {
    question: '로고를 아이콘으로 만들 때 투명도가 유지되나요?',
    answer:
      '당연히 그렇습니다. 당사의 엔진은 사용자의 PNG를 32비트로 읽어 고정하면서 모든 투명한 영역을 정밀하게 유지하므로, 브라우저의 주소 표시줄(파비콘)에서 깔끔하게 돋보입니다.',
  },
  {
    question: '회사 로고가 웹 서버에 저장되나요?',
    answer:
      '본 서비스는 외부 네트워크 접촉이 전혀 없음을 보장합니다. 변환기는 사용자의 내부 HTML5 Canvas 내에서 작동하며, 아이콘 제작은 순수하게 비밀이 보장되는 로컬 메모리 내에서 100% 이루어집니다.',
  },
];

const howTo: PngAIcoLocaleContent['howTo'] = [
  {
    name: '파일을 드래그하여 전송',
    text: '사진 매트릭스(정사각형 512x512 PNG가 이상적임)를 대화형 로컬 프레임에 배치하세요.',
  },
  {
    name: '자동 바이트코드 컴파일',
    text: '정제된 ICO 16진수 헤더의 로컬 매트릭스를 로드하고 제작하는 동안 내부적으로 진행 바가 움직이는 것을 볼 수 있습니다.',
  },
  {
    name: '모아서 ZIP으로 다운로드',
    text: '웹사이트용 대량 컴파일(전체 ZIP 버튼)을 클릭하여 다운로드하거나 Windows 실행 파일용 썸네일을 다운로드하세요.',
  },
];

const bibliography: PngAIcoLocaleContent['bibliography'] = [
  {
    name: 'Microsoft ICO 형식 기술 구조',
    url: 'https://en.wikipedia.org/wiki/ICO_(file_format)',
  },
  {
    name: '파비콘 표준 - W3C',
    url: 'https://www.w3.org/2005/10/howto-favicon',
  },
];

const seo: PngAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG to ICO 변환기: 완벽한 투명도를 갖춘 파비콘을 위한 최고의 선택',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>투명도가 포함된 PNG</strong>는 전문가 수준의 ICO 아이콘을 만들기 위한 이상적인 소스 재료입니다. 알파 채널이 없는 JPG나 손실 압축 형식과 달리, PNG는 ICO 형식이 필요로 하는 것(선명한 픽셀, 깔끔한 가장자리, 아이콘이 어떤 배경에서든 완벽하게 어우러지게 하는 32비트 알파 채널)을 정확하게 제공합니다. 이는 Safari의 흰색 즐겨찾기 바, Firefox의 어두운 바 또는 Windows 11 데스크톱 등 어디에나 해당됩니다.',
  },
  {
    type: 'title',
    text: 'PNG 또는 ICO? 각 형식을 사용해야 하는 경우',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong>는 작업용 형식입니다. 로고를 디자인하고, Figma나 Illustrator에서 내보내고, 편집 가능한 버전을 저장하는 용도입니다. 투명도, 픽셀 정밀도 및 무손실 압축 덕분에 디자인 프로세스에서 독보적입니다. 하지만 브라우저, 운영 체제 und Windows 애플리케이션은 PNG를 직접 수용하지 않으며 ICO를 필요로 합니다.',
  },
  {
    type: 'paragraph',
    html: '<strong>ICO</strong>는 Microsoft 환경과 웹에서 아이콘을 배포하기 위한 형식입니다. 단일 파일에 여러 해상도를 담을 수 있는 특정 바이너리 구조를 포함합니다. 브라우저는 ICO 내부 디렉토리를 읽고 브라우저 탭용 <strong>16×16</strong>, 바로가기용 <strong>32×32</strong>, 파일 탐색기용 <strong>48×48</strong> und Retina 및 4K 화면용 <strong>256×256</strong>을 자동으로 선택합니다. 투명 PNG에서 시작하면 흰색 테두리 없이 모든 해상도에서 완벽한 가장자리를 보장합니다.',
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
          '업로드 und 다운로드 시 네트워크 지연 발생',
          '기업 로고가 타사 서버에 저장됨',
          '파일 크기 제한 und 일일 변환 횟수 제한',
          '강제적인 광고 und 타사 추적 프로그램 포함',
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
    html: 'PNG 파일이 32비트 알파 채널이 완벽하게 지원되는 메모리상 <strong>HTML5 Canvas</strong>에 디코딩됩니다. 엔진은 올바른 매직 넘버(<code>00 00 01 00</code>)를 포함한 표준 Microsoft ICO 헤더, 크기 und 데이터 오프셋이 포함된 이미지 디렉토리, 그리고 투명도 정보가 유지된 픽셀 데이터를 구축합니다. 결과물은 Windows, macOS und 모든 브라우저에서 기본적으로 인식되는 실제 바이너리 .ico 파일입니다.',
  },
  {
    type: 'paragraph',
    html: 'PNG의 투명도는 생성된 ICO에서 완벽하게 유지됩니다. 투명 픽셀은 투명하게 유지되고, 반투명 픽셀은 정확한 알파 값을 유지하며, 불투명 픽셀은 원래 색상을 유지합니다. 이는 다양한 배경 위의 로고에 매우 중요합니다. 파비콘은 라이트 모드, 다크 모드 und 브라우저 인터페이스 색상의 어떤 조합에서도 올바르게 표시됩니다.',
  },
  {
    type: 'tip',
    title: '팁: 512×512 PNG를 소스로 사용하세요',
    html: '최상의 결과를 얻으려면 <strong>정사각형 512×512 PNG</strong>를 소스 이미지로 사용하세요. 이 정도 해상도는 변환기가 16×16 파비콘부터 고밀도 화면용 256×256까지 모든 표준 ICO 크기를 픽셀 깨짐이나 가장자리 디테일 손실 없이 선명하게 생성할 수 있는 충분한 정보를 제공합니다. 소스 PNG가 클수록 작은 크기의 아이콘도 더 좋게 보입니다.',
  },
  {
    type: 'title',
    text: '활용 사례 und 호환성',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      '웹사이트용 투명 파비콘: Chrome, Firefox, Safari, Edge, e Internet Explorer에서 작동합니다.',
      'PWA 애플리케이션 아이콘: manifest.json은 데스크톱 설치를 위해 ICO를 참조합니다.',
      '흰색 배경 없이 기업 로고를 사용한 Windows 10/11 폴더 사용자 정의.',
      '데스크톱 애플리케이션, 설치 프로그램 und 실행 파일을 위한 바로가기 아이콘.',
      'Chrome und Firefox 확장 프로그램을 위한 브라우저 확장 프로그램 아이콘.',
    ],
  },
  {
    type: 'title',
    text: '결론',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '투명 PNG는 의심할 여지 없이 전문가 수준의 품질을 갖춘 ICO 아이콘을 만들기 위한 최고의 시작점입니다. 본 도구를 사용하면 변환이 즉시 이루어지고, 알파 채널이 완벽하게 보존되며, 결과물은 올바른 바이너리 구조를 갖춘 실제 ICO 파일이 됩니다. 로고를 서버에 업로드할 필요가 없고, 워터마크나 제한이 없으며, 모든 크기에서 완벽한 투명도를 누릴 수 있습니다.',
  },
];

export const content: PngAIcoLocaleContent = {
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
