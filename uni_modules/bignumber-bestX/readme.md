# bignumber-bestX

> 专为 **uni-app X / UTS** 打造的跨端任意精度十进制高精度数学运算库。
> 纯原生 UTS 字符串与整数核心算法驱动，不依赖 `BigInt`、不依赖原生浮点 API，全平台字节级一致。

---

## 🌟 核心特性

- 🚀 **全平台零差异**：Android (Kotlin) / iOS (Swift) / 鸿蒙 (ArkTS) / H5 / 小程序**统一纯 UTS 实现**，彻底终结不同端计算结果不一致的问题。
- ➕ **高精度四则运算**：加减乘除、整除、取模，根治 `0.1 + 0.2 !== 0.3`、`0.3 - 0.1 !== 0.2` 等浮点数精度丢失问题。
- 🔢 **整数幂与小数幂**：`exponentiatedBy(n)` 整数次幂走高效快速幂；小数次幂（如 `9^0.5 = 3`）走高精度级数展开。
- 🧮 **大数模幂运算**：`exponentiatedBy(n, m)` 原生支持大数模幂，可用于 RSA / 加密算法，全程无溢出风险。
- 🎯 **九种舍入模式**：完全对齐国际标准与 `bignumber.js`，支持四舍五入、银行家舍入、截断、朝正负无穷等 9 种舍入策略。
- 💰 **金融级千分位格式化**：`toFormat(2)` 极速格式化为 `1,234,567.89`，支持灵活的小数位控制与自定义符号。
- 🔤 **2~36 任意进制转换**：支持 `new BigNumber('ff', 16)` 解析与 `toString(16)` 输出（含小数部分进制转换）。
- 🛡 **全量不可变设计**：所有算术运算均返回全新 `BigNumber` 实例，原对象不可变；非法计算返回 `NaN`，安全不抛错。

---

## 📖 快速导航目录

