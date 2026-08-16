# RiceUI
基于 uniapp x 开发的多平台UI框架，采用vue3组合式API进行开发，同时兼容Android、iOS、鸿蒙Next、微信小程序、h5。
一次编写，多端发布，大幅度提高开发效率。支持暗黑模式。[RiceUI文档地址](https://riceui.cn/)

## 开源协议
本组件库内的所有组件代码完全开源，遵循 [MIT开源协议](https://baike.baidu.com/item/MIT%E8%AE%B8%E5%8F%AF%E8%AF%81/6671281?fromtitle=MIT&fromid=10772952) ，用户可根据MIT开源协议进行使用、修改、分发及商业应用，无需付费。<br/>
注意：这并不意味着您可以将RiceUI应用到非法的领域，比如涉及赌博，暴力，欺诈等方面。如因此产生纠纷或法律问题，RiceUI相关方不承担任何责任。<br/>
[Demo 示例项目使用限制见下](#demo-使用限制)

** 注意：鸿蒙蒸汽模式 需要HBuilder X  5.08 以上的版本 才能正常使用 **

## 快速开始

1.在 `APP.vue` 中 引入基础样式文件

```vue
<script></script>

<style>
	@import "@/uni_modules/rice-ui/libs/style/index.css";
</style>

```

:::warning
如果在HBuilderx 5.0+ 版本后使用且开启了 [样式隔离2.0策略](https://doc.dcloud.net.cn/uni-app-x/css/common/style-isolation.html) H5端 需在 `main.uts` 引入基础样式文件，而不是在 `APP.vue` 中，代码见下
:::

```js
// #ifdef WEB
import "@/uni_modules/rice-ui/libs/style/index.css";
/* 自定义主题色示例 */
// import "./style/theme.css";
// #endif

```


2.无需通过import 引入组件，直接在项目中使用即可
```html
<rice-button type="primary" text="确定"></rice-button>
```

3.暗黑模式切换

```js
import { setTheme } from "@/uni_modules/rice-ui"

//使用者需要手动调用 setTheme 方法设置暗黑/明亮模式
const setRiceUiTheme = () => {
	setTheme('dark') //参数传 'dark' 或 'light'
}
```

## 自定义颜色主题

1.新建一个 css 文件，自行修改以下颜色变量，其中 rice-theme-light 表示明亮模式，rice-theme-dark 表示暗黑模式。更多颜色变量请查看`/libs/style/variables.css`文件

```css
/* 自定义主题色示例 */

/* 明亮模式下的主题 */
.rice-theme-light {
	--rice-primary-color: #845ec2;
	--rice-success-color: #4d8076;
	--rice-warning-color: #e6a23c;
	--rice-error-color: #f56c6c;
	/* ....其他你自己要修改的颜色值 */
}

/* 暗黑模式下的主题 */
.rice-theme-dark {
	--rice-primary-color: #6235c2;
	--rice-success-color: #0d8063;
	--rice-warning-color: #e6a23c;
	--rice-error-color: #f56c6c;
	/* ....其他你自己要修改的颜色值 */

}
```

2.在APP.vue中引入该css文件，假设上述 css 文件是放在 /common/theme.css 下的

```css
<style>
	@import "@/uni_modules/rice-ui/libs/style/index.css";
	/* 自定义主题色示例，注意要放在基础样式文件下面 */
	@import "@/common/theme.css";
	
</style>
```



## 文档地址

[rice-ui文档地址](https://riceui.cn/)

[H5在线预览](https://riceui.cn/h5)


## 项目预览
Android扫码后请自行在打开的网页中点击下载最新的apk文件<br/>

<div style="display:flex">
<img src="https://riceui.oss-cn-hangzhou.aliyuncs.com/all-qr.png" />

</div>


## Demo 下载

点击右上角的 “使用HbuilderX导入示例项目” 即可下载demo

## Demo 示例项目使用限制

1. 版权归属：本组件库附带的示例演示项目（Demo）版权归 RiceUI作者 所有，受《中华人民共和国著作权法》及国际版权公约保护。
2. 使用许可：用户可查看、学习及本地运行Demo代码，但禁止将Demo或基于Demo的衍生作品以任何形式提交至**各大应用市场**（包括但不限于 App Store、Google Play、华为应用市场、小程序平台等）。
3. 其他用途：除上架**应用市场**外，用户可在非商业展示、技术分享等场景中使用Demo内容，但需保留原作者版权声明。
4. 如果您选择继续使用本组件库，即表示您同意接受这些条款。

## 问题反馈

[点击加入 uni-im](https://im.dcloud.net.cn/#/?joinGroup=68abf8834fe8fb4d659e4ed9) 群交流或反馈问题

我们欢迎所有形式的贡献，无论是新功能、Bug的修复、文档的改进还其他任何可改进的地方。

## 写在最后

- 开源之路确实不易，凌晨还在写代码是常事。若您有任何建议，也请友善表达，我们非常乐意倾听。
- 遇到 BUG 是正常现象，任何程序都难免存在不足之处，希望大家能够多一份理解、多一份耐心。您提出的每一个问题，我们都将努力改进。
- 如果您觉得这个项目对您有帮助，请不要吝啬您的点赞和好评，您的认可就是我们持续努力的最大动力！
