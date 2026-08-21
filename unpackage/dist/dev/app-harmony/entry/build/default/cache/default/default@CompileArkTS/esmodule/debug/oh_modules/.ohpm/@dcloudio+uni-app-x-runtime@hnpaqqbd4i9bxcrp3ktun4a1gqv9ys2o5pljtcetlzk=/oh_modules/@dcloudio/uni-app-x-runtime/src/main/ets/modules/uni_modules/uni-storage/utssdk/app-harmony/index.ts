import type common from "@ohos:app.ability.common";
import { UTSObject, UTS, UTSHarmony, defineSyncApi, defineAsyncApi } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { UniError, ApiExecutor } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import dataPreferences from "@ohos:data.preferences";
import { getCurrentMP } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
class SetStorageSuccess extends UTSObject {
}
type SetStorageSuccessCallback = (res: SetStorageSuccess) => void;
type SetStorageFailCallback = (res: UniError) => void;
type SetStorageCompleteCallback = (res: Object) => void;
class SetStorageOptions extends UTSObject {
    key!: string;
    data!: Object;
    success: SetStorageSuccessCallback | null = null;
    fail: SetStorageFailCallback | null = null;
    complete: SetStorageCompleteCallback | null = null;
}
type SetStorage = (options: SetStorageOptions) => void;
type SetStorageSync = (key: string, data: Object) => void;
class GetStorageSuccess extends UTSObject {
    data: Object | null = null;
}
type GetStorageSuccessCallback = (res: GetStorageSuccess) => void;
type GetStorageFailCallback = (res: UniError) => void;
type GetStorageCompleteCallback = (res: Object) => void;
class GetStorageOptions extends UTSObject {
    key!: string;
    success: GetStorageSuccessCallback | null = null;
    fail: GetStorageFailCallback | null = null;
    complete: GetStorageCompleteCallback | null = null;
}
type GetStorage = (options: GetStorageOptions) => void;
type GetStorageSync = (key: string) => Object | null;
class GetStorageInfoSuccess extends UTSObject {
    keys!: Array<string>;
    currentSize!: number;
    limitSize!: number;
}
type GetStorageInfoSuccessCallback = (res: GetStorageInfoSuccess) => void;
type GetStorageInfoFailCallback = (res: UniError) => void;
type GetStorageInfoCompleteCallback = (res: Object) => void;
class GetStorageInfoOptions extends UTSObject {
    success: GetStorageInfoSuccessCallback | null = null;
    fail: GetStorageInfoFailCallback | null = null;
    complete: GetStorageInfoCompleteCallback | null = null;
}
type GetStorageInfo = (options: GetStorageInfoOptions) => void;
type GetStorageInfoSync = () => GetStorageInfoSuccess;
class RemoveStorageSuccess extends UTSObject {
}
type RemoveStorageSuccessCallback = (res: RemoveStorageSuccess) => void;
type RemoveStorageFailCallback = (res: UniError) => void;
type RemoveStorageCompleteCallback = (res: Object) => void;
class RemoveStorageOptions extends UTSObject {
    key!: string;
    success: RemoveStorageSuccessCallback | null = null;
    fail: RemoveStorageFailCallback | null = null;
    complete: RemoveStorageCompleteCallback | null = null;
}
type RemoveStorage = (options: RemoveStorageOptions) => void;
type RemoveStorageSync = (key: string) => void;
class ClearStorageSuccess extends UTSObject {
}
type ClearStorageSuccessCallback = (res: ClearStorageSuccess) => void;
type ClearStorageFailCallback = (res: UniError) => void;
type ClearStorageCompleteCallback = (res: Object) => void;
class ClearStorageOptions extends UTSObject {
    success: ClearStorageSuccessCallback | null = null;
    fail: ClearStorageFailCallback | null = null;
    complete: ClearStorageCompleteCallback | null = null;
}
type ClearStorage = (option?: ClearStorageOptions | null) => void;
type ClearStorageSync = () => void;
const API_GET_STORAGE = 'getStorage';
const API_GET_STORAGE_SYNC = 'getStorageSync';
const API_SET_STORAGE = 'setStorage';
const API_SET_STORAGE_SYNC = 'setStorageSync';
const API_REMOVE_STORAGE = 'removeStorage';
const API_REMOVE_STORAGE_SYNC = 'removeStorageSync';
const API_CLEAR_STORAGE = 'clearStorage';
const API_CLEAR_STORAGE_SYNC = 'clearStorageSync';
const API_GET_STORAGE_INFO = 'getStorageInfo';
const API_GET_STORAGE_INFO_SYNC = 'getStorageInfoSync';
function parseStorageValue(value: string): Object {
    try {
        const valueObj: any = globalThis.UTS.JSON.parse(value);
        return valueObj ? valueObj.data : value;
    }
    catch (e) {
        return value;
    }
}
function stringifyStorageValue(value: Object): string {
    return UTS.JSON.stringify({
        type: typeof value,
        data: value
    } as any);
}
const stores = new Map<string, dataPreferences.Preferences>();
function createStore(): dataPreferences.Preferences {
    const id = getCurrentMP().appId;
    if (stores.has(id)) {
        return UTS.mapGet(stores, id)!;
    }
    const store = dataPreferences.getPreferencesSync(UTSHarmony.getUIAbilityContext() as common.UIAbilityContext, {
        name: `storage.${id}`
    } as dataPreferences.Options);
    stores.set(id, store);
    return store;
}
const getStorageSync = defineSyncApi<Object>(API_GET_STORAGE_SYNC, (key: string): Object => {
    const storeValue = createStore().getSync(key, '');
    if (!storeValue) {
        return '';
    }
    return parseStorageValue(storeValue as string);
}) as GetStorageSync;
const getStorage = defineAsyncApi<GetStorageOptions, GetStorageSuccess>(API_GET_STORAGE, (args: GetStorageOptions, exec: ApiExecutor<GetStorageSuccess>) => {
    createStore().get(args.key, '').then((storeValue) => {
        if (!storeValue) {
            return exec.reject('data not found');
        }
        let value: Object;
        try {
            value = parseStorageValue(storeValue as string);
        }
        catch (error) {
            exec.reject('data parse error');
            return;
        }
        exec.resolve({
            data: value
        } as GetStorageSuccess);
    });
}) as GetStorage;
const setStorageSync = defineSyncApi<void>(API_SET_STORAGE_SYNC, (key: string, value: Object) => {
    createStore().putSync(key, stringifyStorageValue(value));
    createStore().flush();
}) as SetStorageSync;
const setStorage = defineAsyncApi<SetStorageOptions, SetStorageSuccess>(API_SET_STORAGE, (args: SetStorageOptions, exec: ApiExecutor<SetStorageSuccess>) => {
    try {
        createStore().put(args.key, stringifyStorageValue(args.data)).then(() => {
            createStore().flush();
            exec.resolve({} as any);
        }, (error: Error) => {
            exec.reject(error.message);
        });
    }
    catch (error) {
        exec.reject((error as Error).message);
    }
}) as SetStorage;
const removeStorageSync = defineSyncApi<void>(API_REMOVE_STORAGE_SYNC, (key: string) => {
    createStore().deleteSync(key);
    createStore().flush();
}) as RemoveStorageSync;
const removeStorage = defineAsyncApi<RemoveStorageOptions, RemoveStorageSuccess>(API_REMOVE_STORAGE, (args: RemoveStorageOptions, exec: ApiExecutor<RemoveStorageSuccess>) => {
    createStore().delete(args.key).then(() => {
        createStore().flush();
        exec.resolve({} as any);
    }, (error: Error) => {
        exec.reject(error.message);
    });
}) as RemoveStorage;
const clearStorageSync = defineSyncApi<void>(API_CLEAR_STORAGE_SYNC, () => {
    createStore().clearSync();
    createStore().flush();
}) as ClearStorageSync;
const clearStorage = defineAsyncApi<ClearStorageOptions, ClearStorageSuccess>(API_CLEAR_STORAGE, (args: ClearStorageOptions, exec: ApiExecutor<ClearStorageSuccess>) => {
    createStore().clear().then(() => {
        createStore().flush();
        exec.resolve({} as any);
    }, (error: Error) => {
        exec.reject(error.message);
    });
}) as ClearStorage;
const getStorageInfoSync = defineSyncApi<GetStorageInfoSuccess>(API_GET_STORAGE_INFO_SYNC, (): GetStorageInfoSuccess => {
    const allData = createStore().getAllSync();
    return {
        keys: Object.keys(allData),
        currentSize: 0,
        limitSize: 0
    } as GetStorageInfoSuccess;
}) as GetStorageInfoSync;
const getStorageInfo = defineAsyncApi<GetStorageInfoOptions, GetStorageInfoSuccess>(API_GET_STORAGE_INFO, (args: GetStorageInfoOptions, exec: ApiExecutor<GetStorageInfoSuccess>) => {
    createStore().getAll().then((allData) => {
        exec.resolve({
            keys: Object.keys(allData),
            currentSize: 0,
            limitSize: 0
        } as GetStorageInfoSuccess);
    });
}) as GetStorageInfo;
export { getStorageSync as getStorageSync, getStorage as getStorage, setStorageSync as setStorageSync, setStorage as setStorage, removeStorageSync as removeStorageSync, removeStorage as removeStorage, clearStorageSync as clearStorageSync, clearStorage as clearStorage, getStorageInfoSync as getStorageInfoSync, getStorageInfo as getStorageInfo };
export { ClearStorageOptions as ClearStorageOptions, ClearStorageSuccess as ClearStorageSuccess, GetStorageInfoOptions as GetStorageInfoOptions, GetStorageInfoSuccess as GetStorageInfoSuccess, GetStorageOptions as GetStorageOptions, GetStorageSuccess as GetStorageSuccess, RemoveStorageOptions as RemoveStorageOptions, RemoveStorageSuccess as RemoveStorageSuccess, SetStorageOptions as SetStorageOptions, SetStorageSuccess as SetStorageSuccess };
export type { ClearStorage as ClearStorage, ClearStorageCompleteCallback as ClearStorageCompleteCallback, ClearStorageFailCallback as ClearStorageFailCallback, ClearStorageSuccessCallback as ClearStorageSuccessCallback, ClearStorageSync as ClearStorageSync, GetStorage as GetStorage, GetStorageCompleteCallback as GetStorageCompleteCallback, GetStorageFailCallback as GetStorageFailCallback, GetStorageInfo as GetStorageInfo, GetStorageInfoCompleteCallback as GetStorageInfoCompleteCallback, GetStorageInfoFailCallback as GetStorageInfoFailCallback, GetStorageInfoSuccessCallback as GetStorageInfoSuccessCallback, GetStorageInfoSync as GetStorageInfoSync, GetStorageSuccessCallback as GetStorageSuccessCallback, GetStorageSync as GetStorageSync, RemoveStorage as RemoveStorage, RemoveStorageCompleteCallback as RemoveStorageCompleteCallback, RemoveStorageFailCallback as RemoveStorageFailCallback, RemoveStorageSuccessCallback as RemoveStorageSuccessCallback, RemoveStorageSync as RemoveStorageSync, SetStorage as SetStorage, SetStorageCompleteCallback as SetStorageCompleteCallback, SetStorageFailCallback as SetStorageFailCallback, SetStorageSuccessCallback as SetStorageSuccessCallback, SetStorageSync as SetStorageSync };
