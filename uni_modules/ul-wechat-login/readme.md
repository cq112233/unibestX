# ul-wechat-login

轻量级微信授权登录 UTS 插件，支持 iOS 和鸿蒙 Next。

## 使用方式

```typescript
import { isWechatInstalled, wechatLogin } from '@/uni_modules/ul-wechat-login';

// 无需手动注册，插件在 App 启动时自动从 config.uts 读取配置并注册

// 检查微信是否安装
const installed = isWechatInstalled();

// 发起登录
wechatLogin({
  success: (res) => {
    console.log('授权 code:', res.code);
    // 将 code 发送到后端换取 token
  },
  fail: (err) => {
    console.error('登录失败:', err.errCode, err.errMsg);
  }
});
```

## 接入方配置

### 1. 填写微信配置（必需，所有平台通用）

打开 `uni_modules/ul-wechat-login/utssdk/config.uts`，填入你的微信 AppID 和 Universal Link：

```typescript
export const WX_APP_ID = "你的微信AppId"
export const WX_UNIVERSAL_LINK = "你的UniversalLink"
```

### 2. iOS 额外配置

打开 `uni_modules/ul-wechat-login/utssdk/app-ios/Info.plist`，将 `CFBundleURLSchemes` 中的字符串替换为你的微信 AppID。

在 `manifest.json` 中配置 Associated Domains：
```json
"entitlements": {
  "com.apple.developer.associated-domains": ["applinks:你的域名"]
}
```

### 3. 鸿蒙额外配置

由于 `harmony-configs/entry/src/main/module.json5` 会完全替换默认配置，需要提供完整的配置文件。

在项目的 `harmony-configs/entry/src/main/module.json5` 文件中使用以下完整配置：

```json5
{
  "module": {
    "name": "entry",
    "type": "entry",
    "description": "$string:module_desc",
    "mainElement": "EntryAbility",
    "deviceTypes": ["phone", "tablet", "2in1"],
    "deliveryWithInstall": true,
    "installationFree": false,
    "pages": "$profile:main_pages",
    "querySchemes": ["weixin", "wxopensdk"],
    "abilities": [{
      "name": "EntryAbility",
      "srcEntry": "./ets/entryability/EntryAbility.ets",
      "description": "$string:EntryAbility_desc",
      "icon": "$media:layered_image",
      "label": "$string:EntryAbility_label",
      "startWindowIcon": "$media:startIcon",
      "startWindowBackground": "$color:start_window_background",
      "exported": true,
      "skills": [{
        "entities": ["entity.system.home"],
        "actions": ["action.system.home", "wxentity.action.open"]
      }]
    }],
    "requestPermissions": [{ "name": "ohos.permission.INTERNET" }]
  }
}
```

### 自定义基座

原生插件必须使用自定义基座运行。在 HBuilderX 中：运行 -> 运行到手机 -> 制作自定义调试基座。
