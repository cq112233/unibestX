import { _ as __easycom_1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-gap/up-gap&";
import { _ as __easycom_2$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-overlay/up-overlay&";
import { y as type2icon, e as getWindowInfo, d as deepMerge } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/config/color&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/colorGradient&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref, onBeforeUnmount } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-toast"
  },
  __name: "up-toast",
  setup(__props, _a) {
    var __expose = _a.expose;
    const isShow = ref(false);
    const timer = ref(null);
    const config = new UTSJSONObject({
      message: "",
      type: "",
      zIndex: 10090,
      duration: 2e3,
      icon: true,
      position: "center",
      complete: null,
      overlay: true,
      loading: false
    });
    const tmpConfig = ref(new UTSJSONObject({
      message: "",
      type: "",
      zIndex: 10090,
      duration: 2e3,
      icon: true,
      position: "center",
      complete: null,
      overlay: true,
      loading: false
    }));
    const iconName = computed(() => {
      var _a2;
      const icon = tmpConfig.value["icon"];
      const type = (_a2 = tmpConfig.value["type"]) !== null && _a2 !== void 0 ? _a2 : "";
      if (icon == "" || icon == "none") {
        return "";
      }
      if (icon == true) {
        if (["error", "warning", "success", "primary"].includes(type)) {
          return type2icon(type);
        } else {
          return "";
        }
      } else {
        return icon != null ? icon.toString() : "";
      }
    });
    const overlayStyle = computed(() => {
      const style = new UTSJSONObject({
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        backgroundColor: "rgba(0, 0, 0, 0)"
      });
      if (!tmpConfig.value["overlay"]) {
        style["pointerEvents"] = "none";
      }
      return style;
    });
    const iconStyle = computed(() => {
      const style = new UTSJSONObject({
        marginRight: "4px"
      });
      return style;
    });
    const contentStyle = computed(() => {
      var _a2, _b;
      const windowHeight = getWindowInfo().windowHeight;
      const style = new UTSJSONObject({});
      let value = 0;
      const position = (_b = (_a2 = tmpConfig.value["position"]) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b !== void 0 ? _b : "";
      if (position === "top") {
        value = -windowHeight * 0.25;
      } else if (position === "bottom") {
        value = windowHeight * 0.25;
      }
      style["transform"] = `translateY(${value}px)`;
      return style;
    });
    function clearTimer() {
      isShow.value = false;
      if (timer.value != null) {
        clearTimeout(timer.value);
        timer.value = null;
      }
    }
    function show(options) {
      tmpConfig.value = deepMerge(config, options);
      clearTimer();
      isShow.value = true;
      const duration = tmpConfig.value["duration"];
      if (duration != -1) {
        timer.value = setTimeout(() => {
          clearTimer();
          const complete = tmpConfig.value["complete"];
          if (typeof complete === "function") {
            complete();
          }
        }, duration);
      }
    }
    function hide() {
      clearTimer();
    }
    function primary(message) {
      show(new UTSJSONObject({
        type: "primary",
        message
      }));
    }
    function success(message) {
      show(new UTSJSONObject({
        type: "success",
        message
      }));
    }
    function error(message) {
      show(new UTSJSONObject({
        type: "error",
        message
      }));
    }
    function warning(message) {
      show(new UTSJSONObject({
        type: "warning",
        message
      }));
    }
    onBeforeUnmount(() => {
      clearTimer();
    });
    __expose({
      show,
      hide,
      primary,
      success,
      error,
      warning
    });
    const __returned__ = { isShow, timer, config, tmpConfig, iconName, overlayStyle, iconStyle, contentStyle, clearTimer, show, hide, primary, success, error, warning };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "up-toast__content": { "": { "display": "flex", "flexDirection": "row", "paddingTop": 12, "paddingRight": 20, "paddingBottom": 12, "paddingLeft": 20, "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4, "backgroundColor": "#585858", "alignItems": "center", "maxWidth": "600rpx", "position": "relative" } }, "up-toast__content--loading": { "": { "flexDirection": "column", "paddingTop": 20, "paddingRight": 20, "paddingBottom": 20, "paddingLeft": 20 } }, "up-toast__content__text": { "": { "color": "#ffffff", "fontSize": 15, "lineHeight": "15px" } }, "up-toast__content__text--default": { "": { "color": "#ffffff" } }, "up-toast__content__text--error": { "": { "color": "#f56c6c" } }, "up-toast__content__text--primary": { "": { "color": "var(--theme-color, #0957de)" } }, "up-toast__content__text--success": { "": { "color": "#5ac725" } }, "up-toast__content__text--warning": { "": { "color": "#f9ae3d" } }, "up-type-primary": { "": { "backgroundColor": "#ecf5ff", "borderTopColor": "#d7eafe", "borderRightColor": "#d7eafe", "borderBottomColor": "#d7eafe", "borderLeftColor": "#d7eafe", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "up-type-success": { "": { "backgroundColor": "#dbf1e1", "borderTopColor": "#BEF5C8", "borderRightColor": "#BEF5C8", "borderBottomColor": "#BEF5C8", "borderLeftColor": "#BEF5C8", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "up-type-error": { "": { "backgroundColor": "#fef0f0", "borderTopColor": "#fde2e2", "borderRightColor": "#fde2e2", "borderBottomColor": "#fde2e2", "borderLeftColor": "#fde2e2", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "up-type-warning": { "": { "backgroundColor": "#fdf6ec", "borderTopColor": "#faecd8", "borderRightColor": "#faecd8", "borderBottomColor": "#faecd8", "borderLeftColor": "#faecd8", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "up-type-default": { "": { "backgroundColor": "#585858" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, toDisplayString: _toDisplayString, normalizeClass: _normalizeClass, createElementVNode: _createElementVNode, normalizeStyle: _normalizeStyle, withCtx: _withCtx, createVNode: _createVNode, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_loading_icon = resolveEasycom(__resolveDynamicComponent("up-loading-icon"), __easycom_1);
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  const _component_up_gap = resolveEasycom(__resolveDynamicComponent("up-gap"), __easycom_1$1);
  const _component_up_overlay = resolveEasycom(__resolveDynamicComponent("up-overlay"), __easycom_2$1);
  return _openBlock(), _createElementBlock("view", { class: "up-toast" }, [
    _createVNode(_component_up_overlay, {
      show: $setup.isShow,
      zIndex: $setup.tmpConfig["zIndex"],
      "custom-style": $setup.overlayStyle
    }, {
      default: _withCtx(() => [
        _createElementVNode(
          "view",
          {
            class: _normalizeClass(["up-toast__content", ["up-type-" + $setup.tmpConfig["type"], $setup.tmpConfig["type"] === "loading" || $setup.tmpConfig["loading"] ? "up-toast__content--loading" : ""]]),
            style: _normalizeStyle([$setup.contentStyle])
          },
          [
            $setup.tmpConfig["type"] === "loading" ? (_openBlock(), _createBlock(_component_up_loading_icon, {
              key: 0,
              mode: "circle",
              color: "rgb(255, 255, 255)",
              inactiveColor: "rgb(120, 120, 120)",
              size: "25"
            })) : $setup.tmpConfig["type"] !== "defalut" && $setup.iconName != "" ? (_openBlock(), _createBlock(_component_up_icon, {
              key: 1,
              name: $setup.iconName,
              size: "17",
              color: $setup.tmpConfig["type"],
              customStyle: $setup.iconStyle
            }, null, 8, ["name", "color", "customStyle"])) : _createCommentVNode("v-if", true),
            $setup.tmpConfig["type"] === "loading" || $setup.tmpConfig["loading"] ? (_openBlock(), _createBlock(_component_up_gap, {
              key: 2,
              height: "12",
              bgColor: "transparent"
            })) : _createCommentVNode("v-if", true),
            _createElementVNode(
              "text",
              {
                class: _normalizeClass(["up-toast__content__text", ["up-toast__content__text--" + $setup.tmpConfig["type"]]]),
                style: { "max-width": "400rpx" }
              },
              _toDisplayString($setup.tmpConfig["message"]),
              3
              /* TEXT, CLASS */
            )
          ],
          6
          /* CLASS, STYLE */
        )
      ]),
      _: 1
      /* STABLE */
    }, 8, ["show", "zIndex", "custom-style"])
  ]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-toast/up-toast.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-toast.js.map
