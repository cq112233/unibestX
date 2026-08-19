import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { A as AppKu, r as resolveEasycom } from "../../../../../App.ku.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-tabs/up-tabs.js";
import { L as LayoutComponent } from "../../../../layouts/default.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../store/index.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/app.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../tabbar/store.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/config.js";
import "../../../../i18n/index.js";
import "../../../../../uni_modules/lime-i18n/common/index.js";
import "../../../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/lime-i18n/common/format.js";
import "../../../../../uni_modules/lime-i18n/common/util.js";
import "../../../../../uni_modules/lime-i18n/common/errors.js";
import "../../../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../../../uni_modules/lime-i18n/common/types.js";
import "../../../../i18n/locales/zh-CN.js";
import "../../../../i18n/locales/en-US.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/index.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hans.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hant.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/en.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/es.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/fr.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/de.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ko.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ja.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ru.js";
import "../../../../utils/theme.js";
import "../../../../../theme.js";
import "../../../../store/token.js";
import "../../../../store/user.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../utils/toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-badge/up-badge.js";
import "../../../../../uni_modules/uview-ultra/components/up-badge/badge.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "tabs",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const currentLong = ref(0);
    const longList = ref([
      new UTSJSONObject({ name: "关注" }),
      new UTSJSONObject({ name: "推荐" }),
      new UTSJSONObject({ name: "电影" }),
      new UTSJSONObject({ name: "电视剧" }),
      new UTSJSONObject({ name: "综艺" }),
      new UTSJSONObject({ name: "动漫" }),
      new UTSJSONObject({ name: "少儿" }),
      new UTSJSONObject({ name: "纪录片" }),
      new UTSJSONObject({ name: "体育" }),
      new UTSJSONObject({ name: "游戏" }),
      new UTSJSONObject({ name: "音乐" }),
      new UTSJSONObject({ name: "搞笑" }),
      new UTSJSONObject({ name: "科技" }),
      new UTSJSONObject({ name: "美食" })
    ]);
    const currentBase = ref(0);
    const baseList = ref([
      new UTSJSONObject({ name: "关注" }),
      new UTSJSONObject({ name: "推荐" }),
      new UTSJSONObject({ name: "电影" }),
      new UTSJSONObject({ name: "科技" })
    ]);
    const currentBadge = ref(0);
    const badgeList = ref([
      new UTSJSONObject({ name: "关注", badge: new UTSJSONObject({ isDot: true }) }),
      new UTSJSONObject({ name: "推荐", badge: new UTSJSONObject({ value: 5 }) }),
      new UTSJSONObject({ name: "消息", badge: new UTSJSONObject({ value: 99 }) }),
      new UTSJSONObject({ name: "热榜" })
    ]);
    const currentDisabled = ref(0);
    const disabledList = ref([
      new UTSJSONObject({ name: "国内新闻" }),
      new UTSJSONObject({ name: "国际焦点" }),
      new UTSJSONObject({ name: "付费专区", disabled: true }),
      new UTSJSONObject({ name: "数码测评" })
    ]);
    const currentCustom = ref(1);
    const customList = ref([
      new UTSJSONObject({ name: "最新发布" }),
      new UTSJSONObject({ name: "最热推荐" }),
      new UTSJSONObject({ name: "好评排行" }),
      new UTSJSONObject({ name: "折扣特惠" })
    ]);
    const currentEqual = ref(0);
    const equalList = ref([
      new UTSJSONObject({ name: "待付款" }),
      new UTSJSONObject({ name: "待发货" }),
      new UTSJSONObject({ name: "待收货" }),
      new UTSJSONObject({ name: "待评价" })
    ]);
    function onLongChange(item) {
      uni.__f__("log", "at src/sub/uview-ultra/demos/tabs/tabs.uvue:146", "超长Tabs切换:", item);
    }
    function onBaseChange(item) {
      uni.__f__("log", "at src/sub/uview-ultra/demos/tabs/tabs.uvue:150", "基础Tabs切换:", item);
    }
    const __returned__ = { currentLong, longList, currentBase, baseList, currentBadge, badgeList, currentDisabled, disabledList, currentCustom, customList, currentEqual, equalList, onLongChange, onBaseChange, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "mt-10px": { "": { "marginTop": 10 } }, "mt-12px": { "": { "marginTop": 12 } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "pb-30px": { "": { "paddingBottom": 30 } } };
const _style_1 = { "demo-block": { "": { "marginBottom": 12, "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "backgroundColor": "#ffffff", "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "demo-label": { "": { "fontSize": 14, "fontWeight": "bold", "color": "#606266", "marginBottom": 10, "paddingLeft": 4, "borderLeftWidth": 3, "borderLeftStyle": "solid", "borderLeftColor": "#2979ff" } }, "content-box": { "": { "paddingTop": 14, "paddingRight": 14, "paddingBottom": 14, "paddingLeft": 14, "backgroundColor": "#f1f5f9", "borderTopLeftRadius": 6, "borderTopRightRadius": 6, "borderBottomRightRadius": 6, "borderBottomLeftRadius": 6, "alignItems": "center", "justifyContent": "center" } }, "content-text": { "": { "fontSize": 13, "color": "#475569" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(__resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_up_tabs = resolveEasycom(__resolveDynamicComponent("up-tabs"), __easycom_1);
  return _openBlock(), _createBlock($setup["AppKu"], null, {
    default: _withCtx(() => [
      _createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "up-tabs 标签页"
      }, {
        default: _withCtx(() => [
          _createElementVNode("view", { class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }, [
            _createVNode(_component_NavBar, {
              title: "Tabs 标签页",
              "auto-back": true
            }),
            _createElementVNode("view", { class: "p-16px" }, [
              _createElementVNode("view", { class: "demo-block" }, [
                _createElementVNode("text", { class: "demo-label" }, "超长横向滚动标签 (14项)"),
                _createVNode(_component_up_tabs, {
                  current: $setup.currentLong,
                  "onUpdate:current": _cache[0] || (_cache[0] = ($event) => $setup.currentLong = $event),
                  list: $setup.longList,
                  onChange: $setup.onLongChange
                }, null, 8, ["current", "list"]),
                _createElementVNode("view", { class: "content-box mt-10px" }, [
                  _createElementVNode(
                    "text",
                    { class: "content-text" },
                    "当前选中：" + _toDisplayString($setup.longList[$setup.currentLong].name) + " (第 " + _toDisplayString($setup.currentLong + 1) + " 项)",
                    1
                    /* TEXT */
                  )
                ])
              ]),
              _createElementVNode("view", { class: "demo-block mt-12px" }, [
                _createElementVNode("text", { class: "demo-label" }, "基础用法与内容联动"),
                _createVNode(_component_up_tabs, {
                  current: $setup.currentBase,
                  "onUpdate:current": _cache[1] || (_cache[1] = ($event) => $setup.currentBase = $event),
                  list: $setup.baseList,
                  onChange: $setup.onBaseChange
                }, null, 8, ["current", "list"]),
                _createElementVNode("view", { class: "content-box mt-10px" }, [
                  _createElementVNode(
                    "text",
                    { class: "content-text" },
                    "正在浏览：" + _toDisplayString($setup.baseList[$setup.currentBase].name) + " 分类内容",
                    1
                    /* TEXT */
                  )
                ])
              ]),
              _createElementVNode("view", { class: "demo-block mt-12px" }, [
                _createElementVNode("text", { class: "demo-label" }, "带角标与红点提示"),
                _createVNode(_component_up_tabs, {
                  current: $setup.currentBadge,
                  "onUpdate:current": _cache[2] || (_cache[2] = ($event) => $setup.currentBadge = $event),
                  list: $setup.badgeList
                }, null, 8, ["current", "list"])
              ]),
              _createElementVNode("view", { class: "demo-block mt-12px" }, [
                _createElementVNode("text", { class: "demo-label" }, "禁用特定标签项"),
                _createVNode(_component_up_tabs, {
                  current: $setup.currentDisabled,
                  "onUpdate:current": _cache[3] || (_cache[3] = ($event) => $setup.currentDisabled = $event),
                  list: $setup.disabledList
                }, null, 8, ["current", "list"])
              ]),
              _createElementVNode("view", { class: "demo-block mt-12px" }, [
                _createElementVNode("text", { class: "demo-label" }, "自定义滑块与高亮样式"),
                _createVNode(_component_up_tabs, {
                  current: $setup.currentCustom,
                  "onUpdate:current": _cache[4] || (_cache[4] = ($event) => $setup.currentCustom = $event),
                  list: $setup.customList,
                  "line-color": "#fa3534",
                  "line-width": "32px",
                  "line-height": "4px",
                  "active-style": { color: "#fa3534", fontWeight: "bold" },
                  "inactive-style": { color: "#909399" }
                }, null, 8, ["current", "list"])
              ]),
              _createElementVNode("view", { class: "demo-block mt-12px" }, [
                _createElementVNode("text", { class: "demo-label" }, "等分布局 (不可滚动: scrollable=false)"),
                _createVNode(_component_up_tabs, {
                  current: $setup.currentEqual,
                  "onUpdate:current": _cache[5] || (_cache[5] = ($event) => $setup.currentEqual = $event),
                  list: $setup.equalList,
                  scrollable: false,
                  "line-color": "#19be6b",
                  "active-style": { color: "#19be6b", fontWeight: "bold" }
                }, null, 8, ["current", "list"])
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
const tabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/demos/tabs/tabs.uvue"]]);
export {
  tabs as default
};
//# sourceMappingURL=tabs.js.map
