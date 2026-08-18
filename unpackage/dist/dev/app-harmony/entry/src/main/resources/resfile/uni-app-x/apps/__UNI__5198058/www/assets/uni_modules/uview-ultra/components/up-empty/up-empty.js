import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import "../../libs/composable/useMp.js";
import "../../libs/composable/useUltraUI.js";
import { a as addUnit, b as addStyle, d as deepMerge } from "../../libs/function/index.js";
import { t } from "../../libs/i18n/index.js";
import { d as defProps } from "./empty.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, createSharedDataIf: _createSharedDataIf, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpEmptyUpEmpty";
const { computed, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-empty"
  },
  __dynamicSharedData: true,
  __hash: "64fb62e4",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-empty/up-empty.uvue",
  __name: "up-empty",
  props: {
    customStyle: {
      type: [Object, String],
      default: () => {
        return new UTSJSONObject({});
      }
    },
    customClass: {
      type: String,
      default: ""
    },
    // 内置图标名称，或图片路径，建议绝对路径
    icon: {
      type: String,
      default: defProps.getString("empty.icon")
    },
    // 提示文字
    text: {
      type: String,
      default: defProps.getString("empty.text")
    },
    // 文字颜色
    textColor: {
      type: String,
      default: defProps.getString("empty.textColor")
    },
    // 文字大小
    textSize: {
      type: [String, Number],
      default: defProps.getNumber("empty.textSize")
    },
    // 图标的颜色
    iconColor: {
      type: String,
      default: defProps.getString("empty.iconColor")
    },
    // 图标的大小
    iconSize: {
      type: [String, Number],
      default: defProps.getNumber("empty.iconSize")
    },
    // 选择预置的图标类型
    mode: {
      type: String,
      default: defProps.getString("empty.mode")
    },
    // 图标宽度，单位px
    width: {
      type: [String, Number],
      default: defProps.getNumber("empty.width")
    },
    // 图标高度，单位px
    height: {
      type: [String, Number],
      default: defProps.getNumber("empty.height")
    },
    // 是否显示组件
    show: {
      type: Boolean,
      default: defProps.getBoolean("empty.show")
    },
    // 组件距离上一个元素之间的距离，默认px单位
    marginTop: {
      type: [String, Number],
      default: defProps.getNumber("empty.marginTop")
    }
    // 自定义样式
    // ...commonProps
  },
  emits: ["click", "close"],
  setup(__props, _a) {
    _a.emit;
    var $slots = _a.slots;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpEmptyUpEmptySharedData", sharedDataClassId: 0 })));
    getCurrentInstance().proxy;
    const props = __props;
    const icons = computed(() => {
      return new UTSJSONObject({
        car: t("up.empty.car", new UTSJSONObject({})),
        page: t("up.empty.page", new UTSJSONObject({})),
        search: t("up.empty.search", new UTSJSONObject({})),
        address: t("up.empty.address", new UTSJSONObject({})),
        wifi: t("up.empty.wifi", new UTSJSONObject({})),
        order: t("up.empty.order", new UTSJSONObject({})),
        coupon: t("up.empty.coupon", new UTSJSONObject({})),
        favor: t("up.empty.favor", new UTSJSONObject({})),
        permission: t("up.empty.permission", new UTSJSONObject({})),
        history: t("up.empty.history", new UTSJSONObject({})),
        news: t("up.empty.news", new UTSJSONObject({})),
        message: t("up.empty.message", new UTSJSONObject({})),
        list: t("up.empty.list", new UTSJSONObject({})),
        data: t("up.empty.data", new UTSJSONObject({})),
        comment: t("up.empty.comment", new UTSJSONObject({}))
      });
    });
    const emptyStyle = computed(() => {
      const style = new UTSJSONObject({});
      style["marginTop"] = addUnit(props.marginTop);
      return style;
    });
    const mergedEmptyStyle = computed(() => {
      const custom = addStyle(props.customStyle);
      const empty = emptyStyle.value;
      return deepMerge(empty, custom);
    });
    const imageDimensionStyle = computed(() => {
      return new UTSJSONObject({
        width: addUnit(props.width),
        height: addUnit(props.height)
      });
    });
    const textStyle = computed(() => {
      const style = new UTSJSONObject({});
      style["color"] = props.textColor;
      style["fontSize"] = addUnit(props.textSize);
      return style;
    });
    const isSrc = computed(() => {
      return props.icon.indexOf("/") >= 0;
    });
    return () => {
      "raw js";
      const _component_up_icon = __easycom_0;
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.show));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 6, mergedEmptyStyle.value);
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 1, _toSharedDataBoolean(!isSrc.value));
        }, () => {
          const n4 = _createSharedDataComponentWithFallback(_component_up_icon, "042edcfc", {
            name: () => {
              return __props.mode === "message" ? "chat" : `empty-${__props.mode}`;
            },
            size: () => {
              return __props.iconSize;
            },
            color: () => {
              return __props.iconColor;
            },
            "margin-top": "14"
          });
          _setSharedData(__sharedData, 2, n4?.sharedData);
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataStyle(__sharedData, 3, imageDimensionStyle.value);
            _setSharedDataAttr(__sharedData, 4, _toSharedDataString(__props.icon));
          });
        }, 261);
        _renderSharedDataEffect(() => {
          const _text = __props.text;
          _setSharedDataStyle(__sharedData, 7, textStyle.value);
          _setSharedData(__sharedData, 8, _toDisplayString(_text != "" ? _text : icons.value[__props.mode]));
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 5, _toSharedDataBoolean($slots["default"] != null || $slots["$default"] != null));
        }, () => {
          _createSharedDataSlot("default", null, null);
        });
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-empty.js.map
