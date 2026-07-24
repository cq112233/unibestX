import { TinyEmitter as Emitter } from 'tiny-emitter';
interface UserAgent {
    fullUserAgent: string;
}
export declare class UniMP extends Emitter {
    constructor();
    get appId(): string;
    get userAgent(): UserAgent;
    get window(): import("@dcloudio/uni-app-x-runtime/../../../../../Downloads/command-line-tools/sdk/default/openharmony/ets/api/@ohos.window").default.Window;
}
export declare function getCurrentMP(): UniMP;
export {};
