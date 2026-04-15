import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAJpgLocaleContent } from '../index';

const slug = 'convert-avif-to-jpg';
const title = 'AVIF를 JPG로 온라인 변환';
const description =
  '브라우저에서 AVIF 이미지를 JPG로 변환하세요. 서버를 거치지 않는 100% 개인 로컬 처리 방식입니다. 무료이며 무제한으로 사용할 수 있습니다.';

const ui: ImageConverterUI = {
  dragText: 'AVIF 파일을 끌어다 놓으세요...',
  convertText: '즉시 JPG로 변환합니다',
  selectFiles: '파일 선택',
  processedFiles: '처리된 파일',
  downloadAll: '모두 다운로드 (.zip)',
  pending: '대기 중',
  bibliographyTitle: '참고 문헌',
  faqTitle: '자주 묻는 질문',
};

const faq: AvifAJpgLocaleContent['faq'] = [
  {
    question: '왜 AVIF를 JPG로 변환해야 하나요?',
    answer:
      'AVIF 형식은 뛰어난 압축률을 제공하지만, 모든 프로그램이나 뷰어가 이를 지원하는 것은 아닙니다. JPG로 변환하면 전 세계 장치의 100%에서 이미지를 볼 수 있습니다.',
  },
  {
    question: '사용자의 AVIF 이미지는 어떻게 보호되나요?',
    answer:
      '사용자의 사진은 절대 휴대폰이나 PC 외부로 전송되지 않습니다. JPEG로의 투영 및 인코딩의 모든 프로세스는 브라우저의 Javascript 환경 내에서 실행됩니다.',
  },
  {
    question: 'AVIF에서 JPG로 변환할 때 품질이 저하되나요?',
    answer:
      '우리의 도구는 픽셀을 표준 Canvas 품질(0.9~0.95)로 처리하므로 품질 변화는 거의 느껴지지 않습니다.',
  },
];

const howTo: AvifAJpgLocaleContent['howTo'] = [
  {
    name: '파일을 끌어다 놓거나 클릭',
    text: '변환하고 싶은 모든 AVIF 사진을 지정된 처리 영역으로 옮기세요.',
  },
  {
    name: '즉시 변환',
    text: '알파 채널이 있는 경우 흰색 배경으로 대체하며, AVIF가 1초 이내에 JPG로 다시 인코딩되는 것을 확인하세요.',
  },
  {
    name: '저장 또는 ZIP 다운로드',
    text: '새로운 JPG 이미지를 개별적으로 다운로드하거나, 일괄 처리를 한 경우 "모두 다운로드"를 눌러 저장하세요.',
  },
];

const bibliography: AvifAJpgLocaleContent['bibliography'] = [
  {
    name: 'AV1 Image File Format (AVIF)',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'JPG 일반 정보',
    url: 'https://en.wikipedia.org/wiki/JPEG',
  },
];

