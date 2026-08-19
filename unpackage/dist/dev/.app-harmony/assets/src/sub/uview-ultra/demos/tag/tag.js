import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { A as AppKu, r as resolveEasycom } from "../../../../../App.ku.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-tag/up-tag.js";
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
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "tag",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const showTag = ref(true);
    function closeTag() {
      showTag.value = false;
    }
    const __returned__ = { showTag, closeTag, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "flex-row": { "": { "flexDirection": "row" } }, "flex-wrap": { "": { "flexWrap": "wrap" } }, "items-center": { "": { "alignItems": "center" } }, "mb-10px": { "": { "marginBottom": 10 } }, "mr-10px": { "": { "marginRight": 10 } }, "mt-12px": { "": { "marginTop": 12 } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "pb-30px": { "": { "paddingBottom": 30 } } };
const _style_1 = { "demo-block": { "": { "marginBottom": 12, "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "backgroundColor": "#ffffff", "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "demo-label": { "": { "fontSize": 14, "fontWeight": "bold", "color": "#606266", "marginBottom": 10, "paddingLeft": 4, "borderLeftWidth": 3, "borderLeftStyle": "solid", "borderLeftColor": "#2979ff" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, withCtx: _withCtx } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(__resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_up_tag = resolveEasycom(__resolveDynamicComponent("up-tag"), __easycom_1);
  return _openBlock(), _createBlock($setup["AppKu"], null, {
    default: _withCtx(() => [
      _createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "up-tag 标签"
      }, {
        default: _withCtx(() => [
          _createElementVNode("view", { class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }, [
            _createVNode(_component_NavBar, {
              title: "up-tag 标签",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            }),
            _createElementVNode("view", { class: "p-16px" }, [
              _createElementVNode("view", { class: "demo-block" }, [
                _createElementVNode("text", { class: "demo-label" }, "基础用法"),
                _createElementVNode("view", { class: "flex-row items-center flex-wrap" }, [
                  _createVNode(_component_up_tag, {
                    text: "标签",
                    type: "primary",
                    size: "normal",
                    class: "mr-10px mb-10px"
                  }),
                  _createVNode(_component_up_tag, {
                    text: "成功",
                    type: "success",
                    size: "normal",
                    class: "mr-10px mb-10px"
                  }),
                  _createVNode(_component_up_tag, {
                    text: "警告",
                    type: "warning",
                    size: "normal",
                    class: "mr-10px mb-10px"
                  }),
                  _createVNode(_component_up_tag, {
                    text: "危险",
                    type: "error",
                    size: "normal",
                    class: "mr-10px mb-10px"
                  })
                ])
              ]),
              _createElementVNode("view", { class: "demo-block mt-12px" }, [
                _createElementVNode("text", { class: "demo-label" }, "镂空标签"),
                _createElementVNode("view", { class: "flex-row items-center flex-wrap" }, [
                  _createVNode(_component_up_tag, {
                    text: "镂空",
                    type: "primary",
                    plain: true,
                    size: "normal",
                    class: "mr-10px"
                  }),
                  _createVNode(_component_up_tag, {
                    text: "镂空",
                    type: "success",
                    plain: true,
                    size: "normal",
                    class: "mr-10px"
                  })
                ])
              ]),
              _createElementVNode("view", { class: "demo-block mt-12px" }, [
                _createElementVNode("text", { class: "demo-label" }, "不同尺寸"),
                _createElementVNode("view", { class: "flex-row items-center flex-wrap" }, [
                  _createVNode(_component_up_tag, {
                    text: "大尺寸",
                    size: "large",
                    type: "primary",
                    class: "mr-10px"
                  }),
                  _createVNode(_component_up_tag, {
                    text: "普通",
                    size: "normal",
                    type: "success",
                    class: "mr-10px"
                  }),
                  _createVNode(_component_up_tag, {
                    text: "迷你",
                    size: "mini",
                    type: "warning",
                    class: "mr-10px"
                  })
                ])
              ]),
              _createElementVNode("view", { class: "demo-block mt-12px" }, [
                _createElementVNode("text", { class: "demo-label" }, "不同形状"),
                _createElementVNode("view", { class: "flex-row items-center flex-wrap" }, [
                  _createVNode(_component_up_tag, {
                    text: "半圆角",
                    shape: "circle",
                    type: "primary",
                    class: "mr-10px"
                  }),
                  _createVNode(_component_up_tag, {
                    text: "直角",
                    shape: "square",
                    type: "primary",
                    class: "mr-10px"
                  })
                ])
              ]),
              _createElementVNode("view", { class: "demo-block mt-12px" }, [
                _createElementVNode("text", { class: "demo-label" }, "可关闭标签"),
                _createElementVNode("view", { class: "flex-row items-center flex-wrap" }, [
                  $setup.showTag ? (_openBlock(), _createBlock(_component_up_tag, {
                    key: 0,
                    text: "点击关闭",
                    type: "primary",
                    closable: "",
                    class: "mr-10px",
                    onClose: $setup.closeTag
                  })) : _createCommentVNode("v-if", true)
                ])
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
const tag = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/demos/tag/tag.uvue"]]);
export {
  tag as default
};
//# sourceMappingURL=tag.js.map
