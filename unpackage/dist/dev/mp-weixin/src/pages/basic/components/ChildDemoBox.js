"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "ChildDemoBox",
  props: {
    title: {
      type: String,
      default: "通信子组件"
    },
    count: {
      type: Number,
      default: 0
    },
    tags: {
      type: Array,
      default: () => {
        return ["Vue3", "uni-app X", "UTS"];
      }
    }
  },
  emits: ["add", "reset", "send-msg"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const emit = __emit;
    const inputMsg = common_vendor.ref("Hello Parent from Child!");
    function handleAdd() {
      emit("add", 1);
    }
    function handleReset() {
      emit("reset");
    }
    function handleSendMsg() {
      if (inputMsg.value.trim() == "") {
        common_vendor.index.showToast({
          title: "请输入消息内容",
          icon: "none"
        });
        return null;
      }
      emit("send-msg", inputMsg.value);
      common_vendor.index.showToast({
        title: "消息已发送",
        icon: "success"
      });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.t(__props.title),
        b: common_vendor.t(__props.count),
        c: common_vendor.f(__props.tags, (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: common_vendor.t(item),
            c: "itemSlot-" + i0,
            d: common_vendor.r("itemSlot", {
              item,
              index
            }, i0),
            e: index
          };
        }),
        d: common_vendor.o(handleAdd, "0d"),
        e: common_vendor.o(handleReset, "97"),
        f: inputMsg.value,
        g: common_vendor.o(($event) => {
          return inputMsg.value = $event.detail.value;
        }, "1a"),
        h: common_vendor.o(handleSendMsg, "9a"),
        i: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        j: `${_ctx.u_s_b_h}px`,
        k: `${_ctx.u_s_a_i_b}px`,
        l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1816f19c"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/ChildDemoBox.js.map
