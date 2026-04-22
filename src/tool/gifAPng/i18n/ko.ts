import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAPngLocaleContent } from '../index';

const slug = 'gif-to-png-converter';
const title = 'GIF PNG 온라인 변환기';
const description =
  'GIF 파일에서 첫 번째 프레임을 추출하고 투명도를 유지하여 PNG로 변환하세요. 서버 필요 없음. 로컬 처리. 무료 이용 가능.';

const ui: ImageConverterUI = {
  dragText: 'GIF 파일을 여기로 드래그하세요...',
  convertText: '즉시 PNG로 변환하기',
  selectFiles: '파일 선택',
  processedFiles: '처리된 파일',
  downloadAll: '모두 다운로드 (.zip)',
  pending: '대기 중': '참고 문헌',
  faqTitle: '자주 묻는 질문',
};

const faq: GifAPngLocaleContent['faq'] = [
  {
    question: '왜 GIF와 같은 애니메이션 형식을 PNG와 같은 정지 형식으로 변환하나요?',
    answer:
      '많은 SNS나 아바타 서비스는 움직이는 이미지를 지원하지 않을 수 있습니다. 복잡한 GIF에서 첫 프레임을 고품질 PNG로 추출하면 이러한 제한을 해결하고 불필요한 파일 용량을 줄일 수 있습니다.',
  },
  {
    question: '기존 GIF의 투명도가 변환된 PNG에서도 유지되나요?',
    answer:
      '네, JPG와 달리 PNG 형식은 알파 채널을 유지합니다. 원본 GIF에 투명 배경이 있었다면 PNG에서도 경계선을 선명하게 유지하며 투명도가 보존됩니다.',
  },
  {
    question: '처리 후 내 이미지가 서버에 잠시 동안 보관되나요?',
    answer:
      '어떤 서버도 사용자의 GIF를 보관하지 않습니다. Web Canvas API 덕분에 모든 추출 과정은 로컬에서 이루어집니다. 외부 네트워크 연결 없이 사용자의 PC 프로세서가 안전하게 파일을 디코딩합니다.',
  },
];

const howTo: GifAPngLocaleContent['howTo'] = [
  {
    name: '애니메이션 파일 준비',
    text: '변환하려는 용량이 큰 GIF 파일들을 입력 영역으로 드래그 앤 드롭하세요.',
  },
  {
    name: '완벽한 프레임 추출',
    text: '시스템이 이미지의 정확한 시작점을 포착하여 수 밀리초 내에 무결점 복사본을 만들어 냅니다.',
  },
  {
    name: '정지 이미지 저장',
    text: '정지된 PNG 형식으로 변환된 GIF 아바타들을 ZIP 파일로 묶어서 대량 저장하세요.',
  },
];

