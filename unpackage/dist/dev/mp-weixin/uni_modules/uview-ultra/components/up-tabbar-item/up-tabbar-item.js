"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_badge_1 = common_vendor.resolveComponent("up-badge");
  (_easycom_up_icon_1 + _easycom_up_badge_1)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_badge = () => "../up-badge/up-badge.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_badge)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-tabbar-item"
}, { __name: "up-tabbar-item", props: {
  name: {
    type: [String, Number],
    default: null
  },
  icon: {
    type: String,
    default: ""
  },
  badge: {
    type: [String, Number],
    default: null
  },
  dot: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: ""
  },
  badgeStyle: {
    type: [Object, String],
    default: () => {
      return new common_vendor.UTSJSONObject({ top: "6px", right: "2px" });
    }
  },
  mode: {
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
  const parentProps = common_vendor.inject("upTabbarProps", null);
  const parentRegister = common_vendor.inject("upTabbarRegister", null);
  const parentChange = common_vendor.inject("upTabbarChange", null);
  const internalIndex = common_vendor.ref(0);
  common_vendor.onMounted(() => {
    if (parentRegister != null) {
      internalIndex.value = parentRegister();
    }
  });
  const isMidButton = common_vendor.computed(() => {
    return props.mode == "midButton";
  });
  const itemName = common_vendor.computed(() => {
    if (props.name != null) {
      return props.name;
    }
    return internalIndex.value;
  });
  const isActive = common_vendor.computed(() => {
    if (parentProps == null)
      return false;
    const parentObj = parentProps.value;
    if (parentObj == null)
      return false;
    const parentVal = parentObj["value"];
    if (parentVal == null)
      return false;
    return parentVal.toString() == itemName.value.toString();
  });
  const activeColor = common_vendor.computed(() => {
    if (parentProps != null && parentProps.value != null) {
      const val = parentProps.value["activeColor"];
      if (val != null && val.toString() != "")
        return val.toString();
    }
    return "#1989fa";
  });
  const inactiveColor = common_vendor.computed(() => {
    if (parentProps != null && parentProps.value != null) {
      const val = parentProps.value["inactiveColor"];
      if (val != null && val.toString() != "")
        return val.toString();
    }
    return "#7d7e80";
  });
  const customTabbarItemStyle = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle);
  });
  const customBadgeStyle = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.addStyle(props.badgeStyle);
  });
  function clickHandler() {
    if (parentChange != null) {
      parentChange(itemName.value);
    }
    emit("click", itemName.value);
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: isMidButton.value
    }, isMidButton.value ? {} : {}, {
      b: __props.icon != ""
    }, __props.icon != "" ? {
      c: common_vendor.p({
        name: __props.icon,
        color: isActive.value ? activeColor.value : inactiveColor.value,
        size: isMidButton.value ? 26 : 20,
        class: "data-v-dff5b91d"
      })
    } : common_vendor.e({
      d: isActive.value
    }, isActive.value ? {} : {}), {
      e: common_vendor.p({
        absolute: true,
        offset: [0, __props.dot ? "34rpx" : __props.badge != null && parseInt(__props.badge.toString()) > 9 ? "14rpx" : "20rpx"],
        customStyle: customBadgeStyle.value,
        isDot: __props.dot,
        value: __props.badge != null ? __props.dot ? 1 : __props.badge : 0,
        show: __props.dot ? true : __props.badge != null ? parseInt(__props.badge.toString()) > 0 : false,
        class: "data-v-dff5b91d"
      }),
      f: common_vendor.n(isMidButton.value ? "up-tabbar-item__icon--mid-button" : ""),
      g: common_vendor.t(__props.text),
      h: isActive.value ? activeColor.value : inactiveColor.value,
      i: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      j: common_vendor.s(customTabbarItemStyle.value),
      k: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      l: common_vendor.n(isMidButton.value ? "up-tabbar-item--mid-button" : ""),
      m: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      n: common_vendor.o(clickHandler, "63")
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-dff5b91d"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-tabbar-item/up-tabbar-item.js.map
