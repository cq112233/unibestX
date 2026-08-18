"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_text_1 = common_vendor.resolveComponent("up-text");
  (_easycom_up_icon_1 + _easycom_up_text_1)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_text = () => "../up-text/up-text.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_text)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-avatar"
}, { __name: "up-avatar", props: {
  src: {
    type: String,
    default: ""
  },
  shape: {
    type: String,
    default: "circle"
  },
  size: {
    type: [String, Number],
    default: 40
  },
  mode: {
    type: String,
    default: "scaleToFill"
  },
  text: {
    type: String,
    default: ""
  },
  bgColor: {
    type: String,
    default: "#eee"
  },
  color: {
    type: String,
    default: "#fff"
  },
  fontSize: {
    type: [String, Number],
    default: 18
  },
  icon: {
    type: String,
    default: ""
  },
  mpAvatar: {
    type: Boolean,
    default: false
  },
  randomBgColor: {
    type: Boolean,
    default: false
  },
  defaultUrl: {
    type: String,
    default: ""
  },
  colorIndex: {
    type: [String, Number],
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, emits: ["click"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const colors = [
    "#ffb34b",
    "#f2bba9",
    "#f7a196",
    "#f18080",
    "#88a867",
    "#bfbf39",
    "#89c152",
    "#94d554",
    "#f19ec2",
    "#afaae4",
    "#e1b0df",
    "#c38cc1",
    "#72dcdc",
    "#9acdcb",
    "#77b1cc",
    "#448aca",
    "#86cefa",
    "#98d1ee",
    "#73d1f1",
    "#80a7dc"
  ];
  const avatarUrl = common_vendor.ref("");
  const getBackColor = common_vendor.computed(() => {
    let result = "#eeeeee";
    if (props.text !== "" || props.icon !== "") {
      const colorIndexNo = parseInt(props.colorIndex.toString());
      if (props.randomBgColor) {
        if (props.colorIndex.toString() !== "") {
          result = colors[colorIndexNo];
        } else {
          result = colors[uni_modules_uviewUltra_libs_function_index.random(0, 19)];
        }
      } else {
        result = props.bgColor;
      }
    } else {
      result = "transparent";
    }
    return result;
  });
  const avatarStyle = common_vendor.computed(() => {
    const custom = uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle);
    const base = new common_vendor.UTSJSONObject({
      backgroundColor: getBackColor.value,
      width: uni_modules_uviewUltra_libs_function_index.addUnit(props.size),
      height: uni_modules_uviewUltra_libs_function_index.addUnit(props.size)
    });
    return uni_modules_uviewUltra_libs_function_index.deepMerge(base, custom);
  });
  const imageSizeStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      width: uni_modules_uviewUltra_libs_function_index.addUnit(props.size),
      height: uni_modules_uviewUltra_libs_function_index.addUnit(props.size)
    });
  });
  const errorHandler = () => {
    avatarUrl.value = props.defaultUrl;
  };
  const clickHandler = () => {
    emit("click", props.name);
  };
  common_vendor.watch(() => {
    return props.src;
  }, (newValue) => {
    avatarUrl.value = newValue;
  });
  common_vendor.onMounted(() => {
    avatarUrl.value = props.src;
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.icon != ""
    }, __props.icon != "" ? {
      b: common_vendor.p({
        name: __props.icon,
        size: __props.fontSize,
        color: __props.color,
        class: "data-v-364890b0"
      })
    } : __props.text != "" ? {
      d: common_vendor.p({
        text: __props.text,
        size: __props.fontSize,
        color: __props.color,
        align: "center",
        class: "data-v-364890b0",
        style: common_vendor.normalizeStyle({
          justifyContent: "center"
        })
      })
    } : {
      e: common_vendor.n(`up-avatar__image--${__props.shape}`),
      f: avatarUrl.value != "" ? avatarUrl.value : __props.defaultUrl,
      g: __props.mode,
      h: common_vendor.o(errorHandler, "f2"),
      i: common_vendor.s(imageSizeStyle.value)
    }, {
      c: __props.text != "",
      j: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      k: common_vendor.n(`up-avatar--${__props.shape}`),
      l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      m: common_vendor.s(avatarStyle.value),
      n: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      o: common_vendor.o(clickHandler, "a9")
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-364890b0"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-avatar/up-avatar.js.map
