/**
 * 源错误信息对象  
 * @package io.dcloud.uniapp
 */
export class SourceError extends Error {
  /**
   * 创建一个新的 SourceError 对象
   */
  constructor ();

  /**
   * 创建一个指定错误描述信息的 SourceError 对象
   * @param message 源错误描述信息
   */
  constructor (message: string);

  /**
   * 创建一个指定错误描述信息和源错误的 SourceError 对象
   * @param message 源错误描述信息
   * @param options 引发此源错误对象，原始错误对象应该包含在 options.cause 属性中
   * @example
  ```
  try{
    thirdSdkThatCanThrow();
  }catch(err){
    let uerr = new SourceError("New source error", { cause: err});
  }
  ```
   */
  constructor (message: string, options: UTSJSONObject);

  /**
   * 源错误模块名称
   */
  subject?: string | null;

  /**
   * 源错误描述信息
   */
  message: string;

  /**
   * 源错误的错误码
   */
  code: number;
}
