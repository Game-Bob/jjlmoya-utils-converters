import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAJpgLocaleContent } from '../index';

const slug = 'bmp-to-jpg-converter';
const title = 'BMP를 JPG로 온라인 변환';
const description =
  '브라우저에서 BMP 이미지를 JPG로 변환하세요. 파일 크기를 획기적으로 줄일 수 있습니다. 서버 업로드 없이 로컬에서 처리되어 무료이며 100% 안전합니다.';

const ui: ImageConverterUI = {
  dragText: 'BMP 파일을 끌어다 놓으세요...',
  convertText: '즉시 JPG로 변환합니다',
  selectFiles: '파일 선택',
  processedFiles: '처리된 파일',
  downloadAll: '모두 다운로드 (.zip)',
  pending: '대기 중',
  bibliographyTitle: '참고 문헌',
  faqTitle: '자주 묻는 질문',
};

const faq: BmpAJpgLocaleContent['faq'] = [
  {
    question: '왜 BMP를 JPG로 변환해야 하나요?',
    answer:
      'BMP 형식은 데이터를 압축하지 않아 파일 크기가 매우 큽니다. JPG 형식은 웹 및 배포를 위해 우수한 시각적 품질을 유지하면서 이미지를 획기적으로 압축합니다.',
  },
  {
    question: '여기서 이미지를 변환하는 것이 안전한가요?',
    answer:
      '100% 안전합니다. 모든 처리는 사용자의 웹 브라우저 엔진을 사용하여 로컬에서 수행되므로 개인 정보가 보장됩니다.',
  },
  {
    question: '이 도구는 어떻게 작동하나요?',
    answer:
      'BMP 파일을 드래그하기만 하면 JavaScript 스크립트가 픽셀을 읽어 HTML 캔버스에 다시 그려 즉시 JPEG 인코딩으로 내보냅니다.',
  },
];

const howTo: BmpAJpgLocaleContent['howTo'] = [
  {
    name: 'BMP 파일 업로드',
    text: '지정된 영역에 BMP 형식의 이미지를 드래그 앤 드롭하거나 선택하세요.',
  },
  {
    name: '자동 처리',
    text: '도구가 이미지를 래스터화하고 수 밀리초 내에 최적의 JPG 압축 수준을 적용합니다.',
  },
  {
    name: '개별 또는 일괄 다운로드',
    text: '웹에 최적화된 새로운 이미지를 하나씩 또는 ZIP 파일로 한꺼번에 다운로드하세요.',
  },
];

const bibliography: BmpAJpgLocaleContent['bibliography'] = [
  {
    name: 'BMP File Format Specification',
    url: 'https://en.wikipedia.org/wiki/BMP_file_format',
  },
  {
    name: 'JPEG.org',
    url: 'https://jpeg.org/',
  },
];

