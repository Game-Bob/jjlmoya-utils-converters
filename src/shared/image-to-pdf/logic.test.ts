import { describe, expect, it } from 'vitest';
import { buildPdf, fitImageInPage, getMarginPoints, getPageDimensions } from './logic';

const image = { id: 'one', name: 'one.jpg', width: 1200, height: 800, jpegBytes: new Uint8Array([255, 216, 255, 217]) };

describe('image to PDF logic', () => {
  it('calculates paper dimensions and margins', () => {
    expect(getPageDimensions({ pageSize: 'a4', orientation: 'portrait', marginMm: 12 })).toEqual({ width: 595.28, height: 841.89 });
    expect(getPageDimensions({ pageSize: 'letter', orientation: 'landscape', marginMm: 12 })).toEqual({ width: 792, height: 612 });
    expect(getMarginPoints(25.4)).toBe(72);
  });

  it('fits an image inside the printable area', () => {
    const fitted = fitImageInPage(image, { pageSize: 'a4', orientation: 'portrait', marginMm: 12 });
    expect(fitted.width).toBeLessThan(595.28);
    expect(fitted.height).toBeLessThan(841.89);
    expect(fitted.x).toBeGreaterThan(0);
    expect(fitted.y).toBeGreaterThan(0);
  });

  it('builds a PDF with one page and an embedded JPEG stream', () => {
    const pdf = new TextDecoder().decode(buildPdf([image], { pageSize: 'a4', orientation: 'portrait', marginMm: 12 }));
    expect(pdf).toContain('%PDF-1.4');
    expect(pdf).toContain('/Type /Page');
    expect(pdf).toContain('/Filter /DCTDecode');
    expect(pdf).toContain('/Count 1');
    expect(pdf).toContain('%%EOF');
  });
});
