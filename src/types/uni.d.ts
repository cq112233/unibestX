// ==========================================
// uni-app X 类型补充声明
//
// uni-app X 的 Uni 接口定义为空接口 `interface Uni {}`，
// 部分 H5/小程序 API（如 vibrateShort）未包含在类型中。
// 通过声明合并在不影响编译产物的情况下补充类型。
// ==========================================

interface Uni {
  /**
   * 使手机发生较短时间的振动（15ms）
   *
   * 文档: http://uniapp.dcloud.io/api/system/vibrate?id=vibrateshort
   */
  vibrateShort(options: {
    /** 接口调用成功的回调函数 */
    success?: (result: any) => void
    /** 接口调用失败的回调函数 */
    fail?: (result: any) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: (result: any) => void
  }): void

  /**
   * 设置系统剪贴板内容
   */
  setClipboardData(options: {
    data: string
    success?: (result: any) => void
    fail?: (result: any) => void
    complete?: (result: any) => void
  }): void

  /**
   * 显示消息提示框
   */
  showToast(options: {
    title: string
    icon?: string
    image?: string
    duration?: number
    position?: string
    success?: (result: any) => void
    fail?: (result: any) => void
    complete?: (result: any) => void
  }): void
}
