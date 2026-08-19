import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-line/up-line&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-collapse/collapse&";
import { u as useUltraUI } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useUltraUI&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCollapseUpCollapse";
const { watch } = globalThis.Vue;
const { getCurrentInstance, computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-collapse"
  },
  __dynamicSharedData: true,
  __hash: "d7961f82",
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
    const _b = useUltraUI(), children = _b.children, getChildren = _b.getChildren, addChild = _b.addChild;
    getCurrentInstance().proxy;
    const props = __props;
    const emit = __emit;
    const parentDataSelf = computed(() => {
      return new UTSJSONObject({
        accordion: props.accordion,
        border: props.border,
        value: props.value
      });
    });
    const init = function() {
      var _a2;
      (_a2 = children.value) === null || _a2 === void 0 ? null : _a2.map((child) => {
        child === null || child === void 0 ? null : child.$callMethod("init");
      });
    };
    const onChange = function(target) {
      var _a2;
      const changeArr = [];
      (_a2 = children.value) === null || _a2 === void 0 ? null : _a2.map((child, index) => {
        let childState = child.$callMethod("getInternalState");
        if (props.accordion) {
          if (child !== target) {
            child.$callMethod("setContentAnimate", false);
          }
        }
        if (child === target) {
          child.$callMethod("setContentAnimate", !childState["expanded"]);
        }
        changeArr.push(new UTSJSONObject({
          // 如果没有定义name属性，则默认返回组件的index索引
          name: childState["name"] != null ? childState["name"].toString() : index.toString(),
          status: childState["expanded"] ? "open" : "close"
        }));
      });
      emit("change", changeArr);
      let trgetState = target.$callMethod("getInternalState");
      const expand = trgetState["expanded"];
      emit(expand ? "open" : "close", trgetState["name"] != null ? trgetState["name"] : "");
    };
    watch(parentDataSelf, () => {
      init();
    }, { deep: true });
    const getProps = function() {
      return parentDataSelf.value;
    };
    const getRefs = function() {
      return new UTSJSONObject({});
    };
    __expose({
      onChange,
      getChildren,
      addChild,
      getProps,
      getRefs
    });
    return () => {
      "raw js";
      const _component_up_line = __easycom_0;
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.border));
      }, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_up_line, "6504b3cf");
        _setSharedData(__sharedData, 1, n2?.sharedData);
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
//# sourceMappingURL=up-collapse.js.map
