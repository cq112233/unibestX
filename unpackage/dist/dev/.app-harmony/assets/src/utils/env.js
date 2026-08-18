class EnvConfig extends UTS.UTSType {
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
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
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
const prodConfig = new EnvConfig({
  name: "生产环境",
  baseURL: "https://ukw0y1.laf.run"
});
const systemEnv = "development";
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
export {
  getEnvLabel as a,
  getEnvConfigFor as b,
  getSystemEnv as c,
  getCurrentEnv as g,
  resetEnv as r,
  setCurrentEnv as s
};
//# sourceMappingURL=env.js.map
