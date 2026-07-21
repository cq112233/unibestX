import { UTSObject } from "@dcloudio/uni-app-framework";
declare class HideKeyboardSuccess extends UTSObject {
}
declare class HideKeyboardFail extends UTSObject {
}
type HideKeyboardSuccessCallback = (res: HideKeyboardSuccess) => void;
type HideKeyboardFailCallback = (res: HideKeyboardFail) => void;
type HideKeyboardCompleteCallback = (res: Object) => void;
declare class HideKeyboardOptions extends UTSObject {
    success: HideKeyboardSuccessCallback | null;
    fail: HideKeyboardFailCallback | null;
    complete: HideKeyboardCompleteCallback | null;
}
type OnKeyboardHeightChangeCallback = (res: OnKeyboardHeightChangeCallbackResult) => void;
declare class OnKeyboardHeightChangeCallbackResult extends UTSObject {
    height: number;
}
type HideKeyboard = (options?: HideKeyboardOptions | null) => void;
type OnKeyboardHeightChange = (callback: OnKeyboardHeightChangeCallback) => number;
type OffKeyboardHeightChange = (id?: number | null) => void;
declare const hideKeyboard: HideKeyboard;
declare const onKeyboardHeightChange: OnKeyboardHeightChange;
declare const offKeyboardHeightChange: OffKeyboardHeightChange;
export { HideKeyboard as HideKeyboard, HideKeyboardCompleteCallback as HideKeyboardCompleteCallback, HideKeyboardFail as HideKeyboardFail, HideKeyboardFailCallback as HideKeyboardFailCallback, HideKeyboardOptions as HideKeyboardOptions, HideKeyboardSuccess as HideKeyboardSuccess, HideKeyboardSuccessCallback as HideKeyboardSuccessCallback, OffKeyboardHeightChange as OffKeyboardHeightChange, OnKeyboardHeightChange as OnKeyboardHeightChange, OnKeyboardHeightChangeCallback as OnKeyboardHeightChangeCallback, OnKeyboardHeightChangeCallbackResult as OnKeyboardHeightChangeCallbackResult };
export { hideKeyboard as hideKeyboard };
export { onKeyboardHeightChange as onKeyboardHeightChange };
export { offKeyboardHeightChange as offKeyboardHeightChange };
