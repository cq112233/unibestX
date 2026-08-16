import { TouchEvent as ITouchEvent, Touch as ITouch, } from '@dcloudio/uni-app-x/types/native'
import { UniEvent } from '../UniEvent'

export class UniTouch implements ITouch {
  clientX: number = 0
  clientY: number = 0
  identifier: number = 0
  pageX: number = 0
  pageY: number = 0
  screenX: number = 0
  screenY: number = 0
  force: number | null = null
}

export class UniTouchEvent extends UniEvent implements ITouchEvent {
  constructor(
    type: string,
    public touches: UniTouch[],
    public changedTouches: UniTouch[],
  ) {
    super(type, { bubbles: true, cancelable: true })
  }
}
