import { getUniApp } from  '../UniNativeApp'

/**
 * getAppName
 * @internal
 */
export function getAppName() {
  return getUniApp()?.manifest.name || ''
}
