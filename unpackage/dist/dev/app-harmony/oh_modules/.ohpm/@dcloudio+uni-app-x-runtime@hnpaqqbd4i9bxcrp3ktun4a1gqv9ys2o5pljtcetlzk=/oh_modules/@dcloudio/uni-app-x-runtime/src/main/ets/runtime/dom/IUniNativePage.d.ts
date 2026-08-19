import { UniElement, UniNativePage as IUniNativePage, UniPage, ExitFullscreenOptions } from '@dcloudio/uni-app-x/types/native';
import { Size as Size } from "@ohos.arkui.node";
/**
 * 此类型定义用于拆分 ts 类型引用
 */
export interface UniNativePageImpl extends IUniNativePage {
    /**
     * @internal
     */
    __uniPage: UniPage | null;
    fullscreenElement: UniElement | null;
    getWindowSize(): Size;
    getContentSlotSize(): Size;
    exitFullscreen(options?: ExitFullscreenOptions | null): void;
}
