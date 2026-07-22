import {
  MediaQueryObserver as MediaQueryObserverOrigin,
  MediaQueryObserveResult as MediaQueryObserveResultOrigin,
  DescriptorOptions as DescriptorOptionsOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type MediaQueryObserver = MediaQueryObserverOrigin
  type MediaQueryObserveResult = MediaQueryObserveResultOrigin
  type DescriptorOptions = DescriptorOptionsOrigin
  interface Uni extends UniOrigin { }
}
