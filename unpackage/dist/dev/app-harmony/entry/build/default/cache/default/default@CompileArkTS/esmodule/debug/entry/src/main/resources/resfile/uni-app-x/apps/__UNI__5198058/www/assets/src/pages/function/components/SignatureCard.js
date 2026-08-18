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
const _style_0 = {"wtu-1dvrapb-0":{"":{"overflow":"hidden"}},"wtu-1cr1yu4-1":{"":{"color":"#94a3b8"}},"wtu-15uu4fg-2":{"":{"flexDirection":"row"}},"wtu-yfu56f-3":{"":{"justifyContent":"space-between"}},"wtu-dhurvf-4":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"wtu-1jk32ls-5":{"":{"backgroundColor":"#10b981"}},"wtu-1icw4t1-6":{"":{"display":"flex"}},"wtu-q3ffeg-7":{"":{"alignItems":"center"}},"wtu-m0xl7g-8":{"":{"justifyContent":"center"}},"wtu-i6srrl-9":{"":{"color":"#ffffff"}},"wtu-19k59p-a":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-ewjr3a-b":{"":{"backgroundColor":"#f59e0b"}},"wtu-v6oeps-c":{"":{"backgroundColor":"#3b82f6"}},"wtu-han5s8-d":{"":{"backgroundColor":"#ef4444"}},"wtu-j8xvyj-e":{"":{"color":"#475569"}},"wtu-849arj-f":{"":{"width":"100%"}},"flex":{"":{"display":"flex"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, normalizeStyle: _normalizeStyle, toDisplayString: _toDisplayString, normalizeClass: _normalizeClass, createCommentVNode: _createCommentVNode, withCtx: _withCtx, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_l_signature = resolveEasycom(__resolveDynamicComponent("l-signature"), __easycom_0);
  return _openBlock(), _createBlock($setup["Card"], { title: "签名板 lime-signature" }, {
    default: _withCtx(() => [
      _createElementVNode("view", {
        class: "rounded-12px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0] wtu-1dvrapb-0",
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
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }, [
        _createElementVNode("text", { class: "text-12px wtu-1cr1yu4-1 mb-12px" }, "画板操作"),
        _createElementVNode("view", { class: "wtu-15uu4fg-2 mb-12px wtu-yfu56f-3" }, [
          _createElementVNode("view", {
            class: "wtu-dhurvf-4 h-36px rounded-8px wtu-1jk32ls-5 wtu-1icw4t1-6 wtu-15uu4fg-2 wtu-q3ffeg-7 wtu-m0xl7g-8 mr-6px",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.onAction("save"))
          }, [
            _createElementVNode("text", { class: "wtu-i6srrl-9 text-13px wtu-19k59p-a" }, "保存图片")
          ]),
          _createElementVNode("view", {
            class: "wtu-dhurvf-4 h-36px rounded-8px wtu-ewjr3a-b wtu-1icw4t1-6 wtu-15uu4fg-2 wtu-q3ffeg-7 wtu-m0xl7g-8 mr-6px",
            onClick: _cache[1] || (_cache[1] = ($event) => $setup.onAction("undo"))
          }, [
            _createElementVNode("text", { class: "wtu-i6srrl-9 text-13px wtu-19k59p-a" }, "撤销")
          ]),
          _createElementVNode("view", {
            class: "wtu-dhurvf-4 h-36px rounded-8px wtu-v6oeps-c wtu-1icw4t1-6 wtu-15uu4fg-2 wtu-q3ffeg-7 wtu-m0xl7g-8 mr-6px",
            onClick: _cache[2] || (_cache[2] = ($event) => $setup.onAction("redo"))
          }, [
            _createElementVNode("text", { class: "wtu-i6srrl-9 text-13px wtu-19k59p-a" }, "重做")
          ]),
          _createElementVNode("view", {
            class: "wtu-dhurvf-4 h-36px rounded-8px wtu-han5s8-d wtu-1icw4t1-6 wtu-15uu4fg-2 wtu-q3ffeg-7 wtu-m0xl7g-8",
            onClick: _cache[3] || (_cache[3] = ($event) => $setup.onAction("clear"))
          }, [
            _createElementVNode("text", { class: "wtu-i6srrl-9 text-13px wtu-19k59p-a" }, "清空")
          ])
        ])
      ]),
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }, [
        _createElementVNode("text", { class: "text-12px wtu-1cr1yu4-1 mb-12px" }, "画笔设置"),
        _createElementVNode("view", { class: "wtu-15uu4fg-2 wtu-yfu56f-3 wtu-q3ffeg-7 mb-12px" }, [
          _createElementVNode("text", { class: "text-13px wtu-j8xvyj-e" }, "画笔颜色"),
          _createElementVNode("view", { class: "wtu-15uu4fg-2" }, [
            (_openBlock(), _createElementBlock(
              _Fragment,
              null,
              _renderList($setup.colorList, (clr) => {
                return _createElementVNode("view", {
                  key: clr,
                  class: "w-28px h-28px rounded-14px ml-6px border-width-2px border-style-solid wtu-q3ffeg-7 wtu-m0xl7g-8",
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
        _createElementVNode("view", { class: "wtu-15uu4fg-2 wtu-yfu56f-3 wtu-q3ffeg-7 mb-12px" }, [
          _createElementVNode("text", { class: "text-13px wtu-j8xvyj-e" }, "画笔粗细"),
          _createElementVNode(
            "text",
            { class: "text-12px wtu-1cr1yu4-1" },
            _toDisplayString($setup.penSize) + "px",
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-15uu4fg-2 mb-12px" }, [
          (_openBlock(), _createElementBlock(
            _Fragment,
            null,
            _renderList($setup.penSizeOptions, (sz, _j) => {
              return _createElementVNode("view", {
                key: sz,
                class: _normalizeClass(["wtu-dhurvf-4 h-32px rounded-6px wtu-1icw4t1-6 wtu-15uu4fg-2 wtu-q3ffeg-7 wtu-m0xl7g-8", _j < $setup.penSizeOptions.length - 1 ? "mr-6px" : ""]),
                style: _normalizeStyle({ backgroundColor: $setup.penSize === sz ? "#3b82f6" : "#e2e8f0" }),
                onClick: ($event) => $setup.penSize = sz
              }, [
                _createElementVNode(
                  "text",
                  {
                    class: "text-12px wtu-19k59p-a",
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
        class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0] wtu-q3ffeg-7"
      }, [
        _createElementVNode("text", { class: "text-12px wtu-1cr1yu4-1 mb-8px" }, "签名预览"),
        _createElementVNode("image", {
          src: $setup.signUrl,
          class: "wtu-849arj-f h-120px rounded-8px border-width-1px border-style-solid border-color-[#e2e8f0]",
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
