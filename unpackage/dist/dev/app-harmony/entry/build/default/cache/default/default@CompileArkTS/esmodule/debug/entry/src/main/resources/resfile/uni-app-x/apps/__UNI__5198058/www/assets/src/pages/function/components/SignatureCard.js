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
const _style_0 = {"wtu-121thbv-0":{"":{"borderTopLeftRadius":12,"borderTopRightRadius":12,"borderBottomRightRadius":12,"borderBottomLeftRadius":12}},"wtu-1bsz7w5-1":{"":{"marginBottom":16}},"wtu-14qjfb2-2":{"":{"--tw-border-style":"solid","borderTopStyle":"var(--tw-border-style)","borderRightStyle":"var(--tw-border-style)","borderBottomStyle":"var(--tw-border-style)","borderLeftStyle":"var(--tw-border-style)","borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1}},"wtu-kdfn8q-3":{"":{"--tw-border-style":"solid","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}},"wtu-iddhag-4":{"":{"borderTopColor":"#e2e8f0","borderRightColor":"#e2e8f0","borderBottomColor":"#e2e8f0","borderLeftColor":"#e2e8f0"}},"wtu-1dvrapb-5":{"":{"overflow":"hidden"}},"wtu-p8z8w4-6":{"":{"paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16}},"wtu-gfe5sd-7":{"":{"fontSize":12}},"wtu-1cr1yu4-8":{"":{"color":"#94a3b8"}},"wtu-c60ml5-9":{"":{"marginBottom":12}},"wtu-15uu4fg-a":{"":{"flexDirection":"row"}},"wtu-yfu56f-b":{"":{"justifyContent":"space-between"}},"wtu-dhurvf-c":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"wtu-1kpqwy-d":{"":{"height":36}},"wtu-11akng4-e":{"":{"borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"wtu-1jk32ls-f":{"":{"backgroundColor":"#10b981"}},"wtu-1icw4t1-g":{"":{"display":"flex"}},"wtu-q3ffeg-h":{"":{"alignItems":"center"}},"wtu-m0xl7g-i":{"":{"justifyContent":"center"}},"wtu-rtg07c-j":{"":{"marginRight":6}},"wtu-i6srrl-k":{"":{"color":"#ffffff"}},"wtu-1567i1s-l":{"":{"fontSize":13}},"wtu-19k59p-m":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-ewjr3a-n":{"":{"backgroundColor":"#f59e0b"}},"wtu-v6oeps-o":{"":{"backgroundColor":"#3b82f6"}},"wtu-han5s8-p":{"":{"backgroundColor":"#ef4444"}},"wtu-j8xvyj-q":{"":{"color":"#475569"}},"wtu-1bzq6ig-r":{"":{"width":28}},"wtu-iw9emz-s":{"":{"height":28}},"wtu-tzj4ax-t":{"":{"borderTopLeftRadius":14,"borderTopRightRadius":14,"borderBottomRightRadius":14,"borderBottomLeftRadius":14}},"wtu-uw41ie-u":{"":{"marginLeft":6}},"wtu-1cu0ly5-v":{"":{"--tw-border-style":"solid","borderTopStyle":"var(--tw-border-style)","borderRightStyle":"var(--tw-border-style)","borderBottomStyle":"var(--tw-border-style)","borderLeftStyle":"var(--tw-border-style)","borderTopWidth":2,"borderRightWidth":2,"borderBottomWidth":2,"borderLeftWidth":2}},"wtu-1ia7rtq-w":{"":{"height":32}},"wtu-cjnkl2-x":{"":{"borderTopLeftRadius":6,"borderTopRightRadius":6,"borderBottomRightRadius":6,"borderBottomLeftRadius":6}},"wtu-18wy7bw-y":{"":{"width":60}},"wtu-comc8v-z":{"":{"borderTopLeftRadius":16,"borderTopRightRadius":16,"borderBottomRightRadius":16,"borderBottomLeftRadius":16}},"wtu-1nsxweq-10":{"":{"marginBottom":8}},"wtu-849arj-11":{"":{"width":"100%"}},"wtu-bsmas6-12":{"":{"height":120}},"flex":{"":{"display":"flex"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, normalizeStyle: _normalizeStyle, toDisplayString: _toDisplayString, normalizeClass: _normalizeClass, createCommentVNode: _createCommentVNode, withCtx: _withCtx, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_l_signature = resolveEasycom(__resolveDynamicComponent("l-signature"), __easycom_0);
  return _openBlock(), _createBlock($setup["Card"], { title: "签名板 lime-signature" }, {
    default: _withCtx(() => [
      _createElementVNode("view", {
        class: "wtu-121thbv-0 wtu-1bsz7w5-1 wtu-14qjfb2-2 wtu-kdfn8q-3 wtu-iddhag-4 wtu-1dvrapb-5",
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
      _createElementVNode("view", { class: "wtu-121thbv-0 wtu-p8z8w4-6 wtu-1bsz7w5-1 wtu-14qjfb2-2 wtu-kdfn8q-3 wtu-iddhag-4" }, [
        _createElementVNode("text", { class: "wtu-gfe5sd-7 wtu-1cr1yu4-8 wtu-c60ml5-9" }, "画板操作"),
        _createElementVNode("view", { class: "wtu-15uu4fg-a wtu-c60ml5-9 wtu-yfu56f-b" }, [
          _createElementVNode("view", {
            class: "wtu-dhurvf-c wtu-1kpqwy-d wtu-11akng4-e wtu-1jk32ls-f wtu-1icw4t1-g wtu-15uu4fg-a wtu-q3ffeg-h wtu-m0xl7g-i wtu-rtg07c-j",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.onAction("save"))
          }, [
            _createElementVNode("text", { class: "wtu-i6srrl-k wtu-1567i1s-l wtu-19k59p-m" }, "保存图片")
          ]),
          _createElementVNode("view", {
            class: "wtu-dhurvf-c wtu-1kpqwy-d wtu-11akng4-e wtu-ewjr3a-n wtu-1icw4t1-g wtu-15uu4fg-a wtu-q3ffeg-h wtu-m0xl7g-i wtu-rtg07c-j",
            onClick: _cache[1] || (_cache[1] = ($event) => $setup.onAction("undo"))
          }, [
            _createElementVNode("text", { class: "wtu-i6srrl-k wtu-1567i1s-l wtu-19k59p-m" }, "撤销")
          ]),
          _createElementVNode("view", {
            class: "wtu-dhurvf-c wtu-1kpqwy-d wtu-11akng4-e wtu-v6oeps-o wtu-1icw4t1-g wtu-15uu4fg-a wtu-q3ffeg-h wtu-m0xl7g-i wtu-rtg07c-j",
            onClick: _cache[2] || (_cache[2] = ($event) => $setup.onAction("redo"))
          }, [
            _createElementVNode("text", { class: "wtu-i6srrl-k wtu-1567i1s-l wtu-19k59p-m" }, "重做")
          ]),
          _createElementVNode("view", {
            class: "wtu-dhurvf-c wtu-1kpqwy-d wtu-11akng4-e wtu-han5s8-p wtu-1icw4t1-g wtu-15uu4fg-a wtu-q3ffeg-h wtu-m0xl7g-i",
            onClick: _cache[3] || (_cache[3] = ($event) => $setup.onAction("clear"))
          }, [
            _createElementVNode("text", { class: "wtu-i6srrl-k wtu-1567i1s-l wtu-19k59p-m" }, "清空")
          ])
        ])
      ]),
      _createElementVNode("view", { class: "wtu-121thbv-0 wtu-p8z8w4-6 wtu-1bsz7w5-1 wtu-14qjfb2-2 wtu-kdfn8q-3 wtu-iddhag-4" }, [
        _createElementVNode("text", { class: "wtu-gfe5sd-7 wtu-1cr1yu4-8 wtu-c60ml5-9" }, "画笔设置"),
        _createElementVNode("view", { class: "wtu-15uu4fg-a wtu-yfu56f-b wtu-q3ffeg-h wtu-c60ml5-9" }, [
          _createElementVNode("text", { class: "wtu-1567i1s-l wtu-j8xvyj-q" }, "画笔颜色"),
          _createElementVNode("view", { class: "wtu-15uu4fg-a" }, [
            (_openBlock(), _createElementBlock(
              _Fragment,
              null,
              _renderList($setup.colorList, (clr) => {
                return _createElementVNode("view", {
                  key: clr,
                  class: "wtu-1bzq6ig-r wtu-iw9emz-s wtu-tzj4ax-t wtu-uw41ie-u wtu-1cu0ly5-v wtu-kdfn8q-3 wtu-q3ffeg-h wtu-m0xl7g-i",
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
        _createElementVNode("view", { class: "wtu-15uu4fg-a wtu-yfu56f-b wtu-q3ffeg-h wtu-c60ml5-9" }, [
          _createElementVNode("text", { class: "wtu-1567i1s-l wtu-j8xvyj-q" }, "画笔粗细"),
          _createElementVNode(
            "text",
            { class: "wtu-gfe5sd-7 wtu-1cr1yu4-8" },
            _toDisplayString($setup.penSize) + "px",
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-15uu4fg-a wtu-c60ml5-9" }, [
          (_openBlock(), _createElementBlock(
            _Fragment,
            null,
            _renderList($setup.penSizeOptions, (sz, _j) => {
              return _createElementVNode("view", {
                key: sz,
                class: _normalizeClass(["wtu-dhurvf-c wtu-1ia7rtq-w wtu-cjnkl2-x wtu-1icw4t1-g wtu-15uu4fg-a wtu-q3ffeg-h wtu-m0xl7g-i", _j < $setup.penSizeOptions.length - 1 ? "wtu-rtg07c-j" : ""]),
                style: _normalizeStyle({ backgroundColor: $setup.penSize === sz ? "#3b82f6" : "#e2e8f0" }),
                onClick: ($event) => $setup.penSize = sz
              }, [
                _createElementVNode(
                  "text",
                  {
                    class: "wtu-gfe5sd-7 wtu-19k59p-m",
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
        class: "wtu-121thbv-0 wtu-p8z8w4-6 wtu-1bsz7w5-1 wtu-14qjfb2-2 wtu-kdfn8q-3 wtu-iddhag-4 wtu-q3ffeg-h"
      }, [
        _createElementVNode("text", { class: "wtu-gfe5sd-7 wtu-1cr1yu4-8 wtu-1nsxweq-10" }, "签名预览"),
        _createElementVNode("image", {
          src: $setup.signUrl,
          class: "wtu-849arj-11 wtu-bsmas6-12 wtu-11akng4-e wtu-14qjfb2-2 wtu-kdfn8q-3 wtu-iddhag-4",
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
