"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upIcon_icons = require("./icons.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_composable_useUltraUI = require("../../libs/composable/useUltraUI.js");
const uni_modules_uviewUltra_libs_config_config = require("../../libs/config/config.js");
const uni_modules_uviewUltra_components_upIcon_icon = require("./icon.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "up-icon",
  props: {
    customStyle: {
      type: [Object, String],
      default: () => {
        return new common_vendor.UTSJSONObject({});
      }
    },
    customClass: {
      type: String,
      default: ""
    },
    // 图标类名
    name: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upIcon_icon.defProps.getString("icon.name");
      }
    },
    // 图标颜色，可接受主题色
    color: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upIcon_icon.defProps.getString("icon.color");
      }
    },
    // 字体大小，单位px
    size: {
      type: [String, Number],
      default: () => {
        return uni_modules_uviewUltra_components_upIcon_icon.defProps.getString("icon.size");
      }
    },
    // 是否显示粗体
    bold: {
      type: Boolean,
      default: () => {
        return uni_modules_uviewUltra_components_upIcon_icon.defProps.getBoolean("icon.bold");
      }
    },
    // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
    index: {
      type: [String],
      default: () => {
        return uni_modules_uviewUltra_components_upIcon_icon.defProps.getString("icon.index");
      }
    },
    // 触摸图标时的类名
    hoverClass: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upIcon_icon.defProps.getString("icon.hoverClass");
      }
    },
    // 自定义扩展前缀，方便用户扩展自己的图标库
    customPrefix: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upIcon_icon.defProps.getString("icon.customPrefix");
      }
    },
    // 图标右边或者下面的文字
    label: {
      type: [String],
      default: () => {
        return uni_modules_uviewUltra_components_upIcon_icon.defProps.getString("icon.label");
      }
    },
    // label的位置，只能右边或者下边
    labelPos: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upIcon_icon.defProps.getString("icon.labelPos");
      }
    },
    // label的大小
    labelSize: {
      type: [String, Number],
      default: () => {
        return uni_modules_uviewUltra_components_upIcon_icon.defProps.getString("icon.labelSize");
      }
    },
    // label的颜色
    labelColor: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upIcon_icon.defProps.getString("icon.labelColor");
      }
    },
    // label与图标的距离
    space: {
      type: [String, Number],
      default: () => {
        return uni_modules_uviewUltra_components_upIcon_icon.defProps.getString("icon.space");
      }
    },
    // 图片的mode
    imgMode: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upIcon_icon.defProps.getString("icon.imgMode");
      }
    },
    // 用于显示图片小图标时，图片的宽度
    width: {
      type: [String, Number],
      default: () => {
        return uni_modules_uviewUltra_components_upIcon_icon.defProps.getString("icon.width");
      }
    },
    // 用于显示图片小图标时，图片的高度
    height: {
      type: [String, Number],
      default: () => {
        return uni_modules_uviewUltra_components_upIcon_icon.defProps.getString("icon.height");
      }
    },
    // 用于解决某些情况下，让图标垂直居中的用途
    top: {
      type: [String, Number],
      default: () => {
        return uni_modules_uviewUltra_components_upIcon_icon.defProps.getString("icon.top");
      }
    },
    // 是否阻止事件传播
    stop: {
      type: Boolean,
      default: () => {
        return uni_modules_uviewUltra_components_upIcon_icon.defProps.getBoolean("icon.stop");
      }
    }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const preventEvent = uni_modules_uviewUltra_libs_composable_useUltraUI.useUltraUI().preventEvent;
    const props = __props;
    const emit = __emit;
    const uClasses = common_vendor.computed(() => {
      let classes = [];
      classes.push(props.customPrefix + "-" + props.name);
      if (props.customPrefix == "upicon") {
        classes.push("up-iconfont");
      } else {
        classes.push(props.customPrefix);
      }
      let types = uni_modules_uviewUltra_libs_config_config.config.getArray("type");
      if (props.color.toString() != "" && types != null && (types === null || types === void 0 ? null : types.includes(props.color.toString())))
        classes.push("up-icon__icon--" + props.color.toString());
      return classes.join(" ");
    });
    const iconStyle = common_vendor.computed(() => {
      let style = new common_vendor.UTSJSONObject(
        {
          fontSize: uni_modules_uviewUltra_libs_function_index.addUnit(props.size.toString()),
          lineHeight: uni_modules_uviewUltra_libs_function_index.addUnit(props.size.toString()),
          fontWeight: props.bold ? "bold" : "normal",
          // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
          top: uni_modules_uviewUltra_libs_function_index.addUnit(props.top)
        }
        // 非主题色值时，才当作颜色值
      );
      let types = uni_modules_uviewUltra_libs_config_config.config.getArray("type");
      if (props.color.toString() != "" && types != null && !types.includes(props.color.toString())) {
        style["color"] = props.color.toString();
      }
      return style;
    });
    const isImg = common_vendor.computed(() => {
      return props.name.toString().indexOf("/") != -1;
    });
    const imgStyle = common_vendor.computed(() => {
      let style = new common_vendor.UTSJSONObject(
        {}
        // 如果设置width和height属性，则优先使用，否则使用size属性
      );
      style["width"] = props.width != "" ? uni_modules_uviewUltra_libs_function_index.addUnit(props.width) : uni_modules_uviewUltra_libs_function_index.addUnit(props.size.toString());
      style["height"] = props.height != "" ? uni_modules_uviewUltra_libs_function_index.addUnit(props.height) : uni_modules_uviewUltra_libs_function_index.addUnit(props.size.toString());
      return style;
    });
    const mergedImgStyle = common_vendor.computed(() => {
      const custom = uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle);
      const img = imgStyle.value;
      return uni_modules_uviewUltra_libs_function_index.deepMerge(img, custom);
    });
    const mergedIconStyle = common_vendor.computed(() => {
      const custom = uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle);
      const iconS = iconStyle.value;
      return uni_modules_uviewUltra_libs_function_index.deepMerge(iconS, custom);
    });
    const labelStyleComputed = common_vendor.computed(() => {
      return new common_vendor.UTSJSONObject({
        color: props.labelColor,
        fontSize: uni_modules_uviewUltra_libs_function_index.addUnit(props.labelSize),
        marginLeft: props.labelPos == "right" ? uni_modules_uviewUltra_libs_function_index.addUnit(props.space) : "0px",
        marginTop: props.labelPos == "bottom" ? uni_modules_uviewUltra_libs_function_index.addUnit(props.space) : "0px",
        marginRight: props.labelPos == "left" ? uni_modules_uviewUltra_libs_function_index.addUnit(props.space) : "0px",
        marginBottom: props.labelPos == "top" ? uni_modules_uviewUltra_libs_function_index.addUnit(props.space) : "0px"
      });
    });
    const icon = common_vendor.computed(() => {
      if (props.customPrefix !== "upicon")
        return "";
      if (uni_modules_uviewUltra_components_upIcon_icons.icons["upicon-" + props.name] != null) {
        return uni_modules_uviewUltra_components_upIcon_icons.icons["upicon-" + props.name];
      } else {
        return props.name.toString();
      }
    });
    function clickHandler(e) {
      emit("click", props.index);
      if (props.stop) {
        preventEvent(e);
      }
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: isImg.value
      }, isImg.value ? {
        b: __props.name,
        c: __props.imgMode != "" ? __props.imgMode : "aspectFit",
        d: common_vendor.s(mergedImgStyle.value)
      } : {
        e: common_vendor.t(icon.value),
        f: common_vendor.n(uClasses.value),
        g: common_vendor.s(mergedIconStyle.value),
        h: __props.hoverClass
      }, {
        i: __props.label !== ""
      }, __props.label !== "" ? {
        j: common_vendor.t(__props.label),
        k: common_vendor.s(labelStyleComputed.value)
      } : {}, {
        l: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        m: common_vendor.o(clickHandler, "d8"),
        n: common_vendor.n("up-icon--" + __props.labelPos),
        o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
        p: `${_ctx.u_s_b_h}px`,
        q: `${_ctx.u_s_a_i_b}px`
      });
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-071d1307"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-icon/up-icon.js.map
