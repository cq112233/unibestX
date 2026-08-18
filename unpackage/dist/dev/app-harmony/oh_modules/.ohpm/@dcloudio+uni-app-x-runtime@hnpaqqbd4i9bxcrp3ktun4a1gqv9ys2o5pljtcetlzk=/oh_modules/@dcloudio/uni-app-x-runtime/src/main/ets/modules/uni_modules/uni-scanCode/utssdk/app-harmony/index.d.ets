import { UTSObject } from "@dcloudio/uni-app-framework";
declare class ScanCodeSuccess extends UTSObject {
    result: string;
    scanType: string;
}
declare class ScanCodeFail extends UTSObject {
}
type ScanCodeSuccessCallback = (res: ScanCodeSuccess) => void;
type ScanCodeFailCallback = (res: ScanCodeFail) => void;
type ScanCodeCompleteCallback = (res: Object) => void;
type ScanCodeSupportedTypes = 'barCode' | 'qrCode' | 'datamatrix' | 'pdf417';
declare class ScanCodeOptions extends UTSObject {
    onlyFromCamera: boolean | null;
    scanType: ScanCodeSupportedTypes[] | null;
    success: ScanCodeSuccessCallback | null;
    fail: ScanCodeFailCallback | null;
    complete: ScanCodeCompleteCallback | null;
}
type ScanCode = (options?: ScanCodeOptions | null) => void;
export { ScanCodeFail as ScanCodeFail, ScanCodeSuccess as ScanCodeSuccess, ScanCodeOptions as ScanCodeOptions };
declare const scanCode: ScanCode;
export { ScanCode as ScanCode, ScanCodeCompleteCallback as ScanCodeCompleteCallback, ScanCodeFailCallback as ScanCodeFailCallback, ScanCodeSuccessCallback as ScanCodeSuccessCallback, ScanCodeSupportedTypes as ScanCodeSupportedTypes };
export { scanCode as scanCode };
