"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/composable/useButton.js");
require("../../libs/composable/useMp.js");
const uni_modules_uviewUltra_libs_composable_useUltraUI = require("../../libs/composable/useUltraUI.js");
require("../../libs/function/test.js");
require("../../libs/function/digit.js");
require("../../libs/config/config.js");
require("./types.js");
const uni_modules_uviewUltra_components_upActionSheet_actionSheet = require("./actionSheet.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_line_1 = common_vendor.resolveComponent("up-line");
  const _easycom_up_loading_icon_1 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_gap_1 = common_vendor.resolveComponent("up-gap");
  const _easycom_up_popup_1 = common_vendor.resolveComponent("up-popup");
  (_easycom_up_icon_1 + _easycom_up_line_1 + _easycom_up_loading_icon_1 + _easycom_up_gap_1 + _easycom_up_popup_1)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_line = () => "../up-line/up-line.js";
const _easycom_up_loading_icon = () => "../up-loading-icon/up-loading-icon.js";
const _easycom_up_gap = () => "../up-gap/up-gap.js";
const _easycom_up_popup = () => "../up-popup/up-popup.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_line + _easycom_up_loading_icon + _easycom_up_gap + _easycom_up_popup)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  // ...mpSharedMpOptions,
  name: "up-action-sheet"
}, { __name: "up-action-sheet", props: {
  // 操作菜单是否展示 （默认false）
  show: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upActionSheet_actionSheet.defProps.getBoolean("actionSheet.show")
  },
  // 标题
  title: {
    type: String,
    default: uni_modules_uviewUltra_components_upActionSheet_actionSheet.defProps.getString("actionSheet.title")
  },
  // 选项上方的描述信息
  description: {
    type: String,
    default: uni_modules_uviewUltra_components_upActionSheet_actionSheet.defProps.getString("actionSheet.description")
  },
  // 数据
  actions: {
    type: Array,
    default: () => {
      return [];
    }
  },
  // 取消按钮的文字，不为空时显示按钮
  cancelText: {
    type: String,
    default: uni_modules_uviewUltra_components_upActionSheet_actionSheet.defProps.getString("actionSheet.cancelText")
  },
  // 点击某个菜单项时是否关闭弹窗
  closeOnClickAction: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upActionSheet_actionSheet.defProps.getBoolean("actionSheet.closeOnClickAction")
  },
  // 处理底部安全区（默认true）
  safeAreaInsetBottom: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upActionSheet_actionSheet.defProps.getBoolean("actionSheet.safeAreaInsetBottom")
  },
  // 小程序的打开方式
  openType: {
    type: String,
    default: uni_modules_uviewUltra_components_upActionSheet_actionSheet.defProps.getString("actionSheet.openType")
  },
  // 点击遮罩是否允许关闭 (默认true)
  closeOnClickOverlay: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upActionSheet_actionSheet.defProps.getBoolean("actionSheet.closeOnClickOverlay")
  },
  // 圆角值
  round: {
    type: [Boolean, String, Number],
    default: uni_modules_uviewUltra_components_upActionSheet_actionSheet.defProps.getAny("actionSheet.round")
  },
  // 选项区域最大高度
  wrapMaxHeight: {
    type: [String],
    default: uni_modules_uviewUltra_components_upActionSheet_actionSheet.defProps.getString("actionSheet.wrapMaxHeight")
  }
  // 	...commonProps,
  // 	...buttonProps
}, emits: [
  "close",
  "select",
  "update:show",
  "getuserinfo",
  "contact",
  "getphonenumber",
  "error",
  "launchapp",
  "opensetting"
], setup(__props, _a) {
  var __emit = _a.emit;
  const _b = uni_modules_uviewUltra_libs_composable_useUltraUI.useUltraUI(), onComponentDestroy = _b.onComponentDestroy;
  _b.preventEvent;
  _b.noop;
  const instance = common_vendor.getCurrentInstance().proxy;
  const props = __props;
  common_vendor.onMounted(() => {
  });
  common_vendor.onBeforeUnmount(() => {
    onComponentDestroy(instance);
  });
  const emit = __emit;
  const onOpenType = (name, event) => {
    emit(name, event.detail);
  };
  const itemStyle = common_vendor.computed(() => {
    return (index) => {
      let style = new UTSJSONObject(
        {}
        // if (props['actions'][index]['color'] != null && props.actions[index]['color'] != '') {
        //     style['color'] = props.actions[index].color
        // }
        // if (props.actions[index]['fontSize'] != null && props.actions[index]['fontSize'] != '') {
        //      style['fontSize'] = addUnit(props.actions[index].fontSize)
        // }
        // // 选项被禁用的样式
        // if (props.actions[index]['disabled'] != null && props.actions[index]['disabled'] == true) {
        //     style['color'] = '#c0c4cc'
        // }
      );
      return style;
    };
  });
  const closeHandler = () => {
    if (props.closeOnClickOverlay) {
      emit("update:show");
      emit("close");
    }
  };
  const cancel = () => {
    emit("update:show");
    emit("close");
  };
  const selectHandler = (index) => {
    const item = props.actions[index];
    if (item["disabled"] != true && item["loading"] != true) {
      emit("select", item);
      if (props.closeOnClickAction) {
        emit("update:show");
        emit("close");
      }
    }
  };
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.title
    }, __props.title ? {
      b: common_vendor.t(__props.title),
      c: common_vendor.p({
        name: "close",
        size: "17",
        color: "#c8c9cc",
        bold: true,
        class: "data-v-aa6e6bff"
      }),
      d: common_vendor.o(cancel, "2a")
    } : {}, {
      e: __props.description
    }, __props.description ? {
      f: common_vendor.t(__props.description),
      g: common_vendor.s({
        marginTop: `${__props.title != "" && __props.description != "" ? 0 : "18px"}`
      })
    } : {}, {
      h: __props.description
    }, __props.description ? {
      i: common_vendor.p({
        class: "data-v-aa6e6bff"
      })
    } : {}, {
      j: common_vendor.f(__props.actions, (item, index, i0) => {
        return common_vendor.e({
          a: item["loading"]
        }, item["loading"] ? {
          b: "aa6e6bff-3-" + i0 + ",aa6e6bff-0",
          c: common_vendor.p({
            ["custom-class"]: "van-action-sheet__loading",
            size: "18",
            mode: "circle",
            class: "data-v-aa6e6bff"
          })
        } : common_vendor.e({
          d: common_vendor.t(item["name"]),
          e: common_vendor.s(itemStyle.value(index)),
          f: item["subname"] != ""
        }, item["subname"] != "" ? {
          g: common_vendor.t(item["subname"])
        } : {}), {
          h: common_vendor.o(($event) => {
            return selectHandler(index);
          }, index),
          i: item["disabled"] != true && item["loading"] != true ? "up-action-sheet--hover" : "",
          j: item["openType"],
          k: common_vendor.o(($event) => {
            return onOpenType("getuserinfo", $event);
          }, index),
          l: common_vendor.o(($event) => {
            return onOpenType("contact", $event);
          }, index),
          m: common_vendor.o(($event) => {
            return onOpenType("getphonenumber", $event);
          }, index),
          n: common_vendor.o(($event) => {
            return onOpenType("error", $event);
          }, index),
          o: common_vendor.o(($event) => {
            return onOpenType("launchapp", $event);
          }, index),
          p: common_vendor.o(($event) => {
            return onOpenType("opensetting", $event);
          }, index),
          q: common_vendor.o(($event) => {
            return selectHandler(index);
          }, index),
          r: !item["disabled"] && !item["loading"] ? "up-action-sheet--hover" : "",
          s: index !== __props.actions.length - 1
        }, index !== __props.actions.length - 1 ? {
          t: "aa6e6bff-4-" + i0 + ",aa6e6bff-0",
          v: common_vendor.p({
            class: "data-v-aa6e6bff"
          })
        } : {}, {
          w: index
        });
      }),
      k: _ctx.lang,
      l: _ctx.sessionFrom,
      m: _ctx.sendMessageTitle,
      n: _ctx.sendMessagePath,
      o: _ctx.sendMessageImg,
      p: _ctx.showMessageCard,
      q: _ctx.appParameter,
      r: __props.wrapMaxHeight,
      s: __props.cancelText
    }, __props.cancelText ? {
      t: common_vendor.p({
        bgColor: "#eaeaec",
        height: "6",
        class: "data-v-aa6e6bff"
      })
    } : {}, {
      v: __props.cancelText
    }, __props.cancelText ? {
      w: common_vendor.t(__props.cancelText),
      x: common_vendor.o(() => {
      }, "46"),
      y: common_vendor.o(cancel, "f7")
    } : {}, {
      z: common_vendor.gei(_ctx, ""),
      A: common_vendor.o(closeHandler, "93"),
      B: common_vendor.p({
        show: __props.show,
        mode: "bottom",
        safeAreaInsetBottom: __props.safeAreaInsetBottom,
        round: __props.round,
        id: common_vendor.gei(_ctx, ""),
        class: "data-v-aa6e6bff"
      }),
      C: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aa6e6bff"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-action-sheet/up-action-sheet.js.map
