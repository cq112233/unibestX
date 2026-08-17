import { getUniApp } from '../UniNativeApp'
import { getProperty } from '../helper'

/**
 * getUniCompilerVersion
 * @internal
 */
export function getUniCompilerVersion() {
  const manifest = getUniApp()!.manifest
  return getProperty(manifest, 'uni-app-x').compilerVersion as string
}
