import './libs/uni-app-x-framework-dev'
import {
  UniElement as IUniElement,
  UniTextElement as IUniTextElement,
  UniNativeViewElement as IUniNativeViewElement,
  UniWebViewElement as IUniWebViewElement,
  UniPage as IUniPage
} from '@dcloudio/uni-app-x/types/native'
import { getUniApp, openUniApp } from './UniNativeApp'
import { customElements, UniCustomElement } from './dom/CustomElement'
import { UniElementImpl } from './dom/UniElement'
import { UniViewElementImpl } from './dom/UniViewElement'
import { UniWebViewElementImpl } from './dom/UniWebViewElement'
import { UniNativeViewElementImpl, UniNativeViewEvent } from './dom/UniNativeViewElement'
import { UniFormControlViewElementImpl, IUniForm } from './dom/UniFormControlElement'
import { UniCustomEvent, UniCustomEventOptions } from './dom/UniCustomEvent'
import { UniTouchEvent } from './dom/UniTouchEvent'
import { UniPointerEvent } from './dom/UniPointerEvent'
import './dom/builtInElements'
import './global'
import { getRealPath } from './polyfill/path'
import { initVar } from './libs/uni-app-x-framework-dev'
import { DOMRect } from './dom/DOMRect'
import { DrawableContext } from './dom/DrawableContext'
import { And, setGlobalVar } from './utils'
import * as UTSHarmony from './UTSHarmony'
import {
  UniIntersectionObserver,
  createIntersectionObserver,
  CreateIntersectionObserverOptions,
  UniIntersectionObserverMargins,
  UniIntersectionObserverRectResult,
  UniIntersectionObserverObserveCallbackResult,
  UniIntersectionObserverObserveCallback
} from './dom/UniIntersectionObserver'
import { TextEncoder, TextDecoder } from './utils/text-codec';

// TODO 由于defineXXXApi和其他包导出冲突，只能指定名称导出，后续再找其他解决方案
export {
  ssrRef,
  shallowSsrRef,
  BaseTransition,
  BaseTransitionPropsValidators,
  Comment,
  DeprecationTypes,
  EffectScope,
  ErrorCodes,
  ErrorTypeStrings,
  Fragment,
  KeepAlive,
  ReactiveEffect,
  Static,
  Suspense,
  Teleport,
  Text,
  TrackOpTypes,
  TriggerOpTypes,
  assertNumber,
  callWithAsyncErrorHandling,
  callWithErrorHandling,
  camelize,
  capitalize,
  cloneVNode,
  compatUtils,
  computed,
  createApp,
  createSSRApp,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createElementVNode,
  createHydrationRenderer,
  createPropsRestProxy,
  createRenderer,
  createSlots,
  createStaticVNode,
  createTextVNode,
  createVNode,
  customRef,
  defineAsyncComponent,
  defineComponent,
  defineEmits,
  defineExpose,
  defineModel,
  defineOptions,
  defineProps,
  defineSlots,
  devtools,
  effect,
  effectScope,
  getCurrentInstance,
  getCurrentScope,
  getTransitionRawChildren,
  guardReactiveProps,
  h,
  handleError,
  hasInjectionContext,
  hyphenate,
  initCustomFormatter,
  inject,
  injectHook,
  isInSSRComponentSetup,
  isMemoSame,
  isProxy,
  isReactive,
  isReadonly,
  isRef,
  isRuntimeOnly,
  isShallow,
  isVNode,
  logError,
  markRaw,
  mergeDefaults,
  mergeModels,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onActivated,
  onBackPress,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onError,
  onErrorCaptured,
  onExit,
  onHide,
  onLaunch,
  onLoad,
  onMounted,
  onPageHide,
  onPageNotFound,
  onPageScroll,
  onPageShow,
  onPullDownRefresh,
  onReachBottom,
  onReady,
  onRenderTracked,
  onRenderTriggered,
  onResize,
  onScopeDispose,
  onServerPrefetch,
  onShow,
  onTabItemTap,
  onThemeChange,
  onUnhandledRejection,
  onUnload,
  onUnmounted,
  onUpdated,
  openBlock,
  parseClassList,
  parseClassStyles,
  popScopeId,
  provide,
  proxyRefs,
  pushScopeId,
  queuePostFlushCb,
  reactive,
  readonly,
  ref,
  registerRuntimeCompiler,
  render,
  renderComponentSlot,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDirective,
  resolveDynamicComponent,
  resolveFilter,
  resolveTransitionHooks,
  setBlockTracking,
  setDevtoolsHook,
  setTransitionHooks,
  shallowReactive,
  shallowReadonly,
  shallowRef,
  ssrContextKey,
  ssrUtils,
  stop,
  toDisplayString,
  toHandlerKey,
  toHandlers,
  toRaw,
  toRef,
  toRefs,
  toValue,
  transformVNodeArgs,
  triggerRef,
  unref,
  useAttrs,
  useCssModule,
  useCssStyles,
  useCssVars,
  useModel,
  useSSRContext,
  useSlots,
  useTransitionState,
  vModelDynamic,
  vModelText,
  vShow,
  version,
  warn,
  watch,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
  withAsyncContext,
  withCtx,
  withDefaults,
  withDirectives,
  withKeys,
  withMemo,
  withModifiers,
  withScopeId,
  useComputedStyle
} from './libs/uni-app-x-framework-dev'
export * from './dom/builtInElements'

