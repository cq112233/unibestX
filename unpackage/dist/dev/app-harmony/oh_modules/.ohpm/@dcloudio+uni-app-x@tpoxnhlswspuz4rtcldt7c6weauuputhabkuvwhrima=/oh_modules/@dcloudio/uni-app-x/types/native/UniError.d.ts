import { IUniError } from "./IUniError";

/**
 * uni api统一错误信息对象  
 * @package io.dcloud.uniapp
 */
export class UniError extends Error implements IUniError {
  /**
   * 创建一个新的 UniError 对象
   */
  constructor ();

  /**
   * 创建一个指定错误描述信息的 UniError 对象
   * @param message 统一错误描述信息
   */
  constructor (message: string);

  /**
   * 创建一个指定错误描述信息和源错误的 UniError 对象
   * @param message 统一错误描述信息
   * @param options 源错误对象，原始错误对象应该包含在 options.cause 属性中
   * @example
  ```
  try{
    thirdSdkThatCanThrow();
  }catch(err){
    let uerr = new UniError("New uni-api error", { cause: err});
  }
  ```
   */
  constructor (message: string, options: UTSJSONObject);

  /**
   * 创建一个指定错误主题、错误码和错误描述信息的 UniError 对象
   * @param errSubject 统一错误主题（模块）名称
   * @param errCode 统一错误码
   * @param errMsg 统一错误描述信息
   * @example
  ```
  let uerr = new UniError("uni-testAPI", 12001, "system not support");
  ```
   */
  constructor (errSubject: string, errCode: number, errMsg: string);

  /**
   * 统一错误主题（模块）名称
   */
  errSubject: string;

  /**
   * 统一错误码
   */
  errCode: number;

  /**
   * 统一错误描述信息
   */
  errMsg: string;

  /**
   * 错误信息中包含的数据
   */
  data: any | null;

  /**
   * 源错误信息，可以包含多个错误，详见SourceError
   */
  cause: Error | null;
}
