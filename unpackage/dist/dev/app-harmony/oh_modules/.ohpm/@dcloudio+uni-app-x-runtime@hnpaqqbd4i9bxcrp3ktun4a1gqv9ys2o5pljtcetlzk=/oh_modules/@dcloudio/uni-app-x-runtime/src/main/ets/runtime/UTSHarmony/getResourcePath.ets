import {
  getRealPath
} from '../polyfill'

export function getResourcePath(filePath: string) {
  const realPath = getRealPath(filePath)
  if(realPath.startsWith('file:///')) {
    return realPath.replace(/^file:\/\//, '')
  }
  return realPath
}