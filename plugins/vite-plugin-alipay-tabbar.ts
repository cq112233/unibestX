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
export default function alipayCustomTabbarPlugin(): Plugin {
  let projectRoot = '';
  let watcherInitialized = false;

  function patchAlipayDir(outputDir: string) {
    const appJsonPath = path.join(outputDir, 'app.json');
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

    const customTabBarDir = path.join(outputDir, 'customize-tab-bar');
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
