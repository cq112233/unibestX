import { UniImageElementImpl } from '../libs/dom'
import { getResourceStr } from '../helper'

// TODO 目前仅限于Canvas使用
export class Image extends UniImageElementImpl {
  private _bitmap: ImageBitmap | null = null

  constructor() {
    super(0, null, 'Image');
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
