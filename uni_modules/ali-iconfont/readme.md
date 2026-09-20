# ali-iconfont

阿里图标库（iconfont）图标的跨端渲染组件。适用于 **uni-app x**（`.uvue`）。

## 用法

```html
<AliIconfontIcon name="gear" :size="24" color="#f59e0b" />
<AliIconfontIcon name="gear" :size="32" theme="dark" />
```

`uni_modules/<插件>/components/<组件>/<组件>.uvue` 会被 easycom autoscan 自动收录，
所以直接写标签即可；也可以显式 import：

```uts
import AliIconfontIcon from '@/uni_modules/ali-iconfont/components/AliIconfontIcon/AliIconfontIcon.uvue';
```

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `name` | `String` | `''` | 图标名，取值见**注册表**（由 `setupIconfont()` 装进注册表的 `common/icons.uts` 里的 `ALI_ICONS`）。名字不存在、或宿主没调 `setupIconfont()` 时渲染为空白 |
| `size` | `Number` | `60` | 图标尺寸（px） |
| `color` | `String` | `#f59e0b` | 图标颜色。**仅非 App 端生效**，见下方「已知限制」 |
| `theme` | `String` | `'auto'` | 深浅色，**仅 App 端有意义**：`'auto'` 跟随系统 / `'light'` / `'dark'` |

### 字体注册

**三端都必须调用一次**，在宿主 `App.uvue` 的 `onLaunch` 里，**无参**：

```uts
import { setupIconfont } from '@/uni_modules/ali-iconfont/common/iconfont.uts';

setupIconfont();
```

它做两件事：

- 小程序端把字体装进全局（内部 `uni.loadFontFace`，URL 取自 `common/icons.uts`）；
- **三端都靠它灌入注册表** —— 没有注册表，组件里 `getAliIconCode` 查不到码点，
  所有图标名都会静默渲染成空白（不报错）。

字体 URL 与「图标名 → 码点」表都由插件自持（`common/icons.uts`，由 `scripts/gen-icons.mjs`
从阿里 CSS **整文件生成**），所以宿主不必 import 配置、也不必传参。

**换图标 / 换图标库只改插件根目录的 `iconfont.config.mjs`**（一个 CSS 链接 + 一个排除名单），
再在项目根目录跑一条 `pnpm icons` —— 它同时更新：小程序用的字体地址、图标名→码点表、
Web/H5 的 `@font-face`、以及 App 端网页里内联的字体。宿主与插件的**源码一个字都不用改**。

这跟演示页里那份 base64 字体是同一个道理：插件已经跟这个阿里项目绑定，配置由脚本产出、
放在插件里，比放在宿主里再让脚本回头改宿主的文件更不容易漂。

Web / H5 端的 `@font-face` 由同一轮生成写进 `components/AliIconfontIcon/AliIconfontIcon.uvue`
的 `<style>` 块：`@font-face` 是全局 at-rule、不受 scoped 影响，而组件的 style 会随组件进产物
（官方 `uni-icons` 同款做法），所以宿主不必在自己的全局样式里再写一遍。
两处产物同源于同一份 CSS，不会出现「小程序拉 A 字体、Web 拉 B 字体」。

## 跨端渲染方式

同一个图标在两端走完全不同的路：

| 端 | 渲染方式 | 字体来源 |
| :--- | :--- | :--- |
| App（Android / iOS / HarmonyOS） | `<web-view>` 加载插件自带的 `static/app/ali-iconfont-demo.html`，由页面里的 `<span>` 渲染字形 | 该页里 **base64 内联** |
| Web / H5 | 原生 `<text>` + 内联 `font-family` | `AliIconfontIcon` 组件自带的 `@font-face`（阿里 CDN） |
| 小程序 | 原生 `<text>` + 内联 `font-family` | `setupIconfont()` 的 `uni.loadFontFace`（阿里 CDN） |

