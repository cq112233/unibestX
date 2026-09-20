/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./iconfont.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./iconfont.uts` 解析到同目录的
 * `iconfont.d.uts.ts`，因此本文件必须与 `iconfont.uts` **同目录同名**，不能挪走。
 *
 * 修改 `iconfont.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */
/**
 * 字体家族名
 *
 * 刻意不叫 iconfont：那是阿里 CSS 里自带的通用名，项目里也存在同名的历史字体
 * （static/iconfont.ttf）。同名家族的 @font-face 会互相顶掉，且顶掉是静默的。
 */
export declare const ALI_ICON_FONT_FAMILY: string;

/**
 * 注册阿里 iconfont 字体与图标表
 *
 * ⚠️ 三端都必须调用一次（宿主 App.uvue 的 onLaunch 里）：
 * - 小程序端靠它触发 uni.loadFontFace 把字体装进全局；
 * - **另外两端也靠它灌入注册表** —— 没有注册表，getAliIconCode 查不到码点，
 *   图标名会静默渲染成空白（不报错）。
 * 时序是安全的：onLaunch 早于任何页面 / 组件渲染，注册表必然就绪。
 *
 * 没有参数：字体 URL 与图标表都来自本模块顶部 import 的 common/icons.uts（生成物）。
 *
 * ⚠️ 小程序真机需把字体域名（本项目是 at.alicdn.com）加进「downloadFile 合法域名」，
 * 否则 loadFontFace 会 fail（微信开发者工具可勾选「不校验合法域名」绕过，但真机不生效）。
 * 想彻底免掉这一步，把 ttf 放进 static/ 走本地路径即可。
 *
 * @example
 * ```uts
 * // App.uvue 的 onLaunch 里调用一次即可
 * setupIconfont();
 * ```
 */
export declare function setupIconfont(): void;

/**
 * 取图标名对应的 Unicode 码点（十六进制字符串，不含 \u）
 *
 * 给「App 端 web-view 渲染」这类拿不到字体内部映射的场景用：
 * 码点由注册表（setupIconfont 装入的 common/icons.uts 那张表）统一持有，
 * 组件只需把图标名丢进来，不必再抄一份图标表。
 *
 * 图标名不存在时返回空串。注意：setupIconfont 未被调用时**所有**名字都会返回空串。
 *
 * @example
 * ```uts
 * getAliIconCode('gear') // 'E602'
 * getAliIconCode('不存在的名字') // ''
 * ```
 */
export declare function getAliIconCode(name: string): string;
