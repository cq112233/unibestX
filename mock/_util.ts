export type Result<T = any> = {
  code: number;
  message: string;
  data: T;
};

/**
 * 成功统一返回结构包装器
 */
export function resultSuccess<T = any>(data: T, message: string = 'ok'): Result<T> {
  return {
    code: 200,
    message,
    data
  };
}

/**
 * 失败统一返回结构包装器
 */
export function resultError(message: string = 'fail', code: number = -1, data: any = null): Result<any> {
  return {
    code,
    message,
    data
  };
}

/**
 * 数组内存内存分页辅助函数
 */
export function pagination<T = any>(pageNo: number, pageSize: number, array: T[]): T[] {
  const offset = (pageNo - 1) * Number(pageSize);
  return offset + Number(pageSize) >= array.length
    ? array.slice(offset, array.length)
    : array.slice(offset, offset + Number(pageSize));
}
