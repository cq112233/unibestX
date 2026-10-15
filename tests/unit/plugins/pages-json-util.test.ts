import { describe, expect, it } from 'vitest';
import {
  extractDistinctPlatformConditions,
  loadAllPlatformPageVariants,
  loadPlatformPagesJson,
  matchesPlatform,
  parsePlatformPagesJson,
  preprocessJsonComments
} from '../../../plugins/pages-json-util';

describe('pages-json-util 跨端条件编译解析', () => {
  it('matchesPlatform 匹配各种平台及其别名', () => {
    // 1. 小程序
    expect(matchesPlatform('MP-WEIXIN', 'mp-weixin')).toBe(true);
    expect(matchesPlatform('MP', 'mp-weixin')).toBe(true);
    expect(matchesPlatform('MP', 'mp-alipay')).toBe(true);
    expect(matchesPlatform('MP-WEIXIN', 'h5')).toBe(false);

    // 2. H5 / Web
    expect(matchesPlatform('H5', 'h5')).toBe(true);
    expect(matchesPlatform('H5', 'web')).toBe(true);
    expect(matchesPlatform('WEB', 'h5')).toBe(true);
    expect(matchesPlatform('H5', 'mp-weixin')).toBe(false);

    // 3. App 平台
    expect(matchesPlatform('APP', 'app')).toBe(true);
    expect(matchesPlatform('APP-PLUS', 'app-android')).toBe(true);
    expect(matchesPlatform('APP-ANDROID', 'app-android')).toBe(true);
    expect(matchesPlatform('APP-IOS', 'app-android')).toBe(false);

    // 4. 多平台联合
    expect(matchesPlatform('APP || MP-WEIXIN', 'mp-weixin')).toBe(true);
    expect(matchesPlatform('APP || MP-WEIXIN', 'app-android')).toBe(true);
    expect(matchesPlatform('APP || MP-WEIXIN', 'h5')).toBe(false);

    // 5. loadPlatformPagesJson 容错测试
    expect(loadPlatformPagesJson('/path/not/exist.json')).toEqual({ pages: [], subPackages: [] });
  });

  it('preprocessJsonComments 能正确过滤特定平台的条件编译块', () => {
    const raw = `
{
  "pages": [
    // #ifdef APP || MP-WEIXIN
    {
      "path": "src/pages/index/index",
      "style": { "navigationBarTitleText": "微信与App首页" }
    },
    // #endif
    // #ifdef H5
    {
      "path": "src/pages/index/index",
      "style": { "navigationBarTitleText": "H5首页" }
    },
    // #endif
    {
      "path": "src/pages/common/common"
    }
  ]
}
`;

    // mp-weixin 下
    const wxClean = preprocessJsonComments(raw, 'mp-weixin');
    expect(wxClean).toContain('微信与App首页');
    expect(wxClean).not.toContain('H5首页');
    expect(wxClean).toContain('src/pages/common/common');

    // h5 下
    const h5Clean = preprocessJsonComments(raw, 'h5');
    expect(h5Clean).toContain('H5首页');
    expect(h5Clean).not.toContain('微信与App首页');
    expect(h5Clean).toContain('src/pages/common/common');
  });

  it('parsePlatformPagesJson 能用 JSON5 容错解析带尾逗号与多平台的 pages.json', () => {
    const raw = `
{
  "pages": [
    // #ifdef APP || MP-WEIXIN
    {
      "path": "src/pages/index/index",
      "style": { "navigationBarTitleText": "tabbar.home" },
    },
    // #endif
    // #ifdef H5
    {
      "path": "src/pages/index/index",
      "style": { "navigationBarTitleText": "xxx111" },
    },
    // #endif
  ],
}
`;

    const wxData = parsePlatformPagesJson(raw, 'mp-weixin');
    expect(wxData.pages).toHaveLength(1);
    expect(wxData.pages![0].path).toBe('src/pages/index/index');
    expect(wxData.pages![0].style?.navigationBarTitleText).toBe('tabbar.home');

    const h5Data = parsePlatformPagesJson(raw, 'h5');
    expect(h5Data.pages).toHaveLength(1);
    expect(h5Data.pages![0].path).toBe('src/pages/index/index');
    expect(h5Data.pages![0].style?.navigationBarTitleText).toBe('xxx111');
  });

  it('loadAllPlatformPageVariants 与 extractDistinctPlatformConditions 能正确提取多平台条件', async () => {
    const fs = await import('node:fs');
    const path = await import('node:path');
    const os = await import('node:os');

    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pages-json-test-'));
    const tempPagesJsonPath = path.join(tempDir, 'pages.json');

    const fixtureContent = `{
  "pages": [
    // #ifdef APP || MP-WEIXIN
    {
      "path": "src/pages/index/index",
      "style": {
        "navigationBarTitleText": "tabbar.home"
      }
    },
    // #endif
    // #ifdef H5
    {
      "path": "src/pages/index/index",
      "style": {
        "navigationBarTitleText": "xxx"
      }
    }
    // #endif
  ]
}
`;
    fs.writeFileSync(tempPagesJsonPath, fixtureContent, 'utf-8');

    try {
      const conditions = extractDistinctPlatformConditions(tempPagesJsonPath);
      expect(conditions).toContain('APP || MP-WEIXIN');
      expect(conditions).toContain('H5');

      const variantsMap = loadAllPlatformPageVariants(tempPagesJsonPath);
      const homeVariants = variantsMap.get('src/pages/index/index');
      expect(homeVariants).toBeDefined();
      expect(homeVariants!.length).toBe(2);

      const appWxVariant = homeVariants!.find(v => v.condition === 'APP || MP-WEIXIN');
      expect(appWxVariant?.page.style?.navigationBarTitleText).toBe('tabbar.home');

      const h5Variant = homeVariants!.find(v => v.condition === 'H5');
      expect(h5Variant?.page.style?.navigationBarTitleText).toBe('xxx');
    }
    finally {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  });

  it('generateTabViews 在不同平台编译模式下生成一致的多平台条件编译 TabViews.uvue，防止文件覆盖', async () => {
    const { generateTabViews } = await import('../../../plugins/vite-plugin-tabbar-views');
    const fs = await import('node:fs');
    const path = await import('node:path');
    const tabViewsPath = path.resolve(process.cwd(), 'src/tabbar/components/TabViews.uvue');

    const oldPlatform = process.env.UNI_PLATFORM;
    try {
      // 1. mp-weixin 运行
      process.env.UNI_PLATFORM = 'mp-weixin';
      generateTabViews(process.cwd());
      const wxGenerated = fs.readFileSync(tabViewsPath, 'utf-8');

      // 验证包含多端条件编译块与各自特定标题
      expect(wxGenerated).toContain('title="tabbar.home"');
      expect(wxGenerated).toContain('<!-- #ifdef H5 -->');
      expect(wxGenerated).toMatch(/title="(?:h5|xxx)"/);
      expect(wxGenerated).toContain('<!-- #ifdef APP-ANDROID -->');
      expect(wxGenerated).toContain('title="android"');
      expect(wxGenerated).toContain('<!-- #ifdef APP-IOS -->');
      expect(wxGenerated).toContain('title="ios"');

      // 2. h5 运行
      process.env.UNI_PLATFORM = 'h5';
      generateTabViews(process.cwd());
      const h5Generated = fs.readFileSync(tabViewsPath, 'utf-8');

      // 必须生成完全相同的文件内容，不发生任何磁盘写覆盖
      expect(h5Generated).toBe(wxGenerated);
    }
    finally {
      process.env.UNI_PLATFORM = oldPlatform;
    }
  });
});
