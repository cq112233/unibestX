"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upButton_button = require("./button.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_function_throttle = require("../../libs/function/throttle.js");
const uni_modules_uviewUltra_libs_config_config = require("../../libs/config/config.js");
if (!Array) {
  const _easycom_up_loading_icon_1 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  (_easycom_up_loading_icon_1 + _easycom_up_icon_1)();
}
const _easycom_up_loading_icon = () => "../up-loading-icon/up-loading-icon.js";
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  (_easycom_up_loading_icon + _easycom_up_icon)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "up-button",
  props: {
    // 是否显示按钮的细边框
    hairline: {
      type: Boolean,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getBoolean("button.hairline");
      }
    },
    // 按钮的预置样式，info，primary，error，warning，success
    type: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getString("button.type");
      }
    },
    // 按钮尺寸，large，normal，mini
    size: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getString("button.size");
      }
    },
    // 按钮形状，circle（两边为半圆），square（带圆角）
    shape: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getString("button.shape");
      }
    },
    // 按钮是否镂空，背景色透明
    plain: {
      type: Boolean,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getBoolean("button.plain");
      }
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getBoolean("button.disabled");
      }
    },
    // 按钮名称前是否带 loading 图标(App-nvue 平台，在 ios 上为雪花，Android上为圆圈)
    loading: {
      type: Boolean,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getBoolean("button.loading");
      }
    },
    // 加载中提示文字
    loadingText: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getString("button.loadingText");
      }
    },
    // 加载状态图标类型
    loadingMode: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getString("button.loadingMode");
      }
    },
    // 加载图标大小
    loadingSize: {
      type: Number,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getNumber("button.loadingSize");
      }
    },
    // 开放能力，具体请看uniapp稳定关于button组件部分说明
    openType: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getString("button.openType");
      }
    },
    // 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
    formType: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getString("button.formType");
      }
    },
    // 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
    appParameter: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getString("button.appParameter");
      }
    },
    // 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效
    hoverStopPropagation: {
      type: Boolean,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getBoolean("button.hoverStopPropagation");
      }
    },
    // 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文
    lang: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getString("button.lang");
      }
    },
    // 会话来源，openType="contact"时有效
    sessionFrom: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getString("button.sessionFrom");
      }
    },
    // 会话内消息卡片标题，openType="contact"时有效
    sendMessageTitle: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getString("button.sendMessageTitle");
      }
    },
    // 会话内消息卡片点击跳转小程序路径，openType="contact"时有效
    sendMessagePath: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getString("button.sendMessagePath");
      }
    },
    // 会话内消息卡片图片，openType="contact"时有效
    sendMessageImg: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getString("button.sendMessageImg");
      }
    },
    // 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，openType="contact"时有效
    showMessageCard: {
      type: Boolean,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getBoolean("button.showMessageCard");
      }
    },
    // 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
    dataName: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getString("button.dataName");
      }
    },
    // 节流，一定时间内只能触发一次
    throttleTime: {
      type: [String, Number],
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getNumber("button.throttleTime");
      }
    },
    // 按住后多久出现点击态，单位毫秒
    hoverStartTime: {
      type: [String, Number],
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getNumber("button.hoverStartTime");
      }
    },
    // 手指松开后点击态保留时间，单位毫秒
    hoverStayTime: {
      type: [String, Number],
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getNumber("button.hoverStayTime");
      }
    },
    // 按钮文字，之所以通过props传入，是因为slot传入的话（注：nvue中无法控制文字的样式）
    text: {
      type: [String, Number],
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getString("button.text");
      }
    },
    // 按钮图标
    icon: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getString("button.icon");
      }
    },
    // 按钮图标颜色
    iconColor: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getString("button.iconColor");
      }
    },
    // 按钮颜色，支持传入linear-gradient渐变色
    color: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upButton_button.defProps.getString("button.color");
      }
    }
  },
  emits: ["click", "getphonenumber", "getuserinfo", "error", "opensetting", "launchapp"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emit = __emit;
    const bemClass = common_vendor.computed(() => {
      let ret = "";
      if (props.color == "") {
        ret = uni_modules_uviewUltra_libs_function_index.bem("button", [props.type, props.shape, props.size], [
          ["disabled", props.disabled],
          ["plain", props.plain],
          ["hairline", props.hairline]
        ]);
      } else {
        ret = uni_modules_uviewUltra_libs_function_index.bem("button", [props.shape, props.size], [
          ["disabled", props.disabled],
          ["plain", props.plain],
          ["hairline", props.hairline]
        ]);
      }
      return ret;
    });
    const loadingColor = common_vendor.computed(() => {
      if (props.plain) {
        return props.color != "" ? props.color : uni_modules_uviewUltra_libs_config_config.config.getString(`color.up-${props.type}`);
      }
      if (props.type == "info") {
        return "#c9c9c9";
      }
      return "rgb(200, 200, 200)";
    });
    const iconColorCom = common_vendor.computed(() => {
      if (props.iconColor != "")
        return props.iconColor;
      if (props.plain) {
        return props.color != "" ? props.color : props.type;
      } else {
        return "";
      }
    });
    const baseColor = common_vendor.computed(() => {
      let style = new UTSJSONObject({});
      if (props.color != "") {
        if (!props.plain) {
          style["backgroundColor"] = props.color;
        }
        if (props.color.toString().indexOf("gradient") != -1) {
          style["borderWidth"] = 0;
          if (!props.plain) {
            style["backgroundImage"] = props.color;
          }
        } else {
          style["borderColor"] = props.color;
          style["borderWidth"] = "1px";
          style["borderStyle"] = "solid";
        }
      }
      return style;
    });
    const textSize = common_vendor.computed(() => {
      let fontSize = "14px";
      if (props.size === "large")
        fontSize = "16px";
      if (props.size === "normal")
        fontSize = "14px";
      if (props.size === "small")
        fontSize = "12px";
      if (props.size === "mini")
        fontSize = "10px";
      return fontSize;
    });
    const clickHandler = () => {
      if (!props.disabled && !props.loading) {
        uni_modules_uviewUltra_libs_function_throttle.throttle(() => {
          emit("click");
        }, parseInt(props.throttleTime.toString()));
      } else {
        common_vendor.index.__f__("log", "at uni_modules/uview-ultra/components/up-button/up-button.uvue:314", "禁止点击");
      }
    };
    const getphonenumber = (res) => {
      emit("getphonenumber", res);
    };
    const getuserinfo = (res) => {
      emit("getuserinfo", res);
    };
    const error = (res) => {
      emit("error", res);
    };
    const opensetting = (res) => {
      emit("opensetting", res);
    };
    const launchapp = (res) => {
      emit("launchapp", res);
    };
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: __props.loading
      }, __props.loading ? {
        b: common_vendor.p({
          mode: __props.loadingMode,
          size: _ctx.$up.addUnit(__props.loadingSize * 1.15),
          color: loadingColor.value,
          class: "data-v-0816b018"
        }),
        c: common_vendor.t(__props.loadingText != "" ? __props.loadingText : __props.text),
        d: common_vendor.s({
          fontSize: textSize.value + "px"
        })
      } : common_vendor.e({
        e: __props.icon != ""
      }, __props.icon != "" ? {
        f: common_vendor.p({
          name: __props.icon,
          color: iconColorCom.value,
          size: _ctx.$up.addUnit(parseInt(_ctx.$up.getPx(textSize.value)) * 1.35),
          customStyle: {
            marginRight: "2px"
          },
          class: "data-v-0816b018"
        })
      } : {}, {
        g: common_vendor.t(__props.text),
        h: common_vendor.s({
          fontSize: textSize.value + "px"
        })
      }), {
        i: __props.hoverStartTime,
        j: __props.hoverStayTime,
        k: __props.formType,
        l: __props.openType,
        m: __props.appParameter,
        n: __props.hoverStopPropagation,
        o: __props.sendMessageTitle,
        p: __props.sendMessagePath,
        q: __props.lang,
        r: __props.dataName,
        s: __props.sessionFrom,
        t: __props.sendMessageImg,
        v: __props.showMessageCard,
        w: common_vendor.o(getphonenumber, "5e"),
        x: common_vendor.o(getuserinfo, "3a"),
        y: common_vendor.o(error, "c7"),
        z: common_vendor.o(opensetting, "99"),
        A: common_vendor.o(launchapp, "96"),
        B: __props.loading,
        C: !__props.disabled && !__props.loading ? "up-button__button--active" : "",
        D: common_vendor.o(clickHandler, "24"),
        E: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        F: common_vendor.s(baseColor.value),
        G: common_vendor.s(_ctx.$upAddStyle(_ctx.customStyle)),
        H: common_vendor.s({
          "--status-bar-height": `${_ctx.u_s_b_h}px`,
          "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
        }),
        I: !__props.disabled && !__props.loading ? "up-button--active" : "",
        J: common_vendor.n(bemClass.value),
        K: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0816b018"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-button/up-button.js.map
