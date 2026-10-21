# src/i18n 国际化多语言（lime-i18n · 组合式 · 持久化）

对标 `vue-i18n` 形态的国际化层：文案集中在 [locales/](locales/) 的 JSON 里，页面用 `$t()` / `getI18nText()` 取值，切语言只调 `useI18nStore().setLocale()`，全页响应式刷新并由插件自动持久化。底层用三方插件 [lime-i18n](../../uni_modules/lime-i18n/)（参考 vue-i18n 实现的 UTS 版），在 [main.uts](../../main.uts) 里 `app.use(i18n)` 注册。

> 🚨 **文案一律写进 [locales/](locales/) 的 JSON，不要在页面里散落硬编码中文。** 漏配的 key 会原样显示成 key 本身（`$t` 的兜底行为），线上就是一条肉眼可见的英文 key，非常难看。

---

## 目录结构

```text
src/i18n/
├── index.uts                     # i18n 实例：createI18n + 初始语言解析（持久化恢复）
├── utils/
│   └── index.uts                 # ⭐ 业务入口：$t / getI18nText / setNavigationBarTitle / I18nUtils
└── locales/
    ├── zh-CN.json                # 简体中文语言包（唯一真源之一）
    └── en-US.json                # 英语语言包（唯一真源之一，同时是 fallbackLocale）
```

| 你要做的事 | 去哪个文件 |
| :--- | :--- |
| 加 / 改一句文案 | [locales/zh-CN.json](locales/zh-CN.json) + [locales/en-US.json](locales/en-US.json)（**两个文件都要加**） |
| 页面里取文案、切语言 | [utils/index.uts](utils/index.uts) |
| 换默认语言、加一门语言 | 默认语言改 `.env` 的 `VITE_DEFAULT_LOCALE`；加语言改 [index.uts](index.uts) 的 `messages` |
| 页面标题跟随语言 | [utils/index.uts](utils/index.uts) 的 `setNavigationBarTitle()` |

---

## 快速上手

### 1. 页面 / 组件里取文案

```uts
import { $t } from '@/src/i18n/utils/index.uts';

// 普通文案
const title = $t('basic.langTitle');

// 具名插值：语言包里写 "{msg}，世界！"，这里传同名参数
const hello = $t('message.hello', { msg: 'hi' } as UTSJSONObject);
```

> 💡 模板里也可以直接用插件注入的全局 `$t`（lime-i18n 在 `install` 时挂到 `globalProperties`），
> 但**项目内统一从 `@/src/i18n/utils/index.uts` 具名导入** —— 回退行为与类型口径只有这一处，不易分叉。

### 2. 切换语言（联动 TabBar / 持久化）

```uts
import { $t } from '@/src/i18n/utils/index.uts';
import { useI18nStore } from '@/src/store/index.uts';
import { setTabbarItem } from '@/src/tabbar/index.uts';

const i18nStore = useI18nStore();

function switchLanguage(lang: string): void {
  i18nStore.setLocale(lang); // 同步 i18n.global.locale + 写 Storage
  setTabbarItem();           // 自定义 TabBar 文案不是响应式的，需手动刷一次
}
```

### 3. 让页面标题跟随语言

```uts
import { setNavigationBarTitle } from '@/src/i18n/utils/index.uts';

// 传 key（不是翻译后的文本）：内部会翻译，并广播 setNavbarTitle 事件给自定义 navbar
setNavigationBarTitle('basic.langTitle');
```

---

## 三个取值函数的区别（别用错）

| 函数 | 行为 | 用在哪 |
| :--- | :--- | :--- |
| `$t(key, named?)` / `t(key, named?)` | 直接查翻译；**查不到就原样返回 key**（不抛错、不返回空串） | 确定是 key 的场景：页面文案、Tab 文案 |
| `getI18nText(text)` | 先判断「是不是 key 形态」，是才查；中文标题等展示原文**原样返回**（不产生缺 key 噪音） | 值来源不确定的场景：`pages.json` 里的标题、配置项 |
| `isI18nKeyLike(text)` | 只判断形态：非空、含 `.`、且全为可打印 ASCII | 需要自己写判断逻辑时 |

```uts
getI18nText('basic.langPreview');   // → 翻译结果
getI18nText('%basic.langPreview%'); // → 翻译结果（%xxx% 显式包装 = 强制走翻译）
getI18nText('语言设置');             // → '语言设置'（非 key 形态，原样返回）
```

> ⚠️ **为什么 `getI18nText` 要这么绕**：项目的 NavBar / TabBar 标题是「key 与展示原文混用」的
> （有的页面写 `%tabbar.home%`，有的直接写中文）。不加这层判断，中文标题会被 lime-i18n 当作
> 缺失 key 打出「无法翻译键路径 'xxx'」的控制台噪音。

---

## 初始语言是怎么定的

[index.uts](index.uts) 的 `getInitialLocale()` 按优先级解析，命中即返回：

1. `uni.getStorageSync('uVueI18nLocale')` —— lime-i18n 自己的持久化 key；
2. `uni.getStorageSync('pinia:i18n')` —— i18n store 的持久化快照（取 `state.locale`）；
3. `getDefaultLocale()` —— 读 `.env` 的 `VITE_DEFAULT_LOCALE`，未配置则按系统语言（`uni.getAppBaseInfo().appLanguage`）判中 / 英。

---

## 与其他模块的关系

```text
src/i18n/locales/*.json          ← 你改这里（文案唯一真源）
        │
        ├──► src/i18n/utils/index.uts      $t / getI18nText / setNavigationBarTitle
        │        ├─► src/layouts/navbar/utils/i18n.uts   formatNavbarTitle()（依赖 i18nStore.state.locale 建响应式）
        │        └─► src/tabbar/adapters/i18n.uts        formatTabbarText() / setTabbarItem()
        │
        └──► src/store/*/i18n.uts          useI18nStore()（setLocale 是切语言的唯一入口）
```

---

## 红线

- **加文案必须两个语言包同时加**：只加 `zh-CN.json`，切到英文时该处会显示成 key 原文。
- **切语言走 `useI18nStore().setLocale()`**，不要直接改 `i18n.global.locale.value` —— 后者不会持久化，且 store 的 watch 不会触发。
- **`setNavigationBarTitle()` 传 key，不传翻译后的文本**（传文本会再被当 key 查一次）。
- **自定义 TabBar 文案不会自动响应语言切换**，切完记得调 `setTabbarItem()`。

---

## 相关示例页

| 页面 | 演示内容 |
| :--- | :--- |
| [src/sub/langBasicDemo](../../src/sub/langBasicDemo/langBasicDemo.uvue) | `$t` 基础翻译、具名插值、`getI18nText` 与 key 形态判断、动态标题、切语言联动 TabBar |
