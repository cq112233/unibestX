import { s as safeAreaInsets, a as systemInfo } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/systemInfo&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "NavBar",
  props: {
    title: {
      type: String,
      default: ""
    },
    titleColor: {
      type: String,
      default: "#1e293b"
    },
    bgColor: {
      type: String,
      default: "#ffffff"
    },
    fixed: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: Boolean,
      default: true
    },
    showBack: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const props = __props;
    const statusBarHeight = computed(() => {
      const insets = safeAreaInsets.value;
      if (insets != null && insets.top > 0) {
        return insets.top;
      }
      const info = systemInfo.value;
      if (info != null && info.statusBarHeight > 0) {
        return info.statusBarHeight;
      }
      return 0;
    });
    function handleBack() {
      const pages = getCurrentPages();
      if (pages.length > 1) {
        uni.navigateBack(new UTSJSONObject({
          delta: 1
        }));
      } else {
        uni.reLaunch({
          url: "/src/pages/index/index"
        });
      }
    }
    const __returned__ = { props, statusBarHeight, handleBack };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"navbar-container":{"":{"width":"100%","display":"flex","flexDirection":"column"}},"navbar-fixed":{"":{"position":"fixed","top":0,"left":0,"right":0,"zIndex":999}},"navbar-content":{"":{"height":44,"display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center","position":"relative","width":"100%"}},"navbar-left":{"":{"position":"absolute","left":0,"top":0,"bottom":0,"width":60,"display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"flex-start","zIndex":10}},"back-btn-wrapper":{"":{"paddingTop":10,"paddingRight":15,"paddingBottom":10,"paddingLeft":15,"display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center"}},"back-arrow":{"":{"width":10,"height":10,"borderLeftWidth":2,"borderLeftStyle":"solid","borderLeftColor":"#1e293b","borderBottomWidth":2,"borderBottomStyle":"solid","borderBottomColor":"#1e293b","transform":"rotate(45deg)"}},"navbar-title":{"":{"display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center","flexGrow":1,"flexShrink":1,"flexBasis":"0%","height":"100%","paddingLeft":60,"paddingRight":60}},"title-text":{"":{"fontSize":16,"fontWeight":700,"textOverflow":"ellipsis"}},"navbar-right":{"":{"position":"absolute","right":0,"top":0,"bottom":0,"width":60,"display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"flex-end","zIndex":10,"paddingRight":15}},"flex":{"":{"display":"flex"}}};
const { normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, renderSlot: _renderSlot, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, toDisplayString: _toDisplayString, normalizeClass: _normalizeClass } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("view", null, [
    _createElementVNode(
      "view",
      {
        class: _normalizeClass($props.fixed ? "navbar-container navbar-fixed" : "navbar-container"),
        style: _normalizeStyle({
          backgroundColor: $props.bgColor,
          borderBottomWidth: $props.border ? "1px" : "0px",
          borderBottomStyle: $props.border ? "solid" : "none",
          borderBottomColor: $props.border ? "#e2e8f0" : "transparent"
        })
      },
      [
        _createElementVNode(
          "view",
          {
            style: _normalizeStyle({ height: `${$setup.statusBarHeight}px` })
          },
          null,
          4
          /* STYLE */
        ),
        _createElementVNode("view", { class: "navbar-content" }, [
          _createElementVNode("view", {
            class: "navbar-left",
            onClick: $setup.handleBack
          }, [
            _renderSlot(_ctx.$slots, "left", {}, () => [
              $props.showBack ? (_openBlock(), _createElementBlock("view", {
                key: 0,
                class: "back-btn-wrapper"
              }, [
                _createElementVNode(
                  "view",
                  {
                    class: "back-arrow",
                    style: _normalizeStyle({ borderLeftColor: $props.titleColor, borderBottomColor: $props.titleColor })
                  },
                  null,
                  4
                  /* STYLE */
                )
              ])) : _createCommentVNode("v-if", true)
            ])
          ]),
          _createElementVNode("view", { class: "navbar-title" }, [
            _renderSlot(_ctx.$slots, "default", {}, () => [
              _createElementVNode(
                "text",
                {
                  class: "title-text",
                  style: _normalizeStyle({ color: $props.titleColor })
                },
                _toDisplayString($props.title),
                5
                /* TEXT, STYLE */
              )
            ])
          ]),
          _createElementVNode("view", { class: "navbar-right" }, [
            _renderSlot(_ctx.$slots, "right")
          ])
        ])
      ],
      6
      /* CLASS, STYLE */
    ),
    $props.fixed && $props.placeholder ? (_openBlock(), _createElementBlock(
      "view",
      {
        key: 0,
        style: _normalizeStyle({ height: `${$setup.statusBarHeight + 44}px` })
      },
      null,
      4
      /* STYLE */
    )) : _createCommentVNode("v-if", true)
  ]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/components/NavBar/NavBar.uvue"]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=NavBar.js.map
