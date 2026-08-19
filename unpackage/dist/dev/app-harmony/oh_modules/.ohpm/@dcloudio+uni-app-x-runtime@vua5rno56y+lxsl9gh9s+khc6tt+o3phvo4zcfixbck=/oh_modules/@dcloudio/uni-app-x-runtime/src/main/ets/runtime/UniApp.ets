import type { UniApp } from '@dcloudio/uni-app-x/types/app'
import { Unknown } from "./helper"
import { getEntryAbility } from './App'
import { UniEntryAbility } from './EntryAbility'

export class UniAppImpl implements UniApp {
  vm: Unknown
  $vm: Unknown
  globalData!: Object
  private _harmonyAbility: UniEntryAbility

  constructor(harmonyAbility: UniEntryAbility) {
    this._harmonyAbility = harmonyAbility
  }

  getAndroidApplication() {
    return null
  }

  getHarmonyAbility() {
    return this._harmonyAbility
  }
}

let app: UniAppImpl | undefined

export function getApp() {
  return app!
}

export function genApp() {
  app = new UniAppImpl(getEntryAbility())
}

export function clearApp() {
  app = undefined
}

export function getAppAbility() {
  return getEntryAbility()!
}