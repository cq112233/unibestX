import { getUniApp } from  '../UniNativeApp'

interface Version {
  name: string
  code: string
}


/**
 * getAppId
 * @internal
 */
export function getAppVersion(): Version {
  return getUniApp()!.manifest.version as Version
}
