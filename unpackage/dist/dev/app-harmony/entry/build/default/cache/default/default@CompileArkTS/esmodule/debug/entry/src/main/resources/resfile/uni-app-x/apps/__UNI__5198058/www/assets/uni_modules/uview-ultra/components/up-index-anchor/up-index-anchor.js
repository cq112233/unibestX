import { a as addUnit, i as error, n as getParentFunc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { u as useUltraUI } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useUltraUI&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-index-anchor/indexAnchor&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, onMounted, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-index-anchor"
  },
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
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const _b = useUltraUI(), parent = _b.parent, parentData = _b.parentData, getParent = _b.getParent;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const emit = __emit;
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
    const __returned__ = { parent, parentData, getParent, instance, props, emit, textName, parentSticky, anchorStyle, textStyle, init };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"u-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-index-anchor":{"":{"position":"relative","top":0,"display":"flex","flexDirection":"row","alignItems":"center","paddingLeft":15,"zIndex":1}},"up-index-anchor--sticky":{"":{"position":"relative","top":0}},"flex":{"":{"display":"flex"}},"up-border-bottom":{"":{"borderBottomWidth":0.5,"borderColor":"#dadbde","borderBottomStyle":"solid"}}};
const { toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, normalizeClass: _normalizeClass, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass(["up-index-anchor up-border-bottom", { "up-index-anchor--sticky": $setup.parentSticky }]),
      ref: `up-index-anchor-${$setup.textName}`,
      style: _normalizeStyle($setup.anchorStyle)
    },
    [
      _createElementVNode(
        "text",
        {
          class: "up-index-anchor__text",
          style: _normalizeStyle($setup.textStyle)
        },
        _toDisplayString($setup.textName),
        5
        /* TEXT, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-index-anchor/up-index-anchor.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-index-anchor.js.map