const seo: BmpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'BMP to JPG 변환기: 거대한 파일을 몇 초 만에 압축',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMP(Bitmap)는 컴퓨터 공학에서 가장 단순한 형식입니다. 어떠한 압축도 없이 각 픽셀을 있는 그대로 저장합니다. 1920x1080 해상도의 BMP 스크린샷 크기는 약 6MB입니다. 동일한 이미지를 JPG로 변환하면 시각적으로 구분이 안 되는 품질로 약 200~400KB 정도가 됩니다. 그 차이는 어마어마하며, 당사 도구를 사용하면 서버 업로드 없이 브라우저에서 직접 몇 초 만에 변환할 수 있습니다.',
  },
  {
    type: 'title',
    text: 'BMP vs JPG: 원시 데이터와 지능형 압축의 대결',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMP 형식은 Windows 3.1 시대에 Microsoft에서 만들었습니다. 철학은 매우 단순합니다. 각 픽셀은 3바이트(빨강, 초록, 파랑)를 차지하며 픽셀은 추가 처리 없이 한 줄로 저장됩니다. 이러한 압축 부재로 인해 실제 사진이나 스크린샷의 경우 BMP 파일은 JPG보다 50~100배 더 큽니다.',
  },
  {
    type: 'paragraph',
    html: '반면 JPG는 이산 코사인 변환(DCT)을 사용하여 각 8x8 픽셀 블록을 분석하고 인간의 눈이 거의 감지하지 못하는 고주파 정보를 제거합니다. 결과적으로 시각적으로는 동일해 보이지만 원본 크기의 아주 일부분에 불과한 이미지가 생성됩니다. 스크린샷, 스캐너 또는 레거시 Windows 애플리케이션의 BMP 파일에 대해 JPG 변환은 가장 효과적인 최적화 방법입니다.',
  },
  {
    type: 'title',
    text: '아키텍처 비교: 로컬 vs 클라우드',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: '클라우드 변환기',
        description: '처리를 위해 BMP 파일을 원격 서버로 업로드하는 서비스입니다.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '연결이 느린 경우 10MB BMP를 업로드하는 데 시간이 오래 걸림',
          '사용자의 기밀 스크린샷과 이미지가 인터넷을 통해 전송됨',
          '무료 요금제에서의 빈번한 파일 크기 제한',
          '전송 지연: 변환된 파일의 업로드 및 다운로드 시간',
        ],
      },
      {
        title: '당사의 로컬 아키텍처',
        description: 'Vanilla JS 기술을 통해 사용자의 하드웨어에서 직접 처리합니다.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'BMP가 사용자의 RAM에서 처리되며 서버로 전송되지 않음',
          '기다림 없는 즉각적인 변환',
          '파일당 크기 제한 없음',
          '완벽한 프라이버시: 외부로 0바이트 전송',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '기술적인 BMP to JPG 변환 원리',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMP 파일을 도구로 드래그하면 브라우저가 <code>FileReader</code> API를 통해 파일을 읽고 메모리에서 Blob 객체로 디코드합니다. 해당 Blob은 보이지 않는 HTML5 캔버스로 렌더링됩니다. 그런 다음 <code>toDataURL(\'image/jpeg\')</code> 메서드가 캔버스 데이터에 JPEG 압축 알고리즘을 적용하여 결과 JPG 파일을 생성합니다.',
  },
  {
    type: 'paragraph',
    html: 'BMP에는 알파 채널(투명도 지원 안 함)이 없으므로 흰색 배경 합성이 필요 없는 직접적인 JPG 변환이 가능합니다. 모든 과정은 네트워크 데이터 전송 없이 사용자의 컴퓨터 RAM에서 수 밀리초 내에 완료되며, 수 메가바이트 크기의 파일도 빠르게 처리됩니다.',
  },
  {
    type: 'tip',
    title: 'Windows BMP 파일은 거대할 수 있습니다',
    html: '스크린샷(Windows의 Print Screen 키)이나 그림판 같은 레거시 앱에서 생성된 BMP 파일은 동일한 JPG보다 50~100배 더 무거울 수 있습니다. Full HD 해상도의 단일 BMP는 6MB를 초과할 수 있습니다. 이메일로 보내거나 플랫폼에 업로드하기 전에 JPG로 변환하는 것이 필수적인 작업입니다.',
  },
  {
    type: 'title',
    text: '사용 사례 및 변환된 JPG의 호환성',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      '이메일 전송을 위한 Windows 스크린샷 최적화.',
      '레거시 소프트웨어(CAD, 구형 스캐너)에서 내보낸 이미지 변환.',
      '웹 플랫폼 및 SNS 업로드를 위한 이미지 크기 줄이기.',
      'Word, PowerPoint 또는 PDF 문서 삽입용 파일 준비.',
      '모든 최신 뷰어 및 브라우저와의 범용 호환성.',
    ],
  },
  {
    type: 'title',
    text: '결론: 10MB BMP가 500KB JPG로, 동일한 화질',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMP를 JPG로 변환하는 것은 이미지 파일 관리에서 가장 보람 있는 최적화 작업 중 하나입니다. 당사 도구는 파일 업로드 및 계정 생성 없이 브라우저에서 직접 몇 초 만에 이 작업을 수행합니다. 결과물은 범용적으로 호환되는 고품질 JPG로, 원본 BMP보다 크기가 최대 97% 작습니다.',
  },
];


export const content: BmpAJpgLocaleContent = {
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
