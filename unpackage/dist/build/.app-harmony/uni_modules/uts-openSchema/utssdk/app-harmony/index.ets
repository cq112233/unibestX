import OpenLinkOptions from '@ohos.app.ability.OpenLinkOptions';
import { UTS } from "@dcloudio/uni-app-x-runtime";
import { bundleManager, common } from '@kit.AbilityKit';
import { getAbilityContext } from "@dcloudio/uni-app-x-runtime";
type OpenSchema = (url: string) => void;
type CanOpenURL = (url: string) => boolean;
const openSchema: OpenSchema = (url: string): void =>{
    (getAbilityContext() as common.UIAbilityContext)?.openLink(url, {
        appLinkingOnly: false
    } as OpenLinkOptions);
};
const canOpenURL: CanOpenURL = (url: string): boolean =>{
    try {
        return bundleManager.canOpenLink(url);
    } catch (error) {
        UTS.console.error('[uts-openSchema] url param Error：', UTS.JSON.stringify(url));
        return false;
    }
};
export { openSchema as openSchema };
export { canOpenURL as canOpenURL };
