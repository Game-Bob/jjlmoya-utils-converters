import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAJpgLocaleContent } from '../index';

const slug = 'svg-to-jpg-converter';
const title = 'SVG를 JPG로 온라인에서 무료로 변환하세요';
const description =
  '브라우저에서 SVG 벡터 파일을 JPG로 변환하세요. 2배 고해상도 렌더링. 파일 업로드 없음. 무료 및 100% 개인 정보 보호.';

const ui: ImageConverterUI = {
  dragText: 'SVG 파일을 드래그하세요...',
  convertText: '즉시 JPG로 변환하려면',
  selectFiles: '파일 선택',
  processedFiles: '처리된 파일',
  downloadAll: '모두 다운로드 (.zip)',
  pending: '대기 중',
  bibliographyTitle: '참고 문헌',
  faqTitle: '자주 묻는 질문',
};

const faq: SvgAJpgLocaleContent['faq'] = [
  {
    question: '왜 SVG를 JPG로 변환해야 하나요?',
    answer:
      'JPG는 모든 유형의 기기에서 최대의 호환성을 제공합니다. SVG를 JPG로 변환하는 것은 렌더링 문제 없이 모든 사람이 디자인을 볼 수 있도록 보장하는 가장 좋은 방법입니다.',
  },
  {
    question: 'SVG 투명도는 어떻게 되나요?',
    answer:
      '투명도를 지원하지 않는 JPG로 변환할 때 벡터 구성에 불투명한 흰색 배경이 자동으로 추가됩니다.',
  },
  {
    question: '결과물인 JPG의 해상도는 어느 정도인가요?',
    answer:
      '이 도구는 Retina 화면 및 전문가용에 적합한 고해상도를 보장하기 위해 SVG를 2배(2x) 배율로 렌더링합니다.',
  },
];

const howTo: SvgAJpgLocaleContent['howTo'] = [
  {
    name: '벡터 파일 넣기',
    text: '내보내기 목록을 준비하려면 상단 영역에 SVG 파일을 드래그하여 떨어뜨리세요.',
  },
  {
    name: 'JPG로 래스터화',
    text: '이 도구는 벡터를 고해상도 픽셀로 변환하고 즉시 JPG를 생성합니다.',
  },
  {
    name: '결과 다운로드',
    text: 'JPG 파일을 개별적으로 또는 ZIP 패키지로 다운로드하세요.',
  },
];

const seo: SvgAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'SVG to JPG 변환기: 벡터를 모든 플랫폼으로 가져가세요',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>SVG</strong> 형식은 가볍고 확장 가능하며 편집이 쉬운 현대 웹의 모국어와 같습니다. 하지만 벡터를 전혀 이해하지 못하는 플랫폼들도 존재합니다. 소셜 미디어, 이메일 클라이언트, Word 문서, 인쇄 애플리케이션 및 현실 세계의 대다수 소프트웨어는 래스터화된 이미지로 작동합니다. <strong>JPG</strong>는 예외 없이 어디서나 허용되며 플러그인이나 추가 변환이 필요 없는 보편적인 형동 분모입니다.',
  },
  {
    type: 'title',
    text: 'SVG vs JPG: 벡터가 사진이 되어야 할 때',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG는 이미지를 수학적 명령어로 저장합니다. 이러한 벡터의 속성은 웹에는 완벽하지만 아날로그 세계나 레거시 소프트웨어에는 보이지 않을 수 있습니다. 이메일로 전송된 SVG 파일은 수신자의 환경에서 이해할 수 없는 XML 텍스트로 나타날 수 있습니다. Word 문서에 첨부된 SVG는 이전 버전의 Office에서 전혀 렌더링되지 않을 수도 있습니다.',
  },
  {
    type: 'paragraph',
    html: 'JPG는 각 이미지를 JPEG 알고리즘에 의해 압축된 색상 정보를 가진 픽셀 매트릭스로 변환합니다. 알파 채널을 지원하지 않기 때문에 변환기는 배경을 흰색으로 자동 병합합니다. 대신 오래된 휴대폰, 프린터, 스마트 TV, 20년 전의 편집 앱 등 <em>지구상의 모든 기기</em>에서 열 수 있는 파일을 얻게 됩니다. 이는 가장 널리 쓰이는 형식이며 많은 상황에서 가장 가치 있는 형식이기도 합니다.',
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
          '사용자의 SVG 코드(독점 디자인 데이터 포함)가 외부 서버로 전송됨',
          '글꼴 및 그라데이션 렌더링이 일관되지 않음',
          '모든 변환 시 인터넷 연결이 필요함',
          'JPG 출력 품질을 항상 구성할 수 있는 것은 아님',
        ],
      },
      {
        title: '사용자 환경 로컬 아키텍처',
        description: 'Vanilla JS 기술을 사용하여 하드웨어에서 직접 처리합니다.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '브라우저를 떠나는 데이터 0바이트',
          '브라우저의 기본 엔진을 사용한 충실한 렌더링',
          '최대의 선명도를 위한 2배 해상도 JPG',
          'JPG 표준에 따라 흰색 배경이 자동으로 적용됨',
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
    html: 'SVG 파일이 브라우저의 <strong>Image</strong> 요소에 로드되며, 이 요소는 XML을 해석하기 위해 자체 벡터 렌더링 엔진을 사용합니다. 시각적 결과물은 출력 해상도를 최적화하기 위해 2배 배율로, 미리 흰색 배경을 채운(JPG가 투명도를 지원하지 않기 때문에 필요) <strong>HTML5 Canvas</strong> 위에 그려집니다.',
  },
  {
    type: 'paragraph',
    html: '<code>toDataURL(\'image/jpeg\', 0.92)</code> 메서드는 캔버스 픽셀을 고품질 JPG 파일로 변환합니다. SVG 색상은 JPEG 압축의 색 공간 변환으로 인해 약간의 변화가 생길 수 있습니다. 따라서 색 재현이 중요한 전문적인 인쇄 작업에 사용하기 전에는 결과를 미리 확인하는 것이 좋습니다.',
  },
  {
    type: 'tip',
    title: '인쇄용 팁',
    html: 'SVG 배경과 그라데이션은 JPEG 압축 시의 색상 프로필 차이로 인해 JPG에서 약간 다르게 보일 수 있습니다. 정확한 브랜드 색상 정밀도가 중요한 인쇄소로 보내거나 인쇄용 마케팅 자료에 사용하기 전에는 항상 결과를 미리 확인하세요.',
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
      'Facebook, Twitter 또는 LinkedIn에서 SVG 로고 및 일러스트레이션 공유.',
      'Outlook 또는 Gmail을 통해 이메일에 벡터 그래픽 첨부.',
      'Word 문서, Excel 또는 프레젠테이션에 SVG 디자인 삽입.',
      'SVG를 지원하지 않는 온라인 쇼핑몰에 제품 이미지 게시.',
      '주문형 인쇄(POD) 서비스를 위한 파일 준비.',
    ],
  },
  {
    type: 'title',
    text: '결론',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '현실 세계는 여전히 픽셀로 소통합니다. 이 도구는 사용자의 독점 디자인을 브라우저 밖으로 내보내지 않고도 몇 초 안에 고해상도 렌더링을 통해 SVG 벡터를 보편적인 JPG 언어로 번역해 줍니다.',
  },
];


export const content: SvgAJpgLocaleContent = {
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
