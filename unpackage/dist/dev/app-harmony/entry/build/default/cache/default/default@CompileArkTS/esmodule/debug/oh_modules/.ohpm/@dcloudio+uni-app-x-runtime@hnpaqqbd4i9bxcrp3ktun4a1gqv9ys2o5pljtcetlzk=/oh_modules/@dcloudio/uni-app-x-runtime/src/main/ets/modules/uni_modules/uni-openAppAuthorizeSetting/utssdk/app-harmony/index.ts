import type Want from "@ohos:app.ability.Want";
import type common from "@ohos:app.ability.common";
import bundleManager from "@ohos:bundle.bundleManager";
import { UTSObject, defineAsyncApi, UTSHarmony } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { ApiExecutor } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
type OpenAppAuthorizeSetting = (options: OpenAppAuthorizeSettingOptions) => void;
class OpenAppAuthorizeSettingSuccess extends UTSObject {
    errMsg!: string;
}
type OpenAppAuthorizeSettingSuccessCallback = (result: OpenAppAuthorizeSettingSuccess) => void;
class OpenAppAuthorizeSettingFail extends UTSObject {
    errMsg!: string;
}
type OpenAppAuthorizeSettingFailCallback = (result: OpenAppAuthorizeSettingFail) => void;
class OpenAppAuthorizeSettingComplete extends UTSObject {
    errMsg!: string;
}
type OpenAppAuthorizeSettingCompleteCallback = (result: OpenAppAuthorizeSettingComplete) => void;
class OpenAppAuthorizeSettingOptions extends UTSObject {
    success: OpenAppAuthorizeSettingSuccessCallback | null = null;
    fail: OpenAppAuthorizeSettingFailCallback | null = null;
    complete: OpenAppAuthorizeSettingCompleteCallback | null = null;
}
const API_OPEN_APP_AUTHORIZE_SETTING = 'openAppAuthorizeSetting';
const openAppAuthorizeSetting: OpenAppAuthorizeSetting = defineAsyncApi<OpenAppAuthorizeSettingOptions, OpenAppAuthorizeSettingSuccess>(API_OPEN_APP_AUTHORIZE_SETTING, (options: OpenAppAuthorizeSettingOptions, exec: ApiExecutor<OpenAppAuthorizeSettingSuccess>) => {
    const want: Want = {
        bundleName: 'com.huawei.hmos.settings',
        abilityName: 'com.huawei.hmos.settings.MainAbility',
        uri: 'application_info_entry',
        parameters: {
            pushParams: bundleManager.getBundleInfoForSelfSync(bundleManager.BundleFlag.GET_BUNDLE_INFO_DEFAULT).name
        }
    } as Want;
    const context = UTSHarmony.getUIAbilityContext() as common.UIAbilityContext;
    context.startAbility(want).then(() => {
        exec.resolve({
            errMsg: ''
        } as OpenAppAuthorizeSettingSuccess);
    }, (err: Error) => {
        exec.reject(err.message);
    });
}) as OpenAppAuthorizeSetting;
export { OpenAppAuthorizeSettingComplete as OpenAppAuthorizeSettingComplete, OpenAppAuthorizeSettingFail as OpenAppAuthorizeSettingFail, OpenAppAuthorizeSettingOptions as OpenAppAuthorizeSettingOptions, OpenAppAuthorizeSettingSuccess as OpenAppAuthorizeSettingSuccess };
export type { OpenAppAuthorizeSetting as OpenAppAuthorizeSetting, OpenAppAuthorizeSettingCompleteCallback as OpenAppAuthorizeSettingCompleteCallback, OpenAppAuthorizeSettingFailCallback as OpenAppAuthorizeSettingFailCallback, OpenAppAuthorizeSettingSuccessCallback as OpenAppAuthorizeSettingSuccessCallback };
export { openAppAuthorizeSetting as openAppAuthorizeSetting };
