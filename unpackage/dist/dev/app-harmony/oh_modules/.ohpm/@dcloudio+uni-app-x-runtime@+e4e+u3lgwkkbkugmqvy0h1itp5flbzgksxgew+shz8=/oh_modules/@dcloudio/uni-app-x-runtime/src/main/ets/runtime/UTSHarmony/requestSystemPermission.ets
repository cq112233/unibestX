import abilityAccessCtrl from '@ohos.abilityAccessCtrl'
import type { Permissions } from '@ohos.abilityAccessCtrl'
import { getAbilityContext } from '../App'

function tryExec(fn: ((...args: ESObject[]) => void) | undefined, args: ESObject[]) {
  if (!fn) {
    return
  }
  try {
    fn(...args)
  } catch (error) {
    console.error(error)
  }
}

/**
 * 用户允许了全部权限请求，会通过 success回调通知调用者，并且此时allRight参数为 true
 * 用户拒绝了全部权限请求，会通过 fail 回调通知调用者，doNotAskAgain 参数标识了用户拒绝时是否选择了不再询问
 * 用户允许了部分请求，拒绝了部分权限请求,此时既会调用success也会调用fail。由其中的 string数组参数 标识具体被拒绝/允许的权限
 */

/**
 * requestSystemPermission
 * @description 请求系统权限
 * @param {OnWindowStageCreate} callback
 * @return {void}
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
 *      "uniUtsPlugin": "4.31",
 *      "uniVer": "4.31",
 *      "unixVer": "x"
 *    }
 *   }
 * }
 */
export function requestSystemPermission(
  permissions: string[],
  success?: (allRight: boolean, grantedList: string[]) => void,
  fail?: (doNotAskAgain: boolean, grantedList: string[]) => void,
): void {
  const atm = abilityAccessCtrl.createAtManager()
  atm.requestPermissionsFromUser(
    getAbilityContext()!,
    permissions as Permissions[],
    (err, data) => {
      if (err) {
        fail && fail(false, [])
        return
      }
      const grantedList = permissions.filter((_, index) => {
        return data.authResults[index] === 0
      })
      const doNotAskAgain =
        data.dialogShownResults && data.dialogShownResults.some(v => !v)
      if (grantedList.length === permissions.length) {
        tryExec(success, [true, grantedList])
      } else if (grantedList.length === 0) {
        tryExec(fail, [doNotAskAgain, grantedList])
      } else {
        tryExec(success, [false, grantedList])
        tryExec(fail, [doNotAskAgain, grantedList])
      }
    },
  )
}
