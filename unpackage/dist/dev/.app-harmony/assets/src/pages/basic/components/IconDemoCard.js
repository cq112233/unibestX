import { _ as __easycom_1 } from "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import { _ as __easycom_1$1 } from "../../../../uni_modules/lime-icon/components/l-icon/l-icon.js";
import { _ as __easycom_0 } from "../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import { C as Card } from "./Card.js";
import { $ as $t } from "../../../utils/i18n.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesBasicComponentsIconDemoCard";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "076cbc24",
  __className,
  __filename: "src/pages/basic/components/IconDemoCard.uvue",
  __name: "IconDemoCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsIconDemoCardSharedData", sharedDataClassId: 0 })));
    const iconDemoTitle = computed(() => {
      return $t("basic.iconDemoTitle");
    });
    const svgAuthWarning = computed(() => {
      return $t("basic.svgAuthWarning");
    });
    return () => {
      "raw js";
      const _component_uni_icons = __easycom_1;
      const _component_l_icon = __easycom_1$1;
      const _component_up_icon = __easycom_0;
      const n24 = _createSharedDataComponent(
        Card,
        "ef38193e",
        { title: () => {
          return iconDemoTitle.value;
        } },
        {
          "default": _withSharedDataVaporCtx(() => {
            const n3 = _createSharedDataComponentWithFallback(_component_uni_icons, "f7cb04ac", {
              type: "contact",
              size: "26",
              style: "color: #3b82f6; margin-right: 8px;"
            });
            _setSharedData(__sharedData, 1, n3?.sharedData);
            _renderSharedDataEffect(() => {
              return _setSharedData(__sharedData, 4, _toDisplayString(svgAuthWarning.value));
            });
            const n13 = _createSharedDataComponentWithFallback(_component_l_icon, "0198763c", {
              name: "circle",
              size: "24",
              style: "color: #10b981; margin-right: 8px;"
            });
            _setSharedData(__sharedData, 2, n13?.sharedData);
            const n20 = _createSharedDataComponentWithFallback(_component_up_icon, "019848fc", {
              name: "setting",
              size: "24",
              style: "color: #a855f7; margin-right: 8px;"
            });
            _setSharedData(__sharedData, 3, n20?.sharedData);
          })
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n24.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const IconDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  IconDemoCard as I
};
//# sourceMappingURL=IconDemoCard.js.map
