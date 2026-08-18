import { getUniApp } from  '../UniNativeApp'

export function exit() {
  getUniApp()?.quit()
}