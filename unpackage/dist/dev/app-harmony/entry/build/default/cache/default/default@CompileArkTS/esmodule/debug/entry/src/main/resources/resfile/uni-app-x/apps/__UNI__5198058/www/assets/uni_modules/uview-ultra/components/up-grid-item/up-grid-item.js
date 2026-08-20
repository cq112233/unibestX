import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useMp&";
import { d as deepMerge, b as addStyle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-grid-item/gridItem&";
import { u as useUltraUI } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useUltraUI&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpGridItemUpGridItem";
const { ref, nextTick, computed, onMounted, onUnmounted, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-grid-item"
  },
  __dynamicSharedData: true,
  __hash: "43bb6f2b",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-grid-item/up-grid-item.uvue",
  __name: "up-grid-item",
  props: {
    name: {
      type: [String, Number],
      default: defProps.getArray("grid-item.name")
    },
    bgColor: {
      type: String,
      default: defProps.getString("grid-item.bgColor")
    }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpGridItemUpGridItemSharedData", sharedDataClassId: 0 })));
    const _b = useUltraUI(new UTSJSONObject({
      col: 0,
      border: true,
      width: 0
    })), parent = _b.parent, parentData = _b.parentData, getParentData = _b.getParentData;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const emit = __emit;
    const width = ref("");
    const classes = ref("");
    const parentCol = computed(() => {
      if (parentData.value["col"] != null) {
        return parseInt(parentData.value["col"].toString());
      }
      return 0;
    });
    const itemStyle = computed(() => {
      const style = new UTSJSONObject({
        background: props.bgColor
      });
      style["width"] = width.value;
      return deepMerge(style, addStyle(new UTSJSONObject({})));
    });
    const clickHandler = () => {
      var _a2, _b2;
      let name = props.name;
      let children = (_a2 = parent.value) === null || _a2 === void 0 ? null : _a2.$callMethod("getChildren");
      if (children == null) {
        children = (_b2 = parent.value) === null || _b2 === void 0 ? null : _b2.$data["children"];
      }
      const finalChildren = children != null ? children : [];
      if (props.name === null) {
        name = finalChildren.findIndex((child) => {
          return child === instance;
        });
      }
      parent.value.$callMethod("childClick", name);
      emit("click", name);
    };
    const getItemWidth = () => {
      let widthVal = "";
      if (parent.value != null) {
        let parentRefs = parent.value.$callMethod("getRefs");
        const parentWidth = parseFloat(parentRefs["width"].toString());
        widthVal = (parentWidth / parseInt(parentData.value["col"].toString())).toString() + "px";
      }
      width.value = widthVal;
    };
    const gridItemClasses = () => {
      if (parentData.value["border"]) {
        let classList = [];
        if (parent.value != null) {
          let childrenPat = parent.value.$callMethod("getChildren");
          childrenPat.map((child, index) => {
            let parentCol2 = parseInt(parentData.value["col"].toString());
            if (instance === child && parentCol2 > 0) {
              const len = childrenPat.length;
              if ((index + 1) % parentCol2 != 0 && index + 1 != len) {
                classList.push("up-border-right");
              }
              const lessNum = len % parentCol2 == 0 ? parentCol2 : len % parentCol2;
              if (index < len - lessNum) {
                classList.push("up-border-bottom");
              }
            }
          });
        }
        classes.value = classList;
      }
    };
    const init = () => {
      getParentData("up-grid", instance, false);
      nextTick(() => {
        getItemWidth();
      });
      uni.$emit("$upGridItem");
      gridItemClasses();
    };
    onMounted(() => {
      init();
    });
    onUnmounted(() => {
      uni.$off("$upGridItem");
    });
    __expose({
      gridItemClasses
    });
    return () => {
      "raw js";
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(parentCol.value > 0));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 2, ["up-grid-item", classes.value]);
          _setSharedDataStyle(__sharedData, 3, [itemStyle.value]);
        });
        _createSharedDataSlot("default", null, null);
        _setSharedDataEvent(__sharedData, 1, clickHandler);
      });
      return __sharedData;
    };
  }
});
const _style_0 = {"border":{"":{"borderStyle":"var(--tw-border-style)","borderWidth":1}},"up-border-right":{"":{"borderRightWidth":0.5,"borderColor":"#dadbde","borderRightStyle":"solid"}},"up-border-bottom":{"":{"borderBottomWidth":0.5,"borderColor":"#dadbde","borderBottomStyle":"solid"}}};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-grid-item.js.map
