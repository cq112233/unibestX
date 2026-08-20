/**
 * 截屏成功返回数据对象
 * @autodoc false
 */
export class ViewToTempFilePathSuccess{
  tempFilePath: string
}
/**
 * 截屏失败返回数据对象
 * @autodoc false
 */
export class ViewToTempFilePathFail{
  errMsg: string
}

/**
 * 截屏配置参数对象
 * @page io.dcloud.uniapp.appframe
 * @autodoc false
 */
export class ViewToTempFilePathOptions {
  /**
   * 组件id
   */
  id: string | null
  /**
   * X轴偏移量，单位px
   */
  offsetX: string | null
  /**
   * Y轴偏移量，单位px
   */
  offsetY: string | null

  /**
   * 是否截取完整内容，包括屏幕外不可见的内容。传入id时会忽略此参数
   */
  wholeContent: boolean
  path: string | null
  /**
   * 是否允许覆盖，true表示截图存在时将被覆盖，false表示截图存在时将返回fail
   */
  overwrite?: boolean | null
  success?: ((res: ViewToTempFilePathSuccess) => void) | null
  fail?:( (res: ViewToTempFilePathFail) => void) | null
  complete?: ((res: any) => void) | null
}
