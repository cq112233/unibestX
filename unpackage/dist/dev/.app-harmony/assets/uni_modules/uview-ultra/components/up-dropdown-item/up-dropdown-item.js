import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_1$1 } from "../up-cell/up-cell.js";
import { _ as __easycom_2 } from "../up-cell-group/up-cell-group.js";
import "../../libs/function/test.js";
import "../../libs/function/digit.js";
import { c as config } from "../../libs/config/config.js";
import { d as defProps } from "./dropdown-item.js";
import { U as UPDropdownMenu } from "../up-dropdown/types.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref, watch, onMounted } = globalThis.Vue;
const { getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-dropdown-item",
    options: new UTSJSONObject({
      styleIsolation: "shared"
    })
  },
  __name: "up-dropdown-item",
  props: {
    // 当前选中项的value值
    modelValue: {
      type: [Number, String, Array],
      default: defProps.getAny("dropdownItem.value")
    },
    // 菜单项标题
    title: {
      type: [String, Number],
      default: defProps.getString("dropdownItem.title")
    },
    // 选项数据，如果传入了默认slot，此参数无效
    options: {
      type: Array,
      default: () => {
        return defProps.getArray("dropdownItem.options");
      }
    },
    // 是否禁用此菜单项
    disabled: {
      type: Boolean,
      default: defProps.getBoolean("dropdownItem.disabled")
    },
    // 下拉弹窗的高度
    height: {
      type: [Number, String],
      default: defProps.getNumber("dropdownItem.height")
    },
    // 点击遮罩是否可以收起弹窗
    closeOnClickOverlay: {
      type: Boolean,
      default: defProps.getBoolean("dropdownItem.closeOnClickOverlay")
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const _b = useUltraUI(new UTSJSONObject({
      activeColor: config.getString("color.up-primary"),
      inactiveColor: "#606266"
    })), parent = _b.parent, parentData = _b.parentData, getParentData = _b.getParentData;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const emit = __emit;
    const active = ref(false);
    const activeColor = ref(config.getString("color.up-primary"));
    const inactiveColor = ref("#606266");
    const propsChange = computed(() => {
      return `${props.title}-${props.disabled}`;
    });
    watch(active, (val) => {
    });
    watch(propsChange, () => {
      if (parent.value != null)
        parent.value.$callMethod("init");
    });
    function init() {
      getParentData("up-dropdown", instance, false);
      let parentRef = parent.value;
      if (parentRef != null) {
        if (parentData.value["activeColor"] != null) {
          activeColor.value = parentData.value["activeColor"];
        }
        if (parentData.value["inactiveColor"] != null) {
          inactiveColor.value = parentData.value["inactiveColor"];
        }
        let childrenList = parentRef.$callMethod("getChildren");
        if (childrenList == null) {
          childrenList = parentRef.$data["children"];
        }
        if (childrenList != null && childrenList.length == 1)
          active.value = true;
        parentRef.$callMethod("addMenuListItem", new UPDropdownMenu({
          title: props.title.toString(),
          disabled: props.disabled
        }));
      }
    }
    function cellClick(value = null) {
      emit("update:modelValue", value);
      if (parent.value != null)
        parent.value.$callMethod("close");
      emit("change", value);
    }
    const setActive = (val) => {
      active.value = val;
    };
    function getItemTextStyle(item) {
      const style = new UTSJSONObject({});
      const isSelected = props.modelValue.toString() == item["value"].toString();
      if (isSelected) {
        if (activeColor.value != "#2979ff") {
          style["color"] = activeColor.value;
        }
      } else {
        style["color"] = inactiveColor.value;
      }
      return style;
    }
    onMounted(() => {
      init();
    });
    __expose({
      init,
      active,
      setActive
    });
    const __returned__ = { parent, parentData, getParentData, instance, props, emit, active, activeColor, inactiveColor, propsChange, init, cellClick, setActive, getItemTextStyle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "up-dropdown-item__scroll": { "": { "backgroundImage": "none", "backgroundColor": "#ffffff" } }, "up-dropdown-item__text": { "": { "fontSize": 15 } }, "up-dropdown-item__text--active": { "": { "color": "var(--theme-color, #0957de)" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createBlock: _createBlock, createCommentVNode: _createCommentVNode, withCtx: _withCtx, createVNode: _createVNode, renderSlot: _renderSlot, withModifiers: _withModifiers } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  const _component_up_cell = resolveEasycom(__resolveDynamicComponent("up-cell"), __easycom_1$1);
  const _component_up_cell_group = resolveEasycom(__resolveDynamicComponent("up-cell-group"), __easycom_2);
  return $setup.active ? (_openBlock(), _createElementBlock(
    "view",
    {
      key: 0,
      class: "up-dropdown-item",
      onTouchmove: _withModifiers(() => {
      }, ["stop", "prevent"]),
      onClick: _withModifiers(() => {
      }, ["stop", "prevent"])
    },
    [
      _ctx.$slots["default"] == null && _ctx.$slots["$default"] == null ? (_openBlock(), _createElementBlock(
        "view",
        {
          key: 0,
          class: "up-dropdown-item__scroll",
          "scroll-y": "false",
          style: _normalizeStyle({
            height: _ctx.$up.addUnit($setup.props.height)
          })
        },
        [
          _createElementVNode("view", { class: "up-dropdown-item__options" }, [
            _createVNode(_component_up_cell_group, null, {
              default: _withCtx(() => [
                (_openBlock(true), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList($setup.props.options, (item, index) => {
                    return _openBlock(), _createBlock(_component_up_cell, {
                      onClick: ($event) => $setup.cellClick(item["value"]),
                      arrow: false,
                      key: index
                    }, {
                      title: _withCtx(() => [
                        _createElementVNode(
                          "text",
                          {
                            class: _normalizeClass(["up-dropdown-item__text", {
                              "up-dropdown-item__text--active": $setup.props.modelValue.toString() == item["value"].toString() && $setup.activeColor == "#2979ff"
                            }]),
                            style: _normalizeStyle([$setup.getItemTextStyle(item)])
                          },
                          _toDisplayString(item["label"].toString()),
                          7
                          /* TEXT, CLASS, STYLE */
                        )
                      ]),
                      default: _withCtx(() => [
                        $setup.props.modelValue.toString() == item["value"].toString() ? (_openBlock(), _createBlock(_component_up_icon, {
                          key: 0,
                          name: "checkbox-mark",
                          color: $setup.activeColor == "#2979ff" ? "primary" : $setup.activeColor,
                          size: "32"
                        }, null, 8, ["color"])) : _createCommentVNode("v-if", true)
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ],
        4
        /* STYLE */
      )) : _renderSlot(_ctx.$slots, "default", { key: 1 })
    ],
    32
    /* NEED_HYDRATION */
  )) : _createCommentVNode("v-if", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-dropdown-item/up-dropdown-item.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-dropdown-item.js.map
