# z-paging-x

<p align="center">
    <img alt="logo" src="https://z-paging.zxlee.cn/img/title-logo-x.png" height="100" style="margin-bottom: 50px;">
</p>




## 请注意，此插件仅支持uniappx！！！若您为uniapp项目请使用[z-paging](https://ext.dcloud.net.cn/plugin?id=3935)！

> z-paging uniapp x版

[![version](https://img.shields.io/badge/version-1.0.1-blue)](https://github.com/SmileZXLee/uni-z-paging-x)
[![license](https://img.shields.io/github/license/SmileZXLee/uni-z-paging-x)](https://en.wikipedia.org/wiki/MIT_License)

***

### 反馈qq群(点击加群)：[114310688](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=bnN7Q8UClrMxaI0pD3-Pyq6d-CzRrjqz&authKey=IWwyKQR77IJcNfUeV5UHmUG%2Bc0tiFeWZrY8rFeg7xDNFH%2BIpNlCUCXZxdj9c3quY&noverify=0&group_code=114310688)

***

## z-paging-x文档

### 安装

#### 方式1(推荐)：通过uni_modules安装，在插件市场中点击右上角【使用HbuilderX导入插件】即可。 

***

#### 方式2：通过npm安装  

```bash
//若项目之前未使用npm管理依赖（项目根目录下无package.json文件），先在项目根目录执行命令初始化npm工程
npm init -y

// 安装
npm install z-paging-x --save
// 更新
npm update z-paging-x
```

### 基本使用

> 以下为组合式API(`<script setup>`)写法。蒸汽模式(Vapor)仅支持组合式API，推荐统一使用。

```html
<template>
	<!-- v-model绑定的ref需通过as指定类型，否则App-Android(非蒸汽模式)下无法推导update:modelValue的参数类型 -->
	<z-paging-x ref="pagingX" v-model="(dataList as ListItem[])" @query="queryList">
		<template #top>
			<common-tabs :list="tabList" @change="tabChange" />
		</template>
		<list-item v-for="(item, index) in dataList" :key="index">
			<view class="list-item">
				<text class="list-item-title">{{item.title}}</text>
				<text class="list-item-type">{{item.detail}}</text>
			</view>
		</list-item>
	</z-paging-x>
</template>

<script setup lang="uts">
	import { requestList, ListItem } from '@/http/request.uts'

	// 与模板中ref="pagingX"同名，用于调用z-paging-x的方法
	const pagingX = ref<ZPagingXComponentPublicInstance | null>(null)

	const tabList = ref(['测试1', '测试2', '测试3', '测试4'] as string[])
	const tabIndex = ref(0)
	const dataList = ref<ListItem[]>([])

	const tabChange = (index: number) => {
		tabIndex.value = index
		// 刷新列表数据
		pagingX.value?.reload()
	}

	// @query所绑定的方法不要自己调用！！需要刷新列表数据时，只需要调用pagingX.value?.reload()即可
	const queryList = (pageNo: number, pageSize: number) => {
		// 此处请求仅为演示，请替换为自己项目中的请求
		requestList({
			pageNo: pageNo,
			pageSize: pageSize,
			type: tabIndex.value + 1
		}).then((res: UTSJSONObject) => {
			// 将请求结果通过complete传给z-paging处理，同时也代表请求结束，这一行必须调用
			pagingX.value?.complete(res['data'] as any[])
		})
	}
</script>
```

### props

#### 支持全局配置（非必须）

在`main.uts`中  

```uts
import { setZPXConfig } from '@/uni_modules/z-paging-x/components/z-paging-x/config/index.uts'

setZPXConfig({
	//配置分页默认pageSize为15
	'default-page-size': 15,
	//配置空数据图默认描述文字为：空空如也~~
	'empty-text': '空空如也~~',
	//...
});
```


#### 数据&布局配置

| 参数              | 说明                                                         | 类型    | 默认值 | 可选值 |
| :---------------- | :----------------------------------------------------------- | :------ | :----- | :----- |
| v-model           | 绑定最终的列表渲染变量(页面data中声明的值)，当列表数据改变时，所绑定的变量会跟着改变 | Array   | -      | -      |
| default-page-no   | 自定义初始的pageNo(从第几页开始)                             | Number  | 1      | -      |
| default-page-size | 自定义pageSize(每页显示多少条)                               | Number  | 10     | -      |
| auto              | mounted后自动调用reload方法(mounted后自动调用接口)           | Boolean | true   | false  |
| paging-style      | 自定义组件的样式                                             | Object  | {}     | -      |
| default-theme-style | loading(下拉刷新、上拉加载更多)的主题样式                     | String  | black  | white  |
| layout-only       | 是否只使用基础布局，设置为true后将关闭mounted自动请求数据、关闭下拉刷新和滚动到底部加载更多，强制隐藏空数据图 | Boolean | false  | true   |

#### list-view&scroll-view相关配置

| 参数                 | 说明                                                         | 类型    | 默认值    | 可选值      |
| :------------------- | :----------------------------------------------------------- | :------ | :-------- | :---------- |
| list-is              | list的类型：`list-view`或`scroll-view`                       | String  | list-view | scroll-view |
| list-id              | list的id                                                     | String  | ''        | -           |
| show-scrollbar       | 控制是否出现滚动条                                           | Boolean | true      | false       |
| rebound              | 控制是否回弹效果                                             | Boolean | true      | false       |
| custom-nested-scroll | (子元素中使用)子元素是否开启嵌套滚动，将滚动事件与父元素协商处理 | Boolean | false     | true        |
| associative-container | (子元素中使用，仅App)关联的滚动容器，设置为`nested-scroll-view`后与外层滚动容器开启嵌套模式。蒸汽模式(Vapor)不支持nested-scroll滚动协商，需使用此属性替代`custom-nested-scroll` | String  | ''        | nested-scroll-view |
| start-nested-scroll  | (仅listIs = scroll-view有效，父元素中使用)是否与子元素开启滚动协商 | Boolean | false     | true        |
| nested-scroll-child  | (仅listIs = scroll-view有效)嵌套滚动子元素的id属性，不支持ref，scroll-view惯性滚动时会让对应id元素视图进行滚动，子元素滚动时会触发scroll-view的`nestedprescroll`事件，嵌套子元素需要设置`custom-nested-scroll` = true | String  | ''        | -           |

#### reload相关配置

| 参数                      | 说明                                                         | 类型    | 默认值 | 可选值 |
| :------------------------ | :----------------------------------------------------------- | :------ | :----- | :----- |
| scroll-to-top-when-reload | reload时自动滚动到顶部(如果reload时list被清空导致占位消失也可能会自动返回到顶部，因此如果是这种情况还需要将`clean-list-when-reload`设置为false) | Boolean | true   | false  |
| clean-list-when-reload    | reload时立即自动清空原list，若立即自动清空，则在reload之后、请求回调之前页面是空白的 | Boolean | true   | false  |

#### 下拉刷新配置

| 参数                       | 说明                                                         | 类型    | 默认值       | 可选值 |
| :------------------------- | :----------------------------------------------------------- | :------ | :----------- | :----- |
| refresher-enabled          | 是否开启自定义下拉刷新                                       | Boolean | true         | false  |
| refresher-threshold        | 设置自定义下拉刷新阈值，默认单位为px。默认高度等于refresher高度 | Number  | 0            | -      |
| use-custom-refresher       | 是否使用自定义的下拉刷新，默认为是，即使用z-paging-x的下拉刷新。设置为false即代表使用unix自带的下拉刷新 | Boolean | true         | false  |
| refresher-default-text     | 自定义下拉刷新默认状态下的文字                               | String  | 继续下拉刷新 | -      |
| refresher-pulling-text     | 自定义下拉刷新松手立即刷新状态下的文字                       | String  | 松开立即刷新 | -      |
| refresher-refreshing-text  | 自定义下拉刷新刷新中状态下的文字                             | String  | 正在刷新...  | -      |
| refresher-complete-text    | 自定义下拉刷新刷新结束状态下的文字                           | String  | 刷新完成     | -      |
| refresher-go-f2-text       | 自定义继续下拉进入二楼状态下的文字                            | String  | 松手进入二楼 | -      |
| refresher-complete-delay   | 自定义下拉刷新结束以后延迟回弹的时间，单位为毫秒，默认为0    | Number  | 0            | -      |
| refresher-complete-duration | 自定义下拉刷新结束回弹动画时间，单位为毫秒                   | Number  | 300          | -      |
| refresher-background       | 下拉刷新区域背景颜色                                         | String  | #FFF         |        |
| refresher-theme-style      | 下拉刷新的主题样式，未设置时使用`default-theme-style`          | String  | ''           | black、white |
| refresher-default-img      | 自定义下拉刷新默认状态下的图片                                 | String  | ''           | -      |
| refresher-pulling-img      | 自定义下拉刷新松手立即刷新状态下的图片，默认与`refresher-default-img`一致 | String  | ''           | -      |
| refresher-refreshing-img   | 自定义下拉刷新刷新中状态下的图片                               | String  | ''           | -      |
| refresher-complete-img     | 自定义下拉刷新刷新结束状态下的图片                             | String  | ''           | -      |
| refresher-refreshing-animated | 自定义下拉刷新刷新中状态下是否展示旋转动画 | Boolean | true    | false  |
| refresher-img-style        | 自定义下拉刷新中左侧图标的样式                                 | Object  | {}           | -      |
| refresher-title-style      | 自定义下拉刷新中右侧状态描述文字的样式                          | Object  | {}           | -      |
| refresher-update-time-style | 自定义下拉刷新中右侧最后更新时间文字的样式(`show-refresher-update-time`为true时有效) | Object  | {}  | -      |
| show-refresher-when-reload | 列表刷新时自动显示下拉刷新view                               | Boolean | false        | true   |
| refresher-update-time-key  | 如果需要区别不同页面的最后更新时间，请为不同页面的z-paging-x的`refresher-update-time-key`设置不同的字符串 | String  | default      | -      |

#### 下拉进入二楼配置

> 建议在pages.json中将页面`navigationStyle`设置为`custom`并使用自定义导航栏，避免二楼被系统导航栏盖住。二楼内容通过`slot="f2"`传入，其容器高度与z-paging-x一致。

| 参数                  | 说明                                                         | 类型    | 默认值 | 可选值 |
| :-------------------- | :----------------------------------------------------------- | :------ | :----- | :----- |
| refresher-f2-enabled  | 是否开启下拉进入二楼功能                                     | Boolean | false  | true   |
| refresher-f2-threshold | 下拉进入二楼阈值，单位为px                                   | Number  | 100    | -      |
| refresher-f2-duration | 下拉进入二楼动画时间，单位为毫秒                             | Number  | 200    | -      |
| show-refresher-f2     | 下拉进入二楼状态松手后是否弹出二楼(`slot="f2"`)，设置为false时仅触发`@refresherF2Change`，由使用者自行处理 | Boolean | true   | false  |

#### 底部加载更多配置

| 参数                   | 说明                                                         | 类型    | 默认值                 | 可选值 |
| :--------------------- | :----------------------------------------------------------- | :------ | :--------------------- | :----- |
| load-more-enabled      | 是否启用加载更多数据(含滑动到底部加载更多数据和点击加载更多数据) | Boolean | true                   | false  |
| load-more-default-text | 滑动到底部"默认"文字                                         | String  | 点击加载更多           | -      |
| load-more-loading-text | 滑动到底部"加载中"文字                                       | String  | 正在加载...            | -      |
| load-more-no-more-text | 滑动到底部"没有更多"文字                                     | String  | 没有更多了             | -      |
| load-more-fail-text    | 滑动到底部"加载失败"文字                                     | String  | 加载失败，点击重新加载 | -      |
| loading-more-theme-style | 底部加载更多的主题样式，未设置时使用`default-theme-style`     | String  | ''                     | black、white |

#### 空数据图配置

| 参数             | 说明                                             | 类型   | 默认值           | 可选值 |
| :--------------- | :----------------------------------------------- | :----- | :--------------- | :----- |
| empty-text       | 空数据描述文字                                   | String | 没有数据哦~      | -      |
| empty-img        | 空数据图片，默认使用z-paging-x内置的图片         | String | -                | -      |
| empty-error-text | 空数据加载失败文字                               | String | 很抱歉，加载失败 | -      |
| empty-error-img  | 空数据加载失败图片，默认使用z-paging-x内置的图片 | String | -                | -      |

#### 点击返回顶部配置

| 参数                  | 说明                                                         | 类型    | 默认值 | 可选值 |
| :-------------------- | :----------------------------------------------------------- | :------ | :----- | :----- |
| show-back-to-top      | 是否显示点击返回顶部按钮                                     | Boolean | false  | true   |
| back-to-top-threshold | 点击返回顶部按钮显示/隐藏的阈值(滚动距离)，默认单位为px。    | Number  | 300    | -      |
| back-to-top-img       | 点击返回顶部按钮的自定义图片地址，默认使用z-paging内置的图片 | String  | -      | -      |
| back-to-top-style     | 点击返回顶部按钮的自定义样式                                 | Object  | {}     | -      |

#### 聊天记录模式配置

> 聊天记录模式下列表会被倒置，数组第0项(最新消息)显示在底部，滚动到视觉顶部会自动触发`@query`加载更多历史消息(from为load-more)，历史消息拼接到数组末尾，加载过程无闪动。`complete`传入的数据应为服务端返回的“新→旧”顺序(与真实IM接口及z-paging一致)。因为列表被倒置，每个列表项需要绑定`@cellStyleChange`回传的样式再倒置回来(见demo)。当第一页就没有更多数据(不满一页)时列表不倒置，消息从顶部开始排列。发送新消息请调用`addChatRecordData`。

| 参数                                | 说明                                                         | 类型    | 默认值 | 可选值 |
| :---------------------------------- | :----------------------------------------------------------- | :------ | :----- | :----- |
| use-chat-record-mode                | 使用聊天记录模式                                             | Boolean | false  | true   |
| bottom-bg-color                     | `slot="bottom"`容器(含底部安全区域及键盘占位)的背景色          | String  | ''     | -      |
| safe-area-inset-bottom              | 是否开启底部安全区域适配，开启后在列表(及`slot="bottom"`)下方自动添加底部安全区域占位 | Boolean | false  | true   |
| auto-hide-keyboard-when-chat        | 使用聊天记录模式时是否自动隐藏键盘：在用户触摸列表时自动隐藏键盘 | Boolean | true   | false  |
| auto-adjust-position-when-chat      | 使用聊天记录模式中键盘弹出时是否自动调整`slot="bottom"`高度(在其下方添加键盘高度的占位)，需将输入框的`adjust-position`设置为false，仅App | Boolean | true   | false  |
| chat-adjust-position-offset         | 使用聊天记录模式中键盘弹出时占位高度偏移距离，单位px           | Number  | 0      | -      |
| auto-to-bottom-when-chat            | 使用聊天记录模式中键盘弹出时是否自动滚动到底部                 | Boolean | false  | true   |
| show-chat-loading-when-reload       | 使用聊天记录模式中reload时是否显示chatLoading                  | Boolean | false  | true   |
| chat-loading-more-default-as-loading | 在聊天记录模式中滑动到顶部状态为默认状态时，以加载中的状态展示。若设置为false，则默认会显示【点击加载更多】，然后才会显示loading | Boolean | true   | false  |

### events

| 事件名                 | 说明                                                         | 回调参数                                                     |
| ---------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| @query                 | 下拉刷新或滚动到底部时会自动触发此方法。`z-paging-x`加载时也会触发(若要禁止，请设置`:auto="false"`)。pageNo和pageSize会自动计算好，直接传给服务器即可。 | `参数1`:pageNo(当前第几页)；<br/>`参数2`:pageSize(每页多少条)(pageSize必须与传给服务器的一致，如果需要修改pageSize，请通过`:default-page-size="15"`修改)<br />`参数3`:from(@query的触发来源：user-pull-down:用户主动下拉刷新；reload:通过reload触发；refresh:通过refresh触发；load-more:通过滚动到底部加载更多或点击底部加载更多触发) |
| @refresherpulling      | 下拉刷新控件被下拉事件                                       | `参数1`:(event: [RefresherEvent](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html#unirefresherevent) => void |
| @refresherrefresh      | 下拉刷新被触发事件                                           | `参数1`:(event: [RefresherEvent](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html#unirefresherevent) => void |
| @refresherrestore      | 下拉刷新被复位事件                                           | `参数1`:(event: [RefresherEvent](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html#unirefresherevent) => void |
| @refresherabort        | 下拉刷新被中止事件                                           | `参数1`:(event: [RefresherEvent](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html#unirefresherevent) => void |
| @onRefresh             | 自定义下拉刷新被触发（与`@refresh`等价）                       | -                                                            |
| @refresh               | 自定义下拉刷新被触发（与`@onRefresh`等价）                     | -                                                            |
| @scroll                | 列表滚动时触发                                               | `参数1`:(event: [ScrollEvent](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html#uniscrollevent)) => void |
| @scrolltolower         | 滚动到底部/右边，会触发 scrolltolower 事件                   | `参数1`:(event: [ScrollToLowerEvent](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html#uniscrolltolowerevent)) => void |
| @scrolltoupper         | 滚动到顶部/左边，会触发 scrolltoupper 事件                   | `参数1`:(event: [ScrollToUpperEvent](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html#uniscrolltoupperevent)) => void |
| @backToTopClick        | 点击了返回到顶部                                             | 点击返回顶部按钮后是否滚动到顶部，默认为是。<br/>如果需要禁止滚动到顶部事件，则在page的methods中书写：<p style="font-weight:bold;">backToTopClick(e: (toTop: boolean) => void) {<br/> &nbsp;&nbsp;&nbsp;&nbsp;e(false);<br/>  &nbsp;&nbsp;&nbsp;&nbsp;//处理自己的业务逻辑<br/>}</p> |
| @refresherStatusChange | 下拉刷新状态改变                                             | `参数1`:下拉刷新状态：default:默认状态；<br/>release-to-refresh:松手立即刷新；<br/>loading:刷新中；<br/>complete:刷新结束；<br/>go-f2:松手进入二楼 |
| @loadMoreStatusChange  | 底部加载更多状态改变                                         | `参数1`:底部加载更多状态：default:默认状态；<br/>loading:加载中；<br/>no-more:没有更多数据；<br/>fail:加载失败 |
| @keyboardHeightChange  | 聊天记录模式中键盘高度改变(仅App)                              | `参数1`:键盘高度，单位px                                       |
| @hidedKeyboard         | 聊天记录模式中用户触摸列表导致键盘被自动隐藏时触发             | -                                                            |
| @refresherF2Change     | 下拉进入二楼状态改变                                         | `参数1`:go(进入二楼)；close(退出二楼)                          |
| @cellStyleChange       | 聊天记录模式中列表项需要绑定的样式改变(列表倒置时为倒置样式)，请将其绑定到每个列表项的`:style`上 | `参数1`:cellStyle(UTSJSONObject)                               |

### methods

| 方法名           | 说明                                                         | 参数                                                         |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| reload           | 重新加载分页数据，pageNo恢复为默认值，相当于下拉刷新的效果   | -                                                            |
| refresh          | 刷新列表数据，pageNo和pageSize不会重置，列表数据会重新从服务端获取。调用此方法时会自动触发@query，pageNo=1，pageSize=当前已加载总条数 | -                                                            |
| complete         | 请求成功调用此方法，将请求的结果数组传递给z-paging-x处理     | `参数1(必填)`:请求结果数组；                                 |
| completeByTotal  | 【通过total判断是否有更多数据】请求成功调用此方法(将此方法替换`complete`方法即可，此方法为`complete`方法的功能扩展，遵循`complete`原有规则) | `参数1(必填)`:请求结果数组；`参数2(必填)`:列表总长度；       |
| completeByNoMore | 【自行判断是否有更多数据】请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging-x处理(将此方法替换`complete`方法即可，此方法为`complete`方法的功能扩展，遵循`complete`原有规则) | `参数1(必填)`:请求结果数组；`参数2(必填)`:是否没有更多数据，若为true则代表没有更多数据了； |
| completeByError  | 请求结束(失败)调用此方法，将自动展示失败页面                 | -                                                            |
| endRefresh       | 直接结束下拉刷新状态                                         | -                                                            |
| scrollToTop      | 滚动到顶部                                                   | `参数1(必填)`:是否有动画效果                                 |
| scrollToBottom   | 滚动到底部                                                   | `参数1(必填)`:是否有动画效果                                 |
| scrollToY        | 滚动到指定位置                                               | `参数1(必填)`:滚动到的位置；`参数2(必填)`:是否有动画效果     |
| addChatRecordData | 【聊天记录模式】添加聊天记录(显示在列表底部)                  | `参数1(必填)`:单条数据或数组(数组按传入顺序从上到下展示)；`参数2(可选)`:是否滚动到底部，默认为true；`参数3(可选)`:滚动到底部是否有动画，默认为true |
| doChatRecordLoadMore | 【聊天记录模式】手动触发加载更多历史消息(等同于滚动到顶部)   | -                                                            |
| goF2             | 进入二楼(需开启`refresher-f2-enabled`)                        | -                                                            |
| closeF2          | 关闭二楼                                                     | -                                                            |


### slots

| 名称      | 说明                                                         |
| :-------- | ------------------------------------------------------------ |
| top       | 可以将自定义导航栏、tab-view等需要固定的`(不需要跟着滚动的)`元素放入`slot="top"`的view中。<br/>注意，当有多个需要固定的view时，请用一个view包住它们，并且在这个view上设置`slot="top"`。需要固定在顶部的view请勿设置`position: fixed;` |
| bottom    | 可以将需要固定在底部的`(不需要跟着滚动的)`元素放入`slot="bottom"`的view中。<br/>注意，当有多个需要固定的view时，请用一个view包住它们，并且在这个view上设置`slot="bottom"`。需要固定在底部的view请勿设置`position: fixed;`。 |
| refresher | 自定义下拉刷新view，设置后则不使用uni自带的下拉刷新view和z-paging自定义的下拉刷新view。<br>slot-scope="{ refresherStatus(default:默认状态；release-to-refresh:松手立即刷新；loading:刷新中；complete:刷新结束；go-f2:松手进入二楼) }" |
| loadMore  | 自定义底部加载更多view，设置后则不使用z-paging-x内置的下拉刷新view。<br/>slot-scope="{ loadMoreStatus(default:默认状态；loading:加载中；no-more:没有更多数据；fail:加载失败) }" |
| empty     | 自定义空数据占位view。<br/>slot-scope="{ isLoadFailed(true: 加载失败，false: 加载成功) }" |
| backToTop | 自定义点击返回顶部view                                       |
| loading   | 自定义页面reload时的加载view                                 |
| chatLoading | 【聊天记录模式】自定义顶部加载更多(历史消息)view。<br/>slot-scope="{ loadingMoreStatus(default:默认状态；loading:加载中；no-more:没有更多数据；fail:加载失败) }" |
| chatNoMore | 【聊天记录模式】自定义没有更多历史消息时顶部展示的view，不设置则不展示 |
| refresherF2 | 自定义松手进入二楼状态下的下拉刷新view，不设置则显示内置下拉刷新view及`refresher-go-f2-text` |
| f2        | 二楼view，开启`refresher-f2-enabled`后下拉至阈值松手弹出，容器高度与z-paging-x一致，建议内容设置flex:1铺满 |

