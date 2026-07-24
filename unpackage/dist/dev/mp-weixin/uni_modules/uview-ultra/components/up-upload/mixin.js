"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/function/test.js");
require("../../libs/function/digit.js");
require("../../libs/config/config.js");
const mixinUpload = {
  watch: {
    // 监听accept的变化，判断是否符合个平台要求
    // 只有微信小程序才支持选择媒体，文件类型，所以这里做一个判断提示
    accept: new common_vendor.UTSJSONObject({
      immediate: true,
      handler(val) {
      }
    })
  }
};
exports.mixinUpload = mixinUpload;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-upload/mixin.js.map
