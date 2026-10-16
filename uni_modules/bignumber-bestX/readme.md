# bignumberx

uni-app X 全端跨平台任意精度高精度数学库，提供与 bignumber.js 一致的 API 风格与默认配置，兼容 Android、iOS、鸿蒙、H5、微信小程序等全平台。

---

## 🌟 特性

- 🚀 **全平台覆盖**：Android / iOS / 鸿蒙 / H5 / 小程序**同一套纯 UTS 实现**，不依赖 `BigInt`、不依赖浮点、不调用原生 `Math.log / Math.exp`，五端结果**字节级一致**。
- ➕ **任意精度四则运算**：`plus` / `minus` / `multipliedBy` / `dividedBy` / `dividedToIntegerBy` / `modulo`，彻底解决 `0.1 + 0.2 != 0.3`。
- 🔢 **任意精度整数与小数幂**：`exponentiatedBy(n)` 整数次幂走快速幂（精确）；`exponentiatedBy(0.5)` 这类非整数次幂走定点 `exp(n·ln x)` 路径，`9^0.5` 精确得到 `3`。
- 🧮 **模幂运算**：`exponentiatedBy(n, m)` 支持大数模幂，可用于 RSA / 大数加密场景，全程无溢出。
- √ **精确开方**：`sqrt()` 基于整数平方根 + 半比较判定，结果精确到配置小数位。
- 🎯 **九种舍入模式**：`ROUND_UP` / `DOWN` / `CEIL` / `FLOOR` / `HALF_UP` / `HALF_DOWN` / `HALF_EVEN` / `HALF_CEIL` / `HALF_FLOOR`，作用于除法、取整、`toFixed`、有效数字。
- 🔤 **2~36 任意进制**：`new BigNumber('ff', 16)` 解析、`toString(16)` 输出，含小数部分。
- 💰 **金融千分位格式化**：`toFormat(2)` 输出 `1,234,567.89`，支持自定义分组符号（含印度式次级分组）。
- 📊 **统计与变换**：`decimalPlaces` / `sd` / `precision` / `shiftedBy` / `integerValue` / `absoluteValue` / `negated`。
- ⚙️ **全局配置**：`config({ DECIMAL_PLACES, ROUNDING_MODE, EXPONENTIAL_AT, RANGE, MODULO_MODE, POW_PRECISION, FORMAT, ALPHABET })`，默认值与 bignumber.js 对齐（`DECIMAL_PLACES = 20`、`ROUNDING_MODE = 4` ROUND_HALF_UP、`MODULO_MODE = 1`）。

---

## 📊 各平台底层实现对照表

本模块无任何原生分支，**所有平台共用一份纯 UTS 十进制数串实现**，这正是「全端一致」的保证：

| 能力 | 实现方式 | Android / iOS / 鸿蒙 | H5 / 小程序 |
| :--- | :--- | :--- | :--- |
| **数值表示** | `sign × coeff × 10^exp`（`coeff` 为十进制数字串，无前导零尾随零） | 纯 UTS 字符串运算（编译为 Kotlin / Swift / ArkTS） | 纯 UTS 字符串运算（编译为 JS） |
| **加减法** | 十进制对齐后按位加减（`lib/zint.uts`） | 同上 | 同上 |
| **乘法** | 逐位相乘 + 进位（`ziMul`） | 同上 | 同上 |
| **除法** | 长除法，预生成 1~9 倍数表，每位数最多 9 次比较（`ziDivMod`） | 同上 | 同上 |
| **开方** | 牛顿迭代整数平方根 `ziSqrt` + 精确半比较判定 | 同上 | 同上 |
| **整数幂 / 模幂** | 快速幂（平方-乘），取模逐步收敛 | 同上 | 同上 |
| **非整数幂** | 定点 `x^n = exp(n·ln x)`，`ln` 用平方根降幅 + atanh 级数，`exp` 用 ln10 约减 + Taylor 级数（`lib/fx.uts`） | 同上 | 同上 |
| **进制转换** | 手写除基取余 / 乘基取整 | 同上 | 同上 |

> 因不使用 `BigInt` 与原生浮点 API，**不存在** Android 用 `BigInteger`、iOS 用 `Decimal`、H5 用 JS `Number` 之类的端差异，也就不存在「同一算式五端算出不同结果」的问题。

---

## 📖 使用方式与代码示例

