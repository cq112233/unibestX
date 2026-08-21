import { b as addUnit, e as error, f as getParentFunc } from "../../libs/function/index.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { d as defProps } from "./indexAnchor.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, setSharedData: _setSharedData, toDisplayString: _toDisplayString, setSharedDataTemplateRef: _setSharedDataTemplateRef, renderSharedDataEffect: _renderSharedDataEffect } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpIndexAnchorUpIndexAnchor";
const { computed, onMounted, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-index-anchor"
  },
  __dynamicSharedData: true,
  __hash: "1c555f35",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-index-anchor/up-index-anchor.uvue",
  __name: "up-index-anchor",
  props: {
    text: {
      type: [String, Number],
      default: defProps.getString("indexAnchor.text")
    },
    color: {
      type: String,
      default: defProps.getString("indexAnchor.color")
    },
    size: {
      type: [String, Number],
      default: defProps.getNumber("indexAnchor.size")
    },
    bgColor: {
      type: String,
      default: defProps.getString("indexAnchor.bgColor")
    },
    height: {
      type: [String, Number],
      default: defProps.getNumber("indexAnchor.height")
    }
  },
  emits: [],
  setup(__props, _a) {
    _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpIndexAnchorUpIndexAnchorSharedData", sharedDataClassId: 0 })));
    const _b = useUltraUI(), parent = _b.parent, parentData = _b.parentData, getParent = _b.getParent;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const textName = computed(() => {
      return props.text.toString();
    });
    const parentSticky = computed(() => {
      const indexList = getParent("up-index-list", instance);
      if (parentData.value["sticky"] != null) {
        return indexList != null ? parentData.value["sticky"] : true;
      } else {
        return false;
      }
    });
    const anchorStyle = computed(() => {
      return new UTSJSONObject({
        height: addUnit(props.height),
        backgroundColor: props.bgColor
      });
    });
    const textStyle = computed(() => {
      return new UTSJSONObject({
        fontSize: addUnit(props.size),
        color: props.color
      });
    });
    const init = function() {
      const indexList = getParent("up-index-list", instance);
      if (indexList == null) {
        return error("up-index-anchor必须要搭配up-index-list组件使用");
      }
      if (parent.value != null) {
        parent.value.$callMethod("addAnchors", instance);
      }
      const indexListItem = getParentFunc("up-index-item", instance);
      if (indexListItem == null) {
        return error("up-index-anchor必须要搭配up-index-item组件使用");
      }
      if (props.text.toString().charCodeAt(0) != null) {
        indexListItem.$callMethod("setId", props.text.toString().charCodeAt(0).toString());
      }
    };
    onMounted(() => {
      init();
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      _renderSharedDataEffect(() => {
        const _textName = textName.value;
        _setSharedDataClass(__sharedData, 0, ["up-index-anchor up-border-bottom", { "up-index-anchor--sticky": parentSticky.value }]);
        _setSharedDataStyle(__sharedData, 1, anchorStyle.value);
        _setSharedDataStyle(__sharedData, 2, textStyle.value);
        _setSharedData(__sharedData, 3, _toDisplayString(_textName));
        _setSharedDataTemplateRef(__sharedData, 4, (n1) => {
          _setTemplateRef(n1, `up-index-anchor-${_textName}`);
        });
      });
      return __sharedData;
    };
  }
});
const _style_0 = {"up-border-bottom":{"":{"borderBottomWidth":0.5,"borderColor":"#dadbde","borderBottomStyle":"solid"}}};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-index-anchor.js.map
