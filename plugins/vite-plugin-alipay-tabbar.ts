import fs from 'node:fs';
import path from 'node:path';
import type { Plugin } from 'vite';

/**
 * 支付宝小程序自定义 TabBar 补丁插件
 *
 * 痛点解决：
 * 1. 在模式 2（带原生底板的自定义模式）下，微信小程序配置 custom: true 时底层完全不渲染原生 TabBar；
 *    但支付宝小程序原生内核无法仅通过 custom: true 关闭原生底板，必须在 app.json 的 tabBar 中配置 customize: true，
 *    否则支付宝原生容器在首帧和每次切页（switchTab）时都会强行渲染原生底座，造成严重视觉闪烁。
 * 2. 本插件在构建与热重载时，自动向 mp-alipay 产物目录下的 app.json 注入 tabBar.customize: true，
 *    并生成 0 高度隐藏的原生 customize-tab-bar 占位组件，使支付宝内核彻底关闭原生底座渲染，实现零闪烁。
 */
function isCustomTabbarMode(projectRoot: string): boolean {
  let mode = process.env.VITE_TABBAR_MODE;
  if (mode == null || mode === '') {
    try {
      const envPath = path.resolve(projectRoot, '.env');
      if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf-8');
        const match = content.match(/^VITE_TABBAR_MODE\s*=\s*['"]?([^'"\r\n]+)['"]?/m);
        if (match != null && match[1] != null) {
          mode = match[1].trim();
        }
      }
    }
    catch {}
  }
  const modeStr = (mode ?? '1').trim();
  return modeStr === '2' || modeStr === 'CUSTOM_TABBAR' || modeStr === 'CUSTOM_TABBAR_WITH_NATIVE';
}

export default function alipayCustomTabbarPlugin(): Plugin {
  let projectRoot = '';
  let watcherInitialized = false;

  function patchAlipayDir(outputDir: string) {
    const isCustom = isCustomTabbarMode(projectRoot);
    const appJsonPath = path.join(outputDir, 'app.json');
    const customTabBarDir = path.join(outputDir, 'customize-tab-bar');

    if (isCustom) {
      if (fs.existsSync(appJsonPath)) {
        try {
          const raw = fs.readFileSync(appJsonPath, 'utf-8');
          const json = JSON.parse(raw);
          if (json.tabBar && json.tabBar.customize !== true) {
            json.tabBar.customize = true;
            fs.writeFileSync(appJsonPath, JSON.stringify(json, null, 2), 'utf-8');
          }
        }
        catch {}
      }

      if (!fs.existsSync(customTabBarDir)) {
        try {
          fs.mkdirSync(customTabBarDir, { recursive: true });
          fs.writeFileSync(path.join(customTabBarDir, 'index.json'), '{\n  "component": true\n}\n', 'utf-8');
          fs.writeFileSync(path.join(customTabBarDir, 'index.axml'), '<view style="display:none;"></view>\n', 'utf-8');
          fs.writeFileSync(path.join(customTabBarDir, 'index.js'), 'Component({\n  data: {},\n  methods: {}\n});\n', 'utf-8');
          fs.writeFileSync(path.join(customTabBarDir, 'index.acss'), '/* empty */\n', 'utf-8');
        }
        catch {}
      }
    }
    else {
      // 模式 1（原生模式）等非模式 2 场景：必须清理 customize 标记与 customize-tab-bar 目录，使原生 TabBar 正常展现
      if (fs.existsSync(appJsonPath)) {
        try {
          const raw = fs.readFileSync(appJsonPath, 'utf-8');
          const json = JSON.parse(raw);
          if (json.tabBar && json.tabBar.customize !== undefined) {
            delete json.tabBar.customize;
            fs.writeFileSync(appJsonPath, JSON.stringify(json, null, 2), 'utf-8');
          }
        }
        catch {}
      }

      if (fs.existsSync(customTabBarDir)) {
        try {
          fs.rmSync(customTabBarDir, { recursive: true, force: true });
        }
        catch {}
      }
    }
  }

  function patchAllAlipayOutputs(root: string) {
    const candidateDirs = [
      path.join(root, 'unpackage', 'dist', 'dev', 'mp-alipay'),
      path.join(root, 'dist', 'dev', 'mp-alipay'),
      path.join(root, 'unpackage', 'dist', 'build', 'mp-alipay'),
      path.join(root, 'dist', 'build', 'mp-alipay')
    ];
    for (const dir of candidateDirs) {
      if (fs.existsSync(dir)) {
        patchAlipayDir(dir);
      }
    }
  }

  function initWatcher(root: string) {
    if (watcherInitialized) {
      return;
    }
    watcherInitialized = true;
    const targetAppJson = path.join(root, 'unpackage', 'dist', 'dev', 'mp-alipay', 'app.json');
    const targetDir = path.dirname(targetAppJson);
    if (fs.existsSync(targetDir)) {
      try {
        fs.watch(targetDir, (_eventType, filename) => {
          if (filename === 'app.json') {
            patchAllAlipayOutputs(root);
          }
        });
      }
      catch {}
    }
  }

  return {
    name: 'unibestx:alipay-custom-tabbar',
    configResolved(config) {
      projectRoot = config.root;
      patchAllAlipayOutputs(projectRoot);
      initWatcher(projectRoot);
    },
    buildStart() {
      if (projectRoot) {
        patchAllAlipayOutputs(projectRoot);
      }
    },
    writeBundle() {
      if (projectRoot) {
        patchAllAlipayOutputs(projectRoot);
      }
    },
    closeBundle() {
      if (projectRoot) {
        patchAllAlipayOutputs(projectRoot);
      }
    }
  };
}
