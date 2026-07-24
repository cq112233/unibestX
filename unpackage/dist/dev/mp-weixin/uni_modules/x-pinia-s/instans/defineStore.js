"use strict";
const common_vendor = require("../../../common/vendor.js");
const uni_modules_xPiniaS_instans_rootState = require("./rootState.js");
const uni_modules_xPiniaS_instans_createPinia = require("./createPinia.js");
require("./types.js");
require("./subscriptions.js");
function defineStore(id, factory) {
  return () => {
    const pinia = uni_modules_xPiniaS_instans_rootState.getActivePinia();
    if (pinia == null) {
      throw new Error("[x-pinia-s] no active Pinia. 请先在 main.uts 中调用 createPinia() 并 app.use(pinia)");
    }
    const activePinia = pinia;
    const cached = common_vendor.UTS.mapGet(activePinia._stores, id);
    if (cached != null) {
      common_vendor.index.__f__("log", "at uni_modules/x-pinia-s/instans/defineStore.uts:57", "[x-pinia-s] reuse cached store:", id);
      return cached;
    }
    common_vendor.index.__f__("log", "at uni_modules/x-pinia-s/instans/defineStore.uts:60", "[x-pinia-s] create new store:", id);
    const holder = [];
    activePinia._e.run(() => {
      const childScope = common_vendor.effectScope();
      childScope.run(() => {
        const created = factory();
        const base = created;
        base._scope = childScope;
        base._setupBy(id, activePinia);
        holder.push(created);
      });
    });
    const finalInstance = holder[0];
    activePinia._stores.set(id, finalInstance);
    for (let i = 0; i < activePinia._plugins.length; i++) {
      uni_modules_xPiniaS_instans_createPinia.applyPluginToStore(activePinia, finalInstance, activePinia._plugins[i]);
    }
    return finalInstance;
  };
}
exports.defineStore = defineStore;
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uni_modules/x-pinia-s/instans/defineStore.js.map
