import inputMethod from "@ohos:inputMethod";
import { UTSObject, defineAsyncApi, defineSyncApi, UTSHarmony, UTS } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { ApiExecutor } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
const API_HIDE_KEYBOARD = 'hideKeyboard';
const API_ON_KEYBOARD_HEIGHT_CHANGE = 'onKeyboardHeightChange';
const API_OFF_KEYBOARD_HEIGHT_CHANGE = 'offKeyboardHeightChange';
class HideKeyboardSuccess extends UTSObject {
}
class HideKeyboardFail extends UTSObject {
}
type HideKeyboardSuccessCallback = (res: HideKeyboardSuccess) => void;
type HideKeyboardFailCallback = (res: HideKeyboardFail) => void;
type HideKeyboardCompleteCallback = (res: Object) => void;
class HideKeyboardOptions extends UTSObject {
    success: HideKeyboardSuccessCallback | null = null;
    fail: HideKeyboardFailCallback | null = null;
    complete: HideKeyboardCompleteCallback | null = null;
}
type OnKeyboardHeightChangeCallback = (res: OnKeyboardHeightChangeCallbackResult) => void;
class OnKeyboardHeightChangeCallbackResult extends UTSObject {
    height!: number;
}
type HideKeyboard = (options?: HideKeyboardOptions | null) => void;
type OnKeyboardHeightChange = (callback: OnKeyboardHeightChangeCallback) => number;
type OffKeyboardHeightChange = (id?: number | null) => void;
const hideKeyboard: HideKeyboard = defineAsyncApi<HideKeyboardOptions, HideKeyboardSuccess>(API_HIDE_KEYBOARD, (options: HideKeyboardOptions, exec: ApiExecutor<HideKeyboardSuccess>) => {
    inputMethod.getController().hideTextInput().then(() => {
        exec.resolve();
    }, (err: Error) => {
        exec.reject(err.message);
    });
}) as HideKeyboard;
let index = 0;
let keyboardCallbackMap: Map<number, (keyboardHeight: number) => void> = new Map();
const onKeyboardHeightChange: OnKeyboardHeightChange = defineSyncApi<number>(API_ON_KEYBOARD_HEIGHT_CHANGE, (callback: OnKeyboardHeightChangeCallback): number => {
    index++;
    const currentId = index;
    const windowClass = UTSHarmony.getCurrentWindow();
    const wrappedCallback = (keyboardHeight: number) => {
        callback({
            height: px2vp(keyboardHeight)
        } as OnKeyboardHeightChangeCallbackResult);
    };
    keyboardCallbackMap.set(currentId, wrappedCallback);
    windowClass.on('keyboardHeightChange', wrappedCallback);
    return currentId;
}) as OnKeyboardHeightChange;
const offKeyboardHeightChange: OffKeyboardHeightChange = defineSyncApi<void>(API_OFF_KEYBOARD_HEIGHT_CHANGE, (id: number | null = null) => {
    const windowClass = UTSHarmony.getCurrentWindow();
    if (id == null) {
        keyboardCallbackMap.forEach((wrappedCallback) => {
            windowClass.off('keyboardHeightChange', wrappedCallback);
        });
        keyboardCallbackMap.clear();
    }
    else {
        const wrappedCallback = UTS.mapGet(keyboardCallbackMap, id);
        if (wrappedCallback != null) {
            windowClass.off('keyboardHeightChange', wrappedCallback);
            keyboardCallbackMap.delete(id);
        }
    }
}) as OffKeyboardHeightChange;
export { HideKeyboardFail as HideKeyboardFail, HideKeyboardOptions as HideKeyboardOptions, HideKeyboardSuccess as HideKeyboardSuccess, OnKeyboardHeightChangeCallbackResult as OnKeyboardHeightChangeCallbackResult };
export type { HideKeyboard as HideKeyboard, HideKeyboardCompleteCallback as HideKeyboardCompleteCallback, HideKeyboardFailCallback as HideKeyboardFailCallback, HideKeyboardSuccessCallback as HideKeyboardSuccessCallback, OffKeyboardHeightChange as OffKeyboardHeightChange, OnKeyboardHeightChange as OnKeyboardHeightChange, OnKeyboardHeightChangeCallback as OnKeyboardHeightChangeCallback };
export { hideKeyboard as hideKeyboard };
export { onKeyboardHeightChange as onKeyboardHeightChange };
export { offKeyboardHeightChange as offKeyboardHeightChange };
