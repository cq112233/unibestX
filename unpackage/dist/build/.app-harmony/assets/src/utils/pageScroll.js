const { onMounted, onUnmounted, ref } = globalThis.Vue;
const isPageScrollDisabled = ref(false);
const isPageRefresherDisabled = ref(false);
function setPageScrollEnabled(enabled) {
  isPageScrollDisabled.value = !enabled;
}
class PageScrollDetail extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          scrollTop: { type: Number, optional: false }
        };
      }
    };
  }
  constructor(options, metadata = PageScrollDetail.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.scrollTop = this.__props__.scrollTop;
    delete this.__props__;
  }
}
const EVENT_PAGE_SCROLL = "onNavbarPageScroll";
const EVENT_REACH_BOTTOM = "onNavbarReachBottom";
function onNavbarPageScroll(callback) {
  const handler = (data = null) => {
    if (data != null) {
      const obj = data;
      const topVal = obj["scrollTop"];
      const st = topVal != null ? topVal : 0;
      callback(new PageScrollDetail({ scrollTop: st }));
    } else {
      callback(new PageScrollDetail({ scrollTop: 0 }));
    }
  };
  onMounted(() => {
    uni.$on(EVENT_PAGE_SCROLL, handler);
  });
  onUnmounted(() => {
    uni.$off(EVENT_PAGE_SCROLL, handler);
  });
}
function onNavbarReachBottom(callback) {
  onMounted(() => {
    uni.$on(EVENT_REACH_BOTTOM, callback);
  });
  onUnmounted(() => {
    uni.$off(EVENT_REACH_BOTTOM, callback);
  });
}
export {
  isPageRefresherDisabled as a,
  onNavbarReachBottom as b,
  isPageScrollDisabled as i,
  onNavbarPageScroll as o,
  setPageScrollEnabled as s
};
