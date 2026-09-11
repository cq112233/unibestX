import App from './App.uvue'; // 导入应用根组件 App.uvue
import { createSSRApp } from 'vue'; // 导入 Vue 的 SSR 应用创建方法
import pinia from './src/store'; // 导入 Pinia 状态管理实例（在 App-Android 平台上强制进行顶层定义约束）
import i18n from './src/i18n'; // 导入 i18n 国际化配置实例
import ultraUI from '@/uni_modules/uview-ultra/index.uts'; // 导入 uview-ultra 跨端 UI 组件库
import { installRouteInterceptor } from './src/router/interceptor'; // 导入全局路由拦截器安装函数

import { setupH5Components } from './src/utils/h5-components.uts';

/**
 * 创建应用实例的入口函数
 */
export function createApp() {
  // 安装全局路由拦截器
  installRouteInterceptor();

  // 创建 Vue 应用程序实例，传入根组件 App
  const app = createSSRApp(App);

  // 注册 Pinia 状态管理
  app.use(pinia);

  // 可选配置：将 pinia 实例挂载到 Vue 全局属性中，以便于在 Options API 模板中使用 this.$pinia 访问
  app.config.globalProperties.$pinia = pinia;

  // 注册 i18n 国际化插件
  app.use(i18n);

  // 注册 uview-ultra UI 组件库并传入自定义初始化配置项
  app.use(ultraUI, () => {
    return {
      options: {
        config: {
          // 开启只加载一次字体图标的优化，避免重复加载
          loadFontOnce: true
        }
      }
    };
  });

  // 临时修复 H5 生产环境 easycom 失效导致内置组件不渲染的问题
  setupH5Components(app);

  // 返回创建好的应用实例对象，供系统挂载运行
  return {
    app
  };
}

export function main(app: IApp) {
    enableStyleIsolation();
    definePageRoutes();
    defineAppConfig();
    (createApp()['app'] as VueApp).mount(app, GenUniApp());
}

export class UniAppConfig extends io.dcloud.uniapp.appframe.AppConfig {
    override name: string = "unibestX"
    override appid: string = "__UNI__B120614"
    override versionName: string = "1.0.0"
    override versionCode: string = "100"
    override uniCompilerVersion: string = "5.24"
    
    constructor() { super() }
}

