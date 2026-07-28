// 本文件为自动构建生成
import {
  CreateIntersectionObserver as CreateIntersectionObserverOrigin,
  CreateIntersectionObserverOptions as CreateIntersectionObserverOptionsOrigin,
  ObserveNodeRect as ObserveNodeRectOrigin,
  ObserveResult as ObserveResultOrigin,
  ObserveCallback as ObserveCallbackOrigin,
  IntersectionObserver as IntersectionObserverOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type CreateIntersectionObserver = CreateIntersectionObserverOrigin
  type CreateIntersectionObserverOptions = CreateIntersectionObserverOptionsOrigin
  type ObserveNodeRect = ObserveNodeRectOrigin
  type ObserveResult = ObserveResultOrigin
  type ObserveCallback = ObserveCallbackOrigin
  type IntersectionObserver = IntersectionObserverOrigin
  interface Uni extends UniOrigin { }
}
