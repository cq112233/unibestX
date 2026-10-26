import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineManifestConfig } from '@uni-helper/vite-plugin-uni-manifest';
import { loadEnv } from 'vite';

// 准确定位项目根目录，通过 Vite 的 loadEnv 优先加载包含 .env.local 在内的所有环境配置
const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const envMode = process.env.NODE_ENV || 'production';
const env = {
  ...loadEnv(envMode, projectRoot, ''),
  ...process.env
};

/**
 * manifest.json 的唯一真源（Single Source of Truth）。
 *
 * 根目录的 `manifest.json` 由本文件编译生成，包含各端核心 AppID、证书及运行配置。
 *
 * 【敏感信息隔离说明】
 * 1. 如需避免将个人真实 AppID 或秘钥提交到公网 Git 仓库，可在本地根目录创建 `.env.local`：
 *    - VITE_DCLOUD_APPID=你的DCloudAppID
 *    - VITE_WX_APPID=你的微信AppID
 *    - VITE_ALIPAY_APPID=你的支付宝AppID
 *    - VITE_UNICLOUD_SPACE_ID=你的uniCloud空间ID
 *    - VITE_UNICLOUD_ACCESS_KEY=你的uniCloud访问密钥
 *    - VITE_UNICLOUD_SECRET_KEY=你的uniCloud安全密钥
 * 2. 若未配置环境变量，本文件会自动回退使用下方与 manifest.json 完全一致的默认配置。
 *
 * 字段官方参考文档：https://doc.dcloud.net.cn/uni-app-x/collocation/manifest.html
 */
export default defineManifestConfig({
  'name': 'unibestX',

  // 1. DCloud / HBuilderX 应用唯一标识（可在 HBuilderX 菜单中重新获取，或通过 VITE_DCLOUD_APPID 覆盖）
  'appid': env.VITE_DCLOUD_APPID || '',

  // 2. uniCloud 阿里云/支付宝云空间配置（敏感凭证建议置于 .env.local 中）
  'uniCloud': {
    provider: 'alipay',
    spaceId: env.VITE_UNICLOUD_SPACE_ID || '',
    accessKey: env.VITE_UNICLOUD_ACCESS_KEY || '',
    secretKey: env.VITE_UNICLOUD_SECRET_KEY || ''
  },

  'description': '',
  'versionName': '1.0.0',
  'versionCode': '100',
  'uni-app-x': {
    'styleIsolationVersion': '2',
    'vapor-default-script-lang': 'uts',
    'vapor': true,
    'vapor-render-target': 'bytecode'
  },
  'uniStatistics': {
    enable: false
  },
  'quickapp': {},

  // 3. 微信小程序平台配置（可在微信公众平台获取，或通过 VITE_WX_APPID 覆盖）
  'mp-weixin': {
    appid: env.VITE_WX_APPID || 'wx6d379a8c0aff3ea3',
    darkmode: true,
    optimization: {
      subpackages: true
    },
    setting: {
      urlCheck: false,
      es6: true,
      postcss: true,
      minified: true
    },
    usingComponents: true,
    mergeVirtualHostAttributes: true,
    lazyCodeLoading: 'requiredComponents'
  },

  // 4. 支付宝小程序平台配置（可在支付宝开放平台获取，或通过 VITE_ALIPAY_APPID 覆盖）
  'mp-alipay': {
    usingComponents: true,
    appid: env.VITE_ALIPAY_APPID || '2021007104619426',
    component2: true,
    enableAppxNg: true,
    unipush: {
      enable: true
    }
  },

  'mp-baidu': {
    usingComponents: true
  },
  'mp-toutiao': {
    usingComponents: true,
    mergeVirtualHostAttributes: true
  },
  'vueVersion': '3',
  'app': {
    distribute: {
      icons: {
        android: {
          hdpi: 'package/logo/72x72.png',
          xhdpi: 'package/logo/96x96.png',
          xxhdpi: 'package/logo/144x144.png',
          xxxhdpi: 'package/logo/192x192.png'
        },
        ios: {
          appstore: 'package/logo/1024x1024.png'
        }
      }
    }
  },
  'app-android': {
    distribute: {
      modules: {
        'uni-oauth': {
          weixin: {}
        }
      },
      icons: {
        hdpi: 'package/logo/72x72.png',
        xhdpi: 'package/logo/96x96.png',
        xxhdpi: 'package/logo/144x144.png',
        xxxhdpi: 'package/logo/192x192.png'
      },
      splashScreens: {
        default: {}
      }
    }
  },
  'app-ios': {
    distribute: {
      modules: {},
      icons: {
        appstore: 'package/logo/1024x1024.png'
      },
      splashScreens: {}
    }
  },
  'web': {
    router: {
      mode: 'hash',
      base: './'
    },
    darkmode: true,
    async: {
      loading: '',
      delay: 999999
    }
  },
  'h5': {
    router: {
      mode: 'hash',
      base: './'
    },
    darkmode: true,
    async: {
      loading: '',
      delay: 999999
    }
  },

  // 5. 鸿蒙（HarmonyOS）构建与证书签名配置（支持环境变量动态注入与本地默认证书）
  'app-harmony': {
    distribute: {
      bundleName: env.VITE_HARMONY_BUNDLE_NAME || 'com.bigScreen.qizhi',
      signingConfigs: {
        default: {
          certpath: env.VITE_HARMONY_CERTPATH || '/Users/chenqi/Library/Application Support/HBuilder X/extensions/launcher/agc-certs/1785394649196.cer',
          keyAlias: env.VITE_HARMONY_KEY_ALIAS || 'debugKey',
          keyPassword: env.VITE_HARMONY_KEY_PASSWORD || '0000001B93BBB9B62A487A04FD8306E077C8FE542BDFD995CE951E13BEF4E7ED88666ED9C3FFE6BA2C3ED6',
          profile: env.VITE_HARMONY_PROFILE || '/Users/chenqi/Library/Application Support/HBuilder X/extensions/launcher/agc-certs/1786603228952.p7b',
          signAlg: 'SHA256withECDSA',
          storeFile: env.VITE_HARMONY_STORE_FILE || '/Users/chenqi/Library/Application Support/HBuilder X/extensions/launcher/agc-certs/1785394649196.p12',
          storePassword: env.VITE_HARMONY_STORE_PASSWORD || '0000001B93BBB9B62A487A04FD8306E077C8FE542BDFD995CE951E13BEF4E7ED88666ED9C3FFE6BA2C3ED6'
        }
      }
    }
  }
});
