"use strict";
const common_vendor = require("../../../../../common/vendor.js");
class UniImg {
  constructor() {
    this.tagName = "IMG";
    this.currentSrc = null;
    this.naturalHeight = 0;
    this.naturalWidth = 0;
    this.width = 0;
    this.height = 0;
  }
  set src(src) {
    this.currentSrc = src;
    common_vendor.index.getImageInfo({
      src,
      success: ({ width, height }) => {
        this.naturalWidth = this.width = width;
        this.naturalHeight = this.height = height;
        this.onload();
      },
      fail: () => {
        this.onerror();
      }
    });
  }
  get src() {
    return this.currentSrc;
  }
}
exports.UniImg = UniImg;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/e-chart/components/e-chart/js/UniImg.js.map
