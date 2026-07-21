const { defineComponent, getCurrentInstance, ref, computed, watch, openBlock, createElementBlock, normalizeStyle, renderSlot, createCommentVNode } = globalThis.Vue
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useUltraUI&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-table/table&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "up-table"
  },
  __name: "up-table",
  props: {
    borderColor: {
      type: String,
      default: defProps.getString("table.borderColor")
    },
    align: {
      type: String,
      default: defProps.getString("table.align")
    },
    // td的内边距
    padding: {
      type: String,
      default: defProps.getString("table.padding")
    },
    // 字体大小
    fontSize: {
      type: [String, Number],
      default: defProps.getNumber("table.fontSize")
    },
    // 字体颜色
    color: {
      type: String,
      default: defProps.getString("table.color")
    },
    // th的自定义样式
    thStyle: {
      type: Object,
      default: () => {
        return defProps.getAny("table.thStyle");
      }
    },
    // table的背景颜色
    bgColor: {
      type: String,
      default: defProps.getString("table.bgColor")
    }
  },
  setup(__props, _a) {
    var __expose = _a.expose;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const show = ref(true);
    const tableStyle = computed(() => {
      let style = new UTSJSONObject({});
      style["borderLeft"] = `solid 1px ${props.borderColor}`;
      style["borderTop"] = `solid 1px ${props.borderColor}`;
      style["backgroundColor"] = props.bgColor;
      return style;
    });
    function change() {
      show.value = false;
      setTimeout(() => {
        show.value = true;
      }, 0);
    }
    watch(() => {
      return props.align;
    }, () => {
      change();
    });
    watch(() => {
      return props.borderColor;
    }, () => {
      change();
    });
    const getProps = function() {
      return new UTSJSONObject({
        borderColor: props.borderColor,
        align: props.align,
        padding: props.padding,
        fontSize: props.fontSize,
        color: props.color,
        thStyle: props.thStyle,
        bgColor: props.bgColor
      });
    };
    const getRefs = function() {
      return new UTSJSONObject({});
    };
    __expose({
      getProps,
      getRefs
    });
    const __returned__ = { instance, props, show, tableStyle, change, getProps, getRefs };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: "up-table",
      style: normalizeStyle([$setup.tableStyle])
    },
    [
      $setup.show ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
    ],
    4
    /* STYLE */
  );
}
const __easycom_9 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-table/up-table.uvue"]]);
export {
  __easycom_9 as _
};
//# sourceMappingURL=up-table.js.map
