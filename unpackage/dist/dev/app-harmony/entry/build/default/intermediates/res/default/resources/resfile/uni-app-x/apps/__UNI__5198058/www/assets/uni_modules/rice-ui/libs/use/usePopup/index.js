import { j as callInterceptor, I as InterceptorOption } from "../../utils/basic.js";
const { getCurrentInstance, ref, computed, toValue, nextTick, watch, onMounted, onUnmounted } = globalThis.Vue;
class UsePopup extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          realShow: { type: "Unknown", optional: false },
          doClose: { type: "Unknown", optional: false }
        };
      },
      name: "UsePopup"
    };
  }
  constructor(options, metadata = UsePopup.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.realShow = this.__props__.realShow;
    this.doClose = this.__props__.doClose;
    delete this.__props__;
  }
}
class UsePopupOptions extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          show: { type: "Unknown", optional: false },
          position: { type: "Unknown", optional: true },
          duration: { type: "Unknown", optional: true },
          opacity: { type: "Unknown", optional: true },
          zoom: { type: "Unknown", optional: true },
          zoomScale: { type: Number, optional: true },
          beforeClose: { type: "Unknown", optional: true }
        };
      },
      name: "UsePopupOptions"
    };
  }
  constructor(options, metadata = UsePopupOptions.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.show = this.__props__.show;
    this.position = this.__props__.position;
    this.duration = this.__props__.duration;
    this.opacity = this.__props__.opacity;
    this.zoom = this.__props__.zoom;
    this.zoomScale = this.__props__.zoomScale;
    this.beforeClose = this.__props__.beforeClose;
    delete this.__props__;
  }
}
function usePopup(target, options) {
  const show = options.show;
  const instance = getCurrentInstance();
  const realShow = ref(false);
  const closing = ref(false);
  let openTimer = null;
  let openedTimer = null;
  let closeTimer = null;
  const position = computed(() => {
    var _a;
    return toValue((_a = options.position) !== null && _a !== void 0 ? _a : "bottom");
  });
  const duration = computed(() => {
    var _a;
    return toValue((_a = options.duration) !== null && _a !== void 0 ? _a : 300);
  });
  const isOpacity = computed(() => {
    var _a;
    return toValue((_a = options.opacity) !== null && _a !== void 0 ? _a : false);
  });
  const isZoom = computed(() => {
    var _a;
    return toValue((_a = options.zoom) !== null && _a !== void 0 ? _a : true);
  });
  const handleOpenTimer = () => {
    if (openTimer != null)
      clearTimeout(openTimer);
    if (openedTimer != null)
      clearTimeout(openedTimer);
  };
  const handleCloseTimer = () => {
    if (closeTimer != null)
      clearTimeout(closeTimer);
  };
  const open = async () => {
    if (realShow.value)
      return Promise.resolve(null);
    realShow.value = true;
    await nextTick();
    instance.emit("open");
    handleOpenTimer();
    openTimer = setTimeout(() => {
      var _a, _b, _c, _d;
      (_a = target.value) === null || _a === void 0 ? null : _a.style.setProperty("transition-duration", `${duration.value}ms`);
      (_b = target.value) === null || _b === void 0 ? null : _b.style.setProperty("opacity", "1");
      if (position.value == "center") {
        (_c = target.value) === null || _c === void 0 ? null : _c.style.setProperty("transform", "translate(-50%, -50%) scale(1)");
      } else {
        (_d = target.value) === null || _d === void 0 ? null : _d.style.setProperty("transform", "translate(0, 0) scale(1)");
      }
      openedTimer = setTimeout(() => {
        instance.emit("opened");
      }, duration.value);
    }, 50);
  };
  const close = () => {
    var _a, _b, _c, _d, _e, _f, _g;
    if (!realShow.value)
      return null;
    instance.emit("close");
    const opacity = isOpacity.value ? "0" : "1";
    (_a = target.value) === null || _a === void 0 ? null : _a.style.setProperty("opacity", opacity);
    if (position.value == "top") {
      (_b = target.value) === null || _b === void 0 ? null : _b.style.setProperty("transform", "translate(0, -100%)");
    } else if (position.value == "bottom") {
      (_c = target.value) === null || _c === void 0 ? null : _c.style.setProperty("transform", "translate(0px, 100%)");
    } else if (position.value == "left") {
      (_d = target.value) === null || _d === void 0 ? null : _d.style.setProperty("transform", "translate(-100%, 0)");
    } else if (position.value == "right") {
      (_e = target.value) === null || _e === void 0 ? null : _e.style.setProperty("transform", "translate(100%, 0)");
    } else {
      const scale = isZoom.value == true ? (_f = options.zoomScale) !== null && _f !== void 0 ? _f : 0.6 : 1;
      (_g = target.value) === null || _g === void 0 ? null : _g.style.setProperty("transform", `translate(-50%, -50%) scale(${scale})`);
    }
    handleCloseTimer();
    closeTimer = setTimeout(() => {
      realShow.value = false;
      instance.emit("closed");
    }, duration.value);
  };
  const doClose = () => {
    var _a;
    if (!show.value || closing.value)
      return null;
    closing.value = true;
    const beforeClose = (_a = options.beforeClose) === null || _a === void 0 ? null : _a.value;
    if (typeof beforeClose == "function") {
      callInterceptor(beforeClose, new InterceptorOption({
        args: null,
        canceled: null,
        error: null,
        undone: null,
        done() {
          options.show.value = false;
        },
        complete() {
          closing.value = false;
        }
      }));
    } else {
      options.show.value = false;
      closing.value = false;
    }
  };
  watch(show, (newVal) => {
    if (newVal && !realShow.value) {
      open();
    }
    if (!newVal && realShow.value) {
      close();
    }
  });
  onMounted(() => {
    if (show.value) {
      realShow.value = true;
      open();
    }
  });
  onUnmounted(() => {
    handleOpenTimer();
    handleCloseTimer();
  });
  return new UsePopup({
    realShow,
    doClose
  });
}
export {
  UsePopupOptions as U,
  usePopup as u
};
//# sourceMappingURL=index.js.map
