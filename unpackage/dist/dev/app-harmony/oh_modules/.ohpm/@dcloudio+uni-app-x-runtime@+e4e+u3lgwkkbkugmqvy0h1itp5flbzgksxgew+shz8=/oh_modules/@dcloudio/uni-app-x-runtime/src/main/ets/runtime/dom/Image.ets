import { NodeData } from './NodeData'
import { UniImageElementImpl } from './UniImageElement'
import { getResourceStr } from '../helper'
import { getUniApp } from '../UniNativeApp'

let id = 0

export class Image extends UniImageElementImpl {
  private _bitmap: ImageBitmap | null = null

  constructor() {
    super(new NodeData('img-' + (id++).toString(), 'Image'), getUniApp()?.pageManager.getTopPage()!)
  }

  get bitmap(): ImageBitmap | null {
    return this._bitmap
  }

  set src(value: string) {
    this._bitmap = new ImageBitmap(getResourceStr(value) as string)
    setTimeout(() => {
      this.onload()
    }, 1)
  }

  onload(): void | null {
  }
}
