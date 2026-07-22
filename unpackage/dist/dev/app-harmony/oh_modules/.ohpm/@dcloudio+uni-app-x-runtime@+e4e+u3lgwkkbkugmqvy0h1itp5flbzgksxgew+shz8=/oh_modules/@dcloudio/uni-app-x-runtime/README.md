# @dcloudio/uni-app-x-runtime

[uni-app x](https://doc.dcloud.net.cn/uni-app-x/) 运行时环境，用于支持 uni-app x 在 HarmonyOS 上运行。

## 安装

```bash
ohpm install @dcloudio/uni-app-x-runtime
```

## 配置

将 uni-app x 生成的资源拷贝到 `entry/src/main/resources/resfile/uni-app-x/apps/你的APPID/www` 目录，如果没有此目录需手动创建。

编辑 entry/build-profile.json5 文件，在 buildOption 增加 arkOptions -> runtimeOnly -> sources 配置

```json
{
  "apiType": "stageMode",
  "buildOption": {
    "arkOptions": {
      "runtimeOnly": {
        "sources": [
          "./src/main/resources/resfile/uni-app-x/apps/你的APPID/www/import/app-config.ets",
          "./src/main/resources/resfile/uni-app-x/apps/你的APPID/www/import/app-service.ets"
        ]
      }
    }
  }
}
```

## 使用

### 初始化

```typescript
export interface IInitConfig {
debug?: boolean;
}

export declare abstract class UniEntryAbility extends UIAbility {
  constructor(appID: string, config?: IInitConfig);

  onWindowStageCreate(windowStage: window.WindowStage, autoLaunch?: boolean): void;

  /**
   * return import(path)
   */
  abstract onImport(path: string): Promise<Object | void>;
}
```

#### 示例代码

```typescript
import { window } from '@kit.ArkUI'
import { UniEntryAbility } from '@dcloudio/uni-app-x-runtime'
import BuildProfile from 'BuildProfile'

export default class EntryAbility extends UniEntryAbility {
  onImport(path: string): Promise<void | Object> {
    return import(path)
  }

  constructor() {
    super('你的APPID', {
      debug: BuildProfile.DEBUG
    })
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    super.onWindowStageCreate(windowStage, false)

    windowStage.loadContent('pages/Index', (err) => {
      if (err.code) {
        return
      }
    })
  }
}
```

### 启动应用

```typescript
export type AnimationType =
| "slide-in-right"
| "slide-in-left"
| "slide-in-top"
| "slide-in-bottom"
| "fade-in"
| "none";
interface IOpenUniAppConfig {
animationType?: AnimationType;
animationDuration?: number;
}

export declare function openUniApp(
  appID: string,
  config?: IOpenUniAppConfig
): void;
```

#### 示例代码

```
import { openUniApp } from '@dcloudio/uni-app-x-runtime'

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Button('Open')
        .onClick(() => {
          openUniApp('你的APPID', {
            animationType: 'fade-in',
          })
        })
    }
    .height('100%')
    .width('100%')
  }
}
```
