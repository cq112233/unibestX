"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
require("./types.js");
const uni_modules_uviewUltra_libs_composable_useUltraUI = require("../../libs/composable/useUltraUI.js");
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
  const _b = uni_modules_uviewUltra_libs_composable_useUltraUI.useUltraUI(), children = _b.children;
  _b.getChildren;
  const addChild = _b.addChild;
  const instance = common_vendor.getCurrentInstance().proxy;
  const props = __props;
  const emit = __emit;
  common_vendor.ref(true);
  const menuList = common_vendor.ref([]);
  const active = common_vendor.ref(false);
  const current = common_vendor.ref(99999);
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
  const popupStyle = common_vendor.computed(() => {
    let style = new common_vendor.UTSJSONObject({});
    style["transform"] = `translateY(${active.value ? "0%" : "-100%"})`;
    style["transition-duration"] = parseInt(props.duration.toString()) / 1e3 + "s";
    style["borderRadius"] = `0 0 ${uni_modules_uviewUltra_libs_function_index.addUnit(props.borderRadius)} ${uni_modules_uviewUltra_libs_function_index.addUnit(props.borderRadius)}`;
    return style;
  });
  function getWindowInfoWrapper() {
    return uni_modules_uviewUltra_libs_function_index.getWindowInfo();
  }
  function init() {
    var _a2;
    menuList.value = [];
    if (children.value != null) {
      (_a2 = children.value) === null || _a2 === void 0 ? null : _a2.map((child) => {
        child.$callMethod("init");
      });
    }
  }
  function getContentHeight() {
    let windowHeight = getWindowInfoWrapper().windowHeight;
    uni_modules_uviewUltra_libs_function_index.upGetRect(".up-dropdown__menu", false, instance).then((res) => {
      if (res.bottom != null) {
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
    if (children.value != null) {
      children.value.map((val, idx) => {
        if (index == idx) {
          val.$callMethod("setActive", true);
        } else {
          val.$callMethod("setActive", false);
        }
      });
    }
    emit("open", current.value);
  }
  function close() {
    emit("close", current.value);
    active.value = false;
    current.value = 99999;
    contentStyle.value["zIndex"] = -1;
    contentStyle.value["opacity"] = 0;
    setTimeout(() => {
      contentStyle.value["height"] = 0;
    }, parseInt(props.duration.toString()));
  }
  function menuClick(index) {
    if (menuList.value[index].disabled)
      return null;
    if (index == current.value && props.closeOnClickSelf) {
      close();
      setTimeout(() => {
        if (children.value != null && children.value[index] != null) {
          children.value[index].$callMethod("setActive", false);
        }
      }, parseInt(props.duration.toString()));
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
      if (indexOf === -1) {
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
  function addMenuListItem(item) {
    menuList.value.push(item);
  }
  function getProps() {
    return new common_vendor.UTSJSONObject({
      activeColor: props.activeColor
    });
  }
  common_vendor.onMounted(() => {
    getContentHeight();
  });
  __expose({
    init,
    highlight,
    close,
    open,
    getContentHeight,
    addChild,
    children,
    addMenuListItem,
    getProps
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
            size: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(props.menuIconSize),
            color: index == current.value || highlightIndexList.value.includes(index) ? props.activeColor == "#2979ff" ? "primary" : props.activeColor : "#c0c4cc",
            class: "data-v-252960e7"
          }),
          f: index == current.value ? 1 : "",
          g: index,
          h: common_vendor.o(($event) => {
            return menuClick(index);
          }, index)
        };
      }),
      b: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(props.height),
      c: props.borderBottom ? 1 : "",
      d: common_vendor.o(() => {
      }, "9e"),
      e: common_vendor.s(popupStyle.value),
      f: common_vendor.s(contentStyle.value),
      g: common_vendor.s({
        top: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(props.height),
        transition: `opacity ${parseInt(props.duration.toString()) / 1e3}s, z-index ${parseInt(props.duration.toString()) / 1e3}s linear`
      }),
      h: common_vendor.o(maskClick, "83"),
      i: common_vendor.o(() => {
      }, "1e"),
      j: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      k: common_vendor.s({
        height: active.value ? common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(contentHeight.value + parseInt(props.height.toString())) : common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(props.height)
      }),
      l: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      m: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-252960e7"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-dropdown/up-dropdown.js.map
