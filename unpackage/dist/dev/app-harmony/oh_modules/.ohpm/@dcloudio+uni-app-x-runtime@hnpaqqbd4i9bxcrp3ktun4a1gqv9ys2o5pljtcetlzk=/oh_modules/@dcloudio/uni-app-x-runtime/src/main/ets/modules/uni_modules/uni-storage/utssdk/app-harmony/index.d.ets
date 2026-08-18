import { UTSObject, UniError } from "@dcloudio/uni-app-framework";
declare class SetStorageSuccess extends UTSObject {
}
type SetStorageSuccessCallback = (res: SetStorageSuccess) => void;
type SetStorageFailCallback = (res: UniError) => void;
type SetStorageCompleteCallback = (res: Object) => void;
declare class SetStorageOptions extends UTSObject {
    key: string;
    data: Object;
    success: SetStorageSuccessCallback | null;
    fail: SetStorageFailCallback | null;
    complete: SetStorageCompleteCallback | null;
}
type SetStorage = (options: SetStorageOptions) => void;
type SetStorageSync = (key: string, data: Object) => void;
declare class GetStorageSuccess extends UTSObject {
    data: Object | null;
}
type GetStorageSuccessCallback = (res: GetStorageSuccess) => void;
type GetStorageFailCallback = (res: UniError) => void;
type GetStorageCompleteCallback = (res: Object) => void;
declare class GetStorageOptions extends UTSObject {
    key: string;
    success: GetStorageSuccessCallback | null;
    fail: GetStorageFailCallback | null;
    complete: GetStorageCompleteCallback | null;
}
type GetStorage = (options: GetStorageOptions) => void;
type GetStorageSync = (key: string) => Object | null;
declare class GetStorageInfoSuccess extends UTSObject {
    keys: Array<string>;
    currentSize: number;
    limitSize: number;
}
type GetStorageInfoSuccessCallback = (res: GetStorageInfoSuccess) => void;
type GetStorageInfoFailCallback = (res: UniError) => void;
type GetStorageInfoCompleteCallback = (res: Object) => void;
declare class GetStorageInfoOptions extends UTSObject {
    success: GetStorageInfoSuccessCallback | null;
    fail: GetStorageInfoFailCallback | null;
    complete: GetStorageInfoCompleteCallback | null;
}
type GetStorageInfo = (options: GetStorageInfoOptions) => void;
type GetStorageInfoSync = () => GetStorageInfoSuccess;
declare class RemoveStorageSuccess extends UTSObject {
}
type RemoveStorageSuccessCallback = (res: RemoveStorageSuccess) => void;
type RemoveStorageFailCallback = (res: UniError) => void;
type RemoveStorageCompleteCallback = (res: Object) => void;
declare class RemoveStorageOptions extends UTSObject {
    key: string;
    success: RemoveStorageSuccessCallback | null;
    fail: RemoveStorageFailCallback | null;
    complete: RemoveStorageCompleteCallback | null;
}
type RemoveStorage = (options: RemoveStorageOptions) => void;
type RemoveStorageSync = (key: string) => void;
declare class ClearStorageSuccess extends UTSObject {
}
type ClearStorageSuccessCallback = (res: ClearStorageSuccess) => void;
type ClearStorageFailCallback = (res: UniError) => void;
type ClearStorageCompleteCallback = (res: Object) => void;
declare class ClearStorageOptions extends UTSObject {
    success: ClearStorageSuccessCallback | null;
    fail: ClearStorageFailCallback | null;
    complete: ClearStorageCompleteCallback | null;
}
type ClearStorage = (option?: ClearStorageOptions | null) => void;
type ClearStorageSync = () => void;
declare const getStorageSync: GetStorageSync;
declare const getStorage: GetStorage;
declare const setStorageSync: SetStorageSync;
declare const setStorage: SetStorage;
declare const removeStorageSync: RemoveStorageSync;
declare const removeStorage: RemoveStorage;
declare const clearStorageSync: ClearStorageSync;
declare const clearStorage: ClearStorage;
declare const getStorageInfoSync: GetStorageInfoSync;
declare const getStorageInfo: GetStorageInfo;
export { getStorageSync as getStorageSync, getStorage as getStorage, setStorageSync as setStorageSync, setStorage as setStorage, removeStorageSync as removeStorageSync, removeStorage as removeStorage, clearStorageSync as clearStorageSync, clearStorage as clearStorage, getStorageInfoSync as getStorageInfoSync, getStorageInfo as getStorageInfo };
export { ClearStorage as ClearStorage, ClearStorageCompleteCallback as ClearStorageCompleteCallback, ClearStorageFailCallback as ClearStorageFailCallback, ClearStorageOptions as ClearStorageOptions, ClearStorageSuccess as ClearStorageSuccess, ClearStorageSuccessCallback as ClearStorageSuccessCallback, ClearStorageSync as ClearStorageSync, GetStorage as GetStorage, GetStorageCompleteCallback as GetStorageCompleteCallback, GetStorageFailCallback as GetStorageFailCallback, GetStorageInfo as GetStorageInfo, GetStorageInfoCompleteCallback as GetStorageInfoCompleteCallback, GetStorageInfoFailCallback as GetStorageInfoFailCallback, GetStorageInfoOptions as GetStorageInfoOptions, GetStorageInfoSuccess as GetStorageInfoSuccess, GetStorageInfoSuccessCallback as GetStorageInfoSuccessCallback, GetStorageInfoSync as GetStorageInfoSync, GetStorageOptions as GetStorageOptions, GetStorageSuccess as GetStorageSuccess, GetStorageSuccessCallback as GetStorageSuccessCallback, GetStorageSync as GetStorageSync, RemoveStorage as RemoveStorage, RemoveStorageCompleteCallback as RemoveStorageCompleteCallback, RemoveStorageFailCallback as RemoveStorageFailCallback, RemoveStorageOptions as RemoveStorageOptions, RemoveStorageSuccess as RemoveStorageSuccess, RemoveStorageSuccessCallback as RemoveStorageSuccessCallback, RemoveStorageSync as RemoveStorageSync, SetStorage as SetStorage, SetStorageCompleteCallback as SetStorageCompleteCallback, SetStorageFailCallback as SetStorageFailCallback, SetStorageOptions as SetStorageOptions, SetStorageSuccess as SetStorageSuccess, SetStorageSuccessCallback as SetStorageSuccessCallback, SetStorageSync as SetStorageSync };
