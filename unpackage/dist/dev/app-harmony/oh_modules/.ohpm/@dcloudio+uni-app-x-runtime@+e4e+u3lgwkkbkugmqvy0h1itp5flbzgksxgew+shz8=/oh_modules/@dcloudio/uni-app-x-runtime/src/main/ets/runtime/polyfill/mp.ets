import { getUserAgent } from '../UTSHarmony'
import { getUniApp } from '../UniNativeApp'
import { TinyEmitter as Emitter } from 'tiny-emitter'

interface UserAgent {
  fullUserAgent: string
}

export class UniMP extends Emitter {
  constructor() {
    super()
  }

  get appId() {
    // TODO 开发日志使用了socket，此功能初始化时getMainApp仍为undefined。先通过此方式规避此问题
    return getUniApp()?.appid || 'HBuilder'
  }

  get userAgent() {
    return {
      fullUserAgent: getUserAgent()
    } as UserAgent
  }

  get window() {
    return getUniApp()?.window
  }
}

const currentMP = new UniMP()

export function getCurrentMP() {
  return currentMP
}