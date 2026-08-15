import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useUltraUI&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-table/table&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataSlot: _createSharedDataSlot, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpTableUpTable";
const { ref, watch, computed, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-table"
  },
  __dynamicSharedData: true,
  __hash: "0433f533",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-table/up-table.uvue",
  __name: "up-table",
  props: {
    borderColor: {
      type: String,
      default: defProps.getString("table.borderColor")
    },
    align: {
      type: String,
      default: defProps.getString("table.align")
    },
    // td的内边距
    padding: {
      type: String,
      default: defProps.getString("table.padding")
    },
    // 字体大小
    fontSize: {
      type: [String, Number],
      default: defProps.getNumber("table.fontSize")
    },
    // 字体颜色
    color: {
      type: String,
      default: defProps.getString("table.color")
    },
    // th的自定义样式
    thStyle: {
      type: Object,
      default: () => {
        return defProps.getAny("table.thStyle");
      }
    },
    // table的背景颜色
    bgColor: {
      type: String,
      default: defProps.getString("table.bgColor")
    }
  },
  setup(__props, _a) {
    var __expose = _a.expose;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpTableUpTableSharedData", sharedDataClassId: 0 })));
    getCurrentInstance().proxy;
    const props = __props;
    const show = ref(true);
    const tableStyle = computed(() => {
      let style = new UTSJSONObject({});
      style["borderLeft"] = `solid 1px ${props.borderColor}`;
      style["borderTop"] = `solid 1px ${props.borderColor}`;
      style["backgroundColor"] = props.bgColor;
      return style;
    });
    function change() {
      show.value = false;
      setTimeout(() => {
        show.value = true;
      }, 0);
    }
    watch(() => {
      return props.align;
    }, () => {
      change();
    });
    watch(() => {
      return props.borderColor;
    }, () => {
      change();
    });
    const getProps = function() {
      return new UTSJSONObject({
        borderColor: props.borderColor,
        align: props.align,
        padding: props.padding,
        fontSize: props.fontSize,
        color: props.color,
        thStyle: props.thStyle,
        bgColor: props.bgColor
      });
    };
    const getRefs = function() {
      return new UTSJSONObject({});
    };
    __expose({
      getProps,
      getRefs
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 1, [tableStyle.value]);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(show.value));
      }, () => {
        _createSharedDataSlot("default", null, null);
      });
      return __sharedData;
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=up-table.js.map
