const { defineComponent, getCurrentInstance, ref, onMounted, openBlock, createElementBlock, normalizeStyle, createElementVNode, renderSlot } = globalThis.Vue
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-th/th&";
import { d as deepMerge } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { u as useUltraUI } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useUltraUI&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "up-th"
  },
  __name: "up-th",
  props: {
    // 宽度，百分比或者具体带单位的值，如30%， 200rpx等，一般使用百分比
    width: {
      type: [String],
      default: defProps.getString("th.width")
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
    onMounted(() => {
      getParent("up-table", instance);
      if (parent.value != null) {
        let style = new UTSJSONObject({});
        let styleText = new UTSJSONObject({});
        let parentProps = parent.value.$callMethod("getProps");
        if (props.width != "")
          style.flex = `0 0 ${props.width}`;
        styleText["textAlign"] = parentProps.getString("align");
        style["padding"] = parentProps.getString("padding");
        style["borderBottom"] = `solid 1px ` + parentProps.getString("borderColor");
        style["borderRight"] = `solid 1px ` + parentProps.getString("borderColor");
        style = deepMerge(style, parentProps.getAny("thStyle"));
        thStyle.value = style;
        thTextStyle.value = styleText;
      }
    });
    const __returned__ = { parent, getParent, instance, props, thStyle, thTextStyle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "up-th": { "": { "display": "flex", "flexDirection": "column", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "justifyContent": "center", "backgroundColor": "#f5f6f8" } }, "up-th__text": { ".up-th ": { "fontSize": 14, "color": "#303133", "fontWeight": "bold" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: "up-th",
      style: normalizeStyle([$setup.thStyle])
    },
    [
      createElementVNode(
        "text",
        {
          class: "up-th__text",
          style: normalizeStyle([$setup.thTextStyle])
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        4
        /* STYLE */
      )
    ],
    4
    /* STYLE */
  );
}
const __easycom_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-th/up-th.uvue"]]);
export {
  __easycom_6 as _
};
//# sourceMappingURL=up-th.js.map
