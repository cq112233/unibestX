import "./type.js";
import "../../libs/utils/basic.js";
const { nextTick, onMounted, onUnmounted, onUnload, onPageShow, onPageHide } = globalThis.Vue;
class UseLoadingOptions extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          rotateRef: { type: "Unknown", optional: false },
          circularRef: { type: "Unknown", optional: false },
          timingFunction: { type: "Unknown", optional: false },
          mode: { type: "Unknown", optional: false },
          color: { type: "Unknown", optional: false },
          size: { type: "Unknown", optional: false },
          duration: { type: Number, optional: false }
        };
      },
      name: "UseLoadingOptions"
    };
  }
  constructor(options, metadata = UseLoadingOptions.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.rotateRef = this.__props__.rotateRef;
    this.circularRef = this.__props__.circularRef;
    this.timingFunction = this.__props__.timingFunction;
    this.mode = this.__props__.mode;
    this.color = this.__props__.color;
    this.size = this.__props__.size;
    this.duration = this.__props__.duration;
    delete this.__props__;
  }
}
function useLoading(options) {
  let aniIns = null;
  const startAnimate = async () => {
    var _a;
    const rotateRef = options.rotateRef, timingFunction = options.timingFunction, duration = options.duration;
    await nextTick();
    aniIns = (_a = rotateRef.value) === null || _a === void 0 ? null : _a.animate([new UTSJSONObject({
      transform: "rotate(0deg)"
    }), new UTSJSONObject({
      transform: "rotate(360deg)"
    })], new UTSJSONObject({
      duration,
      easing: timingFunction,
      iterations: Infinity
    }));
  };
  const init = async () => {
    await nextTick();
    startAnimate();
  };
  onMounted(() => {
    init();
  });
  onUnmounted(() => {
  });
  onUnload(() => {
    aniIns === null || aniIns === void 0 ? null : aniIns.finish();
  });
  onPageShow(() => {
  });
  onPageHide(() => {
  });
}
export {
  UseLoadingOptions as U,
  useLoading as u
};
//# sourceMappingURL=useLoading.js.map
