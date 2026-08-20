import {
  getRealPath
} from '../polyfill'

export function convert2AbsFullPath(filePath: string) {
  const realPath = getRealPath(filePath)
  if(realPath.startsWith('file:///')) {
    return realPath.replace(/^file:\/\//, '')
  }
  return realPath
}