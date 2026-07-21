import { _ as __easycom_0 } from "../../components/NavBar/NavBar.js";
const { defineComponent, onBackPress, ref, resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, createElementVNode } = globalThis.Vue
import { A as AppKu, r as resolveEasycom } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/default.js";
import { h as handleBackPressExit } from "../../utils/backPress.js";
import { _ as _imports_0 } from "../../../static/logo.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../utils/systemInfo.js";
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
import "../../utils/toast.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    onBackPress((options) => {
      if (options.from == "backbutton") {
        return handleBackPressExit();
      }
      return false;
    });
    const themeSwitchVal = ref(true);
    const themeSwitchVal2 = ref(false);
    const checkboxValue = ref(["apple"]);
    const radioValue = ref("male");
    const sliderValue = ref(30);
    const rateValue = ref(3);
    const isBg = ref(true);
    function switchBg() {
      isBg.value = !isBg.value;
    }
    const __returned__ = { themeSwitchVal, themeSwitchVal2, checkboxValue, radioValue, sliderValue, rateValue, isBg, switchBg, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "h-100px": { "": { "height": 100 } }, "m-auto": { "": { "marginTop": "auto", "marginRight": "auto", "marginBottom": "auto", "marginLeft": "auto" } }, "mt-10px": { "": { "marginTop": 10 } }, "mt-15px": { "": { "marginTop": 15 } }, "mt-20px": { "": { "marginTop": 20 } }, "mx-30px": { "": { "marginLeft": 30, "marginRight": 30 } }, "mx-auto": { "": { "marginLeft": "auto", "marginRight": "auto" } }, "pb-20px": { "": { "paddingBottom": 20 } }, "px-20px": { "": { "paddingLeft": 20, "paddingRight": 20 } }, "px-30px": { "": { "paddingLeft": 30, "paddingRight": 30 } }, "py-15px": { "": { "paddingTop": 15, "paddingBottom": 15 } }, "rounded-12px": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "rounded-20px": { "": { "borderTopLeftRadius": 20, "borderTopRightRadius": 20, "borderBottomRightRadius": 20, "borderBottomLeftRadius": 20 } }, "text-__d14328_": { "": { "color": "#d14328" } }, "text-14px": { "": { "fontSize": 14 } }, "text-16px": { "": { "fontSize": 16 } }, "text-25px": { "": { "fontSize": 25 } }, "text-32px": { "": { "fontSize": 32 } }, "text-center": { "": { "textAlign": "center" } }, "w-100px": { "": { "width": 100 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(resolveDynamicComponent("NavBar"), __easycom_0);
  return openBlock(), createBlock($setup["AppKu"], null, {
    default: withCtx(() => [
      createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "首页"
      }, {
        default: withCtx(() => [
          createElementVNode("view", null, [
            createVNode(_component_NavBar, {
              title: "首页",
              "show-back": false
            }),
            createElementVNode("view", { class: "content-container pb-20px" }, [
              createElementVNode("image", {
                class: "w-100px h-100px mx-auto mt-20px rounded-20px",
                src: _imports_0
              }),
              createElementVNode("text", { class: "text-32px text-bold mx-auto mt-10px text-__d14328_" }, " unibestX "),
              createElementVNode("text", { class: "text-center text-25px mt-10px" }, " 最好用的 uni-appX 开发模板 "),
              createElementVNode("text", { class: "mt-10px m-auto px-30px text-justify text-16px text-bold" }, " 　　unibestX 是一个集成了多种工具与技术的 uni-appX 开发模板，由 uni-appX + Vue3 + Ts + UnoCss + VSCode 构建，模板具有代码提示、自动格式化、统一配置、代码片段等功能，并内置了许多常用的基本组件和基本功能，让你编写 uni-appX 拥有 best 体验。 "),
              createElementVNode("view", {
                class: "mt-15px mx-30px px-20px py-15px rounded-12px",
                style: { "background-color": "rgba(55, 194, 188, 0.08)" }
              }, [
                createElementVNode("text", {
                  class: "text-14px",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 🧩 UI 组件库 — 集成 uview-ultra 组件库，按钮、标签、弹窗等开箱即用 "),
                createElementVNode("text", {
                  class: "text-14px",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 📱 系统信息 — 获取安全区域、屏幕尺寸、设备像素比等系统参数 "),
                createElementVNode("text", {
                  class: "text-14px",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 🎨 图标字体 — 支持 uni-icon、lime-icon、up-icon 三套图标方案 "),
                createElementVNode("text", {
                  class: "text-14px",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 🌐 多语言切换 — 内置 i18n 国际化方案，中英文一键切换 "),
                createElementVNode("text", {
                  class: "text-14px",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 🎭 主题换色 — 五种预设主题色，原生与组件同步生效 "),
                createElementVNode("text", {
                  class: "text-14px",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 🕐 日期时间 — 基于 lime-dayuts，实时时钟、日期偏移、月份边界等 "),
                createElementVNode("text", {
                  class: "text-14px",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 🔀 路由拦截 — 登录鉴权路由守卫，未登录自动跳转登录页 "),
                createElementVNode("text", {
                  class: "text-14px",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 🌐 网络请求 — 封装 lime-request，Mock 数据与真实接口演示 "),
                createElementVNode("text", {
                  class: "text-14px",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 📊 图表渲染 — ECharts 图表集成，折线图、柱状图、饼图自适应 "),
                createElementVNode("text", {
                  class: "text-14px",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 📋 分页列表 — z-paging-x 分页加载，Tab 筛选、错误模拟、空数据 ")
              ])
            ])
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/index/index.uvue"]]);
export {
  index as default
};
//# sourceMappingURL=index.js.map
