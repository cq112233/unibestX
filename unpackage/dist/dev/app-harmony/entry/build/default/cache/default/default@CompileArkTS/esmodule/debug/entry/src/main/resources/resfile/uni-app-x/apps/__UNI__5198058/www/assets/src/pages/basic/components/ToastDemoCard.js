import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { t as toast, a as toastSuccess, b as toastError, c as toastWarning } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/toast&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "ToastDemoCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    function handleDefaultToast() {
      toast("这是一条通过 App.ku 全局组件触发的轻提示");
    }
    function handleSuccessToast() {
      toastSuccess("恭喜！全局 Toast 触发成功");
    }
    function handleErrorToast() {
      toastError("操作异常，全局 Toast 报错提示");
    }
    function handleWarningToast() {
      toastWarning("注意：这是一条全局警告轻提示");
    }
    const __returned__ = { handleDefaultToast, handleSuccessToast, handleErrorToast, handleWarningToast, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__10b981_": { "": { "backgroundImage": "none", "backgroundColor": "#10b981" } }, "bg-__3b82f6_": { "": { "backgroundImage": "none", "backgroundColor": "#3b82f6" } }, "bg-__ef4444_": { "": { "backgroundImage": "none", "backgroundColor": "#ef4444" } }, "bg-__f59e0b_": { "": { "backgroundImage": "none", "backgroundColor": "#f59e0b" } }, "border-color-__e2e8f0_": { "": { "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex": { "": { "display": "flex" } }, "flex-1": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "flex-col": { "": { "flexDirection": "column" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "h-40px": { "": { "height": 40 } }, "items-center": { "": { "alignItems": "center" } }, "justify-center": { "": { "justifyContent": "center" } }, "leading-20px": { "": { "lineHeight": "20px" } }, "mb-10px": { "": { "marginBottom": 10 } }, "mb-16px": { "": { "marginBottom": 16 } }, "mr-10px": { "": { "marginRight": 10 } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "rounded-12px": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "rounded-8px": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "text-__64748b_": { "": { "color": "#64748b" } }, "text-__ffffff_": { "": { "color": "#ffffff" } }, "text-12px": { "": { "fontSize": 12 } }, "text-13px": { "": { "fontSize": 13 } } };
const { createElementVNode: _createElementVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "全局 Toast 轻提示" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }, [
        _createElementVNode("text", { class: "text-12px text-__64748b_ leading-20px" }, " 通过 App.ku.uvue 全局挂载的 <up-toast />，直接导入 @/src/utils/toast 即可在任意页面与逻辑中唤起轻提示。 ")
      ]),
      _createElementVNode("view", { class: "flex flex-col" }, [
        _createElementVNode("view", { class: "flex flex-row mb-10px" }, [
          _createElementVNode("view", {
            class: "flex-1 mr-10px bg-__3b82f6_ rounded-8px h-40px flex flex-row items-center justify-center",
            onClick: $setup.handleDefaultToast
          }, [
            _createElementVNode("text", { class: "text-__ffffff_ text-13px font-bold" }, "默认 Toast")
          ]),
          _createElementVNode("view", {
            class: "flex-1 bg-__10b981_ rounded-8px h-40px flex flex-row items-center justify-center",
            onClick: $setup.handleSuccessToast
          }, [
            _createElementVNode("text", { class: "text-__ffffff_ text-13px font-bold" }, "成功 Toast")
          ])
        ]),
        _createElementVNode("view", { class: "flex flex-row" }, [
          _createElementVNode("view", {
            class: "flex-1 mr-10px bg-__ef4444_ rounded-8px h-40px flex flex-row items-center justify-center",
            onClick: $setup.handleErrorToast
          }, [
            _createElementVNode("text", { class: "text-__ffffff_ text-13px font-bold" }, "错误 Toast")
          ]),
          _createElementVNode("view", {
            class: "flex-1 bg-__f59e0b_ rounded-8px h-40px flex flex-row items-center justify-center",
            onClick: $setup.handleWarningToast
          }, [
            _createElementVNode("text", { class: "text-__ffffff_ text-13px font-bold" }, "警告 Toast")
          ])
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const ToastDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/ToastDemoCard.uvue"]]);
export {
  ToastDemoCard as T
};
//# sourceMappingURL=ToastDemoCard.js.map
