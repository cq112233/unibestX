import { SourceError } from "./SourceError";

/**
 * 由多个SourceError源错误组成的错误信息对象  
 * @package io.dcloud.uniapp
 */
export class UniAggregateError extends SourceError {

  /**
   * 创建由多个源错误组成的 UniAggregateError 对象
   * @param message 源错误描述信息
   */
  constructor (errors: Array<SourceError>);

  /**
   * 源错误描述信息
   */
  errors: SourceError[] | null;
}
