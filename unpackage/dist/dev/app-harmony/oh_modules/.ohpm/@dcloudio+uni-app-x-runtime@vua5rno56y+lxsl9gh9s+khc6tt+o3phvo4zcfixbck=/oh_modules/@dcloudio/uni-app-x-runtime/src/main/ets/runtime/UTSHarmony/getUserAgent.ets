import {
  getUniRuntimeVersion
} from './getUniRuntimeVersion'

export function getUserAgent() {
  return 'uni-app-x/' + getUniRuntimeVersion()
}