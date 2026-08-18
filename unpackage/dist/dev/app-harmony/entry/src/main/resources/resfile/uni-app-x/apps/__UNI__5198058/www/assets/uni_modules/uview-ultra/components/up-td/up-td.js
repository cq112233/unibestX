import { b as addStyle, d as deepMerge, a as addUnit } from "../../libs/function/index.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref, computed, onMounted, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-td"
  },
  __name: "up-td",
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
    label: {
      type: [String, Number],
      default: ""
    },
    width: {
      type: [String],
      default: "auto"
    },
    textAlign: {
      type: String,
      default: ""
    },
    fontSize: {
      type: String,
      default: ""
    },
    borderColor: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    }
  },
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const _b = useUltraUI(new UTSJSONObject({
      padding: 0,
      align: "",
      borderColor: "",
      thStyle: new UTSJSONObject({})
    })), parent = _b.parent, getParent = _b.getParent;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const tdStyle = ref(new UTSJSONObject({}));
    const tdTextStyle = ref(new UTSJSONObject({}));
    const mergedTdStyle = computed(() => {
      const custom = addStyle(props.customStyle);
      const td = tdStyle.value;
      return deepMerge(td, custom);
    });
    onMounted(() => {
      var _a2;
      getParent("up-table", instance);
      if (parent.value != null) {
        let style = new UTSJSONObject({});
        let styleText = new UTSJSONObject({});
        let parentProps = parent.value.$callMethod("getProps");
        if (props.width != "auto")
          style["flex"] = `0 0 ${props.width}`;
        styleText["textAlign"] = parentProps.getString("align");
        styleText["fontSize"] = addUnit(parentProps.getString("fontSize"));
        style["padding"] = parentProps.getString("padding");
        const isBorder = (_a2 = parentProps.getBoolean("border")) !== null && _a2 !== void 0 ? _a2 : true;
        if (isBorder) {
          style["borderBottom"] = `solid 1px ` + parentProps.getString("borderColor");
          style["borderRight"] = `solid 1px ` + parentProps.getString("borderColor");
        }
        styleText["color"] = parentProps.getString("color");
        if (props.textAlign != "") {
          styleText["textAlign"] = props.textAlign;
        }
        if (props.fontSize != "") {
          styleText["fontSize"] = props.fontSize;
        }
        if (props.borderColor != "") {
          style["borderColor"] = props.borderColor;
        }
        if (props.color != "") {
          styleText["color"] = props.color;
        }
        tdStyle.value = style;
        tdTextStyle.value = styleText;
      }
    });
    const __returned__ = { parent, getParent, instance, props, tdStyle, tdTextStyle, mergedTdStyle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"up-td":{"":{"display":"flex","flexDirection":"column","flexGrow":1,"flexShrink":1,"flexBasis":"0%","justifyContent":"center","alignSelf":"stretch","boxSizing":"border-box","height":"100%"}},"up-td__text":{"":{"fontSize":14,"color":"#606266"}},"flex":{"":{"display":"flex"}},"border":{"":{"borderStyle":"var(--tw-border-style)","borderWidth":1}},"content":{"":{"display":"flex","flexDirection":"column","alignItems":"center","paddingTop":"32rpx","paddingBottom":"32rpx"}}};
const { renderSlot: _renderSlot, toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, normalizeClass: _normalizeClass, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass(["up-td", [$props.customClass]]),
      style: _normalizeStyle($setup.mergedTdStyle)
    },
    [
      _renderSlot(_ctx.$slots, "default", {}, () => [
        _createElementVNode(
          "text",
          {
            class: "up-td__text",
            style: _normalizeStyle($setup.tdTextStyle)
          },
          _toDisplayString(($props.text != null && $props.text != "" ? $props.text : $props.label).toString()),
          5
          /* TEXT, STYLE */
        )
      ]),
      _renderSlot(_ctx.$slots, "content")
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-td/up-td.uvue"]]);
export {
  __easycom_3 as _
};
//# sourceMappingURL=up-td.js.map