export { UniEntryAbility } from './EntryAbility'

export { getCurrentPages, getEnv } from './helper'

type UniElement = IUniElement
type UniTextElement = IUniTextElement
type UniNativeViewElement = IUniNativeViewElement
type UniWebViewElement = IUniWebViewElement
type UniPage = IUniPage

// TODO 调整 framework 层使用方式
globalThis.getUniApp = getUniApp

globalThis.UTSHarmony = UTSHarmony

const uni: UniFrameworkApi = globalThis.uni

uni.createIntersectionObserver = createIntersectionObserver

export {
  openUniApp,
  UniCustomEvent,
  UniTouchEvent,
  UniPointerEvent,
  customElements,
  UniElementImpl,
  UniViewElementImpl,
  UniFormControlViewElementImpl as UniFormControlElement,
  IUniForm,
  UniCustomElement,
  UniElement,
  UniTextElement,
  UniNativeViewElement,
  UniNativeViewElementImpl,
  UniNativeViewEvent,
  uni,
  getRealPath,
  initVar,
  UniCustomEventOptions,
  DOMRect,
  DrawableContext,
  UniPage,
  UniWebViewElement,
  UniWebViewElementImpl
}

export {
  requestAnimationFrame, cancelAnimationFrame
} from './AnimationFrame'

export * as UTSHarmony from './UTSHarmony'

export * from './dom/cssom'

// 如下导出为兼容extapi
export * from './polyfill'

export { getResourceStr, navigator, EventHub } from './helper'

export { getAbilityContext } from './App'

export { UniPageImpl } from './UniPage'

export { UniNativeAppImpl } from './UniNativeApp'

setGlobalVar('TextDecoder', TextDecoder)
setGlobalVar('TextEncoder', TextEncoder)
export {
  TextDecoder,
  TextEncoder
}

export {
  UniRefresherEventDetail,
  UniRefresherEvent,
  UniScrollEventDetail,
  UniScrollEvent,
  UniScrollToLowerEventDetail,
  UniScrollToLowerEvent,
  UniScrollToUpperEventDetail,
  UniScrollToUpperEvent
} from './dom/UniScrollEvent'

export {
  UniResizeObserver,
  UniResizeObserverEntry,
  UniBorderBoxSize,
  UniContentBoxSize,
  UniDevicePixelContentBoxSize
} from './dom/UniResizeObserver'

export {
  UniIntersectionObserver,
  createIntersectionObserver,
  CreateIntersectionObserverOptions,
  UniIntersectionObserverMargins,
  UniIntersectionObserverRectResult,
  UniIntersectionObserverObserveCallbackResult,
  UniIntersectionObserverObserveCallback
} from './dom/UniIntersectionObserver'

export {
  UniWebViewMessageEvent,
  UniWebViewMessageEventDetail,
  UniWebViewContentHeightChangeEvent,
  UniWebViewContentHeightChangeEventDetail,
  UniWebViewErrorEvent,
  UniWebViewErrorEventDetail,
  UniWebViewDownloadEvent,
  UniWebViewDownloadEventDetail,
  UniWebViewLoadingEvent,
  UniWebViewLoadingEventDetail,
  UniWebViewLoadEvent,
  UniWebViewLoadEventDetail,
} from './dom/UniWebViewEvent'

export {
  setGlobalVar
} from './utils'

export {
  Image
} from './dom/Image'

interface Env {
  USER_DATA_PATH: string,
  CACHE_PATH: string,
  SANDBOX_PATH: string
}

interface InternalUniFrameworkApi {
  env: Env,
  createIntersectionObserver: (component: ESObject,
    options: CreateIntersectionObserverOptions) => UniIntersectionObserver
}

export type UniFrameworkApi = And<Record<string, Function | ESObject>, InternalUniFrameworkApi>

// TODO framework js实现的api相关的类型，或许该考虑移动到ets内实现
export {
  CreateSelectorQuery,
  SelectorQueryNodeInfoCallback,
  NodeInfo,
  NodeField,
  NodesRef,
  SelectorQuery,
} from '@dcloudio/uni-app-x/types/uni/uts-plugin-api/lib/uni-createSelectorQuery/utssdk/index'

