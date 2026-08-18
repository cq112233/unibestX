/**
 * colorWithString
 * @description 将颜色字符串转换为鸿蒙平台对应的颜色值
 * @param {string} colorString
 * @return {string}
 * @uniPlatform
 * {
 *   "app", {
 *     "android", {
 *       "osVer", "x",
 *       "uniVer", "x",
 *       "unixVer", "x"
 *     },
 *     "ios", {
 *       "osVer", "x",
 *       "uniVer", "x",
 *       "unixVer", "x"
 *     },
 *    "harmony", {
 *      "osVer", "3.0",
 *      "uniVer", "5.21",
 *      "uniUtsPlugin", "5.21",
 *      "unixVer", "5.21",
 *      "unixUtsPlugin", "5.21",
 *      "unixVaporVer", "5.21",
 *      "unixVaporUtsPlugin", "5.21"
 *    }
 *   }
 * }
 */
export declare function colorWithString(colorString: string): string;
