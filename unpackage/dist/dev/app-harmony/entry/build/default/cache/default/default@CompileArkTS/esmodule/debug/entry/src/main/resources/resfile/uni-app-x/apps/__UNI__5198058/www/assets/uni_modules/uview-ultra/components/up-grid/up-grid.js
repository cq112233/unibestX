import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useMp&";
import { u as useUltraUI } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useUltraUI&";
import { d as deepMerge, b as addStyle, u as upGetRect } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-grid/grid&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot, setSharedDataTemplateRef: _setSharedDataTemplateRef } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpGridUpGrid";
const { ref, computed, onMounted, watch, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-grid"
  },
  __dynamicSharedData: true,
  __hash: "4cd366d5",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-grid/up-grid.uvue",
  __name: "up-grid",
  props: {
    col: {
      type: [String, Number],
      default: defProps.getNumber("grid.col")
    },
    border: {
      type: Boolean,
      default: defProps.getBoolean("grid.border")
    },
    align: {
      type: String,
      default: defProps.getString("grid.align")
    }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpGridUpGridSharedData", sharedDataClassId: 0 })));
    const _b = useUltraUI(), children = _b.children, getChildren = _b.getChildren, addChild = _b.addChild;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const emit = __emit;
    const width = ref(0);
    const parentDataCpu = computed(() => {
      return new UTSJSONObject({
        col: props.col,
        border: props.border,
        align: props.align
      });
    });
    const gridStyle = computed(() => {
      let style = new UTSJSONObject({});
      switch (props.align) {
        case "left":
          style["justifyContent"] = "flex-start";
          break;
        case "center":
          style["justifyContent"] = "center";
          break;
        case "right":
          style["justifyContent"] = "flex-end";
          break;
        default:
          style["justifyContent"] = "flex-start";
      }
      return deepMerge(style, addStyle(new UTSJSONObject({})));
    });
    const getWidth = () => {
      upGetRect(`.up-grid`, false, instance).then((size) => {
        if (size.width != null) {
          width.value = size.width;
        }
      });
    };
    const childClick = (name = null) => {
      emit("click", name);
    };
    watch(parentDataCpu, () => {
      if (children.value.length > 0) {
        children.value.map((child) => {
          child.$callMethod("updateParentData", instance);
        });
      }
    });
    onMounted(() => {
      getWidth();
    });
    const getProps = function() {
      return parentDataCpu.value;
    };
    const getRefs = function() {
      return new UTSJSONObject({
        width: width.value
      });
    };
    __expose({
      childClick,
      getChildren,
      addChild,
      children,
      getProps,
      getRefs
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 1, [gridStyle.value]);
      });
      _createSharedDataSlot("default", null, null);
      _setSharedDataTemplateRef(__sharedData, 0, (n1) => {
        _setTemplateRef(n1, "up-grid");
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_3 as _
};
//# sourceMappingURL=up-grid.js.map
