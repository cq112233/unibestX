import { g as getActivePinia } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/x-pinia-s/instans/rootState&";
import { a as applyPluginToStore } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/x-pinia-s/instans/createPinia&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/x-pinia-s/instans/types&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/x-pinia-s/instans/subscriptions&";
const { effectScope } = globalThis.Vue
function defineStore(id, factory) {
  return () => {
    const pinia = getActivePinia();
    if (pinia == null) {
      throw new Error("[x-pinia-s] no active Pinia. 请先在 main.uts 中调用 createPinia() 并 app.use(pinia)");
    }
    const activePinia = pinia;
    const cached = UTS.mapGet(activePinia._stores, id);
    if (cached != null) {
      uni.__f__("log", "at uni_modules/x-pinia-s/instans/defineStore.uts:57", "[x-pinia-s] reuse cached store:", id);
      return cached;
    }
    uni.__f__("log", "at uni_modules/x-pinia-s/instans/defineStore.uts:60", "[x-pinia-s] create new store:", id);
    const holder = [];
    activePinia._e.run(() => {
      const childScope = effectScope();
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
      applyPluginToStore(activePinia, finalInstance, activePinia._plugins[i]);
    }
    return finalInstance;
  };
}
export {
  defineStore as d
};
//# sourceMappingURL=defineStore.js.map
