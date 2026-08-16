const { ref, onMounted, onUnmounted } = globalThis.Vue;
class SafeAreaInsets extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          top: { type: Number, optional: false },
          bottom: { type: Number, optional: false },
          statusBarHeight: { type: Number, optional: false }
        };
      },
      name: "SafeAreaInsets"
    };
  }
  constructor(options, metadata = SafeAreaInsets.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.top = this.__props__.top;
    this.bottom = this.__props__.bottom;
    this.statusBarHeight = this.__props__.statusBarHeight;
    delete this.__props__;
  }
}
const safeAreaInsets = ref(new SafeAreaInsets({
  top: 0,
  bottom: 0,
  statusBarHeight: 25
}));
function useSafeArea() {
  let timer = null;
  const getWindowInfo = () => {
    const windowInfo = uni.getWindowInfo();
    safeAreaInsets.value.bottom = windowInfo.safeAreaInsets.bottom;
    safeAreaInsets.value.top = windowInfo.safeAreaInsets.top;
    safeAreaInsets.value.statusBarHeight = windowInfo.statusBarHeight;
  };
  onMounted(() => {
    if (timer != null)
      clearTimeout(timer);
    timer = setTimeout(() => {
      getWindowInfo();
    }, 200);
  });
  onUnmounted(() => {
    if (timer != null)
      clearTimeout(timer);
  });
}
export {
  safeAreaInsets as s,
  useSafeArea as u
};
//# sourceMappingURL=index.js.map
