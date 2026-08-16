import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-td/td&";
import { a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { u as useUltraUI } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useUltraUI&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref, onMounted, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-td"
  },
  __name: "up-td",
  props: {
    // 宽度，百分比或者具体带单位的值，如30%， 200rpx等，一般使用百分比
    width: {
      type: [String],
      default: defProps.getString("td.width")
    },
    textAlign: {
      type: String,
      default: defProps.getString("td.textAlign")
    },
    fontSize: {
      type: String,
      default: defProps.getString("td.fontSize")
    },
    borderColor: {
      type: String,
      default: defProps.getString("td.borderColor")
    },
    color: {
      type: String,
      default: defProps.getString("td.color")
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
        let border = (_a2 = parentProps.getBoolean("border")) !== null && _a2 !== void 0 ? _a2 : true;
        if (border) {
          style["borderBottom"] = `solid 1px ` + parentProps.getString("borderColor");
          style["borderRight"] = `solid 1px ` + parentProps.getString("borderColor");
        } else {
          style["borderBottom"] = "none";
          style["borderRight"] = "none";
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
    const __returned__ = { parent, getParent, instance, props, tdStyle, tdTextStyle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "up-td": { "": { "display": "flex", "flexDirection": "column", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "justifyContent": "center", "alignSelf": "stretch", "boxSizing": "border-box", "height": "100%" } }, "up-td__text": { ".up-td ": { "fontSize": 14, "color": "#606266" } } };
const { renderSlot: _renderSlot, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: "up-td",
      style: _normalizeStyle([$setup.tdStyle])
    },
    [
      _createElementVNode(
        "text",
        {
          class: "up-td__text",
          style: _normalizeStyle([$setup.tdTextStyle])
        },
        [
          _renderSlot(_ctx.$slots, "default")
        ],
        4
        /* STYLE */
      ),
      _renderSlot(_ctx.$slots, "content")
    ],
    4
    /* STYLE */
  );
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-td/up-td.uvue"]]);
export {
  __easycom_3 as _
};
//# sourceMappingURL=up-td.js.map
