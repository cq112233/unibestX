import type {
  onBackPress,
  onLaunch,
  onLoad,
  onPageScroll,
  onResize
} from '@dcloudio/uni-app-x/types/vue/LifeCycle'

/**
 * 语法仓库直接将OnResizeOptions放在了全局，鸿蒙无法使用。因此使用此方式来推导
 */
type GetLifeCycleParamType<T extends (...args: any) => any> = Parameters<Parameters<T>[0]>[0]

export type OnBackPressOptions = GetLifeCycleParamType<typeof onBackPress>
export type OnLaunchOptions = GetLifeCycleParamType<typeof onLaunch>
export type OnLoadOptions = GetLifeCycleParamType<typeof onLoad>
export type OnPageScrollOptions = GetLifeCycleParamType<typeof onPageScroll>
export type OnResizeOptions = GetLifeCycleParamType<typeof onResize>