App 端为什么绕道 web-view：系统 WebView 加载本地 `file://` 页面时再去跨域拉 CDN 字体，
可能被跨域策略拦掉，且断网必挂。演示页把 5KB 的 ttf 直接内联进去，离线也能渲染。
演示页放在 `static/app/` 这个条件编译目录下（`app` = 仅 App 端），H5 / 小程序包里不会带上它。

## 必须保持一致的地方

字体家族名 `AlibabaIconfont` 的真源头是 `common/iconfont.uts` 的 `ALI_ICON_FONT_FAMILY`。
插件内部（如 `AliIconfontIcon`）一律引用该常量，不写字面量。另外两处都依赖它，但**不手写**：

1. `components/AliIconfontIcon/AliIconfontIcon.uvue` 里 `@font-face` 的 `font-family` ——
   该 `<style>` 块里的**生成区**，由 `gen-icons.mjs` 读取上述常量写出；改了常量跑 `pnpm icons`
   即可同步，`pnpm icons:check` 会校验是否漂了
2. `static/app/ali-iconfont-demo.html` 里的 `font-family` —— 生成物，
   真正的字面量在 `scripts/gen-demo.mjs` 的模板里，改模板后重跑生成器

刻意不叫 `iconfont`：那是阿里 CSS 自带的通用名，宿主里也存在同名的历史字体
（`static/iconfont.ttf`）。两个同名家族的 `@font-face` 会互相顶掉，且顶掉是静默的 ——
所以生成的 `@font-face` 一律用 `AlibabaIconfont` 这个插件自有名字。

## 小程序注意事项

- 真机需把 `at.alicdn.com` 加进**「downloadFile 合法域名」**，否则 `uni.loadFontFace` 会 fail。
  开发者工具里可勾选「不校验合法域名」绕过，但真机不生效。
- `uni.loadFontFace` 必须带 `global: true`，否则字体不会渗透进自定义组件，组件里会渲染成方块。
- 除微信外的小程序端走的是同一套代码路径（`#ifdef MP`），但**未逐个实测**；
  `package.json` 的平台矩阵里只声明了 `mp-weixin`。

## 已知限制

- **App 端的 `color` 属性不生效**：演示页把色值写死在 CSS 里（`#f59e0b`），
  组件没有把它传过去。要支持需给演示页加一个 `color` 查询参数并重新生成。
- App 端 `web-view` 自身背景不透明，深色主题靠演示页把背景画成 `#1e293b` 来融入卡片；
  若宿主的深色底色不是这个值，需要同步改 `scripts/gen-demo.mjs` 后重新生成。
- 小程序端字体从 CDN 加载，首屏可能有短暂的方块（字体未就绪）；Web / H5 端同理。

## 重新生成

`common/icons.uts`、`components/AliIconfontIcon/AliIconfontIcon.uvue` 的 style 生成区，
以及 `static/app/ali-iconfont-demo.html` 都是生成物，**不要手改** ——
换图标 / 换库改配置后跑命令重生成，见下节。脚本都在插件 `scripts/` 下，
且用自身位置定位插件目录，在哪个目录执行都一样。

### 图标库配置（`iconfont.config.mjs`）

换图标 / 换库只改这一个文件（插件根目录），改完在项目根目录跑 `pnpm icons`：

```js
// uni_modules/ali-iconfont/iconfont.config.mjs
export default {
  css: 'https://at.alicdn.com/t/c/font_5229558_ba6vyj2r9g5.css', // 阿里「Font class」的 CSS 链接
  exclude: ['wuguan'],   // 阿里项目里还留着、但本项目不要的图标
  fallbackIcon: 'gear'   // App 端演示页的兜底图标：只写名字，码点生成时查
};
```

数据源就是那份 CSS：一份装齐了字体文件地址（woff2/woff/ttf）与图标名→码点
（`.icon-<名字>:before { content: "\xxxx" }`），且是公开 URL，不用先下载解压。
**增删图标请在阿里图标库项目里改**，保存后重新复制 CSS 链接填进 `css` —— 那个链接会变。

