/**
 * 组件截图成功的返回数据
 */
export type TakeSnapshotSuccess = {
  /**
   * 截图保存的临时文件路径
   */
  tempFilePath: string
}

/**
 * 组件截图失败的返回数据
 */
export type TakeSnapshotFail = {
  errMsg: string
}


/**
 * 成功回调函数定义
 */
export type TakeSnapshotSuccessCallback = (res: TakeSnapshotSuccess) => void
/**
 * 失败回调函数定义
 */
export type TakeSnapshotFailCallback = (res: TakeSnapshotFail) => void
/**
 * 完成回调函数定义
 */
export type TakeSnapshotCompleteCallback = (res: any) => void

/**
 * 组件截图的参数配置选项
 */
export class TakeSnapshotOptions {

  /**
   * 截图导出类型，目前仅支持 'file' 保存到临时文件目录
   * @defaultValue "file"
   */
  type?: string | null
  /**
   * 截图文件格式，目前仅支持 'png'
   * @defaultValue "png"
   */
  format?: string | null

  /**
   * 接口调用成功的回调函数
   */
  success?: TakeSnapshotSuccessCallback | null
  /**
   * 接口调用失败的回调函数
   */
  fail?: TakeSnapshotFailCallback | null
  /**
   * 接口调用结束的回调函数（调用成功、失败都会执行）
   */
  complete?: TakeSnapshotCompleteCallback | null

}

