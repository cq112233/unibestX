// 本文件为自动构建生成
import {
  CreateCanvasContextAsyncSuccessCallback as CreateCanvasContextAsyncSuccessCallbackOrigin,
  CreateCanvasContextAsyncFailCallback as CreateCanvasContextAsyncFailCallbackOrigin,
  CreateCanvasContextAsyncCompleteCallback as CreateCanvasContextAsyncCompleteCallbackOrigin,
  RequestAnimationFrameCallback as RequestAnimationFrameCallbackOrigin,
  CanvasContextToBlobCallback as CanvasContextToBlobCallbackOrigin,
  CanvasContext as CanvasContextOrigin,
  CreateCanvasContextAsyncOptions as CreateCanvasContextAsyncOptionsOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type CreateCanvasContextAsyncSuccessCallback = CreateCanvasContextAsyncSuccessCallbackOrigin
  type CreateCanvasContextAsyncFailCallback = CreateCanvasContextAsyncFailCallbackOrigin
  type CreateCanvasContextAsyncCompleteCallback = CreateCanvasContextAsyncCompleteCallbackOrigin
  type RequestAnimationFrameCallback = RequestAnimationFrameCallbackOrigin
  type CanvasContextToBlobCallback = CanvasContextToBlobCallbackOrigin
  type CanvasContext = CanvasContextOrigin
  type CreateCanvasContextAsyncOptions = CreateCanvasContextAsyncOptionsOrigin
  interface Uni extends UniOrigin { }
}
