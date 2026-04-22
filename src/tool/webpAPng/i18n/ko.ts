import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAPngLocaleContent } from '../index';

const slug = 'webp-to-png-converter';
const title = 'WebP를 PNG로 온라인에서 무료로 변환하세요';
const description =
  '브라우저에서 WebP 이미지를 PNG로 변환하세요. 투명도를 유지합니다. 서버로 파일을 업로드하지 않습니다. 무료 및 100% 개인 정보 보호.';

const ui: ImageConverterUI = {
  dragText: 'WebP 파일을 드래그하세요...',
  convertText: '즉시 PNG로 변환하려면',
  selectFiles: '파일 선택',
  processedFiles: '처리된 파일',
  downloadAll: '모두 다운로드 (.zip)',
  pending: '대기 중': '참고 문헌',
  faqTitle: '자주 묻는 질문',
};

const faq: WebpAPngLocaleContent['faq'] = [
  {
    question: 'WebP 파일을 PNG로 변환해야 하는 이유는 무엇인가요?',
    answer:
      'WebP 파일은 더 가볍지만 구버전 Photoshop과 같은 편집 프로그램에서 호환성 문제를 일으킬 수 있습니다. PNG는 100% 보편적인 호환성을 보장합니다.',
  },
  {
    question: 'WebP에서 PNG로 변환할 때 투명도가 손실되나요?',
    answer:
      '전혀 그렇지 않습니다. JPG로의 변환과 달리 PNG는 알파 채널을 지원합니다. 당사의 유틸리티는 원본 파일의 모든 투명한 영역을 보존합니다.',
  },
  {
    question: '기밀 회사 파일을 업로드해도 되나요?',
    answer:
      '업로드해도 되고, 해야 합니다. 모든 것이 자바스크립트를 통해 로컬에서 실행되므로 회사 이미지는 기기를 절대 떠나지 않으며 외부 서버에 저장되지 않습니다.',
  },
];

const howTo: WebpAPngLocaleContent['howTo'] = [
  {
    name: 'WebP 파일 드래그',
    text: '메인 패널에 WebP 파일을 끌어다 놓거나 전통적인 방식으로 이미지를 선택하세요.',
  },
  {
    name: '고정밀 변환',
    text: '브라우저가 이미지를 픽셀 단위로 다시 그려 원본 색 영역을 유지하면서 PNG 형식의 정확한 복사본을 생성합니다.',
  },
  {
    name: '개별 또는 일괄 다운로드',
    text: '각 파일을 개별적으로 저장하거나, 배치를 처리한 경우 ZIP 버튼을 클릭하여 모든 파일을 하나로 묶어 다운로드하세요.',
  },
];

const seo: WebpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'WebP to PNG 변환기: 편집 및 디자인을 위한 전문가의 선택',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '디자이너가 <strong>WebP</strong> 형식의 그래픽 자산을 다운로드하여 Photoshop, Figma 또는 Illustrator에서 열려고 할 때, 파일 로드에 실패하거나 품질이 저하되는 좌절스러운 결과를 초래할 수 있습니다. <strong>PNG</strong> 형식은 무손실 압축, 전체 알파 채널, 전체 크리에이티브 프로덕션 체인에서의 호환성 보장 등 전문 편집 분야의 독보적인 표준입니다.',
  },
  {
    type: 'title',
    text: '웹을 위한 WebP, 스튜디오를 위한 PNG',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP는 웹 프로덕션 형식입니다. 이 형식의 압축 알고리즘은 반복적인 편집 워크플로우에서 최대 정밀도를 유지하는 것이 아니라 전송 무게를 줄이는 데 최적화되어 있습니다. 편집된 WebP를 저장할 때마다 코덱은 압축을 다시 적용합니다. 파일을 여러 번 수정해야 하는 프로젝트의 경우, 이는 누적된 품질 저하를 의미합니다.',
  },
  {
    type: 'paragraph',
    html: 'PNG는 <strong>무손실 압축</strong>을 사용합니다. 파일을 저장하는 횟수에 관계없이 모든 픽셀의 데이터가 완전히 보존됩니다. 수십 번의 수정을 거치면서 시각적 무결성을 유지해야 하는 UI/UX 디자이너, 디지털 일러스트레이터 및 브랜딩 팀이 선택하는 형식입니다. Photoshop, Figma, Sketch 및 Illustrator와 같은 도구는 PNG를 기본 내보내기 형식으로 취급합니다.',
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
          '사용자의 디자인 자산이 타사 서버에 저장됨',
          '대용량 파일의 경우 느린 원격 처리 속도',
          '기밀 고객 프로젝트의 유출 위험',
          '일괄 변환 기능 제한 또는 유료화',
        ],
      },
      {
        title: '당사의 로컬 아키텍처',
        description: '자바스크립트 기술을 사용하여 하드웨어에서 직접 처리합니다.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '사용자의 디자인이 기기를 절대 떠나지 않음',
          '수십 개의 파일을 즉시 일괄 변환',
          '알파 채널 및 색 영역의 완전한 보존',
          '고객 프로젝트를 위한 절대적인 개인 정보 보호',
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
    html: '최신 브라우저는 WebP를 네이티브 방식으로 디코딩할 수 있습니다. 당사의 도구는 이 기능을 활용하여 파일을 자바스크립트 <strong>Image</strong> 요소로 로드한 다음 원본과 동일한 치수의 HTML5 캔버스에 그립니다. JPG로의 변환과 달리 여기서는 배경 채우기가 필요하지 않으며 캔버스는 전체 알파 채널을 유지합니다.',
  },
  {
    type: 'paragraph',
    html: '최종 내보내기는 <code>toDataURL(\'image/png\')</code> 메서드를 사용하며, 이는 원본에 충실한 무손실 PNG를 생성합니다. 결과는 중간 과정, 색상 저하 또는 투명도 손실 없이 모든 전문 디자인 소프트웨어로 직접 가져올 준비가 된 파일입니다.',
  },
  {
    type: 'tip',
    title: '편집자를 위한 팁',
    html: '이미지를 계속 편집해야 할 때는 PNG를 사용하세요. 무손실 압축은 반복적인 저장으로 인한 품질 저하가 없음을 보장하며, 이는 Photoshop이나 Figma에서 레이어, 마스크 또는 색상 조정을 작업할 때 중요합니다.',
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
      'WebP 자산을 Photoshop, Figma, Sketch 또는 Illustrator로 가져오기.',
      '여러 배경에서 사용하기 위해 로고 및 아이콘의 투명도 유지.',
      '장기 프로젝트를 위한 그래픽의 마스터 사본 생성.',
      '알파 채널이 있는 PNG가 필요한 모바일 앱용 자산 내보내기.',
      '가변 배경이 있는 디자인 모형 및 프레젠테이션에 이미지 사용.',
    ],
  },
  {
    type: 'title',
    text: '결론',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP가 웹 서버 형식이라면 PNG는 디자인 스튜디오 형식입니다. 이 도구는 투명도가 유지되고 최대 품질을 갖춘 생산 준비가 된 PNG로 WebP 자산을 변환합니다. 이 모든 과정은 브라우저에서 이루어지며 파일이 기기를 절대 떠나지 않습니다.',
  },
];


export const content: WebpAPngLocaleContent = {
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
