import { UniProvider, UTSObject, IUniError, UniError } from "@dcloudio/uni-app-framework";
type GetProviderFailImpl = GetProviderFailImpl__1;
declare class GetProviderSuccess extends UTSObject {
    service: 'payment' | 'location' | 'oauth' | 'share';
    provider: string[];
    providers: UniProvider[];
}
declare class GetProviderSyncSuccess extends UTSObject {
    service: 'payment' | 'location' | 'oauth' | 'share';
    providerIds: string[];
    providerObjects: UniProvider[];
}
type GetProviderSync = (options: GetProviderSyncOptions) => GetProviderSyncSuccess;
declare class GetProviderSyncOptions extends UTSObject {
    service: 'payment' | 'location' | 'oauth' | 'share';
}
type GetProviderSuccessCallback = (result: GetProviderSuccess) => void;
type GetProviderFail = IGetProviderFail;
type GetProviderFailCallback = (result: GetProviderFail) => void;
type GetProviderComplete = Object;
type GetProviderCompleteCallback = (result: GetProviderComplete) => void;
declare class GetProviderOptions extends UTSObject {
    service: 'payment' | 'location' | 'oauth' | 'share';
    success: GetProviderSuccessCallback | null;
    fail: GetProviderFailCallback | null;
    complete: GetProviderCompleteCallback | null;
}
type GetProvider = (options: GetProviderOptions) => void;
type ProviderErrorCode = 110600;
interface IGetProviderFail extends IUniError {
    errCode: ProviderErrorCode;
}
declare class GetProviderFailImpl__1 extends UniError implements IGetProviderFail {
    errCode: ProviderErrorCode;
    constructor(errCode: ProviderErrorCode);
}
declare const getProvider: GetProvider;
declare const getProviderSync: GetProviderSync;
export { GetProvider as GetProvider, GetProviderComplete as GetProviderComplete, GetProviderCompleteCallback as GetProviderCompleteCallback, GetProviderFail as GetProviderFail, GetProviderFailCallback as GetProviderFailCallback, GetProviderFailImpl as GetProviderFailImpl, GetProviderOptions as GetProviderOptions, GetProviderSuccess as GetProviderSuccess, GetProviderSuccessCallback as GetProviderSuccessCallback, GetProviderSync as GetProviderSync, GetProviderSyncOptions as GetProviderSyncOptions, GetProviderSyncSuccess as GetProviderSyncSuccess, IGetProviderFail as IGetProviderFail, ProviderErrorCode as ProviderErrorCode };
export { getProvider as getProvider };
export { getProviderSync as getProviderSync };