```uts
import { BigNumber, config, getConfig, ROUND_DOWN, ROUND_HALF_EVEN } from '@/uni_modules/bignumberx'

// ==========================================
// 1. 构造与浮点误差消除
// ==========================================
const a = new BigNumber(0.1)
const sum = a.plus(0.2)            // 0.3（原生 JS 会得到 0.30000000000000004）
const diff = new BigNumber(0.3).minus(0.1)   // 0.2
const prod = new BigNumber(0.1).times(0.1)   // 0.01

// 也可以直接传字符串做任意精度构造
const big = new BigNumber('99999999999999999999999999999999').plus(1)

// ==========================================
// 2. 四则运算与整除、取模
// ==========================================
const q = new BigNumber(1).dividedBy(3)      // 0.33333333333333333333（按 DECIMAL_PLACES 收敛）
const iq = new BigNumber(10).dividedToIntegerBy(3)  // 3
const md = new BigNumber(-10).modulo(3)      // -1

// ==========================================
// 3. 幂运算：整数幂、非整数幂、模幂
// ==========================================
const p1 = new BigNumber(2).exponentiatedBy(128)      // 3.40282366920938463463374607431768211456e+38
const p1i = p1.toFixed(0)                             // 完整 39 位整数，无精度损失
const p2 = new BigNumber(9).exponentiatedBy(0.5)      // 3
const p3 = new BigNumber(3).exponentiatedBy(100, 97)   // 81（模幂）

// 开方
const s = new BigNumber(2).sqrt()            // 1.4142135623730950488

// ==========================================
// 4. 比较与判定
// ==========================================
const ok = new BigNumber(0.1).plus(0.2).isEqualTo(0.3)  // true
const c = new BigNumber(2).comparedTo(1)                // 1
const nan = new BigNumber('abc').isNaN()                // true

// ==========================================
// 5. 格式化输出
// ==========================================
new BigNumber('1234567.891').toFormat(2)     // '1,234,567.89'
new BigNumber('1.005').toFixed(2)            // '1.01'
new BigNumber(255).toString(16)              // 'ff'
new BigNumber('ff', 16).toString()           // '255'

// ==========================================
// 6. 统计与变换
// ==========================================
new BigNumber('0.00123').decimalPlaces()     // 5
new BigNumber('9876.54321').sd()             // 9
new BigNumber('1.23').shiftedBy(3)           // 1230
new BigNumber(-3).absoluteValue()            // 3

// ==========================================
// 7. 全局配置
// ==========================================
config({ DECIMAL_PLACES: 50, ROUNDING_MODE: ROUND_HALF_EVEN })
const cfg = getConfig()   // 读取当前配置快照
```

---

## 🔢 舍入模式（0~8）

| 常量 | 值 | 语义 |
| :--- | :--- | :--- |
| `ROUND_UP` | 0 | 远离零方向舍入 |
| `ROUND_DOWN` | 1 | 朝向零方向舍入（截断） |
| `ROUND_CEIL` | 2 | 朝向 `+Infinity` |
| `ROUND_FLOOR` | 3 | 朝向 `-Infinity` |
| `ROUND_HALF_UP` | 4 | 四舍五入（默认） |
| `ROUND_HALF_DOWN` | 5 | 五舍（`1.5 → 1`，`2.5 → 2`） |
| `ROUND_HALF_EVEN` | 6 | 银行家舍入 |
| `ROUND_HALF_CEIL` | 7 | 五入朝 `+Infinity` |
| `ROUND_HALF_FLOOR` | 8 | 五入朝 `-Infinity` |

取模模式：`MODULO_MODE_DOWN`（1，默认，符号随被除数）、`MODULO_MODE_EUCLID`（9，恒为非负）。

---

## 🔒 规范与设计原则

1. **全端唯一实现**：不做平台分支，纯 UTS 字符串整数运算，从根上消除跨端数值差异。
2. **不做隐式精度损失**：不经过 `number` 中转（`toNumber()` 除外），`new BigNumber(0.1)` 直接读取双精度数的**精确十进制值**（`0.1`），而非 `0.1000000000000000055511151231257827`。
3. **默认配置对齐 bignumber.js**：`DECIMAL_PLACES = 20`、`ROUNDING_MODE = ROUND_HALF_UP`、`MODULO_MODE = 1`；科学计数法阈值等价于 `dex <= -7 || dex >= 21`。
4. **不修改入参**：所有运算返回**新的** `BigNumber` 实例，原对象保持不变。
5. **异常输入安全**：解析失败、`0 / 0` 等返回 `NaN`，非零除以零返回 `±Infinity`，均可用 `isNaN()` / `isFinite()` 判定，不会抛异常。
