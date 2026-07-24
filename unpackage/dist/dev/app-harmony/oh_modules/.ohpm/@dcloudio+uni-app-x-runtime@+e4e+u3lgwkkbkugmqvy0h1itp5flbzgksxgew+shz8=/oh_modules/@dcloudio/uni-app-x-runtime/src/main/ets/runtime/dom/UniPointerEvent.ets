import { UniMouseEvent } from './UniMouseEvent'
import type { UniElementImpl } from './UniElement'
import { getPointer } from '../helper'

export {
  UniPointerEvent
} from './UniMouseEvent'

export function init<T extends FrameNode | null = FrameNode | null>(element: UniElementImpl<T>, event: ClickEvent) {
  const pointer = getPointer(element, event)

  return new UniMouseEvent('click', pointer.clientX, pointer.clientY, pointer.clientX, pointer.clientY, pointer.pageX,
    pointer.pageY, pointer.screenX, pointer.screenY)
}
