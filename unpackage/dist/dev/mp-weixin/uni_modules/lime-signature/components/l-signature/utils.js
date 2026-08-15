"use strict";
const common_vendor = require("../../../../common/vendor.js");
function getRect(selector, options = {}) {
  const typeDefault = "boundingClientRect";
  const { context, type = typeDefault } = options;
  return new Promise((resolve, reject) => {
    const dom = common_vendor.index.createSelectorQuery().in(context).select(selector);
    const result = (rect) => {
      if (rect) {
        resolve(rect);
      } else {
        reject();
      }
    };
    if (type == typeDefault) {
      dom[type](result).exec();
    } else {
      dom[type]({
        node: true,
        size: true,
        rect: true
      }, result).exec();
    }
  });
}
exports.getRect = getRect;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/lime-signature/components/l-signature/utils.js.map
