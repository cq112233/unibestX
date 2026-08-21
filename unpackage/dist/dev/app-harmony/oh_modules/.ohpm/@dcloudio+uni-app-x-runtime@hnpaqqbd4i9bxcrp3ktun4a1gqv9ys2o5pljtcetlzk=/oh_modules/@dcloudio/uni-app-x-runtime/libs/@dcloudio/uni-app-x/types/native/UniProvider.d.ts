/**
 * 服务供应商
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *            "osVer": "5.0",
 *            "uniVer": "x",
 *            "unixVer": "4.18"
 *        },
 *        "ios": {
 *            "osVer": "12.0",
 *            "uniVer": "x",
 *            "unixVer": "4.18"
 *   	  }
 *    }
 * }
 */
export interface UniProvider {
  /**
   * 服务供应商标识
   */
  readonly id: string,
  /**
   * 服务供应商描述
   */
  readonly description: string,
  /**
   * 判断服务供应商依赖的App是否安装（仅支持微信支付）
   * @deprecated 已废弃（仅为了兼容uni1的规范）
   */
  isAppExist: boolean
}
