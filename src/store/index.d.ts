/**
 * Pinia Store 模块类型声明
 * 供 TS / IDE 解析 `@/src/store` 导入
 */
export * from './types.uts';
export * from './vapor/app';
export * from './vapor/i18n';
export * from './vapor/modal';
export * from './vapor/theme';
export * from './vapor/token';
export * from './vapor/user';

declare const pinia: any;
export default pinia;
