import { UniElementImpl } from './UniElement'
import { Hover } from './Hover'

export class UniHoverElementImpl<T extends FrameNode | null = FrameNode | null> extends UniElementImpl<T> {
  private _hover?: Hover

  setAnyAttribute(key: string, value: Object): void {
    super.setAnyAttribute(key, value)
    const hoverClass = key === 'hoverClass' ? value : null
    if (hoverClass) {
      if (!this._hover) {
        this._hover = new Hover(this, this.attributes)
      }
      this._hover.addEvent()
    } else {
      if (this._hover) {
        this._hover.removeEvent()
      }
    }
  }

  override dispose(): void {
    this._hover = undefined
    super.dispose()
  }
}
