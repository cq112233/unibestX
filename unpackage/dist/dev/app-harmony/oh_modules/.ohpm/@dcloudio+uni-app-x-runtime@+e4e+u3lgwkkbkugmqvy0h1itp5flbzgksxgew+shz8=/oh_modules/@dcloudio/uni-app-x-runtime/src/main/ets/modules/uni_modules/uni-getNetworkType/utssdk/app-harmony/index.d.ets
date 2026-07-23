import { UTSObject, UniError } from "@dcloudio/uni-app-framework";
type GetNetworkType = (options: GetNetworkTypeOptions) => void;
declare class GetNetworkTypeSuccess extends UTSObject {
    networkType: string;
}
type GetNetworkTypeSuccessCallback = (result: GetNetworkTypeSuccess) => void;
type GetNetworkTypeFail = UniError;
type GetNetworkTypeFailCallback = (result: GetNetworkTypeFail) => void;
type GetNetworkTypeComplete = Object;
type GetNetworkTypeCompleteCallback = (result: GetNetworkTypeComplete) => void;
declare class GetNetworkTypeOptions extends UTSObject {
    success: GetNetworkTypeSuccessCallback | null;
    fail: GetNetworkTypeFailCallback | null;
    complete: GetNetworkTypeCompleteCallback | null;
}
declare class OnNetworkStatusChangeCallbackResult extends UTSObject {
    isConnected: boolean;
    networkType: string;
}
type OnNetworkStatusChangeCallback = (result: OnNetworkStatusChangeCallbackResult) => void;
type OnNetworkStatusChange = (listener: OnNetworkStatusChangeCallback) => number;
type OffNetworkStatusChange = (listener?: number | OnNetworkStatusChangeCallback | null) => void;
declare const getNetworkType: GetNetworkType;
declare const onNetworkStatusChange: OnNetworkStatusChange;
declare const offNetworkStatusChange: OffNetworkStatusChange;
export { GetNetworkType as GetNetworkType, GetNetworkTypeComplete as GetNetworkTypeComplete, GetNetworkTypeCompleteCallback as GetNetworkTypeCompleteCallback, GetNetworkTypeFail as GetNetworkTypeFail, GetNetworkTypeFailCallback as GetNetworkTypeFailCallback, GetNetworkTypeOptions as GetNetworkTypeOptions, GetNetworkTypeSuccess as GetNetworkTypeSuccess, GetNetworkTypeSuccessCallback as GetNetworkTypeSuccessCallback, OffNetworkStatusChange as OffNetworkStatusChange, OnNetworkStatusChange as OnNetworkStatusChange, OnNetworkStatusChangeCallback as OnNetworkStatusChangeCallback, OnNetworkStatusChangeCallbackResult as OnNetworkStatusChangeCallbackResult };
export { getNetworkType as getNetworkType };
export { onNetworkStatusChange as onNetworkStatusChange };
export { offNetworkStatusChange as offNetworkStatusChange };
