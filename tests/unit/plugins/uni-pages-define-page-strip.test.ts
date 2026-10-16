import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import uniPagesPlugin from '../../../plugins/vite-plugin-uni-pages';

/**
 * `definePage(...)` 宏移除的边界回归。
 *
 * 背景：该宏移除逻辑跑在 Vite 的 `transform` 钩子上，拿到的是**整份** `.uvue` 源码（模板 + 脚本）。
 * 早期实现直接对整份源码做首次匹配删除，于是页面里作为**文档展示**的 `definePage({...})` 示例文本
 * 会被当成宏调用删掉 —— `<text>` 变成空节点、高度归零，界面上只剩一条空的黑底代码条
 * （真实受害者：`src/pages/index/views/IndexView.uvue` 的调试指南卡片）。
 *
 * 修法：`definePage` 是脚本级宏，只在 `<script>` 块内搜索；已被拆出的纯脚本子模块没有 `<script>`
 * 标签，退回整段搜索以保持原行为。
 */

const ROOT = process.cwd();

function runTransform(code: string, id: string): string | null {
  const plugin: any = uniPagesPlugin({ enabled: true });
  const transform = typeof plugin.transform === 'function' ? plugin.transform : plugin.transform.handler;
  const out = transform.call({}, code, id);
  return out == null ? null : out.code;
}

const TEMPLATE_DOC_SNIPPET = `definePage({ debug: true, debugHome: true })`;

describe('uni-pages definePage 宏移除只作用于 <script> 块', () => {
  it('模板里的文档示例保留，脚本里的宏照旧被移除', () => {
    const code = [
      '<template>',
      '  <view class="bg-[#0f172a]">',
      '    <text class="text-[10px]">',
      `      ${TEMPLATE_DOC_SNIPPET}`,
      '    </text>',
      '  </view>',
      '</template>',
      '',
      '<script setup lang="uts">',
      `definePage({ style: { navigationBarTitleText: '首页' } });`,
      'const a = 1;',
      '</script>',
      ''
    ].join('\n');

    const out = runTransform(code, `${ROOT}/src/pages/probe/probe.uvue`);

    expect(out).not.toBeNull();
    expect(out).toContain(TEMPLATE_DOC_SNIPPET);
    expect(out).not.toContain('navigationBarTitleText');
    expect(out!.match(/definePage\(/g)).toHaveLength(1);
  });

  it('definePage( 只出现在模板里时，整份源码不被改写', () => {
    const code = [
      '<template>',
      '  <text>definePage({ debug: true })</text>',
      '</template>',
      '',
      '<script setup lang="uts">',
      'const a = 1;',
      '</script>',
      ''
    ].join('\n');

    expect(runTransform(code, `${ROOT}/src/pages/probe/probe.uvue`)).toBeNull();
  });

  it('纯脚本子模块（无 <script> 标签）保持原行为：整段搜索并移除宏', () => {
    const code = [
      `import { ref } from 'vue';`,
      `definePage({ style: { navigationBarTitleText: 'x' } });`,
      `const a = ref(1);`,
      ''
    ].join('\n');

    const out = runTransform(code, `${ROOT}/src/pages/probe/probe.uvue?vue&type=script`);

    expect(out).not.toBeNull();
    expect(out).not.toContain('definePage(');
  });

  it('首页调试指南卡片的示例文本不会被插件改写', () => {
    const file = path.resolve(ROOT, 'src/pages/index/views/IndexView.uvue');
    const code = fs.readFileSync(file, 'utf-8');
    const finalCode = runTransform(code, file) ?? code;

    expect(finalCode).toContain(TEMPLATE_DOC_SNIPPET);
  });
});
