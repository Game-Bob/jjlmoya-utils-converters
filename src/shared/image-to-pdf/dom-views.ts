import { statusLabel, type PageStatus } from './evaluator';
import type { ImageToPdfUI } from './ui';

export interface PageViewModel {
  id: string;
  name: string;
  previewUrl: string;
  status: PageStatus;
  error?: string;
}

function actionButton(label: string, action: string, disabled: boolean): string {
  return `<button type="button" class="pdf-page-action" data-action="${action}" aria-label="${label}"${disabled ? ' disabled' : ''}>${label}</button>`;
}

function pageMarkup(page: PageViewModel, index: number, total: number, ui: ImageToPdfUI): string {
  const status = statusLabel(page.status, ui);
  const error = page.error ? `<span class="pdf-page-error">${page.error}</span>` : '';
  return `<li class="pdf-page" data-page-id="${page.id}"><span class="pdf-page-number">${index + 1}</span><img class="pdf-page-thumb" src="${page.previewUrl}" alt="${page.name}"><span class="pdf-page-meta"><strong>${page.name}</strong><span>${ui.page} ${index + 1} · ${status}</span>${error}</span><span class="pdf-page-actions">${actionButton(ui.moveUp, 'up', index === 0)}${actionButton(ui.moveDown, 'down', index === total - 1)}${actionButton(ui.remove, 'remove', false)}</span></li>`;
}

export function renderPages(list: HTMLOListElement, pages: PageViewModel[], ui: ImageToPdfUI): void {
  list.innerHTML = pages.length ? pages.map((page, index) => pageMarkup(page, index, pages.length, ui)).join('') : `<li class="pdf-pages-empty">${ui.emptyPages}</li>`;
}

export function renderOptions(root: HTMLElement, options: { pageSize: string; orientation: string; marginMm: number }, ui: ImageToPdfUI): void {
  root.querySelectorAll<HTMLButtonElement>('[data-page-size]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.pageSize === options.pageSize);
    button.setAttribute('aria-pressed', String(button.dataset.pageSize === options.pageSize));
  });
  root.querySelectorAll<HTMLButtonElement>('[data-orientation]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.orientation === options.orientation);
    button.setAttribute('aria-pressed', String(button.dataset.orientation === options.orientation));
  });
  const margin = root.querySelector<HTMLInputElement>('#pdf-margin');
  const marginValue = root.querySelector<HTMLElement>('#pdf-margin-value');
  if (margin) margin.value = String(options.marginMm);
  if (marginValue) marginValue.textContent = `${options.marginMm} mm`;
  const pageSize = root.querySelector<HTMLElement>('#pdf-page-size-value');
  const orientation = root.querySelector<HTMLElement>('#pdf-orientation-value');
  if (pageSize) pageSize.textContent = options.pageSize === 'a4' ? ui.a4 : ui.letter;
  if (orientation) orientation.textContent = options.orientation === 'portrait' ? ui.portrait : ui.landscape;
}

export function setWorkspace(root: HTMLElement, visible: boolean): void {
  const workspace = root.querySelector<HTMLElement>('#pdf-workspace');
  workspace?.toggleAttribute('hidden', !visible);
}

export function setStatus(root: HTMLElement, text: string, tone: string): void {
  const status = root.querySelector<HTMLElement>('#pdf-status');
  if (!status) return;
  status.textContent = text;
  status.dataset.tone = tone;
}
