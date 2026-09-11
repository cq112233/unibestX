import { _ as __easycom_1$1 } from "../up-line/up-line.js";
import { d as defProps } from "./collapse.js";
import { a as array, e as empty } from "../../libs/function/test.js";
import "../../libs/function/digit.js";
import "../../libs/config/config.js";
import { U as UP_COLLAPSE_PROPS, a as UP_COLLAPSE_REGISTER, b as UP_COLLAPSE_UNREGISTER, c as UP_COLLAPSE_TOGGLE } from "./collapse-common.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCollapseUpCollapse";
const { computed, onMounted, provide, watch } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-collapse"
  },
  __dynamicSharedData: true,
  __className,
  __filename: "uni_modules/uview-ultra/components/up-collapse/up-collapse.uvue",
  __name: "up-collapse",
  props: {
    value: {
      type: [String, Number, Array],
      default: () => {
        return defProps.getString("collapse.value");
      }
    },
    accordion: {
      type: Boolean,
      default: defProps.getBoolean("collapse.accordion")
    },
    border: {
      type: Boolean,
      default: defProps.getBoolean("collapse.border")
    }
  },
  emits: ["change", "open", "close"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpCollapseUpCollapseSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const parentDataSelf = computed(() => {
      return new UTSJSONObject({
        accordion: props.accordion,
        border: props.border,
        value: props.value
      });
    });
    provide(UP_COLLAPSE_PROPS, parentDataSelf);
    let childNodes = [];
    function validateValue() {
      const v = parentDataSelf.value["value"];
      if (props.accordion) {
        if (array(v))
          ;
        return null;
      }
      if (array(v)) {
        return null;
      }
      if (!empty(v))
        ;
    }
    function shouldOpen(name) {
      var _a2;
      const v = parentDataSelf.value["value"];
      if (v == null) {
        return false;
      }
      if (props.accordion) {
        return name == ((_a2 = v.toString()) !== null && _a2 !== void 0 ? _a2 : "");
      }
      if (!array(v)) {
        return false;
      }
      const valueArr = v;
      return valueArr.some((element) => {
        return element == name;
      });
    }
    function syncChildren() {
      childNodes.forEach((child) => {
        child.setOpen(shouldOpen(child.name));
      });
    }
    const registerChild = (child) => {
      const existIndex = childNodes.findIndex((item) => {
        return item.elId == child.elId;
      });
      if (existIndex == -1) {
        childNodes.push(child);
        child.setOpen(shouldOpen(child.name));
      }
    };
    const unregisterChild = (elId) => {
      childNodes = childNodes.filter((item) => {
        return item.elId != elId;
      });
    };
    provide(UP_COLLAPSE_REGISTER, registerChild);
    provide(UP_COLLAPSE_UNREGISTER, unregisterChild);
    function buildChangeArr() {
      const changeArr = [];
      childNodes.forEach((child, index) => {
        changeArr.push(new UTSJSONObject({
          // 没有定义 name 属性时，退回用索引
          name: child.name != "" ? child.name : index.toString(),
          status: child.isOpen.value ? "open" : "close"
        }));
      });
      return changeArr;
    }
    const toggle = (elId) => {
      const targetIndex = childNodes.findIndex((item) => {
        return item.elId == elId;
      });
      if (targetIndex == -1) {
        return null;
      }
      const target = childNodes[targetIndex];
      if (props.accordion) {
        childNodes.forEach((child) => {
          if (child.elId != elId && child.isOpen.value) {
            child.setOpen(false);
          }
        });
      }
      target.setOpen(!target.isOpen.value);
      emit("change", buildChangeArr());
      emit(target.isOpen.value ? "open" : "close", target.name);
    };
    provide(UP_COLLAPSE_TOGGLE, toggle);
    onMounted(() => {
      validateValue();
    });
    watch(parentDataSelf, () => {
      validateValue();
      syncChildren();
    }, { deep: true });
    __expose({
      toggle,
      getProps: () => {
        return parentDataSelf.value;
      },
      getChildren: () => {
        return childNodes;
      }
    });
    return () => {
      "raw js";
      const _component_up_line = __easycom_1$1;
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.border));
      }, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_up_line, "6504b3f4");
        _setSharedData(__sharedData, 1, n2?.sharedData);
      });
      _createSharedDataSlot("default", null, null);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  __easycom_1 as _
};
