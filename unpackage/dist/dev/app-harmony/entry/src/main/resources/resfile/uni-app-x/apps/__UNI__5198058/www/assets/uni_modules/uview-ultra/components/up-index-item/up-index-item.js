import { e as error, s as sleep, u as upGetRect } from "../../libs/function/index.js";
import { d as defProps } from "./indexItem.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpIndexItemUpIndexItem";
const { ref, onMounted, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-index-item"
  },
  __dynamicSharedData: true,
  __hash: "7445f843",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-index-item/up-index-item.uvue",
  __name: "up-index-item",
  props: {
    text: {
      type: [String, Number],
      default: defProps.getString("indexItem.text")
    }
  },
  emits: [],
  setup(__props, _a) {
    var __expose = _a.expose;
    _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpIndexItemUpIndexItemSharedData", sharedDataClassId: 0 })));
    const _b = useUltraUI(), parent = _b.parent;
    _b.getParent;
    const getParentData = _b.getParentData;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const top = ref(0);
    const height = ref(0);
    const itemId = ref("");
    ref(new UTSJSONObject({}));
    const getIndexItemRect = function() {
      return new Promise((resolve) => {
        upGetRect(".up-index-item", false, instance).then((size = null) => {
          resolve(size);
        });
      });
    };
    const init = function() {
      getParentData("up-index-list", instance, false);
      if (parent.value == null) {
        return error("up-index-item必须要搭配up-index-list组件使用");
      }
      sleep().then(() => {
        getIndexItemRect().then((size) => {
          var _a2, _b2;
          top.value = Math.ceil((_a2 = size.top) !== null && _a2 !== void 0 ? _a2 : 0);
          height.value = Math.ceil((_b2 = size.height) !== null && _b2 !== void 0 ? _b2 : 0);
        });
      });
    };
    onMounted(() => {
      if (props.text != "") {
        itemId.value = props.text.toString().charCodeAt(0).toString();
      }
      init();
    });
    const setId = function(idPam) {
      uni.__f__("log", "at uni_modules/uview-ultra/components/up-index-item/up-index-item.uvue:73", idPam);
      itemId.value = idPam;
    };
    const getRefs = function() {
      return new UTSJSONObject({
        height: height.value
      });
    };
    __expose({
      setId,
      getRefs
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        const _itemId = itemId.value;
        _setSharedDataClass(__sharedData, 0, ["up-index-item", ["up-index-item-" + _itemId]]);
        _setSharedDataAttr(__sharedData, 1, _toSharedDataString("up-index-item-" + _itemId));
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
//# sourceMappingURL=up-index-item.js.map
