import type { ImagenBase64LocaleContent } from '../index';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { ImageToBase64UI } from '../index';

const slug = 'image-to-base64-converter';
const title = '이미지 Base64 변환기 온라인';
const description =
  '브라우저에서 직접 이미지를 Base64 코드 및 Data URI로 변환하세요. 파일 업로드 없음. 무료, 안전 및 즉시 처리.';

const ui: ImageToBase64UI = {
  dragTitle: '이미지를 여기에 드래그하세요',
  dragSubtext: '또는 클릭하여 파일을 찾아보세요',
  formatBadge: 'JPG, PNG, WEBP, SVG, GIF 지원',
  dataUriLabel: 'Data URI (CSS / HTML src=""용)',
  base64Label: 'Base64 단독 (순수 인코딩 텍스트)',
  copyBtn: '복사',
  dataUriPlaceholder: '이미지를 업로드하여 Data URI 코드를 확인하세요...',
  base64Placeholder: '이미지를 업로드하여 순수 Base64 코드를 확인하세요...',
  toastMessage: '코드가 클립보드에 복사되었습니다!',
  invalidImageAlert: '유효한 이미지 파일을 업로드해 주세요.',
  bibliographyTitle: '참고 문헌',
  faqTitle: '자주 묻는 질문',
};

const faq: ImagenBase64LocaleContent['faq'] = [
  {
    question: 'Base64란 무엇이며 웹 개발에서 어디에 사용되나요?',
    answer:
      'Base64는 이진 데이터를 ASCII 텍스트 문자열로 변환하는 인코딩 시스템입니다. 웹 개발에서는 Data URI를 통해 이미지를 HTML 또는 CSS 파일 내에 직접 삽입하여 서버에 대한 HTTP 요청 수를 줄이는 데 사용됩니다.',
  },
  {
    question: '여기에서 이미지를 Base64로 변환하는 것이 안전한가요?',
    answer:
      '절대적으로 안전하며 개인 정보가 보호됩니다. 본 도구는 브라우저에서 100% 로컬로 작동합니다. 이미지는 외부 서버로 업로드되거나 처리되지 않습니다.',
  },
  {
    question: 'Base64 변환기는 어떤 이미지 형식을 지원하나요?',
    answer:
      '본 도구는 JPG, PNG, GIF, WebP 및 SVG 벡터 파일과 호환됩니다. 이미지를 불러올 때 자동으로 MIME 유형을 감지하여 정확한 Data URI 코드를 생성합니다.',
  },
  {
    question: '언제 Base64 이미지를 사용하지 말아야 하나요?',
    answer:
      '큰 사진이나 고해상도 이미지에는 Base64 사용을 피해야 합니다. Base64 코드는 원본 이진 파일보다 약 33% 더 많은 용량을 차지하므로 CSS 스타일시트나 HTML 문서가 지나치게 커질 수 있습니다.',
  },
];

const howTo: ImagenBase64LocaleContent['howTo'] = [
  {
    name: '이미지 드래그 또는 선택',
    text: '이미지(JPG, PNG, WebP, SVG, GIF)를 업로드 영역으로 옮겨 변환을 시작하세요.',
  },
  {
    name: '생성된 코드 복사',
    text: '전체 Data URI(src="" 또는 CSS용)와 다른 용도로 사용할 수 있는 순수 Base64 등 두 개의 텍스트 영역이 표시됩니다.',
  },
  {
    name: '프로젝트에서 코드 사용',
    text: '외부 파일 없이 Data URI를 img 태그의 src 또는 CSS의 background-image에 직접 붙여넣으세요.',
  },
];

const bibliography: ImagenBase64LocaleContent['bibliography'] = [
  {
    name: 'MDN Web Docs: Data URIs',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs',
  },
  {
    name: 'Base64 Encoding RFC 4648',
    url: 'https://datatracker.ietf.org/doc/html/rfc4648',
  },
];

