import { a as PiniaPluginContext } from "./types.js";
import { s as setActivePinia } from "./rootState.js";
import "./subscriptions.js";
const { effectScope } = globalThis.Vue
class Pinia {
  constructor() {
    this.state = new UTSJSONObject({});
    this._stores = /* @__PURE__ */ new Map();
    this._plugins = [];
    this._e = effectScope();
    this._installed = false;
  }
  /**
   * Vue app.use(pinia) 时被调用
   */
  install(app = null) {
    if (this._installed) {
      uni.__f__("warn", "at uni_modules/x-pinia-s/instans/createPinia.uts:39", "[x-pinia-s] pinia already installed on a Vue app");
      return null;
    }
    this._installed = true;
    setActivePinia(this);
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
  const ctx = new PiniaPluginContext({
    pinia,
    storeId: storeBase.$id,
    store,
    state: storeBase.$state
  });
  try {
    plugin(ctx);
  } catch (e) {
    uni.__f__("warn", "at uni_modules/x-pinia-s/instans/createPinia.uts:88", "[x-pinia-s] plugin error on store " + ctx.storeId + ":", e);
  }
}
function createPinia() {
  const pinia = new Pinia();
  setActivePinia(pinia);
  return pinia;
}
export {
  applyPluginToStore as a,
  createPinia as c
};
//# sourceMappingURL=createPinia.js.map
