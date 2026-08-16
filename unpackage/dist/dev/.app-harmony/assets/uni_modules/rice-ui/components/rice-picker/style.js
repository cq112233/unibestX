import { i as isDark } from "../../libs/store/useConfig.js";
const { computed } = globalThis.Vue;
class UsePickerStyle extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          maskBottomStyle: { type: "Unknown", optional: false },
          maskStyle: { type: "Unknown", optional: false },
          maskTopStyle: { type: "Unknown", optional: false }
        };
      },
      name: "UsePickerStyle"
    };
  }
  constructor(options, metadata = UsePickerStyle.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.maskBottomStyle = this.__props__.maskBottomStyle;
    this.maskStyle = this.__props__.maskStyle;
    this.maskTopStyle = this.__props__.maskTopStyle;
    delete this.__props__;
  }
}
function usePickerStyle() {
  const maskTopStyle = computed(() => {
    return !isDark.value ? "background-image:linear-gradient(to bottom,rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.5))" : "background-image:linear-gradient(to bottom,rgba(24, 24, 24, 0.8),rgba(24, 24, 24, 0.5))";
  });
  const maskBottomStyle = computed(() => {
    return !isDark.value ? "background-image:linear-gradient(to top,rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.5))" : "background-image:linear-gradient(to top,rgba(24, 24, 24, 0.8),rgba(24, 24, 24, 0.5))";
  });
  const maskStyle = computed(() => {
    return isDark.value ? "background-image:linear-gradient(180deg,rgba(25,25,25,.9),rgba(25,25,25,.5)),linear-gradient(0deg,rgba(25,25,25,.9),rgba(25,25,25,.5))" : "background-image:linear-gradient(180deg,hsla(0,0%,100%,.9),hsla(0,0%,100%,.5)),linear-gradient(0deg,hsla(0,0%,100%,.9),hsla(0,0%,100%,.5))";
  });
  return new UsePickerStyle({
    maskTopStyle,
    maskBottomStyle,
    maskStyle
  });
}
export {
  usePickerStyle as u
};
//# sourceMappingURL=style.js.map
