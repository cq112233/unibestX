import { AllowedComponentProps, VNodeProps } from './_common'

declare interface NavbarMiniProps {
  /**
   * 是否开启顶部安全区适配
   * @default true
   */
  safeAreaInsetTop?: boolean
  /**
   * 导航栏是否固定在顶部
   * @default true
   */
  fixed?: boolean
  /**
   * 左边返回图标的名称，只能为uView自带的图标
   * @default "arrow-leftward"
   */
  leftIcon?: string
  /**
   * 导航栏背景设置
   * @default "rgba(0,0,0,.15)"
   */
  bgColor?: string
  /**
   * 导航栏高度(不包括状态栏高度在内，内部自动加上)，单位px
   * @default "32px"
   */
  height?: string | number
  /**
   * 左侧返回图标的大小
   * @default "20px"
   */
  iconSize?: string | number
  /**
   * 左侧返回图标的颜色
   * @default "#fff"
   */
  iconColor?: string
  /**
   * 点击左侧区域(返回图标)，是否自动返回上一页
   * @default true
   */
  autoBack?: boolean
  /**
   * 首页路径
   */
  homeUrl?: string
  /**
   * 点击左侧区域
   */
  onLeftClick?: () => any
  /**
   * 点击首页区域
   */
  onHomeClick?: () => any
}

declare interface NavbarMiniSlots {
  /**
   * 自定义左侧部分内容
   */
  ['left']?: () => any
  /**
   * 自定义中部内容
   */
  ['center']?: () => any
}

declare interface _NavbarMini {
  new (): {
    $props: AllowedComponentProps &
      VNodeProps &
      NavbarMiniProps
    $slots: NavbarMiniSlots
  }
}

export declare const NavbarMini: _NavbarMini