// 本文件为自动构建生成
import {
  GetPerformance as GetPerformanceOrigin,
  PerformanceObserverCallback as PerformanceObserverCallbackOrigin,
  PerformanceEntry as PerformanceEntryOrigin,
  PerformanceObserverOptions as PerformanceObserverOptionsOrigin,
  PerformanceObserver as PerformanceObserverOrigin,
  PerformanceObserverEntryList as PerformanceObserverEntryListOrigin,
  Performance as PerformanceOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type GetPerformance = GetPerformanceOrigin
  type PerformanceObserverCallback = PerformanceObserverCallbackOrigin
  type PerformanceEntry = PerformanceEntryOrigin
  type PerformanceObserverOptions = PerformanceObserverOptionsOrigin
  type PerformanceObserver = PerformanceObserverOrigin
  type PerformanceObserverEntryList = PerformanceObserverEntryListOrigin
  type Performance = PerformanceOrigin
  interface Uni extends UniOrigin { }
}
