"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const uni_modules_riceUi_libs_utils_debug = require("../../libs/utils/debug.js");
require("./type.js");
if (!Array) {
  const _easycom_rice_icon_1 = common_vendor.resolveComponent("rice-icon");
  _easycom_rice_icon_1();
}
const _easycom_rice_icon = () => "../rice-icon/rice-icon.js";
if (!Math) {
  _easycom_rice_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-cell",
  styleIsolation: "app-and-page"
}, { __name: "rice-cell", props: {
  title: {},
  value: {},
  label: {},
  size: {},
  icon: {},
  url: {},
  border: { type: Boolean, default: true },
  clickable: { type: Boolean, default: true },
  arrow: { type: Boolean, default: null },
  arrowDirection: { default: "right" },
  center: { type: Boolean, default: false },
  titleStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } },
  titleTextStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } },
  valueStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } },
  valueTextStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } },
  labelStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, emits: ["click"], setup(__props, _a) {
  var __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("cell");
  const slots = common_vendor.useSlots();
  const emit = __emit;
  const props = __props;
  const showArrow = common_vendor.computed(() => {
    var _a2;
    return (_a2 = props.arrow) !== null && _a2 !== void 0 ? _a2 : uni_modules_riceUi_libs_utils_basic.hasStrValue(props.url);
  });
  const hasLeftIcon = common_vendor.computed(() => {
    return slots["leftIcon"] != null || uni_modules_riceUi_libs_utils_basic.hasStrValue(props.icon);
  });
  const hasValue = common_vendor.computed(() => {
    return slots["value"] != null || uni_modules_riceUi_libs_utils_basic.hasStrValue(props.value);
  });
  const hasLabel = common_vendor.computed(() => {
    return slots["label"] != null || uni_modules_riceUi_libs_utils_basic.hasStrValue(props.label);
  });
  const iconSize = common_vendor.computed(() => {
    return props.size == "large" ? "17px" : "16px";
  });
  const handleClick = () => {
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.url)) {
      common_vendor.index.navigateTo({
        url: props.url,
        fail: (err) => {
          uni_modules_riceUi_libs_utils_debug.debugWarn("Cell", err.errMsg);
        }
      });
    }
    emit("click");
  };
  const cellClass = common_vendor.computed(() => {
    return [
      ns.b(""),
      ns.theme(),
      ns.m(props.size),
      ns.is("center", props.center)
    ];
  });
  const hoverClass = common_vendor.computed(() => {
    return props.clickable ? "rice-cell--hover" : "none";
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.unref(hasLeftIcon)
    }, common_vendor.unref(hasLeftIcon) ? {
      b: common_vendor.p({
        name: _ctx.icon,
        ["custom-style"]: {
          marginRight: "2px"
        },
        size: common_vendor.unref(iconSize),
        class: "data-v-4bd22bab"
      })
    } : {}, {
      c: common_vendor.t(_ctx.title),
      d: common_vendor.s(_ctx.titleTextStyle),
      e: common_vendor.n(_ctx.title),
      f: common_vendor.unref(hasLabel)
    }, common_vendor.unref(hasLabel) ? {
      g: common_vendor.t(_ctx.label),
      h: common_vendor.s(_ctx.labelStyle)
    } : {}, {
      i: common_vendor.s(_ctx.titleStyle),
      j: common_vendor.unref(hasValue)
    }, common_vendor.unref(hasValue) ? {
      k: common_vendor.t(_ctx.value),
      l: common_vendor.s(_ctx.valueTextStyle),
      m: common_vendor.s(_ctx.valueStyle)
    } : {}, {
      n: _ctx.$slots["rightIcon"] != null || common_vendor.unref(showArrow)
    }, _ctx.$slots["rightIcon"] != null || common_vendor.unref(showArrow) ? {
      o: common_vendor.p({
        name: `arrow-${_ctx.arrowDirection}`,
        size: common_vendor.unref(iconSize),
        class: "data-v-4bd22bab"
      })
    } : {}, {
      p: _ctx.border
    }, _ctx.border ? {} : {}, {
      q: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      r: common_vendor.n(common_vendor.unref(cellClass)),
      s: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      t: common_vendor.s(_ctx.customStyle),
      v: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      w: common_vendor.unref(hoverClass),
      x: common_vendor.o(handleClick, "f2")
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4bd22bab"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-cell/rice-cell.js.map
