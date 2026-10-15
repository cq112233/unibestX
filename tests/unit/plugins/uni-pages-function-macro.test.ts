import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import uniPagesPlugin, {
  buildPages,
  DefineConditional,
  getPlatformEnv,
  mergePagesJson
} from '../../../plugins/vite-plugin-uni-pages';

describe('uni-pages 函数式 definePage 与跨端条件编译', () => {
  it('getPlatformEnv 能根据平台返回全套环境变量', () => {
    const h5Env = getPlatformEnv('h5');
    expect(h5Env.isH5).toBe(true);
    expect(h5Env.isWeb).toBe(true);
    expect(h5Env.isMp).toBe(false);
    expect(h5Env.isMpWeixin).toBe(false);

    const wxEnv = getPlatformEnv('mp-weixin');
    expect(wxEnv.isH5).toBe(false);
    expect(wxEnv.isMp).toBe(true);
    expect(wxEnv.isMpWeixin).toBe(true);

    const appEnv = getPlatformEnv('app-android');
    expect(appEnv.isApp).toBe(true);
    expect(appEnv.isAppAndroid).toBe(true);
    expect(appEnv.isH5).toBe(false);

    const harmonyEnv = getPlatformEnv('app-harmony');
    expect(harmonyEnv.isApp).toBe(true);
    expect(harmonyEnv.isAppHarmony).toBe(true);
    expect(harmonyEnv.isAppAndroid).toBe(false);
    expect(harmonyEnv.isAppIOS).toBe(false);

    const alipayEnv = getPlatformEnv('mp-alipay');
    expect(alipayEnv.isMp).toBe(true);
    expect(alipayEnv.isMpAlipay).toBe(true);
    expect(alipayEnv.isMpWeixin).toBe(false);

    const mpHarmonyEnv = getPlatformEnv('mp-harmony');
    expect(mpHarmonyEnv.isMp).toBe(true);
    expect(mpHarmonyEnv.isMpHarmony).toBe(true);
    expect(mpHarmonyEnv.isApp).toBe(false);
  });

  it('defineConditional 支持链式 ifdef 与 ifndef 配置', () => {
    const dsl = new DefineConditional({
      type: 'home',
      style: { navigationBarTitleText: '通用标题', enablePullDownRefresh: false }
    })
      .ifdef('mp-weixin', { style: { navigationBarTitleText: '微信标题' } })
      .ifndef(['h5', 'web'], { middlewares: ['auth'] });

    const weixin = dsl.resolve('mp-weixin');
    expect(weixin.style.navigationBarTitleText).toBe('微信标题');
    expect(weixin.middlewares).toEqual(['auth']);

    const h5 = dsl.resolve('h5');
    expect(h5.style.navigationBarTitleText).toBe('通用标题');
    expect(h5.middlewares).toBeUndefined();
  });

  it('支持在临时目录下扫描并求值函数式与异步 definePage 宏（带 isH5 条件判断）', async () => {
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'uni-pages-fn-test-'));
    try {
      const pagesDir = path.join(tmpDir, 'src', 'pages', 'index');
      fs.mkdirSync(pagesDir, { recursive: true });

      // 编写类似用户需求代码：函数式 async definePage，依赖 isH5 判断
      const pageCode = `
<template>
  <view>Home</view>
</template>

<script setup lang="ts">
definePage(async () => {
  const title = isH5 ? 'H5 环境' : '非 H5 环境';
  function getCustomNav() {
    return 'custom';
  }

  return {
    type: 'home',
    style: {
      navigationStyle: getCustomNav(),
      navigationBarTitleText: title
    }
  };
});
</script>
`;
      fs.writeFileSync(path.join(pagesDir, 'index.uvue'), pageCode, 'utf-8');

      // 1. 在 H5 环境下构建
      process.env.UNI_PLATFORM = 'h5';
      const h5State = await buildPages(
        { dir: 'src/pages', outFile: 'pages.json', configFile: 'pages.config.json' },
        { root: tmpDir, isProduction: false }
      );
      expect(h5State).not.toBeNull();
      const h5Page = h5State!.finalPages.find(p => p.path.includes('index'));
      expect(h5Page).toBeDefined();
      expect(h5Page!.style?.navigationBarTitleText).toBe('H5 环境');
      expect(h5Page!.style?.navigationStyle).toBe('custom');
      expect(h5Page!.type).toBe('home');

      // 2. 在 mp-weixin 环境下构建
      process.env.UNI_PLATFORM = 'mp-weixin';
      const wxState = await buildPages(
        { dir: 'src/pages', outFile: 'pages.json', configFile: 'pages.config.json' },
        { root: tmpDir, isProduction: false }
      );
      expect(wxState).not.toBeNull();
      const wxPage = wxState!.finalPages.find(p => p.path.includes('index'));
      expect(wxPage).toBeDefined();
      expect(wxPage!.style?.navigationBarTitleText).toBe('非 H5 环境');
      expect(wxPage!.type).toBe('home');
    }
    finally {
      delete process.env.UNI_PLATFORM;
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }
  });

  it('支持在 definePage 宏内真正执行异步操作（await Promise / setTimeout）再生成配置', async () => {
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'uni-pages-async-await-'));
    try {
      const pagesDir = path.join(tmpDir, 'src', 'pages', 'async-demo');
      fs.mkdirSync(pagesDir, { recursive: true });

      const pageCode = `
<template>
  <view>Async Demo</view>
</template>

<script setup lang="ts">
definePage(async (options) => {
  const { isH5, isAppIOS, isAppAndroid } = options;

  // 模拟异步接口请求或延时任务
  let fetchedData = '';
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      fetchedData = 'async-success';
      resolve();
    }, 50);
  });

  return {
    name: 'async-page',
    style: {
      navigationBarTitleText: isH5 ? \`\${fetchedData}-h5\` : \`\${fetchedData}-app\`
    }
  };
});
</script>
`;
      fs.writeFileSync(path.join(pagesDir, 'index.uvue'), pageCode, 'utf-8');

      process.env.UNI_PLATFORM = 'h5';
      const state = await buildPages(
        { dir: 'src/pages', outFile: 'pages.json', configFile: 'pages.config.json' },
        { root: tmpDir, isProduction: false }
      );
      expect(state).not.toBeNull();
      const page = state!.finalPages.find(p => p.path.includes('async-demo'));
      expect(page).toBeDefined();
      expect(page!.name).toBe('async-page');
      expect(page!.style?.navigationBarTitleText).toBe('async-success-h5');

      const variants = (page as any)._variants as Array<{ platform: string; page: any }>;
      expect(variants).toBeDefined();
      const iosVariant = variants.find(v => v.platform === 'APP-IOS');
      expect(iosVariant?.page.style.navigationBarTitleText).toBe('async-success-app');
    }
    finally {
      delete process.env.UNI_PLATFORM;
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }
  });

  it('mergePagesJson 生成带 // GENERATED BY UNI-PAGES 与 // #ifdef 的多平台 pages.json', () => {
    // 模拟用户在 H5 下的输出
    const h5Output = {
      pages: [
        {
          path: 'pages/index/index',
          type: 'home',
          style: {
            navigationStyle: 'custom',
            navigationBarTitleText: 'H5 环境'
          }
        }
      ]
    };

    // 1. 第一次在 H5 下写盘
    const h5Content = mergePagesJson('', h5Output as any, 'H5');
    expect(h5Content).toContain('// GENERATED BY UNI-PAGES, PLATFORM: H5');
    expect(h5Content).toContain('"navigationBarTitleText": "H5 环境"');
    // 单平台覆盖全集时裸着输出
    expect(h5Content).not.toContain('#ifdef');

    // 2. 第二次在 MP-WEIXIN 下写盘
    const wxOutput = {
      pages: [
        {
          path: 'pages/index/index',
          type: 'home',
          style: {
            navigationStyle: 'custom',
            navigationBarTitleText: '非 H5 环境'
          }
        }
      ]
    };

    const mergedContent = mergePagesJson(h5Content, wxOutput as any, 'MP-WEIXIN');

    // 验证多平台头部标记与 #ifdef 条件编译块
    expect(mergedContent).toContain('// GENERATED BY UNI-PAGES, PLATFORM: H5 || MP-WEIXIN');
    expect(mergedContent).toContain('// #ifdef H5');
    expect(mergedContent).toContain('"navigationBarTitleText": "H5 环境"');
    expect(mergedContent).toContain('// #ifdef MP-WEIXIN');
    expect(mergedContent).toContain('"navigationBarTitleText": "非 H5 环境"');
    expect(mergedContent).toContain('// #endif');
  });

  it('stripDefinePageMacro 在 Vite 转换阶段能安全移除各种形式的 definePage 宏', () => {
    const plugin: any = uniPagesPlugin();

    // 1. 箭头函数宏
    const code1 = `
<script setup lang="ts">
definePage(() => {
  return { style: { navigationBarTitleText: '标题' } };
});
const a = 1;
</script>
`;
    const res1 = plugin.transform(code1, '/src/pages/index/index.uvue');
    expect(res1).not.toBeNull();
    expect(res1.code).not.toContain('definePage');
    expect(res1.code).toContain('const a = 1;');

    // 2. async 箭头函数宏
    const code2 = `
<script setup lang="ts">
definePage(async () => {
  const title = isH5 ? 'H5' : '非 H5';
  return { type: 'home', style: { navigationBarTitleText: title } };
});
</script>
`;
    const res2 = plugin.transform(code2, '/src/pages/index/index.uvue');
    expect(res2).not.toBeNull();
    expect(res2.code).not.toContain('definePage');
  });

  it('支持针对鸿蒙(HarmonyOS)与支付宝(Alipay)及其他小程序独立生成条件编译块', async () => {
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'uni-pages-harmony-alipay-'));
    try {
      const pagesDir = path.join(tmpDir, 'src', 'pages', 'detail');
      fs.mkdirSync(pagesDir, { recursive: true });

      const pageCode = `
<template>
  <view>Detail</view>
</template>

<script setup lang="ts">
definePage((options) => {
  const { isH5, isAppHarmony, isAppIOS, isAppAndroid, isMpAlipay, isMpWeixin } = options;
  return {
    style: {
      navigationBarTitleText: isH5
        ? 'H5详情'
        : isAppHarmony
          ? '鸿蒙详情'
          : isAppIOS
            ? '苹果详情'
            : isAppAndroid
              ? '安卓详情'
              : isMpAlipay
                ? '支付宝详情'
                : isMpWeixin
                  ? '微信详情'
                  : '其他小程序详情'
    }
  };
});
</script>
`;
      fs.writeFileSync(path.join(pagesDir, 'detail.uvue'), pageCode, 'utf-8');

      // 验证构建出的变体包含细粒度的鸿蒙与支付宝
      const state = await buildPages(
        { dir: 'src/pages', outFile: 'pages.json', configFile: 'pages.config.json' },
        { root: tmpDir, isProduction: false }
      );
      expect(state).not.toBeNull();
      const page = state!.finalPages.find(p => p.path.includes('detail'));
      expect(page).toBeDefined();

      const variants = (page as any)._variants as Array<{ platform: string; page: any }>;
      expect(variants).toBeDefined();

      const harmonyVariant = variants.find(v => v.platform === 'APP-HARMONY');
      expect(harmonyVariant?.page.style.navigationBarTitleText).toBe('鸿蒙详情');

      const alipayVariant = variants.find(v => v.platform === 'MP-ALIPAY');
      expect(alipayVariant?.page.style.navigationBarTitleText).toBe('支付宝详情');

      const iosVariant = variants.find(v => v.platform === 'APP-IOS');
      expect(iosVariant?.page.style.navigationBarTitleText).toBe('苹果详情');

      const androidVariant = variants.find(v => v.platform === 'APP-ANDROID');
      expect(androidVariant?.page.style.navigationBarTitleText).toBe('安卓详情');

      const wxVariant = variants.find(v => v.platform === 'MP-WEIXIN');
      expect(wxVariant?.page.style.navigationBarTitleText).toBe('微信详情');

      const baiduVariant = variants.find(v => v.platform === 'MP-BAIDU');
      expect(baiduVariant?.page.style.navigationBarTitleText).toBe('其他小程序详情');
    }
    finally {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }
  });

  it('多页面同时声明异步 definePage 宏时全量并发执行（耗时并发重叠且路由顺序恒定）', async () => {
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'uni-pages-multi-async-'));
    try {
      const page1Dir = path.join(tmpDir, 'src', 'pages', 'page1');
      const page2Dir = path.join(tmpDir, 'src', 'pages', 'page2');
      const page3Dir = path.join(tmpDir, 'src', 'pages', 'page3');
      fs.mkdirSync(page1Dir, { recursive: true });
      fs.mkdirSync(page2Dir, { recursive: true });
      fs.mkdirSync(page3Dir, { recursive: true });

      // 3 个页面均有 80ms 异步，如果串行则耗时至少 240ms，若并发则约为 80~120ms
      const makeCode = (title: string, delayMs: number) => `
<template><view>${title}</view></template>
<script setup lang="ts">
definePage(async () => {
  await new Promise<void>((resolve) => setTimeout(resolve, ${delayMs}));
  return {
    style: {
      navigationBarTitleText: '${title}'
    }
  };
});
</script>
`;
      fs.writeFileSync(path.join(page1Dir, 'index.uvue'), makeCode('Page-One', 80), 'utf-8');
      fs.writeFileSync(path.join(page2Dir, 'index.uvue'), makeCode('Page-Two', 80), 'utf-8');
      fs.writeFileSync(path.join(page3Dir, 'index.uvue'), makeCode('Page-Three', 80), 'utf-8');

      const start = Date.now();
      const state = await buildPages(
        { dir: 'src/pages', outFile: 'pages.json', configFile: 'pages.config.json' },
        { root: tmpDir, isProduction: false }
      );
      const elapsed = Date.now() - start;

      expect(state).not.toBeNull();
      expect(state!.finalPages.length).toBe(3);

      const p1 = state!.finalPages.find(p => p.path.includes('page1'));
      const p2 = state!.finalPages.find(p => p.path.includes('page2'));
      const p3 = state!.finalPages.find(p => p.path.includes('page3'));

      expect(p1?.style?.navigationBarTitleText).toBe('Page-One');
      expect(p2?.style?.navigationBarTitleText).toBe('Page-Two');
      expect(p3?.style?.navigationBarTitleText).toBe('Page-Three');

      // 验证并发执行：总耗时显著小于 3 个页面的串行累加（240ms）
      expect(elapsed).toBeLessThan(220);
    }
    finally {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }
  });

  it('options 包含 env 环境变量对象与 platform 子对象（支持解构 isH5、isAppIOS 等）', async () => {
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'uni-pages-env-platform-'));
    try {
      const pagesDir = path.join(tmpDir, 'src', 'pages', 'env-demo');
      fs.mkdirSync(pagesDir, { recursive: true });

      // 写入 .env 文件
      fs.writeFileSync(path.join(tmpDir, '.env'), 'VITE_DEMO_TITLE=MyAwesomeTitle\n', 'utf-8');

      const pageCode = `
<template>
  <view>Env Demo</view>
</template>

<script setup lang="ts">
definePage((options) => {
  const { env, platform } = options;
  const { isH5, isAppAndroid } = platform;

  return {
    name: 'env-demo',
    style: {
      navigationBarTitleText: isH5 ? env.VITE_DEMO_TITLE : 'other'
    }
  };
});
</script>
`;
      fs.writeFileSync(path.join(pagesDir, 'index.uvue'), pageCode, 'utf-8');

      process.env.UNI_PLATFORM = 'h5';
      const state = await buildPages(
        { dir: 'src/pages', outFile: 'pages.json', configFile: 'pages.config.json' },
        { root: tmpDir, isProduction: false }
      );

      expect(state).not.toBeNull();
      const page = state!.finalPages.find(p => p.path.includes('env-demo'));
      expect(page).toBeDefined();
      expect(page!.style?.navigationBarTitleText).toBe('MyAwesomeTitle');
    }
    finally {
      delete process.env.UNI_PLATFORM;
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }
  });

  it('uniPagesPlugin 冷启动时 configResolved 与 buildStart 仅触发一次生成，避免重复扫描', async () => {
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'uni-pages-lifecycle-'));
    try {
      const pagesDir = path.join(tmpDir, 'src', 'pages', 'home');
      fs.mkdirSync(pagesDir, { recursive: true });

      let evalCount = 0;
      (globalThis as any).__TEST_EVAL_COUNT = () => {
        evalCount++;
      };

      const pageCode = `
<template><view>Home</view></template>
<script setup lang="ts">
definePage(() => {
  if (typeof globalThis.__TEST_EVAL_COUNT === 'function') {
    globalThis.__TEST_EVAL_COUNT();
  }
  return { name: 'home' };
});
</script>
`;
      fs.writeFileSync(path.join(pagesDir, 'index.uvue'), pageCode, 'utf-8');

      const plugin = uniPagesPlugin({
        dir: 'src/pages',
        outFile: 'pages.json',
        configFile: 'pages.config.json'
      });

      // 1. 模拟 Vite 的 configResolved 钩子
      await (plugin as any).configResolved({ root: tmpDir, plugins: [] });
      // 1 次当前平台执行 + 15 次跨端矩阵采样 = 16 次求值
      expect(evalCount).toBe(16);

      // 2. 紧接着模拟 Vite 紧随其后的 buildStart 钩子（首轮启动）
      await (plugin as any).buildStart();
      // 防重机制生效，首轮跳过重复生成，计数保持 16 而非 32
      expect(evalCount).toBe(16);

      // 3. 模拟后续 watch 模式触发的第二次 buildStart（如差量编译/重新构建）
      await (plugin as any).buildStart();
      expect(evalCount).toBe(32);
    }
    finally {
      delete (globalThis as any).__TEST_EVAL_COUNT;
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }
  });
});



