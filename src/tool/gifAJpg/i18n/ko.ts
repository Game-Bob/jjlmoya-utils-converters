import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAJpgLocaleContent } from '../index';

const slug = 'gif-to-jpg-converter';
const title = 'GIF JPG 온라인 변환기';
const description =
  'GIF 파일에서 첫 번째 프레임을 추출하여 JPG로 변환하세요. 서버 전송 없음. 브라우저 내 로컬 처리. 무료 및 무제한 이용 가능.';

const ui: ImageConverterUI = {
  dragText: 'GIF 파일을 여기로 드래그하세요...',
  convertText: '즉시 JPG로 변환하기',
  selectFiles: '파일 선택',
  processedFiles: '처리된 파일',
  downloadAll: '모두 다운로드 (.zip)',
  pending: '대기 중': '참고 문헌',
  faqTitle: '자주 묻는 질문',
};

const faq: GifAJpgLocaleContent['faq'] = [
  {
    question: 'JPG로 변환하면 애니메이션은 어떻게 되나요?',
    answer:
      'JPG 형식은 정지 이미지 전용이며 여러 프레임을 지원하지 않습니다. 당사의 변환기는 GIF 시퀀스에서 가장 처음에 나타나는 이미지 또는 프레임 하나만을 추출합니다.',
  },
  {
    question: '특수 효과나 투명 배경이 사라지나요?',
    answer:
      '네, 이는 JPG 표준의 특성입니다. 투명 배경이 있는 GIF를 업로드하면 색상 왜곡을 방지하기 위해 자동으로 흰색 배경 레이어를 삽입하여 처리합니다.',
  },
  {
    question: '웹사이트 서버에 저장되지 않고 GIF에서 JPG를 추출할 수 있나요?',
    answer:
      '물론입니다. 이 도구는 HTML5 Canvas 기술을 기반으로 한 웹 앱입니다. 모든 디코딩 작업은 사용자의 기기 내 프로세서에 의해 직접 수행됩니다.',
  },
];

const howTo: GifAJpgLocaleContent['howTo'] = [
  {
    name: '움직이는 이미지 파일 준비',
    text: '변환하려는 GIF 파일을 폴더에서 선택하여 처리 영역으로 드래그 앤 드롭하세요.',
  },
  {
    name: '첫 프레임 무손실 추출',
    text: '순식간에 애니메이션이 추출되며 외부 서버 연결 없이 로컬에서 흰색 배경의 JPG가 생성됩니다.',
  },
  {
    name: '일괄 다운로드 및 ZIP 보관',
    text: '개별 다운로드 버튼을 누르거나 대량의 파일을 처리한 경우 ZIP 압축 파일로 한번에 받으세요.',
  },
];

const seo: GifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'GIF to JPG 변환기: 애니메이션 프레임을 고품질 정지 이미지로 추출',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'GIF 파일은 수십 년 동안 인터넷의 짧은 애니메이션 문화를 주도해 왔습니다. 하지만 애니메이션 형태는 썸네일, SNS 미리보기, 문서 삽입용 이미지로 활용하기에는 부적합한 경우가 많습니다. 특정 프레임을 고품질 정지 이미지로 추출해야 할 때 JPG 변환은 가장 실용적이고 호환성이 뛰어난 해결책입니다.',
  },
  {
    type: 'title',
    text: 'GIF 또는 JPG? 상반된 목적을 가진 두 형식',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIF(Graphics Interchange Format)는 프레임당 256색만 표현할 수 있다는 기술적 한계를 안고 1987년에 설계되었습니다. 간단한 그래픽에는 문제가 없었으나 정밀한 사진 표현에는 적합하지 않았습니다. 반면 JPG는 고도의 압축 알고리즘을 통해 수백만 가지 색상을 렌더링할 수 있습니다.',
  },
  {
    type: 'paragraph',
    html: 'GIF에서 프레임을 추출하여 JPG로 저장하는 것은 비디오 플레이어의 썸네일 생성, 콘텐츠 관리 플랫폼용 미리보기 제작, 프리젠테이션용 정지 이미지 확보 등 다양한 용도로 활용됩니다. 결과물인 JPG는 원본 GIF보다 훨씬 가볍고 모든 기기에서 완벽하게 호환됩니다.',
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
        description: '원본 파일을 타사 서버로 업로드하여 처리하는 도구입니다.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '사용자의 이미지가 인터넷망을 통해 외부 서버로 전송됨',
          '업로드 및 다운로드 시 네트워크 성능에 따른 지연 발생',
          '서비스에 따라 파일 크기 및 개수 제한이 존재함',
          '타사 서버에 데이터가 남을 수 있는 보안 리스크',
        ],
      },
      {
        title: '당사의 로컬 아키텍처',
        description: '사용자의 하드웨어 내에서 Vanilla JS 기술로 직접 즉시 처리합니다.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'GIF 파일이 사용자의 기기 밖으로 절대 나가지 않음',
          '네트워크 대기 없이 실시간 추출 속도 제공',
          '파일 용량이나 개수에 대한 인위적인 제한 없음',
          '완벽한 프라이버시 보호: 외부로 0바이트 전송',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '프레임 추출 기술의 작동 원리',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '로컬 변환은 HTML5 Canvas API의 성능을 활용합니다. GIF를 로드하면 브라우저는 이를 메모리에 네이티브 Image 데이터로 디코딩합니다. 보이지 않는 캔버스 위에서 렌더링이 이루어지며, 브라우저 엔진은 애니메이션 시퀀스의 첫 번째 프레임을 자동으로 캡처합니다.',
  },
  {
    type: 'paragraph',
    html: 'JPG 형식은 투명도를 지원하지 않으므로 내보내기 전에 흰색 배경을 적용합니다. 캔버스의 <code>toDataURL(\'image/jpeg\')</code> 메서드는 네트워크 연결 없이 사용자의 컴퓨터 RAM에서 직접 JPG 바이트 스트림을 생성하며, 결과물은 즉시 사용자의 기기에 저장됩니다.',
  },
  {
    type: 'tip',
    title: 'GIF의 제한된 색상 팔레트 안내',
    html: 'GIF는 프레임당 256색만 가질 수 있습니다. 추출된 JPG는 원본의 제한된 색상을 그대로 물려받으므로, 그라데이션이 포함된 GIF의 경우 약간의 색 끊김 현상이 보일 수 있습니다. 최상의 결과를 위해 단순한 색상의 그래픽 이미지를 사용하시기 바랍니다.',
  },
  {
    type: 'title',
    text: '추출된 JPG의 활용 사례 및 호환성',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      '비디오 플랫폼 및 CMS용 고품질 썸네일 미리보기.',
      '소셜 네트워크 게시용 커버 이미지 및 프로필 사진.',
      '워드, 파워포인트, PDF 등 문서 삽입용 이미지.',
      '발표용 파일 및 마케팅 기획안 자료 구축.',
      '윈도우, 맥, 모바일 등 모든 환경의 이미지 뷰어와 완벽 호환.',
    ],
  },
  {
    type: 'title',
    text: '결론: 애니메이션 전체보다 가치 있는 결정적 한 장면',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '2MB 용량의 GIF 애니메이션에서 약 50~200KB 수준의 가벼운 JPG 프레임을 생성할 수 있습니다. 당사의 도구는 서버에 파일을 업로드하지 않고 브라우저에서 즉시 프라이버시를 보호하며 변환을 완료합니다. 기다림 없이 지금 바로 확인해 보세요.',
  },
];


export const content: GifAJpgLocaleContent = {
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
