import util from "@ohos:util";
import deviceInfo from "@ohos:deviceInfo";
import cryptoFramework from "@ohos:security.cryptoFramework";
import buffer from "@ohos:buffer";
import dataPreferences from "@ohos:data.preferences";
import { getAbilityContext } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/App&1.0.0";
const STORE_KEY_DEVICE_ID = 'deviceId';
/**
 * 应用与小程序不隔离的系统级存储
 */
let SystemStorage: dataPreferences.Preferences | null = null;
function createSystemRootStorage(): dataPreferences.Preferences {
    if (!SystemStorage) {
        SystemStorage = dataPreferences.getPreferencesSync(getAbilityContext()!, {
            name: `storage.system.root`,
        } as dataPreferences.Options);
    }
    return SystemStorage;
}
function md5(str: string): string {
    const md = cryptoFramework.createMd('MD5');
    md.updateSync({
        data: new Uint8Array(buffer.from(str, 'utf8').buffer),
    });
    return buffer.from(md.digestSync().data).toString('hex').toUpperCase();
}
export function getDeviceId() {
    const systemStorage = createSystemRootStorage();
    const systemStoreDeviceId = systemStorage.getSync(STORE_KEY_DEVICE_ID, '');
    if (systemStoreDeviceId) {
        return systemStoreDeviceId;
    }
    /**
     * 如下内容来自鸿蒙官方文档：
     * 开发者匿名设备标识符。
     * ODID值会在以下场景重新生成：
     * 手机恢复出厂设置。
     * 同一设备上同一个开发者的应用全部卸载后重新安装时。
     * ODID生成规则：
     * 同一设备上运行的同一个开发者的应用，ODID相同。
     * 同一个设备上不同开发者的应用，ODID不同。
     * 不同设备上同一个开发者的应用，ODID不同。
     * 不同设备上不同开发者的应用，ODID不同。
     * 说明：数据长度为37字节。
     */
    let deviceId = '';
    const ODID = deviceInfo.ODID;
    if (ODID) {
        deviceId = ODID;
    }
    else {
        deviceId = util.generateRandomUUID();
    }
    deviceId = md5(deviceId);
    systemStorage.putSync(STORE_KEY_DEVICE_ID, deviceId);
    systemStorage.flush();
    return deviceId;
}
