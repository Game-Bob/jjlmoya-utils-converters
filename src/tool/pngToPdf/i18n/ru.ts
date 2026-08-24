import { generateSchemas } from '../../../shared/logic/schemas';
import { bibliography } from '../bibliography';
import type { PngToPdfLocaleContent } from '../entry';
import type { ImageToPdfUI } from '../../../shared/image-to-pdf/ui';

const slug = 'konverter-png-v-pdf';
const title = "Конвертер PNG в PDF";
const description = "Преобразуйте изображения PNG в упорядоченный PDF прямо в браузере. Выбирайте размер бумаги, ориентацию и поля без загрузки файлов на сервер.";

const ui: ImageToPdfUI = {
  formatLabel: 'PNG',
  dropTitle: "Создать PDF из изображений PNG",
  dropText: "Перетащите файлы PNG сюда. Выбранный порядок станет порядком страниц.",
  selectFiles: "Выбрать файлы PNG",
  privacyNote: "Все обрабатывается в браузере. Ваши изображения не загружаются на сервер.",
  optionsTitle: "Печатный лист",
  settingsTitle: "Настройки бумаги",
  pageSizeLabel: "Размер бумаги",
  a4: 'A4',
  letter: 'Letter',
  orientationLabel: "Ориентация",
  portrait: "Книжная",
  landscape: "Альбомная",
  marginLabel: "Поля",
  pagesTitle: "Страницы",
  reorderHint: "Измените порядок страниц перед экспортом.",
  page: "Страница",
  pageSingular: "страница",
  pagePlural: "страниц",
  moveUp: "Вверх",
  moveDown: "Вниз",
  remove: "Удалить",
  emptyPages: "Выбранные изображения появятся здесь.",
  createPdf: "Создать PDF",
  reset: "Сбросить",
  ready: "Готово к обработке",
  processing: "Подготовка изображения",
  error: "Не удалось прочитать изображение",
  downloadPdf: "Скачать PDF",
  building: "Создание PDF",
  pdfReady: "Ваш PDF готов",
  invalidFile: "Этот инструмент принимает только файлы PNG и JPEG.",
  bibliographyTitle: "Источники",
  faqTitle: "Часто задаваемые вопросы",
};

const faq: PngToPdfLocaleContent['faq'] = [
  {
    "question": "Можно ли объединить несколько PNG в один PDF?",
    "answer": "Да. Выберите необходимые файлы PNG, настройте порядок страниц и экспортируйте единый PDF."
  },
  {
    "question": "Загружаются ли мои изображения на сервер?",
    "answer": "Нет. Весь процесс происходит локально в вашем браузере."
  },
  {
    "question": "Можно ли выбрать формат A4 или Letter?",
    "answer": "Да. Вы можете выбрать A4 или Letter, задать ориентацию и поля."
  }
];

const howTo: PngToPdfLocaleContent['howTo'] = [
  {
    "name": "Выберите изображения PNG",
    "text": "Перетащите файлы PNG или выберите их с вашего устройства."
  },
  {
    "name": "Настройте порядок и бумагу",
    "text": "Упорядочите страницы, выберите A4 или Letter, ориентацию и поля."
  },
  {
    "name": "Создайте и скачайте PDF",
    "text": "Нажмите Создать PDF и скачайте готовый документ."
  }
];

const seo: PngToPdfLocaleContent['seo'] = [
  {
    "type": "title",
    "text": "Превратите изображения PNG в готовый к печати документ PDF",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Этот конвертер PNG в PDF помогает объединить сканы или фотографии в один аккуратный документ. Вы можете настроить порядок страниц и параметры бумаги."
  },
  {
    "type": "title",
    "text": "Создание аккуратных PDF-документов",
    "level": 3
  },
  {
    "type": "list",
    "icon": "mdi:check-circle",
    "items": [
      "Установите правильный порядок страниц перед экспортом.",
      "Выберите книжную или альбомную ориентацию в зависимости от фото.",
      "Настройте поля для идеальной печати на принтере."
    ]
  },
  {
    "type": "tip",
    "title": "Полная конфиденциальность ваших данных",
    "html": "Файлы обрабатываются локально на вашем устройстве и не передаются в сеть."
  }
];

export const content: PngToPdfLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'ru', faq, howTo }),
};
