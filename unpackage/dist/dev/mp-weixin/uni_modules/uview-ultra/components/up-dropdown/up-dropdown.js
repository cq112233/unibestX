"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_components_upDropdown_dropdown = require("./dropdown.js");
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
    default: uni_modules_uviewUltra_components_upDropdown_dropdown.defProps.getString("dropdown.activeColor")
  },
  // 菜单标题和选项的未激活态颜色
  inactiveColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upDropdown_dropdown.defProps.getString("dropdown.inactiveColor")
  },
  // 点击遮罩是否关闭菜单
  closeOnClickMask: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upDropdown_dropdown.defProps.getBoolean("dropdown.closeOnClickMask")
  },
  // 点击当前激活项标题是否关闭菜单
  closeOnClickSelf: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upDropdown_dropdown.defProps.getBoolean("dropdown.closeOnClickSelf")
  },
  // 过渡时间
  duration: {
    type: [Number, String],
    default: uni_modules_uviewUltra_components_upDropdown_dropdown.defProps.getNumber("dropdown.duration")
  },
  // 标题菜单的高度
  height: {
    type: [Number, String],
    default: uni_modules_uviewUltra_components_upDropdown_dropdown.defProps.getNumber("dropdown.height")
  },
  // 是否显示下边框
  borderBottom: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upDropdown_dropdown.defProps.getBoolean("dropdown.borderBottom")
  },
  // 标题的字体大小
  titleSize: {
    type: [Number, String],
    default: uni_modules_uviewUltra_components_upDropdown_dropdown.defProps.getNumber("dropdown.titleSize")
  },
  // 下拉出来的内容部分的圆角值
  borderRadius: {
    type: [Number, String],
    default: uni_modules_uviewUltra_components_upDropdown_dropdown.defProps.getNumber("dropdown.borderRadius")
  },
  // 菜单右侧的icon图标
  menuIcon: {
    type: String,
    default: uni_modules_uviewUltra_components_upDropdown_dropdown.defProps.getString("dropdown.menuIcon")
  },
  // 菜单右侧图标的大小
  menuIconSize: {
    type: [Number, String],
    default: uni_modules_uviewUltra_components_upDropdown_dropdown.defProps.getNumber("dropdown.menuIconSize")
  }
}, emits: ["open", "close"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const _b = uni_modules_uviewUltra_libs_composable_useUltraUI.useUltraUI(), children = _b.children, getChildren = _b.getChildren, addChild = _b.addChild;
  const instance = common_vendor.getCurrentInstance().proxy;
  const props = __props;
  const emit = __emit;
  common_vendor.ref(true);
  const menuList = common_vendor.ref([]);
  const active = common_vendor.ref(false);
  const current = common_vendor.ref(99999);
  const contentStyle = common_vendor.ref(new UTSJSONObject({
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
    let style = new UTSJSONObject(
      {}
      // 进行Y轴位移，展开状态时，恢复原位。收齐状态时，往上位移100%，进行隐藏
    );
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
    contentStyle.value = new UTSJSONObject({
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
  function highlight(indexParams = null) {
    if (Array.isArray(indexParams) && indexParams !== null) {
      highlightIndexList.value = indexParams;
      return null;
    }
    highlightIndexList.value = [];
    if (indexParams != null) {
      highlightIndexList.value.push(parseInt(indexParams.toString()));
    }
  }
  const addMenuListItem = (op) => {
    menuList.value.push(op);
  };
  common_vendor.onMounted(() => {
    getContentHeight();
  });
  const getProps = function() {
    return new UTSJSONObject({
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
  };
  function getContentTextStyle(item, index) {
    const style = new UTSJSONObject({});
    style["fontSize"] = uni_modules_uviewUltra_libs_function_index.addUnit(props.titleSize);
    const isActive = index == current.value || highlightIndexList.value.includes(index);
    if (item.disabled) {
      style["color"] = "#c0c4cc";
    } else if (isActive) {
      if (props.activeColor != "#2979ff") {
        style["color"] = props.activeColor;
      }
    } else {
      style["color"] = props.inactiveColor;
    }
    return style;
  }
  __expose({
    init,
    close,
    highlight,
    getChildren,
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
            size: _ctx.$up.addUnit(props.menuIconSize),
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
      b: _ctx.$up.addUnit(props.height),
      c: props.borderBottom ? 1 : "",
      d: common_vendor.o(() => {
      }, "0a"),
      e: common_vendor.s(popupStyle.value),
      f: common_vendor.s({}),
      g: common_vendor.s(contentStyle.value),
      h: common_vendor.s({
        top: _ctx.$up.addUnit(props.height),
        transition: `opacity ${parseInt(props.duration.toString()) / 1e3}s, z-index ${parseInt(props.duration.toString()) / 1e3}s linear`
      }),
      i: common_vendor.o(maskClick, "db"),
      j: common_vendor.o(() => {
      }, "37"),
      k: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      l: common_vendor.s({
        height: active.value ? _ctx.$up.addUnit(contentHeight.value + parseInt(props.height.toString())) : _ctx.$up.addUnit(props.height)
      }),
      m: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      n: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-252960e7"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-dropdown/up-dropdown.js.map
