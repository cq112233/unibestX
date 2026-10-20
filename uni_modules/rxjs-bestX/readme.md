# rxjs-bestX

面向 uni-app X 的极简响应式流库（纯 UTS 实现，全端通用）。

## 为什么不用 npm 上的 rxjs？

uni-app X 的 App 端（Android 编译 Kotlin / iOS 编译 Swift / 鸿蒙编译 ArkTS）**没有 JS 引擎**，无法引入任何纯 JS 库。本库用 UTS 重新实现了 RxJS 的核心概念与常用操作符，API 语义对齐 RxJS，可在 Android / iOS / 鸿蒙 / H5 / 小程序全端一致运行。

## 安装

本模块已内置在项目的 `uni_modules/` 中，无需额外安装。导入时请**保留 `.uts` 扩展名**：

```uts
import { Subject, interval, map, filter, debounceTime, takeUntil } from '@/uni_modules/rxjs-bestX/index.uts';
```

## 核心概念

| 类型 | 说明 |
| :--- | :--- |
| `Observable<T>` | 可被订阅的数据流 |
| `Subscriber<T>` | 订阅者，承载 `next` / `error` / `complete` 三个回调 |
| `Subscription` | 订阅凭证，调用 `unsubscribe()` 取消订阅并触发清理 |
| `Subject<T>` | 既是 Observable 又是 Observer 的多播源，通过 `asObservable()` 交给下游 |
| `Operator<T, R>` | 操作符，通过 `stream.pipe(op)` 串联 |

## 创建函数

`fromArray(values)` · `interval(period)` · `timer(delay, value)` · `throwError(err)`

## 操作符

`map` · `scan` · `filter` · `toArray` · `distinctUntilChanged` · `debounceTime` · `throttleTime` · `take` · `takeUntil` · `tap` · `startWith` · `catchError` · `finalize`

## 工具函数

`unsubscribeAll(subscriptions)`：批量取消订阅。

## 用法示例

```uts
import { Subject, debounceTime, filter } from '@/uni_modules/rxjs-bestX/index.uts';

// 1. 输入防抖
const keyword$ = new Subject<string>();
const sub = keyword$.asObservable()
  .pipe(debounceTime(300))
  .pipe(filter((kw: string): boolean => kw != ''));
sub.subscribe((kw: string): void => {
  console.log('搜索关键词:', kw);
});
sub.unsubscribe(); // 页面卸载时务必取消订阅，避免内存泄漏
```

```uts
import { Subject, interval, takeUntil } from '@/uni_modules/rxjs-bestX/index.uts';

// 2. 定时流 + 停止信号
const stop$ = new Subject<void>();
const sub = interval(120)
  .pipe(takeUntil(stop$.asObservable()))
  .subscribe(
    (i: number): void => { console.log('tick', i); },
    null,
    (): void => { console.log('流已结束'); }
  );
stop$.next(); // 停止
sub.unsubscribe();
```

## 注意事项

- **订阅必须释放**：在页面 `onUnmounted` 中调用 `unsubscribe()`，或使用 `takeUntil` / `finalize` 自动清理。
- **泛型需显式标注**：UTS 不从默认参数推断泛型实参，调用创建函数时请显式写出类型参数。
- **不要用 `interface` 扩展本库类型**，项目统一使用 `type` 别名。
- 完整演示见项目内 `src/sub/rxjsFunctionDemo/`。
