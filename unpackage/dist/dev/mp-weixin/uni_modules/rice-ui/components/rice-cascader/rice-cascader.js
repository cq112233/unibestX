"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_riceUi_libs_use_usePopup_index = require("../../libs/use/usePopup/index.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
const uni_modules_riceUi_libs_use_useSafeArea_index = require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const uni_modules_riceUi_components_riceTabs_type = require("../rice-tabs/type.js");
const uni_modules_riceUi_components_riceCascader_type = require("./type.js");
if (!Array) {
  const _easycom_rice_overlay_1 = common_vendor.resolveComponent("rice-overlay");
  const _easycom_rice_icon_1 = common_vendor.resolveComponent("rice-icon");
  const _easycom_rice_tabs_1 = common_vendor.resolveComponent("rice-tabs");
  const _easycom_rice_divider_1 = common_vendor.resolveComponent("rice-divider");
  (_easycom_rice_overlay_1 + _easycom_rice_icon_1 + _easycom_rice_tabs_1 + _easycom_rice_divider_1)();
}
const _easycom_rice_overlay = () => "../rice-overlay/rice-overlay.js";
const _easycom_rice_icon = () => "../rice-icon/rice-icon.js";
const _easycom_rice_tabs = () => "../rice-tabs/rice-tabs.js";
const _easycom_rice_divider = () => "../rice-divider/rice-divider.js";
if (!Math) {
  (_easycom_rice_overlay + _easycom_rice_icon + _easycom_rice_tabs + _easycom_rice_divider)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-cascader",
  styleIsolation: "app-and-page"
}, { __name: "rice-cascader", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  options: { default: () => {
    return [];
  } },
  title: {},
  titleAlign: {},
  placeholder: { default: "请选择" },
  color: {},
  activeColor: { default: "var(--rice-primary-color)" },
  fontSize: {},
  closeable: { type: Boolean, default: true },
  closeIcon: { default: "cross" },
  border: { type: Boolean },
  usePopup: { type: Boolean, default: true },
  closeOnFinish: { type: Boolean, default: true },
  closeOnClickClose: { type: Boolean, default: true },
  closeOnClickOverlay: { type: Boolean, default: true },
  safeAreaInsetBottom: { type: Boolean, default: null },
  zIndex: { default: 999 },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}), new common_vendor.UTSJSONObject({
  "modelValue": {
    type: [String, Number]
  },
  "modelModifiers": {},
  "show": {
    type: Boolean,
    default: false
  },
  "showModifiers": {}
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["change", "finish", "clickClose", "clickDisabled", "open", "close", "opened", "closed"], ["update:modelValue", "update:show"]), setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("cascader");
  uni_modules_riceUi_libs_use_useSafeArea_index.useSafeArea();
  const emit = __emit;
  const slots = common_vendor.useSlots();
  const props = __props;
  const modelValue = common_vendor.useModel(__props, "modelValue");
  const show = common_vendor.useModel(__props, "show");
  const cascaderRef = common_vendor.shallowRef(null);
  const realShow = uni_modules_riceUi_libs_use_usePopup_index.usePopup(cascaderRef, new uni_modules_riceUi_libs_use_usePopup_index.UsePopupOptions({
    zoom: null,
    zoomScale: null,
    beforeClose: null,
    show,
    duration: 300,
    position: "bottom",
    opacity: false
  })).realShow;
  const list = common_vendor.ref([]);
  const selectedOptions = common_vendor.ref([]);
  const selectedPathMap = common_vendor.ref(/* @__PURE__ */ new Map());
  const tabIndex = common_vendor.ref(0);
  const swiperIndex = common_vendor.ref(0);
  const isShow = common_vendor.computed(() => {
    return props.usePopup ? realShow.value : true;
  });
  const initShow = common_vendor.ref(false);
  const showCascader = common_vendor.computed(() => {
    return initShow.value ? initShow.value : isShow.value;
  });
  const hasHeader = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_utils_basic.hasStrValue(props.title) || props.closeable || slots["title"] != null;
  });
  const isSafeAreaInsetBottom = common_vendor.computed(() => {
    var _a2;
    return (_a2 = props.safeAreaInsetBottom) !== null && _a2 !== void 0 ? _a2 : props.usePopup;
  });
  const tabs = common_vendor.computed(() => {
    const selected = selectedOptions.value.map((option) => {
      return new uni_modules_riceUi_components_riceTabs_type.TabsOptions({
        value: null,
        disabled: null,
        badge: null,
        name: option.text
      });
    });
    if (selectedOptions.value.length < list.value.length) {
      selected.push(new uni_modules_riceUi_components_riceTabs_type.TabsOptions({
        value: null,
        disabled: null,
        badge: null,
        name: props.placeholder
      }));
    }
    return selected;
  });
  function getValueCacheKey(value = null) {
    if (value == null)
      return "";
    if (typeof value == "number") {
      return "number:" + value.toString();
    }
    return "string:" + value;
  }
  function buildSelectedPathMap(options, parentPath) {
    for (let i = 0; i < options.length; i++) {
      const option = options[i];
      const path = parentPath.concat([option]);
      const key = getValueCacheKey(option.value);
      if (!selectedPathMap.value.has(key)) {
        selectedPathMap.value.set(key, path);
      }
      if (option.children != null && option.children.length > 0) {
        buildSelectedPathMap(option.children, path);
      }
    }
  }
  let getSelectedOptionsByValue = null;
  getSelectedOptionsByValue = (_options, value = null) => {
    var _a2;
    if (value == null)
      return [];
    return (_a2 = selectedPathMap.value.get(getValueCacheKey(value))) !== null && _a2 !== void 0 ? _a2 : [];
  };
  const setTabIndex = () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      yield common_vendor.nextTick$1();
      tabIndex.value = Math.max(list.value.length - 1, 0);
    });
  };
  const updateList = () => {
    var _a2;
    if (!isShow.value)
      return null;
    if (modelValue.value != null) {
      const selected = getSelectedOptionsByValue(props.options, modelValue.value);
      selectedOptions.value = selected;
      if (selected.length > 0) {
        let cursor = props.options;
        const data = [];
        for (let i = 0; i < selected.length; i++) {
          const option = selected[i];
          data.push(cursor);
          const next = cursor.find((item = null) => {
            return uni_modules_riceUi_libs_utils_basic.isSameValue(item.value, option.value);
          });
          if (next != null) {
            cursor = (_a2 = next.children) !== null && _a2 !== void 0 ? _a2 : [];
          }
        }
        if (cursor.length > 0) {
          data.push(cursor);
        }
        list.value = data;
        setTabIndex();
        return null;
      }
    }
    selectedOptions.value = [];
    list.value = [props.options];
    setTabIndex();
  };
  const getIsSelected = (option, index) => {
    if (index >= selectedOptions.value.length) {
      return false;
    }
    return uni_modules_riceUi_libs_utils_basic.isSameValue(selectedOptions.value[index].value, option.value);
  };
  const clickOption = (option, index) => {
    if (option.disabled == true) {
      emit("clickDisabled", new uni_modules_riceUi_components_riceCascader_type.CascaderClickDisabledEvent({
        tabIndex: index,
        option
      }));
      return null;
    }
    const nextIndex = index + 1;
    if (list.value.length > nextIndex) {
      list.value = list.value.slice(0, nextIndex);
    }
    if (Array.isArray(option.children) && option.children.length > 0) {
      list.value.push(option.children);
      setTabIndex();
    }
    const oldModelValue = modelValue.value;
    modelValue.value = option.value;
    selectedOptions.value = getSelectedOptionsByValue(props.options, option.value);
    const params = new uni_modules_riceUi_components_riceCascader_type.CascaderEvent({
      value: option.value,
      tabIndex: tabIndex.value,
      selectedOptions: selectedOptions.value
    });
    if (!uni_modules_riceUi_libs_utils_basic.isSameValue(option.value, oldModelValue)) {
      emit("change", params);
    }
    if (option.children == null || !Array.isArray(option.children) || option.children.length == 0) {
      if (props.closeOnFinish && props.usePopup) {
        show.value = false;
      }
      emit("finish", params);
    }
  };
  const clickClose = () => {
    if (props.usePopup && props.closeOnClickClose) {
      show.value = false;
    }
    emit("clickClose");
  };
  common_vendor.watch(modelValue, (newVal = null) => {
    if (newVal != null) {
      const selectedValues = selectedOptions.value.map((v) => {
        return v.value;
      });
      if (selectedValues.includes(newVal)) {
        return null;
      }
    }
    updateList();
  });
  common_vendor.watch(() => {
    return props.options;
  }, () => {
    selectedPathMap.value.clear();
    buildSelectedPathMap(props.options, []);
    if (isShow.value) {
      updateList();
    }
  }, {
    deep: true,
    immediate: true
  });
  common_vendor.watch(isShow, (newVal) => {
    if (newVal) {
      if (props.usePopup) {
        updateList();
      }
      initShow.value = true;
    }
  }, {
    immediate: true
  });
  let timer = null;
  common_vendor.watch(tabIndex, (newVal) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      yield common_vendor.nextTick$1();
      if (timer != null)
        clearTimeout(timer);
      timer = setTimeout(() => {
        swiperIndex.value = newVal;
      }, 30);
    });
  }, {
    immediate: true
  });
  const onTouchMove = () => {
  };
  const rootClass = common_vendor.computed(() => {
    return [
      ns.theme(),
      ns.is("popup", props.usePopup)
    ];
  });
  const rootStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.usePopup) {
      css.set("z-index", props.zIndex);
    }
    if (isSafeAreaInsetBottom.value) {
      css.set("padding-bottom", uni_modules_riceUi_libs_use_useSafeArea_index.safeAreaInsets.value.bottom + "px");
    }
    return css;
  });
  const getOptionTextClass = (option) => {
    return new common_vendor.UTSJSONObject({
      "rice-cascader__option__text--disabled": option.disabled == true
    });
  };
  const getOptionTextStyle = (option, index) => {
    const css = /* @__PURE__ */ new Map();
    if (props.fontSize != null) {
      css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(props.fontSize));
    }
    const isSelected = getIsSelected(option, index);
    if (props.color != null && !isSelected && option.disabled != true) {
      css.set("color", props.color);
    }
    if (props.activeColor != null && isSelected) {
      css.set("color", props.activeColor);
    }
    return css;
  };
  const getOptionClass = (index) => {
    return new common_vendor.UTSJSONObject({
      "rice-cascader__option--first": index == 0 && slots["optionsTop"] == null,
      "rice-cascader__option--border": props.border == true
    });
  };
  const getSelectedOptions = () => {
    return selectedOptions.value.slice();
  };
  const closeIconStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      position: "absolute",
      right: "16px",
      top: "8px",
      zIndex: 9,
      padding: "4px 8px"
    });
  });
  common_vendor.onUnmounted(() => {
    if (timer != null)
      clearTimeout(timer);
  });
  __expose({
    getSelectedOptions
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: _ctx.usePopup
    }, _ctx.usePopup ? {
      b: common_vendor.gei(_ctx, ""),
      c: common_vendor.o(($event) => {
        return show.value = $event;
      }, "34"),
      d: common_vendor.p({
        ["z-index"]: _ctx.zIndex - 1,
        ["close-on-click-overlay"]: _ctx.closeOnClickOverlay,
        duration: 300,
        show: show.value,
        id: common_vendor.gei(_ctx, ""),
        class: "data-v-3fda1236"
      }),
      e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    } : {}, {
      f: common_vendor.unref(showCascader)
    }, common_vendor.unref(showCascader) ? common_vendor.e({
      g: common_vendor.unref(hasHeader)
    }, common_vendor.unref(hasHeader) ? common_vendor.e({
      h: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.title)
    }, common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.title) ? {
      i: common_vendor.t(_ctx.title),
      j: _ctx.titleAlign == "left" ? 1 : ""
    } : {}, {
      k: _ctx.closeable
    }, _ctx.closeable ? {
      l: common_vendor.o(clickClose, "03"),
      m: common_vendor.p({
        name: _ctx.closeIcon,
        size: "20px",
        ["custom-style"]: common_vendor.unref(closeIconStyle),
        class: "data-v-3fda1236"
      })
    } : {}) : {}, {
      n: common_vendor.o(($event) => {
        return common_vendor.isRef(tabIndex) ? tabIndex.value = $event : null;
      }, "bc"),
      o: common_vendor.p({
        list: common_vendor.unref(tabs),
        ["init-animate"]: false,
        shrink: true,
        ["title-active-color"]: _ctx.activeColor,
        ["line-color"]: _ctx.activeColor,
        ["title-inactive-color"]: "var(--rice-text-color)",
        ["line-mode"]: "zoom",
        modelValue: common_vendor.unref(tabIndex),
        class: "data-v-3fda1236",
        style: "padding:0 8px"
      }),
      p: common_vendor.p({
        hairline: true,
        class: "data-v-3fda1236",
        style: "margin-top:-2px;margin-bottom:0"
      }),
      q: common_vendor.f(common_vendor.unref(list), (item, index, i0) => {
        return {
          a: "optionsTop-" + i0,
          b: common_vendor.r("optionsTop", {
            tabIndex: common_vendor.unref(tabIndex)
          }, i0),
          c: common_vendor.f(item, (option, optionIndex, i1) => {
            return common_vendor.e({
              a: common_vendor.t(option.text),
              b: common_vendor.n(getOptionTextClass(option)),
              c: common_vendor.s(getOptionTextStyle(option, index)),
              d: getIsSelected(option, index)
            }, getIsSelected(option, index) ? {
              e: "3fda1236-4-" + i0 + "-" + i1,
              f: common_vendor.p({
                name: "checked",
                color: _ctx.activeColor,
                class: "data-v-3fda1236"
              })
            } : {}, {
              g: option.value,
              h: common_vendor.n(getOptionClass(optionIndex)),
              i: common_vendor.o(($event) => {
                return clickOption(option, index);
              }, option.value)
            });
          }),
          d: "optionsBottom-" + i0,
          e: common_vendor.r("optionsBottom", {
            tabIndex: common_vendor.unref(tabIndex)
          }, i0),
          f: index,
          g: common_vendor.o(onTouchMove, index)
        };
      }),
      r: common_vendor.unref(swiperIndex),
      s: common_vendor.sei("r0-3fda1236", "view", cascaderRef, {
        "k": "cascaderRef"
      }),
      t: common_vendor.n(common_vendor.unref(rootClass)),
      v: common_vendor.s(common_vendor.unref(rootStyle)),
      w: common_vendor.s(_ctx.customStyle),
      x: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    }) : {});
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3fda1236"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-cascader/rice-cascader.js.map
