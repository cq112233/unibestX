# Changelog

## 1.0.0 (2026-10-12)

- 首次发布，`unix-Bignumber` 任意精度高精度数学库。
- 四则运算：`plus` / `minus` / `multipliedBy` / `dividedBy` / `dividedToIntegerBy` / `modulo`，彻底消除浮点误差（`0.1 + 0.2 == 0.3`）。
- 幂与开方：整数快速幂、模幂 `exponentiatedBy(n, m)`、非整数次幂（`9^0.5 == 3`）、精确开方 `sqrt()`。
- 比较与判定：`comparedTo` / `isEqualTo` / `isGreaterThan(OrEqualTo)` / `isLessThan(OrEqualTo)` / `isFinite` / `isInteger` / `isNaN` / `isNegative` / `isPositive` / `isZero`。
- 格式与统计：`toString(base)`（2~36 进制）、`toFixed`、`toFormat`（千分位）、`decimalPlaces` / `dp`、`sd`、`precision`、`shiftedBy`、`integerValue`、`absoluteValue`、`negated`。
- 九种舍入模式（`ROUND_UP` ~ `ROUND_HALF_FLOOR`）与两种取模模式（`DOWN` / `EUCLID`）。
- 全局配置 `config()` / `getConfig()`：`DECIMAL_PLACES`、`ROUNDING_MODE`、`EXPONENTIAL_AT`、`RANGE`、`MODULO_MODE`、`POW_PRECISION`、`FORMAT`、`ALPHABET`。
- 全平台支持：Android / iOS / 鸿蒙 / H5 / 微信小程序，**同一套纯 UTS 实现**，不依赖 `BigInt` 与原生浮点 API，五端结果字节级一致。
