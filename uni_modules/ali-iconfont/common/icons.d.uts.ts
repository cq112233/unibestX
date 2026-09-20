/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./icons.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./icons.uts` 解析到同目录的
 * `icons.d.uts.ts`，因此本文件必须与 `icons.uts` **同目录同名**，不能挪走。
 *
 * 修改 `icons.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */
/**
 * 字体文件地址（阿里 CDN，.ttf）
 *
 * 只有小程序端在运行期用得到（uni.loadFontFace 需要它）；Web / H5 端不读这个常量，
 * 而是用同一份 CSS 生成到 AliIconfontIcon 组件 style 块里的 @font-face。
 *
 * 用字体文件而不是阿里给的 .js：那个 .js 是 Symbol(SVG Sprite) 模式，靠 <svg><use>
 * 渲染，只有 H5 能用；字体文件 Web 端的 @font-face 与小程序端的 uni.loadFontFace 都能吃。
 */
export declare const ALI_ICON_FONT_URL: string;

/**
 * 图标名 → Unicode 码点（十六进制，不含 \u）
 *
 * 由脚本从阿里 CSS 的 `.icon-<名字>:before { content: "\xxxx" }` 解析而来，**不要手改**：
 * 增删图标请在阿里图标库里改完重新拉取 CSS 后重跑脚本。
 * 当前共 12 个图标。
 *
 * 字体家族名固定为 `AlibabaIconfont`，由插件持有（common/iconfont.uts 的 ALI_ICON_FONT_FAMILY）——
 * 它是插件的身份而不是宿主配置，所以不在这里生成。
 */
export declare const ALI_ICONS: UTSJSONObject;
