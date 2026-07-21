const { defineComponent, openBlock, createElementBlock, renderSlot } = globalThis.Vue
import { p as propsSwipeAction } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-swipe-action/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = defineComponent({
  name: "up-swipe-action",
  mixins: [mpMixin, mixin, propsSwipeAction],
  data() {
    return {};
  },
  provide() {
    return {
      swipeAction: this
    };
  },
  computed: {
    // 这里computed的变量，都是子组件up-swipe-action-item需要用到的，由于头条小程序的兼容性差异，子组件无法实时监听父组件参数的变化
    // 所以需要手动通知子组件，这里返回一个parentData变量，供watch监听，在其中去通知每一个子组件重新从父组件(up-swipe-action-item)
    // 拉取父组件新的变化后的参数
    parentDataCpu() {
    }
  },
  emits: ["opendItem:update"],
  watch: {
    // 当父组件需要子组件需要共享的参数发生了变化，手动通知子组件
    parentDataCpu() {
      if (this.children.length > 0) {
        this.children.map((child) => {
          child === null || child === void 0 ? null : child.$callMethod("updateParentData");
        });
      }
    },
    opendItem(val = null) {
      if (val == false) {
        this.closeAll();
      }
    }
  },
  created() {
    this.children = [];
  },
  methods: {
    closeOther(child) {
      if (this.$props["autoClose"] != null && this.$props["autoClose"]) {
        this.children.map((item, index) => {
          if (child !== item) {
            item === null || item === void 0 ? null : item.$callMethod("closeHandler");
          }
        });
      }
    },
    closeAll() {
      this.children.map((item, index) => {
        item === null || item === void 0 ? null : item.$callMethod("closeHandler");
      });
    },
    setOpendItem(ins = null) {
      this.$emit("opendItem:update", true);
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", { class: "up-swipe-action" }, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const __easycom_34 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-swipe-action/up-swipe-action.uvue"]]);
export {
  __easycom_34 as _
};
//# sourceMappingURL=up-swipe-action.js.map
