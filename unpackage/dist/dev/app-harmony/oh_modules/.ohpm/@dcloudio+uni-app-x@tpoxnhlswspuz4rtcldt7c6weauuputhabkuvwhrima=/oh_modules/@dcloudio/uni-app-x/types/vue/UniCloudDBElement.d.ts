/// <reference path="../native/UniElement.d.ts" />

type SuccessCallback<T> = (res: T | null) => void | null
type FailCallback = (err: any | null) => void | null
type CompleteCallback = () => void | null

type GetSuccessCallback = SuccessCallback<UniCloudDBGetResult>
type AddSuccessCallback = SuccessCallback<UniCloudDBAddResult>
type RemoveSuccessCallback = SuccessCallback<UniCloudDBRemoveResult>
type UpdateSuccessCallback = SuccessCallback<UniCloudDBUpdateResult>

export type UniCloudDBComponentPaginationType = {
  /**
   * 当前页
   */
  current: number
  /**
   * 每页数据量大小
   */
  size: number
  /**
   * 数据库的总数据量，设置 :getcount="true" 时有效
   */
  count: number
}

export type UniCloudDBComponentLoadDataOptions = {
  /**
   * 是否清空数据
   * @defaultValue false
   */
  clear?: boolean | null
  /**
   * 当前第几页
   */
  current?: number | null
  /**
   * 成功回调
   */
  success?: GetSuccessCallback
  /**
   * 失败回调
   */
  fail?: FailCallback
  /**
   * 完成回调
   */
  complete?: CompleteCallback
}

export type UniCloudDBComponentAddOptions = {
  /**
   * 是否显示 Toast
   * @defaultValue true
   */
  showToast?: boolean | null
  /**
   * Toast 标题
   */
  toastTitle?: string | null
  /**
   * 是否需要 Loading
   * @defaultValue true
   */
  needLoading?: boolean | null
  /**
   * Loading 标题
   */
  loadingTitle?: string | null
  /**
   * 成功回调
   */
  success?: AddSuccessCallback
  /**
   * 失败回调
   */
  fail?: FailCallback
  /**
   * 完成回调
   */
  complete?: CompleteCallback
}

export type UniCloudDBComponentRemoveOptions = {
  /**
   * 确认框标题
   */
  confirmTitle?: string | null
  /**
   * 确认框内容
   */
  confirmContent?: string | null
  /**
   * 是否显示删除确认框
   * @defaultValue true
   */
  needConfirm?: boolean | null
  /**
   * 是否需要 Loading
   * @defaultValue true
   */
  needLoading?: boolean | null
  /**
   * Loading 标题
   */
  loadingTitle?: string | null
  /**
   * 成功回调
   */
  success?: RemoveSuccessCallback
  /**
   * 失败回调
   */
  fail?: FailCallback
  /**
   * 完成回调
   */
  complete?: CompleteCallback
}

export type UniCloudDBComponentUpdateOptions = {
  /**
   * 是否显示更新后 Toast
   * @defaultValue true
   */
  showToast?: boolean | null
  /**
   * 更新成功后 Toast 标题
   * @defaultValue ""
   */
  toastTitle?: string | null
  /**
   * 确认框标题
   */
  confirmTitle?: string | null
  /**
   * 确认框内容
   */
  confirmContent?: string | null
  /**
   * 是否显示更新确认框
   * @defaultValue true
   */
  needConfirm?: boolean | null
  /**
   * 是否需要 Loading
   * @defaultValue true
   */
  needLoading?: boolean | null
  /**
   * Loading 标题
   */
  loadingTitle?: string | null
  /**
   * 成功回调
   */
  success?: UpdateSuccessCallback
  /**
   * 失败回调
   */
  fail?: FailCallback
  /**
   * 完成回调
   */
  complete?: CompleteCallback
}

/**
 * @package io.dcloud.uniapp.framework
 */
export interface UniCloudDBElement extends UniElement {
  /**
   * 已加载的数据
   */
  dataList: Array<UTSJSONObject>

  /**
   * 加载数据
   * 当 <unicloud-db> 组件的 manual 属性设为 true 或者 loadtime 属性设置为 manual 时，不会在页面初始化时联网查询数据，此时需要通过本方法在需要的时候手动加载数据。
   * @param {UniCloudDBComponentLoadDataOptions} options 可选参数
   */
  loadData(options?: UTSJSONObject | null): void

  /**
   * 加载更多数据
   * 在列表的加载下一页场景下，使用ref方式访问组件方法，加载更多数据，每加载成功一次，当前页 +1
   */
  loadMore(): void

  /**
   * 新增数据
   * @param value 新增数据.
   * @param {UniCloudDBComponentAddOptions} options 可选参数
   */
  add(value: UTSJSONObject, options?: UTSJSONObject | null): void

  /**
   * 移除数据
   * @param id 传入数据库的 _id 或 _id 数组.
   * @param {UniCloudDBComponentRemoveOptions} options 可选参数
   */
  remove(): void
  remove(id?: any, options?: UTSJSONObject | null): void

  /**
   * 更新数据
   * @param id 数据库字段的唯一标识.
   * @param value 需要修改的新数据.
   * @param {UniCloudDBComponentUpdateOptions} options 可选参数
   */
  update(id: string, value: UTSJSONObject, options?: UTSJSONObject | null): void
}

export let UniCloudDBElement: {
  prototype: UniCloudDBElement
  new (): UniCloudDBElement
}
