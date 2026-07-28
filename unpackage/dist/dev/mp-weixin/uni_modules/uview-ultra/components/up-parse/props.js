"use strict";
require("../../../../common/vendor.js");
const props = {
  props: {
    containerStyle: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    copyLink: {
      type: Boolean,
      default: false
    },
    domain: {
      type: String,
      default: ""
    },
    errorImg: {
      type: String,
      default: ""
    },
    lazyLoad: {
      type: Boolean,
      default: false
    },
    loadingImg: {
      type: String,
      default: ""
    },
    pauseVideo: {
      type: Boolean,
      default: false
    },
    previewImg: {
      type: Boolean,
      default: true
    },
    scrollTable: {
      type: Boolean,
      default: false
    },
    selectable: {
      type: Boolean,
      default: false
    },
    setTitle: {
      type: Boolean,
      default: true
    },
    showImgMenu: {
      type: Boolean,
      default: true
    },
    tagStyle: {
      type: Object,
      default() {
        return new UTSJSONObject({});
      }
    },
    useAnchor: {
      type: [Boolean, Number],
      default: false
    }
  }
};
exports.props = props;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-parse/props.js.map
