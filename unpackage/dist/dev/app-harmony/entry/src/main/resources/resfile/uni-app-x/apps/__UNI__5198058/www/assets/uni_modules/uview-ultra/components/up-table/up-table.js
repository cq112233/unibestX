import "../../libs/composable/useUltraUI.js";
import { d as defProps } from "./table.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
var _a;
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref, watch, computed, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-table"
  },
  __name: "up-table",
  props: {
    border: {
      type: Boolean,
      default: (_a = defProps.getBoolean("table.border")) !== null && _a !== void 0 ? _a : true
    },
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
  setup(__props, _a2) {
    var __expose = _a2.expose;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const show = ref(true);
    const tableStyle = computed(() => {
      let style = new UTSJSONObject({});
      if (props.border) {
        style["borderLeft"] = `solid 1px ${props.borderColor}`;
        style["borderTop"] = `solid 1px ${props.borderColor}`;
      } else {
        style["borderLeft"] = "none";
        style["borderTop"] = "none";
      }
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
      return props.border;
    }, () => {
      change();
    });
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
        border: props.border,
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
const { renderSlot: _renderSlot, createCommentVNode: _createCommentVNode, normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: "up-table",
      style: _normalizeStyle([$setup.tableStyle])
    },
    [
      $setup.show ? _renderSlot(_ctx.$slots, "default", { key: 0 }) : _createCommentVNode("v-if", true)
    ],
    4
    /* STYLE */
  );
}
const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-table/up-table.uvue"]]);
export {
  __easycom_4 as _
};
//# sourceMappingURL=up-table.js.map