- [一、基础调用与算术运算](#一基础调用与算术运算)
  - [1.1 构造实例 (new BigNumber)](#11-构造实例-new-bignumber)
  - [1.2 高精度四则运算与方法速查](#12-高精度四则运算与方法速查)
- [二、高级运算 (幂、模幂、开方)](#二高级运算-幂模幂开方)
  - [2.1 运算方法与参数说明](#21-运算方法与参数说明)
- [三、数值比较与状态判定](#三数值比较与状态判定)
  - [3.1 比较与判定方法清单](#31-比较与判定方法清单)
- [四、格式化与进制转换](#四格式化与进制转换)
  - [4.1 字符串与数值输出 (toFixed / toFormat)](#41-字符串与数值输出-tofixed--toformat)
- [五、舍入模式与全局配置](#五舍入模式与全局配置)
  - [5.1 九种舍入模式定义](#51-九种舍入模式定义)
  - [5.2 全局参数配置 (config / getConfig)](#52-全局参数配置-config--getconfig)
- [六、目录结构与规范](#六目录结构与规范)

---

## 一、基础调用与算术运算

### 1.1 构造实例 (new BigNumber)

```uts
import { BigNumber } from '@/uni_modules/bignumber-bestX';

// 1. 支持数字直接构造
const a = new BigNumber(0.1);

// 2. 支持大数字符串构造（推荐用于避免大数在 JS/UTS 层就提前溢出）
const b = new BigNumber('99999999999999999999999999999999');

// 3. 支持指定进制构造（2~36 进制）
const hex = new BigNumber('ff', 16); // 代表十进制的 255
const bin = new BigNumber('1010.1', 2); // 二进制小数
```

#### 📥 构造函数入参参数表

| 参数名 | 类型 | 必填 | 默认值 | 说明 |
| :--- | :--- | :---: | :---: | :--- |
| `value` | `any` (number \| string \| BigNumber) | **是** | - | 要初始化的数值或数字字符串（支持科学计数法） |
| `base` | `number` | 否 | `10` | 进制基数，范围为 `2` 到 `36` 之间 |

---

### 1.2 高精度四则运算与方法速查

所有运算均**不会修改原对象**，而是返回全新计算结果的 `BigNumber` 实例：

```uts
const x = new BigNumber(0.1);
const y = new BigNumber(0.2);

const sum = x.plus(y);             // 0.3（原生浮点会算出 0.30000000000000004）
const diff = new BigNumber(0.3).minus(0.1);  // 0.2
const prod = x.times(0.1);         // 0.01
const quot = new BigNumber(1).dividedBy(3); // 0.33333333333333333333（按 DECIMAL_PLACES 收敛）
```

#### 📋 四则运算 API 参数与返回值全览

| 方法名 | 简写别名 | 入参签名 | 返回值类型 | 说明 |
| :--- | :--- | :--- | :---: | :--- |
| `plus` | - | `(n: any)` | `BigNumber` | **加法**：计算 `this + n` |
| `minus` | - | `(n: any)` | `BigNumber` | **减法**：计算 `this - n` |
| `multipliedBy` | `times` | `(n: any)` | `BigNumber` | **乘法**：计算 `this × n` |
| `dividedBy` | `div` | `(n: any)` | `BigNumber` | **除法**：计算 `this ÷ n`，精度按当前全局舍入模式收敛 |
| `dividedToIntegerBy`| `idiv` | `(n: any)` | `BigNumber` | **整除**：计算 `this ÷ n` 并朝零方向截断为整数部分 |
| `modulo` | `mod` | `(n: any)` | `BigNumber` | **取模**：计算 `this % n` |
| `absoluteValue` | `abs` | `()` | `BigNumber` | **绝对值**：获取当前数值的绝对值 |
| `negated` | `neg` | `()` | `BigNumber` | **取反**：获取当前数值相反数 (`-this`) |

> 💡 **入参宽容度**：上述方法的入参 `n` 均支持传入 `number`、`string` 或另一个 `BigNumber` 实例。

---

## 二、高级运算 (幂、模幂、开方)

### 2.1 运算方法与参数说明

```uts
// 1. 整数次幂（走高精度快速幂算法）
const p1 = new BigNumber(2).exponentiatedBy(128);
console.log(p1.toFixed(0)); // 完整 39 位大数，零精度损失！

// 2. 小数次幂（走定点对数指数展开）
const p2 = new BigNumber(9).exponentiatedBy(0.5); // 3

// 3. 大数模幂（加密与 RSA 算法利器：计算 (3^100) % 97）
const p3 = new BigNumber(3).exponentiatedBy(100, 97); // 81

// 4. 精确开方
const s = new BigNumber(2).sqrt(); // 1.4142135623730950488
```

#### 📋 高级运算 API 参数全览

| 方法名 | 简写别名 | 入参参数 | 返回值类型 | 说明 |
| :--- | :--- | :--- | :---: | :--- |
| `exponentiatedBy` | `pow` | `(n: any, m?: any)` | `BigNumber` | **幂/模幂运算**：若传入 `m`，则计算 `(this^n) % m` |
| `sqrt` | - | `()` | `BigNumber` | **开平方根**：精确到当前配置的小数位 |
| `shiftedBy` | - | `(n: number)` | `BigNumber` | **移动小数点**：计算 `this × 10^n`（`n` 为负数时向左移） |

---

## 三、数值比较与状态判定

解决浮点数在 `===`、`>`、`<` 比较时的误差。

### 3.1 比较与判定方法清单

```uts
new BigNumber(0.1).plus(0.2).isEqualTo(0.3); // true！彻底避免原生 0.1 + 0.2 !== 0.3
new BigNumber(2).isGreaterThan(1);          // true
new BigNumber(1).comparedTo(2);             // -1（小于返回 -1，等于返回 0，大于返回 1）
new BigNumber('abc').isNaN();               // true（非法输入安全转为 NaN，不抛异常崩溃）
```

#### 📋 比较方法

| 方法名 | 别名 | 入参 | 返回值 | 语义 |
| :--- | :--- | :--- | :---: | :--- |
| `isEqualTo` | `eq` | `(n: any)` | `boolean` | `this == n` |
| `isGreaterThan` | `gt` | `(n: any)` | `boolean` | `this > n` |
| `isGreaterThanOrEqualTo` | `gte` | `(n: any)` | `boolean` | `this >= n` |
| `isLessThan` | `lt` | `(n: any)` | `boolean` | `this < n` |
| `isLessThanOrEqualTo` | `lte` | `(n: any)` | `boolean` | `this <= n` |
| `comparedTo` | - | `(n: any)` | `number` | 大于返回 `1`，等于返回 `0`，小于返回 `-1` |

#### 📋 状态判定方法

| 方法名 | 返回值 | 语义 |
| :--- | :---: | :--- |
| `isNaN()` | `boolean` | 当前值是否为无效数字 (`NaN`) |
| `isFinite()` | `boolean` | 当前值是否为有限数值（非 `NaN` 且非 `±Infinity`） |
| `isInteger()` | `boolean` | 是否为整数（无小数部分） |
| `isZero()` | `boolean` | 是否为零 |
| `isPositive()` | `boolean` | 是否大于或等于零 |
| `isNegative()` | `boolean` | 是否小于零 |

---

## 四、格式化与进制转换

### 4.1 字符串与数值输出 (toFixed / toFormat)

```uts
// 1. 金融千分位格式化 (支持指定小数位与舍入模式)
new BigNumber('1234567.891').toFormat(2); // '1,234,567.89'

// 2. 固定小数位字符串
new BigNumber('1.005').toFixed(2);        // '1.01'

// 3. 有效数字位数输出
new BigNumber('123.456').toPrecision(4);  // '123.5'

// 4. 科学计数法格式化
new BigNumber(123456).toExponential(2);   // '1.23e+5'

// 5. 任意进制转换输出 (2~36 进制)
new BigNumber(255).toString(16);          // 'ff'
new BigNumber(10.5).toString(2);          // '1010.1'

// 6. 转为原生 number（可能存在超出安全范围丢失精度风险）
const num: number = new BigNumber('123.45').toNumber();
```

#### 📋 格式化方法参数速查

| 方法名 | 参数签名 | 默认值 | 返回值 | 说明 |
| :--- | :--- | :---: | :---: | :--- |
| `toFixed` | `(dp?: number, rm?: number)` | `dp: decimalPlaces` | `string` | 固定保留 `dp` 位小数 |
| `toFormat` | `(dp?: number, rm?: number)` | `dp: decimalPlaces` | `string` | **千分位输出**：支持分组符号隔开 |
| `toPrecision` | `(sd?: number, rm?: number)` | 当前有效数字 | `string` | 保留 `sd` 位有效数字 |
| `toExponential` | `(dp?: number, rm?: number)` | 全部有效位 | `string` | 格式化为科学计数法字串 |
| `toString` | `(base?: number)` | `base: 10` | `string` | 转换为指定进制（2~36）字串 |
| `toNumber` | `()` | - | `number` | 转换为原生数字（超出 53 位时会有精度截断） |

---

## 五、舍入模式与全局配置

### 5.1 九种舍入模式定义

库中导出全部 9 种舍入常量（取值 0~8），可作用于除法、取整、`toFixed` 及有效数字截断：

```uts
import {
  ROUND_UP,
  ROUND_DOWN,
  ROUND_CEIL,
  ROUND_FLOOR,
  ROUND_HALF_UP,
  ROUND_HALF_DOWN,
  ROUND_HALF_EVEN,
  ROUND_HALF_CEIL,
  ROUND_HALF_FLOOR
} from '@/uni_modules/bignumber-bestX';
```

| 模式常量 | 取值 | 算法语义 | 典型示例 (`1.5` / `2.5`) |
| :--- | :---: | :--- | :--- |
| `ROUND_UP` | `0` | 远离零方向舍入 | `1.5 → 2`, `-1.5 → -2` |
| `ROUND_DOWN` | `1` | 朝向零方向舍入（截断） | `1.5 → 1`, `-1.5 → -1` |
| `ROUND_CEIL` | `2` | 朝向 `+Infinity` 方向 | `1.5 → 2`, `-1.5 → -1` |
| `ROUND_FLOOR` | `3` | 朝向 `-Infinity` 方向 | `1.5 → 1`, `-1.5 → -2` |
| `ROUND_HALF_UP` | `4` | **四舍五入（全局默认模式）** | `1.5 → 2`, `2.5 → 3` |
| `ROUND_HALF_DOWN` | `5` | 五舍（向最近偶数/截断倾向） | `1.5 → 1`, `2.5 → 2` |
| `ROUND_HALF_EVEN` | `6` | **银行家舍入**（向最近的偶数舍入） | `1.5 → 2`, `2.5 → 2` |
| `ROUND_HALF_CEIL` | `7` | 遇五朝 `+Infinity` 方向舍入 | `1.5 → 2`, `-1.5 → -1` |
| `ROUND_HALF_FLOOR` | `8` | 遇五朝 `-Infinity` 方向舍入 | `1.5 → 1`, `-1.5 → -2` |

---

### 5.2 全局参数配置 (config / getConfig)

可随时全局修改默认计算精度与舍入规则：

```uts
import { config, getConfig, ROUND_HALF_EVEN } from '@/uni_modules/bignumber-bestX';

// 修改全局配置：默认保留 50 位小数，采用银行家舍入
config({
  DECIMAL_PLACES: 50,
  ROUNDING_MODE: ROUND_HALF_EVEN
});

// 获取当前全局配置快照
const currentConfig = getConfig();
console.log('当前默认小数位数:', currentConfig.DECIMAL_PLACES);
```

#### 📋 全局配置项参数表

| 选项名称 | 类型 | 默认值 | 作用说明 |
| :--- | :--- | :---: | :--- |
| `DECIMAL_PLACES` | `number` | `20` | 除法、开方、非整数幂等无法整除时的默认保留小数位 |
| `ROUNDING_MODE` | `number` | `4` (`ROUND_HALF_UP`) | 运算截断时的默认舍入模式 |
| `POW_PRECISION` | `number` | `100` | 非整数幂计算时的内部中间工作精度 |

---

## 六、目录结构与规范

```text
uni_modules/bignumber-bestX/
├── index.uts             # 核心统一出口（BigNumber 类、运算方法、舍入常量与配置器）
├── index.d.ts            # TypeScript 强类型定义提示
├── package.json          # 插件元信息（id: bignumber-bestX）
├── readme.md             # 官方使用说明文档
└── lib/                  # 纯原生 UTS 十进制与大整数算法内核
    ├── zint.uts          # 任意长整数高精度核心算法（加减、逐位相乘、长除法、平方根）
    ├── fx.uts            # 定点高精度级数展开算法（ln、exp 定点函数）
    └── types.uts         # 内部运算强类型
```

---

## 📄 开源与规范协议

- 本库遵循 **MIT** 开源协议。
- 专为 **uni-app X** 打造，全量遵循 UTS 强类型与全端无差别运算规范。
