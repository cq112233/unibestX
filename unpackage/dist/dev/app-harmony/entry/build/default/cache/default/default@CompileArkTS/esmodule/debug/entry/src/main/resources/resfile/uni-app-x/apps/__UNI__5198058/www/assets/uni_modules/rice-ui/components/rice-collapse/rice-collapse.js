import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useCountDown/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/store/useConfig&";
import { u as useNamespace } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useNamespace/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/usePopup/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useChildren&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useParent&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useSafeArea/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useTouch/index&";
import { C as CollapseInjectKey } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-collapse/type&";
import { c as collapseInjectKey } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-collapse/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, useModel: _useModel, mergeModels: _mergeModels, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceCollapseRiceCollapse";
const { ref, watch, provide, toRef, computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-collapse",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "2ae03f02",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-collapse/rice-collapse.uvue",
  __name: "rice-collapse",
  props: /* @__PURE__ */ _mergeModels(new UTSJSONObject({
    accordion: { type: Boolean, default: false },
    border: { type: Boolean, default: false },
    duration: { default: 250, type: Number }
  }), new UTSJSONObject({
    "modelValue": {
      type: [Array, Number, String],
      default: () => {
        return [];
      }
    },
    "modelModifiers": {}
  })),
  emits: /* @__PURE__ */ _mergeModels(["change"], ["update:modelValue"]),
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceCollapseRiceCollapseSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("collapse");
    const emit = __emit;
    const props = __props;
    const modelValue = _useModel(__props, "modelValue");
    const castArray = () => {
      return Array.isArray(modelValue.value) ? modelValue.value.slice(0) : [modelValue.value];
    };
    const activeNames = ref(castArray());
    const setActiveNames = (names) => {
      activeNames.value = names;
      const value = props.accordion ? activeNames.value[0] : activeNames.value;
      modelValue.value = value;
      emit("change", value);
    };
    const handleItemClick = (name) => {
      if (props.accordion) {
        setActiveNames([activeNames.value.length > 0 && activeNames.value[0] == name ? "" : name]);
      } else {
        const _activeNames = activeNames.value.slice(0);
        const index = _activeNames.indexOf(name);
        if (index > -1) {
          _activeNames.splice(index, 1);
        } else {
          _activeNames.push(name);
        }
        setActiveNames(_activeNames);
      }
    };
    watch(modelValue, () => {
      activeNames.value = castArray();
    }, {
      deep: true
    });
    provide(collapseInjectKey, new CollapseInjectKey({
      activeNames,
      duration: toRef(() => {
        return props.duration;
      }),
      handleItemClick
    }));
    const rootClass = computed(() => {
      return [
        ns.theme(),
        ns.is("border", props.border)
      ];
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        return _setSharedDataClass(__sharedData, 0, ["rice-collapse", _unref(rootClass)]);
      });
      _createSharedDataSlot("default", null, null);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=rice-collapse.js.map
