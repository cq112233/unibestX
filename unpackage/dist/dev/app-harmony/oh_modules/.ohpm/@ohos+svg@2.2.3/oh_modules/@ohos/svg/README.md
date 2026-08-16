# ohos-svg

## Introduction

ohos-svg is used to parse and render SVG images on pages. This project supports most SVG 1.1 specifications, including basic shape, path, text, style, and gradient, and can render most standard SVG images. It features good performance and low memory usage.

## Effect
SVG image parsing and drawing:

![](screenshot/example1.png)


## How to Install

```shell
ohpm install @ohos/svg
```

For details about the OpenHarmony ohpm environment configuration, see [OpenHarmony HAR](https://gitcode.com/openharmony-tpc/docs/blob/master/OpenHarmony_har_usage.en.md).

## API Usage Changelog
1. Import **this.context** to [EntryAbility.ts](entry%2Fsrc%2Fmain%2Fets%2Fentryability%2FEntryAbility.ts).

```typescript
import { GlobalContext } from '@ohos/svg/src/main/ets/components/GlobalContext';
...        
GlobalContext.getContext().setObject("context", this.context);
```
2. Obtain the **context** object through **getObject** when necessary.
 ```typescript
 import { GlobalContext } from '@ohos/svg/src/main/ets/components/GlobalContext';
 let context: Context = GlobalContext.getContext().getObject("context") as Context;
 let value = context.resourceManager.getRawFileContentSync('ic_launcher_round.svg')
 if (value) {
    ...
 }
 ```

## How to Use

 ```
import { SVGImageView } from '@ohos/svg'
 
 model: SVGImageView.SVGImageViewModel = new SVGImageView.SVGImageViewModel();
 
 build() {
   SVGImageView({ model: this.model })
 }
 ```

## Available APIs

### Component

| Component | Description |
|-----------|-------------|
| SVGImageView | SVG image rendering component that renders SVG images by passing in an SVGImageViewModel instance |

### SVGImageViewModel

Create an instance:

```typescript
import { SVGImageView } from '@ohos/svg';

let model: SVGImageView.SVGImageViewModel = new SVGImageView.SVGImageViewModel();
```

| Name | Description | Parameters | Return Value |
|------|-------------|------------|--------------|
| setImageRawfile | Loads an SVG file from the rawfile directory and renders it | filename: string, context?: common.UIAbilityContext | void |
| setImageResource | Loads an SVG from a Resource and renders it | resource: Resource, context?: common.UIAbilityContext | void |
| setFromString | Loads and renders an SVG from a source string | url: string, context?: common.UIAbilityContext | void |
| setSVG | Sets an SVG object and renders it | svg: SVG, css?: string, context?: common.UIAbilityContext | void |
| setCSS | Sets CSS styles and re-renders | css: string, context?: common.UIAbilityContext | void |
| getSVGPixelMap | Converts SVG data to a PixelMap | data: Uint8Array, size?: Size, context?: common.UIAbilityContext | Promise\<PixelMap\> |
| setContext2D | Sets the canvas rendering context | context2D: CanvasRenderingContext2D | void |
| doRender | Performs SVG rendering | context?: common.UIAbilityContext, areaChanged?: boolean | void |
| restore | Resets the rendering state and clears the canvas | None | void |

### SVG

The `SVG` class provides static methods for parsing SVG images from different sources.

| Name | Description | Parameters | Return Value |
|------|-------------|------------|--------------|
| getFromString | Synchronously parses an SVG object from a string | svg: string | SVG |
| getFromResource | Asynchronously parses an SVG object from a Resource | media: Resource, callback: (svg: SVG) => void, context?: common.UIAbilityContext | void |
| getFromRawfile | Asynchronously parses an SVG object from a rawfile | rawfileName: string, callback: (svg: SVG) => void, context?: common.UIAbilityContext | void |
| getRootElement | Returns the root element of the SVG | None | Svg |

## About obfuscation
- Code obfuscation, please see[Code Obfuscation](https://docs.openharmony.cn/pages/v5.0/zh-cn/application-dev/arkts-utils/source-obfuscation.md)
- If you want the svg library not to be obfuscated during code obfuscation, you need to add corresponding exclusion rules in the obfuscation rule configuration file obfuscation-rules.txt：
```
-keep
./oh_modules/@ohos/svg
```

## Constraints
This project has been verified in the following versions:

- DevEco Studio NEXT Developer Beta3: 5.0 (5.0.3.530)
- SDK: API 12 (5.0.0.35 (SP3))

HSP scenario adaptation:

The optional parameter **context** is added to the external APIs of the **SVGImageViewModel** class. In the HSP scenario, the correct context must be passed to ensure that the third-party library can correctly obtain resources.

In non-HSP scenarios, the **context** parameter can be left unspecified.

## Directory Structure

````
|---- ohos-svg  
|     |---- entry  # Sample code
|     |---- library  # ohos_svg library
|           |---- index.ets  # External APIs
            |---- components  # Component code
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

|     |---- README.md  # Readme                   
````

## How to Contribute
If you find any problem when using the project, submit an [issue](https://gitcode.com/CPF-ApplicationTPC/ohos_svg/issues) or a [PR](https://gitcode.com/CPF-ApplicationTPC/ohos_svg/pulls).

## License
This project is licensed under [Apache License 2.0](https://gitcode.com/CPF-ApplicationTPC/ohos_svg/blob/master/LICENSE).

## Known Issues

1. Drawing of an image with the mask tag has functional defects.

2. If an SVG image contains the **image** tag, the SVG image and the image referenced by the **image** tag must be stored in the **rawfile** folder.
