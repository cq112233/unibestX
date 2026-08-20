import { _ as __easycom_0 } from "../../components/NavBar/NavBar.js";
import { A as AppKu, r as resolveEasycom } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/default.js";
import { h as handleBackPressExit } from "../../utils/backPress.js";
import { _ as _imports_0 } from "../../../static/logo.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../utils/systemInfo.js";
import "../../store/index.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../store/app.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../tabbar/store.js";
import "../../tabbar/types.js";
import "../../tabbar/config.js";
import "../../i18n/index.js";
import "../../../uni_modules/lime-i18n/common/index.js";
import "../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh-CN.js";
import "../../i18n/locales/en-US.js";
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
import "../../utils/theme.js";
import "../../../theme.js";
import "../../store/token.js";
import "../../store/user.js";
import "../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../uni_modules/uview-ultra/libs/function/digit.js";
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
import "../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../tabbar/index.js";
import "../../tabbar/TabbarItem.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../utils/i18n.js";
import "../../utils/toast.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { onBackPress, ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
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
    function goToUiTest() {
      uni.navigateTo({
        url: "/src/pages/haha/haha"
      });
    }
    const __returned__ = { themeSwitchVal, themeSwitchVal2, checkboxValue, radioValue, sliderValue, rateValue, isBg, switchBg, goToUiTest, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"wtu-1ijr6ye-0":{"":{"width":100}},"wtu-jhzgjb-1":{"":{"height":100}},"wtu-1kpaxbq-2":{"":{"marginLeft":"auto","marginRight":"auto"}},"wtu-76k8bv-3":{"":{"marginTop":20}},"wtu-u3sk51-4":{"":{"borderTopLeftRadius":20,"borderTopRightRadius":20,"borderBottomRightRadius":20,"borderBottomLeftRadius":20,"borderRadius":20}},"wtu-s3myc0-5":{"":{"fontSize":32}},"wtu-oogtoa-6":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":"700","-TwFontWeight":"var(--font-weight-bold,700)"}},"wtu-1ni8q32-7":{"":{"marginTop":10}},"wtu-a7oh1k-8":{"":{"color":"#d14328"}},"wtu-6d0iwi-9":{"":{"textAlign":"center"}},"wtu-17yvtvk-a":{"":{"fontSize":25}},"wtu-jfopje-b":{"":{"marginTop":"auto","marginRight":"auto","marginBottom":"auto","marginLeft":"auto","margin":"auto"}},"wtu-f2chv7-c":{"":{"paddingLeft":30,"paddingRight":30}},"wtu-1tftg3e-d":{"":{"fontSize":16}},"wtu-1wmf5qf-e":{"":{"marginTop":15}},"wtu-1059bec-f":{"":{"marginLeft":30,"marginRight":30}},"wtu-6ezqn4-g":{"":{"paddingLeft":20,"paddingRight":20}},"wtu-byz6wt-h":{"":{"paddingTop":15,"paddingBottom":15}},"wtu-ejnzxm-i":{"":{"borderTopLeftRadius":12,"borderTopRightRadius":12,"borderBottomRightRadius":12,"borderBottomLeftRadius":12,"borderRadius":12}},"wtu-k8abjg-j":{"":{"fontSize":14}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(__resolveDynamicComponent("NavBar"), __easycom_0);
  return _openBlock(), _createBlock($setup["AppKu"], null, {
    default: _withCtx(() => [
      _createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "首页"
      }, {
        default: _withCtx(() => [
          _createElementVNode("view", null, [
            _createVNode(_component_NavBar, {
              title: "首页",
              "show-back": false
            }),
            _createElementVNode("view", { class: "content-container" }, [
              _createElementVNode("image", {
                class: "wtu-1ijr6ye-0 wtu-jhzgjb-1 wtu-1kpaxbq-2 wtu-76k8bv-3 wtu-u3sk51-4",
                src: _imports_0
              }),
              _createElementVNode("text", { class: "wtu-s3myc0-5 wtu-oogtoa-6 wtu-1kpaxbq-2 wtu-1ni8q32-7 wtu-a7oh1k-8" }, " unibestX "),
              _createElementVNode("text", { class: "wtu-6d0iwi-9 wtu-17yvtvk-a wtu-1ni8q32-7" }, " 最好用的 uni-appX 开发模板 "),
              _createElementVNode("text", { class: "wtu-1ni8q32-7 wtu-jfopje-b wtu-f2chv7-c wtu-1tftg3e-d wtu-oogtoa-6" }, " 　　unibestX 是一个集成了多种工具与技术的 uni-appX 开发模板，由 uni-appX + Vue3 + Ts + weapp-tailwindcss + VSCode 构建，模板具有代码提示、自动格式化、统一配置、代码片段等功能，并内置了 ECharts 图表、主题配置、加密方式配置等常用功能与基本组件，让你编写 uni-appX 拥有 best 体验。 "),
              _createElementVNode("view", {
                class: "wtu-1wmf5qf-e wtu-1059bec-f wtu-6ezqn4-g wtu-byz6wt-h wtu-ejnzxm-i",
                style: { "background-color": "rgba(55, 194, 188, 0.08)" }
              }, [
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j wtu-oogtoa-6",
                  style: { "color": "#0f8f8a" }
                }, " ⚡ 渲染模式：本项目全面支持 VDOM / Vapor 两种模式，默认 Vapor 蒸汽模式 "),
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 　　Vapor 蒸汽模式是新一代渲染引擎，渲染性能超过原生，Android 端语法要求更宽松，AI 友好度与动态性更强；从 2026 年起将逐渐替代老的 VDOM 模式。 "),
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 　　推荐使用 Vapor 蒸汽模式，可在 manifest.json 中按需切换回 VDOM 模式。 "),
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 　　注意：Vapor 模式下开发过的代码，切换回 VDOM 模式可能因编译检查更严格而报类型或语法错误，请按需选择。 ")
              ]),
              _createElementVNode("view", {
                class: "wtu-1wmf5qf-e wtu-1059bec-f wtu-6ezqn4-g wtu-byz6wt-h wtu-ejnzxm-i",
                style: { "background-color": "rgba(49, 130, 206, 0.08)" }
              }, [
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j wtu-oogtoa-6",
                  style: { "color": "#3182ce" }
                }, " 🎨 样式引擎：Tailwind CSS v4 + weapp-tailwindcss "),
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 　　weapp-tailwindcss 是 uni-app X 的 Tailwind CSS 适配方案，类名写法与 Web 端完全一致：支持方括号任意值（text-[14px]、mt-[12px]、bg-[#3b82f6] 等），免去手写 CSS。 "),
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 　　内置 dark: 暗黑变体与 wx:、h5:、app: 等平台变体，一套类名多端生效；支持 @apply 样式复用，可在「基础 → weapp-tailwindcss Demo」查看完整示例。 ")
              ]),
              _createElementVNode("view", {
                class: "wtu-1wmf5qf-e wtu-1059bec-f wtu-6ezqn4-g wtu-byz6wt-h wtu-ejnzxm-i",
                style: { "background-color": "rgba(245, 158, 11, 0.1)" }
              }, [
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j wtu-oogtoa-6",
                  style: { "color": "#d97706" }
                }, " ⚠️ 页面路由配置须知（重要） "),
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 　　本项目内置 vite-plugin-uni-pages 自动文件路由插件，pages.json 为自动构建产物（构建打包时会被重新生成并覆盖）。 "),
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 　　页面配置请在根目录 pages.config.json 中配置，或在页面代码中使用 definePage 编译宏，切勿直接修改 pages.json！ ")
              ]),
              _createElementVNode("view", {
                class: "wtu-1wmf5qf-e wtu-1059bec-f wtu-6ezqn4-g wtu-byz6wt-h wtu-ejnzxm-i",
                style: { "background-color": "rgba(55, 194, 188, 0.08)" }
              }, [
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 📄 文件路由 — 自动扫描路由，通过 pages.config.json / definePage 统一配置 "),
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j",
                  style: { "color": "#666", "line-height": "26px" }
                }, " ⚡ 渲染模式 — 全面支持 VDOM / Vapor 两种模式，默认 Vapor 蒸汽模式 "),
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 🧱 样式引擎 — Tailwind CSS v4 + weapp-tailwindcss，方括号任意值与 dark: 变体全端生效 "),
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 🧩 UI 组件库 — 集成 uview-ultra 组件库，按钮、标签、弹窗等开箱即用 "),
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 📱 系统信息 — 获取安全区域、屏幕尺寸、设备像素比等系统参数 "),
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 🎨 图标字体 — 支持 uni-icon、lime-icon、up-icon 三套图标方案 "),
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 🌐 多语言切换 — 内置 i18n 国际化方案，中英文一键切换 "),
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 🎭 主题配置 — 五种预设主题色 + 暗黑模式（auto / light / dark），原生与组件同步生效 "),
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 🕐 日期时间 — 基于 lime-dayuts，实时时钟、日期偏移、月份边界等 "),
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 🔀 路由拦截 — 登录鉴权路由守卫，未登录自动跳转登录页 "),
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 🌐 网络请求 — 封装 lime-request，Mock 数据与真实接口演示 "),
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 🔐 加密配置 — 内置 unix-crypto，AES / DES / MD5 / SHA-256 / HMAC-SHA1 / Base64 / RSA 全端加密解密 "),
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j",
                  style: { "color": "#666", "line-height": "26px" }
                }, " 📊 图表渲染 — ECharts 图表集成，折线图、柱状图、饼图自适应 "),
                _createElementVNode("text", {
                  class: "wtu-k8abjg-j",
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
