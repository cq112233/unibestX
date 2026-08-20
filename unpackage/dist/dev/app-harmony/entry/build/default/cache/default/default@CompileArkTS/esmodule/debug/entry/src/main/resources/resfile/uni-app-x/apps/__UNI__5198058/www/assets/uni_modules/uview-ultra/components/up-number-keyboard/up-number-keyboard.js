import { _ as __easycom_1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { h as randomArray } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, setSharedDataEvent: _setSharedDataEvent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataFor: _createSharedDataFor, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpNumberKeyboardUpNumberKeyboard";
const { ref, computed } = globalThis.Vue;
const dot = ".";
const cardX = "X";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-number-keyboard"
  },
  __dynamicSharedData: true,
  __hash: "509631a5",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-number-keyboard/up-number-keyboard.uvue",
  __name: "up-number-keyboard",
  props: {
    mode: {
      type: String,
      default: "number"
    },
    dotDisabled: {
      type: Boolean,
      default: true
    },
    random: {
      type: Boolean,
      default: false
    }
  },
  emits: ["change", "backspace"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpNumberKeyboardUpNumberKeyboardSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    let timer = null;
    function noop() {
    }
    const numList = computed(() => {
      let tmp = [];
      if (props.dotDisabled && props.mode == "number") {
        if (!props.random) {
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        } else {
          return randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
        }
      } else if (!props.dotDisabled && props.mode == "number") {
        if (!props.random) {
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, dot, 0];
        } else {
          return randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, dot, 0]);
        }
      } else if (props.mode == "card") {
        if (!props.random) {
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, cardX, 0];
        } else {
          return randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, cardX, 0]);
        }
      }
      return tmp;
    });
    function itemStyle(index) {
      let style = new UTSJSONObject({});
      if (props.mode == "number" && props.dotDisabled && index == 9) {
        style["width"] = "464rpx";
      }
      return style;
    }
    function backspaceClick() {
      emit("backspace");
      if (timer != null) {
        clearInterval(timer);
        timer = null;
      }
      timer = setInterval(() => {
        emit("backspace");
      }, 250);
    }
    function clearTimer() {
      if (timer != null) {
        clearInterval(timer);
        timer = null;
      }
    }
    function keyboardClick(val = null) {
      let res = val;
      if (!props.dotDisabled && val != dot && val != cardX) {
        res = parseInt(val.toString());
      }
      emit("change", res);
    }
    return () => {
      "raw js";
      const _component_up_icon = __easycom_1;
      _createSharedDataFor(_setSharedDataScoped(__sharedData, 0, _createSharedDataVFor(__sharedDataScope, () => {
        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
      })), () => {
        return numList.value;
      }, (__sharedData_VFor0, _for_item0, _for_key0) => {
        _setSharedDataEvent(__sharedData_VFor0, 1, () => {
          return keyboardClick(_for_item0.value);
        });
        _renderSharedDataEffect(() => {
          _setSharedDataStyle(__sharedData_VFor0, 2, [itemStyle(_for_key0.value)]);
          _setSharedData(__sharedData_VFor0, 3, _toDisplayString(_for_item0.value));
        });
        return null;
      }, (__sharedData_VFor0, item, index) => {
        return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
      });
      const n5 = _createSharedDataComponentWithFallback(_component_up_icon, "05b085d0", {
        name: "backspace",
        color: "#303133",
        size: "28"
      });
      _setSharedData(__sharedData, 1, n5?.sharedData);
      _setSharedDataEvent(__sharedData, 2, backspaceClick);
      _setSharedDataEvent(__sharedData, 3, clearTimer);
      _setSharedDataEvent(__sharedData, 4, noop);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=up-number-keyboard.js.map
