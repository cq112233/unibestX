import { OnMemoryWarningCallback as OnMemoryWarningCallbackOrigin, OnMemoryWarning as OnMemoryWarningOrigin, OffMemoryWarningCallback as OffMemoryWarningCallbackOrigin, OffMemoryWarning as OffMemoryWarningOrigin, Uni as UniOrigin } from "./interface"

declare global {
  type OnMemoryWarningCallback = OnMemoryWarningCallbackOrigin
  type OnMemoryWarning = OnMemoryWarningOrigin
  type OffMemoryWarningCallback = OffMemoryWarningCallbackOrigin
  type OffMemoryWarning = OffMemoryWarningOrigin
  interface Uni extends UniOrigin { }
}
