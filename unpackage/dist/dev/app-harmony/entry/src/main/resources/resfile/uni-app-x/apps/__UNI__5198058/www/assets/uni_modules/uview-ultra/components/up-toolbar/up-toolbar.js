import { t } from "../../libs/i18n/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataEvent: _setSharedDataEvent, setSharedDataStyle: _setSharedDataStyle, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpToolbarUpToolbar";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-toolbar"
  },
  __dynamicSharedData: true,
  __hash: "4d7bcfe8",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-toolbar/up-toolbar.uvue",
  __name: "up-toolbar",
  props: {
    show: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    confirmText: {
      type: String,
      default: "确认"
    },
    cancelColor: {
      type: String,
      default: "#909193"
    },
    confirmColor: {
      type: String,
      default: "#3c9cff"
    },
    title: {
      type: String,
      default: ""
    },
    rightSlot: {
      type: Boolean,
      default: false
    }
  },
  emits: ["confirm", "cancel"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpToolbarUpToolbarSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const elCancelText = computed(() => {
      if (props.cancelText == "取消" || props.cancelText == "") {
        return t("up_common_cancel", new UTSJSONObject({}));
      }
      return props.cancelText;
    });
    const elConfirmText = computed(() => {
      if (props.confirmText == "确认" || props.confirmText == "确定" || props.confirmText == "") {
        return t("up_common_confirm", new UTSJSONObject({}));
      }
      return props.confirmText;
    });
    const cancelStyle = computed(() => {
      let style = new UTSJSONObject({});
      if (props.cancelColor != "") {
        style["color"] = props.cancelColor;
      }
      return style;
    });
    const confirmStyle = computed(() => {
      let style = new UTSJSONObject({});
      if (props.confirmColor != "" && props.confirmColor != "#3c9cff") {
        style["color"] = props.confirmColor;
      }
      return style;
    });
    function noop() {
    }
    function cancel() {
      emit("cancel");
    }
    function confirm() {
      emit("confirm");
    }
    return () => {
      "raw js";
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.show));
      }, () => {
        _setSharedDataEvent(__sharedData, 7, cancel);
        _renderSharedDataEffect(() => {
          _setSharedDataStyle(__sharedData, 9, cancelStyle.value);
          _setSharedData(__sharedData, 10, _toDisplayString(elCancelText.value));
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 1, _toSharedDataBoolean(__props.title != ""));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedData(__sharedData, 2, _toDisplayString(__props.title));
          });
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 3, _toSharedDataBoolean(!__props.rightSlot));
        }, () => {
          _setSharedDataEvent(__sharedData, 4, confirm);
          _renderSharedDataEffect(() => {
            _setSharedDataStyle(__sharedData, 5, confirmStyle.value);
            _setSharedData(__sharedData, 6, _toDisplayString(elConfirmText.value));
          });
        }, () => {
          _createSharedDataSlot("right", null, null);
        }, 517);
        _setSharedDataEvent(__sharedData, 8, noop);
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=up-toolbar.js.map
