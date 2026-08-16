import { _ as __easycom_0 } from "../rice-icon/rice-icon.js";
import "../../libs/use/useCountDown/index.js";
import "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import { u as useParent } from "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import { a as addUnit } from "../../libs/utils/basic.js";
import { d as debugWarn } from "../../libs/utils/debug.js";
import { g as gridInjectKey, a as gridName } from "../rice-grid/index.js";
import "./type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, toSharedDataString: _toSharedDataString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceGridItemRiceGridItem";
const { inject, computed, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-grid-item",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "7edfe871",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-grid-item/rice-grid-item.uvue",
  __name: "rice-grid-item",
  props: {
    text: { type: [String, Number] },
    textColor: { type: String },
    textSize: { type: [String, Number] },
    icon: { type: String },
    iconColor: { type: String },
    iconSize: { type: [String, Number] },
    iconFontFamily: { type: String },
    to: { type: String },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceGridItemRiceGridItemSharedData", sharedDataClassId: 0 })));
    const emit = __emit;
    useParent(gridName).childIndex;
    const ns = useNamespace("grid-item");
    const props = __props;
    const grid = inject(gridInjectKey, null);
    const isHorizontal = computed(() => {
      return (grid === null || grid === void 0 ? null : grid.vertical.value) != true;
    });
    const _iconSize = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = props.iconSize) !== null && _a2 !== void 0 ? _a2 : grid === null || grid === void 0 ? null : grid.iconSize.value) !== null && _b !== void 0 ? _b : "32px";
    });
    const _iconColor = computed(() => {
      var _a2;
      return (_a2 = props.iconColor) !== null && _a2 !== void 0 ? _a2 : grid === null || grid === void 0 ? null : grid.iconColor.value;
    });
    const hoverClass = computed(() => {
      return (grid === null || grid === void 0 ? null : grid.clickable.value) == true ? "rice-grid-item--hover" : "none";
    });
    const handleClick = () => {
      if (props.to != null) {
        uni.navigateTo({
          url: props.to,
          fail: (err) => {
            debugWarn("GridItem", err.errMsg);
          }
        });
      }
      emit("click");
    };
    const gridItemStyle = computed(() => {
      var _a2;
      const css = /* @__PURE__ */ new Map();
      const columnNum = (_a2 = grid === null || grid === void 0 ? null : grid.columnNum.value) !== null && _a2 !== void 0 ? _a2 : 4;
      const percent = 100 / columnNum + "%";
      css.set("flex-basis", percent);
      return css;
    });
    const textStyle = computed(() => {
      var _a2, _b;
      const css = /* @__PURE__ */ new Map();
      const textSize = (_a2 = props.textSize) !== null && _a2 !== void 0 ? _a2 : grid === null || grid === void 0 ? null : grid.textSize.value;
      const textColor = (_b = props.textColor) !== null && _b !== void 0 ? _b : grid === null || grid === void 0 ? null : grid.textColor.value;
      if (textSize != null)
        css.set("font-size", addUnit(textSize));
      if (textColor != null)
        css.set("color", textColor);
      return css;
    });
    const instance = getCurrentInstance();
    const rootClass = computed(() => {
      const base = [
        ns.b(""),
        ns.is("horizontal", isHorizontal.value)
      ];
      if ((grid === null || grid === void 0 ? null : grid.border.value) == true) {
        const children = grid.childrenList.value;
        const index = children.findIndex((v) => {
          return v.proxy == (instance === null || instance === void 0 ? null : instance.proxy);
        });
        if (index != -1) {
          const columnNum = grid.columnNum.value;
          if ((index + 1) % columnNum != 0) {
            base.push(ns.m("border--right"));
          }
        }
        base.push(ns.m("border--bottom"));
      }
      return base;
    });
    if (grid == null) {
      debugWarn("GridItem", "<GridItem> must be used with <Grid>");
    }
    return () => {
      "raw js";
      const _component_rice_icon = __easycom_0;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 5, _unref(rootClass));
        _setSharedDataStyle(__sharedData, 6, [_unref(gridItemStyle), __props.customStyle]);
        _setSharedDataClass(__sharedData, 7, _toSharedDataString(_unref(hoverClass)));
      });
      _createSharedDataSlot("default", null, null, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_rice_icon, "06e6062d", {
          "font-family": () => {
            return __props.iconFontFamily;
          },
          name: () => {
            return __props.icon;
          },
          size: () => {
            return _unref(_iconSize);
          },
          color: () => {
            return _unref(_iconColor);
          }
        });
        _setSharedData(__sharedData, 0, n2?.sharedData);
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 1, ["rice-grid-item__text", { "rice-grid-item--horizontal__text": _unref(isHorizontal) }]);
          _setSharedDataStyle(__sharedData, 2, _unref(textStyle));
          _setSharedData(__sharedData, 3, _toDisplayString(__props.text));
        });
      });
      _setSharedDataEvent(__sharedData, 4, handleClick);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=rice-grid-item.js.map
