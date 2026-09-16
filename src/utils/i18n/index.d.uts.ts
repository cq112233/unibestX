/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./index.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./index.uts` 解析到同目录的
 * `index.d.uts.ts`，因此本文件必须与 `index.uts` **同目录同名**，不能挪走。
 *
 * 修改 `index.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */
/**
 * 通用 i18n 翻译函数（未找到翻译时自动回退返回原 key 字符串）
 * @param key 翻译的 key
 * @param named 命名参数
 */
export declare function t(key: string, named: UTSJSONObject | null = null): string;

export declare function $t(key: string, named: UTSJSONObject | null = null): string;

/**
 * 获取 %xxx% 格式包装或普通 key 的多语言翻译文本（未找到时自动回退返回原 key 字符串）
 * 例如：%basic.langTitle% 或 basic.langTitle
 * @param key 多语言 key
 */
export declare function getI18nText(key: string): string;

/**
 * 设置原生 TabBar 各项的多语言文本 (设置 uni.setTabBarItem)
 */
export declare function setTabbarItem(): void;

/**
 * 设置原生/当前页面 NavigationBar (导航栏) 标题的多语言文本
 * @param titleKey 标题的多语言 key，支持 'basic.langTitle' 或 '%basic.langTitle%' 格式
 */
export declare function setNavigationBarTitle(titleKey: string): void;

/**
 * 非 vue / uvue 文件中使用 i18n 测试示例
 */
export declare function testI18n(): void;

/**
 * 国际化多语言工具聚合类
 *
 * 集中呈现国际化翻译与标题设置方法，一目了然；同时支持面向对象式 `i18nUtils.xxx()` 调用。
 *
 * @example
 * ```uts
 * // 方式 1：标准具名导入
 * import { t, getI18nText } from '@/src/utils/i18n/index.uts';
 *
 * // 方式 2：对象单例导入（一目了然）
 * import { i18nUtils } from '@/src/utils/i18n/index.uts';
 * console.log(i18nUtils.t('app.name'));
 * ```
 */
export declare class I18nUtils {
  t(key: string, named: UTSJSONObject | null = null): string;

  $t(key: string, named: UTSJSONObject | null = null): string;

  getI18nText(key: string): string;

  setTabbarItem(): void;

  setNavigationBarTitle(titleKey: string): void;

  testI18n(): void;
}

/** 国际化多语言工具全局单例 */
export declare const i18nUtils: I18nUtils;

export default i18nUtils;
