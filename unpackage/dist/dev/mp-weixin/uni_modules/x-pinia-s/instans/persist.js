"use strict";
const common_vendor = require("../../../common/vendor.js");
const uni_modules_xPiniaS_instans_types = require("./types.js");
require("./subscriptions.js");
const defaultSerializer = new uni_modules_xPiniaS_instans_types.PersistSerializer(
  {
    serialize: (state) => {
      const s = common_vendor.UTS.JSON.stringify(state);
      return s == null ? "{}" : s;
    },
    deserialize: (raw) => {
      if (raw == "")
        return new UTSJSONObject({});
      const parsed = common_vendor.UTS.JSON.parseObject(raw);
      if (parsed == null)
        return new UTSJSONObject({});
      return parsed;
    }
  }
  /** 默认配置 */
);
function mergePersistOptions(opts = null) {
  const defaults = new uni_modules_xPiniaS_instans_types.PersistOptions({
    keyPrefix: "pinia:",
    includeStores: null,
    excludeStores: [],
    serializer: null
  });
  if (opts == null)
    return defaults;
  const o = opts;
  return new uni_modules_xPiniaS_instans_types.PersistOptions({
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
      const raw = common_vendor.index.getStorageSync(storageKey);
      if (raw != null && typeof raw == "string" && raw != "") {
        const restored = serializer.deserialize(raw);
        storeBase._hydrate(restored);
      }
    } catch (e) {
      common_vendor.index.__f__("warn", "at uni_modules/x-pinia-s/instans/persist.uts:99", "[x-pinia-s][persist] restore failed for " + id + ":", e);
    }
    storeBase.$subscribe((_mutation, state) => {
      try {
        const str = serializer.serialize(state);
        common_vendor.index.setStorageSync(storageKey, str);
      } catch (e) {
        common_vendor.index.__f__("warn", "at uni_modules/x-pinia-s/instans/persist.uts:109", "[x-pinia-s][persist] save failed for " + id + ":", e);
      }
    });
  };
  return plugin;
}
exports.createPersistPlugin = createPersistPlugin;
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uni_modules/x-pinia-s/instans/persist.js.map