const seo: AvifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'AVIF to JPG 변환기: 최신 이미지를 위한 범용 호환성 확보',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF(AV1 Image File Format)는 현재 사용 가능한 가장 효율적인 이미지 형식입니다. Alliance for Open Media가 개발하고 AV1 비디오 코덱을 기반으로 한 이 형식은 같은 시각적 품질에서 JPG보다 50% 향상된 압축률을 보여줍니다. 하지만 이러한 기술적 이점에는 대가가 따릅니다. AVIF는 Photoshop, Lightroom, Windows 사진 뷰어 및 대부분의 전통적인 편집 및 보기 도구에서 지원되지 않습니다. JPG로 변환함으로써 이 문제를 근본적으로 해결할 수 있습니다.',
  },
  {
    type: 'title',
    text: 'AVIF vs JPG: 효율성과 범용 호환성의 비교',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF의 압축 능력은 매우 뛰어납니다. JPG에서 4MB를 차지하는 고해상도 사진도 동일한 품질을 유지하면서 AVIF에서는 단 2MB에 불과할 수 있습니다. 이는 로딩 성능이 중요한 웹 배포에 완벽한 선택입니다. 하지만 브라우저 외부에서 AVIF는 거의 인식되지 않습니다. Windows 탐색기에서 미리보기가 되지 않으며, 카메라에서 직접 내보내지도 않고, 디자이너들도 워크플로우에 이 형식을 받아들이는 것을 꺼리는 것이 현실입니다.',
  },
  {
    type: 'paragraph',
    html: 'JPG는 30년 넘게 디지털 사진의 표준으로 자리 잡아 왔습니다. 전 세계 장치, OS, 오피스 애플리케이션, SNS, 프린터 및 모든 이미지 보기 소프트웨어의 100%에서 지원됩니다. 공유, 인쇄, 편집 또는 이메일 전송이 필요한 경우, JPG는 모든 것이 문제없이 작동할 것임을 보장하는 가장 확실한 방법입니다.',
  },
  {
    type: 'title',
    text: '비교: 클라우드 변환기 vs 우리의 로컬 아키텍처',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: '클라우드 변환기',
        description: 'AVIF 파일을 원격 서버로 업로드하여 처리하는 기존 도구입니다.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '개인적인 사진이 인터넷을 통해 외부 서버로 전송됨',
          '파일 업로드 및 다운로드를 위한 대기 시간 발생',
          '파일 크기 제한 및 무료 변환 횟수 제한',
          '제3자 서버에 이미지가 저장될 위험성',
        ],
      },
      {
        title: '우리의 로컬 아키텍처',
        description: 'Vanilla JS 기술과 Canvas API를 사용하여 브라우저에서 직접 처리합니다.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '이미지가 장치 외부로 나가지 않습니다',
          '네트워크 지연 없는 즉각적인 변환',
          '파일 수나 크기 제한 없음',
          '의료용, 법률적 또는 기밀 이미지를 다루기에 적합',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '브라우저에서의 기술적인 변환 원리',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Chrome, Firefox, Edge와 같은 최신 브라우저는 내부 AV1 디코더 덕분에 AVIF를 기본으로 지원합니다. AVIF 파일을 불러오면 브라우저가 메모리에서 이를 디코드하여 RAM 상의 비트맵 데이터로 변환합니다. 이 데이터는 보이지 않는 HTML5 <code>Canvas</code> 요소 위에 그려집니다.',
  },
  {
    type: 'paragraph',
    html: '그다음, Canvas는 표준 JPG 압축을 적용하여 <code>toBlob(\'image/jpeg\', quality)</code>를 사용해 이미지를 내보냅니다. JPG는 투명도를 지원하지 않으므로 AVIF에 포함된 알파 채널은 내보내기 전 흰색 배경으로 채워집니다. 결과적으로 단 1바이트도 외부로 유출되지 않은 채 고품질 JPG 파일로 직접 다운로드할 수 있게 됩니다.',
  },
  {
    type: 'tip',
    title: '압축과 호환성의 완벽한 균형',
    html: 'AVIF는 동일한 품질의 JPG보다 50% 작지만, JPG는 모든 소프트웨어와 100% 호환됩니다. 서버에서 AVIF 이미지를 받았는데 이를 편집하거나 이메일로 보내고 싶다면 먼저 JPG로 변환하세요.',
  },
  {
    type: 'title',
    text: '사용 사례: AVIF를 JPG로 변환해야 하는 경우',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Photoshop, Lightroom, GIMP 등 데스크톱 소프트웨어에서 편집할 때.',
      '오래된 장치나 OS를 사용하는 사람과 이미지를 공유할 때.',
      '이메일에 첨부하여 모든 메일 클라이언트에서 올바르게 보임을 보장하고 싶을 때.',
      '업로드 형식으로 AVIF를 허용하지 않는 플랫폼에 게시할 때.',
      '인쇄할 때: 전문 인쇄 서비스는 기본적으로 JPG를 사용합니다.',
    ],
  },
  {
    type: 'title',
    text: '결론: 원스텝으로 범용 호환성 확보',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF는 이미지 압축의 미래이지만, 현재는 호환성이 가장 중요합니다. 우리의 변환기는 사용자가 데이터 효율을 위해 AVIF를 사용하면서도, 필요할 땐 즉시 JPG로 변환하여 모든 상황에 완벽히 대응할 수 있게 해줍니다. 모든 것이 개인적이며 무료이며 제한이 없습니다.',
  },
];


export const content: AvifAJpgLocaleContent = {
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
