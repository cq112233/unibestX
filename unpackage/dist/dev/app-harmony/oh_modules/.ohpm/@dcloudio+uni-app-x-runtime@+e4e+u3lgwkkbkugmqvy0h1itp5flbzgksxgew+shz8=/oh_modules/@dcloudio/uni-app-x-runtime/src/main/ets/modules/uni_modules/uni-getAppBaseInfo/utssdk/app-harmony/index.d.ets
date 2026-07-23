import { UTSObject } from "@dcloudio/uni-app-framework";
declare class GetAppBaseInfoOptions extends UTSObject {
    filter: Array<string>;
}
declare class GetAppBaseInfoResult extends UTSObject {
    appId: string | null;
    appName: string | null;
    appVersion: string | null;
    appVersionCode: string | null;
    appLanguage: string | null;
    language: string | null;
    version: string | null;
    appWgtVersion: string | null;
    hostLanguage: string | null;
    hostVersion: string | null;
    hostName: string | null;
    hostPackageName: string | null;
    hostSDKVersion: string | null;
    hostTheme: string | null;
    isUniAppX: boolean | null;
    uniCompileVersion: string | null;
    uniCompilerVersion: string | null;
    uniPlatform: 'app' | 'web' | 'mp-weixin' | 'mp-alipay' | 'mp-baidu' | 'mp-toutiao' | 'mp-lark' | 'mp-qq' | 'mp-kuaishou' | 'mp-jd' | 'mp-360' | 'quickapp-webview' | 'quickapp-webview-union' | 'quickapp-webview-huawei' | null;
    uniRuntimeVersion: string | null;
    uniCompileVersionCode: number | null;
    uniCompilerVersionCode: number | null;
    uniRuntimeVersionCode: number | null;
    packageName: string | null;
    bundleName: string | null;
    bundleId: string | null;
    signature: string | null;
    appTheme: 'light' | 'dark' | 'auto' | null;
    channel: string | null;
}
type GetAppBaseInfo = (options?: GetAppBaseInfoOptions | null) => GetAppBaseInfoResult;
declare const getAppBaseInfo: GetAppBaseInfo;
export { GetAppBaseInfo as GetAppBaseInfo, GetAppBaseInfoOptions as GetAppBaseInfoOptions, GetAppBaseInfoResult as GetAppBaseInfoResult };
export { getAppBaseInfo as getAppBaseInfo };
