import { MouseEvent as IMouseEvent } from '@dcloudio/uni-app-x/types/native'
import { UniEvent } from './UniEvent'

export class UniMouseEvent extends UniEvent implements IMouseEvent {
  constructor(
    type: string,
    public x: number,
    public y: number,
    public clientX: number,
    public clientY: number,
    public pageX: number,
    public pageY: number,
    public screenX: number,
    public screenY: number,
  ) {
    super(type, {
      bubbles: true,
      cancelable: true,
    })
  }
}

export type UniPointerEvent = UniMouseEvent
// 与安卓一致暂不使用继承关系
export const UniPointerEvent = UniMouseEvent