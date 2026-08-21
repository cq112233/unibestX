import { UniError } from './UniError'

export class NativeLoadFontFaceFail extends UniError { }

export class NativeLoadFontFaceOptions {
  family?: string | null
  source?: string | null
  success?: (res: any) => void
  fail?: (res: NativeLoadFontFaceFail) => void
  complete?: (res: any) => void
}
