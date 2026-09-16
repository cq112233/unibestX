/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./index.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./index.uts` 解析到同目录的
 * `index.d.uts.ts`，因此本文件必须与 `index.uts` **同目录同名**，不能挪走。
 *
 * 修改 `index.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */
/** 数据回调 */
export type NextFn<T> = (value: T) => void;

/** 错误回调 */
export type ErrorFn = (error: any) => void;

/** 完成回调 */
export type CompleteFn = () => void;

/** 清理回调：取消订阅、流完成或出错时触发（等价于 rxjs 的 teardown） */
export type TeardownFn = () => void;

/**
 * 订阅者：承载 next / error / complete 三个回调。
 *
 * 刻意设计为 class 而非对象字面量 —— UTS 在 Android 端将对象字面量中的函数字段
 * 编译为 Kotlin Map，存在函数类型字段的编译/运行风险，class 更稳妥。
 */
export declare class Subscriber<T> {
  private _nextFn: NextFn<T> | null;

  private _errorFn: ErrorFn | null;

  private _completeFn: CompleteFn | null;

  constructor(
    nextFn: NextFn<T> | null = null,
    errorFn: ErrorFn | null = null,
    completeFn: CompleteFn | null = null
  );

  next(value: T): void;

  error(error: any): void;

  complete(): void;
}

/**
 * 订阅凭证：collect 该次订阅的所有清理逻辑。
 * 调用 unsubscribe() 后，上游的所有定时器 / 网络请求 / 事件监听都会被释放。
 */
export declare class Subscription {
  private _closed: boolean;

  private _teardowns: Array<TeardownFn>;

  isClosed(): boolean;

  add(teardown: TeardownFn | null): void;

  unsubscribe(): void;
}

/** 订阅逻辑：接收订阅者，返回清理函数 */
export type SubscribeFn<T> = (subscriber: Subscriber<T>) => TeardownFn | null;

/**
 * 可观察对象：一段可被多次订阅的数据流定义。
 *
 * 订阅时传入的三个回调均可省略（传 null），若只想监听完成事件，
 * 可写 `stream.subscribe(null, null, () => { ... })`。
 */
export declare class Observable<T> {
  private _subscribeFn: SubscribeFn<T>;

  constructor(subscribeFn: SubscribeFn<T>);

  subscribe(
    nextFn: NextFn<T> | null = null,
    errorFn: ErrorFn | null = null,
    completeFn: CompleteFn | null = null
  ): Subscription;

  pipe<R>(operator: Operator<T, R>): Observable<R>;
}

/** 操作符：把上游流变换为下游流 */
export type Operator<T, R> = (source: Observable<T>) => Observable<R>;

/**
 * 主题：既可以作为数据源被订阅，也可以主动 push 数据。
 * 常用于把「用户输入」「按钮点击」等命令式事件转成声明式流。
 *
 * 注意：刻意不继承 Observable —— Kotlin 的 super(...) 构造参数中无法引用 this，
 * 因此采用组合（asObservable()）替代继承，规避原生端编译限制。
 */
export declare class Subject<T> {
  private _observers: Array<Subscriber<T>>;

  private _tokens: Array<number>;

  private _tokenSeed: number;

  private _stopped: boolean;

  asObservable(): Observable<T>;

  private _remove(token: number): void;

  next(value: T): void;

  error(err: any): void;

  complete(): void;

  observerCount(): number;
}

/** 从数组同步创建流，逐个发出元素后完成 */
export declare function fromArray(values: Array<T>): Observable<T>;

/** 定时流：每隔 period 毫秒发出一个从 0 开始的递增序号（不自动结束，需配合 take/takeUntil） */
export declare function interval(period: number): Observable<number>;

/** 延时流：delay 毫秒后发出 value 并完成 */
export declare function timer(delay: number, value: T): Observable<T>;

/** 出错流：立即向下游推送一个错误（用于演示 catchError 降级） */
export declare function throwError(err: any): Observable<T>;

/** 映射：把上游每个值通过 project 转换成新值 */
export declare function map(project: (value: T) => R): Operator<T, R>;

/** 扫描：类似 Array.reduce，把流上的值依次累积（常用来构建「已接收内容」） */
export declare function scan(accumulator: (acc: R, value: T) => R, seed: R): Operator<T, R>;

/** 缓冲：把上游的值累积成数组后再展开（常用于把零散 chunk 合并成数组结构） */
export declare function toArray(): Operator<T, Array<T>>;

/** 过滤：仅放行满足 predicate 的值 */
export declare function filter(predicate: (value: T) => boolean): Operator<T, T>;

/** 去重：仅在上游值与上一次不同时才放行 */
export declare function distinctUntilChanged(comparator: ((prev: T, curr: T) => boolean) | null = null): Operator<T, T>;

/** 防抖：上游静默 due 毫秒后才放行最后一个值（输入联想场景标配） */
export declare function debounceTime(due: number): Operator<T, T>;

/** 节流：due 毫秒内最多放行一个值 */
export declare function throttleTime(due: number): Operator<T, T>;

/** 取前 count 个值后自动完成 */
export declare function take(count: number): Operator<T, T>;

/**
 * 直到 notifier 发出值时，取消对上游的订阅。
 * 是页面卸载时「一键停止所有流」的核心手段。
 */
export declare function takeUntil(notifier: Observable<any>): Operator<T, T>;

/** 副作用：不改变值，仅用于在流的某个节点插入日志 / 状态更新 */
export declare function tap(callback: (value: T) => void): Operator<T, T>;

/** 起始值：订阅后先同步发出 value，再转发上游 */
export declare function startWith(value: T): Operator<T, T>;

/**
 * 错误降级：上游出错时切换到 handler 返回的备用流。
 * 是「流式请求失败后回退到本地模拟」的关键操作符。
 */
export declare function catchError(handler: (error: any) => Observable<T>): Operator<T, T>;

/**
 * 收尾：无论流是正常完成、出错还是被取消订阅，都会执行一次 callback。
 * 常用来复位 loading 状态、关闭定时器。
 */
export declare function finalize(callback: TeardownFn): Operator<T, T>;

/** 便捷函数：批量取消订阅（页面 onUnmounted 一键清理） */
export declare function unsubscribeAll(subscriptions: Array<Subscription>): void;
