# lime-dayuts 日期库
一个轻量的处理时间和日期的 UTS 库，几乎和 dayjs 保持一样的 API。lime-dayuts 提供了丰富的日期操作功能，包括日期解析、格式化、比较、操作和查询等，可用于各种需要处理日期和时间的应用场景。

## 文档链接
📚 组件详细文档请访问以下站点：
- [日期库文档 - 站点1](https://limex.qcoon.cn/uts/dayuts.html)
- [日期库文档 - 站点2](https://limeui.netlify.app/uts/dayuts.html)
- [日期库文档 - 站点3](https://limeui.familyzone.top/uts/dayuts.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-dayuts`
2. 导入后可能需要重新编译项目

## 代码演示

### 基础用法
最简单的日期库用法，直接导入并使用。

```ts
import {dayuts} from '@/uni_modules/lime-dayuts';
dayuts().format() // 2024-03-25T02:10:16+08:00
```

### 解析日期
dayuts 接受多种类型的输入，包括字符串、数字、Date 对象等。

```ts
// 当前时间
dayuts()

// 字符串
dayuts('2024-03-04T16:00:00.000Z')
dayuts('2024-03-13 19:18:17.040+02:00')
dayuts('2024-03-13 19:18')
dayuts('1748750498228')

// 字符串+格式
dayuts('1970-00-00', 'YYYY-MM-DD')

// Unix 时间戳 (毫秒)
dayuts(1318781876406)

// Date 对象
dayuts(new Date(2018, 8, 18))

// 数组
dayuts([2010, 1, 14, 15, 25, 50, 125])
```

### 取值/赋值
在设计上 Dayuts 的 getter 和 setter 使用了相同的 API，不传参数调用方法即为 getter，调用并传入参数为 setter。

```ts
// 获取或设置毫秒
dayuts().millisecond() // 获取当前毫秒
dayuts().millisecond(1) // 返回新的 dayuts 对象

// 获取或设置秒
dayuts().second() // 获取当前秒
dayuts().second(1) // 返回新的 dayuts 对象

// 获取或设置分钟
dayuts().minute() // 获取当前分钟
dayuts().minute(1) // 返回新的 dayuts 对象

// 获取或设置小时
dayuts().hour() // 获取当前小时
dayuts().hour(12) // 返回新的 dayuts 对象

// 获取或设置日期
dayuts().date() // 获取当前日期
dayuts().date(12) // 返回新的 dayuts 对象

// 获取或设置月份
dayuts().month() // 获取当前月份
dayuts().month(0) // 返回新的 dayuts 对象

// 获取或设置年份
dayuts().year() // 获取当前年份
dayuts().year(2000) // 返回新的 dayuts 对象
```

### 日期操作

```ts
// 增加时间
dayuts().add(7, 'day')

// 减去时间
dayuts().subtract(7, 'year')

// 设置到一个时间的开始
dayuts().startOf('year')

// 设置到一个时间的末尾
dayuts().endOf('month')
```

### 日期格式化

```ts
// 默认格式化
dayuts().format() // 默认返回的是 ISO8601 格式字符串 '2024-03-28T01:33:29+08:00'

// 自定义格式化
dayuts('2019-01-25').format('DD/MM/YYYY') // '25/01/2019'
```

### 日期比较

```ts
// 是否在前
dayuts().isBefore(dayuts('2011-01-01')) // false

// 是否在后
dayuts().isAfter(dayuts('2011-01-01')) // true

// 是否相同
dayuts().isSame('2011-01-01', 'year') // false

// 是否相同或在前
dayuts().isSameOrBefore('2011-01-01', 'month') // false

// 是否相同或在后
dayuts().isSameOrAfter('2011-01-01', 'month') // true

// 是否在区间内
dayuts('2010-10-20').isBetween('2010-10-19', dayuts('2010-10-25')) // true
```

## API文档

### 解析

| 方法 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `dayuts()` | 创建当前时间的 Dayuts 对象 | - | Dayuts 对象 |
| `dayuts(string)` | 从字符串创建 Dayuts 对象 | 日期字符串 | Dayuts 对象 |
| `dayuts(string, format)` | 从指定格式的字符串创建 Dayuts 对象 | 日期字符串, 格式字符串 | Dayuts 对象 |
| `dayuts(number)` | 从时间戳创建 Dayuts 对象 | 时间戳(毫秒) | Dayuts 对象 |
| `dayuts(Date)` | 从 Date 对象创建 Dayuts 对象 | Date 对象 | Dayuts 对象 |
| `dayuts(array)` | 从数组创建 Dayuts 对象 | [年,月,日,时,分,秒,毫秒] | Dayuts 对象 |

### 取值/赋值

| 方法 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `millisecond()` | 获取毫秒 | - | 0-999 |
| `millisecond(value)` | 设置毫秒 | 0-999 | Dayuts 对象 |
| `second()` | 获取秒 | - | 0-59 |
| `second(value)` | 设置秒 | 0-59 | Dayuts 对象 |
| `minute()` | 获取分钟 | - | 0-59 |
| `minute(value)` | 设置分钟 | 0-59 | Dayuts 对象 |
| `hour()` | 获取小时 | - | 0-23 |
| `hour(value)` | 设置小时 | 0-23 | Dayuts 对象 |
| `date()` | 获取日期 | - | 1-31 |
| `date(value)` | 设置日期 | 1-31 | Dayuts 对象 |
| `day()` | 获取星期 | - | 0-6 |
| `day(value)` | 设置星期 | 0-6 | Dayuts 对象 |
| `month()` | 获取月份 | - | 0-11 |
| `month(value)` | 设置月份 | 0-11 | Dayuts 对象 |
| `year()` | 获取年份 | - | 年份数字 |
| `year(value)` | 设置年份 | 年份数字 | Dayuts 对象 |
| `get(unit)` | 获取指定单位的值 | 时间单位 | 数值 |
| `set(unit, value)` | 设置指定单位的值 | 时间单位, 值 | Dayuts 对象 |

### 操作

| 方法 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `add(value, unit)` | 增加时间 | 数值, 单位 | Dayuts 对象 |
| `subtract(value, unit)` | 减少时间 | 数值, 单位 | Dayuts 对象 |
| `startOf(unit)` | 设置为时间单位的开始 | 单位 | Dayuts 对象 |
| `endOf(unit)` | 设置为时间单位的结束 | 单位 | Dayuts 对象 |

### 显示

| 方法 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `format(template)` | 格式化日期 | 格式模板 | 字符串 |
| `fromNow(withoutSuffix)` | 相对当前时间(前) | 是否不带后缀 | 字符串 |
| `from(compared, withoutSuffix)` | 相对指定时间(前) | 比较时间, 是否不带后缀 | 字符串 |
| `toNow(withoutSuffix)` | 相对当前时间(后) | 是否不带后缀 | 字符串 |
| `to(compared, withoutSuffix)` | 相对指定时间(后) | 比较时间, 是否不带后缀 | 字符串 |
| `diff(compared, unit, float)` | 计算时间差 | 比较时间, 单位, 是否返回浮点数 | 数值 |
| `valueOf()` | 获取时间戳(毫秒) | - | 数值 |
| `unix()` | 获取时间戳(秒) | - | 数值 |
| `daysInMonth()` | 获取月份的天数 | - | 数值 |
| `toDate()` | 转换为 Date 对象 | - | Date 对象 |
| `toArray()` | 转换为数组 | - | 数组 |
| `toJSON()` | 转换为 JSON 字符串 | - | 字符串 |
| `toObject()` | 转换为对象 | - | 对象 |
| `toString()` | 转换为字符串 | - | 字符串 |

### 查询

| 方法 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `isBefore(compared, unit)` | 是否在指定时间之前 | 比较时间, 单位 | 布尔值 |
| `isAfter(compared, unit)` | 是否在指定时间之后 | 比较时间, 单位 | 布尔值 |
| `isSame(compared, unit)` | 是否与指定时间相同 | 比较时间, 单位 | 布尔值 |
| `isSameOrBefore(compared, unit)` | 是否与指定时间相同或之前 | 比较时间, 单位 | 布尔值 |
| `isSameOrAfter(compared, unit)` | 是否与指定时间相同或之后 | 比较时间, 单位 | 布尔值 |
| `isBetween(from, to, unit, inclusivity)` | 是否在指定时间区间内 | 开始时间, 结束时间, 单位, 包含性 | 布尔值 |
| `isLeapYear()` | 是否为闰年 | - | 布尔值 |
| `isToday()` | 是否为今天 | - | 布尔值 |

### 国际化

| 方法 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `locale(localeName)` | 设置或获取语言 | 语言名称 | Dayuts 对象或语言名称 |
| `dayutsIntl.locale` | 全局设置语言 | 语言名称 | - |

### 格式化占位符

| 占位符 | 输出 | 描述 |
| --- | --- | --- |
| `YY` | 01 | 两位数的年份 |
| `YYYY` | 2001 | 四位数的年份 |
| `M` | 1-12 | 月份，从1开始计数 |
| `MM` | 01-12 | 月份，两位数 |
| `MMM` | Jan-Dec | 缩写的月份名称 |
| `MMMM` | January-December | 完整的月份名称 |
| `D` | 1-31 | 一个月的某一天 |
| `DD` | 01-31 | 一个月的某一天，两位数 |
| `H` | 0-23 | 小时数 |
| `HH` | 00-23 | 小时数，两位数 |
| `h` | 1-12 | 12小时制的小时数 |
| `hh` | 01-12 | 12小时制的小时数，两位数 |
| `m` | 0-59 | 分钟数 |
| `mm` | 00-59 | 分钟数，两位数 |
| `s` | 0-59 | 秒数 |
| `ss` | 00-59 | 秒数，两位数 |
| `S` | 0-9 | 百毫秒数，一位数 |
| `SS` | 00-99 | 十毫秒数，两位数 |
| `SSS` | 000-999 | 毫秒数，三位数 |
| `Z` | -05:00 | 相对于UTC的偏移量 |
| `ZZ` | -0500 | 相对UTC的紧凑偏移量，两位数 |
| `A` | AM PM | 上午或下午，大写字母 |
| `a` | am pm | 上午或下午，小写字母 |
| `ddd` | 周一 | 周，需要设置`locale = 'zh-cn'`，默认为英文 |
| `dddd` | 星期一 | 星期，需要设置`locale = 'zh-cn'`，默认为英文 |

### 时间单位

| 单位 | 缩写 | 描述 |
| --- | --- | --- |
| `day` | `d` | 日 |
| `week` | `w` | 周 |
| `month` | `M` | 月 |
| `year` | `y` | 年 |
| `hour` | `h` | 小时 |
| `minute` | `m` | 分钟 |
| `second` | `s` | 秒 |
| `millisecond` | `ms` | 毫秒 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |