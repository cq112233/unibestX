const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCopyUpCopy";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-copy"
  },
  __dynamicSharedData: true,
  __hash: "099f71fe",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-copy/up-copy.uvue",
  __name: "up-copy",
  props: {
    content: {
      type: String,
      default: ""
    },
    alertStyle: {
      type: String,
      default: "toast"
    },
    notice: {
      type: String,
      default: "复制成功"
    }
  },
  emits: ["success"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpCopyUpCopySharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const handleClick = () => {
      const rawContent = props.content;
      if (rawContent == null || rawContent == "") {
        uni.showToast({
          title: "暂无",
          icon: "none",
          duration: 2e3
        });
        return null;
      }
      const content = `${rawContent}`;
      uni.setClipboardData({
        data: content,
        success: function() {
          const alertStyle = props.alertStyle == null ? "toast" : props.alertStyle;
          const notice = props.notice == null ? "复制成功" : props.notice;
          if (alertStyle == "modal") {
            uni.showModal(new UTSJSONObject({
              title: "提示",
              content: notice
            }));
          } else {
            uni.showToast({
              title: notice,
              icon: "none"
            });
          }
          emit("success");
        },
        fail: function() {
          uni.showToast({
            title: "复制失败",
            icon: "none",
            duration: 3e3
          });
        }
      });
    };
    return () => {
      "raw js";
      _createSharedDataSlot("default", null, null, () => {
      });
      _setSharedDataEvent(__sharedData, 0, handleClick);
      return __sharedData;
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=up-copy.js.map
