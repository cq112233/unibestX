# lime-qrcode 二维码组件
一个功能丰富的二维码生成组件，用于生成自定义二维码。支持自定义大小、颜色、图标、边框等多种配置，可用于分享链接、支付码、名片等多种场景。组件提供了丰富的自定义选项，可以满足各种二维码生成需求。

> 插件依赖：`lime-shared`

## 文档链接
📚 组件详细文档请访问以下站点：
- [二维码组件文档 - 站点1](https://limex.qcoon.cn/components/qrcode.html)
- [二维码组件文档 - 站点2](https://limeui.netlify.app/components/qrcode.html)
- [二维码组件文档 - 站点3](https://limeui.familyzone.top/components/qrcode.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-qrcode`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-qrcode`组件

::: tip 注意🔔 
uniappx app 需要导入[【lime-qrcodegen】](https://ext.dcloud.net.cn/plugin?id=1583)这个依赖插件，它是收费的插件，普通授权则需要自定义基座，才能使用，如果您是UI组件库VIP则忽略。
:::


## 代码演示

### 基础使用

```html
<l-qrcode value="http://lime.qcoon.cn" />
```


### ICON
- 带 Icon 的二维码

```html
<l-qrcode value="https://limeui.qcoon.cn" size="300rpx" icon="/static/logo.png" iconSize="70rpx"></l-qrcode>
```

### 颜色
- 通过设置 `color` 自定义二维码颜色，通过设置 `bgColor` 自定义背景颜色。

```html
<l-qrcode value="https://limeui.qcoon.cn" size="300rpx" color="rgb(82,196,26)"></l-qrcode>
<l-qrcode value="https://limeui.qcoon.cn" size="300rpx" color="rgb(22,119,255)" bgColor="rgb(245,245,245)"></l-qrcode>
```

### 纠错比例
- 通过设置 `errorLevel` 调整不同的容错等级。

```html
<l-qrcode value="img10.360buyimg.com/img/jfs/t1/182127/16/37474/11761/64659c31F0cd84976/21f25b952f03a49a.jpg" size="300rpx" errorLevel="H"></l-qrcode>
```

### 生成图片
如果是canvas 2d的环境生成的是base64
- 1、通过调用插件的`canvasToTempFilePath`方法生成图片。

```html
<image v-if="image" :src="image" style="width: 300rpx;" mode="widthFix"></image>
<l-qrcode ref="qrcodeRef" value="https://limeui.qcoon.cn" size="300rpx" icon="https://img10.360buyimg.com/img/jfs/t1/182127/16/37474/11761/64659c31F0cd84976/21f25b952f03a49a.jpg" iconSize="70rpx"></l-qrcode>
<button @click="onClick">生成图片</button>
```
```js
// vue3
const qrcodeRef = ref(null)
const onClick = () => {
	if(!qrcodeRef.value) return
	qrcodeRef.value.canvasToTempFilePath({
		success(res) {
			image.value = res.tempFilePath
			console.log('success:::', res)
		},
		fail(err) {
			console.log('err:::', err)
		}
	})
}

// vue2
const el = this.$refs['qrcodeRef'] 
el.canvasToTempFilePath({
	success:(res)=>{
		this.image = res.tempFilePath
	},
	fail(err) {
		console.log('err:::', err)
	}
})

// uvue
const el:LQrcodeComponentPublicInstance = this.$refs['qrcodeRef'] as LQrcodeComponentPublicInstance 
el.canvasToTempFilePath({
	success:(res: TakeSnapshotSuccess)=>{
		this.image = res.tempFilePath
	},
	fail(err: TakeSnapshotFail) {
		console.log('err:::', err)
	}
})
```

- 2、通过设置`useCanvasToTempFilePath`在`success`事件里接收图片地址

```html
<image v-if="image" :src="image" style="width: 300rpx;" mode="widthFix"></image>
<l-qrcode useCanvasToTempFilePath @success="success" value="https://limeui.qcoon.cn"></l-qrcode>
```
```js
const image = ref(null)
const success = (img) => {
	image.value = img
}
```

## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-qrcode/components/lime-qrcode -->
<lime-qrcode />
```

## 插件标签说明

| 标签名 | 说明 | 
| --- | --- | 
| `l-qrcode` | 组件标签 |
| `lime-qrcode` | 演示标签 |

## Vue2使用说明
main.js中添加以下代码：
```js
// vue2项目中使用
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```

详细配置请参考官方文档：[Vue Composition API](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)


## API文档

### Props 属性说明

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 二维码内容 | _string_ | - |
| size | 二维码大小 | _number \| string_ | `160` |
| color | 二维码颜色 | _string_ | `#000` |
| bgColor | 二维码背景色 | _string_ | `transparent` |
| icon | 二维码中心图标 | _string_ | - |
| iconSize | 图标大小 | _number \| string_ | `40` |
| marginSize | 二维码外边距 | _number_ | - |
| bordered | 是否显示边框 | _boolean_ | `true` |
| errorLevel | 纠错级别，可选值为 `L`、`M`、`Q`、`H` | _string_ | `M` |
| useCanvasToTempFilePath | 是否使用Canvas导出为临时文件 | _boolean_ | `false` |
| use2d | 是否使用2D Canvas | _boolean_ | `true` |

### Events 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| complete | 二维码生成完成时触发 | _path: string_ 临时文件路径（仅当 useCanvasToTempFilePath 为 true 时有效） |
| error | 二维码生成失败时触发 | _error: Error_ 错误信息 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |