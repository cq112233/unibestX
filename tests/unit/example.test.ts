import { describe, expect, it } from 'vitest';

/**
 * 单元测试示例模板（pnpm clean:tests 会保留本文件）
 *
 * 使用方式：
 * 1. 复制本文件为 tests/unit/<module>/<name>.test.ts
 * 2. 替换被测函数与断言
 * 3. 运行 pnpm test
 */

type CartItem = {
  price: number;
  count: number;
};

function calcTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.price * item.count, 0);
}

describe('example: calcTotal', () => {
  it('should calculate the total price', () => {
    const items: CartItem[] = [
      { price: 10, count: 2 },
      { price: 20, count: 3 }
    ];

    expect(calcTotal(items)).toBe(80);
  });

  it('should return zero for an empty list', () => {
    expect(calcTotal([])).toBe(0);
  });
});
