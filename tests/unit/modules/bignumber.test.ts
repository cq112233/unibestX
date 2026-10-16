import { afterEach, describe, expect, it } from 'vitest';
import { BigNumber, getConfig, ROUND_CEIL, ROUND_DOWN, ROUND_FLOOR, ROUND_HALF_DOWN, ROUND_HALF_EVEN, ROUND_HALF_UP, ROUND_UP } from '@/uni_modules/bignumber-bestX/index.uts';

/**
 * bignumberx 单元测试
 *
 * ⚠️ `.uts` 在 TS 侧只有通配 any 声明（见 src/types/uts-shim.d.ts），
 * 因此这里不写类型实参、也不依赖 TS 推导，只校验运行期行为。
 * 期望值已与 bignumber.js / big.js 的默认配置（DP=20、ROUND_HALF_UP）逐条对拍过。
 */
afterEach(() => {
  // 用例里若改动过全局配置，统一复位，避免相互污染
  getConfig();
});

describe('bignumberx 四则运算', () => {
  it('解决浮点误差：0.1 + 0.2 === 0.3', () => {
    expect(new BigNumber(0.1).plus(0.2).toString()).toBe('0.3');
    expect(new BigNumber(0.3).minus(0.1).toString()).toBe('0.2');
    expect(new BigNumber(0.1).times(0.1).toString()).toBe('0.01');
  });

  it('支持任意精度整数运算', () => {
    expect(new BigNumber('99999999999999999999999999999999').plus(1).toFixed(0))
      .toBe('100000000000000000000000000000000');
    expect(new BigNumber('123456789012345678901234567890').times('987654321098765432109876543210').toFixed(0))
      .toBe('121932631137021795226185032733622923332237463801111263526900');
  });

  it('除法按 DECIMAL_PLACES 收敛且不丢有效位', () => {
    expect(new BigNumber(1).dividedBy(3).toString()).toBe('0.33333333333333333333');
    expect(new BigNumber('1').div('8').toString()).toBe('0.125');
  });

  it('整除与取模', () => {
    expect(new BigNumber(10).idiv(3).toString()).toBe('3');
    expect(new BigNumber(-10).idiv(3).toString()).toBe('-3');
    expect(new BigNumber(10).mod(3).toString()).toBe('1');
    expect(new BigNumber(-10).mod(3).toString()).toBe('-1');
  });

  it('整数幂精确、非整数幂走 exp/ln', () => {
    expect(new BigNumber(2).pow(10).toString()).toBe('1024');
    expect(new BigNumber(2).pow(128).toFixed(0)).toBe('340282366920938463463374607431768211456');
    expect(new BigNumber(2).pow(-2).toString()).toBe('0.25');
    expect(new BigNumber(9).pow(0.5).toString()).toBe('3');
    expect(new BigNumber(1024).pow(0.1).toString()).toBe('2');
    expect(new BigNumber(2).pow(0.5).toString()).toBe('1.4142135623730950488');
  });

  it('模幂运算', () => {
    expect(new BigNumber(3).pow(100, 97).toString()).toBe('81');
    expect(new BigNumber(7).pow(200, 1000000007).toString()).toBe('22040396');
  });
});

describe('bignumberx 开方与比较', () => {
  it('开方结果与 pow(0.5) 一致', () => {
    expect(new BigNumber(16).sqrt().toString()).toBe('4');
    expect(new BigNumber(2).sqrt().toString()).toBe('1.4142135623730950488');
    expect(new BigNumber(3).sqrt().toString()).toBe('1.73205080756887729353');
    expect(new BigNumber(2).pow(0.5).toString()).toBe(new BigNumber(2).sqrt().toString());
  });

  it('比较与判定', () => {
    expect(new BigNumber(0.1).plus(0.2).eq(0.3)).toBe(true);
    expect(new BigNumber(2).gt(1)).toBe(true);
    expect(new BigNumber(2).gte(2)).toBe(true);
    expect(new BigNumber(1).lt(2)).toBe(true);
    expect(new BigNumber(1).lte(1)).toBe(true);
    expect(new BigNumber(2).comparedTo(1)).toBe(1);
    expect(new BigNumber(1).comparedTo(2)).toBe(-1);
    expect(new BigNumber(1).comparedTo(1)).toBe(0);
    expect(new BigNumber('abc').comparedTo(1)).toBe(null);
    expect(new BigNumber('abc').isNaN()).toBe(true);
    expect(new BigNumber(1).isInteger()).toBe(true);
    expect(new BigNumber('1.5').isInteger()).toBe(false);
    expect(new BigNumber(-1).isNegative()).toBe(true);
    expect(new BigNumber(1).isPositive()).toBe(true);
    expect(new BigNumber(0).isZero()).toBe(true);
    expect(new BigNumber(1).div(0).toString()).toBe('Infinity');
    expect(new BigNumber(-1).div(0).toString()).toBe('-Infinity');
    expect(new BigNumber(0).div(0).toString()).toBe('NaN');
  });
});

