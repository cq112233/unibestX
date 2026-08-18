# @dcloudio/uni-app-x-runtime

`@dcloudio/uni-app-x-runtime` 是 `uni-app-x` 在 HarmonyOS 上的运行时 SDK，用于让 `uni-app-x` 应用在 Harmony 宿主工程中加载、初始化和运行。

## 安装

如果 SDK 已经作为包发布，可以直接安装：

```bash
ohpm install @dcloudio/uni-app-x-runtime
```

如果是在本地联调，也可以在宿主工程的 `oh-package.json5` 里使用本地路径依赖，例如：

```json5
{
  "dependencies": {
    "@dcloudio/uni-app-x-runtime": "../sdk"
  }
}
```

## 宿主工程需要准备什么

### 1. 拷贝 `www` 资源

将 `uni-app-x` 用户项目编译出来的 `www` 资源放到宿主模块的：

```text
src/main/resources/resfile/uni-app-x/apps/你的APPID/www
```

其中：

- `你的APPID` 需要和运行时初始化时传入的 `appID` 保持一致

### 2. 拷贝 `cpp` 资源

除了 `www`，`uni-app x` 编译产物里还会包含一组 `cpp` 资源。宿主模块需要把这些资源放到：

```text
src/main/cpp
```

相关配置：

- 应用需要再初始化阶段增加 `import 'libentry.so'`
- 宿主模块的 `oh-package.json5` 需要声明 `"libentry.so": "file:./src/main/cpp/types/libentry"`

### 3. 配置 `build-profile.json5`

在宿主模块的 `build-profile.json5` 中，需要同时完成两件事：

- 通过 `arkOptions.runtimeOnly.sources` 引入 `www/import` 下的 ETS 入口
- 通过 `externalNativeOptions.path` 指向 `src/main/cpp/CMakeLists.txt`，参与 native 构建

示例：

```json5
{
  "apiType": "stageMode",
  "buildOption": {
    "externalNativeOptions": {
      "path": "./src/main/cpp/CMakeLists.txt",
      "abiFilters": [
        "arm64-v8a",
        "x86_64"
      ],
      "arguments": "",
      "cppFlags": ""
    },
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

## 使用方式

### 初始化

SDK 提供了 `UniEntryAbility`，用于帮助宿主工程初始化 `uni-app-x` 运行时。

```ts
export interface IInitConfig {
  debug?: boolean
}

export abstract class UniEntryAbility extends UIAbility {
  constructor(appID: string, config?: IInitConfig)

  onWindowStageCreate(windowStage: window.WindowStage, autoLaunch?: boolean): void

  abstract onImport(path: string): Promise<Object | void>
}
```

示例代码：

```ts
import { UniEntryAbility } from '@dcloudio/uni-app-x-runtime'
import BuildProfile from 'BuildProfile'
import { window } from '@kit.ArkUI'
import 'libentry.so'

export default class EntryAbility extends UniEntryAbility {
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

  onImport(path: string): Promise<Object | void> {
    return import(path)
  }
}
```

说明：

- `super('你的APPID', ...)` 中的 `appID` 需要与 `www` 资源路径中的目录名一致
- `onImport(path)` 一般直接返回 `import(path)`

### 启动应用

#### 自动启动

如果希望在 `onWindowStageCreate` 阶段自动启动 `uni-app-x` 应用，可以把 `super.onWindowStageCreate(windowStage, false)` 中的第二个参数改为 `true`。

示例：

```ts
import { UniEntryAbility } from '@dcloudio/uni-app-x-runtime'
import BuildProfile from 'BuildProfile'
import { window } from '@kit.ArkUI'
import 'libentry.so'

export default class EntryAbility extends UniEntryAbility {
  constructor() {
    super('你的APPID', {
      debug: BuildProfile.DEBUG
    })
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    super.onWindowStageCreate(windowStage, true)
  }

  onImport(path: string): Promise<Object | void> {
    return import(path)
  }
}
```

说明：

- 当 `autoLaunch` 为 `true` 时，`UniEntryAbility` 会在 `onWindowStageCreate` 时自动调用 `openUniApp`
- 这种方式适合宿主应用启动后直接进入 `uni-app-x` 页面

#### 手动启动

如果希望在某个页面或按钮点击时启动 `uni-app-x` 应用，可以直接调用 `openUniApp`。

```ts
export type AnimationType =
  | 'slide-in-right'
  | 'slide-in-left'
  | 'slide-in-top'
  | 'slide-in-bottom'
  | 'fade-in'
  | 'none'

export function openUniApp(appID: string, config?: {
  animationType?: AnimationType
  animationDuration?: number
}): void
```

示例代码：

```ts
import { openUniApp } from '@dcloudio/uni-app-x-runtime'

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Button('Open')
        .onClick(() => {
          openUniApp('你的APPID', {
            animationType: 'fade-in'
          })
        })
    }
    .height('100%')
    .width('100%')
  }
}
```
