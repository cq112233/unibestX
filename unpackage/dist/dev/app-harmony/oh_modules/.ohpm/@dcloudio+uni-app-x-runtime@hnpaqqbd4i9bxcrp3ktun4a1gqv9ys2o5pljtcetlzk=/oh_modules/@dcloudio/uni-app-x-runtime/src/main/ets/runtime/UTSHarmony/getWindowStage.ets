import OHWindow from '@ohos.window';
import { getWindowStage as frameworkGetWindowStage } from '../App'

/**
 * getWindowStage
 * @internal
 */
export function getWindowStage() {
  return frameworkGetWindowStage() as OHWindow.WindowStage
}
