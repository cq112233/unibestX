const devConfig = {
  name: "开发环境",
  baseURL: "https://ukw0y1.laf.run"
};
const testConfig = {
  name: "测试环境",
  baseURL: "https://ukw0y1.laf.run"
};
const prodConfig = {
  name: "生产环境",
  baseURL: "https://ukw0y1.laf.run"
};
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
  getCurrentEnv as a,
  getEnvLabel as b,
  getEnvConfigFor as c,
  getSystemEnv as g,
  resetEnv as r,
  setCurrentEnv as s
};
//# sourceMappingURL=env.js.map