export {
  UniFormControl
} from '@dcloudio/uni-app-x/types/native'

export {
  OpenDialogPageOptions,
  OpenDialogPageSuccess,
  OpenDialogPageFail,
  OpenDialogPageComplete,
  CloseDialogPageOptions,
  CloseDialogPageSuccess,
  CloseDialogPageFail,
  CloseDialogPageComplete
} from '@dcloudio/uni-app-x/types/uni/uts-plugin-api/lib/uni-dialogPage/utssdk/index'

export {
  NavigateToOptions,
  NavigateToSuccess,
  NavigateToFail,
  NavigateToComplete,
  NavigateBackOptions,
  NavigateBackSuccess,
  NavigateBackFail,
  NavigateBackComplete,
  RedirectToOptions,
  RedirectToSuccess,
  RedirectToFail,
  RedirectToComplete,
  ReLaunchOptions,
  ReLaunchSuccess,
  ReLaunchFail,
  ReLaunchComplete,
  SwitchTabOptions,
  SwitchTabSuccess,
  SwitchTabFail,
  SwitchTabComplete,
} from '@dcloudio/uni-app-x/types/uni/uts-plugin-api/lib/uni-route/utssdk/index'

export {
  HideTabBarOptions,
  HideTabBarSuccess,
  HideTabBarFail,
  HideTabBarComplete,
  ShowTabBarOptions,
  ShowTabBarSuccess,
  ShowTabBarFail,
  ShowTabBarComplete,
  ShowTabBarRedDotOptions,
  ShowTabBarRedDotSuccess,
  ShowTabBarRedDotFail,
  ShowTabBarRedDotComplete,
  HideTabBarRedDotOptions,
  HideTabBarRedDotSuccess,
  HideTabBarRedDotFail,
  HideTabBarRedDotComplete,
  RemoveTabBarBadgeOptions,
  RemoveTabBarBadgeSuccess,
  RemoveTabBarBadgeFail,
  RemoveTabBarBadgeComplete,
  SetTabBarBadgeOptions,
  SetTabBarBadgeSuccess,
  SetTabBarBadgeFail,
  SetTabBarBadgeComplete,
  SetTabBarItemOptions,
  SetTabBarItemSuccess,
  SetTabBarItemFail,
  SetTabBarItemComplete,
  SetTabBarStyleOptions,
  SetTabBarStyleSuccess,
  SetTabBarStyleFail,
  SetTabBarStyleComplete,
} from '@dcloudio/uni-app-x/types/uni/uts-plugin-api/lib/uni-tabBar/utssdk/index'

export {
  PageScrollToOptions,
  PageScrollToSuccess,
  PageScrollToFail,
  PageScrollToComplete,
  PageScrollToErrorCode,
} from '@dcloudio/uni-app-x/types/uni/uts-plugin-api/lib/uni-pageScrollTo/utssdk/index'

export {
  AddInterceptorOptions,
  RemoveInterceptorOptions
} from '@dcloudio/uni-app-x/types/uni/uts-plugin-api/lib/uni-interceptor/utssdk/index'

export {
  OnBackPressOptions,
  OnLaunchOptions,
  OnLoadOptions,
  OnPageScrollOptions,
  OnResizeOptions
} from './lifecycle'

export {
// SetNavigationBarColorOptions,
// SetNavigationBarColorSuccess,
// SetNavigationBarColorFail,
// SetNavigationBarColorComplete,
// SetNavigationBarTitleOptions,
// SetNavigationBarTitleSuccess,
// SetNavigationBarTitleFail,
// SetNavigationBarTitleComplete,
// ShowNavigationBarLoadingOptions,
// ShowNavigationBarLoadingSuccess,
// ShowNavigationBarLoadingFail,
// HideNavigationBarLoadingOptions,
// HideNavigationBarLoadingSuccess,
// HideNavigationBarLoadingFail
} from '@dcloudio/uni-app-x/types/uni/uts-plugin-api/lib/uni-navigationBar/utssdk/index'

export {
  StartPullDownRefreshOptions,
  StartPullDownRefreshSuccess,
  StartPullDownRefreshFail,
  StartPullDownRefreshComplete,
} from '@dcloudio/uni-app-x/types/uni/uts-plugin-api/lib/uni-pullDownRefresh/utssdk/index'

export {
  CanvasRenderingContext2D,
  UniWebViewElementLoadDataOptions
} from '@dcloudio/uni-app-x/types/native'

export {
  UniPath2D as Path2D
} from './UniPath2D'

export {
  formatColorSync
} from './helper/css'