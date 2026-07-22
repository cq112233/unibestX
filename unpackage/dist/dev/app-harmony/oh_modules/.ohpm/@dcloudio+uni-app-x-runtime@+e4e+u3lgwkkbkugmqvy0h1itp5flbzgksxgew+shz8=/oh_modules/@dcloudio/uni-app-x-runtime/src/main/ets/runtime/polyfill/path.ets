import { getFileURL } from '../helper'

export function getRealPath(url: string): string {
  return getFileURL(url).replace(/^file:\/\/\//, '/')
}