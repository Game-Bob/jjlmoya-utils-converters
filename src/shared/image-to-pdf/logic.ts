import type { SourceImageFormat } from './ui';

export type PageSize = 'a4' | 'letter';
export type Orientation = 'portrait' | 'landscape';

export interface PdfOptions {
  pageSize: PageSize;
  orientation: Orientation;
  marginMm: number;
}

export interface PdfPageImage {
  id: string;
  name: string;
  width: number;
  height: number;
  jpegBytes: Uint8Array;
}

interface PageDimensions {
  width: number;
  height: number;
}

interface DrawnImage extends PageDimensions {
  x: number;
  y: number;
}

const MM_TO_POINTS = 72 / 25.4;
const PAGE_DIMENSIONS: Record<PageSize, PageDimensions> = {
  a4: { width: 595.28, height: 841.89 },
  letter: { width: 612, height: 792 },
};

export function getPageDimensions(options: PdfOptions): PageDimensions {
  const dimensions = PAGE_DIMENSIONS[options.pageSize];
  const isLandscape = options.orientation === 'landscape';
  return isLandscape
    ? { width: dimensions.height, height: dimensions.width }
    : { ...dimensions };
}

export function getMarginPoints(marginMm: number): number {
  return Math.max(0, marginMm) * MM_TO_POINTS;
}

export function fitImageInPage(
  image: Pick<PdfPageImage, 'width' | 'height'>,
  options: PdfOptions,
): DrawnImage {
  const page = getPageDimensions(options);
  const margin = getMarginPoints(options.marginMm);
  const availableWidth = Math.max(1, page.width - margin * 2);
  const availableHeight = Math.max(1, page.height - margin * 2);
  const scale = Math.min(availableWidth / image.width, availableHeight / image.height);
  const width = image.width * scale;
  const height = image.height * scale;
  return {
    width,
    height,
    x: (page.width - width) / 2,
    y: (page.height - height) / 2,
  };
}

export function isSupportedFile(file: File, source: SourceImageFormat): boolean {
  const extension = file.name.split('.').pop()?.toLowerCase();
  const allowed = source === 'jpg' ? ['jpg', 'jpeg'] : [source];
  return allowed.includes(extension ?? '') || file.type === `image/${source === 'jpg' ? 'jpeg' : source}`;
}

export function getPdfFileName(source: SourceImageFormat): string {
  return `${source}-images.pdf`;
}

function textBytes(value: string): Uint8Array {
  return new TextEncoder().encode(value);
}

function concatBytes(chunks: Uint8Array[]): Uint8Array {
  const total = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const result = new Uint8Array(total);
  let offset = 0;
  chunks.forEach((chunk) => {
    result.set(chunk, offset);
    offset += chunk.length;
  });
  return result;
}

function streamObject(dictionary: string, stream: Uint8Array): Uint8Array {
  return concatBytes([textBytes(`${dictionary}\nstream\n`), stream, textBytes('\nendstream')]);
}

