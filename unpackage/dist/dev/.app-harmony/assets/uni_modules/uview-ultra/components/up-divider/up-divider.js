import { _ as __easycom_0 } from "../up-line/up-line.js";
import { d as defProps } from "./divider.js";
import { a as addUnit } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, toDisplayString: _toDisplayString, createSharedDataIf: _createSharedDataIf, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpDividerUpDivider";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "2368569e",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-divider/up-divider.uvue",
  __name: "up-divider",
  props: {
    // 是否虚线
    dashed: {
      type: Boolean,
      default: defProps.getBoolean("divider.dashed")
    },
    // 是否细线
    hairline: {
      type: Boolean,
      default: defProps.getBoolean("divider.hairline")
    },
    // 是否以点替代文字，优先于text字段起作用
    dot: {
      type: Boolean,
      default: defProps.getBoolean("divider.dot")
    },
    // 内容文本的位置，left-左边，center-中间，right-右边
    textPosition: {
      type: String,
      default: defProps.getString("divider.textPosition")
    },
    // 文本内容
    text: {
      type: [String, Number],
      default: defProps.getString("divider.text")
    },
    // 文本大小
    textSize: {
      type: [String, Number],
      default: defProps.getNumber("divider.textSize")
    },
    // 文本颜色
    textColor: {
      type: String,
      default: defProps.getString("divider.textColor")
    },
    // 线条颜色
    lineColor: {
      type: String,
      default: defProps.getString("divider.lineColor")
    }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpDividerUpDividerSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const textStyle = computed(() => {
      const style = new UTSJSONObject({});
      style["fontSize"] = addUnit(props.textSize);
      style["color"] = props.textColor;
      return style;
    });
    const leftLineStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (props.textPosition === "left") {
        style["width"] = "80rpx";
      } else {
        style["flex"] = 1;
      }
      return style;
    });
    const rightLineStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (props.textPosition === "right") {
        style["width"] = "80rpx";
      } else {
        style["flex"] = 1;
      }
      return style;
    });
    const clickHandler = () => {
      emit("click");
    };
    return () => {
      "raw js";
      const _component_up_line = __easycom_0;
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 7, [$up.addStyle(customStyle)]);
      });
      const n0 = _createSharedDataComponentWithFallback(_component_up_line, "18ad0d91", {
        color: () => {
          return __props.lineColor;
        },
        customStyle: () => {
          return leftLineStyle.value;
        },
        hairline: () => {
          return __props.hairline;
        },
        dashed: () => {
          return __props.dashed;
        }
      });
      _setSharedData(__sharedData, 0, n0?.sharedData);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 1, _toSharedDataBoolean(__props.dot));
      }, () => {
      }, () => {
        return _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 2, _toSharedDataBoolean(__props.text));
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataStyle(__sharedData, 3, [textStyle.value]);
            _setSharedData(__sharedData, 4, _toDisplayString(__props.text));
          });
        });
      }, 261);
      const n6 = _createSharedDataComponentWithFallback(_component_up_line, "18ad18db", {
        color: () => {
          return __props.lineColor;
        },
        customStyle: () => {
          return rightLineStyle.value;
        },
        hairline: () => {
          return __props.hairline;
        },
        dashed: () => {
          return __props.dashed;
        }
      });
      _setSharedData(__sharedData, 5, n6?.sharedData);
      _setSharedDataEvent(__sharedData, 6, clickHandler);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-divider.js.map
