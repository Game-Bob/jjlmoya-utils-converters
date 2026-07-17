import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAPngLocaleContent } from '../index';

const slug = 'svg-to-png-converter';
const title = 'SVG를 PNG로 온라인에서 무료로 변환하세요';
const description =
  '브라우저에서 SVG 벡터 파일을 PNG로 변환하세요. 2배 배율의 HD 출력. 투명도 유지. 파일 업로드 없음. 무료 및 100% 개인 정보 보호.';

const ui: ImageConverterUI = {
  dragText: 'SVG 파일을 드래그하세요...',
  convertText: '즉시 PNG로 변환하려면',
  selectFiles: '파일 선택',
  processedFiles: '처리된 파일',
  downloadAll: '모두 다운로드 (.zip)',
  pending: '대기 중',
  bibliographyTitle: '참고 문헌',
  faqTitle: '자주 묻는 질문',
};

const faq: SvgAPngLocaleContent['faq'] = [
  {
    question: '왜 SVG 파일을 PNG로 변환해야 하나요?',
    answer:
      'SVG는 벡터 기반이며 로고에 이상적이지만, 때로는 벡터를 지원하지 않는 애플리케이션에서 사용하거나 메시징 앱 또는 소셜 미디어를 통해 공유하기 위해 래스터화된 PNG 형식이 필요할 수 있습니다.',
  },
  {
    question: '출력 크기를 선택할 수 있나요?',
    answer:
      '현재 소스 SVG의 배율을 두 배로 늘려 PNG 출력이 선명하고 Retina 또는 4K 화면에 적합하도록 하고 있습니다.',
  },
  {
    question: 'SVG 투명도가 유지되나요?',
    answer:
      '예, 결과물인 PNG는 원본 SVG의 알파 채널을 보존하여 모든 투명 배경을 그대로 유지합니다.',
  },
];

const howTo: SvgAPngLocaleContent['howTo'] = [
  {
    name: 'SVG 파일 넣기',
    text: 'SVG 파일을 최상단 인터페이스 영역에 드래그하여 떨어뜨리세요.',
  },
  {
    name: 'HD PNG 생성',
    text: '수 밀리초 만에 로컬 엔진이 각 벡터를 투명 PNG 형식의 HD 픽셀 레이어로 레디할 것입니다.',
  },
  {
    name: '파일 다운로드',
    text: '생성된 PNG를 개별적으로 또는 ZIP 패키지로 저장하세요.',
  },
];

const seo: SvgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'SVG to PNG 변환기: 무한 벡터에서 보편적인 래스터로',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>SVG</strong>(Scalable Vector Graphics)는 가볍고 무한히 확장 가능하며 모든 코드 편집기로 편집할 수 있어 웹 디자인에 완벽한 선택입니다. 하지만 해당 로고나 아이콘을 모바일 앱에서 사용하거나 소셜 미디어에 공유하거나 PowerPoint 프레젠테이션에 삽입하려 할 때 벽에 부딪힙니다. 대부분의 이러한 플랫폼은 SVG를 지원하지 않기 때문입니다. <strong>PNG</strong> 형식은 래스터화되어 있고 알파 채널을 포함하며 절대적으로 모든 상황에서 호환되는 보편적인 솔루션입니다.',
  },
  {
    type: 'title',
    text: 'SVG vs PNG: 웹을 위한 벡터, 세상을 위한 래스터',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG는 이미지를 수학적 명령어로 저장합니다. 베지에 곡선, 그라데이션, 다각형 등이 그 예입니다. 이는 동일한 파일이 16px이나 16,000px에서 모두 완벽하게 보임을 의미합니다. 웹 코드, CSS 애니메이션 및 품질 저하 없이 다양한 화면 해상도에 적응해야 하는 모든 요소에 이상적인 형식입니다.',
  },
  {
    type: 'paragraph',
    html: 'PNG는 각 픽셀에 대한 색상 및 투명도 정보가 포함된 픽셀 그리드로 이미지를 저장합니다. <strong>무손실</strong>(lossless) 형식으로 품질이 완전히 보존됩니다. SVG가 PNG로 래스터화되면 해상도가 고정됩니다. 이것이 올바른 내보내기 크기를 선택하는 것이 중요한 이유입니다. 당사의 도구는 Retina 및 4K 화면에서의 선명도를 보장하기 위해 2배 배율(2x)로 렌더링합니다.',
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
          '사용자의 SVG 코드가 외부 서버로 전송됨',
          '일관되지 않은 품질의 원격 렌더링',
          '업로드 및 처리 대기 시간 발생',
          'SVG 파일 크기 제한 존재',
        ],
      },
      {
        title: '사용자 환경 로컬 아키텍처',
        description: 'Vanilla JS 기술을 사용하여 하드웨어에서 직접 처리합니다.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'SVG 데이터가 브라우저를 벗어나지 않음',
          '최대의 일치성을 위한 브라우저 네이티브 엔진 렌더링',
          '고밀도 화면을 위한 2배 해상도 PNG',
          '전체 알파 채널로 투명도 유지',
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
    html: '프로세스는 SVG 파일을 JavaScript <strong>Image</strong> 요소에 로드하는 것으로 시작합니다. 브라우저 엔진이 벡터 XML을 파싱하고 렌더링하면 결과 이미지가 원래 SVG 크기의 두 배(2배 배율)인 <strong>HTML5 Canvas</strong> 위에 그려집니다. 이를 통해 고해상도 화면에 이상적인, 각 치수당 두 배의 픽셀을 가진 PNG가 생성됩니다.',
  },
  {
    type: 'paragraph',
    html: 'JPG로의 변환과 달리 PNG로 내보낼 때는 캔버스가 전체 알파 채널을 유지합니다. 원본 SVG의 투명한 영역은 결과 PNG에서 완전히 투명한 픽셀이 되며 흰색 배경 채우기가 없습니다. 내보내기에는 무손실 압축 방식의 <code>toDataURL(\'image/png\')</code> 메서드가 사용됩니다.',
  },
  {
    type: 'tip',
    title: '래스터화 전 팁',
    html: 'PNG 내보내기 크기를 신중하게 선택하세요. SVG를 래스터화하는 것은 일방통행 프로세스입니다. 결과 PNG에서 벡터를 복구할 수 없습니다. 항상 원본 SVG를 마스터 소스로 보관하고, 필요할 수 있는 가장 높은 해상도로 PNG를 생성하세요.',
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
      'PowerPoint 또는 Google 슬라이드 프레젠테이션용 벡터 로고 내보내기.',
      'iOS, Android 또는 프로그레시브 웹 앱용 PNG 아이콘 생성.',
      'Instagram, LinkedIn 또는 기타 소셜 미디어에 SVG 디자인 공유.',
      'Word 문서나 PDF에 벡터 일러스트레이션 삽입.',
      'CMS 미리보기를 위한 SVG 그래픽의 PNG 썸네일 생성.',
    ],
  },
  {
    type: 'title',
    text: '결론',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG는 벡터의 언어이고, PNG는 디지털 세계의 나머지 부분으로 통하는 여권입니다. 이 도구는 디자인의 단 1바이트도 외부 서버로 전송하지 않고 브라우저에서 직접 투명도가 유지된 상태로 SVG를 2배 해상도로 래스터화합니다.',
  },
];


export const content: SvgAPngLocaleContent = {
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
