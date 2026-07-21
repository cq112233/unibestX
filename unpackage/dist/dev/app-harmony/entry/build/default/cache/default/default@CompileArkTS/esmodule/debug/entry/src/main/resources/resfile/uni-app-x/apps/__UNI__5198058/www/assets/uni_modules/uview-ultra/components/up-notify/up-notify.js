import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-status-bar/up-status-bar&";
const { defineComponent, resolveDynamicComponent, openBlock, createBlock, withCtx, createElementVNode, normalizeClass, normalizeStyle, createCommentVNode, renderSlot, toDisplayString } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_0$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { _ as __easycom_2$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-transition/up-transition&";
import { p as propsNotify } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-notify/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-notify/notify&";
import { a as addUnit, f as getPx, b as addStyle, h as deepMerge } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
let notifyPropCrt = defProps["notify"];
class tmpConfigType extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          top: { type: Number, optional: false },
          bgColor: { type: String, optional: false },
          color: { type: String, optional: false },
          fontSize: { type: "Unknown", optional: false },
          safeAreaInsetTop: { type: Boolean, optional: false },
          duration: { type: Number, optional: false }
        };
      },
      name: "tmpConfigType"
    };
  }
  constructor(options, metadata = tmpConfigType.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.top = this.__props__.top;
    this.bgColor = this.__props__.bgColor;
    this.color = this.__props__.color;
    this.fontSize = this.__props__.fontSize;
    this.safeAreaInsetTop = this.__props__.safeAreaInsetTop;
    this.duration = this.__props__.duration;
    delete this.__props__;
  }
}
const _sfc_main = defineComponent({
  name: "up-notify",
  mixins: [mpMixin, mixin, propsNotify],
  data() {
    return {
      // 是否展示组件
      open: false,
      timer: null,
      config: new UTSJSONObject({
        // 到顶部的距离
        top: notifyPropCrt["top"],
        // type主题，primary，success，warning，error
        type: notifyPropCrt["type"],
        // 字体颜色
        color: notifyPropCrt["color"],
        // 背景颜色
        bgColor: notifyPropCrt["bgColor"],
        // 展示的文字内容
        message: notifyPropCrt["message"],
        // 展示时长，为0时不消失，单位ms
        duration: notifyPropCrt["duration"],
        // 字体大小
        fontSize: notifyPropCrt["fontSize"],
        // 是否留出顶部安全距离（状态栏高度）
        safeAreaInsetTop: notifyPropCrt["safeAreaInsetTop"]
      }),
      // 合并后的配置，避免多次调用组件后，可能会复用之前使用的配置参数
      tmpConfig: new UTSJSONObject({
        top: notifyPropCrt["top"],
        type: notifyPropCrt["type"],
        color: notifyPropCrt["color"],
        bgColor: notifyPropCrt["bgColor"],
        message: "",
        duration: notifyPropCrt["duration"],
        fontSize: notifyPropCrt["fontSize"],
        safeAreaInsetTop: notifyPropCrt["safeAreaInsetTop"]
      })
    };
  },
  computed: {
    containerStyle() {
      let top = 0;
      const topValue = this.tmpConfig["top"];
      const isTopZero = topValue != null && parseFloat(topValue.toString()) == 0;
      const style = new UTSJSONObject({
        top: addUnit(isTopZero ? top : topValue),
        // 因为组件底层为up-transition组件，必须将其设置为fixed定位
        // 让其出现在导航栏底部
        position: "fixed",
        left: 0,
        right: 0,
        zIndex: 10076
      });
      return style;
    },
    // 组件背景颜色
    backgroundColor() {
      const style = new UTSJSONObject({});
      if (this.tmpConfig["bgColor"] != "") {
        style.backgroundColor = this.tmpConfig["bgColor"];
      }
      return style;
    },
    // 默认主题下的图标
    icon() {
      let icon = "";
      if (this.tmpConfig["type"] === "success") {
        icon = "checkmark-circle";
      } else if (this.tmpConfig["type"] === "error") {
        icon = "close-circle";
      } else if (this.tmpConfig["type"] === "warning") {
        icon = "error-circle";
      }
      return icon;
    }
  },
  created() {
  },
  methods: {
    getPx(e = null) {
      return getPx(e);
    },
    addStyle(e = null) {
      return addStyle(e);
    },
    addUnit(e = null) {
      return addUnit(e);
    },
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
    show(options) {
      this.tmpConfig = deepMerge(this.config, options);
      this.clearTimer();
      this.open = true;
      if (parseInt(this.tmpConfig["duration"].toString()) > 0) {
        this.timer = setTimeout(() => {
          this.open = false;
          this.clearTimer();
          const complete = this.tmpConfig["complete"];
          if (typeof complete === "function") {
            complete();
          }
        }, parseInt(this.tmpConfig["duration"].toString()));
      }
    },
    // 关闭notify
    close() {
      this.clearTimer();
    },
    clearTimer() {
      var _a;
      this.open = false;
      clearTimeout((_a = this.timer) !== null && _a !== void 0 ? _a : 0);
      this.timer = null;
    }
  },
  beforeUnmount() {
    this.clearTimer();
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-notify": { "": { "paddingTop": 8, "paddingRight": 10, "paddingBottom": 8, "paddingLeft": 10 } }, "up-notify__warpper": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "textAlign": "center", "justifyContent": "center" } }, "up-notify__warpper__text": { "": { "fontSize": 15, "textAlign": "center" } }, "up-notify--primary": { "": { "backgroundColor": "var(--theme-color, #0957de)" } }, "up-notify--success": { "": { "backgroundColor": "#5ac725" } }, "up-notify--error": { "": { "backgroundColor": "#f56c6c" } }, "up-notify--warning": { "": { "backgroundColor": "#f9ae3d" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_status_bar = resolveEasycom(resolveDynamicComponent("up-status-bar"), __easycom_0);
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0$1);
  const _component_up_transition = resolveEasycom(resolveDynamicComponent("up-transition"), __easycom_2$1);
  return openBlock(), createBlock(_component_up_transition, {
    mode: "slide-down",
    customStyle: $options.containerStyle,
    show: $data.open
  }, {
    default: withCtx(() => [
      createElementVNode(
        "view",
        {
          class: normalizeClass(["up-notify", [`up-notify--${$data.tmpConfig["type"]}`]]),
          style: normalizeStyle([$options.backgroundColor, $options.addStyle(_ctx.customStyle)])
        },
        [
          $data.tmpConfig["safeAreaInsetTop"] ? (openBlock(), createBlock(_component_up_status_bar, { key: 0 })) : createCommentVNode("v-if", true),
          createElementVNode("view", { class: "up-notify__warpper" }, [
            renderSlot(_ctx.$slots, "icon", {}, () => [
              ["success", "warning", "error"].includes($data.tmpConfig["type"].toString()) ? (openBlock(), createBlock(_component_up_icon, {
                key: 0,
                name: $data.tmpConfig["icon"],
                color: $data.tmpConfig["color"],
                size: 1.3 * parseFloat($options.getPx($data.tmpConfig["fontSize"] ?? "0").toString()),
                customStyle: { marginRight: "4px" }
              }, null, 8, ["name", "color", "size"])) : createCommentVNode("v-if", true)
            ]),
            createElementVNode(
              "text",
              {
                class: "up-notify__warpper__text",
                style: normalizeStyle({
                  fontSize: $options.addUnit($data.tmpConfig["fontSize"] ?? "0"),
                  color: $data.tmpConfig["color"] ?? ""
                })
              },
              toDisplayString($data.tmpConfig["message"]),
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
