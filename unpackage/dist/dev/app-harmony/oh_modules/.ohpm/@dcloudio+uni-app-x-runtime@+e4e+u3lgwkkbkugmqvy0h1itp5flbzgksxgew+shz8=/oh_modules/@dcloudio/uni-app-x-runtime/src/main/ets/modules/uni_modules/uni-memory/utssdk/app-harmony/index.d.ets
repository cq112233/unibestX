import { UTSObject, IUniError } from "@dcloudio/uni-app-framework";
declare class MemoryWarningCallbackResult extends UTSObject {
    level: number | null;
}
type OnMemoryWarningCallback = (result: MemoryWarningCallbackResult) => void;
type OnMemoryWarning = (callback: OnMemoryWarningCallback) => void;
type OffMemoryWarning = (callback: OnMemoryWarningCallback | null) => void;
type MemoryWarningErrorCode = 1100601 | 1100602;
interface MemoryWarningFail extends IUniError {
    errCode: MemoryWarningErrorCode;
}
declare const onMemoryWarning: OnMemoryWarning;
declare const offMemoryWarning: OffMemoryWarning;
export { MemoryWarningCallbackResult as MemoryWarningCallbackResult, MemoryWarningErrorCode as MemoryWarningErrorCode, MemoryWarningFail as MemoryWarningFail, OffMemoryWarning as OffMemoryWarning, OnMemoryWarning as OnMemoryWarning, OnMemoryWarningCallback as OnMemoryWarningCallback };
export { onMemoryWarning as onMemoryWarning };
export { offMemoryWarning as offMemoryWarning };
