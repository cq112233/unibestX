# kux-marked

![Platform Support](https://img.shields.io/badge/platform-Web|Android|iOS|H5|微信小程序-important)
![License](https://img.shields.io/badge/license-MIT-blue)

基于 `UTS` 的高性能 `Markdown` 解析器，复刻 [marked](https://github.com/markedjs/marked) 核心功能，专为 `uts` 跨平台应用开发优化。

> **注意**
> 
> 安卓请打包自定义基座使用

## 特性

+ ✅ **全平台支持**：适配 `web/Android/iOS/H5/小程序` 等多端环境
+ ⚡ **高性能解析**：`UTS` 原生实现，基于正则解析，针对安卓环境线程优化。
+ 📚 **100% API 兼容**：完美兼容 `marked` 语法和配置
+ 🎨 **可扩展架构**：支持自定义渲染器、词法分析器
+ 🌐 **Unicode 支持**：完整支持 Emoji 和复杂 Unicode 字符


## 快速开始
### 基础用法

```ts
import { useMarked } from '@/uni_modules/kux-marked';

const marked = useMarked();

const init = async () => {
	// const out = await marked.parse('# Marked in browser\n\nRendered by **marked**.', null);
	const markdownStr = '# 测试标题1\n\n## 测试标题2\n\n';
	const out = await marked.parse(markdownStr, null);
	console.log(out);
};

init();
```

### 获取 Lexer Data

```ts
import { useMarked } from '@/uni_modules/kux-marked';

const marked = useMarked();

const data = marked.lexer('# Marked in browser\n\nRendered by **marked**.', null);
console.log(data);
```

## 核心API
### marked.parse(src: string, options?: MarkedOptions) => string | Promise<string | Promise<string>>;
+ `src`: 需要解析的 markdown 文本
+ `options`：配置选项（可选）

### 配置选项

```ts
export type MarkedOptions = {
	/**
	   * True will tell marked to await any walkTokens functions before parsing the tokens and returning an HTML string.
	   */
	async?: boolean;
	/**
	   * Enable GFM line breaks. This option requires the gfm option to be true.
	   */
	breaks?: boolean;
	/**
	   * Enable GitHub flavored markdown.
	   */
	gfm?: boolean;
	/**
	   * Conform to obscure parts of markdown.pl as much as possible. Don't fix any of the original markdown bugs or poor behavior.
	   */
	pedantic?: boolean;
	/**
	   * Shows an HTML error message when rendering fails.
	   */
	silent?: boolean;
	/**
	   * Hooks are methods that hook into some part of marked.
	   */
	hooks?: I_Hooks | null;
	/**
	   * Type: object Default: new Renderer()
	   *
	   * An object containing functions to render tokens to HTML.
	   */
	renderer?: I_Renderer | null;
	/**
	   * The tokenizer defines how to turn markdown text into tokens.
	   */
	tokenizer?: I_Tokenizer | null;
	/**
	   * Custom extensions
	   */
	extensions: CustomExtension | null;
	/**
	   * walkTokens function returns array of values for Promise.all
	   */
	walkTokens?: null | ((token: NodesToken) => null | Promise<void> | (null | Promise<void>)[]);
};
```

## 高级功能
### 自定义渲染器

```ts
import { useMarked, Renderer, MarkedOptions, NodesToken } from '@/uni_modules/kux-marked';

const marked = useMarked();

// 定义子类继承渲染器类
class CustomRender extends Renderer {
	constructor(options?: MarkedOptions) {
		super(options);
	}
	
	override heading(option: NodesToken): string {
		const { depth, text } = option;
		const escapedText = text!.toLowerCase().replace(/[^\w]+/g, '-');
		
		return `
		    <h${depth} id="${escapedText}">
		      ${text}
		      <a class="anchor" href="#${escapedText}"></a>
		    </h${depth}>
		  `;
	}
}

const renderer = new CustomRenderer(null);

marked.setOptions({ renderer } as MarkedOptions);

const init = async () => {
	const markdownStr = '# Hello World!';
	const out = await marked.parse(markdownStr, null);
	console.log(out);
};

init();
```

## 致谢
+ **感谢 [marked](https://github.com/markedjs/marked)库的开源贡献，没有前辈们的开荒也就没有kux生态** 。
+ **感谢Dcloud官方项目组成员的热心帮助，期间遇到很多问题都是他们积极响应帮忙解决。**

---
### 结语
#### kux 不生产代码，只做代码的搬运工，致力于提供uts 的 js 生态轮子实现，欢迎各位大佬在插件市场搜索使用 kux 生态插件：[https://ext.dcloud.net.cn/search?q=kux](https://ext.dcloud.net.cn/search?q=kux)

### 友情推荐
+ [TMUI4.0](https://ext.dcloud.net.cn/plugin?id=16369)：包含了核心的uts插件基类.和uvue组件库
+ [GVIM即时通讯模版](https://ext.dcloud.net.cn/plugin?id=16419)：GVIM即时通讯模版，基于uni-app x开发的一款即时通讯模版
+ [t-uvue-ui](https://ext.dcloud.net.cn/plugin?id=15571)：T-UVUE-UI是基于UNI-APP X开发的前端UI框架
+ [UxFrame 低代码高性能UI框架](https://ext.dcloud.net.cn/plugin?id=16148)：【F2图表、双滑块slider、炫酷效果tabbar、拖拽排序、日历拖拽选择、签名...】UniAppX 高质量UI库
+ [wx-ui 基于uni-app x开发的高性能混合UI库](https://ext.dcloud.net.cn/plugin?id=15579)：基于uni-app x开发的高性能混合UI库，集成 uts api 和 uts component，提供了一套完整、高效且易于使用的UI组件和API，让您以更少的时间成本，轻松完成高性能应用开发。
+ [firstui-uvue](https://ext.dcloud.net.cn/plugin?id=16294)：FirstUI（unix）组件库，一款适配 uni-app x 的轻量、简洁、高效、全面的移动端组件库。
+ [easyXUI 不仅仅是UI 更是为UniApp X设计的电商模板库](https://ext.dcloud.net.cn/plugin?id=15602)：easyX 不仅仅是UI库，更是一个轻量、可定制的UniAPP X电商业务模板库，可作为官方组件库的补充,始终坚持简单好用、易上手