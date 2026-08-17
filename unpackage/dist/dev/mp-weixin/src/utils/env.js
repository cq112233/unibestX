"use strict";
const common_vendor = require("../../common/vendor.js");
var _a;
class EnvConfig extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          name: { type: String, optional: false },
          baseURL: { type: String, optional: false }
        };
      },
      name: "EnvConfig"
    };
  }
  constructor(options, metadata = EnvConfig.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.name = this.__props__.name;
    this.baseURL = this.__props__.baseURL;
    delete this.__props__;
  }
}
const devConfig = new EnvConfig({
  name: "开发环境",
  baseURL: "https://ukw0y1.laf.run"
});
const testConfig = new EnvConfig({
  name: "测试环境",
  baseURL: "https://ukw0y1.laf.run"
});
const prodConfig = new EnvConfig(
  {
    name: "生产环境",
    baseURL: "https://ukw0y1.laf.run"
  }
  // ----- 编译期自动识别 -----
  // uni-app X 中：HBuilderX「运行」→ 'development'，「发行」→ 'production'
  // H5/小程序发行时可通过 .env 系列配置 VITE_ENV_TYPE 强制指定环境（test / production）；
  // 打测试包时 pnpm env:test 会生成 .env.production.local 覆盖它
);
const buildEnvType = `${(_a = "development") !== null && _a !== void 0 ? _a : ""}`;
const systemEnv = buildEnvType == "test" ? "test" : "development";
let overrideEnv = null;
function getSystemEnv() {
  return systemEnv;
}
function getCurrentEnv() {
  const env = overrideEnv;
  if (env != null) {
    return env;
  }
  return systemEnv;
}
function setCurrentEnv(env) {
  overrideEnv = env;
}
function resetEnv() {
  overrideEnv = null;
}
function getEnvConfigFor(env) {
  if (env === "test") {
    return testConfig;
  }
  if (env === "production") {
    return prodConfig;
  }
  return devConfig;
}
function getEnvLabel(type) {
  if (type === "development") {
    return "开发";
  }
  if (type === "test") {
    return "测试";
  }
  if (type === "production") {
    return "生产";
  }
  return "未知";
}
exports.getCurrentEnv = getCurrentEnv;
exports.getEnvConfigFor = getEnvConfigFor;
exports.getEnvLabel = getEnvLabel;
exports.getSystemEnv = getSystemEnv;
exports.resetEnv = resetEnv;
exports.setCurrentEnv = setCurrentEnv;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/utils/env.js.map