```bash
pnpm icons          # 改完配置跑这一条：更新全部三处产物（含 App 端网页里内联的字体）
pnpm icons:check    # 只校验不写盘：用来发现「改了配置但忘了跑」
```

| 产物 | 内容 | 生成方式 |
| :--- | :--- | :--- |
| `common/icons.uts` | `ALI_ICON_FONT_URL` + `ALI_ICONS`（由 `common/iconfont.uts` import，`setupIconfont()` 无参使用） | **整个文件**覆盖（无标记区） |
| `AliIconfontIcon.uvue` 的 `style` 块 | `@font-face`（Web / H5 端用，套在 `#ifdef H5 \|\| WEB` 守卫里） | 只替换 `>>> gen-icons.mjs 生成区开始` 到 `<<< gen-icons.mjs 生成区结束` 之间的部分 |
| `static/app/ali-iconfont-demo.html` | App 端 web-view 页面（字体 base64 内联） | 整页生成，字体按配置的 CSS 现拉 |

同一份 CSS 喂三处产物，不会出现「小程序拉 A 字体、Web 拉 B 字体、App 内联 C 字体」。
**直接手改生成物会被下次运行覆盖。**

**为什么必须跑这条命令、不能纯手工改产物**：图标码点表是编译期就要定的，App 端网页里的字体
是 base64 焊死的 —— 两者都不是运行期读个变量能解决的。所以要换图标库，就必然有「把新数据
落进产物」这一步；`pnpm icons` 就是这一步。

改了 `common/icons.uts` 的**导出面**（增删或改名那两个常量）后，要在宿主根目录跑一次
`node scripts/gen-uts-dts.mjs`，同步它的 `icons.d.uts.ts` 声明；只换图标 / 换库
（值变、导出面不变）则不需要。`common/iconfont.uts` 的**签名或导出面**改了同理
（它的 `iconfont.d.uts.ts` 是宿主 `App.uvue` 解析 `setupIconfont` 的唯一依据 ——
`uni_modules` 在 tsconfig 的 `exclude` 里，TS 读到的是声明文件而不是 `.uts` 源码）。

### 排除个别图标（配置里的 `exclude`）

图标表是那份 CSS 的**镜像**，而 CSS 里没有「我不要这个」这条信息 —— 所以「自动扣掉某个图标」
必须有第二个输入，就是配置里的 `exclude`：

```js
exclude: ['wuguan'], // 阿里项目里还留着、但本项目不需要的图标：生成时跳过
```

- 名单里的图标生成时跳过；`icons:check` 用同一份名单校验，所以校验仍然绿；
- 名字写错、或该图标已从阿里项目删掉 —— 都直接报错退出，不会「静默地少排除一个」；
- 名单把所有图标都排除了会报错退出（图标表不能是空的）；
- 因此表是「CSS 减 `exclude`」，不再是纯镜像。想回到纯镜像：去阿里项目里删掉那个图标，
  再把它从名单里移除；
- 放在配置文件里（而不是只做一个 CLI 参数）是刻意的：只做参数的话，任何一次不带该参数的
  重跑（CI、别人手敲）都会把那个图标悄悄带回来。

### 演示页（App 端 web-view 用）

`pnpm icons` 已经把它一起重生成了（字体按配置的 CSS 现拉）。单独调这个脚本时：

```bash
node scripts/gen-demo.mjs                       # 只改了 CSS / JS：复用现有 HTML 里内联的字体
node scripts/gen-demo.mjs --fetch-font          # 换库：按配置的 CSS 拉新字体
node scripts/gen-demo.mjs --font ./new.ttf      # 指定字体文件（也接受 http(s) 链接）
node scripts/gen-demo.mjs --extract ./out.ttf   # 把现有 HTML 里内联的字体导出成 ttf（备份 / 交接用）
```

