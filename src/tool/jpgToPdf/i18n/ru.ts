import { generateSchemas } from '../../../shared/logic/schemas';
import { bibliography } from '../bibliography';
import type { JpgToPdfLocaleContent } from '../entry';
import type { ImageToPdfUI } from '../../../shared/image-to-pdf/ui';

const slug = 'konverter-jpg-v-pdf';
const title = "Конвертер JPG в PDF";
const description = "Преобразуйте изображения JPG в упорядоченный PDF прямо в браузере. Выбирайте размер бумаги, ориентацию и поля без загрузки файлов на сервер.";

const ui: ImageToPdfUI = {
  formatLabel: 'JPG',
  dropTitle: "Создать PDF из изображений JPG",
  dropText: "Перетащите файлы JPG сюда. Выбранный порядок станет порядком страниц.",
  selectFiles: "Выбрать файлы JPG",
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
  invalidFile: "Этот инструмент принимает только файлы JPG и JPEG.",
  bibliographyTitle: "Источники",
  faqTitle: "Часто задаваемые вопросы",
};

const faq: JpgToPdfLocaleContent['faq'] = [
  {
    "question": "Можно ли объединить несколько JPG в один PDF?",
    "answer": "Да. Выберите необходимые файлы JPG, настройте порядок страниц и экспортируйте единый PDF."
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

const howTo: JpgToPdfLocaleContent['howTo'] = [
  {
    "name": "Выберите изображения JPG",
    "text": "Перетащите файлы JPG или выберите их с вашего устройства."
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

const seo: JpgToPdfLocaleContent['seo'] = [
  {
    "type": "title",
    "text": "Превратите изображения JPG в готовый к печати документ PDF",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Этот конвертер JPG в PDF помогает объединить сканы или фотографии в один аккуратный документ. Вы можете настроить порядок страниц и параметры бумаги."
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

export const content: JpgToPdfLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'ru', faq, howTo }),
};
