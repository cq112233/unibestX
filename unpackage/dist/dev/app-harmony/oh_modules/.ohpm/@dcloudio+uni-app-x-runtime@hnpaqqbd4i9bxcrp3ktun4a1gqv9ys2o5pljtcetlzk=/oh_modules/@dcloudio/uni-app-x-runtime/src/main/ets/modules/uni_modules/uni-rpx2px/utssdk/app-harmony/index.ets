import { defineSyncApi, UTSHarmony } from "@dcloudio/uni-app-framework";
import harmonyWindow from '@ohos.window';
type Rpx2px = (number: number) => number;
const API_RPX2PX = 'rpx2px';
export { Rpx2px as Rpx2px };
const EPS = 1e-4;
const rpx2px: Rpx2px = defineSyncApi<number>(API_RPX2PX, (number: number): number =>{
    const windowStage: harmonyWindow.WindowStage = UTSHarmony.getWindowStage() as harmonyWindow.WindowStage;
    let windowWidthInVp: number = 384;
    let windowWidthInPx: number = 1344;
    if (windowStage) {
        const mainWindow: harmonyWindow.Window = windowStage.getMainWindowSync();
        windowWidthInPx = mainWindow.getWindowProperties().windowRect.width;
        windowWidthInVp = Math.ceil(px2vp(windowWidthInPx));
    }
    let result = (number / 750) * windowWidthInVp;
    if (result < 0) {
        result = -result;
    }
    result = Math.floor(result + EPS);
    if (result == 0) {
        if (windowWidthInPx == windowWidthInVp) {
            result = 1;
        } else {
            result = 0.5;
        }
    }
    return number < 0 ? -result : result;
}) as Rpx2px;
export { rpx2px as rpx2px };
