const { defineComponent, ref, openBlock, createBlock, withCtx, createCommentVNode, createElementVNode, toDisplayString, createVNode } = globalThis.Vue
import { C as Card } from "./Card.js";
import { C as ChildDemoBox } from "./ChildDemoBox.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PropsDemoCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const parentCount = ref(10);
    const childMessage = ref("暂无子组件消息");
    const tagList = ref(["响应式 Props 传递", "Emits 事件监听与回传", "具名 Header/Footer 插槽", "具名 Slot 作用域传参"]);
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
    const __returned__ = { parentCount, childMessage, tagList, onChildAdd, onChildReset, onChildSendMsg, addFiveFromParent, resetParent, get Card() {
      return Card;
    }, get ChildDemoBox() {
      return ChildDemoBox;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__2563eb_": { "": { "backgroundImage": "none", "backgroundColor": "#2563eb" } }, "bg-__64748b_": { "": { "backgroundImage": "none", "backgroundColor": "#64748b" } }, "bg-__dbeafe_": { "": { "backgroundImage": "none", "backgroundColor": "#dbeafe" } }, "bg-__eff6ff_": { "": { "backgroundImage": "none", "backgroundColor": "#eff6ff" } }, "bg-__f0fdf4_": { "": { "backgroundImage": "none", "backgroundColor": "#f0fdf4" } }, "border-color-__bbf7d0_": { "": { "borderTopColor": "#bbf7d0", "borderRightColor": "#bbf7d0", "borderBottomColor": "#bbf7d0", "borderLeftColor": "#bbf7d0" } }, "border-color-__bfdbfe_": { "": { "borderTopColor": "#bfdbfe", "borderRightColor": "#bfdbfe", "borderBottomColor": "#bfdbfe", "borderLeftColor": "#bfdbfe" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "font-medium": { "": { "fontWeight": 500 } }, "h-30px": { "": { "height": 30 } }, "items-center": { "": { "alignItems": "center" } }, "justify-between": { "": { "justifyContent": "space-between" } }, "justify-center": { "": { "justifyContent": "center" } }, "mb-10px": { "": { "marginBottom": 10 } }, "mb-14px": { "": { "marginBottom": 14 } }, "mb-4px": { "": { "marginBottom": 4 } }, "mb-6px": { "": { "marginBottom": 6 } }, "ml-6px": { "": { "marginLeft": 6 } }, "ml-auto": { "": { "marginLeft": "auto" } }, "mr-6px": { "": { "marginRight": 6 } }, "mr-8px": { "": { "marginRight": 8 } }, "p-14px": { "": { "paddingTop": 14, "paddingRight": 14, "paddingBottom": 14, "paddingLeft": 14 } }, "p-8px": { "": { "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8 } }, "px-10px": { "": { "paddingLeft": 10, "paddingRight": 10 } }, "px-6px": { "": { "paddingLeft": 6, "paddingRight": 6 } }, "py-2px": { "": { "paddingTop": 2, "paddingBottom": 2 } }, "rounded-12px": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "rounded-4px": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "rounded-6px": { "": { "borderTopLeftRadius": 6, "borderTopRightRadius": 6, "borderBottomRightRadius": 6, "borderBottomLeftRadius": 6 } }, "text-__059669_": { "": { "color": "#059669" } }, "text-__10b981_": { "": { "color": "#10b981" } }, "text-__15803d_": { "": { "color": "#15803d" } }, "text-__166534_": { "": { "color": "#166534" } }, "text-__1d4ed8_": { "": { "color": "#1d4ed8" } }, "text-__1e293b_": { "": { "color": "#1e293b" } }, "text-__1e40af_": { "": { "color": "#1e40af" } }, "text-__22c55e_": { "": { "color": "#22c55e" } }, "text-__3b82f6_": { "": { "color": "#3b82f6" } }, "text-__64748b_": { "": { "color": "#64748b" } }, "text-10px": { "": { "fontSize": 10 } }, "text-11px": { "": { "fontSize": 11 } }, "text-12px": { "": { "fontSize": 12 } }, "text-14px": { "": { "fontSize": 14 } }, "text-white": { "": { "color": "rgba(255,255,255,var(--un-color-opacity,1))" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Card"], { title: "父子组件传参 & 具名插槽演示" }, {
    default: withCtx(() => [
      createCommentVNode(" 父组件状态展示面板 "),
      createElementVNode("view", { class: "bg-__eff6ff_ rounded-12px p-14px mb-14px border-width-1px border-style-solid border-color-__bfdbfe_" }, [
        createElementVNode("text", { class: "text-14px font-bold text-__1e40af_ mb-6px" }, "👨‍👩‍👧 父组件状态管理面板"),
        createElementVNode("view", { class: "flex-row items-center mb-4px" }, [
          createElementVNode("text", { class: "text-12px text-__3b82f6_" }, "父组件 Count 变量: "),
          createElementVNode(
            "text",
            { class: "text-14px font-bold text-__1d4ed8_ ml-6px" },
            toDisplayString($setup.parentCount),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("view", { class: "flex-row items-center mb-10px" }, [
          createElementVNode("text", { class: "text-12px text-__3b82f6_" }, "接收到的子组件消息: "),
          createElementVNode(
            "text",
            { class: "text-12px font-bold text-__059669_ ml-6px" },
            toDisplayString($setup.childMessage),
            1
            /* TEXT */
          )
        ]),
        createCommentVNode(" 父组件主动修改数据操作组 "),
        createElementVNode("view", { class: "flex-row items-center" }, [
          createElementVNode("view", {
            class: "bg-__2563eb_ rounded-6px px-10px h-30px flex-row items-center justify-center mr-8px",
            onClick: $setup.addFiveFromParent
          }, [
            createElementVNode("text", { class: "text-white text-12px" }, "父组件直接 Count + 5")
          ]),
          createElementVNode("view", {
            class: "bg-__64748b_ rounded-6px px-10px h-30px flex-row items-center justify-center",
            onClick: $setup.resetParent
          }, [
            createElementVNode("text", { class: "text-white text-12px" }, "父组件重置状态")
          ])
        ])
      ]),
      createCommentVNode(" 子组件嵌套调用区 "),
      createVNode($setup["ChildDemoBox"], {
        title: "组件通信演示子节点",
        count: $setup.parentCount,
        tags: $setup.tagList,
        onAdd: $setup.onChildAdd,
        onReset: $setup.onChildReset,
        onSendMsg: $setup.onChildSendMsg
      }, {
        header: withCtx(() => [
          createElementVNode("view", { class: "flex-row items-center justify-between" }, [
            createElementVNode("text", { class: "text-14px font-bold text-__1e293b_" }, "🏷️ 父组件填入的具名 Header 插槽"),
            createElementVNode("text", { class: "text-11px text-__3b82f6_ bg-__dbeafe_ px-6px py-2px rounded-4px" }, "自定义 Header")
          ])
        ]),
        itemSlot: withCtx(({ item, index }) => [
          createElementVNode("view", { class: "flex-row items-center bg-__f0fdf4_ rounded-6px p-8px border-width-1px border-style-solid border-color-__bbf7d0_" }, [
            createElementVNode(
              "text",
              { class: "text-11px font-bold text-__15803d_ mr-6px" },
              "#" + toDisplayString(index + 1),
              1
              /* TEXT */
            ),
            createElementVNode(
              "text",
              { class: "text-12px text-__166534_ font-medium" },
              toDisplayString(item),
              1
              /* TEXT */
            ),
            createElementVNode(
              "text",
              { class: "text-10px text-__22c55e_ ml-auto" },
              "具名Slot传参: " + toDisplayString(item),
              1
              /* TEXT */
            )
          ])
        ]),
        footer: withCtx(() => [
          createElementVNode("view", { class: "flex-row items-center justify-between" }, [
            createElementVNode("text", { class: "text-11px text-__64748b_" }, "📌 父组件填入的具名 Footer 插槽"),
            createElementVNode("text", { class: "text-11px text-__10b981_" }, "双向通信验证成功")
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["count", "tags"])
    ]),
    _: 1
    /* STABLE */
  });
}
const PropsDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/PropsDemoCard.uvue"]]);
export {
  PropsDemoCard as P
};
//# sourceMappingURL=PropsDemoCard.js.map
