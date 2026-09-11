import { _ as __easycom_0 } from "../../../../uni_modules/lime-signature/components/l-signature/l-signature.js";
import { C as Card } from "../../basic/components/Card.js";
import { L as LimeSignatureToTempFilePathOptions } from "../../../../uni_modules/lime-signature/index.js";
import { s as setPageScrollEnabled } from "../../../utils/pageScroll.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, setSharedDataEvent: _setSharedDataEvent, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataFor: _createSharedDataFor, createSharedDataSelector: _createSharedDataSelector, setSharedDataClass: _setSharedDataClass, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, createSharedDataIf: _createSharedDataIf, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesFunctionComponentsSignatureCard";
const { onUnmounted, ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/pages/function/components/SignatureCard.uvue",
  __name: "SignatureCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionComponentsSignatureCardSharedData", sharedDataClassId: 0 })));
    const sigRef = ref(null);
    const penColor = ref("red");
    const penSize = ref(4);
    const openSmooth = ref(true);
    const signUrl = ref("");
    const colorList = ["#ef4444", "#000000", "#3b82f6", "#10b981", "#f59e0b"];
    const penSizeOptions = [1, 3, 5, 8, 12];
    function onCardTouchStart(_e) {
      setPageScrollEnabled(false);
    }
    function onCardTouchEnd(_e) {
      setPageScrollEnabled(true);
    }
    function preventScroll(_e) {
    }
    onUnmounted(() => {
      setPageScrollEnabled(true);
    });
    function onAction(type) {
      const el = sigRef.value;
      if (el == null) {
        uni.showToast({ title: "签名组件未就绪", icon: "none" });
        return null;
      }
      if (type === "clear") {
        el.$callMethod("clear");
        signUrl.value = "";
      } else if (type === "undo") {
        el.$callMethod("undo");
      } else if (type === "redo") {
        el.$callMethod("redo");
      } else if (type === "save") {
        el.$callMethod("canvasToTempFilePath", new LimeSignatureToTempFilePathOptions({
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
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_l_signature = __easycom_0;
      const n34 = _createSharedDataComponent(
        Card,
        "09bbf779",
        { title: "签名板 lime-signature" },
        {
          "default": _withSharedDataVaporCtx(() => {
            const n0 = _createSharedDataComponentWithFallback(_component_l_signature, "eac7f206", {
              style: "width: 100%; height: 100%;",
              "pen-color": () => {
                return penColor.value;
              },
              "pen-size": () => {
                return penSize.value;
              },
              "open-smooth": () => {
                return openSmooth.value;
              },
              "disable-scroll": true,
              "background-color": "#ffffff"
            });
            _setSharedData(__sharedData, 3, n0?.sharedData);
            _setTemplateRef(n0, sigRef, null, "sigRef");
            _setSharedDataEvent(__sharedData, 6, onCardTouchStart);
            _setSharedDataEvent(__sharedData, 7, onCardTouchEnd);
            _setSharedDataEvent(__sharedData, 8, onCardTouchEnd);
            _setSharedDataEvent(__sharedData, 9, preventScroll);
            _setSharedDataEvent(__sharedData, 10, () => {
              return onAction("save");
            });
            _setSharedDataEvent(__sharedData, 11, () => {
              return onAction("undo");
            });
            _setSharedDataEvent(__sharedData, 12, () => {
              return onAction("redo");
            });
            _setSharedDataEvent(__sharedData, 13, () => {
              return onAction("clear");
            });
            _createSharedDataFor(_setSharedDataScoped(__sharedData, 4, _createSharedDataVFor(__sharedDataScope, () => {
              return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
            })), () => {
              return colorList;
            }, (__sharedData_VFor0, _for_item0) => {
              _setSharedDataEvent(__sharedData_VFor0, 1, () => {
                return penColor.value = _for_item0.value;
              });
              _renderSharedDataEffect(() => {
                const _clr = _for_item0.value;
                _setSharedDataStyle(__sharedData_VFor0, 2, {
                  backgroundColor: _clr,
                  borderColor: penColor.value === _clr ? "#1e293b" : "transparent"
                });
              });
              return null;
            }, (__sharedData_VFor0, clr) => {
              return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(clr));
            }, 1);
            _renderSharedDataEffect(() => {
              return _setSharedData(__sharedData, 14, _toDisplayString(penSize.value));
            });
            const _selector23_0 = _createSharedDataSelector(() => {
              return penSize.value;
            });
            const _selector23_1 = _createSharedDataSelector(() => {
              return penSize.value;
            });
            const n23 = _createSharedDataFor(_setSharedDataScoped(__sharedData, 5, _createSharedDataVFor(__sharedDataScope, () => {
              return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 2 });
            })), () => {
              return penSizeOptions;
            }, (__sharedData_VFor1, _for_item1, _for_key1) => {
              _setSharedDataEvent(__sharedData_VFor1, 1, () => {
                return penSize.value = _for_item1.value;
              });
              _renderSharedDataEffect(() => {
                _setSharedDataClass(__sharedData_VFor1, 2, ["weapp-tw-border wtu-dhurvf-c wtu-1ia7rtq-w wtu-cjnkl2-x wtu-1icw4t1-g wtu-15uu4fg-a wtu-q3ffeg-h wtu-m0xl7g-i", _for_key1.value < penSizeOptions.length - 1 ? "wtu-rtg07c-j" : ""]);
                _setSharedData(__sharedData_VFor1, 5, _toDisplayString(_for_item1.value));
              });
              _selector23_0(_for_item1.value, () => {
                _setSharedDataStyle(__sharedData_VFor1, 3, { backgroundColor: penSize.value === _for_item1.value ? "#3b82f6" : "#e2e8f0" });
              });
              _selector23_1(_for_item1.value, () => {
                _setSharedDataStyle(__sharedData_VFor1, 4, { color: penSize.value === _for_item1.value ? "#ffffff" : "#475569" });
              });
              return null;
            }, (__sharedData_VFor1, sz, _j) => {
              return _setSharedData(__sharedData_VFor1, 0, _toDisplayString(sz));
            }, 1);
            n23.onReset(_selector23_0.reset);
            n23.onReset(_selector23_1.reset);
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 1, _toSharedDataBoolean(signUrl.value !== ""));
            }, () => {
              _renderSharedDataEffect(() => {
                return _setSharedDataAttr(__sharedData, 2, _toSharedDataString(signUrl.value));
              });
            }, null, 129);
          })
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n34.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const SignatureCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  SignatureCard as S
};
