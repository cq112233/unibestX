# ohos-svg

## 简介

ohos-svg是一个SVG图片的解析器和渲染器，解析SVG图片并渲染到页面上。它支持大部分 SVG 1.1 规范，包括基本形状、路径、文本、样式和渐变,它能够渲染大多数标准的 SVG 图像。ohos-svg的优点是性能好、内存占用低。

## 效果展示
SVG图片解析并绘制:

![](screenshot/example1.png)


## 下载安装

```shell
ohpm install @ohos/svg
```

OpenHarmony ohpm 环境配置等更多内容，请参考[如何安装 OpenHarmony ohpm 包](https://gitcode.com/openharmony-tpc/docs/blob/master/OpenHarmony_har_usage.md)

## 接口使用方式变更
1.需要在[EntryAbility.ts](entry%2Fsrc%2Fmain%2Fets%2Fentryability%2FEntryAbility.ts)引入this.context

```typescript
import { GlobalContext } from '@ohos/svg/src/main/ets/components/GlobalContext';
...        
GlobalContext.getContext().setObject("context", this.context);
```
2.在需要的时候通过getObject获取context对象
 ```typescript
 import { GlobalContext } from '@ohos/svg/src/main/ets/components/GlobalContext';
 import { Context } from '@ohos.abilityAccessCtrl';
 let context: Context = GlobalContext.getContext().getObject("context") as Context;
 let value = context.resourceManager.getRawFileContentSync('ic_launcher_round.svg')
 if (value) {
    ...
 }
 ```

## 使用说明

 ```
import { SVGImageView } from '@ohos/svg'
 
 model: SVGImageView.SVGImageViewModel = new SVGImageView.SVGImageViewModel();
 
 build() {
   SVGImageView({ model: this.model })
 }
 ```

## 接口说明
`model: SVGImageView.SVGImageViewModel = new SVGImageView.SVGImageViewModel();`
1. 设置svg资源文件
   `this.model.setImageRawfile(filename: string, context?:common.UIAbilityContext)`
2. 设置svg对象
   `this.model.setSVG(svg: SVG, css?: string, context?:common.UIAbilityContext)`
3. 设置svg资源图片
   `this.model.setImageResource(resource: Resource, context?:common.UIAbilityContext)`
4. 设置svg图片的源文件字符串
   `this.model.setFromString(url: string, context?:common.UIAbilityContext)`

## 关于混淆
- 代码混淆，请查看[代码混淆简介](https://docs.openharmony.cn/pages/v5.0/zh-cn/application-dev/arkts-utils/source-obfuscation.md)
- 如果希望svg库在代码混淆过程中不会被混淆，需要在混淆规则配置文件obfuscation-rules.txt中添加相应的排除规则：
```
-keep
./oh_modules/@ohos/svg
```

## 约束与限制
在下述版本验证通过：

- DevEco Studio NEXT Developer Beta3: 5.0(5.0.3.530)
- SDK: API12 (5.0.0.35(SP3))

HSP场景适配:

SVGImageViewModel配置类部分对外接口新增可选参数context, 在HSP场景下需要传入正确的context, 才能保证三方库后续正确获取Resource资源。

非HSP场景不影响原功能, context可以不传。

## 目录结构

````
|---- ohos-svg  
|     |---- entry  # 示例代码文件夹
|     |---- library  # ohos_svg库文件夹
|           |---- index.ets  # 对外接口
            |---- components  # 组件代码目录
                  |---- CSS.ts
                  |---- GlobalContext.ts
                  |---- PreserveAspectRatio.ts
                  |---- RenderOptions.ts
                  |---- SimpleAssetResolver.ts
                  |---- SVG.ts
                  |---- SVGExternalFileResolver.ts
                  |---- SVGImageView.ets
                  |---- SVGParseException.ts   
                        |---- utils  
                              |---- Character  
                              |---- CSSBase  
                              |---- CSSFontFeatureSettings  
                              |---- CSSFontVariationSettings  
                              |---- CSSTextScanner  
                              |---- IntegerParser  
                              |---- Matrix  
                              |---- mini_canvas  
                              |---- NumberParser  
                              |---- Rect  
                              |---- RenderOptionsBase  
                              |---- Style  
                              |---- SVGBase  
                              |---- SVGParser  
                              |---- SVGParserImpl  
                              |---- SVGRenderer  
                              |---- SVGXMLChecker  
                              |---- SVGXMLConstants  
                              |---- TextScanner  

|     |---- README.md  # 安装使用方法                    
````

## 贡献代码
使用过程中发现任何问题都可以提 [Issue](https://gitcode.com/openharmony-sig/ohos_svg/issues) ，当然，也非常欢迎发 [PR](https://gitcode.com/openharmony-sig/ohos_svg/pulls) 共建。

## 开源协议
本项目基于 [Apache License 2.0](https://gitcode.com/openharmony-sig/ohos_svg/blob/master/LICENSE) ，请自由地享受和参与开源。

## 遗留问题

1.目前mask标签绘制有问题

2.svg图片含有image标签时需要将svg图片和image标签引用的图片共同放在rawfile文件夹下