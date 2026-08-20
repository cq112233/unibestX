"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
require("./types.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon_1();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  _easycom_up_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-dropdown"
}, { __name: "up-dropdown", props: {
  // 菜单标题和选项的激活态颜色
  activeColor: {
    type: String,
    default: "#2979ff"
  },
  // 菜单标题和选项的未激活态颜色
  inactiveColor: {
    type: String,
    default: "#606266"
  },
  // 点击遮罩是否关闭菜单
  closeOnClickMask: {
    type: Boolean,
    default: true
  },
  // 点击当前激活项标题是否关闭菜单
  closeOnClickSelf: {
    type: Boolean,
    default: true
  },
  // 过渡时间
  duration: {
    type: [Number, String],
    default: 300
  },
  // 标题菜单的高度
  height: {
    type: [Number, String],
    default: 40
  },
  // 是否显示下边框
  borderBottom: {
    type: Boolean,
    default: false
  },
  // 标题的字体大小
  titleSize: {
    type: [Number, String],
    default: 14
  },
  // 下拉出来的内容部分的圆角值
  borderRadius: {
    type: [Number, String],
    default: 0
  },
  // 菜单右侧的icon图标
  menuIcon: {
    type: String,
    default: "arrow-down"
  },
  // 菜单右侧图标的大小
  menuIconSize: {
    type: [Number, String],
    default: 14
  }
}, emits: ["open", "close"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const instance = common_vendor.getCurrentInstance();
  const props = __props;
  const emit = __emit;
  const menuList = common_vendor.ref([]);
  const active = common_vendor.ref(false);
  const current = common_vendor.ref(-1);
  const contentStyle = common_vendor.ref(new common_vendor.UTSJSONObject({
    zIndex: -1,
    opacity: 0
  }));
  const highlightIndexList = common_vendor.ref([]);
  const contentHeight = common_vendor.ref(0);
  common_vendor.watch(contentHeight, (newVal) => {
    if (active.value) {
      contentStyle.value["height"] = newVal + "px";
    }
  });
  const dropdownStyle = common_vendor.computed(() => {
    const h = active.value ? uni_modules_uviewUltra_libs_function_index.addUnit(contentHeight.value + parseInt(props.height.toString())) : uni_modules_uviewUltra_libs_function_index.addUnit(props.height);
    return new common_vendor.UTSJSONObject({ height: h });
  });
  const menuStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({ height: uni_modules_uviewUltra_libs_function_index.addUnit(props.height) });
  });
  const contentWrapStyle = common_vendor.computed(() => {
    const style = uni_modules_uviewUltra_libs_function_index.deepMerge(contentStyle.value, new common_vendor.UTSJSONObject({
      top: uni_modules_uviewUltra_libs_function_index.addUnit(props.height),
      transition: `opacity ${parseInt(props.duration.toString()) / 1e3}s, z-index ${parseInt(props.duration.toString()) / 1e3}s linear`
    }));
    return style;
  });
  const menuIconSizeUnit = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.addUnit(props.menuIconSize);
  });
  function getMenuIconColor(index) {
    if (index == current.value || highlightIndexList.value.includes(index)) {
      return props.activeColor == "#2979ff" ? "primary" : props.activeColor;
    }
    return "#c0c4cc";
  }
  const popupStyle = common_vendor.computed(() => {
    let style = new common_vendor.UTSJSONObject({});
    style["transform"] = `translateY(${active.value ? "0%" : "-100%"})`;
    style["transition-duration"] = parseInt(props.duration.toString()) / 1e3 + "s";
    style["borderRadius"] = `0 0 ${uni_modules_uviewUltra_libs_function_index.addUnit(props.borderRadius)} ${uni_modules_uviewUltra_libs_function_index.addUnit(props.borderRadius)}`;
    return style;
  });
  function getContentHeight() {
    let windowHeight = uni_modules_uviewUltra_libs_function_index.getWindowInfo().windowHeight;
    uni_modules_uviewUltra_libs_function_index.upGetRect(".up-dropdown__menu", false, instance === null || instance === void 0 ? null : instance.proxy).then((res) => {
      if (res.bottom != null && res.bottom > 0) {
        contentHeight.value = windowHeight - res.bottom;
      } else {
        contentHeight.value = windowHeight;
      }
    });
  }
  function open(index) {
    getContentHeight();
    contentStyle.value = new common_vendor.UTSJSONObject({
      zIndex: 11,
      height: contentHeight.value + "px",
      opacity: 1
    });
    active.value = true;
    current.value = index;
    emit("open", current.value);
  }
  function close() {
    emit("close", current.value);
    active.value = false;
    current.value = -1;
    contentStyle.value["zIndex"] = -1;
    contentStyle.value["opacity"] = 0;
    setTimeout(() => {
      contentStyle.value["height"] = 0;
    }, parseInt(props.duration.toString()));
  }
  function menuClick(index) {
    if (index < 0 || index >= menuList.value.length)
      return null;
    if (menuList.value[index].disabled)
      return null;
    if (index == current.value && props.closeOnClickSelf) {
      close();
      return null;
    }
    open(index);
  }
  function maskClick() {
    if (!props.closeOnClickMask)
      return null;
    close();
  }
  function highlight(index = null) {
    if (index != null) {
      let indexOf = highlightIndexList.value.indexOf(index);
      if (indexOf == -1) {
        highlightIndexList.value.push(index);
      }
    } else {
      highlightIndexList.value = [];
    }
  }
  function getContentTextStyle(item, index) {
    let style = new common_vendor.UTSJSONObject({});
    if (index == current.value || highlightIndexList.value.includes(index)) {
      if (props.activeColor != "#2979ff") {
        style["color"] = props.activeColor;
      }
    } else {
      if (props.inactiveColor != "#606266") {
        style["color"] = props.inactiveColor;
      }
    }
    if (props.titleSize != 14) {
      style["fontSize"] = uni_modules_uviewUltra_libs_function_index.addUnit(props.titleSize);
    }
    return style;
  }
  function registerItem(item) {
    const idx = menuList.value.length;
    menuList.value.push(item);
    return idx;
  }
  function updateItemTitle(idx, title) {
    if (idx >= 0 && idx < menuList.value.length) {
      menuList.value[idx].title = title;
    }
  }
  const dropdownProps = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      activeColor: props.activeColor,
      inactiveColor: props.inactiveColor,
      closeOnClickMask: props.closeOnClickMask,
      closeOnClickSelf: props.closeOnClickSelf,
      duration: props.duration,
      height: props.height,
      borderBottom: props.borderBottom,
      titleSize: props.titleSize,
      borderRadius: props.borderRadius,
      menuIcon: props.menuIcon,
      menuIconSize: props.menuIconSize
    });
  });
  common_vendor.provide("upDropdownProps", dropdownProps);
  common_vendor.provide("upDropdownActive", active);
  common_vendor.provide("upDropdownCurrent", current);
  common_vendor.provide("upDropdownRegisterItem", registerItem);
  common_vendor.provide("upDropdownUpdateItemTitle", updateItemTitle);
  common_vendor.provide("upDropdownClose", close);
  common_vendor.onMounted(() => {
    getContentHeight();
  });
  __expose({
    highlight,
    close,
    open,
    getContentHeight
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.f(menuList.value, (item, index, i0) => {
        return {
          a: common_vendor.t(item["title"]),
          b: (index == current.value || highlightIndexList.value.includes(index)) && props.activeColor == "#2979ff" ? 1 : "",
          c: common_vendor.s(getContentTextStyle(item, index)),
          d: "252960e7-0-" + i0,
          e: common_vendor.p({
            ["custom-style"]: {
              display: "flex"
            },
            name: props.menuIcon,
            size: menuIconSizeUnit.value,
            color: getMenuIconColor(index),
            class: "data-v-252960e7"
          }),
          f: index == current.value ? 1 : "",
          g: index,
          h: common_vendor.o(($event) => {
            return menuClick(index);
          }, index)
        };
      }),
      b: common_vendor.s(menuStyle.value),
      c: props.borderBottom ? 1 : "",
      d: common_vendor.o(() => {
      }, "a7"),
      e: common_vendor.s(popupStyle.value),
      f: common_vendor.s(contentWrapStyle.value),
      g: common_vendor.o(maskClick, "5b"),
      h: common_vendor.o(() => {
      }, "83"),
      i: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      j: common_vendor.s(dropdownStyle.value),
      k: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-252960e7"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-dropdown/up-dropdown.js.map
