/**
 * @package io.dcloud.uniapp.runtime
 */
export interface UniFormControl<T> {
  reset(): void,
  value: T,
  name: string
}
