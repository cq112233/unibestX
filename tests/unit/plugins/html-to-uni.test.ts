import { describe, expect, it } from 'vitest';
import htmlToUniPlugin from '@/plugins/vite-plugin-html-to-uni';

describe('htmlToUniPlugin', () => {
  const plugin = htmlToUniPlugin();
  const transform = plugin.transform as (code: string, id: string) => { code: string; map: any } | null;

  it('transforms div to view and b to text with font-bold', () => {
    const raw = `
<template>
  <TabPageHost>
    <div>
      1111
    </div>
    <b>
      11112222
    </b>
  </TabPageHost>
</template>
<script setup lang="uts">
const div = 'div';
</script>
<style>
.div { color: red; }
</style>
`;
    const res = transform(raw, '/src/pages/index/index.uvue');
    expect(res).not.toBeNull();
    const result = res!.code;

    // template 内被成功转换：div 转为 view，b 转为带 font-bold 的 text
    expect(result).toContain('<view>\n      1111\n    </view>');
    expect(result).toContain('<text class="font-bold">\n      11112222\n    </text>');
    expect(result).not.toContain('<div>');
    expect(result).not.toContain('<b>');

    // 测试 ol、ul、li、main 结构转换
    const listRaw = `<template><main><ol><li>item1</li></ol></main></template>`;
    const listRes = transform(listRaw, '/src/test.uvue');
    expect(listRes!.code).toBe('<template><view><view><view>item1</view></view></view></template>');

    // script 和 style 保持原样不被误伤
    expect(result).toContain('const div = \'div\';');
    expect(result).toContain('.div { color: red; }');
  });

  it('merges defaultClass into existing class without duplicates', () => {
    const raw = `
<template>
  <div>
    <b class="text-red-500 text-sm">bold red</b>
    <strong class="font-bold text-blue-500">already bold</strong>
    <i class="opacity-80">italic</i>
    <s class="text-gray-400">strikethrough</s>
  </div>
</template>
`;
    const res = transform(raw, '/src/pages/index/index.uvue');
    expect(res).not.toBeNull();
    const result = res!.code;

    // 自动前置合并 font-bold
    expect(result).toContain('<text class="font-bold text-red-500 text-sm">bold red</text>');
    // 已经包含 font-bold 则不重复追加
    expect(result).toContain('<text class="font-bold text-blue-500">already bold</text>');
    // i 标签注入 italic
    expect(result).toContain('<text class="italic opacity-80">italic</text>');
    // s 标签注入 line-through
    expect(result).toContain('<text class="line-through text-gray-400">strikethrough</text>');
  });

  it('supports attributes and self-closing tags', () => {
    const raw = `
<template>
  <div class="box" id="test">
    <img src="/static/logo.png" />
    <span class="text-sm">hello</span>
  </div>
</template>
`;
    const res = transform(raw, '/src/components/demo.vue');
    expect(res).not.toBeNull();
    const result = res!.code;

    expect(result).toContain('<view class="box" id="test">');
    expect(result).toContain('</view>');
    expect(result).toContain('<image src="/static/logo.png" />');
    expect(result).toContain('<text class="text-sm">hello</text>');
  });

  it('can disable style injection via options', () => {
    const customPlugin = htmlToUniPlugin({ injectDefaultStyle: false });
    const customTransform = customPlugin.transform as (code: string, id: string) => { code: string; map: any } | null;

    const raw = `
<template>
  <b>plain bold tag</b>
</template>
`;
    const res = customTransform(raw, '/src/pages/index/index.uvue');
    expect(res).not.toBeNull();
    expect(res!.code).toContain('<text>plain bold tag</text>');
  });

  it('handles nested template tags gracefully', () => {
    const raw = `
<template>
  <div>
    <template v-if="true">
      <b>bold</b>
    </template>
  </div>
</template>
`;
    const res = transform(raw, '/src/pages/index/index.uvue');
    expect(res).not.toBeNull();
    const result = res!.code;

    expect(result).toContain('<view>');
    expect(result).toContain('</view>');
    expect(result).toContain('<text class="font-bold">bold</text>');
  });

  it('skips non-vue files and node_modules', () => {
    const raw = '<div>test</div>';
    expect(transform(raw, '/src/utils/test.ts')).toBeNull();
    expect(transform(raw, '/node_modules/pkg/index.uvue')).toBeNull();
  });
});
