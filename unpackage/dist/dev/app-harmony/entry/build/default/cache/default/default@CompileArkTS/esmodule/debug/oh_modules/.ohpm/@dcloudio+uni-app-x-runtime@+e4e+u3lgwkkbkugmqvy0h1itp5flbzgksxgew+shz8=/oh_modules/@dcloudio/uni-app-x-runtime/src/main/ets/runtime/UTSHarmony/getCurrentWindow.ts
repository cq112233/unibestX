import { getUniApp } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UniNativeApp&1.0.0";
/**
 * getCurrentWindow
 * @description 获取当前原生窗口对象
 * @uniPlatform
 * {
 *   "app": {
 *     "android": {
 *       "osVer": "x",
 *       "uniVer": "x",
 *       "unixVer": "x"
 *     },
 *     "ios": {
 *       "osVer": "x",
 *       "uniVer": "x",
 *       "unixVer": "x"
 *     },
 *    "harmony": {
 *      "osVer": "3.0",
 *      "uniUtsPlugin": "4.50",
 *      "uniVer": "4.50",
 *      "unixVer": "x"
 *    }
 *   }
 * }
 */
export function getCurrentWindow() {
    return getUniApp()!.window;
}
