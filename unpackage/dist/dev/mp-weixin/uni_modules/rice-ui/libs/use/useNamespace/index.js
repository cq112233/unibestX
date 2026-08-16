"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_riceUi_libs_store_useConfig = require("../../store/useConfig.js");
class UseNamespace extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          b: { type: "Unknown", optional: false },
          e: { type: "Unknown", optional: false },
          m: { type: "Unknown", optional: false },
          is: { type: "Unknown", optional: false },
          theme: { type: "Unknown", optional: false }
        };
      },
      name: "UseNamespace"
    };
  }
  constructor(options, metadata = UseNamespace.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.b = this.__props__.b;
    this.e = this.__props__.e;
    this.m = this.__props__.m;
    this.is = this.__props__.is;
    this.theme = this.__props__.theme;
    delete this.__props__;
  }
}
const createBem = (block, blockSuffix, element, modifier) => {
  let cls = block;
  if (blockSuffix != "") {
    cls += `-${blockSuffix}`;
  }
  if (element != "") {
    cls += `__${element}`;
  }
  if (modifier != "") {
    cls += `--${modifier}`;
  }
  return cls;
};
function useNamespace(block) {
  const prefix = `rice-${block}`;
  const b = (blockSuffix) => {
    return createBem(prefix, blockSuffix, "", "");
  };
  const e = (element = null) => {
    return element != null && element != "" ? createBem(prefix, "", element, "") : "";
  };
  const m = (modifier = null) => {
    return modifier != null && modifier != "" ? createBem(prefix, "", "", modifier) : "";
  };
  const is = (name, state = null) => {
    const symbol = name.startsWith("-") || name.startsWith("_") ? "" : "--";
    return state == true ? prefix + symbol + name : "";
  };
  const theme = () => {
    return uni_modules_riceUi_libs_store_useConfig.isDark.value ? "rice-theme-dark" : "rice-theme-light";
  };
  return new UseNamespace({
    b,
    e,
    m,
    is,
    theme
  });
}
exports.useNamespace = useNamespace;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/libs/use/useNamespace/index.js.map
