import { getUserAgent } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UTSHarmony/index&1.0.0";
import { getUniApp } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UniNativeApp&1.0.0";
import { TinyEmitter as Emitter } from "@normalized:N&&&tiny-emitter/index&2.1.0";
interface UserAgent {
    fullUserAgent: string;
}
export class UniMP extends Emitter {
    constructor() {
        super();
    }
    get appId() {
        // TODO 开发日志使用了socket，此功能初始化时getMainApp仍为undefined。先通过此方式规避此问题
        return getUniApp()?.appid || 'HBuilder';
    }
    get userAgent() {
        return {
            fullUserAgent: getUserAgent()
        } as UserAgent;
    }
    get window() {
        return getUniApp()?.window;
    }
}
const currentMP = new UniMP();
export function getCurrentMP() {
    return currentMP;
}
