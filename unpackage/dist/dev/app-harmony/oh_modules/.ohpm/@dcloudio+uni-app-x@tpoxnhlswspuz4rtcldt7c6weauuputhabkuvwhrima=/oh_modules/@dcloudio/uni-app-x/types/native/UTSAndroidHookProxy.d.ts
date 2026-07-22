
/**
 * 安卓原应用初始化回调代理
 * 注意：不支持调用uni api 仅适用于原生SDK初始化等
 * @package io.dcloud.uts
 * @autodoc false
 */
export interface UTSAndroidHookProxy {
  /**
   * 安卓原生应用初始化时会调用此接口 可在此处进行相关资源数据初始化 和 模块注册逻辑
   * @param application 安卓原生上下文
   */
  onCreate(application: Application): void
}
