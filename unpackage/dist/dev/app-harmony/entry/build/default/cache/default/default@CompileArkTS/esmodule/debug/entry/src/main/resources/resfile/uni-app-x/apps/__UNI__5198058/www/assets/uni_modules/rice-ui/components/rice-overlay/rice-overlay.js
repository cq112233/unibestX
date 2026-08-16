import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useCountDown/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/store/useConfig&";
import { u as useNamespace } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useNamespace/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/usePopup/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useChildren&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useParent&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useSafeArea/index&";
import { u as useTouch } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useTouch/index&";
import { h as hasStrValue } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/basic&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-overlay/type&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, useModel: _useModel, mergeModels: _mergeModels, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, unref: _unref, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, setSharedDataTemplateRef: _setSharedDataTemplateRef, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceOverlayRiceOverlay";
const { ref, nextTick, watch, computed, onUnmounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-overlay",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "6f7044a4",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-overlay/rice-overlay.uvue",
  __name: "rice-overlay",
  props: /* @__PURE__ */ _mergeModels(new UTSJSONObject({
    zIndex: { default: 998, type: Number },
    closeOnClickOverlay: { type: Boolean, default: true },
    duration: { default: 300, type: Number },
    bgColor: { type: String },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  }), new UTSJSONObject({
    "show": {
      type: Boolean,
      default: false
    },
    "showModifiers": {}
  })),
  emits: /* @__PURE__ */ _mergeModels(["click", "opened", "closed"], ["update:show"]),
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceOverlayRiceOverlaySharedData", sharedDataClassId: 0 })));
    const emit = __emit;
    const ns = useNamespace("overlay");
    const touch = useTouch();
    const props = __props;
    const show = _useModel(__props, "show");
    const realShow = ref(false);
    const transitionClass = ref("");
    const overlayClick = (e) => {
      e.stopPropagation();
      if (!touch.isTap.value)
        return null;
      if (props.closeOnClickOverlay) {
        show.value = false;
      }
      emit("click", e);
    };
    const onTouchstart = (e) => {
      touch.start(e);
    };
    const onTouchmove = (e) => {
      touch.move(e);
    };
    const overlayRef = ref(null);
    let timer1 = null;
    let timer2 = null;
    const open = async () => {
      realShow.value = true;
      await nextTick();
      if (timer1 != null)
        clearTimeout(timer1);
      timer1 = setTimeout(() => {
        var _a2;
        (_a2 = overlayRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("transition-duration", props.duration + "ms");
        transitionClass.value = "rice-overlay--show";
        emit("opened");
      }, 30);
    };
    const close = () => {
      transitionClass.value = "";
      if (timer2 != null)
        clearTimeout(timer2);
      timer2 = setTimeout(() => {
        realShow.value = false;
        emit("closed");
      }, props.duration);
    };
    watch(show, (newVal) => {
      if (newVal && !realShow.value) {
        open();
      }
      if (!newVal && realShow.value) {
        close();
      }
    }, {
      immediate: true
    });
    const rootClass = computed(() => {
      return [
        "rice-overlay",
        ns.theme(),
        transitionClass.value
      ];
    });
    const overlayStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      css.set("z-index", props.zIndex);
      if (hasStrValue(props.bgColor)) {
        css.set("background-color", props.bgColor);
      }
      return css;
    });
    onUnmounted(() => {
      if (timer1 != null)
        clearTimeout(timer1);
      if (timer2 != null)
        clearTimeout(timer2);
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(_unref(realShow)));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 5, _unref(rootClass));
          _setSharedDataStyle(__sharedData, 6, [_unref(overlayStyle), __props.customStyle]);
        });
        _createSharedDataSlot("default", null, null);
        _setSharedDataEvent(__sharedData, 1, onTouchstart);
        _setSharedDataEvent(__sharedData, 2, overlayClick);
        _setSharedDataEvent(__sharedData, 3, onTouchmove);
        _setSharedDataTemplateRef(__sharedData, 4, (n3) => {
          _setTemplateRef(n3, overlayRef, null, "overlayRef");
        });
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=rice-overlay.js.map
