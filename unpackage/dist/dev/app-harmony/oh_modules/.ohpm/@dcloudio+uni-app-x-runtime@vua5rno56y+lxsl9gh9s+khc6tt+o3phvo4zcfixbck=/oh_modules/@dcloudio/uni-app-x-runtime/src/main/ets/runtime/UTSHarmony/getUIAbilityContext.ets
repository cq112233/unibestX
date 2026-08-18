import { getAbilityContext } from '../App'
import { getAppAbility } from '../UniApp'
import common from '@ohos.app.ability.common'

/**
 * getUIAbilityContext
 * @description 获取应用的UIAbilityContext
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
export function getUIAbilityContext(): common.UIAbilityContext {
  const ability = getAppAbility()
  if(ability) {
    return ability.context
  }
  throw new Error('getUIAbilityContext: context is null')
}
