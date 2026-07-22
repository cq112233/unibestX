# Changelog

## 5.1.42026062201

- 优化代码

## 5.0.2025121901

- 鸿蒙平台 新增 组件 image 支持 base64 svg [文档](https://doc.dcloud.net.cn/uni-app-x/component/image.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=22096>
- 鸿蒙平台 新增 API uni.share 支持 openCustomerServiceChat 打开客服功能 [文档](https://doc.dcloud.net.cn/uni-app-x/api/share.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=23388>
- 鸿蒙平台 修复 组件 text 动态改变text组件的line-height与letter-spacing，界面文本不更新 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22636)
- 鸿蒙平台 修复 组件 button disabled为true时click事件仍然生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25877)
- 鸿蒙平台 修复 组件 input 输入框有内容时聚焦，光标位置不在内容最后 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21990)
- 鸿蒙平台 修复 4.87版本引发的 组件 input 聚焦时设置 focus 属性为 true 无法弹出软键盘问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23198)
- 鸿蒙平台 修复 组件 switch 设置属性后导致页面中 image 加载失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22158&ask_id=212321)
- 鸿蒙平台 修复 4.75版本引发的 组件 textarea 输入内容后高度异常问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22666)
- 鸿蒙平台 修复 组件 textarea UniInputEvent.detail 丢失 cursor 属性 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22816)
- 鸿蒙平台 修复 组件 textarea style 设置 padding 效果异常问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23131)
- 鸿蒙平台 修复 组件 canvas measureText测量的文本宽度不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22568)
- 鸿蒙平台 修复 API uni.createSelectorQuery 组件使用transform:rotate(180deg)旋转，鸿蒙系统下使用uni.createSelectorQuery获取组件信息不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21879)
- 鸿蒙平台 修复 API uni.request 方法返回data是一个空字符串时报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25391)
- 鸿蒙平台 修复 API uni.request 鸿蒙HEAD请求报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25573)
- 鸿蒙平台 修复 API uni.getNetworkType 调用失败错误原因不清晰 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24521)
- 鸿蒙平台 修复 API uni.chooseVideo chooseVideo、chooseMedia选择视频文件时返回的size单位错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21825)
- 鸿蒙平台 修复 API uni.getBackgroundAudioManager onEnded回调函数里再次调用play无法播放音频 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24202&ask_id=217454)
- 鸿蒙平台 修复 API uni.getFileSystemManager saveFile、saveFileSync 在保存相册图片时失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22877)
- 鸿蒙平台 修复 API uni.getUniVerifyManager 自定义一键登录报错 -20100 传入参数错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25019&ask_id=216771)
- 鸿蒙平台 修复 API uni.share 微信分享图文时获取图片ArrayBuffer错误导致分享失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23072&ask_id=215215)
- 鸿蒙平台 修复 DOM API DrawableContext 鸿蒙 Next fillRect 报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20101)
- 鸿蒙平台 修复 运行调试 自动申请调试证书在DevEco Studio 6.0.2版本失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25354)
- 鸿蒙平台 修复 4.75版本引发的 发行 鸿蒙应用商店上架审核出现稳定性问题导致不通过 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23001)

## 4.81.2025091901

- 新增 组件 waterflow 支持waterflow及flow-item组件 [文档](https://doc.dcloud.net.cn/uni-app-x/component/waterflow.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=20812>
- 新增 组件 switch 支持 disable 样式 [文档](https://doc.dcloud.net.cn/uni-app-x/component/switch.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=21521>
- 新增 API 启动 获取应用启动参数 [文档](https://doc.dcloud.net.cn/uni-app-x/api/launch.html#getlaunchoptionssync) <https://issues.dcloud.net.cn/pages/issues/detail?id=19242>
- 新增 API uni.login 支持微信登录 [文档](https://doc.dcloud.net.cn/uni-app-x/api/sign-in.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=20344>
- 新增 API uni.share 支持微信分享 [文档](https://doc.dcloud.net.cn/uni-app-x/api/share.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=20343>
- 新增 DOM API UniElement .focus、UniElement.blur 方法 [文档](https://doc.dcloud.net.cn/uni-app-x/dom/unielement.html#focus) <https://issues.dcloud.net.cn/pages/issues/detail?id=20940>
- 新增 uni统计 for uni-app x [文档](https://uniapp.dcloud.net.cn/uni-stat-uniappx.html)
- 修复 组件 Touch 事件 鸿蒙长按返回上一页如果不及时松开手指松开手指的时候会退出app [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19300)
- 修复 组件 swiper 设置 :disable-touch="true" 无法禁止滑动问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20820)
- 修复 组件 list-view list-item组件包含自动高度的image时image组件位置错乱 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20688)
- 修复 组件 image 不支持unifile://协议路径 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20701)
- 修复 组件 video 在平板上小窗全屏/非全屏切换时宽度不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19935)
- 修复 组件 video 在 dialogPage 中全屏状态不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21359&ask_id=209965)
- 修复 组件 web-view 鸿蒙应用访问页面始终为 pc 模式 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21311)
- 修复 组件 web-view onLoading 在页面加载时触发多次 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21762)
- 修复 鸿蒙上架检查，报应用在运行中出现JsCrash异常，存在设备运行崩溃问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20697&ask_id=202068)
- 修复 API uni.chooseImage 选择 gif 图片并且不勾选原图后不显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19771&ask_id=211396)
- 修复 API uni.compressImage 压缩的图片会变形 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20928)
- 修复 API uni.chooseMedia 鸿蒙从相册或者拍摄选择视频时不进入回调的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18478)
- 修复 API uni.getPushClientId 鸿蒙系统无法获取cid [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18024)
- 修复 CSS background 动态 class 切换渐变背景色, 渐变背景色无法移除 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19037)
- 修复 CSS color 使用iconfont时，切换颜色无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20693)
- 修复 CSS color 概率性样式丢失 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20914)
- 修复 CSS box-shadow 属性值 rgba 中存在空格时，样式异常问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19558)
- 修复 CSS pointer-events 父组件设置pointer-events: none对子组件不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20923)
- 修复 DOM API UniElement .animate iterations 设置为 Infinity 时动画只执行一次问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17615)
- 修复 DOM API UniElement .takeSnapshot 不触发 complete 回调问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20929)

## 4.72.2025061801

- 新增 app 支持 onExit 生命周期

## 4.71.2025061201

- init
