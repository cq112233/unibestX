import { UniNativeApp as IUniNativeApp } from '@dcloudio/uni-app-x/types/native'
import OHWindow from '@ohos.window'

export interface IUniNativeAppImpl extends IUniNativeApp {
  /**
   * @internal
   */
  window: OHWindow.Window
  id: number
}