function makePageObjects(page: PdfPageImage, index: number, options: PdfOptions): { pageObject: Uint8Array; imageObject: Uint8Array; contentObject: Uint8Array; pageNumber: number } {
  const pageNumber = 3 + index * 3;
  const imageNumber = pageNumber + 1;
  const contentNumber = pageNumber + 2;
  const imageDictionary = `<< /Type /XObject /Subtype /Image /Width ${page.width} /Height ${page.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${page.jpegBytes.length} >>`;
  const imageObject = streamObject(imageDictionary, page.jpegBytes);
  const drawn = fitImageInPage(page, options);
  const content = textBytes(`q\n${drawn.width.toFixed(2)} 0 0 ${drawn.height.toFixed(2)} ${drawn.x.toFixed(2)} ${drawn.y.toFixed(2)} cm\n/Im${index} Do\nQ`);
  const pageBody = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${getPageDimensions(options).width} ${getPageDimensions(options).height}] /Resources << /XObject << /Im${index} ${imageNumber} 0 R >> >> /Contents ${contentNumber} 0 R >>`;
  return {
    pageObject: textBytes(pageBody),
    imageObject,
    contentObject: streamObject(`<< /Length ${content.length} >>`, content),
    pageNumber,
  };
}

function serializeObjects(objects: Map<number, Uint8Array>, maxObject: number): Uint8Array {
  const chunks: Uint8Array[] = [new Uint8Array([37, 80, 68, 70, 45, 49, 46, 52, 10, 37, 255, 255, 255, 255, 10])];
  const offsets = new Array<number>(maxObject + 1).fill(0);
  let offset = chunks[0]?.length ?? 0;
  for (let number = 1; number <= maxObject; number += 1) {
    const object = objects.get(number) ?? new Uint8Array();
    offsets[number] = offset;
    const chunk = concatBytes([textBytes(`${number} 0 obj\n`), object, textBytes('\nendobj\n')]);
    chunks.push(chunk);
    offset += chunk.length;
  }
  const xrefOffset = offset;
  const xref = [`xref\n0 ${maxObject + 1}\n0000000000 65535 f \n`];
  for (let number = 1; number <= maxObject; number += 1) {
    xref.push(`${String(offsets[number]).padStart(10, '0')} 00000 n \n`);
  }
  chunks.push(textBytes(xref.join('')));
  chunks.push(textBytes(`trailer\n<< /Size ${maxObject + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`));
  return concatBytes(chunks);
}

export function buildPdf(pages: PdfPageImage[], options: PdfOptions): Uint8Array {
  const objects = new Map<number, Uint8Array>();
  const pageNumbers: number[] = [];
  pages.forEach((page, index) => {
    const created = makePageObjects(page, index, options);
    pageNumbers.push(created.pageNumber);
    objects.set(created.pageNumber, created.pageObject);
    objects.set(created.pageNumber + 1, created.imageObject);
    objects.set(created.pageNumber + 2, created.contentObject);
  });
  objects.set(2, textBytes(`<< /Type /Pages /Kids [${pageNumbers.map((number) => `${number} 0 R`).join(' ')}] /Count ${pages.length} >>`));
  objects.set(1, textBytes('<< /Type /Catalog /Pages 2 0 R >>'));
  return serializeObjects(objects, Math.max(2, 2 + pages.length * 3));
}

async function loadBitmap(file: File): Promise<{ bitmap: ImageBitmap | HTMLImageElement; width: number; height: number }> {
  if ('createImageBitmap' in window) {
    const bitmap = await createImageBitmap(file);
    return { bitmap, width: bitmap.width, height: bitmap.height };
  }
  const url = URL.createObjectURL(file);
  const image = await new Promise<HTMLImageElement>((resolve, reject) => {
    const element = new Image();
    element.onload = () => resolve(element);
    element.onerror = () => reject(new Error('Image could not be read'));
    element.src = url;
  });
  URL.revokeObjectURL(url);
  return { bitmap: image, width: image.naturalWidth, height: image.naturalHeight };
}

async function canvasJpeg(file: File): Promise<{ bytes: Uint8Array; width: number; height: number }> {
  const loaded = await loadBitmap(file);
  const canvas = document.createElement('canvas');
  canvas.width = loaded.width;
  canvas.height = loaded.height;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Canvas is unavailable');
  context.fillStyle = '#fff';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(loaded.bitmap, 0, 0);
  const blob = await new Promise<Blob>((resolve, reject) => canvas.toBlob((value) => value ? resolve(value) : reject(new Error('JPEG export failed')), 'image/jpeg', 0.94));
  if ('close' in loaded.bitmap) loaded.bitmap.close();
  return { bytes: new Uint8Array(await blob.arrayBuffer()), width: loaded.width, height: loaded.height };
}

function readJpegSegment(bytes: Uint8Array, offset: number): { marker: number; length: number } {
  return { marker: bytes[offset + 1]!, length: (bytes[offset + 2]! << 8) + bytes[offset + 3]! };
}

function isFrameMarker(marker: number): boolean {
  return marker >= 0xc0 && marker <= 0xc3;
}

function readFrameDimensions(bytes: Uint8Array, offset: number): { width: number; height: number } {
  return { height: (bytes[offset + 5]! << 8) + bytes[offset + 6]!, width: (bytes[offset + 7]! << 8) + bytes[offset + 8]! };
}

function readJpegDimensions(bytes: Uint8Array): { width: number; height: number } {
  let offset = 2;
  while (offset + 9 < bytes.length) {
    if (bytes[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    const segment = readJpegSegment(bytes, offset);
    if (isFrameMarker(segment.marker)) return readFrameDimensions(bytes, offset);
    offset += segment.length + 2;
  }
  throw new Error('JPEG dimensions are unavailable');
}

export async function encodeImage(file: File, source: SourceImageFormat): Promise<Omit<PdfPageImage, 'id' | 'name'>> {
  if (source === 'jpg') {
    const bytes = new Uint8Array(await file.arrayBuffer());
    const dimensions = readJpegDimensions(bytes);
    return { jpegBytes: bytes, ...dimensions };
  }
  const encoded = await canvasJpeg(file);
  return { jpegBytes: encoded.bytes, width: encoded.width, height: encoded.height };
}
