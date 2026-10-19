// ==========================================
// uni-app X 类型补充声明与全局宏声明
// ==========================================

declare global {
  type UniEnv = {
    USER_DATA_PATH?: string;
    CACHE_PATH?: string;
    [key: string]: any;
  };

  export interface Uni {
    env?: UniEnv;

    // ==========================================
    // 补齐 uni-app X 专有的 uni.exit()
    //
    // ⚠️ 位置有讲究：必须加在**这里**（`declare global` 顶层的 `interface Uni`），
    //    写进下方 `namespace UniNamespace { interface Uni {} }` 对全局 `uni` 是**无效**的。
    //    原因在 @dcloudio/types 的 uni-app/uni/legacy/uni.d.ts：
    //      · 1~9652 行是 `declare namespace UniNamespace {}`，里面**根本没有** `Uni`；
    //      · 9659 行 `declare const uni: UniNamespace.Uni;` 引用的 `UniNamespace.Uni` 并不存在
    //        （skipLibCheck 把它压住了）；
    //      · 9661~11915 行的**顶层全局 `interface Uni`** 才是真正的 API 面（getAppBaseInfo
    //        等都在其中，文件末尾还有 `type UniInterface = Uni;` 佐证）。
    //    实测对比（探针）：`uni.__probeGlobal` 通过、`uni.__probeInNs` 报 TS2339。
    //    口诀：补 `uni.xxx` → 全局 `interface Uni`；补 `UniNamespace.Xxx` 类型 → namespace 块。
    //
    // 真源：HBuilderX @dcloudio/uni-app-x/types/uni/uts-plugin-api/lib/uni-exit/utssdk/interface.d.ts
    //       exit(options?: ExitOptions | null): void
    //       平台矩阵（真源 @uniPlatform）：Android 3.8.15+ / iOS uniX 4.33+；鸿蒙与 Web 未标注。
    //
    // ⚠️ 选项类型**就地内联**，不新增全局类型名：ExitOptions / ExitSuccess 等在 HBuilderX 侧
    //    已是全局类型，另起同名声明会在 HBuilderX 的 TS 检查里撞名。
    // ==========================================
    /** 退出当前应用（App 端专有，平台矩阵见上方真源说明） */
    exit: (options?: {
      /** 退出成功回调，只带统一 errMsg */
      success?: ((res: { errMsg: string }) => void) | null;
      /** 退出失败回调；errCode 取值为 12001 / 12002 / 12003 */
      fail?: ((res: { errCode: number; errMsg?: string }) => void) | null;
      /** 完成回调，成功与失败都会走 */
      complete?: ((res: any) => void) | null;
    } | null) => void;
  }

  // ==========================================
  // uni-app X / UTS 核心对象与生命周期全局声明
  // ==========================================
  // UTSJSONObject：UTS 内置的 JSON 对象类型（uni.request 返回体、_serialize/_hydrate 等）。
  //
  // ⚠️ 只能声明为纯索引签名（等价 Record<string, any>），不得附加具名方法，否则必踩以下坑：
  //   - 交叉 + 方法可选（`Record<string, any> & { getString?: ... }`）：
  //     `obj['k']` / `obj.k` 可用，但 `data.getNumber('id')` 报 TS2722
  //     「不能调用可能是未定义的对象」（src/api/example.uts 曾如此）。
  //   - 交叉 + 方法必选（`Record<string, any> & { getString: ... }`）：
  //     调用可用，但 `{ ... } as UTSJSONObject` 报 TS2352、赋值报 TS2739 / TS2322
  //     （字面量缺 getString 等必选成员）—— 项目内此类断言逾百处。
  //     （已实测：TS 的索引签名无法满足具名必选属性，故「必选方法 + 索引签名」也不可行。）
  //   - 方法集 | Record<string, any>（联合）：调用与断言可用，但 `obj['k']` / `obj.k`
  //     报 TS7053 / TS2339（联合的每个成员都须具备该索引签名 / 属性）。
  // 故取纯索引签名：`obj['k']`、`obj.k`、`data.getNumber('id')`、`as UTSJSONObject`、
  // `= {}` 五种写法全部通过。代价是具名方法调用结果为 any（项目已接受该取舍）。
  //
  // ⚠️ 附带代价：**不能给这些方法传泛型实参**。`obj.getArray` 经索引签名解析为 any，
  //    写 `data.getArray<string>('roles', [])` 会报 TS2347「非类型化函数调用不能接受类型参数」。
  //    需要元素类型时，改用带类型标注的默认值反推，例如：
  //      const defaultRoles: Array<string> = [];
  //      const roles = data.getArray('roles', defaultRoles) ?? defaultRoles;
  //    （UTS 真源侧 `getArray<T>(key, defaultValue)` 本身支持泛型，仅 TS 侧声明受限。）
  type UTSJSONObject = Record<string, any>;
  const UTSJSONObject: {
    new (obj?: any): UTSJSONObject;
    (obj?: any): UTSJSONObject;
    keys: (obj: any) => string[];
    values: (obj: any) => any[];
    assign: (target: any, ...sources: any[]) => any;
  };

  // ==========================================
  // UTS 原生平台全局：UTSAndroid / java（仅 App-Android 的条件编译段内可用）
  //
  // 为什么需要补：
  //   `#ifdef APP-ANDROID` 段里写的不是 `uni.*`，而是 UTS 直通原生的全局
  //   （src/hooks/useBackPressExit.uts:63、:71）。它们的声明由 HBuilderX 自带的 uts-types
  //   提供，**不挂在** npm 包 @dcloudio/types 里：
  //     · UTSAndroid —— HBuilderX plugins/uniapp-uts-v1/uts-types/app-android/UTSAndroid.d.ts
  //                     文件末尾 `declare global { var UTSAndroid : UTSAndroid; }`；
  //                     getUniActivity() 真源返回 `Activity | null`（Activity 来自
  //                     `import Activity from 'android.app.Activity'`）
  //     · java       —— 同目录 android.d.ts:94141 `declare module java { export module lang {
  //                     export class System … } }`，其中 `public static exit(param0: number): void`（94173 行）
  //   项目 tsconfig 的 types 白名单只有 "@dcloudio/types"（uni-app 经典版），故 VSCode / Volar 里
  //   报 TS2304「找不到名称 "UTSAndroid" / "java"」。ESLint 侧早已豁免（eslint.config.mjs:384-385）。
  //
  // 为什么只补这么点：
  //   HBuilderX 的 android.d.ts 有 13 万行（整棵 Android SDK 类树），UTSAndroid 自己也有 30+ 成员；
  //   全量搬进来既没必要、又会与上方 UTSJSONObject 这类兜底声明互相打架。此处只补**项目实际用到**的成员，
  //   将来要用别的（如 UTSAndroid.getTopPageActivity()）再照真源签名逐个加。
  //
  // ⚠️ 三条红线（下笔前先看）：
  //   1) 这两个全局只在 App-Android 存在，调用点必须待在 `#ifdef APP-ANDROID` 内，
  //      否则 Web / 小程序端直接 ReferenceError；
  //   2) 类型补好 ≠ 运行时可用：App 的 vapor / uts2js(JS) 层未必实现同名成员
  //      （UTSAndroid 在 JS 层只覆盖部分成员，见 skill 分册 3 的「3.12」）；
  //   3) 类型名刻意不叫 `UTSAndroid`（真源里那是 HBuilderX 模块内的 interface），
  //      避免与真源同名声明在 HBuilderX 侧产生歧义。
  // ==========================================

  /**
   * `UTSAndroid.getUniActivity()` 的返回值：`android.app.Activity` 的**最小结构子集**
   * 真源：android.d.ts:4369 `public finishAffinity(): void`
   */
  type UTSAndroidActivity = {
    /** 关闭当前应用的全部 Activity（带退出动画） */
    finishAffinity: () => void;
  };

  /** `UTSAndroid` 全局对象的 TS 侧子集（真源：UTSAndroid.d.ts 的 `interface UTSAndroid`） */
  type UTSAndroidApi = {
    /** 获取当前应用栈顶的 Activity 实例（页面未与 Activity 建立绑定等场景可能为 null） */
    getUniActivity: () => UTSAndroidActivity | null;
  };

  /**
   * uni-app X App-Android 原生能力入口（仅 `#ifdef APP-ANDROID` 内可用）。
   * ⚠️ 真源写的是 `var`，这里用 `const`：一是 ESLint `vars-on-top` 不接受全局 `var`
   *    （本文件既有的 `const UTSJSONObject` / `const ref` 同理），二是项目内只读不写。
   */
  const UTSAndroid: UTSAndroidApi;

  /** Java 互操作命名空间（仅 `#ifdef APP-ANDROID` 内可用）；此处只补退出应用用到的 `System.exit(0)` */
  namespace java {
    namespace lang {
      class System {
        /** 终止当前 JVM，0 表示正常退出（真源 android.d.ts:94173 `public static exit(param0: number): void`） */
        static exit(code: number): void;
      }
    }
  }

  type OnBackPressOptions = {
    from: 'backbutton' | 'navigateBack';
  };

  type UniScrollEvent = {
    detail: {
      scrollLeft: number;
      scrollTop: number;
      scrollHeight: number;
      scrollWidth: number;
      deltaX: number;
      deltaY: number;
    };
  };

  /** 触摸事件（touchstart / touchmove / touchend 等） */
  type UniTouchEvent = {
    detail: {
      x: number;
      y: number;
      clientX: number;
      clientY: number;
      pageX: number;
      pageY: number;
      screenX: number;
      screenY: number;
    };
    touches: Array<UniTouchEventTouch>;
    changedTouches: Array<UniTouchEventTouch>;
  };

  type UniTouchEventTouch = {
    identifier: number;
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
    screenX: number;
    screenY: number;
    force: number;
  };

  /** 输入框键盘高度变化事件（组件 @keyboardheightchange 回调参数） */
  type UniInputKeyboardHeightChangeEvent = {
    detail: {
      height: number;
      duration: number;
    };
  };

  /** web-view 组件 @message 回调参数类型 */
  type UniWebViewMessageEvent = {
    detail: {
      data: Array<UTSJSONObject>;
    };
  };

  // ==========================================
  // 补充：应用「路由完成」事件（uni.onAppRoute 的回调参数）
  //
  // 真源：HBuilderX @dcloudio/uni-app-x/types/uni/uts-plugin-api/lib/uni-route/utssdk/
  //       interface.d.ts 的 `declare global { type AppRouteEvent = ... }`
  //       （platformMatrix：App 5.25+ / Web 4.0+ / 微信小程序 3.5.5+ / 支付宝 5.25+）。
  //
  // 为什么还要在这里补：
  //   · `uni.onAppRoute` / `uni.offAppRoute` 在编辑器里**能**解析 —— 走的是
  //     @dcloudio/types 的 uni-patches/wx（`onAppRoute(listener: UniNamespace.OnAppRouteCallback)`），
  //     那个回调参数类型是命名空间内的，**没有**提升成全局名；
  //   · 于是 `.uts` 里写 `(event: AppRouteEvent)` 报 TS2304「找不到名称」，
  //     而 UTS→Kotlin 编译是过的（Kotlin 侧真源认它）—— 只瞎编辑器，不瞎编译。
  //
  // ⚠️ `openType` 真源是内置全局联合类型 `AppRouteOpenType`
  //    （`'appLaunch' | 'navigateTo' | 'navigateBack' | 'redirectTo' | 'reLaunch' | 'switchTab'`），
  //    但这里**只能写宽成 `string`**：编辑器解析出的 `uni.onAppRoute` 来自微信 patch 类型
  //    （`OnAppRouteCallback = (result: OnAppRouteListenerResult) => void`，其 `openType: string`），
  //    回调参数是**逆变**检查的 —— 写窄成联合类型会立刻报 TS2345
  //    「不能将 OnAppRouteListenerResult 分配给 AppRouteEvent」。
  //
  // ⚠️ 其余字段必须与 `OnAppRouteListenerResult` **同名同类且不多required**：
  //    它要求 notFound / page / path / pipMode / query / renderer / routeEventId / timeStamp / webviewId
  //    全部存在（`page`/`query` 是 `any`，`pipMode`/`renderer` 是不带 null 的联合），
  //    所以本类型也用可选字段兜住，别把某个字段写成自己独有的必填项。
  // ==========================================
  /** 应用路由完成事件（uni.onAppRoute 的回调参数） */
  type AppRouteEvent = {
    /** 路由页面路径，**不含开头的斜杠**（官方口径，由 route-state.uts 的 cleanPath 归一补上） */
    path: string;
    /** 页面参数（键值对，无参数时为空对象） */
    query: UTSJSONObject;
    /** 触发来源（真源为 AppRouteOpenType 联合，此处受限于回调逆变只能放宽成 string，见上） */
    openType: string;
    /** 路由目标页面是否存在 */
    notFound: boolean;
    /** 事件时间戳 */
    timeStamp: number;
    /** 路由事件唯一标识 */
    routeEventId: string;
    /** 触发路由的页面实例（可空） */
    page?: UTSJSONObject | null;
    /** 画中画模式（可空） */
    pipMode?: 'min' | 'max' | null;
    /** 渲染引擎（可空） */
    renderer?: 'webview' | 'skyline' | 'xr-frame' | null;
    /** webview 实例 id（可空） */
    webviewId?: number | null;
  };

  /** uni.onKeyboardHeightChange 的回调参数 */
  type OnKeyboardHeightChangeCallbackResult = {
    height: number;
    duration?: number;
  };

  /** uni.setTabBarItem 的参数 */
  type SetTabBarItemOptions = {
    index: number;
    text?: string;
    iconPath?: string;
    selectedIconPath?: string;
    visible?: boolean;
    badge?: string;
    success?: (result: any) => void;
    fail?: (error: any) => void;
    complete?: (result: any) => void;
  };

  /** uni.setNavigationBarTitle 的参数 */
  type SetNavigationBarTitleOptions = {
    title: string;
    success?: (result: any) => void;
    fail?: (error: any) => void;
    complete?: (result: any) => void;
  };

  /** uni.showModal 的参数 */
  type ShowModalOptions = {
    title?: string;
    content?: string;
    showCancel?: boolean;
    cancelText?: string;
    cancelColor?: string;
    confirmText?: string;
    confirmColor?: string;
    editable?: boolean;
    placeholderText?: string;
    success?: (result: any) => void;
    fail?: (error: any) => void;
    complete?: (result: any) => void;
  };

  // ==========================================
  // 文件系统管理 (uni.getFileSystemManager)
  // 框架类型仅存在于 HBuilderX 内置 dts，项目 types 未引入，
  // 故在此按官方签名补齐，供 IDE (Volar) 解析，避免 "Xxx is not defined"。
  // ==========================================

  /** fsm.readdir 成功回调参数 */
  type ReadDirSuccessResult = {
    /** 目录下的文件名列表 */
    files: string[];
    errMsg?: string;
  };

  /** fsm.readdir 的参数 */
  type ReadDirOptions = {
    /** 要读取的目录路径 (本地路径) */
    dirPath: string;
    success?: ((res: ReadDirSuccessResult) => void) | null;
    fail?: ((err: any) => void) | null;
    complete?: ((res: any) => void) | null;
  };

  /** fsm.getFileInfo 成功回调参数 */
  type GetFileInfoSuccessResult = {
    /** 按照传入的 digestAlgorithm 计算得出的文件摘要 */
    digest: string;
    /** 文件大小，以字节为单位 */
    size: number;
    errMsg?: string;
  };

  /** fsm.getFileInfo 的参数 */
  type GetFileInfoOptions = {
    /** 要读取的文件路径 (本地路径) */
    filePath: string;
    /** 计算文件摘要的算法 */
    digestAlgorithm?: 'md5' | 'sha1' | null;
    success?: ((res: GetFileInfoSuccessResult) => void) | null;
    fail?: ((err: any) => void) | null;
    complete?: ((res: any) => void) | null;
  };

  /** fsm.rmdir 的参数 */
  type RmDirOptions = {
    /** 要删除的目录路径 (本地路径) */
    dirPath: string;
    /** 是否递归删除目录 */
    recursive: boolean;
    success?: ((res: any) => void) | null;
    fail?: ((err: any) => void) | null;
    complete?: ((res: any) => void) | null;
  };

  /** fsm.unlink 的参数 */
  type UnLinkOptions = {
    /** 文件路径，只支持绝对地址 */
    filePath: string;
    success?: ((res: any) => void) | null;
    fail?: ((err: any) => void) | null;
    complete?: ((res: any) => void) | null;
  };

  /** fsm.writeFile 的参数 */
  type WriteFileOptions = {
    /** 文件路径，只支持绝对地址 */
    filePath: string;
    /** 字符编码 */
    encoding?: 'ascii' | 'base64' | 'utf-8';
    /** 写入的内容 */
    data: string | ArrayBuffer;
    success?: ((res: any) => void) | null;
    fail?: ((err: any) => void) | null;
    complete?: ((res: any) => void) | null;
  };

  function onLaunch(callback: (options?: any) => void): void;
  function onShow(callback: (options?: any) => void): void;
  function onHide(callback: () => void): void;
  function onLoad(callback: (options?: any) => void): void;
  function onReady(callback: () => void): void;
  function onUnload(callback: () => void): void;
  function onBackPress(callback: (options: OnBackPressOptions) => boolean | Promise<boolean> | void): void;
  function onPullDownRefresh(callback: () => void): void;
  function onReachBottom(callback: () => void): void;
  function onPageScroll(callback: (options: { scrollTop: number }) => void): void;
  type OnResizeSize = {
    windowWidth: number;
    windowHeight: number;
    screenWidth?: number;
    screenHeight?: number;
  };
  type OnResizeOptions = {
    size: OnResizeSize;
    deviceOrientation?: string;
  };
  function onResize(callback: (options: OnResizeOptions) => void): void;
  function onTabItemTap(callback: (options: { index: number; pagePath: string; text: string }) => void): void;
  /** 全局错误监听（App.uvue 专用）：全平台支持，参数为错误信息（含堆栈） */
  function onError(callback: (error: any) => void): void;
  /** 未处理 Promise 拒绝监听（App.uvue 专用）：仅 Web 与小程序支持，App 原生端不支持须 #ifdef WEB || MP 隔离 */
  function onUnhandledRejection(callback: (result: { promise: Promise<any>; reason: any }) => void): void;
  type UniPage = any;
  type OnShowOptions = any;
  function getCurrentPages(): UniPage[];
  function getApp(): any;

  /** 支付宝小程序全局对象 */
  const my: {
    hideBackHome?: (options?: any) => void;
    [key: string]: any;
  };

  /** 微信小程序全局对象 */
  const wx: {
    [key: string]: any;
  };

  type AppThemeChangeResult = {
    appTheme: 'light' | 'dark' | string;
  };

  type OsThemeChangeResult = {
    osTheme: 'light' | 'dark' | string;
  };

  type OnHostThemeChangeCallbackResult = {
    hostTheme: 'light' | 'dark' | string;
  };

  type SetAppThemeOptions = {
    theme: 'light' | 'dark' | 'auto' | string;
    success?: (res: any) => void;
    fail?: (err: any) => void;
    complete?: (res: any) => void;
  };

  interface Uni {
    /**
     * 设置应用深浅色主题模式（仅 App 端）
     */
    setAppTheme: (options: SetAppThemeOptions) => void;

    /**
     * 监听应用主题改变事件（仅 App 端）
     */
    onAppThemeChange: (callback: (result: AppThemeChangeResult) => void) => void;

    /**
     * 取消监听应用主题改变事件
     */
    offAppThemeChange?: (callback?: (result: AppThemeChangeResult) => void) => void;

    /**
     * 监听系统操作系统深浅色改变事件（仅 App 端跟随系统 auto 模式使用）
     */
    onOsThemeChange: (callback: (result: OsThemeChangeResult) => void) => void;

    /**
     * 取消监听系统操作系统深浅色改变事件
     */
    offOsThemeChange?: (callback?: (result: OsThemeChangeResult) => void) => void;

    /**
     * 监听小程序宿主主题改变事件
     */
    onHostThemeChange: (callback: (result: OnHostThemeChangeCallbackResult) => void) => void;

    /**
     * 取消监听小程序宿主主题改变事件
     */
    offHostThemeChange?: (callback?: (result: OnHostThemeChangeCallbackResult) => void) => void;

    /**
     * 使手机发生较短时间的振动（15ms）
     *
     * 文档: http://uniapp.dcloud.io/api/system/vibrate?id=vibrateshort
     */
    vibrateShort: (options: {
      /** 接口调用成功的回调函数 */
      success?: (result: any) => void;
      /** 接口调用失败的回调函数 */
      fail?: (result: any) => void;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result: any) => void;
    }) => void;

    /**
     * 设置系统剪贴板内容
     */
    setClipboardData: (options: {
      data: string;
      success?: (result: any) => void;
      fail?: (result: any) => void;
      complete?: (result: any) => void;
    }) => void;

    /**
     * 显示消息提示框
     */
    showToast: (options: {
      title: string;
      icon?: string;
      image?: string;
      duration?: number;
      position?: string;
      success?: (result: any) => void;
      fail?: (result: any) => void;
      complete?: (result: any) => void;
    }) => void;
  }

  // ==========================================
  // uni-app X 原生异步任务类型（uni.request / uploadFile / downloadFile 的返回值）
  //
  // 为什么需要补这份声明：
  //   1) HBuilderX 编辑器与真机编译用的是它自带的 uni-app x dts，其中这三个类型
  //      已通过 `declare global` 暴露为全局（HBuilderX 内置
  //      @dcloudio/uni-app-x/types/uni/uts-plugin-api/lib/uni-network/utssdk/global.d.ts:56,70），
  //      所以 HBuilderX 里裸写 `RequestTask` 不报错。
  //   2) VSCode / tsconfig 侧挂的是 npm 包 `@dcloudio/types`，它把三者关在
  //      `declare namespace UniNamespace` 内（base/request.d.ts:1,113），**未提升到全局**，
  //      于是 .uts 里裸写 `RequestTask` 会报 TS2304「找不到名称」。
  //   3) 不能改用 `UniNamespace.RequestTask` 绕开：`declare namespace` 只是 TS 的 d.ts 语法，
  //      并非 UTS 运行时语法，写进 .uts 源码会被 HBuilderX 编译报错。
  //
  // 故按 HBuilderX 真源签名补齐全局声明（真源：utssdk/interface.d.ts:1760 起）。
  // ⚠️ 必须用 `type` 而非 `interface`：scripts/gen-uts-dts.mjs 注明「项目禁用 interface」。
  // ==========================================

  /** uni.request 的返回值，可用于中断请求、监听响应头 / 分块数据 */
  type RequestTask = {
    /** 中断请求任务 */
    abort: () => void;
    /** 监听 Transfer-Encoding Chunk Received 事件，返回监听器 id */
    onChunkReceived: (listener: (result: { data: ArrayBuffer }) => void) => number;
    /** 移除分块数据监听（不传参则移除全部） */
    offChunkReceived: (listener?: number | ((result: { data: ArrayBuffer }) => void) | null) => void;
    /** 监听 HTTP Response Header 事件，返回监听器 id */
    onHeadersReceived: (listener: (result: { header: any; cookies: string[]; statusCode: number }) => void) => number;
    /** 移除响应头监听（不传参则移除全部） */
    offHeadersReceived: (listener?: number | ((result: { header: any; cookies: string[]; statusCode: number }) => void) | null) => void;
  };

  /** uni.uploadFile 的返回值，可用于中断上传、监听上传进度 */
  type UploadTask = {
    /** 中断上传任务 */
    abort: () => void;
    /** 监听上传进度变化 */
    onProgressUpdate: (callback: (result: {
      progress: number;
      totalBytesSent: number;
      totalBytesExpectedToSend: number;
    }) => void) => void;
  };

  /** uni.downloadFile 的返回值，可用于中断下载、监听下载进度 */
  type DownloadTask = {
    /** 中断下载任务 */
    abort: () => void;
    /** 监听下载进度变化 */
    onProgressUpdate: (callback: (result: {
      progress: number;
      totalBytesWritten: number;
      totalBytesExpectedToWrite: number;
    }) => void) => void;
  };

  /** uni.uploadFile 的 onProgressUpdate 回调入参 */
  type OnProgressUpdateResult = {
    /** 上传进度百分比 */
    progress: number;
    /** 已上传的数据长度，单位 Bytes */
    totalBytesSent: number;
    /** 预期需要上传的数据总长度，单位 Bytes */
    totalBytesExpectedToSend: number;
  };

  /** uni.downloadFile 的 onProgressUpdate 回调入参 */
  type OnProgressDownloadResult = {
    /** 下载进度百分比 */
    progress: number;
    /** 已下载的数据长度，单位 Bytes */
    totalBytesWritten: number;
    /** 预期需要下载的数据总长度，单位 Bytes */
    totalBytesExpectedToWrite: number;
  };

  // ==========================================
  // uni-app X 路由 API 的 Options 类型（navigateTo / redirectTo / reLaunch / switchTab / navigateBack）
  // ⚠️ 已收敛移入 uni_modules/route-bestX/types.d.ts 插件目录内部，保证插件自包含
  // ==========================================

  // ==========================================
  // 给 @dcloudio/types 的 UniNamespace.RequestTask 补齐分块接收 API
  //
  // `uni.request(...)` 的返回类型是 `UniNamespace.RequestTask`（来自 @dcloudio/types，
  // 即 Vue2 时代 uni-app 的类型），它只有 abort / onHeadersReceived / offHeadersReceived，
  // **没有** uni-app X 才有的 `onChunkReceived` —— 于是 stream.uts 里
  // `task.onChunkReceived(...)` 报 TS2339「RequestTask 上不存在属性 onChunkReceived」。
  //
  // 用声明合并（interface 可合并）就地补齐，无需改动 @dcloudio/types。
  // 真源签名同上方全局 `RequestTask`（HBuilderX 内置 uni-app x dts）。
  // ==========================================
  namespace UniNamespace {
    interface RequestTask {
      /** 监听 Transfer-Encoding Chunk Received 事件，返回监听器 id */
      onChunkReceived: (listener: (result: { data: ArrayBuffer }) => void) => number;
      /** 移除分块数据监听（不传参则移除全部） */
      offChunkReceived: (listener?: number | ((result: { data: ArrayBuffer }) => void) | null) => void;
    }

    // ==========================================
    // 给 @dcloudio/types 的 UniNamespace.GetAppBaseInfoResult 补齐 uni-app X 专有字段
    //
    // @dcloudio/types 是 uni-app **经典版**（Vue2 时代）的类型，其 GetAppBaseInfoResult
    // 只有 appId / appName / appVersion / language / version / hostName ... 这一批，
    // **整份没有** uni-app X 才返回的 uniPlatform / uniCompilerVersion / uniCompileVersion 等，
    // 于是 `uni.getAppBaseInfo().uniPlatform` 在 VSCode 里报 TS2339。
    //
    // 真源：HBuilderX uni-app x dts
    //   @dcloudio/uni-app-x/types/uni/uts-plugin-api/lib/uni-getAppBaseInfo/utssdk/interface.d.ts
    // 该处 GetAppBaseInfoResult 是 `type`（不可合并），故这里对 @dcloudio/types 的同名
    // `interface` 做声明合并来补齐；字段连同可选性、字面量联合取值一并与真源保持一致。
    // ==========================================
    interface GetAppBaseInfoResult {
      /**
       * 当前运行平台标识（uni-app X 专有）。
       * 真源为字面量联合，这里同样精确到取值，便于 isWebOrMpPlatform 一类的判断收敛。
       */
      uniPlatform?:
        | 'app'
        | 'web'
        | 'mp-weixin'
        | 'mp-alipay'
        | 'mp-baidu'
        | 'mp-toutiao'
        | 'mp-lark'
        | 'mp-qq'
        | 'mp-kuaishou'
        | 'mp-jd'
        | 'mp-360'
        | 'quickapp-webview'
        | 'quickapp-webview-union'
        | 'quickapp-webview-huawei';
      /** uni 编译器版本号（Android 4.0+ / iOS 4.11+ / 鸿蒙 4.61+ / 微信小程序 4.41+ / Web 4.18+） */
      uniCompilerVersion?: string;
      /** uni 编译版本号（支付宝等未实现 uniCompilerVersion 的端由它兜底） */
      uniCompileVersion?: string;
      /** uni 运行时版本号 */
      uniRuntimeVersion?: string;
      /** 当前是否运行在 uni-app X 环境 */
      isUniAppX?: boolean;
    }

    // ==========================================
    // 给 @dcloudio/types 的 UniNamespace.GetDeviceInfoResult 补齐 uni-app X 专有字段
    //
    // 与上方 GetAppBaseInfoResult 同一成因：@dcloudio/types 是 uni-app **经典版**类型，
    // 其 GetDeviceInfoResult（uni/legacy/uni.d.ts:3213）只有 deviceBrand / deviceModel /
    // deviceId / deviceType / devicePixelRatio / deviceOrientation / brand / model /
    // system / platform 这批经典字段，**整份没有** osTheme / osName / osVersion 等
    // uni-app X 才返回的字段，于是 `uni.getDeviceInfo().osTheme`（src/theme/index.uts:91）
    // 在 VSCode 里报 TS2339「类型"GetDeviceInfoResult"上不存在属性"osTheme"」。
    //
    // 真源：HBuilderX uni-app x dts
    //   @dcloudio/uni-app-x/types/uni/uts-plugin-api/lib/uni-getDeviceInfo/utssdk/interface.d.ts:21
    // 该处 GetDeviceInfoResult 是 `type`（不可合并），故这里对 @dcloudio/types 的同名
    // `interface` 做声明合并来补齐；取值联合、可选性一并与真源保持一致。
    //
    // ⚠️ 只列真源**独有**的字段：deviceModel / deviceType / platform 等在经典版已存在，
    //    重复声明会因两侧类型不同（真源是字面量联合、经典版是 string）触发 TS2717。
    //    平台矩阵（真源 @uniPlatform）：osTheme —— Android / iOS unixVer 4.18+、
    //    鸿蒙 4.23+；Web 未实现，故取值需 `?? 'light'` 兜底。
    // ==========================================
    interface GetDeviceInfoResult {
      /** 设备是否为 root（App-Android 4.18+） */
      isRoot?: boolean;
      /** 设备是否为模拟器（App 4.18+） */
      isSimulator?: boolean;
      /** 设备是否开启 USB 调试（App-Android 4.18+） */
      isUSBDebugging?: boolean;
      /** 操作系统名称（App / Web 4.18+，鸿蒙 4.61+；Web 端为浏览器所在系统） */
      osName?: 'ios' | 'android' | 'harmonyos' | 'macos' | 'windows' | 'linux' | null;
      /** 操作系统版本号（App / Web 4.18+，鸿蒙 4.61+） */
      osVersion?: string | null;
      /** 操作系统语言（App / Web 4.18+，鸿蒙 4.61+） */
      osLanguage?: string | null;
      /** 操作系统主题（App-Android / iOS 4.18+、鸿蒙 4.23+；Web 未实现） */
      osTheme?: 'light' | 'dark' | null;
      /** Android 系统 API 等级（App-Android 4.18+） */
      osAndroidAPILevel?: number | null;
      /** 鸿蒙系统 SDK API 版本（App-鸿蒙 4.23+） */
      osHarmonySDKAPIVersion?: number | null;
      /** 鸿蒙系统发行版本（App-鸿蒙 4.23+） */
      osHarmonyDisplayVersion?: string | null;
      /** 设备 ROM 名称（App 4.18+） */
      romName?: string | null;
      /** 设备 ROM 版本（App 4.18+） */
      romVersion?: string | null;
      /** 应用二进制接口类型（App-Android 4.18+） */
      abi?: string | null;
      /** 设备 CPU 类型（App-Android / iOS 4.18+） */
      cpuType?: string | null;
      /** 设备 ABI（App-Android 4.18+） */
      deviceAbi?: string | null;
      /** 设备性能等级（App-Android 4.18+） */
      benchmarkLevel?: number | null;
      /** 设备内存大小，单位 MB（App-Android 4.18+） */
      memorySize?: string | null;
    }

  }

  // ==========================================
  // 给 @dcloudio/types 的 Page.PageInstanceBaseProps 补齐 `options`
  //
  // `getCurrentPages()` 在 VSCode 里解析出的是 @dcloudio/types（uni-app 经典版）的
  // `Page.PageInstance[]`（见该包 uni-app/page.d.ts 末尾的 `declare const getCurrentPages:
  // Page.GetCurrentPages`），它只有 route / $vm / $getAppWebview，**没有** uni-app X 才有的
  // `options`（页面的路由参数信息），于是 `pages[i].options` 报
  // TS2339「类型"PageInstance<AnyObject, {}>"上不存在属性"options"」。
  //
  // 真源：HBuilderX uni-app x dts
  //   @dcloudio/uni-app-x/types/native/UniPage.d.ts → `options: UTSJSONObject`
  // 平台矩阵（真源 @uniPlatform）：Android unixVer 4.31 / iOS 4.31 / Web 4.31 / 微信小程序 √。
  // 真源是 `interface`，这里同样用声明合并补齐（注意类型参数要与原声明逐字一致，否则无法合并）；
  // 该 interface 属于 `declare namespace Page`（不是 UniNamespace），故补在 Page 命名空间下。
  //
  // ⚠️ 这是 src/router/utils/utils.uts 的 getCurrentPageOptions() 赖以取到 query 的字段：
  //    uni.onAppRoute 要等目标页 onShow 之后才触发，冷启动 / 返回 / 页面重新显示时
  //    需要一个不依赖事件的当前页参数来源，走的就是这个 `options`。
  // ==========================================
  namespace Page {
    interface PageInstanceBaseProps<_D extends AnyObject = any> {
      /** 页面的路由参数信息（App 4.31+ / Web 4.31+ / 微信小程序） */
      options?: UTSJSONObject;
    }
  }

  // ==========================================
  // UTS 扩展的 JSON 静态方法
  //
  // HBuilderX 内置 UTS 运行时提供 `JSON.parseObject`（把字符串解析为 UTSJSONObject，
  // 解析失败返回 null），但 @dcloudio/types 未覆盖。此处合并进全局 JSON 接口。
  // 真源用法：src/store/vdom/i18n.uts:16、src/http/request/request.uts:124 等。
  // ==========================================
  interface JSON {
    parseObject: (text: string) => any;
  }
}

export {};
