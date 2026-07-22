"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/function/test.js");
require("../../libs/function/digit.js");
const uni_modules_uviewUltra_libs_config_config = require("../../libs/config/config.js");
const uni_modules_uviewUltra_components_upDropdownItem_dropdownItem = require("./dropdown-item.js");
const uni_modules_uviewUltra_components_upDropdown_types = require("../up-dropdown/types.js");
const uni_modules_uviewUltra_libs_composable_useUltraUI = require("../../libs/composable/useUltraUI.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_cell_1 = common_vendor.resolveComponent("up-cell");
  const _easycom_up_cell_group_1 = common_vendor.resolveComponent("up-cell-group");
  (_easycom_up_icon_1 + _easycom_up_cell_1 + _easycom_up_cell_group_1)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_cell = () => "../up-cell/up-cell.js";
const _easycom_up_cell_group = () => "../up-cell-group/up-cell-group.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_cell + _easycom_up_cell_group)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-dropdown-item",
  options: new UTSJSONObject({
    styleIsolation: "shared"
  })
}, { __name: "up-dropdown-item", props: {
  // 当前选中项的value值
  modelValue: {
    type: [Number, String, Array],
    default: uni_modules_uviewUltra_components_upDropdownItem_dropdownItem.defProps.getAny("dropdownItem.value")
  },
  // 菜单项标题
  title: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upDropdownItem_dropdownItem.defProps.getString("dropdownItem.title")
  },
  // 选项数据，如果传入了默认slot，此参数无效
  options: {
    type: Array,
    default: () => {
      return uni_modules_uviewUltra_components_upDropdownItem_dropdownItem.defProps.getArray("dropdownItem.options");
    }
  },
  // 是否禁用此菜单项
  disabled: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upDropdownItem_dropdownItem.defProps.getBoolean("dropdownItem.disabled")
  },
  // 下拉弹窗的高度
  height: {
    type: [Number, String],
    default: uni_modules_uviewUltra_components_upDropdownItem_dropdownItem.defProps.getNumber("dropdownItem.height")
  },
  // 点击遮罩是否可以收起弹窗
  closeOnClickOverlay: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upDropdownItem_dropdownItem.defProps.getBoolean("dropdownItem.closeOnClickOverlay")
  }
}, emits: ["update:modelValue", "change"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const _b = uni_modules_uviewUltra_libs_composable_useUltraUI.useUltraUI(new UTSJSONObject({
    activeColor: uni_modules_uviewUltra_libs_config_config.config.getString("color.up-primary"),
    inactiveColor: "#606266"
  })), parent = _b.parent, parentData = _b.parentData, getParentData = _b.getParentData;
  const instance = common_vendor.getCurrentInstance().proxy;
  const props = __props;
  const emit = __emit;
  const active = common_vendor.ref(false);
  const activeColor = common_vendor.ref(uni_modules_uviewUltra_libs_config_config.config.getString("color.up-primary"));
  const inactiveColor = common_vendor.ref("#606266");
  const propsChange = common_vendor.computed(() => {
    return `${props.title}-${props.disabled}`;
  });
  common_vendor.watch(active, (val) => {
  });
  common_vendor.watch(propsChange, () => {
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
      parentRef.$callMethod("addMenuListItem", new uni_modules_uviewUltra_components_upDropdown_types.UPDropdownMenu({
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
  common_vendor.onMounted(() => {
    init();
  });
  __expose({
    init,
    active,
    setActive
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: active.value
    }, active.value ? common_vendor.e({
      b: _ctx.$slots["default"] == null && _ctx.$slots["$default"] == null
    }, _ctx.$slots["default"] == null && _ctx.$slots["$default"] == null ? {
      c: common_vendor.f(props.options, (item, index, i0) => {
        return common_vendor.e({
          a: common_vendor.t(item["label"].toString()),
          b: props.modelValue.toString() == item["value"].toString() && activeColor.value == "#2979ff" ? 1 : "",
          c: common_vendor.s(getItemTextStyle(item)),
          d: props.modelValue.toString() == item["value"].toString()
        }, props.modelValue.toString() == item["value"].toString() ? {
          e: "db1ba5e1-2-" + i0 + "," + ("db1ba5e1-1-" + i0),
          f: common_vendor.p({
            name: "checkbox-mark",
            color: activeColor.value == "#2979ff" ? "primary" : activeColor.value,
            size: "32",
            class: "data-v-db1ba5e1"
          })
        } : {}, {
          g: common_vendor.o(($event) => {
            return cellClick(item["value"]);
          }, index),
          h: index,
          i: "db1ba5e1-1-" + i0 + ",db1ba5e1-0"
        });
      }),
      d: common_vendor.p({
        arrow: false,
        class: "data-v-db1ba5e1"
      }),
      e: common_vendor.p({
        class: "data-v-db1ba5e1"
      }),
      f: _ctx.$up.addUnit(props.height)
    } : {}, {
      g: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      h: common_vendor.o(() => {
      }, "fb"),
      i: common_vendor.o(() => {
      }, "14"),
      j: `${_ctx.u_s_b_h}px`,
      k: `${_ctx.u_s_a_i_b}px`,
      l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    }) : {});
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-db1ba5e1"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-dropdown-item/up-dropdown-item.js.map
