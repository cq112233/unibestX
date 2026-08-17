import { b as addStyle, d as deepMerge } from "../../libs/function/index.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref, computed, getCurrentInstance, onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-th"
  },
  __name: "up-th",
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
    text: {
      type: [String, Number],
      default: ""
    },
    width: {
      type: [String],
      default: ""
    }
  },
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const _b = useUltraUI(new UTSJSONObject({
      padding: 0,
      align: "center",
      borderColor: "",
      thStyle: new UTSJSONObject({})
    })), parent = _b.parent, getParent = _b.getParent;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const thStyle = ref(new UTSJSONObject({}));
    const thTextStyle = ref(new UTSJSONObject({}));
    const mergedThStyle = computed(() => {
      const custom = addStyle(props.customStyle);
      const th = thStyle.value;
      return deepMerge(th, custom);
    });
    onMounted(() => {
      var _a2;
      getParent("up-table", instance);
      if (parent.value != null) {
        let style = new UTSJSONObject({});
        let styleText = new UTSJSONObject({});
        let parentProps = parent.value.$callMethod("getProps");
        if (props.width != "")
          style["flex"] = `0 0 ${props.width}`;
        styleText["textAlign"] = parentProps.getString("align");
        style["padding"] = parentProps.getString("padding");
        const isBorder = (_a2 = parentProps.getBoolean("border")) !== null && _a2 !== void 0 ? _a2 : true;
        if (isBorder) {
          style["borderBottom"] = `solid 1px ` + parentProps.getString("borderColor");
          style["borderRight"] = `solid 1px ` + parentProps.getString("borderColor");
        }
        style = deepMerge(style, parentProps.getAny("thStyle"));
        thStyle.value = style;
        thTextStyle.value = styleText;
      }
    });
    const __returned__ = { parent, getParent, instance, props, thStyle, thTextStyle, mergedThStyle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "up-th": { "": { "display": "flex", "flexDirection": "column", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "justifyContent": "center", "backgroundColor": "#f5f6f8" } }, "up-th__text": { "": { "fontSize": 14, "color": "#303133", "fontWeight": "bold" } } };
const { renderSlot: _renderSlot, toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, normalizeClass: _normalizeClass, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass(["up-th", [$props.customClass]]),
      style: _normalizeStyle($setup.mergedThStyle)
    },
    [
      _renderSlot(_ctx.$slots, "default", {}, () => [
        _createElementVNode(
          "text",
          {
            class: "up-th__text",
            style: _normalizeStyle($setup.thTextStyle)
          },
          _toDisplayString($props.text),
          5
          /* TEXT, STYLE */
        )
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-th/up-th.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-th.js.map
