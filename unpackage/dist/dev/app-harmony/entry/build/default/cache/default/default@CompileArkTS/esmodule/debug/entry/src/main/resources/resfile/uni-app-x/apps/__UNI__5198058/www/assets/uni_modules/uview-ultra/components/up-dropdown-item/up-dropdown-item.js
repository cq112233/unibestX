import { _ as __easycom_35 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
const { defineComponent, getCurrentInstance, ref, computed, watch, onMounted, resolveDynamicComponent, openBlock, createElementBlock, withModifiers, normalizeStyle, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock, normalizeClass, toDisplayString, createCommentVNode, renderSlot } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_39 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-cell/up-cell&";
import { _ as __easycom_40 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-cell-group/up-cell-group&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/test&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/digit&";
import { c as config } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/config/config&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-dropdown-item/dropdown-item&";
import { U as UPDropdownMenu } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-dropdown/types&";
import { u as useUltraUI } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useUltraUI&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_35);
  const _component_up_cell = resolveEasycom(resolveDynamicComponent("up-cell"), __easycom_39);
  const _component_up_cell_group = resolveEasycom(resolveDynamicComponent("up-cell-group"), __easycom_40);
  return $setup.active ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      class: "up-dropdown-item",
      onTouchmove: withModifiers(() => {
      }, ["stop", "prevent"]),
      onClick: withModifiers(() => {
      }, ["stop", "prevent"])
    },
    [
      _ctx.$slots["default"] == null && _ctx.$slots["$default"] == null ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          class: "up-dropdown-item__scroll",
          "scroll-y": "false",
          style: normalizeStyle({
            height: _ctx.$up.addUnit($setup.props.height)
          })
        },
        [
          createElementVNode("view", { class: "up-dropdown-item__options" }, [
            createVNode(_component_up_cell_group, null, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($setup.props.options, (item, index) => {
                    return openBlock(), createBlock(_component_up_cell, {
                      onClick: ($event) => $setup.cellClick(item["value"]),
                      arrow: false,
                      key: index
                    }, {
                      title: withCtx(() => [
                        createElementVNode(
                          "text",
                          {
                            class: normalizeClass(["up-dropdown-item__text", {
                              "up-dropdown-item__text--active": $setup.props.modelValue.toString() == item["value"].toString() && $setup.activeColor == "#2979ff"
                            }]),
                            style: normalizeStyle([$setup.getItemTextStyle(item)])
                          },
                          toDisplayString(item["label"].toString()),
                          7
                          /* TEXT, CLASS, STYLE */
                        )
                      ]),
                      default: withCtx(() => [
                        $setup.props.modelValue.toString() == item["value"].toString() ? (openBlock(), createBlock(_component_up_icon, {
                          key: 0,
                          name: "checkbox-mark",
                          color: $setup.activeColor == "#2979ff" ? "primary" : $setup.activeColor,
                          size: "32"
                        }, null, 8, ["color"])) : createCommentVNode("v-if", true)
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
      )) : renderSlot(_ctx.$slots, "default", { key: 1 })
    ],
    32
    /* NEED_HYDRATION */
  )) : createCommentVNode("v-if", true);
}
const __easycom_31 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-dropdown-item/up-dropdown-item.uvue"]]);
export {
  __easycom_31 as _
};
//# sourceMappingURL=up-dropdown-item.js.map
