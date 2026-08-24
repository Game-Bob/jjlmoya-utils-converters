import { canCreatePdf, type PageStatus } from './evaluator';
import { buildPdf, encodeImage, getPdfFileName, isSupportedFile, type Orientation, type PageSize, type PdfPageImage } from './logic';
import { renderOptions, renderPages, setStatus, setWorkspace, type PageViewModel } from './dom-views';
import { loadPdfOptions, savePdfOptions, type StoredPdfOptions } from './storage';
import type { ImageToPdfUI, SourceImageFormat } from './ui';

interface PageState extends PageViewModel, PdfPageImage {
  status: PageStatus;
}

interface ConverterState {
  pages: PageState[];
  options: StoredPdfOptions;
  outputUrl: string;
}

interface AddFilesParams {
  root: HTMLElement;
  state: ConverterState;
  files: File[];
  source: SourceImageFormat;
  ui: ImageToPdfUI;
}

function parseUi(root: HTMLElement): ImageToPdfUI {
  return JSON.parse(root.dataset.ui ?? '{}') as ImageToPdfUI;
}

function getSource(root: HTMLElement): SourceImageFormat {
  return (root.dataset.sourceFormat ?? 'jpg') as SourceImageFormat;
}

function resetOutput(root: HTMLElement, state: ConverterState): void {
  if (state.outputUrl) URL.revokeObjectURL(state.outputUrl);
  state.outputUrl = '';
  const download = root.querySelector<HTMLAnchorElement>('#pdf-download');
  download?.toggleAttribute('hidden', true);
}

function syncPages(root: HTMLElement, state: ConverterState, ui: ImageToPdfUI): void {
  const list = root.querySelector<HTMLOListElement>('#pdf-page-list');
  if (!list) return;
  renderPages(list, state.pages, ui);
  setWorkspace(root, state.pages.length > 0);
  const create = root.querySelector<HTMLButtonElement>('#pdf-create');
  if (create) create.disabled = !canCreatePdf(state.pages.map((page) => page.status));
}

function createPage(file: File, previewUrl: string): PageState {
  return { id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, name: file.name, previewUrl, status: 'processing', width: 0, height: 0, jpegBytes: new Uint8Array() };
}

async function processPage(page: PageState, file: File, source: SourceImageFormat): Promise<void> {
  const encoded = await encodeImage(file, source);
  page.width = encoded.width;
  page.height = encoded.height;
  page.jpegBytes = encoded.jpegBytes;
  page.status = 'ready';
}

async function addFiles({ root, state, files, source, ui }: AddFilesParams): Promise<void> {
  for (const file of files) {
    if (!isSupportedFile(file, source)) {
      setStatus(root, ui.invalidFile, 'error');
      continue;
    }
    const page = createPage(file, URL.createObjectURL(file));
    state.pages.push(page);
    syncPages(root, state, ui);
    try {
      await processPage(page, file, source);
    } catch {
      page.status = 'error';
      page.error = ui.error;
    }
    syncPages(root, state, ui);
  }
  const pageWord = state.pages.length === 1 ? ui.pageSingular : ui.pagePlural;
  setStatus(root, `${state.pages.length} ${pageWord}`, 'neutral');
}

function movePage(state: ConverterState, id: string, direction: number): void {
  const index = state.pages.findIndex((page) => page.id === id);
  const next = index + direction;
  if (index < 0 || next < 0 || next >= state.pages.length) return;
  const [page] = state.pages.splice(index, 1);
  if (page) state.pages.splice(next, 0, page);
}

function removePage(state: ConverterState, id: string): void {
  const index = state.pages.findIndex((page) => page.id === id);
  if (index < 0) return;
  const [page] = state.pages.splice(index, 1);
  if (page) URL.revokeObjectURL(page.previewUrl);
}

function updateOptions(root: HTMLElement, state: ConverterState, ui: ImageToPdfUI): void {
  renderOptions(root, state.options, ui);
  savePdfOptions(state.options);
  resetOutput(root, state);
}

