"use strict";
const common_vendor = require("../../../common/vendor.js");
const uni_modules_xPiniaS_instans_types = require("./types.js");
const uni_modules_xPiniaS_instans_rootState = require("./rootState.js");
require("./subscriptions.js");
class Pinia {
  constructor() {
    this.state = new UTSJSONObject({});
    this._stores = /* @__PURE__ */ new Map();
    this._plugins = [];
    this._e = common_vendor.effectScope();
    this._installed = false;
  }
  /**
   * Vue app.use(pinia) 时被调用
   */
  install(app = null) {
    if (this._installed) {
      common_vendor.index.__f__("warn", "at uni_modules/x-pinia-s/instans/createPinia.uts:39", "[x-pinia-s] pinia already installed on a Vue app");
      return null;
    }
    this._installed = true;
    uni_modules_xPiniaS_instans_rootState.setActivePinia(this);
  }
  /**
   * 注册插件
   */
  use(plugin) {
    this._plugins.push(plugin);
    const piniaRef = this;
    this._stores.forEach((store = null, _id) => {
      applyPluginToStore(piniaRef, store, plugin);
    });
    return this;
  }
}
function applyPluginToStore(pinia, store = null, plugin) {
  const storeBase = store;
  const ctx = new uni_modules_xPiniaS_instans_types.PiniaPluginContext({
    pinia,
    storeId: storeBase.$id,
    store,
    state: storeBase.$state
  });
  try {
    plugin(ctx);
  } catch (e) {
    common_vendor.index.__f__("warn", "at uni_modules/x-pinia-s/instans/createPinia.uts:88", "[x-pinia-s] plugin error on store " + ctx.storeId + ":", e);
  }
}
function createPinia() {
  const pinia = new Pinia();
  uni_modules_xPiniaS_instans_rootState.setActivePinia(pinia);
  return pinia;
}
exports.applyPluginToStore = applyPluginToStore;
exports.createPinia = createPinia;
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uni_modules/x-pinia-s/instans/createPinia.js.map
