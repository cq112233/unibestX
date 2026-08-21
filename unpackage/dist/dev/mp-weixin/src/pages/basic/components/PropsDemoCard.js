"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Math) {
  (common_vendor.unref(ChildDemoBox) + common_vendor.unref(Card))();
}
const Card = () => "./Card.js";
const ChildDemoBox = () => "./ChildDemoBox.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "PropsDemoCard",
  setup(__props) {
    const parentCount = common_vendor.ref(10);
    const childMessage = common_vendor.ref("暂无子组件消息");
    const tagList = common_vendor.ref(["响应式 Props 传递", "Emits 事件监听与回传", "具名 Header/Footer 插槽", "具名 Slot 作用域传参"]);
    function onChildAdd(delta) {
      parentCount.value += delta;
    }
    function onChildReset() {
      parentCount.value = 0;
      childMessage.value = "已被子组件重置为 0";
    }
    function onChildSendMsg(msg) {
      childMessage.value = msg;
    }
    function addFiveFromParent() {
      parentCount.value += 5;
    }
    function resetParent() {
      parentCount.value = 10;
      childMessage.value = "已重置为初始状态";
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.t(parentCount.value),
        b: common_vendor.t(childMessage.value),
        c: common_vendor.o(addFiveFromParent, "5a"),
        d: common_vendor.o(resetParent, "2d"),
        e: common_vendor.w((_a, s0, i0) => {
          var item = _a.item, index = _a.index;
          return {
            a: common_vendor.t(index + 1),
            b: common_vendor.t(item),
            c: common_vendor.t(item),
            d: i0,
            e: s0
          };
        }, {
          name: "itemSlot",
          path: "e",
          vueId: "9daf880a-1,9daf880a-0"
        }),
        f: common_vendor.o(onChildAdd, "06"),
        g: common_vendor.o(onChildReset, "c9"),
        h: common_vendor.o(onChildSendMsg, "ad"),
        i: common_vendor.p({
          title: "组件通信演示子节点",
          count: parentCount.value,
          tags: tagList.value,
          class: "data-v-9daf880a"
        }),
        j: common_vendor.gei(_ctx, ""),
        k: common_vendor.p({
          title: "父子组件传参 & 具名插槽演示",
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-9daf880a"
        }),
        l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9daf880a"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/PropsDemoCard.js.map