function createPdf(root: HTMLElement, state: ConverterState, ui: ImageToPdfUI, source: SourceImageFormat): void {
  if (!canCreatePdf(state.pages.map((page) => page.status))) return;
  setStatus(root, ui.building, 'neutral');
  const bytes = buildPdf(state.pages, state.options);
  const pdfBuffer = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) as ArrayBuffer;
  state.outputUrl = URL.createObjectURL(new Blob([pdfBuffer], { type: 'application/pdf' }));
  const download = root.querySelector<HTMLAnchorElement>('#pdf-download');
  if (!download) return;
  download.href = state.outputUrl;
  download.download = getPdfFileName(source);
  download.textContent = ui.downloadPdf;
  download.toggleAttribute('hidden', false);
  setStatus(root, ui.pdfReady, 'ready');
}

function resetConverter(root: HTMLElement, state: ConverterState, ui: ImageToPdfUI): void {
  state.pages.forEach((page) => URL.revokeObjectURL(page.previewUrl));
  state.pages = [];
  resetOutput(root, state);
  syncPages(root, state, ui);
  setStatus(root, ui.ready, 'neutral');
}

function bindFileInput(root: HTMLElement, state: ConverterState, source: SourceImageFormat, ui: ImageToPdfUI): void {
  const input = root.querySelector<HTMLInputElement>('#pdf-file-input');
  const dropzone = root.querySelector<HTMLElement>('#pdf-dropzone');
  dropzone?.addEventListener('click', () => input?.click());
  dropzone?.addEventListener('dragover', (event) => { event.preventDefault(); dropzone.classList.add('is-dragging'); });
  dropzone?.addEventListener('dragleave', () => dropzone.classList.remove('is-dragging'));
  dropzone?.addEventListener('drop', (event) => { event.preventDefault(); dropzone.classList.remove('is-dragging'); void addFiles({ root, state, files: [...(event.dataTransfer?.files ?? [])], source, ui }); });
  input?.addEventListener('change', () => { void addFiles({ root, state, files: [...(input.files ?? [])], source, ui }); input.value = ''; });
}

function bindOptions(root: HTMLElement, state: ConverterState, ui: ImageToPdfUI): void {
  root.querySelectorAll<HTMLButtonElement>('[data-page-size]').forEach((button) => button.addEventListener('click', () => { state.options.pageSize = button.dataset.pageSize as PageSize; updateOptions(root, state, ui); }));
  root.querySelectorAll<HTMLButtonElement>('[data-orientation]').forEach((button) => button.addEventListener('click', () => { state.options.orientation = button.dataset.orientation as Orientation; updateOptions(root, state, ui); }));
  root.querySelector<HTMLInputElement>('#pdf-margin')?.addEventListener('input', (event) => { state.options.marginMm = Number((event.target as HTMLInputElement).value); updateOptions(root, state, ui); });
}

function handlePageAction(root: HTMLElement, state: ConverterState, ui: ImageToPdfUI, event: Event): void {
  const target = event.target as HTMLElement;
  const item = target.closest<HTMLElement>('[data-page-id]');
  if (!item) return;
  const pageId = item.dataset.pageId ?? '';
  switch (target.dataset.action) {
    case 'up': movePage(state, pageId, -1); break;
    case 'down': movePage(state, pageId, 1); break;
    case 'remove': removePage(state, pageId); break;
    default: return;
  }
  syncPages(root, state, ui);
  resetOutput(root, state);
}

function bindPageActions(root: HTMLElement, state: ConverterState, ui: ImageToPdfUI): void {
  const list = root.querySelector('#pdf-page-list');
  if (!list) return;
  list.addEventListener('click', (event) => handlePageAction(root, state, ui, event));
}

export function mountImageToPdf(root: HTMLElement): void {
  const ui = parseUi(root);
  const source = getSource(root);
  const state: ConverterState = { pages: [], options: loadPdfOptions(), outputUrl: '' };
  renderOptions(root, state.options, ui);
  bindFileInput(root, state, source, ui);
  bindOptions(root, state, ui);
  bindPageActions(root, state, ui);
  root.querySelector('#pdf-create')?.addEventListener('click', () => createPdf(root, state, ui, source));
  root.querySelector('#pdf-reset')?.addEventListener('click', () => resetConverter(root, state, ui));
}
