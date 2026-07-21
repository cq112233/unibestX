import { _ as __easycom_41 } from "../up-loading-icon/up-loading-icon.js";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, createVNode, withCtx, createElementVNode, normalizeClass, normalizeStyle, createBlock, createCommentVNode, toDisplayString } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_35 } from "../up-icon/up-icon.js";
import { _ as __easycom_3 } from "../up-gap/up-gap.js";
import { _ as __easycom_8 } from "../up-overlay/up-overlay.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { w as type2icon, e as getWindowInfo, d as deepMerge } from "../../libs/function/index.js";
import { c as color } from "../../libs/config/color.js";
import { h as hexToRgb } from "../../libs/function/colorGradient.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = defineComponent({
  name: "up-toast",
  mixins: [mpMixin, mixin],
  data() {
    return {
      isShow: false,
      timer: null,
      config: new UTSJSONObject({
        message: "",
        type: "",
        zIndex: 10090,
        duration: 2e3,
        icon: true,
        position: "center",
        complete: null,
        overlay: true,
        loading: false
        // 是否加载中状态
      }),
      tmpConfig: new UTSJSONObject({
        message: "",
        type: "",
        zIndex: 10090,
        duration: 2e3,
        icon: true,
        position: "center",
        complete: null,
        overlay: true,
        loading: false
      })
      // 将用户配置和内置配置合并后的临时配置变量
    };
  },
  computed: {
    iconName() {
      if (this.tmpConfig["icon"] == "" || this.tmpConfig["icon"] == "none") {
        return "";
      }
      if (this.tmpConfig["icon"] == true) {
        if (["error", "warning", "success", "primary"].includes(this.tmpConfig["type"])) {
          return type2icon(this.tmpConfig["type"]);
        } else {
          return "";
        }
      } else {
        return this.tmpConfig["icon"] != null ? this.tmpConfig["icon"].toString() : "";
      }
    },
    overlayStyle() {
      const style = new UTSJSONObject(
        {
          justifyContent: "center",
          alignItems: "center",
          display: "flex"
        }
        // 将遮罩设置为100%透明度，避免出现灰色背景
      );
      style["backgroundColor"] = "rgba(0, 0, 0, 0)";
      if (!this.tmpConfig["overlay"]) {
        style["pointerEvents"] = "none";
      }
      return style;
    },
    iconStyle() {
      const style = new UTSJSONObject(
        {}
        // 图标需要一个右边距，以跟右边的文字有隔开的距离
      );
      style["marginRight"] = "4px";
      return style;
    },
    loadingIconColor() {
      let colorTmp = "rgb(255, 255, 255)";
      if (["error", "warning", "success", "primary"].includes(this.tmpConfig["type"])) {
        colorTmp = hexToRgb(color[this.tmpConfig["type"]].toString()).toString();
      }
      return colorTmp;
    },
    // 内容盒子的样式
    contentStyle() {
      const windowHeight = getWindowInfo().windowHeight, style = new UTSJSONObject({});
      let value = 0;
      if (this.tmpConfig["position"] === "top") {
        value = -windowHeight * 0.25;
      } else if (this.tmpConfig["position"] === "bottom") {
        value = windowHeight * 0.25;
      }
      style["transform"] = `translateY(${value}px)`;
      return style;
    }
  },
  created() {
  },
  methods: {
    primary(message) {
      this.show(new UTSJSONObject({
        type: "primary",
        message
      }));
    },
    success(message) {
      this.show(new UTSJSONObject({
        type: "success",
        message
      }));
    },
    error(message) {
      this.show(new UTSJSONObject({
        type: "error",
        message
      }));
    },
    warning(message) {
      this.show(new UTSJSONObject({
        type: "warning",
        message
      }));
    },
    // 显示toast组件，由父组件通过this.$refs.xxx.show(options)形式调用
    show(options) {
      this.tmpConfig = deepMerge(this.config, options);
      this.clearTimer();
      this.isShow = true;
      if (this.tmpConfig["duration"] != -1) {
        this.timer = setTimeout(() => {
          this.clearTimer();
          const complete = this.tmpConfig["complete"];
          if (typeof complete === "function") {
            complete();
          }
        }, this.tmpConfig["duration"]);
      }
    },
    // 隐藏toast组件，由父组件通过this.$refs.xxx.hide()形式调用
    hide() {
      this.clearTimer();
    },
    clearTimer() {
      var _a;
      this.isShow = false;
      clearTimeout((_a = this.timer) !== null && _a !== void 0 ? _a : 0);
      this.timer = null;
    }
  },
  beforeUnmount() {
    this.clearTimer();
  }
});
const _style_0 = { "up-toast__content": { "": { "display": "flex", "flexDirection": "row", "paddingTop": 12, "paddingRight": 20, "paddingBottom": 12, "paddingLeft": 20, "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4, "backgroundColor": "#585858", "alignItems": "center", "maxWidth": "600rpx", "position": "relative" } }, "up-toast__content--loading": { "": { "flexDirection": "column", "paddingTop": 20, "paddingRight": 20, "paddingBottom": 20, "paddingLeft": 20 } }, "up-toast__content__text": { "": { "color": "#ffffff", "fontSize": 15, "lineHeight": "15px" } }, "up-toast__content__text--default": { "": { "color": "#ffffff" } }, "up-toast__content__text--error": { "": { "color": "#f56c6c" } }, "up-toast__content__text--primary": { "": { "color": "var(--theme-color, #0957de)" } }, "up-toast__content__text--success": { "": { "color": "#5ac725" } }, "up-toast__content__text--warning": { "": { "color": "#f9ae3d" } }, "up-type-primary": { "": { "backgroundColor": "#ecf5ff", "borderTopColor": "#d7eafe", "borderRightColor": "#d7eafe", "borderBottomColor": "#d7eafe", "borderLeftColor": "#d7eafe", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "up-type-success": { "": { "backgroundColor": "#dbf1e1", "borderTopColor": "#BEF5C8", "borderRightColor": "#BEF5C8", "borderBottomColor": "#BEF5C8", "borderLeftColor": "#BEF5C8", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "up-type-error": { "": { "backgroundColor": "#fef0f0", "borderTopColor": "#fde2e2", "borderRightColor": "#fde2e2", "borderBottomColor": "#fde2e2", "borderLeftColor": "#fde2e2", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "up-type-warning": { "": { "backgroundColor": "#fdf6ec", "borderTopColor": "#faecd8", "borderRightColor": "#faecd8", "borderBottomColor": "#faecd8", "borderLeftColor": "#faecd8", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "up-type-default": { "": { "backgroundColor": "#585858" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_loading_icon = resolveEasycom(resolveDynamicComponent("up-loading-icon"), __easycom_41);
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_35);
  const _component_up_gap = resolveEasycom(resolveDynamicComponent("up-gap"), __easycom_3);
  const _component_up_overlay = resolveEasycom(resolveDynamicComponent("up-overlay"), __easycom_8);
  return openBlock(), createElementBlock("view", { class: "up-toast" }, [
    createVNode(_component_up_overlay, {
      show: $data.isShow,
      zIndex: $data.tmpConfig["zIndex"],
      "custom-style": $options.overlayStyle
    }, {
      default: withCtx(() => [
        createElementVNode(
          "view",
          {
            class: normalizeClass(["up-toast__content", ["up-type-" + $data.tmpConfig["type"], $data.tmpConfig["type"] === "loading" || $data.tmpConfig["loading"] ? "up-toast__content--loading" : ""]]),
            style: normalizeStyle([$options.contentStyle])
          },
          [
            $data.tmpConfig["type"] === "loading" ? (openBlock(), createBlock(_component_up_loading_icon, {
              key: 0,
              mode: "circle",
              color: "rgb(255, 255, 255)",
              inactiveColor: "rgb(120, 120, 120)",
              size: "25"
            })) : $data.tmpConfig["type"] !== "defalut" && $options.iconName != "" ? (openBlock(), createBlock(_component_up_icon, {
              key: 1,
              name: $options.iconName,
              size: "17",
              color: $data.tmpConfig["type"],
              customStyle: $options.iconStyle
            }, null, 8, ["name", "color", "customStyle"])) : createCommentVNode("v-if", true),
            $data.tmpConfig["type"] === "loading" || $data.tmpConfig["loading"] ? (openBlock(), createBlock(_component_up_gap, {
              key: 2,
              height: "12",
              bgColor: "transparent"
            })) : createCommentVNode("v-if", true),
            createElementVNode(
              "text",
              {
                class: normalizeClass(["up-toast__content__text", ["up-toast__content__text--" + $data.tmpConfig["type"]]]),
                style: { "max-width": "400rpx" }
              },
              toDisplayString($data.tmpConfig["message"]),
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
const __easycom_9 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-toast/up-toast.uvue"]]);
export {
  __easycom_9 as _
};
//# sourceMappingURL=up-toast.js.map
