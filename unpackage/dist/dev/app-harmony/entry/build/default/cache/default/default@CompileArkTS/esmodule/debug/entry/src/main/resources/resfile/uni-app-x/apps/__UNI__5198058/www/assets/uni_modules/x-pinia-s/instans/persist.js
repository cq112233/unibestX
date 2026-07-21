import { b as PersistSerializer, P as PersistOptions } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/x-pinia-s/instans/types&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/x-pinia-s/instans/subscriptions&";

const defaultSerializer = new PersistSerializer(
  {
    serialize: (state) => {
      const s = UTS.JSON.stringify(state);
      return s == null ? "{}" : s;
    },
    deserialize: (raw) => {
      if (raw == "")
        return new UTSJSONObject({});
      const parsed = UTS.JSON.parseObject(raw);
      if (parsed == null)
        return new UTSJSONObject({});
      return parsed;
    }
  }
  /** 默认配置 */
);
function mergePersistOptions(opts = null) {
  const defaults = new PersistOptions({
    keyPrefix: "pinia:",
    includeStores: null,
    excludeStores: [],
    serializer: null
  });
  if (opts == null)
    return defaults;
  const o = opts;
  return new PersistOptions({
    keyPrefix: o.keyPrefix,
    includeStores: o.includeStores,
    excludeStores: o.excludeStores,
    serializer: o.serializer
  });
}
function shouldPersist(storeId, opts) {
  for (let i = 0; i < opts.excludeStores.length; i++) {
    if (opts.excludeStores[i] == storeId)
      return false;
  }
  if (opts.includeStores == null)
    return true;
  const list = opts.includeStores;
  for (let i = 0; i < list.length; i++) {
    if (list[i] == storeId)
      return true;
  }
  return false;
}
function createPersistPlugin(opts = null) {
  const config = mergePersistOptions(opts);
  const serializer = config.serializer == null ? defaultSerializer : config.serializer;
  const plugin = (ctx) => {
    const id = ctx.storeId;
    if (!shouldPersist(id, config))
      return null;
    const storageKey = config.keyPrefix + id;
    const storeBase = ctx.store;
    try {
      const raw = uni.getStorageSync(storageKey);
      if (raw != null && typeof raw == "string" && raw != "") {
        const restored = serializer.deserialize(raw);
        storeBase._hydrate(restored);
      }
    } catch (e) {
      uni.__f__("warn", "at uni_modules/x-pinia-s/instans/persist.uts:99", "[x-pinia-s][persist] restore failed for " + id + ":", e);
    }
    storeBase.$subscribe((_mutation, state) => {
      try {
        const str = serializer.serialize(state);
        uni.setStorageSync(storageKey, str);
      } catch (e) {
        uni.__f__("warn", "at uni_modules/x-pinia-s/instans/persist.uts:109", "[x-pinia-s][persist] save failed for " + id + ":", e);
      }
    });
  };
  return plugin;
}
export {
  createPersistPlugin as c
};
//# sourceMappingURL=persist.js.map
