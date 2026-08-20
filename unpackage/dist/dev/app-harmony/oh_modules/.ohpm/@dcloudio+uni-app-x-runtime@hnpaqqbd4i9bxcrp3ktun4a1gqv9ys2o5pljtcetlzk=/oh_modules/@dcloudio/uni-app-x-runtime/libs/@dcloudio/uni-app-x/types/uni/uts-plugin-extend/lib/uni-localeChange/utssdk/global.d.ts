import { StartLocationUpdateOptions as StartLocationUpdateOptionsOrigin, StartLocationUpdate as StartLocationUpdateOrigin, OnLocationChangeCallback as OnLocationChangeCallbackOrigin, OnLocationChange as OnLocationChangeOrigin, StopLocationUpdate as StopLocationUpdateOrigin, OffLocationChangeCallback as OffLocationChangeCallbackOrigin, OffLocationChange as OffLocationChangeOrigin, OnLocationChangeError as OnLocationChangeErrorOrigin, OffLocationChangeError as OffLocationChangeErrorOrigin, Uni as UniOrigin } from "./interface"

declare global {
  type StartLocationUpdateOptions = StartLocationUpdateOptionsOrigin
  type StartLocationUpdate = StartLocationUpdateOrigin
  type OnLocationChangeCallback = OnLocationChangeCallbackOrigin
  type OnLocationChange = OnLocationChangeOrigin
  type StopLocationUpdate = StopLocationUpdateOrigin
  type OffLocationChangeCallback = OffLocationChangeCallbackOrigin
  type OffLocationChange = OffLocationChangeOrigin
  type OnLocationChangeError = OnLocationChangeErrorOrigin
  type OffLocationChangeError = OffLocationChangeErrorOrigin
  interface Uni extends UniOrigin { }
}
