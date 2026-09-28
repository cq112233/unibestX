## 1.1.9（2026-07-20）
- 蒸汽模式APP体验： [鸿蒙](https://appgallery.huawei.com/app/detail?id=com.rice.xui)、[iOS](https://apps.apple.com/cn/app/riceui/id6742657989)
- [新增] 支持Android蒸汽模式，HBuilder X 需要 5.21 以上的版本
- [提示] RiceUI组件库在**鸿蒙蒸汽模式中** HBuilderx 需要5.08以上的版本，**iOS的蒸汽模式** HBuilderx 需要5.11以上的版本,**Android的蒸汽模式** HBuilderx 需要5.21以上的版本，非蒸汽模式推荐在5.0以上的版本中使用
## 1.1.8（2026-06-12）
- 蒸汽模式APP体验： [鸿蒙](https://appgallery.huawei.com/app/detail?id=com.rice.xui)、[iOS](https://apps.apple.com/cn/app/riceui/id6742657989)
- [新增] Calendar 日历组件库新增 周日历，显示月份背景，补齐前后月日期等属性 [文档](https://riceui.cn/components/calendar.html)
- [新增] Signature 签名组件新增 撤销上一步操作的功能 [文档](https://riceui.cn/components/signature.html)
- [新增] Slider 新增 click-change 属性，支持点击直接跳到对应位置 [文档](https://riceui.cn/components/slider.html)
- [提示] RiceUI组件库在**鸿蒙蒸汽模式中** HBuilderx 需要5.08以上的版本，**iOS的蒸汽模式** HBuilderx 需要5.11以上的版本，非蒸汽模式推荐在5.0以上的版本中使用
## 1.1.6（2026-06-08）
- 蒸汽模式APP体验： [鸿蒙](https://appgallery.huawei.com/app/detail?id=com.rice.xui)、[iOS](https://apps.apple.com/cn/app/riceui/id6742657989), 好用的话麻烦给个五星好评~
- [新增] 瀑布流组件 [文档](https://riceui.cn/components/waterflow.html)
- [新增] 颜色选择器组件 [文档](https://riceui.cn/components/color-picker.html)
- [新增] Popup 组件新增下滑关闭等功能 [文档](https://riceui.cn/components/popup.html)
- [新增] Button、ActionSheet、GridItem 新增 iconFontFamily 属性，支持自定义图标 [文档](https://riceui.cn/components/icon.html#自定义图标)
- [新增] 调整 QRCode 二维码生成策略 [文档](https://riceui.cn/components/qrcode.html)
- [新增] BackTop 组件 新增 disabledPageScroll 属性[文档](https://riceui.cn/components/back-top.html)
- [修复] 鸿蒙蒸汽模式下 Picker 组件里面的选项偶发不显示的问题
- [提示] RiceUI组件库在**鸿蒙蒸汽模式中** HBuilderx 需要5.08以上的版本，**iOS的蒸汽模式** HBuilderx 需要5.11以上的版本，非蒸汽模式推荐在5.0以上的版本中使用
## 1.1.4（2026-06-02）
- [新增] 新增 Subsection 分段器组件  [文档](https://riceui.cn/components/subsection.html)
- [修复] 小程序平台 Navbar 组件 获取状态栏高度的时机
## 1.1.3（2026-05-30）
- [新增] 支持iOS蒸汽模式，HBuilder X 需要 5.11 以上的版本 [官方蒸汽模式的文档](https://doc.dcloud.net.cn/uni-app-x/app-vapor.html) （鸿蒙平台的蒸汽模式已于1.1.0版本支持）
- [修复] 鸿蒙平台修复 Popup 组件 position 为 center 时，弹出动画不流畅的问题
- [修复] 鸿蒙平台修复 Input 组件 type 为 number 时，无法调起数字键盘的问题
- [修复] 1.1.2 版本引起 CodeInput 组件某些情况下不能弹出键盘的问题
- [修复] Android平台修复 Avatar 组件自定义 radius 圆角值 无效的问题
## 1.1.2（2026-05-24）
- [新增]  QRCode 二维码组件 [文档](https://riceui.cn/components/qrcode.html)
## 1.1.0（2026-05-22）
- [新增] 支持鸿蒙蒸汽模式，HBuilder X 需要 5.08 以上的版本 [官方蒸汽模式的文档](https://doc.dcloud.net.cn/uni-app-x/app-harmony/harmony-vapor.html)
- [新增] 新增 TimeFormat 时间格式化组件 [文档](https://riceui.cn/components/time-format.html)
- [新增] Search 组件新增 wrapper-class、 input-class 属性 [文档](https://riceui.cn/components/search.html)
- [修复] 修复 DateTimePicker 组件月份切换异常问题：当从 31 天切换至天数小于 30 天的月份时，选择器滚动位置计算错误、显示错位的问题。
- [修改] Cell 组件 新增 title-text-style 和 value-text-style; 
  <br/> value-style 和 title-style 不再支持设置字体样式 [文档](https://riceui.cn/components/cell.html)
- [修改] Collapse 组件 新增 title-text-style 、content-text-style 和 value-text-style ;
  <br/> value-style 、content-style 和 title-style 不再支持设置字体样式 [文档](https://riceui.cn/components/cell.html)
-  [修改] Tabs 组件 新增 line-mode 、init-animate、 text-class 、 active-text-class 、
   inactive-text-class 和 disabled-text-class 属性 ; 
   <br/> item-style 、 active-style 和 inactive-style 不再支持设置字体样式 [文档](https://riceui.cn/components/tabs.html)
- [修改] Cascader 组件修改判断逻辑：当配置项 options 最末层级的 children 为空数组或不存在时，将触发 finish 事件  [文档](https://riceui.cn/components/cascader.html)
- [修改] 重构了 Slider 组件,组件内部相应的class类名也已变更 [文档](https://riceui.cn/components/slider.html)
