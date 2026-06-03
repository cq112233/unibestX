## 【ECharts图表】支持官方所有图表的uni-app组件，支持vue2、vue3、分包、nvue、鸿蒙、uts、uniapp x

1. 本组件不造轮子，只是对 [Apache ECharts](https://echarts.apache.org/zh/index.html) 做了uni适配，从而支持 [ECharts官方所有图表](https://echarts.apache.org/examples/zh/index.html) 在各类小程序和APP使用

2. 用法非常简单，您只需在 [ECharts示例面板](https://echarts.apache.org/examples/zh/editor.html?c=bar-simple) 调好配置，然后传给本组件即可

![](https://igc-prod.oss-cn-hangzhou.aliyuncs.com/static_res/youzan/weixin-app.jpg)

## 快速入门

#### 1. 在[插件市场](https://ext.dcloud.net.cn/plugin?id=21932)导入本组件

#### 2. 在具体页面中使用
#### uni-app vue2示例 :
```js
<template>
	<view>
		<e-chart ref="echartRef" @ready="initEchart" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 支持echarts所有图表,您只需替换此处option即可展示任意图表
				option: { 
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
					},
					yAxis: { type: 'value' },
					series: [{
						data: [12, 20, 15, 8, 7, 11, 13],
						type: 'bar',
					}],
					grid: [{ left: 50, right: 15, top: 40, bottom: 30 }],
					tooltip: { show: true },
				},
			};
		},
		methods: {
			// 组件挂载后初始化echarts实例 (也可在请求数据后初始化)
			initEchart() { 
				this.$refs.echartRef.init(this.option);
			},
			// 异步更新数据或配置
			setOption() {
				this.option.series[0].data = [14, 11, 19, 12, 8, 7, 20];

				this.option.yAxis.axisLabel = {
					color: '#ff0000',
					formatter(value) {
						return `${value}g`; // 支持function属性
					},
				};

				// 执行更新
				this.$refs.echartRef.setOption(this.option);
			}
		}
	}
</script>
```

#### uni-app vue3示例 / uni-app x 示例:
```js
<template>
	<view>
		<e-chart ref="echartRef" @ready="initEchart" />
	</view>
</template>

<script setup>
	import { ref } from 'vue';

	// echart组件的ref
	const echartRef = ref(null); // uni-app vue3
	// const echartRef = ref<EChartComponentPublicInstance | null>(null); // uni-app x 组合式 (^1.4.0)
	// const echartRef = this.$refs['echartRef'] as EChartComponentPublicInstance; // uni-app x 选项式 (^1.4.0)

	// 支持echarts所有图表,您只需替换此处option即可展示任意图表
	// const option = ref({}) // 不必声明为响应式对象,普通对象即可
	const option = {
		xAxis: {
			type: 'category',
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		},
		yAxis: { type: 'value' },
		series: [{
			data: [12, 20, 15, 8, 7, 11, 13],
			type: 'bar',
		}],
		grid: [{ left: 50, right: 15, top: 40, bottom: 30 }],
		tooltip: { show: true },
	};

	// 组件挂载后初始化echarts实例 (也可在请求数据后初始化)
	function initEchart() { 
		echartRef.value.init(option); // uni-app vue3 和 uni-app x 组合式
		// echartRef.init(option); // uni-app x 选项式
	}

	// 异步更新数据或配置
	function setOption() {
		option.series[0].data = [14, 11, 19, 12, 8, 7, 20];

		option.yAxis.axisLabel = {
			color: '#ff0000',
			formatter(value) {
				return `${value}g`; // 支持function属性
			},
		};

		// 执行更新
		echartRef.value.setOption(option); // uni-app vue3 和 uni-app x 组合式
		// echartRef.setOption(option); // uni-app x 选项式
	}
</script>
```

## 组件属性
```js
<e-chart ref="echartRef" @ready="initEchart" width="100%" :height="600" :disable-scroll="false"/> 
```
| 属性 | 类型 | 说明 | 必填 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| width | Number,String | 图表宽度(数字默认rpx,字符串时需写完整单位如`300px`)  | 否 | '100%' |
| height | Number,String | 图表高度(数字默认rpx,字符串时需写完整单位如`300px`) | 否 | 600 |
| theme | String | 标准'light', 暗黑'dark' (非响应式,动态切换参考示例 ^1.4.0) | 否 | 'light' |
| disableScroll | Boolean | 在图表区域内触摸移动时,是否禁止页面滚动 | 否 | false |
| render | String | 渲染模式(仅鸿蒙生效): 以'webview'方式渲染,与h5表现一致,但原生组件层级很高; 以'canvas'方式渲染,支持同层渲染,但部分图表属性渲染异常(如tooltip,legend可能变形错位) | 否 | 'webview' |

## 图表实例
图表init之后会返回实例对象echartObj, 也可以通过ref直接获取  
实例对象支持的方法与[官方的echartsInstance](https://echarts.apache.org/zh/api.html#echartsInstance.showLoading)一致
```js
// const echartRef = ref(null); // uni-app vue3
// const echartRef = ref<EChartComponentPublicInstance | null>(null); // uni-app x 组合式 (^1.4.0)
// const echartRef = this.$refs['echartRef'] as EChartComponentPublicInstance; // uni-app x 选项式 (^1.4.0)

async initEchart() {
  // 组件挂载后初始化echarts实例 (await之后可获取echartObj对象)
  const { echartObj } = await this.$refs.echartRef.init(this.option); // uni-app vue2
  // const { echartObj } = await echartRef.value.init(option); // uni-app vue3
  
  // 也可以直接通过ref获取
  // const echartObj = this.$refs.echartRef.echartObj; // uni-app vue2
  // const echartObj = echartRef.value.echartObj; // uni-app vue3

  // uni-app x 组合式只能通过ref获取
  // await echartRef.value.init(option);
  // const echartObj = echartRef.value.getEchartObj();

  // uni-app x 选项式只能通过ref获取
  // await echartRef.init(option);
  // const echartObj = echartRef.getEchartObj();
  
  // 调用实例方法
  echartObj.showLoading(); // 显示加载动画效果
  echartObj.hideLoading(); // 隐藏加载动画效果
  echartObj.setOption(option); // 更新配置
  echartObj.on('xx', fn); // 绑定事件
}
```

## 图表事件
touch事件支持返回点中图表元素的信息, 如`seriesIndex, dataIndex, componentIndex, value`等
```js
<e-chart ref="echartRef" />

async initEchart() {
  // 组件挂载后初始化echarts实例 (await之后可获取echartObj对象)
  const { echartObj } = await this.$refs.echartRef.init(this.option); // uni-app vue2

  echartObj.on('click', (e) => {
    console.log('click', e);
    uni.showToast({ title: `下标${e.dataIndex + 1}, 值为${e.data}`, icon: 'none' })
  });

  echartObj.on('mousedown', (e) => {
    console.log('mousedown', e);
  });

  echartObj.on('mousemove', (e) => {
    console.log('mousemove', e);
  });

  echartObj.on('mouseup', (e) => {
    console.log('mouseup', e);
  });
}
```

## 横屏全屏
1.3.0版本开始提供切换横屏, 切换全屏的示例, 建议下载参考

## 保存图片
```js
methods: {
	// 图表canvas转图片,并保存到相册 (具体可参考示例)
	async save() {
		// 显示加载进度,避免重复点击...(略)
		// 判断并引导用户打开'保存到相册'的权限...(略)

		// 图表canvas转文件
		const filePath = await this.$refs.echartRef.canvasToTempFilePath(); // uni-app vue2

		// #ifndef H5
		// APP和小程序: 保存到相册
		uni.saveImageToPhotosAlbum({
			filePath,
			success() {
				uni.showToast({ title: '保存成功' });
			},
			fail(e) {
				if (!e.errMsg.includes('cancel')) {
					uni.showModal({ title: '保存失败', content: JSON.stringify(e), showCancel: false });
				}
			},
		});
		// #endif

		// #ifdef H5
		// H5端: 直接下载
		const link = document.createElement('a');
		link.href = filePath;
		link.download = `${Date.now()}.png`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		// #endif
	}
}
```

## 常见问题

#### 1. 小程序如何减少打包体积
使用[ECharts在线定制的echarts.min.js](https://echarts.apache.org/zh/builder.html)替换`/components/e-chart/echarts.min.js`即可  
注: vite不支持require, 所以vite+vue3无法通过在线定制减少打包体积, 应采用分包策略减少主包大小

#### 2. 小程序如何减少主包大小
1. [使用分包](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/basic.html)
2. 把`/uni_modules/e-chart/`目录下的`components`文件夹拷贝到子包
3. 使用组件的时候需显式导入组件: `import EChart from '../components/e-chart/e-chart.vue';`  
可下载示例,里面的vue3示例是采用分包的,建议参考

#### 3. 如何替换echarts版本
1. vue2使用的是`echarts.min.js`, 是CJS规范, 直接[在线定制](https://echarts.apache.org/zh/builder.html)选择版本替换即可  
2. vue3使用的是`echarts.esm.min.js`, 是[ESM规范](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#%E5%8F%AA%E6%94%AF%E6%8C%81%E4%BD%BF%E7%94%A8-es6-%E6%A8%A1%E5%9D%97%E8%A7%84%E8%8C%83). 首先在任意目录`npm install echarts`, 找到`/node_modules/echarts/dist/echarts.esm.min.js`替换即可

#### 4. 组件层级太高,遮住了fixed元素
真机正常，一定要以真机为准

#### 5. 示例运行不了
1. 示例不是cli创建的, 应在HBuilderX运行
2. 检查manifest.json的vue版本是否正确, 不可选vue3版本去编译vue2示例
3. 试试关闭开发工具的ES6转ES5, 尤其是支付宝小程序

#### 6. ECharts官网配置正常,拷贝到具体项目就不生效
1. 确保`echarts.min.js`是完整的,检查[在线定制](https://echarts.apache.org/zh/builder.html)是否漏掉资源, 可临时替换为示例的`echarts.min.js`
2. 编译为其他平台看看是否正常，比如H5 或 微信小程序
3. 在示例项目运行相关配置看看是否正常
4. 运行到真机看看是否正常

#### 7. 为什么不使用props传递option
props不支持传递function属性, 所以设计为通过ref设置option

#### 8. 为什么不使用npm安装的echarts
尽管npm安装的echarts支持按需引入，减少打包体积，但node_modules终究是无法移到子包的

#### 9. 为什么不触发mouseup事件,为什么点击legend没有反应
至少更新到1.3.1版本

#### 10. uniapp x 如何适配
至少更新到1.4.0版本

#### 11. 鸿蒙APP如何适配
至少更新到1.4.1版本

#### 12. nvue 如何适配
至少更新到1.4.1版本