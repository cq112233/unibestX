import { getUniApp } from  '../UniNativeApp'

/**
 * getAppId
 * @internal
 */
export function getAppId() {
  return getUniApp()?.manifest.id || ''
}
