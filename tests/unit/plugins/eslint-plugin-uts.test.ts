import { describe, expect, it } from 'vitest';
import { ESLint } from 'eslint';

describe('eslint-plugin-uts Unit Tests', () => {
  const eslint = new ESLint({
    overrideConfigFile: 'eslint.config.mjs'
  });

  const eslintWithFix = new ESLint({
    overrideConfigFile: 'eslint.config.mjs',
    fix: true
  });

  describe('uvue-prefer-hex-color rule', () => {
    it('should warn on named colors in Tailwind class and support autofix', async () => {
      const code = `<template>
  <view class="flex flex-col bg-[red]">
    <text>Test</text>
  </view>
</template>
`;

      const [res] = await eslint.lintText(code, { filePath: 'src/pages/test/test.uvue' });
      const hexWarnings = res.messages.filter(m => m.ruleId === 'uts/uvue-prefer-hex-color');

      expect(hexWarnings.length).toBe(1);
      expect(hexWarnings[0].message).toContain('bg-[red]');

      // Test autofix
      const [fixRes] = await eslintWithFix.lintText(code, { filePath: 'src/pages/test/test.uvue' });
      expect(fixRes.output).toContain('bg-[#ff0000]');
    });

    it('should warn on named colors in <style> block and support autofix', async () => {
      const code = `<template>
  <view class="box"></view>
</template>

<style scoped>
.box {
  width: 100%;
  color: red;
  background-color: blue;
}
</style>
`;

      const [res] = await eslint.lintText(code, { filePath: 'src/pages/test/test.uvue' });
      const hexWarnings = res.messages.filter(m => m.ruleId === 'uts/uvue-prefer-hex-color');

      expect(hexWarnings.length).toBe(2);
      expect(hexWarnings.some(m => m.message.includes('"red"'))).toBe(true);
      expect(hexWarnings.some(m => m.message.includes('"blue"'))).toBe(true);

      // Test autofix
      const [fixRes] = await eslintWithFix.lintText(code, { filePath: 'src/pages/test/test.uvue' });
      expect(fixRes.output).toContain('color: #ff0000;');
      expect(fixRes.output).toContain('background-color: #0000ff;');
    });

    it('should not warn on standard hex colors, transparent, or CSS variables', async () => {
      const cleanCode = `<template>
  <view class="bg-[#1e293b] border-[#e2e8f0]">
    <text style="color: #ffffff;">Clean</text>
  </view>
</template>

<style scoped>
.box {
  background-color: transparent;
  color: #334155;
  border: 1px solid #e2e8f0;
  --theme: #4f46e5;
  color: var(--theme);
}
</style>
`;

      const [res] = await eslint.lintText(cleanCode, { filePath: 'src/pages/test/test.uvue' });
      const hexWarnings = res.messages.filter(m => m.ruleId === 'uts/uvue-prefer-hex-color');

      expect(hexWarnings.length).toBe(0);
    });
  });

  describe('no-interface rule', () => {
    it('should report interface and autofix to type', async () => {
      const code = `
interface UserInfo {
  name: string;
  age: number;
}
`;

      const [res] = await eslint.lintText(code, { filePath: 'src/store/user.uts' });
      const ifaceErrors = res.messages.filter(m => m.ruleId === 'uts/no-interface');

      expect(ifaceErrors.length).toBe(1);
      expect(ifaceErrors[0].message).toContain('[UTS规范]');

      const [fixRes] = await eslintWithFix.lintText(code, { filePath: 'src/store/user.uts' });
      expect(fixRes.output).toContain('type UserInfo =');
    });
  });

  describe('no-undefined rule', () => {
    it('should report undefined type in UTS', async () => {
      const code = `
let user: string | undefined;
`;

      const [res] = await eslint.lintText(code, { filePath: 'src/utils/test.uts' });
      const undefErrors = res.messages.filter(m => m.ruleId === 'uts/no-undefined');

      expect(undefErrors.length).toBeGreaterThanOrEqual(1);
    });
  });
});