const seo: ImagenBase64LocaleContent['seo'] = [
  {
    type: 'title',
    text: '이미지 Base64 변환기: HTTP 요청 없이 이미지 삽입하기',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Base64는 이미지와 같은 이진 데이터를 순수 ASCII 텍스트 문자열로 변환하는 인코딩 기술입니다. 그 결과물은 <code>data:image/png;base64,...</code>로 시작하는 Data URI이며, 인코딩된 이미지 전체를 포함합니다. 이 코드를 HTML, CSS 또는 JSON에 직접 삽입하면 서버에 대한 추가 HTTP 요청 없이 이미지가 로드됩니다. 네트워크 지연 시간이 없으며 즉시 로딩됩니다.',
  },
  {
    type: 'title',
    text: 'Base64 이미지를 사용해야 하는 경우',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Base64의 가장 큰 장점은 네트워크 요청을 제거한다는 것입니다. 웹 페이지의 모든 이미지는 연결, DNS, TLS 핸드셰이크 및 지연 시간을 수반하는 HTTP 요청을 의미합니다. 애플리케이션의 메인 로고, 파비콘, UI 아이콘과 같이 매우 작은 필수 이미지의 경우 CSS나 HTML에 Base64로 삽입하면 해당 비용을 없애고 브라우저가 캐싱하기 전이라도 즉시 표시되도록 보장합니다.',
  },
  {
    type: 'paragraph',
    html: '이 기술은 빌드 시점에 JavaScript 및 CSS 번들이 생성되는 SPA(Single Page Application) 앱에서 특히 강력합니다. 작은 이미지를 번들에 포함하면 추가 요청 없이 코드와 함께 로드되는 것이 보장됩니다. 또한 메일 클라이언트가 외부 이미지를 차단하지만 포함된 Data URI는 거의 항상 표시하는 HTML 이메일에서도 필수적입니다.',
  },
  {
    type: 'title',
    text: 'Base64 이미지 활용 사례',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'HTML 인라인: 필수 아이콘용 <code>&lt;img src="data:image/png;base64,..."&gt;</code>.',
      'CSS 배경: UI SVG용 <code>background-image: url("data:image/svg+xml;base64,...")</code>.',
      'JSON 및 REST API: JSON 페이로드에 이미지 데이터를 텍스트로 전송.',
      'HTML 이메일: 클라이언트가 외부 URL을 차단하더라도 표시되는 삽입 이미지.',
      'SVG 내 삽입: SVG 파일 내부에 래스터 이미지를 인라인 데이터로 삽입.',
    ],
  },
  {
    type: 'title',
    text: '브라우저에서 변환이 작동하는 방식',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '이미지를 선택하거나 드래그하면 브라우저의 <code>FileReader</code> API가 디스크에서 RAM으로 이진 데이터를 직접 읽어옵니다. <code>readAsDataURL()</code> 메서드는 RFC 4648 알고리즘을 사용하여 해당 이진 바이트를 Base64 표현으로 변환합니다. 원본 데이터의 매 3바이트는 Base64 알파벳의 ASCII 문자 4개로 표현됩니다. 결과에는 자동으로 감지된 정확한 MIME 유형이 포함됩니다.',
  },
  {
    type: 'tip',
    title: '작은 이미지(10KB 미만)에만 사용하세요',
    html: 'Base64는 파일 크기를 약 33% 증가시킵니다. 10KB 이미지는 약 13.3KB의 텍스트가 됩니다. 작은 아이콘이나 로고의 경우 이 비용은 미미하며 HTTP 요청 제거로 충분히 보상됩니다. 사진이나 큰 이미지의 경우 용량 부담이 크므로 반드시 CDN을 사용하세요.',
  },
  {
    type: 'title',
    text: 'Base64를 사용하지 말아야 하는 경우',
    level: 3,
  },
  {
    type: 'tip',
    title: '큰 이미지에는 Base64를 피하고 CDN을 사용하세요',
    html: '이미지가 10-20KB보다 큰 경우 Base64는 성능을 저해합니다. HTML/CSS 크기를 부풀리고 브라우저의 독립적인 이미지 캐싱을 방해하며, 파서가 거대한 문자열을 처리하는 동안 렌더링을 차단합니다. 큰 이미지는 항상 적절한 캐시 헤더와 함께 CDN을 통해 제공하세요.',
  },
  {
    type: 'title',
    text: '호환성 및 보안',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Data URI는 모든 현대적인 브라우저 및 대부분의 이메일 클라이언트와 호환됩니다. 본 도구는 FileReader API를 통해 로컬에서 모든 것을 처리하므로 이미지가 사용자의 기기를 떠나지 않습니다. 따라서 기업용 이미지, 개인용 스크린샷 또는 Base64로 변환해야 하는 모든 기밀 시각적 콘텐츠에 적합합니다.',
  },
  {
    type: 'title',
    text: '결론: 가장 빠르고 안전한 이미지 삽입 도구',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '이미지를 Base64로 변환하는 것은 올바르게 적용될 때 매우 강력한 기술입니다. HTTP 요청 제거 효과가 큰 작고 필수적인 이미지에 사용하고, CDN이 더 유리한 큰 이미지에는 사용을 피하세요. 본 도구를 사용하면 서버 업로드 없이 즉시 Data URI를 얻을 수 있습니다.',
  },
];


export const content: ImagenBase64LocaleContent = {
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