const seo: GifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'GIF to PNG 변환기: GIF의 색상과 투명도 한계를 넘어서는 품질',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'GIF는 모니터가 겨우 256색만 표현할 수 있던 시절에 설계되었습니다. 수십 년이 지난 지금도 이러한 한계는 큰 약점으로 남아 있습니다. PNG는 바로 이러한 품질과 투명도가 중요한 모든 경우(로고, 아이콘, 인터페이스 그래픽, 어떤 배경색 위에서도 완벽하게 보여야 하는 투명 배경 이미지 등)에서 GIF를 대체하기 위해 탄생했습니다.',
  },
  {
    type: 'title',
    text: 'GIF vs PNG: 1,600만 색상의 혁명',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIF와 PNG의 가장 결정적인 차이점은 색상 수만이 아닙니다. GIF는 이진 투명도(불투명하거나 완전히 투명함)만을 지원하여 그라데이션 처리가 불가능합니다. 반면 PNG는 픽셀당 256단계의 불투명도를 부여하는 전체 알파 채널을 지원합니다. 이는 PNG 로고의 경계선이 완벽하게 부드럽게 보정될 수 있음을 의미하며, GIF 로고는 유색 배경 위에서 특유의 계단 현상이 나타납니다.',
  },
  {
    type: 'paragraph',
    html: '우수한 투명도 외에도 PNG는 GIF의 256색 제한을 없앴습니다. 스크린샷, 그래데이션이 있는 일러스트레이션, 그림자가 있는 로고 등 모든 이미지가 PNG에서 훨씬 더 선명하게 보입니다. 또한 무손실 압축이므로 JPG 변환 시 발생하는 노이즈 없이 각 픽셀이 원본 값을 정확하게 유지합니다.',
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
        description: '사용자의 이미지를 타사 서버에서 처리하는 도구입니다.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '로고와 아이콘 데이터가 인터넷을 통해 전송됨',
          '네트워크 대역폭에 따른 대기 시간 발생',
          '용량 및 파일 개수 제한이 따름',
          '이미지가 타사의 캐시 메모리에 남을 수 있는 리스크',
        ],
      },
      {
        title: '당사의 로컬 아키텍처',
        description: '사용자의 기기에서 직접 Vanilla JS 기술로 즉시 처리합니다.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'GIF 파일이 사용자의 기기 밖으로 절대 나가지 않음',
          '네트워크 없이 실시간으로 즉시 변환 완료',
          '파일 개수나 파일 용량에 대한 인위적인 제한 없음',
          '철저한 프라이버시 보호: 외부로 0바이트 전송',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '로컬 환경의 GIF to PNG 변환 원리',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '이 변환은 브라우저의 Canvas API를 활용합니다. GIF는 메모리 내에서 네이티브 Image 요소로 디코딩됩니다. HTML5 캔버스 위에서 렌더링이 이루어지며, 브라우저 엔진은 원본의 투명도 정보를 그대로 유지하면서 첫 번째 프레임을 캡처합니다.',
  },
  {
    type: 'paragraph',
    html: 'JPG 변환과 달리 PNG는 흰색 배경을 추가할 필요가 없습니다. 원본 GIF의 알파 채널이 내보낸 PNG 파일에 그대로 보존됩니다. 캔버스의 <code>toDataURL(\'image/png\')</code> 메서드는 네트워크 전송 없이 사용자의 컴퓨터 RAM에서 직접 PNG 바이트 스트림을 생성하며, 파일은 즉시 다운로드됩니다.',
  },
  {
    type: 'tip',
    title: 'GIF의 이진 투명도 vs PNG의 알파 채널 비교',
    html: 'GIF는 불투명하거나 투명한 두 가지 상태만 지원합니다. PNG로 변환하면 GIF의 반투명한 픽셀들이 브라우저가 해석한 그대로 유지됩니다. 만약 원본 GIF에 계단 현상이 있었다면 PNG에서도 그대로 나타나지만, PNG에서는 이미지 편집기를 통해 부드러운 가장자리 처리가 가능해집니다. 이는 원본 GIF에서는 할 수 없는 작업입니다.',
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
      '어떠한 배경색 위에서도 자연스럽게 어울리는 로고 및 아이콘.',
      '디스코드, 텔레그램, 슬랙 및 게이밍 플랫폼용 아바타 이미지.',
      '웹 및 모바일 앱용 고해상도 인터페이스 그래픽.',
      '투명 배경을 가진 개인화된 스티커 및 이모지.',
      '기술 문서 제작을 위한 스크린샷 및 UI 요소.',
    ],
  },
  {
    type: 'title',
    text: '결론: PNG는 GIF가 항상 꿈꿔왔던 모습입니다',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIF에서 PNG로 변환하는 것은 단순한 확장자 변경이 아닙니다. 이미지를 GIF가 결코 도달할 수 없었던 현대적인 표준으로 업데이트하는 과정입니다. 더 많은 색상, 더 뛰어난 투명도, 더 가벼운 용량을 경험해 보세요. 당사의 도구는 외부로 데이터를 전송하지 않고 브라우저에서 수 밀리초 만에 이 과정을 완료합니다.',
  },
];


export const content: GifAPngLocaleContent = {
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
