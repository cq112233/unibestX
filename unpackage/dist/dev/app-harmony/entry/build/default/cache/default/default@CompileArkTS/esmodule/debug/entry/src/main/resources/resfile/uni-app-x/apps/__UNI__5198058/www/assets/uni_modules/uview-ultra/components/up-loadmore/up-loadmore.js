import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-line/up-line&";
import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon&";
import { a as addUnit, b as addStyle, d as deepMerge } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, setSharedDataClass: _setSharedDataClass, setSharedDataEvent: _setSharedDataEvent, toDisplayString: _toDisplayString } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpLoadmoreUpLoadmore";
const { computed } = globalThis.Vue;
const dotText = "●";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-loadmore"
  },
  __dynamicSharedData: true,
  __hash: "2c27d764",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-loadmore/up-loadmore.uvue",
  __name: "up-loadmore",
  props: {
    status: {
      type: String,
      default: "loadmore"
    },
    bgColor: {
      type: String,
      default: "transparent"
    },
    icon: {
      type: Boolean,
      default: true
    },
    fontSize: {
      type: [String, Number],
      default: 14
    },
    iconSize: {
      type: [String, Number],
      default: 17
    },
    color: {
      type: String,
      default: "#606266"
    },
    loadingIcon: {
      type: String,
      default: "circle"
    },
    loadmoreText: {
      type: String,
      default: "加载更多"
    },
    loadingText: {
      type: String,
      default: "正在加载..."
    },
    nomoreText: {
      type: String,
      default: "没有更多了"
    },
    isDot: {
      type: Boolean,
      default: false
    },
    iconColor: {
      type: String,
      default: "#b7b7b7"
    },
    lineColor: {
      type: String,
      default: "#E6E8EB"
    },
    marginTop: {
      type: [String, Number],
      default: 10
    },
    marginBottom: {
      type: [String, Number],
      default: 10
    },
    height: {
      type: [String, Number],
      default: "auto"
    },
    line: {
      type: Boolean,
      default: false
    },
    dashed: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["loadmore"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpLoadmoreUpLoadmoreSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const loadmoreStyle = computed(() => {
      const base = new UTSJSONObject({
        backgroundColor: props.bgColor,
        marginBottom: addUnit(props.marginBottom),
        marginTop: addUnit(props.marginTop),
        height: addUnit(props.height)
      });
      const custom = addStyle(props.customStyle);
      return deepMerge(base, custom);
    });
    const loadTextStyle = computed(() => {
      return new UTSJSONObject({
        color: props.color,
        fontSize: addUnit(props.fontSize),
        backgroundColor: props.bgColor
      });
    });
    const showText = computed(() => {
      let text = "";
      if (props.status == "loadmore")
        text = props.loadmoreText;
      else if (props.status == "loading")
        text = props.loadingText;
      else if (props.status == "nomore" && props.isDot)
        text = dotText;
      else
        text = props.nomoreText;
      return text;
    });
    function loadMore() {
      if (props.status == "loadmore")
        emit("loadmore");
    }
    return () => {
      "raw js";
      const _component_up_line = __easycom_1$1;
      const _component_up_loading_icon = __easycom_0;
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 7, loadmoreStyle.value);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.line));
      }, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_up_line, "7f252515", {
          length: "140rpx",
          color: () => {
            return __props.lineColor;
          },
          hairline: false,
          dashed: () => {
            return __props.dashed;
          }
        });
        _setSharedData(__sharedData, 1, n2?.sharedData);
      });
      _renderSharedDataEffect(() => {
        const _status = __props.status;
        _setSharedDataClass(__sharedData, 8, [_status == "loadmore" || _status == "nomore" ? "up-more" : "", "up-loadmore__content"]);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 4, _toSharedDataBoolean(__props.status == "loading" && __props.icon));
      }, () => {
        const n5 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "657f75c1", {
          color: () => {
            return __props.iconColor;
          },
          size: () => {
            return __props.iconSize;
          },
          mode: () => {
            return __props.loadingIcon;
          }
        });
        _setSharedData(__sharedData, 5, n5?.sharedData);
      });
      _setSharedDataEvent(__sharedData, 6, loadMore);
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 9, ["up-line-11", [__props.status == "nomore" && __props.isDot == true ? "up-loadmore__content__dot-text" : "up-loadmore__content__text"]]);
        _setSharedDataStyle(__sharedData, 10, loadTextStyle.value);
        _setSharedData(__sharedData, 11, _toDisplayString(showText.value));
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 2, _toSharedDataBoolean(__props.line));
      }, () => {
        const n11 = _createSharedDataComponentWithFallback(_component_up_line, "657f8487", {
          length: "140rpx",
          color: () => {
            return __props.lineColor;
          },
          hairline: false,
          dashed: () => {
            return __props.dashed;
          }
        });
        _setSharedData(__sharedData, 3, n11?.sharedData);
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
//# sourceMappingURL=up-loadmore.js.map
