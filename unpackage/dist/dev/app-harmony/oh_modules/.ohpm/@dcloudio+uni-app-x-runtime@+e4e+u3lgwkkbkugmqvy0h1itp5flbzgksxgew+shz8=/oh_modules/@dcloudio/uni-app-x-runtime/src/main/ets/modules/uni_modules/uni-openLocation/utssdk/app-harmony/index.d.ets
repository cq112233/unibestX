import { IUniError, UTSObject } from "@dcloudio/uni-app-framework";
type OpenLocationErrorCode = 4;
interface OpenLocationSuccess {
    errMsg: string;
}
type OpenLocationSuccessCallback = (result: OpenLocationSuccess) => void;
interface OpenLocationFail extends IUniError {
    errCode: OpenLocationErrorCode;
}
type OpenLocationFailCallback = (result: OpenLocationFail) => void;
type OpenLocationComplete = Object;
type OpenLocationCompleteCallback = (result: OpenLocationComplete) => void;
declare class OpenLocationOptions extends UTSObject {
    latitude: number;
    longitude: number;
    scale: number | null;
    name: string | null;
    address: string | null;
    success: OpenLocationSuccessCallback | null;
    fail: OpenLocationFailCallback | null;
    complete: OpenLocationCompleteCallback | null;
}
type OpenLocation = (options: OpenLocationOptions) => void;
declare class OpenLocationSuccessImpl implements OpenLocationSuccess {
    errMsg: string;
    constructor(errMsg?: string);
}
export { OpenLocation as OpenLocation, OpenLocationOptions as OpenLocationOptions, OpenLocationSuccess as OpenLocationSuccess, OpenLocationFail as OpenLocationFail, OpenLocationComplete as OpenLocationComplete, OpenLocationSuccessImpl as OpenLocationSuccessImpl, OpenLocationErrorCode as OpenLocationErrorCode };
type OpenSchema = (url: string) => void;
type CanOpenURL = (url: string) => boolean;
declare const openSchema: OpenSchema;
declare const canOpenURL: CanOpenURL;
declare const openLocation: OpenLocation;
export { openSchema as openSchema };
export { canOpenURL as canOpenURL };
export { openLocation as openLocation };
