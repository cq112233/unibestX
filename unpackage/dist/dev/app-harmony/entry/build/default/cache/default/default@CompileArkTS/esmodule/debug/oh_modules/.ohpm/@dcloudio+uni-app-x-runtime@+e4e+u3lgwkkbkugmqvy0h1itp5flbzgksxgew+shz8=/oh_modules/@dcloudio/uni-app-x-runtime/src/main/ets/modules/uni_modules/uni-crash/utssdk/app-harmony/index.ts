import { UTSObject, UTS, UTSHarmony, defineSyncApi } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import deviceInfo from "@ohos:deviceInfo";
import fs from "@ohos:file.fs";
import fileUri from "@ohos:file.fileuri";
import { getAbilityContext, uni } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import hiAppEvent from "@ohos:hiviewdfx.hiAppEvent";
import { triggerNativeCrash } from "@normalized:N&&&uni_modules__uni_crash_lib/index&1.0.0";
import util from "@ohos:util";
import buffer from "@ohos:buffer";
type OnAppCrashCallback = () => void;
type OnAppCrash = (callback: OnAppCrashCallback) => void;
type OffAppCrash = () => void;
class AppCrashInfo extends UTSObject {
    id!: string;
    file!: string;
    time!: string;
}
type GetAppCrashInfo = () => Array<AppCrashInfo> | null;
type DeleteAppCrashInfo = (id: string | null) => void;
type CreateAppCrash = () => void;
try {
    if (deviceInfo.sdkApiVersion >= 20) {
        let crashConfigParams: Record<string, hiAppEvent.ParamType> = {
            "extend_pc_lr_printing": true,
            "simplify_vma_printing": true
        };
        hiAppEvent.setEventConfig(hiAppEvent.event.APP_CRASH, crashConfigParams);
    }
}
catch (e) { }
const __UNI_APP_HARMONY_CRASH__: string = '__U_A_HARMONY_C__';
const callbacks: Array<OnAppCrashCallback> = [];
function getAppCrashInfo(): Array<AppCrashInfo> {
    const jsonObject: any = uni.getStorageSync(__UNI_APP_HARMONY_CRASH__) as any;
    if (!jsonObject)
        return [];
    return UTS.JSON.parse(UTS.JSON.stringify(jsonObject))! as Array<AppCrashInfo>;
}
function setAppCrashInfo(arr: Array<AppCrashInfo>) {
    uni.setStorageSync(__UNI_APP_HARMONY_CRASH__, arr);
}
const watcher: hiAppEvent.Watcher = {
    name: "uniAppCrashWatcher",
    appEventFilters: [
        {
            domain: hiAppEvent.domain.OS,
            names: [
                hiAppEvent.event.APP_CRASH
            ]
        }
    ],
    onReceive: (domain: string, appEventGroups: Array<hiAppEvent.AppEventGroup>) => {
        for (const eventGroup of appEventGroups) {
            for (const eventInfo of eventGroup.appEventInfos) {
                const params = eventInfo.params;
                const time = (params['time'] as number).toString();
                const external_log: Array<string> = params['external_log'];
                if (!Array.isArray(external_log) || external_log.length === 0)
                    return;
                const filePath = external_log[0];
                let savePath = filePath;
                try {
                    const cachePath = (getAbilityContext() ?? getContext()).cacheDir;
                    const saveDirPath = `${cachePath}/app_crash_cache`;
                    let canAccess = false;
                    try {
                        canAccess = fs.accessSync(saveDirPath);
                    }
                    catch (error) { }
                    if (!canAccess) {
                        fs.mkdirSync(saveDirPath, true);
                    }
                    savePath = `${saveDirPath}/${new fileUri.FileUri(fileUri.getUriFromPath(filePath)).name}`;
                    fs.moveFileSync(filePath, savePath);
                }
                catch (e) { }
                const arr = getAppCrashInfo();
                arr.push({
                    id: util.getHash(buffer.from(savePath)).toString(),
                    time,
                    file: savePath
                } as AppCrashInfo);
                setAppCrashInfo(arr);
                callbacks.forEach((cb) => cb());
            }
        }
    }
};
UTSHarmony.onAppAbilityWindowStageCreate(() => {
    hiAppEvent.addWatcher(watcher);
});
const __onAppCrash: OnAppCrash = defineSyncApi('__onAppCrash', (callback: OnAppCrashCallback | null = null) => {
    if (callback != null) {
        callbacks.push(callback);
    }
}) as OnAppCrash;
const __offAppCrash: OffAppCrash = defineSyncApi('__offAppCrash', () => {
    callbacks.length = 0;
}) as OffAppCrash;
const __getAppCrashInfo: GetAppCrashInfo = defineSyncApi('__getAppCrashInfo', (): AppCrashInfo[] => {
    return getAppCrashInfo();
}) as GetAppCrashInfo;
const __deleteAppCrashInfo: DeleteAppCrashInfo = defineSyncApi('__deleteAppCrashInfo', (id: string | null = null) => {
    const arr = getAppCrashInfo();
    if (typeof id === 'string') {
        const index = arr.findIndex((item): boolean => item.id === id);
        if (index > -1) {
            const currentAppCrash = arr[index];
            fs.unlinkSync(currentAppCrash.file);
            arr.splice(index, 1);
            setAppCrashInfo(arr);
        }
    }
    else {
        arr.forEach((item) => {
            fs.unlink(item.file);
        });
        setAppCrashInfo([]);
    }
}) as DeleteAppCrashInfo;
const __createAppCrash: CreateAppCrash = defineSyncApi('__createAppCrash', () => {
    triggerNativeCrash();
}) as CreateAppCrash;
export { AppCrashInfo as AppCrashInfo };
export type { OnAppCrashCallback as OnAppCrashCallback, OnAppCrash as OnAppCrash, OffAppCrash as OffAppCrash, GetAppCrashInfo as GetAppCrashInfo, DeleteAppCrashInfo as DeleteAppCrashInfo, CreateAppCrash as CreateAppCrash };
export { __onAppCrash as __onAppCrash };
export { __offAppCrash as __offAppCrash };
export { __getAppCrashInfo as __getAppCrashInfo };
export { __deleteAppCrashInfo as __deleteAppCrashInfo };
export { __createAppCrash as __createAppCrash };
