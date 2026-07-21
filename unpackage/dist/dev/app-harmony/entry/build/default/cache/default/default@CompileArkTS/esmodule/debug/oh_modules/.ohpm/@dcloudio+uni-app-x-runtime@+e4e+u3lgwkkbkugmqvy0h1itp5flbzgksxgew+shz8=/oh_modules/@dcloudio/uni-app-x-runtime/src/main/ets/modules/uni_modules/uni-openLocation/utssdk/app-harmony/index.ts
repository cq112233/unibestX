import type OpenLinkOptions from "@ohos:app.ability.OpenLinkOptions";
import { UTSObject, UTS, UniError, uni } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { IUniError, OpenDialogPageOptions } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import bundleManager from "@ohos:bundle.bundleManager";
import type common from "@ohos:app.ability.common";
import { getAbilityContext } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
type OpenLocationErrorCode = 4;
interface OpenLocationSuccess {
    errMsg: string;
}
type OpenLocationSuccessCallback = (result: OpenLocationSuccess) => void;
interface OpenLocationFail extends IUniError {
    errCode: OpenLocationErrorCode;
}
type OpenLocationFailCallback = (result: OpenLocationFail) => void;
type OpenLocationComplete = Object;
type OpenLocationCompleteCallback = (result: OpenLocationComplete) => void;
class OpenLocationOptions extends UTSObject {
    latitude!: number;
    longitude!: number;
    scale: number | null = null;
    name: string | null = null;
    address: string | null = null;
    success: OpenLocationSuccessCallback | null = null;
    fail: OpenLocationFailCallback | null = null;
    complete: OpenLocationCompleteCallback | null = null;
}
type OpenLocation = (options: OpenLocationOptions) => void;
class OpenLocationSuccessImpl implements OpenLocationSuccess {
    errMsg: string;
    constructor(errMsg: string = 'openLocation:ok') {
        this.errMsg = errMsg;
    }
}
const UniErrorSubject = 'uni-openLocation';
const UniErrors: Map<OpenLocationErrorCode, string> = new Map([
    [
        4,
        'internal error'
    ]
]);
class OpenLocationFailImpl extends UniError implements OpenLocationFail {
    errCode: OpenLocationErrorCode;
    constructor(errCode: OpenLocationErrorCode) {
        super();
        this.errSubject = UniErrorSubject;
        this.errCode = errCode;
        this.errMsg = UTS.mapGet(UniErrors, errCode) ?? "";
    }
}
export { OpenLocationOptions as OpenLocationOptions, OpenLocationSuccessImpl as OpenLocationSuccessImpl };
export type { OpenLocation as OpenLocation, OpenLocationSuccess as OpenLocationSuccess, OpenLocationFail as OpenLocationFail, OpenLocationComplete as OpenLocationComplete, OpenLocationErrorCode as OpenLocationErrorCode };
type OpenSchema = (url: string) => void;
type CanOpenURL = (url: string) => boolean;
const openSchema: OpenSchema = (url: string): void => {
    (getAbilityContext() as common.UIAbilityContext)?.openLink(url, {
        appLinkingOnly: false
    } as OpenLinkOptions);
};
const canOpenURL: CanOpenURL = (url: string): boolean => {
    try {
        return bundleManager.canOpenLink(url);
    }
    catch (error) {
        UTS.console.error('[uni-openLocation] url param error:', UTS.JSON.stringify(url));
        return false;
    }
};
const openLocation: OpenLocation = (options: OpenLocationOptions) => {
    const uuid = `${Date.now()}${Math.floor(Math.random() * 1e7)}`;
    const baseEventName = `uni_open_location_${uuid}`;
    const readyEventName = `${baseEventName}_ready`;
    const optionsEventName = `${baseEventName}_options`;
    const successEventName = `${baseEventName}_success`;
    const failEventName = `${baseEventName}_fail`;
    uni.$on(readyEventName, () => {
        uni.$emit(optionsEventName, UTS.JSON.parse(UTS.JSON.stringify(options)));
    });
    uni.$on(successEventName, () => {
        const res = new OpenLocationSuccessImpl();
        options.success?.(res);
        options.complete?.(res);
    });
    uni.$on(failEventName, (errCode: OpenLocationErrorCode) => {
        const res = new OpenLocationFailImpl(errCode);
        options.fail?.(res);
        options.complete?.(res);
    });
    uni.openDialogPage({
        url: `uni:openLocation?readyEventName=${readyEventName}&optionsEventName=${optionsEventName}&successEventName=${successEventName}&failEventName=${failEventName}`,
        triggerParentHide: true,
        fail(err) {
            const res = new OpenLocationFailImpl(4);
            options.fail?.(res);
            options.complete?.(res);
            uni.$off(readyEventName);
            uni.$off(successEventName);
            uni.$off(failEventName);
        }
    } as OpenDialogPageOptions);
};
export { openSchema as openSchema };
export { canOpenURL as canOpenURL };
export { openLocation as openLocation };