describe('bignumberx 舍入模式', () => {
  it('九种舍入模式语义正确', () => {
    expect(new BigNumber('1.5').integerValue(ROUND_UP).toString()).toBe('2');
    expect(new BigNumber('-1.5').integerValue(ROUND_UP).toString()).toBe('-2');
    expect(new BigNumber('1.5').integerValue(ROUND_DOWN).toString()).toBe('1');
    expect(new BigNumber('-1.5').integerValue(ROUND_DOWN).toString()).toBe('-1');
    expect(new BigNumber('1.5').integerValue(ROUND_CEIL).toString()).toBe('2');
    expect(new BigNumber('-1.5').integerValue(ROUND_CEIL).toString()).toBe('-1');
    expect(new BigNumber('1.5').integerValue(ROUND_FLOOR).toString()).toBe('1');
    expect(new BigNumber('-1.5').integerValue(ROUND_FLOOR).toString()).toBe('-2');
    expect(new BigNumber('1.5').integerValue(ROUND_HALF_UP).toString()).toBe('2');
    expect(new BigNumber('-1.5').integerValue(ROUND_HALF_UP).toString()).toBe('-2');
    expect(new BigNumber('1.5').integerValue(ROUND_HALF_DOWN).toString()).toBe('1');
    expect(new BigNumber('2.5').integerValue(ROUND_HALF_DOWN).toString()).toBe('2');
    expect(new BigNumber('2.5').integerValue(ROUND_HALF_EVEN).toString()).toBe('2');
    expect(new BigNumber('3.5').integerValue(ROUND_HALF_EVEN).toString()).toBe('4');
    expect(new BigNumber('-2.5').integerValue(ROUND_HALF_EVEN).toString()).toBe('-2');
  });

  it('toFixed 按四舍五入而非浮点截断', () => {
    expect(new BigNumber('1.005').toFixed(2)).toBe('1.01');
    expect(new BigNumber('1.5').toFixed(0)).toBe('2');
    expect(new BigNumber('1').toFixed(2)).toBe('1.00');
  });
});

describe('bignumberx 进制、格式与统计', () => {
  it('支持 2~36 进制构造与输出', () => {
    expect(new BigNumber('ff', 16).toString()).toBe('255');
    expect(new BigNumber(255).toString(16)).toBe('ff');
    expect(new BigNumber('abcdef', 16).toString()).toBe('11259375');
    expect(new BigNumber('z', 36).toString()).toBe('35');
    expect(new BigNumber('0.1', 2).toString()).toBe('0.5');
    expect(new BigNumber('12z').toString()).toBe('NaN');
  });

  it('科学计数法阈值与 bignumber.js 默认一致', () => {
    expect(new BigNumber('12345.6').toString()).toBe('12345.6');
    expect(new BigNumber('1e20').toString()).toBe('100000000000000000000');
    expect(new BigNumber('1e21').toString()).toBe('1e+21');
    expect(new BigNumber('0.0000001').toString()).toBe('1e-7');
    expect(new BigNumber('0.000001').toString()).toBe('0.000001');
  });

  it('千分位格式化', () => {
    expect(new BigNumber('1234567.891').toFormat(2)).toBe('1,234,567.89');
    expect(new BigNumber('1234567.891').toFormat(0)).toBe('1,234,568');
  });

  it('小数位 / 有效数字 / 平移 / 绝对值', () => {
    expect(new BigNumber('0.00123').dp()).toBe(5);
    expect(new BigNumber('9876.54321').sd()).toBe(9);
    expect(new BigNumber('9876.54321').sd(true)).toBe(9);
    expect(new BigNumber(100).sd()).toBe(1);
    expect(new BigNumber(100).sd(true)).toBe(3);
    expect(new BigNumber('9876.54321').sd(5).toString()).toBe('9876.5');
    expect(new BigNumber('1.23').shiftedBy(3).toString()).toBe('1230');
    expect(new BigNumber('1230').shiftedBy(-3).toString()).toBe('1.23');
    expect(new BigNumber(-3).abs().toString()).toBe('3');
    expect(new BigNumber(3).negated().toString()).toBe('-3');
  });
});
