import "../../libs/use/useCountDown/index.js";
import "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import { S as SubsectionItemRect } from "./type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, useModel: _useModel, mergeModels: _mergeModels, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, setSharedDataTemplateRef: _setSharedDataTemplateRef, setSharedDataClass: _setSharedDataClass, unref: _unref, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, createSharedDataFor: _createSharedDataFor } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceSubsectionRiceSubsection";
const { shallowRef, ref, nextTick, computed, watch, onMounted, onUnmounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-subsection",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "76dd6680",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-subsection/rice-subsection.uvue",
  __name: "rice-subsection",
  props: /* @__PURE__ */ _mergeModels(new UTSJSONObject({
    list: { default: () => {
      return [];
    }, type: Array },
    shape: { default: "square", type: String },
    initAnimate: { type: Boolean, default: false },
    duration: { default: 300, type: Number },
    beforeChange: { type: Function },
    barClass: { default: "", type: String },
    itemClass: { default: "", type: String },
    textClass: { default: "", type: String },
    activeTextClass: { default: "", type: String },
    inactiveTextClass: { default: "", type: String }
  }), new UTSJSONObject({
    "modelValue": {
      type: Number,
      default: 0
    },
    "modelModifiers": {}
  })),
  emits: /* @__PURE__ */ _mergeModels(["change", "clickSub"], ["update:modelValue"]),
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceSubsectionRiceSubsectionSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("subsection");
    const emit = __emit;
    const current = _useModel(__props, "modelValue");
    const props = __props;
    const itemRef = shallowRef([]);
    const barRef = shallowRef(null);
    const isFirstMove = ref(true);
    const itemRect = ref(new SubsectionItemRect({
      width: 0,
      height: 0
    }));
    const setBarPosition = (index) => {
      var _a2, _b;
      const x = index * itemRect.value.width;
      let duration = props.duration;
      if (!props.initAnimate && isFirstMove.value) {
        duration = 0;
      }
      (_a2 = barRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("transition-duration", `${duration}ms`);
      (_b = barRef.value) === null || _b === void 0 ? null : _b.style.setProperty("transform", `translateX(${x}px)`);
      isFirstMove.value = false;
    };
    const handleClick = async (index) => {
      if (current.value == index)
        return Promise.resolve(null);
      if (typeof props.beforeChange == "function") {
        const flag = await props.beforeChange(index);
        if (flag == false) {
          emit("clickSub", index);
          return Promise.resolve(null);
        }
      }
      current.value = index;
      setBarPosition(index);
      emit("change", index);
      emit("clickSub", index);
    };
    const init = async () => {
      var _a2, _b;
      await nextTick();
      if (itemRef.value.length <= 0)
        return Promise.resolve(null);
      const rect = await itemRef.value[0].getBoundingClientRectAsync();
      itemRect.value.width = rect.width;
      itemRect.value.height = rect.height;
      (_a2 = barRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("height", `${itemRect.value.height}px`);
      (_b = barRef.value) === null || _b === void 0 ? null : _b.style.setProperty("width", `${itemRect.value.width}px`);
      setBarPosition(current.value);
    };
    const subsectionRef = shallowRef(null);
    const resizeObserver = ref(null);
    let isFirstObserver = true;
    const lastRect = new SubsectionItemRect({
      height: 0,
      width: 0
    });
    const initObserver = async () => {
      if (subsectionRef.value == null)
        return Promise.resolve(null);
      if (lastRect.height == 0) {
        const rect = await subsectionRef.value.getBoundingClientRectAsync();
        lastRect.height = rect.height;
        lastRect.width = rect.width;
      }
      resizeObserver.value = new UniResizeObserver((entries) => {
        const target = UTS.arrayFind(entries, (item) => {
          return item.target == subsectionRef.value;
        });
        if (target != null) {
          const contentRect = target.contentRect;
          if (lastRect.height != contentRect.height || lastRect.width != contentRect.width) {
            if (!isFirstObserver) {
              init();
            }
            lastRect.height = contentRect.height;
            lastRect.width = contentRect.width;
          }
          isFirstObserver = false;
        }
      });
      resizeObserver.value.observe(subsectionRef.value);
    };
    const rootClass = computed(() => {
      return [
        ns.theme(),
        ns.is("round", props.shape == "round")
      ];
    });
    const barViewClass = computed(() => {
      const basic = [];
      if (props.shape == "round") {
        basic.push("rice-subsection__bar--round");
      }
      basic.push(props.barClass);
      return basic;
    });
    const getTextClass = (index) => {
      const basic = [props.textClass];
      if (index == current.value) {
        basic.push("rice-subsection__item__text--active");
        basic.push(props.activeTextClass);
      } else {
        basic.push(props.inactiveTextClass);
      }
      return basic;
    };
    watch(current, (newVal) => {
      setBarPosition(newVal);
    });
    watch(() => {
      return props.list;
    }, () => {
      init();
    }, {
      deep: true
    });
    onMounted(() => {
      init();
      nextTick(() => {
        initObserver();
      });
    });
    onUnmounted(() => {
      var _a2;
      if (subsectionRef.value != null) {
        (_a2 = resizeObserver.value) === null || _a2 === void 0 ? null : _a2.unobserve(subsectionRef.value);
      }
    });
    __expose({
      init
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      _setSharedDataTemplateRef(__sharedData, 1, (n0) => {
        _setTemplateRef(n0, barRef, null, "barRef");
      });
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 3, ["rice-subsection", _unref(rootClass)]);
        _setSharedDataClass(__sharedData, 4, ["rice-subsection__bar", _unref(barViewClass)]);
      });
      _createSharedDataFor(_setSharedDataScoped(__sharedData, 0, _createSharedDataVFor(__sharedDataScope, () => {
        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
      })), () => {
        return __props.list;
      }, (__sharedData_VFor0, _for_item0, _for_key0) => {
        _renderSharedDataEffect(() => {
          return _setSharedDataClass(__sharedData_VFor0, 6, ["rice-subsection__item", __props.itemClass]);
        });
        _createSharedDataSlot("default", {
          index: () => {
            return _for_key0.value;
          },
          subname: () => {
            return _for_item0.value;
          }
        }, (data) => {
          return _setSharedData(__sharedData_VFor0, 1, data);
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataClass(__sharedData_VFor0, 2, ["rice-subsection__item__text", getTextClass(_for_key0.value)]);
            _setSharedData(__sharedData_VFor0, 3, _toDisplayString(_for_item0.value));
          });
        });
        _setSharedDataEvent(__sharedData_VFor0, 4, () => {
          return handleClick(_for_key0.value);
        });
        _setSharedDataTemplateRef(__sharedData_VFor0, 5, (n6) => {
          _setTemplateRef(n6, itemRef, true, "itemRef");
        });
        return null;
      }, (__sharedData_VFor0, item, index) => {
        return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
      });
      _setSharedDataTemplateRef(__sharedData, 2, (n7) => {
        _setTemplateRef(n7, subsectionRef, null, "subsectionRef");
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=rice-subsection.js.map
