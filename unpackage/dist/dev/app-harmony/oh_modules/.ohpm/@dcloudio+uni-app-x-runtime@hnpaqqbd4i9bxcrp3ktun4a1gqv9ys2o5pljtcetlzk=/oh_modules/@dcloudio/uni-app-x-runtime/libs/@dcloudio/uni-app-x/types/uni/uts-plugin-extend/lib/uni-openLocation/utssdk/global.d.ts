import {
  OpenLocationOptions as OpenLocationOptionsOrigin,
  OpenLocationSuccess as OpenLocationSuccessOrigin,
  OpenLocationFail as OpenLocationFailOrigin,
  OpenLocationSuccessCallback as OpenLocationSuccessCallbackOrigin,
  OpenLocationFailCallback as OpenLocationFailCallbackOrigin,
  OpenLocationCompleteCallback as OpenLocationCompleteCallbackOrigin,
  OpenLocation as OpenLocationOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type OpenLocationOptions = OpenLocationOptionsOrigin
  type OpenLocationSuccess = OpenLocationSuccessOrigin
  type OpenLocationFail = OpenLocationFailOrigin
  type OpenLocationSuccessCallback = OpenLocationSuccessCallbackOrigin
  type OpenLocationFailCallback = OpenLocationFailCallbackOrigin
  type OpenLocationCompleteCallback = OpenLocationCompleteCallbackOrigin
  type OpenLocation = OpenLocationOrigin
  interface Uni extends UniOrigin { }
}
