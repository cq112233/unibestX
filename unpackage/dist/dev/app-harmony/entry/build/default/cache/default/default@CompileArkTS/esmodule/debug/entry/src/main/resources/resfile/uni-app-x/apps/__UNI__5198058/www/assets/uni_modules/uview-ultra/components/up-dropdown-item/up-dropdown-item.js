import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-cell/up-cell&";
import { _ as __easycom_2 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-cell-group/up-cell-group&";
import { a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-dropdown-item/dropdown-item&";
import { U as UPDropdownMenu } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-dropdown/types&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref, watch, onMounted, inject } = globalThis.Vue;
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
    __expose();
    const props = __props;
    const emit = __emit;
    const parentDropdown = inject("upDropdown", null);
    const itemIndex = ref(-1);
    const isActive = computed(() => {
      if (parentDropdown != null && parentDropdown.current != null && parentDropdown.active != null) {
        return parentDropdown.active.value == true && parentDropdown.current.value == itemIndex.value;
      }
      return false;
    });
    const activeColor = computed(() => {
      var _a2;
      if (parentDropdown != null && parentDropdown.props != null) {
        return (_a2 = parentDropdown.props.activeColor) !== null && _a2 !== void 0 ? _a2 : "#2979ff";
      }
      return "#2979ff";
    });
    const inactiveColor = computed(() => {
      var _a2;
      if (parentDropdown != null && parentDropdown.props != null) {
        return (_a2 = parentDropdown.props.inactiveColor) !== null && _a2 !== void 0 ? _a2 : "#606266";
      }
      return "#606266";
    });
    function cellClick(value = null) {
      emit("update:modelValue", value);
      emit("change", value);
      if (parentDropdown != null && parentDropdown.close != null) {
        parentDropdown.close();
      }
    }
    function getItemTextStyle(item) {
      const style = new UTSJSONObject({});
      const isSelected = props.modelValue.toString() == item["value"].toString();
      if (isSelected) {
        style["color"] = activeColor.value;
      } else {
        style["color"] = inactiveColor.value;
      }
      return style;
    }
    onMounted(() => {
      if (parentDropdown != null && parentDropdown.registerItem != null) {
        itemIndex.value = parentDropdown.registerItem(new UPDropdownMenu({
          title: props.title.toString(),
          disabled: props.disabled
        }));
      }
    });
    watch(() => {
      return props.title;
    }, (newTitle = null) => {
      if (parentDropdown != null && parentDropdown.updateItemTitle != null && itemIndex.value >= 0) {
        parentDropdown.updateItemTitle(itemIndex.value, newTitle.toString());
      }
    });
    const __returned__ = { props, emit, parentDropdown, itemIndex, isActive, activeColor, inactiveColor, cellClick, getItemTextStyle, get addUnit() {
      return addUnit;
    } };
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
  return $setup.isActive ? (_openBlock(), _createElementBlock(
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
          style: _normalizeStyle({
            height: $setup.addUnit($setup.props.height)
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
                          size: "18"
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
