import type OHWindow from "@ohos:window";
import { getWindowStage as frameworkGetWindowStage } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/App&1.0.0";
/**
 * getWindowStage
 * @internal
 */
export function getWindowStage() {
    return frameworkGetWindowStage() as OHWindow.WindowStage;
}
