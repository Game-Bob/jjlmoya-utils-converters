import { PNG_A_JPG_TOOL } from './tool/pngAJpg';
import { JPG_A_PNG_TOOL } from './tool/jpgAPng';
import { WEBP_A_PNG_TOOL } from './tool/webpAPng';
import { WEBP_A_JPG_TOOL } from './tool/webpAJpg';
import { PNG_A_WEBP_TOOL } from './tool/pngAWebp';
import { JPG_A_WEBP_TOOL } from './tool/jpgAWebp';
import { SVG_A_PNG_TOOL } from './tool/svgAPng';
import { SVG_A_JPG_TOOL } from './tool/svgAJpg';
import { IMAGEN_BASE64_TOOL } from './tool/imagenBase64';
import { BMP_A_JPG_TOOL } from './tool/bmpAJpg';
import { BMP_A_PNG_TOOL } from './tool/bmpAPng';
import { BMP_A_WEBP_TOOL } from './tool/bmpAWebp';
import { AVIF_A_JPG_TOOL } from './tool/avifAJpg';
import { AVIF_A_PNG_TOOL } from './tool/avifAPng';
import { AVIF_A_WEBP_TOOL } from './tool/avifAWebp';
import { GIF_A_JPG_TOOL } from './tool/gifAJpg';
import { GIF_A_PNG_TOOL } from './tool/gifAPng';
import { GIF_A_WEBP_TOOL } from './tool/gifAWebp';
import { PNG_A_ICO_TOOL } from './tool/pngAIco';
import { JPG_A_ICO_TOOL } from './tool/jpgAIco';
import { WEBP_A_ICO_TOOL } from './tool/webpAIco';
import type { ToolDefinition } from './types';

export const ALL_TOOLS: ToolDefinition[] = [
  PNG_A_JPG_TOOL,
  JPG_A_PNG_TOOL,
  WEBP_A_PNG_TOOL,
  WEBP_A_JPG_TOOL,
  PNG_A_WEBP_TOOL,
  JPG_A_WEBP_TOOL,
  SVG_A_PNG_TOOL,
  SVG_A_JPG_TOOL,
  IMAGEN_BASE64_TOOL,
  BMP_A_JPG_TOOL,
  BMP_A_PNG_TOOL,
  BMP_A_WEBP_TOOL,
  AVIF_A_JPG_TOOL,
  AVIF_A_PNG_TOOL,
  AVIF_A_WEBP_TOOL,
  GIF_A_JPG_TOOL,
  GIF_A_PNG_TOOL,
  GIF_A_WEBP_TOOL,
  PNG_A_ICO_TOOL,
  JPG_A_ICO_TOOL,
  WEBP_A_ICO_TOOL,
];

export {
  PNG_A_JPG_TOOL,
  JPG_A_PNG_TOOL,
  WEBP_A_PNG_TOOL,
  WEBP_A_JPG_TOOL,
  PNG_A_WEBP_TOOL,
  JPG_A_WEBP_TOOL,
  SVG_A_PNG_TOOL,
  SVG_A_JPG_TOOL,
  IMAGEN_BASE64_TOOL,
  BMP_A_JPG_TOOL,
  BMP_A_PNG_TOOL,
  BMP_A_WEBP_TOOL,
  AVIF_A_JPG_TOOL,
  AVIF_A_PNG_TOOL,
  AVIF_A_WEBP_TOOL,
  GIF_A_JPG_TOOL,
  GIF_A_PNG_TOOL,
  GIF_A_WEBP_TOOL,
  PNG_A_ICO_TOOL,
  JPG_A_ICO_TOOL,
  WEBP_A_ICO_TOOL,
};

export const ALL_ENTRIES = ALL_TOOLS.map(t => t.entry);
