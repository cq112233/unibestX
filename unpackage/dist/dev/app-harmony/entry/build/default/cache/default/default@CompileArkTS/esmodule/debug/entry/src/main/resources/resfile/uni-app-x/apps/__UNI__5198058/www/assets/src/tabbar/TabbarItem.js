import { _ as __easycom_1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uni-icons/components/uni-icons/uni-icons&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/tabbar/types&";
import { c as curIdx, t as themeColor } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/tabbar/store&";
import { $ as $t } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/i18n&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const inactiveColor = "#999999";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "TabbarItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    isBulge: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const props = __props;
    const tabbarItem = computed(() => {
      return props.item;
    });
    function getIcon() {
      if (curIdx.value == props.index && tabbarItem.value.iconActive.length > 0) {
        return tabbarItem.value.iconActive;
      }
      return tabbarItem.value.icon;
    }
    function getActiveColor() {
      return curIdx.value == props.index ? themeColor.value : inactiveColor;
    }
    function isDotBadge() {
      return tabbarItem.value.badge != null && tabbarItem.value.badge == "dot";
    }
    function isNumberBadge() {
      return tabbarItem.value.badge != null && tabbarItem.value.badge != "dot";
    }
    function getBadgeText() {
      const badge = tabbarItem.value.badge;
      if (badge == null || badge == "dot")
        return "";
      if (typeof badge == "number") {
        const num = badge;
        if (num > 99)
          return "99+";
        return `${num}`;
      }
      return `${badge}`;
    }
    function getText() {
      return $t(tabbarItem.value.text);
    }
    const __returned__ = { props, inactiveColor, tabbarItem, getIcon, getActiveColor, isDotBadge, isNumberBadge, getBadgeText, getText };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "tabbar-item-inner": { "": { "alignItems": "center", "justifyContent": "center", "position": "relative" } }, "icon-normal": { "": { "width": 24, "height": 24 } }, "tabbar-text": { "": { "fontSize": 10, "marginTop": 2, "textAlign": "center" } }, "badge-dot": { "": { "position": "absolute", "top": 0, "right": 0, "width": 8, "height": 8, "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8, "backgroundColor": "#f56c6c" } }, "badge-count": { "": { "position": "absolute", "top": 0, "right": -6, "height": 16, "paddingLeft": 4, "paddingRight": 4, "borderTopLeftRadius": 16, "borderTopRightRadius": 16, "borderBottomRightRadius": 16, "borderBottomLeftRadius": 16, "backgroundColor": "#f56c6c", "alignItems": "center", "justifyContent": "center" } }, "badge-count-text": { "": { "fontSize": 10, "color": "#ffffff", "textAlign": "center" } }, "bulge-item": { "": { "position": "relative", "width": "100%", "height": 80, "alignItems": "center" } }, "bulge-btn": { "": { "position": "absolute", "top": 18, "width": 52, "height": 52, "borderTopLeftRadius": 26, "borderTopRightRadius": 26, "borderBottomRightRadius": 26, "borderBottomLeftRadius": 26, "backgroundImage": "linear-gradient(to bottom right, #0ea5e9, #2563eb)", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "borderTopColor": "rgba(255,255,255,0.5)", "borderRightColor": "rgba(255,255,255,0.5)", "borderBottomColor": "rgba(255,255,255,0.5)", "borderLeftColor": "rgba(255,255,255,0.5)", "alignItems": "center", "justifyContent": "center", "boxShadow": "0px 3px 8px rgba(37, 99, 235, 0.25)" } }, "ai-btn-text": { "": { "color": "#ffffff", "fontSize": 14, "fontWeight": 600, "letterSpacing": 1, "textAlign": "center" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(__resolveDynamicComponent("uni-icons"), __easycom_1);
  return _openBlock(), _createElementBlock("view", {
    class: "tabbar-item-wrapper",
    style: { "width": "100%", "height": "100%", "align-items": "center", "justify-content": "center" }
  }, [
    $setup.props.isBulge ? (_openBlock(), _createElementBlock("view", {
      key: 0,
      class: "bulge-item"
    }, [
      _createElementVNode("view", { class: "bulge-btn" }, [
        _createElementVNode("text", { class: "ai-btn-text" }, "AI")
      ])
    ])) : (_openBlock(), _createElementBlock("view", {
      key: 1,
      class: "tabbar-item-inner"
    }, [
      $setup.tabbarItem.iconType === "image" ? (_openBlock(), _createElementBlock("image", {
        key: 0,
        src: $setup.getIcon(),
        mode: "scaleToFill",
        class: "icon-normal"
      }, null, 8, ["src"])) : _createCommentVNode("v-if", true),
      $setup.tabbarItem.iconType === "icon" ? (_openBlock(), _createElementBlock("view", {
        key: 1,
        class: "icon-normal",
        style: { "align-items": "center", "justify-content": "center" }
      }, [
        _createVNode(_component_uni_icons, {
          type: $setup.getIcon(),
          size: 24,
          color: $setup.getActiveColor()
        }, null, 8, ["type", "color"])
      ])) : _createCommentVNode("v-if", true),
      _createElementVNode(
        "text",
        {
          class: "tabbar-text",
          style: _normalizeStyle({ color: $setup.getActiveColor() })
        },
        _toDisplayString($setup.getText()),
        5
        /* TEXT, STYLE */
      ),
      $setup.isDotBadge() ? (_openBlock(), _createElementBlock("view", {
        key: 2,
        class: "badge-dot"
      })) : _createCommentVNode("v-if", true),
      $setup.isNumberBadge() ? (_openBlock(), _createElementBlock("view", {
        key: 3,
        class: "badge-count"
      }, [
        _createElementVNode(
          "text",
          { class: "badge-count-text" },
          _toDisplayString($setup.getBadgeText()),
          1
          /* TEXT */
        )
      ])) : _createCommentVNode("v-if", true)
    ]))
  ]);
}
const TabbarItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/tabbar/TabbarItem.uvue"]]);
export {
  TabbarItem as T
};
//# sourceMappingURL=TabbarItem.js.map
