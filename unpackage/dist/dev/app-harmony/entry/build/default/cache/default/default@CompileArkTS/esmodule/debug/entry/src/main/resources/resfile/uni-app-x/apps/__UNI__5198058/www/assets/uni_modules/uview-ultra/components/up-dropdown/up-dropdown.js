import { _ as __easycom_1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { a as addUnit, d as deepMerge, e as getWindowInfo, u as upGetRect } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-dropdown/types&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataStyle: _setSharedDataStyle, setSharedDataClass: _setSharedDataClass, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataEvent: _setSharedDataEvent, createSharedDataFor: _createSharedDataFor, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpDropdownUpDropdown";
const { computed, ref, watch, onMounted, getCurrentInstance, provide } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-dropdown"
  },
  __dynamicSharedData: true,
  __hash: "e39e5d86",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-dropdown/up-dropdown.uvue",
  __name: "up-dropdown",
  props: {
    // 菜单标题和选项的激活态颜色
    activeColor: {
      type: String,
      default: "#2979ff"
    },
    // 菜单标题和选项的未激活态颜色
    inactiveColor: {
      type: String,
      default: "#606266"
    },
    // 点击遮罩是否关闭菜单
    closeOnClickMask: {
      type: Boolean,
      default: true
    },
    // 点击当前激活项标题是否关闭菜单
    closeOnClickSelf: {
      type: Boolean,
      default: true
    },
    // 过渡时间
    duration: {
      type: [Number, String],
      default: 300
    },
    // 标题菜单的高度
    height: {
      type: [Number, String],
      default: 40
    },
    // 是否显示下边框
    borderBottom: {
      type: Boolean,
      default: false
    },
    // 标题的字体大小
    titleSize: {
      type: [Number, String],
      default: 14
    },
    // 下拉出来的内容部分的圆角值
    borderRadius: {
      type: [Number, String],
      default: 0
    },
    // 菜单右侧的icon图标
    menuIcon: {
      type: String,
      default: "arrow-down"
    },
    // 菜单右侧图标的大小
    menuIconSize: {
      type: [Number, String],
      default: 14
    }
  },
  emits: ["open", "close"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpDropdownUpDropdownSharedData", sharedDataClassId: 0 })));
    const instance = getCurrentInstance();
    const props = __props;
    const emit = __emit;
    const menuList = ref([]);
    const active = ref(false);
    const current = ref(-1);
    const contentStyle = ref(new UTSJSONObject({
      zIndex: -1,
      opacity: 0
    }));
    const highlightIndexList = ref([]);
    const contentHeight = ref(0);
    watch(contentHeight, (newVal) => {
      if (active.value) {
        contentStyle.value["height"] = newVal + "px";
      }
    });
    const dropdownStyle = computed(() => {
      const h = active.value ? addUnit(contentHeight.value + parseInt(props.height.toString())) : addUnit(props.height);
      return new UTSJSONObject({ height: h });
    });
    const menuStyle = computed(() => {
      return new UTSJSONObject({ height: addUnit(props.height) });
    });
    const contentWrapStyle = computed(() => {
      const style = deepMerge(contentStyle.value, new UTSJSONObject({
        top: addUnit(props.height),
        transition: `opacity ${parseInt(props.duration.toString()) / 1e3}s, z-index ${parseInt(props.duration.toString()) / 1e3}s linear`
      }));
      return style;
    });
    const menuIconSizeUnit = computed(() => {
      return addUnit(props.menuIconSize);
    });
    function getMenuIconColor(index) {
      if (index == current.value || highlightIndexList.value.includes(index)) {
        return props.activeColor == "#2979ff" ? "primary" : props.activeColor;
      }
      return "#c0c4cc";
    }
    const popupStyle = computed(() => {
      let style = new UTSJSONObject({});
      style["transform"] = `translateY(${active.value ? "0%" : "-100%"})`;
      style["transition-duration"] = parseInt(props.duration.toString()) / 1e3 + "s";
      style["borderRadius"] = `0 0 ${addUnit(props.borderRadius)} ${addUnit(props.borderRadius)}`;
      return style;
    });
    function getContentHeight() {
      let windowHeight = getWindowInfo().windowHeight;
      upGetRect(".up-dropdown__menu", false, instance === null || instance === void 0 ? null : instance.proxy).then((res) => {
        if (res.bottom != null && res.bottom > 0) {
          contentHeight.value = windowHeight - res.bottom;
        } else {
          contentHeight.value = windowHeight;
        }
      });
    }
    function open(index) {
      getContentHeight();
      contentStyle.value = new UTSJSONObject({
        zIndex: 11,
        height: contentHeight.value + "px",
        opacity: 1
      });
      active.value = true;
      current.value = index;
      emit("open", current.value);
    }
    function close() {
      emit("close", current.value);
      active.value = false;
      current.value = -1;
      contentStyle.value["zIndex"] = -1;
      contentStyle.value["opacity"] = 0;
      setTimeout(() => {
        contentStyle.value["height"] = 0;
      }, parseInt(props.duration.toString()));
    }
    function menuClick(index) {
      if (index < 0 || index >= menuList.value.length)
        return null;
      if (menuList.value[index].disabled)
        return null;
      if (index == current.value && props.closeOnClickSelf) {
        close();
        return null;
      }
      open(index);
    }
    function maskClick() {
      if (!props.closeOnClickMask)
        return null;
      close();
    }
    function highlight(index = null) {
      if (index != null) {
        let indexOf = highlightIndexList.value.indexOf(index);
        if (indexOf == -1) {
          highlightIndexList.value.push(index);
        }
      } else {
        highlightIndexList.value = [];
      }
    }
    function getContentTextStyle(item, index) {
      let style = new UTSJSONObject({});
      if (index == current.value || highlightIndexList.value.includes(index)) {
        if (props.activeColor != "#2979ff") {
          style["color"] = props.activeColor;
        }
      } else {
        if (props.inactiveColor != "#606266") {
          style["color"] = props.inactiveColor;
        }
      }
      if (props.titleSize != 14) {
        style["fontSize"] = addUnit(props.titleSize);
      }
      return style;
    }
    function registerItem(item) {
      const idx = menuList.value.length;
      menuList.value.push(item);
      return idx;
    }
    function updateItemTitle(idx, title) {
      if (idx >= 0 && idx < menuList.value.length) {
        menuList.value[idx].title = title;
      }
    }
    const dropdownProps = computed(() => {
      return new UTSJSONObject({
        activeColor: props.activeColor,
        inactiveColor: props.inactiveColor,
        closeOnClickMask: props.closeOnClickMask,
        closeOnClickSelf: props.closeOnClickSelf,
        duration: props.duration,
        height: props.height,
        borderBottom: props.borderBottom,
        titleSize: props.titleSize,
        borderRadius: props.borderRadius,
        menuIcon: props.menuIcon,
        menuIconSize: props.menuIconSize
      });
    });
    provide("upDropdownProps", dropdownProps);
    provide("upDropdownActive", active);
    provide("upDropdownCurrent", current);
    provide("upDropdownRegisterItem", registerItem);
    provide("upDropdownUpdateItemTitle", updateItemTitle);
    provide("upDropdownClose", close);
    onMounted(() => {
      getContentHeight();
    });
    __expose({
      highlight,
      close,
      open,
      getContentHeight
    });
    return () => {
      "raw js";
      const _component_up_icon = __easycom_1;
      _renderSharedDataEffect(() => {
        _setSharedDataStyle(__sharedData, 4, dropdownStyle.value);
        _setSharedDataClass(__sharedData, 5, ["up-dropdown__menu", {
          "u-border-bottom": props.borderBottom
        }]);
        _setSharedDataStyle(__sharedData, 6, menuStyle.value);
      });
      _createSharedDataFor(_setSharedDataScoped(__sharedData, 0, _createSharedDataVFor(__sharedDataScope, () => {
        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
      })), () => {
        return menuList.value;
      }, (__sharedData_VFor0, _for_item0, _for_key0) => {
        _renderSharedDataEffect(() => {
          const _index = _for_key0.value;
          const _current = current.value;
          const _item = _for_item0.value;
          _setSharedDataClass(__sharedData_VFor0, 3, ["up-dropdown__menu__item__text", {
            "up-dropdown__menu__item__text--active": (_index == _current || highlightIndexList.value.includes(_index)) && props.activeColor == "#2979ff"
          }]);
          _setSharedDataStyle(__sharedData_VFor0, 4, getContentTextStyle(_item, _index));
          _setSharedData(__sharedData_VFor0, 5, _toDisplayString(_item["title"]));
          _setSharedDataClass(__sharedData_VFor0, 6, ["up-dropdown__menu__item__arrow", {
            "up-dropdown__menu__item__arrow--rotate": _index == _current
          }]);
        });
        const n3 = _createSharedDataComponentWithFallback(_component_up_icon, "7fd8c54c-" + _for_key0.value, {
          "custom-style": { display: "flex" },
          name: () => {
            return props.menuIcon;
          },
          size: () => {
            return menuIconSizeUnit.value;
          },
          color: () => {
            return getMenuIconColor(_for_key0.value);
          }
        });
        _setSharedData(__sharedData_VFor0, 1, n3?.sharedData);
        _setSharedDataEvent(__sharedData_VFor0, 2, () => {
          return menuClick(_for_key0.value);
        });
        return null;
      }, (__sharedData_VFor0, item, index) => {
        return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
      }, 1);
      _renderSharedDataEffect(() => {
        _setSharedDataStyle(__sharedData, 7, contentWrapStyle.value);
        _setSharedDataStyle(__sharedData, 8, popupStyle.value);
      });
      _createSharedDataSlot("default", null, null);
      _setSharedDataEvent(__sharedData, 1, () => {
      });
      _setSharedDataEvent(__sharedData, 2, maskClick);
      _setSharedDataEvent(__sharedData, 3, () => {
      });
      return __sharedData;
    };
  }
});
const _style_0 = {"u-border-bottom":{"":{"borderBottomWidth":0.5,"borderColor":"#dadbde","borderBottomStyle":"solid"}},"flex":{"":{"display":"flex"}}};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-dropdown.js.map
