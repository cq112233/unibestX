import connection from "@ohos:net.connection";
import radio from "@ohos:telephony.radio";
import type { BusinessError } from "@ohos:base";
import { UTSObject, UTSHarmony, defineAsyncApi, defineSyncApi } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { UniError, ApiExecutor } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import { onNativePageReady, EventHub } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
type GetNetworkType = (options: GetNetworkTypeOptions) => void;
class GetNetworkTypeSuccess extends UTSObject {
    networkType!: string;
}
type GetNetworkTypeSuccessCallback = (result: GetNetworkTypeSuccess) => void;
type GetNetworkTypeFail = UniError;
type GetNetworkTypeFailCallback = (result: GetNetworkTypeFail) => void;
type GetNetworkTypeComplete = Object;
type GetNetworkTypeCompleteCallback = (result: GetNetworkTypeComplete) => void;
class GetNetworkTypeOptions extends UTSObject {
    success: GetNetworkTypeSuccessCallback | null = null;
    fail: GetNetworkTypeFailCallback | null = null;
    complete: GetNetworkTypeCompleteCallback | null = null;
}
class OnNetworkStatusChangeCallbackResult extends UTSObject {
    isConnected!: boolean;
    networkType!: string;
}
type OnNetworkStatusChangeCallback = (result: OnNetworkStatusChangeCallbackResult) => void;
type OnNetworkStatusChange = (listener: OnNetworkStatusChangeCallback) => number;
type OffNetworkStatusChange = (listener?: number | OnNetworkStatusChangeCallback | null) => void;
const API_GET_NETWORK_TYPE = 'getNetworkType';
const NetworkStatusChangeEventHub = new EventHub();
const PERMISSIONS = [
    'ohos.permission.GET_NETWORK_INFO'
];
enum NetworkinfoType__1 {
    UNKNOW = 0,
    NONE = 1,
    ETHERNET = 2,
    WIFI = 3,
    "2G" = 4,
    "3G" = 5,
    "4G" = 6,
    "5G" = 7
}
function signalType(resultObj: radio.NetworkType): NetworkinfoType__1 {
    switch (resultObj) {
        case radio.NetworkType.NETWORK_TYPE_GSM:
        case radio.NetworkType.NETWORK_TYPE_CDMA:
            return NetworkinfoType__1['2G'];
        case radio.NetworkType.NETWORK_TYPE_WCDMA:
        case radio.NetworkType.NETWORK_TYPE_TDSCDMA:
            return NetworkinfoType__1['3G'];
        case radio.NetworkType.NETWORK_TYPE_LTE:
            return NetworkinfoType__1['4G'];
        case radio.NetworkType.NETWORK_TYPE_NR:
            return NetworkinfoType__1['5G'];
        case radio.NetworkType.NETWORK_TYPE_UNKNOWN:
            return NetworkinfoType__1.UNKNOW;
        default:
            return NetworkinfoType__1.NONE;
    }
}
function networkGetType(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        UTSHarmony.requestSystemPermission(PERMISSIONS, (allRight: boolean) => {
            if (allRight) {
                try {
                    radio.getPrimarySlotId().then((slotId: number) => radio.getSignalInformationSync(slotId)).then((signalInformation: Array<radio.SignalInformation>) => {
                        const data = signalInformation[0];
                        if (data && data.signalType) {
                            resolve(signalType(data.signalType));
                        }
                        else {
                            resolve(NetworkinfoType__1.NONE);
                        }
                    });
                }
                catch (error) {
                    reject(error as BusinessError);
                }
            }
            else {
                reject(new Error('permission denied'));
            }
        }, () => reject(new Error('permission denied, possibly not configured or not authorized')));
    });
}
class GlobalContext {
    netList: connection.NetHandle[] = [];
    netHandle: connection.NetHandle | null = null;
    private constructor() { }
    private static instance: GlobalContext;
    public static getContext(): GlobalContext {
        if (!GlobalContext.instance) {
            GlobalContext.instance = new GlobalContext();
        }
        return GlobalContext.instance;
    }
}
function getCurrentType(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        UTSHarmony.requestSystemPermission(PERMISSIONS, (allRight: boolean) => {
            if (allRight) {
                try {
                    connection.getDefaultNet().then((data: connection.NetHandle) => {
                        if (data) {
                            GlobalContext.getContext().netHandle = data;
                            connection.getNetCapabilities(GlobalContext.getContext().netHandle!).then((data: connection.NetCapabilities) => {
                                const bearerTypes: Set<number> = new Set(data.bearerTypes);
                                const bearerTypesNum = Array.from(bearerTypes.values());
                                for (const item of bearerTypesNum) {
                                    if (item == connection.NetBearType.BEARER_CELLULAR) {
                                        networkGetType().then(resolve).catch(reject);
                                    }
                                    else if (item == connection.NetBearType.BEARER_WIFI) {
                                        resolve(NetworkinfoType__1.WIFI);
                                    }
                                    else if (item == connection.NetBearType.BEARER_ETHERNET) {
                                        resolve(NetworkinfoType__1.ETHERNET);
                                    }
                                    else {
                                        resolve(NetworkinfoType__1.UNKNOW);
                                    }
                                }
                            }).catch((err: BusinessError) => {
                                reject(err);
                            });
                        }
                    }).catch((err: BusinessError) => {
                        reject(err);
                    });
                }
                catch (error) {
                    reject(error);
                }
            }
            else {
                reject(new Error('permission denied'));
            }
        }, () => reject(new Error('permission denied, possibly not configured or not authorized')));
    });
}
class Network {
    static netConnection: connection.NetConnection | null = null;
    constructor() {
        Network.netConnection = connection.createNetConnection();
    }
    static ohoSubscribe() {
        if (!Network.netConnection) {
            Network.netConnection = connection.createNetConnection();
        }
        UTSHarmony.requestSystemPermission(PERMISSIONS, (allRight: boolean) => {
            if (allRight && Network.netConnection) {
                Network.netConnection.register((err: BusinessError) => { });
                Network.netConnection.on('netCapabilitiesChange', (capability: connection.NetCapabilityInfo) => {
                    const NetBearType = capability?.netCap?.bearerTypes[0];
                    let networkType = '';
                    switch (NetBearType) {
                        case connection.NetBearType.BEARER_CELLULAR:
                            getCurrentType().then((type: number) => {
                                invokeOnNetworkStatusChange(NetworkinfoType__1[type]);
                            }).catch(() => {
                                invokeOnNetworkStatusChange(NetworkinfoType__1[1]);
                            });
                            return;
                        case connection.NetBearType.BEARER_WIFI:
                            networkType = NetworkinfoType__1[3];
                            break;
                        case connection.NetBearType.BEARER_ETHERNET:
                            networkType = NetworkinfoType__1[2];
                            break;
                        default:
                            networkType = NetworkinfoType__1[1];
                    }
                    invokeOnNetworkStatusChange(networkType);
                });
                Network.netConnection.on('netLost', (netLost: connection.NetHandle) => {
                    invokeOnNetworkStatusChange(NetworkinfoType__1[1]);
                });
            }
        });
    }
}
new Network();
onNativePageReady().then(() => {
    Network.ohoSubscribe();
});
const getNetworkType: GetNetworkType = defineAsyncApi<GetNetworkTypeOptions, GetNetworkTypeSuccess>(API_GET_NETWORK_TYPE, (options: GetNetworkTypeOptions, res: ApiExecutor<GetNetworkTypeSuccess>) => {
    getCurrentType().then((type: number) => {
        res.resolve({
            networkType: NetworkinfoType__1[type].toLocaleLowerCase()
        } as GetNetworkTypeSuccess);
    }).catch((err: BusinessError) => {
        if (err.code === 2100001) {
            res.resolve({
                networkType: NetworkinfoType__1[1].toLocaleLowerCase()
            } as GetNetworkTypeSuccess);
        }
        else {
            res.reject(err.message);
        }
    });
}) as GetNetworkType;
function invokeOnNetworkStatusChange(networkType: string) {
    NetworkStatusChangeEventHub.emit('networkStatusChange', {
        isConnected: networkType !== NetworkinfoType__1[1],
        networkType: networkType.toLocaleLowerCase()
    } as OnNetworkStatusChangeCallbackResult);
}
const onNetworkStatusChange: OnNetworkStatusChange = defineSyncApi<number>('onNetworkStatusChange', (callback: Function): number => {
    return NetworkStatusChangeEventHub.on('networkStatusChange', callback);
}) as OnNetworkStatusChange;
const offNetworkStatusChange: OffNetworkStatusChange = defineSyncApi<void>('offNetworkStatusChange', (callback: number | Function | null): void => {
    return NetworkStatusChangeEventHub.off('networkStatusChange', callback);
}) as OffNetworkStatusChange;
export { GetNetworkTypeOptions as GetNetworkTypeOptions, GetNetworkTypeSuccess as GetNetworkTypeSuccess, OnNetworkStatusChangeCallbackResult as OnNetworkStatusChangeCallbackResult };
export type { GetNetworkType as GetNetworkType, GetNetworkTypeComplete as GetNetworkTypeComplete, GetNetworkTypeCompleteCallback as GetNetworkTypeCompleteCallback, GetNetworkTypeFail as GetNetworkTypeFail, GetNetworkTypeFailCallback as GetNetworkTypeFailCallback, GetNetworkTypeSuccessCallback as GetNetworkTypeSuccessCallback, OffNetworkStatusChange as OffNetworkStatusChange, OnNetworkStatusChange as OnNetworkStatusChange, OnNetworkStatusChangeCallback as OnNetworkStatusChangeCallback };
export { getNetworkType as getNetworkType };
export { onNetworkStatusChange as onNetworkStatusChange };
export { offNetworkStatusChange as offNetworkStatusChange };