插件里**刻意不放字体二进制**：它已经 base64 内联在生成物里了，再存一份是重复。
所以默认参数下脚本直接从现有 HTML 里把内联的 base64 解出来复用 —— 只调 CSS / JS 时无需任何外部文件；
首次生成（生成物不存在）才必须显式给 `--font` / `--fetch-font`。字体本身也不会丢：`--extract` 随时能还原。

页面里的兜底码点由 `fallbackIcon` 从**已生成的图标表**里查出后写进去，模板里没有写死的码点 ——
所以不会出现「兜底指着新库里没有的码点、字体一重建就渲染成豆腐块」。

### 换整个图标库

把新库的「Font class」CSS 链接填进 `iconfont.config.mjs` 的 `css`，跑 `pnpm icons` 就完了 ——
一个链接同时带齐了字体地址、图标表、`@font-face` 与演示页字体，不再是「第一步改 URL、
第二步改图标表、第三步换演示页字体」。只需要人看一眼两处：

1. `exclude` 名单：新库里没有的名字会让脚本报错退出（刻意的），按新库的实际情况调整；
2. `fallbackIcon`：同样必须是新表里存在的图标名，否则脚本报错（不是静默兜错）。

## 目录结构

```text
ali-iconfont/
├── package.json                        插件清单
├── readme.md
├── iconfont.config.mjs                 ★ 换图标 / 换库只改这里：CSS 链接 + exclude 名单 + fallbackIcon
├── components/AliIconfontIcon/         组件（App → web-view；其余端 → 原生 text）+ style 生成区 @font-face
├── common/iconfont.uts                 插件侧能力：ALI_ICON_FONT_FAMILY、图标注册表、setupIconfont()、getAliIconCode
├── common/icons.uts                    URL + 图标表（生成物；由 iconfont.uts import，setupIconfont 无参使用）
├── scripts/ali-css.mjs                 两个生成器共用的那一半：读配置、拉 CSS、解析（不参与编译）
├── scripts/gen-icons.mjs               阿里 CSS → common/icons.uts + 组件 style 生成区（不参与编译）
├── scripts/gen-demo.mjs                演示页生成器（不参与编译）
└── static/app/ali-iconfont-demo.html   App 端 web-view 加载的本地页（生成物）
```

**运行期代码**不写死宿主数据 —— 字体 URL 与图标表都在同目录的生成物 `common/icons.uts` 里，
由脚本产出、由 `iconfont.uts` import，所以换图标库＝改配置跑一条命令，插件源码一个字都不用动。

`scripts/` 下是**宿主侧工具**（不参与编译），它们自己也**不含**宿主数据 —— 数据源与排除名单
都在 `iconfont.config.mjs`，脚本从那里读。所以换宿主时不必在脚本里翻常量。
（`--css <URL 或本地路径>` 仍可临时覆盖配置里的链接，用于离线 / CI 缓存。）

两个生成器共用同一份「读配置 + 拉 CSS + 解析」的实现（`scripts/ali-css.mjs`），理由写在那个文件
开头：它们必须对「当前绑的是哪个库」给出同一个答案，各写一份解析迟早会漂，而漂的后果是
小程序拉 A 字体、App 内联 B 字体的静默错配。

宿主项目侧的改动只有 script 块的一行调用，没有任何生成物：

```text
<宿主>/
└── App.uvue    script 块：import { setupIconfont }，onLaunch 里调一次（无参）
                style  块：不用动 —— @font-face 跟着 AliIconfontIcon 组件走
```

⚠️ 当前宿主（unibestX）**没有**这行调用，也没有页面渲染 `AliIconfontIcon` —— 这个插件处于
「装着但没用」的状态。要用它，除了写组件标签，还要把上面那行 `setupIconfont()` 加回
`App.uvue` 的 `onLaunch`：漏掉它组件查不到码点，图标会**静默渲染成空白**（不报错）。
`App.uvue` 里那条注释也记着这件事。
