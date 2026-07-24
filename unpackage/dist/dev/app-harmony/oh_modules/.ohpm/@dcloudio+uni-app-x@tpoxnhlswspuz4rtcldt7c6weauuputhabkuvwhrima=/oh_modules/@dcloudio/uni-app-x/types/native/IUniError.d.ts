import { AsyncApiResult } from "./AsyncApiResult";

export interface IUniError extends AsyncApiResult {
  /**
   * 统一错误码
   */
  errCode: number;
  /**
   * 统一错误主题（模块）名称
   */
  errSubject: string;
  /**
   * 错误信息中包含的数据
   */
  data: any | null;
  /**
   * 源错误信息，可以包含多个错误，详见SourceError
   */
  cause: Error | null;
}
