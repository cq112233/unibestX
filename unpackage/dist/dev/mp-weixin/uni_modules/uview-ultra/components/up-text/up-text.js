"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upText_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_mixin_button = require("../../libs/mixin/button.js");
const uni_modules_uviewUltra_libs_mixin_openType = require("../../libs/mixin/openType.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_function_test = require("../../libs/function/test.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-text",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_libs_mixin_button.buttonMixin, uni_modules_uviewUltra_libs_mixin_openType.openType, uni_modules_uviewUltra_components_upText_props.propsText],
  emits: ["click"],
  computed: {
    valueStyle() {
      let style = new UTSJSONObject({
        textDecoration: this.decoration,
        fontWeight: this.bold ? "bold" : "normal",
        wordWrap: this.wordWrap,
        fontSize: uni_modules_uviewUltra_libs_function_index.addUnit(this.size)
      });
      if (this.type == "") {
        style["color"] = this.color;
      }
      if (this.lines != "") {
        style["lines"] = this.lines;
      }
      if (this.lineHeight != "") {
        style["lineHeight"] = uni_modules_uviewUltra_libs_function_index.addUnit(this.lineHeight);
      }
      if (this.block) {
        style["display"] = "block";
      }
      return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(this.customStyle));
    },
    // 经处理后需要显示的值
    value() {
      let _a = this, text = _a.text, mode = _a.mode, format = _a.format, href = _a.href;
      let textStr = text.toString();
      if (mode === "price") {
        if (!/^\d+(\.\d+)?$/.test(textStr)) {
          uni_modules_uviewUltra_libs_function_index.error("金额模式下，text参数需要为金额格式");
        }
        return uni_modules_uviewUltra_libs_function_index.priceFormat(textStr, 2);
      }
      if (mode === "date") {
        if (!uni_modules_uviewUltra_libs_function_test.date(textStr)) {
          uni_modules_uviewUltra_libs_function_index.error("日期模式下，text参数需要为日期或时间戳格式" + textStr);
        }
        if (format != "") {
          return uni_modules_uviewUltra_libs_function_index.timeFormat(textStr, format.toString());
        }
        return uni_modules_uviewUltra_libs_function_index.timeFormat(textStr, "yyyy-mm-dd");
      }
      if (mode === "phone") {
        if (format === "encrypt") {
          return `${textStr.substring(0, 3)}****${textStr.substring(7)}`;
        }
        return textStr;
      }
      if (mode === "name") {
        if (!(typeof textStr === "string")) {
          uni_modules_uviewUltra_libs_function_index.error("姓名模式下，text参数需要为字符串格式");
        }
        if (format === "encrypt") {
          return this.formatName(textStr);
        }
        return textStr;
      }
      if (mode === "link") {
        if (!uni_modules_uviewUltra_libs_function_test.url(href)) {
          uni_modules_uviewUltra_libs_function_index.error("超链接模式下，href参数需要为URL格式");
        }
        return textStr;
      }
      return textStr;
    },
    isMp() {
      let mp = false;
      mp = true;
      return mp;
    }
  },
  data() {
    return {};
  },
  methods: {
    addStyle(style = null) {
      return uni_modules_uviewUltra_libs_function_index.addStyle(style);
    },
    clickHandler() {
      if (this.call && this.mode === "phone")
        ;
      this.$emit("click");
    },
    // 默认的姓名脱敏规则
    formatName(name) {
      let value = "";
      if (name.length == 2) {
        value = name.substring(0, 1) + "*";
      } else if (name.length > 2) {
        let char = "";
        for (let i = 0, len = name.length - 2; i < len; i++) {
          char += "*";
        }
        value = name.substring(0, 1) + char + name.substring(-1, 1);
      } else {
        value = name;
      }
      return value;
    },
    onGetUserInfo() {
    },
    onContact() {
    },
    onGetPhoneNumber() {
    },
    onError() {
    },
    onLaunchApp() {
    },
    onOpenSetting() {
    }
  }
});
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_link2 = common_vendor.resolveComponent("up-link");
  (_easycom_up_icon2 + _easycom_up_link2)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_link = () => "../up-link/up-link.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_link)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: _ctx.show
  }, _ctx.show ? common_vendor.e({
    b: _ctx.mode === "price"
  }, _ctx.mode === "price" ? {
    c: common_vendor.n(`up-text__value--${_ctx.type}`),
    d: common_vendor.s($options.valueStyle)
  } : {}, {
    e: _ctx.prefixIcon
  }, _ctx.prefixIcon ? {
    f: common_vendor.p({
      name: _ctx.prefixIcon,
      customStyle: $options.addStyle(_ctx.iconStyle),
      class: "data-v-7f1955ac"
    })
  } : {}, {
    g: _ctx.mode === "link"
  }, _ctx.mode === "link" ? {
    h: $options.valueStyle["fontWeight"],
    i: $options.valueStyle["wordWrap"],
    j: $options.valueStyle["fontSize"],
    k: common_vendor.n(`up-text__value--${_ctx.type}`),
    l: common_vendor.n(`up-line-${_ctx.lines}`),
    m: common_vendor.p({
      text: $options.value,
      href: _ctx.href,
      underLine: true,
      class: common_vendor.normalizeClass(["up-text__value data-v-7f1955ac", [`up-text__value--${_ctx.type}`, `up-line-${_ctx.lines}`]]),
      style: common_vendor.normalizeStyle({
        fontWeight: $options.valueStyle["fontWeight"],
        wordWrap: $options.valueStyle["wordWrap"],
        fontSize: $options.valueStyle["fontSize"]
      })
    })
  } : _ctx.openType != "" && $options.isMp ? {
    o: common_vendor.t($options.value),
    p: common_vendor.s($options.valueStyle),
    q: _ctx.openType,
    r: common_vendor.o((...args) => $options.onGetUserInfo && $options.onGetUserInfo(...args), "61"),
    s: common_vendor.o((...args) => $options.onContact && $options.onContact(...args), "a6"),
    t: common_vendor.o((...args) => $options.onGetPhoneNumber && $options.onGetPhoneNumber(...args), "a5"),
    v: common_vendor.o((...args) => $options.onError && $options.onError(...args), "af"),
    w: common_vendor.o((...args) => $options.onLaunchApp && $options.onLaunchApp(...args), "56"),
    x: common_vendor.o((...args) => $options.onOpenSetting && $options.onOpenSetting(...args), "45"),
    y: _ctx.lang,
    z: _ctx.sessionFrom,
    A: _ctx.sendMessageTitle,
    B: _ctx.sendMessagePath,
    C: _ctx.sendMessageImg,
    D: _ctx.showMessageCard,
    E: _ctx.appParameter
  } : {
    F: common_vendor.t($options.value),
    G: common_vendor.s($options.valueStyle),
    H: common_vendor.n(`up-text__value--${_ctx.type}`),
    I: common_vendor.n(`up-line-${_ctx.lines}`)
  }, {
    n: _ctx.openType != "" && $options.isMp,
    J: _ctx.suffixIcon != ""
  }, _ctx.suffixIcon != "" ? {
    K: common_vendor.p({
      name: _ctx.suffixIcon,
      customStyle: $options.addStyle(_ctx.iconStyle),
      class: "data-v-7f1955ac"
    })
  } : {}, {
    L: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    M: common_vendor.n(_ctx.customClass),
    N: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
    O: common_vendor.s({
      margin: _ctx.margin,
      justifyContent: _ctx.align === "left" ? "flex-start" : _ctx.align === "center" ? "center" : "flex-end"
    }),
    P: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    }),
    Q: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args), "83")
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7f1955ac"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-text/up-text.js.map
