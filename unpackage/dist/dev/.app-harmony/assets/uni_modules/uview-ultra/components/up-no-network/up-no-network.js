import { _ as __easycom_0 } from "../up-icon/up-icon.js";
const { defineComponent, resolveDynamicComponent, openBlock, createBlock, withModifiers, withCtx, createElementVNode, createVNode, toDisplayString, createCommentVNode } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_1$1 } from "../up-button/up-button.js";
import { _ as __easycom_2 } from "../up-overlay/up-overlay.js";
import { p as propsNoNetwork } from "./props.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { m as getDeviceInfo, t as toast } from "../../libs/function/index.js";
import { t } from "../../libs/i18n/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = defineComponent({
  name: "up-no-network",
  mixins: [mpMixin, mixin, propsNoNetwork],
  data() {
    return {
      isConnected: true,
      networkType: "none",
      isIOS: false
    };
  },
  mounted() {
    this.isIOS = getDeviceInfo().platform === "ios";
    uni.onNetworkStatusChange((res) => {
      this.isConnected = res.isConnected;
      this.networkType = res.networkType;
      this.emitEvent(this.networkType);
    });
    uni.getNetworkType(new UTSJSONObject({
      success: (res) => {
        this.networkType = res.networkType;
        this.emitEvent(this.networkType);
        if (res.networkType == "none") {
          this.isConnected = false;
        } else {
          this.isConnected = true;
        }
      }
    }));
  },
  emits: ["disconnected", "connected", "retry"],
  methods: {
    t(s) {
      return t(s);
    },
    retry() {
      uni.getNetworkType(new UTSJSONObject({
        success: (res) => {
          this.networkType = res.networkType;
          this.emitEvent(this.networkType);
          if (res.networkType == "none") {
            toast(t("up.noNetwork.disconnect"));
            this.isConnected = false;
          } else {
            toast(t("up.noNetwork.connect"));
            this.isConnected = true;
          }
        }
      }));
      this.$emit("retry");
    },
    // 发出事件给父组件
    emitEvent(networkType) {
      this.$emit(networkType === "none" ? "disconnected" : "connected");
    },
    async openSettings() {
      if (this.networkType == "none") {
        this.openSystemSettings();
        return Promise.resolve(null);
      }
    },
    openAppSettings() {
      this.gotoAppSetting();
    },
    openSystemSettings() {
      if (this.isIOS) {
        this.gotoiOSSetting();
      } else {
        this.gotoAndroidSetting();
      }
    },
    network() {
    },
    gotoAppSetting() {
    },
    gotoiOSSetting() {
    },
    gotoAndroidSetting() {
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-no-network": { "": { "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "marginTop": -100 } }, "up-no-network__tips": { "": { "color": "#909193", "fontSize": 14, "marginTop": 15 } }, "up-no-network__app": { "": { "display": "flex", "flexDirection": "row", "marginTop": 6 } }, "up-no-network__app__setting": { "": { "color": "#c0c4cc", "fontSize": 13 } }, "up-no-network__app__to-setting": { "": { "fontSize": 13, "color": "var(--theme-color, #0957de)", "marginLeft": 3 } }, "up-no-network__retry": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "marginTop": 15 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0);
  const _component_up_button = resolveEasycom(resolveDynamicComponent("up-button"), __easycom_1$1);
  const _component_up_overlay = resolveEasycom(resolveDynamicComponent("up-overlay"), __easycom_2);
  return openBlock(), createBlock(_component_up_overlay, {
    show: !$data.isConnected,
    zIndex: _ctx.zIndex,
    onTouchmove: withModifiers(_ctx.noop, ["stop", "prevent"]),
    customStyle: {
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "center"
    }
  }, {
    default: withCtx(() => [
      createElementVNode("view", { class: "up-no-network" }, [
        createVNode(_component_up_icon, {
          name: _ctx.image,
          size: "150",
          imgMode: "widthFit",
          class: "up-no-network__error-icon"
        }, null, 8, ["name"]),
        createElementVNode(
          "text",
          { class: "up-no-network__tips" },
          toDisplayString(_ctx.tips),
          1
          /* TEXT */
        ),
        createCommentVNode(" 只有APP平台，才能跳转设置页，因为需要调用plus环境 "),
        createElementVNode("view", { class: "up-no-network__retry" }, [
          createVNode(_component_up_button, {
            size: "mini",
            text: $options.t("up.common.retry"),
            type: "primary",
            plain: "",
            onClick: $options.retry
          }, null, 8, ["text", "onClick"])
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["show", "zIndex", "onTouchmove"]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-no-network/up-no-network.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-no-network.js.map
