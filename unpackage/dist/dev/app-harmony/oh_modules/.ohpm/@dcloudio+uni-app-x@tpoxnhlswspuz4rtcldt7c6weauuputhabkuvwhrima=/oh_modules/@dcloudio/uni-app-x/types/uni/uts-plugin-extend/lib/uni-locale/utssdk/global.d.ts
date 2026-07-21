import {
  Uni as UniOrigin,
  GetLocale as GetLocaleOrigin,
  SetLocale as SetLocaleOrigin,
  OnLocaleChangeCallback as OnLocaleChangeCallbackOrigin,
  OnLocaleChange as OnLocaleChangeOrigin,
} from "./interface"

declare global {
  type GetLocale = GetLocaleOrigin
  type SetLocale = SetLocaleOrigin
  type OnLocaleChangeCallback = OnLocaleChangeCallbackOrigin
  type OnLocaleChange = OnLocaleChangeOrigin
  interface Uni extends UniOrigin {}
}
