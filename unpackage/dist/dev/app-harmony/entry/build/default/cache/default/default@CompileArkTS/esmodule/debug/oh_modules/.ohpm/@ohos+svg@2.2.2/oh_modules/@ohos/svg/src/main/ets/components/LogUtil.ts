import hilog from "@ohos:hilog";
export default class LogUtil {
    static TAG = '[ohos-svg]:';
    static DOMAIN = 0xFF11;
    static format: string = "%{public}s";
    static debug(message, ...args) {
        hilog.debug(LogUtil.DOMAIN, LogUtil.TAG, message, args);
    }
    static info(message, ...args) {
        hilog.info(LogUtil.DOMAIN, LogUtil.TAG, message, args);
    }
    static warn(message, ...args) {
        hilog.warn(LogUtil.DOMAIN, LogUtil.TAG, message, args);
    }
    static error(message, ...args) {
        hilog.error(LogUtil.DOMAIN, LogUtil.TAG, message, args);
    }
}
