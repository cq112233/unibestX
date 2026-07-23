import { UTSObject } from "@dcloudio/uni-app-framework";
type OnAppCrashCallback = () => void;
type OnAppCrash = (callback: OnAppCrashCallback) => void;
type OffAppCrash = () => void;
declare class AppCrashInfo extends UTSObject {
    id: string;
    file: string;
    time: string;
}
type GetAppCrashInfo = () => Array<AppCrashInfo> | null;
type DeleteAppCrashInfo = (id: string | null) => void;
type CreateAppCrash = () => void;
declare const __onAppCrash: OnAppCrash;
declare const __offAppCrash: OffAppCrash;
declare const __getAppCrashInfo: GetAppCrashInfo;
declare const __deleteAppCrashInfo: DeleteAppCrashInfo;
declare const __createAppCrash: CreateAppCrash;
export { OnAppCrashCallback as OnAppCrashCallback, OnAppCrash as OnAppCrash, OffAppCrash as OffAppCrash, AppCrashInfo as AppCrashInfo, GetAppCrashInfo as GetAppCrashInfo, DeleteAppCrashInfo as DeleteAppCrashInfo, CreateAppCrash as CreateAppCrash };
export { __onAppCrash as __onAppCrash };
export { __offAppCrash as __offAppCrash };
export { __getAppCrashInfo as __getAppCrashInfo };
export { __deleteAppCrashInfo as __deleteAppCrashInfo };
export { __createAppCrash as __createAppCrash };
