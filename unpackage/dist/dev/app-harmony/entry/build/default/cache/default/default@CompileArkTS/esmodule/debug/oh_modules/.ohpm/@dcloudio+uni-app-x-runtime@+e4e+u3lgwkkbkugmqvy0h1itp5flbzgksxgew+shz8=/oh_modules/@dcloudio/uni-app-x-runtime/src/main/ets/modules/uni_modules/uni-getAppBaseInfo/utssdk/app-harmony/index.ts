import bundleManager from "@ohos:bundle.bundleManager";
import I18n from "@ohos:i18n";
import { UTSObject, defineSyncApi, UTSHarmony } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
class GetAppBaseInfoOptions extends UTSObject {
    filter!: Array<string>;
}
class GetAppBaseInfoResult extends UTSObject {
    appId: string | null = null;
    appName: string | null = null;
    appVersion: string | null = null;
    appVersionCode: string | null = null;
    appLanguage: string | null = null;
    language: string | null = null;
    version: string | null = null;
    appWgtVersion: string | null = null;
    hostLanguage: string | null = null;
    hostVersion: string | null = null;
    hostName: string | null = null;
    hostPackageName: string | null = null;
    hostSDKVersion: string | null = null;
    hostTheme: string | null = null;
    isUniAppX: boolean | null = null;
    uniCompileVersion: string | null = null;
    uniCompilerVersion: string | null = null;
    uniPlatform: 'app' | 'web' | 'mp-weixin' | 'mp-alipay' | 'mp-baidu' | 'mp-toutiao' | 'mp-lark' | 'mp-qq' | 'mp-kuaishou' | 'mp-jd' | 'mp-360' | 'quickapp-webview' | 'quickapp-webview-union' | 'quickapp-webview-huawei' | null = null;
    uniRuntimeVersion: string | null = null;
    uniCompileVersionCode: number | null = null;
    uniCompilerVersionCode: number | null = null;
    uniRuntimeVersionCode: number | null = null;
    packageName: string | null = null;
    bundleName: string | null = null;
    bundleId: string | null = null;
    signature: string | null = null;
    appTheme: 'light' | 'dark' | 'auto' | null = null;
    channel: string | null = null;
}
type GetAppBaseInfo = (options?: GetAppBaseInfoOptions | null) => GetAppBaseInfoResult;
const API_GET_APP_BASE_INFO = 'getAppBaseInfo';
function getBundleInfoOnce(): () => bundleManager.BundleInfo {
    let bundleInfo: bundleManager.BundleInfo | null = null;
    return (): bundleManager.BundleInfo => {
        if (bundleInfo) {
            return bundleInfo;
        }
        bundleInfo = bundleManager.getBundleInfoForSelfSync(bundleManager.BundleFlag.GET_BUNDLE_INFO_DEFAULT);
        return bundleInfo;
    };
}
const getBundleInfo = getBundleInfoOnce();
interface IAppBaseInfoAppVersion {
    name: string;
    code: string;
}
const getAppBaseInfo: GetAppBaseInfo = defineSyncApi<GetAppBaseInfoResult>(API_GET_APP_BASE_INFO, (): GetAppBaseInfoResult => {
    const appVersion = UTSHarmony.getAppVersion() as IAppBaseInfoAppVersion;
    const appLanguage = I18n.System.getAppPreferredLanguage();
    const uniCompilerVersion: string = UTSHarmony.getUniCompilerVersion() as string;
    const uniRuntimeVersion: string = UTSHarmony.getUniRuntimeVersion();
    return {
        appId: UTSHarmony.getAppId() as string,
        appLanguage,
        appName: UTSHarmony.getAppName() as string,
        appTheme: UTSHarmony.getAppTheme() as string,
        appVersion: appVersion.name,
        appVersionCode: appVersion.code,
        appWgtVersion: appVersion.name,
        hostLanguage: I18n.System.getSystemLanguage(),
        isUniAppX: UTSHarmony.isUniAppX() as boolean,
        packageName: getBundleInfo().name,
        bundleName: getBundleInfo().name,
        uniCompilerVersion: uniCompilerVersion,
        uniCompilerVersionCode: parseFloat(uniCompilerVersion),
        uniRuntimeVersion: uniRuntimeVersion,
        uniRuntimeVersionCode: parseFloat(uniRuntimeVersion),
        uniPlatform: 'app'
    } as GetAppBaseInfoResult;
}) as GetAppBaseInfo;
export { GetAppBaseInfoOptions as GetAppBaseInfoOptions, GetAppBaseInfoResult as GetAppBaseInfoResult };
export type { GetAppBaseInfo as GetAppBaseInfo };
export { getAppBaseInfo as getAppBaseInfo };
