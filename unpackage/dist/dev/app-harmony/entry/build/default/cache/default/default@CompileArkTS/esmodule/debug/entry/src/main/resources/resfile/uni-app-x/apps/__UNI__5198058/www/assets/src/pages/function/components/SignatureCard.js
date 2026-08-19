import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-signature/components/l-signature/l-signature&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { L as LimeSignatureToTempFilePathOptions } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-signature/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "SignatureCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    let sigInstance = null;
    function onSigRef(el = null) {
      sigInstance = el;
    }
    const penColor = ref("red");
    const penSize = ref(4);
    const openSmooth = ref(true);
    const signUrl = ref("");
    const colorList = ["#ef4444", "#000000", "#3b82f6", "#10b981", "#f59e0b"];
    const penSizeOptions = [1, 3, 5, 8, 12];
    function onAction(type) {
      const el = sigInstance;
      if (el == null) {
        uni.showToast({ title: "签名组件未就绪", icon: "none" });
        return null;
      }
      if (type === "clear") {
        el.clear();
        signUrl.value = "";
      } else if (type === "undo") {
        el.undo();
      } else if (type === "redo") {
        el.redo();
      } else if (type === "save") {
        el.canvasToTempFilePath(new LimeSignatureToTempFilePathOptions({
          complete: null,
          format: null,
          success: (res) => {
            if (res.isEmpty) {
              uni.showToast({ title: "请先签名", icon: "none" });
              return null;
            }
            signUrl.value = res.tempFilePath;
            uni.showToast({ title: "签名保存成功", icon: "success" });
          },
          fail: (_err = null) => {
            uni.showToast({ title: "保存失败", icon: "error" });
          }
        }));
      }
    }
    const __returned__ = { get sigInstance() {
      return sigInstance;
    }, set sigInstance(v = null) {
      sigInstance = v;
    }, onSigRef, penColor, penSize, openSmooth, signUrl, colorList, penSizeOptions, onAction, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__10b981_": { "": { "backgroundImage": "none", "backgroundColor": "#10b981" } }, "bg-__3b82f6_": { "": { "backgroundImage": "none", "backgroundColor": "#3b82f6" } }, "bg-__ef4444_": { "": { "backgroundImage": "none", "backgroundColor": "#ef4444" } }, "bg-__f59e0b_": { "": { "backgroundImage": "none", "backgroundColor": "#f59e0b" } }, "border-color-__e2e8f0_": { "": { "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "border-width-2px": { "": { "borderTopWidth": 2, "borderRightWidth": 2, "borderBottomWidth": 2, "borderLeftWidth": 2 } }, "flex": { "": { "display": "flex" } }, "flex-1": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "h-120px": { "": { "height": 120 } }, "h-28px": { "": { "height": 28 } }, "h-32px": { "": { "height": 32 } }, "h-36px": { "": { "height": 36 } }, "items-center": { "": { "alignItems": "center" } }, "justify-between": { "": { "justifyContent": "space-between" } }, "justify-center": { "": { "justifyContent": "center" } }, "mb-12px": { "": { "marginBottom": 12 } }, "mb-16px": { "": { "marginBottom": 16 } }, "mb-8px": { "": { "marginBottom": 8 } }, "ml-6px": { "": { "marginLeft": 6 } }, "mr-6px": { "": { "marginRight": 6 } }, "none": { "": { "display": "none" } }, "overflow-hidden": { "": { "overflow": "hidden" } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "rounded-12px": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "rounded-14px": { "": { "borderTopLeftRadius": 14, "borderTopRightRadius": 14, "borderBottomRightRadius": 14, "borderBottomLeftRadius": 14 } }, "rounded-6px": { "": { "borderTopLeftRadius": 6, "borderTopRightRadius": 6, "borderBottomRightRadius": 6, "borderBottomLeftRadius": 6 } }, "rounded-8px": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "text-__475569_": { "": { "color": "#475569" } }, "text-__94a3b8_": { "": { "color": "#94a3b8" } }, "text-__ffffff_": { "": { "color": "#ffffff" } }, "text-12px": { "": { "fontSize": 12 } }, "text-13px": { "": { "fontSize": 13 } }, "w-28px": { "": { "width": 28 } }, "w-full": { "": { "width": "100%" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, normalizeStyle: _normalizeStyle, toDisplayString: _toDisplayString, normalizeClass: _normalizeClass, createCommentVNode: _createCommentVNode, withCtx: _withCtx, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_l_signature = resolveEasycom(__resolveDynamicComponent("l-signature"), __easycom_0);
  return _openBlock(), _createBlock($setup["Card"], { title: "签名板 lime-signature" }, {
    default: _withCtx(() => [
      _createElementVNode("view", {
        class: "rounded-12px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_ overflow-hidden",
        style: { "width": "100%", "height": "300px" }
      }, [
        _createVNode(_component_l_signature, {
          ref: $setup.onSigRef,
          "pen-color": $setup.penColor,
          "pen-size": $setup.penSize,
          "open-smooth": $setup.openSmooth,
          "disable-scroll": "",
          "background-color": "#ffffff"
        }, null, 8, ["pen-color", "pen-size", "open-smooth"])
      ]),
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }, [
        _createElementVNode("text", { class: "text-12px text-__94a3b8_ mb-12px" }, "画板操作"),
        _createElementVNode("view", { class: "flex-row mb-12px justify-between" }, [
          _createElementVNode("view", {
            class: "flex-1 h-36px rounded-8px bg-__10b981_ flex flex-row items-center justify-center mr-6px",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.onAction("save"))
          }, [
            _createElementVNode("text", { class: "text-__ffffff_ text-13px font-bold" }, "保存图片")
          ]),
          _createElementVNode("view", {
            class: "flex-1 h-36px rounded-8px bg-__f59e0b_ flex flex-row items-center justify-center mr-6px",
            onClick: _cache[1] || (_cache[1] = ($event) => $setup.onAction("undo"))
          }, [
            _createElementVNode("text", { class: "text-__ffffff_ text-13px font-bold" }, "撤销")
          ]),
          _createElementVNode("view", {
            class: "flex-1 h-36px rounded-8px bg-__3b82f6_ flex flex-row items-center justify-center mr-6px",
            onClick: _cache[2] || (_cache[2] = ($event) => $setup.onAction("redo"))
          }, [
            _createElementVNode("text", { class: "text-__ffffff_ text-13px font-bold" }, "重做")
          ]),
          _createElementVNode("view", {
            class: "flex-1 h-36px rounded-8px bg-__ef4444_ flex flex-row items-center justify-center",
            onClick: _cache[3] || (_cache[3] = ($event) => $setup.onAction("clear"))
          }, [
            _createElementVNode("text", { class: "text-__ffffff_ text-13px font-bold" }, "清空")
          ])
        ])
      ]),
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }, [
        _createElementVNode("text", { class: "text-12px text-__94a3b8_ mb-12px" }, "画笔设置"),
        _createElementVNode("view", { class: "flex-row justify-between items-center mb-12px" }, [
          _createElementVNode("text", { class: "text-13px text-__475569_" }, "画笔颜色"),
          _createElementVNode("view", { class: "flex-row" }, [
            (_openBlock(), _createElementBlock(
              _Fragment,
              null,
              _renderList($setup.colorList, (clr) => {
                return _createElementVNode("view", {
                  key: clr,
                  class: "w-28px h-28px rounded-14px ml-6px border-width-2px border-style-solid items-center justify-center",
                  style: _normalizeStyle({
                    backgroundColor: clr,
                    borderColor: $setup.penColor === clr ? "#1e293b" : "transparent"
                  }),
                  onClick: ($event) => $setup.penColor = clr
                }, null, 12, ["onClick"]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ]),
        _createElementVNode("view", { class: "flex-row justify-between items-center mb-12px" }, [
          _createElementVNode("text", { class: "text-13px text-__475569_" }, "画笔粗细"),
          _createElementVNode(
            "text",
            { class: "text-12px text-__94a3b8_" },
            _toDisplayString($setup.penSize) + "px",
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "flex-row mb-12px" }, [
          (_openBlock(), _createElementBlock(
            _Fragment,
            null,
            _renderList($setup.penSizeOptions, (sz, _j) => {
              return _createElementVNode("view", {
                key: sz,
                class: _normalizeClass(["flex-1 h-32px rounded-6px flex flex-row items-center justify-center", _j < $setup.penSizeOptions.length - 1 ? "mr-6px" : ""]),
                style: _normalizeStyle({ backgroundColor: $setup.penSize === sz ? "#3b82f6" : "#e2e8f0" }),
                onClick: ($event) => $setup.penSize = sz
              }, [
                _createElementVNode(
                  "text",
                  {
                    class: "text-12px font-bold",
                    style: _normalizeStyle({ color: $setup.penSize === sz ? "#ffffff" : "#475569" })
                  },
                  _toDisplayString(sz) + "px",
                  5
                  /* TEXT, STYLE */
                )
              ], 14, ["onClick"]);
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ])
      ]),
      $setup.signUrl !== "" ? (_openBlock(), _createElementBlock("view", {
        key: 0,
        class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_ items-center"
      }, [
        _createElementVNode("text", { class: "text-12px text-__94a3b8_ mb-8px" }, "签名预览"),
        _createElementVNode("image", {
          src: $setup.signUrl,
          class: "w-full h-120px rounded-8px border-width-1px border-style-solid border-color-__e2e8f0_",
          mode: "aspectFit"
        }, null, 8, ["src"])
      ])) : _createCommentVNode("v-if", true)
    ]),
    _: 1
    /* STABLE */
  });
}
const SignatureCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/function/components/SignatureCard.uvue"]]);
export {
  SignatureCard as S
};
//# sourceMappingURL=SignatureCard.js.map
