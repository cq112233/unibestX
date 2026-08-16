"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("./useChildren.js");
class UseParent extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          childIndex: { type: "Unknown", optional: false }
        };
      },
      name: "UseParent"
    };
  }
  constructor(options, metadata = UseParent.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.childIndex = this.__props__.childIndex;
    delete this.__props__;
  }
}
function useParent(componentName) {
  const parent = common_vendor.inject(`${componentName}-Relation`, null);
  if (parent != null) {
    const instance = common_vendor.getCurrentInstance();
    parent.link(instance);
    const childIndex = common_vendor.computed(() => {
      return parent.childrenList.value.indexOf(instance);
    });
    common_vendor.onUnmounted(() => {
      parent.unlink(instance);
    });
    return new UseParent({
      childIndex
    });
  }
  return new UseParent({
    childIndex: common_vendor.ref(-1)
  });
}
exports.useParent = useParent;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/libs/use/useRelation/useParent.js.map
