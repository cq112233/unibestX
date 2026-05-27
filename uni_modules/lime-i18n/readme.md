# lime-i18n 国际化组件
一个功能丰富的国际化组件，参考 vue-i18n 实现的 UTS 国际化插件。支持多语言切换、文本格式化、复数处理、日期时间本地化、数字格式化等功能，可用于多语言应用开发。

## 文档链接
📚 组件详细文档请访问以下站点：
- [国际化组件文档 - 站点1](https://limex.qcoon.cn/uts/i18n.html)
- [国际化组件文档 - 站点2](https://limeui.netlify.app/uts/i18n.html)
- [国际化组件文档 - 站点3](https://limeui.familyzone.top/uts/i18n.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-i18n`
2. 导入后可能需要重新编译项目

## 快速开始

### 基础配置
i18n/index.uts
```js
// 假设在单独的文件中创建了 i18n 实例
import { createI18n } from '@/uni_modules/lime-i18n'
import zhCN from './locales/zh-CN'
import enUS from './locales/en_US'

const i18n = createI18n({
  // 使用uni.getStorageSync('uVueI18nLocale') 能获取上次退出应用后保存的语言
  locale: 'zh-CN', // 默认显示语言
  fallbackLocale: 'en-US',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  }
})

export default i18n
```

在 main.uts 中引入并注册。
```js
// main.uts
import i18n from './i18n';

export function createApp(){
  const app = createSSRApp(App);
  app.use(i18n)
  //....
}
```

## 使用方法
### 在模板中使用
```html
<template>
  <view>
    <text>测试：{{ $t('page.title') }}</text>
  </view>
</template>
```

### 在代码中使用
#### 直接引入 i18n 实例
```js
import i18n from './i18n';

// 翻译文本
const title = i18n.global.t('page.title')
const welcome = i18n.$t('message.welcome', { name: '李四' })

// 切换语言
const switchLanguage = () => {
  i18n.global.locale.value = i18n.global.locale.value == 'zh-CN' ? 'en-US' : 'zh-CN'
}
```


#### 组合式 API (setup)
```js
const instance = getCurrentInstance()!
const title = instance.proxy.$t('page.title')
const title2 = instance.proxy.$i18n.$t('page.title2')
const welcome = instance.proxy.$i18n.global.t('message.welcome') 

// 切换语言
const switchLanguage = () => {
	const newLocale = instance.proxy.$locale.value == 'zh-CN' ? 'en-US' : 'zh-CN'
	instance.proxy.$locale.value = newLocale
}

```

#### 选项式 API
```js
export default {
  data() {
    return {}
  },
  methods: {
	// 翻译文本
	getTranslatedText() {
		const title = this.$t('page.title')
		const title2 = this.$i18n.$t('page.title2')
		const welcome = this.$i18n.global.t('message.welcome') 
	},
	// 切换语言
    switchLanguage() {
		this.$locale.value = this.$locale.value != 'zh-CN' ? 'zh-CN' : 'en-US'
    }
  }
}
```



### 延迟加载
直接调用创建的i18n实例：
```js
// 模拟请求后端接口返回
setTimeout(() => {
  // 直接调用创建的
  i18n.global.setLocaleMessage('zh-CN', zhCN)
}, 5000)
```

选项式API中使用：
```js
// 模拟请求后端接口返回
setTimeout(() => {
  this.$i18n.global.setLocaleMessage('zh-CN', zhCN)
}, 5000)
```

组合式API中使用：
```js
// 模拟请求后端接口返回
const instance = getCurrentInstance()
setTimeout(() => {
  instance.proxy!.$i18n.global.setLocaleMessage('zh-CN', zhCN)
}, 5000)
```

## 文本格式化

### 具名插值
语言环境信息如下：
```js
const messages = {
  en: {
    message: {
      hello: '{msg} world'
    }
  }
}
```
模板如下：
```html
<text>{{ $t('message.hello', { msg: 'hello' }) }}</text>
```
输出如下：
```html
<text>hello world</text>
```

### 列表插值
语言环境信息如下：
```js
const messages = {
  en: {
    message: {
      hello: '{0} world'
    }
  }
}
```

模板如下：
```html
<text>{{ $t('message.hello', ['hello']) }}</text>
```
输出如下：
```html
<text>hello world</text>
```

### 链接插值
如果有一个翻译关键字总是与另一个具有相同的具体文本，你可以链接到它。要链接到另一个翻译关键字，你所要做的就是在其内容前加上一个` @: `符号后跟完整的翻译键名，包括你要链接到的命名空间。

语言环境信息如下：
```js
const messages = {
  en: {
    message: {
      the_world: 'the world',
      dio: 'DIO:',
      linked: '@:message.dio @:message.the_world !!!!'
    }
  }
}
```
模板如下：
```html
<text>{{ $t('message.linked') }}</text>
```
输出如下：
```html
<text>DIO: the world !!!!</text>
```

#### 内置修饰符
如果语言区分字符大小写，则可能需要控制链接的区域设置消息的大小写。链接邮件可以使用修饰符` @.modifier：key` 进行格式化

以下修饰符当前可用：
- `upper:` 链接消息中的所有字符均大写
- `lower:` 小写链接消息中的所有字符
- `capitalize:` 大写链接消息中的第一个字符

语言环境信息如下：
```js
const messages = {
  en: {
    message: {
      homeAddress: 'Home address',
      missingHomeAddress: 'Please provide @.lower:message.homeAddress'
    }
  }
}
```
模板如下：
```html
<text>{{ $t('message.homeAddress') }}</text>
<text class="error">{{ $t('message.missingHomeAddress') }}</text>
```
输出如下：
```html
<text>Home address</text>
<text class="error">Please provide home address</text>
```

### 自定义修饰符
如果要使用非内置修饰符，则可以使用自定义修饰符。
```js
const i18n = createI18n({
  locale: 'en',
  messages: {
    // set something locale messages ...
  },
  // set custom modifiers at `modifiers` option
  modifiers: {
    snakeCase: (str:string):string => str.split(' ').join('_')
  }
})
```
区域设置消息如下：
```js
const messages = {
  en: {
    message: {
      snake: 'snake case',
      custom_modifier: "custom modifiers example: @.snakeCase:{'message.snake'}"
    }
  }
}
```

## 复数处理
你可以使用复数进行翻译。你必须定义具有管道 | 分隔符的语言环境，并在管道分隔符中定义复数。

*您的模板将需要使用 `$tc()` 而不是 `$t()`*

语言环境信息如下：
```js
const messages = {
  en: {
    car: 'car | cars',
    apple: 'no apples | one apple | {count} apples'
  }
}
```
模板如下：
```html
<text>{{ $tc('car', 1) }}</text>
<text>{{ $tc('car', 2) }}</text>

<text>{{ $tc('apple', 0) }}</text>
<text>{{ $tc('apple', 1) }}</text>
<text>{{ $tc('apple', 10, { count: 10 }) }}</text>
```

输出如下：
```html
<text>car</text>
<text>cars</text>

<text>no apples</text>
<text>one apple</text>
<text>10 apples</text>
```

### 通过预定义的参数访问该数字
你无需明确指定复数的数字。可以通过预定义的命名参数 `{count}` 和/或 `{n}` 在语言环境信息中访问该数字。如有必要，你可以覆盖这些预定义的命名参数。

语言环境信息如下：
```js
const messages = {
  en: {
    apple: 'no apples | one apple | {count} apples',
    banana: 'no bananas | {n} banana | {n} bananas'
  }
}
```

模板如下：
```html
<text>{{ $tc('apple', 10, { count: 10 }) }}</text>
<text>{{ $tc('apple', 10) }}</text>

<text>{{ $tc('banana', 1, { n: 1 }) }}</text>
<text>{{ $tc('banana', 1) }}</text>
<text>{{ $tc('banana', 100, { n: 'too many' }) }}</text>
```

输出如下：
```html
<text>10 apples</text>
<text>10 apples</text>

<text>1 banana</text>
<text>1 banana</text>
<text>too many bananas</text>
```

### 自定义复数
但是，这种多元化并不适用于所有语言（例如，斯拉夫语言具有不同的多元化规则）。

为了实现这些规则，您可以将可选的 `pluralizationRules` 对象传递给 `UvueI18n` 构造函数选项。

使用针对斯拉夫语言（俄语，乌克兰语等）的规则的非常简化的示例：

```js
function customRule(choice:number, choicesLength:number):number {
  if (choice == 0) {
    return 0
  }

  const teen = choice > 10 && choice < 20
  const endsWithOne = choice % 10 == 1
  if (!teen && endsWithOne) {
    return 1
  }
  if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
    return 2
  }

  return choicesLength < 4 ? 2 : 3
}


const i18n = createI18n({
  locale: 'ru',
  // the custom rules here ...
  pluralizationRules: {
    ru: customRule
  },
  messages: {
    ru: {
      car: '0 машин | {n} машина | {n} машины | {n} машин',
      banana: 'нет бананов | {n} банан | {n} банана | {n} бананов'
    }
  }
})
```

这将有效地实现以下目的：
```html
<view>Car:</view>
<text>{{ $tc('car', 1) }}</text>
<text>{{ $tc('car', 2) }}</text>
<text>{{ $tc('car', 4) }}</text>
<text>{{ $tc('car', 12) }}</text>
<text>{{ $tc('car', 21) }}</text>

<view>Banana:</view>
<text>{{ $tc('banana', 0) }}</text>
<text>{{ $tc('banana', 4) }}</text>
<text>{{ $tc('banana', 11) }}</text>
<text>{{ $tc('banana', 31) }}</text>
```

结果如下：
```html
<view>Car:</view>
<text>1 машина</text>
<text>2 машины</text>
<text>4 машины</text>
<text>12 машин</text>
<text>21 машина</text>

<view>Banana:</view>
<text>нет бананов</text>
<text>4 банана</text>
<text>11 бананов</text>
<text>31 банан</text>
```

## 日期时间本地化
由于APP不支持`Intl.DateTimeFormat`，故这功能无法在APP上使用。

日期时间格式如下：
```js
const datetimeFormats = {
  'en-US': {
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    },
    long: {
      year: 'numeric', month: 'short', day: 'numeric',
      weekday: 'short', hour: 'numeric', minute: 'numeric'
    }
  },
  'zh-CN': {
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    },
    long: {
      year: 'numeric', month: 'short', day: 'numeric',
      weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: true
    }
  }
}
```

如上，你可以定义具名的 (例如：short、long 等) 日期时间格式，并需要使用 [ECMA-402 Intl.DateTimeFormat 的选项](http://www.ecma-international.org/ecma-402/2.0/#sec-intl-datetimeformat-constructor)。

之后就像语言环境信息一样，你需要指定 `UvueI18n` 构造函数的 `dateTimeFormats` 选项：
```js
const i18n = createI18n({
  datetimeFormats
})
```
模板如下：
```html
<text>{{ $d(new Date(), 'short') }}</text>
<text>{{ $d(new Date(), 'long', 'zh-CN') }}</text>
```

第一个参数是日期时间可用值（例如，timestamp）作为参数，第二个参数是日期时间格式名称作为参数。最后一个参数 locale 值作为参数。
```html
<text>Jun 30, 2024</text>
<text>2024年6月30日周日 下午6:35</text>
```

## 数字格式
由于APP不支持`Intl.NumberFormat`，故这功能无法在APP上使用。

你可以使用你定义的格式来本地化数字。
```js
const numberFormats = {
  'en-US': {
    currency: {
      style: 'currency', currency: 'USD', notation: 'standard'
    },
    decimal: {
      style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
    },
    percent: {
      style: 'percent', useGrouping: false
    }
  },
  'zh-CN': {
    currency: {
      style: 'currency', currency: 'CNY', useGrouping: true, currencyDisplay: 'symbol'
    },
    decimal: {
      style: 'decimal', minimumSignificantDigits: 3, maximumSignificantDigits: 5
    },
    percent: {
      style: 'percent', useGrouping: false
    }
  }
}
```
如上，你可以指定具名的 (例如：currency 等) 的数字格式，并且需要使用 [ECMA-402 Intl.NumberFormat 的选项](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat)。

之后，在使用区域设置消息时，您需要指定以下选项：
```js
const i18n = createI18n({
  numberFormats
})
```
以下是在模板中使用的示例：
```html
<text>{{ $n(10000, 'currency') }}</text>
<text>{{ $n(10000, 'currency', 'zh-CN') }}</text>
<text>{{ $n(10000, 'currency', 'zh-CN', { useGrouping: false }) }}</text>
<text>{{ $n(987654321, 'currency', { notation: 'compact' }) }}</text>
<text>{{ $n(0.99123, 'percent') }}</text>
<text>{{ $n(0.99123, 'percent', { minimumFractionDigits: 2 }) }}</text>
<text>{{ $n(12.11612345, 'decimal') }}</text>
<text>{{ $n(12145281111, 'decimal', 'zh-CN') }}</text>
```

第一个参数是作为参数的数值，第二个参数是作为参数的数字格式名称。最后一个参数 locale 值作为参数。

结果如下：
```html
<text>$10,000.00</text>
<text>¥10,000.00</text>
<text>¥10,000.00</text>
<text>$988M</text>
<text>99%</text>
<text>99.12%</text>
<text>12.12</text>
<text>12,145,000,000</text>
```

## API文档

### 方法说明

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| setLocaleMessage | 设置区域语言信息 | locale, message |
| getLocaleMessage | 获取区域语言信息 | locale |
| mergeLocaleMessage | 合并区域语言信息 | locale, message |
| getDateTimeFormat | 获取日期时间格式 | locale |
| setDateTimeFormat | 设置日期时间格式 | locale, format |
| mergeDateTimeFormat | 合并日期时间格式 | locale, format |
| getNumberFormat | 获取数字格式 | locale |
| setNumberFormat | 设置数字格式 | locale, format |
| mergeNumberFormat | 合并数字格式 | locale, format |
| setTabBar | 设置TabBar文本 | locale, texts |
| getTabBar | 获取TabBar文本 | locale |

### 使用示例

```js
// 可以手动引入i18n，例如你单独文件创建了i18n,就可以导入这个文件使用i18n
i18n.global.setLocaleMessage('zh-CN', zhCN)
i18n.global.getLocaleMessage('zh-CN')

// 如果是选择项API 可以使用
this.$i18n.global.setLocaleMessage

// 如果是组合式API 可以先获取当前组件实例
const instance = getCurrentInstance()
instance.proxy!.$i18n.global.setLocaleMessage
```

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |