import {
  CreateCanvasContext as CreateCanvasContextOrigin,
  CanvasContext as CanvasContextOrigin,
  CanvasToTempFilePathOptions as CanvasToTempFilePathOptionsOrigin,
  CanvasToTempFilePath as CanvasToTempFilePathOrigin,
  CanvasGetImageDataOptions as CanvasGetImageDataOptionsOrigin,
  CanvasGetImageData as CanvasGetImageDataOrigin,
  CanvasPutImageDataOptions as CanvasPutImageDataOptionsOrigin,
  CanvasPutImageData as CanvasPutImageDataOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type CreateCanvasContext = CreateCanvasContextOrigin
  type CanvasContext = CanvasContextOrigin
  type CanvasToTempFilePathOptions = CanvasToTempFilePathOptionsOrigin
  type CanvasToTempFilePath = CanvasToTempFilePathOrigin
  type CanvasGetImageDataOptions = CanvasGetImageDataOptionsOrigin
  type CanvasGetImageData = CanvasGetImageDataOrigin
  type CanvasPutImageDataOptions = CanvasPutImageDataOptionsOrigin
  type CanvasPutImageData = CanvasPutImageDataOrigin
  interface Uni extends UniOrigin { }
}
