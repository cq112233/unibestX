import { FrameCallback } from '@kit.ArkUI'
import { getUniApp } from './UniNativeApp'

type RequestAnimationFrameCallback = (timestamp: number) => void

class AnimationFrameCallback extends FrameCallback {
  static frameCallbacks = new Map<number, AnimationFrameCallback>()
  private readonly _taskId: number
  private readonly _callback: RequestAnimationFrameCallback
  private _isCancelled = false

  constructor(callback: RequestAnimationFrameCallback, taskId: number) {
    super()

    this._callback = callback
    this._taskId = taskId

    AnimationFrameCallback.frameCallbacks.set(taskId, this)
  }

  onFrame(frameTimeNanos: number) {
    if (this._isCancelled) {
      return
    }
    this.removeInFrameCallbacks()
    this._callback(frameTimeNanos / 1000000)
  }

  setCancelled(value: boolean) {
    this._isCancelled = value
    this.removeInFrameCallbacks()
  }

  private removeInFrameCallbacks() {
    AnimationFrameCallback.frameCallbacks.delete(this._taskId)
  }
}

let frameCounter = 0;

export function requestAnimationFrame(callback: RequestAnimationFrameCallback): number {
  frameCounter++
  getUniApp()?.context?.postFrameCallback(new AnimationFrameCallback(callback, frameCounter))
  return frameCounter;
}

export function cancelAnimationFrame(taskId: number) {
  AnimationFrameCallback.frameCallbacks.get(taskId)?.setCancelled(true)
}
