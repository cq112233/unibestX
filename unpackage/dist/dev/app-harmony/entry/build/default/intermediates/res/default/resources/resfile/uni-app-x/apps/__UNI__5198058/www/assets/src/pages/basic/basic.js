const { defineComponent, onBackPress, onResize, openBlock, createBlock, withCtx, createVNode, createElementVNode, createCommentVNode } = globalThis.Vue
import { A as AppKu } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/default.js";
import { I as IconDemoCard } from "./components/IconDemoCard.js";
import { L as LangSwitchCard } from "./components/LangSwitchCard.js";
import { T as ThemeSwitchCard } from "./components/ThemeSwitchCard.js";
import { T as TimeDemoCard } from "./components/TimeDemoCard.js";
import { R as RouterDemoCard } from "./components/RouterDemoCard.js";
import { H as HttpDemoCard } from "./components/HttpDemoCard.js";
import { E as EchartsDemoCard } from "./components/EchartsDemoCard.js";
import { S as SystemInfoDemoCard } from "./components/SystemInfoDemoCard.js";
import { Z as ZPagingDemoCard } from "./components/ZPagingDemoCard.js";
import { U as UViewUltraDemoCard } from "./components/UViewUltraDemoCard.js";
import { u as updateSystemInfo } from "../../utils/systemInfo.js";
import { h as handleBackPressExit } from "../../utils/backPress.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/props.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../uni_modules/uview-ultra/libs/mixin/mpMixin.js";
import "../../../uni_modules/uview-ultra/libs/mixin/mixin.js";
import "../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../uni_modules/uview-ultra/components/up-transition/props.js";
import "../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/props.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/overlay.js";
import "../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../tabbar/index.js";
import "../../tabbar/store.js";
import "../../tabbar/types.js";
import "../../tabbar/config.js";
import "../../tabbar/TabbarItem.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../store/index.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../store/token.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../store/user.js";
import "../../store/app.js";
import "../../i18n/index.js";
import "../../../uni_modules/lime-i18n/common/index.js";
import "../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh_CN.js";
import "../../i18n/locales/en_US.js";
import "../../../uni_modules/uview-ultra/libs/i18n/index.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hans.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hant.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/en.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/es.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/fr.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/de.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ko.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ja.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ru.js";
import "../../utils/toast.js";
import "../../../uni_modules/lime-icon/components/l-icon/l-icon.js";
import "../../../uni_modules/lime-shared/classNames/index.js";
import "../../../uni_modules/lime-shared/stringifyStyle/index.js";
import "../../../uni_modules/lime-shared/addUnit/index.js";
import "../../../uni_modules/lime-shared/isNumeric/index.js";
import "../../../uni_modules/lime-shared/isNumber/index.js";
import "../../../uni_modules/lime-shared/isString/index.js";
import "../../../uni_modules/lime-shared/isDef/index.js";
import "../../../uni_modules/lime-icon/index.js";
import "./components/Card.js";
import "../../utils/i18n.js";
import "../../../uni_modules/lime-dayuts/common/index.js";
import "../../../uni_modules/lime-dayuts/utssdk/interface.js";
import "../../../uni_modules/lime-dayuts/common/constant.js";
import "../../../uni_modules/lime-dayuts/common/utils.js";
import "../../../uni_modules/lime-dayuts/common/use.js";
import "../../../uni_modules/lime-dayuts/common/locale/en/index.js";
import "../../../uni_modules/lime-dayuts/common/locale/zh-cn/index.js";
import "../../api/foo.js";
import "../../http/request.js";
import "../../../uni_modules/lime-request/common/index.js";
import "../../../uni_modules/lime-request/utssdk/interface.js";
import "../../../uni_modules/lime-request/common/utils.js";
import "../../../uni_modules/lime-request/common/url-query.js";
import "../../../uni_modules/lime-request/utssdk/unierror.js";
import "../../utils/toLoginPage.js";
import "../../http/tools/enum.js";
import "../../../uni_modules/e-chart/components/e-chart/e-chart.js";
import "../../../uni_modules/e-chart/components/e-chart/uts/util.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/z-paging-x.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/components/z-paging-refresher.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/static/index.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/components/z-paging-loading.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/enums/index.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/utils/index.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/components/z-paging-load-more.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x-empty/z-paging-x-empty.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/config/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "basic",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    onBackPress((options) => {
      if (options.from == "backbutton") {
        return handleBackPressExit();
      }
      return false;
    });
    onResize(() => {
      updateSystemInfo();
    });
    const __returned__ = { get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    }, get IconDemoCard() {
      return IconDemoCard;
    }, get LangSwitchCard() {
      return LangSwitchCard;
    }, get ThemeSwitchCard() {
      return ThemeSwitchCard;
    }, get TimeDemoCard() {
      return TimeDemoCard;
    }, get RouterDemoCard() {
      return RouterDemoCard;
    }, get HttpDemoCard() {
      return HttpDemoCard;
    }, get EchartsDemoCard() {
      return EchartsDemoCard;
    }, get SystemInfoDemoCard() {
      return SystemInfoDemoCard;
    }, get ZPagingDemoCard() {
      return ZPagingDemoCard;
    }, get UViewUltraDemoCard() {
      return UViewUltraDemoCard;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "flex-1": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["AppKu"], null, {
    default: withCtx(() => [
      createVNode($setup["LayoutComponent"], { "navigation-bar-title-text": "基础" }, {
        default: withCtx(() => [
          createElementVNode("scroll-view", {
            direction: "vertical",
            class: "flex-1"
          }, [
            createCommentVNode(" uview-ultra 组件库示例 "),
            createVNode($setup["UViewUltraDemoCard"]),
            createCommentVNode(" 数据分页列表示例组件 "),
            createVNode($setup["ZPagingDemoCard"]),
            createCommentVNode(" 系统与安全区域信息组件 "),
            createVNode($setup["SystemInfoDemoCard"]),
            createCommentVNode(" 使用封装的图标示例组件 "),
            createVNode($setup["IconDemoCard"]),
            createCommentVNode(" 使用封装的多语言切换组件 "),
            createVNode($setup["LangSwitchCard"]),
            createCommentVNode(" 使用封装的主题切换组件 "),
            createVNode($setup["ThemeSwitchCard"]),
            createCommentVNode(" 时间日期操作 (lime-dayuts) 演示组件 "),
            createVNode($setup["TimeDemoCard"]),
            createCommentVNode(" 使用路由拦截与传参演示组件 "),
            createVNode($setup["RouterDemoCard"]),
            createCommentVNode(" HTTP 请求 Demo 组件 "),
            createVNode($setup["HttpDemoCard"]),
            createCommentVNode(" ECharts 图表示例组件 "),
            createVNode($setup["EchartsDemoCard"])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const basic = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/basic.uvue"]]);
export {
  basic as default
};
//# sourceMappingURL=basic.js.map
