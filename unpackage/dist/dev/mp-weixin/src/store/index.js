"use strict";
const uni_modules_xPiniaS_instans_types = require("../../uni_modules/x-pinia-s/instans/types.js");
require("../../common/vendor.js");
require("../../uni_modules/x-pinia-s/instans/subscriptions.js");
const uni_modules_xPiniaS_instans_createPinia = require("../../uni_modules/x-pinia-s/instans/createPinia.js");
const uni_modules_xPiniaS_instans_rootState = require("../../uni_modules/x-pinia-s/instans/rootState.js");
const uni_modules_xPiniaS_instans_persist = require("../../uni_modules/x-pinia-s/instans/persist.js");
require("./token.js");
require("./user.js");
require("./app.js");
const pinia = uni_modules_xPiniaS_instans_createPinia.createPinia();
pinia.use(uni_modules_xPiniaS_instans_persist.createPersistPlugin(new uni_modules_xPiniaS_instans_types.PersistOptions({
  keyPrefix: "pinia:",
  includeStores: ["token", "user", "app"],
  excludeStores: [],
  serializer: null
})));
uni_modules_xPiniaS_instans_rootState.setActivePinia(pinia);
exports.pinia = pinia;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/store/index.js.map
