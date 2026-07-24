type ExpectedTypeName = 'string' | 'number' | 'boolean' | 'object' | 'array';
type ExpectedAttributeType = string | number | boolean | undefined | null | object | object[];
/**
 * 将字符串类型转为目标类型的通用转换方法
 * @param value setAttribute设置的字符串值
 * @param expectedType 期望类型
 * @param defaultValue 默认值，在value为非法字符串时返回。比如期望是数字，用户设置为123abc为非法字符串。在期望为数字时允许用户传递科学计数法字符串
 * @returns
 */
export declare function convertStringAttribute<T extends ExpectedAttributeType>(value: string | T, expectedType: ExpectedTypeName, defaultValue?: T): T | undefined;
export {};
