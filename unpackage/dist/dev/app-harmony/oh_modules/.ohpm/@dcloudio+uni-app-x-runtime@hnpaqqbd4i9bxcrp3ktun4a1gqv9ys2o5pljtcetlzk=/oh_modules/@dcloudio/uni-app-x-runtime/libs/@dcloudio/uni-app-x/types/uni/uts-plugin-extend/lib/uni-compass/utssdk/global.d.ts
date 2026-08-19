import {
  CompassSuccess as CompassSuccessOrigin,
  CompassFail as CompassFailOrigin,
  CompassSuccessCallback as CompassSuccessCallbackOrigin,
  CompassFailCallback as CompassFailCallbackOrigin,
  CompassCompleteCallback as CompassCompleteCallbackOrigin,
  StartCompassOptions as StartCompassOptionsOrigin,
  StopCompassOptions as StopCompassOptionsOrigin,
  OnCompassChange as OnCompassChangeOrigin,
  OnCompassChangeSuccess as OnCompassChangeSuccessOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type CompassSuccess = CompassSuccessOrigin
  type CompassFail = CompassFailOrigin
  type CompassSuccessCallback = CompassSuccessCallbackOrigin
  type CompassFailCallback = CompassFailCallbackOrigin
  type CompassCompleteCallback = CompassCompleteCallbackOrigin
  type StartCompassOptions = StartCompassOptionsOrigin
  type StopCompassOptions = StopCompassOptionsOrigin
  type OnCompassChange = OnCompassChangeOrigin
  type OnCompassChangeSuccess = OnCompassChangeSuccessOrigin
  interface Uni extends UniOrigin { }
}
