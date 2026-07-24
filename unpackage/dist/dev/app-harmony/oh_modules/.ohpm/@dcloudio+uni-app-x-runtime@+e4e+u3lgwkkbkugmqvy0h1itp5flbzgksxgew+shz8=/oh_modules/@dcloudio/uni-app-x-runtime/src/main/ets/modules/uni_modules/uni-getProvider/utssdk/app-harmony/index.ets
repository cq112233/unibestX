import { UniProvider, UTSObject, IUniError, UniError, getUniProviders, defineAsyncApi, ApiExecutor, defineSyncApi } from "@dcloudio/uni-app-framework";
type GetProviderFailImpl = GetProviderFailImpl__1;
const ProviderUniErrorSubject = 'uni-Provider';
class GetProviderSuccess extends UTSObject {
    service!: 'payment' | 'location' | 'oauth' | 'share';
    provider!: string[];
    providers!: UniProvider[];
}
class GetProviderSyncSuccess extends UTSObject {
    service!: 'payment' | 'location' | 'oauth' | 'share';
    providerIds!: string[];
    providerObjects!: UniProvider[];
}
type GetProviderSync = (options: GetProviderSyncOptions) => GetProviderSyncSuccess;
class GetProviderSyncOptions extends UTSObject {
    service!: 'payment' | 'location' | 'oauth' | 'share';
}
type GetProviderSuccessCallback = (result: GetProviderSuccess) => void;
type GetProviderFail = IGetProviderFail;
type GetProviderFailCallback = (result: GetProviderFail) => void;
type GetProviderComplete = Object;
type GetProviderCompleteCallback = (result: GetProviderComplete) => void;
class GetProviderOptions extends UTSObject {
    service!: 'payment' | 'location' | 'oauth' | 'share';
    success: GetProviderSuccessCallback | null = null;
    fail: GetProviderFailCallback | null = null;
    complete: GetProviderCompleteCallback | null = null;
}
type GetProvider = (options: GetProviderOptions) => void;
type ProviderErrorCode = 110600;
interface IGetProviderFail extends IUniError {
    errCode: ProviderErrorCode;
}
const ProviderUniErrors: Map<ProviderErrorCode, string> = new Map([
    [
        110600,
        'Parameter service invalid.'
    ]
]);
class GetProviderFailImpl__1 extends UniError implements IGetProviderFail {
    errCode: ProviderErrorCode;
    constructor(errCode: ProviderErrorCode){
        super();
        this.errSubject = ProviderUniErrorSubject;
        this.errCode = errCode;
        this.errMsg = ProviderUniErrors[errCode] ?? "";
    }
}
const API_GET_PROVIDER = 'getProvider';
const API_GET_PROVIDER_SYNC = 'getProviderSync';
const SupportedProviderServiceList = [
    'oauth',
    'share',
    'payment',
    'push',
    'location'
];
function _getProviderSync(options: GetProviderOptions): "Parameter service invalid." | GetProviderSuccess {
    if (!SupportedProviderServiceList.includes(options.service)) {
        return 'Parameter service invalid.';
    }
    const providers = getUniProviders(options.service);
    const providerIds = providers.map((provider): string =>{
        return provider.id;
    });
    const result: GetProviderSuccess = {
        service: options.service,
        provider: providerIds,
        providers
    };
    return result;
}
const getProvider: GetProvider = defineAsyncApi<GetProviderOptions, GetProviderSuccess>(API_GET_PROVIDER, (options: GetProviderOptions, exec: ApiExecutor<GetProviderSuccess>): void =>{
    const res = _getProviderSync(options);
    if (typeof res === 'string') exec.reject(res);
    else exec.resolve(res);
}) as GetProvider;
const getProviderSync: GetProviderSync = defineSyncApi<GetProviderSyncSuccess>(API_GET_PROVIDER_SYNC, (options: GetProviderSyncOptions): GetProviderSyncSuccess =>{
    const res = _getProviderSync(options as GetProviderOptions);
    if (typeof res === 'string') throw new Error(res);
    return {
        service: res.service,
        providerIds: res.provider,
        providerObjects: res.providers
    } as GetProviderSyncSuccess;
}) as GetProviderSync;
export { GetProvider as GetProvider, GetProviderComplete as GetProviderComplete, GetProviderCompleteCallback as GetProviderCompleteCallback, GetProviderFail as GetProviderFail, GetProviderFailCallback as GetProviderFailCallback, GetProviderFailImpl as GetProviderFailImpl, GetProviderOptions as GetProviderOptions, GetProviderSuccess as GetProviderSuccess, GetProviderSuccessCallback as GetProviderSuccessCallback, GetProviderSync as GetProviderSync, GetProviderSyncOptions as GetProviderSyncOptions, GetProviderSyncSuccess as GetProviderSyncSuccess, IGetProviderFail as IGetProviderFail, ProviderErrorCode as ProviderErrorCode };
export { getProvider as getProvider };
export { getProviderSync as getProviderSync };
