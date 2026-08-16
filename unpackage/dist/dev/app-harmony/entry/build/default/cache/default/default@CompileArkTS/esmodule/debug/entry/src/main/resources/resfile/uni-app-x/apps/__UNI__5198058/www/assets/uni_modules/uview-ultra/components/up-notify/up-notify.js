import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-status-bar/up-status-bar&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_0$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { _ as __easycom_1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-transition/up-transition&";
import { a as addUnit, d as deepMerge, b as addStyle, g as getPx } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref, onBeforeUnmount } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-notify"
  },
  __name: "up-notify",
  props: {
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  setup(__props, _a) {
    var __expose = _a.expose;
    const props = __props;
    const open = ref(false);
    const timer = ref(null);
    const config = new UTSJSONObject({
      top: 0,
      type: "primary",
      color: "#ffffff",
      bgColor: "",
      message: "",
      duration: 3e3,
      fontSize: 15,
      safeAreaInsetTop: false
    });
    const tmpConfig = ref(new UTSJSONObject({
      top: 0,
      type: "primary",
      color: "#ffffff",
      bgColor: "",
      message: "",
      duration: 3e3,
      fontSize: 15,
      safeAreaInsetTop: false
    }));
    const containerStyle = computed(() => {
      let top = 0;
      const topValue = tmpConfig.value["top"];
      const isTopZero = topValue != null && parseFloat(topValue.toString()) == 0;
      return new UTSJSONObject({
        top: addUnit(isTopZero ? top : topValue),
        position: "fixed",
        left: 0,
        right: 0,
        zIndex: 10076
      });
    });
    const backgroundColor = computed(() => {
      var _a2, _b;
      const style = new UTSJSONObject({});
      const bg = (_b = (_a2 = tmpConfig.value["bgColor"]) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b !== void 0 ? _b : "";
      if (bg != "") {
        style["backgroundColor"] = bg;
      }
      return style;
    });
    function clearTimer() {
      open.value = false;
      if (timer.value != null) {
        clearTimeout(timer.value);
        timer.value = null;
      }
    }
    function show(options) {
      var _a2;
      tmpConfig.value = deepMerge(config, options);
      clearTimer();
      open.value = true;
      const dur = parseInt(((_a2 = tmpConfig.value["duration"]) !== null && _a2 !== void 0 ? _a2 : 3e3).toString());
      if (dur > 0) {
        timer.value = setTimeout(() => {
          open.value = false;
          clearTimer();
          const complete = tmpConfig.value["complete"];
          if (typeof complete === "function") {
            complete();
          }
        }, dur);
      }
    }
    function close() {
      clearTimer();
    }
    function primary(message) {
      show(new UTSJSONObject({ type: "primary", message }));
    }
    function success(message) {
      show(new UTSJSONObject({ type: "success", message }));
    }
    function error(message) {
      show(new UTSJSONObject({ type: "error", message }));
    }
    function warning(message) {
      show(new UTSJSONObject({ type: "warning", message }));
    }
    onBeforeUnmount(() => {
      clearTimer();
    });
    __expose({
      show,
      close,
      primary,
      success,
      error,
      warning
    });
    const __returned__ = { props, open, timer, config, tmpConfig, containerStyle, backgroundColor, clearTimer, show, close, primary, success, error, warning, get addUnit() {
      return addUnit;
    }, get addStyle() {
      return addStyle;
    }, get getPx() {
      return getPx;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-notify": { "": { "paddingTop": 8, "paddingRight": 10, "paddingBottom": 8, "paddingLeft": 10 } }, "up-notify__warpper": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "textAlign": "center", "justifyContent": "center" } }, "up-notify__warpper__text": { "": { "fontSize": 15, "textAlign": "center" } }, "up-notify--primary": { "": { "backgroundColor": "var(--theme-color, #0957de)" } }, "up-notify--success": { "": { "backgroundColor": "#5ac725" } }, "up-notify--error": { "": { "backgroundColor": "#f56c6c" } }, "up-notify--warning": { "": { "backgroundColor": "#f9ae3d" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, renderSlot: _renderSlot, toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, normalizeClass: _normalizeClass, withCtx: _withCtx } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_status_bar = resolveEasycom(__resolveDynamicComponent("up-status-bar"), __easycom_0);
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0$1);
  const _component_up_transition = resolveEasycom(__resolveDynamicComponent("up-transition"), __easycom_1);
  return _openBlock(), _createBlock(_component_up_transition, {
    mode: "slide-down",
    customStyle: $setup.containerStyle,
    show: $setup.open
  }, {
    default: _withCtx(() => [
      _createElementVNode(
        "view",
        {
          class: _normalizeClass(["up-notify", [`up-notify--${$setup.tmpConfig["type"]}`]]),
          style: _normalizeStyle([$setup.backgroundColor, $setup.addStyle($props.customStyle)])
        },
        [
          $setup.tmpConfig["safeAreaInsetTop"] ? (_openBlock(), _createBlock(_component_up_status_bar, { key: 0 })) : _createCommentVNode("v-if", true),
          _createElementVNode("view", { class: "up-notify__warpper" }, [
            _renderSlot(_ctx.$slots, "icon", {}, () => [
              ["success", "warning", "error"].includes($setup.tmpConfig["type"].toString()) ? (_openBlock(), _createBlock(_component_up_icon, {
                key: 0,
                name: $setup.tmpConfig["icon"],
                color: $setup.tmpConfig["color"],
                size: 1.3 * parseFloat($setup.getPx($setup.tmpConfig["fontSize"] ?? "0").toString()),
                customStyle: { marginRight: "4px" }
              }, null, 8, ["name", "color", "size"])) : _createCommentVNode("v-if", true)
            ]),
            _createElementVNode(
              "text",
              {
                class: "up-notify__warpper__text",
                style: _normalizeStyle({
                  fontSize: $setup.addUnit($setup.tmpConfig["fontSize"] ?? "0"),
                  color: $setup.tmpConfig["color"] ?? ""
                })
              },
              _toDisplayString($setup.tmpConfig["message"]),
              5
              /* TEXT, STYLE */
            )
          ])
        ],
        6
        /* CLASS, STYLE */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["customStyle", "show"]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-notify/up-notify.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-notify.js.map
