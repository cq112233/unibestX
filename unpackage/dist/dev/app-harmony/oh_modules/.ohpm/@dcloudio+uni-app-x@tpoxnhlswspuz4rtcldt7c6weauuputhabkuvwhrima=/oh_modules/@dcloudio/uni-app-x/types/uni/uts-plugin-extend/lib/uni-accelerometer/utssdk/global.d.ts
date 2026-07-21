import { OnAccelerometerChangeCallback as OnAccelerometerChangeCallbackOrigin, OnAccelerometerChange as OnAccelerometerChangeOrigin, OffAccelerometerChange as OffAccelerometerChangeOrigin, StartAccelerometerOptions as StartAccelerometerOptionsOrigin, StartAccelerometer as StartAccelerometerOrigin, StopAccelerometerOptions as StopAccelerometerOptionsOrigin, StopAccelerometer as StopAccelerometerOrigin, Uni as UniOrigin } from "./interface"

declare global {
  type OnAccelerometerChangeCallback = OnAccelerometerChangeCallbackOrigin
  type OnAccelerometerChange = OnAccelerometerChangeOrigin
  type OffAccelerometerChange = OffAccelerometerChangeOrigin
  type StartAccelerometerOptions = StartAccelerometerOptionsOrigin
  type StartAccelerometer = StartAccelerometerOrigin
  type StopAccelerometerOptions = StopAccelerometerOptionsOrigin
  type StopAccelerometer = StopAccelerometerOrigin
  interface Uni extends UniOrigin { }
}
