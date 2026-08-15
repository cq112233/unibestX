import { f as range, a as addUnit, b as addStyle, u as upGetRect, s as sleep } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataStyle: _setSharedDataStyle, unref: _unref, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, toDisplayString: _toDisplayString, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpLineProgressUpLineProgress";
const { computed, ref, watch, onMounted, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-line-progress"
  },
  __dynamicSharedData: true,
  __hash: "a2eb3f80",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-line-progress/up-line-progress.uvue",
  __name: "up-line-progress",
  props: {
    activeColor: {
      type: String,
      default: "#19be6b"
    },
    inactiveColor: {
      type: String,
      default: "#ececec"
    },
    percentage: {
      type: [String, Number],
      default: 0
    },
    showText: {
      type: Boolean,
      default: true
    },
    height: {
      type: [String, Number],
      default: 12
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpLineProgressUpLineProgressSharedData", sharedDataClassId: 0 })));
    function normalizeNumber(value = null, defaultValue = 0) {
      if (typeof value === "number") {
        return value;
      }
      if (value == null) {
        return defaultValue;
      }
      const parsed = parseFloat(value.toString());
      return isNaN(parsed) ? defaultValue : parsed;
    }
    const props = __props;
    const instance = getCurrentInstance();
    const lineWidth = ref("0px");
    const percentageValue = computed(() => {
      return normalizeNumber(props.percentage, 0);
    });
    const innerPercentage = computed(() => {
      return range(0, 100, percentageValue.value);
    });
    const backgroundStyle = computed(() => {
      return new UTSJSONObject({
        backgroundColor: props.inactiveColor,
        height: addUnit(props.height)
      });
    });
    const progressStyle = computed(() => {
      return new UTSJSONObject({
        width: lineWidth.value,
        backgroundColor: props.activeColor,
        height: addUnit(props.height)
      });
    });
    function resizeProgressWidth() {
      upGetRect(".up-line-progress__background", false, instance === null || instance === void 0 ? null : instance.proxy).then((size) => {
        const width = size.width != null ? size.width : 0;
        lineWidth.value = (width * innerPercentage.value / 100).toString() + "px";
      });
    }
    function init() {
      sleep(20).then(() => {
        resizeProgressWidth();
      });
    }
    watch(() => {
      return props.percentage;
    }, () => {
      resizeProgressWidth();
    });
    watch(() => {
      return props.height;
    }, () => {
      resizeProgressWidth();
    });
    onMounted(() => {
      init();
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataStyle(__sharedData, 2, [_unref(addStyle)(__props.customStyle)]);
        _setSharedDataStyle(__sharedData, 3, [backgroundStyle.value]);
        _setSharedDataStyle(__sharedData, 4, [progressStyle.value]);
      });
      _createSharedDataSlot("default", null, null, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.showText && percentageValue.value >= 10));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedData(__sharedData, 1, _toDisplayString(innerPercentage.value + "%"));
          });
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
//# sourceMappingURL=up-line-progress.js.map