import GenSrcPagesIndexIndexClass from './src/pages/index/index.uvue'
import GenSrcPagesAiAiClass from './src/pages/ai/ai.uvue'
import GenSrcPagesBasicBasicClass from './src/pages/basic/basic.uvue'
import GenSrcPagesFunctionFunctionClass from './src/pages/function/function.uvue'
import GenSrcPagesMeMeClass from './src/pages/me/me.uvue'
import GenSrcSubAuthLoginClass from './src/sub/auth/login.uvue'
import GenSrcSubAuthRegisterClass from './src/sub/auth/register.uvue'
import GenSrcSubLayoutDemoLayoutDemoClass from './src/sub/layoutDemo/layoutDemo.uvue'
import GenSrcSubTailwindcssTailwindcssClass from './src/sub/tailwindcss/tailwindcss.uvue'
import GenSrcSubTestTestClass from './src/sub/test/test.uvue'
import GenSrcSubUiTestUiTestClass from './src/sub/uiTest/uiTest.uvue'
import GenSrcSubUviewUltraDemosActionSheetActionSheetClass from './src/sub/uview-ultra/demos/action-sheet/action-sheet.uvue'
import GenSrcSubUviewUltraDemosAlbumAlbumClass from './src/sub/uview-ultra/demos/album/album.uvue'
import GenSrcSubUviewUltraDemosAlertAlertClass from './src/sub/uview-ultra/demos/alert/alert.uvue'
import GenSrcSubUviewUltraDemosAvatarAvatarClass from './src/sub/uview-ultra/demos/avatar/avatar.uvue'
import GenSrcSubUviewUltraDemosBackTopBackTopClass from './src/sub/uview-ultra/demos/back-top/back-top.uvue'
import GenSrcSubUviewUltraDemosBadgeBadgeClass from './src/sub/uview-ultra/demos/badge/badge.uvue'
import GenSrcSubUviewUltraDemosBarcodeBarcodeClass from './src/sub/uview-ultra/demos/barcode/barcode.uvue'
import GenSrcSubUviewUltraDemosButtonButtonClass from './src/sub/uview-ultra/demos/button/button.uvue'
import GenSrcSubUviewUltraDemosCalendarCalendarClass from './src/sub/uview-ultra/demos/calendar/calendar.uvue'
import GenSrcSubUviewUltraDemosCardCardClass from './src/sub/uview-ultra/demos/card/card.uvue'
import GenSrcSubUviewUltraDemosCascaderCascaderClass from './src/sub/uview-ultra/demos/cascader/cascader.uvue'
import GenSrcSubUviewUltraDemosCheckboxCheckboxClass from './src/sub/uview-ultra/demos/checkbox/checkbox.uvue'
import GenSrcSubUviewUltraDemosCircleProgressCircleProgressClass from './src/sub/uview-ultra/demos/circle-progress/circle-progress.uvue'
import GenSrcSubUviewUltraDemosCodeInputCodeInputClass from './src/sub/uview-ultra/demos/code-input/code-input.uvue'
import GenSrcSubUviewUltraDemosCodeCodeClass from './src/sub/uview-ultra/demos/code/code.uvue'
import GenSrcSubUviewUltraDemosCollapseCollapseClass from './src/sub/uview-ultra/demos/collapse/collapse.uvue'
import GenSrcSubUviewUltraDemosColorPickerColorPickerClass from './src/sub/uview-ultra/demos/color-picker/color-picker.uvue'
import GenSrcSubUviewUltraDemosCopyCopyClass from './src/sub/uview-ultra/demos/copy/copy.uvue'
import GenSrcSubUviewUltraDemosCountDownCountDownClass from './src/sub/uview-ultra/demos/count-down/count-down.uvue'
import GenSrcSubUviewUltraDemosCountToCountToClass from './src/sub/uview-ultra/demos/count-to/count-to.uvue'
import GenSrcSubUviewUltraDemosCouponCouponClass from './src/sub/uview-ultra/demos/coupon/coupon.uvue'
import GenSrcSubUviewUltraDemosCropperCropperClass from './src/sub/uview-ultra/demos/cropper/cropper.uvue'
import GenSrcSubUviewUltraDemosDatetimePickerDatetimePickerClass from './src/sub/uview-ultra/demos/datetime-picker/datetime-picker.uvue'
import GenSrcSubUviewUltraDemosDividerDividerClass from './src/sub/uview-ultra/demos/divider/divider.uvue'
import GenSrcSubUviewUltraDemosDragsortDragsortClass from './src/sub/uview-ultra/demos/dragsort/dragsort.uvue'
import GenSrcSubUviewUltraDemosDropdownDropdownClass from './src/sub/uview-ultra/demos/dropdown/dropdown.uvue'
import GenSrcSubUviewUltraDemosEmptyEmptyClass from './src/sub/uview-ultra/demos/empty/empty.uvue'
import GenSrcSubUviewUltraDemosFloatButtonFloatButtonClass from './src/sub/uview-ultra/demos/float-button/float-button.uvue'
import GenSrcSubUviewUltraDemosFormFormClass from './src/sub/uview-ultra/demos/form/form.uvue'
import GenSrcSubUviewUltraDemosGapGapClass from './src/sub/uview-ultra/demos/gap/gap.uvue'
import GenSrcSubUviewUltraDemosGridGridClass from './src/sub/uview-ultra/demos/grid/grid.uvue'
import GenSrcSubUviewUltraDemosIconIconClass from './src/sub/uview-ultra/demos/icon/icon.uvue'
import GenSrcSubUviewUltraDemosImageImageClass from './src/sub/uview-ultra/demos/image/image.uvue'
import GenSrcSubUviewUltraDemosIndexListcopyIndexListClass from './src/sub/uview-ultra/demos/index-list copy/index-list.uvue'
import GenSrcSubUviewUltraDemosIndexListIndexListClass from './src/sub/uview-ultra/demos/index-list/index-list.uvue'
import GenSrcSubUviewUltraDemosInputInputClass from './src/sub/uview-ultra/demos/input/input.uvue'
import GenSrcSubUviewUltraDemosKeyboardKeyboardClass from './src/sub/uview-ultra/demos/keyboard/keyboard.uvue'
import GenSrcSubUviewUltraDemosLazyLoadLazyLoadClass from './src/sub/uview-ultra/demos/lazy-load/lazy-load.uvue'
import GenSrcSubUviewUltraDemosLineProgressLineProgressClass from './src/sub/uview-ultra/demos/line-progress/line-progress.uvue'
import GenSrcSubUviewUltraDemosLineLineClass from './src/sub/uview-ultra/demos/line/line.uvue'
import GenSrcSubUviewUltraDemosLinkLinkClass from './src/sub/uview-ultra/demos/link/link.uvue'
import GenSrcSubUviewUltraDemosListListClass from './src/sub/uview-ultra/demos/list/list.uvue'
import GenSrcSubUviewUltraDemosLoadingIconLoadingIconClass from './src/sub/uview-ultra/demos/loading-icon/loading-icon.uvue'
import GenSrcSubUviewUltraDemosLoadingPageLoadingPageClass from './src/sub/uview-ultra/demos/loading-page/loading-page.uvue'
import GenSrcSubUviewUltraDemosLoadmoreLoadmoreClass from './src/sub/uview-ultra/demos/loadmore/loadmore.uvue'
import GenSrcSubUviewUltraDemosModalModalClass from './src/sub/uview-ultra/demos/modal/modal.uvue'
import GenSrcSubUviewUltraDemosMpHtmlMpHtmlClass from './src/sub/uview-ultra/demos/mp-html/mp-html.uvue'
import GenSrcSubUviewUltraDemosNavbarMiniNavbarMiniClass from './src/sub/uview-ultra/demos/navbar-mini/navbar-mini.uvue'
import GenSrcSubUviewUltraDemosNavbarNavbarClass from './src/sub/uview-ultra/demos/navbar/navbar.uvue'
import GenSrcSubUviewUltraDemosNoNetworkNoNetworkClass from './src/sub/uview-ultra/demos/no-network/no-network.uvue'
import GenSrcSubUviewUltraDemosNoticeBarNoticeBarClass from './src/sub/uview-ultra/demos/notice-bar/notice-bar.uvue'
import GenSrcSubUviewUltraDemosNotifyNotifyClass from './src/sub/uview-ultra/demos/notify/notify.uvue'
import GenSrcSubUviewUltraDemosNumberBoxNumberBoxClass from './src/sub/uview-ultra/demos/number-box/number-box.uvue'
import GenSrcSubUviewUltraDemosOverlayOverlayClass from './src/sub/uview-ultra/demos/overlay/overlay.uvue'
import GenSrcSubUviewUltraDemosPaginationPaginationClass from './src/sub/uview-ultra/demos/pagination/pagination.uvue'
import GenSrcSubUviewUltraDemosParseParseClass from './src/sub/uview-ultra/demos/parse/parse.uvue'
import GenSrcSubUviewUltraDemosPdfReaderPdfReaderClass from './src/sub/uview-ultra/demos/pdf-reader/pdf-reader.uvue'
import GenSrcSubUviewUltraDemosPickerPickerClass from './src/sub/uview-ultra/demos/picker/picker.uvue'
import GenSrcSubUviewUltraDemosPopupPopupClass from './src/sub/uview-ultra/demos/popup/popup.uvue'
import GenSrcSubUviewUltraDemosPosterPosterClass from './src/sub/uview-ultra/demos/poster/poster.uvue'
import GenSrcSubUviewUltraDemosQrcodeQrcodeClass from './src/sub/uview-ultra/demos/qrcode/qrcode.uvue'
import GenSrcSubUviewUltraDemosRadioRadioClass from './src/sub/uview-ultra/demos/radio/radio.uvue'
import GenSrcSubUviewUltraDemosRateRateClass from './src/sub/uview-ultra/demos/rate/rate.uvue'
import GenSrcSubUviewUltraDemosSearchSearchClass from './src/sub/uview-ultra/demos/search/search.uvue'
import GenSrcSubUviewUltraDemosShortVideoShortVideoClass from './src/sub/uview-ultra/demos/short-video/short-video.uvue'
import GenSrcSubUviewUltraDemosSignatureSignatureClass from './src/sub/uview-ultra/demos/signature/signature.uvue'
import GenSrcSubUviewUltraDemosSkeletonSkeletonClass from './src/sub/uview-ultra/demos/skeleton/skeleton.uvue'
import GenSrcSubUviewUltraDemosSliderSliderClass from './src/sub/uview-ultra/demos/slider/slider.uvue'
import GenSrcSubUviewUltraDemosStepsStepsClass from './src/sub/uview-ultra/demos/steps/steps.uvue'
import GenSrcSubUviewUltraDemosStickyStickyClass from './src/sub/uview-ultra/demos/sticky/sticky.uvue'
import GenSrcSubUviewUltraDemosSubsectionSubsectionClass from './src/sub/uview-ultra/demos/subsection/subsection.uvue'
import GenSrcSubUviewUltraDemosSwipeActionSwipeActionClass from './src/sub/uview-ultra/demos/swipe-action/swipe-action.uvue'
import GenSrcSubUviewUltraDemosSwiperSwiperClass from './src/sub/uview-ultra/demos/swiper/swiper.uvue'
import GenSrcSubUviewUltraDemosSwitchSwitchClass from './src/sub/uview-ultra/demos/switch/switch.uvue'
import GenSrcSubUviewUltraDemosTabbarTabbarClass from './src/sub/uview-ultra/demos/tabbar/tabbar.uvue'
import GenSrcSubUviewUltraDemosTableTableClass from './src/sub/uview-ultra/demos/table/table.uvue'
import GenSrcSubUviewUltraDemosTable2Table2Class from './src/sub/uview-ultra/demos/table2/table2.uvue'
import GenSrcSubUviewUltraDemosTabsTabsClass from './src/sub/uview-ultra/demos/tabs/tabs.uvue'
import GenSrcSubUviewUltraDemosTagTagClass from './src/sub/uview-ultra/demos/tag/tag.uvue'
import GenSrcSubUviewUltraDemosTextTextClass from './src/sub/uview-ultra/demos/text/text.uvue'
import GenSrcSubUviewUltraDemosTextareaTextareaClass from './src/sub/uview-ultra/demos/textarea/textarea.uvue'
import GenSrcSubUviewUltraDemosTitleTitleClass from './src/sub/uview-ultra/demos/title/title.uvue'
import GenSrcSubUviewUltraDemosToastToastClass from './src/sub/uview-ultra/demos/toast/toast.uvue'
import GenSrcSubUviewUltraDemosTooltipTooltipClass from './src/sub/uview-ultra/demos/tooltip/tooltip.uvue'
import GenSrcSubUviewUltraDemosTransitionTransitionClass from './src/sub/uview-ultra/demos/transition/transition.uvue'
import GenSrcSubUviewUltraDemosTreeTreeClass from './src/sub/uview-ultra/demos/tree/tree.uvue'
import GenSrcSubUviewUltraDemosUploadUploadClass from './src/sub/uview-ultra/demos/upload/upload.uvue'
import GenSrcSubUviewUltraDemosWaterfallWaterfallClass from './src/sub/uview-ultra/demos/waterfall/waterfall.uvue'
import GenSrcSubUviewUltraUviewUltraClass from './src/sub/uview-ultra/uview-ultra.uvue'
function definePageRoutes() {
__uniRoutes.push({ path: "src/pages/index/index", component: GenSrcPagesIndexIndexClass, meta: { isQuit: true } as UniPageMeta, style: _uM([["navigationBarBackgroundColor","#ffffff"],["navigationBarTitleText","首页"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/pages/ai/ai", component: GenSrcPagesAiAiClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","AI 智能助手"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/pages/basic/basic", component: GenSrcPagesBasicBasicClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","基础"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/pages/function/function", component: GenSrcPagesFunctionFunctionClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","功能"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/pages/me/me", component: GenSrcPagesMeMeClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","我的"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/auth/login", component: GenSrcSubAuthLoginClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","登录"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/auth/register", component: GenSrcSubAuthRegisterClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","注册"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/layoutDemo/layoutDemo", component: GenSrcSubLayoutDemoLayoutDemoClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","布局页面示例"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/tailwindcss/tailwindcss", component: GenSrcSubTailwindcssTailwindcssClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","weapp-tailwindcss 示例"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/test/test", component: GenSrcSubTestTestClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","URL 参数测试"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uiTest/uiTest", component: GenSrcSubUiTestUiTestClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","UI 测试"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/action-sheet/action-sheet", component: GenSrcSubUviewUltraDemosActionSheetActionSheetClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-action-sheet 动作面板"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/album/album", component: GenSrcSubUviewUltraDemosAlbumAlbumClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Album 相册"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/alert/alert", component: GenSrcSubUviewUltraDemosAlertAlertClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-alert 警告提示"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/avatar/avatar", component: GenSrcSubUviewUltraDemosAvatarAvatarClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-avatar 头像"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/back-top/back-top", component: GenSrcSubUviewUltraDemosBackTopBackTopClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Back Top 返回顶部"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/badge/badge", component: GenSrcSubUviewUltraDemosBadgeBadgeClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-badge 徽标"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/barcode/barcode", component: GenSrcSubUviewUltraDemosBarcodeBarcodeClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-barcode 条形码"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/button/button", component: GenSrcSubUviewUltraDemosButtonButtonClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-button 按钮"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/calendar/calendar", component: GenSrcSubUviewUltraDemosCalendarCalendarClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-calendar 日历"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/card/card", component: GenSrcSubUviewUltraDemosCardCardClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-card 卡片"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/cascader/cascader", component: GenSrcSubUviewUltraDemosCascaderCascaderClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-cascader 级联选择器"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/checkbox/checkbox", component: GenSrcSubUviewUltraDemosCheckboxCheckboxClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-checkbox 复选框"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/circle-progress/circle-progress", component: GenSrcSubUviewUltraDemosCircleProgressCircleProgressClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","CircleProgress 圆形进度条"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/code-input/code-input", component: GenSrcSubUviewUltraDemosCodeInputCodeInputClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","CodeInput 验证码"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/code/code", component: GenSrcSubUviewUltraDemosCodeCodeClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Code 验证码倒计时"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/collapse/collapse", component: GenSrcSubUviewUltraDemosCollapseCollapseClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-collapse 折叠面板"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/color-picker/color-picker", component: GenSrcSubUviewUltraDemosColorPickerColorPickerClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-color-picker 颜色选择"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/copy/copy", component: GenSrcSubUviewUltraDemosCopyCopyClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Copy 复制"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/count-down/count-down", component: GenSrcSubUviewUltraDemosCountDownCountDownClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","CountDown 倒计时"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/count-to/count-to", component: GenSrcSubUviewUltraDemosCountToCountToClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","CountTo 数字滚动"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/coupon/coupon", component: GenSrcSubUviewUltraDemosCouponCouponClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-coupon 优惠券"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/cropper/cropper", component: GenSrcSubUviewUltraDemosCropperCropperClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-cropper 裁剪"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/datetime-picker/datetime-picker", component: GenSrcSubUviewUltraDemosDatetimePickerDatetimePickerClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-datetime-picker 时间选择"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/divider/divider", component: GenSrcSubUviewUltraDemosDividerDividerClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Divider 分割线"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/dragsort/dragsort", component: GenSrcSubUviewUltraDemosDragsortDragsortClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-dragsort 拖拽排序"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/dropdown/dropdown", component: GenSrcSubUviewUltraDemosDropdownDropdownClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Dropdown 下拉菜单"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/empty/empty", component: GenSrcSubUviewUltraDemosEmptyEmptyClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Empty 空白页"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/float-button/float-button", component: GenSrcSubUviewUltraDemosFloatButtonFloatButtonClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-float-button 悬浮按钮"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/form/form", component: GenSrcSubUviewUltraDemosFormFormClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Form 表单"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/gap/gap", component: GenSrcSubUviewUltraDemosGapGapClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Gap 间隔槽"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/grid/grid", component: GenSrcSubUviewUltraDemosGridGridClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Grid 宫格"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/icon/icon", component: GenSrcSubUviewUltraDemosIconIconClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Icon 图标"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/image/image", component: GenSrcSubUviewUltraDemosImageImageClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Image 图片"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/index-list copy/index-list", component: GenSrcSubUviewUltraDemosIndexListcopyIndexListClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","IndexList 索引列表"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/index-list/index-list", component: GenSrcSubUviewUltraDemosIndexListIndexListClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","IndexList 索引列表"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/input/input", component: GenSrcSubUviewUltraDemosInputInputClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-input 输入框"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/keyboard/keyboard", component: GenSrcSubUviewUltraDemosKeyboardKeyboardClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Keyboard 键盘"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/lazy-load/lazy-load", component: GenSrcSubUviewUltraDemosLazyLoadLazyLoadClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Lazy Load 懒加载"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/line-progress/line-progress", component: GenSrcSubUviewUltraDemosLineProgressLineProgressClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","LineProgress 线型进度条"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/line/line", component: GenSrcSubUviewUltraDemosLineLineClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Line 线条"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/link/link", component: GenSrcSubUviewUltraDemosLinkLinkClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Link 超链接"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/list/list", component: GenSrcSubUviewUltraDemosListListClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-list 双列表嵌套"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/loading-icon/loading-icon", component: GenSrcSubUviewUltraDemosLoadingIconLoadingIconClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","LoadingIcon 加载图标"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/loading-page/loading-page", component: GenSrcSubUviewUltraDemosLoadingPageLoadingPageClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-loading-page 加载页"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/loadmore/loadmore", component: GenSrcSubUviewUltraDemosLoadmoreLoadmoreClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Loadmore 加载更多"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/modal/modal", component: GenSrcSubUviewUltraDemosModalModalClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-modal 模态框"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/mp-html/mp-html", component: GenSrcSubUviewUltraDemosMpHtmlMpHtmlClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","mp-html 富文本组件"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/navbar-mini/navbar-mini", component: GenSrcSubUviewUltraDemosNavbarMiniNavbarMiniClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Navbar Mini 迷你导航栏"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/navbar/navbar", component: GenSrcSubUviewUltraDemosNavbarNavbarClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Navbar 导航栏"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/no-network/no-network", component: GenSrcSubUviewUltraDemosNoNetworkNoNetworkClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-no-network 无网络提示"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/notice-bar/notice-bar", component: GenSrcSubUviewUltraDemosNoticeBarNoticeBarClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-notice-bar 滚动通知"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/notify/notify", component: GenSrcSubUviewUltraDemosNotifyNotifyClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-notify 消息通知"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/number-box/number-box", component: GenSrcSubUviewUltraDemosNumberBoxNumberBoxClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-number-box 步进器"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/overlay/overlay", component: GenSrcSubUviewUltraDemosOverlayOverlayClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-overlay 遮罩层"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/pagination/pagination", component: GenSrcSubUviewUltraDemosPaginationPaginationClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Pagination 分页器"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/parse/parse", component: GenSrcSubUviewUltraDemosParseParseClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Parse 富文本解析"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/pdf-reader/pdf-reader", component: GenSrcSubUviewUltraDemosPdfReaderPdfReaderClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-pdf-reader PDF 阅读"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/picker/picker", component: GenSrcSubUviewUltraDemosPickerPickerClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-picker 选择器"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/popup/popup", component: GenSrcSubUviewUltraDemosPopupPopupClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-popup 弹出层"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/poster/poster", component: GenSrcSubUviewUltraDemosPosterPosterClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-poster 海报"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/qrcode/qrcode", component: GenSrcSubUviewUltraDemosQrcodeQrcodeClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Qrcode 二维码"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/radio/radio", component: GenSrcSubUviewUltraDemosRadioRadioClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-radio 单选框"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/rate/rate", component: GenSrcSubUviewUltraDemosRateRateClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-rate 评分"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/search/search", component: GenSrcSubUviewUltraDemosSearchSearchClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-search 搜索"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/short-video/short-video", component: GenSrcSubUviewUltraDemosShortVideoShortVideoClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-short-video 短视频"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/signature/signature", component: GenSrcSubUviewUltraDemosSignatureSignatureClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-signature 签名"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/skeleton/skeleton", component: GenSrcSubUviewUltraDemosSkeletonSkeletonClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Skeleton 骨架屏"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/slider/slider", component: GenSrcSubUviewUltraDemosSliderSliderClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-slider 滑块"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/steps/steps", component: GenSrcSubUviewUltraDemosStepsStepsClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Steps 步骤条"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/sticky/sticky", component: GenSrcSubUviewUltraDemosStickyStickyClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Sticky 吸顶"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/subsection/subsection", component: GenSrcSubUviewUltraDemosSubsectionSubsectionClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Subsection 分段器"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/swipe-action/swipe-action", component: GenSrcSubUviewUltraDemosSwipeActionSwipeActionClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","SwipeAction 滑动操作"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/swiper/swiper", component: GenSrcSubUviewUltraDemosSwiperSwiperClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Swiper 轮播图"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/switch/switch", component: GenSrcSubUviewUltraDemosSwitchSwitchClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-switch 开关"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/tabbar/tabbar", component: GenSrcSubUviewUltraDemosTabbarTabbarClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Tabbar 底部导航"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/table/table", component: GenSrcSubUviewUltraDemosTableTableClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Table 表格"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/table2/table2", component: GenSrcSubUviewUltraDemosTable2Table2Class, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-table2 表格"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/tabs/tabs", component: GenSrcSubUviewUltraDemosTabsTabsClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Tabs 标签页"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/tag/tag", component: GenSrcSubUviewUltraDemosTagTagClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-tag 标签"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/text/text", component: GenSrcSubUviewUltraDemosTextTextClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Text 文本"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/textarea/textarea", component: GenSrcSubUviewUltraDemosTextareaTextareaClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-textarea 多行文本"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/title/title", component: GenSrcSubUviewUltraDemosTitleTitleClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-title 标题"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/toast/toast", component: GenSrcSubUviewUltraDemosToastToastClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-toast 消息提示"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/tooltip/tooltip", component: GenSrcSubUviewUltraDemosTooltipTooltipClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-tooltip 长按提示"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/transition/transition", component: GenSrcSubUviewUltraDemosTransitionTransitionClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Transition 动画"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/tree/tree", component: GenSrcSubUviewUltraDemosTreeTreeClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-tree 树形"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/upload/upload", component: GenSrcSubUviewUltraDemosUploadUploadClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","up-upload 上传"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/demos/waterfall/waterfall", component: GenSrcSubUviewUltraDemosWaterfallWaterfallClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","Waterfall 瀑布流"],["navigationStyle","custom"]]) } as UniPageRoute)
__uniRoutes.push({ path: "src/sub/uview-ultra/uview-ultra", component: GenSrcSubUviewUltraUviewUltraClass, meta: { isQuit: false } as UniPageMeta, style: _uM([["navigationBarTitleText","uview-ultra 示例"],["navigationStyle","custom"]]) } as UniPageRoute)
}
const __uniTabBar: Map<string, any | null> | null = _uM([["custom",true],["color","@tabBarColor"],["selectedColor","@tabBarSelectedColor"],["backgroundColor","@tabBarBackgroundColor"],["borderStyle","@tabBarBorderStyle"],["list",[_uM([["pagePath","src/pages/index/index"],["text","首页"],["iconPath","static/tabbar/home.png"],["selectedIconPath","static/tabbar/home_fill.png"]]),_uM([["pagePath","src/pages/basic/basic"],["text","基础"],["iconPath","static/tabbar/tune.png"],["selectedIconPath","static/tabbar/tune_fill.png"]]),_uM([["pagePath","src/pages/function/function"],["text","功能"],["iconPath","static/tabbar/gear.png"],["selectedIconPath","static/tabbar/gear_fill.png"]]),_uM([["pagePath","src/pages/me/me"],["text","我的"],["iconPath","static/tabbar/people.png"],["selectedIconPath","static/tabbar/people_fill.png"]])]],["iconWidth","24px"],["height","50px"]])
const __uniLaunchPage: Map<string, any | null> = _uM([["url","src/pages/index/index"],["style",_uM([["navigationBarBackgroundColor","#ffffff"],["navigationBarTitleText","首页"],["navigationStyle","custom"]])]])
function defineAppConfig(){
  __uniConfig.entryPagePath = '/src/pages/index/index'
  __uniConfig.globalStyle = _uM([["navigationBarTextStyle","@navigationBarTextStyle"],["navigationBarTitleText","uni-app x"],["navigationBarBackgroundColor","@navigationBarBackgroundColor"],["backgroundColor","@backgroundColor"],["backgroundColorContent","@backgroundColorContent"],["backgroundColorTop","@backgroundColorTop"],["backgroundColorBottom","@backgroundColorBottom"],["backgroundTextStyle","@backgroundTextStyle"]])
  __uniConfig.getTabBarConfig = ():Map<string, any> | null =>  _uM([["custom",true],["color","@tabBarColor"],["selectedColor","@tabBarSelectedColor"],["backgroundColor","@tabBarBackgroundColor"],["borderStyle","@tabBarBorderStyle"],["list",[_uM([["pagePath","src/pages/index/index"],["text","首页"],["iconPath","static/tabbar/home.png"],["selectedIconPath","static/tabbar/home_fill.png"]]),_uM([["pagePath","src/pages/basic/basic"],["text","基础"],["iconPath","static/tabbar/tune.png"],["selectedIconPath","static/tabbar/tune_fill.png"]]),_uM([["pagePath","src/pages/function/function"],["text","功能"],["iconPath","static/tabbar/gear.png"],["selectedIconPath","static/tabbar/gear_fill.png"]]),_uM([["pagePath","src/pages/me/me"],["text","我的"],["iconPath","static/tabbar/people.png"],["selectedIconPath","static/tabbar/people_fill.png"]])]],["iconWidth","24px"],["height","50px"]])
  __uniConfig.tabBar = __uniConfig.getTabBarConfig()
  __uniConfig.conditionUrl = ''
  __uniConfig.uniIdRouter = new Map()
  __uniConfig.themeConfig = _uM([["light",_uM([["backgroundColor","#f8fafc"],["backgroundColorBottom","#f8fafc"],["backgroundColorContent","#f8fafc"],["backgroundColorTop","#f8fafc"],["backgroundTextStyle","dark"],["navigationBarBackgroundColor","#ffffff"],["navigationBarTextStyle","black"],["tabBarBackgroundColor","#ffffff"],["tabBarBorderStyle","black"],["tabBarColor","#515151"],["tabBarSelectedColor","#0957de"]])],["dark",_uM([["backgroundColor","#0f172a"],["backgroundColorBottom","#0f172a"],["backgroundColorContent","#0f172a"],["backgroundColorTop","#0f172a"],["backgroundTextStyle","light"],["navigationBarBackgroundColor","#0f172a"],["navigationBarTextStyle","white"],["tabBarBackgroundColor","#0f172a"],["tabBarBorderStyle","black"],["tabBarColor","#515151"],["tabBarSelectedColor","#0957de"]])]])
  __uniConfig.ready = true
}

export class UniCloudConfig extends io.dcloud.unicloud.InternalUniCloudConfig {
    override isDev : boolean = false
    override spaceList : string = "[{\"provider\":\"alipay\",\"spaceName\":\"unibest-x\",\"spaceId\":\"env-00jy6p9vat6w\",\"spaceAppId\":\"2021006189647783\",\"accessKey\":\"v1hNSO9cKet13BIZ\",\"secretKey\":\"KCHJ9hiSZqvmd8Yx\",\"endpoint\":\"https://env-00jy6p9vat6w.api-hz.cloudbasefunction.cn\",\"failoverEndpoint\":\"\"}]"
    override debuggerInfo ?: string = null
    override secureNetworkEnable : boolean = false
    override secureNetworkConfig ?: string = "[]"
    constructor() { super() }
}
